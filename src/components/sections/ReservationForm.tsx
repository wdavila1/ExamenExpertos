'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2, Calendar, Users, Clock, Phone, Mail, User } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

const ReservationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value: rawValue } = e.target
    const value = name === 'phone' ? rawValue.replace(/[^0-9+\-\s()]/g, '') : rawValue

    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato de correo no es válido'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio'
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'El formato de teléfono no es válido'
    }
    if (!formData.date) newErrors.date = 'La fecha es obligatoria'
    if (!formData.time) newErrors.time = 'La hora es obligatoria'
    if (!formData.guests) newErrors.guests = 'El número de personas es obligatorio'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate API request to submit reservation
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  if (isSubmitted) {
    return (
      <div className='bg-card border-border/80 animate-fade-in mx-auto flex max-w-xl flex-col items-center justify-center space-y-6 rounded-2xl border p-8 text-center shadow-md'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-500'>
          <CheckCircle2 className='h-10 w-10' />
        </div>
        <div className='space-y-2'>
          <h3 className='text-foreground font-serif text-2xl font-bold'>¡Reservación Exitosa!</h3>
          <p className='text-muted-foreground'>
            Gracias por elegir <span className='text-primary font-semibold'>Café Premium Copán</span>. Hemos recibido tu
            solicitud de reservación.
          </p>
        </div>

        <div className='bg-muted/60 border-border/40 w-full space-y-3 rounded-xl border p-5 text-left text-sm'>
          <div className='border-border/60 flex justify-between border-b pb-2'>
            <span className='text-muted-foreground font-medium'>Nombre:</span>
            <span className='text-foreground font-semibold'>{formData.name}</span>
          </div>
          <div className='border-border/60 flex justify-between border-b pb-2'>
            <span className='text-muted-foreground font-medium'>Fecha y Hora:</span>
            <span className='text-foreground font-semibold'>
              {formData.date} a las {formData.time}
            </span>
          </div>
          <div className='border-border/60 flex justify-between border-b pb-2'>
            <span className='text-muted-foreground font-medium'>Personas:</span>
            <span className='text-foreground font-semibold'>{formData.guests} personas</span>
          </div>
          <div className='flex justify-between pb-1'>
            <span className='text-muted-foreground font-medium'>Confirmación enviada a:</span>
            <span className='text-foreground font-semibold'>{formData.email}</span>
          </div>
        </div>

        <p className='text-muted-foreground text-xs'>
          *Te enviaremos un correo electrónico de confirmación o te contactaremos al número {formData.phone} en los
          próximos 15 minutos para formalizar tu reservación.
        </p>

        <Button onClick={() => setIsSubmitted(false)} variant='outline' className='rounded-full'>
          Hacer otra reservación
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-card border-border/80 mx-auto max-w-2xl space-y-6 rounded-2xl border p-6 shadow-sm sm:p-8'
    >
      <div className='space-y-2 text-center lg:text-left'>
        <h3 className='text-foreground font-serif text-2xl font-bold'>Reserva tu Mesa</h3>
        <p className='text-muted-foreground text-sm'>
          Completa el siguiente formulario para asegurar tu lugar. Reservas válidas con al menos 2 horas de
          anticipación.
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        {/* Nombre */}
        <div className='space-y-2'>
          <Label htmlFor='name' className='flex items-center gap-1.5'>
            <User className='text-muted-foreground h-4 w-4' /> Nombre Completo
          </Label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Ej. Juan Pérez'
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'border-destructive focus-visible:ring-destructive/50' : ''}
          />
          {errors.name && <p className='text-destructive text-xs font-medium'>{errors.name}</p>}
        </div>

        {/* Correo */}
        <div className='space-y-2'>
          <Label htmlFor='email' className='flex items-center gap-1.5'>
            <Mail className='text-muted-foreground h-4 w-4' /> Correo Electrónico
          </Label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='juan.perez@example.com'
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'border-destructive focus-visible:ring-destructive/50' : ''}
          />
          {errors.email && <p className='text-destructive text-xs font-medium'>{errors.email}</p>}
        </div>

        {/* Teléfono */}
        <div className='space-y-2'>
          <Label htmlFor='phone' className='flex items-center gap-1.5'>
            <Phone className='text-muted-foreground h-4 w-4' /> Teléfono / Celular
          </Label>
          <Input
            id='phone'
            name='phone'
            type='tel'
            inputMode='tel'
            pattern='[0-9+\-\s()]*'
            placeholder='Ej. +504 9999-8888'
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'border-destructive focus-visible:ring-destructive/50' : ''}
          />
          {errors.phone && <p className='text-destructive text-xs font-medium'>{errors.phone}</p>}
        </div>

        {/* Cantidad de personas */}
        <div className='space-y-2'>
          <Label htmlFor='guests' className='flex items-center gap-1.5'>
            <Users className='text-muted-foreground h-4 w-4' /> Cantidad de Personas
          </Label>
          <select
            id='guests'
            name='guests'
            value={formData.guests}
            onChange={handleChange}
            className='border-input focus-visible:ring-ring/50 focus-visible:border-ring dark:bg-input/30 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none focus-visible:ring-3 md:text-sm'
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
              <option key={n} value={n.toString()} className='bg-background text-foreground'>
                {n} {n === 1 ? 'Persona' : 'Personas'}
              </option>
            ))}
            <option value='11+' className='bg-background text-foreground'>
              Más de 10 personas
            </option>
          </select>
        </div>

        {/* Fecha */}
        <div className='space-y-2'>
          <Label htmlFor='date' className='flex items-center gap-1.5'>
            <Calendar className='text-muted-foreground h-4 w-4' /> Fecha
          </Label>
          <Input
            id='date'
            name='date'
            type='date'
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? 'border-destructive focus-visible:ring-destructive/50' : ''}
          />
          {errors.date && <p className='text-destructive text-xs font-medium'>{errors.date}</p>}
        </div>

        {/* Hora */}
        <div className='space-y-2'>
          <Label htmlFor='time' className='flex items-center gap-1.5'>
            <Clock className='text-muted-foreground h-4 w-4' /> Hora
          </Label>
          <select
            id='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
            className='border-input focus-visible:ring-ring/50 focus-visible:border-ring dark:bg-input/30 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none focus-visible:ring-3 md:text-sm'
          >
            <option value=''>Selecciona la hora</option>
            {[
              '09:00 AM',
              '09:30 AM',
              '10:00 AM',
              '10:30 AM',
              '11:00 AM',
              '11:30 AM',
              '12:00 PM',
              '12:30 PM',
              '1:00 PM',
              '1:30 PM',
              '2:00 PM',
              '2:30 PM',
              '3:00 PM',
              '3:30 PM',
              '4:00 PM',
              '4:30 PM',
              '5:00 PM',
              '5:30 PM',
              '6:00 PM',
              '6:30 PM',
              '7:00 PM',
              '7:30 PM',
              '8:00 PM',
              '8:30 PM',
              '9:00 PM'
            ].map(t => (
              <option key={t} value={t} className='bg-background text-foreground'>
                {t}
              </option>
            ))}
          </select>
          {errors.time && <p className='text-destructive text-xs font-medium'>{errors.time}</p>}
        </div>
      </div>

      {/* Notas / Comentarios */}
      <div className='space-y-2'>
        <Label htmlFor='notes'>Notas especiales / Alergias / Celebración</Label>
        <Textarea
          id='notes'
          name='notes'
          placeholder='Ej. Estaremos celebrando un cumpleaños, o favor tener lista una trona para bebé.'
          value={formData.notes}
          onChange={handleChange}
          rows={5}
          className='resize-none'
        />
      </div>

      <Button
        type='submit'
        className='relative h-11 w-full overflow-hidden rounded-full text-base font-semibold shadow-sm transition-all duration-300'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className='flex items-center justify-center gap-2'>
            <svg
              className='h-5 w-5 animate-spin text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            Procesando...
          </span>
        ) : (
          'Confirmar Solicitud de Reserva'
        )}
      </Button>
    </form>
  )
}

export default ReservationForm
