# Project Checklist

Standard requirements for all Pensanta websites. Check these when setting up or auditing a site.

---

## Analytics & Tracking

### Vercel Analytics
- [ ] **Remote enabled** - Check Vercel dashboard → Project → Analytics tab
- [ ] **Local script installed**:
  - Next.js: `pnpm add @vercel/analytics` + add `<Analytics />` component
  - HTML: `<script src="/_vercel/insights/script.js" defer></script>`

### Vercel Speed Insights
- [ ] **Remote enabled** - Check Vercel dashboard → Project → Speed Insights tab
- [ ] **Local script installed**:
  - Next.js: `pnpm add @vercel/speed-insights` + add `<SpeedInsights />` component
  - HTML: `<script src="/_vercel/speed-insights/script.js" defer></script>`

### Google Tag Manager
- [ ] GTM container ID in `.project-auto.json` (google.gtmId)
- [ ] GTM script in `<head>` and `<body>` (or via next/script)
- [ ] If no GTM: at minimum GA4 measurement ID installed

---

## Branding & Attribution

### Footer Credit
- [ ] Footer contains Pensanta/Elazar credit link:
  ```html
  <a href="https://pensanta.com" target="_blank" rel="noopener">Pensanta</a>
  ```
  or
  ```html
  <a href="https://elazarpimentel.com" target="_blank" rel="noopener">Elazar Pimentel</a>
  ```

---

## Contact Links

### WhatsApp Links
- [ ] All WhatsApp links include source tracking via `text` parameter:
  ```
  https://wa.me/5491112345678?text=Hola!%20Vengo%20de%20[DOMAIN]
  ```
  Example:
  ```html
  <a href="https://wa.me/5491112345678?text=Hola!%20Vengo%20de%20puiadentalcare.com">
  ```

### Phone Links
- [ ] Use `tel:` protocol: `<a href="tel:+5491112345678">`
- [ ] Include country code for international compatibility

### Email Links
- [ ] Use `mailto:` protocol with subject if appropriate:
  ```html
  <a href="mailto:info@domain.com?subject=Consulta%20desde%20web">
  ```

---

## SEO Basics

### Required Elements
- [ ] Unique `<title>` per page (50-60 chars)
- [ ] Meta description per page (150-160 chars)
- [ ] Single `<h1>` per page matching topic
- [ ] `sitemap.xml` exists and is valid
- [ ] `robots.txt` allows crawling
- [ ] Canonical URLs set

### Structured Data
- [ ] JSON-LD schema for business type (LocalBusiness, Dentist, etc.)
- [ ] Schema includes: name, address, phone, hours, geo coordinates

### GSC Setup
- [ ] Site added to Google Search Console
- [ ] Sitemap submitted
- [ ] Property recorded in `.project-auto.json` (google.gscProperty)

---

## How to Use

Run `python3 tools/project-info.py <folder>` to see current status.

The script detects:
- Analytics: remote vs local installation
- GTM/GA4 presence
- GSC property and SEO status

Yellow warnings = action needed. Fix items showing `local=missing` or `not found`.

---

## Quick Fixes

### Add Vercel Analytics (Next.js)
```bash
pnpm add @vercel/analytics @vercel/speed-insights
```
Then in `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// In the body:
<Analytics />
<SpeedInsights />
```

### Add Vercel Analytics (Static HTML)
Before `</body>`:
```html
<script src="/_vercel/insights/script.js" defer></script>
<script src="/_vercel/speed-insights/script.js" defer></script>
```

### Add WhatsApp Tracking
Replace:
```html
<a href="https://wa.me/5491112345678">WhatsApp</a>
```
With:
```html
<a href="https://wa.me/5491112345678?text=Hola!%20Vengo%20de%20YOURDOMAIN.com">WhatsApp</a>
```

---

*Template: tools/templates/PROJECT-CHECKLIST.md*
*Check project-info.py output for automated detection status*
