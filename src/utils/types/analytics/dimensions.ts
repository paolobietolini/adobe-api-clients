// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, Tag } from "./common.ts";

export type Dimension = {
  id?: string;
  title?: string;
  name?: string;
  type?: "STRING" | "INT" | "DECIMAL" | "CURRENCY" | "PERCENT" | "TIME" | "ENUM" | "ORDERED_ENUM";
  category?: string;
  categories?: string[];
  support?: string[];
  pathable?: boolean;
  parent?: string;
  extraTitleInfo?: string;
  segmentable?: boolean;
  reportable?: string[];
  description?: string;
  allowedForReporting?: boolean;
  attributionModel?: Record<string, Record<string, unknown>>;
  /** The configured allocation type for the eVar. Preserves distinctions collapsed by attributionModel.func. */
  allocationType?: "most_recent_last" | "original_value_first" | "linear" | "linear_to_items" | "merchandising_first" | "merchandising_last";
  /** The configured expiration type for the eVar, determining how long the value persists across hits. */
  expirationType?: "visit" | "page_view" | "never" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year" | "purchase" | "product_view" | "cart_open" | "cart_checkout" | "cart_add" | "cart_remove" | "cart_view" | "event";
  /** Number of days in the expiration window. Semantically meaningful when expirationType is 'day'. */
  expirationCustomDays?: number;
  /** The eVar storage type. */
  dataType?: "text" | "counter";
  /** Metric IDs that trigger merchandising binding. Populated only for merchandising eVars configured with event triggers. */
  bindingEvents?: string[];
  /** Merchandising binding style. Populated only for merchandising eVars. */
  merchandisingSyntax?: "product" | "conversion_variable";
  /** High-level allocation bucket. Returned automatically when expansion=attributionModel is requested; does not have its own expansion flag. */
  ecomAllocationType?: "first" | "last" | "merchandising";
  noneSettings?: NoneSettings;
  tags?: Tag[];
};

export type NoneSettings = {
  includeNoneByDefault?: boolean;
  noneChangeable?: boolean;
};

export type DimensionSegmentable = "true";

export type DimensionReportable = "true";

export type DimensionExpansion = "tags" | "allowedForReporting" | "attributionModel" | "categories" | "allocationType" | "expirationType" | "expirationCustomDays" | "dataType" | "bindingEvents" | "merchandisingSyntax";

/** GET /dimensions */
export type ListDimensionsParams = {
  /** A report suite ID */
  rsid: string;
  /** Locale */
  locale?: AnalyticsLocale;
  /** Only include dimensions that are valid within a segment. */
  segmentable?: DimensionSegmentable;
  /** Only include dimensions that are valid within a report. */
  reportable?: DimensionReportable;
  /** Only include classifiable dimensions. */
  classifiable?: boolean;
  /** Add extra metadata to items (comma-delimited list) */
  expansion?: DimensionExpansion[];
};

/** GET /dimensions/{id} */
export type GetDimensionParams = {
  /** The report suite ID. */
  rsid: string;
  /** The locale to use for returning system named dimensions. */
  locale?: AnalyticsLocale;
  /** Add extra metadata to items (comma-delimited list) */
  expansion?: DimensionExpansion[];
};
