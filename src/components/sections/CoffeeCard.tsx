import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export interface CoffeeCardProps {
  nombre: string
  tueste: string
  precio: string
  precioAnterior?: string
  detalles: {
    altura: string
    notaCata: string
    proceso: string
  }
  imgUrl: string
  featured?: boolean
  badgeText?: string
}

export const CoffeeCard = ({ nombre, tueste, precio, precioAnterior, detalles, imgUrl, featured, badgeText }: CoffeeCardProps) => {
  return (
    <Card className='hover:border-primary border-border/80 group bg-card flex h-full flex-col overflow-hidden rounded-2xl border shadow-xs transition-all duration-300 hover:shadow-md'>
      {/* Dish Image */}
      <div className='bg-muted relative flex aspect-video items-center justify-center overflow-hidden'>
        <img
          src={imgUrl}
          alt={nombre}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
          loading='lazy'
        />
        
        {/* Badges */}
        <div className='absolute top-3 left-3 flex flex-col gap-1.5 items-start'>
          {badgeText && (
            <span className='bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold px-3 py-1 text-xs rounded-full shadow-lg uppercase tracking-wider border border-amber-400/30'>
              {badgeText}
            </span>
          )}
          {featured && !badgeText && (
            <span className='bg-accent text-accent-foreground rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase shadow-xs'>
              Especialidad
            </span>
          )}
        </div>

        {/* Pricing */}
        <div className='absolute top-3 right-3 flex flex-col items-end gap-1.5'>
          {precioAnterior && (
            <span className='bg-neutral-900/80 text-neutral-300 line-through text-xs px-2.5 py-0.5 rounded-full font-medium backdrop-blur-xs shadow-sm'>
              {precioAnterior}
            </span>
          )}
          <span className={`bg-primary text-primary-foreground rounded-full font-semibold shadow-md ${
            precioAnterior 
              ? 'bg-amber-600 text-white text-base px-3.5 py-1.5 scale-105 border border-amber-500/20 font-bold' 
              : 'text-sm px-3 py-1'
          }`}>
            {precio}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <CardContent className='flex flex-1 flex-col justify-between gap-4 p-5'>
        <div className='space-y-3'>
          <div className='flex items-start justify-between gap-2'>
            <CardTitle className='text-foreground group-hover:text-primary text-lg font-bold tracking-tight transition-colors duration-200'>
              {nombre}
            </CardTitle>
          </div>
          <div className='flex flex-wrap gap-2'>
            <p className='text-primary/80 bg-primary/10 rounded px-2 py-1 text-xs font-semibold tracking-wider uppercase'>
              {tueste}
            </p>
          </div>
          <Separator className='bg-border/60' />
          <div className='text-muted-foreground text-sm space-y-1.5'>
            <p className='flex justify-between'>
              <span className='font-medium text-foreground'>Altura:</span>
              <span className='text-right'>{detalles.altura}</span>
            </p>
            <p className='flex flex-col'>
              <span className='font-medium text-foreground mb-1'>Nota de cata:</span>
              <span className='leading-relaxed'>{detalles.notaCata}</span>
            </p>
            <p className='flex justify-between pt-1'>
              <span className='font-medium text-foreground'>Proceso:</span>
              <span>{detalles.proceso}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
