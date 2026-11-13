export class AdobeApiError extends Error {
  constructor(statusCode: number, status: string, statusText: string) {
    super(`Adobe API Error: [${statusCode}] - ${status}: ${statusText}`);
  }
}
