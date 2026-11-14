import type {
  Annotation,
  AnnotationCreate,
  AnnotationGetParams,
  AnnotationList,
  AnnotationParams,
  AnnotationUpdate,
} from "../utils/types/index.ts";
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

  listAnnotations(params: AnnotationParams = {}) {
    return this.#http.get<AnnotationList>("annotations", params);
  }

  getAnnotation(id: string, params: AnnotationGetParams = {}) {
    return this.#http.get<Annotation>(
      `annotations/${encodeURIComponent(id)}`,
      params,
    );
  }

  createAnnotation(body: AnnotationCreate) {
    return this.#http.post<Annotation>("annotations", body);
  }

  updateAnnotation(id: string, body: AnnotationUpdate) {
    return this.#http.put<Annotation>(
      `annotations/${encodeURIComponent(id)}`,
      body,
    );
  }

  deleteAnnotation(id: string) {
    return this.#http.delete<void>(`annotations/${encodeURIComponent(id)}`);
  }
}
