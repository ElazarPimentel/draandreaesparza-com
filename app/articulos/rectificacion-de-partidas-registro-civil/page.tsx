import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/rectificacion-de-partidas-registro-civil'

export const metadata: Metadata = {
  title: 'Rectificación de Partidas: Cómo Corregir Errores en el Registro Civil | Dra. Esparza',
  description:
    '¿Tu partida de nacimiento, matrimonio o defunción tiene un error? Cuáles se corrigen ante el Registro Civil y cuáles requieren intervención judicial, según la Ley 26.413.',
  keywords:
    'rectificación de partidas, corregir partida de nacimiento, error en el DNI, rectificación judicial de partidas, Ley 26413, errores en el registro civil, cambio de nombre partida',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Rectificación de Partidas: Cómo Corregir Errores en el Registro Civil',
    description:
      'Errores más comunes en partidas del Registro Civil, cuáles se corrigen administrativamente y cuáles requieren intervención judicial (Ley 26.413).',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-07-12',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rectificación de Partidas del Registro Civil | Dra. Esparza',
    description:
      'Cómo corregir errores en partidas de nacimiento, matrimonio o defunción en Argentina.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rectificación de Partidas: Cómo Corregir Errores en el Registro Civil',
  description:
    'Guía sobre la rectificación de partidas del Registro Civil en Argentina: errores más comunes, vía administrativa y vía judicial según la Ley 26.413.',
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
  keywords: ['Rectificación de Partidas', 'Registro Civil', 'Ley 26.413', 'Identidad'],
  articleSection: 'Derecho de Familia',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Rectificación de Partidas' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Toda rectificación de partidas requiere un juicio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Conforme el art. 85 de la Ley 26.413, cuando el error es material u omisivo y surge evidente del propio texto de la partida o de su cotejo con otros instrumentos públicos (por ejemplo, DNI, otra partida), la Dirección General del Registro Civil puede corregirlo administrativamente, sin necesidad de juicio. La vía judicial es la regla general (art. 84) para los casos que no encuadran en esa excepción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué errores se corrigen sin juicio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Típicamente errores de tipeo en nombres o apellidos, fechas mal transcriptas, o datos omitidos que surgen claramente de otros documentos públicos. Cambios que afectan el estado civil, la identidad o la filiación de la persona generalmente requieren intervención judicial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué documentación se necesita para pedir una rectificación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por lo general: la partida a rectificar, el DNI de la persona, documentación que pruebe el error (otra partida, certificado, DNI de un familiar), y en algunos casos testigos o certificados adicionales según el tipo de corrección solicitada.',
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
              { label: 'Rectificación de Partidas' },
            ]}
          />
          <div className="article-category">Derecho de Familia</div>
          <h1>Rectificación de Partidas: Corregí lo que Está Mal en el Registro Civil</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Julio de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>¿Qué es la rectificación de partidas?</h2>
          <p>
            La <strong>rectificación de partidas</strong> permite corregir errores en las actas
            del Registro Civil (nacimiento, matrimonio, defunción) y evitar problemas legales y
            administrativos que un dato mal asentado puede generar más adelante: rechazos en
            trámites, inconsistencias con el DNI, o problemas para heredar o casarse.
          </p>

          <h2>Errores más comunes</h2>
          <ul>
            <li>Nombres o apellidos mal escritos</li>
            <li>Fechas incorrectas (nacimiento, matrimonio, defunción)</li>
            <li>Errores en el número de DNI consignado</li>
            <li>Omisión de datos</li>
            <li>Cambio o adecuación de nombre o género</li>
            <li>Incorporación o corrección de filiación</li>
          </ul>

          <h2>¿Cómo se realiza? Vía administrativa vs. vía judicial</h2>
          <p>
            La <strong>Ley 26.413</strong> (Registro del Estado Civil y Capacidad de las
            Personas) establece la regla y su excepción:
          </p>
          <ul>
            <li>
              <strong>Regla general — vía judicial (art. 84):</strong> las inscripciones sólo
              pueden modificarse por orden judicial, salvo las excepciones que la propia ley
              contempla. Esto aplica especialmente cuando el cambio afecta el estado civil, la
              identidad o la filiación de la persona.
            </li>
            <li>
              <strong>Excepción — vía administrativa (art. 85):</strong> cuando la Dirección
              General comprueba errores u omisiones materiales que surgen evidentes del propio
              texto de la partida o de su cotejo con otros instrumentos públicos, puede ordenar
              la corrección de oficio o a pedido de parte, mediante resolución fundada, sin
              necesidad de un juicio.
            </li>
          </ul>
          <p>
            En la práctica: <strong>algunas rectificaciones simples pueden hacerse
            administrativamente</strong> ante el Registro Civil. <strong>Otras requieren
            intervención judicial</strong>, especialmente cuando el cambio afecta el estado
            civil o la identidad de la persona.
          </p>

          <h2>Documentación habitual</h2>
          <ul>
            <li>Partida a rectificar</li>
            <li>DNI de la persona interesada</li>
            <li>Documentación que pruebe el error (otra partida, certificado)</li>
            <li>Testigos o certificados adicionales, según el caso</li>
          </ul>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Toda rectificación de partidas requiere un juicio?</h3>
          <p>
            <strong>No.</strong> Los errores materiales evidentes pueden corregirse
            administrativamente (art. 85, Ley 26.413). La vía judicial es la regla general (art.
            84) para el resto de los casos.
          </p>

          <h3>¿Qué errores se corrigen sin juicio?</h3>
          <p>
            Errores de tipeo, fechas mal transcriptas o datos omitidos que surgen claramente de
            otros documentos públicos.
          </p>

          <h3>¿Qué documentación se necesita?</h3>
          <p>
            La partida a rectificar, el DNI, y documentación que pruebe el error, entre otros
            según el caso.
          </p>

          <h2>Conclusión</h2>
          <p>
            Un error hoy puede ser un problema mañana. Corregir a tiempo una partida protege tu
            identidad y tus derechos, y evita inconvenientes en trámites posteriores como
            sucesiones, matrimonios o gestiones migratorias. Consultanos: estamos para ayudarte.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Rectificación de Partidas</span>
            <span className="tag">Registro Civil</span>
            <span className="tag">Ley 26.413</span>
            <span className="tag">Identidad</span>
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
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
              <li><a href="/servicios/sucesiones">Sucesiones</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
