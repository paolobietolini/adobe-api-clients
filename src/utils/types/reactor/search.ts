// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

export type SearchPayload = {
  /** The result set offset. */
  from?: number;
  /** The maximum number of results to return. */
  size?: number;
  /** Describes the search query as a structured JSON object. */
  query: {
    /** Describes a query based on a specific field within a Reactor API resource. The key to this field must be the dot-notation path to the field in the resource object, such as `attributes.name` or `meta.latest_revision_number`. */
    "{RESOURCE_FIELD_PATH}"?: {
      /** If included and set to `true`, the query checks whether the field exists for the resource. If included and set to `false`, the query checks whether the field does not exist. If a resource has a field with a value of `null`, that field is treated as if it does not exist. */
      exists?: boolean;
      /** Describes a value range for the field that the query checks for. */
      range?: {
        /** If included, the query checks whether the field is greater than the supplied value (non-inclusive). */
        gt?: number;
        /** If included, the query checks whether the field is greater than or equal to the supplied value. */
        gte?: number;
        /** If included, the query checks whether the field is less than the supplied value (non-inclusive). */
        lt?: number;
        /** If included, the query checks whether the field is less than or equal to the supplied value. */
        lte?: number;
      };
      /** If included, the query checks whether the field value matches the value of this property. It can optionally be combined with a `value_operator` property to determine how the value is interpreted when multiple space-separated terms are included in the string. */
      value?: string;
      /** The boolean logic to use when matching multiple `value` terms against Reactor API resources. `value` must be included in order to use this property. See the section on [value operator logic](https://experienceleague.adobe.com/docs/experience-platform/tags/api/endpoints/search.html?lang=en#value-operator) for details on how this field affects the interpretation of `value`. */
      value_operator?: "AND" | "OR";
    };
  };
  /** Describes the order in which to sort results. */
  sort?: {
    /** Describes a specific field within a Reactor API resource to sort by, including the sort order. The key to this field must be the dot-notation path to the field in the resource object, such as `attributes.name` or `meta.latest_revision_number`. The value must be either `asc` for ascending order, or `desc` for descending order. */
    "{RESOURCE_FIELD_PATH}": string;
  }[];
  /** Lists the resource types to query. Only searchable resource type values can be included: * `audit_events` * `builds` * `callbacks` * `data_elements` * `environments` * `extension_packages` * `extensions` * `hosts` * `libraries` * `properties` * `rule_components` * `rules` */
  resource_types?: string[];
};

export type SearchResponse = {
  /** Lists the details of the Reactor API resources that matched the query. */
  data?: Record<string, unknown>[];
  /** Provides meta information about the search results. */
  meta?: {
    /** The total number of resources that matched the search query. */
    total_hits?: number;
  };
};
