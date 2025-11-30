import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <div className="not-found-actions">
          <Link to="/" className="home-btn">Volver a inicio</Link>
          <Link to="/#contact" className="contact-btn">Contactar</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
