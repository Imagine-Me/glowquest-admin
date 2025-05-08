import { deleteBrand, getBrands, saveBrand, updateBrand } from "@/api/brand";
import {
  brandColDefs,
  categoryColDefs,
  itemColDefs,
  itemDetailsColDefs,
  productColDefs,
  siteColDefs,
  variantColDefs,
} from "./columnDefs";
import {
  brandForm,
  categoryForm,
  itemDetailsForm,
  itemForm,
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
import { deleteItem, getItems, saveItem, updateItem } from "@/api/item";
import {
  deleteItemDetails,
  getItemDetails,
  saveItemDetails,
  updateItemDetails,
} from "@/api/itemDetails";

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

const itemPage: IPageProps = {
  title: "Item",
  colDefs: itemColDefs,
  getData: getItems,
  form: itemForm,
  save: saveItem,
  update: updateItem,
  delete: deleteItem,
};

const itemDetailsPage: IPageProps = {
  title: "Item-Details",
  colDefs: itemDetailsColDefs,
  getData: getItemDetails,
  form: itemDetailsForm,
  save: saveItemDetails,
  update: updateItemDetails,
  delete: deleteItemDetails,
};

export const pageProps = [
  brandPage,
  categoryPage,
  variantPage,
  productPage,
  sitePage,
  itemPage,
  itemDetailsPage,
];
