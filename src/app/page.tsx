import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { homePageData } from "@/data/pages/home";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export const metadata: Metadata = generateMetadata(homePageData.seo, "/");

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
