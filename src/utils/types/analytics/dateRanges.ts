// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale } from "./common.ts";

export type AlternateVariableNames = {
  name?: string;
  baseName?: string;
  curatedName?: string;
};

export type ExpandedDateRange = {
  id?: string;
  name?: string;
  description?: string;
  modified?: string;
  companyId?: number;
  owner?: Record<string, unknown>;
  definition?: Record<string, unknown>;
  template?: boolean;
  createDate?: string;
  disabledDate?: string;
  alternateVariableNames?: AlternateVariableNames;
  curatedItem?: boolean;
  imsOrgId?: string;
  systemUserOwned?: boolean;
  tags?: Record<string, Record<string, unknown>>[];
  shares?: Record<string, Record<string, unknown>>[];
  approved?: boolean;
  favorite?: boolean;
  usageSummary?: Record<string, Record<string, unknown>>;
};

export type DateRangeExpansion = "definition" | "ownerFullName" | "modified" | "approved" | "favorite" | "shares" | "tags" | "sharesFullName" | "usageSummary" | "usageSummaryWithRelevancyScore";

/** GET /dateranges/{id} */
export type GetDateRangeParams = {
  /** Comma-delimited list of additional date range metadata fields to include on response. */
  expansion?: DateRangeExpansion[];
  /** Use the new JSON def */
  newDefinition?: boolean;
  /** Locale */
  locale?: AnalyticsLocale;
};

/** PUT /dateranges/{id} */
export type UpdateDateRangeParams = {
  /** Comma-delimited list of additional date range metadata fields to include on response. */
  expansion?: DateRangeExpansion[];
  /** Use the new JSON def */
  newDefinition?: boolean;
  /** Locale */
  locale?: AnalyticsLocale;
};

/** DELETE /dateranges/{id} */
export type DeleteDateRangeParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};

export type DateRangeIncludeType = "all" | "shared" | "templates" | "curatedItem";

/** GET /dateranges */
export type ListDateRangesParams = {
  /** Include additional dateranges not owned by user. The "all" option takes precedence over "shared" */
  includeType?: DateRangeIncludeType[];
  /** Comma-delimited list of additional date range metadata fields to include on response. */
  expansion?: DateRangeExpansion[];
  /** Locale */
  locale?: AnalyticsLocale;
  /** Filter list to only include date ranges in the specified list (comma-delimited list of IDs) */
  filterByIds?: string;
  /** Use the new JSON def */
  newDefinition?: boolean;
  /** Filter list to only include date ranges modified since this date (ISO8601 format) */
  filterByModifiedAfter?: string;
  /** Include the curatedItem status for given Rsid */
  curatedRsid?: string;
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};

/** POST /dateranges */
export type CreateDateRangeParams = {
  /** Comma-delimited list of additional date range metadata fields to include on response. */
  expansion?: DateRangeExpansion[];
  /** Use the new JSON def */
  newDefinition?: boolean;
  /** Locale */
  locale?: AnalyticsLocale;
};
