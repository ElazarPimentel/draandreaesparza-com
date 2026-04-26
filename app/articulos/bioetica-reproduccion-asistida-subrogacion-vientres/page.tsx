import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/bioetica-reproduccion-asistida-subrogacion-vientres'
const PDF_URL = '/articulos/trabajo-bioetica.pdf'

export const metadata: Metadata = {
  title:
    'Filiación, Técnicas de Reproducción Humana Asistida y Subrogación de Vientres a la Luz del Derecho Internacional Privado: Dilemas Bioéticos - Dra. Andrea Esparza',
  description:
    'Análisis exhaustivo de los dilemas bioéticos y jurídicos que plantean las técnicas de reproducción humana asistida y la subrogación de vientres en el marco del derecho internacional privado argentino.',
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title:
      'Filiación, Reproducción Asistida y Subrogación de Vientres: Dilemas Bioéticos - Dra. Andrea Esparza',
    description:
      'Análisis exhaustivo de los dilemas bioéticos y jurídicos que plantean las técnicas de reproducción humana asistida y la subrogación de vientres en el marco del derecho internacional privado argentino.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2022-08-31',
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
    'Filiación, Técnicas de Reproducción Humana Asistida y Subrogación de Vientres a la Luz del Derecho Internacional Privado: Dilemas Bioéticos',
  description:
    'Análisis exhaustivo de los dilemas bioéticos y jurídicos que plantean las técnicas de reproducción humana asistida y la subrogación de vientres en el marco del derecho internacional privado argentino.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2022-08-31',
  dateModified: '2022-08-31',
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
  keywords: ['Derecho Internacional Privado', 'Bioética', 'Reproducción Asistida', 'Filiación', 'Derecho de Familia'],
  articleSection: 'Derecho Internacional Privado y Bioética',
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
      name: 'Filiación, Reproducción Asistida y Subrogación de Vientres: Dilemas Bioéticos',
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
              { label: 'Filiación, Reproducción Asistida y Subrogación de Vientres' },
            ]}
          />
          <div className="article-category">Derecho Internacional Privado y Bioética</div>
          <h1>
            Filiación, Técnicas de Reproducción Humana Asistida y Subrogación de Vientres a la Luz del Derecho
            Internacional Privado: Dilemas Bioéticos
          </h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2022</span>
          </div>
          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="bioetica-reproduccion-header"
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
            Los avances científicos en materia de reproducción humana asistida han generado una verdadera revolución en
            el campo del derecho de familia y, particularmente, en el derecho internacional privado. Las técnicas de
            reproducción humana asistida (TRHA) permiten hoy que personas y parejas que antes no podían concebir accedan
            a la parentalidad, pero al mismo tiempo plantean interrogantes jurídicos y éticos de enorme complejidad.
          </p>
          <p>
            La subrogación de vientres o gestación por sustitución constituye, sin duda, la técnica que mayor debate
            genera. La posibilidad de que una mujer geste un niño para otra persona o pareja, mediando o no aporte
            genético propio, interpela los fundamentos mismos de la filiación, la maternidad y la identidad. Cuando
            estos procesos involucran elementos internacionales &mdash;como es frecuente, dado que las personas viajan a
            países donde la práctica está permitida&mdash;, las dificultades se multiplican exponencialmente.
          </p>
          <p>
            El presente trabajo se propone analizar los dilemas bioéticos que emergen de la intersección entre las
            TRHA, la filiación y el derecho internacional privado, con especial atención al marco jurídico argentino y
            a la perspectiva comparada.
          </p>

          <h2>Objetivos del Trabajo</h2>
          <ul>
            <li>
              Examinar el estado actual de la regulación de las técnicas de reproducción humana asistida y la
              subrogación de vientres en el derecho argentino y comparado.
            </li>
            <li>
              Identificar y analizar los principales dilemas bioéticos que plantean estas prácticas desde la perspectiva
              del derecho internacional privado.
            </li>
            <li>
              Proponer criterios de armonización para la resolución de conflictos de leyes y jurisdicción en materia de
              filiación derivada de TRHA con elementos internacionales.
            </li>
          </ul>

          <h2>Técnicas de Reproducción Humana Asistida</h2>

          <h3>Técnicas de baja complejidad</h3>
          <ul>
            <li>
              <strong>Inseminación artificial:</strong> Introducción de espermatozoides en el útero de la mujer,
              facilitando el encuentro con el óvulo. Puede realizarse con semen del cónyuge o de donante.
            </li>
            <li>
              <strong>Estimulación ovárica:</strong> Tratamiento hormonal para inducir la ovulación y aumentar las
              posibilidades de embarazo.
            </li>
            <li>
              <strong>Relaciones sexuales programadas:</strong> Monitoreo del ciclo ovulatorio para optimizar las
              posibilidades de concepción natural.
            </li>
          </ul>

          <h3>Técnicas de alta complejidad</h3>
          <ul>
            <li>
              <strong>Fertilización in vitro (FIV):</strong> Fecundación del óvulo por el espermatozoide fuera del
              cuerpo de la mujer, con posterior transferencia del embrión al útero.
            </li>
            <li>
              <strong>Inyección intracitoplasmática de espermatozoides (ICSI):</strong> Introducción directa de un
              espermatozoide en el citoplasma del óvulo.
            </li>
            <li>
              <strong>Donación de óvulos:</strong> Utilización de óvulos de una donante para su fecundación y
              transferencia.
            </li>
            <li>
              <strong>Gestación por sustitución:</strong> Una mujer gesta un embrión que puede o no tener su material
              genético, con la intención de entregar al niño a los comitentes.
            </li>
          </ul>

          <h2>Dilemas Bioéticos</h2>
          <ol>
            <li>
              <strong>Cosificación del cuerpo humano:</strong> La subrogación de vientres plantea el interrogante de si
              el cuerpo de la mujer gestante se convierte en un medio para un fin, vulnerando su dignidad.
            </li>
            <li>
              <strong>Comercialización de la gestación:</strong> La dimensión económica de la subrogación,
              especialmente en su variante comercial, genera preocupaciones sobre la explotación de mujeres en
              situación de vulnerabilidad.
            </li>
            <li>
              <strong>Derecho a la identidad del nacido:</strong> El niño nacido mediante TRHA tiene derecho a conocer
              su origen biológico, lo que entra en tensión con el anonimato de los donantes previsto en algunas
              legislaciones.
            </li>
            <li>
              <strong>Determinación de la filiación:</strong> ¿Quién es la madre: la mujer que aporta el óvulo, la que
              gesta o la que tiene la voluntad procreacional? La respuesta varía según el ordenamiento jurídico
              consultado.
            </li>
            <li>
              <strong>Turismo reproductivo:</strong> La disparidad normativa entre países genera desplazamientos
              internacionales de personas que buscan acceder a técnicas prohibidas o no reguladas en su país de origen.
            </li>
            <li>
              <strong>Estatuto jurídico del embrión:</strong> La cuestión de cuándo comienza la vida humana y qué
              protección jurídica merece el embrión in vitro permanece abierta y controvertida.
            </li>
          </ol>

          <h2>Marco Jurídico Argentino</h2>
          <p>
            El Código Civil y Comercial de la Nación (CCyC), vigente desde 2015, regula la filiación en sus artículos
            558 a 564. En materia de TRHA, el artículo 558 establece tres fuentes de filiación: por naturaleza, por
            TRHA y por adopción, otorgándoles iguales efectos jurídicos.
          </p>
          <p>
            El artículo 562 del CCyC consagra la <strong>voluntad procreacional</strong> como el elemento determinante
            de la filiación en los casos de TRHA: los nacidos por estas técnicas son hijos de quien dio a luz y del
            hombre o la mujer que también ha prestado su consentimiento previo, informado y libre, debidamente
            inscripto en el Registro del Estado Civil y Capacidad de las Personas, con independencia de quien haya
            aportado los gametos.
          </p>
          <p>
            Respecto del principio <em>mater semper certa est</em>, el CCyC mantiene la regla de que la maternidad se
            determina por el parto (art. 565). Esta disposición genera un conflicto directo con la subrogación de
            vientres, ya que bajo esta regla, la madre legal sería siempre la mujer gestante, con independencia de la
            voluntad procreacional de los comitentes.
          </p>
          <p>
            Es relevante señalar que el proyecto original del CCyC incluía una regulación específica de la gestación
            por sustitución (art. 562), pero fue eliminada durante el trámite parlamentario. Esta omisión legislativa
            genera un vacío que la jurisprudencia ha venido llenando caso por caso.
          </p>

          <h2>Perspectiva Internacional</h2>
          <p>
            A nivel internacional, la regulación de la subrogación de vientres presenta un panorama sumamente
            heterogéneo. Mientras algunos países la prohíben expresamente (Francia, Alemania, Italia, España), otros la
            admiten con restricciones (Reino Unido, Grecia, algunos estados de EE.UU.) y otros carecen de regulación
            específica (como Argentina). Esta disparidad normativa genera los denominados &#8220;conflictos
            móviles&#8221; o situaciones de &#8220;turismo reproductivo&#8221;, donde las personas se trasladan a
            jurisdicciones permisivas para acceder a la técnica.
          </p>
          <p>
            La Conferencia de La Haya de Derecho Internacional Privado ha venido trabajando en un proyecto de
            instrumento internacional sobre filiación y subrogación, reconociendo la necesidad de armonizar las
            soluciones en esta materia. El objetivo es garantizar la continuidad del estado filial del niño a través de
            las fronteras, evitando las situaciones de &#8220;niños sin padres&#8221; o &#8220;niños con múltiples
            padres&#8221; que pueden resultar de la aplicación de legislaciones contradictorias.
          </p>

          <h2>Conclusiones</h2>
          <p>
            Las técnicas de reproducción humana asistida y, en particular, la subrogación de vientres, plantean
            desafíos de enorme envergadura para el derecho de familia y el derecho internacional privado. La tensión
            entre la autonomía de la voluntad, la protección de los derechos del niño, la dignidad de la mujer
            gestante y los límites del orden público internacional exige respuestas normativas integrales, que superen
            los enfoques meramente prohibitivos o permisivos.
          </p>
          <p>
            El derecho argentino ha dado pasos significativos al reconocer la voluntad procreacional como fuente de
            filiación, pero aún adeuda una regulación específica de la gestación por sustitución que brinde seguridad
            jurídica a todas las partes involucradas. En el ámbito internacional, la labor de la Conferencia de La Haya
            constituye una esperanza para la construcción de un marco normativo que garantice la protección del interés
            superior del niño y la dignidad de todos los actores en estos procesos.
          </p>

          <div className="article-full-notice">
            <h3>Artículo Completo Disponible</h3>
            <p>
              Este es un resumen del artículo académico completo. Para acceder al texto íntegro con todas las
              referencias y notas al pie, descargue el PDF.
            </p>
            <TrackedLink
              href={PDF_URL}
              trackEvent="publication_click"
              trackSource="bioetica-reproduccion-full-notice"
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
            <span className="tag">Bioética</span>
            <span className="tag">Reproducción Asistida</span>
            <span className="tag">Filiación</span>
            <span className="tag">Derecho de Familia</span>
          </div>

          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="bioetica-reproduccion-footer"
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
        data-track-whatsapp="article_bioetica_reproduccion"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
