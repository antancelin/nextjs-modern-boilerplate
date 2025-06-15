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
  domain: string;
  locale: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
  defaultSEO: SEOData;
}
