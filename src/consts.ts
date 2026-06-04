// Site Configuration — Café Premium Copán
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Café Premium Copán — Restaurante de Comida Típica Hondureña'
export const SITE_DESCRIPTION =
  'Disfruta de la auténtica gastronomía hondureña: baleadas, pollo chuco, sopa de caracol y más. Ingredientes frescos, recetas tradicionales y un ambiente cálido en Tegucigalpa.'

export const SITE_URL = 'https://saboresdelvalle.hn/'

export const SITE_METADATA = {
  title: {
    default: 'Café Premium Copán — Restaurante de Comida Típica Hondureña'
  },
  description:
    'Disfruta de la auténtica gastronomía hondureña: baleadas, pollo chuco, sopa de caracol y más. Ingredientes frescos, recetas tradicionales y un ambiente cálido en Tegucigalpa.',
  keywords: [
    'restaurante hondureño',
    'comida típica hondureña',
    'baleadas',
    'pollo chuco',
    'sopa de caracol',
    'comida catracha',
    'restaurante Tegucigalpa',
    'gastronomía hondureña',
    'plato típico',
    'Café Premium Copán',
    'carne asada hondureña',
    'tajadas con pollo',
    'comida típica',
    'restaurante familiar Honduras'
  ],
  authors: [{ name: 'Café Premium Copán', url: SITE_URL }],
  creator: 'Wilson Avila',
  publisher: 'Café Premium Copán',
  robots: {
    index: true,
    follow: true
  },
  language: 'es-HN',
  locale: 'es_HN',
  icons: {
    icon: [
      { url: '/favicon/logo.ico', sizes: '48x48' },
      { url: '/favicon/logo.ico', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/logo.ico', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/logo.ico', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/logo.ico', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/logo.ico', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/logo.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'es_HN',
    siteName: 'Café Premium Copán',
    title: 'Café Premium Copán — Restaurante de Comida Típica Hondureña',
    description:
      'Disfruta de la auténtica gastronomía hondureña: baleadas, pollo chuco, sopa de caracol y más. Ingredientes frescos, recetas tradicionales y un ambiente cálido en Tegucigalpa.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Café Premium Copán — Restaurante de Comida Típica Hondureña',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@saboresdelvalle',
    creator: '@saboresdelvalle',
    title: 'Café Premium Copán — Restaurante de Comida Típica Hondureña',
    description: 'Disfruta de la auténtica gastronomía hondureña: baleadas, pollo chuco, sopa de caracol y más.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '',
    yandex: '',
    bing: ''
  }
}

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/saboresdelvalle',
  instagram: 'https://instagram.com/saboresdelvalle',
  twitter: 'https://twitter.com/saboresdelvalle',
  youtube: 'https://youtube.com/@saboresdelvalle'
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Café Premium Copán',
  legalName: 'Café Premium Copán S. de R.L.',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2010',
  address: {
    streetAddress: 'Boulevard Morazán',
    addressLocality: 'Tegucigalpa',
    addressRegion: 'Francisco Morazán',
    postalCode: '11101',
    addressCountry: 'HN'
  },
  contactPoint: {
    telephone: '+504-2222-3333',
    contactType: 'reservaciones',
    email: 'info@saboresdelvalle.hn'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
