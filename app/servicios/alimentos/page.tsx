import type { Metadata } from 'next'
import ServiceNav from '@/components/ServiceNav'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCTA from '@/components/ServiceCTA'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: 'Cuota Alimentaria: Cómo Reclamarla, Aumentarla y Ejecutarla | Dra. Esparza',
  description:
    '¿Cómo reclamar la cuota alimentaria? Abogada de alimentos en CABA: demanda, cuota provisoria en días, aumento por inflación, ejecución al deudor y cese. Consulta por WhatsApp.',
  keywords:
    'juicio de alimentos, cuota alimentaria, demanda de alimentos, aumento de cuota, alimentos hijos menores, alimentos hijos mayores, pensión alimenticia, Buenos Aires, Argentina',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://draandreaesparza.com/servicios/alimentos',
    languages: { 'es-AR': 'https://draandreaesparza.com/servicios/alimentos' },
  },
  openGraph: {
    type: 'website',
    url: 'https://draandreaesparza.com/servicios/alimentos',
    title: 'Cuota Alimentaria: Cómo Reclamarla, Aumentarla y Ejecutarla | Dra. Esparza',
    description:
      '¿Cómo reclamar la cuota alimentaria? Abogada de alimentos en CABA: demanda, cuota provisoria en días, aumento por inflación, ejecución al deudor y cese. Consulta por WhatsApp.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-home.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuota Alimentaria: Cómo Reclamarla, Aumentarla y Ejecutarla | Dra. Esparza',
    description:
      '¿Cómo reclamar la cuota alimentaria? Abogada de alimentos en CABA: demanda, cuota provisoria en días, aumento por inflación, ejecución al deudor y cese. Consulta por WhatsApp.',
    images: ['https://draandreaesparza.com/assets/images/og-home.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicio de Juicio de Alimentos en Buenos Aires',
  description:
    'Abogada para demanda de alimentos en Buenos Aires. Cuota alimentaria para hijos, alimentos provisorios, ejecución por incumplimiento, aumento, reducción y cese.',
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
      'Abogada para demanda de alimentos en Buenos Aires. Cuota alimentaria para hijos, alimentos provisorios, ejecución por incumplimiento, aumento, reducción y cese.',
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
      name: 'Abogada de Cuota Alimentaria en Buenos Aires',
      item: 'https://draandreaesparza.com/servicios/alimentos',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto demora una demanda de alimentos para hijos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los alimentos provisorios pueden fijarse en días o semanas. El juicio completo puede demorar entre 6 meses y 1 año aproximadamente, dependiendo de la complejidad del caso y la carga de trabajo del juzgado. Es importante iniciar el trámite cuanto antes porque los alimentos no son retroactivos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto se paga de cuota alimentaria por hijo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay un monto fijo. Generalmente se establece entre el 20% y 30% de los ingresos netos por hijo, pero puede variar. Se considera: necesidades del hijo, ingresos del alimentante, cantidad de hijos, modalidad de cuidado (si es compartido puede ser menor). El juez analizará cada caso en particular.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Desde cuándo se deben los alimentos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los alimentos se deben desde la presentación de la demanda. Por eso es importante iniciar el juicio cuanto antes. Los alimentos no son retroactivos (no se cobran cuotas anteriores a la demanda, salvo excepciones). Una vez fijada la cuota, el incumplimiento genera intereses.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el padre pagar directamente los gastos en vez de dar dinero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, la cuota puede fijarse en dinero, en especie (pago directo de colegio, obra social, etc.) o de forma mixta. Sin embargo, debe haber acuerdo o ser dispuesto por el juez. No se puede dejar de pagar la cuota en dinero sin autorización judicial, aun cuando se paguen gastos directamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hasta qué edad debo pagar cuota alimentaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los hijos tienen derecho a alimentos hasta los 21 años. Puede extenderse hasta los 25 años si están estudiando y no pueden autosostenerse. En caso de discapacidad, puede no tener límite de edad. El cese debe ser solicitado judicialmente, no se produce automáticamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Las tareas de cuidado diario cuentan como aporte alimentario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El Art. 660 del CCyCN establece que las tareas cotidianas de cuidado tienen valor económico y constituyen un aporte a la manutención del hijo. Si un progenitor se encarga de la mayor parte del cuidado diario, eso se compensa con la obligación del otro progenitor de contribuir en dinero.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede suspender la cuota alimentaria si el hijo fue institucionalizado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La obligación alimentaria subsiste aun durante una medida de protección excepcional (Art. 704 CCyCN). Cuando el progenitor cubre gastos directos del hijo durante las vinculaciones, puede plantearse judicialmente que se computen como contribución alimentaria. Cada caso requiere análisis particular.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es un incidente de alimentos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es un trámite judicial separado del proceso principal que permite discutir exclusivamente la cuestión alimentaria. Es útil cuando el juicio de fondo está en curso y los alimentos no pueden esperar, o cuando se necesita modificar una cuota ya fijada por cambio de circunstancias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se actualiza la cuota alimentaria por inflación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si la cuota fue fijada en monto fijo en pesos, se puede solicitar actualización judicial. Muchos juzgados fijan la cuota como porcentaje de los ingresos del alimentante, lo que permite actualización automática. También se puede acordar un mecanismo de ajuste periódico.',
      },
    },
  ],
}

export default function AlimentosPage() {
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
            { label: 'Abogada de Cuota Alimentaria en Buenos Aires' },
          ]}
        />

        <header className="service-header">
          <h1>Cuota Alimentaria: Abogada Especialista en Juicios de Alimentos</h1>
          <p className="service-intro">
            Defensa efectiva de los derechos alimentarios de niños, niñas y adolescentes. Más de 25
            años de experiencia en juicios de alimentos.
          </p>
        </header>

        <div className="service-content">
          <h2>Servicios en Juicios de Alimentos</h2>
          <p>
            La cuota alimentaria es el derecho que tienen los hijos a recibir de sus padres todo lo
            necesario para su desarrollo integral: alimentación, educación, vivienda, vestimenta,
            esparcimiento, salud. Nuestro estudio ofrece asesoramiento especializado en todas las
            cuestiones relacionadas con alimentos.
          </p>

          <h3>Servicios que Ofrecemos</h3>
          <ul>
            <li>
              <strong>Demanda de Alimentos:</strong> Inicio de juicio por alimentos para hijos
              menores
            </li>
            <li>
              <strong>Alimentos para Hijos Mayores:</strong> Continuación hasta los 21 años o 25 si
              estudian
            </li>
            <li>
              <strong>Aumento de Cuota:</strong> Por aumento de necesidades o capacidad económica
            </li>
            <li>
              <strong>Reducción de Cuota:</strong> Cuando disminuye la capacidad del alimentante
            </li>
            <li>
              <strong>Cese de Cuota:</strong> Por mayoría de edad o finalización de estudios
            </li>
            <li><strong>Ejecución de Sentencia:</strong> Cobro de cuotas impagas</li>
            <li>
              <strong>Alimentos Provisorios:</strong> Medidas urgentes mientras dura el juicio
            </li>
          </ul>

          <h2>¿Quiénes Tienen Derecho a Alimentos?</h2>
          <ul>
            <li>
              <strong>Hijos Menores de 18 años:</strong> Tienen derecho automático e irrenunciable
            </li>
            <li>
              <strong>Hijos entre 18 y 21 años:</strong> Si no tienen recursos propios
            </li>
            <li>
              <strong>Hijos hasta 25 años:</strong> Si están estudiando y no pueden mantenerse
            </li>
            <li>
              <strong>Hijos con Discapacidad:</strong> Sin límite de edad si no pueden autosostenerse
            </li>
            <li>
              <strong>Mujer Embarazada:</strong> Desde la concepción hasta el nacimiento
            </li>
          </ul>

          <h2>¿Cómo se Fija la Cuota Alimentaria?</h2>
          <p>El monto de la cuota alimentaria se determina considerando:</p>
          <ul>
            <li>
              <strong>Necesidades del alimentado:</strong> Edad, escolarización, salud, actividades
            </li>
            <li>
              <strong>Posibilidades del alimentante:</strong> Ingresos, trabajo, otros hijos
            </li>
            <li>
              <strong>Modalidad de cuidado:</strong> Si es unilateral o compartido
            </li>
            <li>
              <strong>Nivel socioeconómico familiar:</strong> Mantener el estándar de vida del niño
            </li>
          </ul>
          <p>
            La cuota puede ser fijada en dinero (porcentaje de los ingresos) o en especie (pago
            directo de colegio, obra social, etc.), o mixta. Generalmente se establece entre el 20%
            y 30% de los ingresos del alimentante por hijo, pero puede variar según el caso.
          </p>

          <h2>Proceso de Juicio de Alimentos</h2>
          <h3>Etapas del Proceso</h3>
          <ol>
            <li>
              <strong>Alimentos Provisorios:</strong> El juez puede fijar una cuota provisoria
              urgente
            </li>
            <li>
              <strong>Demanda:</strong> Presentación formal solicitando la cuota definitiva
            </li>
            <li>
              <strong>Contestación:</strong> El demandado responde y presenta pruebas
            </li>
            <li><strong>Prueba:</strong> Acreditación de ingresos y necesidades</li>
            <li>
              <strong>Sentencia:</strong> El juez fija la cuota alimentaria definitiva
            </li>
          </ol>

          <h3>Documentación Necesaria</h3>
          <ul>
            <li>DNI del hijo y del progenitor que solicita</li>
            <li>Partida de nacimiento del hijo</li>
            <li>Comprobantes de gastos del hijo (colegio, salud, actividades)</li>
            <li>Información sobre ingresos del alimentante (si se conocen)</li>
            <li>Sentencia de divorcio o cuidado personal (si existe)</li>
          </ul>

          <h2>Incumplimiento de Cuota Alimentaria</h2>
          <p>
            Si el alimentante no paga la cuota, existen varias medidas para hacer efectivo el cobro:
          </p>
          <ul>
            <li><strong>Embargo de Sueldos:</strong> Descuento directo del salario</li>
            <li>
              <strong>Embargo de Cuentas Bancarias:</strong> Retención de fondos
            </li>
            <li>
              <strong>Inhibición General de Bienes:</strong> Impide vender bienes a su nombre
            </li>
            <li>
              <strong>Suspensión de Licencia de Conducir:</strong> Por deuda alimentaria
            </li>
            <li>
              <strong>Impedimento de Salida del País:</strong> Mientras exista deuda
            </li>
            <li>
              <strong>Prisión por Desobediencia:</strong> En casos extremos de incumplimiento
              reiterado
            </li>
          </ul>

          <h2>Valor Económico del Cuidado Diario</h2>
          <p>
            El Art. 660 del CCyCN establece un principio fundamental:{' '}
            <strong>
              las tareas cotidianas de cuidado del hijo tienen valor económico
            </strong>{' '}
            y constituyen un aporte a su manutención. Esto significa que el progenitor que se
            encarga del cuidado diario (levantarlo, alimentarlo, llevarlo al colegio, turnos médicos,
            actividades, rutina de sueño) está realizando una contribución económica cuantificable,
            que se compensa con la obligación alimentaria del otro progenitor.
          </p>
          <p>
            Este principio es especialmente relevante cuando un progenitor asume la mayor parte del
            cuidado cotidiano: el tiempo invertido en la crianza reduce proporcionalmente su
            obligación de contribuir en dinero.
          </p>

          <h2>Modificación de la Cuota Alimentaria</h2>
          <p>
            La cuota alimentaria no es inmutable. Puede modificarse cuando cambian sustancialmente
            las circunstancias que la originaron:
          </p>

          <h3>Aumento de Cuota</h3>
          <ul>
            <li>
              Aumento de las necesidades del hijo (cambio de colegio, tratamiento médico,
              actividades)
            </li>
            <li>Mejora en la situación económica del alimentante</li>
            <li>
              Desactualización por inflación (la cuota se fija en pesos y pierde valor)
            </li>
          </ul>

          <h3>Reducción de Cuota</h3>
          <ul>
            <li>Disminución comprobada de los ingresos del alimentante</li>
            <li>Nacimiento de otros hijos con obligación alimentaria</li>
            <li>
              Cambio en la modalidad de cuidado personal (si pasa a compartido, la distribución se
              equilibra)
            </li>
          </ul>

          <h3>Suspensión o Cese de Cuota</h3>
          <p>
            El Art. 554 inc. c del CCyCN prevé el cese de la obligación alimentaria cuando
            desaparecen las condiciones que la originaron. Casos típicos:
          </p>
          <ul>
            <li>
              El hijo cumple 21 años (o 25 si estudia) y puede autosostenerse
            </li>
            <li>
              Cambio de cuidado personal: si el alimentante pasa a tener el cuidado principal del
              hijo, puede solicitar la suspensión
            </li>
          </ul>

          <h2>Incidente de Alimentos</h2>
          <p>
            El <strong>incidente de alimentos</strong> es un trámite judicial separado que permite
            discutir exclusivamente la cuestión alimentaria, sin necesidad de resolver primero el
            cuidado personal. Esto es especialmente útil cuando:
          </p>
          <ul>
            <li>
              El proceso principal (divorcio, cuidado personal) está en curso y los alimentos no
              pueden esperar
            </li>
            <li>Se necesita modificar una cuota ya fijada</li>
          </ul>

          <h2>Tiempos Reales del Proceso</h2>
          <ul>
            <li>
              <strong>Alimentos provisorios:</strong> Pueden fijarse en días o semanas desde la
              presentación
            </li>
            <li>
              <strong>Juicio completo:</strong> Entre 6 meses y 1 año dependiendo de la complejidad
            </li>
            <li>
              <strong>Incidente de modificación:</strong> 3 a 6 meses
            </li>
            <li>
              <strong>Ejecución de cuotas impagas:</strong> 2 a 4 meses para trabar embargo
            </li>
          </ul>

          <h2>Marco Legal</h2>
          <p>
            La obligación alimentaria deriva de la <strong>responsabilidad parental</strong>{' '}
            (antes llamada &ldquo;patria potestad&rdquo; hasta la reforma del CCyCN en 2015).{' '}
            <TrackedLink
              href="/articulos/responsabilidad-parental-patria-potestad-tenencia"
              trackEvent="cta_click"
              trackSource="alimentos_to_terminologia_hub"
            >
              Ver explicación de responsabilidad parental →
            </TrackedLink>
          </p>
          <ul>
            <li>
              <strong>Art. 658 CCyCN:</strong> Ambos progenitores tienen obligación alimentaria en
              proporción a sus recursos
            </li>
            <li>
              <strong>Art. 660 CCyCN:</strong> Las tareas de cuidado cotidiano tienen valor económico
              y constituyen aporte alimentario
            </li>
            <li>
              <strong>Art. 662 CCyCN:</strong> Legitimación para pedir alimentos (quién puede
              reclamar y quién puede recibir)
            </li>
            <li>
              <strong>Art. 666 CCyCN:</strong> Distribución de gastos en cuidado compartido
            </li>
            <li>
              <strong>Art. 704 CCyCN:</strong> La obligación alimentaria subsiste aun cuando se
              suspenda el ejercicio de la responsabilidad parental
            </li>
            <li>
              <strong>Art. 554 inc. c CCyCN:</strong> Cesación de alimentos cuando desaparecen las
              condiciones
            </li>
          </ul>

          <h2>Alimentos y Medida de Protección Excepcional</h2>
          <p>
            Cuando un hijo es separado de su familia por una{' '}
            <a href="/servicios/medida-proteccion-excepcional">medida de protección excepcional</a>{' '}
            (Ley 26.061, Art. 39) y alojado en una institución, la obligación alimentaria del
            progenitor subsiste (Art. 704 CCyCN). Sin embargo, la situación puede plantear
            cuestiones específicas que requieren análisis caso por caso:
          </p>
          <ul>
            <li>
              <strong>Legitimación para recibir la cuota:</strong> Si el hijo no convive con ningún
              progenitor, puede ser necesario determinar judicialmente quién recibe y administra los
              alimentos (Art. 662 CCyCN)
            </li>
            <li>
              <strong>Destino de los pagos:</strong> Según las circunstancias, podría corresponder
              depositar judicialmente o canalizar los pagos a través del organismo de protección
            </li>
            <li>
              <strong>Gastos directos como aporte:</strong> Cuando el progenitor cubre gastos
              directos del hijo durante las vinculaciones (ropa, salud, actividades), puede
              plantearse que estos se computen como contribución alimentaria, aunque esto requiere
              resolución judicial
            </li>
            <li>
              <strong>Incidente de alimentos:</strong> El Defensor Público de Menores puede solicitar
              la apertura de un incidente alimentario separado, especialmente cuando la medida
              excepcional supera los 180 días
            </li>
          </ul>
        </div>

        <div className="service-faqs">
          <h2>Preguntas Frecuentes</h2>

          <div className="faq-item">
            <h3>¿Cuánto demora una demanda de alimentos para hijos?</h3>
            <p>
              Los alimentos provisorios pueden fijarse en días o semanas. El juicio completo puede
              demorar entre 6 meses y 1 año aproximadamente, dependiendo de la complejidad del caso
              y la carga de trabajo del juzgado. Es importante iniciar el trámite cuanto antes
              porque los alimentos no son retroactivos.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cuánto se paga de cuota alimentaria por hijo?</h3>
            <p>
              No hay un monto fijo. Generalmente se establece entre el 20% y 30% de los ingresos
              netos por hijo, pero puede variar. Se considera: necesidades del hijo, ingresos del
              alimentante, cantidad de hijos, modalidad de cuidado (si es compartido puede ser
              menor). El juez analizará cada caso en particular.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Desde cuándo se deben los alimentos?</h3>
            <p>
              Los alimentos se deben desde la presentación de la demanda. Por eso es importante
              iniciar el juicio cuanto antes. Los alimentos no son retroactivos (no se cobran cuotas
              anteriores a la demanda, salvo excepciones). Una vez fijada la cuota, el incumplimiento
              genera intereses.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Puede el padre pagar directamente los gastos en vez de dar dinero?</h3>
            <p>
              Sí, la cuota puede fijarse en dinero, en especie (pago directo de colegio, obra social,
              etc.) o de forma mixta. Sin embargo, debe haber acuerdo o ser dispuesto por el juez. No
              se puede dejar de pagar la cuota en dinero sin autorización judicial, aun cuando se
              paguen gastos directamente.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Hasta qué edad debo pagar cuota alimentaria?</h3>
            <p>
              Los hijos tienen derecho a alimentos hasta los 21 años. Puede extenderse hasta los 25
              años si están estudiando y no pueden autosostenerse. En caso de discapacidad, puede no
              tener límite de edad. El cese debe ser solicitado judicialmente, no se produce
              automáticamente.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Las tareas de cuidado diario cuentan como aporte alimentario?</h3>
            <p>
              Sí. El Art. 660 del CCyCN establece que las tareas cotidianas de cuidado tienen valor
              económico y constituyen un aporte a la manutención del hijo. Si un progenitor se
              encarga de la mayor parte del cuidado diario (alimentación, escuela, turnos médicos,
              rutinas), eso se compensa con la obligación del otro progenitor de contribuir en
              dinero.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Se puede suspender la cuota alimentaria si el hijo fue institucionalizado?</h3>
            <p>
              La obligación alimentaria subsiste aun durante una medida de protección excepcional
              (Art. 704 CCyCN). Sin embargo, cuando el progenitor cubre gastos directos del hijo
              durante las vinculaciones, puede plantearse judicialmente que se computen como
              contribución alimentaria. Cada caso requiere análisis particular a través de un
              incidente de alimentos.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Qué es un incidente de alimentos?</h3>
            <p>
              Es un trámite judicial separado del proceso principal que permite discutir
              exclusivamente la cuestión alimentaria. Es útil cuando el juicio de fondo (divorcio,
              cuidado personal) está en curso y los alimentos no pueden esperar, o cuando se necesita
              modificar una cuota ya fijada por cambio de circunstancias.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cómo se actualiza la cuota alimentaria por inflación?</h3>
            <p>
              Si la cuota fue fijada en un monto fijo en pesos, se puede solicitar su actualización
              judicial cuando la inflación la hace insuficiente. Muchos juzgados fijan la cuota como
              porcentaje de los ingresos del alimentante, lo que permite una actualización
              automática. También se puede acordar o solicitar un mecanismo de ajuste periódico
              (trimestral, semestral).
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
          waMessage="Hola Dra. Esparza, vengo de https://draandreaesparza.com y me gustaría consultar sobre Abogada Juicio de Alimentos Buenos Aires"
          trackSource="service_cta"
        />
      </div>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20Abogada%20Juicio%20de%20Alimentos%20Buenos%20Aires"
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
