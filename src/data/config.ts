import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Modern Web Boilerplate",
  domain: "localhost:3000",
  locale: "en-US",
  social: {
    instagram: "@your-handle",
    linkedin: "company/your-company",
    twitter: "@your-handle",
  },
  defaultSEO: {
    title: "Modern Web Boilerplate - Next.js, TypeScript, Tailwind",
    description:
      "A modern boilerplate to quickly start your web projects with Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
    keywords: [
      "boilerplate",
      "nextjs",
      "typescript",
      "tailwind",
      "shadcn",
      "web development",
    ],
    openGraph: {
      title: "Modern Web Boilerplate",
      description:
        "Modern starting point for your web projects with the best technologies",
      image: "/images/og-default.png",
    },
  },
};
