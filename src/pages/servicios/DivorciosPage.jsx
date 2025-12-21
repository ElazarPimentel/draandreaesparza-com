import ServicePage from './ServicePage'

const DivorciosPage = () => {
  const service = {
    title: 'Abogada Divorcios Buenos Aires',
    slug: 'divorcios-buenos-aires',
    h1: 'Abogada Especialista en Divorcios en Buenos Aires',
    description: 'Abogada especialista en divorcios en Buenos Aires. Tramitación de divorcios express, divorcio de mutuo acuerdo y divorcio contencioso. Asesoramiento en liquidación de sociedad conyugal y compensación económica.',
    keywords: 'divorcios, abogada divorcios, divorcio express, divorcio contencioso, divorcio de mutuo acuerdo, liquidación sociedad conyugal, compensación económica, Buenos Aires, Morón, Argentina',
    intro: 'Asesoramiento integral y tramitación de divorcios en Buenos Aires. Más de 25 años de experiencia en derecho de familia.',

    content: (
      <>
        <h2>Servicios de Divorcio</h2>
        <p>
          El divorcio es una decisión importante que requiere asesoramiento legal profesional.
          Como abogada especialista en derecho de familia con más de 25 años de experiencia,
          ofrezco acompañamiento integral en todo el proceso de divorcio.
        </p>

        <h3>Tipos de Divorcio</h3>
        <ul>
          <li><strong>Divorcio de Mutuo Acuerdo:</strong> Cuando ambas partes están de acuerdo en divorciarse y en las condiciones del divorcio</li>
          <li><strong>Divorcio Contencioso:</strong> Cuando no hay acuerdo entre las partes y se requiere intervención judicial</li>
          <li><strong>Divorcio Express:</strong> Tramitación rápida cuando hay acuerdo en todos los aspectos</li>
        </ul>

        <h3>Aspectos que Abordamos</h3>
        <ul>
          <li>Liquidación de la sociedad conyugal</li>
          <li>División de bienes gananciales</li>
          <li>Compensación económica</li>
          <li>Cuidado personal de los hijos (si corresponde)</li>
          <li>Régimen de comunicación</li>
          <li>Cuota alimentaria para hijos menores</li>
          <li>Atribución de la vivienda familiar</li>
        </ul>

        <h2>Proceso de Divorcio en Argentina</h2>
        <p>
          Desde la reforma del Código Civil y Comercial, el divorcio en Argentina es más ágil.
          Ya no se requieren causales ni tiempos de separación. El proceso puede iniciarse por
          petición de uno o ambos cónyuges.
        </p>

        <h3>Documentación Necesaria</h3>
        <ul>
          <li>DNI de ambos cónyuges</li>
          <li>Acta de matrimonio</li>
          <li>Partidas de nacimiento de hijos menores (si los hay)</li>
          <li>Documentación sobre bienes de la sociedad conyugal</li>
        </ul>

        <h2>¿Por Qué Elegir Nuestro Estudio?</h2>
        <p>
          Más de 25 años de experiencia en derecho de familia nos permiten ofrecer:
        </p>
        <ul>
          <li>Asesoramiento personalizado y confidencial</li>
          <li>Tramitación ágil y eficiente</li>
          <li>Defensa de sus derechos e intereses</li>
          <li>Enfoque en soluciones justas y equitativas</li>
          <li>Atención en Buenos Aires y Morón</li>
        </ul>
      </>
    ),

    faqs: [
      {
        question: '¿Cuánto tiempo demora un divorcio en Argentina?',
        answer: 'Un divorcio de mutuo acuerdo puede resolverse en 3 a 6 meses aproximadamente. El divorcio contencioso puede demorar entre 6 meses y 2 años dependiendo de la complejidad del caso y la carga de trabajo del juzgado.'
      },
      {
        question: '¿Cuánto cuesta un divorcio?',
        answer: 'Los honorarios profesionales dependen de la complejidad del caso, si hay acuerdo o no entre las partes, y si hay bienes a liquidar. Solicite una consulta para obtener un presupuesto personalizado.'
      },
      {
        question: '¿Puedo divorciarme sin el consentimiento de mi cónyuge?',
        answer: 'Sí, en Argentina el divorcio puede ser solicitado por uno solo de los cónyuges sin necesidad del consentimiento del otro. Es el llamado divorcio unilateral o incausado.'
      },
      {
        question: '¿Qué es la compensación económica?',
        answer: 'Es una prestación económica que puede solicitarse cuando el divorcio produce un desequilibrio económico manifiesto que signifique un empeoramiento de la situación económica de uno de los cónyuges con relación a la del otro.'
      },
      {
        question: '¿Necesito abogado para divorciarme?',
        answer: 'Sí, en Argentina es obligatorio contar con patrocinio letrado para tramitar un divorcio, ya sea de mutuo acuerdo o contencioso. Cada parte debe tener su propio abogado.'
      }
    ]
  }

  return <ServicePage service={service} />
}

export default DivorciosPage
