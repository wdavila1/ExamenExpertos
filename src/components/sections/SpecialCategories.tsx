'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { menuItems } from '@/data/menu'
import { CoffeeCard } from './CoffeeCard'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const specialCategoriesTabs = [
  { id: 'todos', label: 'Todos', emoji: '☕' },
  { id: 'lote-especial', label: 'Lotes Especiales', emoji: '' },
  { id: 'micro-lote', label: 'Micro-lotes', emoji: '' }
]

const SpecialCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos')

  const lotesEspeciales = menuItems.filter(item => item.category === 'lote-especial')
  const microlotes = menuItems.filter(item => item.category === 'micro-lote')

  const showLotes = activeCategory === 'todos' || activeCategory === 'lote-especial'
  const showMicro = activeCategory === 'todos' || activeCategory === 'micro-lote'

  return (
    <div className='w-full space-y-12'>
      {/* Categories Buttons/Tabs */}
      <div className='border-border/60 flex flex-wrap justify-center gap-3 border-b pb-4 md:gap-4'>
        {specialCategoriesTabs.map(category => {
          const isActive = activeCategory === category.id
          return (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={isActive ? 'default' : 'outline'}
              className={cn(
                'h-auto rounded-full px-5 py-2 text-base font-medium transition-all duration-300',
                isActive
                  ? 'shadow-primary/20 scale-105 shadow-md'
                  : 'hover:bg-primary/5 hover:text-primary hover:border-primary/40'
              )}
            >
              <span className='mr-2'>{category.emoji}</span>
              {category.label}
            </Button>
          )
        })}
      </div>

      <div className='space-y-20'>
        {activeCategory === 'todos' ? (
          <div className='animate-fade-in grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {[...lotesEspeciales, ...microlotes].map((dish, index) => (
              <CoffeeCard
                key={`all-${index}`}
                nombre={dish.name}
                tueste={dish.tueste}
                precio={dish.price}
                precioAnterior={dish.oldPrice}
                detalles={dish.detalles}
                imgUrl={dish.image}
                featured={dish.featured}
                badgeText={dish.badgeText}
              />
            ))}
          </div>
        ) : (
          <>
            {/* Lotes Especiales Section */}
            {activeCategory === 'lote-especial' && lotesEspeciales.length > 0 && (
              <section className='animate-fade-in space-y-8'>
                <div className='border-border flex flex-col justify-between gap-4 border-b pb-5 md:flex-row md:items-end'>
                  <div>
                    <div className='mb-2 flex items-center gap-2'>
                      <Badge
                        variant='outline'
                        className='rounded-full border-amber-500/30 bg-amber-500/5 px-2.5 py-0.5 text-xs font-semibold tracking-wider text-amber-500 uppercase'
                      >
                        Edición Limitada
                      </Badge>
                    </div>
                    <h2 className='text-foreground font-serif text-3xl font-bold tracking-tight'>Lotes Especiales</h2>
                    <p className='text-muted-foreground max-w-1xl mt-2'>
                      Granos excepcionales seleccionados por su rareza y perfil de taza superior. Un viaje sensorial
                      único en cada sorbo.
                    </p>
                  </div>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  {lotesEspeciales.map((dish, index) => (
                    <CoffeeCard
                      key={`lote-${index}`}
                      nombre={dish.name}
                      tueste={dish.tueste}
                      precio={dish.price}
                      precioAnterior={dish.oldPrice}
                      detalles={dish.detalles}
                      imgUrl={dish.image}
                      featured={dish.featured}
                      badgeText={dish.badgeText}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Micro-lotes Section */}
            {activeCategory === 'micro-lote' && microlotes.length > 0 && (
              <section className='animate-fade-in space-y-8'>
                <div className='border-border flex flex-col justify-between gap-4 border-b pb-5 md:flex-row md:items-end'>
                  <div>
                    <div className='mb-2 flex items-center gap-2'>
                      <Badge
                        variant='outline'
                        className='rounded-full border-orange-500/30 bg-orange-500/5 px-2.5 py-0.5 text-xs font-semibold tracking-wider text-orange-500 uppercase'
                      >
                        Cosechas Únicas
                      </Badge>
                    </div>
                    <h2 className='text-foreground font-serif text-3xl font-bold tracking-tight'>
                      Micro-lotes Exclusivos
                    </h2>
                    <p className='text-muted-foreground max-w-1xl mt-2'>
                      Producidos en cantidades sumamente limitadas en parcelas específicas con microclimas ideales.
                      Trazabilidad absoluta y sabor incomparable.
                    </p>
                  </div>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  {microlotes.map((dish, index) => (
                    <CoffeeCard
                      key={`micro-${index}`}
                      nombre={dish.name}
                      tueste={dish.tueste}
                      precio={dish.price}
                      precioAnterior={dish.oldPrice}
                      detalles={dish.detalles}
                      imgUrl={dish.image}
                      featured={dish.featured}
                      badgeText={dish.badgeText}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default SpecialCategories
