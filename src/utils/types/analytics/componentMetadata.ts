// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, Tag, TaggedComponent } from "./common.ts";

export type ComponentSearch = {
  componentType?: string;
  componentIds?: string[];
};

export type SavedSharedComponent = {
  componentType?: string;
  componentId?: string;
  shares?: Share[];
};

export type Share = {
  shareId?: string;
  imsOrgId?: string;
  shareToId?: number;
  shareToImsId?: string;
  shareToType?: string;
  shareFromImsId?: string;
  componentType?: string;
  componentId?: string;
  shareToDisplayName?: string;
  shareToLogin?: string;
  accessLevel?: string;
};

export type SharedComponent = {
  componentType?: string;
  componentId?: string;
  shares?: SharedToEntity[];
};

export type SharedToEntity = {
  shareToId?: number;
  shareToImsId?: string;
  shareToType?: string;
  accessLevel?: string;
};

export type ComponentIncludeType = "sharedTo";

/** GET /componentmetadata/shares */
export type ListSharesParams = {
  /** Include additional shares not owned by the user */
  includeType?: ComponentIncludeType[];
  /** The user ID to return details for. Only admins may use this option. */
  userid?: number;
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};

/** POST /componentmetadata/shares */
export type CreateShareParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};

/** PUT /componentmetadata/shares */
export type UpdateSharesParams = {
  /** Locale */
  locale?: AnalyticsLocale;
  /** Use caching for faster requests */
  useCache?: boolean;
};

export type UpdateSharesBody = SharedComponent[];

export type ComponentExpansion = "sharesFullName";

/** POST /componentmetadata/shares/component/search */
export type SearchSharedComponentsParams = {
  /** Locale */
  locale?: AnalyticsLocale;
  /** Comma-delimited list of additional project metadata fields to include on response. */
  expansion?: ComponentExpansion[];
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};

/** DELETE /componentmetadata/shares/{id} */
export type DeleteShareParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};

/** GET /componentmetadata/shares/sharedto/me */
export type ListSharedToMeParams = {
  /** ComponentType to return */
  componentType: string;
};

/** POST /componentmetadata/tags/component/search */
export type SearchTaggedComponentsParams = {
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};

/** GET /componentmetadata/tags */
export type ListTagsParams = {
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};

export type CreateTagsBody = Tag[];

export type ComponentComponentType = "segment" | "dashboard" | "bookmark" | "calculatedMetric" | "project" | "dateRange" | "metric" | "dimension" | "virtualReportSuite" | "scheduledJob" | "alert" | "classificationSet";

/** DELETE /componentmetadata/tags */
export type DeleteComponentTagsParams = {
  /** Comma-separated list of componentIds to operate on. */
  componentIds: string;
  /** The component type to operate on. */
  componentType: ComponentComponentType;
};

/** GET /componentmetadata/tags/search */
export type GetComponentTagsParams = {
  /** The componentId to operate on. Currently this is just the segmentId. */
  componentId: string;
  /** The component type to operate on. */
  componentType: ComponentComponentType;
};

export type UpdateTagItemsBody = TaggedComponent[];

/** GET /componentmetadata/tags/tagnames */
export type GetTagsByNamesParams = {
  /** Comma separated list of tag names. */
  tagNames: string;
  /** The component type to operate on. */
  componentType: ComponentComponentType;
};
