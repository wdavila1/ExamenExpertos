import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { MenuItem } from '@/data/menu'

const FeaturedDishes = ({ dishes }: { dishes: MenuItem[] }) => {
  return (
    <section id='popular-dishes' className='py-16 sm:py-24 bg-muted/40'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16'>
          <Badge variant='outline' className='text-sm font-medium border-primary/30 text-primary bg-primary/5 px-3 py-1 rounded-full'>
            Nuestras Especialidades
          </Badge>
          <h2 className='text-3xl font-bold font-serif md:text-4xl text-foreground tracking-tight'>
            Platillos Más Populares
          </h2>
          <p className='text-muted-foreground text-lg md:text-xl text-balance'>
            Descubre los sabores favoritos de nuestros clientes, preparados con ingredientes frescos de la más alta calidad y el sazón catracho tradicional.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className='hover:border-primary border border-border/80 overflow-hidden rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group bg-card'
            >
              <div className='bg-muted relative overflow-hidden aspect-video sm:aspect-square flex items-center justify-center'>
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500' 
                  loading='lazy' 
                />
                <span className='absolute top-3 right-3 bg-primary text-primary-foreground font-semibold px-3 py-1 text-sm rounded-full shadow-md'>
                  {dish.price}
                </span>
              </div>
              <CardContent className='p-6 flex flex-col flex-1 justify-between gap-4'>
                <div className='space-y-2'>
                  <CardTitle className='text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200'>
                    {dish.name}
                  </CardTitle>
                  <p className='text-sm font-semibold tracking-wider text-primary/80 uppercase'>
                    {dish.category.replace('-', ' ')}
                  </p>
                  <Separator className='bg-border/60' />
                  <p className='text-muted-foreground text-sm leading-relaxed line-clamp-3'>
                    {dish.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action to view menu */}
        <div className='mt-16 text-center'>
          <Button asChild size='lg' className='rounded-full px-8 font-semibold shadow-md'>
            <a href='/menu'>Explorar el Menú Completo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDishes
