import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title: 'Finanzas en el Derecho Musulmán - Dra. Andrea Esparza',
  description:
    'Análisis especializado sobre las finanzas islámicas, sus principios fundamentales basados en la Sharía, y los contratos y técnicas de financiación compatibles con el derecho musulmán.',
  keywords:
    'derecho musulmán, finanzas islámicas, sharía, derecho internacional, bancos islámicos, contratos islámicos, riba, gharar, maysir, mudarabah, musharakah, sukuk, ijara',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://draandreaesparza.com/articulos/finanzas-islamicas-derecho-musulman/',
    languages: {
      'es-AR': 'https://draandreaesparza.com/articulos/finanzas-islamicas-derecho-musulman/',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://draandreaesparza.com/articulos/finanzas-islamicas-derecho-musulman/',
    title: 'Finanzas en el Derecho Musulmán - Dra. Andrea Esparza',
    description:
      'Análisis especializado sobre las finanzas islámicas, sus principios fundamentales basados en la Sharía, y los contratos y técnicas de financiación compatibles con el derecho musulmán.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
      },
    ],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2023-10-14',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finanzas en el Derecho Musulmán - Dra. Andrea Esparza',
    description:
      'Análisis especializado sobre las finanzas islámicas, sus principios fundamentales basados en la Sharía, y los contratos y técnicas de financiación compatibles con el derecho musulmán.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Finanzas en el Derecho Musulmán',
  description:
    'Análisis especializado sobre las finanzas islámicas, sus principios fundamentales basados en la Sharía, y los contratos y técnicas de financiación compatibles con el derecho musulmán.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2023-10-14',
  dateModified: '2023-10-14',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    jobTitle: 'Abogada Especialista en Derecho Internacional Privado',
    url: 'https://draandreaesparza.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://draandreaesparza.com/articulos/finanzas-islamicas-derecho-musulman/',
  },
  keywords: [
    'Derecho Internacional',
    'Derecho Musulmán',
    'Finanzas Islámicas',
    'Derecho Comparado',
    'Sistema Financiero',
  ],
  articleSection: 'Derecho Internacional y Comparado',
  inLanguage: 'es-AR',
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
      name: 'Publicaciones',
      item: 'https://draandreaesparza.com/#publications',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Finanzas en el Derecho Musulmán',
    },
  ],
}

export default function Page() {
  return (
    <div className="article-page">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <ArticleNav />

      <article className="article-container">
        <header className="article-header">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Publicaciones', href: '/#publications' },
              { label: 'Finanzas en el Derecho Musulmán' },
            ]}
          />
          <div className="article-category">Derecho Internacional y Comparado</div>
          <h1>Finanzas en el Derecho Musulmán</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">14 de Octubre de 2023</span>
          </div>
          <TrackedLink
            href="/articulos/trabajo-finanzas-islamicas-para-el-dial.pdf"
            trackEvent="publication_click"
            trackSource="finanzas-islamicas-derecho-musulman_header"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </TrackedLink>
        </header>

        <div className="article-content">
          <h2>Introducción</h2>
          <p>
            Las finanzas islámicas constituyen uno de los sectores de mayor crecimiento en el
            sistema financiero global. Con activos que superan los tres billones de dólares a nivel
            mundial, los bancos y las instituciones financieras que operan conforme a los principios
            del derecho musulmán han dejado de ser un fenómeno marginal para convertirse en actores
            relevantes del mercado internacional.
          </p>
          <p>
            El sistema financiero islámico se distingue del convencional por su adhesión a los
            principios derivados de la Sharía (ley islámica), que impone restricciones específicas
            sobre el tipo de transacciones permitidas. La prohibición del interés (riba), de la
            incertidumbre excesiva (gharar) y del juego de azar (maysir) obliga a desarrollar
            instrumentos financieros alternativos que, sin embargo, cumplen funciones económicas
            equivalentes a las del sistema convencional.
          </p>
          <p>
            El presente trabajo se propone analizar los fundamentos jurídicos de las finanzas
            islámicas, sus principales instrumentos y contratos, y su creciente impacto en el
            panorama financiero internacional, desde una perspectiva de derecho comparado.
          </p>

          <h2>Fundamentos del Derecho Islámico</h2>
          <blockquote>
            <p>
              &ldquo;El Islam no es solamente una religión en el sentido occidental del término. Es
              un sistema integral que abarca todos los aspectos de la vida humana: lo espiritual y
              lo material, lo individual y lo social, lo económico y lo político.&rdquo;
            </p>
          </blockquote>
          <p>
            El derecho islámico se concibe como un sistema jurídico-religioso integral. La expresión
            árabe <em>dín wa-dawla</em> (religión y Estado) refleja la concepción islámica de que
            no existe separación entre el ámbito religioso y el secular. Esta visión unitaria tiene
            consecuencias directas sobre la regulación de las actividades económicas y financieras,
            que deben ajustarse a los preceptos divinos revelados en el Corán y desarrollados por la
            tradición profética.
          </p>

          <h2>Fuentes del Derecho Islámico</h2>
          <p>Las fuentes del derecho islámico, ordenadas jerárquicamente, son:</p>
          <ul>
            <li>
              <strong>El Corán:</strong> Fuente primaria y suprema. Contiene las revelaciones
              divinas transmitidas al Profeta Mahoma. En materia financiera, incluye disposiciones
              expresas sobre la prohibición de la usura y la obligación de justicia en las
              transacciones comerciales.
            </li>
            <li>
              <strong>La Sunna:</strong> Conjunto de dichos, hechos y aprobaciones tácitas del
              Profeta Mahoma, recopilados en los hadices. Constituye la segunda fuente en
              importancia y sirve para interpretar y complementar el Corán.
            </li>
            <li>
              <strong>El I&#x7C;m&#x101; (consenso):</strong> Acuerdo unánime de los juristas
              islámicos sobre una cuestión de derecho. Tiene carácter vinculante cuando se alcanza
              entre los sabios de una generación determinada.
            </li>
            <li>
              <strong>El Qiy&#x101;s (analogía):</strong> Razonamiento por analogía que permite
              resolver cuestiones no previstas expresamente en las fuentes primarias, extendiendo a
              nuevos supuestos las reglas establecidas para casos similares.
            </li>
          </ul>

          <h2>La Sharía y el Fiqh</h2>
          <p>
            Es fundamental distinguir entre la <strong>Sharía</strong> y el <strong>Fiqh</strong>.
            La Sharía es la ley divina, inmutable y perfecta, contenida en el Corán y la Sunna. El
            Fiqh, en cambio, es la ciencia humana de la jurisprudencia islámica: la interpretación y
            sistematización que los juristas hacen de la Sharía para su aplicación práctica.
            Mientras la Sharía es inalterable, el Fiqh admite diversidad de opiniones y evoluciona
            con el tiempo y las circunstancias, lo que explica la existencia de distintas escuelas
            jurídicas dentro del Islam.
          </p>

          <h2>Principios de las Finanzas Islámicas</h2>

          <h3>Prohibición del Riba (usura/interés)</h3>
          <p>
            El principio más distintivo de las finanzas islámicas es la prohibición absoluta del{' '}
            <em>riba</em>, que abarca tanto la usura como cualquier forma de interés fijo o
            predeterminado sobre préstamos o depósitos. El Corán es enfático en esta prohibición:
          </p>
          <blockquote>
            <p>
              &ldquo;Quienes devoran la usura no se levantarán sino como se levanta aquel a quien el
              demonio ha trastornado con su toque. Eso porque dicen: &lsquo;El comercio es como la
              usura&rsquo;. Pero Alá ha permitido el comercio y ha prohibido la usura.&rdquo; (Corán
              2:275)
            </p>
          </blockquote>
          <p>
            La razón de esta prohibición es que el interés implica una ganancia garantizada sin
            asumir riesgo, lo cual se considera injusto. En el sistema financiero islámico, toda
            ganancia lícita debe estar vinculada a un riesgo real.
          </p>

          <h3>Distribución de ganancias y pérdidas</h3>
          <p>
            El principio de <em>profit and loss sharing</em> (PLS) constituye el corazón del
            sistema financiero islámico. En lugar de interés fijo, los contratos financieros
            islámicos prevén la participación de ambas partes en las ganancias y las pérdidas del
            negocio financiado, en proporciones acordadas previamente. Este principio fomenta la
            inversión productiva y alinea los intereses del financista con los del emprendedor.
          </p>

          <h3>Prohibición del Gharar y el Maysir</h3>
          <p>
            El <em>gharar</em> (incertidumbre excesiva o ambigüedad) y el <em>maysir</em> (juego de
            azar o especulación pura) están prohibidos en las transacciones islámicas. Los contratos
            deben ser claros en sus términos, las contraprestaciones deben estar definidas y no debe
            haber elementos de apuesta o especulación pura. Esta prohibición tiene implicancias
            significativas para los derivados financieros y ciertos tipos de seguros convencionales.
          </p>

          <h3>Actividades Haram (prohibidas)</h3>
          <p>
            Las finanzas islámicas no pueden financiar actividades consideradas <em>haram</em>{' '}
            (ilícitas), incluyendo: el alcohol, el tabaco, la pornografía, el juego de azar, la
            carne de cerdo y las armas. Los fondos de inversión islámicos cuentan con comités de
            cumplimiento de la Sharía que supervisan que las inversiones se ajusten a estos
            parámetros.
          </p>

          <h2>Instrumentos Financieros Islámicos</h2>

          <h3>Mudarabah (asociación de capital y trabajo)</h3>
          <p>
            Contrato de asociación en el que una parte aporta el capital (<em>rabb al-mal</em>) y
            la otra el trabajo y la gestión (<em>mudarib</em>). Las ganancias se distribuyen según
            proporciones acordadas previamente, mientras que las pérdidas las asume exclusivamente
            el aportante del capital, a menos que el gestor haya incurrido en negligencia o fraude.
            Es la base de muchos depósitos de inversión islámicos.
          </p>

          <h3>Musharakah (asociación participativa)</h3>
          <p>
            Contrato de sociedad en el que todas las partes aportan capital y pueden participar en
            la gestión del negocio. Las ganancias se distribuyen según proporciones pactadas, y las
            pérdidas se reparten en proporción al capital aportado. Existe una variante denominada{' '}
            <em>musharakah decreciente</em>, utilizada para la financiación de viviendas, donde el
            banco y el cliente son copropietarios y el cliente va adquiriendo gradualmente la
            participación del banco.
          </p>

          <h3>Ijara (arrendamiento)</h3>
          <p>
            Equivalente al leasing convencional, el <em>ijara</em> es un contrato por el cual el
            banco adquiere un activo y lo arrienda al cliente por un período determinado, a cambio
            de cuotas periódicas. En la modalidad <em>ijara wa iqtina</em>, al finalizar el
            contrato, el arrendatario tiene la opción de adquirir la propiedad del activo. La
            diferencia con el leasing convencional es que el banco, como propietario, asume los
            riesgos asociados a la propiedad del activo.
          </p>

          <h3>Sukuk (bonos islámicos)</h3>
          <p>
            Los <em>sukuk</em> son certificados de inversión que representan una participación
            proporcional en la propiedad de un activo tangible, usufructo o servicio. A diferencia
            de los bonos convencionales, que representan una deuda con interés, los sukuk otorgan al
            tenedor una participación en los rendimientos generados por el activo subyacente. El
            mercado de sukuk ha experimentado un crecimiento exponencial, con emisiones que superan
            los 700.000 millones de dólares anuales.
          </p>

          <h2>Banca Islámica</h2>
          <p>
            Los bancos islámicos operan bajo los principios de la Sharía, ofreciendo productos y
            servicios financieros que prescinden del interés. Cuentan con un{' '}
            <strong>Comité de Supervisión de la Sharía</strong> (
            <em>Sharia Supervisory Board</em>), integrado por juristas islámicos que certifican la
            conformidad de los productos con la ley islámica. Los principales centros de banca
            islámica se encuentran en Malasia, Arabia Saudita, Emiratos Árabes Unidos, Bahréin,
            Qatar y Kuwait, aunque su presencia se extiende también a países occidentales como el
            Reino Unido, Luxemburgo y Alemania.
          </p>

          <h2>Realidad Global</h2>
          <p>
            Las finanzas islámicas ya no son un fenómeno exclusivo de los países de mayoría
            musulmana. El Reino Unido se ha posicionado como el principal centro de finanzas
            islámicas en Occidente, y la Bolsa de Londres lista múltiples emisiones de sukuk.
            Instituciones como el Banco Mundial y el Fondo Monetario Internacional han reconocido el
            potencial de las finanzas islámicas para promover la inclusión financiera y el desarrollo
            sostenible.
          </p>
          <p>
            En América Latina, el conocimiento de las finanzas islámicas es aún incipiente, pero
            representa una oportunidad para la diversificación de las fuentes de financiamiento y la
            atracción de inversión de los países del Golfo Pérsico.
          </p>

          <h2>Conclusión</h2>
          <p>
            Las finanzas islámicas ofrecen una perspectiva alternativa sobre la organización del
            sistema financiero, fundamentada en principios éticos y religiosos que priorizan la
            justicia, la equidad y la vinculación de la ganancia con el riesgo real. Su crecimiento
            sostenido demuestra que es posible desarrollar un sistema financiero viable sin recurrir
            al interés como mecanismo central de intermediación. Para los juristas y los operadores
            del comercio internacional, el conocimiento de estos principios e instrumentos resulta
            cada vez más relevante en un mundo financiero globalizado e interconectado.
          </p>

          <div className="article-full-notice">
            <h3>Artículo Completo Disponible</h3>
            <p>
              Este es un resumen del artículo académico completo. Para acceder al texto íntegro con
              todas las referencias y notas al pie, descargue el PDF.
            </p>
            <TrackedLink
              href="/articulos/trabajo-finanzas-islamicas-para-el-dial.pdf"
              trackEvent="publication_click"
              trackSource="finanzas-islamicas-derecho-musulman_full_notice"
              className="download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar artículo completo (PDF)
            </TrackedLink>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional</span>
            <span className="tag">Derecho Musulmán</span>
            <span className="tag">Finanzas Islámicas</span>
            <span className="tag">Derecho Comparado</span>
            <span className="tag">Sistema Financiero</span>
          </div>

          <TrackedLink
            href="/articulos/trabajo-finanzas-islamicas-para-el-dial.pdf"
            trackEvent="publication_click"
            trackSource="finanzas-islamicas-derecho-musulman_footer"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </TrackedLink>

          <div className="author-card">
            <h3>Sobre la autora</h3>
            <p className="author-name">Dra. Maria Andrea Esparza</p>
            <p className="author-bio">
              Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de
              25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional
              Privado.
            </p>
            <a href="/#contact" className="contact-btn">
              Contactar
            </a>
          </div>

          <div className="more-articles">
            <h3>Más publicaciones</h3>
            <a href="/#publications">Ver todas las publicaciones</a>
          </div>

          <div className="article-service-links">
            <h3>Servicios legales relacionados</h3>
            <p>Si este tema se relaciona con su caso, puede solicitar asesoramiento en:</p>
            <ul>
              <li>
                <a href="/servicios/derecho-familia">Derecho de Familia</a>
              </li>
              <li>
                <a href="/servicios/alimentos">Juicio de Alimentos</a>
              </li>
              <li>
                <a href="/servicios/divorcios-buenos-aires">Divorcios en Buenos Aires</a>
              </li>
              <li>
                <a href="/servicios/sucesiones">Sucesiones y Herencias</a>
              </li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
