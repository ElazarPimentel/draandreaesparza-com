import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes.jsx'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  // Hydrate for react-snap prerendered content
  hydrateRoot(
    rootElement,
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  )
} else {
  // Normal render for development
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  )
}
