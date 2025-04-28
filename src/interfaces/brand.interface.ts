import { IPagination } from "./common.interface";

export interface IBrandModel {
    brand:string;
    id: number;
    description:string;
    slug:string;
    img_url:string
}

export type IPaginatedBrandModel = IPagination<IBrandModel>