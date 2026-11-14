export function normalizeScope(scope: string): string {
  return scope
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .sort()
    .join(",");
}
