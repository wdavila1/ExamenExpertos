// Datos del menú — Café Premium Copán

export type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  category: 'cafe'
  tueste: string
  proceso: string
  featured?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  emoji: string
}

export const menuCategories: MenuCategory[] = [
  { id: 'todos', label: 'Todos', emoji: '☕' },
  { id: 'cafe', label: 'Café Premium', emoji: '✨' }
]

export const menuItems: MenuItem[] = [
  // --- CAFÉS PREMIUM DE COPÁN ---
  {
    name: 'Café Variedad Bourbon',
    description:
      'Café de especialidad con notas a chocolate, frutos rojos y un toque cítrico. Tueste medio para resaltar su complejidad.',
    price: 'L. 85',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mCJOy90JuShhPymzF2IaNykEWtCfLUwArA&s',
    tueste: 'Medio',
    proceso: 'Lavado',
    category: 'cafe',
    featured: true
  },

  {
    name: 'Café Excelso Copán',
    description: 'Café de altura con cuerpo medio y acidez brillante. Notas a nueces, caramelo y un final suave.',
    price: 'L. 65',
    image:
      'https://i5.walmartimages.cl/asr/b98a9fbf-6eb9-42e9-9ded-6089e81d8319.29aae8b7e9979584f56c743fdb9e8d3f.jpeg?null=&odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    tueste: 'Oscuro',
    proceso: 'Lavado',
    category: 'cafe',
    featured: true
  },

  {
    name: 'Cafe Organico de Copán',
    description: 'Café orgánico de origen hondureño con notas de frutas tropicales y un cuerpo suave.',
    price: 'L. 95',
    image: 'https://s9790.pcdn.co/wp-content/uploads/2019/04/cafe-a-domicilio-mycoffeebox-scaled.jpg',
    tueste: 'Medio',
    proceso: 'Miel',
    category: 'cafe'
  },
  {
    name: 'Café Americano Premium',
    description: 'Espresso suave diluido en agua caliente. Notas de chocolate y caramelo.',
    price: 'L. 75',
    image: 'https://m.media-amazon.com/images/I/A13mq62qhjL._AC_UF894,1000_QL80_.jpg',
    tueste: 'Medio',
    proceso: 'Lavado',
    category: 'cafe',
    featured: true
  },
  {
    name: 'Molienda Fina',
    description: 'Cafe de Molienda fina para espresso, con notas intensas a chocolate oscuro y un cuerpo robusto.',
    price: 'L. 80',
    image:
      'https://static.wixstatic.com/media/45119e_163a011e71274f6dbdfcc1d544f8877e~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_163a011e71274f6dbdfcc1d544f8877e~mv2.png',
    tueste: 'Oscuro',
    proceso: 'Natural',
    category: 'cafe'
  },
  {
    name: 'Grano Entero Premium',
    description: 'Grano entero de café premium, ideal para moler en casa. Notas a frutos secos y un aroma envolvente.',
    price: 'L. 90',
    image: 'https://m.media-amazon.com/images/I/61Gy2riylnL._AC_UF894,1000_QL80_.jpg',
    tueste: 'Medio',
    proceso: 'Miel',
    category: 'cafe'
  },
  {
    name: 'Café de Especialidad Floral',
    description: 'Notas florales delicadas con toques de bergamota. Acidez limpia y cuerpo ligero.',
    price: 'L. 120',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaknIygcTTrC4R87FnSHh7iDUcw_gblNGhA&s',
    tueste: 'Claro',
    proceso: 'Lavado',
    category: 'cafe',
    featured: true
  },
  {
    name: 'Macchiato Tradicional',
    description: 'Espresso «manchado» con un poco de espuma de leche. Intenso pero suave.',
    price: 'L. 70',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtFNZBrWKrT2QIJcXmVtEvFJYjMNR5z6MPQ&s',
    tueste: 'Oscuro',
    proceso: 'Lavado',
    category: 'cafe'
  },
  {
    name: 'Café con Chocolate',
    description: 'Mocha acaramelado: espresso, leche y chocolate artesanal. Indulgencia pura.',
    price: 'L. 110',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaknIygcTTrC4R87FnSHh7iDUcw_gblNGhA&s',
    tueste: 'Medio',
    proceso: 'Miel',
    category: 'cafe'
  },
  {
    name: 'Café Frio Clásico',
    description: 'Cold brew suave con notas dulces y cremosas. Perfecto para días calurosos.',
    price: 'L. 85',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop',
    tueste: 'Medio',
    proceso: 'Lavado',
    category: 'cafe'
  },
  {
    name: 'Cortado Perfecto',
    description: 'Proporción ideal de espresso y leche caliente. Equilibrio en cada sorbo.',
    price: 'L. 75',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rxtBX3whk57dDRtRyMCaN0mrtiFiO-rPAg&s',
    tueste: 'Medio-Oscuro',
    proceso: 'Lavado',
    category: 'cafe'
  },
  {
    name: 'Café con Caramelo',
    description: 'Drizzle de caramelo sobre espresso con leche vaporizada. Dulce y sofisticado.',
    price: 'L. 100',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop',
    tueste: 'Claro-Medio',
    proceso: 'Miel',
    category: 'cafe'
  },
  {
    name: 'Ristretto Intenso',
    description: 'Espresso corto y concentrado. Máxima intensidad y sabor en pequeña porción.',
    price: 'L. 60',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop',
    tueste: 'Oscuro',
    proceso: 'Natural',
    category: 'cafe'
  },
  {
    name: 'Café Crema',
    description: 'Largo europeo con crema espesa. Suave y elegante, típico de Viena.',
    price: 'L. 95',
    image: 'https://www.nescafe.com/mx/sites/default/files/2023-07/Cremoso%20vainilla%2001.jpg',
    tueste: 'Medio',
    proceso: 'Lavado',
    category: 'cafe'
  },
  {
    name: 'Café Copán Gourmet',
    description: 'Mezcla exclusiva de diferentes lotes. Complejidad aromática excepcional.',
    price: 'L. 150',
    image: 'https://walmarthn.vtexassets.com/arquivos/ids/567310/56916_01.jpg?v=638709290493270000',
    tueste: 'Medio-Oscuro',
    proceso: 'Fermentado',
    category: 'cafe',
    featured: true
  }
]

// Platillos destacados para la página de inicio
export const featuredDishes = menuItems.filter(item => item.featured)
