import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/proteccion-internacional-adultos-mayores'

export const metadata: Metadata = {
  title: 'Protección internacional de los adultos mayores - Dra. Andrea Esparza',
  description: 'Análisis de los marcos convencionales interamericanos y europeos para la protección de adultos mayores, incluyendo la Convención Interamericana y el Convenio de La Haya.',
  keywords: 'adultos mayores, protección internacional, derechos humanos, Convención Interamericana, Convenio de La Haya, derecho internacional privado, personas mayores, RIDCA',
  robots: 'index, follow',
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Protección internacional de los adultos mayores - Dra. Andrea Esparza',
    description: 'Análisis de los marcos convencionales interamericanos y europeos para la protección de adultos mayores, incluyendo la Convención Interamericana y el Convenio de La Haya.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Protección internacional de los adultos mayores - Dra. Andrea Esparza',
      },
    ],
    publishedTime: '2023-12-20',
    authors: ['Dra. Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protección internacional de los adultos mayores - Dra. Andrea Esparza',
    description: 'Análisis de los marcos convencionales interamericanos y europeos para la protección de adultos mayores, incluyendo la Convención Interamericana y el Convenio de La Haya.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Protección internacional de los adultos mayores',
  description: 'Análisis de los marcos convencionales interamericanos y europeos para la protección de adultos mayores, incluyendo la Convención Interamericana y el Convenio de La Haya.',
  image: {
    '@type': 'ImageObject',
    url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2023-12-20',
  dateModified: '2023-12-20',
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
  keywords: 'adultos mayores, protección internacional, derechos humanos, Convención Interamericana, Convenio de La Haya, derecho internacional privado, personas mayores, RIDCA',
  articleSection: 'Derecho Internacional',
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
      name: 'Protección internacional de los adultos mayores',
      item: CANONICAL,
    },
  ],
}

export default function Page() {
  return (
    <div className="article-page">
      <ArticleNav />

      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="article-container">
        <header className="article-header">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Publicaciones', href: '/#publications' },
              { label: 'Protección internacional de los adultos mayores' },
            ]}
          />

          <div className="article-category">Derecho Internacional</div>

          <h1>Protección internacional de los adultos mayores</h1>

          <div className="article-meta">
            <div className="author-info">
              <span className="author-name">Por Dra. Maria Andrea Esparza</span>
            </div>
            <time dateTime="2023-12-20" className="publish-date">20 de Diciembre de 2023</time>
          </div>
        </header>

        <div className="article-content">
          <div className="article-source-note">
            <p>
              <strong>Publicado originalmente en:</strong>{' '}
              <TrackedLink
                href="https://aidca.org/ridca4-internacional2-maria-andrea-esparza-proteccion-internacional-de-los-adultos-mayores/"
                trackEvent="publication_click"
                trackSource="adultos_mayores_ridca_source_note"
                target="_blank"
                rel="noopener noreferrer"
              >
                RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición Nº 4
              </TrackedLink>
            </p>
          </div>

          <h2>Introducción</h2>
          <p>
            Este trabajo examina las protecciones internacionales para las poblaciones de adultos mayores, abordándolas como un grupo demográfico vulnerable junto con los niños. El análisis presenta dos marcos convencionales clave: uno de las Américas enfocado en derechos humanos, y otro de Europa que aborda el derecho internacional privado.
          </p>

          <h2>Convención Interamericana sobre los Derechos Humanos de las Personas Mayores</h2>
          <p>
            Adoptada el 15 de junio de 2015 y ratificada por Argentina el 23 de octubre de 2017 (Ley 27360), este instrumento obtuvo jerarquía constitucional en 2022.
          </p>

          <h3>Objetivo Central</h3>
          <blockquote>
            &ldquo;Promover, proteger y asegurar el reconocimiento y el pleno goce y ejercicio, en condiciones de igualdad, de todos los derechos humanos y libertades fundamentales de la persona mayor, a fin de contribuir a su plena inclusión, integración y participación en la sociedad.&rdquo;
          </blockquote>

          <h3>Protecciones Clave</h3>
          <ul>
            <li>No discriminación por edad</li>
            <li>Derecho a la dignidad, independencia y autonomía</li>
            <li>Libertad de violencia y trato cruel</li>
            <li>Consentimiento informado en atención médica</li>
            <li>Sistemas de cuidado integral</li>
            <li>Derechos al trabajo, educación, propiedad, participación política y protección ambiental</li>
          </ul>

          <h3>Terminología Protegida</h3>
          <ul>
            <li><strong>&ldquo;Persona mayor&rdquo;:</strong> individuos de 60+ años (o menor edad si la ley nacional lo especifica, máximo 65)</li>
            <li><strong>&ldquo;Edadismo&rdquo;:</strong> distinciones basadas en la edad que afectan derechos fundamentales</li>
            <li><strong>&ldquo;Negligencia&rdquo;:</strong> falta involuntaria de proporcionar cuidados necesarios</li>
            <li><strong>&ldquo;Maltrato&rdquo;:</strong> acciones deliberadas que causan daño físico, psicológico o moral</li>
          </ul>

          <h2>El Convenio de La Haya sobre Protección Internacional de Adultos</h2>
          <p>
            Este marco europeo del año 2000, aunque aborda adultos en general (18+), proporciona modelos cruciales para la futura legislación de protección de personas mayores.
          </p>

          <h3>Marco de Tres Partes</h3>
          <ol>
            <li><strong>Jurisdicción:</strong> Las autoridades de la residencia habitual del adulto determinan la competencia</li>
            <li><strong>Ley Aplicable:</strong> Típicamente se aplica la ley del foro; excepcionalmente, la ley de otro Estado si está más estrechamente conectada</li>
            <li><strong>Reconocimiento:</strong> Facilita la ejecución transfronteriza de medidas protectoras</li>
          </ol>

          <h3>Medidas de Protección</h3>
          <ul>
            <li>Determinaciones de capacidad y establecimiento de tutela</li>
            <li>Gestión y autorización de disposición de bienes</li>
            <li>Decisiones de internación</li>
            <li>Arreglos de representación</li>
          </ul>
          <p>
            La jurisdicción se transfiere si el adulto se reubica entre Estados signatarios.
          </p>

          <h2>Conclusiones</h2>
          <p>
            Sigue siendo necesario un desarrollo legislativo significativo tanto a nivel nacional como de derecho internacional privado. Los patrones migratorios contemporáneos crean conflictos jurisdiccionales que requieren respuestas internacionales coordinadas, particularmente respecto a determinaciones de capacidad y protección de bienes a través de fronteras.
          </p>
          <p>
            Las lagunas actuales requieren consultar múltiples fuentes de tratados y legislación estatal individual. Se aboga por expandir las protecciones comparables a las logradas para los niños, requiriendo una conciencia sostenida de la importancia de las poblaciones de adultos mayores en los marcos legales.
          </p>

          <div className="article-source-note" style={{ marginTop: '2rem' }}>
            <p>
              <strong>Cita:</strong> Esparza, M. A. (2023). Protección internacional de los adultos mayores. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (4).
            </p>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional</span>
            <span className="tag">Derechos Humanos</span>
            <span className="tag">Adultos Mayores</span>
            <span className="tag">Convenciones Internacionales</span>
            <span className="tag">RIDCA</span>
          </div>

          <div className="author-card">
            <div className="author-details">
              <h3>Sobre la autora</h3>
              <p><strong>Dra. Maria Andrea Esparza</strong></p>
              <p>Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de 25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional Privado.</p>
              <a href="/#contact" className="contact-author-btn">Contactar</a>
            </div>
          </div>

          <div className="more-articles">
            <h3>Más publicaciones</h3>
            <a href="/#publications" className="view-all-btn">Ver todas las publicaciones &rarr;</a>
          </div>

          <div className="article-service-links">
            <h3>Servicios legales relacionados</h3>
            <p>Si este tema se relaciona con su caso, puede solicitar asesoramiento en:</p>
            <ul>
              <li><a href="/servicios/derecho-familia">Derecho de Familia</a></li>
              <li><a href="/servicios/alimentos">Juicio de Alimentos</a></li>
              <li><a href="/servicios/divorcios-buenos-aires">Divorcios en Buenos Aires</a></li>
              <li><a href="/servicios/sucesiones">Sucesiones y Herencias</a></li>
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
        data-track-whatsapp="adultos_mayores_float"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
