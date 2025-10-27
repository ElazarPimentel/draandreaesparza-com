import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedCard, setExpandedCard] = useState(['familia', 'sucesiones', 'internacional'])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const scrollToSection = (section) => {
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
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>Acerca de</button></li>
            <li><button onClick={() => scrollToSection('specialties')} className={activeSection === 'specialties' ? 'active' : ''}>Especialidades</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contacto</button></li>
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
            <p className="description">Especialista en derecho de familia y sucesiones nacional e internacional. Adopción, divorcio, alimentos, cuidado personal de hijos, régimen de comunicación, restitución internacional de menores y sucesiones. Combino la práctica jurídica con la docencia universitaria.</p>
            <button onClick={() => scrollToSection('contact')} className="cta-button">Solicitar Consulta</button>
          </div>
          <div className="hero-image">
            <img
              src="/andrea-esparza-portrait-web.jpg"
              alt="Dra. Andrea Esparza - Abogada Especialista en Derecho de Familia"
              className="profile-image"
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
              <p>Divorcios, régimen de parentalidad, compensación económica, alimentos, cuidado personal de hijos, violencia familiar y todas las cuestiones relacionadas con el derecho de familia en Argentina.</p>
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
          <div className="publications-grid">
            <div className="publication-card">
              <div className="publication-icon">📄</div>
              <h3>Artículo Académico</h3>
              <h4>"Problemáticas en torno a la Restitución Internacional de Niños, Niñas y Adolescentes"</h4>
              <p>Análisis especializado sobre los desafíos jurídicos en casos de sustracción internacional de menores conforme al Convenio de La Haya de 1980.</p>
              <div className="publication-meta">
                <span>Repositorio UBA</span>
                <span>•</span>
                <span>Derecho Internacional Privado</span>
              </div>
              <div className="publication-actions">
                <a
                  href="/problematicas-en-torno-a-la-restitucion-internacional-de-ninos-ninas-y-adolescentes7911.pdf"
                  target="_blank"
                  className="download-btn"
                  download
                >
                  📥 Descargar PDF
                </a>
                <a
                  href="https://repositoriouba.sisbi.uba.ar/gsdl/collect/juridica/index/assoc/HWA_7911.dir/7911.PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-btn"
                >
                  🔗 Ver en UBA
                </a>
              </div>
            </div>

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
                <a
                  href="https://www.youtube.com/watch?v=lgmqemeKqA0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-btn"
                >
                  ▶️ Ver Video
                </a>
              </div>
            </div>

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
                <a
                  href="https://www.asime.org/andrea-esparza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-btn"
                >
                  🔗 Ver Perfil ASIME
                </a>
              </div>
            </div>
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
                <a href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20me%20gustaría%20solicitar%20una%20consulta%20legal." target="_blank" rel="noopener noreferrer">+54 9 11 5561-7919</a>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Digitally carved by
            <a href="https://Pensanta.com" target="_blank" rel="noopener noreferrer">Pensanta.com</a>
          </small>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20me%20gustaría%20solicitar%20una%20consulta%20legal."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
