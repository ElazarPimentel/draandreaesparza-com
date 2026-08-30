import { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/insolvencia-transfronteriza-derecho-europeo'

export const metadata: Metadata = {
  title: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea - Dra. Andrea Esparza',
  description: 'Análisis de la insolvencia transfronteriza en el marco del derecho español y europeo, con especial énfasis en la interpretación del TJUE en el caso Interedil.',
  keywords: 'insolvencia transfronteriza, derecho concursal, Reglamento UE 848/2014, TJUE, caso Interedil, centro de intereses principales, derecho español, RIDCA',
  robots: 'index, follow',
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea - Dra. Andrea Esparza',
    description: 'Análisis de la insolvencia transfronteriza en el marco del derecho español y europeo, con especial énfasis en la interpretación del TJUE en el caso Interedil.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea - Dra. Andrea Esparza',
      },
    ],
    publishedTime: '2025-12-01',
    authors: ['Dra. Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea - Dra. Andrea Esparza',
    description: 'Análisis de la insolvencia transfronteriza en el marco del derecho español y europeo, con especial énfasis en la interpretación del TJUE en el caso Interedil.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea',
  description: 'Análisis de la insolvencia transfronteriza en el marco del derecho español y europeo, con especial énfasis en la interpretación del TJUE en el caso Interedil.',
  image: {
    '@type': 'ImageObject',
    url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
    width: 1200,
    height: 630,
  },
  datePublished: '2025-12-01',
  dateModified: '2025-12-01',
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
  keywords: 'insolvencia transfronteriza, derecho concursal, Reglamento UE 848/2014, TJUE, caso Interedil, centro de intereses principales, derecho español, RIDCA',
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
      name: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea',
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
              { label: 'Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea' },
            ]}
          />

          <div className="article-category">Derecho Internacional Privado</div>

          <h1>Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea</h1>

          <div className="article-meta">
            <div className="author-info">
              <span className="author-name">Por Dra. Maria Andrea Esparza</span>
            </div>
            <time dateTime="2025-12-01" className="publish-date">Diciembre de 2025</time>
          </div>
        </header>

        <div className="article-content">
          <div className="article-source-note">
            <p>
              <strong>Publicado originalmente en:</strong>{' '}
              <TrackedLink
                href="https://aidca.org/ridca8-internacional-esparza-insolvencia-transfronteriza-a-la-luz-del-derecho-espanol-y-del-derecho-de-la-comunidad-europea-e-interpretacion-del-mismo-por-el-tsjue-en-el-caso-interedil-c-fallimento-i/"
                trackEvent="publication_click"
                trackSource="insolvencia_ridca_source_note"
                target="_blank"
                rel="noopener noreferrer"
              >
                RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición Nº 8
              </TrackedLink>
            </p>
          </div>

          <h2>Introducción</h2>
          <p>
            Este trabajo examina la insolvencia transfronteriza a través de los marcos legales español y de la Unión Europea, con énfasis especial en la interpretación del Tribunal de Justicia de la Unión Europea (TJUE) en el caso Interedil.
          </p>

          <h2>Competencia Jurisdiccional</h2>
          <p>
            La ley de insolvencia española designa como competente al juez del territorio donde el deudor mantiene su <strong>centro principal de intereses</strong>, alineándose con los requisitos del Reglamento UE 848/2014. El reglamento define autónomamente este centro como <em>&ldquo;el lugar donde el deudor ejerce la administración de sus intereses de manera habitual y reconocible&rdquo;</em>.
          </p>

          <h2>Sistemas Universal vs. Territorial</h2>
          <p>
            Los procedimientos de insolvencia españoles adoptan un enfoque de <strong>alcance universal</strong>, extendiendo sus efectos a todo el territorio español e internacionalmente, creando:
          </p>
          <ul>
            <li>Un único procedimiento</li>
            <li>Un solo juez</li>
            <li>Una ley aplicable</li>
            <li>Gestión unificada de activos</li>
          </ul>
          <p>
            Esto contrasta con el <strong>sistema territorial</strong> de Argentina bajo la Ley 24.522.
          </p>

          <h2>Reconocimiento en la UE</h2>
          <p>
            El Reglamento UE 848/2014 establece reglas unificadas para:
          </p>
          <ul>
            <li>Competencia judicial</li>
            <li>Ley aplicable</li>
            <li>Reconocimiento de resoluciones</li>
          </ul>
          <p>
            Estas reglas se aplican en todos los Estados Miembros (excepto Dinamarca), asegurando que los procedimientos de insolvencia españoles reciban efecto de reconocimiento.
          </p>

          <h2>Interpretación del TJUE en el Caso Interedil</h2>
          <p>
            El Tribunal de Justicia aclaró que el <strong>&ldquo;centro principal de intereses&rdquo;</strong> requiere identificar la ubicación de la administración central a través de datos objetivos, verificables por terceros, estableciendo que esta presunción--que favorece la ubicación del domicilio social--puede ser refutada mediante evidencia de actividad comercial real en jurisdicciones alternativas.
          </p>
          <p>
            Los criterios clave para determinar el centro de intereses incluyen:
          </p>
          <ul>
            <li>Lugar donde se toman las decisiones de gestión</li>
            <li>Ubicación de la sede administrativa real</li>
            <li>Lugar reconocible por terceros (acreedores, clientes)</li>
            <li>Evidencia objetiva y verificable</li>
          </ul>

          <h2>Conclusiones</h2>
          <p>
            La armonización del derecho concursal europeo ha avanzado significativamente, pero persisten desafíos en casos complejos de grupos empresariales multinacionales. La jurisprudencia del TJUE proporciona criterios interpretativos valiosos para determinar la jurisdicción competente en procedimientos de insolvencia transfronteriza.
          </p>

          <div className="article-source-note" style={{ marginTop: '2rem' }}>
            <p>
              <strong>Cita:</strong> Esparza, M. A. (2025). Insolvencia transfronteriza a la luz del derecho español y del derecho de la comunidad europea e interpretación del mismo por el TSJUE en el caso INTEREDIL. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (8).
            </p>
          </div>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho Internacional Privado</span>
            <span className="tag">Derecho Concursal</span>
            <span className="tag">Unión Europea</span>
            <span className="tag">Jurisprudencia TJUE</span>
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
    </div>
  )
}
