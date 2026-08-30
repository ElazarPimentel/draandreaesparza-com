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
    </div>
  )
}
