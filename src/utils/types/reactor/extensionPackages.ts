// Generated from https://github.com/AdobeDocs/experience-platform-apis/blob/main/static/swagger-specs/reactor.yaml
// Hand-edit freely; there is no regeneration step in the repo.

import type { DataList, ExtensionPackagesLookupResponse, MetaList } from "./common.ts";

export type DataUpdateExtensionPackage = {
  /** Contains info on the extension package being updated and the action being performed. */
  data: {
    /** The ID of extension package being updated. */
    id: string;
    /** Must be set to `extension_packages`. */
    type: string;
    /** If this property is included with an `action` property set to `release_private`, the call releases the extension privately. If this property is included with an `action` property set to `discontinue`, the call discontinues the extension package. */
    meta: {
      /** If this property is included with a value of `revise`, the call creates a new revision for the resource instead of overwriting the current revision. */
      action?: string;
    };
  };
};

export type ExtensionPackagesPatchResponse = ExtensionPackagesLookupResponse;

export type ExtensionPackagesCreateResponse = ExtensionPackagesLookupResponse;

export type ExtensionPackagesPatchPayload = DataUpdateExtensionPackage;

export type ExtensionPackagesListResponse = DataList & {
  data?: unknown[];
} & MetaList;

/** GET /extension_packages */
export type ListExtensionPackagesParams = {
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
  /** Filter by `status`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[status]"?: string;
  /** Filter by `platform`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[platform]"?: string;
  /** Filter by `version`. Reactor filter syntax: an operator then a value, e.g. `EQ value`. */
  "filter[version]"?: string;
  /** Filters the spec doesn't list; Reactor filter syntax, e.g. `EQ value`. */
  [filter: `filter[${string}]`]: string | number | boolean | undefined;
};

export type CreateExtensionPackageBody = {
  /** The extension package archive file. */
  package: string;
};

export type UpdateExtensionPackageBody = {
  /** The extension package archive file. */
  package: string;
};
