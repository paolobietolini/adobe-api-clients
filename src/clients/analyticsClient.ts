import type {
  TokenCached,
  AnnotationParams,
  AnnotationList,
  Method,
  QueryParams,
} from "../utils/types.ts";
import { AuthClient } from "./authClient.ts";

function toSearchParams(params?: QueryParams): URLSearchParams {
  const searchParams = new URLSearchParams();

  if (!params) return searchParams;

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    searchParams.set(key, Array.isArray(value) ? value.join(",") : String(value));
  }

  return searchParams;
}
class analyticsClient {
  auth: AuthClient;
  globalCompanyId: string;
  #defaultPath: string;
  constructor(auth: AuthClient, globalCompanyId: string) {
    this.auth = auth;
    this.globalCompanyId = globalCompanyId;
    this.#defaultPath = `api/${this.globalCompanyId}`;
  }
  #build(
    token: TokenCached,
    options: {
      method?: Method;
      path?: string;
      headers?: HeadersInit;
      body?: BodyInit;
      params?: QueryParams;
    },
  ): Request {
    let { method, path, headers, body, params } = options;
    path = [this.#defaultPath, path ?? ""]
      .map((p) => p?.trim())
      .filter(Boolean)
      .join("/");
    const resource = new URL(path, "https://analytics.adobe.io");

    resource.search = toSearchParams(params).toString();

    const opts: RequestInit = {
      method,
      headers: {
        ...headers,
        Authorization: `Bearer ${token.access_token}`,
        "x-api-key": `${this.auth.clientId}`,
      },
      body,
    };
    return new Request(resource, opts);
  }

  async #request(build: (token: TokenCached) => Request): Promise<Response> {
    let token = await this.auth.getToken();
    let res = await fetch(build(token));
    if (res.status === 401) {
      token = await this.auth.invalidate(token);
      res = await fetch(build(token)); // one retry only; a second 401 goes to the caller
    }
    return res;
  }

  async annotations(params: AnnotationParams = {}): Promise<AnnotationList> {
    const res = await this.#request((token) =>
      this.#build(token, {
        method: "GET",
        path: "annotations",
        params,
      }),
    );
    if (!res.ok) {
      throw new Error(
        `annotations request failed: ${res.status} ${await res.text()}`,
      );
    }
    return (await res.json()) as AnnotationList;
  }
}
