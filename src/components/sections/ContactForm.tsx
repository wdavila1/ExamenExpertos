'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2, User, Mail, FileText } from 'lucide-react'

type ContactData = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<ContactData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<ContactData> = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato de correo no es válido'
    }
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es obligatorio'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate API request to submit message
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className='flex flex-col items-center justify-center text-center p-8 bg-card border border-border/80 rounded-2xl shadow-md space-y-6 animate-fade-in'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-500'>
          <CheckCircle2 className='h-10 w-10' />
        </div>
        <div className='space-y-2'>
          <h3 className='text-2xl font-bold text-foreground font-serif'>¡Mensaje Enviado!</h3>
          <p className='text-muted-foreground'>
            Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nuestro equipo te responderá en la brevedad posible a <span className='font-semibold text-primary'>{formData.email}</span>.
          </p>
        </div>

        <Button onClick={() => setIsSubmitted(false)} variant='outline' className='rounded-full'>
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='bg-card border border-border/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6'>
      <div className='space-y-2'>
        <h3 className='text-2xl font-bold font-serif text-foreground'>Envíanos un Mensaje</h3>
        <p className='text-muted-foreground text-sm'>
          ¿Tienes sugerencias, preguntas o deseas planear un evento privado en nuestro local? Escríbenos y nos pondremos en contacto contigo.
        </p>
      </div>

      <div className='space-y-4'>
        {/* Nombre */}
        <div className='space-y-2'>
          <Label htmlFor='name' className='flex items-center gap-1.5'>
            <User className='h-4 w-4 text-muted-foreground' /> Nombre Completo
          </Label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Ej. María López'
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'border-destructive focus-visible:ring-destructive/50' : ''}
          />
          {errors.name && <p className='text-xs text-destructive font-medium'>{errors.name}</p>}
        </div>

        {/* Correo */}
        <div className='space-y-2'>
          <Label htmlFor='email' className='flex items-center gap-1.5'>
            <Mail className='h-4 w-4 text-muted-foreground' /> Correo Electrónico
          </Label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='maria.lopez@example.com'
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'border-destructive focus-visible:ring-destructive/50' : ''}
          />
          {errors.email && <p className='text-xs text-destructive font-medium'>{errors.email}</p>}
        </div>

        {/* Asunto */}
        <div className='space-y-2'>
          <Label htmlFor='subject' className='flex items-center gap-1.5'>
            <FileText className='h-4 w-4 text-muted-foreground' /> Asunto
          </Label>
          <Input
            id='subject'
            name='subject'
            type='text'
            placeholder='Ej. Consulta sobre evento privado'
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? 'border-destructive focus-visible:ring-destructive/50' : ''}
          />
          {errors.subject && <p className='text-xs text-destructive font-medium'>{errors.subject}</p>}
        </div>

        {/* Mensaje */}
        <div className='space-y-2'>
          <Label htmlFor='message'>Mensaje</Label>
          <Textarea
            id='message'
            name='message'
            placeholder='Escribe tu mensaje detallado aquí...'
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive/50' : ''}`}
          />
          {errors.message && <p className='text-xs text-destructive font-medium'>{errors.message}</p>}
        </div>
      </div>

      <Button
        type='submit'
        className='w-full rounded-full h-11 font-semibold text-base shadow-sm relative overflow-hidden transition-all duration-300'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className='flex items-center gap-2 justify-center'>
            <svg className='animate-spin h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
            Enviando...
          </span>
        ) : (
          'Enviar Mensaje'
        )}
      </Button>
    </form>
  )
}

export default ContactForm
