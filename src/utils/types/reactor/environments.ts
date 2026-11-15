// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataCreateWithRelationships, DataList, EnvironmentsLookupResponse, EnvironmentsRelationships, HostsLookupResponse, LibrariesLookupResponse, MetaList, PropertiesLookupResponse, RelationshipsLookupResponse } from "./common.ts";

export type EnvironmentsUpdatePayload = DataCreateWithRelationships & {
  data?: {
    attributes: EnvironmentsUpdateAttributes;
    relationships: EnvironmentsRelationships;
  };
};

export type EnvironmentsUpdateAttributes = {
  /** The name of the environment. */
  name?: string;
  /** Indicates whether the environment should be archived. */
  archive?: boolean;
  /** A passphrase for the environment if `archive` is set to `true`. */
  archive_passphrase?: string;
  /** The path for the environment. */
  path?: string;
  /** Indicates whether a debug library is included for the environment. */
  include_debug_library?: boolean;
};

export type BuildsListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type EnvironmentsHostRelationshipLookupResponse = RelationshipsLookupResponse & {
  links?: {
    /** A link to the related host for the environment. */
    related?: string;
    /** A link to the host relationship object for the environment. */
    self?: string;
  };
};

export type EnvironmentsHostLookupResponse = HostsLookupResponse;

export type EnvironmentsUpdateResponse = EnvironmentsLookupResponse;

export type EnvironmentsPropertyLookupResponse = PropertiesLookupResponse;

export type EnvironmentsLibraryLookupResponse = LibrariesLookupResponse;

/** GET /environments/{ENVIRONMENT_ID}/builds */
export type ListBuildsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};
