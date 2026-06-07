'use client'
import { useState } from 'react'
import PhotoUpload from '@/components/PhotoUpload'
import { LogOut, Mic, FileText, Calendar, MapPin, Eye, EyeOff, Lock, CheckCircle, ArrowRight, Plus, Image } from 'lucide-react'

const ADMIN_PASSWORD = 'jaxunico2025'

type Tab = 'episodes' | 'articles' | 'events' | 'directory' | 'photos'

const tabs = [
  { id: 'episodes' as Tab, label: 'Episodios', icon: Mic },
  { id: 'articles' as Tab, label: 'Blog', icon: FileText },
  { id: 'events' as Tab, label: 'Eventos', icon: Calendar },
  { id: 'directory' as Tab, label: 'Directorio', icon: MapPin },
  { id: 'photos' as Tab, label: 'Fotos', icon: Image },
]

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) { onLogin() }
    else { setError(true); setTimeout(() => setError(false), 2000) }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#C6002B] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock size={28} className="text-white"/>
          </div>
          <div className="font-['Inter'] font-black text-3xl text-white tracking-tight">JAXUNICO</div>
          <div className="text-gray-400 text-sm mt-1">Admin Panel</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={e => setPw(e.target.value)}
              placeholder="Contraseña"
              className={`w-full bg-white/10 border-2 rounded-2xl px-5 py-4 text-white text-lg placeholder-gray-500 focus:outline-none transition-colors pr-12
                ${error ? 'border-red-500' : 'border-white/20 focus:border-[#C6002B]'}`}
            />
            <button type="button" onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              {show ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          </div>
          {error && <p className="text-red-400 text-sm font-semibold text-center">Contraseña incorrecta</p>}
          <button type="submit" className="w-full bg-[#C6002B] text-white font-bold py-4 rounded-2xl text-lg hover:bg-[#9B0020] transition-colors flex items-center justify-center gap-2">
            Entrar <ArrowRight size={20}/>
          </button>
        </form>
      </div>
    </div>
  )
}

function EpisodesTab() {
  const [form, setForm] = useState({ title: '', episodeNumber: '', guestName: '', guestTitle: '', youtubeId: '', duration: '', category: '', description: '', coverUrl: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await fetch('https://formspree.io/f/mvznkodq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, _subject: `New Episode: ${form.title}`, _type: 'episode' }),
    })
    setStatus('success')
    setTimeout(() => { setStatus('idle'); setForm({ title: '', episodeNumber: '', guestName: '', guestTitle: '', youtubeId: '', duration: '', category: '', description: '', coverUrl: '' }) }, 3000)
  }

  if (status === 'success') return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center"><CheckCircle size={32} className="text-green-500"/></div>
      <h3 className="font-black text-xl text-[#1A1A1A]">Episodio Enviado</h3>
      <p className="text-gray-500 text-center">Recibimos los datos del episodio. Aparecerá en el sitio una vez publicado en Sanity.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <h2 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-6">Nuevo Episodio</h2>
      <PhotoUpload label="Foto del Invitado / Thumbnail" folder="episodes" onUpload={url => setForm(f => ({ ...f, coverUrl: url }))} currentUrl={form.coverUrl}/>
      {form.coverUrl && <input type="hidden" value={form.coverUrl}/>}
      <div className="grid grid-cols-2 gap-4">
        {[
          ['Número de Episodio', 'episodeNumber', 'number', '1'],
          ['Duración', 'duration', 'text', 'ej: 45 min'],
        ].map(([label, key, type, ph]) => (
          <div key={key}>
            <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">{label}</label>
            <input type={type} placeholder={ph} value={(form as any)[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B]"/>
          </div>
        ))}
      </div>
      {[
        ['Título del Episodio', 'title', 'text', 'Título completo del episodio', true],
        ['Nombre del Invitado', 'guestName', 'text', 'Nombre completo', false],
        ['Cargo / Empresa del Invitado', 'guestTitle', 'text', 'ej: CEO de Latino Tech', false],
        ['YouTube Video ID', 'youtubeId', 'text', 'Solo el ID: youtube.com/watch?v=ESTE_ID', true],
      ].map(([label, key, type, ph, req]) => (
        <div key={key as string}>
          <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">{label as string}{req && <span className="text-[#C6002B] ml-1">*</span>}</label>
          <input type={type as string} placeholder={ph as string} required={!!req} value={(form as any)[key as string]} onChange={e => setForm(f => ({ ...f, [key as string]: e.target.value }))}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B]"/>
        </div>
      ))}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Categoría</label>
        <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] text-gray-600">
          <option value="">Selecciona categoría</option>
          {['Emprendimiento', 'Marketing Digital', 'Coaching', 'Arte', 'Comunidad', 'Salud', 'Negocios'].map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Descripción del Episodio</label>
        <textarea rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] resize-none"/>
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-60">
        {status === 'sending' ? 'Enviando...' : <>Guardar Episodio <ArrowRight size={18}/></>}
      </button>
    </form>
  )
}

function ArticlesTab() {
  const [form, setForm] = useState({ title: '', category: '', excerpt: '', readTime: '', coverUrl: '', body: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await fetch('https://formspree.io/f/mvznkodq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, _subject: `New Article: ${form.title}`, _type: 'article' }),
    })
    setStatus('success')
    setTimeout(() => { setStatus('idle'); setForm({ title: '', category: '', excerpt: '', readTime: '', coverUrl: '', body: '' }) }, 3000)
  }

  if (status === 'success') return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center"><CheckCircle size={32} className="text-green-500"/></div>
      <h3 className="font-black text-xl text-[#1A1A1A]">Artículo Enviado</h3>
      <p className="text-gray-500 text-center">Recibimos el artículo. Se publicará en el blog pronto.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <h2 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-6">Nuevo Artículo de Blog</h2>
      <PhotoUpload label="Imagen de Portada" folder="blog" onUpload={url => setForm(f => ({ ...f, coverUrl: url }))} currentUrl={form.coverUrl}/>
      {[
        ['Título del Artículo', 'title', 'text', 'Título completo', true],
        ['Tiempo de Lectura', 'readTime', 'text', 'ej: 5 min', false],
      ].map(([label, key, type, ph, req]) => (
        <div key={key as string}>
          <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">{label as string}{req && <span className="text-[#C6002B] ml-1">*</span>}</label>
          <input type={type as string} placeholder={ph as string} required={!!req} value={(form as any)[key as string]} onChange={e => setForm(f => ({ ...f, [key as string]: e.target.value }))}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B]"/>
        </div>
      ))}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Categoría</label>
        <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] text-gray-600">
          <option value="">Selecciona categoría</option>
          {['Emprendimiento', 'Marketing Digital', 'Historias de Comunidad', 'Eventos', 'Negocios Latinos', 'Producción'].map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Descripción Corta <span className="text-[#C6002B]">*</span></label>
        <textarea rows={2} required value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="2–3 oraciones que aparecen en el grid del blog" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] resize-none"/>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Contenido del Artículo <span className="text-[#C6002B]">*</span></label>
        <textarea rows={10} required value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} placeholder="Escribe el artículo completo aquí..." className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] resize-none"/>
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-60">
        {status === 'sending' ? 'Enviando...' : <>Guardar Artículo <ArrowRight size={18}/></>}
      </button>
    </form>
  )
}

function EventsTab() {
  const [form, setForm] = useState({ title: '', eventDate: '', eventType: '', location: '', description: '', ticketPrice: '', capacity: '', coverUrl: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await fetch('https://formspree.io/f/mgobaqna', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, _subject: `New Event: ${form.title}`, _type: 'event' }),
    })
    setStatus('success')
    setTimeout(() => { setStatus('idle'); setForm({ title: '', eventDate: '', eventType: '', location: '', description: '', ticketPrice: '', capacity: '', coverUrl: '' }) }, 3000)
  }

  if (status === 'success') return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center"><CheckCircle size={32} className="text-green-500"/></div>
      <h3 className="font-black text-xl text-[#1A1A1A]">Evento Guardado</h3>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <h2 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-6">Nuevo Evento</h2>
      <PhotoUpload label="Imagen del Evento" folder="events" onUpload={url => setForm(f => ({ ...f, coverUrl: url }))} currentUrl={form.coverUrl}/>
      {[
        ['Título del Evento', 'title', 'text', 'Nombre completo del evento', true],
        ['Fecha y Hora', 'eventDate', 'text', 'ej: Sábado 15 Agosto, 2025 — 6:00 PM', true],
        ['Ubicación', 'location', 'text', 'Dirección o nombre del venue', false],
        ['Precio de Entrada', 'ticketPrice', 'text', 'ej: $25–$50 o Gratis', false],
        ['Capacidad', 'capacity', 'text', 'ej: 50–100 personas', false],
      ].map(([label, key, type, ph, req]) => (
        <div key={key as string}>
          <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">{label as string}{req && <span className="text-[#C6002B] ml-1">*</span>}</label>
          <input type={type as string} placeholder={ph as string} required={!!req} value={(form as any)[key as string]} onChange={e => setForm(f => ({ ...f, [key as string]: e.target.value }))}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B]"/>
        </div>
      ))}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Tipo de Evento</label>
        <select value={form.eventType} onChange={e => setForm(f => ({ ...f, eventType: e.target.value }))} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] text-gray-600">
          <option value="">Selecciona tipo</option>
          {['Networking', 'Summit', 'Taller', 'Panel', 'VIP', 'Festival', 'Otro'].map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Descripción</label>
        <textarea rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] resize-none"/>
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-60">
        {status === 'sending' ? 'Enviando...' : <>Guardar Evento <ArrowRight size={18}/></>}
      </button>
    </form>
  )
}

function DirectoryTab() {
  const [form, setForm] = useState({ businessName: '', category: '', zone: '', description: '', phone: '', website: '', instagram: '', coverUrl: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await fetch('https://formspree.io/f/mvznkywq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, _subject: `New Directory Listing: ${form.businessName}`, _type: 'listing' }),
    })
    setStatus('success')
    setTimeout(() => { setStatus('idle'); setForm({ businessName: '', category: '', zone: '', description: '', phone: '', website: '', instagram: '', coverUrl: '' }) }, 3000)
  }

  if (status === 'success') return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center"><CheckCircle size={32} className="text-green-500"/></div>
      <h3 className="font-black text-xl text-[#1A1A1A]">Negocio Guardado</h3>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <h2 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-6">Agregar Negocio al Directorio</h2>
      <PhotoUpload label="Foto del Negocio" folder="directory" onUpload={url => setForm(f => ({ ...f, coverUrl: url }))} currentUrl={form.coverUrl}/>
      {[
        ['Nombre del Negocio', 'businessName', 'text', 'Nombre completo', true],
        ['Zona / Barrio', 'zone', 'text', 'ej: Riverside, Southside, Downtown', false],
        ['Teléfono', 'phone', 'tel', '(904) 000-0000', false],
        ['Sitio Web', 'website', 'url', 'https://...', false],
        ['Instagram', 'instagram', 'text', '@handle', false],
      ].map(([label, key, type, ph, req]) => (
        <div key={key as string}>
          <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">{label as string}{req && <span className="text-[#C6002B] ml-1">*</span>}</label>
          <input type={type as string} placeholder={ph as string} required={!!req} value={(form as any)[key as string]} onChange={e => setForm(f => ({ ...f, [key as string]: e.target.value }))}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B]"/>
        </div>
      ))}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Categoría</label>
        <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] text-gray-600">
          <option value="">Selecciona categoría</option>
          {['Restaurantes', 'Salud', 'Bienes Raíces', 'Finanzas', 'Legal', 'Belleza', 'Tecnología', 'Educación', 'Construcción', 'Otro'].map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-widest">Descripción <span className="text-[#C6002B]">*</span></label>
        <textarea rows={3} required value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#C6002B] resize-none"/>
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-60">
        {status === 'sending' ? 'Enviando...' : <>Agregar al Directorio <ArrowRight size={18}/></>}
      </button>
    </form>
  )
}

function PhotosTab() {
  const [uploadedUrls, setUploadedUrls] = useState<{ url: string; folder: string }[]>([])

  return (
    <div className="max-w-2xl">
      <h2 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-2">Subir Fotos</h2>
      <p className="text-gray-500 mb-8">Sube fotos a Cloudinary y copia la URL para usarla donde necesites.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { folder: 'episodes', label: 'Foto de Episodio' },
          { folder: 'blog', label: 'Foto de Blog' },
          { folder: 'events', label: 'Foto de Evento' },
          { folder: 'directory', label: 'Foto de Negocio' },
          { folder: 'general', label: 'Foto General' },
        ].map(item => (
          <div key={item.folder} className="card p-5">
            <PhotoUpload
              label={item.label}
              folder={item.folder}
              onUpload={url => setUploadedUrls(prev => [...prev, { url, folder: item.folder }])}
            />
          </div>
        ))}
      </div>
      {uploadedUrls.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold text-lg text-[#1A1A1A] mb-4">Fotos Subidas — Copia las URLs</h3>
          <div className="space-y-3">
            {uploadedUrls.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <img src={item.url} alt="" className="w-12 h-12 object-cover rounded-lg shrink-0"/>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#C6002B] uppercase mb-1">{item.folder}</div>
                  <input readOnly value={item.url} onClick={e => (e.target as HTMLInputElement).select()}
                    className="w-full text-xs bg-white border border-gray-200 rounded-lg px-2 py-1.5 font-mono cursor-pointer focus:outline-none focus:border-[#C6002B]"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('episodes')

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)}/>

  const tabContent = {
    episodes: <EpisodesTab/>,
    articles: <ArticlesTab/>,
    events: <EventsTab/>,
    directory: <DirectoryTab/>,
    photos: <PhotosTab/>,
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <div className="bg-[#1A1A1A] px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M20 15 L20 65 Q20 85 40 85 Q60 85 60 65 L60 55 L80 70 L80 15 Z" fill="url(#ag)"/>
              <defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C6002B"/><stop offset="100%" stopColor="#9B0020"/></linearGradient></defs>
            </svg>
          </div>
          <div>
            <div className="font-['Inter'] font-black text-white text-base tracking-widest">JAXUNICO</div>
            <div className="text-gray-400 text-xs">Admin Panel</div>
          </div>
        </div>
        <button onClick={() => setLoggedIn(false)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold">
          <LogOut size={16}/> Salir
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all
                  ${activeTab === tab.id ? 'bg-[#C6002B] text-white' : 'bg-white text-gray-600 hover:bg-red-50 hover:text-[#C6002B]'}`}>
                <Icon size={16}/> {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
          {tabContent[activeTab]}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Los datos enviados desde el admin van a Formspree y Cloudinary. Para publicar en el sitio, usa Sanity en{' '}
          <a href="https://24ezss24.sanity.studio" target="_blank" className="text-[#C6002B] font-bold hover:underline">
            24ezss24.sanity.studio
          </a>
        </p>
      </div>
    </div>
  )
}
