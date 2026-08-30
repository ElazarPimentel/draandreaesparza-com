import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/cuando-puede-cesar-la-cuota-alimentaria'

export const metadata: Metadata = {
  title: '¿Cuándo Puede Cesar la Cuota Alimentaria? Causales y Requisitos | Dra. Esparza',
  description:
    'La cuota alimentaria no es para toda la vida. Causales para pedir su cese: mayoría de edad con independencia económica, convivencia en pareja del beneficiario y más. Por Dra. Andrea Esparza.',
  keywords:
    'cuando cesa la cuota alimentaria, cese de cuota alimentaria, extinción cuota alimentaria, cuota alimentaria hijo mayor de edad, cese alimentos hijo mayor, como pedir el cese de la cuota alimentaria',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Cuándo Puede Cesar la Cuota Alimentaria? Causales y Requisitos',
    description:
      'Causales para el cese de la cuota alimentaria en Argentina: mayoría de edad con independencia económica, convivencia en pareja del beneficiario y otras circunstancias.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-07-12',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cuándo Puede Cesar la Cuota Alimentaria? | Dra. Esparza',
    description:
      'Causales para pedir el cese de la cuota alimentaria en Argentina y cómo se tramita.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Cuándo Puede Cesar la Cuota Alimentaria? Causales y Requisitos',
  description:
    'Causales legales para el cese de la cuota alimentaria en Argentina y el procedimiento judicial requerido para solicitarlo.',
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
  keywords: ['Cese de Cuota Alimentaria', 'Cuota Alimentaria', 'Mayoría de Edad', 'CCyCN'],
  articleSection: 'Cuota Alimentaria',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Cuándo Puede Cesar la Cuota Alimentaria?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La cuota alimentaria se corta sola cuando el hijo cumple 18 años?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No de forma automática. La obligación alimentaria hacia los hijos, conforme los arts. 658 y 662 del Código Civil y Comercial, se extiende en principio hasta los 21 años, y hasta los 25 si el hijo estudia o se capacita y no puede sostenerse por sí mismo (art. 663 CCyCN). El cese debe pedirse ante el juez, acreditando que corresponde.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si quien recibe los alimentos convive en pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si la cuota se fijó a favor del progenitor conviviente para atender gastos del hijo, o se trata de alimentos entre cónyuges/excónyuges, la nueva convivencia en pareja de quien recibe los alimentos puede ser causal para pedir el cese, según el tipo de alimentos de que se trate y las circunstancias del caso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El cese de la cuota alimentaria es automático?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El cese no opera de pleno derecho: debe ser pedido ante el juez que fijó la cuota, acompañado de las pruebas que acrediten el cambio de circunstancias (mayoría de edad e independencia económica, fin de los estudios, mejora patrimonial de quien recibe los alimentos, etc.). Mientras no haya resolución judicial, la obligación sigue vigente y su incumplimiento puede generar deuda exigible.',
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
              { label: '¿Cuándo Puede Cesar la Cuota Alimentaria?' },
            ]}
          />
          <div className="article-category">Cuota Alimentaria</div>
          <h1>¿Cuándo Puede Cesar la Cuota Alimentaria?</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Julio de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            La cuota alimentaria <strong>no es necesariamente para toda la vida</strong>. En
            muchos casos puede solicitarse judicialmente su <strong>cese</strong> cuando cambian
            las circunstancias que justificaron su fijación. El cese no es automático: debe ser
            pedido ante el juez y acompañado de pruebas que acrediten el cambio de situación.
          </p>

          <h2>Causales más frecuentes</h2>
          <p>En Argentina, las situaciones más habituales para pedir el cese son:</p>
          <ul>
            <li>
              <strong>Mayoría de edad e independencia económica:</strong> cuando el hijo alcanza
              la mayoría de edad y cuenta con recursos propios suficientes para sostenerse.
            </li>
            <li>
              <strong>Convivencia en pareja o mejora económica de quien recibe los
              alimentos:</strong> cuando quien recibe la cuota convive en pareja, mejora
              sustancialmente su situación económica, o desaparece la necesidad que originó la
              obligación.
            </li>
            <li>
              <strong>Fin de los estudios:</strong> la obligación hacia hijos mayores de edad que
              estudian se extiende, en principio, hasta los 25 años (art. 663 CCyCN), pero cesa
              si el hijo interrumpe o finaliza sus estudios y puede sostenerse por sí mismo.
            </li>
          </ul>

          <h2>El cese no es automático</h2>
          <p>
            Aun cuando se cumpla alguna de estas causales, la cuota <strong>sigue vigente</strong>{' '}
            hasta que un juez ordene su cese. Debe presentarse un pedido formal ante el juzgado
            que fijó la cuota, acompañado de pruebas que acrediten el cambio de situación:
            certificado de estudios, constancias de ingresos, informes socioambientales u otra
            documentación pertinente según el caso.
          </p>
          <p>
            Cada caso requiere un análisis particular para proteger los derechos de todas las
            partes involucradas, especialmente cuando hay hijos estudiando o situaciones de
            vulnerabilidad.
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿La cuota alimentaria se corta sola cuando el hijo cumple 18 años?</h3>
          <p>
            <strong>No.</strong> La obligación se extiende en principio hasta los 21 años, y
            hasta los 25 si el hijo estudia y no puede sostenerse por sí mismo. El cese debe
            pedirse ante el juez.
          </p>

          <h3>¿Qué pasa si quien recibe los alimentos convive en pareja?</h3>
          <p>
            Puede ser causal de cese según el tipo de alimentos y las circunstancias del caso.
          </p>

          <h3>¿El cese de la cuota alimentaria es automático?</h3>
          <p>
            <strong>No.</strong> Debe ser pedido ante el juez y acreditado con pruebas. Mientras
            no haya resolución judicial, la obligación sigue vigente.
          </p>

          <h2>Conclusión</h2>
          <p>
            Consultar a tiempo puede evitar deudas, reclamos futuros y conflictos familiares
            innecesarios. Si la situación cambió y creés que corresponde pedir el cese de la
            cuota alimentaria, es importante evaluar el caso concreto antes de dejar de pagar o
            de reclamar por cuenta propia.
          </p>
          <p>
            Si en cambio lo que necesitás es aumentar o reducir el monto de una cuota vigente,
            ver{' '}
            <TrackedLink
              href="/articulos/incidente-modificacion-cuota-alimentaria-caba-plazos"
              trackEvent="cta_click"
              trackSource="cese_cuota_to_modificacion_hub"
            >
              Incidente de Modificación de Cuota Alimentaria en CABA
            </TrackedLink>
            .
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Cuota Alimentaria</span>
            <span className="tag">Cese de Alimentos</span>
            <span className="tag">Mayoría de Edad</span>
            <span className="tag">CCyCN</span>
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
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
