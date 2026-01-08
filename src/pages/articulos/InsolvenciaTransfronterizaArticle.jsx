import ArticlePage from './ArticlePage'

const InsolvenciaTransfronterizaArticle = () => {
  const article = {
    title: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea',
    slug: 'insolvencia-transfronteriza-derecho-europeo',
    category: 'Derecho Internacional Privado',
    datePublished: '2025-12-01',
    dateDisplay: 'Diciembre de 2025',
    description: 'Análisis de la insolvencia transfronteriza en el marco del derecho español y europeo, con especial énfasis en la interpretación del TJUE en el caso Interedil.',
    keywords: 'insolvencia transfronteriza, derecho concursal, Reglamento UE 848/2014, TJUE, caso Interedil, centro de intereses principales, derecho español, RIDCA',
    tags: ['Derecho Internacional Privado', 'Derecho Concursal', 'Unión Europea', 'Jurisprudencia TJUE', 'RIDCA'],
    externalSource: {
      name: 'RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente',
      edition: 'Edición Nº 8 - Derecho Internacional',
      url: 'https://aidca.org/ridca8-internacional-esparza-insolvencia-transfronteriza-a-la-luz-del-derecho-espanol-y-del-derecho-de-la-comunidad-europea-e-interpretacion-del-mismo-por-el-tsjue-en-el-caso-interedil-c-fallimento-i/'
    },
    content: (
      <>
        <div className="article-source-note">
          <p><strong>Publicado originalmente en:</strong> <a href="https://aidca.org/ridca8-internacional-esparza-insolvencia-transfronteriza-a-la-luz-del-derecho-espanol-y-del-derecho-de-la-comunidad-europea-e-interpretacion-del-mismo-por-el-tsjue-en-el-caso-interedil-c-fallimento-i/" target="_blank" rel="noopener noreferrer">RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición Nº 8</a></p>
        </div>

        <h2>Introducción</h2>
        <p>
          Este trabajo examina la insolvencia transfronteriza a través de los marcos legales español y de la Unión Europea, con énfasis especial en la interpretación del Tribunal de Justicia de la Unión Europea (TJUE) en el caso Interedil.
        </p>

        <h2>Competencia Jurisdiccional</h2>
        <p>
          La ley de insolvencia española designa como competente al juez del territorio donde el deudor mantiene su <strong>centro principal de intereses</strong>, alineándose con los requisitos del Reglamento UE 848/2014. El reglamento define autónomamente este centro como <em>"el lugar donde el deudor ejerce la administración de sus intereses de manera habitual y reconocible"</em>.
        </p>

        <h2>Sistemas Universal vs. Territorial</h2>
        <p>
          Los procedimientos de insolvencia españoles adoptan un enfoque de <strong>alcance universal</strong>, extendiendo sus efectos a todo el territorio español e internacionalmente, creando:
        </p>
        <ul>
          <li>Un único procedimiento</li>
          <li>Un solo juez</li>
          <li>Una ley aplicable</li>
          <li>Gestión unificada de activos</li>
        </ul>
        <p>
          Esto contrasta con el <strong>sistema territorial</strong> de Argentina bajo la Ley 24.522.
        </p>

        <h2>Reconocimiento en la UE</h2>
        <p>
          El Reglamento UE 848/2014 establece reglas unificadas para:
        </p>
        <ul>
          <li>Competencia judicial</li>
          <li>Ley aplicable</li>
          <li>Reconocimiento de resoluciones</li>
        </ul>
        <p>
          Estas reglas se aplican en todos los Estados Miembros (excepto Dinamarca), asegurando que los procedimientos de insolvencia españoles reciban efecto de reconocimiento.
        </p>

        <h2>Interpretación del TJUE en el Caso Interedil</h2>
        <p>
          El Tribunal de Justicia aclaró que el <strong>"centro principal de intereses"</strong> requiere identificar la ubicación de la administración central a través de datos objetivos, verificables por terceros, estableciendo que esta presunción—que favorece la ubicación del domicilio social—puede ser refutada mediante evidencia de actividad comercial real en jurisdicciones alternativas.
        </p>
        <p>
          Los criterios clave para determinar el centro de intereses incluyen:
        </p>
        <ul>
          <li>Lugar donde se toman las decisiones de gestión</li>
          <li>Ubicación de la sede administrativa real</li>
          <li>Lugar reconocible por terceros (acreedores, clientes)</li>
          <li>Evidencia objetiva y verificable</li>
        </ul>

        <h2>Conclusiones</h2>
        <p>
          La armonización del derecho concursal europeo ha avanzado significativamente, pero persisten desafíos en casos complejos de grupos empresariales multinacionales. La jurisprudencia del TJUE proporciona criterios interpretativos valiosos para determinar la jurisdicción competente en procedimientos de insolvencia transfronteriza.
        </p>

        <div className="article-source-note" style={{ marginTop: '2rem' }}>
          <p><strong>Cita:</strong> Esparza, M. A. (2025). Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea e interpretación del mismo por el TSJUE en el caso INTEREDIL. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (8).</p>
        </div>
      </>
    )
  }

  return <ArticlePage article={article} />
}

export default InsolvenciaTransfronterizaArticle
