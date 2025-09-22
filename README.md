# 🚀 Modern Web Boilerplate

A minimalist and modern boilerplate to quickly start your web projects with the best technologies.

## ✨ Features

- ⚡ Next.js 15 (App Router)
- 🔷 TypeScript (strict)
- 🎨 Tailwind CSS v4 (utility-first, tokens OKLCH)
- 🧩 shadcn/ui (cva variants, Button included)
- 🌓 Dark mode built-in (next-themes + ThemeToggle)
- 📊 Vercel Analytics (optional)
- 🎯 SEO Ready (Next.js Metadata API, canonical, OG/Twitter)
- 🤖 robots + sitemap auto (env-aware)
- ✅ Quality & CI/CD (ESLint, CI on PRs, semantic-release on main)
- 📝 Conventional Commits (commitlint + commitizen)

## ✅ Requirements

- Node.js ≥ 18.18 (recommended: 20 LTS)
- npm, pnpm or yarn

## 🚀 Quick Start

Using this template:

- Click “Use this template” on GitHub: https://github.com/antancelin/nextjs-modern-boilerplate/generate
- Create your new repository from the template
- Clone your repo locally:

```bash
git clone <your-new-repo-url>
cd <your-new-repo-name>

# Install deps
npm install

# Environment
cp .env.example .env.local
# edit .env.local if needed

# Dev
npm run dev
```

Open http://localhost:3000.

## 🔧 Scripts

```bash
npm run dev               # Start dev server
npm run build             # Build production
npm run start             # Start production server
npm run lint              # Lint with ESLint (next/core-web-vitals)
npm run typecheck         # TypeScript type-check (no emit)
npm run commitizen        # Guided conventional commits (cz)
npm run semantic-release  # Manual release (CI handles automatic releases)
```

## 🧱 Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Fonts, global providers, analytics, metadataBase
│   ├── page.tsx              # Home page (uses ThemeToggle)
│   ├── robots.ts             # robots rules (env-aware)
│   └── sitemap.ts            # sitemap generation (env-aware)
├── components/
│   ├── theme-provider.tsx    # next-themes provider (client)
│   └── ui/
│       ├── button.tsx        # shadcn/ui Button (cva)
│       └── theme-toggle.tsx  # Dark mode toggle (client)
├── data/
│   ├── config.ts             # Site config (name, locale, default SEO)
│   └── pages/
│       └── home.ts           # Per-page SEO data
├── lib/
│   ├── seo.ts                # generateMetadata helper
│   └── utils.ts              # cn() (clsx + tailwind-merge)
├── styles/
│   └── globals.css           # Tailwind v4 + OKLCH tokens + dark mode
└── types/
    └── index.ts              # SEOData, SiteConfig, PageData types
```

Other notable files:

- `.github/workflows/ci.yaml`: Lint + typecheck + build on PRs
- `.github/workflows/release.yaml`: semantic-release on main
- `components.json`: shadcn config (points to `src/styles/globals.css`)
- `postcss.config.mjs`: Tailwind v4 via `@tailwindcss/postcss`

## 🌈 Styling & Theming (Tailwind v4 + OKLCH)

Global tokens live in `src/styles/globals.css`. Customize your brand by editing `:root` (light) and `.dark` (dark):

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... */
}

.dark {
  /* Deep gray instead of pure black for better contrast with logos */
  --background: oklch(0.2 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}
```

- Use Tailwind tokens (e.g., `text-foreground`, `text-muted-foreground`, `bg-secondary`, `text-secondary-foreground`) instead of fixed `text-gray-*` to auto-adapt to dark mode.

## 🌓 Dark Mode

- Provided via `next-themes` with a `ThemeProvider` (in `layout.tsx`).
- Ready-to-use `ThemeToggle` in `src/components/ui/theme-toggle.tsx`.
- Place it globally (e.g., top-right in `layout.tsx`) or locally in any page/component.

Example:

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Page() {
  return (
    <div>
      <ThemeToggle />
      {/* ... */}
    </div>
  );
}
```

## 🔎 SEO

- Global SEO config: `src/data/config.ts` (`siteConfig.defaultSEO`)
- Per-page SEO data: `src/data/pages/*` via `generateMetadata(seoData, path)` (`src/lib/seo.ts`)
- `metadataBase` comes from `NEXT_PUBLIC_SITE_URL`
- OG images: use relative paths (e.g., `/images/og-default.png`)

Environment:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🧩 UI Components (shadcn/ui)

- `button.tsx` shows the `cva` pattern with `variant`, `size`, and `cn()`.
- Add new components in `src/components/ui/` and keep APIs consistent with `Button`.

## 🧪 Quality & CI/CD

- ESLint: `next/core-web-vitals`
- CI (PRs): `lint` + `typecheck` + `build`
- Releases (main): semantic-release (analyzes commits, updates changelog, creates GitHub release)

Conventional commits:

```bash
npm run commitizen
# Example:
# feat(ui): add ThemeToggle component
```

## 🎯 Customization Guide

### 1. Update Site Configuration

Edit `src/data/config.ts`:

```ts
export const siteConfig: SiteConfig = {
  name: "Your Company Name",
  locale: "en-US",
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

Note: URLs are built using Next.js `metadataBase` from `NEXT_PUBLIC_SITE_URL`. Keep Open Graph images as relative paths (e.g., `/images/og-default.png`).

### 2. Customize Home Page Content

Edit `src/data/pages/home.ts`:

```ts
export const homePageData: PageData = {
  seo: {
    title: "Your Custom Page Title",
    description: "Your page description",
    keywords: ["landing page", "your", "keywords"],
  },
};
```

### 3. Update Colors and Branding

Edit `src/styles/globals.css` tokens (see Styling & Theming section):

```css
:root {
  --primary: oklch(0.205 0 0); /* Your primary color */
  --primary-foreground: oklch(0.985 0 0);
  /* ... other colors */
}
```

### 4. Add Your Logo and Images

See the Assets section below for guidance and sizes.

## 🖼️ Assets

- Replace favicon files in `/public/favicon/`
- OG images in `/public/images/`:
  - `og-default.png` (1200×630)
  - `og-home.png` (1200×630)

## 🚢 Deployment

- Recommended: Vercel (Connect repo → Deploy)
- Also works on Netlify, Railway, DigitalOcean App Platform, AWS Amplify

## 🔗 Links

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- TypeScript: https://www.typescriptlang.org

## 📝 License

MIT — see `LICENSE`

---

Made with ❤️ and Next.js by [Antoine Ancelin](https://github.com/antancelin)
