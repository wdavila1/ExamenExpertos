// Testimonios de clientes — Café Premium Copán

export type TestimonialItem = {
  name: string
  avatar: string
  rating: number
  content: string
}

export const testimonials: TestimonialItem[] = [
  {
    name: 'José Hernández',
    avatar: '/images/hero-section/avatar-01.webp',
    rating: 5,
    content:
      'Las baleadas de Café Premium Copán son las mejores que he probado en Tegus. El sabor es auténtico y los ingredientes son siempre frescos. ¡Mi familia y yo venimos cada fin de semana!'
  },
  {
    name: 'María Fernanda López',
    avatar: '/images/hero-section/avatar-02.webp',
    rating: 4.5,
    content:
      'La sopa de caracol es espectacular, me transporta a La Ceiba. El ambiente es muy acogedor y el servicio siempre es excelente. Totalmente recomendado para reuniones familiares.'
  },
  {
    name: 'Andrea Moncada',
    avatar: '/images/hero-section/avatar-03.webp',
    rating: 5,
    content:
      'Celebré mi cumpleaños aquí y fue una experiencia increíble. El plato típico catracho es abundante y delicioso. El personal nos trató como en casa. ¡Volveremos sin duda!'
  },
  {
    name: 'Roberto Elvir',
    avatar: '/images/hero-section/avatar-04.webp',
    rating: 4.5,
    content:
      'El pollo chuco con tajadas es adictivo. Excelente relación calidad-precio y porciones generosas. Un pedacito de Honduras en cada bocado. Lo recomiendo al 100%.'
  }
]
