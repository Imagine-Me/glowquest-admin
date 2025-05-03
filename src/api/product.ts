"use client";

import { PRODUCT_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";
import { SelectOption } from "@/interfaces/common.interface";

export async function getProducts(pagination: {
  page: number;
  pageSize: number;
}) {
  return await fetchAPI(
    `${PRODUCT_URLS.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
}

export async function getProductOptions(name?: string) {
  return (await fetchAPI(`${PRODUCT_URLS.OPTIONS}/?name=${name ?? ""}`))
    .data as SelectOption[];
}

export const saveProduct = async (body: string) => {
  return await fetchAPI(PRODUCT_URLS.GET, {
    body,
    method: "POST",
    headers: apiHeader,
  });
};

export const updateProduct = async (body: string) => {
  return await fetchAPI(PRODUCT_URLS.GET, {
    body,
    method: "PUT",
    headers: apiHeader,
  });
};

export const deleteProduct = async (id: number) => {
  return await fetchAPI(`${PRODUCT_URLS.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader,
  });
};
