# AGENTS.md

## Project Overview
- Production site: `https://draandreaesparza.com`
- Architecture: pure static website (vanilla HTML, CSS, JavaScript).
- Hosting: Vercel static deployment from repository root.

## Source Of Truth
- Edit root-level static files directly.
- Main entry: `index.html`
- Shared assets:
  - `css/style.css`
  - `js/main.js`
- SEO/service pages: `servicios/*/index.html`
- Article pages: `articulos/*/index.html`
- Sitemap:
  - Source script: `scripts/generate-sitemap.js`
  - Output file: `sitemap.xml`

## Commands
- Install deps (only needed for sitemap script): `pnpm install`
- Regenerate sitemap: `node scripts/generate-sitemap.js`
- Script aliases:
  - `pnpm run build`
  - `pnpm run sitemap`

## Editing Rules
- Preserve Spanish legal copy and terminology.
- Preserve canonical domain as non-www: `https://draandreaesparza.com`.
- Keep contact data consistent unless user requests a change:
  - WhatsApp/phone: `+54 9 11 5561-7919`
  - Email: `estudiomaesparza@gmail.com`

## Analytics Rules
- Tracking is handled in `js/main.js`.
- New clickable CTA/link elements should use existing hooks:
  - `data-track-whatsapp="..."`
  - `data-track-publication="..."`
  - `data-track-cta="..."`
- Keep WhatsApp link text source pattern (`vengo de https://draandreaesparza.com`).

## SEO Rules
- For each new or updated page keep:
  - Unique `<title>`
  - Meta description
  - Canonical
  - Open Graph tags
  - JSON-LD schema (Service/Article/Breadcrumb as applicable)
- When adding/removing routes:
  1. Update links in `index.html`
  2. Add/update page under `servicios/` or `articulos/`
  3. Update `scripts/generate-sitemap.js`
  4. Regenerate `sitemap.xml`

## Validation Checklist
- Run `node scripts/generate-sitemap.js`
- Validate key links from homepage to service/article pages.
- Confirm tracking attributes still exist on CTAs.
- Confirm canonical and OG URLs remain non-www.
