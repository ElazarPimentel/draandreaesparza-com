import type { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: 'Cuidado Personal Unilateral: Qué Significa, Consecuencias y Tipos | Dra. Esparza',
  description:
    'Qué significa cuidado personal unilateral, consecuencias y diferencias con el compartido alternado o indistinto. Régimen de comunicación, centro de vida, Art. 648-656 CCyCN. Por Dra. Andrea Esparza.',
  keywords:
    'cuidado personal hijos, cuidado unilateral, cuidado compartido, tenencia hijos, con quién viven los hijos divorcio, régimen de comunicación, centro de vida, abogada familia Buenos Aires, Art 653 CCyCN',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/cuidado-personal',
    languages: { 'es-AR': 'https://draandreaesparza.com/servicios/cuidado-personal' },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/cuidado-personal',
    title: 'Cuidado Personal Unilateral: Qué Significa, Consecuencias y Tipos',
    description:
      'Qué significa cuidado personal unilateral, consecuencias y diferencias con el compartido alternado o indistinto. Por Dra. Andrea Esparza, abogada de familia en Buenos Aires.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuidado Personal Unilateral: Qué Significa, Consecuencias y Tipos',
    description:
      'Qué significa cuidado personal unilateral, consecuencias y diferencias con el compartido alternado o indistinto. Por Dra. Andrea Esparza, abogada de familia en Buenos Aires.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cuidado Personal de Hijos en Buenos Aires',
  description:
    'Abogada especialista en cuidado personal de hijos: cuidado unilateral, compartido y alternado. Régimen de comunicación, centro de vida, evaluaciones CIF y procesos judiciales.',
  provider: {
    '@type': 'LegalService',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
    address: { '@type': 'PostalAddress', streetAddress: 'Uruguay 651, Piso 14, Of. I', addressLocality: 'Ciudad Autónoma de Buenos Aires', addressRegion: 'Buenos Aires', postalCode: 'C1015ABM', addressCountry: 'AR' },
    telephone: '+54-9-11-5561-7919',
  },
  areaServed: { '@type': 'City', name: 'Buenos Aires' },
  offers: {
    '@type': 'Offer',
    description:
      'Asesoramiento legal en cuidado personal de hijos: unilateral, compartido, alternado, régimen de comunicación y centro de vida.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://draandreaesparza.com/#specialties' },
    { '@type': 'ListItem', position: 3, name: 'Cuidado Personal de Hijos', item: 'https://draandreaesparza.com/servicios/cuidado-personal' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Con quién viven los hijos después de un divorcio en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Código Civil y Comercial (Art. 651) establece que el cuidado personal compartido en modalidad indistinta es la regla. Esto significa que ambos padres comparten las decisiones cotidianas del hijo y uno de ellos tiene la residencia principal. Solo excepcionalmente, cuando el cuidado compartido resulte perjudicial para el hijo, el juez otorgará el cuidado unilateral a uno de los progenitores.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre cuidado personal unilateral y compartido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el cuidado compartido, ambos padres participan en la vida cotidiana del hijo (modalidad indistinta) o el hijo alterna períodos con cada uno (modalidad alternada). En el cuidado unilateral, un solo progenitor tiene la responsabilidad de la vida diaria y el otro mantiene un régimen de comunicación (visitas). El cuidado unilateral es excepcional y requiere demostrar que el compartido es perjudicial (Art. 653 CCyCN).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué factores considera el juez para otorgar el cuidado unilateral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Art. 653 del CCyCN establece cuatro factores: (a) quién facilita más el contacto con el otro progenitor, (b) la edad del hijo y necesidad de continuidad del cuidador primario, (c) la opinión del hijo según su edad y madurez, y (d) el mantenimiento de la situación existente y el centro de vida del niño. El juez analiza conductas concretas, no estereotipos de género ni condición económica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el centro de vida del niño?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Definido en la Ley 26.061 (Art. 3 inc. f), el centro de vida es el lugar donde el niño vivió legítimamente la mayor parte de su existencia. Incluye su escuela, amigos, rutinas y entorno familiar. El juez lo protege para evitar cambios disruptivos, salvo que la seguridad del niño requiera un traslado. Es un factor clave en las decisiones sobre cuidado personal.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda un juicio de cuidado personal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los plazos varían según la complejidad. En general: la evaluación CIF (Cuerpo Interdisciplinario Forense) demora entre 3 y 5 meses; los informes de Defensoría Zonal entre 4 y 8 semanas; y la resolución judicial entre 2 y 6 meses más. El proceso completo puede llevar entre 6 meses y 2 años. Sin embargo, el juez puede dictar medidas provisorias urgentes en días.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede modificar el cuidado personal una vez establecido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, el cuidado personal puede modificarse siempre que cambien las circunstancias que motivaron la decisión original. Por ejemplo: si el progenitor que tiene el cuidado obstaculiza el contacto con el otro padre, si se detectan situaciones de violencia o negligencia, o si el hijo expresa un deseo fundado de cambiar. Se debe iniciar un nuevo pedido judicial con las pruebas correspondientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el régimen de comunicación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "El régimen de comunicación (antes llamado 'régimen de visitas') es el derecho del progenitor que no convive con el hijo a mantener contacto regular. Incluye visitas presenciales, comunicación telefónica o por videollamada, pernoctes, y tiempo en vacaciones y días festivos. Se establece por acuerdo de los padres o por decisión judicial, y puede ser progresivo (comenzar con encuentros supervisados y avanzar a contacto libre con pernoctes).",
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si un padre impide el contacto del hijo con el otro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Obstaculizar el contacto entre un hijo y su otro progenitor es una conducta grave. El juez puede: imponer multas económicas (astreintes), modificar el cuidado personal a favor del padre facilitador, e incluso derivar actuaciones penales bajo la Ley 24.270 que sanciona con prisión de 1 mes a 3 años el impedimento de contacto. Esta conducta es un factor determinante para el cambio de cuidado (Art. 653 inc. a CCyCN).',
      },
    },
    {
      '@type': 'Question',
      name: '¿El padre tiene los mismos derechos que la madre sobre el cuidado de los hijos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutamente sí. El Código Civil y Comercial no distingue entre padre y madre para el ejercicio de la responsabilidad parental ni del cuidado personal. Las decisiones deben basarse en conductas concretas, no en estereotipos de género (Art. 656 CCyCN). La Corte Interamericana de Derechos Humanos, en el caso Fornerón vs. Argentina (2012), condenó expresamente las presunciones basadas en el sexo del progenitor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la evaluación CIF y cómo influye en el cuidado personal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La evaluación CIF (Cuerpo Interdisciplinario Forense) es un estudio psicológico y social realizado por profesionales independientes del Poder Judicial. Evalúa las competencias parentales, el vínculo con los hijos, la presencia de violencia y la capacidad de cada progenitor para garantizar el bienestar del niño. Sus conclusiones son uno de los elementos de prueba más influyentes en la decisión judicial sobre cuidado personal.',
      },
    },
  ],
}

export default function CuidadoPersonalPage() {
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
            { label: 'Cuidado Personal de Hijos' },
          ]}
        />

        <header className="service-header">
          <h1>Cuidado Personal de Hijos: Unilateral, Compartido y Alternado</h1>
          <p className="service-intro">
            Asesoramiento legal especializado para definir con quién vivirán sus hijos tras una
            separación o divorcio. Más de 25 años de experiencia en derecho de familia en Buenos
            Aires.
          </p>
        </header>

        <div className="service-content">
          <div className="article-cta-box" style={{ background: '#f4f7fb', padding: '1rem 1.25rem', borderLeft: '4px solid #1a365d', margin: '0 0 1.5rem 0', borderRadius: '4px' }}>
            <p style={{ margin: 0 }}>
              <strong>¿Buscaste &ldquo;tenencia de hijos&rdquo; o &ldquo;patria potestad&rdquo;?</strong>{' '}
              Esos términos cambiaron de nombre en 2015 (Código Civil y Comercial). Hoy se llaman{' '}
              <strong>cuidado personal</strong> y <strong>responsabilidad parental</strong>.{' '}
              <TrackedLink
                href="/articulos/responsabilidad-parental-patria-potestad-tenencia"
                trackEvent="cta_click"
                trackSource="cuidado_personal_to_terminologia_hub"
              >
                Leé la explicación completa →
              </TrackedLink>
            </p>
          </div>

          <h2>¿Qué Es el Cuidado Personal de los Hijos?</h2>
          <p>
            El cuidado personal - anteriormente conocido como &ldquo;tenencia&rdquo; - es el
            conjunto de deberes y facultades de los padres respecto de la vida cotidiana de sus
            hijos (Art. 648 del Código Civil y Comercial de la Nación). Comprende las decisiones
            diarias sobre alimentación, higiene, educación, salud, recreación y todas las
            cuestiones relacionadas con el día a día del niño.
          </p>
          <p>
            Es importante distinguirlo de la <strong>responsabilidad parental</strong> (Art. 641
            CCyCN), que abarca las grandes decisiones sobre la vida del hijo: elección de escuela,
            tratamientos médicos importantes, viajes al exterior, administración de bienes. La
            responsabilidad parental se mantiene compartida por ambos padres aún cuando el cuidado
            personal sea unilateral.
          </p>

          <h2>Modalidades de Cuidado Personal</h2>
          <p>
            El Código Civil y Comercial establece tres modalidades de cuidado personal, ordenadas
            según la preferencia legal:
          </p>

          <h3>1. Cuidado Personal Compartido Indistinto (Regla General)</h3>
          <p>
            El <strong>Art. 651 del Código Civil y Comercial</strong> establece textualmente:
            &ldquo;A pedido de uno o ambos progenitores o de oficio, el juez debe otorgar, como
            primera alternativa, el cuidado compartido del hijo con la modalidad indistinta,
            excepto que no sea posible o resulte perjudicial para el hijo&rdquo;.
          </p>
          <p>
            En esta modalidad, ambos progenitores comparten las decisiones cotidianas del hijo,
            quien tiene su residencia principal con uno de ellos. El otro progenitor mantiene un
            contacto fluido y participa activamente en la crianza. Esta es la <strong>regla
            general</strong> porque garantiza el derecho del niño a mantener vínculo con ambos
            padres y refleja el principio del interés superior del niño.
          </p>

          <h3>2. Cuidado Personal Compartido Alternado</h3>
          <p>
            El hijo alterna períodos de convivencia con cada progenitor (por ejemplo, una semana
            con cada uno). Requiere alto nivel de cooperación entre los padres, cercanía geográfica
            y estabilidad en las rutinas del niño. Es menos frecuente porque puede ser disruptivo
            para la escolarización y la vida social del hijo.
          </p>

          <h3>3. Cuidado Personal Unilateral (Excepcional)</h3>
          <p>
            Un solo progenitor tiene el cuidado cotidiano del hijo. El otro mantiene un{' '}
            <strong>régimen de comunicación</strong> (visitas, contacto telefónico, pernoctes). Es
            una medida <strong>excepcional</strong> que solo se otorga cuando el cuidado compartido
            resulta imposible o perjudicial para el niño (Art. 653 CCyCN).
          </p>

          <h2>¿Cuándo Procede el Cuidado Unilateral?</h2>
          <p>
            El Art. 653 del CCyCN establece cuatro factores que el juez debe ponderar al decidir
            sobre el cuidado unilateral. Estos criterios se aplican de manera conjunta, evaluando
            las <strong>conductas concretas</strong> de cada progenitor:
          </p>

          <h3>Factor A: Progenitor Facilitador</h3>
          <p>
            Se prioriza al progenitor que <strong>facilita el contacto regular</strong> del hijo
            con el otro padre. Las conductas obstructivas - como bloquear llamadas, impedir
            visitas, no informar sobre actividades escolares o denigrar al otro progenitor frente
            al hijo - constituyen un factor en contra de quien las realiza. La jurisprudencia
            argentina ha otorgado cuidado unilateral al padre facilitador en múltiples casos donde
            el otro progenitor obstaculizaba sistemáticamente el vínculo.
          </p>

          <h3>Factor B: Edad del Hijo</h3>
          <p>
            Los hijos de corta edad (especialmente menores de 3 años) requieren continuidad con su
            cuidador primario, ya que el vínculo de apego temprano es fundamental para su
            desarrollo emocional. Sin embargo, este factor no es absoluto: si el cuidador primario
            presenta conductas de negligencia o violencia, prevalece la seguridad del niño.
          </p>

          <h3>Factor C: Opinión del Hijo</h3>
          <p>
            Los niños tienen derecho a ser escuchados en todas las decisiones que los afecten
            (Art. 707 CCyCN, Ley 26.061). Su opinión se pondera según edad y madurez. A partir de
            los 13 años, su consentimiento es necesario para ciertas decisiones importantes. El
            juez debe escuchar al niño en un ambiente adecuado y confidencial. Las declaraciones
            espontáneas del niño ante distintos profesionales (psicólogos, trabajadores sociales,
            personal institucional) tienen especial valor probatorio.
          </p>

          <h3>Factor D: Situación Existente y Centro de Vida</h3>
          <p>
            El <strong>centro de vida</strong> del niño (Ley 26.061, Art. 3 inc. f) es el lugar
            donde vivió legítimamente la mayor parte de su existencia: su escuela, sus amigos, sus
            rutinas, su entorno conocido. El juez protege esta estabilidad para evitar cambios
            disruptivos, a menos que la seguridad del hijo exija un traslado. Sin embargo, una
            situación de hecho originada en negligencia o abuso no genera legitimidad para retener
            el cuidado.
          </p>

          <h2>Consecuencias del Cuidado Personal Unilateral</h2>
          <p>
            Que el cuidado personal sea unilateral tiene consecuencias jurídicas y prácticas
            concretas, tanto para el progenitor que lo ejerce como para el que no convive
            cotidianamente con el hijo:
          </p>
          <ul>
            <li>
              <strong>Toma de decisiones cotidianas:</strong> el progenitor con cuidado unilateral
              decide sobre alimentación, higiene, rutinas y actividades diarias del hijo sin
              necesidad de consultar al otro
            </li>
            <li>
              <strong>La responsabilidad parental sigue siendo compartida:</strong> las decisiones
              importantes (escuela, salud grave, viajes al exterior, administración de bienes)
              siguen requiriendo el acuerdo de ambos padres (Arts. 641 y 645 CCyCN)
            </li>
            <li>
              <strong>Régimen de comunicación obligatorio para el otro progenitor:</strong> no es
              opcional. El progenitor no conviviente tiene el derecho y el deber de mantener
              contacto regular con su hijo (Art. 652 CCyCN)
            </li>
            <li>
              <strong>Cuota alimentaria:</strong> el progenitor que no convive habitualmente debe
              contribuir económicamente. La cuota se calcula sobre sus ingresos y necesidades del
              hijo, independientemente de quién ejerza el cuidado
            </li>
            <li>
              <strong>Riesgo de revisión judicial:</strong> si el progenitor con cuidado unilateral
              obstaculiza el contacto del hijo con el otro padre, puede perder esa modalidad de
              cuidado (Art. 653 inc. a CCyCN)
            </li>
            <li>
              <strong>Impacto emocional sobre el niño:</strong> los estudios psicológicos coinciden
              en que el cuidado unilateral, cuando no es necesario, puede afectar el desarrollo
              emocional del niño al privarlo del contacto cotidiano con uno de sus padres. Por eso
              la ley lo trata como excepción, no como regla
            </li>
          </ul>

          <h2>El Proceso Judicial: Cómo Funciona en la Práctica</h2>
          <p>
            Un proceso de cuidado personal en los tribunales de Buenos Aires atraviesa varias
            etapas. Conocer los tiempos reales ayuda a planificar adecuadamente:
          </p>

          <h3>Etapa 1: Presentación y Medidas Urgentes</h3>
          <p>
            Al iniciar la demanda, si existe una situación de urgencia (violencia, negligencia,
            riesgo para el niño), el juez puede dictar <strong>medidas provisorias</strong> en el
            plazo de 24 a 72 horas. Estas medidas establecen un régimen provisorio de cuidado
            mientras se sustancia el proceso principal.
          </p>

          <h3>Etapa 2: Evaluación Pericial (3 a 5 meses)</h3>
          <p>
            El juez suele ordenar una <strong>evaluación del CIF</strong> (Cuerpo
            Interdisciplinario Forense), un equipo de psicólogos, psiquiatras y trabajadores
            sociales del Poder Judicial. El CIF evalúa las competencias parentales de ambos
            progenitores, el vínculo de apego con los hijos, la presencia de indicadores de
            violencia y la capacidad de cada padre para garantizar el bienestar del niño. Sus
            conclusiones son uno de los elementos más influyentes en la decisión judicial.
          </p>

          <h3>Etapa 3: Informes Institucionales (4 a 8 semanas)</h3>
          <p>
            La <strong>Defensoría Zonal</strong> (DZ) correspondiente realiza una evaluación
            interdisciplinaria del grupo familiar, incluyendo visitas domiciliarias, entrevistas
            con ambos padres y con los niños, y relevamiento de informes escolares y médicos. Sus
            informes técnicos complementan la evaluación del CIF.
          </p>

          <h3>Etapa 4: Audiencia y Resolución (2 a 6 meses)</h3>
          <p>
            El juez convoca a audiencia donde escucha a las partes y al niño (Art. 707 CCyCN),
            examina la prueba producida y dicta resolución. La sentencia puede establecer el tipo
            de cuidado, el régimen de comunicación detallado (días, horarios, pernoctes,
            vacaciones) y las obligaciones de ambos progenitores.
          </p>

          <h3>Plazos Totales</h3>
          <p>
            El proceso completo, desde la demanda hasta la resolución definitiva, puede tomar entre{' '}
            <strong>6 meses y 2 años</strong> dependiendo de la complejidad del caso, la carga del
            juzgado y la cooperación de las partes. Las medidas provisorias aseguran la protección
            del niño durante todo el proceso.
          </p>

          <h2>El Régimen de Comunicación</h2>
          <p>
            Cuando el cuidado es unilateral, el progenitor no conviviente tiene el derecho y la
            obligación de mantener un <strong>régimen de comunicación</strong> regular con su hijo
            (Art. 652 CCyCN). Este régimen puede ser:
          </p>
          <ul>
            <li>
              <strong>Visitas presenciales:</strong> Con horarios y días definidos, con o sin
              pernocte
            </li>
            <li>
              <strong>Comunicación a distancia:</strong> Llamadas telefónicas, videollamadas,
              mensajes
            </li>
            <li>
              <strong>Vacaciones:</strong> Distribución de períodos de receso escolar y días
              festivos
            </li>
            <li>
              <strong>Régimen progresivo:</strong> Cuando es necesario reconstruir el vínculo, se
              comienza con encuentros supervisados y se avanza gradualmente a contacto libre con
              pernoctes
            </li>
          </ul>
          <p>
            En la práctica, un régimen progresivo típico avanza así: primero contacto supervisado
            en un espacio institucional, luego visitas supervisadas fuera de la institución,
            después visitas sin supervisión, posteriormente pernoctes, y finalmente un régimen
            amplio con fines de semana completos. Este proceso puede tomar entre 3 y 8 meses según
            las circunstancias.
          </p>

          <h2>Plan de Parentalidad</h2>
          <p>
            El Art. 655 del CCyCN establece que los progenitores pueden acordar un{' '}
            <strong>plan de parentalidad</strong> que organice la vida del hijo. Este plan puede
            incluir:
          </p>
          <ul>
            <li>Lugar y tiempo que el hijo pasará con cada progenitor</li>
            <li>
              Responsabilidades de cada padre (llevar al colegio, turnos médicos, actividades)
            </li>
            <li>Distribución de vacaciones, feriados y fechas especiales</li>
            <li>Modalidad de comunicación con el progenitor no conviviente</li>
            <li>Pautas para resolver desacuerdos sobre cuestiones cotidianas</li>
          </ul>
          <p>
            Si los padres no logran un acuerdo, el juez lo establece priorizando el cuidado
            compartido indistinto, salvo que existan conductas concretas que justifiquen el cuidado
            unilateral (Art. 656 CCyCN).
          </p>

          <h2>Acuerdo de Cuidado Personal: Cómo Hacerlo</h2>
          <p>
            Los progenitores pueden y deben intentar arribar a un <strong>acuerdo de cuidado
            personal</strong> antes de litigar. Un buen acuerdo evita años de conflicto judicial,
            reduce el desgaste emocional para los hijos y permite que las propias partes definan
            la organización familiar en lugar de delegarla en el juez.
          </p>
          <p>
            Un acuerdo de cuidado personal debe contener al menos:
          </p>
          <ul>
            <li>
              <strong>Modalidad:</strong> compartido indistinto, compartido alternado o unilateral,
              y los motivos de la elección
            </li>
            <li>
              <strong>Residencia principal:</strong> con qué progenitor vivirá habitualmente el
              hijo (en el indistinto y unilateral)
            </li>
            <li>
              <strong>Régimen de comunicación detallado:</strong> días, horarios, pernoctes,
              vacaciones de verano e invierno, fines de semana largos, fechas especiales
              (cumpleaños, Día del Niño, Navidad, Año Nuevo)
            </li>
            <li>
              <strong>Distribución de gastos:</strong> cuota alimentaria, salud, educación,
              actividades extracurriculares, vestimenta
            </li>
            <li>
              <strong>Decisiones importantes:</strong> mecanismos para resolver desacuerdos sobre
              escuela, tratamientos médicos, viajes
            </li>
            <li>
              <strong>Comunicación entre progenitores:</strong> cómo se informarán mutuamente
              sobre la salud, el rendimiento escolar y las actividades del hijo
            </li>
            <li>
              <strong>Cláusula de revisión:</strong> el acuerdo puede modificarse cuando cambien
              las circunstancias o por nueva edad del niño
            </li>
          </ul>
          <p>
            Para que el acuerdo tenga <strong>fuerza ejecutiva</strong> (es decir, que pueda
            hacerse cumplir judicialmente sin tener que litigar todo de nuevo), debe ser{' '}
            <strong>homologado por el juez de familia</strong>. La homologación verifica que el
            acuerdo respete el interés superior del niño y le da el mismo valor que una sentencia.
          </p>

          <h2>Obstrucción del Vínculo Paterno/Materno-Filial</h2>
          <p>
            La obstrucción del vínculo se produce cuando un progenitor impide, obstaculiza o
            interfiere sistemáticamente en la relación del hijo con el otro padre. Los tribunales
            argentinos consideran esta conducta gravemente perjudicial para el niño y un factor
            determinante en las decisiones sobre cuidado personal.
          </p>
          <p>Las consecuencias legales de la obstrucción de vínculo incluyen:</p>
          <ul>
            <li>
              <strong>Multas económicas (astreintes):</strong> Sanciones por cada incumplimiento
              del régimen de comunicación (Arts. 557 y 804 CCyCN)
            </li>
            <li>
              <strong>Modificación del cuidado:</strong> El juez puede transferir el cuidado al
              progenitor facilitador
            </li>
            <li>
              <strong>Sanciones penales:</strong> La Ley 24.270 sanciona con prisión de 1 mes a 1
              año al progenitor que impida el contacto del hijo con el otro padre, agravándose a 6
              meses a 3 años si el menor tiene menos de 10 años
            </li>
            <li>
              <strong>Tratamiento obligatorio:</strong> El juez puede ordenar terapia parental y
              programas de revinculación
            </li>
          </ul>

          <h2>Marco Legal Aplicable</h2>
          <p>
            Las principales normas que regulan el cuidado personal de los hijos en Argentina son:
          </p>
          <ul>
            <li>
              <strong>Código Civil y Comercial de la Nación:</strong> Arts. 639 (principios de
              responsabilidad parental), 648-656 (cuidado personal), 700 (privación de
              responsabilidad parental), 706-707 (proceso de familia)
            </li>
            <li>
              <strong>Ley 26.061</strong> (Protección Integral de Derechos de Niños, Niñas y
              Adolescentes): Arts. 3 (interés superior y centro de vida), 7, 11 (derecho a crecer
              en familia de origen), 33 (recursos materiales no justifican separación)
            </li>
            <li>
              <strong>Ley 24.270</strong> (Impedimento de Contacto): Sanciones penales por
              obstrucción del vínculo paterno/materno-filial
            </li>
            <li>
              <strong>Convención sobre los Derechos del Niño</strong> (rango constitucional): Arts.
              3, 9, 12 (interés superior, no separación, derecho a ser oído)
            </li>
          </ul>

          <h2>Caso Ilustrativo: Cuando la Obstrucción Cambia el Cuidado</h2>
          <p>
            En un caso resuelto por la justicia bonaerense, una madre impedía sistemáticamente el
            contacto entre sus hijos y el padre: bloqueaba llamadas telefónicas, cancelaba visitas
            de último momento y hacía comentarios negativos sobre el padre frente a los niños. Los
            informes interdisciplinarios documentaron el patrón obstructivo y evaluaron
            positivamente las competencias parentales del padre.
          </p>
          <p>
            El tribunal aplicó el Art. 653 inc. a) del CCyCN - priorizando al progenitor
            facilitador - y otorgó el cuidado personal unilateral al padre, estableciendo un
            régimen de comunicación progresivo para la madre condicionado a su participación en
            terapia parental. La decisión se fundó en que el cuidado compartido era inviable
            mientras persistiera la obstrucción y en que el bienestar de los niños requería
            preservar el vínculo con ambos padres.
          </p>

          <h2>¿Qué Documentación Conviene Preparar?</h2>
          <p>
            La evidencia documental es fundamental en los procesos de cuidado personal. Es
            recomendable reunir y conservar:
          </p>
          <ul>
            <li>Comprobantes de gastos del hijo (escuela, salud, actividades, vestimenta)</li>
            <li>
              Registros de comunicación con el otro progenitor (mensajes, correos)
            </li>
            <li>
              Constancias de asistencia a turnos médicos, reuniones escolares y actividades
            </li>
            <li>
              Fotos del hogar mostrando las condiciones de habitabilidad y el espacio del hijo
            </li>
            <li>Libretas de vacunación y controles pediátricos al día</li>
            <li>Comprobantes de transferencias bancarias por alimentos</li>
            <li>Informes escolares sobre rendimiento y asistencia del hijo</li>
          </ul>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes sobre Cuidado Personal</h2>

          <div className="faq-item">
            <h3>¿Con quién viven los hijos después de un divorcio en Argentina?</h3>
            <p>
              El Código Civil y Comercial (Art. 651) establece que el cuidado personal compartido
              en modalidad indistinta es la regla. Esto significa que ambos padres comparten las
              decisiones cotidianas del hijo y uno de ellos tiene la residencia principal. Solo
              excepcionalmente, cuando el cuidado compartido resulte perjudicial para el hijo, el
              juez otorgará el cuidado unilateral a uno de los progenitores.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué diferencia hay entre cuidado personal unilateral y compartido?</h3>
            <p>
              En el cuidado compartido, ambos padres participan en la vida cotidiana del hijo
              (modalidad indistinta) o el hijo alterna períodos con cada uno (modalidad alternada).
              En el cuidado unilateral, un solo progenitor tiene la responsabilidad de la vida
              diaria y el otro mantiene un régimen de comunicación (visitas). El cuidado unilateral
              es excepcional y requiere demostrar que el compartido es perjudicial (Art. 653
              CCyCN).
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué factores considera el juez para otorgar el cuidado unilateral?</h3>
            <p>
              El Art. 653 del CCyCN establece cuatro factores: (a) quién facilita más el contacto
              con el otro progenitor, (b) la edad del hijo y necesidad de continuidad del cuidador
              primario, (c) la opinión del hijo según su edad y madurez, y (d) el mantenimiento de
              la situación existente y el centro de vida del niño. El juez analiza conductas
              concretas, no estereotipos de género ni condición económica.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es el centro de vida del niño?</h3>
            <p>
              Definido en la Ley 26.061 (Art. 3 inc. f), el centro de vida es el lugar donde el
              niño vivió legítimamente la mayor parte de su existencia. Incluye su escuela, amigos,
              rutinas y entorno familiar. El juez lo protege para evitar cambios disruptivos, salvo
              que la seguridad del niño requiera un traslado. Es un factor clave en las decisiones
              sobre cuidado personal.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto tarda un juicio de cuidado personal?</h3>
            <p>
              Los plazos varían según la complejidad. En general: la evaluación CIF demora entre 3
              y 5 meses; los informes de Defensoría Zonal entre 4 y 8 semanas; y la resolución
              judicial entre 2 y 6 meses más. El proceso completo puede llevar entre 6 meses y 2
              años. Sin embargo, el juez puede dictar medidas provisorias urgentes en días.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Se puede modificar el cuidado personal una vez establecido?</h3>
            <p>
              Sí, el cuidado personal puede modificarse siempre que cambien las circunstancias que
              motivaron la decisión original. Por ejemplo: si el progenitor que tiene el cuidado
              obstaculiza el contacto con el otro padre, si se detectan situaciones de violencia o
              negligencia, o si el hijo expresa un deseo fundado de cambiar. Se debe iniciar un
              nuevo pedido judicial con las pruebas correspondientes.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es el régimen de comunicación?</h3>
            <p>
              El régimen de comunicación (antes llamado &ldquo;régimen de visitas&rdquo;) es el
              derecho del progenitor que no convive con el hijo a mantener contacto regular.
              Incluye visitas presenciales, comunicación telefónica o por videollamada, pernoctes,
              y tiempo en vacaciones y días festivos. Se establece por acuerdo de los padres o por
              decisión judicial, y puede ser progresivo.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué pasa si un padre impide el contacto del hijo con el otro?</h3>
            <p>
              Obstaculizar el contacto entre un hijo y su otro progenitor es una conducta grave. El
              juez puede imponer multas económicas, modificar el cuidado personal a favor del padre
              facilitador, y derivar actuaciones penales bajo la Ley 24.270 que sanciona con
              prisión de 1 mes a 3 años el impedimento de contacto. Esta conducta es un factor
              determinante para el cambio de cuidado (Art. 653 inc. a CCyCN).
            </p>
          </div>

          <div className="faq-item">
            <h3>¿El padre tiene los mismos derechos que la madre sobre el cuidado de los hijos?</h3>
            <p>
              Absolutamente sí. El Código Civil y Comercial no distingue entre padre y madre. Las
              decisiones deben basarse en conductas concretas, no en estereotipos de género (Art.
              656 CCyCN). La Corte Interamericana de Derechos Humanos, en el caso Fornerón vs.
              Argentina (2012), condenó expresamente las presunciones basadas en el sexo del
              progenitor.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es la evaluación CIF y cómo influye en el cuidado personal?</h3>
            <p>
              La evaluación CIF (Cuerpo Interdisciplinario Forense) es un estudio psicológico y
              social realizado por profesionales independientes del Poder Judicial. Evalúa las
              competencias parentales, el vínculo con los hijos, la presencia de violencia y la
              capacidad de cada progenitor para garantizar el bienestar del niño. Sus conclusiones
              son uno de los elementos más influyentes en la decisión judicial.
            </p>
          </div>
        </div>

        <div className="service-related-publications">
          <h2>Publicaciones relacionadas</h2>
          <p>
            Lecturas recomendadas sobre derechos de la niñez y jurisprudencia vinculada al cuidado
            personal.
          </p>
          <ul>
            <li>
              <a
                href="/articulos/articulo-651-codigo-civil-cuidado-compartido"
                data-track-publication="service_related_publication"
              >
                Art. 651 CCyC explicado: el cuidado compartido como regla
              </a>
            </li>
            <li>
              <a
                href="/articulos/articulo-653-codigo-civil-cuidado-personal-unilateral"
                data-track-publication="service_related_publication"
              >
                Art. 653 CCyC explicado: cuidado personal unilateral
              </a>
            </li>
            <li>
              <a
                href="/articulos/articulo-638-codigo-civil-responsabilidad-parental"
                data-track-publication="service_related_publication"
              >
                Art. 638 CCyC: responsabilidad parental y cómo se pierde
              </a>
            </li>
            <li>
              <a
                href="/articulos/conceptos-ninez-adolescencia-dip"
                data-track-publication="service_related_publication"
              >
                Revisando conceptos de niñez y adolescencia en el DIP
              </a>
            </li>
            <li>
              <a
                href="/articulos/interes-superior-nino-tratados-internacionales"
                data-track-publication="service_related_publication"
              >
                Interés superior del niño vs. tratados internacionales
              </a>
            </li>
            <li>
              <a
                href="/articulos/analisis-problemas-dip-divorcio-internacional"
                data-track-publication="service_related_publication"
              >
                Problemas del DIP en divorcio internacional
              </a>
            </li>
          </ul>
        </div>

        <ServiceCTA
          heading="¿Necesita asesoramiento sobre cuidado personal?"
          subtext="Más de 25 años de experiencia en derecho de familia. Evaluamos su caso y le explicamos sus opciones."
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre Cuidado Personal de Hijos"
          trackSource="service_cta"
        />
      </div>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20Cuidado%20Personal%20de%20Hijos"
        trackEvent="whatsapp_click"
        trackSource="floating_button"
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
