import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/cuidado-personal-unilateral-consecuencias'

export const metadata: Metadata = {
  title: 'Consecuencias del Cuidado Personal Unilateral: Cuota, Comunicación y Mudanza | Dra. Esparza',
  description:
    '¿Qué significa cuidado personal unilateral y qué consecuencias prácticas tiene? Cuota alimentaria, régimen de comunicación, mudanza, decisiones cotidianas. Tipos de cuidado en Argentina (Art. 648-653 CCyCN). Por Dra. Andrea Esparza.',
  keywords:
    'consecuencias cuidado personal unilateral, cuidado unilateral que significa, tipos de cuidado personal, cuidado personal unilateral CCyCN, cuidado unilateral a favor del padre, cuidado unilateral a favor de la madre, cuidado personal compartido indistinto alternado, tenencia unilateral, responsabilidad parental unilateral',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Consecuencias del Cuidado Personal Unilateral: Cuota, Comunicación y Mudanza',
    description:
      'Qué significa cuidado personal unilateral, qué consecuencias prácticas tiene y en qué se diferencia del compartido alternado o indistinto.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-05-23',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consecuencias del Cuidado Personal Unilateral | Dra. Esparza',
    description:
      'Qué significa cuidado personal unilateral y qué consecuencias prácticas tiene en cuota, comunicación, mudanza y decisiones cotidianas.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Consecuencias del Cuidado Personal Unilateral: Cuota, Comunicación y Mudanza',
  description:
    'Qué significa cuidado personal unilateral en Argentina, sus consecuencias prácticas y diferencias con el cuidado compartido indistinto o alternado.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-05-23',
  dateModified: '2026-05-23',
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
  keywords: ['Cuidado Personal Unilateral', 'Tipos de Cuidado Personal', 'CCyCN 653', 'Responsabilidad Parental'],
  articleSection: 'Derecho de Familia',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Consecuencias del Cuidado Personal Unilateral' },
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
              { label: 'Consecuencias del Cuidado Personal Unilateral' },
            ]}
          />
          <div className="article-category">Derecho de Familia</div>
          <h1>Cuidado Personal Unilateral: Qué Significa y Qué Consecuencias Trae</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Mayo de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>¿Qué significa cuidado personal unilateral?</h2>
          <p>
            El <strong>cuidado personal unilateral</strong> es el régimen en el cual{' '}
            <strong>un solo progenitor</strong> tiene a su cargo la vida cotidiana del hijo: dónde
            duerme, cómo se alimenta, qué escuela va, qué actividades hace. El otro progenitor
            mantiene la responsabilidad parental (las decisiones importantes) y un{' '}
            <strong>régimen de comunicación</strong> (lo que antes se llamaba régimen de visitas).
          </p>
          <p>
            Importante: el cuidado personal unilateral <strong>no implica perder la patria
            potestad</strong>. Esa figura ya no existe con ese nombre desde la reforma del Código
            Civil y Comercial de 2015.{' '}
            <TrackedLink
              href="/articulos/responsabilidad-parental-patria-potestad-tenencia"
              trackEvent="cta_click"
              trackSource="cuidado_unilateral_to_terminologia_hub"
            >
              Cómo se llama ahora la patria potestad →
            </TrackedLink>
          </p>

          <h2>Tipos de cuidado personal en Argentina</h2>
          <p>El Código Civil y Comercial regula tres modalidades (Art. 649-651 CCyCN):</p>
          <ul>
            <li>
              <strong>Cuidado personal compartido indistinto</strong> (la regla): el hijo reside
              principalmente con uno de los padres, pero ambos comparten las decisiones de la vida
              cotidiana y los cuidados.
            </li>
            <li>
              <strong>Cuidado personal compartido alternado</strong>: el hijo pasa períodos similares
              con cada progenitor (por ejemplo, semana de por medio).
            </li>
            <li>
              <strong>Cuidado personal unilateral</strong> (excepcional): un solo progenitor ejerce
              la vida cotidiana del hijo. El otro conserva responsabilidad parental y régimen de
              comunicación.
            </li>
          </ul>
          <p>
            La <strong>regla legal</strong> es el cuidado compartido indistinto (Art. 651 CCyCN). El
            cuidado unilateral es <strong>excepcional</strong> y debe estar fundado en el interés
            superior del niño cuando el cuidado compartido resulte perjudicial.
          </p>

          <h2>¿Cuándo se otorga el cuidado unilateral? (Art. 653 CCyCN)</h2>
          <p>
            El Art. 653 fija cuatro pautas que el juez evalúa para otorgar el cuidado personal
            unilateral:
          </p>
          <ol>
            <li>
              <strong>Quién facilita más el contacto del hijo con el otro progenitor.</strong> Este
              es el criterio número uno: obstaculizar el vínculo es una causa típica de pérdida del
              cuidado.
            </li>
            <li>
              <strong>La edad del hijo</strong> y la conveniencia de mantener al cuidador primario,
              especialmente con hijos muy pequeños.
            </li>
            <li>
              <strong>La opinión del hijo</strong> según su edad y madurez (Art. 707 CCyCN).
            </li>
            <li>
              <strong>El mantenimiento de la situación existente</strong> y la preservación del{' '}
              <strong>centro de vida</strong> del niño.
            </li>
          </ol>
          <p>
            La condición económica de los progenitores y los estereotipos de género no son
            criterios válidos (Art. 656 CCyCN).
          </p>

          <h2>Consecuencias prácticas del cuidado personal unilateral</h2>

          <h3>1. Cuota alimentaria</h3>
          <p>
            El progenitor que <strong>no tiene</strong> el cuidado personal debe aportar una{' '}
            <strong>cuota alimentaria en dinero</strong> proporcional a sus ingresos y a las
            necesidades del hijo. El progenitor que ejerce el cuidado cotidiano hace su aporte en
            tareas de crianza y atención diaria, que la ley reconoce expresamente con valor
            económico (Art. 660 CCyCN).
          </p>

          <h3>2. Régimen de comunicación</h3>
          <p>
            El progenitor que no convive con el hijo tiene{' '}
            <strong>derecho a mantener contacto regular</strong>: días determinados, fines de
            semana, vacaciones, comunicación telefónica y por videollamada. Puede acordarse entre
            los padres o establecerlo el juez. Impedir este contacto es una conducta grave que
            puede llevar al <strong>cambio del cuidado</strong> y a sanciones penales (Ley 24.270).
          </p>

          <h3>3. Decisiones cotidianas vs. decisiones importantes</h3>
          <p>
            El progenitor con cuidado personal decide la vida diaria del hijo, pero las{' '}
            <strong>decisiones importantes</strong> (salud, educación formal, religión, viajes al
            exterior, autorización de actos médicos relevantes) siguen exigiendo el consentimiento
            de <strong>ambos progenitores</strong> (Art. 645 CCyCN). El cuidado unilateral no
            convierte a un padre en decisor único.
          </p>

          <h3>4. Mudanza y cambio de residencia</h3>
          <p>
            Aunque un progenitor tenga el cuidado unilateral,{' '}
            <strong>no puede mudarse con el hijo a otra ciudad o al exterior</strong> sin el
            consentimiento del otro progenitor o sin autorización judicial. El traslado afecta el
            centro de vida del niño y el régimen de comunicación, y exige intervención previa.{' '}
            <TrackedLink
              href="/articulos/cambio-residencia-hijos-autorizacion-judicial"
              trackEvent="cta_click"
              trackSource="cuidado_unilateral_to_mudanza"
            >
              Autorización judicial de traslado →
            </TrackedLink>
          </p>

          <h3>5. Vínculo legal con el otro progenitor</h3>
          <p>
            El padre o madre que no tiene el cuidado personal{' '}
            <strong>sigue siendo padre o madre con todos los derechos y obligaciones</strong>:
            sigue siendo el padre/madre en el documento, sigue heredándose con el hijo, sigue
            obligado a alimentos y sigue con responsabilidad parental.
          </p>

          <h2>Cuidado unilateral a favor del padre o a favor de la madre</h2>
          <p>
            La ley argentina <strong>no tiene preferencia por la madre</strong>. El Art. 656 CCyCN
            prohíbe expresamente decidir sobre la base del sexo del progenitor o sobre estereotipos
            de género. La Corte Interamericana de Derechos Humanos lo confirmó en{' '}
            <em>Fornerón vs. Argentina</em> (2012).
          </p>
          <p>
            En la práctica los jueces analizan{' '}
            <strong>conductas concretas</strong>: quién facilita el contacto, quién está disponible
            para el cuidado, quién brinda un entorno seguro y estable. El padre puede obtener el
            cuidado unilateral si reúne esas condiciones; la madre puede perderlo si obstaculiza el
            vínculo o expone al hijo a situaciones de riesgo.
          </p>

          <h2>¿Se puede modificar el cuidado personal una vez establecido?</h2>
          <p>
            <strong>Sí.</strong> El cuidado puede modificarse cuando cambian las circunstancias que
            lo motivaron: si el progenitor que tiene el cuidado obstaculiza el contacto, si surge
            violencia o negligencia, si el hijo expresa un deseo fundado de cambiar, o si las
            condiciones que justificaron el régimen original ya no existen. Requiere un nuevo
            pedido judicial con prueba concreta.
          </p>

          <h2>¿Qué hacer si tu situación encaja con este régimen?</h2>
          <ul>
            <li>
              <strong>Si querés solicitar el cuidado unilateral</strong>: reuní prueba concreta del
              perjuicio del cuidado compartido (no alcanza con el desacuerdo o el conflicto entre
              adultos).
            </li>
            <li>
              <strong>Si querés conservarlo y el otro progenitor lo cuestiona</strong>: documentá tu
              facilitación del contacto, los actos de cuidado diario y la estabilidad del centro de
              vida.
            </li>
            <li>
              <strong>Si tenés cuidado unilateral y querés mudarte</strong>: tramitá la autorización
              judicial <em>antes</em> del traslado.
            </li>
            <li>
              <strong>Si no tenés el cuidado y te están impidiendo el contacto</strong>: actuá
              rápido. La obstaculización del vínculo es una causa típica de cambio de cuidado.
            </li>
          </ul>

          <h2>Conclusión</h2>
          <p>
            El cuidado personal unilateral es <strong>excepcional</strong>, regulado por los Arts.
            648-656 CCyCN, y tiene consecuencias prácticas en cuota alimentaria, régimen de
            comunicación, decisiones del hijo y posibilidad de mudarse. <strong>No implica perder
            la responsabilidad parental ni el vínculo legal</strong> con el hijo. La decisión
            judicial se basa en conductas concretas y en el interés superior del niño, no en el
            sexo del progenitor ni en su condición económica.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Cuidado Personal Unilateral</span>
            <span className="tag">Responsabilidad Parental</span>
            <span className="tag">CCyCN Art. 653</span>
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
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/servicios/alimentos">Cuota alimentaria</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
