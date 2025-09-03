import { Metadata } from "next";
import { SEOData } from "@/types";
import { siteConfig } from "@/data/config";

export function generateMetadata(
  seoData: SEOData,
  path: string = "/"
): Metadata {
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: seoData.openGraph?.title || seoData.title,
      description: seoData.openGraph?.description || seoData.description,
      images: seoData.openGraph?.image
        ? [
            {
              url: seoData.openGraph.image,
              width: 1200,
              height: 630,
              alt: seoData.openGraph.title || seoData.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      creator: siteConfig.social.twitter,
      images: seoData.openGraph?.image ? [seoData.openGraph.image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: path,
    },
  };
}
