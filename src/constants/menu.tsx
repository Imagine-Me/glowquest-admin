import DashboardIcon from "@mui/icons-material/Dashboard";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CategoryIcon from "@mui/icons-material/Category";
import ReorderIcon from "@mui/icons-material/Reorder";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LanguageIcon from '@mui/icons-material/Language';

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
  {
    label: "Variant",
    url: "/dashboard/variant",
    icon: <ReorderIcon />,
  },
  {
    label: "Product",
    url: "/dashboard/product",
    icon: <Inventory2Icon />,
  },
  {
    label: "Sites",
    url: "/dashboard/site",
    icon: <LanguageIcon />,
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
