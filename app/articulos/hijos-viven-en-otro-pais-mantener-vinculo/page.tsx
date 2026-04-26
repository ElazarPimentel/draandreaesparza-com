import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/hijos-viven-en-otro-pais-mantener-vinculo'

export const metadata: Metadata = {
  title: '¿Tus Hijos Viven en Otro País? Cómo Mantener el Vínculo Legal | Dra. Esparza',
  description:
    '¿Tus hijos viven en el exterior? Cómo coordinar viajes, videollamadas y acuerdos legales válidos en ambos países para no perder el vínculo. Por Dra. Andrea Esparza.',
  keywords:
    'hijos en el exterior, régimen de comunicación internacional, hijos viven en otro país, videollamadas hijos, viajes internacionales con hijos, derecho de familia internacional, abogada DIP',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Tus Hijos Viven en Otro País? Cómo Mantener el Vínculo Legal | Dra. Esparza',
    description:
      '¿Tus hijos viven en el exterior? Cómo coordinar viajes, videollamadas y acuerdos legales válidos en ambos países.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-04-26',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Tus Hijos Viven en Otro País? Cómo Mantener el Vínculo | Dra. Esparza',
    description:
      'Coordinación de viajes, videollamadas y acuerdos legales válidos en ambos países para no perder el vínculo con tus hijos.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Tus Hijos Viven en Otro País? Cómo Mantener el Vínculo Legal',
  description:
    'Guía sobre régimen de comunicación internacional cuando los hijos viven en el exterior: viajes, videollamadas y acuerdos legales válidos transfronterizos.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-04-26',
  dateModified: '2026-04-26',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    jobTitle: 'Abogada Especialista en Derecho Internacional Privado',
    url: 'https://draandreaesparza.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  keywords: ['Régimen de Comunicación Internacional', 'Hijos en el Exterior', 'DIP', 'Derecho de Familia Internacional'],
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Tus Hijos Viven en Otro País? Cómo Mantener el Vínculo' },
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
              { label: '¿Tus Hijos Viven en Otro País? Cómo Mantener el Vínculo' },
            ]}
          />
          <div className="article-category">Derecho Internacional Privado</div>
          <h1>¿Tus Hijos Viven en Otro País? No Pierdas el Vínculo</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Abril de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>El desafío de la distancia</h2>
          <p>
            Que un hijo viva en otro país <strong>no significa perder el vínculo</strong>. Pero
            mantenerlo requiere planificación, acuerdos claros y, sobre todo, herramientas
            jurídicas que tengan validez en ambas jurisdicciones. La distancia geográfica no debe
            traducirse en distancia afectiva ni en pérdida de derechos parentales.
          </p>
          <p>
            Sea por una mudanza autorizada, por un divorcio internacional o porque el otro
            progenitor regresó a su país de origen con los hijos, la realidad es la misma:
            <strong> proteger el derecho a estar presente</strong> exige acuerdos sólidos.
          </p>

          <h2>Régimen de comunicación internacional</h2>
          <p>
            El Código Civil y Comercial argentino regula el régimen de comunicación en los Arts.
            652-654, pero cuando los hijos viven en otro país, hay que coordinar tres dimensiones:
          </p>

          <h3>1. Coordinación de viajes y visitas</h3>
          <ul>
            <li>
              <strong>Calendario de visitas:</strong> definir qué períodos vacacionales
              corresponden a cada progenitor (verano, invierno, fiestas)
            </li>
            <li>
              <strong>Costos de los viajes:</strong> quién paga los pasajes y cómo se distribuyen
              los gastos asociados
            </li>
            <li>
              <strong>Documentación:</strong> autorizaciones de viaje, validez de pasaportes,
              visas si corresponden
            </li>
            <li>
              <strong>Acompañamiento:</strong> en niños pequeños, quién los acompaña en el viaje
            </li>
          </ul>

          <h3>2. Videollamadas frecuentes</h3>
          <p>
            La tecnología es una herramienta esencial. El régimen debe contemplar:
          </p>
          <ul>
            <li>Frecuencia y horarios fijos (considerando la diferencia horaria)</li>
            <li>Duración mínima de cada llamada</li>
            <li>Privacidad: el otro progenitor no debe interferir ni supervisar</li>
            <li>Cumplimiento: la negativa sistemática a las videollamadas puede ser causal de modificación del cuidado personal</li>
          </ul>

          <h3>3. Acuerdos legales válidos en ambos países</h3>
          <p>
            Un acuerdo firmado solo en Argentina puede no ser ejecutable en otro país. Para que
            tenga eficacia transfronteriza es necesario:
          </p>
          <ul>
            <li>
              <strong>Homologación judicial</strong> en el país de residencia del niño
            </li>
            <li>
              <strong>Reconocimiento de sentencias extranjeras</strong> (exequátur) cuando ya hay
              una sentencia de un país que se quiere hacer valer en el otro
            </li>
            <li>
              <strong>Apostilla de La Haya</strong> sobre los documentos públicos
            </li>
            <li>
              <strong>Coordinación con tratados bilaterales</strong> entre Argentina y el país de
              residencia
            </li>
          </ul>

          <h2>Marco legal aplicable</h2>
          <ul>
            <li>
              <strong>Código Civil y Comercial (Arts. 2594 y ss.):</strong> regula la jurisdicción
              internacional y el reconocimiento de sentencias extranjeras
            </li>
            <li>
              <strong>Convenio de La Haya de 1980 (Ley 23.857):</strong> sustracción internacional
              de menores
            </li>
            <li>
              <strong>Convención sobre los Derechos del Niño (Ley 23.849):</strong> Art. 9.3
              consagra el derecho del niño separado de uno o ambos progenitores a mantener
              relaciones personales y contacto directo
            </li>
            <li>
              <strong>Convenio de La Haya de 1996</strong> sobre responsabilidad parental y
              medidas de protección del niño
            </li>
            <li>
              <strong>Tratados bilaterales</strong> entre Argentina y diversos países para
              cooperación en materia de familia
            </li>
          </ul>

          <h2>¿Qué pasa si el otro progenitor obstaculiza el contacto?</h2>
          <p>
            La negativa sistemática a permitir el contacto es una forma de violencia familiar y
            puede configurar <strong>violencia vicaria</strong>. Las herramientas legales incluyen:
          </p>
          <ul>
            <li>Ejecución del régimen de comunicación con apoyo del juez del país de residencia</li>
            <li>Solicitud de modificación del cuidado personal por incumplimiento</li>
            <li>Activación de mecanismos del Convenio de La Haya cuando hay traslado ilícito</li>
            <li>Denuncia ante el Ministerio de Relaciones Exteriores como Autoridad Central</li>
          </ul>

          <h2>Protegemos tu derecho a estar presente</h2>
          <p>
            Vivir en países distintos no es una causa válida para perder el vínculo con tus hijos.
            La ley argentina y los tratados internacionales protegen ese derecho, pero hace falta
            <strong> ejercerlo con estrategia legal en ambos países</strong>. Un asesoramiento
            especializado en derecho de familia internacional puede definir la diferencia entre
            mantener una relación cercana o convertirse en un padre o madre lejano.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Derecho de Familia Internacional</span>
            <span className="tag">Régimen de Comunicación</span>
            <span className="tag">Hijos en el Exterior</span>
            <span className="tag">DIP</span>
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

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20r%C3%A9gimen%20de%20comunicaci%C3%B3n%20con%20mis%20hijos%20en%20el%20exterior"
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
