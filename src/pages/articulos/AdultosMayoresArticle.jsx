import ArticlePage from './ArticlePage'

const AdultosMayoresArticle = () => {
  const article = {
    title: 'Protección internacional de los adultos mayores',
    slug: 'proteccion-internacional-adultos-mayores',
    category: 'Derecho Internacional',
    datePublished: '2023-12-20',
    dateDisplay: '20 de Diciembre de 2023',
    description: 'Análisis de los marcos convencionales interamericanos y europeos para la protección de adultos mayores, incluyendo la Convención Interamericana y el Convenio de La Haya.',
    keywords: 'adultos mayores, protección internacional, derechos humanos, Convención Interamericana, Convenio de La Haya, derecho internacional privado, personas mayores, RIDCA',
    tags: ['Derecho Internacional', 'Derechos Humanos', 'Adultos Mayores', 'Convenciones Internacionales', 'RIDCA'],
    externalSource: {
      name: 'RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente',
      edition: 'Edición Nº 4 - Derecho Internacional',
      url: 'https://aidca.org/ridca4-internacional2-maria-andrea-esparza-proteccion-internacional-de-los-adultos-mayores/'
    },
    content: (
      <>
        <div className="article-source-note">
          <p><strong>Publicado originalmente en:</strong> <a href="https://aidca.org/ridca4-internacional2-maria-andrea-esparza-proteccion-internacional-de-los-adultos-mayores/" target="_blank" rel="noopener noreferrer">RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente, Edición Nº 4</a></p>
        </div>

        <h2>Introducción</h2>
        <p>
          Este trabajo examina las protecciones internacionales para las poblaciones de adultos mayores, abordándolas como un grupo demográfico vulnerable junto con los niños. El análisis presenta dos marcos convencionales clave: uno de las Américas enfocado en derechos humanos, y otro de Europa que aborda el derecho internacional privado.
        </p>

        <h2>Convención Interamericana sobre los Derechos Humanos de las Personas Mayores</h2>
        <p>
          Adoptada el 15 de junio de 2015 y ratificada por Argentina el 23 de octubre de 2017 (Ley 27360), este instrumento obtuvo jerarquía constitucional en 2022.
        </p>

        <h3>Objetivo Central</h3>
        <blockquote>
          "Promover, proteger y asegurar el reconocimiento y el pleno goce y ejercicio, en condiciones de igualdad, de todos los derechos humanos y libertades fundamentales de la persona mayor, a fin de contribuir a su plena inclusión, integración y participación en la sociedad."
        </blockquote>

        <h3>Protecciones Clave</h3>
        <ul>
          <li>No discriminación por edad</li>
          <li>Derecho a la dignidad, independencia y autonomía</li>
          <li>Libertad de violencia y trato cruel</li>
          <li>Consentimiento informado en atención médica</li>
          <li>Sistemas de cuidado integral</li>
          <li>Derechos al trabajo, educación, propiedad, participación política y protección ambiental</li>
        </ul>

        <h3>Terminología Protegida</h3>
        <ul>
          <li><strong>"Persona mayor":</strong> individuos de 60+ años (o menor edad si la ley nacional lo especifica, máximo 65)</li>
          <li><strong>"Edadismo":</strong> distinciones basadas en la edad que afectan derechos fundamentales</li>
          <li><strong>"Negligencia":</strong> falta involuntaria de proporcionar cuidados necesarios</li>
          <li><strong>"Maltrato":</strong> acciones deliberadas que causan daño físico, psicológico o moral</li>
        </ul>

        <h2>El Convenio de La Haya sobre Protección Internacional de Adultos</h2>
        <p>
          Este marco europeo del año 2000, aunque aborda adultos en general (18+), proporciona modelos cruciales para la futura legislación de protección de personas mayores.
        </p>

        <h3>Marco de Tres Partes</h3>
        <ol>
          <li><strong>Jurisdicción:</strong> Las autoridades de la residencia habitual del adulto determinan la competencia</li>
          <li><strong>Ley Aplicable:</strong> Típicamente se aplica la ley del foro; excepcionalmente, la ley de otro Estado si está más estrechamente conectada</li>
          <li><strong>Reconocimiento:</strong> Facilita la ejecución transfronteriza de medidas protectoras</li>
        </ol>

        <h3>Medidas de Protección</h3>
        <ul>
          <li>Determinaciones de capacidad y establecimiento de tutela</li>
          <li>Gestión y autorización de disposición de bienes</li>
          <li>Decisiones de internación</li>
          <li>Arreglos de representación</li>
        </ul>
        <p>
          La jurisdicción se transfiere si el adulto se reubica entre Estados signatarios.
        </p>

        <h2>Conclusiones</h2>
        <p>
          Sigue siendo necesario un desarrollo legislativo significativo tanto a nivel nacional como de derecho internacional privado. Los patrones migratorios contemporáneos crean conflictos jurisdiccionales que requieren respuestas internacionales coordinadas, particularmente respecto a determinaciones de capacidad y protección de bienes a través de fronteras.
        </p>
        <p>
          Las lagunas actuales requieren consultar múltiples fuentes de tratados y legislación estatal individual. Se aboga por expandir las protecciones comparables a las logradas para los niños, requiriendo una conciencia sostenida de la importancia de las poblaciones de adultos mayores en los marcos legales.
        </p>

        <div className="article-source-note" style={{ marginTop: '2rem' }}>
          <p><strong>Cita:</strong> Esparza, M. A. (2023). Protección internacional de los adultos mayores. <em>RIDCA - Revista Iberoamericana de Derecho, Cultura y Ambiente</em>, (4).</p>
        </div>
      </>
    )
  }

  return <ArticlePage article={article} />
}

export default AdultosMayoresArticle
