import ServicePage from './ServicePage'

const SucesionesPage = () => {
  const service = {
    title: 'Abogada Sucesiones Buenos Aires',
    slug: 'sucesiones',
    h1: 'Abogada Especialista en Sucesiones y Testamentos',
    description: 'Abogada especialista en sucesiones y testamentos en Buenos Aires. Tramitación de sucesiones, declaratoria de herederos, partición de bienes, testamentos. Asesoramiento integral en derecho sucesorio.',
    keywords: 'sucesiones, abogada sucesiones, testamentos, declaratoria de herederos, partición de bienes, herencias, sucesorio, trámite sucesión, Buenos Aires, Morón, Argentina',
    intro: 'Tramitación de sucesiones y testamentos con eficiencia y profesionalismo. Más de 25 años de experiencia protegiendo los derechos de los herederos.',

    content: (
      <>
        <h2>Servicios de Sucesiones</h2>
        <p>
          La sucesión es el proceso mediante el cual se transmiten los bienes, derechos y obligaciones
          de una persona fallecida a sus herederos. Nuestro estudio ofrece asesoramiento integral en
          todo el proceso sucesorio, desde el inicio hasta la inscripción de los bienes.
        </p>

        <h3>Servicios que Ofrecemos</h3>
        <ul>
          <li><strong>Inicio de Sucesión:</strong> Presentación ante el juzgado correspondiente</li>
          <li><strong>Declaratoria de Herederos:</strong> Cuando no hay testamento</li>
          <li><strong>Testamentos:</strong> Redacción y protocolización</li>
          <li><strong>Inventario y Avalúo:</strong> Tasación de bienes de la herencia</li>
          <li><strong>Partición de Bienes:</strong> División entre herederos</li>
          <li><strong>Inscripción de Dominio:</strong> Transferencia de inmuebles y automotores</li>
          <li><strong>Certificado de Bienes:</strong> Obtención ante AFIP y Registro de la Propiedad</li>
        </ul>

        <h2>Proceso de Sucesión en Argentina</h2>
        <p>
          El trámite de sucesión se inicia ante el Juzgado Civil correspondiente al último domicilio
          del causante. El proceso incluye varias etapas:
        </p>

        <h3>Etapas del Proceso</h3>
        <ol style={{lineHeight: '1.8', marginLeft: '2rem'}}>
          <li><strong>Inicio:</strong> Presentación de la demanda de sucesión con partida de defunción y documentación</li>
          <li><strong>Declaratoria de Herederos o Apertura de Testamento:</strong> Determinación de quiénes son los herederos</li>
          <li><strong>Inventario:</strong> Determinación de los bienes del causante mediante Certificado de Bienes</li>
          <li><strong>Avalúo:</strong> Tasación de los bienes del acervo hereditario</li>
          <li><strong>Pago de Deudas:</strong> Si las hubiera, incluyendo impuestos sucesorios</li>
          <li><strong>Partición:</strong> División de los bienes entre los herederos</li>
          <li><strong>Inscripción:</strong> Transferencia de dominio de inmuebles y automotores</li>
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
          El testamento es un acto jurídico mediante el cual una persona dispone del destino de sus
          bienes para después de su muerte. En Argentina existen dos tipos principales:
        </p>

        <h3>Tipos de Testamento</h3>
        <ul>
          <li><strong>Testamento Ológrafo:</strong> Escrito de puño y letra por el testador, fechado y firmado</li>
          <li><strong>Testamento por Acto Público:</strong> Realizado ante escribano público</li>
        </ul>

        <p>
          Es importante saber que en Argentina no se puede disponer libremente de todos los bienes.
          Existen herederos forzosos (descendientes, ascendientes y cónyuge) que tienen derecho a la
          legítima (porción de herencia que no se puede desconocer).
        </p>

        <h2>Impuesto a la Herencia</h2>
        <p>
          Actualmente en Argentina no existe un impuesto nacional a la herencia. Sin embargo, pueden
          existir impuestos provinciales (como el Impuesto de Sellos en algunas provincias) y gastos
          del trámite sucesorio (honorarios profesionales, tasas judiciales, etc.).
        </p>
      </>
    ),

    faqs: [
      {
        question: '¿Cuánto tiempo demora una sucesión?',
        answer: 'Una sucesión puede demorar entre 1 y 3 años aproximadamente, dependiendo de la complejidad del caso, la cantidad de bienes, si hay acuerdo entre herederos, y la carga de trabajo del juzgado. Los casos más simples con acuerdo entre herederos pueden resolverse en menos tiempo.'
      },
      {
        question: '¿Cuánto cuesta hacer una sucesión?',
        answer: 'Los costos incluyen: honorarios del abogado (regulados por el Colegio de Abogados según el valor de los bienes), tasas judiciales, honorarios del escribano para escrituras, costos de certificados y tasaciones. Es recomendable solicitar un presupuesto según el caso particular.'
      },
      {
        question: '¿Es obligatorio hacer la sucesión?',
        answer: 'Sí, es obligatorio para poder disponer legalmente de los bienes del fallecido. Sin el trámite de sucesión no se pueden vender, transferir ni inscribir inmuebles o automotores a nombre de los herederos. Además, los bienes sin sucesión pueden generar deudas por impuestos y servicios.'
      },
      {
        question: '¿Qué pasa si no hay acuerdo entre herederos?',
        answer: 'Si no hay acuerdo en la partición de bienes, el juez puede designar un partidor judicial que proponga una división equitativa. También pueden venderse los bienes en subasta pública y repartirse el producido. Es recomendable intentar llegar a un acuerdo para evitar demoras y mayores costos.'
      },
      {
        question: '¿Se puede renunciar a una herencia?',
        answer: 'Sí, cualquier heredero puede renunciar a la herencia. La renuncia debe ser expresa y realizarse ante escribano público o juez. Es importante saber que al renunciar se renuncia a todo (no se puede aceptar solo los bienes y rechazar las deudas). Si hay deudas que superan el activo, la renuncia puede ser conveniente.'
      }
    ]
  }

  return <ServicePage service={service} />
}

export default SucesionesPage
