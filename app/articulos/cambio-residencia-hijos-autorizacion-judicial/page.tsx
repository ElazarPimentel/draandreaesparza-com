import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/cambio-residencia-hijos-autorizacion-judicial'

export const metadata: Metadata = {
  title: 'Mudanza con Hijos: Autorización Judicial de Traslado en Argentina | Dra. Esparza',
  description:
    '¿Querés mudarte con tu hijo a otra ciudad o al exterior y el otro progenitor no está de acuerdo? Cómo solicitar la autorización judicial de traslado. Por Dra. Andrea Esparza.',
  keywords:
    'cambio de residencia de hijos, autorización judicial traslado, mudanza con hijos, traslado al exterior con menores, autorización viaje hijos, centro de vida, abogada familia internacional',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Mudanza con Hijos: Autorización Judicial de Traslado en Argentina | Dra. Esparza',
    description:
      '¿Querés mudarte con tu hijo a otra ciudad o al exterior y el otro progenitor no está de acuerdo? Cómo solicitar la autorización judicial de traslado.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-04-26',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudanza con Hijos: Autorización Judicial de Traslado | Dra. Esparza',
    description:
      'Cómo solicitar la autorización judicial para mudarte con tu hijo a otra ciudad o al exterior cuando el otro progenitor se opone.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mudanza con Hijos: Autorización Judicial de Traslado en Argentina',
  description:
    'Guía sobre el cambio de residencia de niños cuando hay desacuerdo entre los progenitores: marco legal, procedimiento y casos internacionales.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
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
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  keywords: ['Autorización Judicial', 'Mudanza con Hijos', 'Centro de Vida', 'Derecho de Familia'],
  articleSection: 'Derecho de Familia',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Mudanza con Hijos: Autorización Judicial' },
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
              { label: 'Mudanza con Hijos: Autorización Judicial' },
            ]}
          />
          <div className="article-category">Derecho de Familia</div>
          <h1>Cambio de Residencia de Niños: Lo que Tenés que Saber</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Abril de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>¿Querés mudarte con tu hijo a otra ciudad o al exterior?</h2>
          <p>
            Después de una separación o divorcio, una de las decisiones más complejas es{' '}
            <strong>cambiar la residencia de los hijos</strong>. Una nueva oportunidad laboral,
            volver al lugar de origen, una mejor calidad de vida o reagruparse con la familia
            extendida son razones legítimas para mudarse, pero el traslado de un niño no es una
            decisión que un solo progenitor pueda tomar libremente.
          </p>
          <p>
            <strong>Si el otro progenitor no está de acuerdo</strong>, mudarse con el niño sin
            autorización puede configurar sustracción de menores y exponer al progenitor que se
            traslada a graves consecuencias civiles y penales.
          </p>

          <h2>Marco legal en Argentina</h2>
          <p>
            El cambio de residencia es una decisión que excede al cuidado personal cotidiano:
            integra el ejercicio de la <strong>responsabilidad parental</strong> (la figura que
            antes se llamaba &ldquo;patria potestad&rdquo;).{' '}
            <TrackedLink
              href="/articulos/responsabilidad-parental-patria-potestad-tenencia"
              trackEvent="cta_click"
              trackSource="cambio_residencia_to_terminologia_hub"
            >
              Más sobre responsabilidad parental →
            </TrackedLink>
          </p>
          <p>
            El Código Civil y Comercial regula esta situación en los artículos:
          </p>
          <ul>
            <li>
              <strong>Art. 645:</strong> exige el consentimiento de ambos progenitores para
              determinadas decisiones, entre ellas el traslado del hijo al exterior y los cambios
              de residencia que impliquen alterar significativamente su centro de vida
            </li>
            <li>
              <strong>Art. 653:</strong> al regular el cuidado personal unilateral, considera la
              proximidad geográfica como uno de los criterios relevantes
            </li>
            <li>
              <strong>Art. 716:</strong> establece la competencia del juez del centro de vida del
              niño para todas las cuestiones de responsabilidad parental
            </li>
            <li>
              <strong>Ley 26.061:</strong> consagra el principio del interés superior del niño y la
              protección de su centro de vida
            </li>
          </ul>

          <h2>¿Qué es el centro de vida?</h2>
          <p>
            El <strong>centro de vida</strong> es el lugar donde el niño ha desarrollado su rutina
            cotidiana en condiciones legítimas: dónde vive, va a la escuela, tiene sus amistades,
            su familia extendida, sus actividades. La ley lo protege porque la estabilidad es
            esencial para su desarrollo. Cualquier cambio significativo del centro de vida exige
            evaluación judicial cuando hay desacuerdo entre los progenitores.
          </p>

          <h2>Procedimiento: la autorización judicial de traslado</h2>
          <p>
            Si el otro progenitor se opone, el juez de familia debe resolver. El procedimiento típico:
          </p>
          <ol>
            <li>
              <strong>Demanda de autorización judicial de traslado:</strong> se presenta ante el
              juzgado de familia del centro de vida actual del niño, exponiendo las razones del
              traslado y la propuesta de régimen de comunicación con el progenitor que queda
            </li>
            <li>
              <strong>Traslado al otro progenitor:</strong> tiene un plazo para contestar y
              proponer su contraoferta o pedir el rechazo
            </li>
            <li>
              <strong>Escucha del niño:</strong> el juez lo escucha en función de su edad y madurez
              (Art. 707 CCyCN)
            </li>
            <li>
              <strong>Informes técnicos:</strong> el equipo interdisciplinario del juzgado evalúa
              el impacto del traslado en el niño
            </li>
            <li>
              <strong>Sentencia:</strong> el juez resuelve en función del interés superior del
              niño, sopesando los beneficios del traslado contra el costo de alterar el vínculo con
              el otro progenitor
            </li>
          </ol>

          <h2>Criterios que el juez evalúa</h2>
          <ul>
            <li>Motivos reales del traslado (laborales, familiares, económicos)</li>
            <li>Mejora o deterioro de la calidad de vida del niño</li>
            <li>Edad y opinión del niño</li>
            <li>Régimen de comunicación propuesto y su viabilidad práctica</li>
            <li>Buena fe del progenitor que solicita el traslado</li>
            <li>Vínculo del niño con el otro progenitor y la familia extendida</li>
          </ul>

          <h2>Casos internacionales urgentes</h2>
          <p>
            Cuando el traslado es <strong>al exterior</strong>, la complejidad se multiplica.
            Argentina es parte del Convenio de La Haya de 1980 sobre sustracción internacional de
            menores: trasladar al niño sin autorización del otro progenitor o sin orden judicial
            puede configurar <strong>sustracción internacional</strong> y dar lugar a un pedido de
            restitución desde el país de destino.
          </p>
          <p>
            La intervención debe ser <strong>previa al traslado</strong>: una vez el niño está en
            otro país sin autorización, el camino para regularizar la situación es mucho más largo
            y costoso.
          </p>

          <h2>¿Qué hacer si el otro progenitor se opone?</h2>
          <ul>
            <li>
              <strong>Solicitar autorización judicial de traslado</strong> con anticipación, antes
              de hacer cambios irreversibles
            </li>
            <li>
              <strong>Defenderte si el otro progenitor se opone:</strong> presentar pruebas
              concretas del beneficio para el niño y de tu buena fe
            </li>
            <li>
              <strong>Resolver conflictos de manera rápida y estratégica:</strong> la dilación
              perjudica al niño. Una mediación previa o una propuesta razonable de régimen de
              comunicación puede destrabar el conflicto
            </li>
            <li>
              <strong>Actuar en casos internacionales urgentes:</strong> consultar de inmediato si
              hay riesgo de traslado o si el otro progenitor ya se trasladó sin autorización
            </li>
          </ul>

          <h2>Conclusión</h2>
          <p>
            El cambio de residencia de los hijos no es solo una decisión personal: es una cuestión
            jurídica que afecta al niño y al otro progenitor. <strong>Actuar con asesoramiento
            legal antes del traslado</strong> es siempre más rápido, económico y menos traumático
            que regularizar la situación después.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Mudanza con Hijos</span>
            <span className="tag">Autorización Judicial</span>
            <span className="tag">Centro de Vida</span>
            <span className="tag">Derecho de Familia</span>
          </div>

          <div className="author-card">
            <h3>Sobre la autora</h3>
            <p className="author-name">Dra. Maria Andrea Esparza</p>
            <p className="author-bio">
              Especialista en derecho de familia, sucesiones y derecho internacional privado. Más
              de 25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional
              Privado.
            </p>
            <a href="/#contact" className="contact-btn">Contactar</a>
          </div>

          <div className="article-service-links">
            <h3>Servicios legales relacionados</h3>
            <p>Si esta situación se relaciona con su caso, puede solicitar asesoramiento en:</p>
            <ul>
              <li><a href="/servicios/derecho-familia-internacional">Derecho de familia internacional</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
