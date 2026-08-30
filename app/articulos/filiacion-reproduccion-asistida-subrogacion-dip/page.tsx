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
    </div>
  )
}
