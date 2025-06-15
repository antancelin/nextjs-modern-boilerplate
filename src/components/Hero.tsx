"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star } from "lucide-react";
import { homePageData } from "@/data/pages/home";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { hero } = homePageData;

  return (
    <section
      id="home"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-blue-900/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <Badge className="bg-blue-600/20 border border-blue-400/30 text-blue-200 px-4 py-2 text-sm font-medium">
                {hero?.subtitle || "Professional Services"}
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {hero?.title || "Welcome to"}{" "}
                  <span className="text-blue-300">Your Success</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  {hero?.description ||
                    "Transform your business with our professional services and personalized approach to achieve your goals."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  onClick={() =>
                    window.open("mailto:contact@example.com", "_blank")
                  }
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium text-lg"
                >
                  {hero?.ctaButton?.text || "Get Started"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => window.open("https://github.com", "_blank")}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-600/20 to-gray-700/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <Star className="h-20 w-20 text-blue-400 mx-auto mb-6" />
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-white">
                    Trusted by
                  </div>
                  <div className="text-blue-200 text-lg">
                    Professional Companies
                  </div>
                  <div className="text-gray-300 text-sm">
                    Delivering excellence and results since day one
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
