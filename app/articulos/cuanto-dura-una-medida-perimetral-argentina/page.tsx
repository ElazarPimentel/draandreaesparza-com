import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/cuanto-dura-una-medida-perimetral-argentina'

export const metadata: Metadata = {
  title: '¿Cuánto Dura una Perimetral en Argentina? Plazos y Prórrogas | Dra. Esparza',
  description:
    '¿Cuánto dura una perimetral en Argentina? Plazos típicos según la Ley 26.485, prórrogas, qué pasa si se incumple y cómo se solicita. Por Dra. Andrea Esparza.',
  keywords:
    'cuanto dura una perimetral, cuanto dura una perimetral en argentina, cuanto tiempo dura una perimetral, perimetral cuanto dura, cuanto tarda una perimetral, perimetral por violencia familiar, medida perimetral, orden de protección Ley 26485',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Cuánto Dura una Perimetral en Argentina? Plazos, Prórrogas e Incumplimiento',
    description:
      'Plazos típicos de una medida perimetral en Argentina, prórrogas, qué pasa si se incumple y cómo se solicita. Ley 26.485.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-05-23',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cuánto Dura una Perimetral en Argentina? | Dra. Esparza',
    description:
      'Plazos típicos, prórrogas, incumplimiento y cómo se solicita una medida perimetral en Argentina.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Cuánto Dura una Medida Perimetral en Argentina? Plazos, Prórrogas e Incumplimiento',
  description:
    'Plazos típicos de una medida perimetral en Argentina, prórrogas y consecuencias del incumplimiento, según la Ley 26.485 de violencia contra las mujeres.',
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
  keywords: ['Medida Perimetral', 'Orden de Protección', 'Ley 26485', 'Violencia Familiar'],
  articleSection: 'Violencia Familiar',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Cuánto Dura una Medida Perimetral en Argentina?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto dura una perimetral en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay un plazo fijo en la Ley 26.485: el juez la mantiene mientras persista el riesgo. En la práctica una medida perimetral suele dictarse inicialmente por 3 a 6 meses y es prorrogable las veces que sean necesarias. Lo crucial es pedir la prórroga antes del vencimiento, porque la medida no se renueva automáticamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La perimetral se extiende automáticamente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Si no se solicita la prórroga antes del vencimiento, la medida caduca. Hay que renovarla expresamente ante el juzgado mientras subsista la situación de riesgo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Una perimetral es un antecedente penal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La medida perimetral es una medida cautelar civil dictada en el fuero de familia: no es una condena y no figura como antecedente penal. Distinto es el incumplimiento: violar la perimetral puede abrir una causa penal por desobediencia a una orden judicial (art. 239 del Código Penal), y esa sí puede generar antecedentes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿A cuántos metros obliga una perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La distancia la fija el juez según el caso; no hay un número único establecido por ley. En la práctica suele ir de 200 a 500 metros del domicilio, el lugar de trabajo, la escuela de los hijos y demás lugares que frecuente la persona protegida. La prohibición de acercamiento también alcanza el contacto por teléfono, redes sociales o a través de terceros.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede levantar una perimetral antes de tiempo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Cualquiera de las partes puede pedir el cese o la modificación de la medida antes de su vencimiento si cambiaron las circunstancias (informe favorable, mudanza, tiempo prolongado sin incidentes). El juez evalúa si subsiste el riesgo y resuelve. Mientras el juez no ordene el levantamiento, la medida sigue vigente y debe cumplirse, aunque ambas partes estén de acuerdo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si se viola una perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El incumplimiento configura el delito de desobediencia a una orden judicial (art. 239 del Código Penal), con pena de 15 días a 1 año de prisión. Con una orden vigente la policía puede detener al agresor en el acto. La persona protegida debe llamar al 911, documentar el incumplimiento y notificar al juzgado para endurecer las medidas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda una perimetral en dictarse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En situaciones de urgencia el juez la dicta en horas o pocos días. Las medidas previstas en la Ley 26.485 se resuelven con carácter inmediato, sin necesidad de escuchar previamente a la otra parte.',
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
              { label: '¿Cuánto Dura una Medida Perimetral en Argentina?' },
            ]}
          />
          <div className="article-category">Violencia Familiar</div>
          <h1>¿Cuánto Dura una Perimetral en Argentina?</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Mayo de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            En la mayoría de los casos, una medida perimetral u orden de protección se dicta
            inicialmente por un <strong>plazo de entre 3 y 6 meses</strong>, y puede{' '}
            <strong>prorrogarse</strong> mientras subsistan las circunstancias que justificaron su
            dictado. El juez fija el plazo concreto en cada caso, y en situaciones graves puede
            disponerla por períodos mayores o renovarla varias veces.
          </p>
          <p>
            <strong>Importante:</strong> el plazo concreto depende del juzgado, la jurisdicción
            (CABA, Provincia de Buenos Aires, fuero civil de familia, fuero penal) y de la
            gravedad y persistencia de los hechos. No existe un &ldquo;plazo único&rdquo; legal
            obligatorio.
          </p>

          <h2>¿Qué es una medida perimetral?</h2>
          <p>
            La <strong>medida perimetral</strong> (también llamada &ldquo;orden de
            protección&rdquo; o &ldquo;exclusión perimetral&rdquo;) es una medida cautelar
            dictada por un juez que prohíbe al agresor:
          </p>
          <ul>
            <li>Acercarse a la víctima a una distancia mínima (por ejemplo, 200 o 500 metros)</li>
            <li>Acercarse al domicilio, lugar de trabajo o estudio de la víctima</li>
            <li>Acercarse a los hijos si los hay</li>
            <li>Contactar a la víctima por cualquier medio (telefónico, mensajes, redes sociales, terceros)</li>
          </ul>
          <p>
            Se dicta en el marco de la <strong>Ley 26.485</strong> de Protección Integral para
            Prevenir, Sancionar y Erradicar la Violencia contra las Mujeres, y de las leyes
            provinciales y nacionales sobre violencia familiar (Ley 24.417 en lo aplicable).
          </p>

          <h2>Plazos típicos</h2>
          <p>
            Los plazos varían, pero los rangos más frecuentes en la práctica son:
          </p>
          <ul>
            <li>
              <strong>Plazo inicial:</strong> entre 3 y 6 meses. En algunos juzgados de CABA se
              dicta por 90 días renovables.
            </li>
            <li>
              <strong>Prórrogas:</strong> el juez puede prorrogar la medida{' '}
              <strong>las veces que sea necesario</strong> mientras se acrediten circunstancias
              que justifiquen mantenerla. No hay un tope legal absoluto.
            </li>
            <li>
              <strong>Casos graves:</strong> en situaciones de riesgo alto, antecedentes penales o
              persistencia de la conducta, la medida puede extenderse por períodos mucho mayores
              o tornarse de hecho permanente.
            </li>
          </ul>

          <h2>¿Cómo se solicita una prórroga?</h2>
          <p>
            Antes del vencimiento, la persona protegida debe presentar al juzgado un escrito{' '}
            <strong>solicitando la prórroga</strong> y acreditando que las circunstancias de
            riesgo subsisten: persistencia de la conducta del agresor, intentos de contacto,
            antecedentes penales, informes psicológicos, denuncias adicionales, etc.
          </p>
          <p>
            <strong>No esperar al vencimiento:</strong> es conveniente pedir la prórroga{' '}
            <strong>antes</strong> de que la medida caduque para evitar quedar sin protección.
          </p>

          <h2>¿Qué pasa si el agresor no cumple la perimetral?</h2>
          <p>
            El incumplimiento de una medida perimetral tiene consecuencias graves:
          </p>
          <ul>
            <li>
              <strong>Delito penal:</strong> puede configurar el delito de{' '}
              <strong>desobediencia a la autoridad</strong> (Art. 239 del Código Penal), con pena
              de prisión.
            </li>
            <li>
              <strong>Detención inmediata:</strong> si la víctima llama al 911 y la fuerza policial
              constata el incumplimiento, puede proceder a la <strong>detención</strong>.
            </li>
            <li>
              <strong>Endurecimiento de la medida:</strong> el juez puede ampliar el perímetro,
              extender el plazo o disponer dispositivos electrónicos de monitoreo
              (&ldquo;tobillera&rdquo;).
            </li>
            <li>
              <strong>Impacto en otros procesos:</strong> el incumplimiento es prueba relevante en
              juicios de divorcio, cuidado personal y régimen de comunicación con los hijos.
            </li>
          </ul>

          <h2>¿Cómo se solicita la medida perimetral?</h2>
          <ol>
            <li>
              <strong>Denuncia previa:</strong> en comisaría, en la Oficina de Violencia Doméstica
              (OVD) de la Corte Suprema en CABA, o directamente ante el Juzgado Civil de Familia.
            </li>
            <li>
              <strong>Pedido de medidas cautelares:</strong> se solicita junto con la denuncia o
              en escrito separado, indicando los hechos, las pruebas (testigos, fotos, mensajes,
              partes médicos) y el peligro concreto.
            </li>
            <li>
              <strong>Resolución urgente:</strong> el juez debe resolver en horas o días (no
              semanas). Las medidas se dictan inaudita parte (sin escuchar al denunciado).
            </li>
            <li>
              <strong>Notificación al agresor:</strong> la medida se notifica con copia de la
              resolución. A partir de ese momento queda obligado a cumplirla.
            </li>
          </ol>
          <p>
            <strong>Patrocinio gratuito:</strong> en CABA, la víctima puede acceder a patrocinio
            jurídico gratuito a través del <strong>Patrocinio Jurídico Gratuito de la Facultad de
            Derecho UBA</strong>, la <strong>Defensoría General de la Nación</strong> y las
            defensorías zonales del barrio.
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿La perimetral se extiende automáticamente?</h3>
          <p>
            <strong>No.</strong> Si no se solicita la prórroga antes del vencimiento, la medida
            caduca. Hay que renovarla expresamente.
          </p>

          <h3>¿Puede el agresor pedir que se levante la medida?</h3>
          <p>
            Sí, pero debe presentar pruebas concretas de que las circunstancias cambiaron. El juez
            evalúa el riesgo y puede mantenerla, modificarla o levantarla.
          </p>

          <h3>¿La perimetral incluye a los hijos?</h3>
          <p>
            Si los hijos están en situación de riesgo, sí. La medida puede prohibir el contacto
            del agresor con los hijos hasta que se evalúe el régimen de comunicación bajo
            modalidad supervisada.
          </p>

          <h3>¿Cuánto tarda una perimetral en dictarse?</h3>
          <p>
            En situaciones de urgencia, el juez la dicta en{' '}
            <strong>horas o pocos días</strong>. Las medidas previstas en la Ley 26.485 se
            resuelven con carácter inmediato.
          </p>

          <h3>¿Una perimetral es un antecedente penal?</h3>
          <p>
            <strong>No.</strong> La medida perimetral es una <strong>medida cautelar civil</strong>{' '}
            dictada en el fuero de familia: no es una condena y no figura como antecedente penal.
            Distinto es el caso del <strong>incumplimiento</strong>: violar la perimetral puede
            abrir una causa penal por desobediencia a una orden judicial (art. 239 del Código
            Penal), y esa sí puede generar antecedentes.
          </p>

          <h3>¿A cuántos metros obliga una perimetral?</h3>
          <p>
            La distancia la <strong>fija el juez</strong> según el caso; no hay un número único
            establecido por ley. En la práctica suele ir de <strong>200 a 500 metros</strong> del
            domicilio, el lugar de trabajo, la escuela de los hijos y demás lugares que frecuente la
            persona protegida. La prohibición de acercamiento también alcanza el contacto por
            teléfono, redes sociales o a través de terceros.
          </p>

          <h3>¿Se puede levantar una perimetral antes de tiempo?</h3>
          <p>
            Sí. Cualquiera de las partes puede pedir el <strong>cese o la modificación</strong> de
            la medida antes de su vencimiento si cambiaron las circunstancias (informe favorable,
            mudanza, tiempo prolongado sin incidentes). El juez evalúa si subsiste el riesgo y
            resuelve. Importante: <strong>mientras el juez no ordene el levantamiento, la medida
            sigue vigente</strong> y debe cumplirse, aunque ambas partes estén de acuerdo.
          </p>

          <h2>Conclusión</h2>
          <p>
            En Argentina la medida perimetral suele durar entre{' '}
            <strong>3 y 6 meses iniciales, prorrogables las veces necesarias</strong>. El plazo
            concreto lo fija el juez en cada caso. Lo crucial no es la duración inicial sino{' '}
            <strong>pedir la prórroga antes del vencimiento</strong> mientras subsista el riesgo,
            y denunciar cualquier incumplimiento de inmediato.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Medida Perimetral</span>
            <span className="tag">Ley 26.485</span>
            <span className="tag">Orden de Protección</span>
            <span className="tag">Violencia Familiar</span>
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
              <li><a href="/servicios/violencia-familiar">Violencia familiar</a></li>
              <li><a href="/articulos/como-pedir-una-perimetral">¿Cómo pedir una perimetral? Guía paso a paso</a></li>
              <li><a href="/articulos/como-levantar-una-perimetral">¿Se puede levantar una perimetral?</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>

      <TrackedLink
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20https%3A%2F%2Fdraandreaesparza.com%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20una%20medida%20perimetral"
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
