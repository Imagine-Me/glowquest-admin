import { IForm } from "@/interfaces/form.interface";

export const brandForm = <T>(row?: T): IForm[] => {
  return [
    {
      name: "brand",
      placeholder: "Enter Brand",
      type: "text",
      required: true,
      value: row?.["brand" as keyof T] ?? "",
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
