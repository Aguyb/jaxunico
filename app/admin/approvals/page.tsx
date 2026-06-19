'use client'
import { useState, useEffect } from 'react'
import { CheckCircle, X, RefreshCw, ExternalLink, MapPin, Phone, Globe, Instagram } from 'lucide-react'

const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN
const BASE_ID = 'app6CeBxi2inbKZ6z'
const TABLE_NAME = 'Solicitudes de Registro'

interface Submission {
  id: string
  businessName: string
  owner: string
  email: string
  phone: string
  category: string
  zone: string
  description: string
  plan: string
  status: string
  date: string
  coverUrl: string
  logoUrl: string
  website: string
  instagram: string
  sanityId: string
}

function parseNotes(notes: string = '') {
  const lines = notes.split('\n')
  const get = (key: string) => {
    const line = lines.find(l => l.toLowerCase().includes(key.toLowerCase() + ':'))
    return line ? line.split(':').slice(1).join(':').trim() : ''
  }
  return {
    description: get('descripcion') || get('descripción') || '',
    website: get('web'),
    instagram: get('ig')?.replace('@',''),
    zone: get('zona'),
    coverUrl: get('foto').replace('📷 ','').trim(),
    logoUrl: get('logo').replace('🎨 ','').trim(),
    sanityId: get('sanity id'),
  }
}

export default function ApprovalsPage() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [publishing, setPublishing] = useState<string | null>(null)
  const [justApproved, setJustApproved] = useState<string[]>([])
  const [error, setError] = useState('')
  const [tableId, setTableId] = useState('')

  async function getTableId(): Promise<string> {
    if (tableId) return tableId
    const res = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
    })
    const data = await res.json()
    const table = data.tables?.find((t: any) => t.name === TABLE_NAME)
    const id = table?.id || ''
    setTableId(id)
    return id
  }

  async function fetchSubmissions() {
    setLoading(true)
    setError('')
    try {
      const tid = await getTableId()
      if (!tid) { setError('Tabla no encontrada en Airtable'); setLoading(false); return }
      const res = await fetch(
        `https://api.airtable.com/v0/${BASE_ID}/${tid}?sort[0][field]=Fecha%20de%20Solicitud&sort[0][direction]=desc`,
        { headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` } }
      )
      const data = await res.json()
      if (!res.ok) { setError(data.error?.message || 'Error'); setLoading(false); return }
      const records: Submission[] = (data.records || []).map((r: any) => {
        const f = r.fields
        const parsed = parseNotes(f['Notas'] || '')
        return {
          id: r.id,
          businessName: f['Nombre del Negocio'] || '',
          owner: f['Dueño'] || '',
          email: f['Email'] || '',
          phone: f['Teléfono'] || '',
          category: f['Categoría'] || '',
          zone: parsed.zone || '',
          description: parsed.description || '',
          plan: f['Plan Seleccionado'] || 'Gratis',
          status: f['Estado de Solicitud'] || '🟡 Nueva',
          date: f['Fecha de Solicitud'] || '',
          coverUrl: parsed.coverUrl || '',
          logoUrl: parsed.logoUrl || '',
          website: parsed.website || '',
          instagram: parsed.instagram || '',
          sanityId: parsed.sanityId || '',
        }
      })
      setSubmissions(records)
    } catch (err: any) { setError(err.message) }
    setLoading(false)
  }

  async function handleApprove(sub: Submission) {
    setPublishing(sub.id)
    setError('')
    try {
      const res = await fetch('/api/approve-business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: sub.businessName,
          category: sub.category,
          zone: sub.zone,
          description: sub.description,
          phone: sub.phone,
          website: sub.website,
          instagram: sub.instagram,
          coverUrl: sub.coverUrl,
          sanityId: sub.sanityId || undefined,
        }),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Error al publicar')

      // Update Airtable status to approved
      const tid = await getTableId()
      await fetch(`https://api.airtable.com/v0/${BASE_ID}/${tid}/${sub.id}`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: { 'Estado de Solicitud': '✅ Aprobada' } }),
      })
      setJustApproved(a => [...a, sub.id])
    } catch (err: any) { setError(err.message) }
    setPublishing(null)
  }

  async function handleReject(sub: Submission) {
    const tid = await getTableId()
    await fetch(`https://api.airtable.com/v0/${BASE_ID}/${tid}/${sub.id}`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: { 'Estado de Solicitud': '❌ Rechazada' } }),
    })
    setSubmissions(s => s.map(x => x.id === sub.id ? { ...x, status: '❌ Rechazada' } : x))
  }

  useEffect(() => { if (authed) fetchSubmissions() }, [authed])

  if (!authed) return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Jax Unico" className="h-12 w-auto mx-auto mb-4 brightness-0 invert"/>
          <p className="text-gray-400 text-sm">Panel de Aprobaciones</p>
        </div>
        <input type="password" value={pw}
          onChange={e => { setPw(e.target.value); setPwError(false) }}
          onKeyDown={e => e.key === 'Enter' && (pw === 'jaxunico2025' ? setAuthed(true) : setPwError(true))}
          placeholder="Contraseña"
          className={`w-full bg-white/10 border-2 rounded-2xl px-5 py-4 text-white text-lg placeholder-gray-500 focus:outline-none mb-4 transition-colors ${pwError ? 'border-red-500' : 'border-white/20 focus:border-[#C6002B]'}`}
        />
        {pwError && <p className="text-red-400 text-sm text-center mb-3">Contraseña incorrecta</p>}
        <button onClick={() => pw === 'jaxunico2025' ? setAuthed(true) : setPwError(true)}
          className="w-full bg-[#C6002B] text-white font-bold py-4 rounded-2xl text-lg hover:bg-[#9B0020] transition-colors">
          Entrar
        </button>
      </div>
    </div>
  )

  const pending = submissions.filter(s =>
    !s.status.includes('Aprobada') && !s.status.includes('Rechazada') && !justApproved.includes(s.id)
  )
  const approvedList = submissions.filter(s => s.status.includes('Aprobada') || justApproved.includes(s.id))

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="bg-[#1A1A1A] px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Jax Unico" className="h-8 w-auto brightness-0 invert"/>
          <span className="text-gray-500 text-sm">/ Aprobaciones del Directorio</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={fetchSubmissions} disabled={loading}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold">
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''}/> Actualizar
          </button>
          <a href="/admin" className="text-gray-400 hover:text-white text-sm">← Admin</a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-3 text-sm text-red-600 font-semibold mb-6 flex items-center justify-between">
            ⚠️ {error} <button onClick={() => setError('')}><X size={14}/></button>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { val: pending.length, label: 'Pendientes', color: 'text-[#C9A84C]' },
            { val: approvedList.length, label: 'Aprobados', color: 'text-green-500' },
            { val: submissions.length, label: 'Total', color: 'text-[#C6002B]' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
              <div className={`font-['Inter'] font-black text-4xl ${s.color}`}>{s.val}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-5 flex items-center gap-3">
          Pendientes de Aprobación
          {pending.length > 0 && <span className="bg-[#C6002B] text-white text-sm font-bold px-2.5 py-0.5 rounded-full">{pending.length}</span>}
        </h2>

        {loading && (
          <div className="text-center py-16 text-gray-400">
            <RefreshCw size={28} className="animate-spin mx-auto mb-3"/>
            <p className="font-semibold">Cargando solicitudes de Airtable...</p>
          </div>
        )}

        {!loading && pending.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center text-gray-400 mb-8 border border-gray-100">
            <CheckCircle size={36} className="mx-auto mb-3 text-green-400"/>
            <p className="font-bold text-lg">Todo al día</p>
            <p className="text-sm mt-1">No hay solicitudes pendientes.</p>
          </div>
        )}

        <div className="space-y-5 mb-10">
          {pending.map(sub => (
            <div key={sub.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-4 p-5">
                {sub.coverUrl ? (
                  <img src={sub.coverUrl} alt={sub.businessName} className="w-24 h-24 rounded-xl object-cover shrink-0"/>
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-gray-100 shrink-0 flex items-center justify-center text-4xl">🏪</div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                    <h3 className="font-['Inter'] font-black text-xl text-[#1A1A1A]">{sub.businessName}</h3>
                    <span className="text-xs text-gray-400 shrink-0">{sub.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="badge !text-xs">{sub.category}</span>
                    {sub.plan !== 'Gratis' && <span className="badge-gold !text-xs">{sub.plan}</span>}
                    {sub.zone && <span className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={10}/>{sub.zone}</span>}
                  </div>
                  {sub.description && <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-2">{sub.description}</p>}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">{sub.owner}</span>
                    {sub.email && <span>{sub.email}</span>}
                    {sub.phone && <span className="flex items-center gap-1"><Phone size={10}/>{sub.phone}</span>}
                    {sub.website && <a href={sub.website} target="_blank" className="flex items-center gap-1 hover:text-[#C6002B]"><Globe size={10}/>Website</a>}
                    {sub.instagram && <span className="flex items-center gap-1"><Instagram size={10}/>@{sub.instagram}</span>}
                    {sub.logoUrl && <a href={sub.logoUrl} target="_blank" className="flex items-center gap-1 hover:text-[#C6002B]"><ExternalLink size={10}/>Logo</a>}
                    {sub.sanityId && <span className="text-green-500 font-semibold">✓ Sanity draft ready</span>}
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-end gap-3">
                <button onClick={() => handleReject(sub)} disabled={!!publishing}
                  className="flex items-center gap-2 border-2 border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-500 font-semibold text-sm px-4 py-2 rounded-xl transition-all disabled:opacity-40">
                  <X size={14}/> Rechazar
                </button>
                <button onClick={() => handleApprove(sub)} disabled={!!publishing}
                  className="flex items-center gap-2 bg-[#C6002B] text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-[#9B0020] transition-colors disabled:opacity-50">
                  {publishing === sub.id
                    ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"/>Publicando...</>
                    : <><CheckCircle size={16}/>Aprobar y Publicar</>
                  }
                </button>
              </div>
            </div>
          ))}
        </div>

        {approvedList.length > 0 && (
          <>
            <h2 className="font-['Inter'] font-black text-xl text-[#1A1A1A] mb-4">Aprobados ({approvedList.length})</h2>
            <div className="space-y-3">
              {approvedList.map(sub => (
                <div key={sub.id} className="bg-white rounded-xl p-4 border border-green-100 flex items-center gap-4">
                  {sub.coverUrl
                    ? <img src={sub.coverUrl} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0"/>
                    : <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-xl shrink-0">🏪</div>
                  }
                  <div className="flex-1">
                    <div className="font-bold text-[#1A1A1A]">{sub.businessName}</div>
                    <div className="text-xs text-gray-400">{sub.category}{sub.zone ? ` · ${sub.zone}` : ''}</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-bold shrink-0">
                    <CheckCircle size={16}/> Live en el sitio
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <a href="/directorio" target="_blank"
            className="inline-flex items-center gap-2 text-[#C6002B] font-bold text-sm hover:underline">
            <ExternalLink size={14}/> Ver el Directorio en el Sitio
          </a>
        </div>
      </div>
    </div>
  )
}
