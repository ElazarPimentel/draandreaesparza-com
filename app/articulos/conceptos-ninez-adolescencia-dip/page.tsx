import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/conceptos-ninez-adolescencia-dip'
const PDF_URL = '/articulos/revisando-conceptos-ninez-adolescencia-dip.pdf'

export const metadata: Metadata = {
  title:
    'Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el Derecho Internacional Privado - Dra. Andrea Esparza',
  description:
    'Análisis profundo de los conceptos de residencia habitual y centro de vida en el derecho internacional privado aplicado a niñez y adolescencia, incluyendo jurisprudencia argentina y europea.',
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title:
      'Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el Derecho Internacional Privado - Dra. Andrea Esparza',
    description:
      'Análisis profundo de los conceptos de residencia habitual y centro de vida en el derecho internacional privado aplicado a niñez y adolescencia, incluyendo jurisprudencia argentina y europea.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2025-05-31',
    authors: ['Maria Andrea Esparza'],
  },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el Derecho Internacional Privado',
  description:
    'Análisis profundo de los conceptos de residencia habitual y centro de vida en el derecho internacional privado aplicado a niñez y adolescencia, incluyendo jurisprudencia argentina y europea.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2025-05-31',
  dateModified: '2025-05-31',
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
    '@id': CANONICAL,
  },
  keywords: [
    'Derecho Internacional Privado',
    'Niñez y Adolescencia',
    'Restitución Internacional',
    'Convenio de La Haya',
    'Responsabilidad Parental',
  ],
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el DIP',
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
              { label: 'Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el DIP' },
            ]}
          />
          <div className="article-category">Derecho Internacional Privado</div>
          <h1>
            Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el Derecho Internacional Privado
          </h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Mayo de 2025</span>
          </div>
          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="conceptos-ninez-dip-header"
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
            En la práctica del iusprivatista multinacional, los casos que involucran niñez y adolescencia representan
            uno de los desafíos más complejos y sensibles. Las situaciones de traslados internacionales, retenciones
            ilícitas y disputas sobre responsabilidad parental transfronteriza obligan al operador jurídico a dominar
            conceptos que, aunque aparentemente claros en la teoría, presentan enormes dificultades al momento de su
            aplicación concreta. La multiplicidad de contactos entre el menor, sus progenitores y los distintos
            ordenamientos jurídicos involucrados genera un entramado de cuestiones que requieren un análisis cuidadoso
            y actualizado.
          </p>
          <p>
            El presente trabajo se propone revisar dos de los conceptos más relevantes y problemáticos en esta materia:
            la <strong>residencia habitual</strong> y el <strong>centro de vida</strong>. Ambos funcionan como puntos de
            conexión esenciales en el derecho internacional privado aplicado a la niñez, pero su delimitación
            conceptual y su aplicación práctica distan de ser pacíficas. A través del análisis de fuentes
            convencionales, legislación interna argentina y jurisprudencia tanto nacional como del Tribunal de Justicia
            de la Unión Europea, intentaremos aportar claridad sobre estas nociones fundamentales.
          </p>

          <h2>¿Qué es la Residencia Habitual?</h2>
          <p>
            La residencia habitual es el punto de conexión por excelencia en materia de protección internacional de
            menores. A diferencia del domicilio legal, que responde a una construcción jurídica formal, la residencia
            habitual busca captar una realidad fáctica: el lugar donde la persona efectivamente vive con cierto grado
            de estabilidad y permanencia.
          </p>

          <h3>Convenio Argentino-Uruguayo sobre Protección Internacional de Menores</h3>
          <p>
            El Convenio Argentino-Uruguayo sobre Protección Internacional de Menores (1981) constituye un antecedente
            regional significativo. Este instrumento bilateral utiliza la residencia habitual como criterio
            determinante de la jurisdicción y la ley aplicable en materia de relaciones personales y patrimoniales
            entre padres e hijos. La definición allí plasmada atiende al lugar donde el menor tiene su vida cotidiana,
            sus vínculos afectivos, su escolaridad y su integración social, sin que se requiera una permanencia por un
            período mínimo determinado.
          </p>

          <h3>Jurisprudencia de la CSJN</h3>
          <p>
            La Corte Suprema de Justicia de la Nación ha tenido oportunidad de pronunciarse sobre el concepto de
            residencia habitual en diversos precedentes vinculados a la restitución internacional de menores. En este
            sentido, ha sostenido:
          </p>
          <blockquote>
            <p>
              &#8220;La residencia habitual del menor debe determinarse sobre la base de un conjunto de circunstancias
              de hecho que son particulares en cada caso. Además de la presencia física del menor en un Estado, deben
              tenerse en cuenta otros factores que puedan indicar que dicha presencia no tiene en modo alguno carácter
              temporal u ocasional y que la residencia del menor denota cierta integración en un entorno social y
              familiar.&#8221;
            </p>
          </blockquote>
          <p>
            La Corte ha enfatizado que la residencia habitual no puede confundirse con la mera presencia física ni con
            el domicilio legal, sino que exige una evaluación global de las circunstancias del caso, incluyendo la
            duración, la regularidad, las condiciones y razones de la permanencia, la nacionalidad del menor, su
            escolarización, sus relaciones familiares y sociales.
          </p>

          <h3>Decreto 415/2006</h3>
          <p>
            El Decreto 415/2006, reglamentario de la Ley 26.061 de Protección Integral de los Derechos de Niñas,
            Niños y Adolescentes, introdujo una definición normativa del centro de vida vinculada a la residencia
            habitual:
          </p>
          <blockquote>
            <p>
              &#8220;A los efectos de la Ley N° 26.061, se entiende por &#8216;centro de vida&#8217; el lugar donde
              las niñas, niños y adolescentes hubiesen transcurrido en condiciones legítimas la mayor parte de su
              existencia. Este principio rige en materia de supuestos de conflicto de derechos con igual
              jerarquía.&#8221;
            </p>
          </blockquote>

          <h3>Centro de Vida &ndash; Ley 26.061</h3>
          <p>
            La Ley 26.061 consagró el concepto de <strong>centro de vida</strong> en su artículo 3°, inc. f), como uno
            de los criterios que deben tenerse en cuenta para la determinación del interés superior del niño. Esta
            noción, propia del derecho argentino, busca identificar el lugar donde el niño ha desarrollado
            efectivamente su vida, sus vínculos afectivos, su escolaridad y su inserción comunitaria. Si bien guarda
            estrecha relación con la residencia habitual, el centro de vida tiene una connotación más amplia, ya que
            incorpora explícitamente la dimensión afectiva y relacional del menor con su entorno.
          </p>

          <h2>Jurisprudencia del Tribunal de Justicia de la Unión Europea</h2>
          <p>
            El TJUE ha desarrollado una rica jurisprudencia sobre la interpretación de la residencia habitual en el
            marco del Reglamento Bruselas II bis (y su sucesor, Bruselas II ter). Los siguientes pronunciamientos
            resultan especialmente relevantes:
          </p>

          <h3>Sentencia de abril de 2009 (Asunto C-523/07)</h3>
          <p>
            En este caso, el Tribunal estableció que la residencia habitual del menor debe interpretarse como el lugar
            que refleja una cierta integración del menor en un entorno social y familiar. A tal efecto, deben
            considerarse la duración, regularidad, condiciones y razones de la permanencia en el territorio de un
            Estado miembro y del traslado de la familia a dicho Estado, la nacionalidad del menor, el lugar y las
            condiciones de escolarización, los conocimientos lingüísticos y las relaciones familiares y sociales que el
            menor mantiene en ese Estado.
          </p>

          <h3>Sentencia de diciembre de 2010 &ndash; Caso del lactante (Asunto C-497/10 PPU)</h3>
          <p>
            El TJUE abordó la problemática especial de determinar la residencia habitual de un lactante. Sostuvo que,
            tratándose de un niño de corta edad que depende enteramente de sus progenitores, el entorno social y
            familiar del niño se define esencialmente por la persona o personas de referencia con las que vive, que lo
            cuidan efectivamente y que se ocupan de él. En consecuencia, para determinar la residencia habitual de un
            lactante, deben considerarse principalmente las circunstancias de la madre o el progenitor cuidador
            principal: su intención de establecerse, su integración en el entorno social, los vínculos familiares y las
            condiciones materiales de vida.
          </p>

          <h3>Sentencia de junio de 2017 (Asunto C-111/17 PPU)</h3>
          <p>
            En esta sentencia, el Tribunal profundizó los criterios para establecer la residencia habitual, enfatizando
            que debe atenderse al conjunto de circunstancias de hecho particulares de cada caso. Reiteró que la
            intención de los progenitores de establecerse con el menor en un determinado lugar puede tenerse en cuenta
            cuando se manifiesta en medidas concretas, como la adquisición o alquiler de una vivienda, la búsqueda de
            empleo o la inscripción del menor en un centro educativo.
          </p>

          <h3>Sentencia de junio de 2018 (Asunto C-512/17)</h3>
          <p>
            El Tribunal se pronunció sobre un supuesto en que el menor había vivido sucesivamente en varios Estados
            miembros. Estableció que, en caso de cambio lícito de residencia, la nueva residencia habitual se adquiere
            cuando el menor ha alcanzado un grado suficiente de integración en su nuevo entorno social y familiar. La
            mera presencia física en el nuevo Estado, sin elementos adicionales de integración, no es suficiente para
            determinar una nueva residencia habitual.
          </p>

          <h2>Conclusiones sobre la Residencia Habitual</h2>
          <p>
            Del análisis de las fuentes convencionales, legislativas y jurisprudenciales, es posible extraer los
            siguientes factores determinantes para la fijación de la residencia habitual de un niño o adolescente:
          </p>
          <ol>
            <li>
              <strong>Presencia física efectiva:</strong> El menor debe encontrarse físicamente en el Estado en
              cuestión, como condición necesaria pero no suficiente.
            </li>
            <li>
              <strong>Duración y regularidad de la permanencia:</strong> La permanencia debe tener cierta continuidad
              temporal, aunque no se exige un plazo mínimo determinado.
            </li>
            <li>
              <strong>Integración social y familiar:</strong> El menor debe haber desarrollado vínculos significativos
              con su entorno, incluyendo relaciones familiares, amistades, participación en actividades sociales y
              comunitarias.
            </li>
            <li>
              <strong>Escolarización:</strong> La asistencia a un centro educativo constituye un indicador relevante de
              la integración del menor en un determinado entorno.
            </li>
            <li>
              <strong>Conocimientos lingüísticos:</strong> El dominio del idioma del lugar de residencia es un factor
              que evidencia el grado de integración del menor.
            </li>
            <li>
              <strong>Intención de los progenitores:</strong> La voluntad de establecerse manifestada en actos
              concretos (vivienda, empleo, inscripciones escolares) puede ser tenida en cuenta como elemento
              complementario.
            </li>
          </ol>

          <h2>Mecanismo de Prevalencia en la Unión Europea</h2>

          <h3>Reglamento Bruselas II ter</h3>
          <p>
            El Reglamento (UE) 2019/1111, conocido como Bruselas II ter, entró en vigor el 1 de agosto de 2022 y
            sustituyó al Reglamento Bruselas II bis. Este nuevo instrumento introduce mejoras significativas en la
            protección de los menores en situaciones transfronterizas dentro de la Unión Europea, particularmente en
            lo relativo a la restitución de menores sustraídos ilícitamente.
          </p>

          <h3>Funcionamiento del mecanismo de prevalencia</h3>
          <p>
            El Reglamento Bruselas II ter establece un mecanismo de prevalencia que otorga competencia última a los
            tribunales del Estado miembro de residencia habitual del menor antes del traslado o retención ilícitos.
            Esto significa que, incluso cuando el tribunal del Estado requerido deniega la restitución del menor sobre
            la base de las excepciones previstas en el Convenio de La Haya de 1980, el tribunal del Estado de origen
            conserva la facultad de decidir sobre la custodia del menor y, eventualmente, ordenar su restitución.
          </p>

          <h3>Eliminación del exequátur</h3>
          <p>
            Una de las innovaciones más relevantes del Reglamento Bruselas II ter es la eliminación del procedimiento
            de exequátur para el reconocimiento y ejecución de resoluciones en materia de responsabilidad parental y
            restitución de menores. Las resoluciones dictadas por los tribunales de un Estado miembro son directamente
            reconocidas y ejecutables en los demás Estados miembros, lo que agiliza significativamente la protección
            de los derechos del menor.
          </p>

          <h3>Flexibilización del artículo 56</h3>
          <p>
            El artículo 56 del Reglamento introduce una mayor flexibilidad en el procedimiento de restitución,
            estableciendo plazos más breves para la resolución de los casos y mejorando la cooperación entre
            autoridades centrales. Se refuerza el derecho del menor a ser oído durante el procedimiento y se
            establecen garantías procesales adicionales para asegurar que la decisión adoptada sea efectivamente
            respetuosa del interés superior del niño.
          </p>

          <h2>Reflexión Final</h2>
          <p>
            Los conceptos de residencia habitual y centro de vida, lejos de ser nociones estáticas, continúan
            evolucionando al ritmo de las transformaciones sociales y la creciente movilidad internacional de las
            familias. La jurisprudencia tanto argentina como europea evidencia un esfuerzo constante por dotar a estos
            conceptos de contenido concreto, adaptado a las particularidades de cada caso, siempre con el interés
            superior del niño como guía rectora.
          </p>
          <p>
            El desafío para el operador jurídico reside en articular adecuadamente las fuentes convencionales, la
            legislación interna y la jurisprudencia, evitando interpretaciones rígidas que desatiendan la complejidad
            de las situaciones familiares internacionales. La protección efectiva de los derechos de niños y
            adolescentes en el ámbito transfronterizo exige una mirada integral, sensible a las circunstancias
            particulares de cada caso y comprometida con los valores fundamentales que inspiran el derecho
            internacional de los derechos humanos.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional Privado</span>
            <span className="tag">Niñez y Adolescencia</span>
            <span className="tag">Restitución Internacional</span>
            <span className="tag">Convenio de La Haya</span>
            <span className="tag">Responsabilidad Parental</span>
          </div>

          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="conceptos-ninez-dip-footer"
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
              Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de 25 años de
              experiencia. Directora Adjunta del Instituto de Derecho Internacional Privado.
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
