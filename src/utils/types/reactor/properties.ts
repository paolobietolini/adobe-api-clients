// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { CallbacksAttributes, CallbacksLookupResponse, DataCreate, DataCreateWithRelationships, DataElementsAttributes, DataElementsLookupResponse, DataUpdate, EnvironmentsLookupResponse, EnvironmentsRelationships, ExtensionsAttributes, ExtensionsLookupResponse, HostsAttributes, HostsLookupResponse, LibrariesAttributes, LibrariesLookupResponse, NotesCreatePayload, NotesLookupResponse, PropertiesAttributes, PropertiesLookupResponse, RulesAttributes, RulesLookupResponse, SecretsLookupResponse } from "./common.ts";

export type DataCreateNoType = {
  /** Contains the attributes for the resource being created. */
  data: {
    /** The attributes for the resource being created. */
    attributes: Record<string, unknown>;
  };
};

export type CallbacksCreatePayload = DataCreateNoType & {
  data?: {
    attributes?: CallbacksAttributes;
  };
};

export type ExtensionsCreatePayload = DataCreateWithRelationships & {
  data?: {
    attributes?: ExtensionsAttributes;
    relationships: ExtensionsRelationships;
  };
};

export type SecretsCreatePayload = DataCreateWithRelationships & {
  data?: {
    attributes: SecretsAttributes;
    relationships: SecretsRelationships;
  };
};

export type EnvironmentsCreatePayload = DataCreateWithRelationships & {
  data?: {
    attributes: EnvironmentsAttributes;
    relationships: EnvironmentsRelationships;
  };
};

export type PropertiesNotesCreatePayload = NotesCreatePayload;

export type RulesCreatePayload = DataCreate & {
  data?: {
    attributes?: RulesCreateAttributes;
  };
};

export type LibrariesCreatePayload = DataCreate & {
  data?: {
    attributes?: LibrariesAttributes;
  };
};

export type HostsCreatePayload = DataCreate & {
  data?: {
    attributes?: HostsCreateAttributes;
  };
};

export type DataElementsCreatePayload = DataCreateWithRelationships & {
  data?: {
    attributes: DataElementsCreateAttributes;
    relationships: DataElementsRelationships;
  };
};

export type PropertiesUpdatePayload = DataUpdate & {
  data?: {
    attributes?: PropertiesAttributes;
  };
};

export type DataElementsCreateAttributes = DataElementsAttributes;

export type DataElementsRelationships = {
  /** Establishes the required relationship between the data element and the extension that provides it. */
  extension: {
    /** Contains the basic information about the extension. */
    data: {
      /** The ID of the extension. */
      id: string;
      /** The resource type for the extension (`extensions`). */
      type: string;
    };
  };
};

export type SecretsRelationships = {
  /** Establishes the required relationship between the secret and the environment it is associated with. */
  environment: {
    /** Contains the basic information about the environment. */
    data: {
      /** The ID of the environment. */
      id: string;
      /** The resource type for the environment (`environments`). */
      type: string;
    };
  };
};

export type ExtensionsRelationships = {
  /** Describes the extension package that defines the extension's capabilities. */
  extension_package: {
    /** Provides the basic information about the extension package. */
    data: {
      /** The ID of the extension package. */
      id: string;
      /** The resource type for the extension package (`extension_packages`). */
      type: string;
    };
  };
};

export type EnvironmentsAttributes = {
  /** The name of the environment. */
  name: string;
  /** Indicates whether the environment should be archived. */
  archive?: boolean;
  /** A passphrase for the environment if `archive` is set to `true`. */
  archive_passphrase?: string;
  /** The path for the environment. */
  path?: string;
  /** The stage for the environment (`development`, `staging`, or `production`). */
  stage?: string;
};

export type HostsCreateAttributes = HostsAttributes;

export type RulesCreateAttributes = RulesAttributes;

export type SecretsAttributes = {
  /** The secret name. */
  name: string;
  /** The type of secret credential. Has three possible values: * `token`: A token string. * `simple-http`: A username and password. * `oauth2`: Credentials conforming to the OAuth standard. */
  type_of: string;
  /** An object that contains the credential values for the secret. Depending on the `type_of` attribute, different properties must provided. See the section on [credentials](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/secrets.html?lang=en#credentials) in the secrets guide for details on the requirements for each type. */
  credentials: Record<string, unknown>;
};

export type CallbacksCreateResponse = CallbacksLookupResponse;

export type ExtensionsCreateResponse = ExtensionsLookupResponse;

export type HostsCreateResponse = HostsLookupResponse;

export type PropertiesNotesCreateResponse = NotesLookupResponse;

export type SecretsCreateResponse = SecretsLookupResponse;

export type RulesCreateResponse = RulesLookupResponse;

export type LibrariesCreateResponse = LibrariesLookupResponse;

export type EnvironmentsCreateResponse = EnvironmentsLookupResponse;

export type DataElementsCreateResponse = DataElementsLookupResponse;

export type PropertiesUpdateResponse = PropertiesLookupResponse;

/** GET /properties/{PROPERTY_ID}/callbacks */
export type ListCallbacksParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /properties/{PROPERTY_ID}/data_elements */
export type ListPropertyDataElementsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `published_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published_at]"?: string;
  /** Filter by `published` status. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published]"?: string;
  /** Filter by `enabled`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[enabled]"?: string;
  /** Filter by `name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[name]"?: string;
  /** Filter by `origin_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[origin_id]"?: string;
  /** Filter by `revision_number`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[revision_number]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /properties/{PROPERTY_ID}/environments */
export type ListEnvironmentsParams = {
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
  /** Filter by `stage`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[stage]"?: string;
  /** Filter by `token`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[token]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /properties/{PROPERTY_ID}/extensions */
export type ListExtensionsParams = {
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
  /** Filter by `display_name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[display_name]"?: string;
  /** Filter by `enabled`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[enabled]"?: string;
  /** Filter by `origin_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[origin_id]"?: string;
  /** Filter by `published` status. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published]"?: string;
  /** Filter by `published_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published_at]"?: string;
  /** Filter by `revision_number`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[revision_number]"?: string;
  /** Filter by `version`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[version]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /properties/{PROPERTY_ID}/hosts */
export type ListHostsParams = {
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
  /** Filter by `display_name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[display_name]"?: string;
  /** Filter by `enabled`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[enabled]"?: string;
  /** Filter by `origin_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[origin_id]"?: string;
  /** Filter by `published` status. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published]"?: string;
  /** Filter by `published_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[published_at]"?: string;
  /** Filter by `revision_number`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[revision_number]"?: string;
  /** Filter by `version`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[version]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /properties/{PROPERTY_ID}/libraries */
export type ListLibrariesParams = {
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
  /** Filter by `stale` status. A library becomes stale when another library on the [upstream](https://experienceleague.adobe.com/docs/experience-platform/tags/publish/publishing-flow.html#upstream) has been changed and the current library needs to be rebuilt to reflect those changes. A library may also enter a stale state if one of the extensions it uses receives an update. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[stale]"?: string;
  /** Filter by `state`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[state]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /properties/{PROPERTY_ID}/rules */
export type ListRulesParams = {
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

/** GET /properties/{PROPERTY_ID}/secrets */
export type ListPropertySecretsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `environment_id`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[environment_id]"?: string;
  /** Filter by `name`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[name]"?: string;
  /** Filter by `status`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[status]"?: string;
  /** Filter by `type`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[type_of]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

/** GET /properties/{PROPERTY_ID}/notes */
export type ListPropertyNotesParams = {
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
