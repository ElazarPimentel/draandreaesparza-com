import type { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title:
    'Abogada de Familia en CABA: Divorcio, Cuidado Personal y Alimentos | Dra. Esparza',
  description:
    'Abogada de familia en CABA con 15+ años de experiencia. Divorcios, cuidado personal y régimen de comunicación, alimentos, violencia familiar y adopción. Consulta por WhatsApp.',
  keywords:
    'derecho de familia, abogada familia, cuidado personal, patria potestad, régimen de comunicación, violencia familiar, violencia doméstica, orden de protección, adopción, Buenos Aires, Argentina',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/derecho-familia',
    languages: { 'es-AR': 'https://draandreaesparza.com/servicios/derecho-familia' },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/derecho-familia',
    title:
      'Abogada de Familia en CABA: Divorcio, Cuidado Personal y Alimentos | Dra. Esparza',
    description:
      'Abogada de familia en CABA con 15+ años de experiencia. Divorcios, cuidado personal y régimen de comunicación, alimentos, violencia familiar y adopción. Consulta por WhatsApp.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Abogada de Familia en CABA: Divorcio, Cuidado Personal y Alimentos | Dra. Esparza',
    description:
      'Abogada de familia en CABA con 15+ años de experiencia. Divorcios, cuidado personal y régimen de comunicación, alimentos, violencia familiar y adopción. Consulta por WhatsApp.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicio de Derecho de Familia en Buenos Aires',
  description:
    'Abogada de derecho de familia en Buenos Aires: cuidado personal unilateral o compartido, régimen de comunicación, patria potestad, divorcios, alimentos y adopción.',
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
      'Abogada de derecho de familia en Buenos Aires: cuidado personal unilateral o compartido, régimen de comunicación, patria potestad, divorcios, alimentos y adopción.',
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
      name: 'Abogada Especialista en Derecho de Familia en Buenos Aires',
      item: 'https://draandreaesparza.com/servicios/derecho-familia',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el interés superior del niño?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es el principio rector en todas las decisiones que afecten a niños, niñas y adolescentes. Implica que en caso de conflicto, debe prevalecer aquello que resulte más beneficioso para el desarrollo integral del niño, considerando su opinión según edad y madurez.',
      },
    },
    {
      '@type': 'Question',
      name: '¿A qué edad puede un niño decidir con quién vivir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los niños tienen derecho a ser escuchados siempre, pero su opinión tiene mayor peso a medida que crecen. A partir de los 13 años, su consentimiento es necesario para ciertas decisiones importantes. El juez debe escuchar al niño en un ambiente adecuado y considerar su opinión según su edad y madurez.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo solicitar una orden de protección por violencia familiar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede solicitarse en cualquier momento, incluso de urgencia, en Comisarías, OVD o Juzgados de Familia. La medida puede otorgarse el mismo día. Incluye prohibición de acercamiento, exclusión del hogar, y otras medidas de protección necesarias. No es necesario tener abogado para solicitar la medida urgente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto demora un proceso de adopción?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los tiempos varían significativamente. La inscripción en el Registro puede demorar 6 meses a 1 año. Luego, la espera para ser vinculado con un niño depende del perfil buscado y puede llevar años. Una vez iniciada la vinculación, el proceso de guarda y adopción puede tomar entre 1 y 2 años.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre patria potestad, cuidado personal y régimen de comunicación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La patria potestad es el conjunto de deberes y derechos de los padres respecto de sus hijos menores (representación legal, administración de bienes, decisiones importantes). El cuidado personal es la convivencia cotidiana con el hijo. El régimen de comunicación regula el contacto con el progenitor que no convive de forma principal.',
      },
    },
  ],
}

export default function DerechoFamiliaPage() {
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
            { label: 'Abogada Derecho de Familia en Buenos Aires' },
          ]}
        />

        <header className="service-header">
          <h1>Abogada Especialista en Derecho de Familia en Buenos Aires</h1>
          <p className="service-intro">
            Soluciones legales integrales para personas que buscan una abogada especialista en
            familia o asesoramiento experto en derecho de familia en Buenos Aires.
          </p>
        </header>

        <div className="service-content">
          <div className="article-cta-box" style={{ background: '#f4f7fb', padding: '1rem 1.25rem', borderLeft: '4px solid #1a365d', margin: '0 0 1.5rem 0', borderRadius: '4px' }}>
            <p style={{ margin: 0 }}>
              <strong>Aclaración terminológica:</strong> &ldquo;patria potestad&rdquo; y
              &ldquo;tenencia&rdquo; siguen siendo términos de uso popular, pero la ley argentina
              vigente desde 2015 los llama <strong>responsabilidad parental</strong> y{' '}
              <strong>cuidado personal</strong>.{' '}
              <TrackedLink
                href="/articulos/responsabilidad-parental-patria-potestad-tenencia"
                trackEvent="cta_click"
                trackSource="derecho_familia_to_terminologia_hub"
              >
                Ver explicación de la reforma →
              </TrackedLink>
            </p>
          </div>

          <h2>Servicios en Derecho de Familia</h2>
          <p>
            El derecho de familia abarca todas las cuestiones jurídicas relacionadas con las
            relaciones familiares. Nuestro estudio ofrece asesoramiento especializado con un enfoque
            humano y profesional.
          </p>
          <p>
            Si está buscando <strong>abogados expertos en derecho de familia</strong> o una{' '}
            <strong>abogada especialista en familia</strong>, aquí encontrará una guía clara sobre
            divorcios, cuidado personal, alimentos, régimen de comunicación y violencia familiar.
          </p>

          <h3>Áreas de Práctica</h3>
          <ul>
            <li><strong>Divorcios:</strong> De mutuo acuerdo, contenciosos, express</li>
            <li><strong>Cuidado Personal:</strong> Unilateral, compartido, alternado (antes llamado &ldquo;tenencia de hijos&rdquo;)</li>
            <li><strong>Responsabilidad Parental:</strong> Ejercicio, suspensión, privación (antes llamada &ldquo;patria potestad&rdquo; hasta la reforma del CCyCN en 2015)</li>
            <li><strong>Régimen de Comunicación:</strong> Visitas, contacto con hijos menores</li>
            <li><strong>Alimentos:</strong> Para hijos menores y mayores, cónyuge</li>
            <li><strong>Adopción:</strong> Simple, plena, integración</li>
            <li><strong>Violencia Familiar:</strong> Órdenes de protección, exclusión del hogar</li>
            <li>
              <strong>Medida de Protección Excepcional:</strong> Control de legalidad, vinculaciones,
              egreso
            </li>
            <li><strong>Filiación:</strong> Reconocimiento, impugnación</li>
          </ul>

          <h2>Cuidado Personal de los Hijos</h2>
          <p>
            El cuidado personal (antes llamado tenencia) determina con quién vivirán los hijos tras
            la separación o divorcio de los padres. El Código Civil y Comercial (Arts. 648-656)
            establece tres modalidades:
          </p>
          <ul>
            <li>
              <strong>Cuidado Personal Compartido Indistinto:</strong> Ambos progenitores comparten
              decisiones cotidianas, el hijo tiene residencia principal con uno de ellos. Es la regla
              por defecto (Art. 651)
            </li>
            <li>
              <strong>Cuidado Personal Compartido Alternado:</strong> El hijo alterna períodos de
              convivencia con cada progenitor
            </li>
            <li>
              <strong>Cuidado Personal Unilateral:</strong> Un solo progenitor tiene el cuidado
              cotidiano, el otro tiene régimen de comunicación. Es excepcional y requiere demostrar
              que el compartido es perjudicial (Art. 653)
            </li>
          </ul>
          <p>
            El juez pondera cuatro factores: quién facilita el contacto con el otro progenitor, la
            edad del hijo, la opinión del niño según su madurez, y el mantenimiento del centro de
            vida. Las decisiones se basan en conductas concretas, no en estereotipos de género.
          </p>
          <p>
            <TrackedLink
              href="/servicios/cuidado-personal"
              trackEvent="cta_click"
              trackSource="derecho_familia_to_cuidado_personal"
            >
              <strong>Ver guía completa sobre cuidado personal de hijos &rarr;</strong>
            </TrackedLink>
          </p>

          <h2>Violencia Familiar y Protección</h2>
          <p>
            En situaciones de violencia familiar, la ley ofrece mecanismos de protección urgente
            que pueden activarse en el mismo día de la denuncia:
          </p>
          <ul>
            <li>
              <strong>Orden de protección:</strong> Prohibición de acercamiento (medida perimetral),
              otorgable en 24-72 horas
            </li>
            <li>
              <strong>Exclusión del hogar:</strong> Se ordena al agresor retirarse de la vivienda
              familiar
            </li>
            <li>
              <strong>Botón antipánico:</strong> Dispositivo electrónico para alertar a fuerzas de
              seguridad
            </li>
            <li>
              <strong>Medida de protección excepcional:</strong> Cuando niños están en peligro grave,
              el organismo de protección puede disponer su resguardo institucional (Ley 26.061)
            </li>
          </ul>
          <p>
            Las denuncias se pueden realizar las 24 horas en la OVD (Oficina de Violencia Doméstica
            de la Corte Suprema), en cualquier comisaría, o llamando al 137. No se necesita abogado
            para la denuncia inicial.
          </p>
          <p>
            <TrackedLink
              href="/servicios/violencia-familiar"
              trackEvent="cta_click"
              trackSource="derecho_familia_to_violencia_familiar"
            >
              <strong>
                Ver guía completa sobre violencia familiar y órdenes de protección &rarr;
              </strong>
            </TrackedLink>
          </p>

          <h2>Adopción</h2>
          <p>
            El proceso de adopción en Argentina requiere estar inscripto en el Registro de Adoptantes
            y cumplir con los requisitos establecidos por ley. Acompañamos a las familias en todo el
            proceso de adopción: inscripción, evaluaciones, vinculación y sentencia de adopción.
          </p>

          <h3>Tipos de Adopción</h3>
          <ul>
            <li>
              <strong>Adopción Plena:</strong> Vínculo jurídico pleno, cesa vínculo con familia de
              origen
            </li>
            <li>
              <strong>Adopción Simple:</strong> Se mantienen algunos vínculos con familia de origen
            </li>
            <li>
              <strong>Adopción de Integración:</strong> Cuando se adopta al hijo del cónyuge o
              conviviente
            </li>
          </ul>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes</h2>

          <div className="faq-item">
            <h3>¿Qué es el interés superior del niño?</h3>
            <p>
              Es el principio rector en todas las decisiones que afecten a niños, niñas y
              adolescentes. Implica que en caso de conflicto, debe prevalecer aquello que resulte
              más beneficioso para el desarrollo integral del niño, considerando su opinión según
              edad y madurez.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿A qué edad puede un niño decidir con quién vivir?</h3>
            <p>
              Los niños tienen derecho a ser escuchados siempre, pero su opinión tiene mayor peso a
              medida que crecen. A partir de los 13 años, su consentimiento es necesario para ciertas
              decisiones importantes. El juez debe escuchar al niño en un ambiente adecuado y
              considerar su opinión según su edad y madurez.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cómo solicitar una orden de protección por violencia familiar?</h3>
            <p>
              Puede solicitarse en cualquier momento, incluso de urgencia, en Comisarías, OVD o
              Juzgados de Familia. La medida puede otorgarse el mismo día. Incluye prohibición de
              acercamiento, exclusión del hogar, y otras medidas de protección necesarias. No es
              necesario tener abogado para solicitar la medida urgente.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto demora un proceso de adopción?</h3>
            <p>
              Los tiempos varían significativamente. La inscripción en el Registro puede demorar 6
              meses a 1 año. Luego, la espera para ser vinculado con un niño depende del perfil
              buscado y puede llevar años. Una vez iniciada la vinculación, el proceso de guarda y
              adopción puede tomar entre 1 y 2 años.
            </p>
          </div>

          <div className="faq-item">
            <h3>
              ¿Cuál es la diferencia entre patria potestad, cuidado personal y régimen de
              comunicación?
            </h3>
            <p>
              La patria potestad es el conjunto de deberes y derechos de los padres respecto de sus
              hijos menores (representación legal, administración de bienes, decisiones importantes).
              El cuidado personal es la convivencia cotidiana con el hijo. El régimen de comunicación
              regula el contacto con el progenitor que no convive de forma principal.
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
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre Abogada Derecho de Familia Buenos Aires"
          trackSource="service_cta"
        />
      </div>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20Abogada%20Derecho%20de%20Familia%20Buenos%20Aires"
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
