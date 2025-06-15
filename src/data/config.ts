import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "My Company",
  domain: "mycompany.com",
  locale: "en-US",
  social: {
    instagram: "@mycompany",
    linkedin: "company/my-company",
    twitter: "@mycompany",
  },
  defaultSEO: {
    title: "My Company - Professional Services",
    description:
      "My Company provides professional services to help you achieve your goals with personalized solutions.",
    keywords: [
      "professional services",
      "consulting",
      "business",
      "solutions",
      "company",
    ],
    openGraph: {
      title: "My Company - Professional Services",
      description:
        "Transform your business with our professional services and personalized approach",
      image: "/images/og-default.jpg",
    },
  },
};
