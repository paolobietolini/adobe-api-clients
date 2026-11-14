export type AnalyticsLocale =
  | "en_US"
  | "fr_FR"
  | "ja_JP"
  | "de_DE"
  | "es_ES"
  | "ko_KR"
  | "pt_PR"
  | "zh_CN"
  | "zh_TW";

/** Paged list envelope returned by Analytics 2.0 list endpoints */
export type PagedResponse<T> = {
  content: T[];
  totalElements?: number;
  totalPages?: number;
  number?: number;
  size?: number;
  firstPage?: boolean;
  lastPage?: boolean;
  numberOfElements?: number;
};
