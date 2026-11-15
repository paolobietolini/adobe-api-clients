// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

/** Pagination block returned in `meta` of list responses */
export type ReactorPagination = {
  current_page?: number;
  next_page?: number | null;
  prev_page?: number | null;
  total_pages?: number;
  total_count?: number;
};

/** JSON:API list envelope; `data` items are typed per endpoint */
export type ReactorList<T> = {
  data: T[];
  meta?: { pagination?: ReactorPagination };
  links?: Record<string, string>;
};

export type DataCreate = {
  /** Contains the attributes and type for the resource being created. */
  data: {
    /** The attributes for the resource being created. */
    attributes: Record<string, unknown>;
    /** The type of resource being created. */
    type: "app_configurations" | "audit_events" | "builds" | "callbacks" | "companies" | "data_elements" | "environments" | "extensions" | "extension_packages" | "hosts" | "libraries" | "notes" | "properties" | "rules" | "rule_components" | "secrets";
  };
};

export type DataCreateWithRelationships = {
  /** Contains the attributes, relationships, and type for the resource being created. */
  data: {
    /** The attributes for the resource being created. */
    attributes?: Record<string, unknown>;
    /** The relationships for the resource being created. */
    relationships?: Record<string, unknown>;
    /** The type of resource being created. */
    type?: "app_configurations" | "audit_events" | "builds" | "callbacks" | "companies" | "data_elements" | "environments" | "extensions" | "extension_packages" | "hosts" | "libraries" | "notes" | "properties" | "rules" | "rule_components" | "secrets";
  };
};

export type DataUpdate = {
  /** Contains the attributes and type for the resource being updated. */
  data: {
    /** The modified attributes for the resource being updated. */
    attributes: Record<string, unknown>;
    /** The ID of resource being updated. */
    id: string;
    /** The type of resource being updated. */
    type: "app_configurations" | "audit_events" | "builds" | "callbacks" | "companies" | "data_elements" | "environments" | "extensions" | "extension_packages" | "hosts" | "libraries" | "notes" | "properties" | "rules" | "rule_components" | "secrets";
  };
};

export type DataUpdateWithMeta = {
  /** Contains the attributes and type for the resource being updated. */
  data: {
    /** The modified attributes for the resource being updated. */
    attributes: Record<string, unknown>;
    /** If this property is included with an `action` property set to `revise`, the call creates a new revision for the resource instead of overwriting the current revision. */
    meta: {
      /** If this property is included with a value of `revise`, the call creates a new revision for the resource instead of overwriting the current revision. */
      action?: string;
    };
    /** The ID of resource being updated. */
    id: string;
    /** The type of resource being updated. */
    type: "app_configurations" | "audit_events" | "builds" | "callbacks" | "companies" | "data_elements" | "environments" | "extensions" | "extension_packages" | "hosts" | "libraries" | "notes" | "properties" | "rules" | "rule_components" | "secrets";
  };
};

export type DataLookup = {
  /** Contains the details of the resource. */
  data?: Record<string, unknown>;
};

export type DataList = {
  /** Contains the results from the listing call. */
  data?: Record<string, unknown>[];
};

export type MetaList = {
  /** Contains a `pagination` object that provides pagination information about the list response. */
  meta?: {
    /** Contains pagination information about the list response. */
    pagination?: {
      /** The current page of the response. */
      current_page?: number;
      /** The next page of the response. */
      next_page?: number;
      /** The previous page of the response. */
      prev_page?: number;
      /** The total number of pages in the response. */
      total_pages?: number;
      /** The total number of results in the response. */
      total_count?: number;
    };
  };
};

export type AppConfigurationsAttributes = {
  /** The name of the app configuration. */
  name?: string;
  /** The third-party ID for the app this configuration is built for. */
  app_id?: string;
  /** The platform for the app configuration, either `web` or `mobile`. */
  platform?: string;
  /** The messaging service for the configuration, such as Apple’s `apns` or Google’s `fcm`. This value determines which key types can be used. */
  messaging_service?: string;
  /** The specific protocol supported by the `messaging_service` vendor. This value determines the definition of the `push_credential` object, which is only used by Adobe services and not included in API responses. */
  key_type?: string;
  /** An object that stores the credentials based on the specified protocol (`key_type`). The credential is encrypted at rest. This field is not normally decrypted or included in API responses, as only Adobe services can receive a response containing a decrypted `push_credential`. */
  push_credential?: Record<string, unknown>;
};

export type AppConfigurationsCreatePayload = DataCreate & {
  data?: {
    attributes?: AppConfigurationsAttributes;
  };
};

export type CallbacksAttributes = {
  /** Lists the audit event types that this callback is subscribed to. */
  subscriptions?: string[];
  /** The URL that the callback will send messages to. */
  url?: string;
};

export type NotesCreatePayload = DataCreate & {
  data?: {
    attributes?: NotesAttributes;
  };
};

export type PropertiesAttributes = {
  /** The name of the property. */
  name?: string;
  /** The platform for the property, either `web` or `mobile`. */
  platform?: string;
  /** Indicates whether this property is in development. */
  development?: boolean;
  /** A list of domains associated with the property. This field is **required** when the property's `platform` attribute is set to `web`. */
  domains?: string[];
  /** A privacy-related category for the property. */
  privacy?: string;
  /** Indicates whether rule component sequencing is enabled for the property. */
  rule_component_sequencing_enabled?: boolean;
  /** Indicates whether Secure Sockets Layer (SSL) is enabled for the property. */
  ssl_enabled?: boolean;
  /** Indicates whether missing data elements return an empty string on this property. */
  undefined_vars_return_empty?: boolean;
};

export type RelatedProperties = {
  /** Contains a link to the related properties for the resource. */
  properties?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related properties for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related properties for the resource. */
      related?: string;
    };
  };
};

export type RelatedCallbacks = {
  /** Contains a link to the related callbacks for the resource. */
  callbacks?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related callbacks for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related callbacks for the resource. */
      related?: string;
    };
  };
};

export type RelatedHosts = {
  /** Contains a link to the related hosts for the resource. */
  hosts?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related hosts for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related hosts for the resource. */
      related?: string;
    };
  };
};

export type RelatedBuilds = {
  /** Contains a link to the related builds for the resource. */
  builds?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related builds for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related builds for the resource. */
      related?: string;
    };
  };
};

export type RelatedEnvironments = {
  /** Contains a link to the related environments for the resource. */
  environments?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related environments for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related environments for the resource. */
      related?: string;
    };
  };
};

export type RelatedLibraries = {
  /** Contains a link to the related libraries for the resource. */
  libraries?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related libraries for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related libraries for the resource. */
      related?: string;
    };
  };
};

export type RelatedRevisions = {
  /** Contains a link to the related revisions for the resource. */
  revisions?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related revisions for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related revisions for the resource. */
      related?: string;
    };
  };
};

export type RelatedDataElements = {
  /** Contains a link to the related data elements for the resource. */
  data_elements?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related data elements for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related data elements for the resource. */
      related?: string;
    };
  };
};

export type RelatedDataElementsWithSelf = {
  /** Contains a link to the related data elements for the resource. */
  data_elements?: {
    /** Contains links that can be used in a subsequent fetch calls. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related data elements for the resource. */
      related?: string;
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related data elements. */
      self?: string;
    };
  };
};

export type RelatedExtensionsWithSelf = {
  /** Contains a link to the related extensions for the resource. */
  extensions?: {
    /** Contains links that can be used in a subsequent fetch calls. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related extensions for the resource. */
      related?: string;
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related extensions. */
      self?: string;
    };
  };
};

export type RelatedExtensions = {
  /** Contains a link to the related extensions for the resource. */
  extensions?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related extensions for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related extensions for the resource. */
      related?: string;
    };
  };
};

export type RelatedRuleComponents = {
  /** Contains a link to the related rule components for the resource. */
  rules?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related rule components for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related rule components for the resource. */
      related?: string;
    };
  };
};

export type RelatedRules = {
  /** Contains a link to the related rules for the resource. */
  rules?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related rules for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related rules for the resource. */
      related?: string;
    };
  };
};

export type RelatedRulesWithSelf = {
  /** Contains a link to the related rules for the resource. */
  rules?: {
    /** Contains links that can be used in a subsequent fetch calls. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related rules for the resource. */
      related?: string;
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related rules. */
      self?: string;
    };
  };
};

export type RelatedNotes = {
  /** Contains a link to the related notes for the resource. */
  notes?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related notes for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related notes for the resource. */
      related?: string;
    };
  };
};

export type RelatedCompany = {
  /** Contains information about the company that owns the resource. */
  company?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related company. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related company. */
      related?: string;
    };
    /** Contains further information about the related company. */
    data?: {
      /** The unique ID of the company. */
      id?: string;
      /** The resource type for the company (`companies`). */
      type?: string;
    };
  };
};

export type RelatedLastBuild = {
  /** Contains information about the last build for a library. */
  last_build?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the build. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the build. */
      related?: string;
    };
    /** Contains further information about the build. */
    data?: {
      /** The unique ID of the build. */
      id?: string;
      /** The resource type for the build (`builds`). */
      type?: string;
    };
  };
};

export type RelatedUpstreamLibrary = {
  /** Contains information about the [upstream library](https://experienceleague.adobe.com/docs/experience-platform/tags/publish/publishing-flow.html?lang=en#upstream) for this library. */
  upstream_library?: {
    /** Contains basic information about the upstream library. */
    data?: {
      /** The unique ID of the library. */
      id?: string;
      /** The resource type for the library (`libraries`). */
      type?: string;
    };
  };
};

export type RelatedOrigin = {
  /** Contains information about the resource's origin. The origin is the previous resource that was revised to make this resource. */
  origin?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related origin. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related origin. */
      related?: string;
    };
    /** Contains further information about the related origin. */
    data?: {
      /** The unique ID of the origin. */
      id?: string;
      /** The resource type for the origin. */
      type?: string;
    };
  };
};

export type RelatedEnvironment = {
  /** Contains information about the environment that this resource is active under. */
  environment?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related environment. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related environment. */
      related?: string;
    };
    /** Contains further information about the related environment. */
    data?: {
      /** The unique ID of the environment. */
      id?: string;
      /** The resource type for the environment (`environments`). */
      type?: string;
    };
  };
};

export type RelatedEnvironmentWithMeta = RelatedEnvironment & {
  environment?: {
    /** Contains meta information about the environment. */
    meta?: {
      /** The publishing flow stage for the environment. */
      stage?: string;
    };
  };
};

export type RelatedExtension = {
  /** Contains information about the extension that provides the resource. */
  extension?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related extension. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related extension. */
      related?: string;
    };
    /** Contains further information about the related extension. */
    data?: {
      /** The unique ID of the extension. */
      id?: string;
      /** The resource type for the extension (`extensions`). */
      type?: string;
    };
  };
};

export type RelatedExtensionPackage = {
  /** Contains information about the related package for the extension. */
  extension_package?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the extension package. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the extension package. */
      related?: string;
    };
    /** Contains further information about the extension package. */
    data?: {
      /** The unique ID of the extension package. */
      id?: string;
      /** The resource type for the extension package (`extension_packages`). */
      type?: string;
    };
  };
};

export type RelatedUpdatedWithExtension = {
  /** Contains information about the extension that updated the resource, if applicable. */
  updated_with_extension?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related extension. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related extension. */
      related?: string;
    };
    /** Contains further information about the related extension. */
    data?: {
      /** The unique ID of the extension. */
      id?: string;
      /** The resource type for the extension (`extensions`). */
      type?: string;
    };
  };
};

export type RelatedUpdatedWithExtensionPackage = {
  /** Contains information about the extension that updated the resource, if applicable. */
  updated_with_extension_package?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related extension. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related extension. */
      related?: string;
    };
    /** Contains further information about the related extension. */
    data?: {
      /** The unique ID of the extension. */
      id?: string;
      /** The resource type for the extension (`extensions`). */
      type?: string;
    };
  };
};

export type RelatedProperty = {
  /** Contains details about the property that owns the resource. */
  property?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related property for the resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related property for the resource. */
      related?: string;
    };
    /** Contains further information about the related property. */
    data?: {
      /** The unique ID of the property. */
      id?: string;
      /** The resource type for the property (`properties`). */
      type?: string;
    };
  };
};

export type RelatedResource = {
  /** Contains a link to the resource that that the note is attached to. */
  resource?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the related resource. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the related resource. */
      related?: string;
    };
    /** Contains further information about the related resource. */
    data?: {
      /** The unique ID of the resource. */
      id?: string;
      /** The resource type. */
      type?: string;
    };
  };
};

export type RelatedLibrary = {
  /** Contains a link to the library that is assigned to this environment. */
  library?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the library. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the library. */
      related?: string;
    };
    /** Contains further information about the library. */
    data?: {
      /** The unique ID of the library. */
      id?: string;
      /** The resource type for the library (`libraries`). */
      type?: string;
    };
  };
};

export type RelatedHost = {
  /** Contains a link to the host that is assigned to this environment. */
  host?: {
    /** Contains a `related` link that can be used in a subsequent API call to fetch the host. */
    links?: {
      /** A link that can be used in a subsequent API call to fetch the host. */
      related?: string;
      /** A link that can be used in a subsequent API call to fetch the relationship object for the host. */
      self?: string;
    };
    /** Contains further information about the host. */
    data?: {
      /** The unique ID of the host. */
      id?: string;
      /** The resource type for the host (`hosts`). */
      type?: string;
    };
  };
};

export type BasicResourceProperties = {
  /** The unique ID for the resource. */
  id?: string;
  /** The resource type. */
  type?: string;
};

export type AppConfigurationsEntity = BasicResourceProperties & {
  /** Contains the attributes for the app configuration. */
  attributes?: {
    /** A timestamp of when the app configuration was created in the system. */
    created_at?: string;
    /** A timestamp of when the app configuration was last updated. */
    updated_at?: string;
    /** The third-party ID for the app this configuration is built for. */
    app_id?: string;
    /** The name of the app configuration. */
    name?: string;
    /** The platform for the app configuration, either `web` or `mobile`. */
    platform?: string;
    /** The messaging service for the configuration, such as Apple’s `apns` or Google’s `fcm`. This value determines which key types can be used. */
    messaging_service?: string;
    /** The specific protocol supported by the `messaging_service` vendor. This value determines the definition of the `push_credential` object, which is only used by Adobe services and not included in API responses. */
    key_type?: string;
  };
  /** Provides information about other entities that are related to this app configuration. */
  relationships?: RelatedCompany;
  /** Contains links related to the app configuration which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the company that owns the app configuration. */
    company?: string;
    /** A link to the app configuration itself. */
    self?: string;
  };
};

export type PropertiesEntity = BasicResourceProperties & {
  /** Contains the property's attributes. */
  attributes?: {
    /** A timestamp of when the property was created in the system. */
    created_at?: string;
    /** Indicates whether this property is enabled. */
    enabled?: boolean;
    /** The name of the property. */
    name?: string;
    /** A timestamp of when the property was last updated. */
    updated_at?: string;
    /** The platform for the property, either `web` or `mobile`. */
    platform?: string;
    /** Indicates whether this property is in development. */
    development?: boolean;
    /** A unique token for the property. When a build is pushed to an Adobe-managed host (`akamai`), this token is used to identify the property within the library's folder structure. This also prevent's the property's `id` value from being unnecessarily exposed. This also applies to `sftp` hosts so that libraries are constructed in the same manner. */
    token?: string;
    /** A list of domains associated with the property. */
    domains?: string[];
    /** Indicates whether missing data elements return an empty string on this property. */
    undefined_vars_return_empty?: boolean;
    /** Indicates whether rule component sequencing is enabled on this property. */
    rule_component_sequencing_enabled?: boolean;
  };
  /** Provides information about other entities that are related to this property. */
  relationships?: RelatedCompany & RelatedCallbacks & RelatedHosts & RelatedEnvironments & RelatedLibraries & RelatedDataElements & RelatedExtensions & RelatedRules & RelatedNotes;
  /** Contains links related to the property which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the company that owns the property. */
    company?: string;
    /** A link to the data elements employed by the property. */
    data_elements?: string;
    /** A link to the environments employed by the property. */
    environments?: string;
    /** A link to the extensions employed by the property. */
    extensions?: string;
    /** A link to the rules employed by the property. */
    rules?: string;
    /** A link to the property itself. */
    self?: string;
  };
  /** Contains meta information about the property. */
  meta?: {
    /** Lists the rights that are enabled for the property. */
    rights?: string[];
  };
};

export type DataElementsAttributes = {
  /** The name of the data element. */
  name?: string;
  /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the data element. */
  delegate_descriptor_id?: string;
  /** Indicates whether the data element removes leading and trailing whitespace characters in text. This setting also converts any instances of two or more consecutive spaces in the middle of the text with just one space each. */
  clean_text?: boolean;
  /** The default value of the data element. Returns `null` if no default value exists. */
  default_value?: Record<string, unknown>;
  /** Indicates whether this data element is enabled. */
  enabled?: boolean;
  /** Indicates whether the data element converts string values to lowercase. */
  force_lower_case?: boolean;
  /** A custom settings JSON object represented as a string. */
  settings?: string;
  /** The duration that the data element's value will be persisted. This attribute is set to `null` by default, meaning the data element value will not persist at all. To implement storage, the following options are available: * `pageview`: Data element values are held in a JavaScript variable inside the library. If the user navigates to a new page or refreshes the page, the value is discarded. * `session`: Data element values are persisted to session storage. When the browser tab is closed, the value is discarded. * `visitor`: Data element values are persisted to local storage. The value will be persisted indefinitely. */
  storage_duration?: "pageview" | "session" | "visitor";
};

export type DataElementsEntity = BasicResourceProperties & {
  /** Contains the data element's attributes. */
  attributes?: {
    /** A timestamp of when the data element was created in the system. */
    created_at?: string;
    /** A timestamp of when the data element was deleted from the system. Returns `null` if the data element still exists. */
    deleted_at?: string;
    /** Indicates whether changes have been made to the data element that have not been pushed to a library. */
    dirty?: boolean;
    /** Indicates whether this data element is enabled. */
    enabled?: boolean;
    /** The name of the data element. */
    name?: string;
    /** Indicates whether this data element has been published as part of a build. */
    published?: boolean;
    /** A timestamp of when the data element was published. Returns `null` if `published` is set to `false`. */
    published_at?: string;
    /** A timestamp of when the data element was last updated. */
    updated_at?: string;
    /** Indicates whether the data element removes leading and trailing whitespace characters in text. This setting also converts any instances of two or more consecutive spaces in the middle of the text with just one space each. */
    clean_text?: boolean;
    /** The default value of the data element. Returns `null` if no default value exists. */
    default_value?: Record<string, unknown>;
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the data element. */
    delegate_descriptor_id?: string;
    /** Indicates whether the data element converts string values to lowercase. */
    force_lower_case?: boolean;
    /** A custom settings JSON object represented as a string. */
    settings?: string;
    /** The duration that the data element's value will be persisted. This attribute is set to `null` by default, meaning the data element value will not persist at all. To implement storage, the following options are available: * `pageview`: Data element values are held in a JavaScript variable inside the library. If the user navigates to a new page or refreshes the page, the value is discarded. * `session`: Data element values are persisted to session storage. When the browser tab is closed, the value is discarded. * `visitor`: Data element values are persisted to local storage. The value will be persisted indefinitely. */
    storage_duration?: "pageview" | "session" | "visitor";
  };
  /** Provides information about other entities that are related to this data element. */
  relationships?: RelatedLibraries & RelatedRevisions & RelatedNotes & RelatedProperty & RelatedOrigin & RelatedExtension & RelatedUpdatedWithExtensionPackage & RelatedUpdatedWithExtension;
  /** Contains links related to the data element which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the property that owns the data element. */
    property?: string;
    /** A link to the origin of the data element. The origin is the data element that was updated to create this data element. */
    origin?: string;
    /** A link to the data element itself. */
    self?: string;
    /** A link to the extension that defines the data element's type. */
    extension?: string;
  };
  /** Contains meta information about the data element. */
  meta?: {
    /** The latest revision number for the data element. */
    latest_revision_number?: number;
  };
};

export type ExtensionsAttributes = {
  /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the extension. */
  delegate_descriptor_id?: string;
  /** Indicates whether this extension is enabled. */
  enabled?: boolean;
  /** A custom settings JSON object represented as a string. */
  settings?: string;
};

export type ExtensionsEntity = BasicResourceProperties & {
  /** Contains the extension's attributes. */
  attributes?: {
    /** A timestamp of when the extension was created in the system. */
    created_at?: string;
    /** A timestamp of when the extension was deleted from the system. Returns `null` if the extension still exists. */
    deleted_at?: string;
    /** Indicates whether changes have been made to the extension that have not been pushed to a library. */
    dirty?: boolean;
    /** Indicates whether this extension is enabled. */
    enabled?: boolean;
    /** The name of the extension. */
    name?: string;
    /** Indicates whether this extension has been published. */
    published?: boolean;
    /** A timestamp of when the extension was published. Returns `null` if `published` is set to `false`. */
    published_at?: string;
    /** The revision number for the extension. */
    revision_number?: number;
    /** A timestamp of when the extension was last updated. */
    updated_at?: string;
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the extension. */
    delegate_descriptor_id?: string;
    /** A display name for the extension. */
    display_name?: string;
    /** The current review status of the extension. */
    review_status?: string;
    /** The version number of the extension. */
    version?: string;
    /** A custom settings JSON object represented as a string. */
    settings?: string;
  };
  /** Provides information about other entities that are related to this extension. */
  relationships?: RelatedLibraries & RelatedRevisions & RelatedNotes & RelatedProperty & RelatedOrigin & RelatedUpdatedWithExtensionPackage & RelatedExtensionPackage;
  /** Contains links related to the extension which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the property that owns the extension. */
    property?: string;
    /** A link to the origin of the extension. The origin is the extension that was updated to create this extension. */
    origin?: string;
    /** A link to the extension itself. */
    self?: string;
    /** A link to the extension package which defines the additional capabilities that the extension makes available. */
    extension_package?: string;
    /** A link to the latest extension package which defines the additional capabilities that the extension makes available. */
    latest_extension_package?: string;
  };
  /** Contains meta information about the extension. */
  meta?: {
    /** The latest revision number for the extension. */
    latest_revision_number?: number;
  };
};

export type EnvironmentsRelationships = {
  /** Describes the host that the environment will be assigned to. */
  host: {
    /** Contains basic information about the host. */
    data: {
      /** The ID of the host. */
      id: string;
      /** The resource type for the host (`hosts`). */
      type: string;
    };
  };
};

export type EnvironmentsEntity = BasicResourceProperties & {
  /** Contains the environment's attributes. */
  attributes?: {
    /** Indicates whether the environment is archived. */
    archive?: boolean;
    /** A timestamp of when the environment was created in the system. */
    created_at?: string;
    /** The base path for the library that has been assigned to the environment. */
    library_path?: string;
    /** The name of the JavaScript file that contains the library that has been assigned to the environment. */
    library_name?: string;
    /** Contains an expanded list of all the libraries that are built as part of this environment. Since only one library can be built on an environment at a time, this array typically contains the minified and unminified versions of the same library. */
    library_entry_points?: {
      /** The name of the JavaScript file that contains the library. */
      library_name?: string;
      /** Indicates whether this is the minified version of the library. The minified version of the library is significantly smaller and more efficient, and should therefore be the version that is employed on your webpage. The non-minified version contains comments and is provided for debugging purposes. */
      minified?: boolean;
      /** Contains the full path to the library, which is the `library_path` concatenated with the `library_name`. */
      references?: string[];
      /** If this object represents a minified library, this attribute provides the full path to the un-minififed version. */
      license_path?: string;
    }[];
    /** The name of the environment. */
    name?: string;
    /** The path for the environment. */
    path?: string;
    /** The stage for the environment (`development`, `staging`, or `production`). */
    stage?: string;
    /** A timestamp of when the environment was last updated. */
    updated_at?: string;
    /** The current status of the environment. */
    status?: string;
    /** A unique token for the environment. When a build is pushed to an Adobe-managed host (`akamai`), this token is used to identify the environment within the library's folder structure. This also prevent's the environment's `id` value from being unnecessarily exposed. This also applies to `sftp` hosts so that libraries are constructed in the same manner. */
    token?: string;
  };
  /** Provides information about other entities that are related to this environment. */
  relationships?: RelatedLibrary & RelatedBuilds & RelatedHost & RelatedProperty;
  /** Contains links related to the environment which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the property that owns the environment. */
    property?: string;
    /** A link to the environment itself. */
    self?: string;
  };
  /** Contains meta information about the environment. */
  meta?: {
    /** Indicates whether the environment archive has been encrypted. An environment archive is ZIP file which can be downloaded for self-hosting purposes. An encrypted archive is one where a simple password has been applied for access control. */
    archive_encrypted?: boolean;
    /** If `premium_cdn` has been enabled for the company that owns this environment, this array lists the two different hosts that the environment is associated with. One is the default host and the other is host provided by the premium CDN. */
    script_sources?: string[];
  };
};

export type HostsAttributes = {
  /** The name of the host. */
  name?: string;
  /** The host type, either `akamai` for an Adobe-managed host, or `sftp` for self-hosting. */
  type_of?: string;
  /** An encrypted private key that can be used for authentication. */
  encrypted_private_key?: string;
  /** The URL of the server associated with the host. */
  server?: string;
  /** **Note**: This attribute is only available for SFTP hosts. By default, all SFTP hosts use symbolic links (symlinks) to reference library builds that are saved to the server. However, not all servers support the use of symlinks. When this attribute is included and set to `true`, the host uses a copy operation to update the build assets directly instead of using symlinks. */
  skip_symlinks?: boolean;
  /** The path for the host (i.e. what comes after the `server` URL). */
  path?: string;
  /** The port number for the server URL. */
  port?: number;
  /** A username associated with the host. */
  username?: string;
};

export type LibrariesAttributes = {
  /** The name of the library. */
  name: string;
};

export type LibrariesEntity = BasicResourceProperties & {
  /** Contains the library's attributes. */
  attributes?: {
    /** A timestamp of when the library was created in the system. */
    created_at?: string;
    /** The name of the library. */
    name?: string;
    /** A timestamp of when the library was published. Returns `null` if the library has not been published yet. */
    published_at?: string;
    /** The current state of the library within the [publishing flow](https://experienceleague.adobe.com/docs/experience-platform/tags/publish/publishing-flow.html?lang=en#state). */
    state?: string;
    /** A timestamp of when the library was last updated. */
    updated_at?: string;
    /** Indicates whether changes have been made to the library that require a build to activate. */
    build_required?: boolean;
    /** When present, this attribute indicates that the library has become stale. A library enters a stale state when another library on the [upstream](https://experienceleague.adobe.com/docs/experience-platform/tags/publish/publishing-flow.html#upstream) has been changed and the current library needs to be rebuilt to reflect those changes. In this case, the value for the attribute would be `upstream_changed`. A library may also enter a stale state if one of the extensions it uses receives an update. In this case, the value for the attribute would be `extension_upgraded`. */
    stale?: "upstream_changed" | "extension_upgraded";
  };
  /** Provides information about other entities that are related to this library. */
  relationships?: RelatedBuilds & RelatedEnvironment & RelatedDataElementsWithSelf & RelatedExtensionsWithSelf & RelatedNotes & RelatedRulesWithSelf & RelatedUpstreamLibrary & RelatedProperty & RelatedLastBuild;
  /** Contains links related to the library which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the property that owns the library. */
    property?: string;
    /** A link to the library itself. */
    self?: string;
  };
  /** Contains meta information about the library. */
  meta?: {
    /** The current build status for the library. */
    build_status?: string;
    /** A message regarding the current `build_required` status for the library. */
    build_required_detail?: string;
  };
};

export type BuildsEntity = BasicResourceProperties & {
  /** Contains the build's attributes. */
  attributes?: {
    /** A timestamp of when the build was created in the system. */
    created_at?: string;
    /** The current status of the build. */
    status?: string;
    /** A timestamp of when the build was last updated. */
    updated_at?: string;
    /** A unique token for the build. When a build is pushed to an Adobe-managed host (`akamai`), this token is used to identify the build within the library's folder structure. This also prevent's the build's `id` value from being unnecessarily exposed. This also applies to `sftp` hosts so that libraries are constructed in the same manner. */
    token?: string;
  };
  /** Provides information about other entities that are related to this build. */
  relationships?: RelatedDataElements & RelatedExtensions & RelatedRules & RelatedEnvironment & RelatedLibrary & RelatedProperty;
  /** Contains links related to the build which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the environment that the build is assigned to. */
    environment?: string;
    /** A link to the library that the build is based on. */
    library?: string;
    /** A link to the build itself. */
    self?: string;
  };
  /** Contains meta information about the build. */
  meta?: {
    /** The artifact URL for the build. This is the URL that you embed on your webpage in order to install the build. When embedded, this URL acts as a symlink to the `direct_artifact_url` for the currently installed build. When you create a new build for an environment, the symlink updates to point to the new `direct_artifact_url` and stores the old one on the server. When republishing a build, the symlink updates to point to the previous `direct_artifact_url`. This allows you to easily change builds without needing to edit client-side code. */
    artifact_url?: string;
    /** The direct artifact URL for the build. */
    direct_artifact_url?: string;
    /** Indicates whether the build is archived. */
    archive?: boolean;
    /** The host type for the environment that the build is assigned to, either `akamai` for Adobe-managed hosting or `sftp` for self hosting. */
    host_type_of?: string;
  };
};

export type RulesAttributes = {
  /** The name of the rule. */
  name?: string;
  /** Indicates whether this rule will be enabled upon creation. */
  enabled?: boolean;
};

export type NotesAttributes = {
  /** The contents of the note. */
  text: string;
};

export type NotesEntity = BasicResourceProperties & {
  /** Contains the note's attributes. */
  attributes?: {
    /** The display name for the note's author. */
    author_display_name?: string;
    /** The email address for the note's author. */
    author_email?: string;
    /** A timestamp of when the note was created in the system. */
    created_at?: string;
    /** The contents of the note. */
    text?: string;
  };
  /** Provides information about other entities that are related to this note. */
  relationships?: RelatedResource;
  /** Contains links related to the note which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the resource that the note is attached to. */
    resource?: string;
    /** A link to the note itself. */
    self?: string;
  };
};

export type RulesEntity = BasicResourceProperties & {
  /** Contains the rule's attributes. */
  attributes?: {
    /** A timestamp of when the rule was created in the system. */
    created_at?: string;
    /** A timestamp of when the rule was deleted from the system. Returns `null` if the rule still exists. */
    deleted_at?: string;
    /** Indicates whether changes have been made to the rule that have not been pushed to a library. */
    dirty?: boolean;
    /** Indicates whether this rule is enabled. */
    enabled?: boolean;
    /** The name of the rule. */
    name?: string;
    /** Indicates whether this rule has been published. */
    published?: boolean;
    /** A timestamp of when the rule was published. Returns `null` if `published` is set to `false`. */
    published_at?: string;
    /** The revision number for the rule. */
    revision_number?: number;
    /** A timestamp of when the rule was last updated. */
    updated_at?: string;
    /** The current review status for the rule. */
    review_status?: string;
  };
  /** Provides information about other entities that are related to this rule. */
  relationships?: RelatedLibraries & RelatedRevisions & RelatedNotes & RelatedProperty & RelatedOrigin & RelatedRuleComponents;
  /** Contains links related to the rule which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the property that owns the rule. */
    property?: string;
    /** A link to the rule's origin. */
    origin?: string;
    /** A link to the rule itself. */
    self?: string;
    /** A link to the rule's associated rule components. */
    rule_components?: string;
  };
  /** Contains meta information about the rule. */
  meta?: {
    /** The latest revision number for the rule. */
    latest_revision_number?: string;
  };
};

export type RuleComponentsAttributes = {
  /** The name of the rule component. */
  name?: string;
  /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the rule component. */
  delegate_descriptor_id?: string;
  /** Indicates whether the next rule component should be delayed while the current rule component is processing. */
  delay_next?: boolean;
  /** The ID of the extension that provides the rule component's type. */
  extension_id?: string;
  /** Indicates whether this rule component represents a negation (i.e. the component checks if a condition is NOT true in order to pass). */
  negate?: boolean;
  /** The order position for the rule component. This is typically used for action-type rule components to determine the sequence that the actions should be executed in when the rule triggers. */
  order?: number;
  /** The order position for the parent rule. This determines the order or priority in which multiple rules are triggered for the same event for a property. */
  rule_order?: number;
  /** A settings JSON object represented as a string. */
  settings?: string;
  /** If the rule component is time sensitive, this value represents the timeout value. */
  timeout?: number;
};

export type RuleComponentsEntity = BasicResourceProperties & {
  /** Contains the rule component's attributes. */
  attributes?: {
    /** A timestamp of when the rule component was created in the system. */
    created_at?: string;
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the rule component. */
    delegate_descriptor_id?: string;
    /** A timestamp of when the rule component was deleted from the system. Returns `null` if the rule component still exists. */
    deleted_at?: string;
    /** Indicates whether changes have been made to the rule component that have not been pushed to a library. */
    dirty?: boolean;
    /** The name of the rule component. */
    name?: string;
    /** Indicates whether this rule component represents a negation (i.e. the component checks if a condition is NOT true in order to pass). */
    negate?: boolean;
    /** The order position for the rule component. This is typically used for action-type rule components to determine the sequence that the actions should be executed in when the rule triggers. */
    order?: number;
    /** The order position for the parent rule. This determines the order or priority in which multiple rules are triggered for the same event for a property. */
    rule_order?: number;
    /** How long in milliseconds the system will allow this rule component to process before terminating it. */
    timeout?: number;
    /** Indicates whether the next rule component should be delayed while the current rule component is processing. */
    delay_next?: boolean;
    /** Indicates whether this rule component has been published. */
    published?: boolean;
    /** A timestamp of when the rule component was published. Returns `null` if `published` is set to `false`. */
    published_at?: string;
    /** The revision number for the rule component. */
    revision_number?: number;
    /** A timestamp of when the rule component was last updated. */
    updated_at?: string;
    /** A settings JSON object represented as a string. */
    settings?: string;
  };
  /** Provides information about other entities that are related to this rule component. */
  relationships?: RelatedUpdatedWithExtensionPackage & RelatedUpdatedWithExtension & RelatedExtension & RelatedNotes & RelatedOrigin & RelatedProperty & RelatedRules;
  /** Contains links related to the rule component which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the extension that provides the rule component's type. */
    extension?: string;
    /** A link to the rule component's origin. */
    origin?: string;
    /** A link to the rules that utilized the rule component. */
    rules?: string;
    /** A link to the rule component itself. */
    self?: string;
  };
  /** Contains meta information about the rule component. */
  meta?: {
    /** The latest revision number for the rule component. */
    latest_revision_number?: string;
  };
};

export type HostsEntity = BasicResourceProperties & {
  /** Contains the host's attributes. */
  attributes?: {
    /** A timestamp of when the host was created in the system. */
    created_at?: string;
    /** The URL of the server associated with the host. */
    server?: string;
    /** The name of the host. */
    name?: string;
    /** The path for the host (i.e. what comes after the `server` URL). */
    path?: string;
    /** The port number for the server URL. */
    port?: number;
    /** The current status of the host. */
    status?: string;
    /** **Note**: This attribute is only available for SFTP hosts. By default, all SFTP hosts use symbolic links (symlinks) to reference library builds that are saved to the server. However, not all servers support the use of symlinks. When this attribute is included and set to `true`, the host uses a copy operation to update the build assets directly instead of using symlinks. */
    skip_symlinks?: boolean;
    /** The host type, either `akamai` for an Adobe-managed host, or `sftp` for self-hosting. */
    type_of?: string;
    /** A timestamp of when the host was last updated. */
    updated_at?: string;
    /** A username associated with the host. */
    username?: string;
  };
  /** Provides information about other entities that are related to this host. */
  relationships?: RelatedProperty;
  /** Contains links related to the host which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the property that owns the host. */
    property?: string;
    /** A link to the host itself. */
    self?: string;
  };
};

export type CallbacksEntity = BasicResourceProperties & {
  /** Contains the callback's attributes. */
  attributes?: {
    /** A timestamp of when the callback was created in the system. */
    created_at?: string;
    /** Lists the audit event types that this callback is subscribed to. */
    subscriptions?: string[];
    /** A timestamp of when the callback was last updated. */
    updated_at?: string;
    /** The URL that the callback will send messages to. */
    url?: string;
  };
  /** Provides information about other entities that are related to this callback. */
  relationships?: RelatedProperty;
  /** Contains links related to the callback which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the property that owns the callback. */
    property?: string;
    /** A link to the callback itself. */
    self?: string;
  };
};

export type SecretsEntity = BasicResourceProperties & {
  /** Contains the secret's attributes. */
  attributes?: {
    /** A timestamp of when the secret was created in the system. */
    created_at?: string;
    /** A timestamp of when the secret was last updated. */
    updated_at?: string;
    /** The secret name. */
    name?: string;
    /** The type of secret credential. Has three possible values: * `token`: A token string. * `simple-http`: A username and password. * `oauth2`: Credentials conforming to the OAuth standard. */
    type_of?: string;
    /** A timestamp of when the secret was activated. */
    activated_at?: string;
    /** A timestamp of when the secret expires. */
    expires_at?: string;
    /** A timestamp of when the secret credential will refresh. */
    refreshes_at?: string;
    /** The current exchange status for the secret. */
    status?: string;
    /** An object that contains the credential values for the secret. Depending on the `type_of` attribute, different properties must provided. See the section on [credentials](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/secrets.html?lang=en#credentials) in the secrets guide for details on the requirements for each type. */
    credentials?: Record<string, unknown>;
  };
  /** Provides information about other entities that are related to this secret. */
  relationships?: RelatedProperty & RelatedEnvironmentWithMeta & RelatedNotes & RelatedDataElements;
  /** Contains links related to the secret which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the secret itself. */
    self?: string;
    /** A link to the property that owns the secret. */
    property?: string;
  };
};

export type CompaniesEntity = BasicResourceProperties & {
  /** Contains the company's attributes. */
  attributes?: {
    /** A timestamp of when the company was created in the system. */
    created_at?: string;
    /** The company name. */
    name?: string;
    /** The ID for the IMS Organization that owns the company entity. */
    org_id?: string;
    /** A timestamp of when the company was last updated. */
    updated_at?: string;
    /** A unique token for the company. When a build is pushed to an Adobe-managed host (`akamai`), this token is used to identify the company within the library's folder structure. This also prevent's the company's `id` value from being unnecessarily exposed. This also applies to `sftp` hosts so that libraries are constructed in the same manner. */
    token?: string;
    /** Indicates whether the company is enabled for Customer Journey Management. */
    cjm_enabled?: boolean;
    /** Indicates whether the company is enabled for event forwarding. */
    edge_enabled?: boolean;
    /** The event forwarding allotment for your organization. Please check with your CSM or contract information for more information on this value. */
    edge_events_allotment?: number;
    /** The number of servers that events are configured to be forwarded to. */
    edge_fanout_ratio?: number;
    /** If the company has purchased an offer for a premium content delivery network (CDN), this flag will be set to `true`. */
    premium_cdn_enabled?: boolean;
    /** If the company has purchased a service level agreement (SLA), this flag will be set to `true`. */
    sla_enabled?: boolean;
  };
  /** Provides information about other entities that are related to this company. */
  relationships?: RelatedProperties;
  /** Contains links related to the company which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the company itself. */
    self?: string;
    /** A link to the properties that are owned by the company. */
    properties?: string;
  };
  /** Contains meta information about the company. */
  meta?: {
    /** Lists the rights that are enabled for the company. */
    rights?: string[];
    /** Contains the platform-specific rights that are enabled for the company. */
    platform_rights?: {
      /** Lists the rights that are enabled for web properties belonging to the company. */
      web?: string[];
      /** Lists the rights that are enabled for mobile properties belonging to the company. */
      mobile?: string[];
    };
  };
};

export type LibrariesListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type RelationshipEntity = {
  /** The resource type for the related entity. */
  type?: string;
  /** The ID for the related entity. */
  id?: string;
};

export type RelationshipsLookupResponse = {
  /** Lists the relationships that you wish to add to the parent resource. */
  data?: RelationshipEntity[];
  /** Contains links that can be used in subsequent fetch requests. */
  links?: Record<string, unknown>;
};

export type DataElementsListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type NotesListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type RulesListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type ExtensionsListResponse = DataList & {
  data?: unknown[];
} & MetaList;

export type AppConfigurationsLookupResponse = DataLookup & {
  data?: AppConfigurationsEntity;
};

export type CallbacksLookupResponse = DataLookup & {
  data?: CallbacksEntity;
};

export type CompaniesLookupResponse = DataLookup & {
  data?: CompaniesEntity;
};

export type HostsLookupResponse = DataLookup & {
  data?: HostsEntity;
};

export type NotesLookupResponse = DataLookup & {
  data?: NotesEntity;
};

export type RuleComponentsLookupResponse = DataLookup & {
  data?: RuleComponentsEntity;
};

export type SecretsLookupResponse = DataLookup & {
  data?: SecretsEntity;
};

export type RulesLookupResponse = DataLookup & {
  data?: RulesEntity;
};

export type BuildsLookupResponse = DataLookup & {
  data?: BuildsEntity;
};

export type LibrariesLookupResponse = DataLookup & {
  data?: LibrariesEntity;
};

export type ExtensionsLookupResponse = DataLookup & {
  data?: ExtensionsEntity;
};

export type EnvironmentsLookupResponse = DataLookup & {
  data?: EnvironmentsEntity;
};

export type DataElementsLookupResponse = DataLookup & {
  data?: DataElementsEntity;
};

export type PropertiesLookupResponse = DataLookup & {
  data?: PropertiesEntity;
};

export type ExtensionPackagesEntity = BasicResourceProperties & {
  /** Contains the extension package's attributes. */
  attributes?: {
    /** Lists the details of the action types defined by the extension. */
    actions?: ActionEntity[];
    /** Lists the details of the extension package author. */
    author?: {
      /** The URL for the author's website. */
      url?: string;
      /** The author's name. */
      name?: string;
      /** The author's email. */
      email?: string;
    };
    /** The availability of the extension package, either `public` or `private`. */
    availability?: string;
    /** The content delivery path for the extension package. */
    cdn_path?: string;
    /** Lists the details of the condition types defined by the extension. */
    conditions?: ConditionEntity[];
    /** Describes the configuration options for the extension. */
    configuration?: {
      /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
      id?: string;
      /** A [JSON Schema](https://json-schema.org/) object that describes the configuration properties for the extension. */
      schema?: Record<string, unknown>;
      /** The relative URL to the extension configuration view. It should be relative to `viewBasePath` and should not begin with a slash. It must reference an HTML file with a `.html` extension. Query string and fragment identifier (hash) suffixes are acceptable. */
      viewPath?: string;
      /** An optional array of objects where each object represents a transformation that should be performed on every corresponding settings object when it is emitted into the runtime library. Refer to the documentation section on [transforms](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#transforms) for more information on how to use this field. */
      transforms?: Record<string, unknown>[];
    };
    /** A timestamp of when the extension configuration was created. */
    created_at?: string;
    /** Lists the details of the data element types defined by the extension. */
    data_elements?: DataElementEntity[];
    /** A description for the extension. */
    description?: string;
    /** Indicated whether the extension is discontinued. */
    discontinued?: boolean;
    /** A display name for the extension. */
    display_name?: string;
    /** Lists the details of the event types defined by the extension. */
    events?: EventEntity[];
    /** The Adobe Exchange URL for the extension. */
    exchange_url?: string;
    /** Some extension developers prefer hosting all tags-related files on their own server. This provides an increased level of certainty regarding file availability at runtime and allows you to easily scan the code for security vulnerabilities. If the library portion of your extension needs to load JavaScript files at runtime, it is recommended you use this property to list those files. The listed files will be hosted alongside the tag runtime library. Your extension can then load the files via a URL retrieved using the [getHostedLibFileUrl](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/turbine.html?lang=en#get-hosted-lib-file) method. This property provides a list of relative paths to third-party library files that need to be hosted. */
    hosted_lib_files?: string[];
    /** The path to the image that is used as the extension's icon in the Data Collection UI. */
    icon_path?: string;
    /** The relative path of a library module that should be executed at runtime. This module will always be included in the runtime library and executed. Because the module is always included in the runtime library, a `main` module should only be used when absolutely necessary and its code size should be kept minimal. */
    main?: string;
    /** The name of the extension. It must be unique from all other extensions and must comply with [naming rules](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#naming-rules). This is used by the system as an identifier and should not be changed after the extension is published. */
    name?: string;
    /** The ID of the IMS Organization that owns the extension. */
    owner_org_id?: string;
    /** A list of relative paths to verious asset files that are used by the extension view, such as HTML and CSS files. */
    resources?: string[];
    /** An list of shared module definition objects. */
    shared_modules?: {
      /** The name of the shared module. Note that this name will be used when referencing shared modules from other extensions as described in the [documentation](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/web/shared.html?lang=en). This name is never displayed in any user interface. It should be unique from the names of other shared modules within your extension and must comply with [naming rules](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#naming-rules). This is used by the system as an identifier and should not be changed after you publish your extension. */
      name?: string;
      /** The relative path to the shared module. It should not begin with a slash and must reference a JavaScript file with a `.js` extension. */
      libPath?: string;
    }[];
    /** The current status of the extension package. */
    status?: string;
    /** The platform for your extension. Currently the only value accepted is `web`. */
    platform?: string;
    /** A timestamp of when the extension package was last updated. */
    updated_at?: string;
    /** The version number of the extension package. */
    version?: string;
    /** The relative path to the subdirectory containing all views and view-related resources (HTML, JavaScript, CSS, images) for the extension. Platform hosts this directory on a web server and loads `iframe` content from it. This is a required field and should not start with a slash. For example, if all views are contained within `src/view/`, the value of viewBasePath would be `src/view/`. */
    view_base_path?: string;
  };
  /** Contains links related to the extension package which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the extension package itself. */
    self?: string;
  };
  /** Contains meta information about the extension package. */
  meta?: {
    /** The archive URL for the extension package. */
    archive_url?: string;
    /** Lists references for any script sources associated with the extension package. */
    script_sources?: string[];
  };
};

export type ExtensionPackagesLookupResponse = DataLookup & {
  data?: ExtensionPackagesEntity;
};

export type ActionEntity = {
  /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the action. */
  id?: string;
  /** The name of the action. It must be unique from all other extensions and must comply with [naming rules](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#naming-rules). This is used by the system as an identifier and should not be changed after the extension is published. */
  name?: string;
  /** A [JSON Schema](http://json-schema.org/) object describing the format of a valid settings object that can be saved by the user for this action. Settings are usually configured and saved by a user using the Data Collection UI. In these cases, the extension's view can take necessary steps to validate user-provided settings. On the other hand, some users choose to use APIs directly without the aid of any UI. The purpose of this schema is to allow Platform to properly validate that settings objects saved by users, regardless of whether a UI is used, are in a format that is compatible with the library module that will act upon the settings object at runtime. */
  schema?: Record<string, unknown>;
  /** The relative path to the action's library module. It should not not begin with a slash and must reference a JavaScript file with a `.js` extension. */
  libPath?: string;
  /** The relative URL to the action's configuration view. It should be relative to `viewBasePath` and should not begin with a slash. It must reference an HTML file with a `.html` extension. Query strings and fragment identifiers (hashes) are acceptable. If your action does not use any settings from a user, you may exclude this property and Platform will instead display a placeholder stating that no configuration is necessary. */
  viewPath?: string;
  /** A list of transformation objects that should be performed on every corresponding `settings` object when it is emitted into the runtime library. See the section on [transforms](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#transforms) in the documentation for more information on why this may be needed and how it is used. */
  transforms?: Record<string, unknown>[];
  /** A display name for the action. */
  displayName?: string;
  /** If this field is provided, the `displayName` is be listed under the `categoryName` within the Data Collection UI. All types with the same `categoryName` are listed under the same category. The value of `categoryName` should be human-readable. */
  categoryName?: string;
};

export type DataElementEntity = {
  /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the data element. */
  id?: string;
  /** The name of the data element. It must be unique from all other extensions and must comply with [naming rules](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#naming-rules). This is used by the system as an identifier and should not be changed after the extension is published. */
  name?: string;
  /** A [JSON Schema](http://json-schema.org/) object describing the format of a valid settings object that can be saved by the user for this data element. Settings are usually configured and saved by a user using the Data Collection UI. In these cases, the extension's view can take necessary steps to validate user-provided settings. On the other hand, some users choose to use APIs directly without the aid of any UI. The purpose of this schema is to allow Platform to properly validate that settings objects saved by users, regardless of whether a UI is used, are in a format that is compatible with the library module that will act upon the settings object at runtime. */
  schema?: Record<string, unknown>;
  /** The relative path to the data element's library module. It should not not begin with a slash and must reference a JavaScript file with a `.js` extension. */
  libPath?: string;
  /** The relative URL to the data element's configuration view. It should be relative to `viewBasePath` and should not begin with a slash. It must reference an HTML file with a `.html` extension. Query strings and fragment identifiers (hashes) are acceptable. If your data element does not use any settings from a user, you may exclude this property and Platform will instead display a placeholder stating that no configuration is necessary. */
  viewPath?: string;
  /** A list of transformation objects that should be performed on every corresponding `settings` object when it is emitted into the runtime library. See the section on [transforms](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#transforms) in the documentation for more information on why this may be needed and how it is used. */
  transforms?: Record<string, unknown>[];
  /** A display name for the data element. */
  displayName?: string;
  /** If this field is provided, the `displayName` is be listed under the `categoryName` within the Data Collection UI. All types with the same `categoryName` are listed under the same category. The value of `categoryName` should be human-readable. */
  categoryName?: string;
};

export type ConditionEntity = {
  /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the condition. */
  id?: string;
  /** The name of the condition. It must be unique from all other extensions and must comply with [naming rules](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#naming-rules). This is used by the system as an identifier and should not be changed after the extension is published. */
  name?: string;
  /** A [JSON Schema](http://json-schema.org/) object describing the format of a valid settings object that can be saved by the user for this condition. Settings are usually configured and saved by a user using the Data Collection UI. In these cases, the extension's view can take necessary steps to validate user-provided settings. On the other hand, some users choose to use APIs directly without the aid of any UI. The purpose of this schema is to allow Platform to properly validate that settings objects saved by users, regardless of whether a UI is used, are in a format that is compatible with the library module that will act upon the settings object at runtime. */
  schema?: Record<string, unknown>;
  /** The relative path to the condition's library module. It should not not begin with a slash and must reference a JavaScript file with a `.js` extension. */
  libPath?: string;
  /** The relative URL to the condition's configuration view. It should be relative to `viewBasePath` and should not begin with a slash. It must reference an HTML file with a `.html` extension. Query strings and fragment identifiers (hashes) are acceptable. If your type's library module does not use any settings from a user, you may exclude this property and Platform will instead display a placeholder stating that no configuration is necessary. */
  viewPath?: string;
  /** A list of transformation objects that should be performed on every corresponding `settings` object when it is emitted into the runtime library. See the section on [transforms](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#transforms) in the documentation for more information on why this may be needed and how it is used. */
  transforms?: Record<string, unknown>[];
  /** A display name for the condition. */
  displayName?: string;
  /** If this field is provided, the `displayName` is be listed under the `categoryName` within the Data Collection UI. All types with the same `categoryName` are listed under the same category. The value of `categoryName` should be human-readable. */
  categoryName?: string;
};

export type EventEntity = {
  /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the event. */
  id?: string;
  /** The name of the event. It must be unique from all other extensions and must comply with [naming rules](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#naming-rules). This is used by the system as an identifier and should not be changed after the extension is published. */
  name?: string;
  /** A [JSON Schema](http://json-schema.org/) object describing the format of a valid settings object that can be saved by the user for this event. Settings are usually configured and saved by a user using the Data Collection UI. In these cases, the extension's view can take necessary steps to validate user-provided settings. On the other hand, some users choose to use APIs directly without the aid of any UI. The purpose of this schema is to allow Platform to properly validate that settings objects saved by users, regardless of whether a UI is used, are in a format that is compatible with the library module that will act upon the settings object at runtime. */
  schema?: Record<string, unknown>;
  /** The relative path to the event's library module. It should not not begin with a slash and must reference a JavaScript file with a `.js` extension. */
  libPath?: string;
  /** The relative URL to the event's configuration view. It should be relative to `viewBasePath` and should not begin with a slash. It must reference an HTML file with a `.html` extension. Query strings and fragment identifiers (hashes) are acceptable. If your event does not use any settings from a user, you may exclude this property and Platform will instead display a placeholder stating that no configuration is necessary. */
  viewPath?: string;
  /** A list of transformation objects that should be performed on every corresponding `settings` object when it is emitted into the runtime library. See the section on [transforms](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/manifest.html?lang=en#transforms) in the documentation for more information on why this may be needed and how it is used. */
  transforms?: Record<string, unknown>[];
  /** A display name for the event. */
  displayName?: string;
  /** If this field is provided, the `displayName` is be listed under the `categoryName` within the Data Collection UI. All types with the same `categoryName` are listed under the same category. The value of `categoryName` should be human-readable. */
  categoryName?: string;
};
