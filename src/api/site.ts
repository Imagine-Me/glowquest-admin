"use client";

import { SITE_URLS } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";
import { SelectOption } from "@/interfaces/common.interface";

export async function getSites(pagination: { page: number; pageSize: number }) {
  return await fetchAPI(
    `${SITE_URLS.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
}

export async function getSiteOptions(name?: string) {
  return (await fetchAPI(`${SITE_URLS.OPTIONS}/?name=${name ?? ""}`))
    .data as SelectOption[];
}

export const saveSite = async (body: string) => {
  return await fetchAPI(SITE_URLS.GET, {
    body,
    method: "POST",
    headers: apiHeader,
  });
};

export const updateSite = async (body: string) => {
  return await fetchAPI(SITE_URLS.GET, {
    body,
    method: "PUT",
    headers: apiHeader,
  });
};

export const deleteSite = async (id: number) => {
  return await fetchAPI(`${SITE_URLS.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader,
  });
};
