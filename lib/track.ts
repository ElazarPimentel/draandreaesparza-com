declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function track(eventName: string, properties: Record<string, string>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...properties })
  }
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
