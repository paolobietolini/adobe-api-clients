import type {
  Annotation,
  CalcMetricFunction,
  CalculatedMetric,
  ComponentSearch,
  CreateAnnotationParams,
  CreateCalculatedMetricParams,
  CreateDateRangeParams,
  CreateProjectParams,
  CreateSegmentParams,
  CreateShareParams,
  CreateTagsBody,
  DeleteAnnotationParams,
  DeleteCalculatedMetricParams,
  DeleteComponentTagsParams,
  DeleteDateRangeParams,
  DeleteProjectParams,
  DeleteResponse,
  DeleteSegmentParams,
  DeleteShareParams,
  Dimension,
  ExpandedDateRange,
  GetAnnotationParams,
  GetCalculatedMetricFunctionParams,
  GetCalculatedMetricParams,
  GetComponentTagsParams,
  GetDateRangeParams,
  GetDimensionParams,
  GetMetricParams,
  GetProjectParams,
  GetSegmentParams,
  GetTagsByNamesParams,
  GetTopItemsParams,
  GetUsageLogsParams,
  ListAnnotationsParams,
  ListCalculatedMetricFunctionsParams,
  ListCalculatedMetricsParams,
  ListDateRangesParams,
  ListDimensionsParams,
  ListMetricsParams,
  ListProjectsParams,
  ListSegmentsParams,
  ListSharedToMeParams,
  ListSharesParams,
  ListTagsParams,
  ListUsersParams,
  Metric,
  PagedResponse,
  Project,
  ProjectCompatibility,
  RankedReportData,
  RankedRequest,
  ResponsePageUsageLogDto,
  SavedSharedComponent,
  SearchSharedComponentsParams,
  SearchTaggedComponentsParams,
  Segment,
  SegmentCompatibility,
  SegmentResponseItem,
  Share,
  SharedComponent,
  Tag,
  TaggedComponent,
  UnhashReportData,
  UpdateAnnotationParams,
  UpdateCalculatedMetricParams,
  UpdateDateRangeParams,
  UpdateProjectParams,
  UpdateSegmentParams,
  UpdateSharesBody,
  UpdateSharesParams,
  UpdateTagItemsBody,
  User,
  ValidateCalculatedMetricParams,
  ValidateProjectParams,
  ValidateSegmentParams,
} from "../utils/types/index.ts";
import { paginate } from "../utils/paginate.ts";
import type { AuthClient } from "./authClient.ts";
import { HttpClient } from "./httpClient.ts";

export class AnalyticsClient {
  readonly #http: HttpClient;

  constructor(auth: AuthClient, globalCompanyId: string) {
    this.#http = new HttpClient(
      auth,
      "https://analytics.adobe.io",
      `api/${globalCompanyId}`,
    );
  }

  /**
   * Iterates every item of a paged list, one request per page, lazily.
   * Analytics pages are 0-based.
   * @example
   * for await (const a of analytics.paginate((page) => analytics.listAnnotations({ limit: 100, page }))) {}
   */
  paginate<T>(
    fetchPage: (page: number) => Promise<PagedResponse<T>>,
    opts: { maxPages?: number } = {},
  ) {
    return paginate<T>(
      async (page) => {
        const r = await fetchPage(page);
        const hasMore =
          r.lastPage !== undefined
            ? !r.lastPage
            : (r.number ?? page) + 1 < (r.totalPages ?? 0);
        return { items: r.content, hasMore };
      },
      { start: 0, ...opts },
    );
  }

  /** GET /annotations - Retrieve all annotations. */
  listAnnotations(params: ListAnnotationsParams = {}) {
    return this.#http.get<PagedResponse<Annotation>>("annotations", params);
  }

  /** POST /annotations - Create new annotation */
  createAnnotation(body: Annotation, params: CreateAnnotationParams = {}) {
    return this.#http.post<Annotation>("annotations", body, params);
  }

  /** GET /annotations/{id} - Get existing annotation */
  getAnnotation(id: string, params: GetAnnotationParams = {}) {
    return this.#http.get<Annotation>(`annotations/${encodeURIComponent(id)}`, params);
  }

  /** PUT /annotations/{id} - Update existing annotation */
  updateAnnotation(id: string, body: Annotation, params: UpdateAnnotationParams = {}) {
    return this.#http.put<Annotation>(`annotations/${encodeURIComponent(id)}`, body, params);
  }

  /** DELETE /annotations/{id} - Delete existing annotation */
  deleteAnnotation(id: string, params: DeleteAnnotationParams = {}) {
    return this.#http.delete<DeleteResponse>(`annotations/${encodeURIComponent(id)}`, params);
  }

  /** GET /calculatedmetrics - Retrieve multiple calculated metrics */
  listCalculatedMetrics(params: ListCalculatedMetricsParams = {}) {
    return this.#http.get<PagedResponse<CalculatedMetric>>("calculatedmetrics", params);
  }

  /** POST /calculatedmetrics - Create a new calculated metric */
  createCalculatedMetric(body: CalculatedMetric, params: CreateCalculatedMetricParams = {}) {
    return this.#http.post<CalculatedMetric>("calculatedmetrics", body, params);
  }

  /** GET /calculatedmetrics/functions - Retrieve calculated metric functions */
  listCalculatedMetricFunctions(params: ListCalculatedMetricFunctionsParams = {}) {
    return this.#http.get<CalcMetricFunction[]>("calculatedmetrics/functions", params);
  }

  /** GET /calculatedmetrics/functions/{id} - Retrieve a calculated metric function by ID */
  getCalculatedMetricFunction(id: string, params: GetCalculatedMetricFunctionParams = {}) {
    return this.#http.get<CalcMetricFunction>(`calculatedmetrics/functions/${encodeURIComponent(id)}`, params);
  }

  /** POST /calculatedmetrics/validate - Validate a calculated metric definition */
  validateCalculatedMetric(body: CalculatedMetric, params: ValidateCalculatedMetricParams = {}) {
    return this.#http.post<CalculatedMetric>("calculatedmetrics/validate", body, params);
  }

  /** GET /calculatedmetrics/{id} - Retrieve a single calculated metric by ID */
  getCalculatedMetric(id: string, params: GetCalculatedMetricParams = {}) {
    return this.#http.get<CalculatedMetric>(`calculatedmetrics/${encodeURIComponent(id)}`, params);
  }

  /** PUT /calculatedmetrics/{id} - Update an existing calculated metric */
  updateCalculatedMetric(id: string, body: CalculatedMetric, params: UpdateCalculatedMetricParams = {}) {
    return this.#http.put<CalculatedMetric>(`calculatedmetrics/${encodeURIComponent(id)}`, body, params);
  }

  /** DELETE /calculatedmetrics/{id} - Delete calculated metrics by ID */
  deleteCalculatedMetric(id: string, params: DeleteCalculatedMetricParams = {}) {
    return this.#http.delete<DeleteResponse>(`calculatedmetrics/${encodeURIComponent(id)}`, params);
  }

  /** GET /componentmetadata/shares - Retrieve components shared by user */
  listShares(params: ListSharesParams = {}) {
    return this.#http.get<PagedResponse<Share>>("componentmetadata/shares", params);
  }

  /** POST /componentmetadata/shares - Share component with user */
  createShare(body: Share, params: CreateShareParams = {}) {
    return this.#http.post<Share>("componentmetadata/shares", body, params);
  }

  /** PUT /componentmetadata/shares - Update shared components with users */
  updateShares(body: UpdateSharesBody, params: UpdateSharesParams = {}) {
    return this.#http.put<SharedComponent>("componentmetadata/shares", body, params);
  }

  /** POST /componentmetadata/shares/component/search - Create search for shared components */
  searchSharedComponents(body: ComponentSearch, params: SearchSharedComponentsParams = {}) {
    return this.#http.post<SavedSharedComponent>("componentmetadata/shares/component/search", body, params);
  }

  /** GET /componentmetadata/shares/{id} - Retrieve details of share by ID */
  getShare(id: string) {
    return this.#http.get<Share>(`componentmetadata/shares/${encodeURIComponent(id)}`);
  }

  /** DELETE /componentmetadata/shares/{id} - Delete share by ID */
  deleteShare(id: string, params: DeleteShareParams = {}) {
    return this.#http.delete<Record<string, Record<string, unknown>>>(`componentmetadata/shares/${encodeURIComponent(id)}`, params);
  }

  /** GET /componentmetadata/shares/sharedto/me - Retrieve component IDs shared with user */
  listSharedToMe(params: ListSharedToMeParams) {
    return this.#http.get<string[]>("componentmetadata/shares/sharedto/me", params);
  }

  /** POST /componentmetadata/tags/component/search - Create search for component tags */
  searchTaggedComponents(body: ComponentSearch, params: SearchTaggedComponentsParams = {}) {
    return this.#http.post<TaggedComponent>("componentmetadata/tags/component/search", body, params);
  }

  /** GET /componentmetadata/tags - Retrieve tags for current user company */
  listTags(params: ListTagsParams = {}) {
    return this.#http.get<PagedResponse<Tag>>("componentmetadata/tags", params);
  }

  /** POST /componentmetadata/tags - Create tags for current user company */
  createTags(body: CreateTagsBody) {
    return this.#http.post<Tag[]>("componentmetadata/tags", body);
  }

  /** DELETE /componentmetadata/tags - Delete tags from components */
  deleteComponentTags(params: DeleteComponentTagsParams) {
    return this.#http.delete<Record<string, Record<string, unknown>>[]>("componentmetadata/tags", params);
  }

  /** GET /componentmetadata/tags/search - Retrieve component tags by component ID and component type */
  getComponentTags(params: GetComponentTagsParams) {
    return this.#http.get<Tag[]>("componentmetadata/tags/search", params);
  }

  /** PUT /componentmetadata/tags/tagitems - Update tags for component */
  updateTagItems(body: UpdateTagItemsBody) {
    return this.#http.put<TaggedComponent[]>("componentmetadata/tags/tagitems", body);
  }

  /** GET /componentmetadata/tags/{id} - Retrieve tag by ID */
  getTag(id: string) {
    return this.#http.get<Tag>(`componentmetadata/tags/${encodeURIComponent(id)}`);
  }

  /** DELETE /componentmetadata/tags/{id} - Delete tag from component */
  deleteTag(id: string) {
    return this.#http.delete<Record<string, Record<string, unknown>>[]>(`componentmetadata/tags/${encodeURIComponent(id)}`);
  }

  /** GET /componentmetadata/tags/tagnames - Retrieve component IDs associated with tag names */
  getTagsByNames(params: GetTagsByNamesParams) {
    return this.#http.get<string[]>("componentmetadata/tags/tagnames", params);
  }

  /** GET /dateranges/{id} - Retrieve configuration for a date range */
  getDateRange(id: string, params: GetDateRangeParams = {}) {
    return this.#http.get<ExpandedDateRange>(`dateranges/${encodeURIComponent(id)}`, params);
  }

  /** PUT /dateranges/{id} - Update configuration for a date range */
  updateDateRange(id: string, body: ExpandedDateRange, params: UpdateDateRangeParams = {}) {
    return this.#http.put<ExpandedDateRange>(`dateranges/${encodeURIComponent(id)}`, body, params);
  }

  /** DELETE /dateranges/{id} - Delete a date range */
  deleteDateRange(id: string, params: DeleteDateRangeParams = {}) {
    return this.#http.delete<DeleteResponse>(`dateranges/${encodeURIComponent(id)}`, params);
  }

  /** GET /dateranges - Retrieve user's date ranges */
  listDateRanges(params: ListDateRangesParams = {}) {
    return this.#http.get<PagedResponse<ExpandedDateRange>>("dateranges", params);
  }

  /** POST /dateranges - Create a date range */
  createDateRange(body: ExpandedDateRange, params: CreateDateRangeParams = {}) {
    return this.#http.post<ExpandedDateRange>("dateranges", body, params);
  }

  /** GET /dimensions - Retrieve dimensions for a report suite */
  listDimensions(params: ListDimensionsParams) {
    return this.#http.get<Dimension[]>("dimensions", params);
  }

  /** GET /dimensions/{id} - Retrieve a dimension by ID */
  getDimension(id: string, params: GetDimensionParams) {
    return this.#http.get<Dimension>(`dimensions/${encodeURIComponent(id)}`, params);
  }

  /** GET /metrics - Retrieve metrics for a report suite */
  listMetrics(params: ListMetricsParams) {
    return this.#http.get<Metric[]>("metrics", params);
  }

  /** GET /metrics/{id} - Retrieve a metric by ID */
  getMetric(id: string, params: GetMetricParams) {
    return this.#http.get<Metric>(`metrics/${encodeURIComponent(id)}`, params);
  }

  /** GET /projects/{id} - Retrieve project configuration */
  getProject(id: string, params: GetProjectParams = {}) {
    return this.#http.get<Project>(`projects/${encodeURIComponent(id)}`, params);
  }

  /** PUT /projects/{id} - Update a project configuration */
  updateProject(id: string, body: Project, params: UpdateProjectParams = {}) {
    return this.#http.put<Project>(`projects/${encodeURIComponent(id)}`, body, params);
  }

  /** DELETE /projects/{id} - Delete a project */
  deleteProject(id: string, params: DeleteProjectParams = {}) {
    return this.#http.delete<DeleteResponse>(`projects/${encodeURIComponent(id)}`, params);
  }

  /** POST /projects/validate - Creates a valid project definition */
  validateProject(body: Project, params: ValidateProjectParams = {}) {
    return this.#http.post<ProjectCompatibility>("projects/validate", body, params);
  }

  /** GET /projects - Retrieve user's projects */
  listProjects(params: ListProjectsParams = {}) {
    return this.#http.get<PagedResponse<Project>>("projects", params);
  }

  /** POST /projects - Create a project */
  createProject(body: Project, params: CreateProjectParams = {}) {
    return this.#http.post<Project>("projects", body, params);
  }

  /** POST /reports - Create a report */
  runReport(body: RankedRequest) {
    return this.#http.post<RankedReportData>("reports", body);
  }

  /** POST /reports/realtime - Create a realtime report */
  runRealtimeReport(body: RankedRequest) {
    return this.#http.post<RankedReportData>("reports/realtime", body);
  }

  /** GET /reports/topItems - Retrieve top items report */
  getTopItems(params: GetTopItemsParams) {
    return this.#http.get<UnhashReportData>("reports/topItems", params);
  }

  /** GET /segments - Retrieve all segments */
  listSegments(params: ListSegmentsParams = {}) {
    return this.#http.get<PagedResponse<SegmentResponseItem>>("segments", params);
  }

  /** POST /segments - Create a segment */
  createSegment(body: Segment, params: CreateSegmentParams = {}) {
    return this.#http.post<SegmentResponseItem>("segments", body, params);
  }

  /** POST /segments/validate - Create validation for segment */
  validateSegment(body: Segment, params: ValidateSegmentParams) {
    return this.#http.post<SegmentCompatibility>("segments/validate", body, params);
  }

  /** GET /segments/{id} - Retrieve a segment by ID */
  getSegment(id: string, params: GetSegmentParams = {}) {
    return this.#http.get<SegmentResponseItem>(`segments/${encodeURIComponent(id)}`, params);
  }

  /** PUT /segments/{id} - Update a segment by ID */
  updateSegment(id: string, body: Segment, params: UpdateSegmentParams = {}) {
    return this.#http.put<SegmentResponseItem>(`segments/${encodeURIComponent(id)}`, body, params);
  }

  /** DELETE /segments/{id} - Delete a segment by ID */
  deleteSegment(id: string, params: DeleteSegmentParams = {}) {
    return this.#http.delete<string>(`segments/${encodeURIComponent(id)}`, params);
  }

  /** GET /users - Retrieve users for current company */
  listUsers(params: ListUsersParams = {}) {
    return this.#http.get<PagedResponse<User>>("users", params);
  }

  /** GET /users/me - Retrieve current user */
  getCurrentUser() {
    return this.#http.get<User>("users/me");
  }

  /** GET /auditlogs/usage - Retrieve logs for provided search criteria */
  getUsageLogs(params: GetUsageLogsParams) {
    return this.#http.get<ResponsePageUsageLogDto>("auditlogs/usage", params);
  }
}
