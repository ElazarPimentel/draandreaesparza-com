import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ArticlePage.css'

function ArticlePage({ article }) {
  useEffect(() => {
    // Update page title
    document.title = `${article.title} - Dra. Andrea Esparza`

    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag('description', article.description)
    updateMetaTag('keywords', article.keywords)
    updateMetaTag('og:title', `${article.title} - Dra. Andrea Esparza`, true)
    updateMetaTag('og:description', article.description, true)
    updateMetaTag('og:type', 'article', true)
    updateMetaTag('og:url', `https://draandreaesparza.com/articulos/${article.slug}`, true)
    updateMetaTag('article:published_time', article.datePublished, true)
    updateMetaTag('article:author', 'Dra. Andrea Esparza', true)

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "datePublished": article.datePublished,
      "author": {
        "@type": "Person",
        "name": "Maria Andrea Esparza",
        "url": "https://draandreaesparza.com"
      },
      "publisher": {
        "@type": "Person",
        "name": "Maria Andrea Esparza"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://draandreaesparza.com/articulos/${article.slug}`
      },
      "keywords": article.keywords,
      "articleSection": article.category,
      "inLanguage": "es-AR"
    }

    let scriptTag = document.querySelector('script[data-article-schema]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      scriptTag.setAttribute('data-article-schema', 'true')
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)

    // Scroll to top
    window.scrollTo(0, 0)

    return () => {
      // Cleanup: remove article-specific meta tags when component unmounts
      if (scriptTag) {
        scriptTag.remove()
      }
    }
  }, [article])

  return (
    <div className="article-page">
      <nav className="article-nav">
        <div className="nav-container">
          <Link to="/" className="back-link">← Volver a inicio</Link>
          <Link to="/#publications" className="publications-link">Ver más publicaciones</Link>
        </div>
      </nav>

      <article className="article-container">
        <header className="article-header">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link>
            <span>›</span>
            <Link to="/#publications">Publicaciones</Link>
            <span>›</span>
            <span>{article.title}</span>
          </div>

          <div className="article-category">{article.category}</div>

          <h1>{article.title}</h1>

          <div className="article-meta">
            <div className="author-info">
              <span className="author-name">Por Dra. Maria Andrea Esparza</span>
            </div>
            <time dateTime={article.datePublished} className="publish-date">
              {article.dateDisplay}
            </time>
          </div>

          {article.pdfFile && (
            <div className="article-actions">
              <a
                href={`/articulos/${article.pdfFile}`}
                download
                className="download-btn"
              >
                📥 Descargar PDF
              </a>
            </div>
          )}
        </header>

        <div className="article-content">
          {article.content}
        </div>

        <footer className="article-footer">
          <div className="article-tags">
            {article.tags && article.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>

          {article.pdfFile && (
            <div className="article-actions">
              <a
                href={`/articulos/${article.pdfFile}`}
                download
                className="download-btn"
              >
                📥 Descargar PDF
              </a>
            </div>
          )}

          <div className="author-card">
            <div className="author-details">
              <h3>Sobre la autora</h3>
              <p><strong>Dra. Maria Andrea Esparza</strong></p>
              <p>Especialista en derecho de familia, sucesiones y derecho internacional privado. Más de 25 años de experiencia. Directora Adjunta del Instituto de Derecho Internacional Privado del Colegio de Abogados de Morón.</p>
              <Link to="/#contact" className="contact-author-btn">Contactar</Link>
            </div>
          </div>

          <div className="more-articles">
            <h3>Más publicaciones</h3>
            <Link to="/#publications" className="view-all-btn">Ver todas las publicaciones →</Link>
          </div>
        </footer>
      </article>

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

export default ArticlePage
