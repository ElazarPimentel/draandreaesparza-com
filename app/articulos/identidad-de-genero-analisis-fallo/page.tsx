import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title:
    'Análisis de un Fallo sobre Identidad de Género: Una Mirada Esperanzadora - Dra. Andrea Esparza',
  description:
    'Comentario jurídico sobre un fallo innovador donde un joven de 15 años solicitó el cambio de prenombre sin modificar su género, analizando las implicancias del derecho a la identidad de género y la capacidad progresiva de los adolescentes.',
  keywords:
    'identidad de género, derechos del niño, adolescencia, capacidad progresiva, ley 26.743, decreto 476/21, derecho a la identidad, cambio de nombre, Judith Butler, derecho de familia',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://draandreaesparza.com/articulos/identidad-de-genero-analisis-fallo/',
    languages: {
      'es-AR': 'https://draandreaesparza.com/articulos/identidad-de-genero-analisis-fallo/',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://draandreaesparza.com/articulos/identidad-de-genero-analisis-fallo/',
    title:
      'Análisis de un Fallo sobre Identidad de Género: Una Mirada Esperanzadora - Dra. Andrea Esparza',
    description:
      'Comentario jurídico sobre un fallo innovador donde un joven de 15 años solicitó el cambio de prenombre sin modificar su género, analizando las implicancias del derecho a la identidad de género y la capacidad progresiva de los adolescentes.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
      },
    ],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2021-12-06',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Análisis de un Fallo sobre Identidad de Género: Una Mirada Esperanzadora - Dra. Andrea Esparza',
    description:
      'Comentario jurídico sobre un fallo innovador donde un joven de 15 años solicitó el cambio de prenombre sin modificar su género, analizando las implicancias del derecho a la identidad de género y la capacidad progresiva de los adolescentes.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Análisis de un Fallo sobre Identidad de Género: Una Mirada Esperanzadora',
  description:
    'Comentario jurídico sobre un fallo innovador donde un joven de 15 años solicitó el cambio de prenombre sin modificar su género, analizando las implicancias del derecho a la identidad de género y la capacidad progresiva de los adolescentes.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2021-12-06',
  dateModified: '2021-12-06',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    jobTitle: 'Abogada Especialista en Derecho de Familia',
    url: 'https://draandreaesparza.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://draandreaesparza.com/articulos/identidad-de-genero-analisis-fallo/',
  },
  keywords: [
    'Derecho de Familia',
    'Identidad de Género',
    'Derechos del Niño',
    'Capacidad Progresiva',
    'Jurisprudencia',
  ],
  articleSection: 'Derecho de Familia y Derechos Humanos',
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
      name: 'Análisis de un Fallo sobre Identidad de Género: Una Mirada Esperanzadora',
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
              { label: 'Análisis de un Fallo sobre Identidad de Género' },
            ]}
          />
          <div className="article-category">Derecho de Familia y Derechos Humanos</div>
          <h1>Análisis de un Fallo sobre Identidad de Género: Una Mirada Esperanzadora</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">6 de Diciembre de 2021</span>
          </div>
          <TrackedLink
            href="/articulos/comentario-a-fallo-sobre-identidad-de-genero.pdf"
            trackEvent="publication_click"
            trackSource="identidad-de-genero-analisis-fallo_header"
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
            El presente trabajo consiste en el comentario de un fallo reciente, donde un joven de 15
            años solicita el cambio de su prenombre, pero sin cambiar su género. Este caso, resuelto
            por el Juzgado de Primera Instancia de Familia N&ordm; 2 de Santa Cruz, pone de
            manifiesto las tensiones entre la legislación vigente y la realidad de las identidades
            humanas, que no siempre se ajustan a las categorías previstas por el legislador.
          </p>
          <p>
            La evolución histórica sobre sexo, género, identidad y sexualidad, y las grandes luchas
            porque la ley y la sociedad reconozcan la diversidad de identidades, han logrado
            traspasar límites dogmáticos que sostén estereotipos culturales binarios entre lo
            femenino y lo masculino. La segregación horizontal, vertical y la discriminación salarial
            son muestras sintomáticas de dinámicas de subordinación social profundamente arraigadas
            en nuestras sociedades contemporáneas.
          </p>

          <h2>Sexo y Género: Conceptos Fundamentales</h2>
          <p>
            Resulta necesario formular preliminarmente una breve diferenciación entre sexo y género.
            Estos dos conceptos han sido demarcados durante la década de 1970 por John Money en
            colaboración con Anke Ehrhardt y Patricia Tucker, reservando el de sexo para lo
            anátomo-fisiológico y el de género para la psicología del YO, los roles, lo conductual.
            Posteriormente, se definió al género como una construcción de la diferencia sexual y una
            forma de significar relaciones de poder.
          </p>
          <p>
            Actualmente, la cuestión de género detenta un rol esencial en el marco del paradigma
            constitucional vigente, que impone el respeto por la autodeterminación de la identidad y
            del derecho a recibir un trato conforme a la misma, en términos de
            igualdad-no discriminación. Dicho en otras palabras: reconocer a las personas el derecho
            a ser lo que deseen ser, en libertad de decidir y de ser tratados con la dignidad que
            merecen.
          </p>

          <h2>El Caso</h2>
          <p>
            Un joven, que nació con sexo femenino y fue inscripto al nacer con nombre de mujer,
            solicitó mediante Formulario de Rectificación Registral (Ley de Identidad de Género
            26.743) ante el Registro de Estado Civil y Capacidad de las Personas de Santa Cruz, la
            rectificación de su partida de nacimiento y posterior documento de identidad. Su
            pretensión era modificar su prenombre, manteniendo al momento de la confección el género
            femenino.
          </p>
          <p>
            El Director General del Registro Civil entendió que la pretensión del joven no se
            ajustaba a los términos de la Ley de Identidad de Género ni al Decreto N&ordm; 476/21,
            dado que la ley prevé el cambio de sexo junto con el cambio de nombre de pila, y el
            Decreto regula la categoría &ldquo;no binario&rdquo; para quienes no se identifican con
            el sexo Femenino o Masculino. El joven, sin embargo, deseaba mantener el sexo femenino y
            cambiar únicamente su nombre de pila, situación no contemplada en ninguna de las normas.
          </p>

          <h2>Marco Normativo</h2>

          <h3>Ley 26.743 de Identidad de Género</h3>
          <p>
            El art. 2 de la Ley define la identidad de género como{' '}
            <em>
              &ldquo;la vivencia interna e individual del género tal como cada persona la siente, la
              cual puede corresponder o no con el sexo asignado al momento del nacimiento,
              incluyendo la vivencia personal del cuerpo&rdquo;
            </em>
            . El art. 5, por su parte, regula la situación de los menores de 18 años, estableciendo
            que la solicitud deberá efectuarse a través de sus representantes legales, con expresa
            conformidad del menor y teniendo en cuenta los principios de capacidad progresiva e
            interés superior del niño.
          </p>

          <h3>Decreto 476/21</h3>
          <p>
            El Decreto determinó que las nomenclaturas en los DNI y pasaportes para el campo
            &ldquo;sexo&rdquo; podrán ser &ldquo;F&rdquo; (Femenino), &ldquo;M&rdquo; (Masculino)
            o &ldquo;X&rdquo;. Esta última comprende las acepciones: no binaria, indeterminada, no
            especificada, indefinida, no informada, autopercibida, no consignada, u otra acepción
            con la que pudiera identificarse la persona que no se sienta comprendida en el binomio
            masculino/femenino.
          </p>

          <h3>El vacío legal</h3>
          <p>
            Como puede advertirse, las normas transcriptas no prevén el supuesto de cambio de nombre
            de pila o prenombre sin cambio de género. El joven no quería cambiar su género a
            masculino ni adoptar la categoría &ldquo;no binario&rdquo;; deseaba mantener su sexo
            femenino registrado y modificar únicamente su prenombre. Esta situación constituía un
            vacío legal que el juez debió resolver.
          </p>

          <h2>Decisión Judicial</h2>
          <p>
            Luego de escuchar al joven en función del derecho reconocido por el art. 12 de la
            Convención sobre los Derechos del Niño y el art. 24 de la Ley 26.061, y con el
            asesoramiento de un abogado del niño, el juez concluyó que el joven había expuesto con
            claridad su sentir: expresaba seguridad en sentir su identidad de género desde lo
            masculino (de ahí el pedido de cambio de nombre), pero reconocía que su cuerpo tenía
            rasgos femeninos y que, hasta sentirse preparado para encarar una modificación médica,
            consideraba conveniente mantener la designación de su sexualidad como femenina. Tampoco
            se sentía representado por la opción &ldquo;no binario&rdquo;.
          </p>

          <h3>Judith Butler y la performatividad de género</h3>
          <p>
            Ante el vacío legal, el juez recurrió a la filosofía. Mencionó la obra de Judith Butler,{' '}
            <em>&ldquo;El género en disputa&rdquo;</em> (1992), y las implicancias de la
            &ldquo;performatividad de género&rdquo;. Butler plantea que sexo y género siguen
            expresando una idea biologicista y hegemónica, y que el binarismo de género naturaliza y
            consolida una determinada mirada sobre los cuerpos.
          </p>

          <h3>Anne Fausto-Sterling</h3>
          <p>
            El juez citó también a Anne Fausto-Sterling, quien en su obra{' '}
            <em>&ldquo;Cuerpos Sexuados&rdquo;</em> ofrece ejemplos donde la propia naturaleza no
            se enmarca en el binarismo, reflexionando:{' '}
            <em>
              &ldquo;Si la naturaleza realmente nos ofrece más de dos sexos, entonces nuestras
              nociones vigentes de masculinidad y feminidad son presunciones culturales&rdquo;
            </em>
            .
          </p>

          <h3>Resolución</h3>
          <p>
            Realizando una interpretación armónica del Código Civil y Comercial con los Tratados de
            Derechos Humanos y principios como el interés superior del niño, pro homine y capacidad
            progresiva, el juez sentenció favorablemente, haciendo notar que las elecciones y
            decisiones personales en lo que a la identidad se refiere van por delante del sistema
            jurídico.
          </p>

          <h2>Adolescencia y Capacidad Progresiva</h2>
          <blockquote>
            <p>
              &ldquo;La adolescencia debe entenderse como un complejo proceso de maduración
              personal, como una etapa en busca de madurez. Pero la inmadurez del/la adolescente es
              distinta a la del niño/a o el/la adulto/a: mientras que la del/la niño/a es la de la
              persona que sin valerse a sí misma no percibe esa situación como problemática, la
              inmadurez del/la adolescente es la de quien no sabiendo valerse por sí mismo/a
              experimenta el deseo de hacerlo y, al intentar conseguirlo, pone en marcha capacidades
              nuevas, en un proceso cuyas peculiaridades hacen difícil establecer su
              duración.&rdquo;
            </p>
          </blockquote>
          <p>
            Siendo el joven del fallo un adolescente, es absolutamente lógico que tenga ciertas
            dudas y que esas dudas sean contempladas al momento de dar lugar a su petición. Es
            loable y un buen augurio para futuras decisiones que el sistema judicial respete la
            complejidad del proceso adolescente.
          </p>

          <h2>Conclusión</h2>
          <p>
            Luego de analizar este caso, queda la sensación de que los avances jurídicos,
            legislativos y político-sociales en un tema tan sensible como la identidad de género no
            logran abarcar todas las posibilidades ni todas las percepciones individuales. Pero
            también permite observar cómo se ha evolucionado, cómo se han podido romper barreras y
            prejuicios tan arraigados.
          </p>
          <p>
            Es esperanzador saber que, pese a las lagunas de derecho que puedan suscitar casos como
            el presente, existen jueces con una amplitud mental y de criterio que permiten zanjar
            satisfactoriamente las mismas y concederle a un ser humano su derecho a SER.
          </p>
          <p>
            Decía Couture:{' '}
            <em>
              &ldquo;La pretensión es la afirmación de un sujeto de derecho de merecer la tutela
              jurídica y, por supuesto, la aspiración concreta de que ésta se haga efectiva. En
              otras palabras: la autoatribución de un derecho por parte de un sujeto que invocándolo
              pide concretamente que se haga efectiva a su respecto la tutela jurídica.&rdquo;
            </em>
          </p>

          <h2>Bibliografía</h2>
          <ul>
            <li>
              Seoane, Mariano López,{' '}
              <em>
                &ldquo;Los mil pequeños sexos: intervenciones críticas sobre políticas de género y
                sexualidades&rdquo;
              </em>
              , EDUNTREF, 2019
            </li>
            <li>
              Mollo Brisco, Gabriela Fernanda; De la Vega y Soledad,{' '}
              <em>
                &ldquo;Estereotipos de género. Un análisis desde los 16 factores de la personalidad
                de Catell&rdquo;
              </em>
              , 2014
            </li>
            <li>
              De Mazo, Carlos G.,{' '}
              <em>&ldquo;La persona adolescente, vulnerabilidad y adicciones&rdquo;</em>, Buenos
              Aires, La Ley, 2010
            </li>
            <li>
              Expte. N&ordm; 15332-2021 &ndash; &ldquo;M. L.(M) s/ venia judicial&rdquo; - Juzgado
              de Primera Instancia de la Familia N&ordm; 2 de Santa Cruz &ndash; 06/12/2021
            </li>
            <li>
              Couture,{' '}
              <em>&ldquo;Estudios de Derecho Procesal Civil&rdquo;</em>, 3&ordm; edición, Depalma,
              1979, Buenos Aires
            </li>
            <li>Código Civil y Comercial de la Nación</li>
            <li>Ley 26.743 de Identidad de Género</li>
            <li>Decreto N&ordm; 476/21</li>
          </ul>

          <div className="article-full-notice">
            <h3>Artículo Completo Disponible</h3>
            <p>
              Este es un resumen del artículo académico completo. Para acceder al texto íntegro con
              todas las referencias y notas al pie, descargue el PDF.
            </p>
            <TrackedLink
              href="/articulos/comentario-a-fallo-sobre-identidad-de-genero.pdf"
              trackEvent="publication_click"
              trackSource="identidad-de-genero-analisis-fallo_full_notice"
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
            <span className="tag">Derecho de Familia</span>
            <span className="tag">Identidad de Género</span>
            <span className="tag">Derechos del Niño</span>
            <span className="tag">Capacidad Progresiva</span>
            <span className="tag">Jurisprudencia</span>
          </div>

          <TrackedLink
            href="/articulos/comentario-a-fallo-sobre-identidad-de-genero.pdf"
            trackEvent="publication_click"
            trackSource="identidad-de-genero-analisis-fallo_footer"
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
