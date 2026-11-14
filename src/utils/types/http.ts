export type Method = "POST" | "GET" | "DELETE" | "PUT";

export type QueryParams = Record<
  string,
  string | number | boolean | string[] | undefined | null
>;

/** ISO 8601, `YYYY-MM-DDTHH:MM:SSZ` */
export type ISODate = string;
/** `YYYY-MM-DDTHH:MM:SSZ/YYYY-MM-DDTHH:MM:SSZ` */
export type ISODateRange = `${string}/${string}`;
