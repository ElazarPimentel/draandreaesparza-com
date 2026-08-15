import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/articulo-658-codigo-civil-obligacion-alimentaria'

export const metadata: Metadata = {
  title: 'Art. 658 CCyC Explicado: Alimentos Hasta los 21 Años | Dra. Esparza',
  description:
    'Artículo 658 del Código Civil y Comercial explicado: la obligación alimentaria de ambos progenitores, por qué rige hasta los 21 años y qué debe probar quien pide el cese.',
  keywords:
    'art 658 codigo civil y comercial, articulo 658 ccyc, obligacion alimentaria, alimentos hasta los 21 años, cuota alimentaria hijos mayores de edad, pension alimenticia',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Artículo 658 del Código Civil y Comercial Explicado: Alimentos Hasta los 21 Años',
    description:
      'La obligación alimentaria de ambos progenitores según el art. 658 CCyC: alcance, por qué se extiende hasta los 21 años y cómo se pide el cese.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art. 658 CCyC Explicado: Alimentos Hasta los 21 Años | Dra. Esparza',
    description:
      'La obligación alimentaria de ambos progenitores según el art. 658 del Código Civil y Comercial: alcance, límite de edad y cese.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Artículo 658 del Código Civil y Comercial Explicado: Alimentos Hasta los 21 Años',
  description:
    'Texto y explicación práctica del artículo 658 del Código Civil y Comercial argentino: la obligación alimentaria de ambos progenitores, su extensión hasta los 21 años y la prueba del cese.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-08-15',
  dateModified: '2026-08-15',
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
  keywords: ['Artículo 658', 'Código Civil y Comercial', 'Obligación Alimentaria', 'Cuota Alimentaria'],
  articleSection: 'Alimentos',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Artículo 658 CCyC Explicado' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué dice el artículo 658 del Código Civil y Comercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Que ambos progenitores tienen la obligación y el derecho de criar, alimentar y educar a sus hijos conforme a su condición y fortuna, aunque el cuidado personal esté a cargo de uno solo. La obligación alimentaria se extiende hasta los 21 años, salvo que el obligado pruebe que el hijo mayor de edad cuenta con recursos suficientes para mantenerse solo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La cuota alimentaria termina a los 18 años?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Aunque la mayoría de edad es a los 18, la obligación alimentaria de los progenitores continúa de pleno derecho hasta los 21 años. No hace falta que el hijo pruebe que necesita la cuota: es el progenitor que quiere dejar de pagar quien debe probar que el hijo tiene recursos propios suficientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién paga la cuota si el cuidado es compartido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La obligación es de ambos, conforme a su condición y fortuna. Si los ingresos son dispares, el progenitor de mayor capacidad económica paga una cuota aunque los tiempos de cuidado sean similares. El trabajo doméstico y de cuidado del progenitor conviviente tiene valor económico y computa como aporte.',
      },
    },
  ],
}

export default function Page() {
  return (
    <div className="article-page">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <ArticleNav />

      <article className="article-container">
        <header className="article-header">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Publicaciones', href: '/#publications' },
              { label: 'Artículo 658 CCyC Explicado' },
            ]}
          />
          <div className="article-category">Alimentos</div>
          <h1>Art. 658 del Código Civil y Comercial Explicado: Alimentos Hasta los 21 Años</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Texto del artículo 658</h2>
          <blockquote>
            <p>
              <strong>ARTÍCULO 658.- Regla general.</strong> Ambos progenitores tienen la
              obligación y el derecho de criar a sus hijos, alimentarlos y educarlos conforme a su
              condición y fortuna, aunque el cuidado personal esté a cargo de uno de ellos. La
              obligación de prestar alimentos a los hijos se extiende hasta los veintiún años,
              excepto que el obligado acredite que el hijo mayor de edad cuenta con recursos
              suficientes para proveérselos por sí mismo.
            </p>
          </blockquote>

          <h2>Qué significa en la práctica</h2>
          <ul>
            <li>
              <strong>La obligación es de los dos.</strong> No importa con quién viva el hijo: el
              progenitor no conviviente paga una cuota, y el conviviente aporta con el sostén
              cotidiano. La jurisprudencia reconoce que las <strong>tareas de cuidado tienen
              valor económico</strong> y computan como aporte alimentario.
            </li>
            <li>
              <strong>&ldquo;Conforme a su condición y fortuna&rdquo;:</strong> la cuota se mide
              por el nivel de vida y la capacidad económica de los progenitores, no por un
              porcentaje fijo de ley. Comprende alimentación, vivienda, salud, educación,
              vestimenta y esparcimiento (art. 659).
            </li>
            <li>
              <strong>Hasta los 21 años, no hasta los 18.</strong> La mayoría de edad no corta la
              cuota: sigue de pleno derecho hasta los 21. Y quien quiera dejar de pagar antes debe{' '}
              <strong>probar</strong> que el hijo tiene recursos propios suficientes; no le basta
              con invocar la mayoría de edad.
            </li>
            <li>
              <strong>Hasta los 25 si estudia:</strong> el art. 663 extiende la obligación hasta
              los 25 años cuando la formación profesional o los estudios impiden al hijo
              sostenerse por sí mismo.
            </li>
          </ul>

          <h2>Cómo se reclama y cómo cesa</h2>
          <p>
            La cuota se acuerda entre las partes (homologable judicialmente) o se fija en un{' '}
            <a href="/servicios/alimentos">juicio de alimentos</a>, donde puede pedirse una{' '}
            <strong>cuota provisoria</strong> en días. El incumplimiento habilita la ejecución, el
            embargo y la inscripción en el Registro de Deudores Alimentarios.
          </p>
          <p>
            El cese no es automático a ninguna edad: debe pedirse judicialmente y probarse la
            causal. Explicamos los supuestos en{' '}
            <a href="/articulos/cuando-puede-cesar-la-cuota-alimentaria">
              ¿cuándo puede cesar la cuota alimentaria?
            </a>
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Con cuidado compartido se paga cuota igual?</h3>
          <p>
            Puede corresponder: si los ingresos son dispares, el progenitor de mayor capacidad
            económica paga una cuota aunque el tiempo con el hijo sea similar. Vea{' '}
            <a href="/articulos/articulo-651-codigo-civil-cuidado-compartido">
              art. 651: cuidado compartido
            </a>.
          </p>

          <h3>¿El hijo de 19 años tiene que pedir la cuota de nuevo?</h3>
          <p>
            No: la obligación continúa de pleno derecho hasta los 21. A partir de la mayoría de
            edad, el hijo puede percibir la cuota directamente, y el progenitor conviviente está
            legitimado para seguir reclamándola si el hijo convive con él.
          </p>

          <h3>¿Cómo se actualiza la cuota con inflación?</h3>
          <p>
            Los acuerdos y sentencias suelen fijar actualización periódica (índices o porcentaje
            de ingresos). Si la cuota quedó desactualizada, se pide un{' '}
            <a href="/articulos/incidente-modificacion-cuota-alimentaria-caba-plazos">
              incidente de aumento de cuota
            </a>.
          </p>

          <h2>Conclusión</h2>
          <p>
            El art. 658 CCyC establece que los alimentos son una obligación{' '}
            <strong>de ambos progenitores, hasta los 21 años</strong>, medida por la condición y
            fortuna de cada uno. Ni la mayoría de edad ni el cuidado compartido la extinguen por
            sí solos: todo cese o reducción exige prueba y decisión judicial.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Artículo 658</span>
            <span className="tag">Código Civil y Comercial</span>
            <span className="tag">Cuota Alimentaria</span>
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
              <li><a href="/servicios/alimentos">Juicio de alimentos</a></li>
              <li><a href="/articulos/cuando-puede-cesar-la-cuota-alimentaria">¿Cuándo puede cesar la cuota alimentaria?</a></li>
              <li><a href="/articulos/incidente-modificacion-cuota-alimentaria-caba-plazos">Incidente de modificación de cuota</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20cuota%20alimentaria"
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
