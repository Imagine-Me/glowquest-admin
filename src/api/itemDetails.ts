"use client";

import { ITEM_DETAILS_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";

export async function getItemDetails(pagination: {
  page: number;
  pageSize: number;
}) {
  return await fetchAPI(
    `${ITEM_DETAILS_URLS.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
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
