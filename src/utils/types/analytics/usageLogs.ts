// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

export type ResponsePageUsageLogDto = {
  content?: UsageLogDto[];
  totalElements?: number;
  lastPage?: boolean;
  numberOfElements?: number;
  totalPages?: number;
  firstPage?: boolean;
  sort?: string;
  size?: number;
  number?: number;
};

export type UsageLogDto = {
  dateCreated?: string;
  eventDescription?: string;
  ipAddress?: string;
  rsid?: string;
  eventType?: string;
  login?: string;
};

/** GET /auditlogs/usage */
export type GetUsageLogsParams = {
  /** Start date for the maximum of a 3 month period. */
  startDate: string;
  /** End date for the maximum of a 3 month period. */
  endDate: string;
  /** The login value of the user you want to filter logs by. */
  login?: string;
  /** The IP address you want to filter logs by. */
  ip?: string;
  /** The report suite ID you want to filter logs by. */
  rsid?: string;
  /** The numeric id for the event type you want to filter logs by. */
  eventType?: string;
  /** The event description you want to filter logs by. No wildcards permitted. */
  event?: string;
  /** Number of results per page. */
  limit?: number;
  /** Page number (base 0 - first page is "0"). */
  page?: number;
};
