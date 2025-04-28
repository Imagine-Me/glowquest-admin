import { SelectOption } from "@/interfaces/common.interface";

export const getVariantTypeOptions = async (): Promise<SelectOption[]> => {
  return [
    {
      label: "Color",
      value: "color",
    },
  ];
};
