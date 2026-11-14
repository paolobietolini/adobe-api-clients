import type { ISODate, ISODateRange } from "../http.ts";
import type { AnalyticsLocale, PagedResponse } from "./common.ts";

export type AnnotationColor =
  | "STANDARD1"
  | "STANDARD2"
  | "STANDARD3"
  | "STANDARD4"
  | "STANDARD5"
  | "STANDARD6"
  | "STANDARD7"
  | "STANDARD8"
  | "STANDARD9";

export type AnnotationExpansion =
  | "name"
  | "description"
  | "dateRange"
  | "color"
  | "applyToAllReports"
  | "scope"
  | "createdDate"
  | "modifiedDate"
  | "modifiedById"
  | "tags"
  | "shares"
  | "approved"
  | "favorite"
  | "usageSummary"
  | "owner"
  | "companyId"
  | "reportSuiteName"
  | "rsid";

export type AnnotationIncludeType = "all" | "shared";

/** Query parameters for GET /annotations */
export type AnnotationParams = {
  /** Extra fields to include in each returned annotation */
  expansion?: AnnotationExpansion[];
  /** Default: only annotations owned by the user */
  includeType?: AnnotationIncludeType;
  /** Localizes Adobe-provided strings only, not user-defined ones */
  locale?: AnalyticsLocale;
  /** Annotations modified after this date */
  filterByModifiedAfter?: ISODate;
  /** Annotations fully within this range */
  filterByDateRange?: ISODateRange;
  /** Page size */
  limit?: number;
  /** Zero-based, up to 1000 pages */
  page?: number;
};

/** Annotation object; optional fields are returned only when requested via `expansion` */
export type Annotation = {
  id?: string;
  name?: string;
  description?: string;
  dateRange?: ISODateRange;
  color?: AnnotationColor;
  applyToAllReports?: boolean;
  scope?: {
    metrics?: unknown[];
    filters?: unknown[];
  };
  createdDate?: ISODate;
  modifiedDate?: ISODate;
  modifiedById?: number | string;
  tags?: unknown[]; // structure not documented
  shares?: unknown[]; // structure not documented
  approved?: boolean;
  favorite?: boolean;
  usageSummary?: Record<string, unknown>; // structure not documented
  owner?: { id?: number | string; name?: string; login?: string };
  companyId?: string;
  reportSuiteName?: string;
  rsid?: string;
};

export type AnnotationList = PagedResponse<Annotation>;
export type AnnotationGetParams = Pick<
  AnnotationParams,
  "expansion" | "locale"
>;

export type AnnotationCreate = {
  name: string;
  rsid: string;
  dateRange: ISODateRange;
  color?: AnnotationColor;
  description?: string;
  applyToAllReports?: boolean;
  scope?: Annotation["scope"];
  tags?: Annotation["tags"];
};
