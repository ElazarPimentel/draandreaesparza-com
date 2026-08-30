import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/articulo-651-codigo-civil-cuidado-compartido'

export const metadata: Metadata = {
  title: 'Art. 651 CCyC Explicado: Cuidado Compartido como Regla | Dra. Esparza',
  description:
    'Artículo 651 del Código Civil y Comercial explicado: el cuidado personal compartido con modalidad indistinta es la primera alternativa del juez. Qué significa y cuándo no aplica.',
  keywords:
    'art 651 codigo civil y comercial, articulo 651 ccyc, cuidado compartido, cuidado personal compartido, modalidad indistinta, modalidad alternada, tenencia compartida',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Artículo 651 del Código Civil y Comercial Explicado: Cuidado Compartido como Regla',
    description:
      'Texto completo del art. 651 CCyC y explicación práctica: por qué el cuidado compartido indistinto es la regla y cuándo cede.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art. 651 CCyC Explicado: Cuidado Compartido | Dra. Esparza',
    description:
      'El cuidado personal compartido con modalidad indistinta como primera alternativa del juez: qué significa y cuándo no aplica.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Artículo 651 del Código Civil y Comercial Explicado: Cuidado Compartido como Regla',
  description:
    'Texto y explicación práctica del artículo 651 del Código Civil y Comercial argentino: el cuidado personal compartido con modalidad indistinta como primera alternativa judicial, y las excepciones.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-08-15',
  dateModified: '2026-08-15',
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
  keywords: ['Artículo 651', 'Código Civil y Comercial', 'Cuidado Compartido', 'Modalidad Indistinta'],
  articleSection: 'Cuidado Personal',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Artículo 651 CCyC Explicado' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué dice el artículo 651 del Código Civil y Comercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Que a pedido de uno o ambos progenitores, o de oficio, el juez debe otorgar como primera alternativa el cuidado compartido del hijo con la modalidad indistinta, excepto que no sea posible o resulte perjudicial para el hijo. El cuidado compartido es la regla legal; el unilateral, la excepción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre modalidad indistinta y alternada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En la modalidad indistinta el hijo reside de manera principal en el domicilio de uno de los progenitores, pero ambos comparten las decisiones y las tareas de cuidado. En la alternada, el hijo pasa períodos de tiempo con cada uno (por ejemplo semanas alternadas). El Código prefiere la indistinta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El cuidado compartido elimina la cuota alimentaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No automáticamente. Ambos progenitores deben sostener a los hijos conforme a su condición y fortuna (art. 658). Si los ingresos o los tiempos de cuidado son dispares, subsiste una cuota a cargo del progenitor con mayor capacidad económica.',
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
              { label: 'Artículo 651 CCyC Explicado' },
            ]}
          />
          <div className="article-category">Cuidado Personal</div>
          <h1>Art. 651 del Código Civil y Comercial Explicado: el Cuidado Compartido como Regla</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Texto del artículo 651</h2>
          <blockquote>
            <p>
              <strong>ARTÍCULO 651.- Reglas generales.</strong> A pedido de uno o ambos
              progenitores o de oficio, el juez debe otorgar, como primera alternativa, el cuidado
              compartido del hijo con la modalidad indistinta, excepto que no sea posible o
              resulte perjudicial para el hijo.
            </p>
          </blockquote>

          <h2>Qué significa en la práctica</h2>
          <p>
            Desde 2015, la ley argentina invirtió el esquema histórico: el{' '}
            <strong>cuidado compartido es la regla</strong> y el{' '}
            <a href="/articulos/articulo-653-codigo-civil-cuidado-personal-unilateral">
              unilateral (art. 653)
            </a>{' '}
            la excepción. El juez <strong>debe</strong>, no &ldquo;puede&rdquo;, otorgar el
            compartido como primera alternativa, incluso de oficio, aunque uno de los progenitores
            pida la exclusividad.
          </p>
          <p>Las dos modalidades del cuidado compartido (art. 650):</p>
          <ul>
            <li>
              <strong>Indistinta (la preferida por la ley):</strong> el hijo reside de manera
              principal en el domicilio de uno, pero <strong>ambos comparten las decisiones</strong>{' '}
              y se distribuyen de modo equitativo las tareas de cuidado. No exige partir el tiempo
              en mitades.
            </li>
            <li>
              <strong>Alternada:</strong> el hijo pasa períodos con cada progenitor (semanas o
              quincenas alternadas), según la organización familiar.
            </li>
          </ul>

          <h2>Cuándo cede la regla</h2>
          <p>El compartido se descarta solo si <strong>no es posible o perjudica al hijo</strong>:</p>
          <ul>
            <li>Violencia familiar acreditada (denuncias, medidas perimetrales)</li>
            <li>Gran distancia entre los domicilios de los progenitores</li>
            <li>Desinterés real o abandono de uno de los progenitores</li>
            <li>Adicciones o problemas de salud mental no tratados que pongan en riesgo al hijo</li>
          </ul>
          <p>
            En esos supuestos el juez pasa al cuidado unilateral y pondera los criterios del art.
            653. La carga de demostrar que el compartido perjudica al hijo pesa sobre quien lo
            afirma.
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿&ldquo;Cuidado compartido&rdquo; es lo mismo que &ldquo;tenencia compartida&rdquo;?</h3>
          <p>
            En el lenguaje corriente, sí: &ldquo;tenencia&rdquo; era el término del Código
            anterior. Hoy la figura legal es el <strong>cuidado personal compartido</strong>,
            dentro de la responsabilidad parental. Explicamos el cambio terminológico completo en{' '}
            <a href="/articulos/responsabilidad-parental-patria-potestad-tenencia">
              responsabilidad parental, patria potestad y tenencia
            </a>.
          </p>

          <h3>¿Compartido significa 50 y 50 de tiempo?</h3>
          <p>
            No necesariamente. La modalidad indistinta, que es la preferida, admite que el hijo
            resida principalmente con uno mientras ambos comparten decisiones y tareas. El reparto
            del tiempo se organiza según la vida real de la familia.
          </p>

          <h3>¿Con cuidado compartido igual se paga cuota alimentaria?</h3>
          <p>
            Puede subsistir: ambos deben sostener a los hijos{' '}
            <strong>conforme a su condición y fortuna</strong> (
            <a href="/articulos/articulo-658-codigo-civil-obligacion-alimentaria">art. 658</a>). Si
            los ingresos son dispares, el de mayor capacidad económica paga una cuota aunque el
            tiempo de cuidado sea similar.
          </p>

          <h2>Conclusión</h2>
          <p>
            El art. 651 CCyC ordena al juez partir del <strong>cuidado compartido con modalidad
            indistinta</strong>. Quien pretenda la exclusividad debe probar que el compartido no es
            posible o daña al hijo; quien la enfrente, que puede sostener el vínculo y la
            coparentalidad. En ambos escenarios, la prueba lo es todo.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Artículo 651</span>
            <span className="tag">Código Civil y Comercial</span>
            <span className="tag">Cuidado Compartido</span>
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
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/articulos/articulo-653-codigo-civil-cuidado-personal-unilateral">Art. 653 CCyC: cuidado personal unilateral</a></li>
              <li><a href="/servicios/alimentos">Juicio de alimentos</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
