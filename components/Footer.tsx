import pkg from '@/package.json'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col footer-brand">
            <p className="footer-name">Dra. Andrea Esparza</p>
            <p className="footer-tagline">Estudio Jurídico especializado en<br />Derecho de Familia y DIP</p>
            <p className="footer-address">Uruguay 651, Piso 14, Of. I<br />CABA (C1015ABM), Argentina</p>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Servicios</p>
            <ul className="footer-links">
              <li><a href="/servicios/divorcios-buenos-aires">Divorcios</a></li>
              <li><a href="/servicios/alimentos">Alimentos</a></li>
              <li><a href="/servicios/sucesiones">Sucesiones</a></li>
              <li><a href="/servicios/cuidado-personal">Cuidado Personal</a></li>
              <li><a href="/servicios/violencia-familiar">Violencia Familiar</a></li>
              <li><a href="/servicios/medida-proteccion-excepcional">Medida de Protección Excepcional</a></li>
              <li><a href="/servicios/derecho-familia">Derecho de Familia</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Contacto</p>
            <ul className="footer-links">
              <li>
                <a
                  href="https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza%2C%20vengo%20de%20su%20sitio%20web%20y%20quiero%20consultar."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +54 9 11 5561-7919
                </a>
              </li>
              <li><a href="mailto:estudiomaesparza@gmail.com">estudiomaesparza@gmail.com</a></li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mar%C3%ADa-andrea-esparza-b478608b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} Dra. Andrea Esparza – Estudio Jurídico Esparza. Todos los derechos reservados.</p>
          <span className="version">v{pkg.version}</span>
          <a
            href="https://elazarpimentel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="site-signature"
          >
            Diseño y Desarrollo: ElazarPimentel.com
          </a>
        </div>
      </div>
    </footer>
  )
}
