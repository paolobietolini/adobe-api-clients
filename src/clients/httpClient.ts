import type { Method, QueryParams, TokenCached } from "../utils/types/index.ts";
import { AdobeApiError } from "../utils/errors.ts";
import type { AuthClient } from "./authClient.ts";

function toSearchParams(params?: QueryParams): URLSearchParams {
  const searchParams = new URLSearchParams();

  if (!params) return searchParams;

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    searchParams.set(
      key,
      Array.isArray(value) ? value.join(",") : String(value),
    );
  }

  return searchParams;
}

type BuildOptions = {
  method?: Method;
  path?: string;
  headers?: HeadersInit;
  body?: BodyInit;
  params?: QueryParams;
};

export class HttpClient {
  readonly #auth: AuthClient;
  readonly #baseUrl: string;
  readonly #pathPrefix: string;
  readonly #defaultHeaders: Record<string, string>;

  constructor(
    auth: AuthClient,
    baseUrl: string,
    pathPrefix = "",
    defaultHeaders: Record<string, string> = {},
  ) {
    this.#auth = auth;
    this.#baseUrl = baseUrl;
    this.#pathPrefix = pathPrefix;
    this.#defaultHeaders = defaultHeaders;
  }

  #build(token: TokenCached, options: BuildOptions): Request {
    const { method, path, headers, body, params } = options;
    const fullPath = [this.#pathPrefix, path ?? ""]
      .map((p) => p?.trim())
      .filter(Boolean)
      .join("/");
    const resource = new URL(fullPath, this.#baseUrl);
    resource.search = toSearchParams(params).toString();

    return new Request(resource, {
      method,
      headers: {
        // JSON by default when there is a body; a default/explicit header wins (e.g. application/vnd.api+json)
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
        ...this.#defaultHeaders,
        ...headers,
        Authorization: `Bearer ${token.access_token}`,
        "x-api-key": this.#auth.clientId,
      },
      body,
    });
  }

  async #request(build: (token: TokenCached) => Request): Promise<Response> {
    let token = await this.#auth.getToken();
    let res = await fetch(build(token));
    if (res.status === 401) {
      token = await this.#auth.invalidate(token);
      res = await fetch(build(token)); // one retry only; a second 401 goes to the caller
    }
    return res;
  }

  async send<T>(
    method: Method,
    path: string,
    opts: { params?: QueryParams; body?: unknown } = {},
  ): Promise<T> {
    const hasBody = opts.body !== undefined;
    const res = await this.#request((token) =>
      this.#build(token, {
        method,
        path,
        params: opts.params,
        body: hasBody ? JSON.stringify(opts.body) : undefined,
      }),
    );
    if (!res.ok) {
      const text = await res.text();
      throw new AdobeApiError(
        res.status,
        res.statusText || "Error",
        `${method} ${path}: ${text}`,
        text,
      );
    }
    // e.g. 204 No Content on delete, or a plain-text body
    const text = await res.text();
    if (!text) return undefined as T;
    const isJson = res.headers.get("content-type")?.includes("json");
    return (isJson ? JSON.parse(text) : text) as T;
  }

  get<T>(path: string, params?: QueryParams) {
    return this.send<T>("GET", path, { params });
  }

  post<T>(path: string, body: unknown, params?: QueryParams) {
    return this.send<T>("POST", path, { body, params });
  }

  put<T>(path: string, body: unknown, params?: QueryParams) {
    return this.send<T>("PUT", path, { body, params });
  }

  patch<T>(path: string, body: unknown, params?: QueryParams) {
    return this.send<T>("PATCH", path, { body, params });
  }

  delete<T>(path: string, params?: QueryParams) {
    return this.send<T>("DELETE", path, { params });
  }
}
