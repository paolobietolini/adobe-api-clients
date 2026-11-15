// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { BuildsLookupResponse, EnvironmentsLookupResponse, LibrariesAttributes, LibrariesLookupResponse, NotesCreatePayload, NotesLookupResponse, PropertiesLookupResponse, RelationshipEntity, RelationshipsLookupResponse } from "./common.ts";

export type DataUpdateLibrary = {
  /** Contains info on the library being updated and the action being performed. */
  data: {
    /** The ID of library being updated. */
    id: string;
    /** Must be set to `libraries`. */
    type: string;
    /** The modified attributes for the resource being updated. */
    attributes?: Record<string, unknown>;
    /** To transition the library between states, the payload must include a `meta` object, containing a single `action` property whose value represents the specific transition action. The available actions for a library depend on its current publishing state. See the API guide on [transitioning a library](https://experienceleague.adobe.com/docs/experience-platform/tags/api/endpoints/libraries.html#transition) for details on the available actions for each library state. */
    meta?: {
      /** The library transition action. The available actions for a library depend on its current publishing state. See the API guide on [transitioning a library](https://experienceleague.adobe.com/docs/experience-platform/tags/api/endpoints/libraries.html#transition) for details on the available actions for each library state. */
      action?: string;
    };
  };
};

export type LibrariesNotesCreatePayload = NotesCreatePayload;

export type LibrariesUpdatePayload = DataUpdateLibrary & {
  data?: {
    attributes?: LibrariesAttributes;
  };
};

export type LibrariesDeleteRuleRelationshipsPayload = DeleteRelationshipsPayload;

export type LibrariesDeleteDataElementRelationshipsPayload = DeleteRelationshipsPayload;

export type LibrariesUpdateExtensionRelationshipsPayload = CreateRelationshipsPayload;

export type LibrariesUpdateRuleRelationshipsPayload = CreateRelationshipsPayload;

export type LibrariesUpdateDataElementRelationshipsPayload = CreateRelationshipsPayload;

export type LibrariesCreateEnvironmentRelationshipsPayload = CreateRelationshipPayload;

export type LibrariesCreateExtensionRelationshipsPayload = CreateRelationshipsPayload;

export type LibrariesCreateRuleRelationshipsPayload = CreateRelationshipsPayload;

export type LibrariesCreateDataElementRelationshipsPayload = CreateRelationshipsPayload;

export type CreateRelationshipPayload = {
  /** Lists the basic details of the entity you wish to establish a relationship with. */
  data?: {
    /** The ID of the entity you wish to add as a relationship. */
    id?: string;
    /** The type of entity you wish to add as a relationship. */
    type?: "app_configurations" | "audit_events" | "builds" | "callbacks" | "companies" | "data_elements" | "environments" | "extensions" | "extension_packages" | "hosts" | "libraries" | "notes" | "properties" | "rules" | "rule_components" | "secrets";
  };
};

export type CreateRelationshipsPayload = {
  /** Lists the basic details of the entities you wish to establish relationships with. */
  data?: {
    /** The ID of the entity you wish to add as a relationship. */
    id?: string;
    /** The type of entity you wish to add as a relationship. */
    type?: string;
  }[];
};

export type DeleteRelationshipsPayload = {
  /** Lists the basic details of the entities that you want to remove from the parent entity's list of relationships. */
  data?: {
    /** The ID of the entity whose relationship you wish to remove. */
    id?: string;
    /** The type of entity whose relationship you wish to remove. */
    type?: string;
  }[];
};

export type RelationshipsListResponse = {
  /** Lists the relationships that you wish to add to the parent resource. */
  data?: RelationshipEntity[];
  /** Contains links that can be used in subsequent fetch requests. */
  links?: Record<string, unknown>;
};

export type LibrariesRuleRelationshipsDeleteResponse = LibrariesRuleRelationshipsListResponse;

export type LibrariesDataElementRelationshipsDeleteResponse = LibrariesDataElementRelationshipsListResponse;

export type LibrariesExtensionRelationshipsDeleteResponse = LibrariesExtensionRelationshipsListResponse;

export type LibrariesRuleRelationshipsUpdateResponse = LibrariesRuleRelationshipsListResponse;

export type LibrariesDataElementRelationshipsUpdateResponse = LibrariesDataElementRelationshipsListResponse;

export type LibrariesExtensionRelationshipsUpdateResponse = LibrariesExtensionRelationshipsListResponse;

export type LibrariesRuleRelationshipsCreateResponse = LibrariesExtensionRelationshipsListResponse;

export type LibrariesExtensionRelationshipsCreateResponse = LibrariesExtensionRelationshipsListResponse;

export type LibrariesDataElementRelationshipsCreateResponse = LibrariesDataElementRelationshipsListResponse;

export type LibrariesEnvironmentRelationshipDeleteResponse = LibrariesEnvironmentRelationshipLookupResponse;

export type LibrariesEnvironmentRelationshipCreateResponse = LibrariesEnvironmentRelationshipLookupResponse;

export type LibrariesEnvironmentRelationshipLookupResponse = RelationshipsLookupResponse & {
  links?: {
    /** A link to the related environment for the library. */
    related?: string;
    /** A link to the environment relationship object for the library. */
    self?: string;
  };
};

export type LibrariesRuleRelationshipsListResponse = RelationshipsListResponse & {
  links?: {
    /** A link to list the related rules for the library. */
    related?: string;
    /** A link to list the rule relationship objects for the library. */
    self?: string;
  };
};

export type LibrariesExtensionRelationshipsListResponse = RelationshipsListResponse & {
  links?: {
    /** A link to list the related extensions for the library. */
    related?: string;
    /** A link to list the extension relationship objects for the library. */
    self?: string;
  };
};

export type LibrariesDataElementRelationshipsListResponse = RelationshipsListResponse & {
  links?: {
    /** A link to list the related data element entities for the library. */
    related?: string;
    /** A link to list the data element relationship objects for the library. */
    self?: string;
  };
};

export type LibrariesNotesCreateResponse = NotesLookupResponse;

export type BuildsCreateResponse = BuildsLookupResponse;

export type LibrariesUpdateResponse = LibrariesLookupResponse;

export type LibrariesLookupUpstreamResponse = LibrariesLookupResponse;

export type LibrariesLookupEnvironmentResponse = EnvironmentsLookupResponse;

export type LibrariesPropertyLookupResponse = PropertiesLookupResponse;

/** GET /libraries/{LIBRARY_ID}/data_elements */
export type ListLibraryDataElementsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /libraries/{LIBRARY_ID}/relationships/data_elements */
export type ListLibraryRelationshipsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /libraries/{LIBRARY_ID}/extensions */
export type ListLibraryExtensionsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /libraries/{LIBRARY_ID}/relationships/extensions */
export type ListExtensionRelationshipsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /libraries/{LIBRARY_ID}/rules */
export type ListLibraryRulesParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /libraries/{LIBRARY_ID}/relationships/rules */
export type ListLibraryRuleRelationshipsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /libraries/{LIBRARY_ID}/notes */
export type ListLibraryNotesParams = {
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
