import ArticlePage from './ArticlePage'

const FinanzasMusulmanRidcaArticle = () => {
  const article = {
    title: 'Finanzas en el Derecho Musulmán. Un viaje en el tiempo',
    slug: 'finanzas-derecho-musulman-ridca',
    category: 'Derecho Internacional y Comparado',
    datePublished: '2023-07-15',
    dateDisplay: '15 de Julio de 2023',
    description: 'Recorrido histórico por las finanzas islámicas desde Mohammad hasta la actualidad, analizando los principios rectores del comercio en el derecho musulmán y sus instrumentos contractuales.',
    keywords: 'derecho musulmán, finanzas islámicas, Mohammad, Corán, califato, sunismo, chiísmo, comercio islámico, RIDCA, derecho comparado',
    tags: ['Derecho Internacional', 'Derecho Musulmán', 'Finanzas Islámicas', 'Historia del Derecho', 'RIDCA'],
    externalSource: {
      name: 'RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente',
      edition: 'Edición Nº 3 - Derecho Internacional',
      url: 'https://aidca.org/ridca3-internacional7/'
    },
    content: (
      <>
        <div className="article-source-note">
          <p><strong>Publicado originalmente en:</strong> <a href="https://aidca.org/ridca3-internacional7/" target="_blank" rel="noopener noreferrer">RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición Nº 3</a></p>
        </div>

        <h2>Introducción</h2>
        <p>
          Este artículo examina las finanzas dentro del marco jurídico islámico. Se propone un recorrido histórico que comienza con Mohammad y el surgimiento del Corán como fuente del derecho, seguido de un análisis de las características particulares del comercio y las finanzas islámicas, incluyendo sus principios rectores y principales instrumentos contractuales.
        </p>

        <h2>Vida de Mohammad</h2>
        <p>
          Mohammad nació entre 570-580 d.C. en La Meca, de una familia de comerciantes Quraish. Huérfano desde temprana edad, fue criado por su abuelo y tío. Se casó con Jadiya, una viuda comerciante, administrando sus negocios hasta que, alrededor de los 40 años, experimentó lo que sus seguidores denominan "la Noche del Poder", cuando afirmó recibir mensajes divinos que constituirían el Corán.
        </p>
        <p>
          Sus enseñanzas enfatizaban la sumisión a la voluntad divina, la plegaria regular y la benevolencia. Gradualmente acumuló seguidores, aunque enfrentó resistencia de las élites locales. En 622 d.C., debido a la persecución, Mohammad emigró a Medina (hégira), marcando el inicio de la era musulmana. En 630 ocupó La Meca sin resistencia, consolidando su autoridad. Falleció en 632 sin designar sucesor explícito.
        </p>

        <h2>Desarrollo del Califato</h2>
        <p>
          Tras la muerte del Profeta, Abu Bakr fue elegido como primer califa. Posteriormente, Omar expandió significativamente el territorio islámico conquistando regiones del Imperio sasánida y bizantino. Utmán continuó las conquistas pero su nepotismo generó tensiones internas que culminaron en su asesinato.
        </p>
        <p>
          Alí ibn Abi Talib asumió el poder pero enfrentó desafíos de Muawiyya en Siria, quien finalmente se proclamó califa, iniciando la dinastía Omeya donde el cargo se volvió hereditario.
        </p>

        <h2>Estructura Política y Social</h2>
        <p>
          Los Abasíes (desde 749) trasladaron la capital a Bagdad, creando una administración más sistemática. Posteriormente, el poder se descentralizó en dinastías locales como los Fatimíes en Egipto (969), Samaníes en Jorasán y otros.
        </p>
        <p>
          Para fines del siglo X, el mundo islámico permanecía dividido políticamente pero compartía una <em>"cultura religiosa común, una lengua común –el árabe-"</em> y vínculos comerciales significativos. La invasión mongola del siglo XIII terminó el califato abasí en 1258, fragmentando aún más la región.
        </p>

        <h2>División Religiosa: Sunismo y Chiísmo</h2>
        <p>
          Emergieron dos ramificaciones principales:
        </p>
        <ul>
          <li><strong>Sunnitas:</strong> Aceptan el Corán, la Sunna (práctica profética), hadith (tradición) y consenso comunitario.</li>
          <li><strong>Chiítas:</strong> Reconocen al imán como única autoridad legítima, siendo descendiente directo del Profeta.</li>
        </ul>

        <h2>Conclusiones</h2>
        <p>
          El derecho musulmán y sus instituciones financieras representan un sistema jurídico-religioso único que ha evolucionado a lo largo de siglos, manteniendo principios fundamentales mientras se adapta a las realidades del comercio contemporáneo.
        </p>

        <div className="article-source-note" style={{ marginTop: '2rem' }}>
          <p><strong>Cita:</strong> Esparza, M. A. (2023). Finanzas en el Derecho Musulmán. Un viaje en el tiempo. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (3).</p>
        </div>
      </>
    )
  }

  return <ArticlePage article={article} />
}

export default FinanzasMusulmanRidcaArticle
