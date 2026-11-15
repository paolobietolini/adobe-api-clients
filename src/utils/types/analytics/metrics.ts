// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, Tag } from "./common.ts";

export type Metric = {
  id?: string;
  title?: string;
  name?: string;
  type?: "STRING" | "INT" | "DECIMAL" | "CURRENCY" | "PERCENT" | "TIME" | "ENUM" | "ORDERED_ENUM";
  extraTitleInfo?: string;
  category?: string;
  categories?: string[];
  support?: string[];
  allocation?: boolean;
  precision?: number;
  calculated?: boolean;
  segmentable?: boolean;
  description?: string;
  polarity?: "positive" | "negative";
  helpLink?: string;
  allowedForReporting?: boolean;
  tags?: Tag[];
};

export type MetricExpansion = "tags" | "allowedForReporting" | "categories";

/** GET /metrics */
export type ListMetricsParams = {
  /** ID of desired report suite */
  rsid: string;
  /** Locale that system named metrics should be returned in */
  locale?: AnalyticsLocale;
  /** Filter the metrics by if they are valid in a segment. */
  segmentable?: boolean;
  /** Add extra metadata to items (comma-delimited list) */
  expansion?: MetricExpansion[];
};

/** GET /metrics/{id} */
export type GetMetricParams = {
  /** ID of desired report suite */
  rsid: string;
  /** Locale that system named metrics should be returned in */
  locale?: AnalyticsLocale;
  /** Add extra metadata to items (comma-delimited list) */
  expansion?: MetricExpansion[];
};
