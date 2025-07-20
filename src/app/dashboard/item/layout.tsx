"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function ItemLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ p: 3 }}>
      {children}
    </Box>
  );
}
