// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataCreate, PropertiesAttributes } from "./common.ts";

export type PropertiesCreatePayload = DataCreate & {
  data?: {
    attributes?: PropertiesAttributes;
  };
};

export type CreatePropertyPayload = PropertiesCreatePayload & {
  data?: {
    attributes?: Record<string, unknown>;
  };
};

/** GET /companies */
export type ListCompaniesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[name]"?: string;
  /** Filter by `org_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[org_id]"?: string;
  /** Filter by `token`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[token]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /companies/{COMPANY_ID}/properties */
export type ListPropertiesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `app_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[app_id]"?: string;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `copying`. This is a legacy attribute that is specific to properties that were migrated from the original Dynamic Tag Management (DTM) system to the current system. A `copying` property is a property that is populating its information from its original DTM implementation. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[copying]"?: boolean;
  /** Filter by `enabled`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[enabled]"?: string;
  /** Filter by `platform`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[platform]"?: string;
  /** Filter by `token`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[token]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /companies/{COMPANY_ID}/app_configurations */
export type ListAppConfigurationsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `app_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[app_id]"?: string;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `key_type`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[key_type]"?: string;
  /** Filter by `messaging_service`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[messaging_service]"?: string;
  /** Filter by `name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[name]"?: string;
  /** Filter by `platform`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[platform]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};
