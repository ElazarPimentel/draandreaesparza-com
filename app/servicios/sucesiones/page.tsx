import { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: 'Abogada de Sucesiones en Buenos Aires | Declaratoria de Herederos',
  description:
    'Declaratoria de herederos, sucesión con o sin testamento, partición de bienes e inscripción de inmuebles y automotores. Abogada para sucesiones en Buenos Aires, Argentina.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/sucesiones',
    languages: {
      'es-AR': 'https://draandreaesparza.com/servicios/sucesiones',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/sucesiones',
    title: 'Abogada de Sucesiones en Buenos Aires | Declaratoria de Herederos',
    description:
      'Declaratoria de herederos, sucesión con o sin testamento, partición de bienes e inscripción de inmuebles y automotores. Abogada para sucesiones en Buenos Aires, Argentina.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogada de Sucesiones en Buenos Aires | Declaratoria de Herederos',
    description:
      'Declaratoria de herederos, sucesión con o sin testamento, partición de bienes e inscripción de inmuebles y automotores. Abogada para sucesiones en Buenos Aires, Argentina.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicio de Sucesiones en Buenos Aires',
  description:
    'Declaratoria de herederos, sucesión con o sin testamento, partición de bienes e inscripción de inmuebles y automotores. Abogada para sucesiones en Buenos Aires, Argentina.',
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
      'Declaratoria de herederos, sucesión con o sin testamento, partición de bienes e inscripción de inmuebles y automotores. Abogada para sucesiones en Buenos Aires, Argentina.',
  },
}

const schemaBreadcrumb = {
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
      name: 'Abogada de Sucesiones en Buenos Aires',
      item: 'https://draandreaesparza.com/servicios/sucesiones',
    },
  ],
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tarda una sucesión en Buenos Aires?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una sucesión puede demorar entre 1 y 3 años aproximadamente, dependiendo de la complejidad del caso, la cantidad de bienes, si hay acuerdo entre herederos, y la carga de trabajo del juzgado. Los casos más simples con acuerdo entre herederos pueden resolverse en menos tiempo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta hacer una sucesión?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los costos incluyen: honorarios del abogado (regulados por el Colegio de Abogados según el valor de los bienes), tasas judiciales, honorarios del escribano para escrituras, costos de certificados y tasaciones. Es recomendable solicitar un presupuesto según el caso particular.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo hacer una sucesión sin testamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuando no hay testamento, se inicia el juicio sucesorio y se solicita la declaratoria de herederos ante el juzgado civil correspondiente. Con ese trámite se determina quiénes heredan y luego se puede avanzar con inventario, partición e inscripción de bienes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si no hay acuerdo entre herederos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si no hay acuerdo en la partición de bienes, el juez puede designar un partidor judicial que proponga una división equitativa. También pueden venderse los bienes en subasta pública y repartirse el producido. Es recomendable intentar llegar a un acuerdo para evitar demoras y mayores costos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede renunciar a una herencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, cualquier heredero puede renunciar a la herencia. La renuncia debe ser expresa y realizarse ante escribano público o juez. Es importante saber que al renunciar se renuncia a todo (no se puede aceptar solo los bienes y rechazar las deudas). Si hay deudas que superan el activo, la renuncia puede ser conveniente.',
      },
    },
  ],
}

export default function SucesionesPage() {
  return (
    <div className="service-page">
      <JsonLd data={schemaService} />
      <JsonLd data={schemaBreadcrumb} />
      <JsonLd data={schemaFaq} />

      <ServiceNav />

      <div className="service-container">
        <Breadcrumb
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/#specialties' },
            { label: 'Abogada de Sucesiones en Buenos Aires' },
          ]}
        />

        <header className="service-header">
          <h1>Abogada Especialista en Sucesiones y Testamentos</h1>
          <p className="service-intro">
            Tramitación de sucesiones y testamentos con eficiencia y profesionalismo. Más de 25
            años de experiencia protegiendo los derechos de los herederos.
          </p>
        </header>

        <div className="service-content">
          <h2>Servicios de Sucesiones</h2>
          <p>
            La sucesión es el proceso mediante el cual se transmiten los bienes, derechos y
            obligaciones de una persona fallecida a sus herederos. Nuestro estudio ofrece
            asesoramiento integral en todo el proceso sucesorio, desde el inicio hasta la
            inscripción de los bienes.
          </p>

          <h3>Servicios que Ofrecemos</h3>
          <ul>
            <li>
              <strong>Inicio de Sucesión:</strong> Presentación ante el juzgado correspondiente
            </li>
            <li>
              <strong>Declaratoria de Herederos:</strong> Cuando no hay testamento
            </li>
            <li>
              <strong>Testamentos:</strong> Redacción y protocolización
            </li>
            <li>
              <strong>Inventario y Avalúo:</strong> Tasación de bienes de la herencia
            </li>
            <li>
              <strong>Partición de Bienes:</strong> División entre herederos
            </li>
            <li>
              <strong>Inscripción de Dominio:</strong> Transferencia de inmuebles y automotores
            </li>
            <li>
              <strong>Certificado de Bienes:</strong> Obtención ante AFIP y Registro de la
              Propiedad
            </li>
          </ul>

          <h2>Proceso de Sucesión en Argentina</h2>
          <p>
            El trámite de sucesión se inicia ante el Juzgado Civil correspondiente al último
            domicilio del causante. El proceso incluye varias etapas:
          </p>

          <h3>Etapas del Proceso</h3>
          <ol>
            <li>
              <strong>Inicio:</strong> Presentación de la demanda de sucesión con partida de
              defunción y documentación
            </li>
            <li>
              <strong>Declaratoria de Herederos o Apertura de Testamento:</strong> Determinación de
              quiénes son los herederos
            </li>
            <li>
              <strong>Inventario:</strong> Determinación de los bienes del causante mediante
              Certificado de Bienes
            </li>
            <li>
              <strong>Avalúo:</strong> Tasación de los bienes del acervo hereditario
            </li>
            <li>
              <strong>Pago de Deudas:</strong> Si las hubiera, incluyendo impuestos sucesorios
            </li>
            <li>
              <strong>Partición:</strong> División de los bienes entre los herederos
            </li>
            <li>
              <strong>Inscripción:</strong> Transferencia de dominio de inmuebles y automotores
            </li>
          </ol>

          <h3>Documentación Necesaria</h3>
          <ul>
            <li>Partida de defunción del causante</li>
            <li>DNI del causante y de todos los herederos</li>
            <li>Partida de matrimonio (si estaba casado)</li>
            <li>Partidas de nacimiento de los herederos</li>
            <li>Certificado de últimas voluntades</li>
            <li>Documentación de bienes (escrituras, títulos de automotor, etc.)</li>
          </ul>

          <h2>Testamentos</h2>
          <p>
            El testamento es un acto jurídico mediante el cual una persona dispone del destino de
            sus bienes para después de su muerte. En Argentina existen dos tipos principales:
          </p>

          <h3>Tipos de Testamento</h3>
          <ul>
            <li>
              <strong>Testamento Ológrafo:</strong> Escrito de puño y letra por el testador,
              fechado y firmado
            </li>
            <li>
              <strong>Testamento por Acto Público:</strong> Realizado ante escribano público
            </li>
          </ul>

          <p>
            Es importante saber que en Argentina no se puede disponer libremente de todos los
            bienes. Existen herederos forzosos (descendientes, ascendientes y cónyuge) que tienen
            derecho a la legítima (porción de herencia que no se puede desconocer).
          </p>

          <h2>Impuesto a la Herencia</h2>
          <p>
            Actualmente en Argentina no existe un impuesto nacional a la herencia. Sin embargo,
            pueden existir impuestos provinciales (como el Impuesto de Sellos en algunas
            provincias) y gastos del trámite sucesorio (honorarios profesionales, tasas judiciales,
            etc.).
          </p>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes</h2>

          <div className="faq-item">
            <h3>¿Cuánto tarda una sucesión en Buenos Aires?</h3>
            <p>
              Una sucesión puede demorar entre 1 y 3 años aproximadamente, dependiendo de la
              complejidad del caso, la cantidad de bienes, si hay acuerdo entre herederos, y la
              carga de trabajo del juzgado. Los casos más simples con acuerdo entre herederos
              pueden resolverse en menos tiempo.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto cuesta hacer una sucesión?</h3>
            <p>
              Los costos incluyen: honorarios del abogado (regulados por el Colegio de Abogados
              según el valor de los bienes), tasas judiciales, honorarios del escribano para
              escrituras, costos de certificados y tasaciones. Es recomendable solicitar un
              presupuesto según el caso particular.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cómo hacer una sucesión sin testamento?</h3>
            <p>
              Cuando no hay testamento, se inicia el juicio sucesorio y se solicita la declaratoria
              de herederos ante el juzgado civil correspondiente. Con ese trámite se determina
              quiénes heredan y luego se puede avanzar con inventario, partición e inscripción de
              bienes.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué pasa si no hay acuerdo entre herederos?</h3>
            <p>
              Si no hay acuerdo en la partición de bienes, el juez puede designar un partidor
              judicial que proponga una división equitativa. También pueden venderse los bienes en
              subasta pública y repartirse el producido. Es recomendable intentar llegar a un
              acuerdo para evitar demoras y mayores costos.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Se puede renunciar a una herencia?</h3>
            <p>
              Sí, cualquier heredero puede renunciar a la herencia. La renuncia debe ser expresa y
              realizarse ante escribano público o juez. Es importante saber que al renunciar se
              renuncia a todo (no se puede aceptar solo los bienes y rechazar las deudas). Si hay
              deudas que superan el activo, la renuncia puede ser conveniente.
            </p>
          </div>
        </div>

        <div className="service-related-publications">
          <h2>Publicaciones relacionadas</h2>
          <p>Lecturas recomendadas sobre casos y jurisprudencia vinculados a este servicio.</p>
          <ul>
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
                href="/articulos/analisis-problemas-dip-divorcio-internacional"
                trackEvent="publication_click"
                trackSource="service_related_publication"
              >
                Problemas del DIP en divorcio internacional
              </TrackedLink>
            </li>
          </ul>
        </div>

        <ServiceCTA
          heading="¿Necesita asesoramiento legal?"
          subtext="Más de 25 años de experiencia en derecho de familia y sucesiones"
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre Abogada Sucesiones Buenos Aires"
          trackSource="service_cta"
        />
      </div>
    </div>
  )
}
