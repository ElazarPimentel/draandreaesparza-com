import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import WhatsAppButton from '../../components/WhatsAppButton'
import './ArticlePage.css'

function ArticlePage({ article }) {
  useEffect(() => {
    // Store original values
    const originalTitle = document.title
    const originalMeta = {}

    const storeAndUpdateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      // Store original value
      if (element) {
        originalMeta[`${attribute}:${name}`] = element.getAttribute('content')
      } else {
        originalMeta[`${attribute}:${name}`] = null // Mark as newly created
      }

      // Update or create element
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Update page title
    document.title = `${article.title} - Dra. Andrea Esparza`

    // Update meta tags
    storeAndUpdateMetaTag('description', article.description)
    storeAndUpdateMetaTag('keywords', article.keywords)
    storeAndUpdateMetaTag('og:title', `${article.title} - Dra. Andrea Esparza`, true)
    storeAndUpdateMetaTag('og:description', article.description, true)
    storeAndUpdateMetaTag('og:type', 'article', true)
    storeAndUpdateMetaTag('og:url', `https://draandreaesparza.com/articulos/${article.slug}`, true)
    storeAndUpdateMetaTag('og:image', 'https://draandreaesparza.com/og-article-default.jpg', true)
    storeAndUpdateMetaTag('og:image:width', '1200', true)
    storeAndUpdateMetaTag('og:image:height', '630', true)
    storeAndUpdateMetaTag('og:image:alt', `${article.title} - Dra. Andrea Esparza`, true)
    storeAndUpdateMetaTag('article:published_time', article.datePublished, true)
    storeAndUpdateMetaTag('article:author', 'Dra. Andrea Esparza', true)

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    const originalCanonical = canonicalLink?.getAttribute('href') || null
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', `https://draandreaesparza.com/articulos/${article.slug}`)

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "image": {
        "@type": "ImageObject",
        "url": "https://draandreaesparza.com/og-article-default.jpg",
        "width": 1200,
        "height": 630
      },
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "author": {
        "@type": "Person",
        "name": "Maria Andrea Esparza",
        "url": "https://draandreaesparza.com",
        "jobTitle": "Abogada Especialista en Derecho de Familia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Estudio Jurídico Dra. Andrea Esparza",
        "logo": {
          "@type": "ImageObject",
          "url": "https://draandreaesparza.com/og-article-default.jpg",
          "width": 1200,
          "height": 630
        }
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

    // Add BreadcrumbList schema
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://draandreaesparza.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Publicaciones",
          "item": "https://draandreaesparza.com/#publications"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": article.title,
          "item": `https://draandreaesparza.com/articulos/${article.slug}`
        }
      ]
    }

    let breadcrumbScriptTag = document.querySelector('script[data-breadcrumb-schema]')
    if (!breadcrumbScriptTag) {
      breadcrumbScriptTag = document.createElement('script')
      breadcrumbScriptTag.setAttribute('type', 'application/ld+json')
      breadcrumbScriptTag.setAttribute('data-breadcrumb-schema', 'true')
      document.head.appendChild(breadcrumbScriptTag)
    }
    breadcrumbScriptTag.textContent = JSON.stringify(breadcrumbData)

    // Scroll to top
    window.scrollTo(0, 0)

    return () => {
      // Restore original title
      document.title = originalTitle

      // Restore or remove meta tags
      Object.entries(originalMeta).forEach(([key, originalValue]) => {
        const [attribute, name] = key.split(':')
        const element = document.querySelector(`meta[${attribute}="${name}"]`)

        if (element) {
          if (originalValue === null) {
            // Was created by this component, remove it
            element.remove()
          } else {
            // Restore original value
            element.setAttribute('content', originalValue)
          }
        }
      })

      // Restore canonical link
      if (canonicalLink) {
        if (originalCanonical) {
          canonicalLink.setAttribute('href', originalCanonical)
        } else {
          canonicalLink.remove()
        }
      }

      // Remove structured data
      if (scriptTag) {
        scriptTag.remove()
      }

      // Remove breadcrumb schema
      if (breadcrumbScriptTag) {
        breadcrumbScriptTag.remove()
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

      <WhatsAppButton />
    </div>
  )
}

export default ArticlePage
