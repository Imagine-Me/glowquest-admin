"use server";

import { USER_URLS } from "@/constants/api";
import { fetchAPI } from "./api";

export async function login(body: string) {
  const response = await fetchAPI(USER_URLS.LOGIN, {
    method: "POST",
    body,
  });
  return response
}
