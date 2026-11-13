import { AdobeApiError } from "../utils/errors.js";
import { readCache, writeCache } from "../utils/store.js";
import type { TokenCached, TokenResponse, AuthCredentials } from "../utils/types.js";



const EXPIRES_BUFFER = 60 * 30 * 1000; // 30 minutes

function isTokenExpired(token: TokenCached) {
  return token === null
    ? false
    : (token.expires_at - EXPIRES_BUFFER) < Date.now();
}

export class AuthClient {
  #inflight: Promise<TokenCached> | null = null;
  #token: TokenCached | null = null;
  private clientId: string;
  private clientSecret: string;
  private scope: string;
  private cacheFile: string;
  constructor(
    { clientId, clientSecret, scope }: AuthCredentials,
    cacheFile = ".cache/adobe-token.json"
  ) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.scope = scope;
    this.cacheFile = cacheFile;
  }
  async #requestToken(): Promise<TokenResponse> {
    const resource = new URL("ims/token/v3", "https://ims-na1.adobelogin.com");
    const options: RequestInit = {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        scope: this.scope,
        'grant_type': 'client_credentials',
      })
    };
    const request: Request = new Request(resource, options);

    const response = await fetch(request);

    if (!response.ok) {
      throw new AdobeApiError(response.status, response.statusText, await response.text());
    }
    return response.json() as Promise<TokenResponse>;
  }
  async #InFlight(): Promise<TokenCached> {
    this.#inflight ??= (async () => {
      const response = await this.#requestToken();
      const token = {
        ...response,
        expires_at: response.expires_in * 1000 + Date.now(),
      };

      this.#token = token;
      await writeCache(this.cacheFile, JSON.stringify(token));
      return this.#token;
    }
    )().finally(() => { this.#inflight = null })

    return this.#inflight;
  }

  async getToken(): Promise<TokenCached> {
    if (this.#token && !isTokenExpired(this.#token)) {
      return this.#token;
    }
    let token = await readCache(this.cacheFile);
    if (!isTokenExpired(token)) {
      this.#token = token;
      return this.#token;
    }
    return await this.#InFlight();
  }
}
