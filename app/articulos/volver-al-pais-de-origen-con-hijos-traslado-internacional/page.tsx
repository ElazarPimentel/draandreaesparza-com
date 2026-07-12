import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/volver-al-pais-de-origen-con-hijos-traslado-internacional'

export const metadata: Metadata = {
  title: '¿Sos Extranjero y Querés Volver a tu País con tus Hijos? Traslado Internacional | Dra. Esparza',
  description:
    'Si formaste una familia en Argentina y querés volver a tu país con tus hijos, un traslado sin autorización puede derivar en restitución internacional de menores. Requisitos y pasos legales.',
  keywords:
    'volver a mi pais con mis hijos, traslado internacional de menores, autorización para viajar con hijos al exterior, restitución internacional de menores, cambio de residencia al exterior con hijos, Convenio de La Haya 1980',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Sos Extranjero y Querés Volver a tu País con tus Hijos? Traslado Internacional de Menores',
    description:
      'Cuando hay hijos menores de edad, volver a tu país de origen no es una decisión unilateral. Autorización, oposición del otro progenitor y riesgo de restitución internacional.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-07-12',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Sos Extranjero y Querés Volver a tu País con tus Hijos? | Dra. Esparza',
    description:
      'Traslado internacional de menores: autorización, oposición del otro progenitor y riesgo de restitución internacional.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Sos Extranjero y Querés Volver a tu País con tus Hijos? Traslado Internacional de Menores',
  description:
    'Requisitos legales para que un progenitor extranjero vuelva a su país de origen con hijos menores de edad nacidos o criados en Argentina, y el riesgo de restitución internacional si se hace sin autorización.',
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
  keywords: ['Traslado Internacional de Menores', 'Restitución Internacional', 'Convenio de La Haya 1980', 'Derecho de Familia Internacional'],
  articleSection: 'Derecho de Familia Internacional',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Sos Extranjero y Querés Volver a tu País con tus Hijos?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puedo volver a mi país con mis hijos sin permiso del otro progenitor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, si el otro progenitor también ejerce la responsabilidad parental. Un cambio de residencia al exterior con hijos menores de edad requiere el consentimiento de ambos progenitores o, en su defecto, autorización judicial. Trasladarse sin ese consentimiento puede configurar un traslado ilícito y habilitar un pedido de restitución internacional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la restitución internacional de menores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es el procedimiento previsto en el Convenio de La Haya de 1980 sobre los Aspectos Civiles de la Sustracción Internacional de Menores, por el cual el progenitor que quedó en Argentina puede solicitar que el niño o niña sea devuelto de forma urgente si fue trasladado o retenido en otro país sin su consentimiento o sin autorización judicial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si ambos progenitores están de acuerdo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si hay acuerdo, puede formalizarse una autorización de viaje o de cambio de residencia, idealmente por escrito y con firma certificada, e incluso homologada judicialmente. Esto evita problemas migratorios al salir del país y da seguridad jurídica a ambas partes sobre el nuevo régimen de comunicación y visitas.',
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
              { label: '¿Sos Extranjero y Querés Volver a tu País con tus Hijos?' },
            ]}
          />
          <div className="article-category">Derecho de Familia Internacional</div>
          <h1>¿Sos Extranjero y Formaste una Familia en Argentina? Volver a tu País con tus Hijos</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Julio de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Cuando hay hijos, no alcanza con decidir viajar</h2>
          <p>
            Es una situación cada vez más frecuente: una persona extranjera formó pareja en
            Argentina, tuvo hijos acá, y con el tiempo la relación se termina o simplemente
            quiere <strong>volver a su país de origen</strong>. Si no hay hijos menores de edad
            de por medio, la decisión es personal. Pero cuando hay hijos, existen{' '}
            <strong>normas nacionales e internacionales</strong> que regulan las salidas del
            país y los cambios de residencia, y un traslado sin autorización puede generar
            consecuencias legales serias.
          </p>

          <h2>El riesgo: restitución internacional de menores</h2>
          <p>
            Argentina es parte del <strong>Convenio de La Haya de 1980</strong> sobre los
            Aspectos Civiles de la Sustracción Internacional de Menores. Este tratado establece
            un mecanismo urgente para que un niño o niña trasladado o retenido en otro país{' '}
            <strong>sin el consentimiento del otro progenitor o sin autorización judicial</strong>{' '}
            sea restituido al país de residencia habitual, casi sin analizar el fondo del
            conflicto de cuidado personal.
          </p>
          <p>
            Esto significa que salir de Argentina con los hijos sin haber resuelto la
            autorización puede terminar, meses después, en un juicio en el país de destino para
            devolver a los niños a la Argentina, con todo el desgaste emocional y económico que
            eso implica.
          </p>

          <h2>Cada situación es diferente</h2>
          <ul>
            <li>
              <strong>Si ambos progenitores están de acuerdo:</strong> puede gestionarse una
              autorización de viaje o de cambio de residencia al exterior, por escrito y con
              firma certificada, e incluso homologarla judicialmente para mayor seguridad
              jurídica.
            </li>
            <li>
              <strong>Si no existe consentimiento:</strong> muchas veces es necesario iniciar una{' '}
              <strong>acción judicial de autorización para viajar o cambiar de residencia</strong>,
              donde el juez evalúa el interés superior del niño, el vínculo con el progenitor que
              queda en Argentina y el proyecto de vida en el país de destino.
            </li>
            <li>
              También deben analizarse cuestiones vinculadas como el <strong>cuidado
              personal</strong>, el <strong>régimen de comunicación</strong> y los convenios
              internacionales vigentes entre Argentina y el país de destino.
            </li>
          </ul>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Puedo volver a mi país con mis hijos sin permiso del otro progenitor?</h3>
          <p>
            <strong>No</strong>, si el otro progenitor también ejerce la responsabilidad
            parental. Requiere consentimiento de ambos o autorización judicial supletoria.
          </p>

          <h3>¿Qué es la restitución internacional de menores?</h3>
          <p>
            El procedimiento del Convenio de La Haya de 1980 por el cual el progenitor que quedó
            en Argentina puede pedir la devolución urgente del niño o niña trasladado o retenido
            en el exterior sin su consentimiento.
          </p>

          <h3>¿Qué pasa si ambos progenitores están de acuerdo?</h3>
          <p>
            Puede formalizarse una autorización de viaje o cambio de residencia, idealmente
            homologada judicialmente, evitando problemas migratorios y dejando en claro el
            régimen de comunicación futuro.
          </p>

          <h2>Conclusión</h2>
          <p>
            Tomar decisiones apresuradas puede traer consecuencias legales importantes. Si estás
            atravesando una separación y necesitás orientación para volver a tu país junto a tus
            hijos, tu situación merece una estrategia legal adecuada, evaluada caso por caso
            antes de viajar.
          </p>
          <p>
            Ver también:{' '}
            <TrackedLink
              href="/articulos/cambio-residencia-hijos-autorizacion-judicial"
              trackEvent="cta_click"
              trackSource="volver_pais_to_cambio_residencia_hub"
            >
              Cambio de residencia de niños
            </TrackedLink>{' '}
            y{' '}
            <TrackedLink
              href="/articulos/hijos-viven-en-otro-pais-mantener-vinculo"
              trackEvent="cta_click"
              trackSource="volver_pais_to_hijos_otro_pais_hub"
            >
              Hijos que viven en otro país
            </TrackedLink>
            .
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Traslado Internacional de Menores</span>
            <span className="tag">Restitución Internacional</span>
            <span className="tag">Convenio de La Haya 1980</span>
            <span className="tag">Derecho de Familia Internacional</span>
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
              <li><a href="/servicios/derecho-familia-internacional">Derecho de familia internacional</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20quiero%20consultar%20sobre%20volver%20a%20mi%20pa%C3%ADs%20con%20mis%20hijos"
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
