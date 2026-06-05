import Link from 'next/link'
import { Play, ArrowRight, Mic, Video, Calendar, Users, MapPin, Star, ChevronRight, CheckCircle, Zap, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { value: '+120K', label: 'Latinos en Jacksonville' },
  { value: '+10', label: 'Plataformas de distribución' },
  { value: '4', label: 'Pilares de la plataforma' },
  { value: '1', label: 'Plataforma para tu comunidad' },
]

const pillars = [
  { num: '01', title: 'CONECTA', desc: 'Networking real entre emprendedores y líderes latinos de Jacksonville.', icon: Users, color: 'bg-red-50 text-[#C6002B]' },
  { num: '02', title: 'CRECE', desc: 'Visibilidad, estrategia y producción para hacer crecer tu negocio.', icon: TrendingUp, color: 'bg-amber-50 text-[#C9A84C]' },
  { num: '03', title: 'PRODUCE', desc: 'Contenido de clase mundial producido por Aguyb Studios.', icon: Video, color: 'bg-red-50 text-[#C6002B]' },
  { num: '04', title: 'PERTENECE', desc: 'Una comunidad que te reconoce, te apoya y te impulsa.', icon: Globe, color: 'bg-amber-50 text-[#C9A84C]' },
]

const services = [
  { icon: Video, title: 'Video Profesional', price: 'desde $800/mes', desc: 'Producción de contenido mensual para redes sociales.' },
  { icon: Mic, title: 'Podcast Completo', price: 'desde $1,500/mes', desc: 'Grabación, edición, distribución y clips.' },
  { icon: Play, title: 'Comerciales', price: 'desde $1,500', desc: 'Producción de comerciales para TV y redes digitales.' },
  { icon: Zap, title: 'Redes Sociales', price: 'desde $600/mes', desc: 'Reels, TikToks y Shorts — 10 a 20 piezas por mes.' },
  { icon: Calendar, title: 'Cobertura de Eventos', price: 'desde $1,000', desc: 'Multi-cámara, highlight reel, clips para redes.' },
  { icon: Star, title: 'Paquete Completo', price: 'desde $3,000/mes', desc: 'Podcast + video + redes + email — todo incluido.', featured: true },
]

const platforms = ['Spotify', 'Apple Podcasts', 'YouTube', 'iHeartRadio', 'Amazon Music', 'TikTok', 'Instagram', 'Facebook', 'LinkedIn', 'Newsletter']

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6002B] animate-pulse" />
                Jacksonville, Florida
              </div>
              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-none tracking-wide text-[#1A1A1A] mb-6 uppercase">
                La Plataforma<br />
                <span className="text-[#C6002B]">Latina</span><br />
                de Jacksonville
              </h1>
              <p className="font-body text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                Jax Unico conecta, promueve y produce contenido para la comunidad latina. No somos solo un show — somos tu plataforma.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/el-show" className="btn-primary gap-3 text-base px-8 py-4">
                  <Play size={18} fill="white" /> Ver el Show
                </Link>
                <Link href="/servicios" className="btn-outline gap-3 text-base px-8 py-4">
                  Nuestros Servicios <ArrowRight size={18} />
                </Link>
              </div>
              {/* Platform icons */}
              <div className="mt-10 flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Escúchanos en:</span>
                {['Spotify', 'Apple', 'YouTube', 'iHeart'].map((p) => (
                  <span key={p} className="text-xs bg-gray-100 text-gray-600 font-mono px-3 py-1.5 rounded-lg">{p}</span>
                ))}
              </div>
            </div>
            {/* Right visual */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6002B] to-[#9B0020] rounded-3xl opacity-10" />
                <div className="absolute inset-8 bg-gradient-to-br from-[#C6002B] to-[#9B0020] rounded-2xl flex items-center justify-center">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2">
                    <path d="M20 15 L20 65 Q20 85 40 85 Q60 85 60 65 L60 55 L80 70 L80 15 Z" fill="white"/>
                  </svg>
                </div>
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#C6002B] rounded-lg flex items-center justify-center">
                      <Mic size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">En Vivo</div>
                      <div className="text-xs text-gray-400">Nuevo episodio</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="text-xs font-mono text-gray-400 mb-1">Alcance total</div>
                  <div className="font-heading text-2xl text-[#C6002B]">+120K</div>
                  <div className="text-xs text-gray-400">Latinos en JAX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#C6002B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl text-white">{s.value}</div>
                <div className="text-xs font-mono text-white/70 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT JUST A SHOW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6">Quiénes Somos</div>
              <h2 className="section-heading mb-6">
                No Somos<br />Solo un Show.<br />
                <span className="text-[#C6002B]">Somos Tu</span><br />Plataforma.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Jax Unico es el primer ecosistema de medios latinos en Jacksonville. Combinamos contenido de alta calidad, comunidad activa, producción profesional y eventos en vivo — todo bajo un mismo techo.
              </p>
              <div className="space-y-4">
                {['Contenido bilingüe de alta producción', 'Directorio de negocios latinos', 'Eventos de networking trimestrales', 'Producción de video y podcast para marcas'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#C6002B] shrink-0" />
                    <span className="text-sm font-body text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.num} className="card p-6 hover:border-[#C6002B]/20 group cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center mb-4`}>
                      <Icon size={18} />
                    </div>
                    <div className="font-mono text-xs text-gray-300 mb-1">{p.num}</div>
                    <div className="font-heading text-xl tracking-wide text-[#1A1A1A] mb-2">{p.title}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST EPISODE */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="badge mb-4">El Show</div>
              <h2 className="section-heading">Último Episodio</h2>
            </div>
            <Link href="/el-show" className="hidden md:flex items-center gap-2 text-sm font-body font-semibold text-[#C6002B] hover:gap-3 transition-all">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden aspect-video flex items-center justify-center relative">
                <div className="w-20 h-20 bg-[#C6002B] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-2" fill="white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-mono text-white/60 mb-1">EP. 001 · 45 MIN</div>
                  <div className="font-heading text-xl text-white">Tu Historia Merece Ser Escuchada</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="card p-4 flex gap-4 cursor-pointer hover:border-[#C6002B]/30">
                  <div className="w-16 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center shrink-0">
                    <Play size={16} className="text-[#C6002B]" fill="#C6002B" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 mb-0.5">EP. {String(n + 1).padStart(3, '0')}</div>
                    <div className="text-sm font-body font-semibold text-[#1A1A1A] line-clamp-2">
                      Episodio próximamente disponible
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/el-show" className="btn-outline w-full justify-center text-sm py-3">
                Ver todos los episodios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BE A GUEST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#1A1A1A] rounded-3xl p-10 relative overflow-hidden noise">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6002B] rounded-full blur-3xl opacity-20" />
              <div className="relative z-10">
                <div className="badge-gold mb-6">Sé Nuestro Invitado</div>
                <h2 className="font-heading text-5xl text-white leading-none mb-4 uppercase">
                  Cuéntale a<br />Jacksonville<br />
                  <span className="text-[#C6002B]">lo que Estás</span><br />Construyendo.
                </h2>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Aplicar es gratis. Tu comunidad te está viendo.
                </p>
                <div className="space-y-3 mb-8">
                  {['Episodio completo grabado en estudio', '3–5 clips para tus redes sociales', 'Mención en newsletter y redes', 'Conexión con la red latina de JAX'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#C9A84C] shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/el-show#aplicar" className="btn-primary text-base px-8 py-4">
                  Aplica para Ser Invitado <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div>
              <div className="badge mb-6">Distribución</div>
              <h2 className="section-heading mb-6">
                Tu Mensaje<br />en <span className="text-[#C6002B]">+10</span><br />Plataformas
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Cada episodio se distribuye automáticamente en todas las plataformas principales para maximizar tu alcance.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((p) => (
                  <div key={p} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-red-50 hover:text-[#C6002B] transition-colors cursor-pointer group">
                    <div className="w-2 h-2 rounded-full bg-[#C6002B]" />
                    <span className="text-sm font-body font-medium text-gray-600 group-hover:text-[#C6002B]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-6">Aguyb Studios</div>
            <h2 className="section-heading mx-auto max-w-3xl">
              Producción de<br /><span className="text-[#C6002B]">Clase Mundial</span>
            </h2>
            <p className="section-subheading mx-auto text-center mt-4">
              Al alcance de tu negocio. Precios transparentes, resultados medibles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className={`card p-6 hover:border-[#C6002B]/30 transition-all ${s.featured ? 'border-[#C9A84C] border-2' : ''}`}>
                  {s.featured && (
                    <div className="badge-gold mb-4">Más Popular</div>
                  )}
                  <div className="w-12 h-12 bg-[#C6002B]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#C6002B]" />
                  </div>
                  <h3 className="font-heading text-xl tracking-wide text-[#1A1A1A] mb-1">{s.title}</h3>
                  <div className="text-[#C9A84C] font-mono text-sm font-bold mb-3">{s.price}</div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <Link href="/servicios" className="text-sm font-body font-semibold text-[#C6002B] flex items-center gap-1 hover:gap-2 transition-all">
                    Ver detalles <ChevronRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/servicios" className="btn-primary text-base px-10 py-4">
              Ver Todos los Servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT EVENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-6">Próximo Evento</div>
              <h2 className="section-heading mb-4">
                Networking<br /><span className="text-[#C6002B]">Latino</span><br />Jacksonville
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Únete a la comunidad latina más activa de Jacksonville. Conecta, aprende y crece junto a otros emprendedores.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/eventos" className="btn-primary text-base px-8 py-4">
                  Reservar Mi Lugar <ArrowRight size={18} />
                </Link>
                <Link href="/eventos" className="btn-outline text-base px-8 py-4">
                  Ver Todos los Eventos
                </Link>
              </div>
            </div>
            <div className="card p-8 border-[#C6002B] border-2">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-mono text-[#C6002B] uppercase tracking-widest mb-2">Próximo Evento</div>
                  <h3 className="font-heading text-2xl text-[#1A1A1A] tracking-wide">Jax Unico Networking Night</h3>
                </div>
                <span className="badge">Gratis</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Calendar size={16} className="text-[#C6002B]" />
                  <span>Próximamente — 2025</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <MapPin size={16} className="text-[#C6002B]" />
                  <span>Jacksonville, Florida</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Users size={16} className="text-[#C6002B]" />
                  <span>50–100 personas · Networking + Episodio en vivo</span>
                </div>
              </div>
              <Link href="/eventos" className="btn-primary w-full justify-center">
                Me Interesa <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 bg-[#C6002B] relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C6002B] to-[#9B0020]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-heading text-6xl sm:text-7xl text-white mb-4 tracking-wide">EL UNICO</div>
          <p className="text-white/80 text-lg mb-8">El newsletter latino de Jacksonville. Noticias, eventos y contenido exclusivo. Gratis.</p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-5 py-4 rounded-xl font-body text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="btn-dark px-6 py-4 bg-white text-[#C6002B] hover:bg-gray-50 font-semibold rounded-xl">
              Suscribirme
            </button>
          </form>
          <p className="text-white/50 text-xs mt-4 font-mono">Sin spam. Cancela cuando quieras.</p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6002B] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="font-heading text-3xl sm:text-4xl text-white mb-4 tracking-wide">TU HISTORIA MERECE SER ESCUCHADA.</p>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto my-6" />
          <p className="font-heading text-3xl sm:text-4xl text-white mb-4 tracking-wide">TU NEGOCIO MERECE CRECER.</p>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto my-6" />
          <p className="font-heading text-3xl sm:text-4xl text-[#C6002B] mb-10 tracking-wide">TU COMUNIDAD TE ESTÁ ESPERANDO.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/comunidad" className="btn-primary text-base px-8 py-4">
              Únete Ahora <ArrowRight size={18} />
            </Link>
            <Link href="/anuncia" className="border-2 border-white/20 text-white hover:border-white font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
              Contáctanos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
