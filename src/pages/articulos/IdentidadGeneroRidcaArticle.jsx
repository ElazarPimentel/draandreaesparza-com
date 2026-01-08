import ArticlePage from './ArticlePage'

const IdentidadGeneroRidcaArticle = () => {
  const article = {
    title: 'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora',
    slug: 'identidad-genero-fallo-ridca',
    category: 'Derechos Humanos',
    datePublished: '2024-07-15',
    dateDisplay: '15 de Julio de 2024',
    description: 'Análisis de una sentencia judicial sobre cambio de prenombre manteniendo el género asignado al nacer, abordando la autodeterminación y los vacíos normativos en materia de identidad de género.',
    keywords: 'identidad de género, cambio de nombre, autodeterminación, Ley de Identidad de Género, derechos humanos, Judith Butler, performatividad de género, RIDCA',
    tags: ['Derechos Humanos', 'Identidad de Género', 'Derecho Civil', 'Jurisprudencia', 'RIDCA'],
    externalSource: {
      name: 'RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente',
      edition: 'Edición Nº 5 - Derechos de las Mujeres e Igualdad de Géneros',
      url: 'https://aidca.org/analisis-de-un-fallo-sobre-identidad-de-genero-una-mirada-esperanzadora/'
    },
    content: (
      <>
        <div className="article-source-note">
          <p><strong>Publicado originalmente en:</strong> <a href="https://aidca.org/analisis-de-un-fallo-sobre-identidad-de-genero-una-mirada-esperanzadora/" target="_blank" rel="noopener noreferrer">RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición Nº 5</a></p>
        </div>

        <h2>Introducción</h2>
        <p>
          Este trabajo analiza una sentencia judicial reciente donde un adolescente de 15 años solicita cambiar su prenombre manteniendo su género femenino asignado al nacer.
        </p>
        <p>
          Se establece una distinción preliminar entre <strong>sexo</strong> (características anatómico-fisiológicas) y <strong>género</strong> (aspectos psicológicos, roles y conductuales). Se subraya que la construcción de género ha sido utilizada históricamente para reforzar sistemas de dominación que generan desigualdad y discriminación interseccional.
        </p>
        <p>
          Bajo el paradigma constitucional actual, la identidad de género es esencial y debe respetarse la autodeterminación personal, permitiendo que <em>"las personas se apropien de los derechos humanos"</em> conforme a su autopercepción.
        </p>

        <h2>El Caso</h2>

        <h3>Hechos</h3>
        <p>
          Un joven registrado como mujer al nacer solicitó ante el Registro Civil rectificar su partida de nacimiento para cambiar su prenombre, manteniendo la designación femenina. El Director del Registro rechazó la solicitud argumentando que la Ley de Identidad de Género 26.743 y el Decreto 476/21 no prevén este supuesto específico, ya que contemplan cambios de género o la categoría "no binaria", pero no cambios de nombre sin modificación de género.
        </p>

        <h3>Decisión Judicial</h3>
        <p>
          El juez, escuchando al adolescente conforme a derechos reconocidos en la Convención sobre Derechos del Niño, constató que el joven se sentía identificado con lo masculino en su identidad de género, pero prefería mantener la designación femenina en su documentación hasta estar preparado para posibles modificaciones médicas futuras.
        </p>
        <p>
          Frente al vacío legal, el magistrado recurrió a obras filosóficas, particularmente a <strong>Judith Butler</strong> y su concepto de <em>"performatividad de género"</em>, así como a <strong>Anne Fausto Sterling</strong> y sus estudios sobre la complejidad biológica más allá del binarismo sexual.
        </p>
        <p>
          El juez realizó una interpretación armónica entre el Código Civil y Comercial y los tratados de derechos humanos, aplicando principios fundamentales:
        </p>
        <ul>
          <li>Interés superior del niño</li>
          <li>Capacidad progresiva</li>
          <li>Pro homine</li>
        </ul>
        <p>
          Argumentó que la autodeterminación está conectada con derechos de intimidad y autonomía personal. Reconoció que en la adolescencia existe un <em>"complejo proceso de maduración personal"</em> donde las dudas y la reflexión sobre identidad son naturales y deben ser contempladas.
        </p>

        <h2>Conclusión</h2>
        <p>
          El artículo reflexiona sobre cómo el ordenamiento jurídico presenta lagunas normativas respecto a realidades identitarias complejas. Sin embargo, destaca como positivo que existan magistrados con <em>"amplitud mental y criterio"</em> capaces de resolver estas cuestiones mediante interpretación flexible de la ley, garantizando el derecho fundamental de cada persona a <strong>SER</strong>.
        </p>

        <div className="article-source-note" style={{ marginTop: '2rem' }}>
          <p><strong>Cita:</strong> Esparza, M. A. (2024). Análisis de un fallo sobre identidad de género. Una mirada esperanzadora. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (5).</p>
        </div>
      </>
    )
  }

  return <ArticlePage article={article} />
}

export default IdentidadGeneroRidcaArticle
