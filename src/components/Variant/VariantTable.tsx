import { IVariantModel } from "@/interfaces/variant.interface";
import React, { useMemo } from "react";
import { ColorVariant } from "./Color";
import { Box } from "@mui/material";

interface IVariantTableProps {
  variants: IVariantModel[];
}
export const VariantTable: React.FC<IVariantTableProps> = ({ variants }) => {
  const elements = useMemo(() => {
    return variants.map((element) => {
      switch (element.type) {
        case "color":
          return (
            <ColorVariant key={element.name} variant={element} size="sm" />
          );
      }
    });
  }, [variants]);
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center",height: '100%' }}>{elements}</Box>
  );
};
