import type { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title:
    'Derecho de Familia y Sucesiones Internacionales en Buenos Aires | Dra. Esparza',
  description:
    'Abogada especialista en divorcios internacionales, sucesiones con bienes en el exterior y conflictos familiares transfronterizos. Derecho Internacional Privado aplicado. +25 años de experiencia.',
  keywords:
    'divorcio internacional, sucesión internacional, herencia bienes exterior, derecho internacional privado, reconocimiento sentencia extranjera, divorcio en el extranjero Argentina, abogada DIP Buenos Aires',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/derecho-familia-internacional',
    languages: {
      'es-AR': 'https://draandreaesparza.com/servicios/derecho-familia-internacional',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/derecho-familia-internacional',
    title:
      'Derecho de Familia y Sucesiones Internacionales en Buenos Aires | Dra. Esparza',
    description:
      'Abogada especialista en divorcios internacionales, sucesiones con bienes en el exterior y conflictos familiares transfronterizos. Derecho Internacional Privado aplicado. +25 años de experiencia.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Derecho de Familia y Sucesiones Internacionales en Buenos Aires | Dra. Esparza',
    description:
      'Abogada especialista en divorcios internacionales, sucesiones con bienes en el exterior y conflictos familiares transfronterizos. Derecho Internacional Privado aplicado. +25 años de experiencia.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Derecho de Familia y Sucesiones Internacionales',
  description:
    'Asesoramiento legal en divorcios internacionales, sucesiones con bienes en el exterior, alimentos transfronterizos y conflictos de jurisdicción. Derecho Internacional Privado aplicado a relaciones familiares.',
  provider: {
    '@type': 'LegalService',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
    address: { '@type': 'PostalAddress', streetAddress: 'Uruguay 651, Piso 14, Of. I', addressLocality: 'Ciudad Autónoma de Buenos Aires', addressRegion: 'Buenos Aires', postalCode: 'C1015ABM', addressCountry: 'AR' },
    telephone: '+54-9-11-5561-7919',
  },
  areaServed: {
    '@type': 'City',
    name: 'Buenos Aires',
  },
  offers: {
    '@type': 'Offer',
    description:
      'Asesoramiento en derecho de familia y sucesiones con elementos internacionales. Divorcios, herencias, alimentos y cuidado personal transfronterizo.',
  },
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
      name: 'Servicios',
      item: 'https://draandreaesparza.com/#specialties',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Derecho de Familia y Sucesiones Internacionales',
      item: 'https://draandreaesparza.com/servicios/derecho-familia-internacional',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Es válido en Argentina un divorcio decretado en el extranjero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, pero debe pasar por un proceso de reconocimiento (exequátur) ante un juez argentino. Se verifica que la sentencia extranjera cumpla con ciertos requisitos: que el tribunal haya tenido jurisdicción, que se haya respetado el derecho de defensa y que no sea contraria al orden público argentino (Arts. 2594-2604 CCyCN).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa con una herencia cuando hay bienes en distintos países?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Argentina aplica el sistema de pluralidad sucesoria para inmuebles: la ley del lugar donde están situados los bienes rige la sucesión de esos bienes (Art. 2644 CCyCN). Para bienes muebles, se aplica la ley del último domicilio del causante. Esto significa que una misma herencia puede regirse por varias leyes simultáneamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo reclamar alimentos a un padre que vive en otro país?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Argentina es parte de convenciones internacionales que facilitan el cobro de alimentos transfronterizo. Se puede iniciar el reclamo en Argentina y ejecutarlo en el país donde reside el obligado, o viceversa. La Convención Interamericana sobre Obligaciones Alimentarias y tratados bilaterales ofrecen mecanismos de cooperación judicial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué necesito para iniciar un caso de familia con elementos internacionales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es fundamental actuar con estrategia desde el inicio. Se necesita determinar qué jurisdicción es la más conveniente, qué ley se aplicará, y si existen tratados internacionales entre los países involucrados. Cada caso es único y requiere un análisis personalizado del derecho internacional privado aplicable.',
      },
    },
  ],
}

export default function DerechoFamiliaInternacionalPage() {
  return (
    <div className="service-page">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <ServiceNav />

      <div className="service-container">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#specialties' },
            { label: 'Derecho de Familia y Sucesiones Internacionales' },
          ]}
        />

        <header className="service-header">
          <h1>Derecho de Familia y Sucesiones Internacional</h1>
          <p className="service-intro">
            Cuando una herencia o un divorcio cruzan fronteras, lo que está en juego es mucho más
            que dinero.
          </p>
        </header>

        <div className="service-content">
          <h2>Cuando lo familiar se vuelve internacional</h2>
          <p>
            En los momentos más sensibles de la vida &mdash;una separación o la pérdida de un ser
            querido&mdash; las decisiones legales no deberían convertirse en un nuevo problema. Sin
            embargo, cuando hay bienes en distintos países, hijos en el extranjero o vínculos
            internacionales, la complejidad se multiplica.
          </p>

          <h3>Divorcios internacionales</h3>
          <p>
            Un divorcio no es solo firmar papeles. Es definir el futuro: bienes, hijos, alimentos,
            residencia. Y cuando uno de los cónyuges vive en otro país o hay jurisdicciones
            distintas, cada paso mal dado puede costar años de conflicto.
          </p>
          <ul>
            <li>
              <strong>Reconocimiento de sentencias extranjeras:</strong> validar en Argentina un
              divorcio decretado en otro país (exequátur, Arts. 2594-2604 CCyCN)
            </li>
            <li>
              <strong>Jurisdicción internacional:</strong> determinar ante qué juez corresponde
              iniciar o continuar el proceso
            </li>
            <li>
              <strong>Ley aplicable:</strong> qué derecho rige la liquidación de bienes, los
              alimentos y el cuidado de los hijos
            </li>
            <li>
              <strong>Compensación económica y bienes en el exterior:</strong> protección de
              derechos patrimoniales cuando los activos están en distintos países
            </li>
          </ul>
          <p>
            <TrackedLink
              href="/servicios/divorcios-buenos-aires"
              trackEvent="cta_click"
              trackSource="familia_intl_to_divorcios"
            >
              <strong>Ver servicio de divorcios en Buenos Aires &rarr;</strong>
            </TrackedLink>
          </p>

          <h3>Sucesiones internacionales</h3>
          <p>
            Muchas personas descubren tarde que una herencia con elementos internacionales requiere
            algo más que un trámite local. Bienes en el exterior, herederos en distintos países,
            diferencias legales... todo puede convertirse en un laberinto si no se actúa
            estratégicamente desde el inicio.
          </p>
          <ul>
            <li>
              <strong>Pluralidad sucesoria:</strong> los inmuebles se rigen por la ley del país
              donde están (Art. 2644 CCyCN), los muebles por la ley del último domicilio del
              causante
            </li>
            <li>
              <strong>Declaratoria de herederos con elementos extranjeros:</strong> coordinación
              entre jurisdicciones para acreditar el vínculo y los derechos hereditarios
            </li>
            <li>
              <strong>Inscripción de bienes en el exterior:</strong> trámites registrales en otros
              países para transferir la titularidad
            </li>
            <li>
              <strong>Tratados internacionales bilaterales:</strong> convenios que facilitan el
              reconocimiento de derechos sucesorios entre países
            </li>
          </ul>
          <p>
            <TrackedLink
              href="/servicios/sucesiones"
              trackEvent="cta_click"
              trackSource="familia_intl_to_sucesiones"
            >
              <strong>Ver servicio de sucesiones &rarr;</strong>
            </TrackedLink>
          </p>

          <h3>Alimentos y cuidado personal transfronterizo</h3>
          <p>
            <em>Aclaración terminológica:</em> en Argentina, &ldquo;tenencia&rdquo; se llama hoy{' '}
            <strong>cuidado personal</strong>, y &ldquo;patria potestad&rdquo; se llama{' '}
            <strong>responsabilidad parental</strong> desde la reforma del CCyCN (2015). En
            contextos internacionales conviene usar las dos formas, ya que en otros países el
            vocabulario varía.{' '}
            <TrackedLink
              href="/articulos/responsabilidad-parental-patria-potestad-tenencia"
              trackEvent="cta_click"
              trackSource="familia_intl_to_terminologia_hub"
            >
              Más detalle aquí →
            </TrackedLink>
          </p>
          <ul>
            <li>
              <strong>Alimentos internacionales:</strong> reclamos de cuota alimentaria cuando el
              obligado reside en otro país (Convención Interamericana sobre Obligaciones
              Alimentarias)
            </li>
            <li>
              <strong>Cuidado personal con progenitores en distintos países:</strong> régimen de
              comunicación y centro de vida cuando los padres viven en jurisdicciones diferentes
            </li>
            <li>
              <strong>Restitución internacional de menores:</strong> casos de sustracción o
              retención ilícita bajo el Convenio de La Haya de 1980
            </li>
          </ul>

          <h2>El error más común: subestimar la complejidad</h2>
          <p>
            Creer que &ldquo;después se arregla&rdquo; suele salir caro. En derecho de familia y
            sucesiones internacionales, prevenir es ganar tiempo, dinero y tranquilidad.
          </p>

          <h3>¿Qué se necesita realmente?</h3>
          <ul>
            <li>Conocimiento del derecho local y normas internacionales</li>
            <li>Estrategia desde el primer momento</li>
            <li>Coordinación entre países</li>
            <li>Experiencia en conflictos familiares con elementos extranjeros</li>
          </ul>

          <p>No todos los casos son iguales. Cada historia requiere una estrategia clara y personalizada.</p>

          <h3>Si está atravesando alguna de estas situaciones</h3>
          <ul>
            <li>Un divorcio con elementos internacionales</li>
            <li>Conflictos por hijos o alimentos entre países</li>
            <li>Una herencia con bienes en el exterior</li>
            <li>Problemas entre herederos en distintas jurisdicciones</li>
          </ul>
          <p><strong>Actuar a tiempo hace la diferencia.</strong></p>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes</h2>

          <div className="faq-item">
            <h3>¿Es válido en Argentina un divorcio decretado en el extranjero?</h3>
            <p>
              Sí, pero debe pasar por un proceso de reconocimiento (exequátur) ante un juez
              argentino. Se verifica que la sentencia extranjera cumpla con ciertos requisitos: que
              el tribunal haya tenido jurisdicción, que se haya respetado el derecho de defensa y
              que no sea contraria al orden público argentino (Arts. 2594-2604 CCyCN).
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué pasa con una herencia cuando hay bienes en distintos países?</h3>
            <p>
              Argentina aplica el sistema de pluralidad sucesoria para inmuebles: la ley del lugar
              donde están situados los bienes rige la sucesión de esos bienes (Art. 2644 CCyCN).
              Para bienes muebles, se aplica la ley del último domicilio del causante. Esto
              significa que una misma herencia puede regirse por varias leyes simultáneamente.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Puedo reclamar alimentos a un padre que vive en otro país?</h3>
            <p>
              Sí. Argentina es parte de convenciones internacionales que facilitan el cobro de
              alimentos transfronterizo. Se puede iniciar el reclamo en Argentina y ejecutarlo en
              el país donde reside el obligado, o viceversa. La Convención Interamericana sobre
              Obligaciones Alimentarias y tratados bilaterales ofrecen mecanismos de cooperación
              judicial.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué necesito para iniciar un caso de familia con elementos internacionales?</h3>
            <p>
              Es fundamental actuar con estrategia desde el inicio. Se necesita determinar qué
              jurisdicción es la más conveniente, qué ley se aplicará, y si existen tratados
              internacionales entre los países involucrados. Cada caso es único y requiere un
              análisis personalizado del derecho internacional privado aplicable.
            </p>
          </div>
        </div>

        <div className="service-related-publications">
          <h2>Publicaciones relacionadas</h2>
          <p>Lecturas recomendadas sobre casos y jurisprudencia vinculados a este servicio.</p>
          <ul>
            <li>
              <TrackedLink
                href="/articulos/analisis-problemas-dip-divorcio-internacional"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Divorcio Internacional: Validez en Argentina y Derecho Aplicable
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/articulos/conceptos-ninez-adolescencia-dip"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Revisando conceptos de niñez y adolescencia en el DIP
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/articulos/interes-superior-nino-tratados-internacionales"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Interés superior del niño vs. tratados internacionales
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/articulos/historia-derecho-musulman-sustraccion-menores"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Sustracción de Menores y Derecho Musulmán: Convenio de La Haya
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="/articulos/finanzas-islamicas-derecho-musulman"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Finanzas Islámicas: Sharía, Contratos y Prohibición del Interés
              </TrackedLink>
            </li>
          </ul>
        </div>

        <ServiceCTA
          heading="¿Necesita asesoramiento en derecho de familia o sucesiones internacionales?"
          subtext="Más de 25 años de experiencia en Derecho Internacional Privado aplicado a relaciones familiares"
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre derecho de familia o sucesiones internacionales"
          trackSource="service_cta"
        />
      </div>
    </div>
  )
}
