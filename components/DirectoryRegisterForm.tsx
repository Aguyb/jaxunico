'use client'
import { useState, useRef } from 'react'
import { ArrowRight, Upload, CheckCircle, ImageIcon, X, Building2 } from 'lucide-react'
import { useLang } from '@/lib/lang'

interface PhotoFieldProps {
  label: string
  sublabel: string
  name: string
  preview: string
  onPreview: (url: string) => void
  onFile: (file: File | null) => void
  aspectRatio?: string
}

function PhotoField({ label, sublabel, name, preview, onPreview, onFile, aspectRatio = 'aspect-video' }: PhotoFieldProps) {
  const ref = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  function handleFile(file: File) {
    if (!file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = e => onPreview(e.target?.result as string)
    reader.readAsDataURL(file)
    onFile(file)
  }

  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
      <p className="text-xs text-gray-400 mb-2">{sublabel}</p>
      {preview ? (
        <div className={`relative rounded-2xl overflow-hidden ${aspectRatio} bg-gray-100 group`}>
          <img src={preview} alt="" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button type="button" onClick={() => ref.current?.click()}
              className="bg-white text-sm font-bold px-3 py-2 rounded-xl hover:bg-gray-100 flex items-center gap-1.5">
              <Upload size={14}/> Cambiar
            </button>
            <button type="button" onClick={() => { onPreview(''); onFile(null) }}
              className="bg-[#C6002B] text-white text-sm font-bold px-3 py-2 rounded-xl flex items-center gap-1.5">
              <X size={14}/> Quitar
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => ref.current?.click()}
          onDrop={e => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f) }}
          onDragOver={e => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          className={`${aspectRatio} border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all
            ${dragging ? 'border-[#C6002B] bg-red-50' : 'border-gray-200 hover:border-[#C6002B] hover:bg-gray-50'}`}
        >
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
            <ImageIcon size={22} className="text-gray-400"/>
          </div>
          <div className="text-sm font-semibold text-gray-500">Click o arrastra aquí</div>
          <div className="text-xs text-gray-400 mt-1">JPG, PNG, WebP — max 10MB</div>
        </div>
      )}
      <input ref={ref} type="file" accept="image/*" className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}/>
    </div>
  )
}

export default function DirectoryRegisterForm() {
  const { t } = useLang()
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Photo states
  const [coverPreview, setCoverPreview] = useState('')
  const [logoPreview, setLogoPreview] = useState('')
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [logoFile, setLogoFile] = useState<File | null>(null)

  // Form fields
  const [form, setForm] = useState({
    businessName: '', ownerName: '', email: '', phone: '',
    category: '', zone: '', description: '', website: '', instagram: '', plan: 'Gratis',
  })

  function set(key: string, val: string) {
    setForm(f => ({ ...f, [key]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('uploading')
    setErrorMsg('')

    try {
      // Step 1 — Upload photos directly to Cloudinary unsigned
      const cloudName = 'ddskiyir6'
      const preset = 'jaxunico_unsigned'

      const uploadPhoto = async (file: File, folder: string): Promise<string> => {
        const fd = new FormData()
        fd.append('file', file)
        fd.append('upload_preset', preset)
        fd.append('folder', `jaxunico/${folder}`)
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: 'POST', body: fd })
        const data = await res.json()
        return data.secure_url || ''
      }

      const [coverImageUrl, logoUrl] = await Promise.all([
        coverFile ? uploadPhoto(coverFile, 'directory/covers') : Promise.resolve(''),
        logoFile ? uploadPhoto(logoFile, 'directory/logos') : Promise.resolve(''),
      ])

      // Step 2 — Submit directly to Airtable
      const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN
      const BASE_ID = 'app6CeBxi2inbKZ6z'
      const TABLE_ID = 'tblSiUrwg6wdolqig'

      const notes = [
        form.description ? `Descripción: ${form.description}` : '',
        form.website ? `Web: ${form.website}` : '',
        form.instagram ? `IG: @${form.instagram}` : '',
        form.zone ? `Zona: ${form.zone}` : '',
        coverImageUrl ? `📷 Foto: ${coverImageUrl}` : '',
        logoUrl ? `🎨 Logo: ${logoUrl}` : '',
      ].filter(Boolean).join('\n')

      const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Solicitud': `${form.businessName} — ${new Date().toLocaleDateString('es-US')}`,
            'Nombre del Negocio': form.businessName,
            'Dueño': form.ownerName,
            'Email': form.email,
            'Teléfono': form.phone,
            'Categoría': form.category,
            'Estado de Solicitud': '🟡 Nueva',
            'Fecha de Solicitud': new Date().toISOString().split('T')[0],
            'Plan Seleccionado': form.plan,
            'Notas': notes,
          },
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err?.error?.message || 'Airtable submission failed')
      }

      setStatus('success')

    } catch (err: any) {
      setErrorMsg(err.message || 'Error al enviar. Intenta de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500"/>
        </div>
        <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-2">
          {t('¡Solicitud Enviada!', 'Request Submitted!')}
        </h3>
        <p className="text-gray-500 text-base max-w-sm mx-auto">
          {t(
            'Revisaremos tu negocio y lo publicaremos en el directorio en 24–48 horas. Te enviaremos un email de confirmación.',
            'We will review your business and publish it in the directory within 24–48 hours. We will send you a confirmation email.'
          )}
        </p>
      </div>
    )
  }

  const inputClass = "w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] transition-colors"
  const labelClass = "block text-sm font-bold text-gray-700 mb-1.5"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Photos — top section */}
      <div className="bg-gray-50 rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-[#C6002B]/10 rounded-lg flex items-center justify-center">
            <ImageIcon size={16} className="text-[#C6002B]"/>
          </div>
          <h4 className="font-bold text-base text-[#1A1A1A]">{t('Fotos de tu Negocio', 'Business Photos')}</h4>
        </div>
        <PhotoField
          label={t('Foto Principal del Negocio *', 'Main Business Photo *')}
          sublabel={t('Aparece en la tarjeta del directorio. Usa una foto del local, tu equipo o tus productos. Recomendado: 1200×630px', 'Appears on the directory card. Use a photo of the location, your team or products. Recommended: 1200×630px')}
          name="coverImage"
          preview={coverPreview}
          onPreview={setCoverPreview}
          onFile={setCoverFile}
          aspectRatio="aspect-video"
        />
        <PhotoField
          label={t('Logo del Negocio', 'Business Logo')}
          sublabel={t('Tu logo en formato cuadrado. Fondo transparente o blanco. Recomendado: 400×400px', 'Your logo in square format. Transparent or white background. Recommended: 400×400px')}
          name="logo"
          preview={logoPreview}
          onPreview={setLogoPreview}
          onFile={setLogoFile}
          aspectRatio="aspect-square max-w-[160px]"
        />
      </div>

      {/* Business Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-[#C6002B]/10 rounded-lg flex items-center justify-center">
            <Building2 size={16} className="text-[#C6002B]"/>
          </div>
          <h4 className="font-bold text-base text-[#1A1A1A]">{t('Información del Negocio', 'Business Information')}</h4>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{t('Nombre del Negocio *', 'Business Name *')}</label>
            <input type="text" required value={form.businessName} onChange={e => set('businessName', e.target.value)}
              placeholder={t('Nombre completo del negocio', 'Full business name')} className={inputClass}/>
          </div>
          <div>
            <label className={labelClass}>{t('Tu Nombre *', 'Your Name *')}</label>
            <input type="text" required value={form.ownerName} onChange={e => set('ownerName', e.target.value)}
              placeholder={t('Nombre del dueño/a', 'Owner name')} className={inputClass}/>
          </div>
          <div>
            <label className={labelClass}>{t('Email *', 'Email *')}</label>
            <input type="email" required value={form.email} onChange={e => set('email', e.target.value)}
              placeholder="tu@email.com" className={inputClass}/>
          </div>
          <div>
            <label className={labelClass}>{t('Teléfono', 'Phone')}</label>
            <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
              placeholder="(904) 000-0000" className={inputClass}/>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>{t('Categoría *', 'Category *')}</label>
            <select required value={form.category} onChange={e => set('category', e.target.value)} className={inputClass + ' text-gray-600'}>
              <option value="">{t('Selecciona...', 'Select...')}</option>
              {['Restaurantes', 'Salud', 'Bienes Raíces', 'Seguros / Finanzas', 'Legal', 'Construcción', 'Belleza', 'Tecnología', 'Educación / Coaching', 'Automotriz', 'Eventos', 'Otro'].map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>{t('Zona / Barrio', 'Zone / Neighborhood')}</label>
            <select value={form.zone} onChange={e => set('zone', e.target.value)} className={inputClass + ' text-gray-600'}>
              <option value="">{t('Selecciona...', 'Select...')}</option>
              {['Downtown Jacksonville', 'Riverside', 'Southside', 'Mandarin', 'Northside', 'Westside', 'Arlington', 'Beaches', 'Orange Park', 'Fleming Island', 'Otro'].map(z => (
                <option key={z}>{z}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>{t('Descripción del Negocio *', 'Business Description *')}</label>
          <textarea required rows={3} value={form.description} onChange={e => set('description', e.target.value)}
            placeholder={t('Describe tu negocio en 2–3 oraciones. ¿Qué ofreces? ¿A quién sirves?', 'Describe your business in 2–3 sentences. What do you offer? Who do you serve?')}
            className={inputClass + ' resize-none'}/>
          <p className="text-xs text-gray-400 mt-1">{form.description.length}/300</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Website</label>
            <input type="url" value={form.website} onChange={e => set('website', e.target.value)}
              placeholder="https://..." className={inputClass}/>
          </div>
          <div>
            <label className={labelClass}>Instagram</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">@</span>
              <input type="text" value={form.instagram} onChange={e => set('instagram', e.target.value)}
                placeholder="tunegocio" className={inputClass + ' pl-8'}/>
            </div>
          </div>
        </div>

        {/* Plan selection */}
        <div>
          <label className={labelClass}>{t('Plan de Membresía', 'Membership Plan')}</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { id: 'Gratis', label: t('Gratis', 'Free'), price: '$0', desc: t('Listado básico', 'Basic listing') },
              { id: 'Básico $97/mo', label: 'Básico', price: '$97/mo', desc: t('Más visibilidad', 'More visibility') },
              { id: 'Activo $297/mo', label: 'Activo', price: '$297/mo', desc: t('Posts mensuales', 'Monthly posts') },
            ].map(p => (
              <button key={p.id} type="button" onClick={() => set('plan', p.id)}
                className={`border-2 rounded-xl p-3 text-left transition-all ${form.plan === p.id ? 'border-[#C6002B] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className={`font-bold text-sm ${form.plan === p.id ? 'text-[#C6002B]' : 'text-[#1A1A1A]'}`}>{p.label}</div>
                <div className="font-black text-base text-[#1A1A1A]">{p.price}</div>
                <div className="text-xs text-gray-400">{p.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-semibold flex items-center gap-2">
          <X size={16}/> {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === 'uploading'}
        className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-60">
        {status === 'uploading' ? (
          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/> {t('Enviando...', 'Sending...')}</>
        ) : (
          <>{t('Registrar mi Negocio', 'Register my Business')} <ArrowRight size={20}/></>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        {t('Tu negocio será revisado y publicado en 24–48 horas. Te notificaremos por email.', 'Your business will be reviewed and published within 24–48 hours. We will notify you by email.')}
      </p>
    </form>
  )
}
