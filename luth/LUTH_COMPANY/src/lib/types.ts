export type PostCategory = "portfolio" | "knowledge" | "inquiry";

export type PortfolioSubcategory =
  | "villa-officetel"
  | "commercial-building"
  | "paid-unmanned";

export type KnowledgeSubcategory = "maintenance-tips" | "regulations";

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  subcategory?: PortfolioSubcategory | KnowledgeSubcategory;
  categoryLabel: string;
  publishedAt: string;
  thumbnailUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
}
