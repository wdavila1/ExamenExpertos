import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { MenuItem } from '@/data/menu'

const FeaturedDishes = ({ dishes }: { dishes: MenuItem[] }) => {
  return (
    <section id='popular-dishes' className='bg-muted/40 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16'>
          <Badge
            variant='outline'
            className='border-primary/30 text-primary bg-primary/5 rounded-full px-3 py-1 text-sm font-medium'
          >
            Nuestras Especialidades
          </Badge>
          <h2 className='text-foreground font-serif text-3xl font-bold tracking-tight md:text-4xl'>
            Cafés Más Populares
          </h2>
          <p className='text-muted-foreground text-lg text-balance md:text-xl'>
            Descubre las variedades favoritas de nuestros clientes, cultivadas en las tierras altas de Copán y tostadas
            artesanalmente para resaltar notas aromáticas únicas y un sabor excepcional en cada taza.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className='hover:border-primary border-border/80 group bg-card flex h-full flex-col overflow-hidden rounded-2xl border shadow-xs transition-all duration-300 hover:shadow-md'
            >
              <div className='bg-muted relative flex aspect-video items-center justify-center overflow-hidden sm:aspect-square'>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  loading='lazy'
                />
                <span className='bg-primary text-primary-foreground absolute top-3 right-3 rounded-full px-3 py-1 text-sm font-semibold shadow-md'>
                  {dish.price}
                </span>
              </div>
              <CardContent className='flex flex-1 flex-col justify-between gap-4 p-6'>
                <div className='space-y-2'>
                  <CardTitle className='text-foreground group-hover:text-primary text-xl font-bold tracking-tight transition-colors duration-200'>
                    {dish.name}
                  </CardTitle>
                  <p className='text-primary/80 text-sm font-semibold tracking-wider uppercase'>
                    {dish.category.replace('-', ' ')}
                  </p>
                  <Separator className='bg-border/60' />
                  <p className='text-muted-foreground line-clamp-3 text-sm leading-relaxed'>{dish.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action to view menu */}
        <div className='mt-16 text-center'>
          <Button asChild size='lg' className='rounded-full px-8 font-semibold shadow-md'>
            <a href='/catalogo'>Explorar el Catálogo Completo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDishes
