import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/que-es-una-perimetral'

export const metadata: Metadata = {
  title: '¿Qué es una Perimetral y Cómo Funciona en Argentina? | Dra. Esparza',
  description:
    'Qué es una medida perimetral en Argentina: qué prohíbe exactamente, a quién protege, qué ley la regula (Ley 26.485), qué pasa si se incumple y qué NO es. Explicado en lenguaje simple.',
  keywords:
    'que es una perimetral, que es una medida perimetral, perimetral que es, que significa perimetral, orden de restricción qué es, restricción perimetral significado, perimetral argentina, Ley 26485',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Qué es una Perimetral y Cómo Funciona en Argentina?',
    description:
      'Qué prohíbe exactamente una perimetral, a quién protege, qué ley la regula y qué pasa si se incumple. En lenguaje simple.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-09-01',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué es una Perimetral? | Dra. Esparza',
    description:
      'Qué es una medida perimetral en Argentina, qué prohíbe, a quién protege y qué pasa si se incumple. Explicado en lenguaje simple.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es una Perimetral y Cómo Funciona en Argentina?',
  description:
    'Explicación en lenguaje simple de la medida perimetral en Argentina: qué prohíbe, a quién protege, qué ley la regula, cómo se controla su cumplimiento y qué no es.',
  image: 'https://draandreaesparza.com/assets/images/og-article-default.jpg',
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
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
  keywords: ['Medida Perimetral', 'Orden de Restricción', 'Ley 26485', 'Violencia Familiar'],
  articleSection: 'Violencia Familiar',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Qué es una Perimetral?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una medida perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una orden de un juez que prohíbe a una persona acercarse a otra a menos de una distancia determinada (habitualmente entre 200 y 500 metros) y a los lugares que esa persona frecuenta: su casa, su trabajo, la escuela de los hijos. En Argentina la dicta principalmente el juez de familia como medida de protección urgente, sobre la base de la Ley 26.485 y las leyes de violencia familiar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Perimetral y orden de restricción son lo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En la práctica argentina sí: "medida perimetral", "orden de restricción", "restricción de acercamiento" y "prohibición de acercamiento" nombran la misma medida de protección. "Orden de alejamiento" es el nombre habitual en España.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La perimetral prohíbe también llamadas y mensajes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solo si el juez lo ordena expresamente. Por eso la medida suele dictarse junto con una prohibición de todo contacto: teléfono, WhatsApp, redes sociales o a través de terceros. Hay que leer la resolución concreta: lo prohibido es exactamente lo que dice la orden.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si se incumple una perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El incumplimiento debe denunciarse (911 en urgencia, y constancia en el juzgado). Puede configurar el delito de desobediencia a la autoridad (art. 239 del Código Penal) y habilita al juez a endurecer la protección: ampliar la distancia, ordenar botón antipánico, tobillera electrónica o exclusión del hogar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Una perimetral figura en los antecedentes penales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Es una medida de protección civil, no una condena penal: no genera antecedentes. Distinto es el incumplimiento, que puede dar lugar a una causa penal por desobediencia.',
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
              { label: '¿Qué es una Perimetral?' },
            ]}
          />
          <div className="article-category">Violencia Familiar</div>
          <h1>¿Qué es una Perimetral y Cómo Funciona en Argentina?</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Septiembre de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            Una <strong>medida perimetral</strong> es una orden de un juez que le prohíbe a una
            persona <strong>acercarse a otra</strong> a menos de una distancia determinada —
            habitualmente entre <strong>200 y 500 metros</strong> — y a los lugares que esa
            persona frecuenta: su casa, su trabajo, la escuela de los hijos. En Argentina la
            dicta sobre todo el <strong>juez de familia</strong> como medida de protección
            urgente en situaciones de violencia. No es una condena ni requiere un juicio: es una
            protección inmediata mientras la situación se resuelve.
          </p>
          <p>
            Si al leer esto siente que su situación la supera, no hace falta que la resuelva
            sola o solo: parte de nuestro trabajo es ordenar el panorama en una primera
            consulta.{' '}
            <TrackedLink
              href="/#contact"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_intro_reassure"
            >
              Puede escribirnos por acá
            </TrackedLink>{' '}
            y le decimos, con su caso concreto, qué corresponde hacer.
          </p>

          <h2>Los nombres: perimetral, orden de restricción, restricción de acercamiento</h2>
          <p>
            En la práctica de los tribunales argentinos todos estos nombres señalan la misma
            medida: <strong>medida perimetral</strong>, <strong>orden de restricción</strong>,{' '}
            <strong>restricción de acercamiento</strong>, <strong>prohibición de
            acercamiento</strong>. En España se la conoce como <em>orden de alejamiento</em> — un
            término que también circula acá por las series y los medios. El nombre técnico varía;
            lo que importa es el contenido de la resolución: qué distancia fija, a qué lugares
            alcanza y por cuánto tiempo. De la duración nos ocupamos en detalle en{' '}
            <TrackedLink
              href="/articulos/cuanto-dura-una-medida-perimetral-argentina"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_to_cuanto_dura"
            >
              ¿cuánto dura una perimetral en Argentina?
            </TrackedLink>
          </p>

          <h2>Qué prohíbe exactamente (y qué no)</h2>
          <p>La resolución del juez define el alcance. Lo típico:</p>
          <ul>
            <li>
              <strong>Acercarse a la persona protegida</strong> a menos de la distancia fijada,
              en cualquier lugar donde esté.
            </li>
            <li>
              <strong>Acercarse a lugares determinados:</strong> el domicilio, el trabajo, la
              escuela de los hijos, aunque la persona protegida no esté allí en ese momento.
            </li>
            <li>
              <strong>Todo contacto, si el juez lo ordena:</strong> llamadas, mensajes, WhatsApp,
              redes sociales, o mensajes a través de familiares y conocidos. Esta prohibición de
              contacto suele dictarse junto con la perimetral, pero es una orden distinta — hay
              que leer la resolución concreta.
            </li>
          </ul>
          <p>
            Igual de importante es lo que la perimetral <strong>no</strong> es:
          </p>
          <ul>
            <li>
              <strong>No es una condena penal</strong> ni figura en los antecedentes. Es una
              medida de protección, dictada muchas veces sin escuchar antes al denunciado
              (inaudita parte), justamente porque la urgencia no admite demora.
            </li>
            <li>
              <strong>No decide el fondo de ningún conflicto:</strong> no define un divorcio, ni
              la cuota alimentaria, ni con quién viven los hijos. Para eso siguen los procesos
              correspondientes.
            </li>
            <li>
              <strong>No es permanente:</strong> se dicta por un plazo y puede prorrogarse,
              modificarse o dejarse sin efecto según cómo evolucione la situación.
            </li>
          </ul>

          <h2>Quién la dicta y qué ley la regula</h2>
          <p>
            En la Argentina la base normativa principal es la <strong>Ley 26.485</strong> de
            protección integral contra la violencia hacia las mujeres, junto con la Ley 24.417
            de protección contra la violencia familiar y sus equivalentes provinciales. Estas
            leyes facultan al juez — habitualmente el de <strong>familia</strong> — a dictar
            medidas preventivas urgentes: la perimetral es la más conocida, pero conviven con
            ella la exclusión del hogar, la prohibición de contacto, el botón antipánico y la
            tobillera electrónica.
          </p>
          <p>
            La medida protege a quien denuncia, y puede alcanzar también a los hijos. Cuando hay
            chicos en el medio, la perimetral suele cruzarse con el régimen de comunicación y el{' '}
            <TrackedLink
              href="/servicios/cuidado-personal"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_to_cuidado_personal"
            >
              cuidado personal de los hijos
            </TrackedLink>{' '}
            — ahí es donde más vale la pena tener una estrategia pensada, porque una medida mal
            planteada puede complicar la revinculación después.
          </p>

          <h2>Cómo se controla y qué pasa si se incumple</h2>
          <p>
            La perimetral obliga desde que se <strong>notifica</strong>. Si la persona denunciada
            se acerca igual, el incumplimiento se denuncia — al <strong>911</strong> en la
            urgencia, y dejando constancia en el juzgado. Incumplir puede configurar el delito de{' '}
            <strong>desobediencia a la autoridad</strong> (art. 239 del Código Penal) y habilita
            al juez a endurecer la protección: más distancia, botón antipánico, tobillera,
            exclusión del hogar. Cada incumplimiento documentado (mensajes, testigos, cámaras)
            fortalece el expediente.
          </p>
          <p>
            Pedirla, por su parte, es más simple de lo que se cree: la denuncia es gratuita, no
            exige abogado y en casos urgentes el juez resuelve en horas. El paso a paso — dónde
            ir según dónde viva, qué llevar, cuánto tarda — está explicado en{' '}
            <TrackedLink
              href="/articulos/como-pedir-una-perimetral"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_to_como_pedir"
            >
              ¿cómo pedir una perimetral?
            </TrackedLink>{' '}
            Puede hacerlo por su cuenta. Y si prefiere no atravesarlo en soledad, o quiere
            asegurarse de que el pedido quede bien planteado desde el primer día,{' '}
            <TrackedLink
              href="/#contact"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_mid_reassure"
            >
              escríbanos
            </TrackedLink>{' '}
            y lo vemos juntos.
          </p>

          <h2>La perimetral dentro de un conflicto de familia más grande</h2>
          <p>
            Es raro que una perimetral aparezca sola. Casi siempre forma parte de un conflicto
            mayor: una separación, una denuncia por{' '}
            <TrackedLink
              href="/servicios/violencia-familiar"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_to_violencia_familiar"
            >
              violencia familiar
            </TrackedLink>
            , una disputa por los hijos o por los alimentos. Tratarla como un trámite aislado es
            el error más común que vemos: la medida se pide (o se contesta) sin pensar en cómo
            impacta en el resto — en el divorcio que viene, en el régimen de comunicación con los
            chicos, en la causa penal si la hay. Una estrategia integral evita que lo que hoy
            protege, mañana entorpezca.
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Perimetral y orden de restricción son lo mismo?</h3>
          <p>
            Sí. En Argentina los tribunales y la práctica usan los dos nombres (también
            «restricción de acercamiento» y «prohibición de acercamiento») para la misma medida
            de protección.
          </p>

          <h3>¿La perimetral prohíbe también llamadas y mensajes?</h3>
          <p>
            Solo si el juez lo ordenó expresamente. Por eso suele dictarse junto con una
            prohibición de contacto. Lo prohibido es exactamente lo que dice la resolución — ni
            más ni menos.
          </p>

          <h3>¿Figura en los antecedentes penales?</h3>
          <p>
            No: es una medida de protección civil, no una condena. Lo que sí puede generar una
            causa penal es incumplirla.
          </p>

          <h3>¿Cuántos metros son?</h3>
          <p>
            Lo fija el juez en cada caso; lo habitual en la práctica argentina es entre 200 y
            500 metros, con alcance a domicilio, trabajo y escuela de los hijos.
          </p>

          <h3>¿Se puede levantar o modificar?</h3>
          <p>
            Sí — la medida no es permanente y puede modificarse o dejarse sin efecto si cambian
            las circunstancias. Lo explicamos en{' '}
            <TrackedLink
              href="/articulos/como-levantar-una-perimetral"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_faq_to_como_levantar"
            >
              ¿se puede levantar una perimetral?
            </TrackedLink>
          </p>

          <h2>Conclusión</h2>
          <p>
            Una perimetral es una <strong>protección urgente y temporal</strong>: prohíbe el
            acercamiento, se dicta rápido, no es una condena y no resuelve el conflicto de fondo.
            Entenderla es el primer paso, y pedirla está al alcance de cualquiera. Si su
            situación involucra hijos, una separación o una denuncia cruzada, ahí el mapa se
            complica — y es exactamente el tipo de caso en el que trabajamos todos los días. Una
            consulta a tiempo suele ahorrar meses de idas y vueltas:{' '}
            <TrackedLink
              href="/#contact"
              trackEvent="cta_click"
              trackSource="que_es_perimetral_conclusion_offer"
            >
              contáctenos
            </TrackedLink>{' '}
            y lo conversamos.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Medida Perimetral</span>
            <span className="tag">Orden de Restricción</span>
            <span className="tag">Ley 26.485</span>
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
              <li><a href="/articulos/como-pedir-una-perimetral">¿Cómo pedir una perimetral?</a></li>
              <li><a href="/articulos/cuanto-dura-una-medida-perimetral-argentina">¿Cuánto dura una perimetral en Argentina?</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
