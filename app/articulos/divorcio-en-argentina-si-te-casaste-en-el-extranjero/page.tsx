import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/divorcio-en-argentina-si-te-casaste-en-el-extranjero'

export const metadata: Metadata = {
  title: '¿Te Casaste en el Extranjero y tu Cónyuge Vive en Argentina? Podés Divorciarte Acá | Dra. Esparza',
  description:
    'Si te casaste en el extranjero y tu cónyuge se trasladó a Argentina, en muchos casos podés iniciar el divorcio en tribunales argentinos. Jurisdicción y requisitos según el CCyCN.',
  keywords:
    'divorciarme en argentina casado en el exterior, divorcio matrimonio celebrado en el extranjero, jurisdicción internacional divorcio, domicilio conyugal efectivo, divorcio cónyuge en argentina',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Te Casaste en el Extranjero y tu Cónyuge Vive en Argentina? Podés Divorciarte Acá',
    description:
      'Jurisdicción internacional para divorciarse en Argentina cuando el matrimonio se celebró en el exterior y uno de los cónyuges reside en el país (art. 2621 CCyCN).',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-07-12',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Podés Divorciarte en Argentina si te Casaste en el Extranjero? | Dra. Esparza',
    description:
      'Jurisdicción internacional para divorciarse en Argentina cuando el matrimonio se celebró en el exterior.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Te Casaste en el Extranjero y tu Cónyuge Vive en Argentina? Podés Divorciarte Acá',
  description:
    'Requisitos de jurisdicción internacional para iniciar el divorcio en Argentina cuando el matrimonio fue celebrado en el exterior, según el art. 2621 del Código Civil y Comercial.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-07-12',
  dateModified: '2026-07-12',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    jobTitle: 'Abogada Especialista en Derecho de Familia',
    url: 'https://draandreaesparza.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  keywords: ['Divorcio Internacional', 'Jurisdicción Internacional', 'Art. 2621 CCyCN', 'Matrimonio Extranjero'],
  articleSection: 'Divorcios Internacionales',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Podés Divorciarte en Argentina si te Casaste en el Extranjero?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puedo divorciarme en Argentina si me casé en otro país?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, en muchos casos. El art. 2621 del Código Civil y Comercial establece que son competentes los jueces del último domicilio conyugal efectivo o los del domicilio o residencia habitual del cónyuge demandado. Si tu cónyuge vive en Argentina, o el último domicilio conyugal efectivo estuvo en el país, los tribunales argentinos pueden ser competentes aunque el matrimonio se haya celebrado en el exterior.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Argentina reconoce un matrimonio celebrado en el extranjero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, como regla general. El art. 2622 CCyCN establece que la existencia y validez del matrimonio se rigen por el derecho del lugar de celebración. El reconocimiento se deniega solo si se configura alguno de los impedimentos previstos en la ley argentina (por ejemplo, matrimonio anterior subsistente).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué ley se aplica al divorcio si el matrimonio fue en el exterior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Determinar la ley aplicable y el tribunal competente requiere analizar el caso concreto: dónde estuvo el último domicilio conyugal efectivo, dónde vive cada cónyuge, y si hay bienes o hijos en distintos países. Por eso cada situación internacional necesita una estrategia específica.',
      },
    },
  ],
}

export default function Page() {
  return (
    <div className="article-page">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <ArticleNav />

      <article className="article-container">
        <header className="article-header">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Publicaciones', href: '/#publications' },
              { label: '¿Podés Divorciarte en Argentina si te Casaste en el Extranjero?' },
            ]}
          />
          <div className="article-category">Divorcios Internacionales</div>
          <h1>¿Te Casaste en el Extranjero y tu Cónyuge se Trasladó a Argentina? Podés Divorciarte Acá</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Julio de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            Sí: en Argentina podés iniciar tu divorcio <strong>aunque el matrimonio se haya
            celebrado en el extranjero</strong>, siempre que se cumplan ciertos requisitos
            legales de jurisdicción internacional. Si te casaste en el país donde seguís
            viviendo y tu cónyuge se trasladó a Argentina, esto puede habilitar la competencia de
            los tribunales argentinos.
          </p>

          <h2>¿Qué jueces son competentes?</h2>
          <p>
            El <strong>art. 2621 del Código Civil y Comercial</strong> establece que las acciones
            de validez, nulidad y disolución del matrimonio, así como las referidas a sus
            efectos, deben interponerse ante:
          </p>
          <ul>
            <li>los jueces del <strong>último domicilio conyugal efectivo</strong>, o</li>
            <li>los jueces del <strong>domicilio o residencia habitual del cónyuge
            demandado</strong>.</li>
          </ul>
          <p>
            En la práctica, esto significa que si tu cónyuge vive actualmente en Argentina —
            aunque el matrimonio se haya celebrado en otro país y vos sigas residiendo allá — los
            tribunales argentinos pueden tener competencia para tramitar el divorcio.
          </p>

          <h2>¿Argentina reconoce el matrimonio celebrado en el exterior?</h2>
          <p>
            Sí, como regla general. El <strong>art. 2622 CCyCN</strong> dispone que la capacidad
            de las personas para contraer matrimonio, la forma del acto, su existencia y validez
            se rigen por el <strong>derecho del lugar de celebración</strong>. Argentina no
            reconoce un matrimonio extranjero solo si se configura alguno de los impedimentos
            previstos por la ley argentina (por ejemplo, un matrimonio anterior subsistente de
            alguno de los cónyuges).
          </p>

          <h2>Qué se analiza en estos casos</h2>
          <ul>
            <li>
              <strong>Validez del matrimonio extranjero:</strong> se analiza la validez legal del
              matrimonio celebrado en el exterior conforme el derecho del lugar de celebración.
            </li>
            <li>
              <strong>Competencia judicial:</strong> se determina qué país y qué tribunal tiene
              jurisdicción según el domicilio conyugal efectivo y el domicilio del cónyuge
              demandado.
            </li>
            <li>
              <strong>Ley aplicable:</strong> se identifica qué ley regirá el divorcio y la
              división de bienes.
            </li>
            <li>
              <strong>Bienes en distintos países:</strong> se protegen los derechos sobre bienes,
              cuentas y patrimonios en el exterior.
            </li>
          </ul>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Puedo divorciarme en Argentina si me casé en otro país?</h3>
          <p>
            <strong>Sí</strong>, en muchos casos, si tu cónyuge vive en Argentina o el último
            domicilio conyugal efectivo estuvo en el país (art. 2621 CCyCN).
          </p>

          <h3>¿Argentina reconoce un matrimonio celebrado en el extranjero?</h3>
          <p>
            <strong>Sí</strong>, como regla general, según el derecho del lugar de celebración
            (art. 2622 CCyCN), salvo impedimentos previstos por la ley argentina.
          </p>

          <h3>¿Qué ley se aplica al divorcio?</h3>
          <p>
            Depende del caso concreto: domicilio conyugal efectivo, residencia de cada cónyuge y
            existencia de bienes o hijos en distintos países.
          </p>

          <h2>Conclusión</h2>
          <p>
            Tu historia merece respeto y tus derechos merecen soluciones concretas. Si te casaste
            en el extranjero y tu cónyuge está en Argentina, no asumas que tenés que litigar en
            otro país: consultá tu caso y evaluemos la mejor estrategia sin errores costosos.
          </p>
          <p>
            Ver también:{' '}
            <TrackedLink
              href="/articulos/analisis-problemas-dip-divorcio-internacional"
              trackEvent="cta_click"
              trackSource="divorcio_extranjero_to_dip_hub"
            >
              Análisis de problemas de DIP en el divorcio internacional
            </TrackedLink>
            .
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Divorcio Internacional</span>
            <span className="tag">Jurisdicción Internacional</span>
            <span className="tag">Art. 2621 CCyCN</span>
            <span className="tag">Matrimonio Extranjero</span>
          </div>

          <div className="author-card">
            <h3>Sobre la autora</h3>
            <p className="author-name">Dra. Maria Andrea Esparza</p>
            <p className="author-bio">
              Especialista en derecho de familia, sucesiones y derecho internacional privado. Más
              de 25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional
              Privado.
            </p>
            <a href="/#contact" className="contact-btn">Contactar</a>
          </div>

          <div className="article-service-links">
            <h3>Servicios legales relacionados</h3>
            <p>Si esta situación se relaciona con su caso, puede solicitar asesoramiento en:</p>
            <ul>
              <li><a href="/servicios/divorcios-buenos-aires">Divorcios en Buenos Aires</a></li>
              <li><a href="/servicios/derecho-familia-internacional">Derecho de familia internacional</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20cas%C3%A9%20en%20el%20exterior%2C%20quiero%20consultar%20sobre%20divorciarme%20en%20Argentina"
        trackEvent="whatsapp_click"
        trackSource="whatsapp_float"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Contactar por WhatsApp">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </TrackedLink>
    </div>
  )
}
