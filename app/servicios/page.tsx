'use client'
import Link from 'next/link'
import { Video, Mic, Play, Zap, Calendar, Star, ArrowRight, CheckCircle, Phone } from 'lucide-react'

const services = [
  {
    icon: Video, num: '01', title: 'Video Profesional', price: '$800/mes',
    desc: 'Producción mensual de contenido de video para redes sociales. Incluye grabación, edición y entrega de piezas listas para publicar.',
    includes: ['2–4 videos mensuales', 'Edición profesional', 'Captions y subtítulos', 'Formato para todas las redes', 'Revisión ilimitada'],
  },
  {
    icon: Mic, num: '02', title: 'Podcast Completo', price: '$1,500/mes',
    desc: 'Todo lo que necesitas para lanzar y mantener tu podcast. Desde la grabación semanal hasta la distribución en todas las plataformas.',
    includes: ['Grabación semanal en estudio', 'Edición de audio profesional', 'Distribución automática (+8 plataformas)', '3–5 clips para redes por episodio', 'Show notes y blog post'],
  },
  {
    icon: Play, num: '03', title: 'Comerciales', price: '$1,500',
    desc: 'Comerciales scripted de 30–90 segundos para TV, YouTube y redes digitales. Incluye guión, producción y edición final.',
    includes: ['Guión y dirección creativa', 'Grabación en estudio o locación', 'Edición y color grading', 'Formato TV y digital', 'Derechos totales del contenido'],
  },
  {
    icon: Zap, num: '04', title: 'Redes Sociales', price: '$600/mes',
    desc: '10–20 Reels, TikToks y YouTube Shorts por mes desde un solo día de grabación. Máximo contenido, mínima inversión de tiempo.',
    includes: ['1 día de grabación/mes', '10–20 piezas editadas', 'Captions optimizados', 'Hashtag strategy', 'Calendario de publicación'],
  },
  {
    icon: Calendar, num: '05', title: 'Cobertura de Eventos', price: '$1,000',
    desc: 'Cobertura multi-cámara de tu evento. Highlight reel, clips para redes, y video completo para archivo o distribución.',
    includes: ['2–3 cámaras en evento', 'Highlight reel (2–3 min)', '5–10 clips para redes', 'Fotos del evento', 'Entrega en 48 horas'],
  },
  {
    icon: Star, num: '06', title: 'Paquete Media Completo', price: '$3,000/mes',
    desc: 'La solución all-in-one para marcas que quieren presencia total. Podcast + video + redes + email + estrategia.',
    includes: ['Todo lo anterior incluido', 'Estrategia de contenido mensual', 'Email newsletter mensual', 'Reporte de métricas', 'Mención en Jax Unico Show'],
    featured: true,
  },
]

const steps = [
  { num: '01', title: 'Llamada Gratis', desc: 'Una llamada de 30 minutos para entender tu negocio y tus metas.' },
  { num: '02', title: 'Propuesta', desc: 'Recibís una propuesta personalizada con precios claros en 24 horas.' },
  { num: '03', title: 'Producción', desc: 'El equipo de Aguyb Studios entra en acción. Sin complicaciones.' },
  { num: '04', title: 'Entrega', desc: 'Contenido listo para publicar, con soporte continuo.' },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge mb-6">Aguyb Studios</div>
            <h1 className="section-heading mb-6">
              Producción de<br /><span className="text-[#C6002B]">Clase Mundial</span><br />Al Alcance de<br />tu Negocio.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
              Entendemos tu cultura, hablamos tu idioma y producimos contenido que conecta con tu audiencia latina.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#contacto" className="btn-primary text-base px-8 py-4">
                Reserva tu Llamada Gratis <ArrowRight size={18} />
              </Link>
              <Link href="#servicios" className="btn-outline text-base px-8 py-4">
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Band */}
      <section className="bg-[#C6002B] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            {[
              { title: 'La Brecha Digital', desc: 'Muchos negocios latinos no tienen acceso a producción de calidad. Eso cambia hoy.' },
              { title: 'Tu Cultura, Tu Voz', desc: 'Contenido que resuena con la comunidad latina porque lo hacemos desde adentro.' },
              { title: 'El Momento es Ahora', desc: 'El mercado latino en Jacksonville está creciendo. Tu presencia digital también debe crecer.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-xl tracking-wide mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Nuestros Servicios</h2>
            <p className="section-subheading mx-auto text-center">Precios transparentes. Sin sorpresas.</p>
          </div>
          <div className="space-y-8">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.num} className={`card p-8 ${s.featured ? 'border-[#C9A84C] border-2' : ''} ${i % 2 === 0 ? '' : ''}`}>
                  {s.featured && <div className="badge-gold mb-4">Más Popular — Todo Incluido</div>}
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#C6002B]/10 rounded-xl flex items-center justify-center">
                          <Icon size={22} className="text-[#C6002B]" />
                        </div>
                        <div>
                          <div className="font-mono text-xs text-gray-400">{s.num}</div>
                          <h3 className="font-heading text-2xl tracking-wide text-[#1A1A1A]">{s.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {s.includes.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-[#C6002B] shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="font-heading text-4xl text-[#C9A84C] tracking-wide mb-1">{s.price}</div>
                      <div className="text-xs font-mono text-gray-400 mb-6">por mes / por proyecto</div>
                      <Link href="#contacto" className={s.featured ? 'btn-primary w-full md:w-auto justify-center' : 'btn-outline w-full md:w-auto justify-center'}>
                        Empezar Ahora <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-6">Nuestro Proceso</div>
            <h2 className="section-heading">4 Pasos para Empezar</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-[#C6002B]/20" />
            {steps.map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-16 h-16 bg-[#C6002B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl text-white">{step.num}</span>
                </div>
                <h3 className="font-heading text-xl tracking-wide text-[#1A1A1A] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge mb-6">Primera Llamada Gratis</div>
              <h2 className="font-heading text-5xl text-white leading-none mb-4 uppercase">
                Tu Primera<br />Llamada<br />
                <span className="text-[#C6002B]">Es Gratis.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">Sin presión. Sin compromiso. Conversamos 30 minutos y vemos si somos el equipo correcto para tu marca.</p>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9A84C]" />
                <span className="text-gray-300 font-mono text-sm">hola@jaxunico.com</span>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
                { label: 'Negocio / Marca', type: 'text', placeholder: 'Nombre de tu empresa' },
                { label: 'Email', type: 'email', placeholder: 'tu@email.com' },
                { label: 'Teléfono', type: 'tel', placeholder: '(904) 000-0000' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-widest">{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:border-[#C6002B] transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-widest">Servicio de Interés</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-[#C6002B]">
                  <option value="" className="bg-[#1A1A1A]">Selecciona un servicio</option>
                  {services.map(s => <option key={s.title} value={s.title} className="bg-[#1A1A1A]">{s.title} — {s.price}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-widest">Mensaje</label>
                <textarea rows={3} placeholder="Cuéntanos sobre tu proyecto..." className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:border-[#C6002B] resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Enviar mi Consulta <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
