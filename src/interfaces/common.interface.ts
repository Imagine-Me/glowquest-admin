export interface IPagination<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface IResponseModel<T> {
  data: T;
  status: number;
  ok: boolean;
}
