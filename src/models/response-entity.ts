export type PromisedResponse<T> = Promise<ResponseEntity<T>>;

export type ResponseEntity<T> = {
  date: string;
  status: number;
  message: null;
  data: T;
  path: string;
  requestId: string;
  version: string;
};
