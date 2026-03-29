import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL =
  'https://draandreaesparza.com/articulos/filiacion-reproduccion-asistida-subrogacion-dip'

export const metadata: Metadata = {
  title:
    'Filiación, técnicas de reproducción humana asistida y subrogación de vientres a la luz del Derecho Internacional Privado - Dra. Andrea Esparza',
  description:
    'Análisis de los avances en biotecnología y su impacto en la regulación de la filiación dentro del derecho internacional privado, con especial enfoque en la gestación subrogada y los dilemas bioéticos asociados.',
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title:
      'Filiación, técnicas de reproducción humana asistida y subrogación de vientres a la luz del Derecho Internacional Privado - Dra. Andrea Esparza',
    description:
      'Análisis de los avances en biotecnología y su impacto en la regulación de la filiación dentro del derecho internacional privado, con especial enfoque en la gestación subrogada y los dilemas bioéticos asociados.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Filiación, técnicas de reproducción humana asistida y subrogación de vientres a la luz del Derecho Internacional Privado - Dra. Andrea Esparza',
      },
    ],
    publishedTime: '2022-12-20',
    authors: ['Dra. Andrea Esparza'],
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
    'Filiación, técnicas de reproducción humana asistida y subrogación de vientres a la luz del Derecho Internacional Privado',
  description:
    'Análisis de los avances en biotecnología y su impacto en la regulación de la filiación dentro del derecho internacional privado, con especial enfoque en la gestación subrogada y los dilemas bioéticos asociados.',
  image: {
    '@type': 'ImageObject',
    url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2022-12-20',
  dateModified: '2022-12-20',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    url: 'https://draandreaesparza.com',
    jobTitle: 'Abogada Especialista en Derecho de Familia',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    logo: {
      '@type': 'ImageObject',
      url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
      width: 1200,
      height: 630,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': CANONICAL,
  },
  keywords:
    'filiación, reproducción asistida, subrogación de vientres, gestación subrogada, derecho internacional privado, bioética, fertilización in vitro, maternidad subrogada, DIP, RIDCA',
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
      name: 'Filiación, técnicas de reproducción humana asistida y subrogación de vientres a la luz del Derecho Internacional Privado',
      item: CANONICAL,
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
              {
                label:
                  'Filiación, técnicas de reproducción humana asistida y subrogación de vientres a la luz del Derecho Internacional Privado',
              },
            ]}
          />

          <div className="article-category">Derecho Internacional Privado</div>

          <h1>
            Filiación, técnicas de reproducción humana asistida y subrogación de vientres a la luz del Derecho
            Internacional Privado
          </h1>

          <div className="article-meta">
            <div className="author-info">
              <span className="author-name">Por Dra. Maria Andrea Esparza</span>
            </div>
            <time dateTime="2022-12-20" className="publish-date">
              20 de Diciembre de 2022
            </time>
          </div>
        </header>

        <div className="article-content">
          <div className="article-source-note">
            <p>
              <strong>Publicado originalmente en:</strong>{' '}
              <TrackedLink
                href="https://aidca.org/ridca2-internacional1/"
                trackEvent="publication_click"
                trackSource="filiacion-subrogacion-dip-ridca-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición N&ordm; 2
              </TrackedLink>
            </p>
          </div>

          <h2>Introducción</h2>
          <p>
            Los avances científicos en biotecnología han complejizado significativamente la regulación de la filiación
            dentro del derecho internacional privado. Más allá de la filiación biológica y adoptiva tradicionales,
            emergen nuevas formas derivadas de técnicas de reproducción asistida, particularmente la gestación
            subrogada.
          </p>
          <p>
            El desafío actual no radica solo en unificar tratamientos para formas conocidas de filiación, sino en
            regular{' '}
            <em>
              &#8220;nuevas formas de filiación que se están obteniendo con las técnicas más modernas que nos
              proporciona la biotecnología.&#8221;
            </em>
          </p>

          <h2>Metodología de Análisis</h2>
          <p>El presente análisis se estructura en tres ejes principales:</p>
          <ul>
            <li>Perspectiva bioética</li>
            <li>Análisis jurídico de la subrogación</li>
            <li>Realidad argentina</li>
          </ul>

          <h2>Técnicas de Reproducción Humana Asistida</h2>
          <p>Las técnicas de reproducción humana asistida se clasifican según su complejidad:</p>

          <h3>Baja Complejidad</h3>
          <ul>
            <li>Coito programado</li>
            <li>Inseminación artificial</li>
            <li>Congelación de semen</li>
          </ul>

          <h3>Alta Complejidad</h3>
          <ul>
            <li>Fecundación in vitro</li>
            <li>Inyección intracitoplasmática</li>
            <li>Diagnóstico genético preimplantacional</li>
            <li>Vitrificación</li>
          </ul>
          <p>
            La gestación subrogada típicamente emplea fecundación in vitro o técnicas similares, evitando la
            inseminación artificial para prevenir que la gestante sea madre genética.
          </p>

          <h2>Perspectiva Bioética</h2>

          <h3>Postura Liberal</h3>
          <p>
            Fundamentada en la autonomía individual y libertad reproductiva. Propone que mientras la familia elegida no
            cause daño y el niño conozca su origen, las técnicas no deberían prohibirse.
          </p>

          <h3>Postura Conservadora</h3>
          <p>
            Argumenta los riesgos biológicos para la gestante y el niño, riesgos psicológicos, y preocupaciones sobre
            la mercantilización de la mujer. El Parlamento Europeo (2015) rechazó la práctica considerándola como algo
            que{' '}
            <em>&#8220;afecta la dignidad de la mujer y la convierte en mercancía.&#8221;</em>
          </p>

          <h2>Marco Jurídico Internacional</h2>
          <p>Las regulaciones varían significativamente entre países:</p>

          <h3>Países Permisivos</h3>
          <p>Vietnam, Ucrania, Rusia, Grecia, Portugal, Georgia, Armenia</p>

          <h3>Países Prohibitivos</h3>
          <p>España, Francia, Alemania, Italia, Suecia, Suiza, Noruega</p>

          <h3>Sin Regulación Específica</h3>
          <p>Argentina</p>

          <p>
            La Conferencia de La Haya (HCCH) ha alertado sobre amenazas a derechos humanos en acuerdos
            internacionales de gestación subrogada, incluyendo:
          </p>
          <ul>
            <li>Abandono de niños</li>
            <li>Riesgo de tráfico infantil</li>
            <li>Falta de consentimiento libre de las gestantes</li>
          </ul>

          <h2>Marcos Protectores</h2>
          <p>La Convención sobre los Derechos del Niño establece principios fundamentales:</p>
          <ul>
            <li>Derecho a conocer su identidad</li>
            <li>Inscripción inmediata post-nacimiento</li>
            <li>Derecho a nacionalidad</li>
            <li>
              <strong>Interés superior del niño</strong> como consideración primordial en todas las medidas que lo
              afecten
            </li>
          </ul>

          <h2>Situación en Argentina</h2>
          <p>
            Argentina aprobó la ley de fertilización humana asistida en 2013. El Anteproyecto de Código Civil de 2012
            incluía regulación de gestación por sustitución con requisitos específicos:
          </p>
          <ul>
            <li>Consentimiento informado</li>
            <li>Intervención judicial</li>
            <li>Prohibición de retribución</li>
            <li>Límite de dos gestaciones por mujer</li>
            <li>Requisito de hijo previo</li>
          </ul>
          <p>
            Sin embargo, la Comisión Bicameral eliminó esa regulación. El Código Civil y Comercial vigente (desde
            agosto 2015) reconoce filiación derivada de técnicas de reproducción asistida pero{' '}
            <strong>no regula específicamente la subrogación</strong>.
          </p>

          <h2>Conclusiones</h2>
          <p>
            El vacío normativo en materia de gestación subrogada en Argentina genera incertidumbre jurídica y
            potenciales vulneraciones de derechos. Se requiere una regulación integral que contemple tanto los derechos
            de los comitentes como los de las gestantes y, primordialmente, el interés superior de los niños nacidos
            mediante estas técnicas.
          </p>

          <div className="article-source-note" style={{ marginTop: '2rem' }}>
            <p>
              <strong>Cita:</strong> Esparza, M. A. (2022). Filiación, técnicas de reproducción humana asistida y
              subrogación de vientres a la luz del Derecho Internacional Privado.{' '}
              <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (2).
            </p>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional Privado</span>
            <span className="tag">Bioética</span>
            <span className="tag">Filiación</span>
            <span className="tag">Reproducción Asistida</span>
            <span className="tag">Gestación Subrogada</span>
          </div>

          <div className="author-card">
            <div className="author-details">
              <h3>Sobre la autora</h3>
              <p>
                <strong>Dra. Maria Andrea Esparza</strong>
              </p>
              <p>
                Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de 25 años de
                experiencia. Directora Adjunta del Instituto de Derecho Internacional Privado.
              </p>
              <a href="/#contact" className="contact-author-btn">
                Contactar
              </a>
            </div>
          </div>

          <div className="more-articles">
            <h3>Más publicaciones</h3>
            <a href="/#publications" className="view-all-btn">
              Ver todas las publicaciones &rarr;
            </a>
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
        data-track-whatsapp="article_filiacion_subrogacion_dip"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
