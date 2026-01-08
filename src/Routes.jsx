import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import BioeticaArticle from './pages/articulos/BioeticaArticle.jsx'
import FinanzasIslamicasArticle from './pages/articulos/FinanzasIslamicasArticle.jsx'
import IdentidadGeneroArticle from './pages/articulos/IdentidadGeneroArticle.jsx'
import HistoriaDerechoMusulmanArticle from './pages/articulos/HistoriaDerechoMusulmanArticle.jsx'
import InteresSuperiorArticle from './pages/articulos/InteresSuperiorArticle.jsx'
import AnalisisProblemasArticle from './pages/articulos/AnalisisProblemasArticle.jsx'
import ConceptosNinezArticle from './pages/articulos/ConceptosNinezArticle.jsx'
import FiliacionSubrogacionArticle from './pages/articulos/FiliacionSubrogacionArticle.jsx'
import FinanzasMusulmanRidcaArticle from './pages/articulos/FinanzasMusulmanRidcaArticle.jsx'
import AdultosMayoresArticle from './pages/articulos/AdultosMayoresArticle.jsx'
import IdentidadGeneroRidcaArticle from './pages/articulos/IdentidadGeneroRidcaArticle.jsx'
import DIPTrabajoVenezuelaArticle from './pages/articulos/DIPTrabajoVenezuelaArticle.jsx'
import InsolvenciaTransfronterizaArticle from './pages/articulos/InsolvenciaTransfronterizaArticle.jsx'
import DivorciosPage from './pages/servicios/DivorciosPage.jsx'
import DerechoFamiliaPage from './pages/servicios/DerechoFamiliaPage.jsx'
import SucesionesPage from './pages/servicios/SucesionesPage.jsx'
import AlimentosPage from './pages/servicios/AlimentosPage.jsx'
import NotFound from './pages/NotFound.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/servicios/divorcios-buenos-aires" element={<DivorciosPage />} />
      <Route path="/servicios/derecho-familia" element={<DerechoFamiliaPage />} />
      <Route path="/servicios/sucesiones" element={<SucesionesPage />} />
      <Route path="/servicios/alimentos" element={<AlimentosPage />} />
      <Route path="/articulos/bioetica-reproduccion-asistida-subrogacion-vientres" element={<BioeticaArticle />} />
      <Route path="/articulos/finanzas-islamicas-derecho-musulman" element={<FinanzasIslamicasArticle />} />
      <Route path="/articulos/identidad-de-genero-analisis-fallo" element={<IdentidadGeneroArticle />} />
      <Route path="/articulos/historia-derecho-musulman-sustraccion-menores" element={<HistoriaDerechoMusulmanArticle />} />
      <Route path="/articulos/interes-superior-nino-tratados-internacionales" element={<InteresSuperiorArticle />} />
      <Route path="/articulos/analisis-problemas-dip-divorcio-internacional" element={<AnalisisProblemasArticle />} />
      <Route path="/articulos/conceptos-ninez-adolescencia-dip" element={<ConceptosNinezArticle />} />
      <Route path="/articulos/filiacion-reproduccion-asistida-subrogacion-dip" element={<FiliacionSubrogacionArticle />} />
      <Route path="/articulos/finanzas-derecho-musulman-ridca" element={<FinanzasMusulmanRidcaArticle />} />
      <Route path="/articulos/proteccion-internacional-adultos-mayores" element={<AdultosMayoresArticle />} />
      <Route path="/articulos/identidad-genero-fallo-ridca" element={<IdentidadGeneroRidcaArticle />} />
      <Route path="/articulos/dip-trabajo-sentencia-venezuela" element={<DIPTrabajoVenezuelaArticle />} />
      <Route path="/articulos/insolvencia-transfronteriza-derecho-europeo" element={<InsolvenciaTransfronterizaArticle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
