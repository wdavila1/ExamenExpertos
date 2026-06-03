'use client'

import { useState } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { menuCategories, menuItems } from '@/data/menu'
import type { MenuItem } from '@/data/menu'
import { cn } from '@/lib/utils'

const MenuCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos')

  // Filter items based on active tab
  const filteredItems = activeCategory === 'todos'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className='w-full space-y-12'>
      {/* Categories Buttons/Tabs */}
      <div className='flex flex-wrap justify-center gap-3 md:gap-4 pb-4 border-b border-border/60'>
        {menuCategories.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={isActive ? 'default' : 'outline'}
              className={cn(
                'rounded-full px-5 py-2 h-auto text-base transition-all duration-300 font-medium',
                isActive 
                  ? 'shadow-md shadow-primary/20 scale-105' 
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
        <div className='text-center py-12 text-muted-foreground'>
          No se encontraron platillos en esta categoría.
        </div>
      ) : (
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fade-in'>
          {filteredItems.map((dish: MenuItem, index: number) => (
            <Card
              key={index}
              className='hover:border-primary border border-border/80 overflow-hidden rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group bg-card'
            >
              {/* Dish Image */}
              <div className='bg-muted relative overflow-hidden aspect-video flex items-center justify-center'>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
                  loading='lazy'
                />
                <span className='absolute top-3 right-3 bg-primary text-primary-foreground font-semibold px-3 py-1 text-sm rounded-full shadow-md'>
                  {dish.price}
                </span>
                {dish.featured && (
                  <span className='absolute top-3 left-3 bg-accent text-accent-foreground font-bold px-2.5 py-0.5 text-xs rounded-full shadow-xs uppercase tracking-wider'>
                    Especialidad
                  </span>
                )}
              </div>

              {/* Card Body */}
              <CardContent className='p-5 flex flex-col flex-1 justify-between gap-4'>
                <div className='space-y-2'>
                  <div className='flex items-start justify-between gap-2'>
                    <CardTitle className='text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200'>
                      {dish.name}
                    </CardTitle>
                  </div>
                  <p className='text-xs font-semibold tracking-wider text-primary/80 uppercase'>
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
      )}
    </div>
  )
}

export default MenuCategories
