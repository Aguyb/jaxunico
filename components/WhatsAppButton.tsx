'use client'
import { useState } from 'react'
import { X, Send, ArrowRight } from 'lucide-react'
import { useLang } from '@/lib/lang'

const WHATSAPP_NUMBER = '19046180826' // Replace with your actual WhatsApp number

export default function WhatsAppButton() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<'menu' | 'form' | 'success'>('menu')
  const [form, setForm] = useState({ nombre: '', telefono: '', interes: '', mensaje: '' })
  const [sending, setSending] = useState(false)

  const quickOptions = [
    { label: t('Quiero producción de video', 'I want video production'), msg: t('Hola Jax Unico! Me interesa producción de video para mi negocio.', 'Hello Jax Unico! I\'m interested in video production for my business.') },
    { label: t('Quiero anunciarme', 'I want to advertise'), msg: t('Hola! Me interesa anunciarme en el podcast de Jax Unico.', 'Hello! I\'m interested in advertising on the Jax Unico podcast.') },
    { label: t('Quiero ser invitado al show', 'I want to be on the show'), msg: t('Hola Jax Unico! Me gustaría ser invitado en el show.', 'Hello Jax Unico! I would like to be a guest on the show.') },
    { label: t('Tengo otro proyecto', 'I have another project'), msg: '' },
  ]

  function openWhatsApp(msg: string) {
    const encoded = encodeURIComponent(msg || t('Hola Jax Unico! Me gustaría más información.', 'Hello Jax Unico! I would like more information.'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
    setOpen(false)
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, fuente: '💬 WhatsApp' }),
      })
      // Also open WhatsApp with their message
      const msg = `Hola Jax Unico! Soy ${form.nombre}. ${form.mensaje || `Me interesa: ${form.interes}`}`
      openWhatsApp(msg)
      setStep('success')
    } catch {
      openWhatsApp(`Hola Jax Unico! Soy ${form.nombre}. ${form.mensaje}`)
    }
    setSending(false)
  }

  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/20 z-40 sm:bg-transparent" onClick={() => setOpen(false)}/>
      )}

      {/* Chat popup */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] max-w-sm">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-base leading-tight">Jax Unico</div>
                  <div className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"/>
                    {t('En línea', 'Online')}
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
                <X size={20}/>
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {step === 'menu' && (
                <>
                  <div className="bg-gray-50 rounded-2xl px-4 py-3 mb-4 text-sm text-gray-600 leading-relaxed">
                    {t(
                      '¡Hola! 👋 Somos Jax Unico, la plataforma latina de Jacksonville. ¿En qué podemos ayudarte hoy?',
                      'Hello! 👋 We are Jax Unico, Jacksonville\'s Latino platform. How can we help you today?'
                    )}
                  </div>
                  <div className="space-y-2.5">
                    {quickOptions.map((opt, i) => (
                      <button key={i}
                        onClick={() => opt.msg ? openWhatsApp(opt.msg) : setStep('form')}
                        className="w-full text-left border-2 border-gray-100 hover:border-[#25D366] hover:bg-green-50 rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#25D366] transition-all flex items-center justify-between gap-2">
                        {opt.label}
                        <ArrowRight size={14} className="shrink-0"/>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 'form' && (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <p className="text-sm font-semibold text-gray-600 mb-4">
                    {t('Cuéntanos un poco más y te contactamos por WhatsApp:', 'Tell us a bit more and we\'ll contact you on WhatsApp:')}
                  </p>
                  <input required type="text" placeholder={t('Tu nombre *', 'Your name *')}
                    value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#25D366]"/>
                  <input required type="tel" placeholder={t('Tu WhatsApp *', 'Your WhatsApp *')}
                    value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#25D366]"/>
                  <select value={form.interes} onChange={e => setForm(f => ({ ...f, interes: e.target.value }))}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#25D366] text-gray-600">
                    <option value="">{t('¿Qué necesitas?', 'What do you need?')}</option>
                    {['Video Production', 'Podcast', 'Redes Sociales', 'Comercial', 'Sponsor / Publicidad', 'Evento', 'Coaching', 'Otro'].map(o => <option key={o}>{o}</option>)}
                  </select>
                  <textarea rows={2} placeholder={t('Mensaje (opcional)', 'Message (optional)')}
                    value={form.mensaje} onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#25D366] resize-none"/>
                  <button type="submit" disabled={sending}
                    className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#1da851] disabled:opacity-60 transition-colors">
                    {sending
                      ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"/>Enviando...</>
                      : <><Send size={16}/>{t('Enviar y abrir WhatsApp', 'Send and open WhatsApp')}</>
                    }
                  </button>
                  <button type="button" onClick={() => setStep('menu')} className="w-full text-gray-400 text-xs hover:text-gray-600 py-1">
                    ← {t('Volver', 'Back')}
                  </button>
                </form>
              )}

              {step === 'success' && (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{t('¡WhatsApp abierto!', 'WhatsApp opened!')}</h3>
                  <p className="text-sm text-gray-500">{t('Te contactaremos muy pronto.', 'We\'ll contact you very soon.')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => { setOpen(!open); setStep('menu') }}
        className="fixed bottom-5 right-4 sm:right-6 z-50 flex items-center gap-3 group"
        aria-label="WhatsApp"
      >
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"/>

        {/* Label - only on desktop */}
        {!open && (
          <span className="hidden sm:block bg-white text-gray-700 font-bold text-sm px-4 py-2.5 rounded-full shadow-lg border border-gray-100 group-hover:shadow-xl transition-all">
            {t('¿Hablamos?', 'Let\'s talk?')}
          </span>
        )}

        {/* Button */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:bg-[#1da851] transition-colors relative z-10">
          {open ? (
            <X size={22} className="text-white"/>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </div>
      </button>
    </>
  )
}
