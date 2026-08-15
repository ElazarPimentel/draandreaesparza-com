import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/articulo-638-codigo-civil-responsabilidad-parental'

export const metadata: Metadata = {
  title: 'Art. 638 CCyC: Responsabilidad Parental y Cómo se Pierde | Dra. Esparza',
  description:
    'Artículo 638 del Código Civil y Comercial explicado: qué es la responsabilidad parental (ex patria potestad), qué comprende y cuándo se puede quitar o privar a un padre (art. 700).',
  keywords:
    'art 638 codigo civil y comercial, articulo 638 ccyc, responsabilidad parental, patria potestad, como quitar la patria potestad, privacion de la responsabilidad parental, art 700',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Artículo 638 del Código Civil y Comercial: Responsabilidad Parental y Cómo se Pierde',
    description:
      'Qué es la responsabilidad parental (ex patria potestad), qué comprende y las causales de privación del art. 700.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art. 638 CCyC: Responsabilidad Parental | Dra. Esparza',
    description:
      'Qué es la responsabilidad parental (ex patria potestad) y cuándo un juez puede privar de ella a un progenitor.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Artículo 638 del Código Civil y Comercial: Responsabilidad Parental y Cómo se Pierde',
  description:
    'Texto y explicación práctica del artículo 638 del Código Civil y Comercial argentino: la responsabilidad parental (ex patria potestad), sus principios y las causales de privación del artículo 700.',
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
  keywords: ['Artículo 638', 'Responsabilidad Parental', 'Patria Potestad', 'Privación de la Responsabilidad Parental'],
  articleSection: 'Responsabilidad Parental',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Artículo 638 CCyC Explicado' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es la responsabilidad parental según el artículo 638?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es el conjunto de deberes y derechos que corresponden a los progenitores sobre la persona y bienes del hijo, para su protección, desarrollo y formación integral, mientras sea menor de edad y no se haya emancipado. Es la figura que reemplazó a la "patria potestad" desde 2015.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se le quita la patria potestad a un padre en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hoy se llama privación de la responsabilidad parental y solo la declara un juez por las causales del art. 700: ser condenado como autor, coautor, instigador o cómplice de un delito doloso contra la persona o los bienes del hijo; abandono del hijo; poner en peligro su seguridad o su salud física o psíquica; o haberse declarado su estado de adoptabilidad. Se tramita judicialmente con prueba de la causal.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sé si tengo la responsabilidad parental de mi hijo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si figura como progenitor en la partida de nacimiento y ningún juez lo privó de ella, la tiene: la responsabilidad parental corresponde a ambos progenitores por el solo emplazamiento filial, convivan o no con el hijo, estén casados o no. El divorcio o la separación no la quitan.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede ceder o renunciar a la patria potestad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La responsabilidad parental es irrenunciable e intransferible por acuerdo privado. Lo que sí puede delegarse, con homologación judicial y por plazo limitado, es el ejercicio a un pariente (art. 643). La pérdida definitiva solo ocurre por privación judicial o adopción.',
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
              { label: 'Artículo 638 CCyC Explicado' },
            ]}
          />
          <div className="article-category">Responsabilidad Parental</div>
          <h1>Art. 638 del Código Civil y Comercial: Responsabilidad Parental y Cómo se Pierde</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Texto del artículo 638</h2>
          <blockquote>
            <p>
              <strong>ARTÍCULO 638.- Responsabilidad parental. Concepto.</strong> La
              responsabilidad parental es el conjunto de deberes y derechos que corresponden a los
              progenitores sobre la persona y bienes del hijo, para su protección, desarrollo y
              formación integral mientras sea menor de edad y no se haya emancipado.
            </p>
          </blockquote>

          <h2>La ex &ldquo;patria potestad&rdquo;</h2>
          <p>
            Desde 2015, la <strong>responsabilidad parental</strong> reemplazó a la vieja{' '}
            <strong>&ldquo;patria potestad&rdquo;</strong>. No fue solo un cambio de nombre: se
            pasó de una idea de <em>poder</em> de los padres sobre los hijos a una función de{' '}
            <strong>protección orientada al interés superior del niño</strong>, con el derecho del
            hijo a ser oído y su autonomía progresiva como principios rectores (art. 639).
            Explicamos la evolución completa de los términos en{' '}
            <a href="/articulos/responsabilidad-parental-patria-potestad-tenencia">
              responsabilidad parental, patria potestad y tenencia
            </a>.
          </p>
          <p>
            La titularidad corresponde a <strong>ambos progenitores</strong> por el solo
            emplazamiento filial: estén casados, separados o nunca hayan convivido. El divorcio no
            la quita; lo que se reorganiza tras la separación es el{' '}
            <a href="/servicios/cuidado-personal">cuidado personal</a> (arts.{' '}
            <a href="/articulos/articulo-651-codigo-civil-cuidado-compartido">651</a> y{' '}
            <a href="/articulos/articulo-653-codigo-civil-cuidado-personal-unilateral">653</a>).
          </p>

          <h2>¿Cómo se &ldquo;quita la patria potestad&rdquo;? La privación del art. 700</h2>
          <p>
            La pregunta llega al estudio con la fórmula antigua: <em>&ldquo;quiero quitarle la
            patria potestad al padre/a la madre&rdquo;</em>. La figura actual es la{' '}
            <strong>privación de la responsabilidad parental</strong>, y solo puede declararla un
            juez por las causales <strong>taxativas</strong> del art. 700:
          </p>
          <ul>
            <li>
              <strong>a) Condena penal:</strong> ser condenado como autor, coautor, instigador o
              cómplice de un <strong>delito doloso contra la persona o los bienes del hijo</strong>.
            </li>
            <li>
              <strong>b) Abandono:</strong> el abandono del hijo, dejándolo en un total estado de
              desprotección, aun cuando quede al cuidado del otro progenitor o de terceros.
            </li>
            <li>
              <strong>c) Peligro:</strong> poner en peligro la <strong>seguridad, la salud física
              o psíquica</strong> del hijo (violencia, abuso, exposición a riesgos graves).
            </li>
            <li>
              <strong>d) Adoptabilidad:</strong> haberse declarado judicialmente el estado de
              adoptabilidad del hijo.
            </li>
          </ul>
          <p>
            Importante: el <strong>mero incumplimiento de la cuota alimentaria o del régimen de
            comunicación no alcanza por sí solo</strong> para la privación; puede fundar otras
            sanciones y pesar en el cuidado personal, pero la privación exige las causales graves
            del art. 700. La privación no extingue el <strong>deber alimentario</strong> del
            progenitor privado (art. 704), y es <strong>revisable</strong>: puede rehabilitarse si
            se prueba que cesó el riesgo para el hijo (art. 701).
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Cómo sé si tengo la responsabilidad parental de mi hijo?</h3>
          <p>
            Si figura en la partida de nacimiento como progenitor y ningún juez lo privó de ella,
            la tiene, conviva o no con el hijo. La separación, el divorcio o la falta de contacto
            no la extinguen por sí mismos.
          </p>

          <h3>¿Puedo ceder la patria potestad a un familiar?</h3>
          <p>
            La responsabilidad parental es <strong>irrenunciable e intransferible</strong> por
            acuerdo privado. Lo que la ley admite es la <strong>delegación del ejercicio</strong> a
            un pariente por razones justificadas, con homologación judicial y por un plazo máximo
            de un año renovable (art. 643).
          </p>

          <h3>¿Quitarle la &ldquo;patria potestad&rdquo; borra el apellido o la herencia?</h3>
          <p>
            No. La privación extingue los derechos del progenitor sobre el hijo, pero el hijo
            conserva su filiación, su apellido y su vocación hereditaria, y el progenitor privado
            sigue debiendo alimentos.
          </p>

          <h2>Conclusión</h2>
          <p>
            El art. 638 CCyC define la responsabilidad parental como una función de protección, no
            un poder. Privar de ella a un progenitor es una medida <strong>excepcional y
            judicial</strong>, reservada a las causales graves del art. 700, con prueba sólida. Si
            evalúa iniciar una privación, o defenderse de una, el encuadre probatorio de la causal
            es el corazón del caso.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Artículo 638</span>
            <span className="tag">Responsabilidad Parental</span>
            <span className="tag">Patria Potestad</span>
            <span className="tag">Privación art. 700</span>
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
              <li><a href="/articulos/responsabilidad-parental-patria-potestad-tenencia">Responsabilidad parental, patria potestad y tenencia</a></li>
              <li><a href="/servicios/violencia-familiar">Violencia familiar</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20responsabilidad%20parental"
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
