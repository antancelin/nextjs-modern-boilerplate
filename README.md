# Modern Web Boilerplate

A minimalist Next.js boilerplate to quickly start your web projects.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (OKLCH tokens), shadcn/ui, dark mode with next-themes
- SEO ready: Metadata API, Open Graph, `robots.txt` and `sitemap.xml`
- Vercel Analytics (optional)
- ESLint, Prettier, EditorConfig, Bundle Analyzer
- Conventional Commits, CI on PRs, automatic releases on `main`

## Quick Start

Requires Node.js 26 LTS.

Click [Use this template](https://github.com/antancelin/nextjs-modern-boilerplate/generate), then:

```bash
git clone <your-new-repo-url>
cd <your-new-repo-name>
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev           # Start the dev server
npm run build         # Build for production
npm run start         # Start the production server
npm run lint          # Lint (lint:fix to auto-fix)
npm run format        # Format (format:check to verify)
npm run typecheck     # Type-check
npm run analyze       # Analyze the bundle size
npm run commitizen    # Write a guided conventional commit
```

## Customization

| What              | Where                                              |
| ----------------- | -------------------------------------------------- |
| Site name and SEO | `src/data/config.ts`                               |
| Page SEO          | `src/data/pages/`                                  |
| Colors            | `:root` and `.dark` in `src/styles/globals.css`    |
| Site URL          | `NEXT_PUBLIC_SITE_URL` in `.env.local`             |
| Favicons          | `public/favicon/`                                  |
| Open Graph images | `public/images/` (1200×630, use relative paths)    |
| UI components     | `src/components/ui/` (follow the `Button` pattern) |

Use Tailwind tokens such as `text-foreground` rather than fixed colors, so that dark mode works automatically.

## CI/CD

- **Pull requests:** `format:check`, `lint`, `typecheck` and `build`
- **`main`:** semantic-release creates a GitHub release from the commits

Deploy on [Vercel](https://vercel.com) by connecting the repository.

See [GitHub Releases](https://github.com/antancelin/nextjs-modern-boilerplate/releases) for the changelog.

## License

MIT, see `LICENSE`.
