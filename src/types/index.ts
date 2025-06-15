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

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle?: string;
  description: string;
  ctaButton?: {
    text: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  backgroundImage?: string;
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

export interface PageData {
  seo: SEOData;
  hero?: HeroSection;
  content?: Record<string, unknown>;
}
