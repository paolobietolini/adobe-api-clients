// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, Owner } from "./common.ts";

export type Annotation = {
  id?: string;
  name?: string;
  description?: string;
  dateRange?: string;
  color?: "STANDARD1" | "STANDARD2" | "STANDARD3" | "STANDARD4" | "STANDARD5" | "STANDARD6" | "STANDARD7" | "STANDARD8" | "STANDARD9";
  applyToAllReports?: boolean;
  scope?: AnnotationScope;
  createdDate?: string;
  modifiedDate?: string;
  modifiedById?: string;
  tags?: Record<string, Record<string, unknown>>[];
  shares?: Record<string, Record<string, unknown>>[];
  approved?: boolean;
  favorite?: boolean;
  usageSummary?: Record<string, Record<string, unknown>>;
  systemUserOwned?: boolean;
  owner?: Owner;
  companyId?: number;
  reportSuiteName?: string;
  rsid?: string;
};

export type AnnotationScope = {
  metrics?: ScopeMetric[];
  filters?: ScopeFilter[];
};

export type ScopeFilter = {
  id?: string;
  operator?: string;
  dimensionType?: string;
  terms?: string[];
  componentType?: string;
};

export type ScopeMetric = {
  id?: string;
  componentType?: string;
};

export type AnnotationExpansion = "name" | "description" | "dateRange" | "color" | "applyToAllReports" | "scope" | "createdDate" | "modifiedDate" | "modifiedById" | "owner" | "companyId" | "rsid" | "approved" | "favorite" | "shares" | "sharesFullName" | "tags" | "usageSummary" | "usageSummaryWithRelevancyScore" | "ownerFullName" | "reportSuiteName";

export type AnnotationIncludeType = "all" | "shared";

/** GET /annotations */
export type ListAnnotationsParams = {
  /** Comma-delimited list of additional annotation metadata fields to include on response. */
  expansion?: AnnotationExpansion[];
  /** Include additional annotations not owned by user. The "all" option takes precedence over "shared" */
  includeType?: AnnotationIncludeType[];
  /** Locale */
  locale?: AnalyticsLocale;
  filterByIds?: string;
  /** Filter list to only include annotations modified since this date (ISO8601 format) */
  filterByModifiedAfter?: string;
  /** Filter list to only include annotations in the specified date range with format yyyy-MM-dd'T'HH:mm:ss/yyyy-MM-dd'T'hh:MM:ss */
  filterByDateRange?: string;
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
  /** Sort direction (ASC or DESC */
  sortDirection?: "ASC" | "DESC";
  /** Property to sort by (name, modified_date, id is currently allowed) */
  sortProperty?: string;
};

/** POST /annotations */
export type CreateAnnotationParams = {
  /** Comma-delimited list of additional annotation metadata fields to include on response. */
  expansion?: AnnotationExpansion[];
  /** Locale */
  locale?: AnalyticsLocale;
};

/** GET /annotations/{id} */
export type GetAnnotationParams = {
  /** Comma-delimited list of additional annotation metadata fields to include on response. */
  expansion?: AnnotationExpansion[];
  /** Locale */
  locale?: AnalyticsLocale;
};

/** PUT /annotations/{id} */
export type UpdateAnnotationParams = {
  /** Comma-delimited list of additional annotation metadata fields to include on response. */
  expansion?: AnnotationExpansion[];
  /** Locale */
  locale?: AnalyticsLocale;
};

/** DELETE /annotations/{id} */
export type DeleteAnnotationParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};
