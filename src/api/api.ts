"use server";

import { redirect } from "next/navigation";

export const fetchAPI = async <T>(url: string, settings?: RequestInit) => {
  console.log(settings)
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...(settings ?? {}),
  });
  if (response.status === 403 || response.status === 401) {
    redirect(`/`);
  }
  return {
    data: await response.json() as T,
    status: response.status,
    ok: response.ok,
  };
};
