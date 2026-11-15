import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { paginate, type Page } from "../src/utils/paginate.ts";

/** Fake API: `pages[i]` is the items on page `start + i`; records the page numbers requested. */
function fakeApi<T>(pages: T[][], start = 0) {
  const requested: number[] = [];
  const fetchPage = async (page: number): Promise<Page<T>> => {
    requested.push(page);
    const i = page - start;
    const items = pages[i] ?? [];
    return { items, hasMore: i < pages.length - 1 };
  };
  return { fetchPage, requested };
}

const collect = async <T>(it: AsyncIterable<T>) => {
  const out: T[] = [];
  for await (const x of it) out.push(x);
  return out;
};

describe("paginate", () => {
  it("yields every item across pages, in order", async () => {
    const { fetchPage } = fakeApi([[1, 2], [3, 4], [5]]);
    assert.deepEqual(await collect(paginate(fetchPage)), [1, 2, 3, 4, 5]);
  });

  it("starts at page 0 by default", async () => {
    const { fetchPage, requested } = fakeApi([["a"], ["b"]]);
    await collect(paginate(fetchPage));
    assert.deepEqual(requested, [0, 1]);
  });

  it("honours a custom start page (e.g. 1-based APIs)", async () => {
    const { fetchPage, requested } = fakeApi([["a"], ["b"], ["c"]], 1);
    assert.deepEqual(await collect(paginate(fetchPage, { start: 1 })), ["a", "b", "c"]);
    assert.deepEqual(requested, [1, 2, 3]);
  });

  it("stops after maxPages", async () => {
    const { fetchPage, requested } = fakeApi([[1], [2], [3], [4]]);
    assert.deepEqual(await collect(paginate(fetchPage, { maxPages: 2 })), [1, 2]);
    assert.deepEqual(requested, [0, 1]);
  });

  it("does nothing when maxPages is 0", async () => {
    const { fetchPage, requested } = fakeApi([[1]]);
    assert.deepEqual(await collect(paginate(fetchPage, { maxPages: 0 })), []);
    assert.deepEqual(requested, []);
  });

  it("handles a single page", async () => {
    const { fetchPage, requested } = fakeApi([[1, 2]]);
    assert.deepEqual(await collect(paginate(fetchPage)), [1, 2]);
    assert.deepEqual(requested, [0]);
  });

  it("handles an empty first page", async () => {
    const { fetchPage, requested } = fakeApi<number>([[]]);
    assert.deepEqual(await collect(paginate(fetchPage)), []);
    assert.deepEqual(requested, [0]);
  });

  it("stops on an empty page even if hasMore is still true", async () => {
    const requested: number[] = [];
    const fetchPage = async (page: number): Promise<Page<number>> => {
      requested.push(page);
      return { items: page === 0 ? [1] : [], hasMore: true }; // a buggy API flag
    };
    assert.deepEqual(await collect(paginate(fetchPage)), [1]);
    assert.deepEqual(requested, [0, 1]);
  });

  it("fetches lazily: breaking out of the loop stops further requests", async () => {
    const { fetchPage, requested } = fakeApi([[1, 2], [3, 4], [5, 6]]);
    for await (const x of paginate(fetchPage)) {
      if (x === 2) break; // consumed all of page 0, never asked for page 1
    }
    assert.deepEqual(requested, [0]);
  });

  it("fetches the next page only when the current one is consumed", async () => {
    const { fetchPage, requested } = fakeApi([[1, 2], [3]]);
    const it = paginate(fetchPage);
    await it.next();
    await it.next();
    assert.deepEqual(requested, [0]); // page 1 not requested yet
    await it.next();
    assert.deepEqual(requested, [0, 1]);
  });

  it("requests pages sequentially, never in parallel", async () => {
    let inFlight = 0;
    let maxInFlight = 0;
    const fetchPage = async (page: number): Promise<Page<number>> => {
      maxInFlight = Math.max(maxInFlight, ++inFlight);
      await new Promise((r) => setImmediate(r));
      inFlight--;
      return { items: [page], hasMore: page < 3 };
    };
    assert.deepEqual(await collect(paginate(fetchPage)), [0, 1, 2, 3]);
    assert.equal(maxInFlight, 1);
  });

  it("propagates errors from fetchPage and stops", async () => {
    const requested: number[] = [];
    const fetchPage = async (page: number): Promise<Page<number>> => {
      requested.push(page);
      if (page === 1) throw new Error("boom");
      return { items: [page], hasMore: true };
    };
    const seen: number[] = [];
    await assert.rejects(
      (async () => {
        for await (const x of paginate(fetchPage)) seen.push(x);
      })(),
      /boom/,
    );
    assert.deepEqual(seen, [0]); // items before the failure were delivered
    assert.deepEqual(requested, [0, 1]);
  });

  it("works with Array.fromAsync", async () => {
    const { fetchPage } = fakeApi([[1], [2]]);
    assert.deepEqual(await Array.fromAsync(paginate(fetchPage)), [1, 2]);
  });
});
