"use client";

import { ITEM_DETAILS_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";

export async function getItemDetails<T>(params: {
  page: number;
  pageSize: number;
  filters?: {
    itemName?: string;
    siteId?: number;
    priceNull?: boolean;
  };
}) {
  let url = `${ITEM_DETAILS_URLS.GET}?skip=${params.page}&limit=${params.pageSize}`;
  
  if (params.filters) {
    if (params.filters.itemName) {
      url += `&itemName=${encodeURIComponent(params.filters.itemName)}`;
    }
    if (params.filters.siteId) {
      url += `&siteId=${params.filters.siteId}`;
    }
    if (params.filters.priceNull !== undefined) {
      url += `&priceNull=${params.filters.priceNull}`;
    }
  }

  return await fetchAPI<T>(url);
}

export const saveItemDetails = async (body: string) => {
  return await fetchAPI(ITEM_DETAILS_URLS.GET, {
    body,
    method: "POST",
    headers: apiHeader,
  });
};

export const updateItemDetails = async (body: string) => {
  return await fetchAPI(ITEM_DETAILS_URLS.GET, {
    body,
    method: "PUT",
    headers: apiHeader,
  });
};

export const deleteItemDetails = async (id: number) => {
  return await fetchAPI(`${ITEM_DETAILS_URLS.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader,
  });
};
