// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { BasicResourceProperties, DataLookup, RelatedProperty } from "./common.ts";

export type RelatedEntity = {
  /** Contains details about the entity associated with the audit event. */
  entity?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related entity. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related entity. */
      related?: string;
    };
    /** Contains further information about the related entity. */
    data?: {
      /** The unique ID of the entity. */
      id?: string;
      /** The resource type for the entity. */
      type?: string;
    };
  };
};

export type AuditEventsEntity = BasicResourceProperties & {
  /** Contains the audit event's attributes. */
  attributes?: {
    /** The display name for the user that triggered the action recorded by the audit event. */
    attributed_to_display_name?: string;
    /** The email address for the user that triggered the action recorded by the audit event. */
    attributed_to_email?: string;
    /** A timestamp of when the audit event was created in the system. */
    created_at?: string;
    /** The display name for the entity the audit event is associated with. */
    display_name?: string;
    /** The type of audit event. Audit events types are structured using the syntax `{RESOURCE_TYPE}.{EVENT}` (for example, `build.created`). `{RESOURCE_TYPE}` can be any of the following: * `property` * `extension` * `data_element` * `rule` * `rule_component` * `library` * `build` * `environment` * `host` `{EVENT}` can any of the following: * `created` * `updated` * `deleted` */
    type_of?: string;
    /** A timestamp of when the audit event was last updated. */
    updated_at?: string;
    /** A JSON payload represented as a string, containing the details of the entity associated with the audit event. */
    entity?: string;
  };
  /** Provides information about other entities that are related to this audit event. */
  relationships?: RelatedProperty & RelatedEntity;
  /** Contains links related to the audit event which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the entity associated with the audit event. */
    entity?: string;
    /** A link to the property that owns the audit event. */
    property?: string;
    /** A link to the audit event itself. */
    self?: string;
  };
};

export type AuditEventsLookupResponse = DataLookup & {
  data?: AuditEventsEntity;
};

/** GET /audit_events */
export type ListAuditEventsParams = {
  /** Limits the number of results per page (for example, `page[size]=50`). Can be used in conjunction with `page[number]` to manage response pagination. */
  "page[size]"?: number;
  /** The page index to return for the listing response (for example, `page[number]=2`). Can be used in conjunction with `page[size]` to manage response pagination. >**NOTE**: Responses for listing calls contain a `meta.pagination` object which contains the indexes for the current, previous, and next pages in the response. To access these pages, use their index values for this parameter in subsequent API calls. */
  "page[number]"?: number;
  /** Filter by `created_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[created_at]"?: string;
  /** Filter by `updated_at` timestamp. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[updated_at]"?: string;
  /** Filter by `type`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[type_of]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};
