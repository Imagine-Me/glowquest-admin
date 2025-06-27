export type ContentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'image';

export interface ContentItem {
  type: ContentType;
  value: string;
  className?: string;
  // Image specific properties
  alt?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  // Future extensibility
  [key: string]: string | number | React.CSSProperties | undefined;
}
