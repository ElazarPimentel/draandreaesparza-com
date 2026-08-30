import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/articulo-653-codigo-civil-cuidado-personal-unilateral'

export const metadata: Metadata = {
  title: 'Art. 653 CCyC Explicado: Cuidado Personal Unilateral | Dra. Esparza',
  description:
    'Artículo 653 del Código Civil y Comercial explicado: cuándo el juez otorga el cuidado personal unilateral (unipersonal), qué pondera y qué es el deber de colaboración.',
  keywords:
    'art 653 codigo civil y comercial, articulo 653 ccyc, cuidado personal unilateral codigo civil, cuidado unipersonal, deber de colaboración, tenencia exclusiva',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Artículo 653 del Código Civil y Comercial Explicado: Cuidado Personal Unilateral',
    description:
      'Texto completo del art. 653 CCyC y explicación práctica: cuándo procede el cuidado unipersonal y qué pondera el juez.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art. 653 CCyC Explicado: Cuidado Personal Unilateral | Dra. Esparza',
    description:
      'Cuándo el juez otorga el cuidado personal unilateral y qué factores pondera según el art. 653 del Código Civil y Comercial.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Artículo 653 del Código Civil y Comercial Explicado: Cuidado Personal Unilateral',
  description:
    'Texto y explicación práctica del artículo 653 del Código Civil y Comercial argentino: el supuesto excepcional del cuidado personal unipersonal, los factores que pondera el juez y el deber de colaboración del otro progenitor.',
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
  keywords: ['Artículo 653', 'Código Civil y Comercial', 'Cuidado Personal Unilateral', 'Cuidado Unipersonal'],
  articleSection: 'Cuidado Personal',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Artículo 653 CCyC Explicado' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué dice el artículo 653 del Código Civil y Comercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regula el cuidado personal unilateral como supuesto excepcional: cuando el cuidado del hijo deba ser unipersonal, el juez pondera la prioridad del progenitor que facilita el trato con el otro, la edad del hijo, su opinión y el mantenimiento de su centro de vida. El otro progenitor conserva el derecho y el deber de colaboración.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Unilateral y unipersonal son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El Código usa ambos términos para la misma modalidad: el hijo convive principalmente con un solo progenitor. En el lenguaje corriente también se la llama "tenencia exclusiva", aunque "tenencia" ya no es el término legal.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién tiene prioridad para el cuidado unilateral, la madre o el padre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ninguno por su género. El primer criterio del art. 653 es la prioridad del progenitor que mejor facilita el vínculo del hijo con el otro. La preferencia materna automática desapareció con el Código de 2015: madre o padre pueden obtener el cuidado unilateral si es lo mejor para el hijo.',
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
              { label: 'Artículo 653 CCyC Explicado' },
            ]}
          />
          <div className="article-category">Cuidado Personal</div>
          <h1>Art. 653 del Código Civil y Comercial Explicado: Cuidado Personal Unilateral</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Texto del artículo 653</h2>
          <blockquote>
            <p>
              <strong>ARTÍCULO 653.- Cuidado personal unilateral. Deber de colaboración.</strong>{' '}
              En el supuesto excepcional en el que el cuidado personal del hijo deba ser
              unipersonal, el juez debe ponderar: a) la prioridad del progenitor que facilita el
              derecho a mantener trato regular con el otro; b) la edad del hijo; c) la opinión del
              hijo; d) el mantenimiento de la situación existente y respeto del centro de vida del
              hijo. El otro progenitor tiene el derecho y el deber de colaboración con el
              conviviente.
            </p>
          </blockquote>

          <h2>Qué significa en la práctica</h2>
          <p>
            El punto de partida del Código es el <strong>cuidado compartido</strong> (
            <a href="/articulos/articulo-651-codigo-civil-cuidado-compartido">art. 651</a>): el
            cuidado <strong>unilateral o unipersonal</strong>, lo que antes se llamaba{' '}
            <strong>&ldquo;tenencia exclusiva&rdquo;</strong>, es la <strong>excepción</strong>, y
            solo procede cuando el compartido no es posible o perjudica al hijo (distancia entre
            domicilios, violencia, desinterés de un progenitor, adicciones no tratadas).
          </p>
          <p>Cuando esa excepción se configura, el juez decide a favor de uno u otro ponderando:</p>
          <ul>
            <li>
              <strong>a) Quién facilita el vínculo con el otro:</strong> es el criterio estrella.
              El progenitor que obstruye la comunicación o denigra al otro frente al hijo{' '}
              <strong>pierde puntos decisivos</strong>; el que garantiza el trato regular, los gana.
            </li>
            <li>
              <strong>b) La edad del hijo:</strong> no como regla rígida, sino según sus
              necesidades concretas de cuidado en cada etapa.
            </li>
            <li>
              <strong>c) La opinión del hijo:</strong> el niño tiene derecho a ser oído y su
              opinión pesa según su edad y grado de madurez.
            </li>
            <li>
              <strong>d) El centro de vida:</strong> se privilegia la estabilidad: mantener la
              vivienda, la escuela, los vínculos y la rutina donde el hijo desarrolló su vida.
            </li>
          </ul>

          <h2>El deber de colaboración</h2>
          <p>
            El progenitor no conviviente <strong>no queda afuera</strong>: conserva la
            responsabilidad parental, el derecho a un régimen de comunicación amplio, el deber
            alimentario (<a href="/articulos/articulo-658-codigo-civil-obligacion-alimentaria">art.
            658</a>) y el <strong>derecho y deber de colaborar</strong> con quien convive con el
            hijo. Las decisiones trascendentes (salud, educación, viajes al exterior) siguen
            siendo de ambos.
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿&ldquo;Unilateral&rdquo; y &ldquo;unipersonal&rdquo; son lo mismo?</h3>
          <p>
            Sí: el Código usa ambos términos para la misma modalidad. En el lenguaje corriente se
            la sigue llamando &ldquo;tenencia exclusiva&rdquo;, aunque{' '}
            <a href="/articulos/responsabilidad-parental-patria-potestad-tenencia">
              &ldquo;tenencia&rdquo; ya no es el término legal
            </a>.
          </p>

          <h3>¿Tiene prioridad la madre?</h3>
          <p>
            No. La preferencia materna automática desapareció con el Código de 2015. El primer
            criterio es <strong>quién facilita mejor el vínculo con el otro progenitor</strong>:
            madre o padre pueden obtener el cuidado unilateral. Analizamos los efectos concretos en{' '}
            <a href="/articulos/cuidado-personal-unilateral-consecuencias">
              consecuencias del cuidado personal unilateral
            </a>.
          </p>

          <h3>¿El cuidado unilateral es definitivo?</h3>
          <p>
            No: como toda decisión sobre hijos, es revisable si cambian las circunstancias. El
            progenitor no conviviente puede pedir la modificación acreditando que el cambio
            beneficia al hijo.
          </p>

          <h2>Conclusión</h2>
          <p>
            El art. 653 CCyC convierte el viejo pleito por la &ldquo;tenencia&rdquo; en un examen
            de conducta: gana prioridad quien mejor garantiza el vínculo del hijo{' '}
            <strong>con el otro</strong>. Si está evaluando pedir el cuidado unilateral, o
            defenderse de un pedido, la estrategia probatoria sobre estos cuatro factores es
            decisiva.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Artículo 653</span>
            <span className="tag">Código Civil y Comercial</span>
            <span className="tag">Cuidado Personal Unilateral</span>
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
              <li><a href="/articulos/cuidado-personal-unilateral-consecuencias">Consecuencias del cuidado personal unilateral</a></li>
              <li><a href="/articulos/articulo-651-codigo-civil-cuidado-compartido">Art. 651 CCyC: cuidado compartido</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
