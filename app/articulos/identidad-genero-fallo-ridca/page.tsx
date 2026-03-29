import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

export const metadata: Metadata = {
  title:
    'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora - Dra. Andrea Esparza',
  description:
    'Análisis de una sentencia judicial sobre cambio de prenombre manteniendo el género asignado al nacer, abordando la autodeterminación y los vacíos normativos en materia de identidad de género.',
  keywords:
    'identidad de género, cambio de nombre, autodeterminación, Ley de Identidad de Género, derechos humanos, Judith Butler, performatividad de género, RIDCA',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://draandreaesparza.com/articulos/identidad-genero-fallo-ridca',
    languages: {
      'es-AR': 'https://draandreaesparza.com/articulos/identidad-genero-fallo-ridca',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://draandreaesparza.com/articulos/identidad-genero-fallo-ridca',
    title:
      'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora - Dra. Andrea Esparza',
    description:
      'Análisis de una sentencia judicial sobre cambio de prenombre manteniendo el género asignado al nacer, abordando la autodeterminación y los vacíos normativos en materia de identidad de género.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora - Dra. Andrea Esparza',
      },
    ],
    publishedTime: '2024-07-15',
    authors: ['Dra. Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora - Dra. Andrea Esparza',
    description:
      'Análisis de una sentencia judicial sobre cambio de prenombre manteniendo el género asignado al nacer, abordando la autodeterminación y los vacíos normativos en materia de identidad de género.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora',
  description:
    'Análisis de una sentencia judicial sobre cambio de prenombre manteniendo el género asignado al nacer, abordando la autodeterminación y los vacíos normativos en materia de identidad de género.',
  image: {
    '@type': 'ImageObject',
    url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2024-07-15',
  dateModified: '2024-07-15',
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
    '@id': 'https://draandreaesparza.com/articulos/identidad-genero-fallo-ridca',
  },
  keywords:
    'identidad de género, cambio de nombre, autodeterminación, Ley de Identidad de Género, derechos humanos, Judith Butler, performatividad de género, RIDCA',
  articleSection: 'Derechos Humanos',
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
      name: 'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora',
      item: 'https://draandreaesparza.com/articulos/identidad-genero-fallo-ridca',
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
                label: 'Análisis de un fallo sobre identidad de género. Una mirada esperanzadora',
              },
            ]}
          />

          <div className="article-category">Derechos Humanos</div>

          <h1>Análisis de un fallo sobre identidad de género. Una mirada esperanzadora</h1>

          <div className="article-meta">
            <div className="author-info">
              <span className="author-name">Por Dra. Maria Andrea Esparza</span>
            </div>
            <time dateTime="2024-07-15" className="publish-date">
              15 de Julio de 2024
            </time>
          </div>
        </header>

        <div className="article-content">
          <div className="article-source-note">
            <p>
              <strong>Publicado originalmente en:</strong>{' '}
              <TrackedLink
                href="https://aidca.org/analisis-de-un-fallo-sobre-identidad-de-genero-una-mirada-esperanzadora/"
                trackEvent="publication_click"
                trackSource="identidad-genero-fallo-ridca_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición N&ordm; 5
              </TrackedLink>
            </p>
          </div>

          <h2>Introducción</h2>
          <p>
            Este trabajo analiza una sentencia judicial reciente donde un adolescente de 15 años
            solicita cambiar su prenombre manteniendo su género femenino asignado al nacer.
          </p>
          <p>
            Se establece una distinción preliminar entre <strong>sexo</strong> (características
            anatómico-fisiológicas) y <strong>género</strong> (aspectos psicológicos, roles y
            conductuales). Se subraya que la construcción de género ha sido utilizada históricamente
            para reforzar sistemas de dominación que generan desigualdad y discriminación
            interseccional.
          </p>
          <p>
            Bajo el paradigma constitucional actual, la identidad de género es esencial y debe
            respetarse la autodeterminación personal, permitiendo que{' '}
            <em>&ldquo;las personas se apropien de los derechos humanos&rdquo;</em> conforme a su
            autopercepción.
          </p>

          <h2>El Caso</h2>

          <h3>Hechos</h3>
          <p>
            Un joven registrado como mujer al nacer solicitó ante el Registro Civil rectificar su
            partida de nacimiento para cambiar su prenombre, manteniendo la designación femenina. El
            Director del Registro rechazó la solicitud argumentando que la Ley de Identidad de
            Género 26.743 y el Decreto 476/21 no prevén este supuesto específico, ya que contemplan
            cambios de género o la categoría &ldquo;no binaria&rdquo;, pero no cambios de nombre
            sin modificación de género.
          </p>

          <h3>Decisión Judicial</h3>
          <p>
            El juez, escuchando al adolescente conforme a derechos reconocidos en la Convención
            sobre Derechos del Niño, constató que el joven se sentía identificado con lo masculino
            en su identidad de género, pero prefería mantener la designación femenina en su
            documentación hasta estar preparado para posibles modificaciones médicas futuras.
          </p>
          <p>
            Frente al vacío legal, el magistrado recurrió a obras filosóficas, particularmente a{' '}
            <strong>Judith Butler</strong> y su concepto de{' '}
            <em>&ldquo;performatividad de género&rdquo;</em>, así como a{' '}
            <strong>Anne Fausto Sterling</strong> y sus estudios sobre la complejidad biológica más
            allá del binarismo sexual.
          </p>
          <p>
            El juez realizó una interpretación armónica entre el Código Civil y Comercial y los
            tratados de derechos humanos, aplicando principios fundamentales:
          </p>
          <ul>
            <li>Interés superior del niño</li>
            <li>Capacidad progresiva</li>
            <li>Pro homine</li>
          </ul>
          <p>
            Argumentó que la autodeterminación está conectada con derechos de intimidad y autonomía
            personal. Reconoció que en la adolescencia existe un{' '}
            <em>&ldquo;complejo proceso de maduración personal&rdquo;</em> donde las dudas y la
            reflexión sobre identidad son naturales y deben ser contempladas.
          </p>

          <h2>Conclusión</h2>
          <p>
            El artículo reflexiona sobre cómo el ordenamiento jurídico presenta lagunas normativas
            respecto a realidades identitarias complejas. Sin embargo, destaca como positivo que
            existan magistrados con{' '}
            <em>&ldquo;amplitud mental y criterio&rdquo;</em> capaces de resolver estas cuestiones
            mediante interpretación flexible de la ley, garantizando el derecho fundamental de cada
            persona a <strong>SER</strong>.
          </p>

          <div className="article-source-note" style={{ marginTop: '2rem' }}>
            <p>
              <strong>Cita:</strong> Esparza, M. A. (2024). Análisis de un fallo sobre identidad de
              género. Una mirada esperanzadora.{' '}
              <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (5).
            </p>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derechos Humanos</span>
            <span className="tag">Identidad de Género</span>
            <span className="tag">Derecho Civil</span>
            <span className="tag">Jurisprudencia</span>
            <span className="tag">RIDCA</span>
          </div>

          <div className="author-card">
            <div className="author-details">
              <h3>Sobre la autora</h3>
              <p>
                <strong>Dra. Maria Andrea Esparza</strong>
              </p>
              <p>
                Especialista en derecho de familia, sucesiones y derecho internacional privado. Más
                de 25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional
                Privado.
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
