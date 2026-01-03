# CLAUDE.md

Website for lawyer Andrea Esparza - Family Law specialist in Buenos Aires.

## Tech Stack
- Vite + React (SPA)
- SCSS styling
- Vercel deployment

## Commands
```bash
pnpm install     # Install dependencies
pnpm run build   # Build for production (runs sitemap generation)
gitpush.sh       # Deploy to Vercel
```

**NEVER run `pnpm run dev`** - user runs dev server separately.

## Site Structure

### Main Sections (Single Page)
- Hero, About, Specialties, Testimonials, Publications, Contact

### Service Pages (SEO Landing Pages)
- `/servicios/divorcios-buenos-aires`
- `/servicios/derecho-familia`
- `/servicios/sucesiones`
- `/servicios/alimentos`

### Article Pages
- 7 academic articles under `/articulos/`

## SEO Status

### Completed
- Google Business Profile: Place ID `09771868979169933047`
- Schema.org markup (LegalService, FAQPage, WebSite)
- 4 service pages with targeted keywords
- Sitemap with 12 URLs
- Homepage title optimized for local SEO
- Indexación manual solicitada (2025-12-27)

### Pending (External)
- Service pages indexing (submitted, waiting for Google)
- Backlink from Colegio de Abogados de Morón (requested)
- Google reviews (Andrea to request from clients)
- Article publication for backlinks (REDIC, LinkedIn Articles)

### GSC Property
- URL: `https://draandreaesparza.com/`
- Type: URL-prefix (not domain)

## Key Files
- `index.html` - Main HTML with all schema markup
- `scripts/generate-sitemap.js` - Auto-generates sitemap on build
- `src/pages/servicios/` - Service landing pages
- `gsc-reports/` - GSC reports and SEO status

## Contact Info (for schema)
- Phone: +54-9-11-5561-7919
- Email: estudiomaesparza@gmail.com
- Areas: Buenos Aires, Morón, Argentina

## Professional Affiliations
- Directora Adjunta, Instituto DIP - Colegio de Abogados de Morón
- ASIME member
- UBA professor (DIP, International Law of Children)
