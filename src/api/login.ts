"use server";

import { USER_URLS } from "@/constants/api";

export async function login(body: string) {
  const response = await fetch(USER_URLS.LOGIN, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
