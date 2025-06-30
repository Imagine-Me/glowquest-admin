export type ContentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'image' | 'list';

export interface ContentItem {
  type: ContentType;
  value: string;
  // Image specific properties
  image?: {
    alt: string;
    width: number | string;
    height: number | string;
    position: 'center' | 'left' | 'right';
  }
  // Future extensibility
}
