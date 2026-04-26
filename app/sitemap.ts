import type { MetadataRoute } from 'next'

const BASE = 'https://draandreaesparza.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const services = [
    'divorcios-buenos-aires',
    'derecho-familia',
    'sucesiones',
    'alimentos',
    'cuidado-personal',
    'violencia-familiar',
    'medida-proteccion-excepcional',
    'derecho-familia-internacional',
  ]

  const articles = [
    'analisis-problemas-dip-divorcio-internacional',
    'bioetica-reproduccion-asistida-subrogacion-vientres',
    'conceptos-ninez-adolescencia-dip',
    'dip-trabajo-sentencia-venezuela',
    'filiacion-reproduccion-asistida-subrogacion-dip',
    'finanzas-derecho-musulman-ridca',
    'finanzas-islamicas-derecho-musulman',
    'historia-derecho-musulman-sustraccion-menores',
    'identidad-de-genero-analisis-fallo',
    'identidad-genero-fallo-ridca',
    'insolvencia-transfronteriza-derecho-europeo',
    'interes-superior-nino-tratados-internacionales',
    'proteccion-internacional-adultos-mayores',
    'agencias-especializadas-ley-islamica',
    'violencia-vicaria-que-es',
    'cambio-residencia-hijos-autorizacion-judicial',
    'hijos-viven-en-otro-pais-mantener-vinculo',
  ]

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...services.map(s => ({
      url: `${BASE}/servicios/${s}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles.map(a => ({
      url: `${BASE}/articulos/${a}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
