import type { TokenCached } from "./types.ts"
export function isTokenData(data: unknown): data is TokenCached {
  if (data === null) return false;

  const token = data as Record<string, unknown>;
  return (
    typeof token.access_token === "string" &&
    typeof token.token_type === "string" &&
    typeof token.expires_at === "number" &&
    typeof token.expires_in === "number" &&
    Number.isFinite(token.expires_at)
  );
}
