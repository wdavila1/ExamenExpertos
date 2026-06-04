'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { menuItems } from '@/data/menu'
import type { MenuItem } from '@/data/menu'
import { cn } from '@/lib/utils'
import { CoffeeCard } from './CoffeeCard'

const tuesteCategories = [
  { id: 'todos', label: 'Todos los Tuestes', emoji: '☕' },
  { id: 'Claro', label: 'Tueste Claro', emoji: '' },
  { id: 'Medio', label: 'Tueste Medio', emoji: '' },
  { id: 'Oscuro', label: 'Tueste Oscuro', emoji: '' }
]

const MenuCategories = () => {
  const [activeTueste, setActiveTueste] = useState<string>('todos')

  // Base items for the catalog (exclude special editions)
  const baseItems = menuItems.filter(item => item.category === 'cafe')

  // Filter items based on active tab
  const filteredItems =
    activeTueste === 'todos' ? baseItems : baseItems.filter(item => item.tueste.includes(activeTueste))

  const firstBatch = filteredItems.slice(0, 8)
  const secondBatch = filteredItems.slice(8)

  return (
    <div className='w-full space-y-12'>
      {/* Tueste Buttons/Tabs */}
      <div className='border-border/60 flex flex-wrap justify-center gap-3 border-b pb-4 md:gap-4'>
        {tuesteCategories.map(category => {
          const isActive = activeTueste === category.id
          return (
            <Button
              key={category.id}
              onClick={() => setActiveTueste(category.id)}
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

      {/* Grid of Menu Items */}
      {filteredItems.length === 0 ? (
        <div className='text-muted-foreground py-12 text-center'>No se encontraron cafés con este tueste.</div>
      ) : (
        <div className='animate-fade-in grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {firstBatch.map((dish: MenuItem, index: number) => (
            <CoffeeCard
              key={index}
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

          {/* Promotional Section */}
          <div className='border-primary/20 bg-primary/5 relative col-span-full my-4 flex flex-col items-center justify-center gap-5 overflow-hidden rounded-3xl border p-8 text-center shadow-sm md:p-12'>
            <span className='animate-bounce text-5xl drop-shadow-md'>☕</span>
            <div className='relative z-10 max-w-2xl space-y-3'>
              <h3 className='text-foreground font-serif text-2xl font-bold md:text-3xl'>¿Buscas algo más exclusivo?</h3>
              <p className='text-muted-foreground text-lg text-balance md:text-xl'>
                Descubre nuestros micro-lotes y cosechas premium, seleccionados de las mejores fincas de Copán.
              </p>
            </div>
            <Button
              asChild
              size='lg'
              className='relative z-10 mt-2 scale-105 rounded-full px-8 font-semibold shadow-md transition-transform hover:scale-110'
            >
              <a href='/especiales'>Ver Ediciones Especiales</a>
            </Button>
          </div>

          {secondBatch.map((dish: MenuItem, index: number) => (
            <CoffeeCard
              key={`second-${index}`}
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
      )}
    </div>
  )
}

export default MenuCategories
