# 🚀 Next.js Landing Page Boilerplate

A modern, responsive landing page template built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Perfect for creating professional landing pages quickly.

## ✨ Features

- **🎯 Data-Driven Architecture**: Content managed through configuration files
- **🚀 SEO Optimized**: Automatic metadata generation with Next.js native features
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ High Performance**: Next.js 15 with App Router (SSR/SSG)
- **🎨 Modern UI**: Clean interface built with shadcn/ui components
- **🔧 Highly Customizable**: Easy to configure and extend
- **📊 Analytics Ready**: Vercel Analytics integration included
- **🌙 TypeScript**: Full type safety throughout the project

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

## 🚀 Quick Start

### 1. Clone or Use Template

```bash
# Clone this repository
git clone <your-repo-url>
cd nextjs-landing-boilerplate

# Or use as GitHub template
# Click "Use this template" button on GitHub
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   └── Footer.tsx      # Footer section
├── data/               # Configuration files (Data-driven)
│   ├── config.ts       # Global site configuration
│   └── pages/
│       └── home.ts     # Home page data
├── lib/                # Utility functions
│   ├── seo.ts          # SEO helpers
│   ├── socials.ts      # Social media utilities
│   └── utils.ts        # General utilities
├── styles/             # Global styles
│   └── globals.css     # Tailwind + custom styles
└── types/              # TypeScript type definitions
    └── index.ts        # Shared interfaces
```

## 🎯 Customization Guide

### 1. Update Site Configuration

Edit `src/data/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Company Name",
  domain: "yourcompany.com",
  locale: "en-US", // or "fr-FR", "es-ES", etc.
  social: {
    instagram: "@yourcompany",
    linkedin: "company/your-company",
    twitter: "@yourcompany",
  },
  defaultSEO: {
    title: "Your Company - Your Tagline",
    description: "Your company description for SEO",
    keywords: ["keyword1", "keyword2", "keyword3"],
    openGraph: {
      title: "Your Company - Social Media Title",
      description: "Description for social media shares",
      image: "/images/og-default.jpg",
    },
  },
};
```

### 2. Customize Home Page Content

Edit `src/data/pages/home.ts`:

```typescript
export const homePageData: PageData = {
  seo: {
    title: "Your Custom Page Title",
    description: "Your page description",
    keywords: ["landing page", "your", "keywords"],
  },
  hero: {
    title: "Your Hero Title",
    subtitle: "Your Subtitle",
    description: "Your hero description",
    ctaButton: {
      text: "Your Call to Action",
      href: "#contact",
      variant: "primary",
    },
  },
};
```

### 3. Update Colors and Branding

The project uses Tailwind CSS with custom color variables. Update colors in `src/styles/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0); /* Your primary color */
  --primary-foreground: oklch(0.985 0 0);
  /* ... other colors */
}
```

### 4. Add Your Logo and Images

- Replace favicon files in `/public/favicon/`
- Add your images to `/public/images/`
- Update image paths in your configuration files

### 5. Customize Components

The three main components can be easily customized:

- **Header**: Update navigation links and branding
- **Hero**: Modify the hero section content and layout
- **Footer**: Add/remove footer sections and links

## 📊 SEO Features

- ✅ Automatic meta tags generation
- ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Cards (Discord, Slack, etc.)
- ✅ Canonical URLs
- ✅ JSON-LD structured data ready
- ✅ Sitemap generation (via Next.js)
- ✅ Robots.txt support

## 🌐 Social Media Integration

Configure social media links in `src/data/config.ts`. The Footer component automatically generates social media icons and links.

Supported platforms:

- Instagram
- LinkedIn
- Twitter/X
- Facebook

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The project works on any platform that supports Next.js:

- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

---

Made with ❤️ and Next.js
