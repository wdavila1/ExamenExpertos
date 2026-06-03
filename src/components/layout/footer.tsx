import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import SaboresLogo from '@/assets/svg/sabores-logo'
import { footerData } from '@/assets/data/footer'
import { restaurantInfo } from '@/data/restaurant'

const Footer = () => {
  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='/'>
          <div className='flex items-center gap-3'>
            <SaboresLogo className='gap-3' />
            <span className='text-primary text-[20px] font-semibold tracking-tight'>Sabores del Valle</span>
          </div>
        </a>

        <div className='flex flex-wrap justify-center items-center gap-5 whitespace-nowrap'>
          {footerData.map(item => (
            <a
              key={item.title}
              href={item.href}
              className='text-foreground hover:text-primary text-base! hover:bg-transparent font-normal transition-colors duration-200'
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <a href={restaurantInfo.socialMedia.facebook} target='_blank' rel='noopener noreferrer' className='hover:text-primary transition-colors duration-200'>
            <FacebookIcon className='size-5' />
            <span className='sr-only'>Facebook</span>
          </a>
          <a href={restaurantInfo.socialMedia.instagram} target='_blank' rel='noopener noreferrer' className='hover:text-primary transition-colors duration-200'>
            <InstagramIcon className='size-5' />
            <span className='sr-only'>Instagram</span>
          </a>
          <a href={restaurantInfo.socialMedia.twitter} target='_blank' rel='noopener noreferrer' className='hover:text-primary transition-colors duration-200'>
            <TwitterIcon className='size-5' />
            <span className='sr-only'>Twitter</span>
          </a>
          <a href={restaurantInfo.socialMedia.youtube} target='_blank' rel='noopener noreferrer' className='hover:text-primary transition-colors duration-200'>
            <YoutubeIcon className='size-5' />
            <span className='sr-only'>YouTube</span>
          </a>
        </div>
      </div>

      <div className='mx-auto max-w-7xl px-4 pb-6 text-center text-sm text-muted-foreground'>
        <p>{restaurantInfo.address} • Tel: {restaurantInfo.phone} • WhatsApp: {restaurantInfo.whatsapp}</p>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-muted-foreground text-center text-balance'>
          {`© ${new Date().getFullYear()}`}{' '}
          <a href='/' className='hover:underline font-medium'>
            Sabores del Valle.
          </a>
          {' '}Todos los derechos reservados. Hecho por Wilson Avila Flores.
        </p>
      </div>
    </footer>
  )
}

export default Footer

