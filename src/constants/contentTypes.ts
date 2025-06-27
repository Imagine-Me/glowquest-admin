import { ContentItem } from "@/interfaces/content.interface";

export const CONTENT_TYPES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'image'] as const;

export const CONTENT_SAMPLES: ContentItem[] = [
    { type: 'h1', value: 'Header 1' },
    { type: 'h2', value: 'Header 2' },
    { type: 'h3', value: 'Header 3' },
    { type: 'h4', value: 'Header 4' },
    { type: 'h5', value: 'Header 5' },
    { type: 'h6', value: 'Header 6' },
    { type: 'p', value: 'Sample paragraph text' },
    { 
        type: 'image',
        value: '/sample-image.jpeg',
        alt: 'Sample image',
        width: 200,
        height: 200
    }
];
