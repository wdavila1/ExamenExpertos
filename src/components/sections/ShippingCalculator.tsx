'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const PRICE_PER_POUND = 150
const DISCOUNT_THRESHOLD = 10
const DISCOUNT_RATE = 0.1
const MAX_POUNDS = 500
const MAX_DECIMALS = 2

const SHIPPING_OPTIONS = [
  { value: 'local', label: 'Santa Rosa de Copán - Recogida Local', cost: 0 },
  { value: 'express', label: 'Tegucigalpa / SPS - Envío Express', cost: 120 },
  { value: 'standard', label: 'Otras Ciudades - Envío Estándar', cost: 80 }
] as const

type ShippingKey = (typeof SHIPPING_OPTIONS)[number]['value']

// --- Validation ---
const validatePounds = (raw: string): string | null => {
  if (!raw.trim()) return 'Ingresa la cantidad de libras.'

  const num = parseFloat(raw)

  if (isNaN(num)) return 'Ingresa un número válido.'
  if (num <= 0) return 'La cantidad debe ser mayor a 0.'
  if (!isFinite(num)) return 'El valor ingresado no es válido.'

  // Limit decimal places
  const decimalPart = raw.split('.')[1]
  if (decimalPart && decimalPart.length > MAX_DECIMALS) return `Máximo ${MAX_DECIMALS} decimales permitidos.`

  if (num > MAX_POUNDS) return `La cantidad máxima por pedido es ${MAX_POUNDS} libras.`
  if (num < 0.1) return 'La cantidad mínima es 0.1 libras.'

  return null
}

const ShippingCalculator = () => {
  const [pounds, setPounds] = useState('')
  const [shipping, setShipping] = useState<ShippingKey>('local')
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)
  const [result, setResult] = useState<number | null>(null)
  const [breakdown, setBreakdown] = useState<{
    subtotal: number
    discount: number
    shippingCost: number
    total: number
    hasDiscount: boolean
    qty: number
  } | null>(null)

  const handlePoundsChange = (value: string) => {
    setPounds(value)
    setResult(null)
    setBreakdown(null)
    if (touched) setError(validatePounds(value))
  }

  const handleCalculate = () => {
    setTouched(true)
    const validationError = validatePounds(pounds)
    if (validationError) {
      setError(validationError)
      setResult(null)
      setBreakdown(null)
      return
    }

    setError(null)
    const qty = parseFloat(pounds)
    const subtotal = qty * PRICE_PER_POUND
    const hasDiscount = qty >= DISCOUNT_THRESHOLD
    const discount = hasDiscount ? subtotal * DISCOUNT_RATE : 0
    const subtotalAfterDiscount = subtotal - discount
    const shippingCost = SHIPPING_OPTIONS.find(o => o.value === shipping)?.cost ?? 0
    const total = subtotalAfterDiscount + shippingCost

    setResult(total)
    setBreakdown({ subtotal, discount, shippingCost, total, hasDiscount, qty })
  }

  const formatCurrency = (value: number) =>
    value.toLocaleString('es-HN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

  const isInvalid = touched && !!error

  return (
    <section id='calculadora' className='py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center space-y-4 text-center sm:mb-16'>
          <Badge
            variant='outline'
            className='border-primary/30 text-primary bg-primary/5 rounded-full px-3 py-1 text-sm font-medium'
          >
            Cotización Rápida
          </Badge>
          <h2 className='text-foreground font-serif text-3xl font-bold tracking-tight md:text-4xl'>
            Calculadora de Pedidos y Envíos
          </h2>
          <p className='text-muted-foreground text-lg text-balance md:text-xl'>
            Calcula el costo total de tu pedido incluyendo envío y descuentos por volumen.
          </p>
        </div>

        <div className='mx-auto max-w-2xl'>
          <div className='border-border/80 bg-card space-y-8 rounded-2xl border p-6 shadow-sm sm:p-10'>
            {/* Quantity input */}
            <div className='space-y-2'>
              <Label htmlFor='pounds' className='flex items-center gap-2 text-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-muted-foreground h-4 w-4'
                >
                  <path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' />
                  <path d='M3 6h18' />
                  <path d='M16 10a4 4 0 0 1-8 0' />
                </svg>
                Cantidad de Libras a Comprar
              </Label>
              <Input
                id='pounds'
                type='number'
                min='0.1'
                max={MAX_POUNDS}
                step='0.1'
                placeholder='Ej. 5'
                value={pounds}
                aria-invalid={isInvalid}
                onBlur={() => {
                  setTouched(true)
                  setError(validatePounds(pounds))
                }}
                onChange={e => handlePoundsChange(e.target.value)}
                className={`h-11 text-base ${isInvalid ? 'border-destructive focus-visible:ring-destructive/50' : ''}`}
              />

              {/* Inline error */}
              {isInvalid && (
                <p className='text-destructive flex items-center gap-1.5 text-xs font-medium'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-3 w-3 shrink-0'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <line x1='12' x2='12' y1='8' y2='12' />
                    <line x1='12' x2='12.01' y1='16' y2='16' />
                  </svg>
                  {error}
                </p>
              )}

              {/* Hint text — only when no error */}
              {!isInvalid && (
                <p className='text-muted-foreground text-xs'>
                  Precio por libra: <span className='text-foreground font-semibold'>L. {PRICE_PER_POUND}</span>
                  {' · '}
                  <span className='text-primary'>10+ libras = 10% de descuento</span>
                  {' · '}
                  Máx. {MAX_POUNDS} lb
                </p>
              )}
            </div>

            {/* Shipping select */}
            <div className='space-y-2'>
              <Label htmlFor='shipping' className='flex items-center gap-2 text-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-muted-foreground h-4 w-4'
                >
                  <path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' />
                  <path d='M15 18H9' />
                  <path d='M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' />
                  <circle cx='17' cy='18' r='2' />
                  <circle cx='7' cy='18' r='2' />
                </svg>
                Ciudad de Destino
              </Label>
              <select
                id='shipping'
                value={shipping}
                onChange={e => {
                  setShipping(e.target.value as ShippingKey)
                  setResult(null)
                  setBreakdown(null)
                }}
                className='border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 h-11 w-full rounded-md border px-3 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]'
              >
                {SHIPPING_OPTIONS.map(opt => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Calculate button */}
            <Button
              onClick={handleCalculate}
              size='lg'
              className='w-full rounded-full text-base font-semibold shadow-sm'
            >
              Calcular Total
            </Button>

            {/* Result */}
            {result !== null && breakdown && (
              <div className='animate-in fade-in slide-in-from-bottom-2 border-border/60 bg-muted/50 space-y-4 rounded-xl border p-6 duration-300'>
                {/* Breakdown */}
                <div className='text-muted-foreground space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>
                      Subtotal ({breakdown.qty} lb × L. {PRICE_PER_POUND})
                    </span>
                    <span className='text-foreground font-medium'>L. {formatCurrency(breakdown.subtotal)}</span>
                  </div>

                  {breakdown.hasDiscount && (
                    <div className='text-primary flex justify-between'>
                      <span>Descuento 10% (≥10 lb)</span>
                      <span className='font-medium'>− L. {formatCurrency(breakdown.discount)}</span>
                    </div>
                  )}

                  <div className='flex justify-between'>
                    <span>Envío</span>
                    <span className='text-foreground font-medium'>
                      {breakdown.shippingCost === 0 ? 'Gratis' : `L. ${formatCurrency(breakdown.shippingCost)}`}
                    </span>
                  </div>

                  <div className='bg-border my-2 h-px' />
                </div>

                {/* Total */}
                <p className='text-foreground text-center font-serif text-lg font-bold sm:text-xl'>
                  El total estimado de su pedido es L. {formatCurrency(result)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShippingCalculator
