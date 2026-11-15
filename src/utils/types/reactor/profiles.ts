// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { BasicResourceProperties, DataLookup } from "./common.ts";

export type ProfilesEntity = BasicResourceProperties & {
  /** Contains the profile's attributes. */
  attributes?: ProfilesAttributes;
  /** Contains links related to the profile which can be used in subsequent fetch requests. */
  links?: {
    /** A link to the profile itself. */
    self?: string;
  };
  /** Contains meta information about the profile. */
  meta?: {
    /** Lists the permission rights granted to the profile. */
    rights?: string[];
  };
};

export type ProfilesLookupResponse = DataLookup & {
  data?: ProfilesEntity;
};

export type ProfilesAttributes = {
  /** The ID of the IMS Organization that the user is active under. */
  active_org?: string;
  /** The time in seconds that the user's IMS profile is cached for. Once this time expires, the IMS service is polled again to refresh the profile. */
  expires_in?: number;
  /** The display name for the user. */
  display_name?: string;
  /** The job function or role for the user. */
  job_function?: string;
  /** The email address for the user. */
  email?: string;
  /** Provides information on the IMS Organizations that the user is a member of. Each property in this object is keyed to the ID of IMS Org in question. */
  organizations?: {
    /** Contains the details for a particular IMS Organization (as identified in the property key). */
    "{ORG_ID}"?: {
      /** The IMS Org name. */
      name?: string;
      /** Indicates whether the user is an admin for this IMS Org. */
      admin?: boolean;
      /** Indicates whether the user currently logged in under this IMS Org. */
      active?: boolean;
      /** Lists the different names that the organization operates under. */
      login_companies?: string[];
      /** Lists the Adobe products that the IMS Org has access to. */
      product_contexts?: string[];
      /** The tenant ID for the IMS Organization, which is used as a namespace to separate resources created by the organization from global resources managed by Adobe. */
      tenant_id?: string;
    };
  };
};
