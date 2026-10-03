import type { Metadata } from 'next'
import ArticleNav from '@/components/ArticleNav'
import Breadcrumb from '@/components/Breadcrumb'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'

const CANONICAL = 'https://draandreaesparza.com/articulos/divorcio-de-un-diplomatico'

export const metadata: Metadata = {
  title: 'Divorcio de un Diplomático en Argentina: Inmunidad, Jurisdicción e Hijos | Dra. Esparza',
  description:
    'Cómo divorciarse de un diplomático (o siendo diplomático): inmunidad de la Convención de Viena, qué jueces son competentes, foro de necesidad, reconocimiento de la sentencia extranjera, situación migratoria e hijos. Buenos Aires, Argentina.',
  keywords:
    'divorcio diplomático, divorcio de un diplomático argentina, inmunidad diplomática divorcio, convención de viena divorcio, divorcio cónsul, divorcio servicio exterior, foro de necesidad divorcio, esposa de diplomático divorcio',
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    languages: { 'es-AR': CANONICAL },
  },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: '¿Divorcio de un Diplomático? Inmunidad, Jurisdicción e Hijos',
    description:
      'La inmunidad diplomática puede impedir el divorcio en el país donde vive la familia. Qué jueces son competentes y cómo se protege a los hijos.',
    images: [{ url: 'https://draandreaesparza.com/assets/images/flyers/divorcio-diplomatico.webp' }],
    siteName: 'Dra. Andrea Esparza - Estudio Jurídico',
    locale: 'es_AR',
    publishedTime: '2026-10-03',
    authors: ['Maria Andrea Esparza'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Divorcio de un Diplomático? Inmunidad, Jurisdicción e Hijos | Dra. Esparza',
    description:
      'La inmunidad diplomática puede impedir el divorcio en el país donde vive la familia. Qué jueces son competentes.',
    images: ['https://draandreaesparza.com/assets/images/flyers/divorcio-diplomatico.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Divorcio de un Diplomático: Inmunidad, Jurisdicción, Migraciones e Hijos',
  description:
    'Cómo afecta la inmunidad de la Convención de Viena de 1961 al divorcio de un agente diplomático, qué jueces son competentes según el Código Civil y Comercial y cómo se protege a los hijos en una vida internacional.',
  image: 'https://draandreaesparza.com/assets/images/flyers/divorcio-diplomatico.webp',
  datePublished: '2026-10-03',
  dateModified: '2026-10-03',
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
  keywords: ['Divorcio Internacional', 'Inmunidad Diplomática', 'Convención de Viena 1961', 'Art. 2621 CCyCN', 'Foro de Necesidad'],
  articleSection: 'Divorcios Internacionales',
  inLanguage: 'es-AR',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://draandreaesparza.com/' },
    { '@type': 'ListItem', position: 2, name: 'Publicaciones', item: 'https://draandreaesparza.com/#publications' },
    { '@type': 'ListItem', position: 3, name: 'Divorcio de un Diplomático' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puedo demandar el divorcio en Argentina a un diplomático extranjero acreditado en el país?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Como regla, no sin una renuncia. El art. 31 de la Convención de Viena sobre Relaciones Diplomáticas de 1961 otorga al agente diplomático inmunidad de la jurisdicción civil del Estado receptor, y el divorcio no está entre las excepciones. El Estado que lo envió puede renunciar a esa inmunidad, pero la renuncia debe ser expresa (art. 32). La alternativa habitual es demandar ante los tribunales del país del diplomático, que la inmunidad no excluye (art. 31.4).',
      },
    },
    {
      '@type': 'Question',
      name: 'Soy cónyuge de un diplomático argentino destinado en el exterior: ¿dónde me divorcio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el país donde está destinado, el diplomático argentino goza de inmunidad, así que en general no puede ser demandado allí. Los tribunales argentinos no están alcanzados por esa inmunidad (art. 31.4 de la Convención de Viena). Su competencia surge del art. 2621 CCyCN (último domicilio conyugal efectivo o domicilio del demandado) y, si esas reglas no la habilitan, del foro de necesidad del art. 2602 CCyCN, previsto para evitar la denegación de justicia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los cónsules también tienen inmunidad para un divorcio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No con el mismo alcance. La Convención de Viena sobre Relaciones Consulares de 1963 (art. 43) limita la inmunidad de funcionarios y empleados consulares a los actos ejecutados en el ejercicio de las funciones consulares. Un divorcio es un asunto personal, por lo que en principio un cónsul puede ser demandado en el país donde ejerce, si sus jueces son competentes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa con la residencia de mis hijos si nos divorciamos durante una misión?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El domicilio de los hijos menores es el de quienes ejercen la responsabilidad parental y, si los padres se domicilian en Estados distintos, el de su residencia habitual (art. 2614 CCyCN). Trasladarlos a otro país sin el acuerdo del otro progenitor o sin autorización judicial puede dar lugar a un pedido de restitución internacional (art. 2642 CCyCN y convenciones vigentes).',
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
              { label: 'Divorcio de un Diplomático' },
            ]}
          />
          <div className="article-category">Divorcios Internacionales</div>
          <h1>¿Divorcio de un Diplomático? Inmunidad, Jurisdicción, Migraciones e Hijos</h1>
          <div className="article-meta">
            <span className="article-author">Dra. Maria Andrea Esparza</span>
            <span className="article-date">Octubre de 2026</span>
          </div>
        </header>

        <div className="article-content">
          <h2>Respuesta rápida</h2>
          <p>
            Un diplomático se divorcia como cualquier persona, pero <strong>no en cualquier
            país</strong>. La inmunidad que le reconoce la Convención de Viena de 1961 suele
            impedir que lo demanden en el país donde está destinado, que muchas veces es justamente
            donde vive la familia. Por eso lo primero no es redactar la demanda: es definir
            <strong> ante qué jueces se puede presentar</strong> y qué va a pasar después con la
            sentencia, la residencia de cada uno y los hijos.
          </p>
          <p>
            Si estás en esta situación, no tenés que resolverla solo/a ni a ciegas.{' '}
            <TrackedLink
              href="/#contact"
              trackEvent="cta_click"
              trackSource="divorcio_diplomatico_intro_reassure"
            >
              Escribime
            </TrackedLink>{' '}
            y vemos, con tu caso concreto, dónde conviene iniciar el divorcio.
          </p>

          <h2>Por qué el divorcio de un diplomático es distinto</h2>
          <p>
            El <strong>art. 31 de la Convención de Viena sobre Relaciones Diplomáticas</strong>{' '}
            establece que el agente diplomático goza de inmunidad de la jurisdicción penal del
            Estado receptor y también de su jurisdicción civil y administrativa. Las únicas
            excepciones civiles son tres:
          </p>
          <ul>
            <li>acciones reales sobre inmuebles particulares en el Estado receptor (salvo que los posea por cuenta de su Estado para la misión);</li>
            <li>acciones sucesorias en las que intervenga a título privado;</li>
            <li>acciones por actividades profesionales o comerciales ejercidas fuera de sus funciones oficiales.</li>
          </ul>
          <p>
            <strong>El divorcio no está en esa lista.</strong> Tampoco los alimentos ni la
            división de bienes muebles. En consecuencia, mientras dure su misión, los tribunales
            del país donde está acreditado no pueden, como regla, tramitar una demanda de divorcio
            en su contra.
          </p>
          <p>
            Esa inmunidad se extiende a los <strong>miembros de su familia que formen parte de su
            casa</strong>, siempre que no sean nacionales del Estado receptor (art. 37.1). Es
            decir: en muchos casos ninguno de los dos cónyuges puede ser demandado en el país
            donde viven.
          </p>

          <h2>Las tres salidas que prevé la propia Convención</h2>
          <ul>
            <li>
              <strong>Renuncia del Estado acreditante.</strong> El país que envió al diplomático
              puede renunciar a su inmunidad, pero la renuncia &ldquo;ha de ser siempre
              expresa&rdquo; (art. 32.1 y 32.2). Y renunciar a la inmunidad para el juicio no
              implica renunciar para la ejecución de la sentencia: para eso hace falta una nueva
              renuncia (art. 32.4). Esto importa cuando hay que cobrar alimentos o dividir bienes.
            </li>
            <li>
              <strong>Si el diplomático demanda primero.</strong> Si es él o ella quien inicia el
              juicio, no puede invocar la inmunidad frente a una reconvención directamente ligada a
              la demanda principal (art. 32.3).
            </li>
            <li>
              <strong>Los tribunales de su propio país.</strong> La inmunidad en el Estado receptor
              &ldquo;no le exime de la jurisdicción del Estado acreditante&rdquo; (art. 31.4). Es
              la vía más habitual.
            </li>
          </ul>
          <p>
            Además, la inmunidad no es permanente: cuando terminan sus funciones, cesa normalmente
            al salir del país o al vencer el plazo razonable que se le conceda para hacerlo, salvo
            por los actos oficiales (art. 39.2). Un divorcio no es un acto oficial.
          </p>

          <h2>¿Y si es cónsul o trabaja en un organismo internacional?</h2>
          <p>
            No todo funcionario en el exterior es &ldquo;diplomático&rdquo; en sentido técnico.
            La <strong>Convención de Viena sobre Relaciones Consulares de 1963 (art. 43)</strong>{' '}
            limita la inmunidad de funcionarios y empleados consulares a los actos ejecutados en el
            ejercicio de las funciones consulares. Un divorcio es un asunto personal, así que en
            principio un cónsul sí puede ser demandado en el país donde ejerce, si sus jueces son
            competentes.
          </p>
          <p>
            Los funcionarios de organismos internacionales tienen el régimen que fije el acuerdo
            de sede de cada organismo, que hay que revisar caso por caso.
          </p>

          <h2>Diplomático argentino destinado en el exterior</h2>
          <p>
            Es el caso inverso, y muy frecuente: la familia vive en el país de destino, la relación
            se termina, y el cónyuge descubre que allí no puede demandar. Ahí entran las reglas
            argentinas, porque los tribunales argentinos no están limitados por la inmunidad del
            agente (art. 31.4 de la Convención).
          </p>
          <p>
            El <strong>art. 2621 del Código Civil y Comercial</strong> dispone que las acciones de
            disolución del matrimonio deben interponerse ante los jueces del{' '}
            <strong>último domicilio conyugal efectivo</strong> (&ldquo;el lugar de efectiva e
            indiscutida convivencia de los cónyuges&rdquo;) o ante los del{' '}
            <strong>domicilio o residencia habitual del cónyuge demandado</strong>.
          </p>
          <p>
            La dificultad está en el domicilio. A los fines del derecho internacional privado, una
            persona se domicilia en el Estado en que reside con la intención de establecerse (art.
            2613). Un destino diplomático, que rota cada pocos años, normalmente no se elige con
            esa intención. Y el art. 74 inc. a) del Código fija el domicilio legal de los
            funcionarios públicos en el lugar donde cumplen sus funciones, &ldquo;no siendo éstas
            temporarias, periódicas, o de simple comisión&rdquo;. Si el domicilio del diplomático
            se mantuvo en Argentina, los jueces argentinos pueden ser competentes por el domicilio
            del demandado. Es un punto que se discute y que hay que fundamentar bien en cada caso.
          </p>
          <p>
            Si aun así las reglas generales no alcanzan, existe el <strong>foro de necesidad del
            art. 2602 CCyCN</strong>: los jueces argentinos pueden intervenir excepcionalmente
            para evitar la denegación de justicia, siempre que no sea razonable exigir la demanda
            en el extranjero, que el caso tenga contacto suficiente con el país, que se garantice
            el derecho de defensa y que se pueda lograr una sentencia eficaz. Un cónyuge que no
            puede demandar donde vive por la inmunidad del otro es exactamente el supuesto que esa
            norma busca cubrir.
          </p>
          <p>
            El domicilio también define la <strong>ley aplicable</strong>: el divorcio se rige por
            el derecho del último domicilio de los cónyuges (art. 2626). Por eso conviene
            analizarlo antes de presentar nada, no después.
          </p>
          <p>
            Cada uno de estos pasos depende de hechos concretos: cuánto duró el destino, dónde
            quedó la casa familiar, dónde estudian los chicos.{' '}
            <TrackedLink
              href="/#contact"
              trackEvent="cta_click"
              trackSource="divorcio_diplomatico_mid_reassure"
            >
              Contame tu caso
            </TrackedLink>{' '}
            y lo ordenamos juntos.
          </p>

          <h2>Un mito: la embajada no es &ldquo;territorio extranjero&rdquo;</h2>
          <p>
            Es común pensar que lo que pasa dentro de una embajada ocurre &ldquo;en otro
            país&rdquo;. La Convención no dice eso: dice que los locales de la misión son{' '}
            <strong>inviolables</strong> y que los agentes del Estado receptor no pueden entrar sin
            consentimiento del jefe de la misión (art. 22). La protección es de inviolabilidad, no
            de territorio. Lo que define qué jueces intervienen en un divorcio son el domicilio y la
            inmunidad de las personas, no el edificio.
          </p>

          <h2>Divorcio en el exterior: reconocimiento en Argentina</h2>
          <p>
            Si el divorcio se dicta en el país del diplomático o en un tercer país, esa sentencia
            no se registra sola en Argentina. Para que tenga efectos acá (inscribirla en el
            Registro Civil, volver a casarse, disponer de bienes en el país) hay que pedir su{' '}
            <strong>reconocimiento</strong>, en muchos casos mediante un exequátur.
          </p>
          <p>
            <TrackedLink
              href="/comunicaciones/exequatur.pdf"
              trackEvent="cta_click"
              trackSource="divorcio_diplomatico_to_exequatur_pdf"
              target="_blank"
              rel="noopener"
            >
              Ver: Exequátur de sentencias extranjeras (PDF)
            </TrackedLink>
          </p>

          <h2>Traslados, residencia y situación migratoria</h2>
          <p>
            El estatus del cónyuge de un diplomático extranjero en Argentina normalmente depende de
            ser miembro de la familia &ldquo;que forma parte de su casa&rdquo; (art. 37). Con el
            divorcio ese vínculo se corta, y quien quiera quedarse en el país necesita{' '}
            <strong>regularizar su residencia</strong> por las vías generales de la Ley de
            Migraciones 25.871. Conviene planificarlo junto con el divorcio, no cuando el plazo ya
            está corriendo.
          </p>
          <p>
            En el caso inverso, el cónyuge de un diplomático argentino destinado afuera suele
            tener una residencia o visado vinculado a la misión. Al divorciarse, hay que prever
            dónde va a vivir, con qué documentación y qué pasa con los hijos.
          </p>

          <h2>Los hijos: residencia, alimentos y restitución</h2>
          <p>
            Los hijos de diplomáticos cambian de país con la familia, y eso complica la pregunta
            de dónde &ldquo;viven&rdquo;. El <strong>art. 2614 CCyCN</strong> dispone que el
            domicilio de los menores es el de quienes ejercen la responsabilidad parental y, si
            los padres se domicilian en Estados distintos, el de su residencia habitual.
          </p>
          <ul>
            <li>
              <strong>Mudarse con los chicos al terminar la misión.</strong> Si uno de los padres
              se va a otro país con los hijos sin acuerdo del otro o sin autorización judicial,
              puede iniciarse un pedido de restitución internacional (art. 2642 CCyCN y
              convenciones vigentes). Ver{' '}
              <TrackedLink
                href="/articulos/volver-al-pais-de-origen-con-hijos-traslado-internacional"
                trackEvent="cta_click"
                trackSource="divorcio_diplomatico_to_traslado"
              >
                volver al país de origen con tus hijos
              </TrackedLink>{' '}
              y{' '}
              <TrackedLink
                href="/articulos/cambio-residencia-hijos-autorizacion-judicial"
                trackEvent="cta_click"
                trackSource="divorcio_diplomatico_to_cambio_residencia"
              >
                cambio de residencia con autorización judicial
              </TrackedLink>
              .
            </li>
            <li>
              <strong>Alimentos.</strong> Quien reclama puede elegir entre los jueces de su
              domicilio o residencia habitual o los del demandado (art. 2629), y se aplica el
              derecho que resulte más favorable al acreedor alimentario (art. 2630). Contra un
              diplomático acreditado rige la misma inmunidad que para el divorcio. Para el cobro
              entre países, ver la{' '}
              <TrackedLink
                href="/articulos/ley-27806-convenio-haya-cobro-internacional-de-alimentos"
                trackEvent="cta_click"
                trackSource="divorcio_diplomatico_to_ley_27806"
              >
                Ley 27.806 y el Convenio de La Haya de 2007
              </TrackedLink>
              .
            </li>
            <li>
              <strong>El vínculo a distancia.</strong> Cuando cada progenitor queda en un país
              distinto, el régimen de comunicación tiene que diseñarse para funcionar entre
              fronteras. Ver{' '}
              <TrackedLink
                href="/articulos/hijos-viven-en-otro-pais-mantener-vinculo"
                trackEvent="cta_click"
                trackSource="divorcio_diplomatico_to_hijos_otro_pais"
              >
                hijos que viven en otro país
              </TrackedLink>
              .
            </li>
          </ul>

          <h2>Preguntas frecuentes</h2>

          <h3>¿Puedo demandar el divorcio en Argentina a un diplomático extranjero acreditado en el país?</h3>
          <p>
            Como regla, <strong>no sin una renuncia expresa</strong> de su Estado (arts. 31 y 32
            de la Convención de Viena). La vía habitual son los tribunales de su país (art. 31.4).
          </p>

          <h3>Soy cónyuge de un diplomático argentino destinado en el exterior: ¿dónde me divorcio?</h3>
          <p>
            En general, <strong>en Argentina</strong>: por el art. 2621 CCyCN si el domicilio
            conyugal efectivo o el del demandado está en el país, o por el foro de necesidad del
            art. 2602 si no.
          </p>

          <h3>¿Los cónsules también tienen inmunidad para un divorcio?</h3>
          <p>
            <strong>No con el mismo alcance</strong>: solo por actos en ejercicio de funciones
            consulares (art. 43 de la Convención de 1963). Un divorcio no lo es.
          </p>

          <h3>¿Qué pasa con la residencia de mis hijos si nos divorciamos durante una misión?</h3>
          <p>
            Se determina por el art. 2614 CCyCN. Trasladarlos sin acuerdo ni autorización judicial
            puede dar lugar a una restitución internacional.
          </p>

          <h2>Conclusión</h2>
          <p>
            Un divorcio con inmunidad diplomática de por medio no es imposible: es un divorcio en
            el que el lugar donde se presenta la demanda decide casi todo. Elegirlo bien evita años
            de trámites que después no se pueden ejecutar. Tu tranquilidad también importa:{' '}
            <TrackedLink
              href="/#contact"
              trackEvent="cta_click"
              trackSource="divorcio_diplomatico_conclusion"
            >
              consultá tu caso
            </TrackedLink>{' '}
            y diseñemos la estrategia antes de dar el primer paso.
          </p>
          <p>
            Ver también:{' '}
            <TrackedLink
              href="/articulos/divorcio-en-argentina-si-te-casaste-en-el-extranjero"
              trackEvent="cta_click"
              trackSource="divorcio_diplomatico_to_divorcio_extranjero"
            >
              ¿Te casaste en el extranjero? Podés divorciarte en Argentina
            </TrackedLink>{' '}
            ·{' '}
            <TrackedLink
              href="/articulos/analisis-problemas-dip-divorcio-internacional"
              trackEvent="cta_click"
              trackSource="divorcio_diplomatico_to_dip_hub"
            >
              Problemas de DIP en el divorcio internacional
            </TrackedLink>
            .
          </p>
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            <span className="tag">Divorcio Internacional</span>
            <span className="tag">Inmunidad Diplomática</span>
            <span className="tag">Convención de Viena 1961</span>
            <span className="tag">Art. 2621 CCyCN</span>
            <span className="tag">Foro de Necesidad</span>
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
              <li><a href="/servicios/divorcios-buenos-aires">Divorcios en Buenos Aires</a></li>
              <li><a href="/servicios/alimentos">Juicio de Alimentos</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado personal de los hijos</a></li>
            </ul>
          </div>
        </footer>
      </article>
    </div>
  )
}
