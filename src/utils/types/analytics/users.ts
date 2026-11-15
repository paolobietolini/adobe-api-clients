// Generated from https://github.com/AdobeDocs/analytics-2.0-apis/blob/main/static/swagger.json
// Hand-edit freely; there is no regeneration step in the repo.

export type User = {
  companyid?: number;
  loginId?: number;
  login?: string;
  changePassword?: boolean;
  createDate?: string;
  disabled?: boolean;
  email?: string;
  firstName?: string;
  fullName?: string;
  imsUserId?: string;
  lastName?: string;
  lastAccess?: string;
  phoneNumber?: string;
  tempLoginEnd?: string;
  title?: string;
};

/** GET /users */
export type ListUsersParams = {
  /** Number of results per page */
  limit?: number;
  /** Page number (base 0 - first page is "0") */
  page?: number;
};
