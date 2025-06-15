"use client";

import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from "lucide-react";
import { siteConfig } from "@/data/config";
import { getSocialUrl } from "@/lib/socials";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div>
              <div className="font-bold text-xl md:text-2xl text-white mb-4">
                {siteConfig.name}
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Transform your business with our professional services and
                personalized approach to achieve your goals.
              </p>
            </div>
            <div className="flex space-x-4">
              {siteConfig.social.linkedin && (
                <a
                  href={getSocialUrl("linkedin", siteConfig.social.linkedin)}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={getSocialUrl("instagram", siteConfig.social.instagram)}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  href={getSocialUrl("twitter", siteConfig.social.twitter)}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base md:text-lg text-white mb-4 md:mb-6">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  Implementation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-base md:text-lg text-white mb-4 md:mb-6">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  Our Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base md:text-lg text-white mb-4 md:mb-6">
              Contact
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base break-all"
                >
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm md:text-base">
                  Worldwide Services Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
