// Datos del menú — Sabores del Valle

export type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  category: 'entradas' | 'platos-fuertes' | 'postres' | 'bebidas'
  featured?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  emoji: string
}

export const menuCategories: MenuCategory[] = [
  { id: 'todos', label: 'Todos', emoji: '🍽️' },
  { id: 'entradas', label: 'Entradas', emoji: '🥗' },
  { id: 'platos-fuertes', label: 'Platos Fuertes', emoji: '🥘' },
  { id: 'postres', label: 'Postres', emoji: '🍰' },
  { id: 'bebidas', label: 'Bebidas', emoji: '🥤' }
]

export const menuItems: MenuItem[] = [
  // --- ENTRADAS ---
  {
    name: 'Pastelitos Hondureños',
    description:
      'Crujientes empanadas rellenas de carne molida sazonada, acompañadas de curtido de repollo y salsa de tomate casera.',
    price: 'L. 45',
    image: 'https://www.recetashonduras.com/base/stock/Recipe/pastelitos-de-harina-de-maiz/pastelitos-de-harina-de-maiz_web.jpg',
    category: 'entradas',
    featured: true
  },
  {
    name: 'Enchiladas Hondureñas',
    description:
      'Tortillas de maíz fritas cubiertas con carne molida, ensalada de repollo, queso rallado, salsa de tomate y un toque de chile.',
    price: 'L. 55',
    image: 'https://www.buenprovecho.hn/wp-content/uploads/2019/07/4.jpg',
    category: 'entradas'
  },
  {
    name: 'Yuca con Chicharrón',
    description:
      'Yuca cocida servida con chicharrón de cerdo crujiente, curtido de cebolla y salsa de tomate casera.',
    price: 'L. 85',
    image: 'https://www.196flavors.com/wp-content/uploads/2019/01/yuca-con-chicharron-1-FP.jpg',
    category: 'entradas',
    featured: true
  },
  {
    name: 'Tamales de Elote',
    description:
      'Tamales dulces de elote tierno envueltos en hojas de maíz, cocidos al vapor con un toque de canela.',
    price: 'L. 35',
    image: 'https://naturalgoodness.blog/wp-content/uploads/2020/06/tamal_de_elote_dulce.jpg',
    category: 'entradas'
  },

  // --- PLATOS FUERTES ---
  {
    name: 'Baleadas con todo',
    description:
      'Tortillas de harina rellenas de frijoles refritos, queso, mantequilla, aguacate, huevo revuelto y carne asada.',
    price: 'L. 50 c/u',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXUPgpqtenPbVcHyT_kmvgnaXEb2WVOUwdA&s',
    category: 'platos-fuertes',
    featured: true
  },
  {
    name: 'Pollo Chuco',
    description:
      'Pollo frito estilo catracho servido con tajadas de plátano verde, ensalada de repollo, salsa rosada y encurtido.',
    price: 'L. 145',
    image: 'https://www.buenprovecho.hn/wp-content/uploads/2022/07/D529F506-94B2-4DC5-9B45-DCE2DC2709DE-1024x682.jpeg',
    category: 'platos-fuertes',
    featured: true
  },
  {
    name: 'Tajadas con Pollo',
    description:
      'Generosa porción de tajadas de plátano verde fritas acompañadas de pollo guisado en salsa roja y ensalada.',
    price: 'L. 130',
    image: 'https://comedera.com/wp-content/uploads/sites/9/2023/10/shutterstock_2287363777.jpg',
    category: 'platos-fuertes'
  },
  {
    name: 'Sopa de Caracol',
    description:
      'Tradicional sopa garífuna preparada con leche de coco, caracol, yuca, plátano verde, chile y especias caribeñas.',
    price: 'L. 195',
    image: 'https://www.196flavors.com/wp-content/uploads/2018/10/sopa-de-caracol-1b-FP-500x500.jpg',
    category: 'platos-fuertes'
  },
  {
    name: 'Carne Asada',
    description:
      'Corte de res a la parrilla marinado con chimichurri hondureño, servido con tortillas, frijoles, tajadas y ensalada.',
    price: 'L. 175',
    image: 'https://buenprovecho.hn/wp-content/uploads/2020/09/Carne-asada-principal.png',
    category: 'platos-fuertes'
  },
  {
    name: 'Plato Típico Catracho',
    description:
      'El plato más completo: carne asada, chorizo, frijoles refritos, tajadas, queso seco, aguacate y tortillas.',
    price: 'L. 210',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O91XC7MDQQg7L3ghEnHI7h5qnJcS9ekr2Q&s',
    category: 'platos-fuertes'
  },

  // --- POSTRES ---
  {
    name: 'Torrejas',
    description:
      'Pan remojado en huevo, frito y bañado en miel de panela con canela. Postre tradicional de Semana Santa.',
    price: 'L. 55',
    image: 'https://www.cocinavital.mx/wp-content/uploads/2018/02/torrejas_con_canela.jpg',
    category: 'postres'
  },
  {
    name: 'Ayote en Miel',
    description:
      'Trozos de ayote cocidos lentamente en miel de panela con canela y clavo de olor.',
    price: 'L. 45',
    image: 'https://recetassalvadorenas.com/wp-content/uploads/2014/10/ayote-en-miel.jpg',
    category: 'postres'
  },
  {
    name: 'Arroz con Leche',
    description:
      'Cremoso arroz cocido en leche con canela, vainilla y pasas. Servido frío o caliente.',
    price: 'L. 40',
    image: 'https://lilluna.com/wp-content/uploads/2025/12/arroz-con-leche-resize-15-500x375.jpg',
    category: 'postres'
  },
  {
    name: 'Rosquillas de Maíz',
    description:
      'Galletas tradicionales de maíz y queso, crujientes por fuera y suaves por dentro.',
    price: 'L. 30',
    image: 'https://i.ytimg.com/vi/MB57h5FKVpo/maxresdefault.jpg',
    category: 'postres'
  },

  // --- BEBIDAS ---
  {
    name: 'Horchata Hondureña',
    description:
      'Bebida refrescante a base de semillas de morro, cacao, canela y especias. Tradición catrachita pura.',
    price: 'L. 35',
    image: 'https://www.hondurastips.hn/wp-content/uploads/2015/04/horchata11.jpg',
    category: 'bebidas'
  },
  {
    name: 'Fresco de Tamarindo',
    description:
      'Bebida natural de tamarindo con un toque de azúcar y hielo. Perfecta para acompañar cualquier platillo.',
    price: 'L. 30',
    image: 'https://buenprovecho.hn/wp-content/uploads/2019/10/Fresco-de-tamarindo-1.jpg',
    category: 'bebidas'
  },
  {
    name: 'Licuado de Banana',
    description:
      'Batido cremoso de banana con leche, un toque de vainilla y canela.',
    price: 'L. 40',
    image: 'https://cdn.blog.paulinacocina.net/wp-content/uploads/2022/01/licuado-de-banana.jpg',
    category: 'bebidas'
  },
  {
    name: 'Café de Copán',
    description:
      'Café de altura cultivado en las montañas de Copán, tostado artesanalmente. Disponible americano, con leche o espresso.',
    price: 'L. 350',
    image: 'https://walmarthn.vtexassets.com/arquivos/ids/392698/Espresso-Americano-Pack-Caf-Copan-340Gr-1-9150.jpg?v=638478852289630000',
    category: 'bebidas'
  }
]

// Platillos destacados para la página de inicio
export const featuredDishes = menuItems.filter(item => item.featured)
