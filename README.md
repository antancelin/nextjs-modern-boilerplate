# 🚀 Modern Web Boilerplate

A minimalist and modern boilerplate to quickly start your web projects with the best technologies.

## ✨ Included Technologies

- **⚡ Next.js 15** - React framework with App Router
- **🔷 TypeScript** - Static typing for more robustness
- **🎨 Tailwind CSS 4** - Modern utility-first CSS framework
- **🎭 shadcn/ui** - Elegant and accessible UI components
- **📊 Vercel Analytics** - Built-in analytics
- **🎯 SEO Ready** - Native Next.js Metadata API (metadataBase + URLs relatives)

## 🚀 Quick Start

### 1. Clone or Use Template

```bash
# Clone this repository
git clone https://github.com/antancelin/nextjs-modern-boilerplate.git
cd nextjs-modern-boilerplate

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

### 3. Environment

Create `.env.example` at the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Create `.env.local` for local dev:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

## 🧩 How to use this template

- Click “Use this template” on GitHub: [Use this template](https://github.com/antancelin/nextjs-modern-boilerplate/generate)
- Create your new repository from the template
- Clone your repo locally:

```bash
git clone <your-new-repo-url>
cd <your-new-repo-name>
```

- Install dependencies and set the environment:

```bash
npm install
cp .env.example .env.local
# edit .env.local if needed
npm run dev
```

## 📝 Customization

### 1. Modify the appearance

Edit the main page in `src/app/page.tsx`

### 2. Configure the site

Update the configuration in `src/data/config.ts`

### 3. Customize metadata

Modify SEO data in `src/data/pages/home.ts`

## 📁 Project Structure

```
src/
├── app/               # Next.js pages (App Router)
├── components/        # React components
│   └── ui/            # shadcn/ui components
├── data/              # Configuration and data
├── lib/               # Utilities
├── styles/            # Global styles
└── types/             # TypeScript definitions
```

## 🎯 Customization Guide

### 1. Update Site Configuration

Edit `src/data/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Company Name",
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
      image: "/images/og-default.png",
    },
  },
};
```

Note: URLs are built using Next.js `metadataBase` from `NEXT_PUBLIC_SITE_URL` (see `src/app/layout.tsx`). Keep Open Graph images as relative paths (e.g., `/images/og-default.jpg`).

### 2. Customize Home Page Content

Edit `src/data/pages/home.ts`:

```typescript
export const homePageData: PageData = {
  seo: {
    title: "Your Custom Page Title",
    description: "Your page description",
    keywords: ["landing page", "your", "keywords"],
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

- Replace favicon files in `/public/favicon/` (use a high quality svg with [Real Favicon Generator](https://realfavicongenerator.net/))
- Add your images to `/public/images/`
- Update image paths in your configuration files

## 📊 SEO Features

- ✅ Automatic meta tags generation
- ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Cards (Discord, Slack, etc.)
- ✅ Canonical URLs
- ✅ JSON-LD structured data ready
- ✅ Sitemap generation (via Next.js)
- ✅ Robots.txt support

## 🌐 Social Media Integration

Configure social media links in `src/data/config.ts`.

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

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

## 📝 License

Released under the MIT License. See `LICENSE` for details.

---

Made with ❤️ and Next.js by [Antoine Ancelin](https://github.com/antancelin)
