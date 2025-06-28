"use client";

import { BLOG_URL } from "@/constants/api";
import { fetchAPI } from "./api";
import { apiHeader } from "@/utils/common";


export const getBlogs = async (pagination: { page: number; pageSize: number }) => {
  return await fetchAPI(
    `${BLOG_URL.GET}?skip=${pagination.page}&limit=${pagination.pageSize}`
  );
};

export const getBlog = async (id: number) => {
  return await fetchAPI(`${BLOG_URL.GET}/${id}`);
};

export const updateBlogContent = async (body:string) => {
  return await fetchAPI(BLOG_URL.UPDATE_CONTENT, {
    method: "PUT",
    body,
    headers: apiHeader
  });
};


export const saveBlog = async (body: string) => {
  return await fetchAPI(BLOG_URL.GET, {
    method: "POST",
    body,
    headers: apiHeader
  });
};

export const updateBlog = async (body: string) => {
  return await fetchAPI(BLOG_URL.GET, {
    method: "PUT",
    body,
    headers: apiHeader
  });
};

export const deleteBlog = async (id: number) => {
  return await fetchAPI(`${BLOG_URL.GET}/${id}`, {
    method: "DELETE",
    headers: apiHeader
  });
};
