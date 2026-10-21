import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/cuando-el-maltrato-ocurre-puertas-adentro'
const ORIGINAL = 'https://conexionconvos.com/bienestar-salud/cuando-el-maltrato-ocurre-puertas-adentro/'
const HEADLINE = "Conexión con Vos"
const DESCRIPTION = 'Andrea Esparza en Conexión con Vos: señales de maltrato infantil, dónde pedir ayuda y cómo proteger los derechos de niñas, niños y adolescentes.'

export const metadata: Metadata = {
  title: 'Maltrato infantil: cómo proteger a la infancia | Dra. Esparza',
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL, languages: { 'es-AR': CANONICAL } },
  openGraph: {
    type: 'article', url: CANONICAL, title: HEADLINE, description: DESCRIPTION,
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico', locale: 'es_AR',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
  },
  twitter: {
    card: 'summary_large_image', title: HEADLINE, description: DESCRIPTION,
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: HEADLINE, description: DESCRIPTION,
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  isBasedOn: { '@type': 'NewsArticle', url: ORIGINAL, headline: HEADLINE, publisher: { '@type': 'Organization', name: 'Conexión con Vos' } },
  contributor: { '@type': 'Person', name: 'Dra. María Andrea Esparza', url: 'https://draandreaesparza.com' },
  publisher: { '@type': 'Organization', name: 'Estudio Jurídico Dra. Andrea Esparza', url: 'https://draandreaesparza.com' },
  articleSection: 'Protección de la infancia', inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Cuando el maltrato ocurre puertas adentro', item: CANONICAL },
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
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Publicaciones', href: '/#publications' }, { label: 'Cuando el maltrato ocurre puertas adentro' }]} />
          <div className="article-category">Andrea Esparza en los medios · Protección de la infancia</div>
          <h1>{HEADLINE}</h1>
          <div className="article-meta"><span>Conexión con Vos · Con la participación de la Dra. Andrea Esparza</span></div>
        </header>
        <div className="article-content">
          <div className="article-source-note">
            <p><strong>Publicado originalmente en:</strong>{' '}
              <TrackedLink href={ORIGINAL} trackEvent="publication_click" trackSource="maltrato_infancia_original" target="_blank" rel="noopener noreferrer">Conexión con Vos — leer la nota original</TrackedLink>.
            </p>
            <p>Reproducimos la nota con la participación de la Dra. Andrea Esparza sobre la protección de niñas, niños y adolescentes frente al maltrato.</p>
          </div>
          <p><em>Violencia contra las infancias: cómo reconocer las señales y dónde pedir ayuda.</em></p>
<p>La violencia contra niñas, niños y adolescentes suele ocurrir dentro del hogar y permanecer oculta mucho tiempo. Por eso, reconocer las señales de alerta y saber cómo actuar puede ser clave para protegerlos. La Dra. Andrea Esparza recordó que en Argentina rige la <strong>Ley Nacional 26.061</strong>, y que en la provincia de Buenos Aires la <strong>Ley 13.298</strong> establece el sistema de promoción y protección integral de los derechos de la niñez.</p>
<h2>No hace falta ser familiar para denunciar</h2>
<p>Cualquier persona que conozca o sospeche una situación de maltrato puede pedir la intervención de los organismos correspondientes: un vecino, un docente, una institución educativa. La detección temprana es especialmente importante cuando el niño depende de un solo adulto y no tiene otras personas cercanas que adviertan lo que sucede. Ninguna circunstancia familiar, sea una separación, la ausencia de un progenitor o el poco contacto con alguno de ellos, justifica el maltrato.</p>
<h2>El maltrato no siempre deja marcas</h2>
<p>Además de los golpes, existen el maltrato verbal y emocional, el abandono, la falta de supervisión, la alimentación inadecuada, el descuido de necesidades básicas y la ausencia injustificada de escolaridad. Una sospecha no equivale a una comprobación, pero sí puede justificar una evaluación profesional.</p>
<h2>Dónde pedir ayuda</h2>
<p>Comisarías y fiscalías. Servicios Locales de Promoción y Protección de los Derechos de Niñas, Niños y Adolescentes. <strong>Línea 102</strong>: gratuita y confidencial, brinda escucha y orientación a chicos, familiares, docentes y vecinos. Ante un peligro inmediato, <strong>911</strong> o el servicio de emergencias local.</p>
<h2>Qué sucede después de la denuncia</h2>
<p>Los organismos evalúan la situación mediante entrevistas, visitas domiciliarias y evaluaciones profesionales para determinar si hay riesgo. Si es necesario, pueden adoptarse medidas excepcionales, como una medida de abrigo, siempre según el interés superior del niño. La separación del entorno familiar no es una respuesta automática ante cualquier denuncia.</p>
<h2>La posibilidad de reconstruir vínculos</h2>
<p>Durante el proceso se pueden evaluar el acompañamiento familiar, los tratamientos terapéuticos y la reconstrucción de los vínculos con los progenitores en condiciones seguras, o bien que otro familiar asuma el cuidado. Solo en situaciones excepcionales, cuando no se pueden revertir las causas ni existen alternativas familiares apropiadas, puede evaluarse la adoptabilidad.</p>
<h2>Una responsabilidad colectiva</h2>
<p>Proteger a las infancias no es tarea exclusiva de las familias: involucra a las escuelas, al Estado y a toda la comunidad. Escuchar a los chicos, atender las señales de alerta y comunicar las sospechas a los organismos adecuados puede prevenir situaciones más graves. <strong>Ante la duda, el silencio no debe ser un obstáculo para su protección.</strong></p>
        </div>
        <footer className="article-footer">
          <div className="article-service-links">
            <h3>Asesoramiento y temas relacionados</h3>
            <ul>
              <li><TrackedLink href="/servicios/violencia-familiar" trackEvent="cta_click" trackSource="maltrato_infancia_violencia_familiar">Violencia familiar</TrackedLink></li>
              <li><TrackedLink href="/servicios/medida-proteccion-excepcional" trackEvent="cta_click" trackSource="maltrato_infancia_proteccion">Medidas de protección excepcional</TrackedLink></li>
              <li><TrackedLink href="/articulos/interes-superior-nino-tratados-internacionales" trackEvent="publication_click" trackSource="maltrato_infancia_interes_superior">El interés superior del niño</TrackedLink></li>
              <li><TrackedLink href="/#contact" trackEvent="cta_click" trackSource="maltrato_infancia_contacto">Consultar con la Dra. Andrea Esparza</TrackedLink></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
