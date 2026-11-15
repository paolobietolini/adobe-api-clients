export class AdobeApiError extends Error {
  readonly statusCode: number;
  readonly status: string;
  /** Raw response body, when the error came from an API call */
  readonly body?: string;

  constructor(
    statusCode: number,
    status: string,
    statusText: string,
    body?: string,
  ) {
    super(`Adobe API Error: [${statusCode}] - ${status}: ${statusText}`);
    this.name = "AdobeApiError";
    this.statusCode = statusCode;
    this.status = status;
    this.body = body;
  }
}
