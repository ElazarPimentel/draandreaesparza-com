import type { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: '¿Qué Organismo Toma una Medida de Protección Excepcional? CDNNyA y Defensoría Zonal',
  description:
    'Qué es una medida de protección excepcional, qué organismo está facultado para tomarla (CDNNyA, Defensoría Zonal) y cómo funciona el control de legalidad. Ley 26.061, Art. 607 CCyCN.',
  keywords:
    'medida de protección excepcional, control de legalidad, CDNNyA, Defensoría Zonal, Ley 26.061, Art 607, protección de niños, institucionalización, egreso, vinculaciones, abogada Buenos Aires',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/medida-proteccion-excepcional',
    languages: { 'es-AR': 'https://draandreaesparza.com/servicios/medida-proteccion-excepcional' },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/medida-proteccion-excepcional',
    title: 'Medida de Protección Excepcional: Qué Organismo la Toma (CDNNyA y Defensoría Zonal)',
    description:
      'Qué es una medida de protección excepcional, qué organismo está facultado para tomarla (CDNNyA, Defensoría Zonal) y cómo funciona el control de legalidad.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medida de Protección Excepcional: Qué Organismo la Toma (CDNNyA y Defensoría Zonal)',
    description:
      'Qué es una medida de protección excepcional, qué organismo está facultado para tomarla y cómo funciona el control de legalidad.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asesoramiento en Medidas de Protección Excepcional en Buenos Aires',
  description:
    'Abogada especialista en medidas de protección excepcional de niños: control de legalidad, CDNNyA, Defensoría Zonal, vinculaciones, plan de egreso. Ley 26.061.',
  provider: {
    '@type': 'LegalService',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
  },
  areaServed: { '@type': 'City', name: 'Buenos Aires' },
  offers: {
    '@type': 'Offer',
    description:
      'Asesoramiento legal en medidas de protección excepcional: representación en control de legalidad, coordinación con CDNNyA y Defensoría Zonal, plan de egreso.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://draandreaesparza.com/#specialties' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Medida de Protección Excepcional',
      item: 'https://draandreaesparza.com/servicios/medida-proteccion-excepcional',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una medida de protección excepcional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una medida administrativa - no judicial - dictada por el organismo de protección de derechos de la infancia (CDNNyA en CABA) cuando un niño se encuentra en grave peligro. Puede implicar la separación del niño de su grupo familiar y su alojamiento en un hogar institucional o con familia ampliada. Es excepcional, de duración limitada (90 días renovables, máximo 180 días) y está sujeta a control de legalidad judicial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el control de legalidad y quién decide realmente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El control de legalidad es la revisión judicial de la medida administrativa. Sin embargo, es importante entender que el juez no gestiona el caso: verifica que la medida sea legal y proporcionada. Las decisiones cotidianas (vinculaciones, pernoctes, egreso) las toman el CDNNyA y la Defensoría Zonal, que son organismos del Poder Ejecutivo. El progenitor construye su caso principalmente ante estas instituciones administrativas, no ante el juez.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué motivos se puede dictar una medida excepcional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La medida puede dictarse por múltiples razones, no solo violencia: negligencia grave en el cuidado del niño, enfermedad física o mental del progenitor que le impide ejercer el cuidado, abandono, exposición a situaciones de riesgo, abuso de sustancias que afecte la capacidad parental, conflicto familiar grave que ponga en peligro al niño, o cualquier situación donde los derechos del niño estén gravemente amenazados o vulnerados.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura una medida de protección excepcional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada medida dura 90 días y puede ser renovada administrativamente. Sin embargo, el Art. 607 inc. c del CCyCN establece un plazo máximo absoluto de 180 días. Pasado ese plazo, la situación debe resolverse definitivamente: reintegro del niño a su familia o, excepcionalmente, declaración de adoptabilidad. En la práctica, cuando se supera este plazo, el juez puede dictar una medida de no innovar mientras se resuelve.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la Defensoría Zonal y qué rol cumple?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Defensoría Zonal es un equipo interdisciplinario (abogados, psicólogos, trabajadores sociales) del Poder Ejecutivo que gestiona el día a día del caso. Realiza entrevistas con los progenitores, autoriza las vinculaciones (visitas), define los horarios y modalidades de contacto, evalúa el avance del caso, elabora informes técnicos y recomienda el egreso cuando lo considera viable. Es el interlocutor principal de la familia durante todo el proceso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona el régimen de vinculaciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las vinculaciones son los encuentros entre el niño institucionalizado y sus progenitores. Siguen una progresión gradual definida por la Defensoría Zonal: primero contacto supervisado en la institución, luego visitas supervisadas fuera, después visitas sin supervisión, posteriormente pernoctes (el niño duerme en casa del progenitor y vuelve a la institución), y finalmente egreso. Este proceso puede tomar varios meses según la evolución.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la evaluación CIF y por qué es tan importante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El CIF (Cuerpo Interdisciplinario Forense) es un equipo de psicólogos, psiquiatras y trabajadores sociales del Poder Judicial - independiente tanto del CDNNyA como del juez. Evalúa las competencias parentales, el vínculo de apego con los hijos y la capacidad de cada progenitor para garantizar el bienestar del niño. Una evaluación CIF positiva suele ser el punto de inflexión que habilita la aceleración del régimen de vinculaciones y el plan de egreso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si no estoy de acuerdo con las decisiones de la Defensoría Zonal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si la Defensoría Zonal toma decisiones que usted considera injustas o contrarias al interés del niño, puede: presentar notas escritas a la DZ solicitando fundamentación, escalar al CDNNyA, o solicitar al juez que intervenga mediante un pedido en el expediente de control de legalidad. El abogado puede también pedir al Defensor Público de Menores que dictamine sobre la situación. Sin embargo, confrontar a la DZ rara vez es productivo; suele ser más efectivo cooperar y documentar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Pueden quitarme a mi hijo por falta de recursos económicos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La Ley 26.061 lo prohíbe expresamente: la falta de recursos materiales del progenitor no puede ser causa de separación familiar ni de institucionalización del niño (Art. 33). Si la dificultad es económica, el Estado debe brindar programas de asistencia para que la familia pueda mantener al niño. La medida excepcional solo procede cuando hay una vulneración grave de derechos, no por pobreza.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la cláusula de bloqueo y cómo protege a la familia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La cláusula de bloqueo establece que si un familiar (abuelos, tíos, hermanos) o referente afectivo del niño ofrece hacerse cargo de su cuidado y es evaluado como idóneo, no se puede declarar la situación de adoptabilidad. Esto significa que antes de considerar la adopción, el sistema debe agotar todas las posibilidades dentro de la familia ampliada y la red de contención del niño.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda el proceso completo desde la medida hasta el egreso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los plazos varían considerablemente según la complejidad del caso, la carga de los organismos intervinientes y la cooperación de las partes. La evaluación CIF puede demorar varios meses dependiendo de la disponibilidad. La progresión de vinculaciones (supervisadas a pernoctes) también toma meses según la evolución. No hay un plazo estándar para el egreso: depende de las circunstancias de cada caso. La cooperación activa del progenitor con la Defensoría Zonal y un resultado positivo del CIF son los factores que más aceleran el proceso.',
      },
    },
  ],
}

export default function MedidaProteccionExcepcionalPage() {
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
            { label: 'Medida de Protección Excepcional' },
          ]}
        />

        <header className="service-header">
          <h1>
            Medida de Protección Excepcional: Qué Es, Cómo Funciona y Cómo Recuperar a Su Hijo
          </h1>
          <p className="service-intro">
            Asesoramiento legal especializado para familias que enfrentan una medida de protección
            excepcional. Representación en control de legalidad, coordinación con organismos
            administrativos y planificación del egreso.
          </p>
        </header>

        <div className="service-content">
          <h2>¿Qué Es una Medida de Protección Excepcional?</h2>
          <p>
            La medida de protección excepcional es una decisión <strong>administrativa</strong> -
            no judicial - que separa a un niño de su grupo familiar cuando sus derechos se
            encuentran gravemente amenazados o vulnerados (Ley 26.061, Art. 39). El niño es
            alojado temporalmente en un hogar institucional o con familia ampliada mientras se
            trabaja para restablecer las condiciones que permitan su reintegro.
          </p>
          <p>
            Es importante entender desde el inicio: esta medida{' '}
            <strong>no la dicta un juez</strong>. La dicta el organismo administrativo de
            protección de derechos de la infancia - en CABA, el <strong>CDNNyA</strong> (Consejo
            de Derechos de Niñas, Niños y Adolescentes), que depende del Poder Ejecutivo (Jefatura
            de Gobierno). Esto tiene consecuencias profundas para la estrategia legal de la
            familia, como explicamos más adelante.
          </p>

          <h2>¿Por Qué Motivos Puede Dictarse?</h2>
          <p>
            A diferencia de lo que muchos creen, la medida de protección excepcional{' '}
            <strong>no se limita a situaciones de violencia</strong>. Puede dictarse por una amplia
            gama de razones que pongan en riesgo los derechos del niño:
          </p>
          <ul>
            <li>
              <strong>Negligencia grave:</strong> Falta de cuidados básicos (alimentación, higiene,
              salud, escolarización) que ponga en peligro el desarrollo del niño
            </li>
            <li>
              <strong>Enfermedad del progenitor:</strong> Enfermedad física o mental que le impida
              ejercer adecuadamente el cuidado (trastornos psiquiátricos severos, adicciones,
              internación prolongada)
            </li>
            <li>
              <strong>Violencia intrafamiliar:</strong> Cuando el niño es víctima directa o está
              expuesto a violencia entre los adultos del hogar
            </li>
            <li>
              <strong>Abandono:</strong> Cuando el progenitor desaparece o se desentiende del niño
            </li>
            <li>
              <strong>Abuso de sustancias:</strong> Consumo de drogas o alcohol que afecte
              gravemente la capacidad de cuidado
            </li>
            <li>
              <strong>Conflicto familiar grave:</strong> Situaciones de conflicto extremo entre los
              progenitores que expongan al niño a un riesgo concreto
            </li>
            <li>
              <strong>Explotación o abuso:</strong> Cualquier forma de explotación laboral, sexual
              o de otro tipo
            </li>
            <li>
              <strong>Situación de calle:</strong> Cuando el niño vive en la vía pública sin adulto
              responsable
            </li>
          </ul>
          <p>
            <strong>Lo que no puede ser causa de medida excepcional:</strong> La falta de recursos
            materiales del progenitor. La Ley 26.061 (Art. 33) lo prohíbe expresamente: la pobreza
            no justifica separar a un niño de su familia. En esos casos, el Estado debe proveer
            asistencia económica y programas sociales.
          </p>

          <h2>Un Proceso Administrativo, No Judicial: La Distinción Clave</h2>
          <p>
            Esta es quizás la información más importante que una familia debe comprender al
            enfrentar una medida de protección excepcional, y la que genera más confusión:
          </p>
          <p>
            <strong>La medida excepcional no es un juicio.</strong> No funciona como un proceso
            judicial donde usted presenta su caso ante un juez, aporta pruebas y recibe una
            sentencia. Es un procedimiento <strong>administrativo</strong> gestionado por
            organismos del <strong>Poder Ejecutivo</strong>, con una supervisión judicial limitada.
          </p>

          <h3>¿Quién decide qué?</h3>
          <ul>
            <li>
              <strong>El CDNNyA (Poder Ejecutivo)</strong> dicta la medida excepcional, la renueva
              cada 90 días, y decide cuándo es viable el egreso
            </li>
            <li>
              <strong>La Defensoría Zonal (Poder Ejecutivo)</strong> gestiona el caso día a día:
              realiza entrevistas con los padres, autoriza las vinculaciones (visitas), define
              horarios y modalidades de contacto, evalúa el avance, elabora informes técnicos y
              recomienda acciones al CDNNyA
            </li>
            <li>
              <strong>El Juez (Poder Judicial)</strong> realiza el control de legalidad: verifica
              que la medida administrativa sea legal y proporcionada.{' '}
              <strong>No administra el caso.</strong> No decide cuándo empiezan las vinculaciones,
              no fija los horarios de visita, no planifica el egreso
            </li>
          </ul>

          <h3>¿Qué significa esto en la práctica?</h3>
          <p>
            Significa que la familia construye su caso{' '}
            <strong>principalmente ante la Defensoría Zonal y el CDNNyA</strong>, no ante el juez.
            El trabajo cotidiano - demostrar capacidad parental, cooperar con las evaluaciones,
            mantener vinculaciones consistentes, preparar el hogar para el egreso - se desarrolla
            en el ámbito administrativo. El juez solo interviene activamente cuando:
          </p>
          <ul>
            <li>Realiza la revisión formal del control de legalidad</li>
            <li>
              Una parte apela una decisión administrativa o solicita una medida específica
            </li>
            <li>
              Se superan los 180 días del Art. 607 y la situación requiere resolución judicial
            </li>
            <li>
              El Defensor Público de Menores solicita una intervención (por ejemplo, la apertura de
              un incidente de alimentos)
            </li>
            <li>Existe un conflicto que los organismos administrativos no pueden resolver</li>
          </ul>
          <p>
            Esto requiere una{' '}
            <strong>estrategia legal completamente diferente</strong> a la de un juicio
            tradicional. No se trata de &ldquo;ganar&rdquo; ante un juez, sino de trabajar
            colaborativamente con la Defensoría Zonal para demostrar que las condiciones
            familiares permiten el regreso seguro del niño. La confrontación directa con la DZ
            rara vez es productiva; la cooperación documentada suele ser mucho más efectiva.
          </p>

          <h2>Los Plazos Legales</h2>
          <p>
            La Ley 26.061 y el Código Civil y Comercial establecen límites temporales estrictos
            para las medidas excepcionales:
          </p>
          <ul>
            <li>
              <strong>90 días:</strong> Duración de cada medida excepcional. Puede ser renovada
              administrativamente por el CDNNyA
            </li>
            <li>
              <strong>180 días (máximo absoluto):</strong> El Art. 607 inc. c del CCyCN establece
              que pasado este plazo, la situación debe resolverse definitivamente. No se puede
              mantener al niño institucionalizado indefinidamente con renovaciones administrativas
              sucesivas
            </li>
            <li>
              <strong>Después de los 180 días:</strong> El organismo debe decidir: reintegro del
              niño a su familia o, excepcionalmente, declaración de situación de adoptabilidad. En
              la práctica, cuando se supera este plazo sin resolución, el juez puede dictar una{' '}
              <strong>medida de no innovar</strong> (Art. 232 CPCC) para preservar el statu quo
              mientras se determina la solución definitiva
            </li>
          </ul>

          <h3>Cláusula de Bloqueo</h3>
          <p>
            Si un familiar del niño (abuelos, tíos, hermanos mayores) o un referente afectivo
            significativo ofrece hacerse cargo de su cuidado y es evaluado como idóneo,{' '}
            <strong>no se puede declarar la situación de adoptabilidad</strong> (Art. 607 inc. c,
            CCyCN). El sistema debe agotar todas las posibilidades dentro de la familia ampliada y
            la red de contención del niño antes de considerar cualquier otra alternativa.
          </p>

          <h2>Las Instituciones Involucradas</h2>

          <h3>CDNNyA (Consejo de Derechos de Niñas, Niños y Adolescentes)</h3>
          <p>
            Organismo del Poder Ejecutivo de CABA (Ley 114) que dicta las medidas excepcionales.
            Es la autoridad de aplicación de la Ley 26.061 en la Ciudad. Línea 102 (24 horas).
          </p>

          <h3>Defensoría Zonal</h3>
          <p>
            Equipo interdisciplinario territorial (abogados, psicólogos, trabajadores sociales)
            que depende del CDNNyA. Es el <strong>interlocutor principal de la familia</strong>{' '}
            durante todo el proceso. Funciones:
          </p>
          <ul>
            <li>Entrevistas periódicas con los progenitores</li>
            <li>Autorización y supervisión de vinculaciones (visitas)</li>
            <li>Definición de horarios, modalidades y progresión del contacto</li>
            <li>Elaboración de informes técnicos para el CDNNyA y el juzgado</li>
            <li>Coordinación con la institución donde está alojado el niño</li>
            <li>Recomendación de egreso cuando lo considera viable</li>
            <li>Visitas domiciliarias para evaluar las condiciones del hogar</li>
          </ul>
          <p>
            Horario habitual: lunes a viernes de 9 a 16 horas. Los tiempos de respuesta pueden
            ser lentos (días a semanas para una comunicación), lo cual genera frustración pero
            requiere paciencia y persistencia.
          </p>

          <h3>CIF (Cuerpo Interdisciplinario Forense)</h3>
          <p>
            Equipo de evaluación del <strong>Poder Judicial</strong>, independiente tanto del
            CDNNyA como del juez. Psicólogos, psiquiatras y trabajadores sociales evalúan las
            competencias parentales, el vínculo con los hijos y la capacidad de garantizar el
            bienestar del niño. Una evaluación CIF positiva es frecuentemente el{' '}
            <strong>punto de inflexión</strong> que acelera el proceso hacia el egreso.
          </p>

          <h3>Defensor Público de Menores</h3>
          <p>
            Funcionario del Ministerio Público que representa los intereses del niño en el proceso
            judicial. Emite dictámenes que el juez considera al tomar decisiones. Puede solicitar
            medidas específicas (como la apertura de un incidente de alimentos o la designación de
            un tutor especial).
          </p>

          <h3>Institución de Alojamiento</h3>
          <p>
            El hogar donde el niño reside durante la medida (pueden ser instituciones públicas o
            privadas conveniadas). Provee cuidado cotidiano, acompañamiento terapéutico,
            escolarización y elabora informes de evolución. El personal institucional es un
            observador importante de las vinculaciones y su opinión pesa en los informes de la DZ.
          </p>

          <h2>El Proceso de Vinculaciones: Cómo Funciona en la Práctica</h2>
          <p>
            Las vinculaciones son los encuentros entre el niño institucionalizado y sus
            progenitores. Siguen una progresión gradual definida por la Defensoría Zonal:
          </p>
          <ol>
            <li>
              <strong>Contacto supervisado en la institución:</strong> Primeros encuentros en
              presencia de un profesional de la institución. El objetivo es observar la interacción
              y garantizar la seguridad emocional del niño
            </li>
            <li>
              <strong>Visitas supervisadas fuera de la institución:</strong> Salidas a plazas,
              paseos o actividades con acompañamiento de un profesional
            </li>
            <li>
              <strong>Visitas sin supervisión:</strong> El progenitor lleva al niño a actividades y
              lo devuelve a la institución sin acompañamiento profesional
            </li>
            <li>
              <strong>Pernoctes:</strong> El niño duerme en el domicilio del progenitor y regresa a
              la institución. Se comienza con uno o dos pernoctes semanales
            </li>
            <li>
              <strong>Pernoctes ampliados:</strong> Se incrementa la cantidad de noches (por
              ejemplo, de 2 a 4 por semana)
            </li>
            <li>
              <strong>Egreso:</strong> El niño vuelve a vivir con el progenitor de manera
              definitiva, con seguimiento periódico de la DZ
            </li>
          </ol>
          <p>
            <strong>Plazos orientativos:</strong> La progresión completa desde el primer contacto
            supervisado hasta el egreso puede tomar varios meses, dependiendo de la cooperación
            del progenitor, los resultados de las evaluaciones y la complejidad del caso. Cada
            avance requiere una evaluación positiva por parte de la DZ y la institución.
          </p>

          <h2>Qué Hacer Si Su Hijo Fue Separado: Guía Práctica</h2>

          <h3>Lo Más Importante: Cooperar y Documentar</h3>
          <p>
            En un proceso administrativo donde las decisiones las toma la Defensoría Zonal, la
            estrategia más efectiva es:
          </p>
          <ol>
            <li>
              <strong>Asistir a todas las citaciones de la DZ.</strong> Cada inasistencia se
              registra negativamente en el expediente
            </li>
            <li>
              <strong>Cooperar con las evaluaciones.</strong> Aceptar la evaluación CIF, las
              entrevistas de la DZ, las visitas domiciliarias. Una actitud colaborativa demuestra
              capacidad parental
            </li>
            <li>
              <strong>Mantener vinculaciones consistentes.</strong> Asistir a cada encuentro
              pautado, llegar puntualmente, respetar los horarios de devolución
            </li>
            <li>
              <strong>Documentar todo.</strong> Guardar comprobantes de gastos del hijo, fotos del
              hogar preparado, transferencias por alimentos, mensajes de comunicación con la DZ,
              constancias de asistencia a terapia si fue indicada
            </li>
            <li>
              <strong>Preparar el hogar.</strong> Tener listo el espacio del niño (cama, ropa,
              juguetes, espacio de estudio) para las visitas domiciliarias de la DZ
            </li>
            <li>
              <strong>No confrontar a la DZ.</strong> Si hay desacuerdos, canalizarlos a través del
              abogado por vía formal (notas escritas). La confrontación directa suele generar
              resistencia y retrasar el proceso
            </li>
          </ol>

          <h3>Lo que Debe Evitar</h3>
          <ul>
            <li>No presentarse a las citaciones o vinculaciones</li>
            <li>Desacreditar a la institución o a la DZ frente al niño</li>
            <li>Intentar retirar al niño de la institución sin autorización</li>
            <li>Incumplir las condiciones fijadas para las visitas</li>
            <li>Mentir o contradecirse en las entrevistas con distintos profesionales</li>
          </ul>

          <h2>El Rol del Abogado en Este Proceso</h2>
          <p>
            Dado que la medida excepcional es un proceso administrativo con supervisión judicial,
            el abogado cumple un rol estratégico particular:
          </p>
          <ul>
            <li>
              <strong>Representación en el control de legalidad:</strong> Presentarse ante el
              juzgado civil para defender los derechos de la familia y solicitar medidas
              específicas
            </li>
            <li>
              <strong>Solicitud de evaluaciones:</strong> Pedir al juzgado que ordene la evaluación
              CIF cuando el CDNNyA no lo hace motu proprio
            </li>
            <li>
              <strong>Comunicación formal con la DZ:</strong> Redactar notas y solicitudes formales
              que queden documentadas en el expediente administrativo
            </li>
            <li>
              <strong>Monitoreo de plazos:</strong> Controlar que se respeten los plazos legales de
              90 y 180 días, y solicitar la intervención judicial cuando se exceden
            </li>
            <li>
              <strong>Coordinación entre instituciones:</strong> Articular la comunicación entre la
              DZ, el CDNNyA, la institución de alojamiento, el CIF y el juzgado
            </li>
            <li>
              <strong>Apelaciones:</strong> Recurrir decisiones administrativas cuando son
              infundadas o desproporcionadas
            </li>
            <li>
              <strong>Incidentes judiciales:</strong> Abrir incidentes específicos (alimentos,
              cuidado personal) cuando la vía administrativa no resuelve
            </li>
          </ul>

          <h2>Plazos Orientativos del Proceso</h2>
          <p>
            Los tiempos varían considerablemente según la complejidad del caso, la carga de los
            organismos intervinientes y la cooperación de las partes. A modo orientativo:
          </p>
          <ul>
            <li>
              <strong>Dictado de la medida a notificación al juzgado:</strong> 24 a 72 horas
            </li>
            <li>
              <strong>Medida a primera vinculación:</strong> Varias semanas, dependiendo del caso
            </li>
            <li>
              <strong>Solicitud de evaluación CIF a resultado:</strong> Varios meses (depende de la
              disponibilidad del CIF)
            </li>
            <li>
              <strong>Informe de Defensoría Zonal:</strong> Variable, generalmente semanas
            </li>
            <li>
              <strong>Informe de institución de alojamiento:</strong> Mensual (informativo),
              trimestral (formal)
            </li>
            <li>
              <strong>Progresión de vinculaciones supervisadas a pernoctes:</strong> Varios meses,
              según la evolución
            </li>
            <li>
              <strong>Proceso completo (medida a egreso):</strong> Varía ampliamente según las
              circunstancias de cada caso
            </li>
          </ul>

          <h2>Marco Legal</h2>
          <ul>
            <li>
              <strong>Ley 26.061:</strong> Protección integral de derechos de niños, niñas y
              adolescentes
              <ul>
                <li>Art. 3: Interés superior del niño y centro de vida</li>
                <li>Art. 33: La falta de recursos no justifica separación</li>
                <li>Art. 35: Prioridad de medidas que preserven vínculos familiares</li>
                <li>Art. 37: Tendencia a que el niño permanezca con su grupo familiar</li>
                <li>
                  Art. 39: Medidas excepcionales: limitadas en el tiempo, solo mientras persistan
                  las causas
                </li>
                <li>Art. 41: Búsqueda de familia ampliada, preservación de identidad</li>
              </ul>
            </li>
            <li>
              <strong>Art. 607 inc. c CCyCN:</strong> Plazo máximo de 180 días para medidas
              excepcionales
            </li>
            <li>
              <strong>Art. 706 CCyCN:</strong> Principios del proceso de familia (tutela judicial
              efectiva, inmediación)
            </li>
            <li>
              <strong>Art. 232 CPCC:</strong> Medida de no innovar cuando se exceden plazos legales
            </li>
            <li>
              <strong>Ley 114 CABA:</strong> Creación del CDNNyA y las Defensorías Zonales
            </li>
            <li>
              <strong>Convención sobre los Derechos del Niño:</strong> Arts. 3, 9, 12, 20 (interés
              superior, no separación, derecho a ser oído, protección alternativa)
            </li>
          </ul>

          <h2>Caso Ilustrativo: El Proceso Desde la Medida Hasta el Egreso</h2>
          <p>
            Un progenitor fue separado de su hijo mediante una medida de protección excepcional
            dictada por el CDNNyA tras una denuncia de violencia familiar. El niño fue alojado en
            un hogar institucional.
          </p>
          <p>
            Durante las primeras semanas, el progenitor se presentó ante la Defensoría Zonal,
            cooperó con las entrevistas y solicitó el inicio de vinculaciones. Al mes y medio, la
            DZ autorizó el primer contacto supervisado en la institución. El progenitor asistió a
            cada encuentro pautado sin excepción.
          </p>
          <p>
            A los tres meses, el abogado solicitó la evaluación CIF a través del juzgado. El CIF
            evaluó positivamente las competencias parentales y el vínculo con el niño. Con este
            resultado, la DZ aceleró la progresión: visitas sin supervisión al cuarto mes, primeros
            pernoctes al sexto mes.
          </p>
          <p>
            Al superar los 180 días de medida, el juez dictó una medida de no innovar para
            preservar la situación mientras se definía el egreso. La Defensoría del Menor emitió
            dictamen favorable. Al octavo mes, la DZ recomendó el egreso con seguimiento
            periódico. El niño volvió a vivir con su progenitor.
          </p>
          <p>
            Lo que marcó la diferencia en este caso fue la cooperación constante con la DZ, la
            documentación rigurosa de cada instancia, y el resultado positivo del CIF. La
            estrategia no fue confrontar al sistema sino trabajar dentro de él.
          </p>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes sobre Medidas de Protección Excepcional</h2>

          <div className="faq-item">
            <h3>¿Qué es una medida de protección excepcional?</h3>
            <p>
              Es una medida administrativa - no judicial - dictada por el organismo de protección
              de derechos de la infancia (CDNNyA en CABA) cuando un niño se encuentra en grave
              peligro. Puede implicar la separación del niño de su grupo familiar y su alojamiento
              en un hogar institucional o con familia ampliada. Es excepcional, de duración
              limitada (90 días renovables, máximo 180 días) y está sujeta a control de legalidad
              judicial.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es el control de legalidad y quién decide realmente?</h3>
            <p>
              El control de legalidad es la revisión judicial de la medida administrativa. Sin
              embargo, el juez no gestiona el caso: verifica que la medida sea legal y
              proporcionada. Las decisiones cotidianas (vinculaciones, pernoctes, egreso) las toman
              el CDNNyA y la Defensoría Zonal, que son organismos del Poder Ejecutivo. El
              progenitor construye su caso principalmente ante estas instituciones administrativas,
              no ante el juez.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Por qué motivos se puede dictar una medida excepcional?</h3>
            <p>
              Puede dictarse por múltiples razones, no solo violencia: negligencia grave,
              enfermedad física o mental del progenitor que impida el cuidado, abandono, exposición
              a situaciones de riesgo, abuso de sustancias, conflicto familiar grave, o cualquier
              situación donde los derechos del niño estén gravemente amenazados. La falta de
              recursos económicos no puede ser causa de medida excepcional (Art. 33, Ley 26.061).
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto dura una medida de protección excepcional?</h3>
            <p>
              Cada medida dura 90 días y puede ser renovada administrativamente. El Art. 607 inc.
              c del CCyCN establece un plazo máximo absoluto de 180 días. Pasado ese plazo, la
              situación debe resolverse definitivamente: reintegro del niño a su familia o
              declaración de adoptabilidad. En la práctica, cuando se supera este plazo, el juez
              puede dictar una medida de no innovar mientras se resuelve.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es la Defensoría Zonal y qué rol cumple?</h3>
            <p>
              Es un equipo interdisciplinario del Poder Ejecutivo que gestiona el día a día del
              caso. Realiza entrevistas con los progenitores, autoriza las vinculaciones, define
              horarios y modalidades de contacto, evalúa el avance, elabora informes técnicos y
              recomienda el egreso. Es el interlocutor principal de la familia durante todo el
              proceso.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cómo funciona el régimen de vinculaciones?</h3>
            <p>
              Las vinculaciones siguen una progresión gradual definida por la DZ: primero contacto
              supervisado en la institución, luego visitas supervisadas fuera, después visitas sin
              supervisión, posteriormente pernoctes, y finalmente egreso. Este proceso puede tomar
              varios meses según la evolución del caso y la cooperación del progenitor.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es la evaluación CIF y por qué es tan importante?</h3>
            <p>
              El CIF (Cuerpo Interdisciplinario Forense) es un equipo de evaluación del Poder
              Judicial, independiente del CDNNyA y del juez. Evalúa competencias parentales,
              vínculo con los hijos y capacidad de garantizar el bienestar del niño. Una evaluación
              positiva suele ser el punto de inflexión que acelera el régimen de vinculaciones y
              habilita el plan de egreso.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué hago si no estoy de acuerdo con las decisiones de la Defensoría Zonal?</h3>
            <p>
              Puede presentar notas escritas a la DZ solicitando fundamentación, escalar al
              CDNNyA, o solicitar al juez que intervenga mediante un pedido en el expediente de
              control de legalidad. Su abogado puede también pedir al Defensor Público de Menores
              que dictamine. Sin embargo, la confrontación directa rara vez es productiva; cooperar
              y documentar suele ser más efectivo.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Pueden quitarme a mi hijo por falta de recursos económicos?</h3>
            <p>
              No. La Ley 26.061 lo prohíbe expresamente (Art. 33): la falta de recursos materiales
              no puede ser causa de separación familiar ni de institucionalización. Si la dificultad
              es económica, el Estado debe brindar programas de asistencia para que la familia
              pueda mantener al niño.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es la cláusula de bloqueo?</h3>
            <p>
              Establece que si un familiar o referente afectivo del niño ofrece hacerse cargo y es
              evaluado como idóneo, no se puede declarar la situación de adoptabilidad. El sistema
              debe agotar todas las posibilidades dentro de la familia ampliada antes de considerar
              la adopción (Art. 607 inc. c, CCyCN).
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto tarda el proceso completo desde la medida hasta el egreso?</h3>
            <p>
              Los plazos varían considerablemente según la complejidad del caso y la carga de los
              organismos. La evaluación CIF puede demorar varios meses. La progresión de
              vinculaciones también toma meses según la evolución. No hay un plazo estándar para el
              egreso. La cooperación con la DZ y un resultado positivo del CIF son los factores que
              más aceleran el proceso.
            </p>
          </div>
        </div>

        <div className="service-related-publications">
          <h2>Publicaciones relacionadas</h2>
          <p>Artículos sobre protección de derechos de la niñez y derecho de familia.</p>
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
          heading="¿Su hijo fue separado por una medida excepcional?"
          subtext="Asesoramiento especializado en medidas de protección excepcional y control de legalidad. Más de 25 años de experiencia."
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre Medida de Protección Excepcional"
          trackSource="service_cta"
        />
      </div>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20Medida%20de%20Protecci%C3%B3n%20Excepcional"
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
