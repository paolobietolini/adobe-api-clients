// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataElementsAttributes, DataElementsLookupResponse, DataUpdateWithMeta, NotesCreatePayload, NotesLookupResponse } from "./common.ts";

export type DataElementsNotesCreatePayload = NotesCreatePayload;

export type DataElementsUpdatePayload = DataUpdateWithMeta & {
  data?: {
    attributes?: DataElementsAttributes;
  };
};

export type DataElementsNotesCreateResponse = NotesLookupResponse;

export type DataElementsUpdateResponse = DataElementsLookupResponse;

/** GET /data_elements/{DATA_ELEMENT_ID}/notes */
export type ListDataElementNotesParams = {
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
