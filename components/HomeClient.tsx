'use client'
import Link from 'next/link'
import { Play, ArrowRight, Mic, Video, CheckCircle, TrendingUp, Eye, Users, ChevronRight } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import { useLang } from '@/lib/lang'

export default function HomeClient({ latestEpisode, nextEvent }: { latestEpisode: any, nextEvent: any }) {
  const { t } = useLang()

  const services = [
    { icon: Video, title: t('Video Profesional', 'Professional Video'), price: t('desde $800/mes', 'from $800/mo'), desc: t('Producción de contenido mensual para redes sociales.', 'Monthly video content production for social media.') },
    { icon: Mic, title: t('Podcast Completo', 'Full Podcast'), price: t('desde $1,500/mes', 'from $1,500/mo'), desc: t('Grabación, edición, distribución y clips.', 'Recording, editing, distribution and clips.') },
    { icon: Play, title: t('Comerciales', 'Commercials'), price: t('desde $1,500', 'from $1,500'), desc: t('Producción de comerciales para TV y redes digitales.', 'Commercial production for TV and digital networks.') },
    { icon: TrendingUp, title: t('Redes Sociales', 'Social Media'), price: t('desde $600/mes', 'from $600/mo'), desc: t('Reels, TikToks y Shorts — 10 a 20 piezas por mes.', 'Reels, TikToks and Shorts — 10 to 20 pieces per month.') },
    { icon: Users, title: t('Cobertura de Eventos', 'Event Coverage'), price: t('desde $1,000', 'from $1,000'), desc: t('Multi-cámara, highlight reel, clips para redes.', 'Multi-camera, highlight reel, social clips.') },
    { icon: Eye, title: t('Paquete Completo', 'Full Package'), price: t('desde $3,000/mes', 'from $3,000/mo'), desc: t('Podcast + video + redes + email — todo incluido.', 'Podcast + video + social + email — all included.'), featured: true },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1A1A1A] min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80"
            alt="Community" className="w-full h-full object-cover opacity-30"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl">
            <div className="badge mb-5 !bg-red-900/40 !text-red-300 border border-red-700/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6002B] animate-pulse"/>
              Jacksonville, Florida
            </div>
            <h1 className="font-['Inter'] font-black text-5xl sm:text-6xl lg:text-[90px] leading-none tracking-tight text-white mb-6 uppercase">
              {t('Tu Voz.', 'Your Voice.')}<br/>
              <span className="text-[#C6002B]">{t('Tu Historia.', 'Your Story.')}</span><br/>
              {t('Tu Plataforma.', 'Your Platform.')}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              {t(
                'Jax Unico conecta, promueve y produce contenido para la comunidad latina. No somos solo un show — somos tu plataforma.',
                'Jax Unico connects, promotes and produces content for the Latino community. We are not just a show — we are your platform.'
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/el-show" className="btn-primary gap-2">
                <Play size={16} fill="white"/> {t('Ver el Show', 'Watch the Show')}
              </Link>
              <Link href="/servicios" className="border-2 border-white/30 text-white hover:border-white font-semibold px-5 py-3 rounded-2xl transition-all text-base inline-flex items-center gap-2">
                {t('Nuestros Servicios', 'Our Services')} <ArrowRight size={16}/>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('Escúchanos en:', 'Listen on:')}</span>
              {['Spotify', 'Apple', 'YouTube', 'iHeart'].map(p => (
                <span key={p} className="text-xs bg-white/10 text-gray-300 font-semibold px-2.5 py-1.5 rounded-lg">{p}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Floating badge — hidden on small mobile */}
        <div className="absolute bottom-8 right-6 hidden sm:block float-y">
          <div className="bg-white rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C6002B] rounded-xl flex items-center justify-center">
                <Mic size={18} className="text-white"/>
              </div>
              <div>
                <div className="font-bold text-[#1A1A1A] text-sm">{t('Nuevo Episodio', 'New Episode')}</div>
                <div className="text-gray-400 text-xs">{t('En Vivo Ahora', 'Live Now')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#C6002B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              ['+120K', t('Latinos en Jacksonville', 'Latinos in Jacksonville')],
              ['+10', t('Plataformas', 'Platforms')],
              ['4', t('Pilares', 'Pillars')],
              ['1', t('Plataforma Para Ti', 'Platform For You')],
            ].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="font-['Inter'] font-black text-3xl sm:text-4xl lg:text-5xl text-white">{v}</div>
                <div className="text-xs font-bold text-white/70 uppercase tracking-widest mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY VIDEO */}
      <section className="py-14 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="badge mb-5">{t('Nuestra Comunidad', 'Our Community')}</div>
              <h2 className="section-heading mb-5">
                {t('La Comunidad', 'The Latino')}<br/>{t('Latina de', 'Community of')}<br/>
                <span className="text-[#C6002B]">Jacksonville</span><br/>{t('Está Viva.', 'Is Alive.')}
              </h2>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-7">
                {t(
                  'Sonrisas, historias, negocios, familias. Esta es la comunidad que representamos.',
                  'Smiles, stories, businesses, families. This is the community we represent.'
                )}
              </p>
              <Link href="/el-show" className="btn-primary">
                {t('Conoce a Nuestra Gente', 'Meet Our People')} <ArrowRight size={18}/>
              </Link>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="wiggle rounded-2xl overflow-hidden h-44 sm:h-52 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" alt="Community" className="img-cover"/>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-32 sm:h-36 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80" alt="Community" className="img-cover"/>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="rounded-2xl overflow-hidden h-32 sm:h-36 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?w=600&q=80" alt="Business" className="img-cover"/>
                  </div>
                  <div className="wiggle rounded-2xl overflow-hidden h-44 sm:h-52 bg-gray-100" style={{animationDelay:'1.5s'}}>
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80" alt="Studio" className="img-cover"/>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#C6002B] animate-ping opacity-30 scale-110"/>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C6002B] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform relative z-10">
                    <Play size={24} className="text-white ml-2" fill="white"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-14 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="badge mx-auto mb-5">{t('Lo Que Hacemos', 'What We Do')}</div>
            <h2 className="section-heading mb-4">{t('Contenido que', 'Content that')}<br/><span className="text-[#C6002B]">{t('Conecta', 'Connects')}</span> {t('y Vende', 'and Sells')}</h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
              {t('Show, podcast y publicidad — el ecosistema completo para tu marca.', 'Show, podcast and advertising — the complete ecosystem for your brand.')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80', icon: <Video size={22}/>, title: t('El Show', 'The Show'), desc: t('Producción de video podcast en estudio profesional.', 'Video podcast production in professional studio.'), href: '/el-show', cta: t('Ver El Show', 'Watch The Show') },
              { img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80', icon: <Mic size={22}/>, title: t('Podcast Latino', 'Latino Podcast'), desc: t('Distribuido en Spotify, Apple, YouTube, iHeart y más.', 'Distributed on Spotify, Apple, YouTube, iHeart and more.'), href: '/el-show', cta: t('Escuchar', 'Listen') },
              { img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80', icon: <TrendingUp size={22}/>, title: t('Publicidad', 'Advertising'), desc: t('Llega a +120,000 latinos en Jacksonville.', 'Reach +120,000 Latinos in Jacksonville.'), href: '/anuncia', cta: t('Anunciar', 'Advertise') },
            ].map(item => (
              <div key={item.title} className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="img-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#C6002B] rounded-xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="font-['Inter'] font-black text-2xl tracking-tight text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-4">{item.desc}</p>
                  <Link href={item.href} className="text-[#C6002B] font-bold text-base flex items-center gap-2 hover:gap-3 transition-all">
                    {item.cta} <ChevronRight size={18}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION / VISUAL POWER */}
      <section className="py-14 sm:py-20 bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-5">{t('Producción Visual', 'Visual Production')}</div>
              <h2 className="font-['Inter'] font-black text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight text-white mb-7 uppercase">
                {t('Lo Visual', 'Visuals')}<br/><span className="text-[#C6002B]">{t('Impulsa', 'Drive')}</span><br/>{t('tus Ventas.', 'Your Sales.')}
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: <Eye size={20}/>, title: t('Visibilidad que convierte', 'Visibility that converts'), desc: t('El contenido visual genera 94% más engagement que texto solo.', 'Visual content generates 94% more engagement than text alone.') },
                  { icon: <TrendingUp size={20}/>, title: t('Presencia online = más clientes', 'Online presence = more clients'), desc: t('El 81% de los consumidores investigan online antes de comprar.', '81% of consumers research online before buying.') },
                  { icon: <Users size={20}/>, title: t('Un sistema de contenido 24/7', 'A content system 24/7'), desc: t('Un día de grabación genera semanas de contenido.', 'One recording day generates weeks of content.') },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#C6002B]/20 rounded-xl flex items-center justify-center text-[#C6002B] shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-bold text-white text-base sm:text-lg mb-1">{item.title}</div>
                      <div className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/servicios" className="btn-primary">
                {t('Crea tu Sistema de Contenido', 'Create Your Content System')} <ArrowRight size={18}/>
              </Link>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="wiggle rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto">
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80" alt="Video production" className="img-cover"/>
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-[#C6002B] rounded-2xl p-4 shadow-2xl float-y">
                <div className="text-white font-['Inter'] font-black text-3xl sm:text-4xl leading-none">+94%</div>
                <div className="text-red-200 text-xs sm:text-sm font-semibold mt-1">{t('Más engagement', 'More engagement')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BE A GUEST */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80" alt="Podcast studio" className="w-full h-72 sm:h-96 object-cover"/>
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-[#C9A84C] rounded-2xl p-4 shadow-xl wiggle">
                <div className="text-white font-bold text-base">{t('100% Gratis', '100% Free')}</div>
                <div className="text-yellow-100 text-xs">{t('Para invitados', 'For guests')}</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="badge-gold mb-5">{t('Sé Nuestro Invitado', 'Be Our Guest')}</div>
              <h2 className="section-heading mb-5">
                {t('Cuéntale a', 'Tell')}<br/>{t('Jacksonville', 'Jacksonville')}<br/><span className="text-[#C6002B]">{t('tu Historia.', 'Your Story.')}</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-500 mb-7 leading-relaxed">
                {t('Aplicar es gratis. Tu comunidad te está viendo.', 'Applying is free. Your community is watching.')}
              </p>
              <div className="space-y-3 mb-7">
                {[
                  t('Episodio completo grabado en estudio', 'Full episode recorded in studio'),
                  t('3–5 clips para tus redes sociales', '3–5 clips for your social media'),
                  t('Mención en newsletter y plataformas', 'Newsletter and platform mention'),
                  t('Conexión con la red latina de Jacksonville', 'Connection with the Jacksonville Latino network'),
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#C6002B] shrink-0"/>
                    <span className="text-base text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/el-show#aplicar" className="btn-primary">
                {t('Aplica Ahora — Es Gratis', 'Apply Now — It\'s Free')} <ArrowRight size={18}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-14 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="badge mx-auto mb-5">Aguyb Studios</div>
            <h2 className="section-heading mb-4">{t('Producción de', 'Production of')}<br/><span className="text-[#C6002B]">{t('Clase Mundial', 'World Class')}</span></h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
              {t('Al alcance de tu negocio. Sin precios ocultos.', 'Within reach of your business. No hidden prices.')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => {
              const Icon = s.icon
              return (
                <div key={s.title} className={`card p-5 sm:p-6 hover:border-[#C6002B]/30 ${(s as any).featured ? 'border-[#C9A84C] border-2' : ''}`}>
                  {(s as any).featured && <div className="badge-gold mb-3">{t('Más Popular', 'Most Popular')}</div>}
                  <div className="w-11 h-11 bg-[#C6002B]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#C6002B]"/>
                  </div>
                  <h3 className="font-['Inter'] font-black text-xl tracking-tight text-[#1A1A1A] mb-1">{s.title}</h3>
                  <div className="text-[#C9A84C] font-bold text-sm mb-3">{s.price}</div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <Link href="/servicios" className="text-sm font-bold text-[#C6002B] flex items-center gap-1 hover:gap-2 transition-all">
                    {t('Ver detalles', 'See details')} <ChevronRight size={14}/>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/servicios" className="btn-primary">
              {t('Ver Todos los Servicios', 'See All Services')} <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-14 sm:py-20 bg-[#C6002B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-['Inter'] font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-3 tracking-tight">EL UNICO</div>
          <p className="text-white/80 text-base sm:text-xl mb-8">
            {t('El newsletter latino de Jacksonville. Noticias, eventos y contenido exclusivo. Gratis.', 'The Latino newsletter of Jacksonville. News, events and exclusive content. Free.')}
          </p>
          <NewsletterForm variant="dark"/>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-16 sm:py-24 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6002B] rounded-full blur-3xl"/>
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="font-['Inter'] font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight uppercase">
            {t('TU HISTORIA MERECE SER ESCUCHADA.', 'YOUR STORY DESERVES TO BE HEARD.')}
          </p>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto my-6 rounded-full"/>
          <p className="font-['Inter'] font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight uppercase">
            {t('TU NEGOCIO MERECE CRECER.', 'YOUR BUSINESS DESERVES TO GROW.')}
          </p>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto my-6 rounded-full"/>
          <p className="font-['Inter'] font-black text-3xl sm:text-4xl lg:text-5xl text-[#C6002B] mb-10 tracking-tight uppercase">
            {t('TU COMUNIDAD TE ESTÁ ESPERANDO.', 'YOUR COMMUNITY IS WAITING FOR YOU.')}
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/servicios" className="btn-primary">
              {t('Comencemos', 'Let\'s Start')} <ArrowRight size={18}/>
            </Link>
            <Link href="/anuncia" className="border-2 border-white/20 text-white hover:border-white font-semibold px-5 py-3 rounded-2xl transition-all text-base inline-flex items-center gap-2">
              {t('Anunciar', 'Advertise')} <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
