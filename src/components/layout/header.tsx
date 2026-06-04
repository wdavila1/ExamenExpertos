'use client'

import { useEffect, useState } from 'react'

import { MenuIcon, Phone, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { cn } from '@/lib/utils'

import SaboresLogo from '@/assets/svg/sabores-logo'

// Custom hook to detect the current active path, compatible with Astro view transitions
const useActivePath = () => {
  const [activePath, setActivePath] = useState<string>('')

  useEffect(() => {
    setActivePath(window.location.pathname)

    const handlePageLoad = () => {
      setActivePath(window.location.pathname)
    }

    document.addEventListener('astro:page-load', handlePageLoad)
    return () => {
      document.removeEventListener('astro:page-load', handlePageLoad)
    }
  }, [])

  return activePath
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const activePath = useActivePath()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'bg-background fixed top-0 z-50 w-full transition-all duration-300',
        {
          'shadow-md': isScrolled
        },
        className
      )}
    >
      {/* Top contact bar — hides on scroll */}
      <div
        className={cn(
          'bg-muted/80 border-border/40 hidden w-full border-b transition-all duration-300 sm:block',
          isScrolled ? 'h-0 overflow-hidden opacity-0' : 'opacity-100'
        )}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-center gap-5 px-4 py-1 sm:px-6 lg:px-8'>
          <span className='text-muted-foreground flex items-center gap-1.5 text-[11px] font-medium'>
            <Phone className='text-foreground h-3 w-3' />
            <span className='text-foreground/80'>2662-1234</span>
          </span>
          <span className='bg-border h-3 w-px' />
          <span className='text-muted-foreground flex items-center gap-1.5 text-[11px] font-medium'>
            <Clock className='text-foreground h-3 w-3' />
            <span className='text-foreground/80'>Lun-Vie 8AM – 6PM</span>
          </span>
        </div>
      </div>

      <div className='border-border/60 mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 border-b px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='/' className='flex items-center gap-3'>
          <SaboresLogo />
          <span className='text-primary text-[20px] font-semibold tracking-tight'>Café Premium Copán</span>
        </a>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          activePath={activePath}
          className='**:data-[slot=navigation-menu-list]:gap-1 max-lg:hidden'
        />

        {/* Actions */}
        <div className='flex items-center'>
          <Button
            className='group relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 max-sm:hidden dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            asChild
          >
            <a href='https://wa.link/g0d6qw' className='flex items-center gap-2'>
              <svg viewBox='0 0 16 16' className='h-4 w-4 fill-current' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232' />
              </svg>
              <span>Cotizar pedido por WhatsApp</span>
            </a>
          </Button>

          {/* Mobile book table button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className='ml-4 rounded-full sm:hidden' asChild>
                  <a href='https://wa.link/g0d6qw'>Cotizar</a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Cotizar</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Mobile menu button */}
          <MenuDropdown
            align='end'
            navigationData={navigationData}
            activePath={activePath}
            trigger={
              <Button variant='outline' size='icon' className='ml-3 rounded-full lg:hidden'>
                <MenuIcon />
                <span className='sr-only'>Menú</span>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
