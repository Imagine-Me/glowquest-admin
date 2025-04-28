import { deleteBrand, getBrands, saveBrand, updateBrand } from "@/api/brand";
import { brandColDefs, categoryColDefs } from "./columnDefs";
import { brandForm, categoryForm } from "./forms";
import { IPageProps } from "@/interfaces/common.interface";
import {
  deleteCategory,
  getCategories,
  saveCategory,
  updateCategory,
} from "@/api/category";

const brandPage: IPageProps = {
  title: "Brand",
  colDefs: brandColDefs,
  getData: getBrands,
  form: brandForm,
  save: saveBrand,
  update: updateBrand,
  delete: deleteBrand,
};

const categoryPage: IPageProps = {
  title: "Category",
  colDefs: categoryColDefs,
  getData: getCategories,
  form: categoryForm,
  save: saveCategory,
  update: updateCategory,
  delete: deleteCategory,
};

export const pageProps = [brandPage, categoryPage];
