'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  endpoint: string
  fields: { label: string; name: string; type: string; placeholder: string; required?: boolean }[]
  selectField?: { label: string; name: string; options: string[] }
  textareaField?: { label: string; name: string; placeholder: string }
  submitLabel: string
  successTitle: string
  successMessage: string
  dark?: boolean
}

export default function ContactForm({
  endpoint, fields, selectField, textareaField,
  submitLabel, successTitle, successMessage, dark = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); (e.target as HTMLFormElement).reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputClass = dark
    ? 'w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-[#C6002B]'
    : 'w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B]'
  const labelClass = 'block text-sm font-bold mb-2 uppercase tracking-widest ' + (dark ? 'text-gray-400' : 'text-gray-500')
  const selectClass = dark
    ? 'w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-lg focus:outline-none focus:border-[#C6002B]'
    : 'w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium text-gray-600 focus:outline-none focus:border-[#C6002B]'

  if (status === 'success') {
    return (
      <div className={`rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[300px] ${dark ? 'bg-white/10 border border-white/20' : 'bg-gray-50 border-2 border-gray-100'}`}>
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className={`font-['Inter'] font-black text-2xl ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>{successTitle}</h3>
        <p className={`text-lg max-w-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-500'}`}>{successMessage}</p>
        <button onClick={() => setStatus('idle')} className="btn-outline !text-base !py-3 !px-6">Enviar otra consulta</button>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {fields.map(f => (
        <div key={f.name}>
          <label className={labelClass}>{f.label}{f.required && <span className="text-[#C6002B] ml-1">*</span>}</label>
          <input type={f.type} name={f.name} placeholder={f.placeholder} required={f.required} className={inputClass} />
        </div>
      ))}
      {selectField && (
        <div>
          <label className={labelClass}>{selectField.label}</label>
          <select name={selectField.name} className={selectClass}>
            <option value="" className="bg-[#1A1A1A]">Selecciona una opción</option>
            {selectField.options.map(o => <option key={o} value={o} className={dark ? 'bg-[#1A1A1A]' : ''}>{o}</option>)}
          </select>
        </div>
      )}
      {textareaField && (
        <div>
          <label className={labelClass}>{textareaField.label}</label>
          <textarea name={textareaField.name} rows={3} placeholder={textareaField.placeholder}
            className={inputClass + ' resize-none'} />
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-base text-red-600 font-semibold">
          ⚠️ Error al enviar. Por favor intenta de nuevo.
        </div>
      )}
      <button type="submit" disabled={status === 'sending'}
        className="btn-primary w-full justify-center text-xl py-5 disabled:opacity-60">
        {status === 'sending' ? 'Enviando...' : <>{submitLabel} <ArrowRight size={22}/></>}
      </button>
    </form>
  )
}
