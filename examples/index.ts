/**
 * Read-only smoke test / usage example. Run from the repo root:
 *
 *   node examples/index.ts
 *
 * Reads credentials from .env (see README). Optional: ANALYTICS_COMPANY_ID
 * (your Analytics global company id) enables the Analytics section.
 */
import type { Credentials } from "../src/utils/types/auth.ts";
import { AuthClient } from "../src/clients/authClient.ts";
import { AnalyticsClient } from "../src/clients/analyticsClient.ts";
import { ReactorClient } from "../src/clients/reactorClient.ts";
import { AdobeApiError } from "../src/utils/errors.ts";
import { getCredentials } from "../src/utils/credentials.ts";

const ENV_KEYS = {
  clientId: "ADOBE_CLIENT_ID",
  clientSecret: "ADOBE_CLIENT_SECRET",
  scope: "SCOPE",
  orgId: "ADOBE_ORG_ID",
} as const satisfies Record<keyof Credentials, string>;

const { orgId, ...authCreds } = getCredentials(ENV_KEYS);
const auth = new AuthClient(authCreds);

async function reactorExample() {
  const reactor = new ReactorClient(auth, orgId);

  const { data: companies } = await reactor.listCompanies();
  const company = companies[0];
  console.log(`Reactor company: ${company.attributes?.name} (${company.id})`);

  // Filters use the filter[field]=OPERATOR value syntax
  const web = await reactor.listProperties(company.id!, {
    "page[size]": 5,
    "filter[platform]": "EQ web",
  });
  console.log(`Web properties: ${web.meta?.pagination?.total_count}`);

  // paginate() walks every page lazily, one request per page
  let count = 0;
  for await (const property of reactor.paginate((n) =>
    reactor.listProperties(company.id!, { "page[number]": n, "page[size]": 50 }),
  )) {
    count++;
    if (count <= 3) console.log(` - ${property.attributes?.name} (${property.id})`);
  }
  console.log(`Total properties: ${count}`);
}

async function analyticsExample(companyId: string) {
  const analytics = new AnalyticsClient(auth, companyId);

  const me = await analytics.getCurrentUser();
  console.log(`Analytics user: ${me.login}`);

  const annotations = await Array.fromAsync(
    analytics.paginate((page) => analytics.listAnnotations({ limit: 50, page }), { maxPages: 2 }),
  );
  console.log(`Annotations (first 2 pages): ${annotations.length}`);
}

try {
  await reactorExample();

  const companyId = process.env.ANALYTICS_COMPANY_ID;
  if (companyId) await analyticsExample(companyId);
  else console.log("Skipping Analytics: set ANALYTICS_COMPANY_ID to enable");
} catch (e) {
  if (e instanceof AdobeApiError) {
    console.error(`${e.message}\n${e.body ?? ""}`);
    process.exitCode = 1;
  } else {
    throw e;
  }
}
