import { PageData } from "@/types";

export const homePageData: PageData = {
  seo: {
    title: "Welcome to My Company",
    description:
      "Discover our professional services and how we can help you achieve your goals.",
    keywords: ["landing page", "services", "professional", "company"],
    openGraph: {
      title: "My Company - Professional Services",
      description: "Transform your business with our professional approach",
      image: "/images/og-home.jpg",
    },
  },
  hero: {
    title: "Welcome to My Company",
    subtitle: "Professional Services",
    description:
      "We provide exceptional services to help you achieve your goals with our expertise and personalized approach.",
    ctaButton: {
      text: "Get Started",
      href: "#contact",
      variant: "primary",
    },
  },
};
