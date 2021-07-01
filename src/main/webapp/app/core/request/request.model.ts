export interface Pagination {
  page: number;
  size: number;
  sort: string[];
  isOnBoarding: boolean
}

export interface Search {
  query: string;
}

export interface SearchWithPagination extends Search, Pagination {}
