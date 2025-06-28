import { IForm } from "@/interfaces/form.interface";

export const blogForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Blog Title",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "slug",
      placeholder: "Enter Slug",
      type: "text",
      required: true,
      value: row?.["slug" as keyof T] ?? "",
    },
    {
      name: "img_url",
      placeholder: "Enter Image URL",
      type: "text",
      required: false,
      value: row?.["img_url" as keyof T] ?? "",
    },
    {
      name: "is_published",
      placeholder: "Publish Blog",
      type: "checkbox",
      required: false,
      value: row?.["is_published" as keyof T] ?? false,
    },
    {
      name: "meta_title",
      placeholder: "Enter Meta Title",
      type: "text",
      required: false,
      value: row?.["meta_title" as keyof T] ?? "",
    },
    {
      name: "meta_description",
      placeholder: "Enter Meta Description",
      type: "textarea",
      required: false,
      value: row?.["meta_description" as keyof T] ?? "",
    },
    {
      name: "meta_keywords",
      placeholder: "Enter Meta Keywords",
      type: "multiple",
      required: false,
      value: row?.["meta_keywords" as keyof T] ?? [],
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};
