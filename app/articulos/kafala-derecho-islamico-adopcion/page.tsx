import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/kafala-derecho-islamico-adopcion'

export const metadata: Metadata = {
  title: '¿Qué es la Kafala? La Figura Islámica Análoga a la Adopción | Dra. Esparza',
  description:
    '¿Qué es la kafala del derecho islámico? Protección de un menor sin crear filiación, su reconocimiento internacional (CDN, Haya 1996) y sus efectos en Argentina.',
  keywords:
    'kafala, kafala derecho islamico, kafala y adopcion, adopcion en el islam, kafala argentina, reconocimiento kafala, derecho musulman familia, guarda tutela kafala',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Qué es la Kafala? La Figura del Derecho Islámico Análoga a la Adopción',
    description:
      'La kafala protege al niño sin crear vínculo de filiación. Su reconocimiento internacional y sus efectos en Argentina.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es la Kafala? | Dra. Esparza',
    description:
      'La figura del derecho islámico que protege al menor sin crear filiación: reconocimiento internacional y efectos en Argentina.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es la Kafala? La Figura del Derecho Islámico Análoga a la Adopción',
  description:
    'La kafala del derecho islámico: protección y cuidado de un menor sin crear vínculo de filiación, su reconocimiento en la Convención sobre los Derechos del Niño y el Convenio de La Haya de 1996, y sus efectos y analogías en el derecho argentino.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-08-15',
  dateModified: '2026-08-15',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    jobTitle: 'Abogada Especialista en Derecho de Familia y Derecho Internacional Privado',
    url: 'https://draandreaesparza.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  keywords: ['Kafala', 'Derecho Islámico', 'Adopción', 'Derecho Internacional Privado', 'Derecho Musulmán'],
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Qué es la Kafala?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es la kafala en el derecho islámico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es el compromiso voluntario de una persona (kafil) de hacerse cargo del cuidado, la manutención, la educación y la protección de un menor (makful), sin crear vínculo de filiación: el niño conserva su apellido y sus lazos con la familia de origen. Es la respuesta del derecho islámico a la niñez desprotegida, ya que la mayoría de los ordenamientos de base coránica prohíben la adopción plena.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La kafala es lo mismo que una adopción?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La adopción plena crea un vínculo de filiación nuevo, con apellido y derechos hereditarios; la kafala no: el makful no hereda del kafil por ley ni cambia su filiación. Funcionalmente se parece más a una guarda o tutela del derecho argentino que a una adopción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La kafala tiene efectos en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La kafala constituida en el extranjero puede reconocerse en Argentina por las vías del derecho internacional privado, valorando el interés superior del niño y el orden público. La Convención sobre los Derechos del Niño (art. 20.3) la menciona expresamente como medida de protección, aunque Argentina formuló reserva a ese artículo. El reconocimiento se analiza caso por caso, generalmente asimilándola a una guarda o tutela, no a una adopción.',
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
              { label: '¿Qué es la Kafala?' },
            ]}
          />
          <div className="article-category">Derecho Internacional Privado</div>
          <h1>¿Qué es la Kafala? La Figura del Derecho Islámico Análoga a la Adopción</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            La <strong>kafala</strong> es la institución del derecho islámico por la cual una
            persona (<em>kafil</em>) se compromete a cuidar, mantener, educar y proteger a un
            menor (<em>makful</em>) <strong>sin crear vínculo de filiación</strong>: el niño
            conserva su apellido y sus lazos jurídicos con la familia de origen. Es la respuesta
            de los ordenamientos de base coránica a la niñez desprotegida, ya que la mayoría de
            ellos <strong>prohíbe la adopción plena</strong>.
          </p>

          <h2>Por qué el Islam no adopta y en su lugar &ldquo;acoge&rdquo;</h2>
          <p>
            En la tradición jurídica islámica, la filiación (<em>nasab</em>) es un vínculo de
            sangre que no puede crearse por acto jurídico: el Corán (azora 33) veda atribuir a un
            niño una paternidad distinta de la biológica. La kafala resuelve la tensión entre esa
            prohibición y el deber, también coránico, de proteger al huérfano: el kafil asume
            todas las obligaciones materiales y de crianza, pero el niño no toma su apellido ni
            hereda de él por ley (puede beneficiarlo por testamento o donación, dentro de los
            límites del derecho sucesorio islámico).
          </p>

          <h2>Kafala y adopción: diferencias clave</h2>
          <ul>
            <li>
              <strong>Filiación:</strong> la adopción plena crea un emplazamiento filial nuevo; la
              kafala no modifica la filiación de origen.
            </li>
            <li>
              <strong>Apellido:</strong> el makful conserva el suyo.
            </li>
            <li>
              <strong>Herencia:</strong> no hay vocación hereditaria legal entre kafil y makful.
            </li>
            <li>
              <strong>Extinción:</strong> la kafala suele cesar con la mayoría de edad del
              protegido; la adopción es permanente.
            </li>
          </ul>
          <p>
            Funcionalmente, la kafala se parece más a la <strong>guarda</strong> o la{' '}
            <strong>tutela</strong> del derecho argentino que a la adopción.
          </p>

          <h2>Reconocimiento internacional</h2>
          <p>
            La kafala está reconocida como medida de protección de la niñez en dos instrumentos
            centrales:
          </p>
          <ul>
            <li>
              <strong>Convención sobre los Derechos del Niño (art. 20.3):</strong> la menciona
              expresamente entre los cuidados alternativos para niños privados de su medio
              familiar. Argentina, no obstante, formuló <strong>reserva</strong> a los incisos b),
              c), d) y e) del art. 21 y una declaración interpretativa que condiciona la adopción
              internacional, lo que obliga a un análisis fino en casos con elemento extranjero.
            </li>
            <li>
              <strong>Convenio de La Haya de 1996</strong> (protección de niños): incluye la
              kafala entre las medidas de protección que circulan entre Estados parte.
            </li>
          </ul>
          <p>
            En la práctica argentina, una kafala constituida en el extranjero (Marruecos, Argelia,
            Emiratos, etc.) puede hacerse valer por las vías del{' '}
            <a href="/servicios/derecho-familia-internacional">derecho internacional privado</a>:
            reconocimiento de la decisión extranjera, con control de orden público y siempre bajo
            el <strong>interés superior del niño</strong>. Los tribunales tienden a asimilarla a
            una guarda o tutela, no a convertirla automáticamente en adopción.
          </p>

          <h2>Casos típicos que llegan al estudio</h2>
          <ul>
            <li>
              Familias musulmanas radicadas en Argentina que constituyeron una kafala en su país
              de origen y necesitan hacerla valer aquí (escolarización, obra social, migraciones,
              autorizaciones de viaje).
            </li>
            <li>
              Argentinos que asumieron una kafala en el exterior y consultan si pueden adoptar al
              niño bajo derecho argentino.
            </li>
            <li>
              Sucesiones con elemento islámico donde el makful pretende derechos sobre el
              patrimonio del kafil.
            </li>
          </ul>
          <p>
            Cada caso exige combinar derecho de familia, derecho internacional privado y
            conocimiento del derecho musulmán, la especialidad que desarrollamos también en{' '}
            <a href="/articulos/agencias-especializadas-ley-islamica">
              agencias especializadas en ley islámica
            </a>{' '}
            y en el análisis del{' '}
            <a href="/articulos/historia-derecho-musulman-sustraccion-menores">
              caso Shaban–Arias Uriburu
            </a>.
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Una kafala extranjera permite que el niño viva en Argentina?</h3>
          <p>
            Puede fundar la residencia del niño con el kafil, pero requiere el reconocimiento
            local de la medida y los trámites migratorios correspondientes. No es automático:
            conviene planificarlo antes del traslado.
          </p>

          <h3>¿Se puede transformar una kafala en adopción en Argentina?</h3>
          <p>
            No hay conversión automática. El juez argentino puede evaluar una adopción bajo
            derecho local si se cumplen sus requisitos, ponderando el interés superior del niño,
            la reserva argentina en materia de adopción internacional y el respeto por la
            identidad cultural del niño.
          </p>

          <h3>¿El kafil debe alimentos al makful?</h3>
          <p>
            Sí: la obligación de manutención es el núcleo del compromiso asumido en la kafala,
            exigible según el derecho bajo el cual se constituyó.
          </p>

          <h2>Conclusión</h2>
          <p>
            La kafala protege al niño <strong>sin crear filiación</strong>: ni adopción ni figura
            menor, sino una institución con lógica propia que los instrumentos internacionales
            reconocen. Hacerla valer en Argentina, o articularla con una adopción, exige un
            análisis de derecho internacional privado caso por caso.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Kafala</span>
            <span className="tag">Derecho Islámico</span>
            <span className="tag">Adopción</span>
            <span className="tag">Derecho Internacional Privado</span>
          </div>

          <div className="author-card">
            <h3>Sobre la autora</h3>
            <p className="author-name">Dra. Maria Andrea Esparza</p>
            <p className="author-bio">
              Especialista en derecho de familia, sucesiones y derecho internacional privado, con
              formación específica en derecho islámico. Más de 25 años de experiencia. Directora
              Adjunta del Instituto de Derecho Internacional Privado.
            </p>
            <a href="/#contact" className="contact-btn">Contactar</a>
          </div>

          <div className="article-service-links">
            <h3>Servicios legales relacionados</h3>
            <p>Si esta situación se relaciona con su caso, puede solicitar asesoramiento en:</p>
            <ul>
              <li><a href="/servicios/derecho-familia-internacional">Derecho de familia internacional</a></li>
              <li><a href="/articulos/agencias-especializadas-ley-islamica">Agencias especializadas en ley islámica</a></li>
              <li><a href="/articulos/historia-derecho-musulman-sustraccion-menores">El caso Shaban–Arias Uriburu</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20kafala%20o%20derecho%20de%20familia%20internacional"
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
