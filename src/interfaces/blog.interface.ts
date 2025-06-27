import { ContentItem } from "./content.interface";

export interface IBlog {
  id?: number;
  title: string;
  slug: string;
  content: ContentItem[];
  image_url?: string;
  is_published: boolean;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
}

export interface IBlogResponse {
  ok: boolean;
  status: number;
  message?: string;
  data?: IBlog | IBlog[];
}
