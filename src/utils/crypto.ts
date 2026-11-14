import { createHash } from "node:crypto";
import { normalizeScope } from "./strings.ts";

export function cacheKey(
  clientId: string,
  scope: string,
  host = "ims-na1.adobelogin.com",
): string {
  return createHash("sha-256")
    .update(JSON.stringify([host, clientId, normalizeScope(scope)]))
    .digest("hex")
    .slice(0, 16);
}
