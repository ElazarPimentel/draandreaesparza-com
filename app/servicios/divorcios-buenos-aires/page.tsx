import { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: 'Abogada de Divorcio en CABA: Express, Mutuo Acuerdo y Contencioso | Dra. Esparza',
  description:
    'Abogada de divorcios en CABA y Buenos Aires. Divorcio express (60 días), mutuo acuerdo o contencioso. Liquidación de bienes, compensación económica, hijos. Consulta por WhatsApp.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/divorcios-buenos-aires',
    languages: {
      'es-AR': 'https://draandreaesparza.com/servicios/divorcios-buenos-aires',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/divorcios-buenos-aires',
    title: 'Abogada de Divorcio en CABA: Express, Mutuo Acuerdo y Contencioso | Dra. Esparza',
    description:
      'Abogada de divorcios en CABA y Buenos Aires. Divorcio express (60 días), mutuo acuerdo o contencioso. Liquidación de bienes y compensación económica.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogada de Divorcio en CABA: Express, Mutuo Acuerdo y Contencioso | Dra. Esparza',
    description:
      'Abogada de divorcios en CABA y Buenos Aires. Divorcio express (60 días), mutuo acuerdo o contencioso. Liquidación de bienes y compensación económica.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicio de Divorcios en Buenos Aires',
  description:
    'Abogada de divorcios en Buenos Aires para divorcio express, de mutuo acuerdo o contencioso. Liquidación de bienes, compensación económica, cuidado personal y régimen de comunicación.',
  provider: {
    '@type': 'LegalService',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
    address: { '@type': 'PostalAddress', streetAddress: 'Uruguay 651, Piso 14, Of. I', addressLocality: 'Ciudad Autónoma de Buenos Aires', addressRegion: 'Buenos Aires', postalCode: 'C1015ABM', addressCountry: 'AR' },
    telephone: '+54-9-11-5561-7919',
  },
  areaServed: {
    '@type': 'City',
    name: 'Buenos Aires',
  },
  offers: {
    '@type': 'Offer',
    description:
      'Abogada de divorcios en Buenos Aires para divorcio express, de mutuo acuerdo o contencioso. Liquidación de bienes, compensación económica, cuidado personal y régimen de comunicación.',
  },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://draandreaesparza.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: 'https://draandreaesparza.com/#specialties',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Divorcio Express y Contencioso en Buenos Aires',
      item: 'https://draandreaesparza.com/servicios/divorcios-buenos-aires',
    },
  ],
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tarda un divorcio express en Buenos Aires?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un divorcio de mutuo acuerdo puede resolverse en 3 a 6 meses aproximadamente. El divorcio contencioso puede demorar entre 6 meses y 2 años dependiendo de la complejidad del caso y la carga de trabajo del juzgado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto sale un divorcio en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los honorarios profesionales dependen de la complejidad del caso, si hay acuerdo o no entre las partes, y si hay bienes a liquidar. Solicite una consulta para obtener un presupuesto personalizado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo divorciarme sin el consentimiento de mi cónyuge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, en Argentina el divorcio puede ser solicitado por uno solo de los cónyuges sin necesidad del consentimiento del otro. Es el llamado divorcio unilateral o incausado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la compensación económica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una prestación económica que puede solicitarse cuando el divorcio produce un desequilibrio económico manifiesto que signifique un empeoramiento de la situación económica de uno de los cónyuges con relación a la del otro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito abogado para divorciarme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, en Argentina es obligatorio contar con patrocinio letrado para tramitar un divorcio, ya sea de mutuo acuerdo o contencioso. Cada parte debe tener su propio abogado.',
      },
    },
  ],
}

export default function DivorciosBuenosAiresPage() {
  return (
    <div className="service-page">
      <JsonLd data={schemaService} />
      <JsonLd data={schemaBreadcrumb} />
      <JsonLd data={schemaFaq} />

      <ServiceNav />

      <div className="service-container">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#specialties' },
            { label: 'Divorcio Express y Contencioso en Buenos Aires' },
          ]}
        />

        <header className="service-header">
          <h1>Abogada de Divorcio Express y Contencioso en Buenos Aires</h1>
          <p className="service-intro">
            Si necesita abogado para divorciarse en CABA o Buenos Aires, ofrezco asesoramiento
            integral para divorcio express, de mutuo acuerdo o contencioso. Más de 25 años de
            experiencia en derecho de familia.
          </p>
        </header>

        <div className="service-content">
          <h2>Servicios de Divorcio</h2>
          <p>
            El divorcio es una decisión importante que requiere asesoramiento legal profesional.
            Como abogada especialista en derecho de familia con más de 25 años de experiencia,
            ofrezco acompañamiento integral en todo el proceso de divorcio.
          </p>
          <p>
            Muchas búsquedas llegan con frases como <strong>necesito abogado para divorciarme</strong>{' '}
            o <strong>divorcio express CABA</strong>. Esta página está pensada justamente para
            responder esa intención: explicar opciones, tiempos, documentación y estrategia legal
            para iniciar el trámite con claridad.
          </p>

          <h3>Tipos de Divorcio</h3>
          <ul>
            <li>
              <strong>Divorcio de Mutuo Acuerdo:</strong> Cuando ambas partes están de acuerdo en
              divorciarse y en las condiciones del divorcio
            </li>
            <li>
              <strong>Divorcio Contencioso:</strong> Cuando no hay acuerdo entre las partes y se
              requiere intervención judicial
            </li>
            <li>
              <strong>Divorcio Express:</strong> Tramitación rápida cuando hay acuerdo en todos los
              aspectos
            </li>
          </ul>

          <h3>Aspectos que Abordamos</h3>
          <ul>
            <li>Liquidación de la sociedad conyugal</li>
            <li>División de bienes gananciales</li>
            <li>Compensación económica</li>
            <li>
              Cuidado personal de los hijos (antes &ldquo;tenencia&rdquo;) y régimen de
              comunicación, si corresponde
            </li>
            <li>
              Continuidad de la responsabilidad parental (antes &ldquo;patria potestad&rdquo;) tras
              el divorcio: el divorcio extingue el matrimonio, no los deberes con los hijos.{' '}
              <TrackedLink
                href="/articulos/responsabilidad-parental-patria-potestad-tenencia"
                trackEvent="cta_click"
                trackSource="divorcios_to_terminologia_hub"
              >
                Más información →
              </TrackedLink>
            </li>
            <li>Régimen de comunicación</li>
            <li>Cuota alimentaria para hijos menores</li>
            <li>Atribución de la vivienda familiar</li>
          </ul>

          <h2>Proceso de Divorcio en Argentina</h2>
          <p>
            Desde la reforma del Código Civil y Comercial, el divorcio en Argentina es más ágil.
            Ya no se requieren causales ni tiempos de separación. El proceso puede iniciarse por
            petición de uno o ambos cónyuges.
          </p>

          <h3>Documentación Necesaria</h3>
          <ul>
            <li>DNI de ambos cónyuges</li>
            <li>Acta de matrimonio</li>
            <li>Partidas de nacimiento de hijos menores (si los hay)</li>
            <li>Documentación sobre bienes de la sociedad conyugal</li>
          </ul>

          <h2>¿Por Qué Elegir Nuestro Estudio?</h2>
          <p>Más de 25 años de experiencia en derecho de familia nos permiten ofrecer:</p>
          <ul>
            <li>Asesoramiento personalizado y confidencial</li>
            <li>Tramitación ágil y eficiente</li>
            <li>Defensa de sus derechos e intereses</li>
            <li>Enfoque en soluciones justas y equitativas</li>
            <li>Atención en Buenos Aires</li>
          </ul>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes</h2>

          <div className="faq-item">
            <h3>¿Cuánto tarda un divorcio express en Buenos Aires?</h3>
            <p>
              Un divorcio de mutuo acuerdo puede resolverse en 3 a 6 meses aproximadamente. El
              divorcio contencioso puede demorar entre 6 meses y 2 años dependiendo de la
              complejidad del caso y la carga de trabajo del juzgado.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto sale un divorcio en Argentina?</h3>
            <p>
              Los honorarios profesionales dependen de la complejidad del caso, si hay acuerdo o no
              entre las partes, y si hay bienes a liquidar. Solicite una consulta para obtener un
              presupuesto personalizado.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Puedo divorciarme sin el consentimiento de mi cónyuge?</h3>
            <p>
              Sí, en Argentina el divorcio puede ser solicitado por uno solo de los cónyuges sin
              necesidad del consentimiento del otro. Es el llamado divorcio unilateral o incausado.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es la compensación económica?</h3>
            <p>
              Es una prestación económica que puede solicitarse cuando el divorcio produce un
              desequilibrio económico manifiesto que signifique un empeoramiento de la situación
              económica de uno de los cónyuges con relación a la del otro.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Necesito abogado para divorciarme?</h3>
            <p>
              Sí, en Argentina es obligatorio contar con patrocinio letrado para tramitar un
              divorcio, ya sea de mutuo acuerdo o contencioso. Cada parte debe tener su propio
              abogado.
            </p>
          </div>
        </div>

        <div className="service-related-publications">
          <h2>Publicaciones relacionadas</h2>
          <p>Lecturas recomendadas sobre casos y jurisprudencia vinculados a este servicio.</p>
          <ul>
            <li>
              <TrackedLink
                href="/articulos/conceptos-ninez-adolescencia-dip"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Revisando conceptos de niñez y adolescencia en el DIP
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/articulos/interes-superior-nino-tratados-internacionales"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Interés superior del niño vs. tratados internacionales
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/articulos/analisis-problemas-dip-divorcio-internacional"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Problemas del DIP en divorcio internacional
              </TrackedLink>
            </li>
          </ul>
        </div>

        <ServiceCTA
          heading="¿Necesita asesoramiento legal?"
          subtext="Más de 25 años de experiencia en derecho de familia y sucesiones"
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre Abogada Divorcios Buenos Aires"
          trackSource="service_cta"
        />
      </div>
    </div>
  )
}
