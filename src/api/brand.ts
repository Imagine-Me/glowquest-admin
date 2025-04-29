"use client";

import { BRAND_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";
import { SelectOption } from "@/interfaces/common.interface";

export async function getBrands(pagination: {
  page: number;
  pageSize: number;
}) {
  return await fetchAPI(
    `${BRAND_URLS.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
}


export async function getBrandOptions(name?: string) {
  return (await fetchAPI(`${BRAND_URLS.OPTIONS}/?name=${name ?? ""}`))
    .data as SelectOption[];
}


export const saveBrand = async (body: string) => {
  return await fetchAPI(BRAND_URLS.GET, {
    body,
    method: "POST",
    headers: apiHeader,
  });
};

export const updateBrand = async (body: string) => {
  return await fetchAPI(BRAND_URLS.GET, {
    body,
    method: "PUT",
    headers: apiHeader,
  });
};

export const deleteBrand = async (id: number) => {
  return await fetchAPI(`${BRAND_URLS.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader,
  });
};
