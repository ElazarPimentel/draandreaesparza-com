import ArticlePage from './ArticlePage'

const DIPTrabajoVenezuelaArticle = () => {
  const article = {
    title: 'Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela',
    slug: 'dip-trabajo-sentencia-venezuela',
    category: 'Derecho Internacional Privado',
    datePublished: '2025-03-01',
    dateDisplay: 'Marzo de 2025',
    description: 'Análisis de la resolución de casos laborales con elementos internacionales en Venezuela, examinando la jurisdicción y ley aplicable en contratos de trabajo multinacionales.',
    keywords: 'derecho internacional privado del trabajo, jurisdicción laboral, contratos internacionales, Venezuela, TSJ, relación laboral internacional, DIP, RIDCA',
    tags: ['Derecho Internacional Privado', 'Derecho Laboral', 'Jurisprudencia', 'Venezuela', 'RIDCA'],
    externalSource: {
      name: 'RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente',
      edition: 'Edición Nº 7 - Derecho Constitucional y Derechos Humanos',
      url: 'https://aidca.org/derecho-internacional-privado-del-trabajo-analisis-de-una-sentencia-dictada-por-el-tribunal-superior-de-justicia-de-venezuela/'
    },
    content: (
      <>
        <div className="article-source-note">
          <p><strong>Publicado originalmente en:</strong> <a href="https://aidca.org/derecho-internacional-privado-del-trabajo-analisis-de-una-sentencia-dictada-por-el-tribunal-superior-de-justicia-de-venezuela/" target="_blank" rel="noopener noreferrer">RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición Nº 7</a></p>
        </div>

        <h2>Introducción</h2>
        <p>
          Este artículo examina cómo Venezuela resuelve casos laborales con elementos internacionales. Se define el Derecho Internacional Privado del Trabajo como la disciplina que <em>"regula la solución de conflictos laborales surgidos entre particulares vinculados por relación internacional de trabajo"</em>.
        </p>
        <p>
          La multinacionalidad de un contrato de trabajo se determina considerando:
        </p>
        <ul>
          <li>Lugar de prestación de servicios</li>
          <li>Domicilios del trabajador y empleador</li>
          <li>Lugar de celebración del contrato</li>
          <li>El derecho más favorable al trabajador con vínculos razonables</li>
        </ul>

        <h2>Análisis del Caso (Expediente Nº 2015-0016)</h2>

        <h3>Partes</h3>
        <ul>
          <li><strong>Demandante:</strong> O.R.M.P. (trabajador)</li>
          <li><strong>Demandadas:</strong> J.C.V. C.A. (empresa venezolana) y J.C.I. (empresa estadounidense, Delaware)</li>
        </ul>

        <h3>Hechos Relevantes</h3>
        <p>
          El trabajador prestó servicios desde mayo 1986 durante 27 años y 9 meses. Inicialmente laboró bajo contratación venezolana en Maracaibo, Zulia. A partir de 2001, fue trasladado a la nómina de la empresa estadounidense, aunque continuó desempeñando funciones relacionadas con operaciones en Venezuela.
        </p>
        <p>
          En enero 2014 se modificó su estructura salarial (reducción del 40%), configurando <strong>despido indirecto</strong> según legislación laboral venezolana.
        </p>

        <h3>Cuestiones de Jurisdicción</h3>
        <p>
          La demandada cuestionó la jurisdicción venezolana alegando que la relación posterior a 2001 se ejecutó en el extranjero bajo legislación de Pennsylvania. El Tribunal debió determinar si los tribunales venezolanos poseían competencia.
        </p>

        <h2>Decisión del Tribunal Superior de Justicia</h2>
        <p>
          El tribunal reconoció elementos de extranjería en la controversia, requiriendo análisis conforme al Derecho Internacional Privado. Aunque una empleadora residía en el extranjero, el trabajador mantuvo funciones vinculadas a operaciones venezolanas, fundamentando <strong>jurisdicción venezolana</strong> bajo principios de:
        </p>
        <ul>
          <li>Conexidad territorial</li>
          <li>Protección laboral</li>
        </ul>

        <h2>Conclusiones</h2>
        <p>
          El caso ilustra la complejidad de las relaciones laborales multinacionales y la importancia de determinar adecuadamente la jurisdicción competente y la ley aplicable, priorizando siempre la protección del trabajador como parte más débil de la relación laboral.
        </p>

        <div className="article-source-note" style={{ marginTop: '2rem' }}>
          <p><strong>Cita:</strong> Esparza, M. A. (2025). Derecho Internacional Privado del Trabajo. Análisis de una sentencia dictada por el Tribunal Superior de Justicia de Venezuela. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (7).</p>
        </div>
      </>
    )
  }

  return <ArticlePage article={article} />
}

export default DIPTrabajoVenezuelaArticle
