export type PromisedContentResponse<T> = Promise<ResponseContentEntity<T>>;

export type ResponseContentEntity<T> = {
  date: string;
  code: string;
  message: null;
  data: ContentObject<T>;
  path: string;
  requestId: string;
  version: string;
};

export type ContentObject<T> = {
  content: T;
  pageable: PageableObject;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: SortObject[];
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};

export type PageableObject = {
  sort: SortObject[];
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export type SortObject = {
  direction: string;
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  ascending: boolean;
  descending: boolean;
};
