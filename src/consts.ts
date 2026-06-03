// Site Configuration — Sabores del Valle
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Sabores del Valle — Restaurante de Comida Típica Hondureña'
export const SITE_DESCRIPTION =
  'Disfruta de la auténtica gastronomía hondureña: baleadas, pollo chuco, sopa de caracol y más. Ingredientes frescos, recetas tradicionales y un ambiente cálido en Tegucigalpa.'

export const SITE_URL = 'https://saboresdelvalle.hn/'

export const SITE_METADATA = {
  title: {
    default: 'Sabores del Valle — Restaurante de Comida Típica Hondureña'
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
    'sabores del valle',
    'carne asada hondureña',
    'tajadas con pollo',
    'comida típica',
    'restaurante familiar Honduras'
  ],
  authors: [{ name: 'Sabores del Valle', url: SITE_URL }],
  creator: 'Wilson Avila',
  publisher: 'Sabores del Valle',
  robots: {
    index: true,
    follow: true
  },
  language: 'es-HN',
  locale: 'es_HN',
  icons: {
    icon: [
      { url: '/favicon/SabValle.ico', sizes: '48x48' },
      { url: '/favicon/SabValle.ico', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/SabValle.ico', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/SabValle.ico', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/SabValle.ico', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/SabValle.ico', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/SabValle.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'es_HN',
    siteName: 'Sabores del Valle',
    title: 'Sabores del Valle — Restaurante de Comida Típica Hondureña',
    description:
      'Disfruta de la auténtica gastronomía hondureña: baleadas, pollo chuco, sopa de caracol y más. Ingredientes frescos, recetas tradicionales y un ambiente cálido en Tegucigalpa.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sabores del Valle — Restaurante de Comida Típica Hondureña',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@saboresdelvalle',
    creator: '@saboresdelvalle',
    title: 'Sabores del Valle — Restaurante de Comida Típica Hondureña',
    description:
      'Disfruta de la auténtica gastronomía hondureña: baleadas, pollo chuco, sopa de caracol y más.',
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
  name: 'Sabores del Valle',
  legalName: 'Sabores del Valle S. de R.L.',
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
