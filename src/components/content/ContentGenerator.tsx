"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ContentItem } from "@/interfaces/content.interface";

interface ContentGeneratorProps {
  content: ContentItem;
}

export function ContentGenerator({ content }: ContentGeneratorProps) {
  switch (content.type) {
    case 'h1':
      return <Typography variant="h1">{content.value}</Typography>;
    case 'h2':
      return <Typography variant="h2">{content.value}</Typography>;
    case 'h3':
      return <Typography variant="h3">{content.value}</Typography>;
    case 'h4':
      return <Typography variant="h4">{content.value}</Typography>;
    case 'h5':
      return <Typography variant="h5">{content.value}</Typography>;
    case 'h6':
      return <Typography variant="h6">{content.value}</Typography>;
    case 'p':
      return <Typography variant="body1">{content.value}</Typography>;
    case 'image':
      return (
        <Box sx={{ display: "flex", justifyContent: content.image?.position }}>
          <Image
            src={content.value}
            alt={content.image?.alt || ''}
            width={400}
            height={400}
            style={{
              width: content.image?.width,
              height: content.image?.height
            }}
          />
        </Box>
      );
    default:
      return <Typography>{content.value}</Typography>;
  }
}
