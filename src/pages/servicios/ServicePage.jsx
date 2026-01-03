import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import WhatsAppButton from '../../components/WhatsAppButton'
import './ServicePage.css'

function ServicePage({ service }) {
  const handleWhatsAppClick = () => {
    track('whatsapp_click', { source: 'service_cta', service: service.slug })
  }
  useEffect(() => {
    const originalTitle = document.title
    const originalMeta = {}

    const storeAndUpdateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      if (element) {
        originalMeta[`${attribute}:${name}`] = element.getAttribute('content')
      } else {
        originalMeta[`${attribute}:${name}`] = null
      }

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    document.title = `${service.title} - Dra. Andrea Esparza`

    storeAndUpdateMetaTag('description', service.description)
    storeAndUpdateMetaTag('keywords', service.keywords)
    storeAndUpdateMetaTag('og:title', `${service.title} - Dra. Andrea Esparza`, true)
    storeAndUpdateMetaTag('og:description', service.description, true)
    storeAndUpdateMetaTag('og:type', 'website', true)
    storeAndUpdateMetaTag('og:url', `https://draandreaesparza.com/servicios/${service.slug}`, true)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    const originalCanonical = canonicalLink?.getAttribute('href') || null
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', `https://draandreaesparza.com/servicios/${service.slug}`)

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "LegalService",
        "name": "Estudio Jurídico Dra. Andrea Esparza",
        "url": "https://draandreaesparza.com"
      },
      "areaServed": {
        "@type": "City",
        "name": "Buenos Aires"
      },
      "offers": {
        "@type": "Offer",
        "description": service.description
      }
    }

    let scriptTag = document.querySelector('script[data-service-schema]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      scriptTag.setAttribute('data-service-schema', 'true')
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)

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
          "name": "Servicios",
          "item": "https://draandreaesparza.com/#specialties"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": `https://draandreaesparza.com/servicios/${service.slug}`
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

    window.scrollTo(0, 0)

    return () => {
      document.title = originalTitle

      Object.entries(originalMeta).forEach(([key, originalValue]) => {
        const [attribute, name] = key.split(':')
        const element = document.querySelector(`meta[${attribute}="${name}"]`)

        if (element) {
          if (originalValue === null) {
            element.remove()
          } else {
            element.setAttribute('content', originalValue)
          }
        }
      })

      if (canonicalLink) {
        if (originalCanonical) {
          canonicalLink.setAttribute('href', originalCanonical)
        } else {
          canonicalLink.remove()
        }
      }

      if (scriptTag) {
        scriptTag.remove()
      }

      if (breadcrumbScriptTag) {
        breadcrumbScriptTag.remove()
      }
    }
  }, [service])

  return (
    <div className="service-page">
      <nav className="service-nav">
        <div className="nav-container">
          <Link to="/" className="back-link">← Volver a inicio</Link>
          <Link to="/#specialties" className="services-link">Ver todos los servicios</Link>
        </div>
      </nav>

      <div className="service-container">
        <div className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span>›</span>
          <Link to="/#specialties">Servicios</Link>
          <span>›</span>
          <span>{service.title}</span>
        </div>

        <header className="service-header">
          <h1>{service.h1}</h1>
          <p className="service-intro">{service.intro}</p>
        </header>

        <div className="service-content">
          {service.content}
        </div>

        {service.faqs && service.faqs.length > 0 && (
          <div className="service-faqs">
            <h2>Preguntas Frecuentes</h2>
            {service.faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        <div className="service-cta">
          <h2>¿Necesita asesoramiento legal?</h2>
          <p>Más de 25 años de experiencia en derecho de familia y sucesiones</p>
          <a
            href={`https://wa.me/5491155617919?text=Hola%20Dra.%20Esparza,%20me%20gustaría%20consultar%20sobre%20${encodeURIComponent(service.title)}%20(via%20servicios)`}
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  )
}

export default ServicePage
