export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraph?: {
    title: string;
    description: string;
    image: string;
    url?: string;
  };
}

export interface SiteConfig {
  name: string;
  locale: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
  defaultSEO: SEOData;
}

export interface PageData {
  seo: SEOData;
  content?: Record<string, unknown>;
}
