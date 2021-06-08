export interface ApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ResponseData<T>;
}

export interface ResponseData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
