# draandreaesparza.com - SEO Analysis & Recommendations
**Date**: 2026-02-08
**Site**: draandreaesparza.com - Dra. Maria Andrea Esparza, Abogada de Familia
**GSC Property**: sc-domain:draandreaesparza.com

---

## Current Performance (28 days: Jan 11 - Feb 8, 2026)

### Overall
- **Total impressions**: ~126 (across all pages)
- **Total clicks**: 4
- **Average CTR**: ~3.2%
- **Devices**: Desktop 72 imp / Mobile 51 imp / Tablet 3 imp

### Per Page Breakdown

| Page | Impressions | Clicks | Avg Position |
|------|-------------|--------|-------------|
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

### Queries Detected (only 3)

| Query | Impressions | Position |
|-------|-------------|----------|
| "andrea esparza" (branded) | 21 | 6 |
| "divorcio abogados" | 1 | 91 |
| "gharar" | 1 | 2 |

**Key problem**: Zero commercial queries driving traffic. The only significant query is the branded name.

---

## CRITICAL ISSUE: SPA Rendering

When fetching the live site, both the homepage and `/servicios/divorcios-buenos-aires` returned **empty HTML shells** - no visible text content, only JSON-LD schema and tracking scripts. All page content depends on JavaScript execution.

The site uses `react-snap` for prerendering, but either:
- react-snap is not generating HTML for all routes
- The prerendered HTML is not being served by Vercel
- react-snap has compatibility issues with React 19

**Impact**: Google can render JavaScript but deprioritizes and delays it. This directly explains why the site has minimal impressions despite having quality content.

**Action required**: Verify `dist/` contains real HTML. If not, fix react-snap or migrate to a working prerender solution (React Router v7 prerendering, vite-plugin-prerender, or Next.js migration).

---

## Competitive Landscape

### Who ranks for "abogada derecho de familia buenos aires"
1. abogadadefamilia.com.ar (exact-match domain, Cecilia Olivieri)
2. quaini.com (40 years experience)
3. vilarinoabogados.com.ar
4. abogadodefamilia.com.ar (Ortemberg, 50+ years)
5. legal.com.ar (directory)

### Who ranks for "abogado familia moron" / "divorcios moron"
1. estudiojuridicodiz.com.ar (multi-location)
2. oliverabogados.com.ar (Moron specialist, "divorcio express")
3. olea.ar (Moron and Zona Oeste focus)
4. wsyasociados.com.ar (hyperlocal, mentions neighborhoods)
5. legal.com.ar (directory)

### Andrea's competitive advantage
- **Moron + Zona Oeste** where CABA-focused competitors are weaker
- **International private law / child restitution** - unique expertise nobody else has
- **Academic authority** - UBA professor, ASIME member, Instituto DIP directora adjunta
- **25+ years** of experience and 1,500+ resolved cases

---

## Recommendations: What We Can Implement in Code

### 1. Fix prerendering (HIGHEST PRIORITY)

Verify `dist/servicios/divorcios-buenos-aires/index.html` contains real HTML content. If it's an empty shell, every non-homepage URL is essentially invisible to Google.

Options if broken:
- Fix react-snap include array in package.json to cover ALL 18 sitemap URLs
- Replace react-snap with vite-plugin-prerender (Puppeteer-based, Vite-native)
- Migrate to React Router v7 which has built-in prerendering
- Nuclear option: migrate to Next.js (permanently solves SPA SEO)

### 2. Create location-specific landing pages

Competitors winning Moron searches all have hyperlocal content mentioning specific courts, neighborhoods, and local procedures. New pages needed:

- `/abogada-familia-moron` - "Abogada de Familia en Moron y Zona Oeste"
  - Mention Tribunales de Familia de Moron
  - Reference neighborhoods: Haedo, Castelar, Ituzaingo, Ramos Mejia
  - Local court procedures specific to Moron jurisdiction
- `/divorcios-moron` - targeting local divorce queries
- `/cuota-alimentaria-moron` - targeting local alimentos queries

### 3. Add Person schema for E-E-A-T

The site has LegalService and FAQPage schema but no `Person` schema for Andrea. For YMYL (Your Money Your Life) legal content, Google's E-E-A-T signals depend on author credentials.

Add Person schema with:
- `jobTitle`: "Abogada especialista en Derecho de Familia"
- `alumniOf`: Universidad de Buenos Aires
- `memberOf`: Colegio de Abogados de Moron, ASIME
- `knowsAbout`: Derecho de Familia, Divorcios, Sucesiones, DIP
- `worksFor`: reference to LegalService entity
- `sameAs`: LinkedIn URL, GBP URL

### 4. Add Article schema on academic article pages

Each article page should have `Article` schema with `author`, `datePublished`, `headline`. This helps Google recognize these as authored expert content.

### 5. Unique meta titles and descriptions per page

Each service page needs a distinct, keyword-targeted title instead of sharing the homepage title:
- Divorcios: "Abogada de Divorcios en Buenos Aires y Moron | Dra. Andrea Esparza"
- Sucesiones: "Abogada de Sucesiones en Buenos Aires | Tramites Sucesorios | Dra. Esparza"
- Alimentos: "Cuota Alimentaria - Abogada Especialista Buenos Aires | Dra. Esparza"
- Derecho Familia: "Abogada Derecho de Familia Buenos Aires y Moron | Dra. Esparza"

### 6. Improve internal linking

Academic articles getting impressions send zero traffic to service pages. Fix:
- Divorcio-internacional article -> link to `/servicios/divorcios-buenos-aires`
- Ninez/adolescencia article -> link to `/servicios/derecho-familia`
- Filiacion/reproduccion article -> link to `/servicios/derecho-familia`
- ALL articles -> link to contact/WhatsApp CTA at the bottom
- Service pages -> cross-link to related articles as "further reading"

### 7. Write blog content targeting real search queries

High-volume queries to target:
- "Cuanto cuesta un divorcio en Buenos Aires 2026"
- "Como se calcula la cuota alimentaria en Argentina"
- "Cuanto tarda una sucesion en Buenos Aires"
- "Cuanto tarda un divorcio de mutuo acuerdo"
- "Puede una madre negar regimen de comunicacion"
- "Que documentos necesito para iniciar un divorcio"
- "Violencia familiar como pedir medida de proteccion Buenos Aires"

### 8. Add hreflang tag

```html
<link rel="alternate" hreflang="es-AR" href="https://draandreaesparza.com/" />
```

Helps Google serve the site to the correct regional audience.

---

## Recommendations: What Andrea Must Do (Not Code)

### Google Business Profile (HIGH IMPACT)

1. **Set primary category** to "Abogado de familia" (not generic "Abogado")
2. **Add secondary categories**: "Abogado de divorcios", "Abogado"
3. **Add services** in GBP: Divorcios, Sucesiones, Cuota Alimentaria, Adopcion, Violencia Familiar, Restitucion Internacional de Menores
4. **Upload 10+ photos**: Office exterior, interior, professional headshot. Name files with keywords before uploading (e.g., `abogada-familia-moron-oficina.jpg`)
5. **Post weekly**: 150-word posts about family law tips, recent legal changes, FAQs
6. **Pre-populate Q&A section** with 5-8 common questions before strangers add random ones

### Google Reviews (CRITICAL)

Ask 5-10 past clients for Google reviews. Reviews mentioning services ("me ayudo con mi divorcio", "excelente en temas de cuota alimentaria") boost local rankings dramatically. Use the GBP QR code feature and share via WhatsApp.

### Directory Listings (Free Backlinks)

Register on all of these (free):

| Directory | URL | Priority |
|-----------|-----|----------|
| SoloAbogados.org | soloabogados.org/registrarme | High |
| Legal.com.ar | legal.com.ar/abogados/derecho-de-familia/moron | High |
| HG.org | hg.org/lawfirms/argentina | High (high domain authority) |
| GuiaDeAbogados.com.ar | guiadeabogados.com.ar | Medium |
| abogados.aarg.ar | abogados.aarg.ar | Medium |
| InfoIsInfo Moron | moron.infoisinfo-ar.com | Medium |
| Lawzana | lawzana.com/lawyers/argentina | Medium |

### Institutional Backlinks (Andrea's Unique Advantage)

1. **Colegio de Abogados de Moron**: Get a link from the Instituto DIP page. She is the Directora Adjunta - this should be a simple request to the web admin.
2. **UBA faculty profile**: Get her professor listing on derecho.uba.ar to link to the website.
3. **ASIME member directory**: Ensure her profile at asime.org links to draandreaesparza.com.
4. **RIDCA/REDIC publications**: Each publication should include website link in author bio.

### Content Distribution

1. **LinkedIn Articles**: Republish academic articles as LinkedIn Articles with canonical URLs pointing to draandreaesparza.com. High-authority indexed backlinks.
2. **Abogados.com.ar**: Submit articles to this platform (70,000+ newsletter subscribers).
3. **Microjuris Argentina** (aldiaargentina.microjuris.com): Legal news site, accepts expert contributions.

### Social Media

Weekly Instagram posts/Reels with legal tips (divorce process, cuota alimentaria, etc.) build awareness and drive branded searches. Branded searches reinforce Google rankings.

---

## Implementation Priority

### Immediate (this week)
1. Verify and fix prerendering in dist/
2. Add unique meta titles per service page
3. Add Person schema
4. Add hreflang tag

### Short-term (2-4 weeks)
5. Create Moron-specific landing pages
6. Improve internal linking (articles -> services)
7. Andrea: GBP optimization + request reviews
8. Andrea: Register on 5+ directories

### Medium-term (1-2 months)
9. Write 3-5 blog posts targeting specific queries
10. Andrea: Get institutional backlinks (Colegio, UBA, ASIME)
11. Andrea: Publish on LinkedIn, Abogados.com.ar
12. Add Article schema to all article pages

### Ongoing
13. Weekly GBP posts
14. Monthly blog post targeting a new query
15. Continue requesting client reviews
16. Monitor GSC for new queries appearing and optimize for them

---

## Expected Impact

- **Fixing prerendering alone** could 3-5x impressions since Google will properly index all 18 pages
- **Location-specific pages** will capture Moron/Zona Oeste queries where competition is lower
- **5+ Google reviews** typically move local pack ranking 2-3 positions up
- **Directory listings** build citation consistency and domain authority
- **Institutional backlinks** (Colegio, UBA) are high-authority .org/.edu links that competitors cannot easily replicate

The site has strong content and real professional authority. The main bottleneck is technical (SPA rendering) and local visibility (GBP + directories + reviews). Fixing these should produce meaningful results within 4-8 weeks.
