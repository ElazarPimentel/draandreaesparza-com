import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = 'https://draandreaesparza.com'
const today = new Date().toISOString().split('T')[0]

// Define routes with their metadata
const routes = [
  {
    path: '/',
    lastmod: today,
    changefreq: 'monthly',
    priority: 1.0
  },
  // Service pages - high priority for SEO
  {
    path: '/servicios/divorcios-buenos-aires',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    path: '/servicios/derecho-familia',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    path: '/servicios/sucesiones',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    path: '/servicios/alimentos',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.9
  },
  // Articles
  {
    path: '/articulos/conceptos-ninez-adolescencia-dip',
    lastmod: '2025-05-31',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/bioetica-reproduccion-asistida-subrogacion-vientres',
    lastmod: '2022-08-31',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/finanzas-islamicas-derecho-musulman',
    lastmod: '2023-10-14',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/identidad-de-genero-analisis-fallo',
    lastmod: '2021-12-06',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/historia-derecho-musulman-sustraccion-menores',
    lastmod: '2007-11-15',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/interes-superior-nino-tratados-internacionales',
    lastmod: '2015-03-01',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/analisis-problemas-dip-divorcio-internacional',
    lastmod: '2007-11-07',
    changefreq: 'yearly',
    priority: 0.7
  },
  // RIDCA/AIDCA Articles
  {
    path: '/articulos/filiacion-reproduccion-asistida-subrogacion-dip',
    lastmod: '2022-12-20',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/finanzas-derecho-musulman-ridca',
    lastmod: '2023-07-15',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/proteccion-internacional-adultos-mayores',
    lastmod: '2023-12-20',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/identidad-genero-fallo-ridca',
    lastmod: '2024-07-15',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/dip-trabajo-sentencia-venezuela',
    lastmod: '2025-03-01',
    changefreq: 'yearly',
    priority: 0.7
  },
  {
    path: '/articulos/insolvencia-transfronteriza-derecho-europeo',
    lastmod: '2025-12-01',
    changefreq: 'yearly',
    priority: 0.7
  }
]

// Generate sitemap XML
const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  routes.forEach(route => {
    xml += '  <url>\n'
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`
    xml += `    <priority>${route.priority}</priority>\n`
    xml += '  </url>\n'
  })

  xml += '</urlset>\n'

  return xml
}

// Write sitemap to project root
const outputPath = path.join(__dirname, '..', 'sitemap.xml')
const sitemap = generateSitemap()

fs.writeFileSync(outputPath, sitemap, 'utf-8')
console.log(`✓ Sitemap generated successfully at ${outputPath}`)
console.log(`✓ Total URLs: ${routes.length}`)
