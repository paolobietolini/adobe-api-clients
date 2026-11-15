// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

import type { AnalyticsLocale, Owner } from "./common.ts";

export type Project = {
  /** System generated id */
  id?: string;
  name?: string;
  description?: string;
  /** The report suite id for which the component was created/updated */
  rsid?: string;
  /** The report suite name for which the component was created/updated */
  reportSuiteName?: string;
  migratedIds?: string[];
  companyTemplate?: boolean;
  template?: boolean;
  type?: "project" | "mobileScorecard";
  definition?: unknown;
  externalReferences?: Record<string, string[]>;
  accessLevel?: string;
  versionNotes?: string;
  tags?: Record<string, Record<string, unknown>>[];
  shares?: Record<string, Record<string, unknown>>[];
  approved?: boolean;
  favorite?: boolean;
  usageSummary?: Record<string, Record<string, unknown>>;
  complexity?: Record<string, unknown>;
  owner?: Owner;
  siteTitle?: string;
  modified?: string;
  created?: string;
};

export type ProjectCompatibility = {
  valid?: boolean;
  validatorVersion?: string;
  message?: string;
};

export type ProjectExpansion = "reportSuiteName" | "shares" | "tags" | "accessLevel" | "modified" | "externalReferences" | "definition";

/** GET /projects/{id} */
export type GetProjectParams = {
  /** Comma-delimited list of additional project metadata fields to include on response. */
  expansion?: ProjectExpansion[];
  /** Locale */
  locale?: AnalyticsLocale;
};

/** PUT /projects/{id} */
export type UpdateProjectParams = {
  /** Comma-delimited list of additional project metadata fields to include on response. */
  expansion?: ProjectExpansion[];
  /** Locale */
  locale?: AnalyticsLocale;
};

/** DELETE /projects/{id} */
export type DeleteProjectParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};

/** POST /projects/validate */
export type ValidateProjectParams = {
  /** Locale */
  locale?: AnalyticsLocale;
};

export type ProjectIncludeType = "all" | "shared";

export type ProjectPagination = "true" | "false";

/** GET /projects */
export type ListProjectsParams = {
  /** Include additional projects not owned by user. The "all" option takes precedence over "shared". If neither guided, or project is included, both types are returned */
  includeType?: ProjectIncludeType[];
  /** Comma-delimited list of additional project metadata fields to include on response. */
  expansion?: ProjectExpansion[];
  /** Filter list to only include projects in the specified list (comma-delimited list of IDs) */
  filterByIds?: string;
  /** Locale */
  locale?: AnalyticsLocale;
  /** return paginated results */
  pagination?: ProjectPagination;
  /** Filter list to only include projects owned by the specified loginId */
  ownerId?: number;
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};

/** POST /projects */
export type CreateProjectParams = {
  /** Comma-delimited list of additional project metadata fields to include on response. */
  expansion?: ProjectExpansion[];
  /** Locale */
  locale?: AnalyticsLocale;
};
