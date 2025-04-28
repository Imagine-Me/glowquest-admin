"use client";

import { CATEGORY_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";

export async function getCategories(pagination: {
  page: number;
  pageSize: number;
}) {
  return await fetchAPI(
    `${CATEGORY_URLS.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
}

export const saveCategory = async (body: string) => {
  return await fetchAPI(CATEGORY_URLS.GET, {
    body,
    method: "POST",
    headers: apiHeader,
  });
};

export const updateCategory = async (body: string) => {
  return await fetchAPI(CATEGORY_URLS.GET, {
    body,
    method: "PUT",
    headers: apiHeader,
  });
};

export const deleteCategory = async (id: number) => {
  return await fetchAPI(`${CATEGORY_URLS.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader,
  });
};
