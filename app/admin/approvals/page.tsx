'use client'
import { useState, useEffect } from 'react'
import { CheckCircle, X, Eye, EyeOff, RefreshCw, ExternalLink } from 'lucide-react'

const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN
const BASE_ID = 'app6CeBxi2inbKZ6z'
const SANITY_TOKEN = process.env.NEXT_PUBLIC_SANITY_TOKEN || ''
const SANITY_PROJECT = '24ezss24'
const SANITY_DATASET = 'production'

interface Submission {
  id: string
  businessName: string
  owner: string
  email: string
  phone: string
  category: string
  zone: string
  notes: string
  plan: string
  status: string
  date: string
  coverUrl: string
  logoUrl: string
  website: string
  instagram: string
}

function parseNotes(notes: string) {
  const get = (key: string) => {
    const match = notes?.match(new RegExp(`${key}: ([^\\n]+)`))
    return match?.[1]?.trim() || ''
  }
  return {
    description: get('Descripción'),
    website: get('Web'),
    instagram: get('IG')?.replace('@', ''),
    zone: get('Zona'),
    coverUrl: get('📷 Foto'),
    logoUrl: get('🎨 Logo'),
  }
}

export default function ApprovalsPage() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [publishing, setPublishing] = useState<string | null>(null)
  const [done, setDone] = useState<string[]>([])
  const [error, setError] = useState('')

  async function fetchSubmissions() {
    setLoading(true)
    try {
      // Get table info first
      const tablesRes = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
        headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
      })
      const tablesData = await tablesRes.json()
      const table = tablesData.tables?.find((t: any) => t.name === 'Solicitudes de Registro')
      if (!table) { setError('Table not found'); setLoading(false); return }

      const res = await fetch(
        `https://api.airtable.com/v0/${BASE_ID}/${table.id}?sort[0][field]=Fecha%20de%20Solicitud&sort[0][direction]=desc`,
        { headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` } }
      )
      const data = await res.json()
      if (!res.ok) { setError(data.error?.message || 'Error fetching'); setLoading(false); return }

      const records = data.records?.map((r: any) => {
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
          notes: parsed.description || '',
          plan: f['Plan Seleccionado'] || 'Gratis',
          status: f['Estado de Solicitud'] || '🟡 Nueva',
          date: f['Fecha de Solicitud'] || '',
          coverUrl: parsed.coverUrl || '',
          logoUrl: parsed.logoUrl || '',
          website: parsed.website || '',
          instagram: parsed.instagram || '',
        }
      }) || []

      setSubmissions(records)
    } catch (err: any) {
      setError(err.message)
    }
    setLoading(false)
  }

  async function publishToSanity(sub: Submission) {
    setPublishing(sub.id)
    setError('')

    try {
      const sanityToken = SANITY_TOKEN

      // Build Sanity document
      const doc: any = {
        _type: 'listing',
        businessName: sub.businessName,
        category: sub.category,
        zone: sub.zone,
        description: sub.notes,
        phone: sub.phone,
        website: sub.website || undefined,
        instagram: sub.instagram || undefined,
        approved: true,
        featured: false,
      }

      // Create in Sanity
      const sanityRes = await fetch(
        `https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/mutate/${SANITY_DATASET}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sanityToken}`,
          },
          body: JSON.stringify({ mutations: [{ create: doc }] }),
        }
      )

      if (!sanityRes.ok) {
        const err = await sanityRes.json()
        throw new Error(err.error?.description || 'Sanity publish failed')
      }

      // Update Airtable status to Aprobada
      const tablesRes = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
        headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
      })
      const tablesData = await tablesRes.json()
      const table = tablesData.tables?.find((t: any) => t.name === 'Solicitudes de Registro')

      if (table) {
        await fetch(`https://api.airtable.com/v0/${BASE_ID}/${table.id}/${sub.id}`, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fields: { 'Estado de Solicitud': '✅ Aprobada' } }),
        })
      }

      setDone(d => [...d, sub.id])
    } catch (err: any) {
      setError(err.message)
    }
    setPublishing(null)
  }

  useEffect(() => { if (authed) fetchSubmissions() }, [authed])

  if (!authed) return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="font-['Inter'] font-black text-3xl text-white tracking-tight mb-1">JAXUNICO</div>
          <div className="text-gray-400 text-sm">Business Approvals</div>
        </div>
        <input type="password" value={pw} onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && pw === 'jaxunico2025' && setAuthed(true)}
          placeholder="Contraseña" className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-5 py-4 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-[#C6002B] mb-4"/>
        <button onClick={() => pw === 'jaxunico2025' ? setAuthed(true) : setError('Incorrecta')}
          className="w-full bg-[#C6002B] text-white font-bold py-4 rounded-2xl text-lg hover:bg-[#9B0020]">
          Entrar
        </button>
        {error && <p className="text-red-400 text-center text-sm mt-3">{error}</p>}
      </div>
    </div>
  )

  const pending = submissions.filter(s => !s.status.includes('Aprobada') && !done.includes(s.id))
  const approved = submissions.filter(s => s.status.includes('Aprobada') || done.includes(s.id))

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="bg-[#1A1A1A] px-6 py-4 flex items-center justify-between">
        <div>
          <div className="font-['Inter'] font-black text-white text-lg tracking-widest">JAXUNICO</div>
          <div className="text-gray-400 text-xs">Aprobación de Negocios</div>
        </div>
        <button onClick={fetchSubmissions} disabled={loading}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold">
          <RefreshCw size={15} className={loading ? 'animate-spin' : ''}/> Actualizar
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-semibold mb-6 flex items-center justify-between">
            {error} <button onClick={() => setError('')}><X size={14}/></button>
          </div>
        )}

  

        {loading ? (
          <div className="text-center py-16 text-gray-400 font-semibold">Cargando solicitudes...</div>
        ) : (
          <>
            <h2 className="font-['Inter'] font-black text-xl text-[#1A1A1A] mb-4">
              Pendientes ({pending.length})
            </h2>
            {pending.length === 0 && (
              <div className="text-center py-10 text-gray-400 bg-white rounded-2xl mb-6">
                No hay solicitudes pendientes.
              </div>
            )}
            <div className="space-y-4 mb-10">
              {pending.map(sub => (
                <div key={sub.id} className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#C6002B]/30 transition-all">
                  <div className="flex items-start gap-4">
                    {sub.coverUrl && (
                      <img src={sub.coverUrl} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0"/>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-['Inter'] font-black text-lg text-[#1A1A1A]">{sub.businessName}</h3>
                        <span className="badge !text-xs">{sub.category}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{sub.owner} · {sub.email} · {sub.phone}</p>
                      {sub.zone && <p className="text-xs text-gray-400 mb-1">📍 {sub.zone}</p>}
                      {sub.notes && <p className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-2">{sub.notes}</p>}
                      <div className="flex gap-3 mt-2 text-xs text-gray-400 flex-wrap">
                        {sub.website && <a href={sub.website} target="_blank" className="flex items-center gap-1 hover:text-[#C6002B]"><ExternalLink size={11}/> Website</a>}
                        {sub.instagram && <span>@{sub.instagram}</span>}
                        {sub.plan && <span className="font-semibold text-[#C9A84C]">{sub.plan}</span>}
                        <span>{sub.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => publishToSanity(sub)}
                      disabled={!!publishing}
                      className="flex items-center gap-2 bg-[#C6002B] text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#9B0020] disabled:opacity-50 transition-colors shrink-0"
                    >
                      {publishing === sub.id ? (
                        <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"/> Publicando...</>
                      ) : (
                        <><CheckCircle size={16}/> Aprobar</>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {approved.length > 0 && (
              <>
                <h2 className="font-['Inter'] font-black text-xl text-[#1A1A1A] mb-4">
                  Aprobados ({approved.length})
                </h2>
                <div className="space-y-3">
                  {approved.map(sub => (
                    <div key={sub.id} className="bg-white rounded-xl p-4 border border-green-100 flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-500 shrink-0"/>
                      <div>
                        <div className="font-bold text-[#1A1A1A]">{sub.businessName}</div>
                        <div className="text-xs text-gray-400">{sub.category} · Publicado en el directorio</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
