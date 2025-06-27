import { GridColDef } from "@mui/x-data-grid";
import { IForm } from "./form.interface";

export interface SelectOption {
  label: string;
  value: string;
}

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

export interface IPageProps {
  title: string;
  colDefs: (
    onEdit: (id: number) => void,
    onDelete: (id: number) => void
  ) => GridColDef[];
  getData: <T>(params: { 
    page: number; 
    pageSize: number;
    filters?: {
      itemName?: string;
      siteId?: number;
      priceNull?: boolean;
    }
  }) => Promise<IResponseModel<IPaginatedGenericModel<T>>>;
  form: <T>(row?: T) => IForm[];
  update: <T>(body: string) => Promise<IResponseModel<T>>;
  save: <T>(body: string) => Promise<IResponseModel<T>>;
  delete: <T>(id: number) => Promise<IResponseModel<T>>;
}

export type IPaginatedGenericModel<T> = IPagination<T>;
