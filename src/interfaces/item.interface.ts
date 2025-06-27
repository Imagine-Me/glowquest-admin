export interface IItemDetailsRow {
  id: number;
  name: string;
  siteId?: number;
  price?: number | null;
}

export interface IItemModel {
  name: string;
  slug: string;
  description: Array<string>;
  brand_id: number;
  product_id: string;
  features: Record<string, string>;
  id: string;
  product_unique_id: string;
  img_urls: string[];
}
