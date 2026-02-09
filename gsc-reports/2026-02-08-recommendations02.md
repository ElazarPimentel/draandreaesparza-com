# draandreaesparza.com — Post-Refactor Audit & Recommendations
**Date**: 2026-02-08
**Context**: Site refactored from Vite+React SPA to static HTML. All 18 pages now serve full HTML to crawlers.

---

## GSC Data (28 days: Jan 11 - Feb 8, 2026)

| Metric | Value |
|--------|-------|
| Total impressions | 126 (across 11 pages) |
| Total clicks | 4 |
| Queries detected | 3 |
| Pages indexed | 11 of 18 |

### Trend (last 7 days vs first 7 days)

| Period | Avg daily impressions |
|--------|-----------------------|
| Jan 16-22 | 3.8/day |
| Feb 2-6 | 12.8/day |

Impressions are trending UP — Feb 3 had 14, Feb 6 had 27. The refactor to static HTML may already be helping Google discover more pages.

### Pages by Performance

| Page | Impressions | Clicks | Position |
|------|-------------|--------|----------|
| Homepage `/` | 87 | 4 | 3.6 |
| `/articulos/finanzas-islamicas-derecho-musulman` | 21 | 0 | 3.9 |
| `/servicios/divorcios-buenos-aires` | 12 | 0 | 13.0 |
| PDF restitución menores | 9 | 0 | 7.8 |
| `/servicios/sucesiones` | 7 | 0 | 5.3 |
| `/articulos/historia-derecho-musulman-sustraccion-menores` | 5 | 0 | 9.0 |
| `/articulos/analisis-problemas-dip-divorcio-internacional` | 5 | 0 | 8.4 |
| `/articulos/identidad-genero-fallo-ridca` | 5 | 0 | 6.2 |
| `/servicios/alimentos` | 5 | 0 | 5.8 |
| `/articulos/identidad-de-genero-analisis-fallo` | 4 | 0 | 4.2 |
| `/articulos/bioetica-reproduccion-asistida` | 3 | 0 | 9.0 |

### Queries (only 3 detected)

| Query | Impressions | Position |
|-------|-------------|----------|
| "andrea esparza" (branded) | 21 | 6 |
| "divorcio abogados" | 1 | 91 |
| "gharar" | 1 | 2 |

---

## Technical Audit Results

### What's GOOD (no action needed)

- **Crawler visibility**: All 18 pages serve full static HTML — FIXED by refactor
- **Schema markup**: Excellent on all pages (LegalService, FAQPage, Article, Service, BreadcrumbList)
- **Unique titles & descriptions**: Every page has unique, keyword-rich title and meta description
- **Canonical URLs**: Correct on all pages
- **hreflang**: es-AR tag present on all pages
- **Open Graph / Twitter**: Complete on all pages
- **robots.txt**: Correct (Allow all + sitemap)
- **Sitemap**: 18 URLs, all matching actual files
- **404 page**: Exists with noindex
- **Analytics**: GA4, GTM, Vercel Analytics, Vercel Speed Insights all active
- **www redirect**: vercel.json redirects www to non-www (correct)
- **CSS/JS**: All files exist and load correctly

### Issues Found

#### 1. ORPHANED FILES in /articulos/ (MEDIUM)

5 messy HTML files auto-converted from Word, plus their .docx sources and .gif artifacts. These are crawlable and dilute SEO:

Orphaned HTML:
- `articulos/historia-del-derecho-musulm-n-caso-sustracci-n-internacional-de-menores-shaban-arias-uriburu.html`
- `articulos/comentario-a-fallo-sobre-identidad-de-genero.html`
- `articulos/interes-superior-del-niño-vs-cumplimiento-de-tratados-internacionales-revista-panama.html`
- `articulos/trabajo-finanzas-islamicas-para-el-dial.html`
- `articulos/analisis-de-los-problemas-generales-del-derecho-internacional-privado-vinculados-a-un-divorcio-de.html`

Plus 5 .docx files, 2 .gif artifacts, and 6 .pdf files in /articulos/.

**Recommendation**: Move these to a non-served directory or delete. The clean `/articulos/*/index.html` pages are the proper versions. Having duplicate content in messy URLs hurts.

#### 2. http:// REFERENCES (LOW)

Most are false positives — SVG xmlns declarations (`xmlns="http://www.w3.org/2000/svg"`), which are correct and required. Real http:// issues only exist in the ORPHANED files:
- `trabajo-finanzas-islamicas-para-el-dial.html`: links to http://www.webislam.com/, http://www.exteriores.gob.es/
- `historia-del-derecho-musulm-n-...html`: links to http://www.unhchr.ch/
- `interes-superior-del-niño-...html`: link to http://www.estudiomaesparza.com.ar/

The clean article pages are all fine. Fixing the orphaned files issue (above) resolves this too.

#### 3. NO CROSS-LINKING between articles and services (HIGH)

- Service pages link back to homepage but NOT to related articles
- Article pages link back to homepage but NOT to service pages
- This is a missed opportunity to pass authority from pages that ARE getting impressions to commercial pages

**Recommendation**: Add "Related articles" section to service pages. Add "Need legal help?" CTA linking to service pages at the bottom of each article.

#### 4. URL INSPECTION API ERRORS (MEDIUM)

All 15 URL inspections returned 403: "You do not own this site." The GSC property is `sc-domain:draandreaesparza.com` but the service account doesn't have URL Inspection API permission for domain properties (Google limitation — only the OAuth user who verified the domain can inspect URLs).

**Recommendation**: Use the OAuth token (not service account) for URL inspection, or check indexing manually in GSC dashboard.

---

## Recommendations — What To Do Now

### Priority 1: Clean up orphaned files

Delete or move the 5 orphaned HTML files, 5 .docx files, 2 .gif files from /articulos/. These create duplicate/thin content that confuses Google. The PDFs can stay since the sitemap doesn't reference them and the restitución PDF is actually getting 9 impressions.

### Priority 2: Add cross-linking between articles and services

For each service page, add a "Publicaciones relacionadas" section linking to 2-3 relevant articles:

- **divorcios-buenos-aires** → analisis-problemas-dip-divorcio-internacional, filiacion-reproduccion-asistida
- **derecho-familia** → conceptos-ninez-adolescencia-dip, interes-superior-nino-tratados-internacionales, historia-derecho-musulman-sustraccion-menores
- **sucesiones** → (no direct article match, but could link to homepage #specialties)
- **alimentos** → conceptos-ninez-adolescencia-dip

For each article page, add a CTA at the bottom:
```
¿Necesita asesoramiento legal? Conozca nuestros servicios de [derecho de familia](/servicios/derecho-familia).
Contacte a la Dra. Esparza por WhatsApp.
```

### Priority 3: Create Morón-specific landing pages

The site targets "Buenos Aires" generically but competitors winning local searches have Morón-specific content. New pages needed:

- `/abogada-familia-moron/index.html` — targeting "abogada familia moron", "abogada derecho familia zona oeste"
- Content should mention: Tribunales de Familia de Morón, neighborhoods (Haedo, Castelar, Ituzaingó, Ramos Mejía), local court procedures

### Priority 4: Add Person schema

Homepage has LegalService schema but no Person schema for Andrea herself. For YMYL legal content, Google's E-E-A-T benefits from explicit Person markup:

```json
{
  "@type": "Person",
  "name": "María Andrea Esparza",
  "jobTitle": "Abogada especialista en Derecho de Familia",
  "alumniOf": {"@type": "CollegeOrUniversity", "name": "Universidad de Buenos Aires"},
  "memberOf": [
    {"@type": "Organization", "name": "Colegio de Abogados de Morón"},
    {"@type": "Organization", "name": "ASIME"}
  ],
  "knowsAbout": ["Derecho de Familia", "Divorcios", "Sucesiones", "Derecho Internacional Privado"],
  "sameAs": ["https://www.linkedin.com/in/maría-andrea-esparza-b478608b"]
}
```

### Priority 5: Target real search queries with new content

The site ranks for zero commercial queries. Blog posts answering specific questions people actually search for:

- "Cuánto cuesta un divorcio en Buenos Aires 2026"
- "Cómo se calcula la cuota alimentaria en Argentina"
- "Cuánto tarda una sucesión en Buenos Aires"
- "Violencia familiar: cómo pedir una orden de protección"
- "Divorcio de mutuo acuerdo: pasos y requisitos"

Each as a new `/articulos/*/index.html` with proper schema, meta tags, and links to service pages.

---

## What Andrea Must Do (External, Not Code)

1. **Google reviews** — Ask 5-10 past clients. Even 5 stars with keywords ("divorcio", "familia", "morón") massively boosts local rankings
2. **Google Business Profile** — Set primary category to "Abogado de familia", add services, upload photos, post weekly
3. **Directory listings** — Register on SoloAbogados.org, Legal.com.ar, HG.org, GuiaDeAbogados.com.ar (all free)
4. **Colegio de Abogados de Morón link** — Get a link from the Instituto DIP page (she's Directora Adjunta)
5. **UBA faculty profile** — Get her professor page to link to draandreaesparza.com

---

## Expected Timeline

The refactor from SPA to static HTML was the critical fix. The daily impressions trend (3.8/day → 12.8/day) suggests Google is already re-crawling and indexing more content. The 28-day GSC window still mostly reflects the old SPA version.

Within 2-4 weeks, as Google fully re-indexes the static pages, expect:
- More pages appearing in GSC data (currently 11 of 18)
- Service pages climbing from their current positions
- New queries appearing as Google discovers the static content

The cross-linking, Morón pages, and content additions will compound on top of the rendering fix.
