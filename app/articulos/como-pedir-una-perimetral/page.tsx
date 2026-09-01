import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/como-pedir-una-perimetral'

export const metadata: Metadata = {
  title: '¿Cómo Pedir una Perimetral en Argentina? Guía Paso a Paso | Dra. Esparza',
  description:
    'Cómo pedir una perimetral u orden de restricción en Argentina: dónde denunciar (OVD, comisaría, juzgado), qué pruebas llevar, cuánto tarda y cómo saber si ya hay una vigente.',
  keywords:
    'como pedir una perimetral, como conseguir una orden de restricción, como hacer una restricción de acercamiento, como saber si tengo una perimetral, donde denunciar violencia familiar, OVD, orden de protección, Ley 26485',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Cómo Pedir una Perimetral en Argentina? Guía Paso a Paso',
    description:
      'Dónde denunciar, qué pruebas llevar, cuánto tarda el juez y cómo saber si hay una perimetral vigente. Ley 26.485.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/og-article-default.jpg' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-08-15',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cómo Pedir una Perimetral? | Dra. Esparza',
    description:
      'Guía paso a paso para pedir una medida perimetral u orden de restricción en Argentina: dónde, con qué pruebas y cuánto tarda.',
    images: ['https://draandreaesparza.com/assets/images/og-article-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Cómo Pedir una Perimetral en Argentina? Guía Paso a Paso',
  description:
    'Guía práctica para solicitar una medida perimetral u orden de restricción de acercamiento en Argentina: dónde denunciar, qué pruebas presentar, cuánto tarda el juez y cómo verificar si existe una medida vigente.',
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
  keywords: ['Medida Perimetral', 'Orden de Restricción', 'OVD', 'Denuncia Violencia Familiar', 'Ley 26485'],
  articleSection: 'Violencia Familiar',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: '¿Cómo Pedir una Perimetral?' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo se pide una perimetral en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se solicita al denunciar la situación de violencia: en CABA ante la Oficina de Violencia Doméstica (OVD, Lavalle 1250, atiende las 24 horas), en cualquier comisaría o comisaría de la mujer, o directamente ante el juzgado de familia con un abogado. El juez puede dictar la medida en horas o pocos días, sin escuchar previamente al denunciado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pruebas necesito para pedir una orden de restricción?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No se exige prueba acabada: basta el relato verosímil del riesgo. Ayudan los mensajes y audios amenazantes, capturas de pantalla, partes médicos, fotos de lesiones, testigos y denuncias anteriores. En la OVD un equipo interdisciplinario evalúa el riesgo el mismo día y su informe acompaña el pedido al juez.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en salir una perimetral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En situaciones de urgencia el juez la dicta en horas o pocos días. La Ley 26.485 ordena resolver las medidas preventivas urgentes de manera inmediata, sin audiencia previa con el denunciado (inaudita parte).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Pedir una perimetral tiene costo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La denuncia es gratuita y no exige abogado. Para el trámite judicial posterior existe patrocinio jurídico gratuito: en CABA, el de la Facultad de Derecho UBA, la Defensoría General de la Nación y las defensorías zonales. También puede tramitarse con abogado particular.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo sé si tengo una perimetral en mi contra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La medida no es secreta: para ser exigible debe notificarse formalmente (cédula, notificación policial o en audiencia). Si cree que existe una medida y no fue notificado, puede consultarlo en el juzgado de familia de la jurisdicción o pedir a un abogado que verifique el expediente. No hay un registro público online de consulta libre.',
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
              { label: '¿Cómo Pedir una Perimetral?' },
            ]}
          />
          <div className="article-category">Violencia Familiar</div>
          <h1>¿Cómo Pedir una Perimetral en Argentina? Guía Paso a Paso</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Agosto de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            Una <strong>medida perimetral</strong> (también llamada <strong>orden de
            restricción</strong> o <strong>restricción de acercamiento</strong>) se pide al{' '}
            <strong>denunciar la situación de violencia</strong>: en CABA ante la{' '}
            <strong>Oficina de Violencia Doméstica (OVD)</strong>, en cualquier comisaría, o
            directamente ante el juzgado de familia. La denuncia es <strong>gratuita</strong>, no
            exige abogado ni prueba acabada, y en casos urgentes el juez dicta la medida{' '}
            <strong>en horas o pocos días</strong>.
          </p>
          <p>
            <strong>Si está en peligro ahora, llame al 911.</strong> La línea{' '}
            <strong>144</strong> brinda orientación en violencia de género las 24 horas.
          </p>

          <h2>Dónde se pide, según dónde esté</h2>
          <ul>
            <li>
              <strong>CABA — Oficina de Violencia Doméstica (OVD):</strong> Lavalle 1250, atiende
              las <strong>24 horas, todos los días</strong>. Es la vía más completa: un equipo
              interdisciplinario (abogados, médicos, psicólogos, trabajadores sociales) toma la
              denuncia, evalúa el riesgo el mismo día y deriva el caso al juzgado con un informe
              que respalda el pedido de medidas.
            </li>
            <li>
              <strong>Cualquier comisaría o comisaría de la mujer:</strong> la denuncia policial
              se remite al juzgado competente, que resuelve las medidas de protección.
            </li>
            <li>
              <strong>Juzgado de familia directamente:</strong> con patrocinio de un abogado se
              presenta la denuncia con el pedido de medidas cautelares. Es la vía habitual cuando
              la situación se enmarca en un conflicto de familia ya judicializado (divorcio,
              alimentos, cuidado personal).
            </li>
            <li>
              <strong>Provincia de Buenos Aires:</strong> comisarías de la mujer y la familia,
              fiscalías y juzgados de familia o de paz según el partido.
            </li>
          </ul>

          <h2>Qué pruebas conviene llevar</h2>
          <p>
            La ley no exige prueba acabada para dictar una medida urgente: alcanza con un{' '}
            <strong>relato verosímil</strong> de los hechos y del riesgo. Pero todo elemento suma
            fuerza al pedido:
          </p>
          <ul>
            <li>Mensajes, audios y correos amenazantes; capturas de pantalla de redes sociales</li>
            <li>Partes médicos y constancias de guardia por lesiones</li>
            <li>Fotos de lesiones o daños</li>
            <li>Testigos (vecinos, familiares, compañeros de trabajo)</li>
            <li>Denuncias anteriores, aunque no hayan prosperado</li>
          </ul>

          <h2>El trámite, paso a paso</h2>
          <ol>
            <li>
              <strong>Denuncia:</strong> en la OVD, comisaría o juzgado. Se relatan los hechos, se
              identifican agresor y grupo familiar, y se deja constancia del riesgo.
            </li>
            <li>
              <strong>Pedido de medidas:</strong> junto con la denuncia (o por escrito separado)
              se solicita la prohibición de acercamiento y contacto; puede pedirse también la{' '}
              <strong>exclusión del hogar</strong>, la restitución de efectos personales y un
              régimen provisorio de alimentos y comunicación con los hijos.
            </li>
            <li>
              <strong>Resolución urgente:</strong> el juez resuelve <strong>inaudita parte</strong>{' '}
              (sin escuchar antes al denunciado), en horas o pocos días según la urgencia.
            </li>
            <li>
              <strong>Notificación:</strong> la medida se notifica al agresor; desde ese momento
              queda obligado a cumplirla y su violación configura desobediencia (art. 239 del
              Código Penal).
            </li>
            <li>
              <strong>Seguimiento:</strong> la medida se dicta por un plazo (habitualmente 3 a 6
              meses) y debe <strong>prorrogarse antes del vencimiento</strong> mientras subsista
              el riesgo. Vea{' '}
              <a href="/articulos/cuanto-dura-una-medida-perimetral-argentina">
                ¿cuánto dura una perimetral?
              </a>
            </li>
          </ol>

          <h2>¿Cuánto cuesta? Patrocinio gratuito</h2>
          <p>
            La denuncia no tiene costo y no requiere abogado. Para sostener el expediente
            (prórrogas, incidentes, medidas complementarias) sí se necesita patrocinio letrado,
            que puede ser <strong>gratuito</strong>: en CABA, el Patrocinio Jurídico Gratuito de
            la Facultad de Derecho (UBA), la Defensoría General de la Nación y las defensorías
            zonales; en Provincia, las defensorías oficiales departamentales. También puede optar
            por un abogado particular de confianza, especialmente si la perimetral se cruza con un
            divorcio, alimentos o cuidado personal en trámite.
          </p>

          <h2>¿Cómo saber si hay una perimetral vigente?</h2>
          <p>
            Otra consulta frecuente, desde ambos lados de la medida:
          </p>
          <ul>
            <li>
              <strong>Si usted la pidió:</strong> el juzgado le notifica la resolución con el
              plazo. Puede consultar el estado del expediente en la mesa de entradas del juzgado o
              a través de su abogado.
            </li>
            <li>
              <strong>Si cree que hay una en su contra:</strong> para ser exigible, la medida debe
              habérsele <strong>notificado formalmente</strong> (cédula, notificación policial o
              en audiencia). No existe un registro público online de consulta libre: la
              verificación se hace en el juzgado de familia de la jurisdicción, personalmente o
              mediante abogado.
            </li>
          </ul>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Pueden pedir una perimetral los varones o solo las mujeres?</h3>
          <p>
            Cualquier persona en situación de violencia familiar puede pedir medidas de
            protección. La Ley 26.485 protege específicamente a las mujeres, pero la Ley 24.417 de
            Protección contra la Violencia Familiar y los códigos procesales amparan a todo
            integrante del grupo familiar, incluidos varones, niños y adultos mayores.
          </p>

          <h3>¿La perimetral puede incluir a mis hijos?</h3>
          <p>
            Sí. Si los hijos están en riesgo, la medida puede prohibir también el acercamiento a
            ellos y a su escuela, y el juez puede fijar un régimen de comunicación supervisado
            mientras dure la medida.
          </p>

          <h3>¿Qué pasa después de que me la otorgan?</h3>
          <p>
            Guarde copia de la resolución, tenga el número de expediente a mano y, ante cualquier
            incumplimiento, llame al 911 y denúncielo en el juzgado: el incumplimiento es un
            delito y habilita a endurecer la medida. Y recuerde pedir la{' '}
            <strong>prórroga antes del vencimiento</strong>; la medida no se renueva sola.
          </p>

          <h3>¿Se puede levantar después?</h3>
          <p>
            Sí, por orden judicial, a pedido de cualquiera de las partes y con prueba del cambio
            de circunstancias. Lo explicamos en detalle en{' '}
            <a href="/articulos/como-levantar-una-perimetral">
              ¿se puede levantar una perimetral?
            </a>
          </p>

          <h2>Conclusión</h2>
          <p>
            Pedir una perimetral es <strong>gratuito, rápido y no exige prueba acabada</strong>:
            la vía más efectiva en CABA es la OVD (Lavalle 1250, 24 horas), y en urgencias el 911.
            Con la medida dictada, lo decisivo es documentar todo incumplimiento y pedir la
            prórroga a tiempo. Si la situación se cruza con un divorcio, alimentos o el cuidado de
            los hijos, conviene una estrategia legal integral.
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Medida Perimetral</span>
            <span className="tag">Orden de Restricción</span>
            <span className="tag">OVD</span>
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
              <li><a href="/articulos/que-es-una-perimetral">¿Qué es una perimetral y cómo funciona?</a></li>
              <li><a href="/articulos/cuanto-dura-una-medida-perimetral-argentina">¿Cuánto dura una perimetral en Argentina?</a></li>
              <li><a href="/articulos/como-levantar-una-perimetral">¿Se puede levantar una perimetral?</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de hijos</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
