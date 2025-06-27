import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ItemDetailsLayoutProps {
    children: ReactNode;
}

export default function ItemDetailsLayout({ children }: ItemDetailsLayoutProps) {
    return (
        <Box sx={{ p: 3 }}>
            {children}
        </Box>
    );
}