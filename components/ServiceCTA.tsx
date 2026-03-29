'use client'

import { trackWhatsapp } from '@/lib/track'

interface ServiceCTAProps {
  heading: string
  subtext: string
  waMessage: string
  trackSource: string
}

export default function ServiceCTA({ heading, subtext, waMessage, trackSource }: ServiceCTAProps) {
  const url = `https://wa.me/5491155617919?text=${encodeURIComponent(waMessage)}`
  return (
    <div className="service-cta">
      <h2>{heading}</h2>
      <p>{subtext}</p>
      <a
        href={url}
        className="cta-button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsapp(trackSource)}
      >
        Consultar por WhatsApp
      </a>
    </div>
  )
}
