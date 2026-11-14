import { join } from "node:path";
import { AdobeApiError } from "../utils/errors.ts";
import { deleteCache, readCache, writeCache } from "../utils/store.ts";
import { normalizeScope } from "../utils/strings.ts";
import { isTokenResponse } from "../utils/token.ts";
import type {
  TokenCached,
  TokenResponse,
  AuthCredentials,
} from "../utils/types/index.ts";
import { cacheKey } from "../utils/crypto.ts";

const EXPIRES_BUFFER = 60 * 30 * 1000; // 30 minutes

function isTokenExpired(token: TokenCached): boolean {
  // never let the buffer exceed 10% of the lifetime,
  // or short-lived tokens refetch every call
  const buffer = Math.min(EXPIRES_BUFFER, token.expires_in * 1000 * 0.1);
  return token.expires_at - buffer < Date.now();
}

export class AuthClient {
  #inflight: Promise<TokenCached> | null = null;
  #token: TokenCached | null = null;
  #rejected: string | null = null;
  readonly #clientId: string;
  readonly #clientSecret: string;
  readonly #scope: string;
  readonly #key: string;
  readonly #cacheFile: string;
  constructor(
    { clientId, clientSecret, scope }: AuthCredentials,
    cacheDir = ".cache",
  ) {
    this.#clientId = clientId;
    this.#clientSecret = clientSecret;
    this.#scope = normalizeScope(scope);
    this.#key = cacheKey(clientId, this.#scope);
    this.#cacheFile = join(cacheDir, `adobe-token-${this.#key}.json`);
  }
  async #requestToken(): Promise<TokenResponse> {
    const resource = new URL("ims/token/v3", "https://ims-na1.adobelogin.com");
    const options: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: this.#clientId,
        client_secret: this.#clientSecret,
        scope: this.#scope,
        grant_type: "client_credentials",
      }),
    };
    const request: Request = new Request(resource, options);

    const response = await fetch(request);

    if (!response.ok) {
      throw new AdobeApiError(
        response.status,
        response.statusText,
        await response.text(),
      );
    }
    const body: unknown = await response.json();
    if (!isTokenResponse(body)) {
      throw new AdobeApiError(
        response.status,
        "Malformed token response",
        JSON.stringify(body),
      );
    }

    return body;
  }

  async #readValidCache(): Promise<TokenCached | null> {
    try {
      const cached = await readCache(this.#cacheFile);
      if (
        cached &&
        cached.cache_key === this.#key &&
        cached.access_token !== this.#rejected &&
        !isTokenExpired(cached)
      ) {
        return cached;
      }
    } catch (err) {
      console.warn(
        `Failed to read token cache ${this.#cacheFile}, fetching a new token:`,
        err,
      );
    }
    return null;
  }

  async #fetchAndStore() {
    const response = await this.#requestToken();
    const token: TokenCached = {
      ...response,
      expires_at: Date.now() + response.expires_in * 1000,
      cache_key: this.#key,
    };
    this.#token = token;
    this.#rejected = null;
    try {
      await writeCache(this.#cacheFile, JSON.stringify(token));
    } catch (err) {
      console.warn(`Failed to write token cache to ${this.#cacheFile}:`, err);
    }
    return token;
  }

  #load(): Promise<TokenCached> {
    this.#inflight ??= (async () => {
      const cached = await this.#readValidCache();
      if (cached) {
        this.#token = cached;
        return cached;
      }
      return this.#fetchAndStore();
    })().finally(() => (this.#inflight = null));
    return this.#inflight;
  }
  get clientId() {
    return this.#clientId;
  }
  
  async getToken(): Promise<TokenCached> {
    if (this.#token && !isTokenExpired(this.#token)) return this.#token;
    return this.#load();
  }
  /** Call when the API answered 401 for `rejected`.
   *  Returns a token to retry with.
   */
  async invalidate(rejected: TokenCached): Promise<TokenCached> {
    if (this.#inflight) return this.#inflight;
    if (
      this.#token &&
      this.#token.access_token !== rejected.access_token &&
      !isTokenExpired(this.#token)
    ) {
      return this.#token;
    }
    this.#rejected = rejected.access_token;
    this.#token = null;
    try {
      await deleteCache(this.#cacheFile);
    } catch (err) {
      console.warn(`Failed to delete token cache ${this.#cacheFile}:`, err);
    }
    return this.#load();
  }
}
