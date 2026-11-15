// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, Owner, SegmentDefinition, Tag } from "./common.ts";

export type Segment = {
  /** A name for the segment. */
  name?: string;
  /** A description of the segment. */
  description?: string;
  /** The report suite id. */
  rsid?: string;
  /** The friendly name for the report suite id. */
  reportSuiteName?: string;
  /** The owner of the segment as an Owner object. */
  owner?: Owner;
  /** The segment definition as a JSON object */
  definition?: SegmentDefinition;
  /** Analytics products that the segment is compatible with */
  compatibility?: SegmentCompatibility;
  definitionLastModified?: string;
  categories?: string[];
  /** A name for the report suite. This is deprecated and should use the report suite name instead. */
  siteTitle?: string;
  /** All existing tags associated with the segment. */
  tags?: Tag[];
  modified?: string;
  created?: string;
};

export type SegmentResponseItem = {
  /** Id of the segment. */
  id?: string;
  /** A name for the segment. */
  name?: string;
  /** A description of the segment. */
  description?: string;
  /** The report suite id. */
  rsid?: string;
  /** The friendly name for the report suite id. */
  reportSuiteName?: string;
  /** The owner of the segment as an Owner object. */
  owner?: Owner;
  /** The segment definition as a JSON object */
  definition?: SegmentDefinition;
  /** Analytics products that the segment is compatible with */
  compatibility?: SegmentCompatibility;
  definitionLastModified?: string;
  categories?: string[];
  /** A name for the report suite. This is deprecated and should use the report suite name instead. */
  siteTitle?: string;
  /** All existing tags associated with the segment. */
  tags?: Tag[];
  modified?: string;
  created?: string;
};

export type SegmentCompatibility = {
  valid?: boolean;
  message?: string;
  validator_version?: string;
  supported_products?: string[];
  supported_schema?: string[];
  supported_features?: string[];
};

export type SegmentFilterByPublishedSegments = "all" | "true" | "false";

export type SegmentExpansion = "reportSuiteName" | "ownerFullName" | "modified" | "tags" | "compatibility" | "definition" | "publishingStatus" | "definitionLastModified" | "categories";

export type SegmentIncludeType = "shared" | "all" | "templates";

/** GET /segments */
export type ListSegmentsParams = {
  /** Filter list to only include segments tied to specified RSID list (comma-delimited) */
  rsids?: string;
  /** Filter list to only include segments in the specified list (comma-delimited list of IDs) */
  segmentFilter?: string;
  /** Locale */
  locale?: AnalyticsLocale;
  /** Filter list to only include segments that contains the Name */
  name?: string;
  /** Filter list to only include segments that contains one of the tags */
  tagNames?: string;
  /** Filter list to only include segments where the published field is set to one of the allowable values (all, true, false). */
  filterByPublishedSegments?: SegmentFilterByPublishedSegments;
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
  /** Sort direction (ASC or DESC */
  sortDirection?: "ASC" | "DESC";
  /** Property to sort by (name, modified_date, id is currently allowed) */
  sortProperty?: string;
  /** Comma-delimited list of additional segment metadata fields to include on response. */
  expansion?: SegmentExpansion[];
  /** Include additional segments not owned by user. The "all" option takes precedence over "shared" */
  includeType?: SegmentIncludeType[];
};

/** POST /segments */
export type CreateSegmentParams = {
  /** Locale. Valid values include 'en_US', 'fr_FR', 'ja_JP', 'de_DE', 'es_ES', 'ko_KR', 'pt_BR', 'zh_CN', and 'zh_TW'. */
  locale?: AnalyticsLocale;
  /** Comma-delimited list of additional segment metadata fields to include on response. */
  expansion?: SegmentExpansion[];
};

/** POST /segments/validate */
export type ValidateSegmentParams = {
  /** RSID to run the report against */
  rsid: string;
};

/** GET /segments/{id} */
export type GetSegmentParams = {
  /** Locale. Valid values include 'en_US', 'fr_FR', 'ja_JP', 'de_DE', 'es_ES', 'ko_KR', 'pt_BR', 'zh_CN', and 'zh_TW'. */
  locale?: AnalyticsLocale;
  /** Comma-delimited list of additional segment metadata fields to include on response. */
  expansion?: SegmentExpansion[];
};

/** PUT /segments/{id} */
export type UpdateSegmentParams = {
  /** Locale. Valid values include 'en_US', 'fr_FR', 'ja_JP', 'de_DE', 'es_ES', 'ko_KR', 'pt_BR', 'zh_CN', and 'zh_TW'. */
  locale?: AnalyticsLocale;
  /** Comma-delimited list of additional segment metadata fields to include on response. */
  expansion?: SegmentExpansion[];
};

/** DELETE /segments/{id} */
export type DeleteSegmentParams = {
  /** Locale. Valid values include 'en_US', 'fr_FR', 'ja_JP', 'de_DE', 'es_ES', 'ko_KR', 'pt_BR', 'zh_CN', and 'zh_TW'. */
  locale?: AnalyticsLocale;
};
