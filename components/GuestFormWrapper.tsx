'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function GuestFormWrapper() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://formspree.io/f/mvznkodq', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); (e.target as HTMLFormElement).reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'success') {
    return (
      <div className="card p-8 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A]">¡Aplicación Enviada!</h3>
        <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
          Recibimos tu solicitud. Te contactaremos en las próximas 48 horas.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-outline !text-base !py-3 !px-6">
          Enviar otra aplicación
        </button>
      </div>
    )
  }

  return (
    <form className="card p-8 space-y-4" onSubmit={handleSubmit}>
      <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-2">Aplicar para Ser Invitado</h3>
      <p className="text-base text-gray-400 mb-4">Respondemos en 48 horas. Sin costo.</p>
      {[
        ['Nombre completo', 'nombre', 'text', 'Tu nombre', true],
        ['Negocio / Marca', 'negocio', 'text', 'Nombre de tu empresa', true],
        ['Email', 'email', 'email', 'tu@email.com', true],
        ['Teléfono', 'telefono', 'tel', '(904) 000-0000', false],
        ['Instagram / LinkedIn', 'redes', 'text', '@tuhandle', false],
        ['Sitio Web', 'web', 'url', 'https://tuempresa.com', false],
      ].map(([label, name, type, placeholder, required]) => (
        <div key={name as string}>
          <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">
            {label as string}{required && <span className="text-[#C6002B] ml-1">*</span>}
          </label>
          <input type={type as string} name={name as string} placeholder={placeholder as string}
            required={required as boolean}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B]" />
        </div>
      ))}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">
          ¿Qué hacés? <span className="text-[#C6002B]">*</span>
        </label>
        <textarea name="descripcion" rows={3} required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] resize-none" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">
          Tema principal <span className="text-[#C6002B]">*</span>
        </label>
        <input type="text" name="tema" required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B]" />
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" name="consentimiento" required className="mt-1 w-4 h-4 accent-[#C6002B]" />
        <label htmlFor="consent" className="text-sm text-gray-500 leading-relaxed">
          Consiento ser grabado y publicado en las plataformas de Jax Unico.
        </label>
      </div>
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-semibold">
          ⚠️ Error al enviar. Por favor intenta de nuevo.
        </div>
      )}
      <button type="submit" disabled={status === 'sending'}
        className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-60">
        {status === 'sending' ? 'Enviando...' : <>Enviar Aplicación <ArrowRight size={20}/></>}
      </button>
      <p className="text-center text-sm text-gray-400">Sin costo. Respondemos en 48 horas.</p>
    </form>
  )
}
