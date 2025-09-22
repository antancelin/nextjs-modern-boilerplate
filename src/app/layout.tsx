import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/data/config";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: siteConfig.defaultSEO.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultSEO.description,
  keywords: siteConfig.defaultSEO.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.defaultSEO.openGraph?.title,
    description: siteConfig.defaultSEO.openGraph?.description,
    images: siteConfig.defaultSEO.openGraph?.image
      ? [
          {
            url: siteConfig.defaultSEO.openGraph.image,
            width: 1200,
            height: 630,
            alt: siteConfig.defaultSEO.openGraph.title,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultSEO.title,
    description: siteConfig.defaultSEO.description,
    creator: siteConfig.social.twitter,
    images: siteConfig.defaultSEO.openGraph?.image
      ? [siteConfig.defaultSEO.openGraph.image]
      : [],
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
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale.split("-")[0]}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
