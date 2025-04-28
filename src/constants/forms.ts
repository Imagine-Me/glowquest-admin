import { IForm } from "@/interfaces/form.interface";

export const brandForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Brand",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "description",
      placeholder: "Enter Description",
      type: "textarea",
      required: true,
      value: row?.["description" as keyof T] ?? "",
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
      required: true,
      value: row?.["img_url" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
  ];
};

export const categoryForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "name",
      placeholder: "Enter Category",
      type: "text",
      required: true,
      value: row?.["name" as keyof T] ?? "",
    },
    {
      name: "description",
      placeholder: "Enter Description",
      type: "textarea",
      required: true,
      value: row?.["description" as keyof T] ?? "",
    },
    {
      name: "slug",
      placeholder: "Enter Slug",
      type: "text",
      required: true,
      value: row?.["slug" as keyof T] ?? "",
    },
    {
      name: "image_url",
      placeholder: "Enter Image URL",
      type: "text",
      required: true,
      value: row?.["image_url" as keyof T] ?? "",
    },
    {
      name: "id",
      type: "hidden",
      required: false,
      value: row?.["id" as keyof T] ?? "",
    },
    {
      name: "keywords",
      type: "multiple",
      required: false,
      value: row?.["keywords" as keyof T] ?? "",
    },
  ];
};
