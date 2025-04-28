import { deleteBrand, getBrands, saveBrand, updateBrand } from "@/api/brand";
import { brandColDefs } from "./columnDefs";
import { brandForm } from "./forms";
import { IPageProps } from "@/interfaces/common.interface";

const brandPage: IPageProps = {
  title: "Brand",
  colDefs: brandColDefs,
  getData: getBrands,
  form: brandForm,
  save: saveBrand,
  update: updateBrand,
  delete: deleteBrand,
};

export const pageProps = [brandPage];
