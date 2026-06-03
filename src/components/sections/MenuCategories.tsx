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
  const filteredItems =
    activeCategory === 'todos' ? menuItems : menuItems.filter(item => item.category === activeCategory)

  console.log('Active Category:', activeCategory)
  console.log('Filtered Items:', filteredItems.length)

  return (
    <div className='w-full space-y-12'>
      {/* Categories Buttons/Tabs */}
      <div className='border-border/60 flex flex-wrap justify-center gap-3 border-b pb-4 md:gap-4'>
        {menuCategories.map(category => {
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

      {/* Grid of Menu Items */}
      {filteredItems.length === 0 ? (
        <div className='text-muted-foreground py-12 text-center'>No se encontraron platillos en esta categoría.</div>
      ) : (
        <div className='animate-fade-in grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredItems.map((dish: MenuItem, index: number) => (
            <Card
              key={index}
              className='hover:border-primary border-border/80 group bg-card flex h-full flex-col overflow-hidden rounded-2xl border shadow-xs transition-all duration-300 hover:shadow-md'
            >
              {/* Dish Image */}
              <div className='bg-muted relative flex aspect-video items-center justify-center overflow-hidden'>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  loading='lazy'
                />
                <span className='bg-primary text-primary-foreground absolute top-3 right-3 rounded-full px-3 py-1 text-sm font-semibold shadow-md'>
                  {dish.price}
                </span>
                {dish.featured && (
                  <span className='bg-accent text-accent-foreground absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase shadow-xs'>
                    Especialidad
                  </span>
                )}
              </div>

              {/* Card Body */}
              <CardContent className='flex flex-1 flex-col justify-between gap-4 p-5'>
                <div className='space-y-2'>
                  <div className='flex items-start justify-between gap-2'>
                    <CardTitle className='text-foreground group-hover:text-primary text-lg font-bold tracking-tight transition-colors duration-200'>
                      {dish.name}
                    </CardTitle>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    <p className='text-primary/80 bg-primary/10 rounded px-2 py-1 text-xs font-semibold tracking-wider uppercase'>
                      {dish.tueste}
                    </p>
                    <p className='text-primary/80 bg-primary/10 rounded px-2 py-1 text-xs font-semibold tracking-wider uppercase'>
                      {dish.proceso}
                    </p>
                  </div>
                  <Separator className='bg-border/60' />
                  <p className='text-muted-foreground line-clamp-3 text-sm leading-relaxed'>{dish.description}</p>
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
