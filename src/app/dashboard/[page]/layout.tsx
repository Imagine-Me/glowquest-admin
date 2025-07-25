import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <Box sx={{ p: 3 }}>
            {children}
        </Box>
    );
};

export default DashboardLayout;