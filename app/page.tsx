'use client'
import Link from 'next/link'
import { Play, ArrowRight, Mic, Video, CheckCircle, TrendingUp, Eye, Users, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#1A1A1A] min-h-[92vh] flex items-center overflow-hidden">
        {/* BG image overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80"
            alt="Community" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="badge mb-8 !bg-red-900/40 !text-red-300 border border-red-700/40">
              <span className="w-2 h-2 rounded-full bg-[#C6002B] animate-pulse" />
              Jacksonville, Florida
            </div>
            <h1 className="font-['Inter'] font-black tracking-tight text-7xl sm:text-8xl lg:text-[110px] leading-none tracking-wide text-white mb-8 uppercase">
              Tu Voz.<br />
              <span className="text-[#C6002B]">Tu Historia.</span><br />
              Tu Plataforma.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Jax Unico es la plataforma de medios latina de Jacksonville — producimos shows, podcasts y contenido visual que conectan tu marca con +120,000 latinos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/el-show" className="btn-primary text-xl px-10 py-5">
                <Play size={22} fill="white" /> Ver el Show
              </Link>
              <Link href="/servicios" className="border-2 border-white/30 text-white hover:border-white font-semibold px-10 py-5 rounded-2xl transition-all text-xl inline-flex items-center gap-2">
                Nuestros Servicios <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
        {/* Floating badge */}
        <div className="absolute bottom-10 right-10 hidden lg:block float-y">
          <div className="bg-white rounded-3xl p-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C6002B] rounded-2xl flex items-center justify-center">
                <Mic size={22} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-[#1A1A1A] text-lg">Nuevo Episodio</div>
                <div className="text-gray-400 text-sm">En Vivo Ahora</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY LIFE VIDEO ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6">Nuestra Comunidad</div>
              <h2 className="section-heading mb-6">
                La Comunidad<br />Latina de<br />
                <span className="text-[#C6002B]">Jacksonville</span><br />Está Viva.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Sonrisas, historias, negocios, familias. Esta es la comunidad que representamos — vibrante, trabajadora y lista para crecer.
              </p>
              <Link href="/el-show" className="btn-primary">
                Conoce a Nuestra Gente <ArrowRight size={20} />
              </Link>
            </div>
            {/* Video mosaic */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="wiggle rounded-3xl overflow-hidden h-52 bg-gray-100 relative" style={{animationDelay:'0s'}}>
                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                      alt="Community" className="img-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-36 bg-gray-100 relative">
                    <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80"
                      alt="Community smiling" className="img-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-3xl overflow-hidden h-36 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?w=600&q=80"
                      alt="Latino business" className="img-cover" />
                  </div>
                  <div className="wiggle rounded-3xl overflow-hidden h-52 bg-gray-100" style={{animationDelay:'1.5s'}}>
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                      alt="Podcast studio" className="img-cover" />
                  </div>
                </div>
              </div>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#C6002B] animate-ping opacity-30 scale-110" />
                  <div className="w-20 h-20 bg-[#C6002B] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform relative z-10">
                    <Play size={30} className="text-white ml-2" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — SHOW / PODCAST / ADVERTISING ── */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-6">Lo Que Hacemos</div>
            <h2 className="section-heading mb-4">Contenido que<br /><span className="text-[#C6002B]">Conecta</span> y Vende</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Show, podcast y publicidad — el ecosistema completo para que tu marca llegue a la comunidad latina.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
                icon: <Video size={28}/>,
                title: 'El Show',
                desc: 'Producción de video podcast en estudio profesional. Entrevistas, historias, contenido que impacta.',
                href: '/el-show',
                cta: 'Ver El Show',
              },
              {
                img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
                icon: <Mic size={28}/>,
                title: 'Podcast Latino',
                desc: 'Distribuido en Spotify, Apple, YouTube, iHeart y más. Tu voz en todos los oídos de Jacksonville.',
                href: '/el-show',
                cta: 'Escuchar',
              },
              {
                img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
                icon: <TrendingUp size={28}/>,
                title: 'Publicidad',
                desc: 'Llega a +120,000 latinos en Jacksonville con campañas en el show, redes sociales y eventos en vivo.',
                href: '/anuncia',
                cta: 'Anunciar',
              },
            ].map((item) => (
              <div key={item.title} className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="img-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#C6002B] rounded-2xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-['Inter'] font-black tracking-tight text-3xl tracking-wide text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-5">{item.desc}</p>
                  <Link href={item.href} className="text-[#C6002B] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                    {item.cta} <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTION / VISUAL POWER ── */}
      <section className="py-24 bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-6">Producción Visual</div>
              <h2 className="font-['Inter'] font-black tracking-tight text-6xl lg:text-7xl leading-none tracking-wide text-white mb-8 uppercase">
                Lo Visual<br />
                <span className="text-[#C6002B]">Impulsa</span><br />
                tus Ventas.
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: <Eye size={22}/>, title: 'Visibilidad que convierte', desc: 'El contenido visual genera 94% más engagement que texto solo. Tu negocio necesita ser visto.' },
                  { icon: <TrendingUp size={22}/>, title: 'Presencia online = más clientes', desc: 'El 81% de los consumidores investigan online antes de comprar. Si no apareces, no existes.' },
                  { icon: <Users size={22}/>, title: 'Un sistema de contenido que trabaja 24/7', desc: 'Un solo día de grabación genera semanas de contenido para todas tus plataformas.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-12 h-12 bg-[#C6002B]/20 rounded-2xl flex items-center justify-center text-[#C6002B] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-white text-xl mb-1">{item.title}</div>
                      <div className="text-gray-400 text-lg leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/servicios" className="btn-primary text-xl">
                Crea tu Sistema de Contenido <ArrowRight size={22} />
              </Link>
            </div>
            {/* Production image collage */}
            <div className="relative">
              <div className="wiggle rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80"
                  alt="Video production" className="img-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C6002B] rounded-3xl p-6 shadow-2xl float-y">
                <div className="text-white font-['Inter'] font-black tracking-tight text-5xl leading-none">+94%</div>
                <div className="text-red-200 text-base font-semibold mt-1">Más engagement<br/>con video</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-3xl p-5 shadow-2xl wiggle" style={{animationDelay:'2s'}}>
                <div className="text-[#C6002B] font-['Inter'] font-black tracking-tight text-4xl leading-none">24/7</div>
                <div className="text-gray-500 text-sm font-semibold mt-1">Contenido<br/>activo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BE A GUEST ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80"
                  alt="Podcast studio" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C9A84C] rounded-3xl p-5 shadow-xl wiggle">
                <div className="text-white font-bold text-lg">100% Gratis</div>
                <div className="text-yellow-100 text-sm">Para invitados</div>
              </div>
            </div>
            <div>
              <div className="badge-gold mb-6">Sé Nuestro Invitado</div>
              <h2 className="section-heading mb-6">
                Cuéntale a<br />Jacksonville<br />
                <span className="text-[#C6002B]">tu Historia.</span>
              </h2>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Aplicar es gratis. Tu comunidad te está viendo. Comparte tu historia y haz crecer tu marca.
              </p>
              <div className="space-y-4 mb-8">
                {['Episodio completo grabado en estudio profesional', '3–5 clips para tus redes sociales', 'Mención en newsletter y plataformas', 'Conexión con la red latina de Jacksonville'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={22} className="text-[#C6002B] shrink-0" />
                    <span className="text-lg text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/el-show#aplicar" className="btn-primary text-xl">
                Aplica Ahora — Es Gratis <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST EPISODE ── */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="badge mb-4">El Show</div>
              <h2 className="section-heading">Último Episodio</h2>
            </div>
            <Link href="/el-show" className="hidden md:flex items-center gap-2 text-lg font-bold text-[#C6002B] hover:gap-3 transition-all">
              Ver todos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden aspect-video flex items-center justify-center relative">
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&q=80"
                  alt="Episode" className="img-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#C6002B] animate-ping opacity-40" />
                    <div className="w-20 h-20 bg-[#C6002B] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform relative z-10 shadow-2xl">
                      <Play size={32} className="text-white ml-2" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-xs font-bold text-white/60 mb-1 uppercase tracking-widest">EP. 001 · 45 MIN</div>
                  <div className="font-['Inter'] font-black tracking-tight text-3xl text-white">Tu Historia Merece Ser Escuchada</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {[1,2,3].map(n => (
                <div key={n} className="card p-5 flex gap-4 cursor-pointer hover:border-[#C6002B]/30">
                  <div className="w-20 h-14 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${['1598488035139-bdbb2231ce04','1478737270239-2f02b77fc618','1590602847861-f357a9332bbc'][n-1]}?w=200&q=60`}
                      alt="" className="img-cover opacity-60" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 mb-0.5 uppercase tracking-widest">EP. {String(n+1).padStart(3,'0')}</div>
                    <div className="text-lg font-semibold text-[#1A1A1A] line-clamp-2">Próximo episodio — disponible pronto</div>
                  </div>
                </div>
              ))}
              <Link href="/el-show" className="btn-outline w-full justify-center !text-lg">
                Ver todos los episodios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="py-24 bg-[#C6002B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-['Inter'] font-black tracking-tight text-7xl sm:text-8xl text-white mb-4 tracking-wide">EL UNICO</div>
          <p className="text-white/80 text-2xl mb-10">El newsletter latino de Jacksonville. Noticias, eventos y contenido exclusivo. Gratis.</p>
          <form className="flex gap-3 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="tu@email.com"
              className="flex-1 px-6 py-5 rounded-2xl font-semibold text-lg text-[#1A1A1A] placeholder-gray-400 focus:outline-none" />
            <button type="submit" className="bg-[#1A1A1A] text-white font-bold px-8 py-5 rounded-2xl hover:bg-black text-lg transition-colors">
              Suscribirme
            </button>
          </form>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="py-28 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6002B] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="font-['Inter'] font-black tracking-tight text-5xl sm:text-6xl text-white mb-4 tracking-wide">TU HISTORIA MERECE SER ESCUCHADA.</p>
          <div className="w-32 h-1.5 bg-[#C9A84C] mx-auto my-8 rounded-full" />
          <p className="font-['Inter'] font-black tracking-tight text-5xl sm:text-6xl text-white mb-4 tracking-wide">TU NEGOCIO MERECE CRECER.</p>
          <div className="w-32 h-1.5 bg-[#C9A84C] mx-auto my-8 rounded-full" />
          <p className="font-['Inter'] font-black tracking-tight text-5xl sm:text-6xl text-[#C6002B] mb-12 tracking-wide">TU COMUNIDAD TE ESTÁ ESPERANDO.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/servicios" className="btn-primary text-xl px-10 py-5">Comencemos <ArrowRight size={22}/></Link>
            <Link href="/anuncia" className="border-2 border-white/20 text-white hover:border-white font-semibold px-10 py-5 rounded-2xl transition-all text-xl inline-flex items-center gap-2">
              Anunciar <ArrowRight size={22}/>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
