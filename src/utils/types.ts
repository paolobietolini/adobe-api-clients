export type AuthCredentials = {
  clientId: string;
  clientSecret: string;
  scope: string;
};

export type AuthSecrets = {
  clientId: string;
  clientSecret: string;
  scope: string;
};

export type TokenResponse = {
  access_token: string;
  token_type: string; // "bearer"
  expires_in: number; // seconds
};

export type TokenCached = TokenResponse & {
  expires_at: number;
  cache_key: string;
};

export type Method = "POST" | "GET" | "DELETE";

export type QueryParams = Record<
  string,
  string | number | boolean | string[] | undefined | null
>;

/** ISO 8601, `YYYY-MM-DDTHH:MM:SSZ` */
export type ISODate = string;
/** `YYYY-MM-DDTHH:MM:SSZ/YYYY-MM-DDTHH:MM:SSZ` */
export type ISODateRange = `${string}/${string}`;

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

export type AnnotationLocale =
  | "en_US"
  | "fr_FR"
  | "ja_JP"
  | "de_DE"
  | "es_ES"
  | "ko_KR"
  | "pt_PR"
  | "zh_CN"
  | "zh_TW";

/** Query parameters for GET /annotations */
export type AnnotationParams = {
  /** Extra fields to include in each returned annotation */
  expansion?: AnnotationExpansion[];
  /** Default: only annotations owned by the user */
  includeType?: AnnotationIncludeType;
  /** Localizes Adobe-provided strings only, not user-defined ones */
  locale?: AnnotationLocale;
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

/** Paged response of GET /annotations (paging fields per Adobe's usual list envelope) */
export type AnnotationList = {
  content: Annotation[];
  totalElements?: number;
  totalPages?: number;
  number?: number;
  size?: number;
  firstPage?: boolean;
  lastPage?: boolean;
  numberOfElements?: number;
};
