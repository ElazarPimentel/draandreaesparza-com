# CLAUDE.md

Website for lawyer Andrea Esparza - Family Law specialist in Buenos Aires.

## Tech Stack
- Static HTML + CSS + vanilla JavaScript (root-based)
- Shared stylesheet at `css/style.css`
- Shared JS behaviors/tracking at `js/main.js`
- Vercel deployment

## Commands
```bash
pnpm install     # Install dependencies
pnpm run build   # Regenerate sitemap.xml
pnpm run sitemap # Same as build
gitpush.sh       # Deploy to Vercel
```

No React/Vite dev server is required for production pages.

## Site Structure

### Main Sections (Single Page)
- Hero, About, Specialties, Testimonials, Publications, Contact

### Service Pages (SEO Landing Pages)
- `/servicios/divorcios-buenos-aires`
- `/servicios/derecho-familia`
- `/servicios/sucesiones`
- `/servicios/alimentos`

### Article Pages
- 13+ academic articles under `/articulos/`

## SEO Status

### Completed
- Google Business Profile: CID `6939803818651803775` (Maps ID: `0x95bccb9af98c8873:0x606d2ea88931f07f`)
- Schema.org markup (LegalService, FAQPage, WebSite)
- 4 service pages with targeted keywords
- Sitemap with 18 URLs
- Homepage title optimized for local SEO
- Indexación manual solicitada (2025-12-27)

### Pending (External)
- Service pages indexing (submitted, waiting for Google)
- Backlink from Colegio de Abogados de Morón (requested)
- Google reviews (Andrea to request from clients)
- Article publication for backlinks (REDIC, LinkedIn Articles)

### GSC Property
- Property: `sc-domain:draandreaesparza.com`
- Type: Domain property

## Analytics & Tracking (IMPORTANT)

**All new clickable elements MUST have tracking.** This site uses dual tracking:

Use data attributes handled by `js/main.js`:
- `data-track-whatsapp="source_name"`
- `data-track-publication="source_name"`
- `data-track-cta="source_name"`

### Required tracking for:
- WhatsApp links → `whatsapp_click`
- Phone links (tel:) → `phone_click`
- External article links → `publication_click`
- CTA buttons → `cta_click`

### Current Analytics Stack
| Tool | ID |
|------|-----|
| GA4 | G-96WW8CDVWG |
| GTM | GTM-T89DRSWW |
| Vercel Analytics | Active |
| Vercel Speed Insights | Active |

**DO NOT add links without tracking. Check existing components for patterns.**

## GSC Service Account

`gsc-service-account.json` (gitignored) — Google Search Console API credentials for the service account `search-console-api@calensa.iam.gserviceaccount.com`. Used by `tools/gsc_report_generator.py` and `tools/gsc-submit-sitemap.py` to generate reports and submit sitemaps without browser-based OAuth. Master copy lives in the `websites/` root.

## Key Files
- `index.html` - Main HTML with all schema markup
- `scripts/generate-sitemap.js` - Auto-generates sitemap on build
- `servicios/` - Service landing pages
- `articulos/` - Article pages
- `gsc-reports/` - GSC reports and SEO status

## Contact Info (for schema)
- Address: Uruguay 651, Piso 14, Of. I, CABA (C1015ABM)
- Phone: +54-9-11-5561-7919
- Email: estudiomaesparza@gmail.com
- Areas: Buenos Aires, Morón, Argentina

## Professional Affiliations
- Directora Adjunta, Instituto DIP - Colegio de Abogados de Morón
- ASIME member
- UBA professor (DIP, International Law of Children)
