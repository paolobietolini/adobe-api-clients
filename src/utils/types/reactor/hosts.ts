// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataCreate, HostsAttributes, HostsLookupResponse, PropertiesLookupResponse } from "./common.ts";

export type HostsUpdatePayload = DataCreate & {
  data?: {
    attributes?: HostsAttributes;
  };
};

export type HostsUpdateResponse = HostsLookupResponse;

export type HostsPropertyLookupResponse = PropertiesLookupResponse;
