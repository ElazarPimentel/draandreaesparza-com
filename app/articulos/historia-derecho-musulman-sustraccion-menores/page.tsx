import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title:
    'Sustracción de Menores y Derecho Musulmán: Convenio de La Haya | Dra. Esparza',
  description:
    'Caso real de sustracción internacional de menores con elementos de derecho islámico: fuentes jurídicas del Islam, Convenio de La Haya y resolución judicial en Argentina. Por Dra. Andrea Esparza.',
  keywords:
    'derecho musulmán, sustracción internacional de menores, Convenio de La Haya, historia del Islam, derecho islámico, caso Shaban-Arias Uriburu, derecho internacional privado',
  robots: { index: true, follow: true },
  alternates: {
    canonical:
      'https://draandreaesparza.com/articulos/historia-derecho-musulman-sustraccion-menores/',
    languages: {
      'es-AR':
        'https://draandreaesparza.com/articulos/historia-derecho-musulman-sustraccion-menores/',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://draandreaesparza.com/articulos/historia-derecho-musulman-sustraccion-menores/',
    title:
      'Sustracción de Menores y Derecho Musulmán: Convenio de La Haya | Dra. Esparza',
    description:
      'Caso real de sustracción internacional de menores con elementos de derecho islámico: fuentes jurídicas del Islam, Convenio de La Haya y resolución judicial en Argentina. Por Dra. Andrea Esparza.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
      },
    ],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2007-11-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Sustracción de Menores y Derecho Musulmán: Convenio de La Haya | Dra. Esparza',
    description:
      'Caso real de sustracción internacional de menores con elementos de derecho islámico: fuentes jurídicas del Islam, Convenio de La Haya y resolución judicial en Argentina. Por Dra. Andrea Esparza.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Historia del Derecho Musulmán: Caso de Sustracción Internacional de Menores (Shaban-Arias Uriburu)',
  description:
    'Análisis exhaustivo de un caso de sustracción internacional de menores que involucra derecho musulmán, explorando la historia del Islam, sus fuentes jurídicas y la aplicación del Convenio de La Haya en casos con elementos islámicos.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2007-11-15',
  dateModified: '2007-11-15',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://draandreaesparza.com/articulos/historia-derecho-musulman-sustraccion-menores/',
  },
  keywords: [
    'Derecho Internacional Privado',
    'Derecho Musulmán',
    'Sustracción de Menores',
    'Historia del Derecho',
  ],
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
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
      name: 'Publicaciones',
      item: 'https://draandreaesparza.com/#publications',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Historia del Derecho Musulmán: Caso de Sustracción Internacional de Menores',
    },
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
              {
                label: 'Historia del Derecho Musulmán: Caso Shaban-Arias Uriburu',
              },
            ]}
          />
          <div className="article-category">Derecho Internacional Privado</div>
          <h1>
            Historia del Derecho Musulmán: Caso de Sustracción Internacional de Menores
            (Shaban-Arias Uriburu)
          </h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Noviembre de 2007</span>
          </div>
          <TrackedLink
            href="/articulos/historia-del-derecho-musulm-n-caso-sustracci-n-internacional-de-menores-shaban-arias-uriburu.pdf"
            trackEvent="publication_click"
            trackSource="historia-derecho-musulman-sustraccion-menores_header"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </TrackedLink>
        </header>

        <div className="article-content">
          <h2>Introducción</h2>
          <p>
            Este trabajo aborda un caso emblemático de sustracción internacional de menores que
            presenta la particularidad de involucrar elementos del derecho musulmán. Para comprender
            adecuadamente las complejidades jurídicas del caso, es imprescindible realizar primero
            un recorrido por la historia del Islam y los fundamentos del derecho musulmán.
          </p>

          <h2>Historia del Islam y su Desarrollo Jurídico</h2>
          <p>
            El Islam surge en el siglo VII d.C. con las revelaciones del Profeta Muhammad en la
            península arábiga. El sistema jurídico islámico se desarrolló a partir de dos fuentes
            fundamentales:
          </p>
          <ul>
            <li>
              <strong>El Corán:</strong> Palabra de Dios revelada al Profeta Muhammad
            </li>
            <li>
              <strong>La Sunna:</strong> Tradiciones y prácticas del Profeta
            </li>
          </ul>

          <h3>Expansión del Islam y Desarrollo del Derecho</h3>
          <p>
            Con la rápida expansión del Islam en los siglos VII y VIII, surgió la necesidad de
            desarrollar un sistema jurídico más elaborado. Los juristas musulmanes elaboraron
            metodologías interpretativas basadas en:
          </p>
          <ul>
            <li>
              El <strong>Iy&#x3D5;ma</strong> (consenso de la comunidad)
            </li>
            <li>
              El <strong>Qiy&#x101;s</strong> (razonamiento analógico)
            </li>
          </ul>

          <h3>Las Escuelas Jurídicas (Madhahib)</h3>
          <p>Se desarrollaron cuatro escuelas jurídicas principales en el Islam suní:</p>
          <ul>
            <li>
              <strong>Hanafí:</strong> La más antigua y flexible, predominante en Turquía, Egipto y
              el subcontinente indio
            </li>
            <li>
              <strong>Malikí:</strong> Predominante en el Norte de África y partes de Arabia
            </li>
            <li>
              <strong>Shafi&apos;í:</strong> Extendida en el sudeste asiático y partes del Medio
              Oriente
            </li>
            <li>
              <strong>Hanbalí:</strong> La más conservadora, predominante en Arabia Saudita
            </li>
          </ul>

          <h2>El Derecho Musulmán y la Familia</h2>
          <p>
            El derecho de familia islámico (Ahwal al-Shakhsiyya) regula aspectos fundamentales
            como:
          </p>
          <ul>
            <li>El matrimonio y sus condiciones</li>
            <li>Los derechos y obligaciones entre esposos</li>
            <li>La disolución del matrimonio</li>
            <li>La custodia de los hijos (Hadana)</li>
            <li>Los derechos de visita y comunicación</li>
          </ul>

          <h3>La Custodia de los Hijos en el Derecho Islámico</h3>
          <p>Tradicionalmente, el derecho islámico establece reglas específicas sobre la custodia:</p>
          <ul>
            <li>Durante la primera infancia, la custodia generalmente corresponde a la madre</li>
            <li>
              Existen edades establecidas para la transferencia de custodia según la escuela jurídica
            </li>
            <li>
              Se considera el interés superior del niño (<em>maslaha al-tifl</em>)
            </li>
          </ul>

          <h2>El Caso Shaban-Arias Uriburu</h2>
          <p>
            Este caso emblemático involucra la sustracción de menores entre países con sistemas
            jurídicos diferentes, uno de ellos basado en el derecho islámico.
          </p>

          <h3>Hechos del Caso</h3>
          <p>
            El caso presenta la complejidad típica de los conflictos internacionales de familia
            donde intervienen:
          </p>
          <ul>
            <li>
              Diferentes sistemas jurídicos (civil/common law vs. derecho islámico)
            </li>
            <li>Distintas concepciones culturales sobre la familia y la crianza</li>
            <li>
              La aplicación del Convenio de La Haya de 1980 sobre Sustracción Internacional de
              Menores
            </li>
          </ul>

          <h2>El Convenio de La Haya y el Derecho Musulmán</h2>
          <p>
            El Convenio de La Haya de 1980 sobre los Aspectos Civiles de la Sustracción
            Internacional de Menores establece un mecanismo para el retorno rápido de los niños
            trasladados o retenidos ilícitamente.
          </p>

          <h3>Desafíos en la Aplicación</h3>
          <p>Cuando intervienen elementos de derecho musulmán, surgen desafíos particulares:</p>
          <ul>
            <li>Diferentes conceptos de residencia habitual</li>
            <li>Interpretación de los derechos de custodia y guarda</li>
            <li>Consideración de las excepciones del Convenio</li>
            <li>Balance entre obligaciones internacionales y normas religiosas</li>
          </ul>

          <h2>Análisis Jurídico del Caso</h2>
          <p>
            El análisis del caso Shaban-Arias Uriburu revela las complejidades de aplicar un
            instrumento internacional uniforme (el Convenio de La Haya) en contextos donde
            intervienen sistemas jurídicos con fundamentos filosóficos y religiosos diferentes.
          </p>

          <h3>Principios Aplicables</h3>
          <ul>
            <li>
              <strong>Interés superior del niño:</strong> Reconocido tanto en el derecho
              internacional como en el derecho islámico
            </li>
            <li>
              <strong>Cooperación internacional:</strong> Esencial para la efectividad del Convenio
            </li>
            <li>
              <strong>Respeto por la diversidad jurídica:</strong> Sin comprometer los derechos
              fundamentales del niño
            </li>
          </ul>

          <h2>Conclusiones</h2>
          <p>
            El estudio de casos que involucran derecho musulmán en el contexto de la sustracción
            internacional de menores demuestra:
          </p>
          <ol>
            <li>La necesidad de comprender los fundamentos históricos y jurídicos del Islam</li>
            <li>
              La importancia del diálogo intercultural en la resolución de conflictos familiares
              internacionales
            </li>
            <li>
              El desafío de armonizar diferentes sistemas jurídicos respetando los derechos humanos
              universales
            </li>
            <li>
              La relevancia del principio del interés superior del niño como puente entre sistemas
              jurídicos diversos
            </li>
          </ol>
          <p>
            El caso Shaban-Arias Uriburu constituye un precedente valioso para comprender cómo los
            tribunales pueden navegar las complejidades que surgen cuando el derecho internacional
            privado se encuentra con el derecho islámico.
          </p>

          <div className="article-full-notice">
            <h3>Artículo Completo Disponible</h3>
            <p>El artículo completo desarrolla exhaustivamente:</p>
            <ul>
              <li>Historia detallada del Islam desde sus orígenes hasta la actualidad</li>
              <li>Análisis pormenorizado de las cuatro escuelas jurídicas islámicas</li>
              <li>
                Desarrollo completo del caso Shaban-Arias Uriburu con argumentos de ambas partes
              </li>
              <li>
                Jurisprudencia comparada sobre sustracción de menores en contextos islámicos
              </li>
              <li>
                Bibliografía especializada en derecho musulmán y derecho internacional privado
              </li>
            </ul>
            <p>
              <strong>Extensión:</strong> 40+ páginas &middot; <strong>Formato:</strong> PDF &middot;{' '}
              <strong>Año:</strong> 2007
            </p>
            <TrackedLink
              href="/articulos/historia-del-derecho-musulm-n-caso-sustracci-n-internacional-de-menores-shaban-arias-uriburu.pdf"
              trackEvent="publication_click"
              trackSource="historia-derecho-musulman-sustraccion-menores_full_notice"
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar artículo completo (PDF)
            </TrackedLink>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional Privado</span>
            <span className="tag">Derecho Musulmán</span>
            <span className="tag">Sustracción de Menores</span>
            <span className="tag">Historia del Derecho</span>
          </div>

          <TrackedLink
            href="/articulos/historia-del-derecho-musulm-n-caso-sustracci-n-internacional-de-menores-shaban-arias-uriburu.pdf"
            trackEvent="publication_click"
            trackSource="historia-derecho-musulman-sustraccion-menores_footer"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </TrackedLink>

          <div className="author-card">
            <h3>Sobre la autora</h3>
            <p className="author-name">Dra. Maria Andrea Esparza</p>
            <p className="author-bio">
              Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de
              25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional
              Privado.
            </p>
            <a href="/#contact" className="contact-btn">
              Contactar
            </a>
          </div>

          <div className="more-articles">
            <h3>Más publicaciones</h3>
            <a href="/#publications">Ver todas las publicaciones</a>
          </div>

          <div className="article-service-links">
            <h3>Servicios legales relacionados</h3>
            <p>Si este tema se relaciona con su caso, puede solicitar asesoramiento en:</p>
            <ul>
              <li>
                <a href="/servicios/derecho-familia">Derecho de Familia</a>
              </li>
              <li>
                <a href="/servicios/alimentos">Juicio de Alimentos</a>
              </li>
              <li>
                <a href="/servicios/divorcios-buenos-aires">Divorcios en Buenos Aires</a>
              </li>
              <li>
                <a href="/servicios/sucesiones">Sucesiones y Herencias</a>
              </li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
