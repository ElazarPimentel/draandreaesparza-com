import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/violencia-vicaria-que-es'

export const metadata: Metadata = {
  title: 'Violencia Vicaria: Qué Es, Ejemplos y Cómo Denunciarla | Dra. Esparza',
  description:
    '¿Qué es la violencia vicaria? Lastimar a la madre o al padre a través de los hijos no es amor: es violencia. Tipos, ejemplos, marco legal en Argentina y cómo actuar. Por Dra. Andrea Esparza.',
  keywords:
    'violencia vicaria, qué es violencia vicaria, lastimar a través de hijos, violencia familiar, violencia de género, Ley 26.485, Ley 26.061, denuncia OVD, abogada familia Buenos Aires',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Violencia Vicaria: Qué Es, Ejemplos y Cómo Denunciarla | Dra. Esparza',
    description:
      '¿Qué es la violencia vicaria? Lastimar a la madre o al padre a través de los hijos no es amor: es violencia. Tipos, ejemplos, marco legal y cómo actuar.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-04-26',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Violencia Vicaria: Qué Es, Ejemplos y Cómo Denunciarla | Dra. Esparza',
    description:
      '¿Qué es la violencia vicaria? Lastimar a la madre o al padre a través de los hijos no es amor: es violencia.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Violencia Vicaria: Qué Es, Ejemplos y Cómo Denunciarla',
  description:
    'Análisis jurídico de la violencia vicaria: definición, ejemplos, marco normativo argentino (Ley 26.485, Ley 26.061) y vías de protección.',
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
  keywords: ['Violencia Vicaria', 'Violencia Familiar', 'Derecho de Familia', 'Ley 26.485'],
  articleSection: 'Derecho de Familia',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Violencia Vicaria: Qué Es y Cómo Denunciarla' },
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
              { label: 'Violencia Vicaria: Qué Es y Cómo Denunciarla' },
            ]}
          />
          <div className="article-category">Derecho de Familia</div>
          <h1>Violencia Vicaria: Qué Es, Ejemplos y Cómo Denunciarla</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Abril de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>¿Qué es la violencia vicaria?</h2>
          <p>
            La <strong>violencia vicaria</strong> es una forma de violencia familiar y de género en
            la que el agresor lastima a su pareja o ex pareja <strong>a través de los hijos en
            común</strong>. No se trata simplemente de un conflicto parental: es una herramienta de
            castigo y control que utiliza a los niños como vehículo del daño.
          </p>
          <p>
            Lastimar a otra persona a través de sus hijos <strong>no es amor, es violencia</strong>.
            La violencia vicaria es el daño extremo que un progenitor puede infligir al otro: usar a
            quien más se ama para causar el mayor sufrimiento posible.
          </p>

          <h2>Tipos y ejemplos de violencia vicaria</h2>
          <p>Las conductas más frecuentes incluyen:</p>
          <ul>
            <li>
              <strong>Sustracción o retención indebida de los hijos:</strong> impedir el contacto
              con el otro progenitor sin causa legal
            </li>
            <li>
              <strong>Manipulación e instrumentalización del niño:</strong> hablarle mal del otro
              progenitor, forzarlo a tomar partido, generar conflicto de lealtades
            </li>
            <li>
              <strong>Falsas denuncias:</strong> presentar denuncias inventadas de abuso o
              violencia para obstaculizar el régimen de comunicación
            </li>
            <li>
              <strong>Incumplimiento sistemático del régimen de comunicación:</strong> con la
              intención de cortar el vínculo afectivo
            </li>
            <li>
              <strong>Daño físico o psicológico al hijo:</strong> en los casos más graves, lastimar
              al niño directamente con el fin de causar dolor al otro progenitor
            </li>
            <li>
              <strong>Mudanzas o cambios de residencia sin autorización:</strong> trasladar al niño
              a otra ciudad o país para alejarlo del otro progenitor
            </li>
          </ul>

          <h2>Marco legal en Argentina</h2>
          <p>
            Aunque el término &ldquo;violencia vicaria&rdquo; no figura expresamente en una ley
            argentina, las conductas que la integran <strong>ya están tipificadas y son
            sancionables</strong> bajo:
          </p>
          <ul>
            <li>
              <strong>Ley 26.485 de Protección Integral a las Mujeres:</strong> reconoce la
              violencia simbólica, psicológica y económica, y permite medidas urgentes de
              protección
            </li>
            <li>
              <strong>Ley 26.061 de Protección Integral de los Derechos de Niños, Niñas y
              Adolescentes:</strong> establece el interés superior del niño como criterio rector
            </li>
            <li>
              <strong>Código Civil y Comercial (Arts. 638, 646, 652-654):</strong> regula la
              responsabilidad parental y prevé la suspensión, privación o modificación del cuidado
              personal cuando el ejercicio dañe al niño
            </li>
            <li>
              <strong>Código Penal (Arts. 146, 149 ter):</strong> tipifica la sustracción de
              menores y el incumplimiento de los deberes de asistencia familiar
            </li>
          </ul>

          <h2>¿Cómo actuar frente a la violencia vicaria?</h2>
          <p>Si está atravesando una situación de violencia vicaria, los pasos son:</p>
          <ol>
            <li>
              <strong>Documentar todo:</strong> guardar mensajes, audios, capturas, registros
              médicos, testimonios. La prueba es decisiva
            </li>
            <li>
              <strong>Denunciar en la OVD</strong> (Oficina de Violencia Doméstica de la Corte
              Suprema), comisaría o juzgado de familia. Funciona las 24 horas y no requiere
              abogado para la denuncia inicial
            </li>
            <li>
              <strong>Solicitar medidas de protección urgentes:</strong> orden de no acercamiento,
              régimen provisorio de comunicación, exclusión del hogar, prohibición de salida del
              país del niño
            </li>
            <li>
              <strong>Iniciar las acciones de fondo:</strong> modificación del cuidado personal,
              ejecución del régimen de comunicación, denuncia penal si corresponde
            </li>
            <li>
              <strong>Buscar asesoramiento legal especializado:</strong> los casos de violencia
              vicaria requieren estrategia, no solo escritos. Un abogado con experiencia en familia
              puede definir la diferencia entre años de conflicto o una resolución pronta
            </li>
          </ol>

          <h2>Violencia vicaria con elementos internacionales</h2>
          <p>
            Cuando el agresor traslada al niño a otro país sin autorización, la situación se
            agrava. Argentina es parte del <strong>Convenio de La Haya de 1980</strong> sobre
            sustracción internacional de menores, que permite reclamar la restitución del niño al
            país de su residencia habitual. La intervención debe ser inmediata y coordinada con la
            Autoridad Central argentina.
          </p>

          <h2>Conclusión</h2>
          <p>
            La violencia vicaria es una de las formas más crueles de violencia familiar porque
            instrumentaliza a los hijos. <strong>Reconocerla, nombrarla y actuar a tiempo</strong>{' '}
            protege tanto a la víctima adulta como al niño. La ley argentina ofrece herramientas
            concretas; la clave es ejercerlas con estrategia.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Violencia Vicaria</span>
            <span className="tag">Violencia Familiar</span>
            <span className="tag">Derecho de Familia</span>
            <span className="tag">Ley 26.485</span>
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
              <li><a href="/servicios/violencia-familiar">Violencia familiar y orden de protección</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/servicios/derecho-familia-internacional">Derecho de familia internacional</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20violencia%20vicaria"
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
