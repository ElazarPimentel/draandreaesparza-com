# TODO - draandreaesparza.com

## Completed

### AIDCA Publications (Done by CC Web)
- [x] Add 6 AIDCA articles to "Publicaciones Académicas" section
- Branch: `claude/web-version-jOajd` - ready to merge

---

## Pending Tasks

### 1. Analytics & Tracking (HIGH Priority)

#### 1.1 Create Unified Tracking Utility
Create `src/utils/analytics.js` that sends events to both Vercel Analytics AND GTM dataLayer:

```javascript
import { track } from '@vercel/analytics'

export function trackEvent(eventName, params = {}) {
  // Vercel Analytics
  track(eventName, params)

  // GTM dataLayer (for GA4)
  window.dataLayer?.push({
    event: eventName,
    ...params
  })
}
```

#### 1.2 Update Existing Tracking Calls
Replace direct `track()` calls with `trackEvent()` in:
- [ ] `src/components/WhatsAppButton.jsx`
- [ ] `src/App.jsx` (contact section)
- [ ] `src/pages/servicios/ServicePage.jsx`

#### 1.3 Add Tracking to New AIDCA Links
After merging CC Web's work, add tracking to the 6 external publication links:
```javascript
onClick={() => trackEvent('publication_click', { article: 'ridca2', source: 'aidca' })}
```

#### 1.4 Add Phone Click Tracking
Track tel: link clicks:
```javascript
onClick={() => trackEvent('phone_click', { source: 'contact_section' })}
```

---

### 2. GTM Configuration (In GTM Dashboard - MANUAL)

Login to GTM (GTM-T89DRSWW) and configure:

- [ ] Create GA4 Event Tag for `whatsapp_click`
- [ ] Create GA4 Event Tag for `phone_click`
- [ ] Create GA4 Event Tag for `publication_click`
- [ ] Set trigger: Custom Event matching event names from dataLayer

---

### 3. GA4 Conversions (In GA4 Dashboard - MANUAL)

Login to GA4 (G-96WW8CDVWG) and mark as conversions:

- [ ] `whatsapp_click` → Primary conversion
- [ ] `phone_click` → Primary conversion

---

### 4. Heatmaps (LOW Priority - Optional)

Consider adding Microsoft Clarity (free):
- Snippet: https://clarity.microsoft.com/
- Add to index.html or via GTM
- Shows: click heatmaps, scroll maps, session recordings

---

## Reference

### Current Analytics Stack
| Tool | ID | Status |
|------|-----|--------|
| GA4 | G-96WW8CDVWG | Installed |
| GTM | GTM-T89DRSWW | Installed (needs config) |
| Vercel Analytics | - | Active |
| Vercel Speed Insights | - | Active |
| Umami | pensanta-analytics | Active |
| GSC | URL-prefix | Connected |
| Google Business | 09771868979169933047 | Linked |

### Tech Stack
- Vite + React (SPA)
- SCSS styling
- Main component: src/App.jsx
