// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataUpdate, ExtensionsLookupResponse, NotesCreatePayload, NotesLookupResponse, RuleComponentsAttributes, RuleComponentsLookupResponse } from "./common.ts";

export type RuleComponentsNotesCreatePayload = NotesCreatePayload;

export type RuleComponentsUpdatePayload = DataUpdate & {
  data?: {
    attributes?: RuleComponentsAttributes;
  };
};

export type RuleComponentsNotesCreateResponse = NotesLookupResponse;

export type RuleComponentsExtensionLookupResponse = ExtensionsLookupResponse;

export type RuleComponentsUpdateResponse = RuleComponentsLookupResponse;

export type RuleComponentsOriginLookupResponse = RuleComponentsLookupResponse;

/** GET /rule_components/{RULE_COMPONENT_ID}/extension */
export type GetRuleComponentExtensionParams = {
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `text`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[text]"?: string;
};

/** GET /rule_components/{RULE_COMPONENT_ID}/origin */
export type RetrieveRuleComponentOriginParams = {
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `text`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[text]"?: string;
};

/** GET /rule_components/{RULE_COMPONENT_ID}/rules */
export type ListRuleComponentsRelatedRulesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `text`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[text]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /rule_components/{RULE_COMPONENT_ID}/notes */
export type ListRuleComponentNotesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `text`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[text]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};
