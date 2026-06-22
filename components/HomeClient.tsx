'use client'
import Link from 'next/link'
import { Play, ArrowRight, Mic, Video, CheckCircle, TrendingUp, Eye, Users, ChevronRight, Clock, Megaphone, BarChart2, Globe } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import { useLang } from '@/lib/lang'

export default function HomeClient({ latestEpisode, nextEvent, latestArticle }: { latestEpisode: any, nextEvent: any, latestArticle?: any }) {
  const { t } = useLang()

  const services = [
    { icon: Video, title: t('Video Profesional', 'Professional Video'), desc: t('Producción de contenido mensual para redes sociales.', 'Monthly video content for social media.') },
    { icon: Mic, title: t('Podcast Completo', 'Full Podcast'), desc: t('Grabación, edición, distribución y clips.', 'Recording, editing, distribution and clips.') },
    { icon: Play, title: t('Comerciales', 'Commercials'), desc: t('Producción de comerciales para TV y redes digitales.', 'Commercial production for TV and digital.') },
    { icon: TrendingUp, title: t('Redes Sociales', 'Social Media'), desc: t('Reels, TikToks y Shorts — 10 a 20 piezas por mes.', '10 to 20 Reels, TikToks and Shorts per month.') },
    { icon: Users, title: t('Cobertura de Eventos', 'Event Coverage'), desc: t('Multi-cámara, highlight reel, clips para redes.', 'Multi-camera, highlight reel, social clips.') },
    { icon: Eye, title: t('Paquete Completo', 'Full Package'), desc: t('Podcast + video + redes + email — todo incluido.', 'Podcast + video + social + email — all included.'), featured: true },
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
              {t('Donde la', 'Where the')}<br/>
              <span className="text-[#C6002B]">{t('Comunidad Latina', 'Latino Community')}</span><br/>
              {t('Crece.', 'Grows.')}
            </h1>
            {/* Descriptor tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                t('Latino', 'Latino'),
                t('Negocios', 'Business'),
                t('Comunidad', 'Community'),
                t('Plataforma', 'Platform'),
                'Jacksonville',
              ].map(tag => (
                <span key={tag} className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 text-white/60">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              {t(
                'Jax Unico reúne a emprendedores, profesionales, creadores y negocios latinos en Jacksonville. Conectamos oportunidades, promovemos marcas y ofrecemos herramientas de producción y marketing para acelerar el crecimiento de nuestra comunidad.',
                'Jax Unico brings together Latino entrepreneurs, professionals, creators and businesses in Jacksonville. We connect opportunities, promote brands and offer production and marketing tools to accelerate our community\'s growth.'
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
                    <img src="https://images.unsplash.com/photo-1595539724264-07da84f94c4e?w=600&q=80" alt="Jacksonville Skyline" className="img-cover"/>
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

      {/* LO QUE HACEMOS — Latest Episode + Latest Article */}
      <section className="py-14 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="badge mb-3">{t('El Show', 'The Show')}</div>
              <h2 className="font-['Inter'] font-black text-3xl sm:text-4xl text-[#1A1A1A] leading-tight tracking-tight">
                {t('Conversación', 'Most Recent')}<br/>
                <span className="text-[#C6002B]">{t('Más Reciente', 'Conversation')}</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-400 max-w-xs leading-relaxed sm:text-right">
              {t(
                'Una conversación que te educa sobre las oportunidades de la comunidad y tu negocio.',
                'A conversation that educates you about community opportunities and your business.'
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Latest Episode */}
            <div className="card overflow-hidden group">
              <div className="bg-[#1A1A1A] aspect-video relative overflow-hidden">
                {latestEpisode?.coverImage && (
                  <img src={latestEpisode.coverImage} alt={latestEpisode.title} className="img-cover opacity-60"/>
                )}
                {!latestEpisode?.coverImage && (
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80" alt="Episode" className="img-cover opacity-40"/>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#C6002B] animate-ping opacity-30"/>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#C6002B] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform relative z-10">
                      <Play size={22} className="text-white ml-1" fill="white"/>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="badge !bg-[#C6002B] !text-white text-xs">{t('Último Episodio', 'Latest Episode')}</span>
                </div>
                {latestEpisode && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-bold text-white/60 mb-1 uppercase tracking-widest">
                      EP. {String(latestEpisode.episodeNumber || 1).padStart(3,'0')} · {latestEpisode.duration || '45 min'}
                    </div>
                    <div className="font-['Inter'] font-black text-lg text-white leading-tight">{latestEpisode.title}</div>
                  </div>
                )}
                {!latestEpisode && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-['Inter'] font-black text-lg text-white">Tu Historia Merece Ser Escuchada</div>
                  </div>
                )}
              </div>
              <div className="p-5 sm:p-6 flex items-center justify-between">
                <div>
                  <div className="font-bold text-base text-[#1A1A1A]">{t('El Show de Jax Unico', 'The Jax Unico Show')}</div>
                  <div className="text-sm text-gray-400 flex items-center gap-1 mt-0.5">
                    <Mic size={12}/> {t('Podcast + Video', 'Podcast + Video')}
                  </div>
                </div>
                <Link href={latestEpisode?.slug ? `/el-show/${latestEpisode.slug}` : '/el-show'}
                  className="btn-primary !text-sm !py-2.5 !px-5">
                  {t('Ver', 'Watch')} <ArrowRight size={15}/>
                </Link>
              </div>
            </div>

            {/* Latest Article */}
            <div className="card overflow-hidden group">
              <div className="h-48 sm:h-56 relative overflow-hidden bg-gray-100">
                {latestArticle?.coverImage
                  ? <img src={latestArticle.coverImage} alt={latestArticle.title} className="img-cover group-hover:scale-105 transition-transform duration-500"/>
                  : <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="Blog" className="img-cover group-hover:scale-105 transition-transform duration-500"/>
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                <div className="absolute top-4 left-4">
                  <span className="badge !bg-white !text-[#C6002B] text-xs">{t('Último Artículo', 'Latest Article')}</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="badge mb-3 text-xs">{latestArticle?.category || 'Emprendimiento'}</div>
                <h3 className="font-['Inter'] font-black text-xl text-[#1A1A1A] mb-2 leading-tight line-clamp-2">
                  {latestArticle?.title || t('La Fuerza que Crece: Cómo la Comunidad Latina Transforma Jacksonville', 'The Growing Force: How the Latino Community Transforms Jacksonville')}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {latestArticle?.excerpt || t('Con más de 120,000 latinos, la comunidad latina de Jacksonville está transformando la economía de la ciudad.', 'With over 120,000 Latinos, Jacksonville\'s Latino community is transforming the city\'s economy.')}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock size={12}/> {latestArticle?.readTime || '2 min'}
                  </div>
                  <Link href={latestArticle?.slug ? `/blog/${latestArticle.slug}` : '/blog'}
                    className="text-[#C6002B] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    {t('Leer', 'Read')} <ArrowRight size={14}/>
                  </Link>
                </div>
              </div>
            </div>
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
            <div className="relative mt-8 lg:mt-0 flex justify-center">
              <div className="wiggle rounded-2xl overflow-hidden max-w-[280px] w-full shadow-2xl" style={{aspectRatio:'9/16'}}>
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src="/jaxunico-ads.mp4" type="video/mp4"/>
                </video>
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
                {t('Aplica Ahora — Es Gratis', "Apply Now — It's Free")} <ArrowRight size={18}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW — Producción de Clase Mundial */}
      <section className="py-14 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="badge mx-auto mb-5">Aguyb Studios</div>
            <h2 className="section-heading mb-4">
              {t('Lo Que Hacemos', 'What We Do')}
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
              {t('Show, podcast y publicidad — el ecosistema completo para tu marca.', 'Show, podcast and advertising — the complete ecosystem for your brand.')}
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
                  <h3 className="font-['Inter'] font-black text-xl tracking-tight text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <Link href="/servicios" className="text-sm font-bold text-[#C6002B] flex items-center gap-1 hover:gap-2 transition-all">
                    {t('Solicitar Información', 'Request Information')} <ChevronRight size={14}/>
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

      {/* ADVERTISE CTA — replaces manifesto */}
      <section className="py-16 sm:py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6002B] rounded-full blur-3xl"/>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mx-auto mb-6">
              {t('Anúnciate con Nosotros', 'Advertise With Us')}
            </div>
            <h2 className="font-['Inter'] font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight mb-4 uppercase">
              {t('Tu Marca Frente a', 'Your Brand in Front of')}<br/>
              <span className="text-[#C6002B]">+120,000 {t('Latinos', 'Latinos')}</span><br/>
              {t('en Jacksonville.', 'in Jacksonville.')}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              {t(
                'La audiencia más activa, más leal y más creciente de Jacksonville. Conecta tu marca con la comunidad que está transformando la ciudad.',
                'The most active, most loyal and fastest growing audience in Jacksonville. Connect your brand with the community transforming the city.'
              )}
            </p>
          </div>

          {/* Audience stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[
              { icon: <Users size={22}/>, stat: '+120,000', label: t('Latinos en Jacksonville', 'Latinos in Jacksonville'), sub: t('14% de la población total', '14% of total population') },
              { icon: <Globe size={22}/>, stat: '+10', label: t('Plataformas de distribución', 'Distribution platforms'), sub: t('Spotify, YouTube, Apple, iHeart...', 'Spotify, YouTube, Apple, iHeart...') },
              { icon: <BarChart2 size={22}/>, stat: '25–55', label: t('Años — audiencia core', 'Years old — core audience'), sub: t('Profesionales y emprendedores', 'Professionals and entrepreneurs') },
              { icon: <Megaphone size={22}/>, stat: '8', label: t('Episodios por mes', 'Episodes per month'), sub: t('Contenido fresco y constante', 'Fresh and consistent content') },
            ].map(item => (
              <div key={item.stat} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 hover:border-[#C6002B]/30 transition-all">
                <div className="w-10 h-10 bg-[#C6002B]/20 rounded-xl flex items-center justify-center text-[#C6002B] mx-auto mb-3">
                  {item.icon}
                </div>
                <div className="font-['Inter'] font-black text-3xl sm:text-4xl text-white mb-1">{item.stat}</div>
                <div className="font-bold text-sm text-white/80 mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Why advertise */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { title: t('Audiencia que Compra', 'An Audience that Buys'), desc: t('El poder adquisitivo latino en Florida supera los $100 mil millones anuales. Tu marca frente a quienes tienen el dinero y las ganas de gastar.', 'Latino purchasing power in Florida exceeds $100 billion annually. Your brand in front of those with the money and willingness to spend.') },
              { title: t('Confianza de Comunidad', 'Community Trust'), desc: t('El 71% de los latinos prefiere marcas recomendadas por medios de su comunidad. Jax Unico es esa voz de confianza en Jacksonville.', '71% of Latinos prefer brands recommended by community media. Jax Unico is that trusted voice in Jacksonville.') },
              { title: t('ROI Comprobado', 'Proven ROI'), desc: t('Los anuncios en podcast tienen un ROI promedio de 14:1. Integración orgánica en el show que no se siente publicidad — se siente recomendación.', 'Podcast ads have an average ROI of 14:1. Organic show integration that doesn\'t feel like advertising — it feels like a recommendation.') },
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C6002B]/30 transition-all">
                <div className="w-2 h-8 bg-[#C6002B] rounded-full mb-4"/>
                <h3 className="font-['Inter'] font-black text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/anuncia" className="btn-primary text-base px-8 py-4">
              {t('Ver Paquetes de Publicidad', 'See Advertising Packages')} <ArrowRight size={18}/>
            </Link>
            <Link href="/anuncia#contacto" className="border-2 border-white/20 text-white hover:border-white font-semibold px-8 py-4 rounded-2xl transition-all text-base inline-flex items-center gap-2">
              {t('Solicitar Media Kit', 'Request Media Kit')} <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
