import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL =
  'https://draandreaesparza.com/articulos/casarse-en-argentina-si-ya-te-casaste-en-el-extranjero'

export const metadata: Metadata = {
  title: '¿Te Casaste en Otro País y Querés Casarte de Nuevo en Argentina? | Dra. Esparza',
  description:
    '¿Podés volver a casarte en Argentina con la misma persona si ya te casaste en el exterior? El matrimonio extranjero ya produce efectos acá y volver a casarse puede ser delito. Qué corresponde hacer.',
  keywords:
    'casarse dos veces con la misma persona, me case en el extranjero puedo casarme en argentina, matrimonio en el exterior validez argentina, inscribir matrimonio extranjero argentina, bigamia argentina, matrimonio extranjero efectos juridicos, casarse de nuevo en argentina',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Te casaste en otro país y querés casarte de nuevo en Argentina?',
    description:
      'El matrimonio celebrado en el exterior ya produce efectos jurídicos en Argentina. Volver a casarse con la misma persona puede tener consecuencias penales.',
    images: [
      {
        url: 'https://draandreaesparza.com/assets/images/flyers/casarse-dos-veces-matrimonio-extranjero.webp',
      },
    ],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-30',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Casarte de nuevo en Argentina si ya te casaste afuera? | Dra. Esparza',
    description:
      'Tu matrimonio extranjero probablemente ya es válido en Argentina. Volver a casarte puede ser un delito. Consultá antes.',
    images: [
      'https://draandreaesparza.com/assets/images/flyers/casarse-dos-veces-matrimonio-extranjero.webp',
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Te casaste en otro país y querés casarte de nuevo en Argentina?',
  description:
    'El matrimonio celebrado en el extranjero produce efectos jurídicos en Argentina sin necesidad de volver a casarse. Celebrar un segundo matrimonio con la misma persona no duplica derechos y puede configurar el delito de bigamia del art. 134 del Código Penal. Qué corresponde hacer: inscribir el matrimonio extranjero.',
  image:
    'https://draandreaesparza.com/assets/images/flyers/casarse-dos-veces-matrimonio-extranjero.webp',
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  author: {
    '@type': 'Person',
    name: 'Maria Andrea Esparza',
    jobTitle: 'Abogada Especialista en Derecho de Familia y Derecho Internacional Privado',
    url: 'https://draandreaesparza.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Estudio Jurídico Dra. Andrea Esparza',
    url: 'https://draandreaesparza.com',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  keywords: [
    'Matrimonio en el extranjero',
    'Bigamia',
    'Inscripción de matrimonio extranjero',
    'Derecho Internacional Privado',
    'Derecho de Familia',
  ],
  articleSection: 'Derecho Internacional Privado',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Publicaciones',
      item: 'https://draandreaesparza.com/#publications',
    },
    { '@type': 'ListItem', position: 3, name: 'Casarse de nuevo en Argentina' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Me puedo casar en Argentina si ya me casé con esa misma persona en el extranjero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En principio no, y además no hace falta. Si el matrimonio celebrado en el exterior es válido según la ley del lugar de celebración, Argentina lo reconoce y ustedes ya están casados a los ojos del derecho argentino. Volver a casarse no agrega derechos: lo que corresponde es inscribir ese matrimonio extranjero, no celebrar uno nuevo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Casarse dos veces con la misma persona es delito en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede serlo. El art. 134 del Código Penal reprime con prisión de 1 a 4 años a quienes contrajeren matrimonio sabiendo ambos que existe impedimento que causa su nulidad absoluta, y el ligamen (estar ya casado) es uno de esos impedimentos según el art. 403 del Código Civil y Comercial. El art. 135 agrava la pena para quien lo oculta al otro contrayente, y el art. 136 alcanza al oficial público. Por eso conviene consultar antes de iniciar cualquier trámite.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mi matrimonio celebrado en el exterior es válido en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La validez del matrimonio se rige por el derecho del lugar de celebración (art. 2622 del Código Civil y Comercial). Si el matrimonio es válido allí y no viola los impedimentos de orden público argentino —ligamen, parentesco, falta de edad legal, falta de consentimiento—, produce efectos en Argentina sin necesidad de repetir la ceremonia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo inscribo en Argentina un matrimonio celebrado en el extranjero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se tramita ante el Registro Civil con la partida de matrimonio extranjera legalizada con apostilla de La Haya (o legalización consular si el país no es parte del Convenio) y traducida por traductor público matriculado cuando no está en español. Según la jurisdicción y el caso puede requerirse además una inscripción por vía judicial.',
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
              { label: 'Casarse de nuevo en Argentina' },
            ]}
          />
          <div className="article-category">Derecho Internacional Privado</div>
          <h1>¿Te casaste en otro país y querés casarte de nuevo en Argentina?</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            Si ya te casaste con esa persona en el exterior y ese matrimonio es válido donde se
            celebró, <strong>en Argentina ya están casados</strong>. No necesitás volver a
            casarte, y hacerlo <strong>no duplica ni refuerza</strong> ningún derecho: al
            contrario, celebrar un segundo matrimonio existiendo el primero puede configurar el
            delito de <strong>bigamia</strong>. Lo que corresponde es{' '}
            <strong>inscribir el matrimonio extranjero</strong>, no celebrar uno nuevo.
          </p>

          <h2>Por qué tu matrimonio extranjero ya vale acá</h2>
          <p>
            El <strong>art. 2622 del Código Civil y Comercial</strong> establece que la capacidad
            de las personas para contraer matrimonio, la forma del acto y su existencia y validez
            se rigen por el <strong>derecho del lugar de celebración</strong>. Es el principio
            clásico <em>lex loci celebrationis</em>: si el matrimonio es válido en el país donde se
            celebró, Argentina lo reconoce.
          </p>
          <p>
            Ese reconocimiento tiene un límite de orden público: el mismo artículo aclara que no se
            reconoce un matrimonio celebrado en el extranjero si media alguno de los impedimentos
            dirimentes de los incisos a), b), c), d) y e) del <strong>art. 403</strong> —parentesco,
            ligamen anterior, crimen, falta de edad nupcial y falta de salud mental que impida el
            discernimiento del acto—. Fuera de esos supuestos, el matrimonio produce efectos
            plenos: régimen patrimonial, vocación hereditaria, alimentos entre cónyuges, y la
            posibilidad de divorciarse en Argentina.
          </p>

          <h2>Qué pasa si igual te volvés a casar</h2>
          <p>
            Acá está el riesgo que el flyer advierte. Estar casado es, en sí mismo, un impedimento
            para casarse de nuevo: el <strong>art. 403 inc. d)</strong> del Código Civil y
            Comercial enumera el <strong>ligamen</strong> —el matrimonio anterior subsistente— entre
            los impedimentos dirimentes. Un segundo matrimonio celebrado sobre esa base es de{' '}
            <strong>nulidad absoluta</strong>.
          </p>
          <p>Y el Código Penal acompaña:</p>
          <ul>
            <li>
              <strong>Art. 134:</strong> prisión de <strong>1 a 4 años</strong> para quienes
              contrajeren matrimonio sabiendo ambos que existe impedimento que cause su nulidad
              absoluta.
            </li>
            <li>
              <strong>Art. 135:</strong> pena agravada —hasta 6 años— para quien, conociendo el
              impedimento, se lo <strong>oculta</strong> al otro contrayente.
            </li>
            <li>
              <strong>Art. 136:</strong> alcanza también al <strong>oficial público</strong> que
              celebra el matrimonio conociendo el impedimento.
            </li>
          </ul>
          <p>
            Es decir: no es un trámite redundante e inofensivo. Es un acto nulo que además puede
            tener <strong>consecuencias penales</strong> para ambos.
          </p>

          <h2>Lo que sí corresponde hacer: inscribir el matrimonio</h2>
          <p>
            El trámite correcto no es casarse otra vez, sino <strong>inscribir</strong> el
            matrimonio extranjero para que conste en el Registro Civil argentino y puedas usarlo
            ante organismos locales (ANSES, obra social, migraciones, sucesiones, bancos).
            Normalmente vas a necesitar:
          </p>
          <ul>
            <li>
              La <strong>partida o certificado de matrimonio</strong> del país de celebración.
            </li>
            <li>
              <strong>Apostilla de La Haya</strong> sobre ese documento si el país es parte del
              Convenio de 1961; si no lo es, <strong>legalización consular</strong>.
            </li>
            <li>
              <strong>Traducción</strong> por traductor público matriculado, con legalización del
              Colegio de Traductores, si el documento no está en español.
            </li>
            <li>
              Documentación de identidad de ambos cónyuges y, según la jurisdicción, acreditación
              de domicilio.
            </li>
          </ul>
          <p>
            Según el caso y la provincia, la inscripción puede hacerse directamente en sede
            administrativa o requerir una <strong>inscripción por vía judicial</strong>. Cuando el
            documento extranjero es una sentencia y no una simple partida, el camino puede ser el{' '}
            <a href="/articulos/analisis-problemas-dip-divorcio-internacional">
              reconocimiento de la decisión extranjera
            </a>
            .
          </p>

          <h2>Situaciones que conviene revisar antes</h2>
          <ul>
            <li>
              <strong>Uno de los dos tenía un matrimonio anterior no disuelto.</strong> Si ese
              vínculo previo nunca se disolvió, el problema no es de inscripción sino de validez, y
              hay que resolverlo primero.
            </li>
            <li>
              <strong>Te divorciaste en el exterior.</strong> Ese divorcio también necesita
              reconocimiento en Argentina antes de que puedas volver a casarte acá válidamente.
            </li>
            <li>
              <strong>Matrimonios religiosos o celebrados bajo derecho extranjero de base
              confesional.</strong> Requieren analizar si hubo acto civil válido en el lugar de
              celebración; es un análisis de{' '}
              <a href="/servicios/derecho-familia-internacional">
                derecho internacional privado
              </a>
              , no un trámite de mostrador.
            </li>
            <li>
              <strong>Querés divorciarte del matrimonio celebrado afuera.</strong> En muchos casos
              podés hacerlo en tribunales argentinos:{' '}
              <a href="/articulos/divorcio-en-argentina-si-te-casaste-en-el-extranjero">
                divorcio en Argentina si te casaste en el extranjero
              </a>
              .
            </li>
          </ul>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Casarnos de nuevo nos da más derechos como pareja?</h3>
          <p>
            No. Si el matrimonio extranjero es válido, ya tenés todos los efectos del matrimonio en
            Argentina. Un segundo acto no suma nada y expone a ambos a la nulidad y a la
            imputación penal.
          </p>

          <h3>¿Y si el Registro Civil me deja casarme igual?</h3>
          <p>
            Que un trámite avance no lo vuelve válido. El matrimonio sigue siendo de nulidad
            absoluta y el art. 136 del Código Penal contempla incluso la responsabilidad del
            oficial público. No es una convalidación.
          </p>

          <h3>¿Cuánto tarda inscribir un matrimonio extranjero?</h3>
          <p>
            Depende de la jurisdicción, de si el país emisor es parte del Convenio de La Haya y de
            si hace falta intervención judicial. La demora real suele estar en conseguir la
            partida legalizada en el país de origen, no en el trámite local.
          </p>

          <h3>¿Necesito abogado para inscribirlo?</h3>
          <p>
            Para una inscripción administrativa simple no siempre. Sí conviene asesorarse cuando
            hay un matrimonio o divorcio anterior, cuando el documento extranjero es una sentencia,
            o cuando el trámite tramita por vía judicial.
          </p>

          <h2>Conclusión</h2>
          <p>
            La intuición de &ldquo;casémonos también acá para que valga&rdquo; es comprensible y
            es jurídicamente equivocada. El matrimonio extranjero válido{' '}
            <strong>ya produce efectos jurídicos en Argentina</strong>; el camino es inscribirlo.
            Repetir la ceremonia no regulariza nada y puede transformar un trámite sencillo en una
            causa penal. <strong>Consultá antes.</strong>
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Matrimonio en el Extranjero</span>
            <span className="tag">Bigamia</span>
            <span className="tag">Inscripción de Matrimonio</span>
            <span className="tag">Derecho Internacional Privado</span>
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
              <li><a href="/articulos/divorcio-en-argentina-si-te-casaste-en-el-extranjero">Divorcio si te casaste en el extranjero</a></li>
              <li><a href="/articulos/rectificacion-de-partidas-registro-civil">Rectificación de partidas del Registro Civil</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
