import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { homePageData } from "@/data/pages/home";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateMetadata(homePageData.seo, "/");

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-12 px-4">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Modern Web
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-gray-600">
            Boilerplate
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
            A solid starting point for your web projects with the best
            technologies.
          </p>
        </div>

        {/* Technology Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Next.js */}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10 fill-white"
              >
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C20.756 4.249 17.563 2.185 14.458.346a19.76 19.76 0 0 0-.364-.033C13.666.001 13.532 0 13.356 0h-1.784zm4.368 7.217c.076.044.144.101.185.176.067.121.068.127.068 2.345 0 1.242-.009 2.243-.02 2.243-.014 0-.386-.253-.827-.563l-.827-.563-.002-1.68c0-.925.007-1.68.013-1.68.007-.001.184.082.41.183z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
              Next.js
            </span>
          </a>

          {/* TypeScript */}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10 fill-white"
              >
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
              TypeScript
            </span>
          </a>

          {/* Tailwind CSS */}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10 fill-white"
              >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
              Tailwind
            </span>
          </a>

          {/* shadcn/ui */}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10 fill-white"
              >
                <path d="M13.5 2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-5zM8.5 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-9zM3.5 12.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-4zM18.5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v8c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-8z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
              shadcn/ui
            </span>
          </a>
        </div>

        {/* Welcome Message */}
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-600">
            Ready to build your next project?
          </p>

          {/* GitHub Button */}
          <Button asChild size="lg">
            <a
              href="https://github.com/antancelin/nextjs-modern-boilerplate/generate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Use this template
            </a>
          </Button>

          <p className="text-sm text-gray-400">
            Edit this file to get started:{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-gray-700">
              src/app/page.tsx
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
