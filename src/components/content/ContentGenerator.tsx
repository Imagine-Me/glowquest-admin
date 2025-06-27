"use client";

import { Typography } from "@mui/material";
import Image from "next/image";
import { ContentItem } from "@/interfaces/content.interface";

interface ContentGeneratorProps {
  content: ContentItem;
}

export function ContentGenerator({ content }: ContentGeneratorProps) {
  switch(content.type) {
    case 'h1':
      return <Typography variant="h1" className={content.className}>{content.value}</Typography>;
    case 'h2':
      return <Typography variant="h2" className={content.className}>{content.value}</Typography>;
    case 'h3':
      return <Typography variant="h3" className={content.className}>{content.value}</Typography>;
    case 'h4':
      return <Typography variant="h4" className={content.className}>{content.value}</Typography>;
    case 'h5':
      return <Typography variant="h5" className={content.className}>{content.value}</Typography>;
    case 'h6':
      return <Typography variant="h6" className={content.className}>{content.value}</Typography>;
    case 'p':
      return <Typography variant="body1" className={content.className}>{content.value}</Typography>;
    case 'image':
      return (
        <div className={content.className}>
          <Image
            src={content.value}
            alt={content.alt || ''}
            width={content.width as number || 500}
            height={content.height as number || 300}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      );
    default:
      return <Typography>{content.value}</Typography>;
  }
}
