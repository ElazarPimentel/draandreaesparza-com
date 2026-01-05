import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { track } from '@vercel/analytics'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  const handleContactWhatsAppClick = () => {
    track('whatsapp_click', { source: 'contact_section' })
  }
  const [activeSection, setActiveSection] = useState('home')
  const [expandedCard, setExpandedCard] = useState(['familia', 'sucesiones', 'internacional'])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Handle hash scrolling for SPA navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  // Dynamic page titles for SEO
  useEffect(() => {
    const titles = {
      home: 'Dra. Andrea Esparza - Abogada Especialista en Derecho de Familia y Sucesiones',
      about: 'Trayectoria Profesional - Dra. Andrea Esparza | +25 Años de Experiencia',
      specialties: 'Áreas de Especialización - Derecho de Familia, Sucesiones y DIP | Dra. Esparza',
      testimonials: 'Testimonios de Clientes - Dra. Andrea Esparza',
      publications: 'Publicaciones y Medios - Dra. Andrea Esparza',
      contact: 'Contacto - Dra. Andrea Esparza | Estudio Jurídico'
    }
    document.title = titles[activeSection] || titles.home
  }, [activeSection])

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = ['home', 'about', 'specialties', 'testimonials', 'publications', 'contact']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e, section) => {
    e.preventDefault()
    setActiveSection(section)
    setMobileMenuOpen(false)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleCard = (cardId) => {
    setExpandedCard(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    )
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h3>Dra. Andrea Esparza</h3>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Inicio</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>Acerca de</a></li>
            <li><a href="#specialties" onClick={(e) => scrollToSection(e, 'specialties')} className={activeSection === 'specialties' ? 'active' : ''}>Especialidades</a></li>
            <li><a href="#publications" onClick={(e) => scrollToSection(e, 'publications')} className={activeSection === 'publications' ? 'active' : ''}>Publicaciones</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>}

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Dra. Andrea Esparza</h1>
            <p className="subtitle">
              Directora Adjunta <br /> Instituto de Derecho Internacional Privado
            </p>
            <p className="description">Especialista en derecho de familia, adopción, sucesiones y violencia familiar. Juicio por alimentos, cuidado personal unilateral, patria potestad, orden de protección, divorcios, restitución internacional de menores. Asesoramiento en hogar de niños y violencia doméstica. +25 años de experiencia en Buenos Aires.</p>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="cta-button">Solicitar Consulta</a>
          </div>
          <div className="hero-image">
            <img
              src="/andrea-esparza-portrait-web.jpg"
              alt="Dra. Andrea Esparza - Abogada Especialista en Derecho de Familia"
              className="profile-image"
              width="1024"
              height="1024"
            />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>Trayectoria Profesional</h2>
          <div className="timeline">
            <div className="timeline-item highlight">
              <div className="timeline-year">1996 - Presente</div>
              <div className="timeline-content">
                <h3>Socia Fundadora - Estudio Jurídico Esparza</h3>
                <p><strong>Más de 25 años de experiencia profesional</strong> especializándose en más de 1,500 casos de derecho de familia, sucesiones y restitución internacional de menores. Trayectoria consolidada en la defensa de derechos familiares y patrimoniales.</p>
                <div className="experience-highlights">
                  <span className="badge">+1,500 casos resueltos</span>
                  <span className="badge">+25 años de experiencia</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008 - Presente</div>
              <div className="timeline-content">
                <h3>Directora Adjunta</h3>
                <p>Instituto de Derecho Internacional Privado - Colegio de Abogados de Morón</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2005 - Presente</div>
              <div className="timeline-content">
                <h3>Profesora Adjunta</h3>
                <p>Derecho internacional privado en la Facultad de Derecho de la UBA y UNLZ</p>
              </div>
            </div>
          </div>

          <div className="accomplishments">
            <h3>Logros Académicos y Profesionales</h3>
            <ul className="accomplishments-list">
              <li>Autora de artículos y capítulos de libros especializados en Derecho Internacional Privado</li>
              <li>Disertante en eventos académicos y conferencias sobre sobre temas de derecho de familia internacional ( restitución internacional de menores, alimentos, comunicación transfronteriza, matrimonio y divorcio, sucesiones, responsabilidad civil extracontractual, kafala, entre otros )</li>
              <li>Miembro de la Asociación de Profesionales contra la Sustracción Internacional de Menores de España (ASIME)</li>
              <li>Organiza capacitaciones virtuales para abogados especializados en derecho del niño, niña y adolescente</li>
              <li>Publicaciones en el Repositorio de la Universidad de Buenos Aires</li>
              <li>Miembro de la Asociación Argentina de Derecho Internacional</li>
              <li>Colaboradora del Instituto de Familia Internacional Multidisciplinar de España ( IFIM )</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="specialties" className="specialties-section">
        <div className="container">
          <h2>Áreas de Especialización</h2>
          <div className="cards-grid">
            <div className="specialty-card">
              <div className="card-icon">👪</div>
              <h3>Derecho de Familia - Divorcios y Alimentos</h3>
              <p>Divorcios, juicio por alimentos, cuidado personal unilateral, patria potestad, adopción, régimen de parentalidad, compensación económica, violencia familiar, violencia doméstica, orden de protección, hogar de niños y todas las cuestiones de derecho de familia en Argentina.</p>
              <button
                className="expand-btn"
                onClick={() => toggleCard('familia')}
                aria-label="Ver normativa aplicable"
              >
                {expandedCard.includes('familia') ? '−' : '+'}
              </button>
              {expandedCard.includes('familia') && (
                <div className="card-expanded">
                  <h4>Normativa aplicable:</h4>
                  <ul>
                    <li><strong>Código Civil y Comercial de la Nación (Ley 26.994):</strong> regula el matrimonio, divorcio, responsabilidad parental, alimentos y cuidado personal.</li>
                    <li><strong>Ley 26.061 (Protección Integral de los Derechos de Niñas, Niños y Adolescentes):</strong> establece el derecho del niño a ser oído y protegido en conflictos familiares.</li>
                    <li><strong>Ley 114 (CABA):</strong> amplía la protección local para niños, niñas y adolescentes en contextos de familia, incluyendo medidas de abrigo y fortalecimiento familiar.</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="specialty-card">
              <div className="card-icon">⚖️</div>
              <h3>Sucesiones y Testamentos</h3>
              <p>Testamentos, herencias, partición de bienes hereditarios, sucesión intestada, legítima hereditaria y asesoramiento integral en materia sucesoria en Argentina.</p>
              <button
                className="expand-btn"
                onClick={() => toggleCard('sucesiones')}
                aria-label="Ver normativa aplicable"
              >
                {expandedCard.includes('sucesiones') ? '−' : '+'}
              </button>
              {expandedCard.includes('sucesiones') && (
                <div className="card-expanded">
                  <h4>Normativa aplicable:</h4>
                  <ul>
                    <li><strong>Código Civil y Comercial de la Nación (Libros Quinto y Sexto):</strong> regula testamentos, sucesión legítima, legítima hereditaria, partición de bienes y procesos sucesorios.</li>
                    <li><strong>Ley 23.515:</strong> modificó el régimen de herencia en favor del cónyuge supérstite.</li>
                    <li><strong>Tratados internacionales bilaterales:</strong> en caso de sucesiones con bienes o herederos en el extranjero, rige la ley del último domicilio del causante, salvo excepciones.</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="specialty-card">
              <div className="card-icon">🌐</div>
              <h3>Derecho Internacional Privado - Restitución de Menores</h3>
              <p>Restitución internacional de menores, sustracción de menores, Convenio de La Haya, casos transfronterizos, jurisdicción internacional y derecho internacional privado.</p>
              <button
                className="expand-btn"
                onClick={() => toggleCard('internacional')}
                aria-label="Ver normativa aplicable"
              >
                {expandedCard.includes('internacional') ? '−' : '+'}
              </button>
              {expandedCard.includes('internacional') && (
                <div className="card-expanded">
                  <h4>Normativa aplicable:</h4>
                  <ul>
                    <li><strong>Convención sobre los Derechos del Niño (Ley 23.849):</strong> reconoce el derecho del niño a mantener vínculos familiares incluso en contextos internacionales.</li>
                    <li><strong>Convenio de La Haya de 1980 sobre Sustracción Internacional de Menores (Ley 23.857):</strong> permite reclamar la restitución internacional del menor trasladado o retenido ilícitamente.</li>
                    <li><strong>Código Civil y Comercial (art. 2594 y ss.):</strong> regula conflictos de jurisdicción, ley aplicable y reconocimiento de sentencias extranjeras.</li>
                    <li><strong>Ley 26.061 y Ley 114 (CABA):</strong> se aplican subsidiariamente para proteger derechos del niño en causas internacionales.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2>Lo que dicen mis clientes</h2>
          <div className="testimonials-grid">
            <blockquote className="testimonial">
              <p>"La Dra. Esparza me mantuvo siempre informada durante todo el proceso. Siempre estuve al tanto de cada avance en mi asunto legal."</p>
              <cite>— Cliente de Derecho de Familia</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>"Su conocimiento del derecho internacional fue clave para resolver la restitución de mi hijo. Profesional excepcional."</p>
              <cite>— Caso de Restitución Internacional</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>"Resolvió mi sucesión de manera eficiente y transparente. Me explicó cada paso con paciencia y claridad."</p>
              <cite>— Cliente de Sucesiones</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>"Más que una abogada, es una consejera. Su calidez humana marca la diferencia en momentos difíciles."</p>
              <cite>— Cliente de Violencia Familiar</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>"Profesional de excelencia, claridad e integridad. Su experiencia de más de 25 años se nota en cada detalle."</p>
              <cite>— Cliente de Compensación Económica</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>"Logró que mi caso se resolviera en tiempo récord. Su estrategia legal fue impecable y efectiva."</p>
              <cite>— Cliente de Cuidado Personal</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="publications" className="publications-section">
        <div className="container">
          <h2>Publicaciones y Medios</h2>

          <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Artículos Académicos</h3>
          <div className="publications-grid">
            {/* Article 1 - Conceptos Niñez DIP */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Revisando Ciertos Conceptos Vinculados a la Niñez y Adolescencia en el DIP</h4>
              <p>Análisis profundo de los conceptos de residencia habitual y centro de vida en el derecho internacional privado aplicado a niñez y adolescencia.</p>
              <div className="publication-meta">
                <span>Mayo 2025</span>
                <span>•</span>
                <span>DIP y Niñez</span>
              </div>
              <div className="publication-actions">
                <Link to="/articulos/conceptos-ninez-adolescencia-dip" className="read-btn">
                  📖 Leer artículo
                </Link>
                <a href="/articulos/revisando-conceptos-ninez-adolescencia-dip.pdf" className="download-btn" download>
                  📥 PDF
                </a>
              </div>
            </div>

            {/* Article 2 - Bioética */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Filiación, Técnicas de Reproducción Humana Asistida y Subrogación de Vientres</h4>
              <p>Dilemas bioéticos y jurídicos de la reproducción asistida y maternidad subrogada en el derecho internacional privado.</p>
              <div className="publication-meta">
                <span>Agosto 2022</span>
                <span>•</span>
                <span>Bioética y DIP</span>
              </div>
              <div className="publication-actions">
                <Link to="/articulos/bioetica-reproduccion-asistida-subrogacion-vientres" className="read-btn">
                  📖 Leer artículo
                </Link>
                <a href="/articulos/trabajo-bioetica.pdf" className="download-btn" download>
                  📥 PDF
                </a>
              </div>
            </div>

            {/* Article 3 - Finanzas Islámicas */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Finanzas en el Derecho Musulmán</h4>
              <p>Análisis de las finanzas islámicas, sus principios basados en la Sharía y los contratos compatibles con el derecho musulmán.</p>
              <div className="publication-meta">
                <span>Octubre 2023</span>
                <span>•</span>
                <span>Derecho Comparado</span>
              </div>
              <div className="publication-actions">
                <Link to="/articulos/finanzas-islamicas-derecho-musulman" className="read-btn">
                  📖 Leer artículo
                </Link>
                <a href="/articulos/trabajo-finanzas-islamicas-para-el-dial.pdf" className="download-btn" download>
                  📥 PDF
                </a>
              </div>
            </div>

            {/* Article 4 - Identidad de Género */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Análisis Jurisprudencial</h3>
              <h4>Identidad de Género: Una Mirada Esperanzadora</h4>
              <p>Comentario sobre un fallo innovador de cambio de prenombre sin modificar género, analizando capacidad progresiva.</p>
              <div className="publication-meta">
                <span>Diciembre 2021</span>
                <span>•</span>
                <span>Derechos del Niño</span>
              </div>
              <div className="publication-actions">
                <Link to="/articulos/identidad-de-genero-analisis-fallo" className="read-btn">
                  📖 Leer artículo
                </Link>
                <a href="/articulos/comentario-a-fallo-sobre-identidad-de-genero.pdf" className="download-btn" download>
                  📥 PDF
                </a>
              </div>
            </div>

            {/* Article 5 - Historia Derecho Musulmán */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Historia del Derecho Musulmán y Sustracción de Menores</h4>
              <p>Caso Shaban-Arias Uriburu: análisis de sustracción internacional con elementos de derecho islámico.</p>
              <div className="publication-meta">
                <span>Noviembre 2007</span>
                <span>•</span>
                <span>DIP y Derecho Islámico</span>
              </div>
              <div className="publication-actions">
                <Link to="/articulos/historia-derecho-musulman-sustraccion-menores" className="read-btn">
                  📖 Leer artículo
                </Link>
                <a href="/articulos/historia-del-derecho-musulm-n-caso-sustracci-n-internacional-de-menores-shaban-arias-uriburu.pdf" className="download-btn" download>
                  📥 PDF
                </a>
              </div>
            </div>

            {/* Article 6 - Interés Superior */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Interés Superior del Niño vs. Tratados Internacionales</h4>
              <p>Análisis del conflicto entre el principio del interés superior del niño y obligaciones de tratados internacionales.</p>
              <div className="publication-meta">
                <span>Marzo 2015</span>
                <span>•</span>
                <span>Revista Panamá</span>
              </div>
              <div className="publication-actions">
                <Link to="/articulos/interes-superior-nino-tratados-internacionales" className="read-btn">
                  📖 Leer artículo
                </Link>
                <a href="/articulos/interes-superior-del-niño-vs-cumplimiento-de-tratados-internacionales-revista-panama.pdf" className="download-btn" download>
                  📥 PDF
                </a>
              </div>
            </div>

            {/* Article 7 - Análisis Problemas DIP */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>Problemas del DIP en Divorcio Internacional</h4>
              <p>Análisis de jurisdicción, ley aplicable y reconocimiento de sentencias extranjeras en casos de divorcio.</p>
              <div className="publication-meta">
                <span>Noviembre 2007</span>
                <span>•</span>
                <span>Derecho Internacional Privado</span>
              </div>
              <div className="publication-actions">
                <Link to="/articulos/analisis-problemas-dip-divorcio-internacional" className="read-btn">
                  📖 Leer artículo
                </Link>
                <a href="/articulos/analisis-de-los-problemas-generales-del-derecho-internacional-privado-vinculados-a-un-divorcio-de.pdf" className="download-btn" download>
                  📥 PDF
                </a>
              </div>
            </div>
          </div>

          <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Otros Medios y Actividades</h3>
          <div className="publications-grid">
            {/* UBA Repository Article */}
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo en Repositorio UBA</h3>
              <h4>"Problemáticas en torno a la Restitución Internacional de Niños, Niñas y Adolescentes"</h4>
              <p>Análisis especializado sobre los desafíos jurídicos en casos de sustracción internacional de menores conforme al Convenio de La Haya de 1980.</p>
              <div className="publication-meta">
                <span>Repositorio UBA</span>
                <span>•</span>
                <span>Derecho Internacional Privado</span>
              </div>
              <div className="publication-actions">
                <a href="/problematicas-en-torno-a-la-restitucion-internacional-de-ninos-ninas-y-adolescentes7911.pdf" target="_blank" className="download-btn" download>
                  📥 Descargar PDF
                </a>
                <a href="https://repositoriouba.sisbi.uba.ar/gsdl/collect/juridica/index/assoc/HWA_7911.dir/7911.PDF" target="_blank" rel="noopener noreferrer" className="external-btn">
                  🔗 Ver en UBA
                </a>
              </div>
            </div>

            {/* YouTube Conference */}
            <div className="publication-card">
              <div className="publication-icon">🎥</div>
              <h3>Conferencia Magistral</h3>
              <h4>"El Matrimonio y sus Efectos Internacionales"</h4>
              <p>Disertación especializada sobre los aspectos jurídicos del matrimonio en el ámbito del derecho internacional privado.</p>
              <div className="publication-meta">
                <span>YouTube</span>
                <span>•</span>
                <span>7 de Septiembre 2021</span>
              </div>
              <div className="publication-actions">
                <a href="https://www.youtube.com/watch?v=lgmqemeKqA0" target="_blank" rel="noopener noreferrer" className="video-btn">
                  ▶️ Ver Video
                </a>
              </div>
            </div>

            {/* ASIME Membership */}
            <div className="publication-card">
              <div className="publication-icon">🌍</div>
              <h3>Membresía Internacional</h3>
              <h4>ASIME - Asociación de Profesionales contra la Sustracción Internacional de Menores</h4>
              <p>Miembro activo de la asociación española dedicada a combatir la sustracción internacional de menores.</p>
              <div className="publication-meta">
                <span>España</span>
                <span>•</span>
                <span>Derecho Internacional</span>
              </div>
              <div className="publication-actions">
                <a href="https://www.asime.org/andrea-esparza/" target="_blank" rel="noopener noreferrer" className="external-btn">
                  🔗 Ver Perfil ASIME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <details className="faq-item">
              <summary>¿Cómo inicio un juicio por alimentos en Buenos Aires?</summary>
              <p>Para iniciar un juicio por alimentos, debe presentar una demanda ante el Juzgado de Familia correspondiente. Debe acreditar el vínculo familiar, la necesidad del alimentante y las posibilidades económicas del alimentado. Asesoramiento legal es fundamental para agilizar el proceso.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué es el cuidado personal unilateral y cuándo se otorga?</summary>
              <p>El cuidado personal unilateral implica que uno solo de los progenitores tiene la responsabilidad cotidiana del hijo. Se otorga cuando es lo más conveniente para el niño, considerando su interés superior, edad, opinión y relación con cada progenitor.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cómo solicitar una orden de protección por violencia familiar?</summary>
              <p>Puede solicitarse en cualquier momento, de urgencia si es necesario, ante el Juzgado de Familia o la Oficina de Violencia Doméstica (OVD). La orden puede incluir exclusión del hogar, prohibición de acercamiento y otras medidas de protección inmediata.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cuál es la diferencia entre patria potestad y cuidado personal?</summary>
              <p>La patria potestad se refiere a los deberes y derechos de los padres respecto de sus hijos menores (representación legal, administración de bienes). El cuidado personal es la convivencia cotidiana con el hijo. Pueden estar separados: ambos padres mantienen la patria potestad mientras uno tiene el cuidado personal.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué requisitos se necesitan para adopción en Argentina?</summary>
              <p>Los adoptantes deben estar inscriptos en el Registro de Adoptantes, tener al menos 25 años, diferencia de edad mínima de 16 años con el adoptado, y acreditar idoneidad física, psíquica, moral y económica. El proceso incluye evaluaciones técnicas multidisciplinarias.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué hacer si mi hijo está en un hogar de niños?</summary>
              <p>Si su hijo fue separado de su cuidado y se encuentra en un hogar, tiene derecho a ser informado, mantener comunicación y trabajar en un plan de fortalecimiento familiar para la revinculación. Es fundamental contar con asesoramiento legal especializado en protección de derechos del niño.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cómo se tramita una sucesión en Buenos Aires?</summary>
              <p>La sucesión se inicia ante el Juzgado Civil correspondiente al último domicilio del causante. Debe presentarse partida de defunción, certificado de bienes, declaración de herederos o testamento. El proceso incluye inventario, avalúo y partición de bienes entre los herederos.</p>
            </details>
            <details className="faq-item">
              <summary>¿Qué protección legal existe contra la violencia doméstica?</summary>
              <p>La Ley 26.485 de Protección Integral contra la Violencia contra las Mujeres y la Ley 114 (CABA) ofrecen múltiples recursos: órdenes de protección, exclusión del hogar, prohibición de contacto, asistencia psicológica y legal gratuita. La denuncia puede realizarse en comisarías, OVD o Juzgados de Familia.</p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contacto</h2>
          <div className="contact-info-centered">
            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <strong>Email</strong>
                <a href="mailto:estudiomaesparza@gmail.com">estudiomaesparza@gmail.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20vengo%20de%20https://draandreaesparza.com%20y%20me%20gustaría%20solicitar%20una%20consulta%20legal." target="_blank" rel="noopener noreferrer" onClick={handleContactWhatsAppClick}>+54 9 11 5561-7919</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <strong>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/mar%C3%ADa-andrea-esparza-b478608b" target="_blank" rel="noopener noreferrer">Andrea Esparza</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <strong>Instagram</strong>
                <a href="https://www.instagram.com/estudiojuridico.andreaesparza/" target="_blank" rel="noopener noreferrer">@estudiojuridico.andreaesparza</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2025 Dra. Andrea Esparza – Estudio Jurídico Esparza. Todos los derechos reservados.</p>
          <small className="credit">
            <span className="credit-text">Un sitio así para vos →</span>
            <a href="https://elazarpimentel.com/?utm_source=portfolio&utm_medium=footer&utm_campaign=client-sites&utm_content=draandreaesparza" target="_blank" rel="noopener noreferrer">ElazarPimentel.com</a>
          </small>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}

export default App
