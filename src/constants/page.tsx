import { deleteBrand, getBrands, saveBrand, updateBrand } from "@/api/brand";
import {
  brandColDefs,
  categoryColDefs,
  productColDefs,
  variantColDefs,
} from "./columnDefs";
import { brandForm, categoryForm, productForm, variantForm } from "./forms";
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
import {
  deleteProduct,
  getProducts,
  saveProduct,
  updateProduct,
} from "@/api/product";

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
  form: productForm,
  save: saveVariant,
  update: updateVariant,
  delete: deleteVariant,
};

const productPage: IPageProps = {
  title: "Product",
  colDefs: productColDefs,
  getData: getProducts,
  form: productForm,
  save: saveProduct,
  update: updateProduct,
  delete: deleteProduct,
};

export const pageProps = [brandPage, categoryPage, variantPage, productPage];
