import ServicePage from './ServicePage'

const AlimentosPage = () => {
  const service = {
    title: 'Abogada Juicio de Alimentos Buenos Aires',
    slug: 'alimentos',
    h1: 'Abogada Especialista en Juicios de Alimentos',
    description: 'Abogada especialista en juicios de alimentos en Buenos Aires. Demanda de alimentos para hijos menores y mayores. Aumento, reducción y cese de cuota alimentaria. Ejecución de sentencias.',
    keywords: 'juicio de alimentos, cuota alimentaria, demanda de alimentos, aumento de cuota, alimentos hijos menores, alimentos hijos mayores, pensión alimenticia, Buenos Aires, Argentina',
    intro: 'Defensa efectiva de los derechos alimentarios de niños, niñas y adolescentes. Más de 25 años de experiencia en juicios de alimentos.',

    content: (
      <>
        <h2>Servicios en Juicios de Alimentos</h2>
        <p>
          La cuota alimentaria es el derecho que tienen los hijos a recibir de sus padres todo lo
          necesario para su desarrollo integral: alimentación, educación, vivienda, vestimenta,
          esparcimiento, salud. Nuestro estudio ofrece asesoramiento especializado en todas las
          cuestiones relacionadas con alimentos.
        </p>

        <h3>Servicios que Ofrecemos</h3>
        <ul>
          <li><strong>Demanda de Alimentos:</strong> Inicio de juicio por alimentos para hijos menores</li>
          <li><strong>Alimentos para Hijos Mayores:</strong> Continuación hasta los 21 años o 25 si estudian</li>
          <li><strong>Aumento de Cuota:</strong> Por aumento de necesidades o capacidad económica</li>
          <li><strong>Reducción de Cuota:</strong> Cuando disminuye la capacidad del alimentante</li>
          <li><strong>Cese de Cuota:</strong> Por mayoría de edad o finalización de estudios</li>
          <li><strong>Ejecución de Sentencia:</strong> Cobro de cuotas impagas</li>
          <li><strong>Alimentos Provisorios:</strong> Medidas urgentes mientras dura el juicio</li>
        </ul>

        <h2>¿Quiénes Tienen Derecho a Alimentos?</h2>
        <ul>
          <li><strong>Hijos Menores de 18 años:</strong> Tienen derecho automático e irrenunciable</li>
          <li><strong>Hijos entre 18 y 21 años:</strong> Si no tienen recursos propios</li>
          <li><strong>Hijos hasta 25 años:</strong> Si están estudiando y no pueden mantenerse</li>
          <li><strong>Hijos con Discapacidad:</strong> Sin límite de edad si no pueden autosostenerse</li>
          <li><strong>Mujer Embarazada:</strong> Desde la concepción hasta el nacimiento</li>
        </ul>

        <h2>¿Cómo se Fija la Cuota Alimentaria?</h2>
        <p>
          El monto de la cuota alimentaria se determina considerando:
        </p>
        <ul>
          <li><strong>Necesidades del alimentado:</strong> Edad, escolarización, salud, actividades</li>
          <li><strong>Posibilidades del alimentante:</strong> Ingresos, trabajo, otros hijos</li>
          <li><strong>Modalidad de cuidado:</strong> Si es unilateral o compartido</li>
          <li><strong>Nivel socioeconómico familiar:</strong> Mantener el estándar de vida del niño</li>
        </ul>

        <p>
          La cuota puede ser fijada en dinero (porcentaje de los ingresos) o en especie (pago directo
          de colegio, obra social, etc.), o mixta. Generalmente se establece entre el 20% y 30% de
          los ingresos del alimentante por hijo, pero puede variar según el caso.
        </p>

        <h2>Proceso de Juicio de Alimentos</h2>
        <h3>Etapas del Proceso</h3>
        <ol style={{lineHeight: '1.8', marginLeft: '2rem'}}>
          <li><strong>Alimentos Provisorios:</strong> El juez puede fijar una cuota provisoria urgente</li>
          <li><strong>Demanda:</strong> Presentación formal solicitando la cuota definitiva</li>
          <li><strong>Contestación:</strong> El demandado responde y presenta pruebas</li>
          <li><strong>Prueba:</strong> Acreditación de ingresos y necesidades</li>
          <li><strong>Sentencia:</strong> El juez fija la cuota alimentaria definitiva</li>
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
          <li><strong>Embargo de Cuentas Bancarias:</strong> Retención de fondos</li>
          <li><strong>Inhibición General de Bienes:</strong> Impide vender bienes a su nombre</li>
          <li><strong>Suspensión de Licencia de Conducir:</strong> Por deuda alimentaria</li>
          <li><strong>Impedimento de Salida del País:</strong> Mientras exista deuda</li>
          <li><strong>Prisión por Desobediencia:</strong> En casos extremos de incumplimiento reiterado</li>
        </ul>
      </>
    ),

    faqs: [
      {
        question: '¿Cuánto tiempo demora un juicio de alimentos?',
        answer: 'Los alimentos provisorios pueden fijarse en días o semanas. El juicio completo puede demorar entre 6 meses y 1 año aproximadamente, dependiendo de la complejidad del caso y la carga de trabajo del juzgado. Es importante iniciar el trámite cuanto antes porque los alimentos no son retroactivos.'
      },
      {
        question: '¿Cuánto debe pagar de cuota alimentaria?',
        answer: 'No hay un monto fijo. Generalmente se establece entre el 20% y 30% de los ingresos netos por hijo, pero puede variar. Se considera: necesidades del hijo, ingresos del alimentante, cantidad de hijos, modalidad de cuidado (si es compartido puede ser menor). El juez analizará cada caso en particular.'
      },
      {
        question: '¿Desde cuándo se deben los alimentos?',
        answer: 'Los alimentos se deben desde la presentación de la demanda. Por eso es importante iniciar el juicio cuanto antes. Los alimentos no son retroactivos (no se cobran cuotas anteriores a la demanda, salvo excepciones). Una vez fijada la cuota, el incumplimiento genera intereses.'
      },
      {
        question: '¿Puede el padre pagar directamente los gastos en vez de dar dinero?',
        answer: 'Sí, la cuota puede fijarse en dinero, en especie (pago directo de colegio, obra social, etc.) o de forma mixta. Sin embargo, debe haber acuerdo o ser dispuesto por el juez. No se puede dejar de pagar la cuota en dinero sin autorización judicial, aun cuando se paguen gastos directamente.'
      },
      {
        question: '¿Hasta qué edad debo pagar cuota alimentaria?',
        answer: 'Los hijos tienen derecho a alimentos hasta los 21 años. Puede extenderse hasta los 25 años si están estudiando y no pueden autosostenerse. En caso de discapacidad, puede no tener límite de edad. El cese debe ser solicitado judicialmente, no se produce automáticamente.'
      }
    ]
  }

  return <ServicePage service={service} />
}

export default AlimentosPage
