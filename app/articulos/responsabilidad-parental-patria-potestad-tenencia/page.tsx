import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/responsabilidad-parental-patria-potestad-tenencia'

export const metadata: Metadata = {
  title: 'Responsabilidad Parental, Patria Potestad y Tenencia: Qué Cambió en Argentina',
  description:
    '¿Sigue existiendo la patria potestad? ¿Qué pasó con la tenencia? Cómo se llaman hoy estas figuras en el Código Civil y Comercial argentino (vigente desde 2015). Por Dra. Andrea Esparza.',
  keywords:
    'patria potestad, responsabilidad parental, tenencia, cuidado personal, código civil y comercial, Ley 26.994, derechos de los padres, abogada familia Buenos Aires',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Responsabilidad Parental, Patria Potestad y Tenencia: Qué Cambió en Argentina',
    description:
      '¿Sigue existiendo la patria potestad? ¿Qué pasó con la tenencia? Cómo se llaman hoy estas figuras en el Código Civil y Comercial argentino.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-04-26',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Responsabilidad Parental, Patria Potestad y Tenencia: Qué Cambió',
    description:
      '¿Sigue existiendo la patria potestad? Cómo se llaman hoy estas figuras en el CCyCN argentino.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Responsabilidad Parental, Patria Potestad y Tenencia: Qué Cambió en Argentina',
  description:
    'Explicación de la terminología vigente en el Código Civil y Comercial argentino: responsabilidad parental (antes patria potestad) y cuidado personal (antes tenencia).',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
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
  keywords: ['Patria Potestad', 'Responsabilidad Parental', 'Tenencia', 'Cuidado Personal', 'CCyCN'],
  articleSection: 'Derecho de Familia',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Responsabilidad Parental, Patria Potestad y Tenencia' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Sigue existiendo la patria potestad en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No con ese nombre. Desde la entrada en vigencia del Código Civil y Comercial (Ley 26.994, agosto de 2015), la patria potestad pasó a llamarse responsabilidad parental. El concepto sigue existiendo pero con un enfoque más igualitario y centrado en el interés superior del niño. En el lenguaje cotidiano la gente sigue diciendo "patria potestad", pero el término legal vigente es "responsabilidad parental".',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre responsabilidad parental y cuidado personal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La responsabilidad parental (Art. 638 CCyCN) abarca todos los deberes y derechos de los padres respecto del hijo: representación legal, administración de bienes, educación, decisiones importantes. El cuidado personal (Art. 648 CCyCN) es solo una parte: las decisiones cotidianas y la convivencia diaria. Tras un divorcio, ambos padres conservan la responsabilidad parental aunque el cuidado personal sea unilateral.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la tenencia de hijos hoy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tenencia ya no se llama así desde 2015. La figura equivalente hoy es el cuidado personal, que puede ser compartido (regla general, Art. 651 CCyCN) o unilateral (excepcional, Art. 653). El cambio de nombre no fue solo terminológico: refleja un nuevo enfoque que prioriza el ejercicio compartido de la crianza.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hasta cuándo dura la responsabilidad parental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hasta que el hijo cumple 18 años (mayoría de edad). En ciertos casos se extiende: la obligación alimentaria puede prolongarse hasta los 21 años (o 25 si el hijo estudia y no puede mantenerse) según los Arts. 658-663 del CCyCN.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El divorcio extingue la responsabilidad parental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El divorcio extingue el matrimonio, pero la responsabilidad parental se mantiene compartida entre ambos padres. Solo cambia la organización del cuidado personal y se establece un régimen de comunicación con el progenitor no conviviente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la tenencia unilateral hoy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La "tenencia unilateral" (o "cuidado unilateral" o "tenencia completa") corresponde hoy al cuidado personal unilateral, regulado en el Art. 653 del Código Civil y Comercial: el hijo convive de forma principal con uno solo de los progenitores. Es la excepción; la regla general es el cuidado compartido indistinto (Art. 651). El juez solo otorga el unilateral cuando el compartido resulta imposible o perjudicial para el niño.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La tenencia a favor de la madre o del padre le quita derechos al otro progenitor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Que el cuidado personal sea unilateral (a favor de la madre o del padre) significa que ese progenitor ejerce la convivencia cotidiana, pero el otro conserva la responsabilidad parental: salvo privación o suspensión judicial, ambos siguen decidiendo sobre educación, salud, viajes al exterior y administración de los bienes del hijo, y el no conviviente mantiene el régimen de comunicación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la responsabilidad parental unilateral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es el ejercicio exclusivo de la responsabilidad parental por un solo progenitor. Es excepcional y procede en supuestos como fallecimiento, privación, suspensión o ausencia del otro progenitor. No debe confundirse con el cuidado personal unilateral (que solo refiere a la convivencia diaria) ni se concede por un simple desacuerdo entre los padres.',
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
              { label: 'Responsabilidad Parental, Patria Potestad y Tenencia' },
            ]}
          />
          <div className="article-category">Derecho de Familia</div>
          <h1>Responsabilidad Parental, Patria Potestad y Tenencia: Qué Cambió en Argentina</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Abril de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Una guía rápida sobre la terminología vigente</h2>
          <p>
            Mucha gente sigue hablando de <strong>&ldquo;patria potestad&rdquo;</strong> y{' '}
            <strong>&ldquo;tenencia de hijos&rdquo;</strong>. Son los términos con los que crecimos
            y los que todavía se escuchan en familias, abogados, jueces y medios. Pero desde 2015{' '}
            <strong>esos nombres ya no existen en la ley argentina</strong>. El Código Civil y
            Comercial (Ley 26.994) los reemplazó por <strong>responsabilidad parental</strong> y{' '}
            <strong>cuidado personal</strong>, respectivamente.
          </p>
          <p>
            El cambio no fue solo de nombre: trajo un enfoque distinto, más igualitario y centrado
            en el interés superior del niño. Esta guía explica qué significa cada término hoy y
            adónde acudir según tu situación.
          </p>

          <h2>De &ldquo;Patria Potestad&rdquo; a &ldquo;Responsabilidad Parental&rdquo;</h2>
          <p>
            La <strong>patria potestad</strong> era un instituto de raíz romana que ponía énfasis
            en el poder del padre (originalmente, del <em>pater familias</em>) sobre los hijos. La{' '}
            <strong>responsabilidad parental</strong>, regulada en el <strong>Art. 638 del
            CCyCN</strong>, da vuelta esa lógica:
          </p>
          <blockquote>
            <p>
              &ldquo;Conjunto de deberes y derechos que corresponden a los progenitores sobre la
              persona y bienes del hijo, para su protección, desarrollo y formación integral
              mientras sea menor de edad y no se haya emancipado.&rdquo;
            </p>
          </blockquote>
          <p>
            Lo que antes se entendía como &ldquo;poder&rdquo; ahora se enuncia como{' '}
            <strong>deber</strong>. Y lo que antes era prerrogativa del padre hoy corresponde a
            ambos progenitores en igualdad de condiciones.
          </p>

          <h3>¿Qué incluye la responsabilidad parental?</h3>
          <ul>
            <li>
              <strong>Cuidado personal del hijo:</strong> convivencia y decisiones cotidianas
            </li>
            <li>
              <strong>Educación:</strong> elección de escuela, formación, valores
            </li>
            <li>
              <strong>Representación legal:</strong> los padres representan al hijo en actos
              jurídicos
            </li>
            <li>
              <strong>Administración de bienes:</strong> manejo del patrimonio del hijo menor
            </li>
            <li>
              <strong>Obligación alimentaria:</strong> proveer alimentos, vivienda, salud,
              educación y recreación
            </li>
            <li>
              <strong>Decisiones importantes:</strong> tratamientos médicos serios, viajes al
              exterior, intervenciones quirúrgicas
            </li>
          </ul>

          <h2>De &ldquo;Tenencia&rdquo; a &ldquo;Cuidado Personal&rdquo;</h2>
          <p>
            La <strong>tenencia</strong> era el nombre que recibía la convivencia diaria del hijo
            con uno de los padres. Desde 2015 se llama <strong>cuidado personal</strong> y se
            regula en los <strong>Arts. 648-656 del CCyCN</strong>.
          </p>
          <p>
            Hay una diferencia conceptual importante: la &ldquo;tenencia&rdquo; sugería posesión.
            El &ldquo;cuidado personal&rdquo; pone el acento en la función de cuidar y en el
            bienestar del niño. Y la regla general dejó de ser que un solo padre &ldquo;tenga&rdquo;
            al hijo: ahora la <strong>regla es el cuidado compartido indistinto</strong> (Art. 651),
            y solo se otorga el unilateral cuando el compartido no es posible o resulta perjudicial
            (Art. 653).
          </p>

          <div className="article-cta-box" style={{ background: '#f4f7fb', padding: '1.25rem 1.5rem', borderLeft: '4px solid #1a365d', margin: '1.5rem 0', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong>👉 ¿Buscás información sobre tenencia o cuidado personal?</strong>
            </p>
            <p style={{ margin: 0 }}>
              <a href="/servicios/cuidado-personal"><strong>Leé la guía completa de cuidado personal de hijos →</strong></a> (modalidades, criterios judiciales, plazos, acuerdos y consecuencias del cuidado unilateral)
            </p>
          </div>

          <h2>Diferencia clave: responsabilidad parental ≠ cuidado personal</h2>
          <p>Es la confusión más frecuente. La distinción es:</p>
          <ul>
            <li>
              <strong>La responsabilidad parental es el género</strong>: comprende todos los
              deberes y derechos sobre el hijo
            </li>
            <li>
              <strong>El cuidado personal es la especie</strong>: solo la convivencia diaria y las
              decisiones cotidianas
            </li>
          </ul>
          <p>
            <strong>Ejemplo práctico:</strong> tras un divorcio, los padres pueden acordar que el
            hijo viva habitualmente con la madre (cuidado personal unilateral materno), pero{' '}
            <strong>ambos siguen ejerciendo la responsabilidad parental</strong>. Esto significa
            que el padre conserva voz y voto en la elección del colegio, los tratamientos médicos
            importantes, los viajes al exterior y la administración de los bienes del hijo.
          </p>

          <h2>El régimen de comunicación</h2>
          <p>
            Cuando el cuidado personal es unilateral, el progenitor que no convive cotidianamente
            con el hijo tiene derecho y obligación de mantener un <strong>régimen de
            comunicación</strong> regular (Art. 652 CCyCN). Antes se hablaba de
            &ldquo;visitas&rdquo;; el cambio de nombre subraya que el contacto es un derecho del
            niño, no un permiso del padre conviviente.
          </p>

          <h2>&laquo;Tenencia unilateral&raquo;, &laquo;cuidado unilateral&raquo; y &laquo;a favor del padre o de la madre&raquo;</h2>
          <p>
            Muchas consultas usan frases como <strong>&laquo;tenencia unilateral&raquo;</strong>,{' '}
            <strong>&laquo;cuidado unilateral&raquo;</strong>,{' '}
            <strong>&laquo;responsabilidad parental unilateral&raquo;</strong> o{' '}
            <strong>&laquo;tenencia a favor de la madre / del padre&raquo;</strong>. Conviene
            precisar a qué corresponde cada una en la ley vigente:
          </p>
          <ul>
            <li>
              <strong>&laquo;Tenencia unilateral&raquo; / &laquo;cuidado unilateral&raquo; / &laquo;tenencia completa&raquo;</strong>{' '}
              &rarr; hoy es el <strong>cuidado personal unilateral</strong> (Art. 653 CCyCN): el
              hijo convive de forma principal con uno solo de los progenitores. Es la excepción; la
              regla es el cuidado compartido indistinto (Art. 651).
            </li>
            <li>
              <strong>&laquo;Tenencia a favor de la madre&raquo; o &laquo;a favor del padre&raquo;</strong>{' '}
              &rarr; significa que ese progenitor ejerce el cuidado personal cotidiano. No implica
              que el otro pierda la responsabilidad parental: salvo privación o suspensión, ambos
              siguen decidiendo sobre educación, salud, viajes y bienes del hijo.
            </li>
            <li>
              <strong>&laquo;Responsabilidad parental unilateral&raquo;</strong> &rarr; es algo más
              excepcional: el <strong>ejercicio exclusivo</strong> de la responsabilidad parental
              por un solo progenitor (por ejemplo, por fallecimiento, privación o ausencia del
              otro). No se otorga por un simple desacuerdo entre los padres.
            </li>
          </ul>
          <p>
            El cuidado unilateral no se concede &laquo;a pedido&raquo;: el juez lo otorga solo
            cuando el cuidado compartido resulta imposible o perjudicial para el niño, ponderando su
            interés superior. Las consecuencias concretas &mdash; cuota alimentaria, régimen de
            comunicación, autorización para mudarse &mdash; se desarrollan acá:
          </p>
          <p>
            &#10148;{' '}
            <TrackedLink
              href="/articulos/cuidado-personal-unilateral-consecuencias"
              trackEvent="publication_click"
              trackSource="hub_terminologia_to_unilateral_consecuencias"
            >
              <strong>Consecuencias del cuidado personal unilateral: cuota, comunicación y mudanza</strong>
            </TrackedLink>
          </p>

          <h2>¿Hasta cuándo dura la responsabilidad parental?</h2>
          <p>
            En principio hasta los <strong>18 años</strong>, cuando el hijo alcanza la mayoría de
            edad. Hay extensiones específicas:
          </p>
          <ul>
            <li>
              <strong>Alimentos hasta los 21 años</strong> (Art. 658 CCyCN), salvo que el hijo
              tenga recursos suficientes
            </li>
            <li>
              <strong>Alimentos hasta los 25 años</strong> si el hijo estudia o se prepara
              profesionalmente y no puede mantenerse (Art. 663)
            </li>
            <li>
              <strong>Hijos con discapacidad:</strong> la obligación se mantiene mientras subsista
              la situación
            </li>
          </ul>

          <h2>Adónde dirigirte según tu situación</h2>

          <h3>Si tu duda es sobre tenencia o cuidado personal</h3>
          <p>
            Modalidades del cuidado, criterios que pondera el juez, proceso judicial, acuerdos de
            cuidado personal y consecuencias del cuidado unilateral:
          </p>
          <p>
            ➜{' '}
            <TrackedLink
              href="/servicios/cuidado-personal"
              trackEvent="cta_click"
              trackSource="hub_terminologia_to_cuidado_personal"
            >
              <strong>Cuidado Personal de Hijos: Unilateral, Compartido y Alternado</strong>
            </TrackedLink>
          </p>

          <h3>Si vas a divorciarte y tenés hijos</h3>
          <p>
            Cómo afecta el divorcio a la responsabilidad parental, organización del cuidado y
            cuota alimentaria:
          </p>
          <p>
            ➜{' '}
            <TrackedLink
              href="/servicios/divorcios-buenos-aires"
              trackEvent="cta_click"
              trackSource="hub_terminologia_to_divorcios"
            >
              <strong>Divorcio Express y Contencioso en Buenos Aires</strong>
            </TrackedLink>
          </p>

          <h3>Si necesitás reclamar alimentos</h3>
          <p>
            La obligación alimentaria deriva de la responsabilidad parental:
          </p>
          <p>
            ➜{' '}
            <TrackedLink
              href="/servicios/alimentos"
              trackEvent="cta_click"
              trackSource="hub_terminologia_to_alimentos"
            >
              <strong>Cuota Alimentaria: Demanda, Aumento y Ejecución</strong>
            </TrackedLink>
          </p>

          <h3>Si tenés un caso con elementos internacionales</h3>
          <p>
            Responsabilidad parental con padres en países distintos, traslado de hijos al
            extranjero, sustracción internacional:
          </p>
          <p>
            ➜{' '}
            <TrackedLink
              href="/servicios/derecho-familia-internacional"
              trackEvent="cta_click"
              trackSource="hub_terminologia_to_internacional"
            >
              <strong>Derecho de Familia y Sucesiones Internacional</strong>
            </TrackedLink>
          </p>

          <h3>Si necesitás un panorama general del derecho de familia</h3>
          <p>
            ➜{' '}
            <TrackedLink
              href="/servicios/derecho-familia"
              trackEvent="cta_click"
              trackSource="hub_terminologia_to_familia"
            >
              <strong>Servicio integral de Derecho de Familia</strong>
            </TrackedLink>
          </p>

          <h2>En resumen</h2>
          <ul>
            <li><strong>Patria potestad</strong> → hoy se llama <strong>responsabilidad parental</strong> (Art. 638 CCyCN)</li>
            <li><strong>Tenencia</strong> → hoy se llama <strong>cuidado personal</strong> (Arts. 648-656 CCyCN)</li>
            <li><strong>Régimen de visitas</strong> → hoy se llama <strong>régimen de comunicación</strong> (Art. 652 CCyCN)</li>
            <li>El cambio de terminología refleja un nuevo paradigma: <strong>los hijos no son objeto de poder, sino sujetos de derecho</strong></li>
            <li>En el lenguaje cotidiano podés usar el nombre que conozcas; un abogado de familia entenderá ambos</li>
          </ul>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Patria Potestad</span>
            <span className="tag">Responsabilidad Parental</span>
            <span className="tag">Tenencia</span>
            <span className="tag">Cuidado Personal</span>
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
            <ul>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos (antes tenencia)</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
              <li><a href="/servicios/divorcios-buenos-aires">Divorcios en Buenos Aires</a></li>
              <li><a href="/servicios/alimentos">Cuota alimentaria</a></li>
              <li><a href="/servicios/derecho-familia-internacional">Derecho de familia internacional</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20responsabilidad%20parental%20o%20cuidado%20personal"
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
