import { IForm } from "@/interfaces/form.interface";
import { getVariantTypeOptions } from "./data";
import { getCategoryOptions } from "@/api/category";
import { getBrandOptions } from "@/api/brand";
import { getProductOptions } from "@/api/product";
import { getVariantOptions } from "@/api/variant";
import { getSiteOptions } from "@/api/site";
import { getItemOptions } from "@/api/item";

export const brandForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Brand",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "description",
      placeholder: "Enter Description",
      type: "textarea",
      required: true,
      value: row?.["description" as keyof T] ?? "",
    },
    {
      name: "slug",
      placeholder: "Enter Slug",
      type: "text",
      required: true,
      value: row?.["slug" as keyof T] ?? "",
    },
    {
      name: "img_url",
      placeholder: "Enter Image URL",
      type: "text",
      required: true,
      value: row?.["img_url" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};

export const categoryForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Category",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "description",
      placeholder: "Enter Description",
      type: "textarea",
      required: true,
      value: row?.["description" as keyof T] ?? "",
    },
    {
      name: "slug",
      placeholder: "Enter Slug",
      type: "text",
      required: true,
      value: row?.["slug" as keyof T] ?? "",
    },
    {
      name: "image_url",
      placeholder: "Enter Image URL",
      type: "text",
      required: true,
      value: row?.["image_url" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
    {
      name: "keywords",
      type: "multiple",
      placeholder: "Keywords",
      required: false,
      value: row?.["keywords" as keyof T] ?? "",
    },
  ];
};

export const variantForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Name",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "type",
      placeholder: "Enter Type",
      type: "select",
      required: true,
      value: row?.["type" as keyof T] ?? "",
      getOptions: getVariantTypeOptions,
    },
    {
      name: "value",
      placeholder: "Enter Value",
      type: "text",
      required: true,
      value: row?.["value" as keyof T] ?? "",
    },
    {
      name: "label",
      placeholder: "Enter Label",
      type: "text",
      required: true,
      value: row?.["label" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};

export const productForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Name",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "slug",
      placeholder: "Enter Slug",
      type: "text",
      required: true,
      value: row?.["slug" as keyof T] ?? "",
    },
    {
      name: "description",
      placeholder: "Enter Description",
      type: "textarea",
      required: true,
      value: row?.["description" as keyof T] ?? "",
    },
    {
      name: "image",
      placeholder: "Enter Image",
      type: "text",
      required: true,
      value: row?.["image" as keyof T] ?? "",
    },
    {
      name: "category_id",
      placeholder: "Enter Category",
      type: "autocomplete",
      required: true,
      value: row?.["category_id" as keyof T] ?? "",
      getOptions: getCategoryOptions,
    },
    {
      name: "brand_ids",
      placeholder: "Enter Brands",
      type: "autocomplete",
      required: true,
      value: row?.["brand_ids" as keyof T] ?? "",
      getOptions: getBrandOptions,
      multiple: true,
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};

export const siteForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Name",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};

export const itemForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Name",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "slug",
      placeholder: "Enter Slug",
      type: "text",
      required: true,
      value: row?.["slug" as keyof T] ?? "",
    },
    {
      name: "description",
      placeholder: "Enter Description",
      type: "json",
      required: true,
      value: row?.["description" as keyof T] ?? "",
    },
    {
      name: "variants",
      placeholder: "Enter Variants",
      type: "autocomplete",
      required: true,
      value: row?.["variant" as keyof T] ?? "",
      getOptions: getVariantOptions,
      multiple: true,
      hideOnUpdate: true,
    },
    {
      name: "product_id",
      placeholder: "Enter Product",
      type: "autocomplete",
      required: true,
      value: row?.["product_id" as keyof T] ?? "",
      getOptions: getProductOptions,
    },
    {
      name: "brand_id",
      placeholder: "Enter Brands",
      type: "autocomplete",
      required: true,
      value: row?.["brand_id" as keyof T] ?? "",
      getOptions: getBrandOptions,
    },
    {
      name: "img_urls",
      type: "multiple",
      placeholder: "Image URLS",
      required: false,
      value: row?.["img_urls" as keyof T] ?? "",
      isOutputArray: true,
    },
    {
      name: "features",
      type: "json",
      placeholder: "Features",
      required: false,
      value: row?.["features" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};

export const itemDetailsForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "site",
      placeholder: "Select site",
      type: "autocomplete",
      required: true,
      value: row?.["site" as keyof T] ?? "",
      getOptions: getSiteOptions,
    },
    {
      name: "site_link",
      placeholder: "Enter link",
      type: "text",
      required: true,
      value: row?.["site_link" as keyof T] ?? "",
    },
    {
      name: "item",
      placeholder: "Select item",
      type: "autocomplete",
      required: true,
      value: row?.["item" as keyof T] ?? "",
      getOptions: getItemOptions,
    },
    {
      name: "shouldUpdate",
      placeholder: "Update details",
      type: "checkbox",
      required: true,
      value: row?.["shouldUpdate" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};
