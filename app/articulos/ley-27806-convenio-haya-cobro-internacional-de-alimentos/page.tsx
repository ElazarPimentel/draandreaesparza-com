import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/ley-27806-convenio-haya-cobro-internacional-de-alimentos'

export const metadata: Metadata = {
  title: 'Ley 27.806: Argentina Aprueba el Convenio de La Haya sobre Cobro Internacional de Alimentos | Dra. Esparza',
  description:
    'Argentina aprobó la Ley 27.806, ratificando el Convenio de La Haya de 2007 sobre Cobro Internacional de Alimentos para los Niños y Otros Miembros de la Familia. Qué cambia para reclamar alimentos en el exterior.',
  keywords:
    'Ley 27806, Convenio de La Haya 2007 alimentos, cobro internacional de alimentos, reclamar alimentos en el exterior, alimentos deudor en otro país, autoridades centrales alimentos',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Ley 27.806: Argentina Aprueba el Convenio de La Haya sobre Cobro Internacional de Alimentos',
    description:
      'Argentina ratificó el Convenio de La Haya de 2007 sobre Cobro Internacional de Alimentos para los Niños y Otros Miembros de la Familia (Ley 27.806).',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-07-12',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ley 27.806: Cobro Internacional de Alimentos | Dra. Esparza',
    description:
      'Argentina ratificó el Convenio de La Haya de 2007 sobre Cobro Internacional de Alimentos.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ley 27.806: Argentina Aprueba el Convenio de La Haya sobre Cobro Internacional de Alimentos',
  description:
    'Análisis de la Ley 27.806, que aprueba el Convenio de La Haya de 2007 sobre Cobro Internacional de Alimentos para los Niños y Otros Miembros de la Familia, y su impacto práctico para reclamos de alimentos transfronterizos.',
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
  keywords: ['Ley 27.806', 'Convenio de La Haya 2007', 'Cobro Internacional de Alimentos', 'Derecho de Familia Internacional'],
  articleSection: 'Derecho de Familia Internacional',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Ley 27.806: Cobro Internacional de Alimentos' },
  ],
}

export default function Page() {
  return (
    <div className="article-page">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <ArticleNav />

      <article className="article-container">
        <header className="article-header">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Publicaciones', href: '/#publications' },
              { label: 'Ley 27.806: Cobro Internacional de Alimentos' },
            ]}
          />
          <div className="article-category">Derecho de Familia Internacional</div>
          <h1>Ley 27.806: Argentina Aprueba el Convenio de La Haya sobre Cobro Internacional de Alimentos</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Julio de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Qué se aprobó</h2>
          <p>
            El <strong>18 de junio de 2026</strong> se publicó en el Boletín Oficial la{' '}
            <strong>Ley 27.806</strong>, sancionada por el Congreso de la Nación el 20 de mayo de
            2026 y promulgada de hecho el 12 de junio de 2026. Por esta ley, Argentina{' '}
            <strong>aprueba el Convenio sobre Cobro Internacional de Alimentos para los Niños y
            Otros Miembros de la Familia</strong>, adoptado en La Haya (Países Bajos) el 23 de
            noviembre de 2007.
          </p>
          <p>
            <TrackedLink
              href="/comunicaciones/ley-27806-convenio-haya-cobro-internacional-alimentos.pdf"
              trackEvent="cta_click"
              trackSource="ley_27806_boletin_pdf"
              target="_blank"
              rel="noopener"
            >
              Ver el texto oficial publicado en el Boletín Oficial (PDF) →
            </TrackedLink>
          </p>

          <h2>Por qué importa</h2>
          <p>
            El Convenio de La Haya de 2007 crea un sistema de cooperación entre{' '}
            <strong>autoridades centrales</strong> de los países miembros para que una persona
            pueda reclamar alimentos (cuota alimentaria) cuando el deudor o el acreedor de
            alimentos vive en otro país. Hasta ahora, reclamar alimentos a alguien radicado en el
            exterior —o que un alimentante en el exterior reclame el reconocimiento de una cuota
            fijada en Argentina— dependía de acuerdos bilaterales puntuales o de trámites de
            exequátur caso por caso, mucho más lentos y costosos.
          </p>
          <p>
            Con la ratificación, Argentina se suma a la red de países que reconocen y ejecutan
            resoluciones de alimentos de manera más directa a través de las autoridades centrales
            designadas por cada Estado parte, simplificando el reconocimiento y cobro
            transfronterizo de la obligación alimentaria hacia niños y otros miembros de la
            familia.
          </p>

          <h2>A quién afecta en la práctica</h2>
          <ul>
            <li>
              Padres o madres en Argentina cuyo/a ex pareja se mudó al exterior y no paga la
              cuota alimentaria fijada acá.
            </li>
            <li>
              Personas en el exterior que necesitan que se reconozca y ejecute en Argentina una
              cuota alimentaria fijada en otro país.
            </li>
            <li>
              Familias con miembros residiendo en distintos países que necesitan coordinar el
              cobro o pago de alimentos de forma más ágil que un exequátur tradicional.
            </li>
          </ul>

          <h2>Conclusión</h2>
          <p>
            La Ley 27.806 es un desarrollo reciente y relevante para quienes atraviesan una
            situación de alimentos con un componente internacional. El mecanismo concreto de
            aplicación dependerá de la designación de la autoridad central argentina y de su
            implementación, pero la ratificación del convenio ya es un paso significativo para
            simplificar estos reclamos.
          </p>
          <p>
            <strong>¿Necesitás reclamar alimentos en otro país? Contactame 🌎⚖️</strong>
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Ley 27.806</span>
            <span className="tag">Convenio de La Haya 2007</span>
            <span className="tag">Cobro Internacional de Alimentos</span>
            <span className="tag">Derecho de Familia Internacional</span>
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
              <li><a href="/servicios/alimentos">Cuota alimentaria</a></li>
              <li><a href="/servicios/derecho-familia-internacional">Derecho de familia internacional</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20necesito%20reclamar%20alimentos%20en%20otro%20pa%C3%ADs"
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
