# Privacy & Security Brochures

A web app that delivers accessible, brochure-style learning content on privacy and security — covering passwords, phishing, 2FA, safe browsing, data privacy, device security, and social engineering.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX**.

## Quick start

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Project structure

- `app/` — Next.js App Router pages, layouts, and styles
- `app/brochures/` — brochure index + dynamic brochure routes
- `content/brochures/*.mdx` — brochure content authored in MDX with frontmatter
- `components/` — shared UI components
- `lib/` — content loading + helpers

## Adding a new brochure

1. Create a new `.mdx` file under `content/brochures/`
2. Include frontmatter: `title`, `description`, `slug`, `category`, `readingTime`, `level`
3. Author the content in Markdown / MDX
4. It automatically appears on the brochures index

## License

MIT
