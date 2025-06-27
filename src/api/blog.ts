"use client";

import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";

const BLOG_URL = "/api/blogs";

export const getBlogs = async (pagination: { page: number; pageSize: number }) => {
  return await fetchAPI(
    `${BLOG_URL}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
};

export const getBlog = async (id: number) => {
  return await fetchAPI(`${BLOG_URL}/${id}`);
};

export const saveBlog = async (body: string) => {
  return await fetchAPI(BLOG_URL, {
    method: "POST",
    body,
    headers: apiHeader
  });
};

export const updateBlog = async (body: string) => {
  return await fetchAPI(BLOG_URL, {
    method: "PUT",
    body,
    headers: apiHeader
  });
};

export const deleteBlog = async (id: number) => {
  return await fetchAPI(`${BLOG_URL}/${id}`, {
    method: "DELETE",
    headers: apiHeader
  });
};
