# Privacy & Security Brochures

A web app that delivers accessible, brochure-style learning content on privacy and security — covering passwords, phishing, 2FA, safe browsing, data privacy, device security, social engineering, and personal incident response.

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
- `npm run typecheck` — run the TypeScript type checker

## Project structure

```
app/                        # Next.js App Router pages
  layout.tsx                # site shell, nav, footer
  page.tsx                  # home / featured brochures
  about/page.tsx            # about page
  brochures/page.tsx        # brochures index, grouped by category
  brochures/[slug]/page.tsx # individual brochure renderer
  globals.css               # Tailwind + brochure typography
components/
  BrochureCard.tsx          # card used on home and index
content/brochures/          # brochure MDX files (one per topic)
lib/
  brochures.ts              # frontmatter + content loader
```

## Adding a new brochure

1. Create a new `.mdx` file under `content/brochures/`.
2. Include frontmatter:

   ```yaml
   ---
   slug: my-topic
   title: My Topic
   description: One-line summary.
   category: Privacy
   readingTime: 6
   level: beginner
   ---
   ```

3. Author the body in Markdown / MDX.
4. The brochure automatically appears on the home page (if it's one of the first three alphabetically) and on the `/brochures` index, grouped by category.

## Brochures included

| Slug | Title | Category |
| --- | --- | --- |
| `strong-passwords` | Strong Passwords | Account Security |
| `two-factor-auth` | Two-Factor Authentication | Account Security |
| `phishing-101` | Phishing 101 | Threats |
| `social-engineering` | Social Engineering | Threats |
| `safe-browsing` | Safe Browsing Habits | Daily Habits |
| `data-privacy-basics` | Data Privacy Basics | Privacy |
| `device-security` | Device Security | Devices |
| `incident-response-personal` | When Something Goes Wrong | Recovery |

## CI

GitHub Actions runs lint, typecheck, and build on every PR (`.github/workflows/ci.yml`).

## Deploying

This app is a standard Next.js app and can be deployed to any provider that supports Next.js — Vercel is the easiest one-click option. Push the repo, import it in Vercel, and accept the defaults.

## License

MIT
