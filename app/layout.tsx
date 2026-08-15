import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import '@/styles/globals.scss'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://draandreaesparza.com'),
  verification: {
    google: 'T8KNuGbfY16IxP1UShq-hnNEADB1-ajT92YbJvKzf-4',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#1a365d" />
        <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
        {/* dataLayer must exist before GTM/GA4 load so early clicks are queued, not dropped */}
        <Script id="datalayer-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
        `}</Script>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="lazyOnload">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T89DRSWW');
        `}</Script>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96WW8CDVWG"
          strategy="lazyOnload"
        />
        <Script id="ga4" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-96WW8CDVWG');
        `}</Script>
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T89DRSWW"
            height="0"
            width="0"
            className="gtm-noscript"
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
