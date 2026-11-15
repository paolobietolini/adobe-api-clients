// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { BuildsLookupResponse } from "./common.ts";

export type BuildsUpdatePayload = {
  /** Contains the attributes and type for the build being republished. */
  data: {
    /** The ID of the build being republished. */
    id: string;
    /** Must be set to `builds`. */
    type: string;
    /** If this property is included with an `action` property set to `republish`, the call republishes the build. */
    meta: {
      /** If this property is included with a value of `republish`, the call republishes the build. */
      action?: string;
    };
  };
};

export type BuildsUpdateResponse = BuildsLookupResponse;

/** GET /libraries/{LIBRARY_ID}/builds */
export type ListLibraryBuildsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `status`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[status]"?: string;
  /** Filter by `token`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[token]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};
