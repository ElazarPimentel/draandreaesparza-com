import type { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: 'Abogada de Violencia Familiar en CABA: Denuncia y Orden de Protección | Dra. Esparza',
  description:
    'Abogada de violencia familiar en CABA: cómo denunciar en la OVD, orden de protección, exclusión del hogar y defensa del denunciado. Ley 26.485. Consulta por WhatsApp.',
  keywords:
    'abogada violencia familiar, denuncia violencia familiar, orden de protección, exclusión del hogar, OVD Buenos Aires, denuncia violencia doméstica, Ley 26.485, defensa denunciado violencia, medida perimetral, prohibición de acercamiento',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/violencia-familiar',
    languages: { 'es-AR': 'https://draandreaesparza.com/servicios/violencia-familiar' },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/violencia-familiar',
    title: 'Abogada de Violencia Familiar en CABA: Denuncia, Orden de Protección y Defensa',
    description:
      'Cómo denunciar en la OVD, pedir una orden de protección, exclusión del hogar y ejercer defensa. Ley 26.485, Buenos Aires.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogada de Violencia Familiar en CABA: Denuncia, Orden de Protección y Defensa',
    description:
      'Cómo denunciar en la OVD, pedir una orden de protección, exclusión del hogar y ejercer defensa. Ley 26.485, Buenos Aires.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asesoramiento en Violencia Familiar en Buenos Aires',
  description:
    'Abogada especialista en violencia familiar: órdenes de protección, medidas perimetrales, exclusión del hogar, denuncia en OVD, medidas excepcionales de protección de niños.',
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
      'Asesoramiento legal en situaciones de violencia familiar: órdenes de protección, medidas perimetrales, exclusión del hogar y protección de niños.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://draandreaesparza.com/#specialties' },
    { '@type': 'ListItem', position: 3, name: 'Violencia Familiar', item: 'https://draandreaesparza.com/servicios/violencia-familiar' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo denunciar violencia familiar en Buenos Aires?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede denunciar en la OVD (Oficina de Violencia Doméstica de la Corte Suprema), que funciona las 24 horas, los 365 días del año, en Lavalle 1250, CABA. También puede acudir a cualquier comisaría, al 137 (línea de atención a víctimas de violencia familiar), o directamente a un Juzgado de Familia. No necesita abogado para la denuncia inicial, pero sí es recomendable contar con asesoramiento legal para las etapas siguientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es una orden de protección y cuánto tarda en otorgarse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una orden de protección es una resolución judicial que establece medidas para proteger a la víctima de violencia: prohibición de acercamiento (perimetral), exclusión del hogar, botón antipánico, entre otras. Puede otorgarse en el mismo día de la denuncia o dentro de las 24-72 horas. Es una medida urgente que no requiere esperar el juicio completo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es una medida perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La medida perimetral (restricción de acercamiento) es una orden judicial que prohíbe al agresor acercarse a la víctima, su domicilio, lugar de trabajo, escuela de los hijos u otros lugares que frecuente. La distancia mínima la fija el juez (generalmente 200-500 metros). Su incumplimiento puede dar lugar a la detención inmediata del agresor por desobediencia judicial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipos de violencia reconoce la ley?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Ley 26.485 reconoce cinco tipos de violencia contra la mujer: física (daño corporal), psicológica (manipulación, insultos, amenazas, control), sexual (cualquier acto sexual no consentido), económica y patrimonial (control de recursos, impedimento de trabajar), y simbólica (patrones culturales que refuerzan la desigualdad). En el ámbito familiar también se aplica la Ley 24.417 de Protección contra la Violencia Familiar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede un padre denunciado por violencia familiar recuperar el contacto con sus hijos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Si la evaluación interdisciplinaria (CIF) determina que el progenitor tiene competencias parentales adecuadas y no representa un riesgo, el juez puede restablecer el contacto de manera progresiva: primero supervisado, luego con visitas libres y pernoctes. El proceso requiere paciencia y documentación rigurosa, pero la jurisprudencia protege el derecho del niño al vínculo con ambos padres.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué instituciones intervienen en casos de violencia familiar en Buenos Aires?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las principales instituciones son: la OVD (Oficina de Violencia Doméstica, Corte Suprema), los Juzgados Civiles de Familia, el CDNNyA (Consejo de Derechos de Niños), las Defensorías Zonales, el CIF (Cuerpo Interdisciplinario Forense), la Defensoría Pública de Menores, y la Línea 137 y 102. Cada una cumple un rol específico en la protección de víctimas y la evaluación de la situación familiar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito abogado para solicitar una orden de protección?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No es necesario tener abogado para realizar la denuncia inicial ni para solicitar medidas urgentes de protección. La OVD y las comisarías reciben denuncias sin requisito de patrocinio letrado. Sin embargo, es altamente recomendable contar con un abogado para las etapas posteriores: audiencias, presentación de prueba, control de legalidad, y seguimiento del cumplimiento de las medidas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura una medida perimetral u orden de protección?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una medida perimetral u orden de protección no tiene un plazo fijo predeterminado en la Ley 26.485: el juez la mantiene mientras persista la situación de riesgo. En la práctica, una perimetral suele dictarse inicialmente por 3 a 6 meses y puede ser renovada, ampliada o levantada según la evolución del caso. Puede durar desde algunos meses hasta varios años si la situación lo justifica. La parte afectada puede solicitar su modificación o cese ante el juzgado interviniente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el control de legalidad y necesito abogado para eso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El control de legalidad es la revisión judicial de una medida de protección excepcional. La ley exige que se realice dentro de las 72 horas de notificada la medida, y que todas las partes estén representadas por un abogado. Sin patrocinio letrado, usted no puede participar de esa audiencia. Es una de las pocas instancias del proceso donde la representación legal no es recomendable sino legalmente requerida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si el agresor viola la medida perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El incumplimiento de una medida perimetral es el delito de desobediencia a una orden judicial (art. 239 del Código Penal), con pena de 15 días a 1 año de prisión. La policía puede detener al agresor en el acto. Como víctima, debe llamar al 911 de inmediato, documentar el incumplimiento y notificar al juzgado para solicitar el endurecimiento de las medidas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo recuperar el contacto con mis hijos si fui denunciado por violencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, pero el proceso lleva tiempo y requiere cumplir etapas. Primero se realiza la evaluación CIF (3 a 5 meses), que evalúa sus competencias parentales. Si el resultado es favorable, el juez establece un régimen progresivo: visitas supervisadas → visitas libres → pernoctes. Si el informe CIF es negativo, se puede solicitar una segunda evaluación o impugnarlo con prueba contradictoria. La calidad de la representación legal en las etapas tempranas impacta directamente en la velocidad del proceso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Si me excluyen del hogar, ¿tengo que seguir pagando el alquiler o la hipoteca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La exclusión del hogar no suspende sus obligaciones económicas. Si usted pagaba el alquiler o la hipoteca, puede ser requerido para continuar haciéndolo mientras la familia reside en la vivienda. La cuota alimentaria también continúa corriendo. Un abogado puede solicitar la revisión de estas condiciones cuando generan una situación económicamente insostenible.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se levanta o modifica una medida perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La parte afectada (o su abogado) presenta una solicitud ante el juzgado argumentando el cambio de circunstancias: informe CIF favorable, transcurso de tiempo sin incidentes, mudanza de alguna de las partes, o desproporción de la medida. El juez puede resolver de oficio o convocar a una audiencia. Esta solicitud siempre requiere patrocinio letrado.',
      },
    },
  ],
}

export default function ViolenciaFamiliarPage() {
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
            { label: 'Violencia Familiar' },
          ]}
        />

        <header className="service-header">
          <h1>Violencia Familiar en CABA: Denuncia, Órdenes de Protección y Defensa</h1>
          <p className="service-intro">
            Asesoramiento legal urgente y especializado en situaciones de violencia familiar.
            Protección de víctimas, órdenes de protección, y defensa de derechos parentales en
            Buenos Aires.
          </p>
        </header>

        <div className="service-content">
          <h2>¿Qué Es la Violencia Familiar?</h2>
          <p>
            La violencia familiar comprende toda conducta que cause daño físico, psicológico,
            sexual, económico o simbólico dentro del ámbito familiar. La legislación argentina la
            aborda principalmente a través de dos leyes:
          </p>
          <ul>
            <li>
              <strong>Ley 26.485</strong> (Protección Integral para Prevenir, Sancionar y
              Erradicar la Violencia contra las Mujeres): Define cinco tipos de violencia y
              establece medidas de protección
            </li>
            <li>
              <strong>Ley 24.417</strong> (Protección contra la Violencia Familiar): Aplicable a
              todo el grupo familiar, establece el procedimiento para denuncias y medidas
              cautelares
            </li>
          </ul>
          <p>
            Nuestro estudio brinda asesoramiento tanto a <strong>víctimas de violencia</strong>{' '}
            que necesitan protección urgente, como a{' '}
            <strong>personas denunciadas</strong> que requieren ejercer su defensa y preservar el
            vínculo con sus hijos.
          </p>

          <h2>Tipos de Violencia Reconocidos por la Ley</h2>
          <ul>
            <li>
              <strong>Violencia Física:</strong> Cualquier acción que cause daño corporal, desde
              empujones hasta lesiones graves
            </li>
            <li>
              <strong>Violencia Psicológica:</strong> Manipulación emocional, insultos, amenazas,
              control excesivo, aislamiento, humillación, intimidación
            </li>
            <li>
              <strong>Violencia Sexual:</strong> Cualquier acto sexual no consentido, incluso
              dentro del matrimonio
            </li>
            <li>
              <strong>Violencia Económica y Patrimonial:</strong> Control de los recursos
              económicos, impedimento de trabajar, destrucción de bienes, incumplimiento de
              alimentos
            </li>
            <li>
              <strong>Violencia Simbólica:</strong> Patrones culturales, mensajes o estereotipos
              que refuerzan la desigualdad y la dominación
            </li>
          </ul>

          <h2>Cómo Denunciar: Paso a Paso</h2>

          <h3>Paso 1: La Denuncia</h3>
          <p>La denuncia puede realizarse en cualquier momento, sin necesidad de abogado:</p>
          <ul>
            <li>
              <strong>OVD (Oficina de Violencia Doméstica):</strong> Funciona 24 horas, los 365
              días, en Lavalle 1250, CABA. Depende de la Corte Suprema de Justicia. Realiza una
              evaluación interdisciplinaria de riesgo en el momento
            </li>
            <li>
              <strong>Comisarías:</strong> Cualquier comisaría está obligada a tomar la denuncia.
              No pueden negarse ni derivar
            </li>
            <li>
              <strong>Línea 137:</strong> Atención a víctimas de violencia familiar (24 horas)
            </li>
            <li>
              <strong>Línea 102:</strong> Atención especializada para niños en riesgo (24 horas)
            </li>
            <li>
              <strong>Juzgados de Familia:</strong> Presentación directa con o sin patrocinio
              letrado
            </li>
          </ul>

          <h3>Paso 2: Evaluación de Riesgo (OVD)</h3>
          <p>
            Si la denuncia se realiza en la OVD, un equipo interdisciplinario (psicólogos,
            médicos, trabajadores sociales) evalúa la situación en el momento. Clasifican el nivel
            de riesgo y elaboran un informe que se remite al juzgado correspondiente dentro de las{' '}
            <strong>24 horas</strong>.
          </p>

          <h3>Paso 3: Medidas Judiciales Urgentes (24-72 horas)</h3>
          <p>
            Con el informe de la OVD o la denuncia policial, el juez puede dictar medidas de
            protección urgentes sin necesidad de escuchar previamente al denunciado:
          </p>
          <ul>
            <li>
              <strong>Prohibición de acercamiento (perimetral):</strong> El agresor no puede
              acercarse a la víctima ni a los lugares que frecuenta (domicilio, trabajo, escuela de
              los hijos). Distancia mínima fijada por el juez (200-500 metros)
            </li>
            <li>
              <strong>Exclusión del hogar:</strong> Se ordena al agresor retirarse de la vivienda
              familiar
            </li>
            <li>
              <strong>Botón antipánico:</strong> Dispositivo electrónico que permite alertar a las
              fuerzas de seguridad
            </li>
            <li>
              <strong>Custodia policial:</strong> Vigilancia en el domicilio de la víctima
            </li>
            <li>
              <strong>Prohibición de contacto:</strong> Por cualquier medio (teléfono, redes
              sociales, terceros)
            </li>
          </ul>
          <p>
            ¿Se pregunta cuánto tiempo se mantiene la perimetral, cómo se prorroga o qué pasa al
            vencer?{' '}
            <TrackedLink
              href="/articulos/cuanto-dura-una-medida-perimetral-argentina"
              trackEvent="publication_click"
              trackSource="violencia_to_perimetral_article"
            >
              Lea la guía: ¿Cuánto dura una perimetral en Argentina? &rarr;
            </TrackedLink>
          </p>

          <h3>Si Se Viola la Medida Perimetral</h3>

          <p>
            <strong>Si usted es la víctima:</strong> el incumplimiento es un delito penal (art.
            239 del Código Penal: desobediencia a orden judicial). Ante una violación:
          </p>
          <ul>
            <li>
              <strong>Llame al 911 de inmediato.</strong> Con una orden judicial vigente, la
              policía puede detener al agresor en el acto
            </li>
            <li>
              <strong>Documente todo:</strong> capturas de pantalla, fotos, testigos, horario y
              lugar exacto del acercamiento
            </li>
            <li>
              <strong>Notifique al juzgado:</strong> presentando denuncia de incumplimiento. Ante
              reiteradas violaciones, el juez puede ordenar la detención preventiva y endurecer las
              medidas
            </li>
          </ul>
          <p>
            Un abogado puede solicitar la ampliación de medidas de forma urgente.{' '}
            <TrackedLink
              href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20su%20sitio%20y%20necesito%20consultar%20un%20incumplimiento%20de%20medida%20perimetral"
              trackEvent="whatsapp_click"
              trackSource="violencia_incumplimiento_victima"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar urgente &rarr;
            </TrackedLink>
          </p>

          <p>
            <strong>Si usted es el denunciado:</strong> violar una medida perimetral — aunque sea
            accidentalmente, aunque sea un metro, aunque sea para ver a sus hijos — puede resultar
            en <strong>detención inmediata</strong>. El art. 239 CP prevé pena de 15 días a 1 año
            de prisión. Ante cualquier duda sobre los límites exactos de la medida, consúltelo
            antes de actuar.
          </p>

          <h3>Paso 4: Seguimiento Judicial</h3>
          <p>
            El juzgado fija audiencias para evaluar la evolución de la situación, decidir sobre la
            continuidad de las medidas y, cuando hay hijos involucrados, determinar el régimen de
            cuidado personal y comunicación. En esta etapa es fundamental contar con asesoramiento
            legal profesional.
          </p>

          <h2>El Control de Legalidad: La Audiencia en la Que Se Requiere Abogado por Ley</h2>
          <p>
            Cuando el CDNNyA dicta una medida de protección excepcional (separación de un niño de
            su familia), la ley exige que esa decisión sea revisada por un juez. Esa revisión se
            llama <strong>control de legalidad</strong>, y se realiza dentro de las{' '}
            <strong>72 horas</strong> de notificada la medida.
          </p>
          <p>
            A diferencia de la denuncia inicial — donde usted puede presentarse solo —, el control
            de legalidad es una audiencia judicial en la que{' '}
            <strong>
              la ley exige que todas las partes estén representadas por un abogado
            </strong>
            . Sin patrocinio letrado usted no puede participar de esa audiencia, y su ausencia
            equivale a no contestar la medida.
          </p>
          <ul>
            <li>
              <strong>Quién interviene:</strong> el juez de familia, el Defensor Público de
              Menores, los progenitores con sus abogados, y el representante del CDNNyA
            </li>
            <li>
              <strong>Qué se evalúa:</strong> si la medida fue dictada conforme a derecho, si
              existe riesgo real y actual, si se agotaron medidas menos restrictivas antes de
              separar al niño
            </li>
            <li>
              <strong>Qué puede ocurrir:</strong> el juez puede ratificar la medida, modificarla,
              o disponer su cese inmediato
            </li>
          </ul>
          <p>
            Si recibió una medida de protección excepcional, tiene <strong>72 horas</strong> para
            tener representación legal.{' '}
            <TrackedLink
              href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20su%20sitio%20y%20necesito%20representaci%C3%B3n%20en%20un%20control%20de%20legalidad"
              trackEvent="whatsapp_click"
              trackSource="violencia_control_legalidad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar ahora &rarr;
            </TrackedLink>
          </p>

          <h2>Cuando Hay Niños Involucrados: Medida de Protección Excepcional</h2>
          <p>
            En situaciones graves donde los niños están en riesgo, el organismo de protección de
            la infancia (CDNNyA en CABA) puede dictar una{' '}
            <strong>medida de protección excepcional</strong> que separe al niño de su familia
            temporalmente. Es importante saber que esta es una medida{' '}
            <strong>administrativa</strong> (no judicial) que puede originarse por violencia pero
            también por otras causas como negligencia, enfermedad del progenitor o abandono.
          </p>
          <p>
            <a
              href="/servicios/medida-proteccion-excepcional"
              data-track-cta="violencia_to_medida_excepcional"
            >
              <strong>Ver guía completa sobre medidas de protección excepcional &rarr;</strong>
            </a>
          </p>

          <h3>El Proceso de Revinculación con Sus Hijos</h3>
          <p>
            Si hay una medida que restringe el contacto con sus hijos — ya sea producto de una
            denuncia de violencia o de una medida excepcional —, la revinculación sigue una
            secuencia específica que puede llevar meses. Conocer las etapas le permite prepararse:
          </p>
          <ol>
            <li>
              <strong>Solicitud de revinculación:</strong> el progenitor (con su abogado) o la
              Defensoría Pública solicita al juzgado el inicio del proceso
            </li>
            <li>
              <strong>Evaluación CIF:</strong> el Cuerpo Interdisciplinario Forense evalúa
              competencias parentales. Demora 3 a 5 meses. El resultado es determinante para el
              juez
            </li>
            <li>
              <strong>Informe Defensoría Zonal:</strong> evalúa el entorno del niño y la situación
              actual de ambos progenitores (4 a 8 semanas)
            </li>
            <li>
              <strong>Régimen progresivo:</strong> visitas supervisadas en sede &rarr; visitas
              supervisadas en domicilio &rarr; visitas libres &rarr; pernoctes
            </li>
            <li>
              <strong>Si el informe CIF es negativo:</strong> se puede solicitar una segunda
              evaluación o impugnarlo con evidencia contradictoria. Esta etapa requiere estrategia
              legal y presentación de prueba.{' '}
              <TrackedLink
                href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20su%20sitio%20y%20quiero%20consultar%20sobre%20el%20proceso%20de%20revinculaci%C3%B3n%20con%20mis%20hijos"
                trackEvent="whatsapp_click"
                trackSource="violencia_revinculacion"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar sobre mi caso &rarr;
              </TrackedLink>
            </li>
          </ol>

          <h2>Instituciones que Intervienen en Violencia Familiar</h2>
          <ul>
            <li>
              <strong>OVD (Oficina de Violencia Doméstica):</strong> Recibe denuncias 24/7, realiza
              evaluación interdisciplinaria de riesgo, deriva al juzgado. Depende de la Corte
              Suprema
            </li>
            <li>
              <strong>Juzgados Civiles de Familia:</strong> Dictan órdenes de protección, resuelven
              cuidado personal
            </li>
            <li>
              <strong>CIF (Cuerpo Interdisciplinario Forense):</strong> Equipo independiente del
              Poder Judicial que evalúa competencias parentales. Sus informes son determinantes
            </li>
            <li>
              <strong>Defensor Público de Menores:</strong> Representa los intereses del niño en
              todos los procesos judiciales
            </li>
            <li>
              <strong>Línea 137:</strong> Atención a víctimas de violencia familiar (24 horas)
            </li>
            <li>
              <strong>Línea 102:</strong> Atención especializada para niños en riesgo (24 horas)
            </li>
          </ul>

          <h2>Defensa del Progenitor Denunciado</h2>
          <p>
            Ser denunciado por violencia familiar es una situación grave que puede implicar medidas
            restrictivas inmediatas. Si usted ha sido denunciado, es fundamental:
          </p>
          <ul>
            <li>
              <strong>Ejercer su derecho de defensa:</strong> Presentarse ante el juzgado con
              patrocinio letrado en la primera oportunidad
            </li>
            <li>
              <strong>Solicitar la evaluación CIF:</strong> Una evaluación positiva de competencias
              parentales puede cambiar el curso del caso
            </li>
            <li>
              <strong>Documentar todo:</strong> Conservar comprobantes de pago de alimentos,
              comunicaciones con los hijos, asistencia a turnos médicos y escolares, fotos del
              hogar
            </li>
            <li>
              <strong>Cooperar con las instituciones:</strong> Asistir a todas las citaciones de
              Defensoría Zonal, participar en las vinculaciones propuestas, y cumplir con las
              indicaciones judiciales
            </li>
            <li>
              <strong>Preservar el vínculo:</strong> Si hay restricciones de contacto con los
              hijos, solicitar un régimen de comunicación progresivo a través del juzgado
            </li>
          </ul>

          <h2>Si Fue Denunciado: Las Primeras 48-72 Horas Son Críticas</h2>
          <p>
            Las primeras horas después de una denuncia son las que más impactan en el resultado del
            caso. Muchas personas toman decisiones equivocadas en este momento por no conocer el
            proceso.
          </p>
          <h3>No haga esto</h3>
          <ul>
            <li>
              <strong>No intente contactar a la denunciante</strong> por ningún medio — WhatsApp,
              llamadas, a través de familiares o amigos en común. Aunque la medida perimetral no
              esté firmada todavía, cualquier contacto puede ser usado en su contra
            </li>
            <li>
              <strong>No vuelva al domicilio</strong> sin una orden del juzgado que lo autorice,
              aunque sea para buscar sus pertenencias. Un abogado puede gestionar el ingreso con
              acompañamiento policial
            </li>
            <li>
              <strong>No publique nada en redes sociales</strong> sobre la situación ni sobre la
              otra parte
            </li>
            <li>
              <strong>No falte a ninguna citación</strong> — de la Defensoría Zonal, del juzgado o
              del CIF. La ausencia se interpreta como desinterés en el vínculo con sus hijos
            </li>
          </ul>
          <h3>Haga esto</h3>
          <ul>
            <li>
              <strong>Consiga un abogado antes de la primera audiencia.</strong> La primera
              presentación ante el juzgado define el tono de todo el proceso
            </li>
            <li>
              <strong>Recopile documentación ahora:</strong> comprobantes de pago de alimentos,
              fotos con sus hijos, mensajes que acrediten su participación en la crianza, facturas
              del hogar a su nombre
            </li>
            <li>
              <strong>Solicite al juzgado un régimen de comunicación provisorio</strong> para
              mantener contacto con sus hijos mientras dura el proceso
            </li>
            <li>
              <strong>
                Ante cualquier duda sobre los límites de la medida perimetral
              </strong>{' '}
              — consúltelo antes de actuar. Una violación accidental puede resultar en detención
              inmediata (art. 239 CP)
            </li>
          </ul>
          <p>
            <TrackedLink
              href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20su%20sitio%20y%20fui%20denunciado%20por%20violencia%20familiar%2C%20necesito%20asesoramiento%20urgente"
              trackEvent="whatsapp_click"
              trackSource="violencia_denunciado_48h"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar antes de la primera audiencia &rarr;
            </TrackedLink>
          </p>

          <h2>Exclusión del Hogar: Sus Obligaciones Económicas No Se Detienen</h2>
          <p>
            Cuando el juez ordena la exclusión del hogar, el denunciado debe retirarse de la
            vivienda — incluso si es el propietario o quien paga el alquiler. Esto no suspende sus
            obligaciones económicas:
          </p>
          <ul>
            <li>
              <strong>La cuota alimentaria sigue corriendo</strong> desde el momento de la
              denuncia, independientemente de la convivencia
            </li>
            <li>
              <strong>Si el hogar es alquilado</strong> y usted lo pagaba, puede ser requerido
              para continuar pagándolo mientras la familia reside allí, aunque usted viva en otro
              lado
            </li>
            <li>
              <strong>Si el hogar es propio</strong>, el juzgado puede atribuir el uso de la
              vivienda al progenitor que convive con los hijos, sin resolver todavía la propiedad
            </li>
            <li>
              <strong>Gastos escolares, médicos y de cobertura de salud</strong> no se suspenden
            </li>
          </ul>
          <p>
            Un abogado puede solicitar la revisión de estas condiciones cuando generan una
            situación económicamente insostenible, sin que eso afecte negativamente su posición en
            la causa.
          </p>

          <h2>Tiempos Reales del Proceso</h2>
          <p>
            Basado en la experiencia en tribunales de Buenos Aires, estos son los plazos
            habituales:
          </p>
          <ul>
            <li>
              <strong>Denuncia a primera orden de protección:</strong> 24 horas a 7 días
            </li>
            <li>
              <strong>Evaluación CIF (solicitud a resultado):</strong> 3 a 5 meses
            </li>
            <li>
              <strong>Informe Defensoría Zonal:</strong> 4 a 8 semanas
            </li>
            <li>
              <strong>Informe OVD completo:</strong> 3 a 5 meses desde la denuncia
            </li>
            <li>
              <strong>Medida excepcional a primera vinculación:</strong> 4 a 8 semanas
            </li>
            <li>
              <strong>Régimen progresivo completo (supervisado a pernoctes):</strong> 3 a 8 meses
            </li>
            <li>
              <strong>Resolución definitiva del caso:</strong> 6 meses a 2 años
            </li>
          </ul>

          <h2>Modificación y Cese de Medidas de Protección</h2>
          <p>
            Las medidas de protección no son permanentes. Pueden ser modificadas, ampliadas o
            levantadas según la evolución del caso.
          </p>
          <h3>Ampliación (a pedido de la víctima)</h3>
          <p>
            Si la situación de riesgo aumenta o si hay incumplimientos reiterados, se pueden
            solicitar medidas adicionales: mayor distancia perimetral, inclusión de nuevos
            domicilios o lugares frecuentados, o detención preventiva por desobediencia reiterada.
          </p>
          <h3>Cese o reducción (a pedido del denunciado)</h3>
          <p>Se puede solicitar el levantamiento o reducción de las medidas cuando:</p>
          <ul>
            <li>La evaluación CIF concluye que no existe riesgo actual</li>
            <li>
              Hubo un cambio sustancial en las circunstancias (mudanza de alguna de las partes,
              resolución de la causa penal, transcurso prolongado de tiempo sin incidentes)
            </li>
            <li>La medida resulta desproporcionada respecto a los hechos originales</li>
          </ul>
          <p>
            Esta solicitud siempre requiere patrocinio letrado y fundamentación sobre el cambio de
            circunstancias. El juez puede convocar a ambas partes a una audiencia antes de
            resolver.{' '}
            <TrackedLink
              href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20su%20sitio%20y%20quiero%20consultar%20sobre%20c%C3%B3mo%20levantar%20o%20modificar%20una%20medida%20de%20protecci%C3%B3n"
              trackEvent="whatsapp_click"
              trackSource="violencia_modificacion_medidas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar sobre modificación de medidas &rarr;
            </TrackedLink>
          </p>

          <h2>Marco Legal Aplicable</h2>
          <ul>
            <li>
              <strong>Ley 26.485:</strong> Protección integral para prevenir, sancionar y erradicar
              la violencia contra las mujeres
            </li>
            <li>
              <strong>Ley 24.417:</strong> Protección contra la violencia familiar
            </li>
            <li>
              <strong>Ley 26.061:</strong> Protección integral de derechos de niños, niñas y
              adolescentes (Arts. 3, 30, 33, 35, 37, 39, 41)
            </li>
            <li>
              <strong>Art. 607 CCyCN:</strong> Plazo máximo de 180 días para medidas excepcionales
            </li>
            <li>
              <strong>Art. 706 CCyCN:</strong> Principios del proceso de familia (tutela judicial
              efectiva, inmediación, buena fe)
            </li>
            <li>
              <strong>Ley 27.130:</strong> Prevención del suicidio (aplicable cuando hay amenazas
              de autolesión)
            </li>
            <li>
              <strong>Ley 114 CABA:</strong> Creación del Consejo de Derechos de Niñas, Niños y
              Adolescentes
            </li>
          </ul>

          <h2>Servicios que Ofrecemos</h2>
          <ul>
            <li>
              <strong>Asesoramiento urgente:</strong> Orientación inmediata sobre cómo proceder
              ante una situación de violencia
            </li>
            <li>
              <strong>Solicitud de medidas de protección:</strong> Órdenes de protección,
              perimetrales, exclusión del hogar
            </li>
            <li>
              <strong>Defensa del denunciado:</strong> Representación legal en el proceso,
              solicitud de evaluaciones, plan de revinculación
            </li>
            <li>
              <strong>Control de legalidad:</strong> Representación ante el juzgado en procesos de
              medidas excepcionales
            </li>
            <li>
              <strong>Seguimiento de cumplimiento:</strong> Monitoreo del cumplimiento de las
              medidas dictadas
            </li>
            <li>
              <strong>Coordinación institucional:</strong> Gestión con Defensoría Zonal, CIF,
              CDNNyA y juzgados
            </li>
          </ul>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes sobre Violencia Familiar</h2>

          <div className="faq-item">
            <h3>¿Cómo denunciar violencia familiar en Buenos Aires?</h3>
            <p>
              Puede denunciar en la OVD (Oficina de Violencia Doméstica), que funciona 24 horas,
              los 365 días, en Lavalle 1250, CABA. También puede acudir a cualquier comisaría, al
              137 (línea de atención a víctimas), o directamente a un Juzgado de Familia. No
              necesita abogado para la denuncia inicial, pero sí es recomendable para las etapas
              siguientes.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es una orden de protección y cuánto tarda en otorgarse?</h3>
            <p>
              Una orden de protección es una resolución judicial que establece medidas para
              proteger a la víctima: prohibición de acercamiento (perimetral), exclusión del hogar,
              botón antipánico, entre otras. Puede otorgarse en el mismo día de la denuncia o
              dentro de las 24-72 horas. Es una medida urgente que no requiere esperar el juicio
              completo.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es una medida perimetral?</h3>
            <p>
              La medida perimetral (restricción de acercamiento) es una orden judicial que prohíbe
              al agresor acercarse a la víctima, su domicilio, lugar de trabajo, escuela de los
              hijos u otros lugares que frecuente. La distancia mínima la fija el juez (generalmente
              200-500 metros). Su incumplimiento puede dar lugar a la detención inmediata por
              desobediencia judicial.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué tipos de violencia reconoce la ley?</h3>
            <p>
              La Ley 26.485 reconoce cinco tipos: física (daño corporal), psicológica
              (manipulación, insultos, amenazas, control), sexual (acto sexual no consentido),
              económica y patrimonial (control de recursos, impedimento de trabajar), y simbólica
              (patrones que refuerzan la desigualdad). En el ámbito familiar también se aplica la
              Ley 24.417.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Puede un padre denunciado recuperar el contacto con sus hijos?</h3>
            <p>
              Sí. Si la evaluación CIF determina competencias parentales adecuadas y ausencia de
              riesgo, el juez puede restablecer el contacto progresivamente: primero supervisado,
              luego visitas libres y pernoctes. El proceso requiere documentación rigurosa, pero la
              jurisprudencia protege el derecho del niño al vínculo con ambos padres.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué instituciones intervienen en casos de violencia familiar?</h3>
            <p>
              Las principales son: la OVD (Corte Suprema, 24/7), Juzgados Civiles de Familia, el
              CDNNyA (Consejo de Derechos de Niños), las Defensorías Zonales, el CIF (Cuerpo
              Interdisciplinario Forense), y la Defensoría Pública de Menores. Cada una cumple un
              rol específico en la protección y evaluación.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Necesito abogado para solicitar una orden de protección?</h3>
            <p>
              No es necesario para la denuncia inicial ni para las medidas urgentes. La OVD y las
              comisarías reciben denuncias sin requisito de patrocinio letrado. Sin embargo, es
              altamente recomendable contar con un abogado para las etapas posteriores: audiencias,
              presentación de prueba, control de legalidad, y seguimiento del cumplimiento.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto dura una medida perimetral u orden de protección?</h3>
            <p>
              Una medida perimetral u orden de protección no tiene un plazo fijo predeterminado
              en la Ley 26.485: el juez la mantiene mientras persista el riesgo. En la práctica,
              una perimetral suele dictarse inicialmente por 3 a 6 meses y puede ser renovada,
              ampliada o levantada según la evolución del caso. Puede durar desde algunos meses
              hasta varios años si la situación lo justifica. La parte afectada puede solicitar su
              modificación o cese ante el juzgado interviniente.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es el control de legalidad y necesito abogado para eso?</h3>
            <p>
              El control de legalidad es la revisión judicial de una medida de protección
              excepcional (cuando el CDNNyA separa a un niño de su familia). La ley exige que se
              realice dentro de las 72 horas de notificada la medida, y que todas las partes estén
              representadas por un abogado. Sin patrocinio letrado, usted no puede participar de
              esa audiencia. Es una de las pocas instancias del proceso de familia donde la
              representación legal no es opcional sino legalmente requerida.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué pasa si el agresor viola la medida perimetral?</h3>
            <p>
              El incumplimiento de una medida perimetral es el delito de desobediencia a una orden
              judicial (art. 239 del Código Penal), con pena de 15 días a 1 año de prisión. La
              policía puede detener al agresor en el acto si hay una orden judicial vigente. Como
              víctima, debe llamar al 911 de inmediato, documentar el incumplimiento (fotos,
              capturas, testigos) y notificar al juzgado para solicitar el endurecimiento de las
              medidas.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Puedo recuperar el contacto con mis hijos si fui denunciado por violencia?</h3>
            <p>
              Sí, pero el proceso lleva tiempo y requiere cumplir etapas. Primero se realiza la
              evaluación CIF (3 a 5 meses), que evalúa sus competencias parentales. Si el resultado
              es favorable, el juez establece un régimen progresivo: visitas supervisadas &rarr;
              visitas libres &rarr; pernoctes. Si el informe CIF es negativo, se puede solicitar
              una segunda evaluación o impugnarlo con prueba contradictoria. La calidad de la
              representación legal en las etapas tempranas impacta directamente en la velocidad del
              proceso.
            </p>
          </div>

          <div className="faq-item">
            <h3>Si me excluyen del hogar, ¿tengo que seguir pagando el alquiler o la hipoteca?</h3>
            <p>
              Sí. La exclusión del hogar no suspende sus obligaciones económicas. Si usted pagaba
              el alquiler o la hipoteca, puede ser requerido para continuar haciéndolo mientras la
              familia reside en la vivienda, aunque usted viva en otro lado. La cuota alimentaria
              también continúa corriendo. Un abogado puede solicitar la revisión de estas
              condiciones cuando generan una situación económicamente insostenible, sin que eso
              afecte su posición en la causa.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cómo se levanta o modifica una medida perimetral?</h3>
            <p>
              La parte afectada (o su abogado) presenta una solicitud ante el juzgado argumentando
              el cambio de circunstancias: informe CIF favorable, transcurso prolongado de tiempo
              sin incidentes, mudanza de alguna de las partes, o desproporción de la medida
              respecto a los hechos originales. El juez puede resolver de oficio o convocar a una
              audiencia con ambas partes. Esta solicitud siempre requiere patrocinio letrado.
            </p>
          </div>
        </div>

        <div className="service-related-publications">
          <h2>Publicaciones relacionadas</h2>
          <p>
            Lecturas sobre protección de derechos de la niñez en el ámbito del derecho
            internacional privado.
          </p>
          <ul>
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
          heading="¿Necesita asesoramiento urgente en violencia familiar?"
          subtext="Más de 25 años de experiencia en derecho de familia. Atendemos situaciones urgentes."
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre Violencia Familiar"
          trackSource="service_cta"
        />
      </div>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20Violencia%20Familiar"
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
