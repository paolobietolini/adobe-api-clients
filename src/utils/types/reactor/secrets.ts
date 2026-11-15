// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataList, EnvironmentsLookupResponse, MetaList, NotesCreatePayload, NotesLookupResponse, PropertiesLookupResponse, SecretsLookupResponse } from "./common.ts";

export type SecretsUpdatePayload = {
  data: {
    /** Contains the `type_of` attribute of the secret being retried or tested. */
    attributes: {
      /** The secret's type. */
      type_of?: string;
    };
    /** Must be provided with an `action` that determines the action to be taken on the secret. */
    meta: {
      /** If this property is set to `retry`, the call retries the secret. If this property is set to `test` and the secret in question is a `succeeded` `oauth` type, this call performs an exchange with the authorization service. */
      action: string;
    };
    /** The ID of the secret being acted upon. */
    id: string;
    /** Must be set to `secrets`. */
    type: string;
  };
};

export type SecretsNotesCreatePayload = NotesCreatePayload;

export type SecretsListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type SecretsUpdateResponse = SecretsLookupResponse;

export type SecretsNotesCreateResponse = NotesLookupResponse;

export type SecretsLookupEnvironmentResponse = EnvironmentsLookupResponse;

export type SecretsPropertyLookupResponse = PropertiesLookupResponse;

/** GET /environments/{ENVIRONMENT_ID}/secrets */
export type ListEnvironmentSecretsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /secrets/{SECRET_ID}/notes */
export type ListSecretNotesParams = {
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

/** GET /secrets/{SECRET_ID}/data_elements */
export type ListSecretDataElementsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `dirty` (whether the resource contains changes that haven't been pushed to a library). Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[dirty]"?: string;
  /** Filter by `enabled`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[enabled]"?: string;
  /** Filter by `name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[name]"?: string;
  /** Filter by `origin_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[origin_id]"?: string;
  /** Filter by `published` status. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published]"?: string;
  /** Filter by `published_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published_at]"?: string;
  /** Filter by `revision_number`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[revision_number]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};
