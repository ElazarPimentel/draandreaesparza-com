import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/incidente-modificacion-cuota-alimentaria-caba-plazos'

export const metadata: Metadata = {
  title: 'Incidente de Modificación de Cuota Alimentaria en CABA: Plazos y Patrocinio Gratuito | Dra. Esparza',
  description:
    '¿Cuánto tarda el trámite del incidente de modificación de cuota alimentaria en CABA? Plazos, requisitos, patrocinio gratuito y cómo aumentar o reducir la cuota. Por Dra. Andrea Esparza.',
  keywords:
    'incidente modificación cuota alimentaria, modificación cuota alimentaria CABA, aumento cuota alimentaria, reducción cuota alimentaria, patrocinio jurídico gratuito CABA, cuánto tarda modificación alimentaria, abogado cuota alimentaria',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Incidente de Modificación de Cuota Alimentaria en CABA: Plazos y Patrocinio Gratuito',
    description:
      'Plazos, requisitos y patrocinio gratuito para el incidente de modificación de cuota alimentaria en CABA.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-05-23',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modificación de Cuota Alimentaria en CABA: Plazos | Dra. Esparza',
    description:
      'Plazos, requisitos y patrocinio gratuito para modificar la cuota alimentaria en CABA.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Incidente de Modificación de Cuota Alimentaria en CABA: Plazos y Patrocinio Gratuito',
  description:
    'Guía del trámite de modificación de cuota alimentaria en CABA: plazos típicos, requisitos, patrocinio jurídico gratuito y procedimiento.',
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
  keywords: ['Cuota Alimentaria', 'Incidente de Modificación', 'CABA', 'Patrocinio Gratuito'],
  articleSection: 'Cuota Alimentaria',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Incidente de Modificación de Cuota Alimentaria en CABA' },
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
              { label: 'Incidente de Modificación de Cuota Alimentaria en CABA' },
            ]}
          />
          <div className="article-category">Cuota Alimentaria</div>
          <h1>Incidente de Modificación de Cuota Alimentaria en CABA: Plazos y Patrocinio Gratuito</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Mayo de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>¿Qué es el incidente de modificación?</h2>
          <p>
            El <strong>incidente de modificación de cuota alimentaria</strong> es el trámite
            judicial por el cual se pide al juez que{' '}
            <strong>aumente o reduzca</strong> una cuota alimentaria ya fijada (por sentencia o
            convenio homologado), porque cambiaron las circunstancias que motivaron el monto
            original.
          </p>
          <p>
            Es un proceso <strong>autónomo</strong> que se acumula al expediente principal de
            alimentos. No requiere iniciar todo desde cero, pero sí acreditar el cambio de
            circunstancias.
          </p>

          <h2>¿Cuánto tarda el trámite?</h2>
          <p>
            Los plazos varían según el juzgado y la complejidad del caso, pero como referencia:
          </p>
          <ul>
            <li>
              <strong>Cuota provisoria urgente:</strong> el juez puede dictarla en{' '}
              <strong>días o pocas semanas</strong> si se acredita una situación de urgencia
              (despido, enfermedad, ingreso de hijos a la escuela, etc.).
            </li>
            <li>
              <strong>Resolución final del incidente:</strong> típicamente entre{' '}
              <strong>6 y 18 meses</strong> en juzgados nacionales de familia de CABA, dependiendo
              de la carga del juzgado, las pruebas a producir (informes laborales, pericias
              contables) y si el otro progenitor opone defensas.
            </li>
            <li>
              <strong>Tiempo entre presentación y traslado:</strong> generalmente entre 1 y 3
              meses.
            </li>
          </ul>
          <p>
            <strong>Importante:</strong> el aumento o reducción rige desde el momento de la
            notificación de la demanda al alimentante, no desde la sentencia. Por eso{' '}
            <strong>pedir lo antes posible</strong> es decisivo.
          </p>

          <h2>¿Cuándo procede aumentar la cuota?</h2>
          <ul>
            <li>Las necesidades del hijo aumentaron (escuela, salud, transporte, actividades)</li>
            <li>Los ingresos del alimentante aumentaron (ascensos, segundo empleo, herencia)</li>
            <li>La cuota original quedó desactualizada frente a la inflación</li>
            <li>El hijo creció y sus gastos cotidianos son mayores</li>
            <li>Aparecieron gastos extraordinarios previsibles (tratamientos médicos, terapia)</li>
          </ul>

          <h2>¿Cuándo procede reducir la cuota?</h2>
          <ul>
            <li>Pérdida del empleo o disminución acreditada de ingresos del alimentante</li>
            <li>Nacimiento de nuevos hijos a cargo del alimentante</li>
            <li>Enfermedad o incapacidad sobreviniente</li>
            <li>Hijo alcanzó la mayoría de edad y dejó de estudiar (con análisis caso a caso, ver Art. 663 CCyCN)</li>
            <li>Cambio significativo en el régimen de cuidado personal</li>
          </ul>

          <h2>Patrocinio jurídico gratuito en CABA</h2>
          <p>
            Si no puede afrontar honorarios de un abogado particular, en CABA hay varias vías de{' '}
            <strong>patrocinio jurídico gratuito</strong>:
          </p>
          <ul>
            <li>
              <strong>Patrocinio Jurídico Gratuito de la Facultad de Derecho UBA</strong> (Av.
              Figueroa Alcorta 2263 y sedes barriales). Atiende causas de familia incluyendo
              alimentos.
            </li>
            <li>
              <strong>Defensoría General de la Nación</strong> - Defensorías Oficiales en lo Civil
              y Comercial. Cubren personas que acrediten falta de recursos.
            </li>
            <li>
              <strong>Defensorías Zonales</strong> del Consejo de Derechos de Niños, Niñas y
              Adolescentes (CDNNyA) cuando hay menores involucrados.
            </li>
            <li>
              <strong>Colegio Público de Abogados de la Capital Federal (CPACF)</strong> -
              Consultorio Jurídico Gratuito.
            </li>
            <li>
              <strong>Ministerio Público de la Defensa</strong>.
            </li>
          </ul>
          <p>
            Cada organismo tiene requisitos propios de acreditación de falta de recursos. El
            trámite suele exigir constancias de ingresos, grupo familiar y situación habitacional.
          </p>

          <h2>Procedimiento típico</h2>
          <ol>
            <li>
              <strong>Documentación previa:</strong> sentencia o convenio original que fijó la
              cuota, partida de nacimiento del hijo, prueba del cambio de circunstancias
              (recibos, certificados médicos, presupuestos, recibos de sueldo del alimentante si
              se tienen).
            </li>
            <li>
              <strong>Presentación del incidente</strong> ante el mismo juzgado que dictó la
              sentencia o homologó el convenio original.
            </li>
            <li>
              <strong>Solicitud de cuota provisoria</strong> si hay urgencia.
            </li>
            <li>
              <strong>Traslado a la otra parte</strong> para que conteste.
            </li>
            <li>
              <strong>Producción de prueba:</strong> informes laborales (AFIP, ANSES), pericias
              contables si los ingresos están en discusión, prueba de necesidades del hijo.
            </li>
            <li>
              <strong>Audiencia preliminar</strong> y eventualmente audiencia de vista de causa.
            </li>
            <li>
              <strong>Sentencia</strong> que modifica (o rechaza modificar) la cuota.
            </li>
          </ol>

          <h2>Buenas prácticas para acelerar el trámite</h2>
          <ul>
            <li>
              <strong>Presentar con toda la prueba disponible:</strong> reduce los pedidos
              posteriores de informes y acelera la resolución.
            </li>
            <li>
              <strong>Pedir cuota provisoria urgente</strong> cuando corresponda: no esperar al
              final del proceso.
            </li>
            <li>
              <strong>Intentar acuerdo antes o durante:</strong> la mayoría de los casos se
              cierran por convenio homologado, que es mucho más rápido que esperar la sentencia.
            </li>
            <li>
              <strong>Actualizar pedidos por inflación:</strong> si pasa mucho tiempo, ampliar el
              reclamo para reflejar la pérdida de valor adquisitivo.
            </li>
          </ul>

          <h2>Conclusión</h2>
          <p>
            El incidente de modificación de cuota alimentaria en CABA puede llevar entre{' '}
            <strong>6 y 18 meses</strong> hasta sentencia final, pero el juez puede fijar una{' '}
            <strong>cuota provisoria en días o pocas semanas</strong> si hay urgencia. El plazo
            depende del juzgado, las pruebas a producir y las defensas de la otra parte. Existe{' '}
            <strong>patrocinio jurídico gratuito</strong> para quienes no pueden afrontar
            honorarios.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Cuota Alimentaria</span>
            <span className="tag">Incidente de Modificación</span>
            <span className="tag">CABA</span>
            <span className="tag">Patrocinio Gratuito</span>
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
              <li><a href="/servicios/alimentos">Cuota alimentaria</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20modificaci%C3%B3n%20de%20cuota%20alimentaria"
        trackEvent="whatsapp_click"
        trackSource="whatsapp_float"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Contactar por WhatsApp">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </TrackedLink>
    </div>
  )
}
