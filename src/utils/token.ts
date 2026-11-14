import type { TokenCached, TokenResponse } from "./types.ts";
export function isTokenData(data: unknown): data is TokenCached {
  if (!isTokenResponse(data)) return false;
  const t = data as unknown as Record<string, unknown>;

  return (
    typeof t.expires_at === "number" &&
    Number.isFinite(t.expires_at) &&
    typeof t.cache_key === "string"
  );
}
export function isTokenResponse(data: unknown): data is TokenResponse {
  if (typeof data !== "object" || data === null) return false;

  const t = data as Record<string, unknown>;

  return (
    typeof t.token_type === "string" &&
    typeof t.access_token === "string" &&
    t.access_token.length > 0 &&
    typeof t.expires_in === "number" &&
    Number.isFinite(t.expires_in)
  );
}
