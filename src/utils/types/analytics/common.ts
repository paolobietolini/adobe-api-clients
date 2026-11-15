// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

/** Locales accepted by the `locale` query parameter */
export type AnalyticsLocale =
  | "en_US"
  | "fr_FR"
  | "ja_JP"
  | "de_DE"
  | "es_ES"
  | "ko_KR"
  | "pt_BR"
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

export type SegmentDefinition = {
  container?: {
    context?: string;
    func?: string;
    pred?: {
      val?: {
        description?: string;
        name?: string;
        func?: string;
      };
      str?: string;
      func?: string;
    };
  };
  func?: string;
  version?: number[];
};

export type DeleteResponse = {
  result?: string;
  message?: string;
};

export type Owner = {
  /** the login id of the owner */
  id: number;
  /** the friendly full login name of the owner, included when the expansion parameter ownerFullName is true */
  name?: string;
  /** the friendly full login name of the owner, included when the expansion parameter ownerFullName is true */
  login?: string;
};

/** Tag Model */
export type Tag = {
  /** the tag id */
  id?: number;
  /** the tag name */
  name?: string;
  /** the tag description */
  description?: string;
  /** the list of components that have been tagged with this tag */
  components?: TaggedComponent[];
};

export type TaggedComponent = {
  componentType?: string;
  componentId?: string;
  tags?: string[];
};
