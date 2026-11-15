// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataUpdateWithMeta, ExtensionPackagesLookupResponse, ExtensionsAttributes, ExtensionsLookupResponse, NotesCreatePayload, NotesLookupResponse, PropertiesLookupResponse } from "./common.ts";

export type ExtensionsNotesCreatePayload = NotesCreatePayload;

export type ExtensionsUpdatePayload = DataUpdateWithMeta & {
  data?: {
    attributes?: ExtensionsAttributes;
  };
};

export type ExtensionsUpdateResponse = ExtensionsLookupResponse;

export type ExtensionsNotesCreateResponse = NotesLookupResponse;

export type ExtensionsOriginLookupResponse = ExtensionsLookupResponse;

export type ExtensionsPropertyLookupResponse = PropertiesLookupResponse;

export type ExtensionsExtensionPackageLookupResponse = ExtensionPackagesLookupResponse;

/** GET /extensions/{EXTENSION_ID}/libraries */
export type ListExtensionLibrariesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /extensions/{EXTENSION_ID}/revisions */
export type ListExtensionRevisionsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /extensions/{EXTENSION_ID}/notes */
export type ListExtensionNotesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};
