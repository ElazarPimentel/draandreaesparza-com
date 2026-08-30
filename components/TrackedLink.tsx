'use client'

import { track } from '@/lib/track'

interface TrackedLinkProps {
  href: string
  trackEvent: 'whatsapp_click' | 'publication_click' | 'cta_click'
  trackSource: string
  className?: string
  target?: string
  rel?: string
  download?: boolean
  ariaLabel?: string
  children: React.ReactNode
}

export default function TrackedLink({
  href,
  trackEvent,
  trackSource,
  className,
  target,
  rel,
  download,
  ariaLabel,
  children,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      download={download}
      aria-label={ariaLabel}
      onClick={() => track(trackEvent, { source: trackSource })}
    >
      {children}
    </a>
  )
}
