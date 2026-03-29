import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo - Dra. Andrea Esparza',
  description:
    'Recorrido histórico por las finanzas islámicas desde Mohammad hasta la actualidad, analizando los principios rectores del comercio en el derecho musulmán y sus instrumentos contractuales.',
  keywords:
    'derecho musulmán, finanzas islámicas, Mohammad, Corán, califato, sunismo, chiísmo, comercio islámico, RIDCA, derecho comparado',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://draandreaesparza.com/articulos/finanzas-derecho-musulman-ridca',
    languages: {
      'es-AR': 'https://draandreaesparza.com/articulos/finanzas-derecho-musulman-ridca',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://draandreaesparza.com/articulos/finanzas-derecho-musulman-ridca',
    title: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo - Dra. Andrea Esparza',
    description:
      'Recorrido histórico por las finanzas islámicas desde Mohammad hasta la actualidad, analizando los principios rectores del comercio en el derecho musulmán y sus instrumentos contractuales.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo - Dra. Andrea Esparza',
      },
    ],
    publishedTime: '2023-07-15',
    authors: ['Dra. Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo - Dra. Andrea Esparza',
    description:
      'Recorrido histórico por las finanzas islámicas desde Mohammad hasta la actualidad, analizando los principios rectores del comercio en el derecho musulmán y sus instrumentos contractuales.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo',
  description:
    'Recorrido histórico por las finanzas islámicas desde Mohammad hasta la actualidad, analizando los principios rectores del comercio en el derecho musulmán y sus instrumentos contractuales.',
  image: {
    '@type': 'ImageObject',
    url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2023-07-15',
  dateModified: '2023-07-15',
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
    '@id': 'https://draandreaesparza.com/articulos/finanzas-derecho-musulman-ridca',
  },
  keywords:
    'derecho musulmán, finanzas islámicas, Mohammad, Corán, califato, sunismo, chiísmo, comercio islámico, RIDCA, derecho comparado',
  articleSection: 'Derecho Internacional y Comparado',
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
      name: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo',
      item: 'https://draandreaesparza.com/articulos/finanzas-derecho-musulman-ridca',
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
              { label: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo' },
            ]}
          />

          <div className="article-category">Derecho Internacional y Comparado</div>

          <h1>Finanzas en el Derecho Musulmán. Un viaje en el tiempo</h1>

          <div className="article-meta">
            <div className="author-info">
              <span className="author-name">Por Dra. Maria Andrea Esparza</span>
            </div>
            <time dateTime="2023-07-15" className="publish-date">
              15 de Julio de 2023
            </time>
          </div>
        </header>

        <div className="article-content">
          <div className="article-source-note">
            <p>
              <strong>Publicado originalmente en:</strong>{' '}
              <TrackedLink
                href="https://aidca.org/ridca3-internacional7/"
                trackEvent="publication_click"
                trackSource="finanzas-derecho-musulman-ridca_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición N&ordm; 3
              </TrackedLink>
            </p>
          </div>

          <h2>Introducción</h2>
          <p>
            Este artículo examina las finanzas dentro del marco jurídico islámico. Se propone un
            recorrido histórico que comienza con Mohammad y el surgimiento del Corán como fuente del
            derecho, seguido de un análisis de las características particulares del comercio y las
            finanzas islámicas, incluyendo sus principios rectores y principales instrumentos
            contractuales.
          </p>

          <h2>Vida de Mohammad</h2>
          <p>
            Mohammad nació entre 570-580 d.C. en La Meca, de una familia de comerciantes Quraish.
            Huérfano desde temprana edad, fue criado por su abuelo y tío. Se casó con Jadiya, una
            viuda comerciante, administrando sus negocios hasta que, alrededor de los 40 años,
            experimentó lo que sus seguidores denominan &ldquo;la Noche del Poder&rdquo;, cuando
            afirmó recibir mensajes divinos que constituirían el Corán.
          </p>
          <p>
            Sus enseñanzas enfatizaban la sumisión a la voluntad divina, la plegaria regular y la
            benevolencia. Gradualmente acumuló seguidores, aunque enfrentó resistencia de las élites
            locales. En 622 d.C., debido a la persecución, Mohammad emigró a Medina (hégira),
            marcando el inicio de la era musulmana. En 630 ocupó La Meca sin resistencia,
            consolidando su autoridad. Falleció en 632 sin designar sucesor explícito.
          </p>

          <h2>Desarrollo del Califato</h2>
          <p>
            Tras la muerte del Profeta, Abu Bakr fue elegido como primer califa. Posteriormente,
            Omar expandió significativamente el territorio islámico conquistando regiones del Imperio
            sasánida y bizantino. Utmán continuó las conquistas pero su nepotismo generó tensiones
            internas que culminaron en su asesinato.
          </p>
          <p>
            Alí ibn Abi Talib asumió el poder pero enfrentó desafíos de Muawiyya en Siria, quien
            finalmente se proclamó califa, iniciando la dinastía Omeya donde el cargo se volvió
            hereditario.
          </p>

          <h2>Estructura Política y Social</h2>
          <p>
            Los Abasíes (desde 749) trasladaron la capital a Bagdad, creando una administración más
            sistemática. Posteriormente, el poder se descentralizó en dinastías locales como los
            Fatimíes en Egipto (969), Samaníes en Jorasán y otros.
          </p>
          <p>
            Para fines del siglo X, el mundo islámico permanecía dividido políticamente pero
            compartía una{' '}
            <em>
              &ldquo;cultura religiosa común, una lengua común &ndash;el árabe-&rdquo;
            </em>{' '}
            y vínculos comerciales significativos. La invasión mongola del siglo XIII terminó el
            califato abasí en 1258, fragmentando aún más la región.
          </p>

          <h2>División Religiosa: Sunismo y Chiísmo</h2>
          <p>Emergieron dos ramificaciones principales:</p>
          <ul>
            <li>
              <strong>Sunnitas:</strong> Aceptan el Corán, la Sunna (práctica profética), hadith
              (tradición) y consenso comunitario.
            </li>
            <li>
              <strong>Chiítas:</strong> Reconocen al imán como única autoridad legítima, siendo
              descendiente directo del Profeta.
            </li>
          </ul>

          <h2>Conclusiones</h2>
          <p>
            El derecho musulmán y sus instituciones financieras representan un sistema
            jurídico-religioso único que ha evolucionado a lo largo de siglos, manteniendo
            principios fundamentales mientras se adapta a las realidades del comercio contemporáneo.
          </p>

          <div className="article-source-note" style={{ marginTop: '2rem' }}>
            <p>
              <strong>Cita:</strong> Esparza, M. A. (2023). Finanzas en el Derecho Musulmán. Un
              viaje en el tiempo. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>
              , (3).
            </p>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional</span>
            <span className="tag">Derecho Musulmán</span>
            <span className="tag">Finanzas Islámicas</span>
            <span className="tag">Historia del Derecho</span>
            <span className="tag">RIDCA</span>
          </div>

          <div className="author-card">
            <div className="author-details">
              <h3>Sobre la autora</h3>
              <p>
                <strong>Dra. Maria Andrea Esparza</strong>
              </p>
              <p>
                Especialista en derecho de familia, sucesiones y derecho internacional privado. Más
                de 25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional
                Privado.
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
    </div>
  )
}
