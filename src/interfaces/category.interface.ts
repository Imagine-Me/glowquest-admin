import { IPagination } from "./common.interface";

export interface ICategoryModel {
  name: string;
  id: number;
  description: string;
  slug: string;
  image_url: string;
  keywords: string;
}

export type IPaginatedBrandModel = IPagination<ICategoryModel>;
