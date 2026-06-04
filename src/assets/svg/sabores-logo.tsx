import type { ImgHTMLAttributes } from 'react'

const SaboresLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src='/images/logo2.png' alt='Café Premium Copán Logo' width={32} height={32} {...props} />
}

export default SaboresLogo
