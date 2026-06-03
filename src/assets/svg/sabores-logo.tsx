import type { ImgHTMLAttributes } from 'react'

const SaboresLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src='/images/SabValle.png'
      alt='Sabores del Valle Logo'
      width={32}
      height={32}
      {...props}
    />
  )
}

export default SaboresLogo
