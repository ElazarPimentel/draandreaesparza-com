import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/como-levantar-una-perimetral'

export const metadata: Metadata = {
  title: '¿Se Puede Levantar una Perimetral? Cómo y Cuándo | Dra. Esparza',
  description:
    '¿Se puede levantar una perimetral en Argentina? Sí: quién puede pedirlo, cómo se tramita el cese de la restricción, qué evalúa el juez y qué pasa si ambos están de acuerdo.',
  keywords:
    'se puede levantar una perimetral, como levantar una perimetral, levantar una restricción perimetral, cese de medida perimetral, levantar orden de restricción, modificar perimetral, perimetral vencida, Ley 26485',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Se Puede Levantar una Perimetral en Argentina? Cómo y Cuándo',
    description:
      'Quién puede pedir el levantamiento de una medida perimetral o restricción de acercamiento, cómo se tramita y qué evalúa el juez.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Se Puede Levantar una Perimetral? | Dra. Esparza',
    description:
      'Cómo se pide el cese de una medida perimetral o restricción de acercamiento en Argentina, quién puede hacerlo y qué evalúa el juez.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Se Puede Levantar una Perimetral en Argentina? Cómo y Cuándo se Levanta',
  description:
    'Quién puede pedir el levantamiento o cese de una medida perimetral (restricción de acercamiento), cómo se tramita ante el juzgado y qué evalúa el juez, según la Ley 26.485.',
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
  keywords: ['Medida Perimetral', 'Restricción de Acercamiento', 'Cese de Medida Cautelar', 'Ley 26485', 'Violencia Familiar'],
  articleSection: 'Violencia Familiar',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Se Puede Levantar una Perimetral?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Se puede levantar una perimetral en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La medida perimetral es una medida cautelar, no una condena: cualquiera de las partes puede pedir al juzgado su cese o modificación si cambiaron las circunstancias que la justificaron. El juez evalúa si subsiste el riesgo y resuelve. Mientras no lo ordene, la medida sigue vigente y debe cumplirse.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién puede pedir que se levante una perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tanto la persona protegida como la persona restringida pueden pedir el levantamiento. La persona protegida puede manifestar que cesó la situación de riesgo; la persona restringida debe acreditar con pruebas concretas que cambiaron las circunstancias (tiempo sin incidentes, informes psicológicos favorables, mudanza, tratamiento realizado).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Si ambos están de acuerdo, la perimetral se levanta sola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El acuerdo de las partes no levanta la medida por sí solo: hay que presentarlo al juzgado y esperar la resolución del juez. Hasta que el juez ordene el cese, acercarse sigue siendo incumplimiento y puede configurar el delito de desobediencia (art. 239 del Código Penal), aunque la persona protegida haya consentido el contacto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se pide el levantamiento de una restricción perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se presenta un escrito ante el mismo juzgado que dictó la medida, pidiendo el cese o la modificación y acompañando las pruebas del cambio de circunstancias. El juez puede pedir informes al equipo interdisciplinario, escuchar a las partes y luego resolver: mantener, modificar (por ejemplo reducir el perímetro) o levantar la medida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si la perimetral ya venció?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si la medida tenía plazo y venció sin que se pidiera prórroga, caduca: ya no hay restricción vigente y no hace falta pedir su levantamiento. Conviene verificarlo en el juzgado antes de actuar, porque retomar el contacto con una medida todavía vigente configura desobediencia.',
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
              { label: '¿Se Puede Levantar una Perimetral?' },
            ]}
          />
          <div className="article-category">Violencia Familiar</div>
          <h1>¿Se Puede Levantar una Perimetral? Cómo y Cuándo</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            <strong>Sí, una perimetral se puede levantar.</strong> La medida perimetral (también
            llamada <strong>restricción perimetral</strong>, <strong>orden de restricción</strong> o{' '}
            <strong>restricción de acercamiento</strong>) es una <strong>medida cautelar</strong>,
            no una condena: se dicta mientras exista una situación de riesgo, y cualquiera de las
            partes puede pedir al juzgado su <strong>cese o modificación</strong> cuando esas
            circunstancias cambian.
          </p>
          <p>
            <strong>Lo que nunca hay que hacer:</strong> dejar de cumplirla por decisión propia.
            Mientras el juez no ordene el levantamiento, la medida sigue vigente, incluso si ambas
            partes están de acuerdo en retomar el contacto.
          </p>

          <h2>¿Quién puede pedir el levantamiento?</h2>
          <ul>
            <li>
              <strong>La persona protegida:</strong> puede manifestar al juzgado que cesó la
              situación de riesgo y pedir el cese o la reducción de la medida. El juez no está
              obligado a levantarla automáticamente: si advierte que el pedido responde a presiones
              o a un ciclo de violencia, puede mantenerla.
            </li>
            <li>
              <strong>La persona restringida:</strong> puede pedir el cese acreditando con pruebas
              concretas que las circunstancias cambiaron: tiempo prolongado sin incidentes ni
              intentos de contacto, informes psicológicos o de tratamiento, mudanza a otra ciudad,
              cumplimiento estricto de la medida.
            </li>
          </ul>

          <h2>Cómo se tramita el cese, paso a paso</h2>
          <ol>
            <li>
              <strong>Escrito al juzgado:</strong> se presenta ante el mismo juzgado que dictó la
              medida un escrito pidiendo el <strong>levantamiento o la modificación</strong>, con
              patrocinio letrado.
            </li>
            <li>
              <strong>Prueba del cambio de circunstancias:</strong> se acompañan los elementos que
              acreditan que el riesgo cesó (informes, constancias de tratamiento, ausencia de
              nuevas denuncias).
            </li>
            <li>
              <strong>Evaluación del juez:</strong> el juez puede pedir un informe del equipo
              interdisciplinario del juzgado, citar a las partes por separado y valorar el
              historial completo del expediente.
            </li>
            <li>
              <strong>Resolución:</strong> el juez puede <strong>mantener</strong> la medida,{' '}
              <strong>modificarla</strong> (reducir el perímetro, autorizar contacto por temas
              puntuales de los hijos) o <strong>levantarla</strong>. Recién con la resolución
              firme cesa la restricción.
            </li>
          </ol>

          <h2>¿Y si los dos están de acuerdo?</h2>
          <p>
            Es la consulta más frecuente, y la respuesta sorprende: <strong>el acuerdo entre las
            partes no levanta la medida</strong>. La restricción la dictó un juez y solo un juez
            puede dejarla sin efecto. Si la pareja se reconcilia y retoma la convivencia con la
            medida vigente, la persona restringida sigue en situación de incumplimiento y puede
            ser detenida o imputada por <strong>desobediencia a una orden judicial</strong> (art.
            239 del Código Penal) ante cualquier denuncia o control.
          </p>
          <p>
            El camino correcto es presentar el acuerdo al juzgado y pedir el cese formal de la
            medida antes de retomar el contacto.
          </p>

          <h2>¿Qué pasa si la perimetral venció?</h2>
          <p>
            Si la medida se dictó por un plazo (por ejemplo 90 días) y ese plazo venció sin que se
            pidiera prórroga, la medida <strong>caduca</strong>: no hay restricción vigente y no
            hace falta &ldquo;levantarla&rdquo;. Antes de actuar conviene <strong>verificar en el
            expediente</strong> que no exista prórroga ni una medida nueva, porque el error
            contrario, asumir que venció cuando fue prorrogada, expone a una causa penal. Sobre los
            plazos y prórrogas puede leer nuestro artículo{' '}
            <a href="/articulos/cuanto-dura-una-medida-perimetral-argentina">
              ¿Cuánto dura una perimetral en Argentina?
            </a>
          </p>

          <h2>¿Cuánto tarda el juez en resolver?</h2>
          <p>
            No hay un plazo único: depende del juzgado y de si pide informes interdisciplinarios.
            En la práctica, un pedido de cese con prueba sólida y sin oposición suele resolverse
            en <strong>semanas</strong>; si hay oposición de la otra parte o el juez ordena
            evaluaciones, puede demorar más.
          </p>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Se puede levantar una restricción perimetral apenas dictada?</h3>
          <p>
            La persona restringida puede <strong>apelar</strong> la medida si considera que fue
            dictada sin fundamento, pero la apelación no suspende su cumplimiento. Pedir el cese
            inmediatamente después del dictado, sin un cambio real de circunstancias, tiene pocas
            chances de prosperar.
          </p>

          <h3>¿El levantamiento borra la denuncia o el antecedente?</h3>
          <p>
            El cese de la medida no borra el expediente: la denuncia y las constancias quedan en
            el juzgado y pueden valorarse si hay hechos nuevos. La perimetral en sí{' '}
            <strong>no es un antecedente penal</strong>; sí puede serlo una condena por
            incumplimiento.
          </p>

          <h3>¿Puedo pedir que se modifique en lugar de levantarla?</h3>
          <p>
            Sí. La modificación es a veces el pedido más viable: reducir la distancia, exceptuar
            los actos escolares de los hijos, autorizar la comunicación por un canal supervisado
            para coordinar el régimen de comunicación. El juez puede adaptar la medida sin
            eliminar la protección.
          </p>

          <h2>Conclusión</h2>
          <p>
            La perimetral se levanta <strong>por orden del juez, nunca por acuerdo privado</strong>.
            Quien quiera dejarla sin efecto, sea la persona protegida o la restringida, debe
            pedirlo por escrito al juzgado con pruebas del cambio de circunstancias. Hasta la
            resolución judicial, la medida debe cumplirse en su totalidad.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Medida Perimetral</span>
            <span className="tag">Restricción de Acercamiento</span>
            <span className="tag">Cese de Medida</span>
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
              <li><a href="/articulos/cuanto-dura-una-medida-perimetral-argentina">¿Cuánto dura una perimetral en Argentina?</a></li>
              <li><a href="/articulos/como-pedir-una-perimetral">¿Cómo pedir una perimetral?</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de familia</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
