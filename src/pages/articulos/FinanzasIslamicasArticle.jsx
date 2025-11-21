import ArticlePage from './ArticlePage'

const FinanzasIslamicasArticle = () => {
  const article = {
    title: 'Finanzas en el Derecho Musulmán',
    slug: 'finanzas-islamicas-derecho-musulman',
    category: 'Derecho Internacional y Comparado',
    datePublished: '2023-10-14',
    dateDisplay: '14 de Octubre de 2023',
    description: 'Análisis especializado sobre las finanzas islámicas, sus principios fundamentales basados en la Sharía, y los contratos y técnicas de financiación compatibles con el derecho musulmán.',
    keywords: 'derecho musulmán, finanzas islámicas, sharía, derecho internacional, bancos islámicos, contratos islámicos, riba, gharar, maysir, mudarabah, musharakah, sukuk, ijara',
    tags: ['Derecho Internacional', 'Derecho Musulmán', 'Finanzas Islámicas', 'Derecho Comparado', 'Sistema Financiero'],
    pdfFile: 'trabajo-finanzas-islamicas-para-el-dial.pdf',
    content: (
      <>
        <h2>Introducción</h2>
        <p>
          En este trabajo pretendo realizar una aproximación a las finanzas dentro de un mundo jurídico tan ajeno al nuestro, como lo es el del derecho musulmán.
        </p>
        <p>
          Será necesario para poder comprender su regulación, realizar una breve introducción respecto del derecho musulmán en general. A partir de allí, haremos un recorrido por las características particulares del comercio en el mundo islámico y las finanzas.
        </p>
        <p>
          Veremos cuáles son los principios tan particulares que gobiernan las finanzas islámicas, los principales contratos respetuosos de la ley islámica y cómo operan en el mundo islámico y fuera de él.
        </p>

        <h2>Derecho Islámico: Fundamentos</h2>
        <blockquote>
          "Dios os ha prescrito en materia religiosa lo dictado a Noé, a ti mismo y a Abraham, Moisés y Jesucristo. Todo ello es para vosotros norma y forma de conducta"
        </blockquote>
        <p>
          A diferencia del Derecho occidental, netamente racional y laico, las normas de Derecho islámico son normas emanadas de Dios o con su asistencia. El Estado islámico es esencialmente religioso. La religión es el fundamento del Estado y su guía. En el Islam existe una estrecha amalgama entre política y religión (<em>din wa-dawla</em>), según expresión de los Doctores de la ley islámica. El Islam es credo y Ley.
        </p>

        <h3>Fuentes del Derecho Islámico</h3>
        <p>
          Se consideran cuatro las fuentes principales del Derecho islámico:
        </p>
        <ul>
          <li><strong>El Corán:</strong> La palabra de Dios revelada al profeta Muhammad, que contiene los principios fundamentales que rigen la vida del musulmán.</li>
          <li><strong>La Sunna:</strong> Tradición o modo habitual de actuar del Profeta, incluyendo sus palabras (<em>qawl</em>), actos (<em>fil</em>) y silencios (<em>suküt</em> o <em>taqrir</em>).</li>
          <li><strong>El consenso o Iÿma:</strong> Consenso de los Doctores musulmanes o ulemas de cada época histórica.</li>
          <li><strong>La analogía o Qiyás:</strong> Proceso inductivo disciplinado mediante la regla lógica para resolver casos no previstos explícitamente.</li>
        </ul>

        <h3>La Sharía y el Fiqh</h3>
        <p>
          El proceso de pensamiento jurídico islámico se llama <strong>fiqh</strong> y el producto del mismo recibe el nombre de <strong>sharía</strong>, que es la fuente principal y originaria del derecho musulmán.
        </p>

        <h2>Principios de las Finanzas Islámicas</h2>
        <p>
          Las finanzas islámicas se definen como todos aquellos productos y servicios financieros estructurados conforme las imposiciones de la Sharía. Existen principios fundamentales que las rigen:
        </p>

        <h3>1. Prohibición de Riba (Usura o Interés)</h3>
        <p>
          La <strong>Riba</strong> puede traducirse como "usura", es decir, ganancias abusivas realizadas en el comercio o negocio. Esta prohibición es estricta, absoluta y sin lugar a ambigüedades. El Sagrado Corán así lo establece en el versículo 278 de Surah Al-Baqrah:
        </p>
        <blockquote>
          "¡Vosotros los que creéis! Temed a Allah y renunciad a cualquier resto de usura que os quede si sois creyentes"
        </blockquote>
        <p>
          El Islam prohíbe el interés porque conlleva injusticias (<em>zulm</em>) y está en contra de todas las formas de injusticia y explotación.
        </p>

        <h3>2. Distribución de Ganancias y Pérdidas</h3>
        <p>
          El riesgo debe ser compartido. El financista debe participar del riesgo sin cargar la totalidad de las pérdidas en el empresario, eliminando así la pobreza y expandiendo las oportunidades de empleo de forma equitativa.
        </p>

        <h3>3. Prohibición de la Especulación (Gharar y Maysir)</h3>
        <p>
          <strong>Gharar</strong> significa 'incertidumbre' y está asociado con el engaño. La prohibición protege contra transacciones que involucran gran incertidumbre o riesgo asimétrico.
        </p>
        <p>
          <strong>Maysir</strong> se refiere al juego por dinero, prohibido por basarse en esperanzas ilusorias sin considerar la posibilidad de pérdida.
        </p>

        <h3>4. Prohibición de Actividades Ilícitas (Haram)</h3>
        <p>
          El Islam prohíbe inversiones en industrias consideradas destructoras de valores o inmorales, tales como defensa y armamento, alcohol, tabaco, casinos, pornografía y porcicultura.
        </p>

        <h2>Instrumentos y Contratos de Financiación Islámica</h2>

        <h3>Mudarabah</h3>
        <p>
          Contrato de intermediación financiera donde una parte aporta capital y otra aporta trabajo. Las ganancias se distribuyen según lo acordado, pero las pérdidas las asume únicamente el capitalista.
        </p>

        <h3>Musharakah</h3>
        <p>
          Contrato donde todas las partes aportan capital y algunas o todas aportan su trabajo en un proyecto determinado, compartiendo propiedad, ganancias y pérdidas proporcionalmente.
        </p>

        <h3>Ijara (Leasing Islámico)</h3>
        <p>
          Acuerdo de arrendamiento donde el banco compra un bien y lo arrienda al cliente. Puede incluir una opción de compra al final del contrato (<em>Ijara-wa-Iqtina</em>).
        </p>

        <h3>Sukuk (Bonos Islámicos)</h3>
        <p>
          Certificados financieros que cumplen con la Sharía, definidos como "valores de igual denominación que representan intereses de propiedad individuales en una cartera de activos elegibles".
        </p>
        <p>
          En 2021, la petrolera Saudi Aramco recaudó USD 6.000 millones mediante la emisión de Sukuk, demostrando la relevancia global de este instrumento.
        </p>

        <h2>Bancos Islámicos y Agencias Especializadas</h2>
        <p>
          Los bancos islámicos están organizados para diferenciar el capital de los accionistas de los depósitos de los clientes, asegurando una participación adecuada en las utilidades conforme a la ley islámica.
        </p>
        <p>
          Cuentan con comités de asesores religiosos que determinan la aceptación de nuevos instrumentos y servicios, emitiendo opiniones legales (<em>fatawa</em>) sobre las actividades del banco.
        </p>

        <h3>Instituciones Relevantes</h3>
        <ul>
          <li>Banco Islámico de Desarrollo (fundado en 1975)</li>
          <li>Organización de Contabilidad y Auditoría para Instituciones Financieras Islámicas (AAOIFI)</li>
          <li>Academia Islámica de Fiqh</li>
          <li>Comité de Servicios Financieros Islámicos (IFSB)</li>
        </ul>

        <h2>Realidad Global de las Finanzas Islámicas</h2>
        <p>
          Las finanzas islámicas han experimentado un crecimiento significativo desde los años 1980, particularmente en la banca de inversión. Bahrein alberga la mayor cantidad de bancos de inversión islámicos offshore del mundo musulmán.
        </p>
        <p>
          Países occidentales como Reino Unido (2014) y Luxemburgo (2015) han emitido Sukuk, buscando posicionarse como centros de finanzas islámicas en Occidente.
        </p>

        <h2>Conclusión</h2>
        <p>
          Las finanzas islámicas representan un sistema financiero alternativo basado en principios éticos y religiosos que prohíben la especulación, la usura y las actividades consideradas inmorales. Su crecimiento global demuestra que es posible un sistema financiero basado en valores de justicia social y distribución equitativa del riesgo.
        </p>

        <div style={{
          backgroundColor: '#f0f9ff',
          padding: '2rem',
          borderRadius: '12px',
          marginTop: '3rem',
          borderLeft: '4px solid #3b82f6'
        }}>
          <h3 style={{ marginTop: 0, color: '#1e40af' }}>Artículo Completo Disponible</h3>
          <p style={{ marginBottom: '1rem' }}>
            Este resumen presenta los conceptos fundamentales. El artículo completo desarrolla en profundidad:
          </p>
          <ul style={{ marginBottom: '1.5rem' }}>
            <li>Las cuatro escuelas jurídicas islámicas (Madahib)</li>
            <li>Historia detallada del sistema financiero islámico desde la Edad de Oro del Islam</li>
            <li>Análisis exhaustivo de cada instrumento financiero y su funcionamiento</li>
            <li>El rol del Zakat y otros pilares del Islam en las finanzas</li>
            <li>Casos prácticos y ejemplos de emisiones de Sukuk a nivel mundial</li>
            <li>Bibliografía especializada y fuentes académicas</li>
          </ul>
          <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 0 }}>
            <strong>Extensión:</strong> 30+ páginas · <strong>Formato:</strong> PDF · <strong>Publicado para:</strong> El Dial
          </p>
        </div>
      </>
    )
  }

  return <ArticlePage article={article} />
}

export default FinanzasIslamicasArticle
