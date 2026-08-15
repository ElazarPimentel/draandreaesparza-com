import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/interes-superior-nino-tratados-internacionales'
const PDF_URL = '/articulos/interes-superior-del-ni%C3%B1o-vs-cumplimiento-de-tratados-internacionales-revista-panama.pdf'

export const metadata: Metadata = {
  title: '¿Interés Superior del Niño o Cumplir el Tratado? Sustracción de Menores | Dra. Esparza',
  description: '¿Qué prevalece: el interés superior del niño o la restitución que ordena el Convenio de La Haya? Análisis del dilema en sustracción internacional de menores, con jurisprudencia. Publicado en Revista Panamá.',
  keywords: 'interés superior del niño, tratados internacionales, Convenio de La Haya, sustracción de menores, derecho internacional privado, Convención sobre los Derechos del Niño, Panamá',
  robots: 'index, follow',
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Interés Superior del Niño o Cumplir el Tratado? Sustracción de Menores | Dra. Esparza',
    description: 'Análisis del conflicto entre el principio del interés superior del niño y las obligaciones derivadas de tratados internacionales, especialmente en casos de sustracción internacional de menores.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2015-03-01',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Interés Superior del Niño o Cumplir el Tratado? Sustracción de Menores | Dra. Esparza',
    description: 'Análisis del conflicto entre el principio del interés superior del niño y las obligaciones derivadas de tratados internacionales, especialmente en casos de sustracción internacional de menores.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Interés Superior del Niño vs. Cumplimiento de Tratados Internacionales',
  description: '¿Qué prevalece: el interés superior del niño o la restitución que ordena el Convenio de La Haya? Análisis del dilema en sustracción internacional de menores, con jurisprudencia. Publicado en Revista Panamá.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2015-03-01',
  dateModified: '2015-03-01',
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
  keywords: ['Derecho Internacional Privado', 'Derechos del Niño', 'Tratados Internacionales', 'Sustracción de Menores'],
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Interés Superior del Niño vs. Cumplimiento de Tratados Internacionales' },
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
              { label: 'Interés Superior del Niño vs. Tratados Internacionales' },
            ]}
          />

          <div className="article-category">Derecho Internacional Privado</div>

          <h1>¿Interés Superior del Niño o Cumplimiento del Tratado? El Dilema en la Sustracción Internacional de Menores</h1>

          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Marzo de 2015</span>
          </div>

          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="interes_superior_header_download"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </TrackedLink>
        </header>

        <div className="article-content">
          <p className="article-source"><em>Publicado en Revista Panamá, 2015</em></p>

          <h2>Introducción</h2>
          <p>El principio del interés superior del niño constituye uno de los pilares fundamentales del derecho internacional de los derechos humanos. Consagrado en la Convención sobre los Derechos del Niño de 1989, este principio debe ser consideración primordial en todas las decisiones que afecten a niños, niñas y adolescentes.</p>
          <p>Sin embargo, cuando este principio se encuentra con las obligaciones que imponen otros tratados internacionales, particularmente el Convenio de La Haya de 1980 sobre Sustracción Internacional de Menores, pueden surgir tensiones aparentes que requieren un análisis cuidadoso.</p>

          <h2>El Principio del Interés Superior del Niño</h2>
          <p>La Convención sobre los Derechos del Niño, en su artículo 3.1, establece:</p>
          <blockquote>
            <p>&ldquo;En todas las medidas concernientes a los niños que tomen las instituciones públicas o privadas de bienestar social, los tribunales, las autoridades administrativas o los órganos legislativos, una consideración primordial a que se atenderá será el interés superior del niño.&rdquo;</p>
          </blockquote>

          <h3>Características del Principio</h3>
          <ul>
            <li><strong>Es un derecho sustantivo:</strong> El niño tiene derecho a que su interés superior sea evaluado y considerado prioritariamente</li>
            <li><strong>Es un principio interpretativo:</strong> Cuando una norma admite más de una interpretación, debe elegirse la que mejor satisfaga el interés superior del niño</li>
            <li><strong>Es una norma de procedimiento:</strong> Siempre que se deba tomar una decisión que afecte a un niño, el proceso debe incluir una evaluación de su interés superior</li>
          </ul>

          <h2>El Convenio de La Haya de 1980</h2>
          <p>El Convenio sobre los Aspectos Civiles de la Sustracción Internacional de Menores tiene como objetivo:</p>
          <ul>
            <li>Garantizar el retorno inmediato de los niños trasladados o retenidos ilícitamente</li>
            <li>Velar por que los derechos de custodia y visita vigentes en un Estado parte se respeten en los demás</li>
          </ul>

          <h3>Principios del Convenio</h3>
          <p>El Convenio se basa en la premisa de que, en general, el interés superior del niño se satisface mejor:</p>
          <ul>
            <li>Manteniendo el <em>statu quo</em> existente antes de la sustracción</li>
            <li>Retornando al niño al país de su residencia habitual</li>
            <li>Permitiendo que los tribunales de ese país decidan sobre la custodia</li>
            <li>Desalentando las sustracciones mediante el retorno rápido</li>
          </ul>

          <h2>El Aparente Conflicto</h2>
          <p>En casos concretos de sustracción internacional, puede parecer que existe un conflicto entre:</p>
          <ul>
            <li>La obligación de retornar al niño conforme al Convenio de La Haya</li>
            <li>La evaluación del interés superior del niño en cada caso particular</li>
          </ul>

          <h3>Situaciones Problemáticas</h3>
          <p>El conflicto se hace más evidente cuando:</p>
          <ul>
            <li>El niño se ha integrado significativamente en su nuevo entorno</li>
            <li>Existe riesgo de daño físico o psicológico en caso de retorno</li>
            <li>El niño, con suficiente madurez, se opone al retorno</li>
            <li>Han transcurrido períodos prolongados desde la sustracción</li>
          </ul>

          <h2>Armonización de Principios</h2>
          <p>Contrariamente a la percepción inicial de conflicto, ambos instrumentos internacionales pueden y deben armonizarse:</p>

          <h3>1. Las Excepciones del Convenio</h3>
          <p>El propio Convenio de La Haya reconoce situaciones donde el retorno puede no ser apropiado:</p>
          <ul>
            <li><strong>Artículo 13.a:</strong> Cuando existe grave riesgo de daño físico o psíquico o situación intolerable</li>
            <li><strong>Artículo 13.b:</strong> Cuando el niño se opone al retorno y ha alcanzado edad y madurez suficientes</li>
            <li><strong>Artículo 12:</strong> Cuando el niño se ha integrado en su nuevo entorno (más de un año)</li>
          </ul>

          <h3>2. Interpretación Coordinada</h3>
          <p>El interés superior del niño debe ser considerado en:</p>
          <ul>
            <li>La evaluación de las excepciones al retorno</li>
            <li>La determinación de las medidas provisionales</li>
            <li>Las condiciones bajo las cuales se ordena el retorno</li>
          </ul>

          <h2>Jurisprudencia Internacional</h2>
          <p>La Corte Europea de Derechos Humanos y tribunales de diversos países han establecido que:</p>
          <ul>
            <li>El retorno rápido es <em>generalmente</em> conforme al interés superior del niño</li>
            <li>Cada caso requiere una evaluación individual</li>
            <li>Las excepciones deben interpretarse considerando el interés superior</li>
            <li>Los procedimientos deben garantizar que se escuche al niño</li>
          </ul>

          <h2>El Caso Argentino y Latinoamericano</h2>
          <p>En Argentina y otros países de la región, los tribunales han enfrentado este desafío desarrollando criterios como:</p>
          <ul>
            <li>Audiencias personales con los niños cuando su edad lo permite</li>
            <li>Evaluaciones psicológicas cuando hay alegación de riesgo</li>
            <li>Medidas de protección previas al retorno</li>
            <li>Cooperación entre autoridades de ambos países</li>
          </ul>

          <h2>Conclusiones</h2>
          <ol>
            <li>No existe un verdadero conflicto entre el Convenio de La Haya y el principio del interés superior del niño</li>
            <li>El Convenio incorpora el interés superior como premisa general y en sus excepciones</li>
            <li>La clave está en una aplicación que considere las particularidades de cada caso</li>
            <li>El procedimiento debe garantizar que se escuche al niño y se evalúen sus circunstancias específicas</li>
            <li>La cooperación internacional y el diálogo entre autoridades son fundamentales</li>
          </ol>
          <p>La tensión aparente entre cumplir con obligaciones de tratados y proteger el interés superior del niño se resuelve mediante una interpretación armónica que reconozca que ambos instrumentos persiguen el mismo objetivo: la protección efectiva de los derechos de niños, niñas y adolescentes.</p>

          <div className="article-full-notice">
            <h3>Artículo Completo Disponible</h3>
            <p>El artículo completo, publicado en Revista Panamá, incluye:</p>
            <ul>
              <li>Análisis de casos jurisprudenciales concretos de diversos países</li>
              <li>Estudio comparado de la aplicación del Convenio en Latinoamérica</li>
              <li>Comentarios de doctrina especializada internacional</li>
              <li>Propuestas para mejorar la aplicación coordinada de ambos instrumentos</li>
              <li>Bibliografía especializada y referencias completas</li>
            </ul>
            <p><strong>Extensión:</strong> 8 páginas &middot; <strong>Formato:</strong> PDF &middot; <strong>Publicado en:</strong> Revista Panamá, 2015</p>
            <TrackedLink
              href={PDF_URL}
              trackEvent="publication_click"
              trackSource="interes_superior_full_notice_download"
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
            <span className="tag">Derechos del Niño</span>
            <span className="tag">Tratados Internacionales</span>
            <span className="tag">Sustracción de Menores</span>
          </div>

          <TrackedLink
            href={PDF_URL}
            trackEvent="publication_click"
            trackSource="interes_superior_footer_download"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </TrackedLink>

          <div className="author-card">
            <h3>Sobre la autora</h3>
            <p className="author-name">Dra. Maria Andrea Esparza</p>
            <p className="author-bio">Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de 25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional Privado.</p>
            <a href="/#contact" className="contact-btn">Contactar</a>
          </div>

          <div className="more-articles">
            <h3>Más publicaciones</h3>
            <a href="/#publications">Ver todas las publicaciones</a>
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
        data-track-whatsapp="interes_superior_nino_float"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
