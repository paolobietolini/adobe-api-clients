import { afterEach, beforeEach, describe, it, mock } from "node:test";
import assert from "node:assert/strict";

import { HttpClient } from "../src/clients/httpClient.ts";
import type { AuthClient } from "../src/clients/authClient.ts";
import type { TokenCached } from "../src/utils/types/index.ts";

const tokenOf = (n: number): TokenCached => ({
  access_token: `tok-${n}`,
  token_type: "bearer",
  expires_in: 86400,
  expires_at: Date.now() + 86400_000,
  cache_key: "k",
});

/** Fake AuthClient: hands out tok-1, then tok-2, ... after each invalidate(). */
function fakeAuth() {
  let n = 1;
  const auth = {
    clientId: "client-a",
    getToken: mock.fn(async () => tokenOf(n)),
    invalidate: mock.fn(async () => tokenOf(++n)),
  };
  return { auth, asAuth: auth as unknown as AuthClient };
}

type Reply = { status?: number; body?: string; contentType?: string };
type Seen = { url: string; method: string; headers: Headers; body: string };

let seen: Seen[];
let fetchMock: ReturnType<typeof mock.method>;

/** Installs a fake fetch; `reply(n)` decides the n-th response (1-based). */
function installFetch(reply: (n: number) => Reply = () => ({})) {
  seen = [];
  fetchMock = mock.method(globalThis, "fetch", async (req: Request) => {
    seen.push({
      url: req.url,
      method: req.method,
      headers: req.headers,
      body: await req.text(),
    });
    const { status = 200, body = "{}", contentType = "application/json" } = reply(seen.length);
    return new Response(status === 204 ? null : body, {
      status,
      headers: { "content-type": contentType },
    });
  });
}

beforeEach(() => installFetch());
afterEach(() => mock.restoreAll());

describe("HttpClient request building", () => {
  it("joins base url, prefix and path, and encodes params", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://analytics.adobe.io", "api/co1");
    await http.get("annotations", { limit: 5, page: 0, expansion: ["name", "rsid"] });

    const u = new URL(seen[0].url);
    assert.equal(u.origin + u.pathname, "https://analytics.adobe.io/api/co1/annotations");
    assert.equal(u.searchParams.get("limit"), "5");
    assert.equal(u.searchParams.get("page"), "0"); // 0 must not be dropped
    assert.equal(u.searchParams.get("expansion"), "name,rsid"); // arrays are comma-joined
  });

  it("skips undefined and null params but keeps false", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    await http.get("a", { a: undefined, b: null, c: false, d: "" });

    const q = new URL(seen[0].url).searchParams;
    assert.equal(q.has("a"), false);
    assert.equal(q.has("b"), false);
    assert.equal(q.get("c"), "false");
    assert.equal(q.get("d"), "");
  });

  it("works with an empty path prefix", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://reactor.adobe.io");
    await http.get("companies");
    assert.equal(new URL(seen[0].url).pathname, "/companies");
  });

  it("sends bearer token, api key and default headers", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test", "", { "x-gw-ims-org-id": "ORG@AdobeOrg" });
    await http.get("a");

    const h = seen[0].headers;
    assert.equal(h.get("authorization"), "Bearer tok-1");
    assert.equal(h.get("x-api-key"), "client-a");
    assert.equal(h.get("x-gw-ims-org-id"), "ORG@AdobeOrg");
  });
});

describe("HttpClient body and Content-Type", () => {
  it("JSON-encodes the body and defaults to application/json", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    await http.post("a", { name: "n" });

    assert.equal(seen[0].method, "POST");
    assert.equal(seen[0].body, '{"name":"n"}');
    assert.match(seen[0].headers.get("content-type") ?? "", /^application\/json/);
  });

  it("does not override a default Content-Type (vnd.api+json)", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test", "", {
      "Content-Type": "application/vnd.api+json",
    });
    await http.patch("a/1", { data: { id: "1" } });

    assert.equal(seen[0].method, "PATCH");
    assert.equal(seen[0].headers.get("content-type"), "application/vnd.api+json");
  });

  it("sends no body or Content-Type for a plain GET", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    await http.get("a");

    assert.equal(seen[0].body, "");
    assert.equal(seen[0].headers.has("content-type"), false);
  });

  it("allows DELETE with a body", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    await http.send("DELETE", "a", { body: { data: [] } });

    assert.equal(seen[0].method, "DELETE");
    assert.equal(seen[0].body, '{"data":[]}');
  });

  it("put and delete helpers use the right verbs", async () => {
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    await http.put("a", {});
    await http.delete("a");
    assert.deepEqual(seen.map((s) => s.method), ["PUT", "DELETE"]);
  });
});

describe("HttpClient responses", () => {
  it("parses JSON, including vnd.api+json", async () => {
    installFetch(() => ({ body: '{"data":1}', contentType: "application/vnd.api+json" }));
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    assert.deepEqual(await http.get("a"), { data: 1 });
  });

  it("returns undefined for an empty body (204)", async () => {
    installFetch(() => ({ status: 204 }));
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    assert.equal(await http.delete("a"), undefined);
  });

  it("returns a non-JSON body as a string", async () => {
    installFetch(() => ({ body: "deleted", contentType: "text/plain" }));
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    assert.equal(await http.delete("a"), "deleted");
  });

  it("throws with method, path, status and body on a non-OK response", async () => {
    installFetch(() => ({ status: 403, body: '{"error_code":"403003"}' }));
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    await assert.rejects(
      http.get("a"),
      (e: Error) => /GET a failed: 403/.test(e.message) && e.message.includes("403003"),
    );
  });
});

describe("HttpClient 401 handling", () => {
  it("retries once with the refreshed token", async () => {
    installFetch((n) => (n === 1 ? { status: 401, body: "{}" } : { body: '{"ok":true}' }));
    const { auth, asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");

    assert.deepEqual(await http.get("a"), { ok: true });
    assert.equal(seen.length, 2);
    assert.equal(seen[0].headers.get("authorization"), "Bearer tok-1");
    assert.equal(seen[1].headers.get("authorization"), "Bearer tok-2");
    assert.equal(auth.invalidate.mock.callCount(), 1);
    // the rejected token is what gets invalidated
    const rejected = auth.invalidate.mock.calls[0].arguments as unknown as TokenCached[];
    assert.equal(rejected[0].access_token, "tok-1");
  });

  it("resends the body on the retry", async () => {
    installFetch((n) => (n === 1 ? { status: 401 } : {}));
    const { asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");
    await http.post("a", { x: 1 });

    assert.equal(seen.length, 2);
    assert.equal(seen[0].body, '{"x":1}');
    assert.equal(seen[1].body, '{"x":1}');
  });

  it("retries only once; a second 401 reaches the caller", async () => {
    installFetch(() => ({ status: 401, body: "nope" }));
    const { auth, asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");

    await assert.rejects(http.get("a"), /GET a failed: 401 nope/);
    assert.equal(seen.length, 2);
    assert.equal(auth.invalidate.mock.callCount(), 1);
  });

  it("does not retry on other errors", async () => {
    installFetch(() => ({ status: 500 }));
    const { auth, asAuth } = fakeAuth();
    const http = new HttpClient(asAuth, "https://x.test");

    await assert.rejects(http.get("a"), /500/);
    assert.equal(seen.length, 1);
    assert.equal(auth.invalidate.mock.callCount(), 0);
  });
});
