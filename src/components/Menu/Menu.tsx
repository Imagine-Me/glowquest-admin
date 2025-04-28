"use client";
import { menu } from "@/constants/menu";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LeftMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <List>
        {menu.map(({ label, url, icon }) => (
          <ListItem key={label} disablePadding>
            <Link href={url} style={{ width: "100%" }}>
              <ListItemButton selected={pathname === url}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
