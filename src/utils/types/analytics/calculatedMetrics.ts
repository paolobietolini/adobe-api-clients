// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, Owner, Tag } from "./common.ts";

export type CalculatedMetric = {
  /** System generated id */
  id?: string;
  name?: string;
  description?: string;
  /** The report suite id for which the component was created/updated */
  rsid?: string;
  /** The report suite name for which the component was created/updated */
  reportSuiteName?: string;
  owner?: Owner;
  /** Set metric polarity, which indicates whether it's good or bad if a given metric goes up. Default=positive */
  polarity?: "positive" | "negative";
  /** Number of decimal places to include in calculated metric result */
  precision?: number;
  type?: "CURRENCY" | "TIME" | "DECIMAL" | "PERCENT";
  /** Calculated metric definition object */
  definition: CalculatedMetricDef;
  categories?: string[];
  tags?: Tag[];
  siteTitle?: string;
  modified?: string;
  /** Calculated metric creation date */
  created?: string;
};

export type CalcMetricFunction = {
  /** Calculated Metric Function ID */
  id?: string;
  /** Calculated Metric Function category */
  category?: string;
  /** If a Calculated Metric Function is persistable */
  persistable?: boolean;
  /** Calculated Metric Function name */
  name?: string;
  /** Calculated Metric Function namespace */
  namespace?: string;
  /** Calculated Metric Function description */
  description?: string;
  /** Calculated Metric Function example key */
  exampleKey?: string;
  /** Calculated Metric Function example */
  example?: string;
  /** Calculated Metric Function definition */
  definition?: CalcMetricFunctionDef;
};

export type CalcMetricFunctionDef = {
  func?: string;
  parameters?: CalcMetricFunctionParameter[];
  formula?: Record<string, Record<string, unknown>>;
  version?: number[];
};

export type CalcMetricFunctionParameter = {
  func?: string;
  name?: string;
  type?: string;
  friendlyNameKey?: string;
  descKey?: string;
  friendlyName?: string;
  description?: string;
  "default-value"?: Record<string, unknown>;
};

export type CalculatedMetricDef = Record<string, unknown>;

export type CalculatedMetricExpansion = "reportSuiteName" | "ownerFullName" | "modified" | "tags" | "definition" | "compatibility" | "categories";

export type CalculatedMetricIncludeType = "all" | "shared" | "templates";

/** GET /calculatedmetrics */
export type ListCalculatedMetricsParams = {
  /** Filter list to only include calculated metrics tied to specified RSID list (comma-delimited) */
  rsids?: string;
  /** Filter list to only include calculated metrics owned by the specified loginId */
  ownerId?: number;
  /** Filter list to only include calculated metrics in the specified list (comma-delimited list of IDs) (this is the same as calculatedMetricFilter, and is overwritten by calculatedMetricFilter */
  filterByIds?: string;
  /** The report suite where the calculated metric intended to be used. This report suite will be used to determine things like compatibility and permissions. If it is not specified then the permissions will be calculated based on the union of all metrics authorized in all groups the user belongs to. If the compatibility expansion is specified and toBeUsedInRsid is not then the compatibility returned is based off the compatibility from the last time the calculated metric was saved. */
  toBeUsedInRsid?: string;
  /** Locale */
  locale?: AnalyticsLocale;
  /** Filter list to only include calculated metrics that contains the Name */
  name?: string;
  /** Filter list to only include calculated metrics that contains one of the tags */
  tagNames?: string;
  /** Filter list to only include calculated metrics that are favorites */
  favorite?: boolean;
  /** Filter list to only include calculated metrics that are approved */
  approved?: boolean;
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
  /** Sort direction (ASC or DESC) */
  sortDirection?: "ASC" | "DESC";
  /** Property to sort by (name, modified_date, id is currently allowed) */
  sortProperty?: string;
  /** Comma-delimited list of additional calculated metric metadata fields to include on response. */
  expansion?: CalculatedMetricExpansion[];
  /** Include additional calculated metrics not owned by user. The "all" option takes precedence over "shared" */
  includeType?: CalculatedMetricIncludeType[];
};

/** POST /calculatedmetrics */
export type CreateCalculatedMetricParams = {
  /** Locale */
  locale?: AnalyticsLocale;
  /** Comma-delimited list of additional calculated metric metadata fields to include on response. */
  expansion?: CalculatedMetricExpansion[];
};

/** GET /calculatedmetrics/functions */
export type ListCalculatedMetricFunctionsParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};

/** GET /calculatedmetrics/functions/{id} */
export type GetCalculatedMetricFunctionParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};

/** POST /calculatedmetrics/validate */
export type ValidateCalculatedMetricParams = {
  /** Locale */
  locale?: AnalyticsLocale;
  /** Include migration functions in validation */
  migrating?: boolean;
};

/** GET /calculatedmetrics/{id} */
export type GetCalculatedMetricParams = {
  /** Locale */
  locale?: AnalyticsLocale;
  /** Comma-delimited list of additional calculated metric metadata fields to include on response. */
  expansion?: CalculatedMetricExpansion[];
};

/** PUT /calculatedmetrics/{id} */
export type UpdateCalculatedMetricParams = {
  /** Locale */
  locale?: AnalyticsLocale;
  /** Comma-delimited list of additional calculated metric metadata fields to include on response. */
  expansion?: CalculatedMetricExpansion[];
};

/** DELETE /calculatedmetrics/{id} */
export type DeleteCalculatedMetricParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};
