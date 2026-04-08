import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/analisis-problemas-dip-divorcio-internacional/'
const PDF_URL = '/articulos/analisis-de-los-problemas-generales-del-derecho-internacional-privado-vinculados-a-un-divorcio-de.pdf'

export const metadata: Metadata = {
  title: 'Divorcio Internacional: Validez en Argentina, Jurisdicción y Ley Aplicable | Dra. Esparza',
  description:
    '¿Divorciado en el extranjero? Qué ocurre con el reconocimiento de la sentencia, la jurisdicción internacional y la ley aplicable para bienes y alimentos en Argentina. Por Dra. Andrea Esparza.',
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Análisis de los Problemas del DIP Vinculados a un Divorcio Internacional - Dra. Andrea Esparza',
    description:
      'Análisis exhaustivo de los problemas de derecho internacional privado que surgen en casos de divorcio decretado en el extranjero, incluyendo reconocimiento de sentencias, jurisdicción internacional y ley aplicable.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2007-11-07',
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
  headline:
    'Análisis de los Problemas Generales del Derecho Internacional Privado Vinculados a un Divorcio Decretado en el Extranjero',
  description:
    'Análisis exhaustivo de los problemas de derecho internacional privado que surgen en casos de divorcio decretado en el extranjero, incluyendo reconocimiento de sentencias, jurisdicción internacional y ley aplicable.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2007-11-07',
  dateModified: '2007-11-07',
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
    '@id': CANONICAL,
  },
  keywords: ['Derecho Internacional Privado', 'Divorcio Internacional', 'Derecho de Familia', 'Reconocimiento de Sentencias'],
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Análisis de los Problemas del DIP Vinculados a un Divorcio Internacional' },
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
              { label: 'Análisis de Problemas del DIP en Divorcio Internacional' },
            ]}
          />
          <div className="article-category">Derecho Internacional Privado</div>
          <h1>
            Análisis de los Problemas Generales del Derecho Internacional Privado Vinculados a un Divorcio Decretado en
            el Extranjero
          </h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">7 de Noviembre de 2007</span>
          </div>
          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="analisis-dip-divorcio-header"
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
            El divorcio decretado en el extranjero plantea diversas problemáticas en el ámbito del derecho internacional
            privado. En un mundo cada vez más globalizado, donde las personas se desplazan con frecuencia entre países y
            contraen matrimonio en jurisdicciones distintas a las de su nacionalidad o residencia, es fundamental
            comprender cómo operan los mecanismos de reconocimiento y ejecución de sentencias extranjeras.
          </p>
          <p>
            Este trabajo aborda los principales problemas que surgen cuando un divorcio se ha decretado en el extranjero
            y se pretende hacer valer en otro país, analizando tanto la dimensión procesal como sustantiva de estas
            cuestiones.
          </p>

          <h2>Problemas Fundamentales del Derecho Internacional Privado</h2>
          <p>
            El derecho internacional privado debe resolver tres problemas fundamentales cuando se enfrenta a una
            situación con elementos extranjeros:
          </p>

          <h3>1. Jurisdicción Internacional</h3>
          <p>
            Determinar qué tribunales son competentes para conocer de un caso de divorcio cuando existen elementos de
            internacionalidad:
          </p>
          <ul>
            <li>Tribunales del domicilio del demandado</li>
            <li>Tribunales del domicilio del demandante (en ciertos casos)</li>
            <li>Tribunales del último domicilio conyugal</li>
            <li>Tribunales de la nacionalidad de los cónyuges</li>
          </ul>

          <h3>2. Ley Aplicable</h3>
          <p>Determinar qué ley sustantiva debe aplicarse para resolver el fondo de la cuestión:</p>
          <ul>
            <li>Ley del domicilio conyugal</li>
            <li>Ley de la nacionalidad común</li>
            <li>Ley del primer domicilio conyugal</li>
            <li>Ley del último domicilio conyugal</li>
          </ul>

          <h3>3. Reconocimiento y Ejecución de Sentencias Extranjeras</h3>
          <p>
            Determinar bajo qué condiciones una sentencia de divorcio dictada por tribunales extranjeros puede ser
            reconocida y ejecutada en otro país.
          </p>

          <h2>El Divorcio en el Derecho Internacional Privado Argentino</h2>

          <h3>Normativa Aplicable</h3>
          <p>El Código Civil y Comercial de la Nación (vigente desde 2015) regula estas cuestiones en los artículos:</p>
          <ul>
            <li>
              <strong>Art. 2621:</strong> Jurisdicción internacional en materia de divorcio
            </li>
            <li>
              <strong>Art. 2622:</strong> Ley aplicable al divorcio
            </li>
            <li>
              <strong>Arts. 2595-2597:</strong> Reconocimiento de sentencias extranjeras
            </li>
          </ul>

          <h3>Jurisdicción Internacional Argentina</h3>
          <p>Los jueces argentinos son competentes para decretar el divorcio cuando:</p>
          <ul>
            <li>Cualquiera de los cónyuges tiene domicilio en Argentina al momento de la demanda</li>
            <li>Ambos cónyuges han prestado su conformidad para someterse a la jurisdicción argentina</li>
          </ul>

          <h3>Ley Aplicable al Divorcio</h3>
          <p>Conforme al artículo 2622, el divorcio se rige por:</p>
          <ul>
            <li>
              <strong>Primariamente:</strong> La ley del último domicilio conyugal
            </li>
            <li>
              <strong>Subsidiariamente:</strong> La ley del lugar de celebración del matrimonio, si ambos cónyuges
              residían allí al tiempo de la celebración
            </li>
          </ul>

          <h2>Reconocimiento de Sentencias Extranjeras de Divorcio</h2>
          <p>
            Para que una sentencia de divorcio dictada en el extranjero sea reconocida en Argentina, debe cumplir con
            ciertos requisitos establecidos en el artículo 2595 del Código Civil y Comercial:
          </p>

          <h3>Requisitos de Reconocimiento</h3>
          <ol>
            <li>
              <strong>Autoridad competente:</strong> La sentencia debe emanar de una autoridad con jurisdicción
              internacional según las normas argentinas de jurisdicción
            </li>
            <li>
              <strong>Citación:</strong> El demandado debió ser notificado en debida forma, teniendo oportunidad de
              defenderse
            </li>
            <li>
              <strong>Autenticidad:</strong> La sentencia debe estar debidamente legalizada o apostillada
            </li>
            <li>
              <strong>Cosa juzgada:</strong> La sentencia debe tener el carácter de cosa juzgada en el país de origen
            </li>
            <li>
              <strong>Orden público:</strong> La sentencia no debe ser manifiestamente incompatible con el orden
              público argentino
            </li>
            <li>
              <strong>No contradicción:</strong> No debe existir en Argentina una sentencia sobre el mismo objeto que
              sea incompatible
            </li>
          </ol>

          <h3>Procedimiento de Reconocimiento</h3>
          <p>El reconocimiento de sentencias extranjeras puede obtenerse mediante:</p>
          <ul>
            <li>
              <strong>Reconocimiento incidental:</strong> Cuando se invoca la sentencia en el marco de otro juicio
            </li>
            <li>
              <strong>Reconocimiento de oficio:</strong> Cuando no es necesario ejecutar la sentencia sino solo
              reconocer sus efectos
            </li>
            <li>
              <strong>Exequatur:</strong> Cuando se requiere ejecutar la sentencia (por ejemplo, para cobrar alimentos)
            </li>
          </ul>

          <h2>Tratados Internacionales Aplicables</h2>
          <p>
            Argentina es parte de varios tratados que facilitan el reconocimiento de divorcios decretados en el
            extranjero:
          </p>

          <h3>Tratados de Montevideo de 1889 y 1940</h3>
          <p>Regulan jurisdicción y ley aplicable en materia de divorcio entre los países del Cono Sur.</p>

          <h3>Convenciones de La Haya</h3>
          <p>Facilitan el reconocimiento de divorcios y separaciones legales.</p>

          <h2>Problemas Prácticos Frecuentes</h2>

          <h3>1. Divorcio Vincular vs. Separación Personal</h3>
          <p>
            Algunos países reconocen solo la separación personal, mientras que otros admiten el divorcio vincular. Esto
            puede generar conflictos de orden público.
          </p>

          <h3>2. Divorcio Unilateral o de Mutuo Acuerdo</h3>
          <p>
            Las distintas causales de divorcio reconocidas por cada legislación pueden plantear problemas de orden
            público.
          </p>

          <h3>3. Efectos Patrimoniales del Divorcio</h3>
          <p>
            La liquidación de la sociedad conyugal, régimen de bienes y compensaciones económicas pueden estar sujetas
            a leyes diferentes del divorcio mismo.
          </p>

          <h3>4. Efectos sobre los Hijos</h3>
          <p>
            La responsabilidad parental, alimentos y régimen de comunicación pueden requerir análisis separado.
          </p>

          <h2>El Orden Público Internacional</h2>
          <p>El orden público actúa como límite al reconocimiento de sentencias extranjeras. Una sentencia de divorcio puede no ser reconocida si:</p>
          <ul>
            <li>Viola principios fundamentales del derecho argentino</li>
            <li>No respetó el debido proceso</li>
            <li>Discrimina por razones de género, raza, religión, etc.</li>
            <li>Afecta derechos fundamentales de las partes o de los hijos</li>
          </ul>

          <h2>Conclusiones</h2>
          <ol>
            <li>
              El divorcio internacional plantea complejas cuestiones de derecho internacional privado que requieren
              análisis cuidadoso
            </li>
            <li>
              El Código Civil y Comercial modernizó significativamente las normas aplicables, simplificando el
              reconocimiento de divorcios extranjeros
            </li>
            <li>Los tratados internacionales juegan un rol fundamental facilitando el reconocimiento mutuo</li>
            <li>
              El orden público internacional debe aplicarse con criterio restrictivo, respetando las decisiones
              extranjeras salvo casos excepcionales
            </li>
            <li>
              La tendencia actual favorece el reconocimiento de divorcios extranjeros cuando se han respetado las
              garantías procesales básicas
            </li>
          </ol>

          <div className="article-full-notice">
            <h3>Artículo Completo Disponible</h3>
            <p>El artículo completo desarrolla en profundidad:</p>
            <ul>
              <li>Análisis pormenorizado de los Tratados de Montevideo</li>
              <li>Jurisprudencia argentina comparada sobre reconocimiento de divorcios</li>
              <li>Casos prácticos de problemas de jurisdicción y ley aplicable</li>
              <li>Análisis de la evolución normativa desde el Código de Vélez hasta el actual</li>
              <li>Doctrina especializada y bibliografía completa</li>
            </ul>
            <p>
              <strong>Extensión:</strong> 15 páginas &middot; <strong>Formato:</strong> PDF &middot;{' '}
              <strong>Año:</strong> 2007
            </p>
            <TrackedLink
              href={PDF_URL}
              trackEvent="publication_click"
              trackSource="analisis-dip-divorcio-full-notice"
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
            <span className="tag">Derecho Internacional Privado</span>
            <span className="tag">Divorcio Internacional</span>
            <span className="tag">Derecho de Familia</span>
            <span className="tag">Reconocimiento de Sentencias</span>
          </div>

          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="analisis-dip-divorcio-footer"
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

      <a
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20vengo%20de%20https://draandreaesparza.com%20y%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20legal."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        data-track-whatsapp="article_analisis_dip_divorcio"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
