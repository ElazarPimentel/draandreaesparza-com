'use client'

import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h3><a href="/">Dra. Andrea Esparza</a></h3>
          </div>
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(o => !o)}
          >
            <span className={`hamburger${isOpen ? ' open' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
          <ul className={`nav-menu${isOpen ? ' mobile-open' : ''}`}>
            <li><a href="#home" onClick={close}>Inicio</a></li>
            <li><a href="#about" onClick={close}>Acerca de</a></li>
            <li><a href="#specialties" onClick={close}>Especialidades</a></li>
            <li><a href="#publications" onClick={close}>Publicaciones</a></li>
            <li><a href="#contact" onClick={close}>Contacto</a></li>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-overlay" onClick={close} />
      )}
    </>
  )
}
