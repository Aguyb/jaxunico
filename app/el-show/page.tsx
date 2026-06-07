import Link from 'next/link'
import { Play, Mic, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { getAllEpisodes } from '@/lib/sanity.queries'
import GuestFormWrapper from '@/components/GuestFormWrapper'

const staticEpisodes = [
  { _id: '1', episodeNumber: 1, title: 'Tu Historia Merece Ser Escuchada', guest: 'Episodio de Lanzamiento', duration: '45 min', category: 'Emprendimiento', slug: { current: 'tu-historia-merece-ser-escuchada' }, coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80' },
  { _id: '2', episodeNumber: 2, title: 'Próximo episodio — disponible pronto', guest: '', duration: '—', category: 'Negocios', slug: { current: 'episodio-002' }, coverImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80' },
  { _id: '3', episodeNumber: 3, title: 'Próximo episodio — disponible pronto', guest: '', duration: '—', category: 'Comunidad', slug: { current: 'episodio-003' }, coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80' },
]

const categories = ['Todos', 'Negocios', 'Coaching', 'Arte', 'Comunidad', 'Salud', 'Emprendimiento']

export default async function ElShowPage() {
  const cmsEpisodes = await getAllEpisodes().catch(() => [])
  const episodes = cmsEpisodes.length > 0 ? cmsEpisodes : staticEpisodes
  const latest = episodes[0]
  const rest = episodes.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6002B] rounded-full blur-3xl opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge mb-6">El Show</div>
            <h1 className="font-['Inter'] font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-none tracking-tight uppercase mb-6">
              Conversaciones<br />Reales.<br />
              <span className="text-[#C6002B]">Historias</span><br />que Inspiran.
            </h1>
            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
              Cada semana, una conversación auténtica con líderes, emprendedores y creadores latinos de Jacksonville.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#episodios" className="btn-primary text-xl px-5 py-3 sm:px-8 sm:py-4">
                <Play size={20} fill="white"/> Ver Episodios
              </Link>
              <Link href="#aplicar" className="border-2 border-white/20 text-white hover:border-[#C6002B] font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all text-xl inline-flex items-center gap-2">
                Quiero Ser Invitado <ArrowRight size={20}/>
              </Link>
            </div>
            <div className="flex gap-3 mt-8 flex-wrap">
              {['Spotify', 'Apple Podcasts', 'YouTube', 'iHeartRadio', 'Amazon Music'].map(p => (
                <span key={p} className="text-sm bg-white/10 text-gray-300 font-semibold px-3 py-2 rounded-xl">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      {latest && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="badge mb-6">Último Episodio</div>
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-3">
                <Link href={`/el-show/${latest.slug}`} className="bg-[#1A1A1A] rounded-3xl overflow-hidden aspect-video flex items-center justify-center relative block group">
                  {latest.coverImage && (
                    <img src={latest.coverImage} alt={latest.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#C6002B] animate-ping opacity-40" />
                      <div className="w-20 h-20 bg-[#C6002B] rounded-full flex items-center justify-center relative z-10 shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={32} className="text-white ml-2" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-xs font-bold text-white/60 mb-1 uppercase tracking-widest">
                      EP. {String(latest.episodeNumber).padStart(3,'0')} · {latest.duration}
                    </div>
                    <div className="font-['Inter'] font-black text-2xl text-white">{latest.title}</div>
                    {latest.guest && <div className="text-gray-300 text-sm mt-1">{latest.guest}</div>}
                  </div>
                </Link>
              </div>
              <div className="lg:col-span-2">
                <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-4">Sobre este Episodio</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  {latest.description || 'Una conversación auténtica sobre emprendimiento, comunidad y crecimiento latino en Jacksonville.'}
                </p>
                <div className="space-y-3">
                  {['Escuchar en Spotify', 'Escuchar en Apple Podcasts', 'Ver en YouTube'].map(action => (
                    <div key={action} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-red-50 hover:text-[#C6002B] group transition-colors cursor-pointer">
                      <span className="text-lg font-semibold text-gray-600 group-hover:text-[#C6002B]">{action}</span>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-[#C6002B]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Episodes */}
      <section id="episodios" className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Todos los Episodios</h2>
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat, i) => (
              <span key={cat} className={`text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest cursor-pointer ${i === 0 ? 'bg-[#C6002B] text-white' : 'bg-white text-gray-500 border border-gray-200 hover:bg-[#C6002B] hover:text-white transition-colors'}`}>
                {cat}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep: any) => (
              <Link key={ep._id} href={`/el-show/${ep.slug}`} className="card p-5 hover:border-[#C6002B]/30 cursor-pointer group block">
                <div className="bg-[#1A1A1A] rounded-2xl aspect-video flex items-center justify-center mb-4 relative overflow-hidden">
                  {ep.coverImage && <img src={ep.coverImage} alt={ep.title} className="w-full h-full object-cover opacity-60" />}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#C6002B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={20} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#C6002B] uppercase tracking-widest">EP. {String(ep.episodeNumber).padStart(3,'0')}</span>
                  <span className="text-sm text-gray-400 flex items-center gap-1"><Clock size={12}/> {ep.duration}</span>
                </div>
                <h3 className="font-semibold text-xl text-[#1A1A1A] mb-1 group-hover:text-[#C6002B] transition-colors line-clamp-2">{ep.title}</h3>
                {ep.guest && <p className="text-sm text-gray-400 mb-3">{ep.guest}</p>}
                {ep.category && <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-3 py-1 rounded-lg">{ep.category}</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apply to be Guest */}
      <section id="aplicar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <div className="badge mb-6">Conviértete en Invitado</div>
              <h2 className="section-heading mb-6">
                Tu Historia<br />Pertenece a<br /><span className="text-[#C6002B]">Este Escenario.</span>
              </h2>
              <div className="space-y-6 mb-8">
                {[
                  { num: '01', title: 'Aplica', desc: 'Completa el formulario. Es gratis y tarda 3 minutos.' },
                  { num: '02', title: 'Confirmación en 48hs', desc: 'El equipo de Jax Unico te contacta para coordinar.' },
                  { num: '03', title: 'Graba en Estudio', desc: 'Ven a Aguyb Studios y cuenta tu historia.' },
                ].map(step => (
                  <div key={step.num} className="flex gap-5">
                    <div className="w-10 h-10 bg-[#C6002B] rounded-xl flex items-center justify-center shrink-0">
                      <span className="font-black text-base text-white">{step.num}</span>
                    </div>
                    <div>
                      <div className="font-bold text-xl text-[#1A1A1A] mb-1">{step.title}</div>
                      <div className="text-lg text-gray-500">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-[#F7F7F7] rounded-2xl">
                <div className="text-sm font-bold text-[#C6002B] uppercase tracking-widest mb-3">Lo que recibes — Gratis</div>
                {['Episodio completo grabado en estudio', '3–5 clips para tus redes sociales', 'Foto profesional del set', 'Mención en newsletter', 'Link en el sitio web de Jax Unico'].map(item => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} className="text-[#C6002B] shrink-0"/>
                    <span className="text-lg text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <GuestFormWrapper />
          </div>
        </div>
      </section>
    </>
  )
}
