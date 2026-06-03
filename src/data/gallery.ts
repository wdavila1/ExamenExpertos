// Galería de imágenes — Sabores del Valle

export type GalleryImage = {
  src: string
  alt: string
  category: 'comida' | 'local' | 'eventos'
}

export type GalleryCategory = {
  id: string
  label: string
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'comida', label: 'Comida' },
  { id: 'local', label: 'El Local' },
  { id: 'eventos', label: 'Eventos' }
]

export const galleryImages: GalleryImage[] = [
  // Comida
  {
    src: 'https://comidashonduras.com/wp-content/uploads/2022/12/Baleada-con-carne.jpg',
    alt: 'Baleadas especiales con carne asada',
    category: 'comida'
  },
  {
    src: 'https://www.buenprovecho.hn/wp-content/uploads/2022/07/D529F506-94B2-4DC5-9B45-DCE2DC2709DE-1024x682.jpeg',
    alt: 'Pollo chuco',
    category: 'comida'
  },
  {
    src: 'https://www.recetashonduras.com/base/stock/Recipe/tajadas-con-patitas-de-pollo/tajadas-con-patitas-de-pollo_web.jpg.webp',
    alt: 'Tajadas con pollo guisado',
    category: 'comida'
  },
  {
    src: 'https://www.196flavors.com/wp-content/uploads/2018/10/sopa-de-caracol-1b-FP-500x500.jpg',
    alt: 'Sopa de caracol garífuna',
    category: 'comida'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9U5pMcKtgumruuXP56yySxYvl7GRJCOyww&s',
    alt: 'Pastelitos hondureños crujientes',
    category: 'comida'
  },
  {
    src: 'https://www.196flavors.com/wp-content/uploads/2019/01/yuca-con-chicharron-1-FP.jpg',
    alt: 'Yuca con chicharrón',
    category: 'comida'
  },

  // Local
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJ8OMenACNF6e0xPfOWnmBUEKAS8yo-YSXQ&s',
    alt: 'Interior del restaurante Sabores del Valle',
    category: 'local'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8-9dShdnmcH5yCNQqEdkzM7r0Dbcq9DcdQ&s',
    alt: 'Zona de mesas principales',
    category: 'local'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOposBsLlklWyg1TqHLaQho2k8ZorUe4nWg&s',
    alt: 'Barra y área de bebidas',
    category: 'local'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBaebYVBHufR53ftmifVvZ5WX9_kJ7EmS3Q&s',
    alt: 'Cocina abierta del restaurante',
    category: 'local'
  },

  // Eventos
  {
    src: 'https://foodandpleasure.com/wp-content/uploads/2024/12/restaurante-cumpleanos-familia-foto-shutterstock-2.jpg',
    alt: 'Celebración de cumpleaños en el restaurante',
    category: 'eventos'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64G6BbUwZcM5IwYMgg88U-O53oHkXs0iRrQ&s',
    alt: 'Evento corporativo en sala privada',
    category: 'eventos'
  },
  {
    src: 'https://assets3.thrillist.com/v1/image/3118237/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
    alt: 'Noche de karaoke hondureño',
    category: 'eventos'
  },
  {
    src: 'https://www.honduras.com/wp-content/uploads/2026/02/festival-2026-roatan-food-.jpg',
    alt: 'Festival gastronómico de fin de año',
    category: 'eventos'
  }
]
