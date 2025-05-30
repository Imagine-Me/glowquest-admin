import { IVariantModel } from "@/interfaces/variant.interface";
import { Box, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";

interface IColorVariant {
  variant: IVariantModel;
  link?: string;
  size?: "sm" | "lg";
}
export const ColorVariant: React.FC<IColorVariant> = ({
  variant,
  link,
  size = "lg",
}) => {
  const boxSize = size === "sm" ? 20 : 35;
  return (<Tooltip title={`${variant.label} - ${variant.name}`}>
    <Link href={link ?? "#"}>
      <Box
        sx={{
          width: boxSize,
          height: boxSize,
          backgroundColor: variant.value,
          borderRadius: 1,
        }}
      ></Box>
    </Link>
  </Tooltip>
  );
};
