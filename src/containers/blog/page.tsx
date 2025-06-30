"use client";

import { ContentLayout } from "@/components/content/ContentLayout";
import { ContentItem } from "@/interfaces/content.interface";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ContentSelectorDialog } from "../content/ContentSelectorDialog";
import { CONTENT_SAMPLES } from "@/constants/contentTypes";
import { getBlog, updateBlogContent } from "@/api/blog";
import { IBlog } from "@/interfaces/blog.interface";

export default function BlogEditPage({ id }: { id: number }) {
  const [showModal, setShowModal] = useState(false);
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [data, setData] = useState<IBlog | null>(null);

  useEffect(() => {
    if (data?.content) {
      setContentItems(data.content);
    }
  }, [data]);

  useEffect(() => {
    getBlog(id).then((res) => {
      setData(res.data as IBlog);
    });
  }, [id]);

  const onSave = async () => {
    if (data) {
      console.log(data);
      const body = {
        content: contentItems,
        id: data.id,
      };
      const res = await updateBlogContent(JSON.stringify(body));
      setData(res.data as IBlog);
    }
  };

  return (
    <>
      <Box sx={{ maxHeight: "100vh", overflowY: "auto", position: "relative" }}>
        <Box
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            display: "flex",
            gap: 2,
            backgroundColor: 'white'
            ,zIndex: 1000,
          }}
        >
          <Button
            variant="contained"
            onClick={() => setShowModal(true)}
            color="primary"
          >
            Add Content
          </Button>
          <Button color="info" variant="contained" onClick={onSave}>
            Save
          </Button>
          <Button
            color="success"
            variant="contained"
            onClick={() => setShowModal(true)}
          >
            Publish
          </Button>
        </Box>
        <Box sx={{ mt: 6, p: 3 }}>
          <ContentLayout
            setContentItems={setContentItems}
            contentItems={contentItems}
          />
        </Box>
      </Box>

      <ContentSelectorDialog
        open={showModal}
        onClose={() => setShowModal(false)}
        onSelect={(type: string) => {
          const sample = CONTENT_SAMPLES.find((item) => item.type === type);
          if (!sample) return;

          const newItem: ContentItem = {
            ...sample,
            type: type as ContentItem["type"],
          };
          setContentItems([...contentItems, newItem]);
        }}
      />
    </>
  );
}
