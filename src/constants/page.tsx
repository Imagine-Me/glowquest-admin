import { deleteBrand, getBrands, saveBrand, updateBrand } from "@/api/brand";
import { brandColDefs, categoryColDefs, variantColDefs } from "./columnDefs";
import { brandForm, categoryForm, variantForm } from "./forms";
import { IPageProps } from "@/interfaces/common.interface";
import {
  deleteCategory,
  getCategories,
  saveCategory,
  updateCategory,
} from "@/api/category";
import {
  deleteVariant,
  getVariants,
  saveVariant,
  updateVariant,
} from "@/api/variant";

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

const variantPage: IPageProps = {
  title: "Variant",
  colDefs: variantColDefs,
  getData: getVariants,
  form: variantForm,
  save: saveVariant,
  update: updateVariant,
  delete: deleteVariant,
};

export const pageProps = [brandPage, categoryPage, variantPage];
