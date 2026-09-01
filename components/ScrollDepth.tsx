'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { track } from '@/lib/track'

/**
 * Fires `scroll_depth` at 25/50/75/90% of page scroll, once per threshold per
 * page view. GA4 enhanced measurement only reports the 90% mark, which cannot
 * distinguish a bounce-at-top from a reader who got two thirds through an
 * article — these buckets can. `page_path` is attached so reports can segment
 * by article.
 */
export default function ScrollDepth() {
  const pathname = usePathname()

  useEffect(() => {
    const thresholds = [25, 50, 75, 90]
    const fired = new Set<number>()

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return
      const pct = (window.scrollY / scrollable) * 100
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t)
          track('scroll_depth', { percent: String(t), page_path: pathname })
        }
      }
      if (fired.size === thresholds.length) {
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return null
}
