# adobe-api-clients

Unofficial TypeScript clients for Adobe Experience Platform Data Collection (Launch / **Reactor**) and Adobe **IMS authentication**.

> **Disclaimer:** this project is not affiliated with, endorsed by, or supported by Adobe. "Adobe", "Reactor" and "Adobe Analytics" are trademarks of Adobe Inc.

## Status

Early development. Only the auth client is implemented.

| Module      | Export path                      | Status      |
| ----------- | -------------------------------- | ----------- |
| Auth (IMS)  | `adobe-api-clients/auth`         | Implemented |
| Reactor     | `adobe-api-clients/reactor`      | Planned     |
| Analytics   | `adobe-api-clients/analytics`    | Planned     |

The `reactor` and `analytics` export paths are declared in `package.json`, but the source files don't exist yet.

## Requirements

- Node.js with native TypeScript type stripping (the sources use `.ts` import extensions and are run directly, with no build step) and the global `fetch` API
- An Adobe Developer Console project with OAuth Server-to-Server credentials (client ID, client secret, scopes)

## Install

The package is not published to npm. Clone it and install the dev dependencies:

```sh
git clone https://github.com/paolobietolini/adobe-api-clients.git
cd adobe-api-clients
npm install
```

## Usage

### Authentication

`AuthClient` uses the OAuth Server-to-Server `client_credentials` grant against Adobe IMS (`https://ims-na1.adobelogin.com/ims/token/v3`).

```ts
import { AuthClient } from "adobe-api-clients/auth";

const auth = new AuthClient({
  clientId: process.env.ADOBE_CLIENT_ID!,
  clientSecret: process.env.ADOBE_CLIENT_SECRET!,
  scope: process.env.ADOBE_SCOPE!, // comma-separated scopes from the Developer Console
});

const { access_token } = await auth.getToken();
// Authorization: Bearer <access_token>
```

#### Token handling

`getToken()` resolves a token in this order:

1. **In-memory:** reused while it is valid.
2. **Disk cache:** `.cache/adobe-token.json` by default. Pass a different path as the second constructor argument. A new process or a new `AuthClient` instance reuses a still-valid token without calling IMS.
3. **IMS:** a new token is requested, then stored in memory and on disk.

Details:

- A token counts as expired **30 minutes before** its real expiry, so callers don't receive a token that is about to lapse.
- Concurrent calls to `getToken()` share a single in-flight request.
- The cache directory is created with mode `0700` and the file with `0600`. Writes are atomic (temp file, then rename).
- A cache read or write failure only logs a warning. The client falls back to fetching a fresh token.
- Failed IMS requests throw `AdobeApiError`, with the HTTP status, status text and response body in the message.

> The cache file contains a live access token. Keep `.cache/` out of version control.

## Development

```sh
npm test   # node --test
```

Tests live in `tests/` and mock `fetch`, so they make no network calls.

## Project layout

```
src/
  clients/authClient.ts   # IMS OAuth Server-to-Server client
  utils/
    errors.ts             # AdobeApiError
    store.ts              # atomic token cache read/write
    token.ts              # cached-token validation
    types.ts              # shared types
tests/
  auth.test.ts
```

## Roadmap

- Reactor client (properties, rules, data elements, extensions, libraries and builds)
- Analytics client
- Region and IMS host configuration (currently fixed to `ims-na1.adobelogin.com`)

## License

[BSD 3-Clause License](LICENSE)
