import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <img src="/andrea-esparza-portrait.jpg" alt="Dra. María Andrea Esparza" />
        <div className="hero-text">
          <h1>Dra. María Andrea Esparza</h1>
          <p className="subtitle">Directora Adjunta – Instituto de Derecho Internacional Privado</p>
          <a href="#contact" className="cta-button">Solicitar consulta</a>
        </div>
      </header>

      <section id="about">
        <h2>Sobre mí</h2>
        <p>Egresada de la UBA en 1996, combino la práctica jurídica con la docencia y gestión institucional, abordando cada caso con precisión jurídica y sensibilidad humana.</p>
      </section>

      <section id="specialties">
        <h2>Especialidades</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">👪</div>
            <h3>Derecho de Familia</h3>
            <p>Divorcios, parentalidad, compensación económica.</p>
          </div>
          <div className="card">
            <div className="icon">⚖️</div>
            <h3>Sucesiones</h3>
            <p>Testamentos, partición de bienes.</p>
          </div>
          <div className="card">
            <div className="icon">🌐</div>
            <h3>Internacional Privado</h3>
            <p>Restitución de menores, casos transfronterizos.</p>
          </div>
        </div>
      </section>

      <section id="timeline">
        <h2>Trayectoria</h2>
        <ul className="timeline">
          <li><strong>Desde 2008:</strong> Directora Adjunta – Colegio de Abogados de Morón</li>
          <li><strong>Desde 1996:</strong> Fundadora del Estudio Jurídico Esparza</li>
          <li><strong>Desde 2005:</strong> Docente por concurso en la UBA</li>
        </ul>
      </section>

      <section id="testimonials">
        <h2>Testimonios</h2>
        <blockquote>“Profesional de excelencia, claridad e integridad.”</blockquote>
        <blockquote>“Me dio confianza desde el primer contacto.”</blockquote>
      </section>

      <section id="contact">
        <h2>Contacto</h2>
        <p><strong>Email:</strong> <a href="mailto:andrea@estudioesparza.com">andrea@estudioesparza.com</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/54911XXXXXXX">+54 9 11 XXXX XXXX</a></p>
        <form>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Dra. María Andrea Esparza – Estudio Jurídico Esparza.</p>
      </footer>
    </div>
  );
}

export default App;
