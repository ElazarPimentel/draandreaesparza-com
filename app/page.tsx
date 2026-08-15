import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ExpandableCard from '@/components/ExpandableCard'
import TrackedLink from '@/components/TrackedLink'
import JsonLd from '@/components/JsonLd'
import FlyerImage from '@/components/FlyerImage'

export const metadata: Metadata = {
  title:
    'Abogada Especialista en Derecho de Familia, Divorcios y Sucesiones en Buenos Aires | Dra. Andrea Esparza',
  description:
    'Abogada especialista en derecho de familia en Buenos Aires. Divorcios, divorcio express, sucesiones, cuota alimentaria y cuidado personal. Más de 25 años de experiencia.',
  keywords:
    'derecho de familia, adopción, orden de protección, hogar de niños, juicio por alimentos, violencia familiar, violencia domestica, sucesiones, cuidado personal unilateral, patria potestad, abogada, divorcios, alimentos, testamentos, herencias, restitución internacional menores, sustracción menores, convenio la haya, Buenos Aires, Argentina',
  alternates: {
    canonical: 'https://draandreaesparza.com/',
    languages: { 'es-AR': 'https://draandreaesparza.com/' },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/',
    title:
      'Abogada Especialista en Derecho de Familia, Divorcios y Sucesiones en Buenos Aires | Dra. Andrea Esparza',
    description:
      'Abogada especialista en derecho de familia en Buenos Aires. Divorcios, divorcio express, sucesiones, cuota alimentaria y cuidado personal. Más de 25 años de experiencia.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg', width: 1200, height: 630 }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Abogada Especialista en Derecho de Familia, Divorcios y Sucesiones en Buenos Aires | Dra. Andrea Esparza',
    description:
      'Abogada especialista en derecho de familia, divorcios, divorcio express y sucesiones en Buenos Aires.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://maps.google.com/?cid=6939803818651803775',
  name: 'Estudio Jurídico Dra. Andrea Esparza',
  image: 'https://draandreaesparza.com/assets/images/og-home.jpg',
  logo: { '@type': 'ImageObject', url: 'https://draandreaesparza.com/assets/images/og-home.jpg', width: 1200, height: 630 },
  description: 'Estudio jurídico especializado en derecho de familia, adopción, sucesiones, violencia familiar y derecho internacional privado. Más de 25 años de experiencia en Buenos Aires, Argentina.',
  url: 'https://draandreaesparza.com',
  telephone: '+54-9-11-5561-7919',
  email: 'estudiomaesparza@gmail.com',
  address: { '@type': 'PostalAddress', streetAddress: 'Uruguay 651, Piso 14, Of. I', addressLocality: 'Ciudad Autónoma de Buenos Aires', addressRegion: 'Buenos Aires', postalCode: 'C1015ABM', addressCountry: 'AR' },
  geo: { '@type': 'GeoCoordinates', latitude: '-34.600924', longitude: '-58.386917' },
  areaServed: [{ '@type': 'City', name: 'Buenos Aires' }, { '@type': 'Country', name: 'Argentina' }],
  priceRange: '$$',
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }],
  founder: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    jobTitle: 'Abogada Especialista',
    alumniOf: { '@type': 'EducationalOrganization', name: 'Universidad de Buenos Aires' },
    memberOf: [
      { '@type': 'Organization', name: 'Instituto de Derecho Internacional Privado' },
      { '@type': 'Organization', name: 'Asociación de Profesionales contra la Sustracción Internacional de Menores de España (ASIME)' },
      { '@type': 'Organization', name: 'Asociación Argentina de Derecho Internacional' },
    ],
    sameAs: ['https://www.linkedin.com/in/maría-andrea-esparza-b478608b', 'https://www.asime.org/andrea-esparza/'],
    knowsAbout: ['Derecho de Familia', 'Adopción', 'Orden de Protección', 'Hogar de Niños', 'Juicio por Alimentos', 'Violencia Familiar', 'Violencia Doméstica', 'Sucesiones', 'Cuidado Personal Unilateral', 'Patria Potestad', 'Divorcios', 'Alimentos', 'Testamentos', 'Restitución Internacional de Menores', 'Derecho Internacional Privado', 'Convenio de La Haya'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Legales',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho de Familia', description: 'Divorcios, cuidado personal, patria potestad, alimentos, violencia familiar' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Adopción', description: 'Asesoramiento integral en procesos de adopción' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sucesiones y Testamentos', description: 'Tramitación de sucesiones y planificación testamentaria' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restitución Internacional de Menores', description: 'Casos de sustracción internacional bajo el Convenio de La Haya' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cuidado Personal de Hijos', url: 'https://draandreaesparza.com/servicios/cuidado-personal', description: 'Cuidado personal unilateral, compartido y alternado.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Violencia Familiar', url: 'https://draandreaesparza.com/servicios/violencia-familiar', description: 'Órdenes de protección, medidas perimetrales, exclusión del hogar.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medida de Protección Excepcional', url: 'https://draandreaesparza.com/servicios/medida-proteccion-excepcional', description: 'Control de legalidad, coordinación con CDNNyA y Defensoría Zonal.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho de Familia y Sucesiones Internacionales', url: 'https://draandreaesparza.com/servicios/derecho-familia-internacional', description: 'Divorcios internacionales, sucesiones con bienes en el exterior, alimentos transfronterizos.' } },
    ],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://draandreaesparza.com/#person',
  name: 'Maria Andrea Esparza',
  honorificPrefix: 'Dra.',
  jobTitle: 'Abogada Especialista en Derecho de Familia y Derecho Internacional Privado',
  description: 'Abogada con más de 25 años de experiencia en derecho de familia, sucesiones y derecho internacional privado en Buenos Aires.',
  url: 'https://draandreaesparza.com',
  email: 'mailto:estudiomaesparza@gmail.com',
  telephone: '+54-9-11-5561-7919',
  worksFor: { '@type': 'LegalService', name: 'Estudio Jurídico Dra. Andrea Esparza', url: 'https://draandreaesparza.com' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad de Buenos Aires' },
  knowsAbout: ['Derecho de Familia', 'Divorcios', 'Alimentos', 'Sucesiones', 'Restitución Internacional de Menores', 'Derecho Internacional Privado', 'Derecho Islámico', 'Finanzas Islámicas', 'Responsabilidad Parental Transfronteriza'],
  sameAs: ['https://www.linkedin.com/in/maría-andrea-esparza-b478608b', 'https://www.asime.org/andrea-esparza/'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Fundamentos del Derecho Islámico Relevantes para Disputas Familiares', credentialCategory: 'Certificate', recognizedBy: { '@type': 'EducationalOrganization', name: 'Elevify' } },
    { '@type': 'EducationalOccupationalCredential', name: 'DIP: Reconocimiento y Ejecución de Matrimonios Religiosos Extranjeros', credentialCategory: 'Certificate', recognizedBy: { '@type': 'EducationalOrganization', name: 'Elevify' } },
    { '@type': 'EducationalOccupationalCredential', name: 'Sustracción Internacional de Menores. Novedades del Derecho Nacional e Internacional (5ª Edición, 20 h)', credentialCategory: 'Certificate', recognizedBy: { '@type': 'Organization', name: 'Asociación de Profesionales contra la Sustracción Internacional de Menores de España (ASIME)' } },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cómo inicio un juicio por alimentos en Buenos Aires?', acceptedAnswer: { '@type': 'Answer', text: 'Para iniciar un juicio por alimentos, debe presentar una demanda ante el Juzgado de Familia correspondiente. Debe acreditar el vínculo familiar, la necesidad del alimentante y las posibilidades económicas del alimentado. Asesoramiento legal es fundamental para agilizar el proceso.' } },
    { '@type': 'Question', name: '¿Qué es el cuidado personal unilateral y cuándo se otorga?', acceptedAnswer: { '@type': 'Answer', text: 'El cuidado personal unilateral implica que uno solo de los progenitores tiene la responsabilidad cotidiana del hijo. Se otorga cuando es lo más conveniente para el niño, considerando su interés superior, edad, opinión y relación con cada progenitor.' } },
    { '@type': 'Question', name: '¿Cómo solicitar una orden de protección por violencia familiar?', acceptedAnswer: { '@type': 'Answer', text: 'Puede solicitarse en cualquier momento, de urgencia si es necesario, ante el Juzgado de Familia o la Oficina de Violencia Doméstica (OVD). La orden puede incluir exclusión del hogar, prohibición de acercamiento y otras medidas de protección inmediata.' } },
    { '@type': 'Question', name: '¿Cuál es la diferencia entre patria potestad, cuidado personal y régimen de comunicación?', acceptedAnswer: { '@type': 'Answer', text: 'La patria potestad se refiere a los deberes y derechos de los padres respecto de sus hijos menores. El cuidado personal es la convivencia cotidiana con el hijo. El régimen de comunicación regula el contacto con el progenitor que no convive de forma principal.' } },
    { '@type': 'Question', name: '¿Qué requisitos se necesitan para adopción en Argentina?', acceptedAnswer: { '@type': 'Answer', text: 'Los adoptantes deben estar inscriptos en el Registro de Adoptantes, tener al menos 25 años, diferencia de edad mínima de 16 años con el adoptado, y acreditar idoneidad física, psíquica, moral y económica.' } },
    { '@type': 'Question', name: '¿Qué hacer si mi hijo está en un hogar de niños?', acceptedAnswer: { '@type': 'Answer', text: 'Si su hijo fue separado de su cuidado, tiene derecho a ser informado, mantener comunicación y trabajar en un plan de fortalecimiento familiar para la revinculación. Es fundamental contar con asesoramiento legal especializado.' } },
    { '@type': 'Question', name: '¿Cómo se tramita una sucesión en Buenos Aires?', acceptedAnswer: { '@type': 'Answer', text: 'La sucesión se inicia ante el Juzgado Civil correspondiente al último domicilio del causante. Debe presentarse partida de defunción, certificado de bienes, declaración de herederos o testamento.' } },
    { '@type': 'Question', name: '¿Qué protección legal existe contra la violencia doméstica?', acceptedAnswer: { '@type': 'Answer', text: 'La Ley 26.485 y la Ley 114 (CABA) ofrecen múltiples recursos: órdenes de protección, exclusión del hogar, prohibición de contacto. La denuncia puede realizarse en comisarías, OVD o Juzgados de Familia.' } },
  ],
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Responsabilidad Parental Transfronteriza a la luz de la Convención de La Haya de 1996. Ante su reciente entrada en vigencia',
  description: 'Disertación de la Dra. María Andrea Esparza sobre la Convención de La Haya de 1996 y su impacto en la responsabilidad parental transfronteriza, organizada por el Instituto de Derecho Internacional Privado, de la Integración y Mercosur y el Instituto de Derecho de Familia, Niñez y Adolescencia del Colegio de Abogados de La Matanza.',
  startDate: '2026-05-15T14:30:00-03:00',
  endDate: '2026-05-15T16:30:00-03:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  inLanguage: 'es-AR',
  image: 'https://draandreaesparza.com/disertaciones/2026-05-15-responsabilidad-parental-transfronteriza-convencion-haya-1996.pdf',
  url: 'https://draandreaesparza.com/#formacion',
  location: [
    {
      '@type': 'Place',
      name: 'Sede Colegio de Abogados de La Matanza (CALM)',
      address: { '@type': 'PostalAddress', streetAddress: 'Entre Ríos 2942, PB', addressLocality: 'San Justo', addressRegion: 'Buenos Aires', addressCountry: 'AR' },
    },
    { '@type': 'VirtualLocation', url: 'https://zoom.us/' },
  ],
  performer: { '@type': 'Person', name: 'Dra. María Andrea Esparza', sameAs: 'https://draandreaesparza.com/#person' },
  organizer: [
    { '@type': 'Organization', name: 'Colegio de Abogados de La Matanza', url: 'https://colegiodelamatanza.com.ar/' },
    { '@type': 'Organization', name: 'Instituto de Derecho Internacional Privado, de la Integración y Mercosur (CALM)', url: 'https://colegiodelamatanza.com.ar/secretaria-academica/' },
    { '@type': 'Organization', name: 'Instituto de Derecho de Familia, Niñez y Adolescencia (CALM)', url: 'https://colegiodelamatanza.com.ar/secretaria-academica/' },
  ],
  offers: { '@type': 'Offer', url: 'mailto:departamentoacademico@colegiodelamatanza.com', availability: 'https://schema.org/InStock', validFrom: '2026-04-28T00:00:00-03:00', price: '0', priceCurrency: 'ARS' },
  about: ['Convención de La Haya de 1996', 'Responsabilidad Parental Transfronteriza', 'Derecho Internacional Privado', 'Derecho de Familia Internacional'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dra. Andrea Esparza - Estudio Jurídico',
  url: 'https://draandreaesparza.com',
  description: 'Estudio jurídico especializado en derecho de familia, adopción, sucesiones y derecho internacional privado en Buenos Aires, Argentina',
}

export default function HomePage() {
  return (
    <div className="App">
      <JsonLd data={legalServiceSchema} />
      <JsonLd data={personSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={eventSchema} />
      <JsonLd data={websiteSchema} />

      <Nav />
      <div className="mobile-overlay" />

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Dra. Andrea Esparza</h1>
            <p className="subtitle">Directora Adjunta<br />Instituto de Derecho Internacional Privado</p>
            <p className="description">Abogada especialista en derecho de familia en Buenos Aires. Divorcios, divorcio express, cuota alimentaria, cuidado personal, sucesiones, violencia familiar y restitución internacional de menores. +25 años de experiencia.</p>
            <TrackedLink href="#contact" trackEvent="cta_click" trackSource="hero_consulta" className="cta-button">
              Solicitar Consulta
            </TrackedLink>
          </div>
          <div className="hero-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/andrea-esparza-portrait-web.webp"
              alt="Dra. Andrea Esparza - Abogada Especialista en Derecho de Familia"
              width={1024}
              height={1024}
              className="profile-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Comunicaciones — flyers (imágenes + PDF) */}
      <section id="comunicaciones" className="comunicaciones-section">
        <div className="container">
          <div className="cards-grid flyers-grid">
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/exequatur.jpeg" alt="Exequátur: reconocimiento en Argentina de sentencias dictadas en el exterior." width={1254} height={1254} />
              <h3>Exequátur de sentencias extranjeras</h3>
              <p>Reconocimiento judicial en Argentina de sentencias de divorcio, alimentos, régimen de comunicación y otras dictadas en el exterior.</p>
              <p>
                <TrackedLink href="/comunicaciones/exequatur.pdf" trackEvent="cta_click" trackSource="flyer_exequatur_pdf" className="service-card-link" target="_blank" rel="noopener">
                  Ver flyer (PDF) →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/divorcios-internacionales.jpeg" alt="Divorcios internacionales: matrimonios celebrados en el exterior, competencia, ley aplicable y bienes en distintos países." width={1254} height={1254} />
              <h3>Divorcios internacionales</h3>
              <p>Validez del matrimonio extranjero, competencia judicial, ley aplicable y bienes en distintos países.</p>
              <p>
                <TrackedLink href="/comunicaciones/divorcios-internacionales.pdf" trackEvent="cta_click" trackSource="flyer_divorcios_internacionales_pdf" className="service-card-link" target="_blank" rel="noopener">
                  Ver flyer (PDF) →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/kafala-adopcion.jpeg" alt="Kafala y adopción: institución del derecho islámico que protege al niño sin crear vínculo de filiación." width={1254} height={1254} />
              <h3>Kafala y adopción</h3>
              <p>Institución del derecho islámico que permite cuidar y proteger a un menor sin crear vínculo filiatorio. Figuras análogas en Argentina.</p>
              <p>
                <TrackedLink href="/articulos/kafala-derecho-islamico-adopcion" trackEvent="cta_click" trackSource="flyer_kafala_adopcion_articulo" className="service-card-link">
                  Leer artículo completo →
                </TrackedLink>
                {' '}
                <TrackedLink href="/comunicaciones/kafala-adopcion.pdf" trackEvent="cta_click" trackSource="flyer_kafala_adopcion_pdf" className="service-card-link" target="_blank" rel="noopener">
                  Ver flyer (PDF) →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/responsabilidad-parental-transfronteriza-haya-1996.jpg" alt="Flyer de la disertación Responsabilidad Parental Transfronteriza a la luz de la Convención de La Haya de 1996." width={2469} height={2743} />
              <h3>Disertación: Responsabilidad Parental Transfronteriza</h3>
              <p>Flyer de la actividad del 15 de mayo de 2026 sobre la Convención de La Haya de 1996, organizada por el Colegio de Abogados de La Matanza.</p>
              <p>
                <TrackedLink href="/disertaciones/2026-05-15-responsabilidad-parental-transfronteriza-convencion-haya-1996.pdf" trackEvent="cta_click" trackSource="flyer_disertacion_haya_1996_pdf" className="service-card-link" target="_blank" rel="noopener">
                  Ver flyer (PDF) →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/cambio-residencia-ninos.jpeg" alt="Cambio de residencia de niños: autorización judicial de traslado y casos internacionales." width={400} height={400} />
              <h3>Cambio de residencia de niños</h3>
              <p>Mudarse con el hijo/a a otra ciudad o al exterior cuando el otro progenitor no está de acuerdo: autorización judicial, oposición y casos internacionales urgentes.</p>
              <p>
                <TrackedLink href="/articulos/cambio-residencia-hijos-autorizacion-judicial" trackEvent="cta_click" trackSource="flyer_cambio_residencia" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/hijos-otro-pais.jpeg" alt="Hijos viven en otro país: cómo mantener el vínculo con visitas y videollamadas." width={400} height={400} />
              <h3>Hijos que viven en otro país</h3>
              <p>Coordinación de viajes y visitas, videollamadas frecuentes y acuerdos legales válidos en ambos países para no perder el vínculo.</p>
              <p>
                <TrackedLink href="/articulos/hijos-viven-en-otro-pais-mantener-vinculo" trackEvent="cta_click" trackSource="flyer_hijos_otro_pais" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/violencia-vicaria.jpeg" alt="Violencia vicaria: lastimar a través de los hijos no es amor, es violencia." width={400} height={400} />
              <h3>Violencia vicaria</h3>
              <p>Lastimar a la otra persona a través de los hijos no es amor, es violencia. Cómo identificarla y qué hacer en consultas de derecho de familia nacional e internacional.</p>
              <p>
                <TrackedLink href="/articulos/violencia-vicaria-que-es" trackEvent="cta_click" trackSource="flyer_violencia_vicaria" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/traslado-internacional-menores.jpeg" alt="¿Sos extranjero y formaste una familia en Argentina? Traslado internacional de menores y restitución si volvés a tu país sin autorización." width={1024} height={1536} />
              <h3>Volver a tu país con tus hijos</h3>
              <p>Si sos extranjero y querés volver a tu país con tus hijos, un traslado sin autorización puede derivar en restitución internacional de menores.</p>
              <p>
                <TrackedLink href="/articulos/volver-al-pais-de-origen-con-hijos-traslado-internacional" trackEvent="cta_click" trackSource="flyer_volver_pais_origen" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/cese-cuota-alimentaria.jpeg" alt="¿Cuándo puede cesar la cuota alimentaria? Mayoría de edad, independencia económica y otras causales." width={1024} height={1536} />
              <h3>Cese de la cuota alimentaria</h3>
              <p>La cuota alimentaria no es para toda la vida: causales para pedir su cese y por qué nunca es automático.</p>
              <p>
                <TrackedLink href="/articulos/cuando-puede-cesar-la-cuota-alimentaria" trackEvent="cta_click" trackSource="flyer_cese_cuota_alimentaria" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/rectificacion-de-partidas.jpeg" alt="Rectificación de partidas: corregí errores en las actas del Registro Civil y protegé tu identidad." width={1024} height={1536} />
              <h3>Rectificación de partidas</h3>
              <p>Errores en tu partida de nacimiento, matrimonio o defunción: cuáles se corrigen ante el Registro Civil y cuáles requieren un juicio.</p>
              <p>
                <TrackedLink href="/articulos/rectificacion-de-partidas-registro-civil" trackEvent="cta_click" trackSource="flyer_rectificacion_partidas" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <FlyerImage src="/assets/images/flyers/divorcio-matrimonio-extranjero.jpeg" alt="¿Te casaste en el extranjero y tu cónyuge se trasladó a Argentina? Podrías divorciarte acá." width={853} height={1280} />
              <h3>Divorcio si te casaste en el extranjero</h3>
              <p>Si tu cónyuge se trasladó a Argentina, en muchos casos podés iniciar el divorcio en tribunales argentinos aunque te hayas casado en el exterior.</p>
              <p>
                <TrackedLink href="/articulos/divorcio-en-argentina-si-te-casaste-en-el-extranjero" trackEvent="cta_click" trackSource="flyer_divorcio_matrimonio_extranjero" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
            <div className="specialty-card flyer-card">
              <h3>Ley 27.806: cobro internacional de alimentos</h3>
              <p>Argentina ratificó el Convenio de La Haya de 2007 sobre Cobro Internacional de Alimentos. ¿Necesitás reclamar alimentos en otro país? Contactame 🌎⚖️</p>
              <p>
                <TrackedLink href="/articulos/ley-27806-convenio-haya-cobro-internacional-de-alimentos" trackEvent="cta_click" trackSource="flyer_ley_27806_alimentos" className="service-card-link">
                  Leer artículo →
                </TrackedLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>Trayectoria Profesional</h2>
          <div className="timeline">
            <div className="timeline-item highlight">
              <div className="timeline-year">1996 - Presente</div>
              <div className="timeline-content">
                <h3>Socia Fundadora - Estudio Jurídico Esparza</h3>
                <p><strong>Más de 25 años de experiencia profesional</strong> especializándose en más de 1,500 casos de derecho de familia, sucesiones y restitución internacional de menores.</p>
                <div className="experience-highlights">
                  <span className="badge">+1,500 casos resueltos</span>
                  <span className="badge">+25 años de experiencia</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008 - Presente</div>
              <div className="timeline-content">
                <h3>Directora Adjunta</h3>
                <p>Instituto de Derecho Internacional Privado</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2005 - Presente</div>
              <div className="timeline-content">
                <h3>Profesora Adjunta</h3>
                <p>Derecho internacional privado en la Facultad de Derecho de la UBA y UNLZ</p>
              </div>
            </div>
          </div>
          <div className="accomplishments">
            <h3>Logros Académicos y Profesionales</h3>
            <ul className="accomplishments-list">
              <li>Autora de artículos y capítulos de libros especializados en Derecho Internacional Privado</li>
              <li>Disertante en eventos académicos y conferencias sobre temas de derecho de familia internacional</li>
              <li>Miembro de la Asociación de Profesionales contra la Sustracción Internacional de Menores de España (ASIME) &mdash; certificación 5ª Edición &ldquo;Sustracción Internacional de Menores. Novedades del Derecho Nacional e Internacional&rdquo; (Madrid, mayo 2026, 20 h lectivas)</li>
              <li>Organiza capacitaciones virtuales para abogados especializados en derecho del niño, niña y adolescente</li>
              <li>Publicaciones en el Repositorio de la Universidad de Buenos Aires</li>
              <li>Miembro de la Asociación Argentina de Derecho Internacional</li>
              <li>Colaboradora del Instituto de Familia Internacional Multidisciplinar de España (IFIM)</li>
              <li>Docente del curso &ldquo;Responsabilidad Parental Transfronteriza&rdquo; — Colegio de Abogados de la Prov. de Buenos Aires y Fundación CIJUSO (2026)</li>
              <li>Disertante &mdash; &ldquo;Responsabilidad Parental Transfronteriza a la luz de la Convención de La Haya de 1996&rdquo;, Colegio de Abogados de La Matanza (15 de mayo de 2026, modalidad híbrida)</li>
              <li>Especialización en Derecho Islámico aplicado a Disputas Familiares y DIP — Elevify (2026)</li>
              <li>Publicada en Revista Internacional Personalidades Jurídicas, Vol. 1 (2024): &ldquo;Agencias Especializadas en Ley Islámica&rdquo;</li>
            </ul>
          </div>
          <div id="formacion" className="accomplishments">
            <h3>Formación Continua y Disertaciones</h3>
            <div className="cards-grid">
              <div className="specialty-card">
                <div className="card-icon">📅</div>
                <h3>Próxima disertación &mdash; 15 de mayo de 2026</h3>
                <h4>Responsabilidad Parental Transfronteriza a la luz de la Convención de La Haya de 1996</h4>
                <p>Colegio de Abogados de La Matanza (CALM). Organizan: Instituto de Derecho Internacional Privado, de la Integración y Mercosur e Instituto de Derecho de Familia, Niñez y Adolescencia. Modalidad híbrida (presencial en Entre Ríos 2942 PB, San Justo &middot; vía Zoom). Viernes 14:30 hs.</p>
                <p>
                  <a href="/disertaciones/2026-05-15-responsabilidad-parental-transfronteriza-convencion-haya-1996.pdf" target="_blank" rel="noopener" className="service-card-link">Ver flyer (PDF)</a>
                  {' · '}
                  <a href="mailto:departamentoacademico@colegiodelamatanza.com" className="service-card-link">Inscripción</a>
                </p>
              </div>
              <div className="specialty-card">
                <div className="card-icon">🎓</div>
                <h3>Docente</h3>
                <h4>Responsabilidad Parental Transfronteriza</h4>
                <p>Colegio de Abogados de la Prov. de Buenos Aires y Fundación CIJUSO. Capacitación dictada en marzo 2026.</p>
              </div>
              <div className="specialty-card">
                <div className="card-icon">📜</div>
                <h3>Certificación — ASIME (España)</h3>
                <h4>Sustracción Internacional de Menores. Novedades del Derecho Nacional e Internacional (5ª Edición)</h4>
                <p>Curso telemático de 20 horas lectivas de la Asociación de Profesionales contra la Sustracción Internacional de Menores de España. Madrid, 28 de mayo de 2026.</p>
                <p>
                  <TrackedLink href="/certificados/cert-asime-sustraccion-internacional-menores-5a-ed-2026-05-28.pdf" trackEvent="cta_click" trackSource="cert_asime_sustraccion_pdf" className="service-card-link" target="_blank" rel="noopener">Ver certificado (PDF)</TrackedLink>
                </p>
              </div>
              <div className="specialty-card">
                <div className="card-icon">📜</div>
                <h3>Certificación — Elevify</h3>
                <h4>Fundamentos del Derecho Islámico Relevantes para Disputas Familiares</h4>
                <p>Curso de derecho islámico, capítulo 2. Conforme a la Ley de Educación Nacional N° 26.206.</p>
              </div>
              <div className="specialty-card">
                <div className="card-icon">📜</div>
                <h3>Certificación — Elevify</h3>
                <h4>DIP: Reconocimiento y Ejecución de Matrimonios Religiosos Extranjeros</h4>
                <p>Curso de derecho islámico, capítulo 3. Conforme a la Ley de Educación Nacional N° 26.206.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="specialties-section">
        <div className="container">
          <h2>Áreas de Especialización</h2>
          <div className="cards-grid">
            <ExpandableCard
              icon="👪"
              title="Derecho de Familia - Divorcios y Alimentos"
              summary={<p>Divorcios, juicio por alimentos, cuidado personal unilateral, patria potestad, adopción, régimen de parentalidad, compensación económica, violencia familiar, violencia doméstica, orden de protección, hogar de niños y todas las cuestiones de derecho de familia en Argentina.</p>}
              expanded={
                <>
                  <h4>Normativa aplicable:</h4>
                  <ul>
                    <li><strong>Código Civil y Comercial de la Nación (Ley 26.994):</strong> regula el matrimonio, divorcio, responsabilidad parental, alimentos y cuidado personal.</li>
                    <li><strong>Ley 26.061:</strong> establece el derecho del niño a ser oído y protegido en conflictos familiares.</li>
                    <li><strong>Ley 114 (CABA):</strong> amplía la protección local para niños, niñas y adolescentes.</li>
                  </ul>
                </>
              }
              links={
                <>
                  <p><a href="/servicios/derecho-familia" className="service-card-link">Ver servicio completo</a></p>
                  <p>
                    <a href="/servicios/cuidado-personal" className="service-card-link">Cuidado personal de hijos</a>
                    {' · '}
                    <a href="/servicios/violencia-familiar" className="service-card-link">Violencia familiar</a>
                    {' · '}
                    <a href="/servicios/medida-proteccion-excepcional" className="service-card-link">Medida de protección excepcional</a>
                  </p>
                </>
              }
            />
            <ExpandableCard
              icon="⚖️"
              title="Sucesiones y Testamentos"
              summary={<p>Testamentos, herencias, partición de bienes hereditarios, sucesión intestada, legítima hereditaria y asesoramiento integral en materia sucesoria en Argentina.</p>}
              expanded={
                <>
                  <h4>Normativa aplicable:</h4>
                  <ul>
                    <li><strong>Código Civil y Comercial de la Nación (Libros Quinto y Sexto):</strong> regula testamentos, sucesión legítima, legítima hereditaria y procesos sucesorios.</li>
                    <li><strong>Ley 23.515:</strong> modificó el régimen de herencia en favor del cónyuge supérstite.</li>
                    <li><strong>Tratados internacionales bilaterales:</strong> rigen en caso de sucesiones con bienes o herederos en el extranjero.</li>
                  </ul>
                </>
              }
              links={<p><a href="/servicios/sucesiones" className="service-card-link">Ver servicio completo</a></p>}
            />
            <ExpandableCard
              icon="🌐"
              title="Derecho Internacional Privado - Restitución de Menores"
              summary={<p>Restitución internacional de menores, sustracción de menores, Convenio de La Haya, casos transfronterizos, jurisdicción internacional y derecho internacional privado.</p>}
              expanded={
                <>
                  <h4>Normativa aplicable:</h4>
                  <ul>
                    <li><strong>Convención sobre los Derechos del Niño (Ley 23.849):</strong> reconoce el derecho del niño a mantener vínculos familiares en contextos internacionales.</li>
                    <li><strong>Convenio de La Haya de 1980 (Ley 23.857):</strong> permite reclamar la restitución internacional del menor trasladado ilícitamente.</li>
                    <li><strong>Código Civil y Comercial (art. 2594 y ss.):</strong> regula conflictos de jurisdicción y reconocimiento de sentencias extranjeras.</li>
                  </ul>
                </>
              }
              links={
                <p>
                  <a href="/servicios/derecho-familia" className="service-card-link">Ver servicio completo</a>
                  {' · '}
                  <a href="/servicios/derecho-familia-internacional" className="service-card-link">Familia y sucesiones internacionales</a>
                </p>
              }
            />
          </div>
        </div>
      </section>

      {/* Consultas Frecuentes */}
      <section id="consultas-servicios" className="specialties-section">
        <div className="container">
          <h2>Consultas Frecuentes</h2>
          <div className="cards-grid">
            <div className="specialty-card">
              <div className="card-icon">💼</div>
              <h3>Abogado de Divorcio Express en Buenos Aires</h3>
              <p>Atención en divorcio de mutuo acuerdo o contencioso, con foco en tiempos del trámite, bienes, vivienda, cuidado personal y cuota alimentaria.</p>
              <p><a href="/servicios/divorcios-buenos-aires" className="service-card-link">Ir al servicio de divorcios</a></p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">🏛️</div>
              <h3>Cómo Hacer una Sucesión sin Testamento</h3>
              <p>Asesoramiento en declaratoria de herederos, inventario, partición e inscripción de inmuebles y automotores en el proceso sucesorio.</p>
              <p><a href="/servicios/sucesiones" className="service-card-link">Ir al servicio de sucesiones</a></p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">👶</div>
              <h3>Demanda de Alimentos para Hijos</h3>
              <p>Inicio de juicio de alimentos, alimentos provisorios, ejecución por incumplimiento y actualización de cuota según cada situación familiar.</p>
              <p><a href="/servicios/alimentos" className="service-card-link">Ir al servicio de alimentos</a></p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">👨‍👩‍👧</div>
              <h3>Cuidado Personal y Régimen de Comunicación</h3>
              <p>Intervención en cuidado personal unilateral o compartido, acuerdos parentales y régimen de comunicación con perspectiva de niñez.</p>
              <p><a href="/servicios/cuidado-personal" className="service-card-link">Ir al servicio de cuidado personal</a></p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">🛡️</div>
              <h3>Orden de Protección por Violencia Familiar</h3>
              <p>Medidas perimetrales, exclusión del hogar, denuncia en OVD y defensa de derechos en situaciones de violencia familiar.</p>
              <p><a href="/servicios/violencia-familiar" className="service-card-link">Ir al servicio de violencia familiar</a></p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">🏠</div>
              <h3>Medida de Protección Excepcional y Control de Legalidad</h3>
              <p>Asesoramiento cuando un hijo fue separado por una medida excepcional. Coordinación con CDNNyA, Defensoría Zonal y plan de egreso.</p>
              <p><a href="/servicios/medida-proteccion-excepcional" className="service-card-link">Ir al servicio de medida excepcional</a></p>
            </div>
            <div className="specialty-card">
              <div className="card-icon">🌐</div>
              <h3>Divorcio o Herencia con Elementos Internacionales</h3>
              <p>Divorcios internacionales, sucesiones con bienes en el exterior, alimentos transfronterizos y coordinación entre jurisdicciones.</p>
              <p><a href="/servicios/derecho-familia-internacional" className="service-card-link">Ir al servicio internacional</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2>Lo que dicen mis clientes</h2>
          <div className="testimonials-grid">
            <blockquote className="testimonial">
              <p>&ldquo;La Dra. Esparza me mantuvo siempre informada durante todo el proceso. Siempre estuve al tanto de cada avance en mi asunto legal.&rdquo;</p>
              <cite>— Cliente de Derecho de Familia</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;Su conocimiento del derecho internacional fue clave para resolver la restitución de mi hijo. Profesional excepcional.&rdquo;</p>
              <cite>— Caso de Restitución Internacional</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;Resolvió mi sucesión de manera eficiente y transparente. Me explicó cada paso con paciencia y claridad.&rdquo;</p>
              <cite>— Cliente de Sucesiones</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;Más que una abogada, es una consejera. Su calidez humana marca la diferencia en momentos difíciles.&rdquo;</p>
              <cite>— Cliente de Violencia Familiar</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;Profesional de excelencia, claridad e integridad. Su experiencia de más de 25 años se nota en cada detalle.&rdquo;</p>
              <cite>— Cliente de Compensación Económica</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;Logró que mi caso se resolviera en tiempo récord. Su estrategia legal fue impecable y efectiva.&rdquo;</p>
              <cite>— Cliente de Cuidado Personal</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>&ldquo;Hola Andrea, ¿cómo estás? La verdad, no tengo palabras para agradecerte todo lo que hiciste por mi bebé y por mí. Voy a estar agradecido siempre con tu trabajo y, sobre todo, con la paciencia que me tenés. Sé que esto aún no terminó, pero el poder abrazarla ya me devolvió el alma al cuerpo. Sos una excelente profesional. Gracias, gracias, gracias ❤️❤️❤️&rdquo;</p>
              <cite>— L.M.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="publications-section">
        <div className="container">
          <h2>Publicaciones y Medios Académicos</h2>

          <h3 className="section-subtitle">Artículos y Análisis Jurídicos</h3>
          <div className="publications-grid">
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el DIP</h4>
              <p>Análisis profundo de los conceptos de residencia habitual y centro de vida en el derecho internacional privado aplicado a niñez y adolescencia.</p>
              <div className="publication-meta"><span>Mayo 2025</span><span>•</span><span>DIP y Niñez</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/conceptos-ninez-adolescencia-dip" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
                <TrackedLink href="/articulos/revisando-conceptos-ninez-adolescencia-dip.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" download>📥 PDF</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Filiación, Técnicas de Reproducción Humana Asistida y Subrogación de Vientres</h4>
              <p>Dilemas bioéticos y jurídicos de la reproducción asistida y maternidad subrogada en el derecho internacional privado.</p>
              <div className="publication-meta"><span>Agosto 2022</span><span>•</span><span>Bioética y DIP</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/bioetica-reproduccion-asistida-subrogacion-vientres" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
                <TrackedLink href="/articulos/trabajo-bioetica.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" download>📥 PDF</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Finanzas en el Derecho Musulmán</h4>
              <p>Análisis de las finanzas islámicas, sus principios basados en la Sharía y los contratos compatibles con el derecho musulmán.</p>
              <div className="publication-meta"><span>Octubre 2023</span><span>•</span><span>Derecho Comparado</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/finanzas-islamicas-derecho-musulman" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
                <TrackedLink href="/articulos/trabajo-finanzas-islamicas-para-el-dial.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" download>📥 PDF</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Análisis Jurisprudencial</h3>
              <h4>Identidad de Género: Una Mirada Esperanzadora</h4>
              <p>Comentario sobre un fallo innovador de cambio de prenombre sin modificar género, analizando capacidad progresiva.</p>
              <div className="publication-meta"><span>Diciembre 2021</span><span>•</span><span>Derechos del Niño</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/identidad-de-genero-analisis-fallo" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
                <TrackedLink href="/articulos/comentario-a-fallo-sobre-identidad-de-genero.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" download>📥 PDF</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Historia del Derecho Musulmán y Sustracción de Menores</h4>
              <p>Caso Shaban-Arias Uriburu: análisis de sustracción internacional con elementos de derecho islámico.</p>
              <div className="publication-meta"><span>Noviembre 2007</span><span>•</span><span>DIP y Derecho Islámico</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/historia-derecho-musulman-sustraccion-menores" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
                <TrackedLink href="/articulos/historia-del-derecho-musulm-n-caso-sustracci-n-internacional-de-menores-shaban-arias-uriburu.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" download>📥 PDF</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Interés Superior del Niño vs. Tratados Internacionales</h4>
              <p>Análisis del conflicto entre el principio del interés superior del niño y obligaciones de tratados internacionales.</p>
              <div className="publication-meta"><span>Marzo 2015</span><span>•</span><span>Revista Panamá</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/interes-superior-nino-tratados-internacionales" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
                <TrackedLink href="/articulos/interes-superior-del-niño-vs-cumplimiento-de-tratados-internacionales-revista-panama.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" download>📥 PDF</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Problemas del DIP en Divorcio Internacional</h4>
              <p>Análisis de jurisdicción, ley aplicable y reconocimiento de sentencias extranjeras en casos de divorcio.</p>
              <div className="publication-meta"><span>Noviembre 2007</span><span>•</span><span>DIP</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/analisis-problemas-dip-divorcio-internacional" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
                <TrackedLink href="/articulos/analisis-de-los-problemas-generales-del-derecho-internacional-privado-vinculados-a-un-divorcio-de.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" download>📥 PDF</TrackedLink>
              </div>
            </div>
          </div>

          <h3 className="section-subtitle-extra">Publicaciones Académicas (RIDCA - AIDCA)</h3>
          <div className="publications-grid">
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>RIDCA - Revista Iberoamericana</h3>
              <h4>Filiación, técnicas de reproducción humana asistida y subrogación de vientres</h4>
              <p>Dilemas bioéticos en el derecho internacional privado.</p>
              <div className="publication-meta"><span>Diciembre 2022</span><span>•</span><span>RIDCA Nº 2</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/filiacion-reproduccion-asistida-subrogacion-dip" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>RIDCA - Revista Iberoamericana</h3>
              <h4>Finanzas en el Derecho Musulmán. Un viaje en el tiempo</h4>
              <p>Principios y contratos del comercio islámico.</p>
              <div className="publication-meta"><span>Julio 2023</span><span>•</span><span>RIDCA Nº 3</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/finanzas-derecho-musulman-ridca" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>RIDCA - Revista Iberoamericana</h3>
              <h4>Protección internacional de los adultos mayores</h4>
              <p>Marcos convencionales interamericanos y europeos.</p>
              <div className="publication-meta"><span>Diciembre 2023</span><span>•</span><span>RIDCA Nº 4</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/proteccion-internacional-adultos-mayores" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>RIDCA - Revista Iberoamericana</h3>
              <h4>Análisis de un fallo sobre identidad de género</h4>
              <p>Una mirada esperanzadora sobre autodeterminación.</p>
              <div className="publication-meta"><span>Julio 2024</span><span>•</span><span>RIDCA Nº 5</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/identidad-genero-fallo-ridca" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>RIDCA - Revista Iberoamericana</h3>
              <h4>Derecho Internacional Privado del Trabajo</h4>
              <p>Análisis de sentencia del TSJ de Venezuela.</p>
              <div className="publication-meta"><span>Marzo 2025</span><span>•</span><span>RIDCA Nº 7</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/dip-trabajo-sentencia-venezuela" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>RIDCA - Revista Iberoamericana</h3>
              <h4>Insolvencia transfronteriza en el derecho europeo</h4>
              <p>Caso INTEREDIL y el TJUE.</p>
              <div className="publication-meta"><span>Diciembre 2025</span><span>•</span><span>RIDCA Nº 8</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/insolvencia-transfronteriza-derecho-europeo" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
              </div>
            </div>
          </div>

          <h3 className="section-subtitle-extra">Otras Publicaciones y Actividades</h3>
          <div className="publications-grid">
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Revista Internacional</h3>
              <h4>Agencias Especializadas en Ley Islámica</h4>
              <p>Análisis de las agencias y comités de expertos (Sharia boards) en el tráfico financiero islámico, las fatawa y la práctica del opinion shopping.</p>
              <div className="publication-meta"><span>Septiembre 2024</span><span>•</span><span>Revista Internacional Personalidades Jurídicas, Vol. 1</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/agencias-especializadas-ley-islamica" trackEvent="publication_click" trackSource="homepage_read_article" className="read-btn">📖 Leer artículo</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo en Repositorio UBA</h3>
              <h4>&ldquo;Problemáticas en torno a la Restitución Internacional de Niños, Niñas y Adolescentes&rdquo;</h4>
              <p>Análisis especializado sobre los desafíos jurídicos en casos de sustracción internacional de menores conforme al Convenio de La Haya de 1980.</p>
              <div className="publication-meta"><span>Repositorio UBA</span><span>•</span><span>Derecho Internacional Privado</span></div>
              <div className="publication-actions">
                <TrackedLink href="/articulos/problematicas-en-torno-a-la-restitucion-internacional-de-ninos-ninas-y-adolescentes7911.pdf" trackEvent="publication_click" trackSource="homepage_download_pdf" className="download-btn" target="_blank" download>📥 Descargar PDF</TrackedLink>
                <TrackedLink href="https://repositoriouba.sisbi.uba.ar/gsdl/collect/juridica/index/assoc/HWA_7911.dir/7911.PDF" trackEvent="publication_click" trackSource="homepage_external_link" className="external-btn" target="_blank" rel="noopener noreferrer">🔗 Ver en UBA</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">🎥</div>
              <h3>Conferencia Magistral</h3>
              <h4>&ldquo;El Matrimonio y sus Efectos Internacionales&rdquo;</h4>
              <p>Disertación especializada sobre los aspectos jurídicos del matrimonio en el ámbito del derecho internacional privado.</p>
              <div className="publication-meta"><span>YouTube</span><span>•</span><span>7 de Septiembre 2021</span></div>
              <div className="publication-actions">
                <TrackedLink href="https://www.youtube.com/watch?v=lgmqemeKqA0" trackEvent="publication_click" trackSource="homepage_video_link" className="video-btn" target="_blank" rel="noopener noreferrer">▶️ Ver Video</TrackedLink>
              </div>
            </div>
            <div className="publication-card">
              <div className="publication-icon">🌍</div>
              <h3>Membresía Internacional</h3>
              <h4>ASIME - Asociación de Profesionales contra la Sustracción Internacional de Menores</h4>
              <p>Miembro activo de la asociación española dedicada a combatir la sustracción internacional de menores.</p>
              <div className="publication-meta"><span>España</span><span>•</span><span>Derecho Internacional</span></div>
              <div className="publication-actions">
                <TrackedLink href="https://www.asime.org/andrea-esparza/" trackEvent="publication_click" trackSource="homepage_external_link" className="external-btn" target="_blank" rel="noopener noreferrer">🔗 Ver Perfil ASIME</TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <details className="faq-item">
              <summary>¿Cómo inicio un juicio por alimentos en Buenos Aires?</summary>
              <p>Para iniciar un juicio por alimentos, debe presentar una demanda ante el Juzgado de Familia correspondiente. Debe acreditar el vínculo familiar, la necesidad del alimentante y las posibilidades económicas del alimentado. Asesoramiento legal es fundamental para agilizar el proceso.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué es el cuidado personal unilateral y cuándo se otorga?</summary>
              <p>El cuidado personal unilateral implica que uno solo de los progenitores tiene la responsabilidad cotidiana del hijo. Se otorga cuando es lo más conveniente para el niño, considerando su interés superior, edad, opinión y relación con cada progenitor.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cómo solicitar una orden de protección por violencia familiar?</summary>
              <p>Puede solicitarse en cualquier momento, de urgencia si es necesario, ante el Juzgado de Familia o la Oficina de Violencia Doméstica (OVD). La orden puede incluir exclusión del hogar, prohibición de acercamiento y otras medidas de protección inmediata.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cuál es la diferencia entre patria potestad, cuidado personal y régimen de comunicación?</summary>
              <p>La patria potestad se refiere a los deberes y derechos de los padres respecto de sus hijos menores. El cuidado personal es la convivencia cotidiana con el hijo. El régimen de comunicación regula el contacto con el progenitor que no convive de forma principal.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué requisitos se necesitan para adopción en Argentina?</summary>
              <p>Los adoptantes deben estar inscriptos en el Registro de Adoptantes, tener al menos 25 años, diferencia de edad mínima de 16 años con el adoptado, y acreditar idoneidad física, psíquica, moral y económica. El proceso incluye evaluaciones técnicas multidisciplinarias.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué hacer si mi hijo está en un hogar de niños?</summary>
              <p>Si su hijo fue separado de su cuidado y se encuentra en un hogar, tiene derecho a ser informado, mantener comunicación y trabajar en un plan de fortalecimiento familiar para la revinculación. Es fundamental contar con asesoramiento legal especializado.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cómo se tramita una sucesión en Buenos Aires?</summary>
              <p>La sucesión se inicia ante el Juzgado Civil correspondiente al último domicilio del causante. Debe presentarse partida de defunción, certificado de bienes, declaración de herederos o testamento. El proceso incluye inventario, avalúo y partición de bienes entre los herederos.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué protección legal existe contra la violencia doméstica?</summary>
              <p>La Ley 26.485 y la Ley 114 (CABA) ofrecen múltiples recursos: órdenes de protección, exclusión del hogar, prohibición de contacto, asistencia psicológica y legal gratuita. La denuncia puede realizarse en comisarías, OVD o Juzgados de Familia.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contacto</h2>
          <div className="contact-info-centered">
            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <strong>Dirección</strong>
                <TrackedLink
                  href="https://www.google.com/maps/place/Dra+Andrea+Esparza/@-34.6009193,-58.3894919,17z/data=!4m8!3m7!1s0x95bccb9af98c8873:0x606d2ea88931f07f!8m2!3d-34.6009237!4d-58.386917!9m1!1b1!16s%2Fg%2F11yt2stsc0?entry=ttu"
                  trackEvent="cta_click"
                  trackSource="contact_address_maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uruguay 651, Piso 14, Of. I, CABA
                </TrackedLink>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <strong>Email</strong>
                <a href="mailto:estudiomaesparza@gmail.com">estudiomaesparza@gmail.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <strong>WhatsApp</strong>
                <TrackedLink
                  href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20vengo%20de%20https://draandreaesparza.com%20y%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20legal."
                  trackEvent="whatsapp_click"
                  trackSource="contact_section"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 11 5561-7919
                </TrackedLink>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <strong>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/mar%C3%ADa-andrea-esparza-b478608b" target="_blank" rel="noopener noreferrer">Andrea Esparza</a>
              </div>
            </div>
            <div className="contact-map-wrapper">
              <h3>Ubicación del Estudio</h3>
              <TrackedLink
                href="https://www.google.com/maps/place/Dra+Andrea+Esparza/@-34.6009193,-58.3894919,17z"
                trackEvent="cta_click"
                trackSource="contact_map_link"
                className="contact-map-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en Google Maps
              </TrackedLink>
              <div className="contact-map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1282135637684!2d-58.38949192347668!3d-34.60091925735189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb9af98c8873%3A0x606d2ea88931f07f!2sDra%20Andrea%20Esparza!5e0!3m2!1sen!2sar!4v1770860983977!5m2!1sen!2sar"
                  className="map-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa del Estudio Jurídico Dra. Andrea Esparza"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
