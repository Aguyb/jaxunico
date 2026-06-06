'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const CONVERTKIT_FORM_ID = '9531982'
const CONVERTKIT_API_KEY = 'wmfki98BgsXYjbVtS6FjLA'

interface NewsletterFormProps {
  variant?: 'light' | 'dark' | 'sidebar'
}

export default function NewsletterForm({ variant = 'dark' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email }),
        }
      )
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // ── SIDEBAR variant (compact, used in blog sidebar) ──
  if (variant === 'sidebar') {
    return (
      <div className="card p-6 bg-[#C6002B] border-none">
        <div className="font-['Inter'] font-black text-3xl text-white mb-2">El Unico</div>
        <p className="text-white/80 text-base mb-4 leading-relaxed">
          El newsletter latino de Jacksonville. Gratis, cada semana.
        </p>
        {status === 'success' ? (
          <div className="bg-white/20 rounded-xl p-4 text-center">
            <p className="text-white font-bold text-base">✅ ¡Suscrito!</p>
            <p className="text-white/80 text-sm mt-1">Bienvenido a El Unico.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full px-4 py-3 rounded-xl text-base font-medium focus:outline-none text-[#1A1A1A]"
            />
            {status === 'error' && (
              <p className="text-white/80 text-sm">⚠️ Error. Intenta de nuevo.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-[#1A1A1A] text-white font-bold w-full py-3 rounded-xl text-base hover:bg-black transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Enviando...' : 'Suscribirme'}
            </button>
          </form>
        )}
      </div>
    )
  }

  // ── LIGHT variant (white bg, used in light sections) ──
  if (variant === 'light') {
    return (
      <form className="flex gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
        {status === 'success' ? (
          <div className="w-full bg-white/20 border border-[#C6002B]/30 rounded-2xl px-6 py-4 text-center">
            <p className="text-[#C6002B] font-bold text-lg">✅ ¡Suscrito! Bienvenido a El Unico.</p>
          </div>
        ) : (
          <>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-5 py-4 rounded-2xl font-semibold text-lg text-[#1A1A1A] placeholder-gray-400 border-2 border-gray-200 focus:outline-none focus:border-[#C6002B]"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary !text-base !px-6 disabled:opacity-60"
            >
              {status === 'sending' ? '...' : <><ArrowRight size={18} /></>}
            </button>
          </>
        )}
      </form>
    )
  }

  // ── DARK variant (default — red bg section) ──
  return (
    <form className="flex gap-3 max-w-lg mx-auto" onSubmit={handleSubmit}>
      {status === 'success' ? (
        <div className="w-full bg-white/20 rounded-2xl px-6 py-5 text-center">
          <p className="text-white font-bold text-xl">✅ ¡Suscrito! Bienvenido a El Unico.</p>
          <p className="text-white/70 text-base mt-1">Revisa tu email para confirmar.</p>
        </div>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="flex-1 px-6 py-5 rounded-2xl font-semibold text-lg text-[#1A1A1A] placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-[#1A1A1A] text-white font-bold px-8 py-5 rounded-2xl hover:bg-black text-lg transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {status === 'sending' ? 'Enviando...' : 'Suscribirme'}
          </button>
        </>
      )}
      {status === 'error' && (
        <p className="text-white/80 text-sm absolute mt-16">⚠️ Error al suscribir. Intenta de nuevo.</p>
      )}
    </form>
  )
}
