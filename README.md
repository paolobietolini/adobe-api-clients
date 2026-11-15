# adobe-api-clients

Unofficial TypeScript clients for **Adobe Analytics 2.0**, Adobe Experience Platform Data Collection (Launch / **Reactor**) and Adobe **IMS authentication**.

> **Disclaimer:** this project is not affiliated with, endorsed by, or supported by Adobe. "Adobe", "Reactor" and "Adobe Analytics" are trademarks of Adobe Inc.

## Status

Early development. All three clients work against the live APIs; write paths have been smoke-tested on Reactor only.

| Module     | Export path                   | Coverage                                                                 |
| ---------- | ----------------------------- | ------------------------------------------------------------------------ |
| Auth (IMS) | `adobe-api-clients/auth`      | OAuth Server-to-Server, token cache                                      |
| Analytics  | `adobe-api-clients/analytics` | 56 operations: annotations, calculated metrics, segments, reports, ...  |
| Reactor    | `adobe-api-clients/reactor`   | 137 operations: properties, rules, data elements, libraries, builds, ... |

Other export paths: `adobe-api-clients/errors` (`AdobeApiError`), `adobe-api-clients/types` (Analytics and shared types) and `adobe-api-clients/types/reactor` (Reactor types).

Request and response types come from Adobe's published OpenAPI specs. Where the specs disagree with the live API, the types follow the API (see [Known spec deviations](#known-spec-deviations)).

## Requirements

- Node.js >= 20.12 (global `fetch`, `process.loadEnvFile`). Running the test suite needs >= 22.18, which runs the `.ts` tests directly
- An Adobe Developer Console project with OAuth Server-to-Server credentials:
  - **Analytics:** the Adobe Analytics API added to the project, plus the matching scopes
  - **Reactor:** the Experience Platform Launch API added to the project, plus your IMS org id (`...@AdobeOrg`)

## Install

The package is not published to npm. Install it from GitHub; the `prepare` script compiles it to `dist/`:

```sh
npm install github:paolobietolini/adobe-api-clients
```

or clone it for development:

```sh
git clone https://github.com/paolobietolini/adobe-api-clients.git
cd adobe-api-clients
npm install   # also builds dist/
```

## Usage

```ts
import { AuthClient } from "adobe-api-clients/auth";
import { AnalyticsClient } from "adobe-api-clients/analytics";
import { ReactorClient } from "adobe-api-clients/reactor";

const auth = new AuthClient({
  clientId: process.env.ADOBE_CLIENT_ID!,
  clientSecret: process.env.ADOBE_CLIENT_SECRET!,
  scope: process.env.SCOPE!, // comma-separated scopes from the Developer Console
});
```

Suggested `.env` (loaded with `process.loadEnvFile()`):

```
ADOBE_CLIENT_ID=...
ADOBE_CLIENT_SECRET=...
SCOPE=openid,AdobeID,...
ADOBE_ORG_ID=XXXXXXXX@AdobeOrg
ANALYTICS_COMPANY_ID=yourGlobalCompanyId   # optional, only for examples/index.ts
```

### Analytics

```ts
const analytics = new AnalyticsClient(auth, "yourGlobalCompanyId");

const annotations = await analytics.listAnnotations({ limit: 10, expansion: ["name", "rsid"] });

const report = await analytics.runReport({
  rsid: "myreportsuite",
  globalFilters: [{ type: "dateRange", dateRange: "2026-11-01T00:00:00.000/2026-11-07T23:59:59.999" }],
  metricContainer: { metrics: [{ columnId: "0", id: "metrics/visits" }] },
  dimension: "variables/daterangeday",
  settings: { limit: 10, page: 0 },
});
```

Paged Analytics lists return `{ content, totalPages, totalElements, ... }`. `listDimensions` and `listMetrics` return plain arrays.

### Reactor

```ts
const reactor = new ReactorClient(auth, process.env.ADOBE_ORG_ID!);

const { data: companies } = await reactor.listCompanies();
const { data: props, meta } = await reactor.listProperties(companies[0].id, {
  "page[size]": 50,
  "filter[name]": "EQ My Property",
});
```

Reactor speaks JSON:API. List methods return `ReactorList<Entity>` (`data` plus `meta.pagination`). Request bodies are `{ data: { type, attributes, ... } }` objects.

**Filters.** Reactor filters use the `filter[field]=OPERATOR value` syntax, for example `"filter[name]": "EQ foo"`. Plain query names such as `name=foo` are silently ignored by the API. Every paged list accepts any `filter[...]` key; the documented ones are typed.

### Errors

Non-2xx responses throw `AdobeApiError`:

```ts
import { AdobeApiError } from "adobe-api-clients/errors";

try {
  await reactor.retrieveRule(id);
} catch (e) {
  if (e instanceof AdobeApiError && e.statusCode === 404) { /* not found */ }
  else throw e;
}
```

`e.statusCode` is the HTTP status and `e.body` is the raw response body.

Requests that get a `401` are retried once with a fresh token. A second `401` is thrown to the caller.

### Authentication details

`AuthClient` uses the OAuth Server-to-Server `client_credentials` grant against Adobe IMS (`https://ims-na1.adobelogin.com/ims/token/v3`). `getToken()` resolves a token in this order:

1. **In-memory:** reused while it is valid.
2. **Disk cache:** `.cache/adobe-token-<hash>.json` by default, one file per credentials and scope. Pass a different directory as the second constructor argument.
3. **IMS:** a new token is requested, then stored in memory and on disk.

Details:

- A token counts as expired **30 minutes before** its real expiry.
- Concurrent calls to `getToken()` share a single in-flight request.
- The cache directory is created with mode `0700` and the file with `0600`. Writes are atomic.
- A cache read or write failure only logs a warning; the client falls back to a fresh token.

> The cache files contain live access tokens. Keep `.cache/` out of version control.

## Known spec deviations

Adobe's specs are partly wrong; these were found by comparing them with live responses.

- **Analytics list envelopes.** The spec documents several list endpoints as returning a single item. They return `{ content: [...] }` (paged) or a plain array; the types reflect that.
- **Reactor filters.** The spec lists bare query names (`name`, `created_at`). The API only honours `filter[name]`. The types use the `filter[...]` form.
- **Reactor filter coverage.** Some lists omit filters the API accepts; those are covered by the `filter[...]` index signature.
- **Unverified.** `createAnnotation`, segment bodies and most write endpoints other than Reactor properties have not been exercised against the live APIs.

## Development

```sh
npm test         # node --test, no network calls
npm run build    # tsc -p tsconfig.build.json -> dist/
```

Tests mock `fetch`.

`examples/index.ts` is a read-only smoke test and usage example against the live APIs (needs a `.env`): `node examples/index.ts`.

If Node's `fetch` times out connecting to Adobe on your machine (IPv6 / address auto-selection), run with `NODE_OPTIONS="--dns-result-order=ipv4first --no-network-family-autoselection"`.

## Project layout

```
src/
  clients/
    authClient.ts       # IMS OAuth Server-to-Server client
    httpClient.ts       # shared request/retry/JSON layer
    analyticsClient.ts  # Analytics 2.0
    reactorClient.ts    # Reactor
  utils/
    errors.ts           # AdobeApiError
    types/              # auth, http, analytics/*, reactor/*
tests/
examples/             # runnable usage example (not part of the package)
```

## License

[BSD 3-Clause License](LICENSE)
