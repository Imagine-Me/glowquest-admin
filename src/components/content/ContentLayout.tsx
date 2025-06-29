"use client";

import { ContentGenerator } from "./ContentGenerator";
import { ContentItem } from "@/interfaces/content.interface";
import classes from "./content.module.scss";
import { Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { ContentForm1 } from "@/containers/content/ContentForm";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ContentLayoutProps {
  contentItems: ContentItem[];
  setContentItems: Dispatch<SetStateAction<ContentItem[]>>;
}

export function ContentLayout({
  contentItems,
  setContentItems,
}: ContentLayoutProps) {
  const [editedItem, setEditedItem] = useState<null | number>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setEditedItem(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const updateForm = (index: number) => (item: ContentItem) => {
    const updatedContentItems = structuredClone(contentItems);
    updatedContentItems[index] = item;
    setContentItems(updatedContentItems);
  };

  return (
    <>
      {contentItems.map((item, index) => (
        <div key={index} className={classes.layoutContainer}>
          {index === editedItem ? (
            <ContentForm1 item={item} onUpdate={updateForm(index)} />
          ) : (
            <>
              <div className={classes.editButtons}>
                <div>
                  <Button
                    variant="contained"
                    sx={{ mr: 2 }}
                    color="info"
                    onClick={() => setEditedItem(index)}
                  >
                    <Edit />
                  </Button>
                  <Button variant="contained" color="error">
                    <Delete />
                  </Button>
                </div>
              </div>
              <ContentGenerator content={item} />
            </>
          )}
        </div>
      ))}
    </>
  );
}
