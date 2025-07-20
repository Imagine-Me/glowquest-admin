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
  getData: (pagination: { page: number; pageSize: number, filters?: { itemName?: string | undefined; siteId?: number | undefined; priceNull?: boolean | undefined; product?: string; name?: string } }) => Promise<{
    data: unknown;
    status: number;
    ok: boolean;
  }>;
  form: <T>(row?: T) => IForm[];
  update: (body: string) => Promise<{
    data: unknown;
    status: number;
    ok: boolean;
  }>;
  save: (body: string) => Promise<{
    data: unknown;
    status: number;
    ok: boolean;
  }>;
  delete: (id: number) => Promise<{
    data: unknown;
    status: number;
    ok: boolean;
  }>;
}

export type IPaginatedGenericModel<T> = IPagination<T>;
