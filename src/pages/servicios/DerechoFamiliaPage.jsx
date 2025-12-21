import ServicePage from './ServicePage'

const DerechoFamiliaPage = () => {
  const service = {
    title: 'Abogada Derecho de Familia Buenos Aires',
    slug: 'derecho-familia',
    h1: 'Abogada Especialista en Derecho de Familia',
    description: 'Abogada especialista en derecho de familia en Buenos Aires. Asesoramiento en divorcios, cuidado personal, patria potestad, adopción, violencia familiar, alimentos. +25 años de experiencia.',
    keywords: 'derecho de familia, abogada familia, cuidado personal, patria potestad, régimen de comunicación, violencia familiar, violencia doméstica, orden de protección, adopción, Buenos Aires, Argentina',
    intro: 'Soluciones legales integrales en derecho de familia. Protegiendo los derechos de las familias argentinas desde hace más de 25 años.',

    content: (
      <>
        <h2>Servicios en Derecho de Familia</h2>
        <p>
          El derecho de familia abarca todas las cuestiones jurídicas relacionadas con las relaciones
          familiares. Nuestro estudio ofrece asesoramiento especializado con un enfoque humano y profesional.
        </p>

        <h3>Áreas de Práctica</h3>
        <ul>
          <li><strong>Divorcios:</strong> De mutuo acuerdo, contenciosos, express</li>
          <li><strong>Cuidado Personal:</strong> Unilateral, compartido, alternado</li>
          <li><strong>Patria Potestad:</strong> Ejercicio, suspensión, privación</li>
          <li><strong>Régimen de Comunicación:</strong> Visitas, contacto con hijos menores</li>
          <li><strong>Alimentos:</strong> Para hijos menores y mayores, cónyuge</li>
          <li><strong>Adopción:</strong> Simple, plena, integración</li>
          <li><strong>Violencia Familiar:</strong> Órdenes de protección, exclusión del hogar</li>
          <li><strong>Filiación:</strong> Reconocimiento, impugnación</li>
        </ul>

        <h2>Cuidado Personal de los Hijos</h2>
        <p>
          El cuidado personal (antes llamado tenencia) determina con quién vivirán los hijos tras
          la separación o divorcio de los padres. El Código Civil y Comercial establece tres modalidades:
        </p>
        <ul>
          <li><strong>Cuidado Personal Compartido:</strong> Alternado (los hijos pasan períodos con cada progenitor) o indistinto (ambos progenitores comparten decisiones cotidianas)</li>
          <li><strong>Cuidado Personal Unilateral:</strong> Un solo progenitor tiene el cuidado cotidiano, el otro tiene régimen de comunicación</li>
        </ul>

        <h2>Violencia Familiar y Protección</h2>
        <p>
          Si está atravesando una situación de violencia familiar, puede solicitar medidas de protección urgentes:
        </p>
        <ul>
          <li>Orden de protección (prohibición de acercamiento)</li>
          <li>Exclusión del agresor del hogar familiar</li>
          <li>Botón antipánico</li>
          <li>Custodia policial</li>
          <li>Asistencia psicológica y legal gratuita</li>
        </ul>
        <p>
          Las denuncias se pueden realizar en Comisarías, Oficina de Violencia Doméstica (OVD),
          o directamente en los Juzgados de Familia. Atendemos casos de urgencia.
        </p>

        <h2>Adopción</h2>
        <p>
          El proceso de adopción en Argentina requiere estar inscripto en el Registro de Adoptantes
          y cumplir con los requisitos establecidos por ley. Acompañamos a las familias en todo el
          proceso de adopción: inscripción, evaluaciones, vinculación y sentencia de adopción.
        </p>

        <h3>Tipos de Adopción</h3>
        <ul>
          <li><strong>Adopción Plena:</strong> Vínculo jurídico pleno, cesa vínculo con familia de origen</li>
          <li><strong>Adopción Simple:</strong> Se mantienen algunos vínculos con familia de origen</li>
          <li><strong>Adopción de Integración:</strong> Cuando se adopta al hijo del cónyuge o conviviente</li>
        </ul>
      </>
    ),

    faqs: [
      {
        question: '¿Qué es el interés superior del niño?',
        answer: 'Es el principio rector en todas las decisiones que afecten a niños, niñas y adolescentes. Implica que en caso de conflicto, debe prevalecer aquello que resulte más beneficioso para el desarrollo integral del niño, considerando su opinión según edad y madurez.'
      },
      {
        question: '¿A qué edad puede un niño decidir con quién vivir?',
        answer: 'Los niños tienen derecho a ser escuchados siempre, pero su opinión tiene mayor peso a medida que crecen. A partir de los 13 años, su consentimiento es necesario para ciertas decisiones importantes. El juez debe escuchar al niño en un ambiente adecuado y considerar su opinión según su edad y madurez.'
      },
      {
        question: '¿Cómo solicitar una orden de protección por violencia familiar?',
        answer: 'Puede solicitarse en cualquier momento, incluso de urgencia, en Comisarías, OVD o Juzgados de Familia. La medida puede otorgarse el mismo día. Incluye prohibición de acercamiento, exclusión del hogar, y otras medidas de protección necesarias. No es necesario tener abogado para solicitar la medida urgente.'
      },
      {
        question: '¿Cuánto demora un proceso de adopción?',
        answer: 'Los tiempos varían significativamente. La inscripción en el Registro puede demorar 6 meses a 1 año. Luego, la espera para ser vinculado con un niño depende del perfil buscado y puede llevar años. Una vez iniciada la vinculación, el proceso de guarda y adopción puede tomar entre 1 y 2 años.'
      },
      {
        question: '¿Qué diferencia hay entre patria potestad y cuidado personal?',
        answer: 'La patria potestad es el conjunto de deberes y derechos de los padres respecto de sus hijos menores (representación legal, administración de bienes, decisiones importantes). El cuidado personal es la convivencia cotidiana con el hijo. Se pueden separar: por ejemplo, ambos padres mantienen la patria potestad mientras uno tiene el cuidado personal unilateral.'
      }
    ]
  }

  return <ServicePage service={service} />
}

export default DerechoFamiliaPage
