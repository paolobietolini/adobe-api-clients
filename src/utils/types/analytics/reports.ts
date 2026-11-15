// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, SegmentDefinition } from "./common.ts";

export type Locale = {
  language?: string;
  script?: string;
  country?: string;
  variant?: string;
  extensionKeys?: string[];
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  iso3Language?: string;
  iso3Country?: string;
  displayLanguage?: string;
  displayScript?: string;
  displayCountry?: string;
  displayVariant?: string;
  displayName?: string;
};

export type RankedColumnError = {
  columnId?: string;
  errorCode?: "unauthorized_metric" | "unauthorized_dimension" | "unauthorized_dimension_global" | "anomaly_detection_failure_unexpected_item_count" | "anomaly_detection_failure_tsa_service" | "not_enabled_metric" | "not_enabled_dimension" | "not_enabled_dimension_global";
  errorId?: string;
  errorDescription?: string;
};

export type RankedColumnMetaData = {
  dimension?: ReportDimension;
  columnIds?: string[];
  columnErrors?: RankedColumnError[];
};

export type RankedReportData = {
  totalPages?: number;
  firstPage?: boolean;
  lastPage?: boolean;
  numberOfElements?: number;
  number?: number;
  totalElements?: number;
  message?: string;
  request?: RankedRequest;
  reportId?: string;
  columns?: RankedColumnMetaData;
  rows?: Row[];
  summaryData?: RankedSummaryData;
};

export type RankedRequest = {
  rsid?: string;
  dimension?: string;
  locale?: Locale;
  globalFilters?: ReportFilter[];
  search?: ReportSearch;
  settings?: RankedSettings;
  statistics?: RankedStatistics;
  metricContainer?: ReportMetrics;
  rowContainer?: ReportRows;
  anchorDate?: string;
};

export type RankedSettings = {
  limit?: number;
  page?: number;
  dimensionSort?: string;
  countRepeatInstances?: boolean;
  reflectRequest?: boolean;
  includeAnomalyDetection?: boolean;
  includeForecasting?: boolean;
  includePercentChange?: boolean;
  includeLatLong?: boolean;
  nonesBehavior?: string;
};

export type RankedStatistics = {
  functions?: string[];
  ignoreZeroes?: boolean;
};

export type RankedSummaryData = Record<string, unknown>;

export type ReportDimension = {
  id?: string;
  type?: "STRING" | "INT" | "DECIMAL" | "CURRENCY" | "PERCENT" | "TIME" | "ENUM" | "ORDERED_ENUM";
};

export type ReportFilter = {
  id?: string;
  type?: "dateRange" | "breakdown" | "segment" | "excludeItemIds";
  dimension?: string;
  itemId?: string;
  itemIds?: string[];
  segmentId?: string;
  segmentDefinition?: SegmentDefinition;
  dateRange?: string;
  dateRangeRelative?: string;
  excludeItemIds?: string[];
};

export type ReportMetric = {
  id?: string;
  columnId?: string;
  filters?: string[];
  sort?: string;
  metricDefinition?: Record<string, Record<string, unknown>>;
  predictive?: ReportMetricPredictiveSettings;
};

export type ReportMetricPredictiveSettings = {
  anomalyConfidence?: number;
};

export type ReportMetrics = {
  metricFilters?: ReportFilter[];
  metrics?: ReportMetric[];
};

export type ReportRow = {
  rowId?: string;
  filters?: string[];
};

export type ReportRows = {
  rowFilters?: ReportFilter[];
  rows?: ReportRow[];
};

export type ReportSearch = {
  clause?: string;
  excludeItemIds?: string[];
  itemIds?: string[];
  includeSearchTotal?: boolean;
  empty?: boolean;
};

export type Row = {
  itemId?: string;
  value?: string;
  rowId?: string;
  data?: number[];
  dataExpected?: number[];
  dataUpperBound?: number[];
  dataLowerBound?: number[];
  dataAnomalyDetected?: boolean[];
  percentChange?: number[];
  latitude?: number;
  longitude?: number;
  dataForecasted?: number[];
  dataForecastedUpperBound?: number[];
  dataForecastedLowerBound?: number[];
};

export type RowItem = {
  itemId?: string;
  value?: string;
};

export type UnhashReportData = {
  totalPages?: number;
  firstPage?: boolean;
  lastPage?: boolean;
  numberOfElements?: number;
  number?: number;
  totalElements?: number;
  message?: string;
  reportId?: string;
  searchAnd?: string;
  searchOr?: string;
  searchNot?: string;
  searchPhrase?: string;
  oberonRequestXML?: string;
  oberonResponseXML?: string;
  rows?: RowItem[];
};

/** GET /reports/topItems */
export type GetTopItemsParams = {
  /** ID of desired report suite ie. myrsid */
  rsid: string;
  /** Dimension to run the report against. Example: 'variables/page' */
  dimension: string;
  /** Locale that system named metrics should be returned in */
  locale?: AnalyticsLocale;
  /** Format: YYYY-MM-DD/YYYY-MM-DD */
  dateRange?: string;
  /** General search string; wrap with single quotes. Example: 'PageABC' */
  "search-clause"?: string;
  /** Format: YYYY-MM-DD */
  startDate?: string;
  /** Format: YYYY-MM-DD */
  endDate?: string;
  /** Search terms that will be AND-ed together. Space delimited. */
  searchAnd?: string;
  /** Search terms that will be OR-ed together. Space delimited. */
  searchOr?: string;
  /** Search terms that will be treated as NOT including. Space delimited. */
  searchNot?: string;
  /** A full search phrase that will be searched for. */
  searchPhrase?: string;
  /** Controls None values to be included */
  lookupNoneValues?: boolean;
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};
