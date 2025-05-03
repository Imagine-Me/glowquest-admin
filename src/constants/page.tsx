import { deleteBrand, getBrands, saveBrand, updateBrand } from "@/api/brand";
import {
  brandColDefs,
  categoryColDefs,
  productColDefs,
  siteColDefs,
  variantColDefs,
} from "./columnDefs";
import {
  brandForm,
  categoryForm,
  productForm,
  siteForm,
  variantForm,
} from "./forms";
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
import { deleteSite, getSites, saveSite, updateSite } from "@/api/site";

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

const productPage: IPageProps = {
  title: "Product",
  colDefs: productColDefs,
  getData: getProducts,
  form: productForm,
  save: saveProduct,
  update: updateProduct,
  delete: deleteProduct,
};

const sitePage: IPageProps = {
  title: "Site",
  colDefs: siteColDefs,
  getData: getSites,
  form: siteForm,
  save: saveSite,
  update: updateSite,
  delete: deleteSite,
};

export const pageProps = [
  brandPage,
  categoryPage,
  variantPage,
  productPage,
  sitePage,
];
