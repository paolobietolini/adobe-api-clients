// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

export type ExtensionPackagesCreateUsageAuthorizationPayload = {
  data?: {
    attributes?: {
      /** The authorized Organization ID. */
      authorized_org_id?: string;
    };
    /** The type of resource being created. */
    type?: string;
  };
};

export type ExtensionPackagesCreateUsageAuthorizationResponse = {
  data?: {
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
    id?: string;
    /** The type of resource being created. */
    type?: string;
    attributes?: {
      /** A timestamp of when the extension package user authorization was created in the system. */
      created_at?: string;
      /** A timestamp of when the extension package user authorization was last updated. */
      updated_at?: string;
      /** The name of the extension package user authorization. */
      name?: string;
      /** The platform for the extension package user authorization, either `web` or `mobile`. */
      platform?: "web" | "mobile";
      /** The Organization ID. */
      owner_org_id?: string;
      /** The Organization name. */
      owner_org_name?: string;
      /** The authorized Organization ID. */
      authorized_org_id?: string;
      /** The authorized Organization name. */
      authorized_org_name?: string;
      /** The current state of the new extension package user authorization. */
      state?: string;
      /** The author's email. */
      created_by_email?: string;
      /** The author's name. */
      created_by_display_name?: string;
      /** The email of the user who performed the update. */
      updated_by_email?: string;
      /** The name of the user who performed the update. */
      updated_by_display_name?: string;
    };
    relationships?: {
      extension_package?: {
        /** Contains a `related` link that can be used in a subsequent API call to fetch the related properties for the resource. */
        links?: {
          /** A link that can be used in a subsequent API call to fetch the related properties for the resource. */
          related?: string;
        };
        data?: {
          /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
          id?: string;
          /** The type of resource being created. */
          type?: string;
        };
      };
    };
    links?: {
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related data elements. */
      self?: string;
    };
  };
};

export type RetrieveExtensionPackageUsageAuthorizationForPackageResponse = {
  data?: ({
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
    id?: string;
    /** The type of resource being created. */
    type?: string;
    attributes?: {
      /** A timestamp of when the extension package user authorization was created in the system. */
      created_at?: string;
      /** A timestamp of when the extension package user authorization was last updated. */
      updated_at?: string;
      /** The name of the extension package user authorization. */
      name?: string;
      /** The platform for the extension package user authorization, either `web` or `mobile`. */
      platform?: "web" | "mobile";
      /** The Organization ID. */
      owner_org_id?: string;
      /** The Organization name. */
      owner_org_name?: string;
      /** The authorized Organization ID. */
      authorized_org_id?: string;
      /** The authorized Organization name. */
      authorized_org_name?: string;
      /** The current state of the new extension package user authorization. */
      state?: string;
      /** The author's email. */
      created_by_email?: string;
      /** The author's name. */
      created_by_display_name?: string;
      /** The email of the user who performed the update. */
      updated_by_email?: string;
      /** The name of the user who performed the update. */
      updated_by_display_name?: string;
    };
    relationships?: {
      extension_package?: {
        /** Contains a `related` link that can be used in a subsequent API call to fetch the related properties for the resource. */
        links?: {
          /** A link that can be used in a subsequent API call to fetch the related properties for the resource. */
          related?: string;
        };
        data?: {
          /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
          id?: string;
          /** The type of resource being created. */
          type?: string;
        };
      };
    };
    links?: {
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related data elements. */
      self?: string;
    };
  })[];
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

export type ExtensionPackagesUpdateUsageAuthorizationPayload = {
  data?: {
    attributes?: {
      /** The current state of the updated extension package user authorization. */
      state?: string;
    };
    /** The type of resource being created. */
    type?: string;
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
    id?: string;
  };
};

export type ExtensionPackagesUpdateUsageAuthorizationResponse = {
  data?: {
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
    id?: string;
    /** The type of resource being created. */
    type?: string;
    attributes?: {
      /** A timestamp of when the extension package user authorization was created in the system. */
      created_at?: string;
      /** A timestamp of when the extension package user authorization was last updated. */
      updated_at?: string;
      /** The name of the extension package user authorization. */
      name?: string;
      /** The platform for the extension package user authorization, either `web` or `mobile`. */
      platform?: "web" | "mobile";
      /** The Organization ID. */
      owner_org_id?: string;
      /** The Organization name. */
      owner_org_name?: string;
      /** The authorized Organization ID. */
      authorized_org_id?: string;
      /** The authorized Organization name. */
      authorized_org_name?: string;
      /** The current state of the new extension package user authorization. */
      state?: string;
      /** The author's email. */
      created_by_email?: string;
      /** The author's name. */
      created_by_display_name?: string;
      /** The email of the user who performed the update. */
      updated_by_email?: string;
      /** The name of the user who performed the update. */
      updated_by_display_name?: string;
    };
    relationships?: {
      extension_package?: {
        /** Contains a `related` link that can be used in a subsequent API call to fetch the related properties for the resource. */
        links?: {
          /** A link that can be used in a subsequent API call to fetch the related properties for the resource. */
          related?: string;
        };
        data?: {
          /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
          id?: string;
          /** The type of resource being created. */
          type?: string;
        };
      };
    };
    links?: {
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related data elements. */
      self?: string;
    };
  };
};

export type RetrieveExtensionPackageUsageAuthorizationResponse = {
  data?: ({
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
    id?: string;
    /** The type of resource being created. */
    type?: string;
    attributes?: {
      /** A timestamp of when the data extension package usage authorization was created in the system. */
      created_at?: string;
      updated_at?: string;
      name?: string;
      /** The platform for the extension package user authorization, either `web` or `mobile`. */
      platform?: "web" | "mobile";
      owner_org_id?: string;
      /** The Organization name. */
      owner_org_name?: string;
      /** The authorized Organization ID. */
      authorized_org_id?: string;
      /** The authorized Organization name. */
      authorized_org_name?: string;
      /** The current state of the new extension package user authorization. */
      state?: string;
      /** The author's email. */
      created_by_email?: string;
      /** The author's name. */
      created_by_display_name?: string;
      /** The email of the user who performed the update. */
      updated_by_email?: string;
      /** The name of the user who performed the update. */
      updated_by_display_name?: string;
    };
    relationships?: {
      extension_package?: {
        /** Contains a `related` link that can be used in a subsequent API call to fetch the related properties for the resource. */
        links?: {
          /** A link that can be used in a subsequent API call to fetch the related properties for the resource. */
          related?: string;
        };
        data?: string;
      };
    };
    links?: {
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related data elements. */
      self?: string;
    };
  })[];
  links?: {
    /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related data elements. */
    self?: string;
    next?: string;
    last?: string;
  };
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

export type RetrieveDataExtensionPackageUsageAuthorizationResponse = {
  data?: {
    /** The [delegate descriptor ID](https://experienceleague.adobe.com/docs/experience-platform/tags/api/guides/delegate-descriptor-ids.html) for the configuration. */
    id?: string;
    /** The type of resource being created. */
    type?: string;
    attributes?: {
      actions?: unknown[];
      author?: {
        url?: string;
        name?: string;
        email?: string;
      };
      availability?: string;
      cdn_path?: string;
      conditions?: unknown[];
      configuration?: string;
      /** A timestamp of when the data extension package usage authorization was created in the system. */
      created_at?: string;
      data_elements?: unknown[];
      description?: string;
      discontinued?: boolean;
      display_name?: string;
      ecma_version?: string;
      events?: unknown[];
      exchange_url?: string;
      hosted_lib_files?: string;
      icon_path?: string;
      main?: string;
      name?: string;
      owner_org_id?: string;
      resources?: string;
      shared_modules?: string;
      status?: string;
      platform?: string;
      updated_at?: string;
      version?: string;
      view_base_path?: string;
      /** The author's email. */
      created_by_email?: string;
      /** The author's name. */
      created_by_display_name?: string;
      /** The email of the user who performed the update. */
      updated_by_email?: string;
      /** The name of the user who performed the update. */
      updated_by_display_name?: string;
    };
    relationships?: {
      extension_package?: {
        /** Contains a `related` link that can be used in a subsequent API call to fetch the related properties for the resource. */
        links?: {
          /** A link that can be used in a subsequent API call to fetch the related properties for the resource. */
          related?: string;
        };
      };
    };
    links?: {
      /** A link that can be used in a subsequent API call to fetch the relationship object for the resource's related data elements. */
      self?: string;
    };
  };
};
