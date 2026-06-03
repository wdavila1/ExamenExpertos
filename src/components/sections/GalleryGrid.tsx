'use client'

import { useState } from 'react'
import { galleryImages, galleryCategories } from '@/data/gallery'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X, ZoomIn } from 'lucide-react'

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageAlt, setImageAlt] = useState<string>('')

  // Filter images based on selected category
  const filteredImages = activeCategory === 'todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const handleOpenLightbox = (src: string, alt: string) => {
    setSelectedImage(src)
    setImageAlt(alt)
  }

  const handleCloseLightbox = () => {
    setSelectedImage(null)
    setImageAlt('')
  }

  return (
    <div className='space-y-10'>
      {/* Categories Buttons */}
      <div className='flex flex-wrap justify-center gap-2 md:gap-3 pb-4 border-b border-border/60'>
        {galleryCategories.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={isActive ? 'default' : 'outline'}
              className={cn(
                'rounded-full px-5 py-1.5 h-auto text-sm transition-all duration-300 font-medium',
                isActive 
                  ? 'shadow-md shadow-primary/20 scale-105' 
                  : 'hover:bg-primary/5 hover:text-primary hover:border-primary/40'
              )}
            >
              {category.label}
            </Button>
          )
        })}
      </div>

      {/* Grid of Images */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in'>
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            onClick={() => handleOpenLightbox(image.src, image.alt)}
            className='relative group overflow-hidden rounded-2xl border border-border/60 bg-muted cursor-pointer aspect-square shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300'
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500'
              loading='lazy'
            />
            {/* Hover overlay */}
            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300 text-white z-10'>
              <div className='bg-primary/20 p-3 rounded-full mb-3 backdrop-blur-xs border border-primary/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                <ZoomIn className='h-6 w-6 text-primary-foreground' />
              </div>
              <p className='font-medium text-sm text-balance max-w-[90%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>
                {image.alt}
              </p>
              <span className='absolute bottom-3 text-xs tracking-widest text-primary font-bold uppercase py-0.5 px-2 bg-primary-foreground/90 rounded-full scale-90'>
                {image.category === 'comida' ? 'Gastronomía' : image.category === 'local' ? 'El Local' : 'Eventos'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          onClick={handleCloseLightbox}
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in'
        >
          {/* Close button */}
          <button 
            onClick={handleCloseLightbox}
            className='absolute top-6 right-6 p-2 rounded-full bg-zinc-800/80 hover:bg-primary text-white border border-zinc-700 hover:border-primary transition-all duration-200 cursor-pointer z-50'
            aria-label='Cerrar imagen'
          >
            <X className='h-6 w-6' />
          </button>
          
          <div 
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            className='relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col justify-center items-center cursor-default'
          >
            <img 
              src={selectedImage} 
              alt={imageAlt} 
              className='max-w-full max-h-[75vh] object-contain select-none'
            />
            {/* Caption */}
            <div className='w-full bg-zinc-950 p-4 border-t border-zinc-900 text-center'>
              <p className='text-zinc-200 text-base font-medium'>{imageAlt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryGrid
