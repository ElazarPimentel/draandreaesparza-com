import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: '¿Qué es un Sharia Board? Agencias de Ley Islámica y Fatwas | Dra. Esparza',
  description:
    '¿Qué es un Sharia board y cómo funcionan las agencias de ley islámica? Fatwas, opinion shopping y estandarización del derecho musulmán en las finanzas, explicados por una especialista.',
  keywords:
    'ley islámica, Sharia boards, fatawa, opinion shopping, finanzas islámicas, agencias especializadas, derecho musulmán, derecho comparado',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://draandreaesparza.com/articulos/agencias-especializadas-ley-islamica',
    languages: {
      'es-AR': 'https://draandreaesparza.com/articulos/agencias-especializadas-ley-islamica',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://draandreaesparza.com/articulos/agencias-especializadas-ley-islamica',
    title: '¿Qué es un Sharia Board? Agencias de Ley Islámica y Fatwas | Dra. Esparza',
    description:
      '¿Qué es un Sharia board y cómo funcionan las agencias de ley islámica? Fatwas, opinion shopping y estandarización del derecho musulmán en las finanzas, explicados por una especialista.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
        alt: '¿Qué es un Sharia Board? Agencias de Ley Islámica y Fatwas | Dra. Esparza',
      },
    ],
    publishedTime: '2024-09-27',
    authors: ['Dra. Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es un Sharia Board? Agencias de Ley Islámica y Fatwas | Dra. Esparza',
    description:
      'Análisis de las agencias y comités de expertos (Sharia boards) en el tráfico financiero islámico.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agencias Especializadas en Ley Islámica',
  description:
    '¿Qué es un Sharia board y cómo funcionan las agencias de ley islámica? Fatwas, opinion shopping y estandarización del derecho musulmán en las finanzas, explicados por una especialista.',
  image: {
    '@type': 'ImageObject',
    url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2024-09-27',
  dateModified: '2024-09-27',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    url: 'https://draandreaesparza.com',
    jobTitle: 'Abogada Especialista en Derecho de Familia',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Revista Internacional Personalidades Jurídicas',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://draandreaesparza.com/articulos/agencias-especializadas-ley-islamica',
  },
  isPartOf: {
    '@type': 'PublicationVolume',
    name: 'Revista Internacional Personalidades Jurídicas',
    volumeNumber: '1',
    datePublished: '2024-09-27',
  },
  keywords:
    'ley islámica, Sharia boards, fatawa, opinion shopping, finanzas islámicas, agencias especializadas, derecho musulmán',
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
      name: 'Agencias Especializadas en Ley Islámica',
      item: 'https://draandreaesparza.com/articulos/agencias-especializadas-ley-islamica',
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
              { label: 'Agencias Especializadas en Ley Islámica' },
            ]}
          />

          <div className="article-category">Derecho Internacional y Comparado</div>
          <h1>¿Qué es un Sharia Board? Las Agencias Especializadas en Ley Islámica</h1>

          <div className="article-meta">
            <span className="article-author">Por Dra. Andrea Esparza</span>
            <span className="article-date">Septiembre 2024</span>
            <span className="article-source">Revista Internacional Personalidades Jurídicas, Vol. 1</span>
          </div>
        </header>

        <div className="article-content">
          <p>
            Esta práctica de recurrir a expertos ha generado cierta inseguridad jurídica en el tráfico financiero, dado que no hay uniformidad de criterios debido a las diferentes tradiciones islámicas.
          </p>

          <p>
            Se ha dicho que esa diversidad de criterios que agencias, juntas, expertos en la ley islámica exponen ha llevado al desarrollo de ciertas prácticas de mercado propias de Oriente Medio y del Sudeste Asiático, las que no reflejan la opinión unánime de todos los operadores que actúan en esos mercados.
          </p>

          <blockquote>
            <p>
              &ldquo;Los operadores del tráfico financiero tienden a localizar la &lsquo;lógica interna&rsquo; del derecho financiero islámico en la selección de normas procedentes de las cuatro escuelas de pensamiento suníes que se reputan compatibles con la práctica financiera convencional, mientras que los órganos normativos más respetados en el tráfico financiero son las agencias privadas de expertos islámicos. Los sectores más críticos reprochan, muy especialmente, la falta de alineamiento de esta forma de hacer finanzas con los intereses de las clases desfavorecidas del mundo islámico.&rdquo;
            </p>
          </blockquote>

          <h2>Las fatawa y la confidencialidad</h2>

          <p>
            Las fatawa suelen estar sujetas a obligaciones de confidencialidad, lo que obstaculiza el desarrollo y generalización de prácticas comerciales en los mercados financieros islámicos.
          </p>

          <h2>Opinion shopping</h2>

          <p>
            Existe la posibilidad de la llamada &ldquo;opinion shopping&rdquo;, consistente en consultar a determinados expertos que se conozcan por su inclinación a aprobar operaciones de ciertas características, que tal vez otro u otros no autorizarían. Es decir, la práctica conlleva la posibilidad de manipular los resultados de autorizaciones según el criterio de cada experto.
          </p>

          <h2>Sharia boards: estandarización de buenas prácticas</h2>

          <p>
            Hace un tiempo a esta parte, para contrarrestar la inseguridad y el abuso señalados, se crearon comités de expertos (Sharia boards) en diferentes instituciones a fin de estandarizar y generalizar las buenas prácticas islámicas, dotando a estas instituciones ya de una amplia reputación en la práctica financiera.
          </p>

          <h2>Referencias</h2>

          <ol className="article-references">
            <li>
              <a href="https://es.wikipedia.org/wiki/Fetua" target="_blank" rel="noopener noreferrer">
                Fetua — Wikipedia
              </a>
            </li>
            <li>
              El Derecho Financiero Islámico Y Su Designación Como &lsquo;Ley Aplicable&rsquo; En Contratos De Financiación (Islamic Finance: Shari&rsquo;a As Applicable Law to Islamic Financing Schemes)
            </li>
            <li>
              Bruno Martín Baumeister, <em>Finanzas islámicas: Instrumentos financieros compatibles con la Sharía: ¿una práctica bancaria emergente?</em>{' '}
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2870282" target="_blank" rel="noopener noreferrer">
                SSRN
              </a>
            </li>
          </ol>

          <div className="article-citation">
            <h3>Cómo citar</h3>
            <p>
              Esparza, M. A., &ldquo;Agencias Especializadas en Ley Islámica&rdquo;, in <em>Revista Internacional Personalidades Jurídicas</em>, v.1. Brasília: Revista Internacional Personalidades Jurídicas, 2024, pp. 45-46.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
