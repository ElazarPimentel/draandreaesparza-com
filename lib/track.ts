declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Sends the event twice, on purpose:
 *
 * 1. A GTM-style `{ event, ...props }` push, for any container tag that listens
 *    for it. Nothing in GTM-T89DRSWW currently does, which is why GA4 recorded
 *    zero `whatsapp_click` events for 90 days despite the pushes happening.
 * 2. A gtag-style push, which GA4 consumes directly with no container config.
 *
 * The gtag shim is defined here rather than relied upon from the GA4 snippet in
 * `app/layout.tsx`: that snippet is `lazyOnload`, so `window.gtag` does not
 * exist yet for a click in the first seconds. Both shims push to the same
 * `dataLayer` (initialised `beforeInteractive`), so events queued early are
 * replayed once GA4 loads.
 */
export function track(eventName: string, properties: Record<string, string>) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...properties })

  if (!window.gtag) {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  }
  window.gtag('event', eventName, properties)
}

export function trackWhatsapp(source: string) {
  track('whatsapp_click', { source })
}

export function trackPublication(source: string) {
  track('publication_click', { source })
}

export function trackCta(source: string) {
  track('cta_click', { source })
}
