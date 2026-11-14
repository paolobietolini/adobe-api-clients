export type AuthCredentials = {
  clientId: string;
  clientSecret: string;
  scope: string;
};

export type AuthSecrets = {
  clientId: string;
  clientSecret: string;
  scope: string;
};

export type TokenResponse = {
  access_token: string;
  token_type: string; // "bearer"
  expires_in: number; // seconds
};

export type TokenCached = TokenResponse & {
  expires_at: number;
  cache_key: string;
};

export type Method = "POST" | "GET" | "DELETE";
