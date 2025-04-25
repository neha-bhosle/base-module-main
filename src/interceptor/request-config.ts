export type RequestConfig = {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: Headers;
  baseURL: string;
  method: string;
  url: string;
  data?: string | undefined;
};

type Headers = {
  Accept: string;
  Authorization: string;
  "Access-Control-Allow-Origin": string;
  "Access-Control-Allow-Headers": string;
  "Content-Type": string;
  "Access-Control-Allow-Methods": string;
};

interface Env {}

type Transitional = {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
};
