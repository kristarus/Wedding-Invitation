export interface PaginatedParamsType {
  page: number;
  per_page?: number;
}

export interface PaginatedType<T> extends PaginatedParamsType {
  total: number;
  data: T;
}
