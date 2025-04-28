import DashboardIcon from "@mui/icons-material/Dashboard";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CategoryIcon from '@mui/icons-material/Category';

const commonPages = [
  {
    label: "Brand",
    url: "/dashboard/brand",
    icon: <BrandingWatermarkIcon />,
  },
  {
    label: "Category",
    url: "/dashboard/category",
    icon: <CategoryIcon />,
  },
];

export const menu = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: <DashboardIcon />,
  },
  ...commonPages,
];

export const commonPageNames = commonPages.map((val) =>
  val.label.toLowerCase()
);
