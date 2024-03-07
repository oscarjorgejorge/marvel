export interface IMarvelResponse<T> {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: T[];
    total: number;
  };
}
