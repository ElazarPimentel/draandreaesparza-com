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

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20derecho%20de%20familia%20o%20sucesiones%20internacionales"
        trackEvent="whatsapp_click"
        trackSource="whatsapp_float"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Contactar por WhatsApp"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </TrackedLink>
    </div>
  )
}
