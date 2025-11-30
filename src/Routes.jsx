import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import BioeticaArticle from './pages/articulos/BioeticaArticle.jsx'
import FinanzasIslamicasArticle from './pages/articulos/FinanzasIslamicasArticle.jsx'
import IdentidadGeneroArticle from './pages/articulos/IdentidadGeneroArticle.jsx'
import HistoriaDerechoMusulmanArticle from './pages/articulos/HistoriaDerechoMusulmanArticle.jsx'
import InteresSuperiorArticle from './pages/articulos/InteresSuperiorArticle.jsx'
import AnalisisProblemasArticle from './pages/articulos/AnalisisProblemasArticle.jsx'
import NotFound from './pages/NotFound.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/articulos/bioetica-reproduccion-asistida-subrogacion-vientres" element={<BioeticaArticle />} />
      <Route path="/articulos/finanzas-islamicas-derecho-musulman" element={<FinanzasIslamicasArticle />} />
      <Route path="/articulos/identidad-de-genero-analisis-fallo" element={<IdentidadGeneroArticle />} />
      <Route path="/articulos/historia-derecho-musulman-sustraccion-menores" element={<HistoriaDerechoMusulmanArticle />} />
      <Route path="/articulos/interes-superior-nino-tratados-internacionales" element={<InteresSuperiorArticle />} />
      <Route path="/articulos/analisis-problemas-dip-divorcio-internacional" element={<AnalisisProblemasArticle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
