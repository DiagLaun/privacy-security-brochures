# Privacy & Security Brochures

A web app that delivers accessible, brochure-style learning content on privacy and security — covering passwords, phishing, 2FA, safe browsing, data privacy, device security, social engineering, personal incident response, and an advanced guide for high-risk environments.

Bilingual: English at `/` and a separate Simplified Chinese (中文) version at `/zh` focused on topics specific to mainland China users.

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
app/                          # Next.js App Router pages
  layout.tsx                  # root html/body shell + shared SiteChrome
  (en)/                       # English route group
    layout.tsx                # English nav/footer chrome
    page.tsx                  # English home
    about/page.tsx
    brochures/page.tsx
    brochures/[slug]/page.tsx
    not-found.tsx
  zh/                         # Chinese (中文) routes
    layout.tsx                # Chinese nav/footer chrome
    page.tsx                  # Chinese home
    about/page.tsx
    brochures/page.tsx
    brochures/[slug]/page.tsx
    not-found.tsx
  not-found.tsx               # root-level fallback 404
components/
  BrochureCard.tsx            # card used on home and index
  LanguageSwitcher.tsx        # EN / 中文 toggle in nav
content/brochures/            # brochure MDX files (one per topic)
  *.mdx                       # English brochures
  *.zh.mdx                    # Chinese brochures
lib/
  brochures.ts                # frontmatter + content loader (language-aware)
```

## Adding a new brochure

1. Create a new `.mdx` file under `content/brochures/`. Use a `.zh.mdx` suffix
   for Chinese, or set `language: zh` in the frontmatter.
2. Include frontmatter:

   ```yaml
   ---
   slug: my-topic
   title: My Topic
   description: One-line summary.
   category: Privacy
   readingTime: 6
   level: beginner
   language: en        # or "zh"
   ---
   ```

3. Author the body in Markdown / MDX.
4. The brochure appears automatically on the matching language's index
   (`/brochures` for English, `/zh/brochures` for Chinese), grouped by
   category.

## Brochures included

### English (`/brochures`)

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
| `high-risk-environments` | High-Risk Environments | Recovery |

### 中文（`/zh/brochures`）

| Slug | 标题 | 分类 |
| --- | --- | --- |
| `anti-fraud-app` | 国家反诈中心 APP | 国产 APP |
| `phone-manager-apps` | 手机管家 / 安全中心类 APP | 国产 APP |
| `input-method-surveillance` | 输入法监控 | 国产 APP |
| `icloud-gcbd` | 云上贵州与中国大陆 iCloud | 设备与系统 |
| `harmony-hyper-os` | 鸿蒙 OS 与澎湃 OS 隐私设置 | 设备与系统 |
| `network-surveillance` | 大数据与网络监控 | 网络与流量 |
| `secure-messengers` | 加密通讯 APP 选型 | 加密通讯 |
| `everyday-data-hygiene` | 普通人的数据卫生清单（不需 root / 刷机） | 日常隐私 |
| `high-risk-emergency` | 高风险环境下的应急处置 | 紧急应对 |
| `china-mission-safety` | 跨文化事工与本土牧养的安全注意事项 | 跨文化事工 |
| `church-tech-volunteer` | 教会技术同工的安全守则 | 跨文化事工 |

## Editorial scope

This project is **defensive privacy & security education**. Content is based on
publicly documented behavior — vendor privacy policies, official documentation,
peer-reviewed research (Citizen Lab, EFF, etc.) — and is written in the same
spirit as EFF's *Surveillance Self-Defense* and Access Now's *Digital Security
Helpline* materials.

Out of scope:

- Guidance on circumventing internet censorship (e.g. the Great Firewall) or
  any country's lawful network controls.
- Anything that helps someone evade lawful investigation.
- Political commentary or country-specific propaganda.

The Chinese-language section is specifically scoped to *day-to-day privacy
hygiene* on devices, apps, and networks commonly used in mainland China — not
to circumvention. Each Chinese brochure separates "regular users" from
"high-risk users" (journalists, lawyers, activists, etc.) so readers can match
guidance to their actual threat model.

## CI

GitHub Actions runs lint, typecheck, and build on every PR (`.github/workflows/ci.yml`).

## Deploying

This app is a standard Next.js app and can be deployed to any provider that
supports Next.js — Vercel is the easiest one-click option. Push the repo,
import it in Vercel, and accept the defaults.

## License

MIT
