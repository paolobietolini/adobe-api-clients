// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataCreateWithRelationships, DataList, DataUpdateWithMeta, MetaList, NotesCreatePayload, NotesLookupResponse, PropertiesLookupResponse, RuleComponentsAttributes, RuleComponentsLookupResponse, RulesAttributes, RulesLookupResponse } from "./common.ts";

export type RuleComponentsCreatePayload = DataCreateWithRelationships & {
  data?: {
    attributes: RuleComponentsCreateAttributes;
    relationships: RuleComponentsRelationships;
  };
};

export type RulesNotesCreatePayload = NotesCreatePayload;

export type RulesUpdatePayload = DataUpdateWithMeta & {
  data?: {
    attributes?: RulesAttributes;
  };
};

export type RuleComponentsRelationships = {
  /** Describes the extension that provides the rule component's type. */
  extension: {
    /** Contains basic information about the extension. */
    data: {
      /** The ID of the extension. */
      id: string;
      /** The resource type for the extension (`extensions`). */
      type: string;
    };
  };
  /** Describes the rules that utilize the rule component. */
  rules?: {
    /** Lists the basic information about the related rules. */
    data: {
      /** The ID of the extension. */
      id?: string;
      /** The resource type for the extension (`extensions`). */
      type?: string;
    }[];
  };
};

export type RuleComponentsCreateAttributes = RuleComponentsAttributes;

export type RuleComponentsListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type RulesNotesCreateResponse = NotesLookupResponse;

export type RulesUpdateResponse = RulesLookupResponse;

export type RuleComponentsCreateResponse = RuleComponentsLookupResponse;

export type RulesOriginLookupResponse = RulesLookupResponse;

export type RulesPropertyLookupResponse = PropertiesLookupResponse;

/** GET /rules/{RULE_ID}/rule_components */
export type ListRuleComponentsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `dirty` (whether the resource contains changes that haven't been pushed to a library). Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[dirty]"?: string;
  /** Filter by `enabled`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[enabled]"?: string;
  /** Filter by `name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[name]"?: string;
  /** Filter by `negate` (whether the rule component represents a negation). Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[negate]"?: string;
  /** Filter by `origin_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[origin_id]"?: string;
  /** Filter by `published` status. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published]"?: string;
  /** Filter by `published_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published_at]"?: string;
  /** Filter by `revision_number`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[revision_number]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /rules/{RULE_ID}/libraries */
export type ListRuleLibrariesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /rules/{RULE_ID}/revisions */
export type ListRuleRevisionsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /rules/{RULE_ID}/rule_component_notes */
export type ListRulesComponentsNotesParams = {
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

/** GET /rules/{RULE_ID}/notes */
export type ListRuleNotesParams = {
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
