// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { CallbacksAttributes, CallbacksLookupResponse, DataUpdate } from "./common.ts";

export type CallbacksUpdatePayload = DataUpdate & {
  data?: {
    attributes?: CallbacksAttributes;
  };
};

export type CallbacksUpdateResponse = CallbacksLookupResponse;
