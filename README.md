# IDDION website (Next.js)

Homepage for IDDION, built with Next.js 14 (App Router), TypeScript and plain CSS. No UI library is needed.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 18.17 or later. Deploys as-is to Vercel, or to any Node host with `npm run build && npm start`.

## Where things live

| File | What it holds |
| --- | --- |
| `lib/content.ts` | **All homepage text**, product screen data, links and the site theme. Edit copy here. |
| `app/globals.css` | All styles, plus the five colour themes at the top. |
| `app/layout.tsx` | Fonts (Figtree + Caveat Brush via `next/font`), page title and SEO metadata. |
| `app/page.tsx` | Section order and FAQ structured data (schema.org). |
| `components/sections.tsx` | Each homepage section. |
| `components/PlatformTabs.tsx` | Product tabs (Contract Labour / HRIS & Payroll / Salary++). |
| `components/FeatureCarousel.tsx` | The coloured feature slides. |
| `components/Newsletter.tsx` | Footer sign-up form. |
| `components/ui.tsx` | Shared pieces: logo mark, photo slot, status pills, product screen mock, icons. |

## Change the colour theme

In `lib/content.ts` set `SITE_THEME` to one of `vivid`, `purple-pop`, `ocean`, `sunrise`, `forest`.
To add your own brand palette, copy a `[data-theme='…']` block at the top of `app/globals.css`.

## Before going live

1. **Photos**: put images in `public/images/` and set the `src` fields in `lib/content.ts`
   (`hero.photo`, `stats.photo`, `resources.items[].image`). Empty `src` shows a labelled grey slot.
2. **Logo**: replace `LogoMark` in `components/ui.tsx` with your real IDDION logo (SVG recommended).
3. **Client logos**: get written approval from each client, add files to `public/logos/`,
   and swap the client name list for `<Image>` tags in `Customers()`.
4. **Placeholders**: search the project for `[` to find every value still in square brackets
   (worker count, ₹ amounts, article titles, FAQ answers).
5. **Product screens**: the dashboard mocks are illustrative HTML. Swap in real, anonymised
   screenshots when ready.
6. **Newsletter**: connect `components/Newsletter.tsx` to your CRM or email tool (see the `TODO`).
7. **Links**: inner pages such as `/platform/contract-labour`, `/demo` and `/risk-check` are linked
   but not built yet.
