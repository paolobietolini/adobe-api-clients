import { afterEach, beforeEach, describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readdir, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { AuthClient } from "../src/clients/authClient.ts";
import { AdobeApiError } from "../src/utils/errors.ts";
import { cacheKey } from "../src/utils/crypto.ts";
import { normalizeScope } from "../src/utils/strings.ts";

const creds = { clientId: "client-a", clientSecret: "secret", scope: "openid,AdobeID" };

let dir: string;
let calls: number;
let fetchMock: ReturnType<typeof mock.method>;

type Reply = { status?: number; body?: unknown; expires_in?: number };

/** Installs a fake fetch. Each call returns tok-1, tok-2, ... unless `reply` overrides. */
function installFetch(reply: (n: number) => Reply = () => ({})) {
  calls = 0;
  fetchMock = mock.method(globalThis, "fetch", async () => {
    const n = ++calls;
    await new Promise((r) => setImmediate(r)); // let concurrent callers pile up
    const { status = 200, body, expires_in = 86400 } = reply(n);
    const payload = body ?? { access_token: `tok-${n}`, token_type: "bearer", expires_in };
    return new Response(typeof payload === "string" ? payload : JSON.stringify(payload), {
      status,
      statusText: status === 200 ? "OK" : "Error",
    });
  });
}

const keyFor = (c: typeof creds) => cacheKey(c.clientId, normalizeScope(c.scope));
const cacheFiles = () => readdir(dir);

async function seedCache(c: typeof creds, overrides: Record<string, unknown> = {}) {
  const key = keyFor(c);
  const token = {
    access_token: "seeded",
    token_type: "bearer",
    expires_in: 86400,
    expires_at: Date.now() + 86400_000,
    cache_key: key,
    ...overrides,
  };
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, `adobe-token-${key}.json`), JSON.stringify(token));
  return token;
}

beforeEach(async () => {
  dir = await mkdtemp(join(tmpdir(), "auth-test-"));
  mock.method(console, "warn", () => {}); // keep output clean
  installFetch();
});

afterEach(async () => {
  mock.restoreAll();
  await rm(dir, { recursive: true, force: true });
});

describe("getToken", () => {
  it("fetches a token and writes it to the cache", async () => {
    const auth = new AuthClient(creds, dir);
    const token = await auth.getToken();

    assert.equal(token.access_token, "tok-1");
    assert.equal(calls, 1);
    const files = await cacheFiles();
    assert.equal(files.length, 1);
    const saved = JSON.parse(await readFile(join(dir, files[0]!), "utf-8"));
    assert.equal(saved.access_token, "tok-1");
    assert.equal(saved.cache_key, keyFor(creds));
  });

  it("serves from memory on the second call", async () => {
    const auth = new AuthClient(creds, dir);
    await auth.getToken();
    await auth.getToken();
    assert.equal(calls, 1);
  });

  it("serves from disk for a new instance", async () => {
    await new AuthClient(creds, dir).getToken();
    const second = await new AuthClient(creds, dir).getToken();
    assert.equal(second.access_token, "tok-1");
    assert.equal(calls, 1);
  });

  it("dedupes concurrent calls into one request", async () => {
    const auth = new AuthClient(creds, dir);
    const tokens = await Promise.all(Array.from({ length: 10 }, () => auth.getToken()));
    assert.equal(calls, 1);
    assert.ok(tokens.every((t) => t.access_token === "tok-1"));
  });

  it("refetches when the cached token is expired", async () => {
    await seedCache(creds, { expires_at: Date.now() - 1000 });
    const token = await new AuthClient(creds, dir).getToken();
    assert.equal(token.access_token, "tok-1");
    assert.equal(calls, 1);
  });

  it("does not refetch on every call for short-lived tokens", async () => {
    installFetch(() => ({ expires_in: 600 })); // 10 min < the 30 min buffer
    const auth = new AuthClient(creds, dir);
    await auth.getToken();
    await auth.getToken();
    assert.equal(calls, 1);
  });

  it("recovers from a corrupted cache file", async () => {
    const key = keyFor(creds);
    await writeFile(join(dir, `adobe-token-${key}.json`), "{not json");
    const token = await new AuthClient(creds, dir).getToken();
    assert.equal(token.access_token, "tok-1");
    assert.equal(calls, 1);
  });

  it("ignores a cache file with an invalid shape", async () => {
    await seedCache(creds, { access_token: 42 });
    const token = await new AuthClient(creds, dir).getToken();
    assert.equal(token.access_token, "tok-1");
  });

  it("still returns the token when the cache cannot be written", async () => {
    // a file where the directory should be makes mkdir fail
    const blocker = join(dir, "blocker");
    await writeFile(blocker, "x");
    const token = await new AuthClient(creds, join(blocker, "sub")).getToken();
    assert.equal(token.access_token, "tok-1");
  });
});

describe("errors", () => {
  it("throws AdobeApiError on a non-2xx response", async () => {
    installFetch(() => ({ status: 401, body: "bad credentials" }));
    await assert.rejects(new AuthClient(creds, dir).getToken(), AdobeApiError);
  });

  it("throws on a malformed 200 response and caches nothing", async () => {
    installFetch(() => ({ body: { nope: true } }));
    await assert.rejects(new AuthClient(creds, dir).getToken(), AdobeApiError);
    assert.deepEqual(await cacheFiles(), []);
  });

  it("allows a retry after a failed request (inflight is cleared)", async () => {
    installFetch((n) => (n === 1 ? { status: 500, body: "boom" } : {}));
    const auth = new AuthClient(creds, dir);
    await assert.rejects(auth.getToken());
    const token = await auth.getToken();
    assert.equal(token.access_token, "tok-2");
  });
});

describe("cache key", () => {
  it("uses separate files for different scopes", async () => {
    const a = new AuthClient(creds, dir);
    const b = new AuthClient({ ...creds, scope: "other" }, dir);
    const ta = await a.getToken();
    const tb = await b.getToken();

    assert.notEqual(ta.access_token, tb.access_token);
    assert.equal(calls, 2);
    assert.equal((await cacheFiles()).length, 2);
  });

  it("uses separate files for different clientIds", async () => {
    await new AuthClient(creds, dir).getToken();
    await new AuthClient({ ...creds, clientId: "client-b" }, dir).getToken();
    assert.equal(calls, 2);
    assert.equal((await cacheFiles()).length, 2);
  });

  it("treats scope order and whitespace as equivalent", async () => {
    await new AuthClient({ ...creds, scope: "a, b" }, dir).getToken();
    await new AuthClient({ ...creds, scope: "b,a" }, dir).getToken();
    assert.equal(calls, 1);
    assert.equal((await cacheFiles()).length, 1);
  });

  it("rejects a cache file whose cache_key does not match", async () => {
    await seedCache(creds, { cache_key: "somebody-else" });
    const token = await new AuthClient(creds, dir).getToken();
    assert.equal(token.access_token, "tok-1");
    assert.equal(calls, 1);
  });

  it("cacheKey is deterministic and does not leak the secret", () => {
    const k = cacheKey("id", "s");
    assert.equal(k, cacheKey("id", "s"));
    assert.match(k, /^[0-9a-f]{16}$/);
    assert.notEqual(k, cacheKey("id", "t"));
  });
});

describe("invalidate (401 recovery)", () => {
  it("fetches a fresh token and replaces the cache", async () => {
    const auth = new AuthClient(creds, dir);
    const bad = await auth.getToken();
    const fresh = await auth.invalidate(bad);

    assert.equal(fresh.access_token, "tok-2");
    assert.equal(calls, 2);
    const files = await cacheFiles();
    const saved = JSON.parse(await readFile(join(dir, files[0]!), "utf-8"));
    assert.equal(saved.access_token, "tok-2");
    // and subsequent calls use the new token
    assert.equal((await auth.getToken()).access_token, "tok-2");
    assert.equal(calls, 2);
  });

  it("does not reuse the rejected token from disk", async () => {
    const auth = new AuthClient(creds, dir);
    const bad = await auth.getToken();
    // a fresh instance sharing the cache must not hand the bad token out after invalidate
    const other = new AuthClient(creds, dir);
    assert.equal((await other.getToken()).access_token, bad.access_token);
    const fresh = await other.invalidate(bad);
    assert.notEqual(fresh.access_token, bad.access_token);
  });

  it("makes one request for many concurrent 401s", async () => {
    const auth = new AuthClient(creds, dir);
    const bad = await auth.getToken();
    const results = await Promise.all(Array.from({ length: 10 }, () => auth.invalidate(bad)));

    assert.equal(calls, 2); // 1 initial + 1 refresh
    assert.ok(results.every((t) => t.access_token === "tok-2"));
  });

  it("does not refetch if the token was already replaced", async () => {
    const auth = new AuthClient(creds, dir);
    const bad = await auth.getToken();
    await auth.invalidate(bad); // tok-2
    const again = await auth.invalidate(bad); // late 401 from an in-flight request using tok-1

    assert.equal(again.access_token, "tok-2");
    assert.equal(calls, 2);
  });

  it("propagates the error if the refresh fails, then recovers", async () => {
    installFetch((n) => (n === 2 ? { status: 500, body: "down" } : {}));
    const auth = new AuthClient(creds, dir);
    const bad = await auth.getToken();
    await assert.rejects(auth.invalidate(bad), AdobeApiError);
    const token = await auth.getToken();
    assert.equal(token.access_token, "tok-3");
  });
});
