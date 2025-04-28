"use client";

const getToken = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("token");
  }
  return null;
};

export const apiHeader: RequestInit["headers"] = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
};
