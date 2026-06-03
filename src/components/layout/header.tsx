'use client'

import { useEffect, useState } from 'react'

import ThemeToggle from '@/components/layout/theme-toggle'
import { MenuIcon } from 'lucide-react'

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
        'fixed top-0 z-50 h-16 w-full border-b transition-all duration-300',
        {
          'bg-background shadow-md': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
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
          <ThemeToggle />
          <Button
            className='group relative ml-4 w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 max-sm:hidden dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            asChild
          >
            <a href='/#'>Cotizar pedido por Whatsapp</a>
          </Button>

          {/* Mobile book table button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className='ml-4 rounded-full sm:hidden' asChild>
                  <a href='/suscripcion'>Suscribirse</a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Suscribirse</TooltipContent>
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
