import { test, describe, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";

import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { AuthClient } from "../src/clients/authClient.ts";
import { AdobeApiError } from "../src/utils/errors.ts";

const credentials = { clientId: "id", clientSecret: "secret", scope: "scope" };
const tokenBody = (expires_in = 86400) =>
  new Response(
    JSON.stringify({ access_token: "tok", token_type: "bearer", expires_in }),
  );

describe("AuthClient.getToken", () => {
  let dir: string;
  let cacheFile: string;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), "auth-"));
    cacheFile = join(dir, "token.json");
  });

  afterEach(() => rm(dir, { recursive: true, force: true }));

  test("request a token when nothing is cached", async (t) => {
    const fetchMock = t.mock.method(globalThis, "fetch", async () =>
      tokenBody(),
    );
    const token = await new AuthClient(credentials, cacheFile).getToken();

    assert.equal(token.access_token, "tok");
    const req = fetchMock.mock.calls[0].arguments[0] as Request;
    assert.equal(req.method, "POST");
    const body = new URLSearchParams(await req.text());
    assert.equal(body.get("grant_type"), "client_credentials");
    assert.equal(body.get("client_id"), "id");
  });

  test("reuses the token from memory", async (t) => {
    const fetchMock = t.mock.method(globalThis, "fetch", async () =>
      tokenBody(),
    );
    const client = new AuthClient(credentials, cacheFile);
    await client.getToken();
    await client.getToken();
    assert.equal(fetchMock.mock.callCount(), 1);
  });

  test("reuses the token from disk in a new instance", async (t) => {
    const fetchMock = t.mock.method(globalThis, "fetch", () => tokenBody());
    await new AuthClient(credentials, cacheFile).getToken();
    await new AuthClient(credentials, cacheFile).getToken();
    assert.equal(fetchMock.mock.callCount(), 1);
  });
  test("refetches when the token is inside the expiry buffer", async (t) => {
    const fetchMock = t.mock.method(globalThis, "fetch", async () =>
      tokenBody(60 * 10),
    );
    const client = new AuthClient(credentials, cacheFile);
    await client.getToken();
    await client.getToken();
    assert.equal(fetchMock.mock.callCount(), 2);
  });

  test("deduplicates concurrent calls", async (t) => {
    const fetchMock = t.mock.method(globalThis, "fetch", () => tokenBody());
    const client = new AuthClient(credentials, cacheFile);
    await Promise.all([1, 2, 3, 4, 5].map(() => client.getToken()));
    assert.equal(fetchMock.mock.callCount(), 1);
  });

  test("throws AdobeApiError on failure and can retry", async (t) => {
    let fail = true;
    t.mock.method(globalThis, "fetch", async () =>
      fail
        ? new Response("nope", { status: 401, statusText: "Unauthorized" })
        : tokenBody(),
    );
    const client = new AuthClient(credentials, cacheFile);

    await assert.rejects(client.getToken(), AdobeApiError);
    fail = false;
    assert.equal((await client.getToken()).access_token, "tok");
  });

  test("still returns the token if the cache can't be written", async (t) => {
    t.mock.method(globalThis, "fetch", async () => tokenBody());
    t.mock.method(console, "warn", () => {});
    const blocker = join(dir, "file");
    await writeFile(blocker, "");
    // parent "directory" is a file, so mkdir fails
    const token = await new AuthClient(
      credentials,
      join(blocker, "x.json"),
    ).getToken();
    assert.equal(token.access_token, "tok");
  });

  test("refetches when the cache file is corrupt", async (t) => {
    await writeFile(cacheFile, "{ not json }");
    t.mock.method(console, "warn", () => {});
    const fetchMock = t.mock.method(globalThis, "fetch", async () =>
      tokenBody(),
    );
    const token = await new AuthClient(credentials, cacheFile).getToken();

    assert.equal(token.access_token, "tok");
    assert.equal(fetchMock.mock.callCount(), 1);
  });
});
