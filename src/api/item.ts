"use client";

import { ITEM_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";
import { SelectOption } from "@/interfaces/common.interface";

export async function getItems(pagination: { page: number; pageSize: number }) {
  return await fetchAPI(
    `${ITEM_URLS.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
}

export async function getItemOptions(name?: string) {
  return (await fetchAPI(`${ITEM_URLS.OPTIONS}/?name=${name ?? ""}`))
    .data as SelectOption[];
}


export async function getUniqueItemOptions(name?: string) {
  return (await fetchAPI(`${ITEM_URLS.UNIQUE_OPTIONS}/?name=${name ?? ""}`))
    .data as SelectOption[];
}

export const saveItem = async (body: string) => {
  return await fetchAPI(ITEM_URLS.GET, {
    body,
    method: "POST",
    headers: apiHeader,
  });
};

export const updateItem = async (body: string) => {
  return await fetchAPI(ITEM_URLS.GET, {
    body,
    method: "PUT",
    headers: apiHeader,
  });
};

export const deleteItem = async (id: number) => {
  return await fetchAPI(`${ITEM_URLS.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader,
  });
};
