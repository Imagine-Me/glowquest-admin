import { IBrandModel } from "./brand.interface";
import { ICategoryModel } from "./category.interface";
import { IPagination } from "./common.interface";

export interface IProductModel {
  id: string;
  image: string;
  category_id: number;
  name: string;
  slug: string;
  description: string;
  category: ICategoryModel;
  brands: IBrandModel[];
  brand_ids: number[];
}

export type IPaginatedProductModel = IPagination<IProductModel>;
