import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/dip-trabajo-sentencia-venezuela'

export const metadata: Metadata = {
  title:
    'Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela - Dra. Andrea Esparza',
  description:
    'Análisis de la resolución de casos laborales con elementos internacionales en Venezuela, examinando la jurisdicción y ley aplicable en contratos de trabajo multinacionales.',
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title:
      'Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela - Dra. Andrea Esparza',
    description:
      'Análisis de la resolución de casos laborales con elementos internacionales en Venezuela, examinando la jurisdicción y ley aplicable en contratos de trabajo multinacionales.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela - Dra. Andrea Esparza',
      },
    ],
    publishedTime: '2025-03-01',
    authors: ['Dra. Andrea Esparza'],
  },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela',
  description:
    'Análisis de la resolución de casos laborales con elementos internacionales en Venezuela, examinando la jurisdicción y ley aplicable en contratos de trabajo multinacionales.',
  image: {
    '@type': 'ImageObject',
    url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2025-03-01',
  dateModified: '2025-03-01',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    url: 'https://draandreaesparza.com',
    jobTitle: 'Abogada Especialista en Derecho de Familia',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    logo: {
      '@type': 'ImageObject',
      url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
      width: 1200,
      height: 630,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': CANONICAL,
  },
  keywords:
    'derecho internacional privado del trabajo, jurisdicción laboral, contratos internacionales, Venezuela, TSJ, relación laboral internacional, DIP, RIDCA',
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela',
      item: CANONICAL,
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
                label:
                  'Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela',
              },
            ]}
          />

          <div className="article-category">Derecho Internacional Privado</div>

          <h1>
            Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de
            Justicia de Venezuela
          </h1>

          <div className="article-meta">
            <div className="author-info">
              <span className="author-name">Por Dra. Maria Andrea Esparza</span>
            </div>
            <time dateTime="2025-03-01" className="publish-date">
              Marzo de 2025
            </time>
          </div>
        </header>

        <div className="article-content">
          <div className="article-source-note">
            <p>
              <strong>Publicado originalmente en:</strong>{' '}
              <TrackedLink
                href="https://aidca.org/derecho-internacional-privado-del-trabajo-analisis-de-una-sentencia-dictada-por-el-tribunal-superior-de-justicia-de-venezuela/"
                trackEvent="publication_click"
                trackSource="dip-trabajo-venezuela-ridca-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición N&ordm; 7
              </TrackedLink>
            </p>
          </div>

          <h2>Introducción</h2>
          <p>
            Este artículo examina cómo Venezuela resuelve casos laborales con elementos internacionales. Se define el
            Derecho Internacional Privado del Trabajo como la disciplina que{' '}
            <em>
              &#8220;regula la solución de conflictos laborales surgidos entre particulares vinculados por relación
              internacional de trabajo&#8221;
            </em>
            .
          </p>
          <p>La multinacionalidad de un contrato de trabajo se determina considerando:</p>
          <ul>
            <li>Lugar de prestación de servicios</li>
            <li>Domicilios del trabajador y empleador</li>
            <li>Lugar de celebración del contrato</li>
            <li>El derecho más favorable al trabajador con vínculos razonables</li>
          </ul>

          <h2>Análisis del Caso (Expediente N&ordm; 2015-0016)</h2>

          <h3>Partes</h3>
          <ul>
            <li>
              <strong>Demandante:</strong> O.R.M.P. (trabajador)
            </li>
            <li>
              <strong>Demandadas:</strong> J.C.V. C.A. (empresa venezolana) y J.C.I. (empresa estadounidense,
              Delaware)
            </li>
          </ul>

          <h3>Hechos Relevantes</h3>
          <p>
            El trabajador prestó servicios desde mayo 1986 durante 27 años y 9 meses. Inicialmente laboró bajo
            contratación venezolana en Maracaibo, Zulia. A partir de 2001, fue trasladado a la nómina de la empresa
            estadounidense, aunque continuó desempeñando funciones relacionadas con operaciones en Venezuela.
          </p>
          <p>
            En enero 2014 se modificó su estructura salarial (reducción del 40%), configurando{' '}
            <strong>despido indirecto</strong> según legislación laboral venezolana.
          </p>

          <h3>Cuestiones de Jurisdicción</h3>
          <p>
            La demandada cuestionó la jurisdicción venezolana alegando que la relación posterior a 2001 se ejecutó en
            el extranjero bajo legislación de Pennsylvania. El Tribunal debió determinar si los tribunales venezolanos
            poseían competencia.
          </p>

          <h2>Decisión del Tribunal Superior de Justicia</h2>
          <p>
            El tribunal reconoció elementos de extranjería en la controversia, requiriendo análisis conforme al Derecho
            Internacional Privado. Aunque una empleadora residía en el extranjero, el trabajador mantuvo funciones
            vinculadas a operaciones venezolanas, fundamentando <strong>jurisdicción venezolana</strong> bajo principios
            de:
          </p>
          <ul>
            <li>Conexidad territorial</li>
            <li>Protección laboral</li>
          </ul>

          <h2>Conclusiones</h2>
          <p>
            El caso ilustra la complejidad de las relaciones laborales multinacionales y la importancia de determinar
            adecuadamente la jurisdicción competente y la ley aplicable, priorizando siempre la protección del
            trabajador como parte más débil de la relación laboral.
          </p>

          <div className="article-source-note" style={{ marginTop: '2rem' }}>
            <p>
              <strong>Cita:</strong> Esparza, M. A. (2025). Derecho Internacional Privado del Trabajo. Análisis de una
              sentencia dictada por el Tribunal Superior de Justicia de Venezuela.{' '}
              <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (7).
            </p>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional Privado</span>
            <span className="tag">Derecho Laboral</span>
            <span className="tag">Jurisprudencia</span>
            <span className="tag">Venezuela</span>
            <span className="tag">RIDCA</span>
          </div>

          <div className="author-card">
            <div className="author-details">
              <h3>Sobre la autora</h3>
              <p>
                <strong>Dra. Maria Andrea Esparza</strong>
              </p>
              <p>
                Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de 25 años de
                experiencia. Directora Adjunta del Instituto de Derecho Internacional Privado.
              </p>
              <a href="/#contact" className="contact-author-btn">
                Contactar
              </a>
            </div>
          </div>

          <div className="more-articles">
            <h3>Más publicaciones</h3>
            <a href="/#publications" className="view-all-btn">
              Ver todas las publicaciones &rarr;
            </a>
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

      <a
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20vengo%20de%20https://draandreaesparza.com%20y%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20legal."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        data-track-whatsapp="article_dip_trabajo_venezuela"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
