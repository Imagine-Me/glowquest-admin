"use client";

import { VARIANT_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";
import { SelectOption } from "@/interfaces/common.interface";

export async function getVariants(pagination: {
  page: number;
  pageSize: number;
}) {
  return await fetchAPI(
    `${VARIANT_URLS.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
}


export async function getVariantOptions(name?: string) {
  return (await fetchAPI(`${VARIANT_URLS.OPTIONS}/?name=${name ?? ""}`))
    .data as SelectOption[];
}

export const saveVariant = async (body: string) => {
  return await fetchAPI(VARIANT_URLS.GET, {
    body,
    method: "POST",
    headers: apiHeader,
  });
};

export const updateVariant = async (body: string) => {
  return await fetchAPI(VARIANT_URLS.GET, {
    body,
    method: "PUT",
    headers: apiHeader,
  });
};

export const deleteVariant = async (id: number) => {
  return await fetchAPI(`${VARIANT_URLS.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader,
  });
};
