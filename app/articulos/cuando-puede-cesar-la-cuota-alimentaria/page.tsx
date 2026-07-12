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

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20quiero%20consultar%20sobre%20el%20cese%20de%20la%20cuota%20alimentaria"
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
