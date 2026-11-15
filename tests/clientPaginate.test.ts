import { afterEach, describe, it, mock } from "node:test";
import assert from "node:assert/strict";

import { AnalyticsClient } from "../src/clients/analyticsClient.ts";
import { ReactorClient } from "../src/clients/reactorClient.ts";
import type { AuthClient } from "../src/clients/authClient.ts";

const auth = {
  clientId: "client-a",
  getToken: async () => ({
    access_token: "tok",
    token_type: "bearer",
    expires_in: 86400,
    expires_at: Date.now() + 86400_000,
    cache_key: "k",
  }),
  invalidate: async () => {
    throw new Error("unexpected 401");
  },
} as unknown as AuthClient;

/** Fake fetch: `respond(url)` returns the JSON body; records every requested URL. */
function installFetch(respond: (url: URL) => unknown, contentType = "application/json") {
  const urls: URL[] = [];
  mock.method(globalThis, "fetch", async (req: Request) => {
    const url = new URL(req.url);
    urls.push(url);
    return new Response(JSON.stringify(respond(url)), {
      status: 200,
      headers: { "content-type": contentType },
    });
  });
  return urls;
}

afterEach(() => mock.restoreAll());

describe("AnalyticsClient.paginate", () => {
  // 3 pages of annotations, 0-based, with the real envelope shape
  const pages = [[{ id: "a" }, { id: "b" }], [{ id: "c" }, { id: "d" }], [{ id: "e" }]];
  const envelope = (url: URL) => {
    const n = Number(url.searchParams.get("page"));
    return {
      content: pages[n] ?? [],
      number: n,
      totalPages: pages.length,
      lastPage: n === pages.length - 1,
      firstPage: n === 0,
    };
  };

  it("walks all pages starting at page 0 and returns every item", async () => {
    const urls = installFetch(envelope);
    const analytics = new AnalyticsClient(auth, "co1");

    const ids: string[] = [];
    for await (const a of analytics.paginate((page) => analytics.listAnnotations({ limit: 2, page }))) {
      ids.push(a.id!);
    }

    assert.deepEqual(ids, ["a", "b", "c", "d", "e"]);
    assert.deepEqual(urls.map((u) => u.searchParams.get("page")), ["0", "1", "2"]);
    assert.ok(urls.every((u) => u.pathname === "/api/co1/annotations"));
    assert.ok(urls.every((u) => u.searchParams.get("limit") === "2"));
  });

  it("stops after maxPages", async () => {
    const urls = installFetch(envelope);
    const analytics = new AnalyticsClient(auth, "co1");

    const out = await Array.fromAsync(
      analytics.paginate((page) => analytics.listAnnotations({ page }), { maxPages: 1 }),
    );

    assert.equal(out.length, 2);
    assert.equal(urls.length, 1);
  });

  it("falls back to totalPages when lastPage is missing", async () => {
    installFetch((url) => {
      const n = Number(url.searchParams.get("page"));
      return { content: pages[n] ?? [], number: n, totalPages: pages.length };
    });
    const analytics = new AnalyticsClient(auth, "co1");

    const out = await Array.fromAsync(analytics.paginate((page) => analytics.listAnnotations({ page })));
    assert.equal(out.length, 5);
  });

  it("handles an empty list", async () => {
    const urls = installFetch(() => ({ content: [], totalPages: 0, lastPage: true, number: 0 }));
    const analytics = new AnalyticsClient(auth, "co1");

    assert.deepEqual(await Array.fromAsync(analytics.paginate((page) => analytics.listAnnotations({ page }))), []);
    assert.equal(urls.length, 1);
  });
});

describe("ReactorClient.paginate", () => {
  // 3 pages of properties, 1-based, with the real meta.pagination shape
  const pages = [[{ id: "p1" }, { id: "p2" }], [{ id: "p3" }, { id: "p4" }], [{ id: "p5" }]];
  const envelope = (url: URL) => {
    const n = Number(url.searchParams.get("page[number]"));
    return {
      data: pages[n - 1] ?? [],
      meta: {
        pagination: {
          current_page: n,
          next_page: n < pages.length ? n + 1 : null,
          prev_page: n > 1 ? n - 1 : null,
          total_pages: pages.length,
          total_count: 5,
        },
      },
    };
  };
  const vnd = "application/vnd.api+json";

  it("walks all pages starting at page 1 and returns every item", async () => {
    const urls = installFetch(envelope, vnd);
    const reactor = new ReactorClient(auth, "ORG@AdobeOrg");

    const ids: string[] = [];
    for await (const p of reactor.paginate((n) =>
      reactor.listProperties("CO1", { "page[number]": n, "page[size]": 2 }),
    )) {
      ids.push(p.id!);
    }

    assert.deepEqual(ids, ["p1", "p2", "p3", "p4", "p5"]);
    assert.deepEqual(urls.map((u) => u.searchParams.get("page[number]")), ["1", "2", "3"]);
    assert.ok(urls.every((u) => u.pathname === "/companies/CO1/properties"));
    assert.ok(urls.every((u) => u.searchParams.get("page[size]") === "2"));
  });

  it("stops when next_page is null", async () => {
    const urls = installFetch(
      () => ({ data: [{ id: "only" }], meta: { pagination: { current_page: 1, next_page: null } } }),
      vnd,
    );
    const reactor = new ReactorClient(auth, "ORG@AdobeOrg");

    const out = await Array.fromAsync(
      reactor.paginate((n) => reactor.listProperties("CO1", { "page[number]": n })),
    );
    assert.equal(out.length, 1);
    assert.equal(urls.length, 1);
  });

  it("stops when meta is missing", async () => {
    const urls = installFetch(() => ({ data: [{ id: "x" }] }), vnd);
    const reactor = new ReactorClient(auth, "ORG@AdobeOrg");

    const out = await Array.fromAsync(
      reactor.paginate((n) => reactor.listProperties("CO1", { "page[number]": n })),
    );
    assert.equal(out.length, 1);
    assert.equal(urls.length, 1);
  });

  it("forwards filters and stops after maxPages", async () => {
    const urls = installFetch(envelope, vnd);
    const reactor = new ReactorClient(auth, "ORG@AdobeOrg");

    const out = await Array.fromAsync(
      reactor.paginate(
        (n) => reactor.listProperties("CO1", { "page[number]": n, "filter[name]": "EQ foo" }),
        { maxPages: 2 },
      ),
    );

    assert.equal(out.length, 4);
    assert.equal(urls.length, 2);
    assert.ok(urls.every((u) => u.searchParams.get("filter[name]") === "EQ foo"));
  });
});
