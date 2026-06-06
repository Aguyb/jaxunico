'use client'
import Link from 'next/link'
import { Video, Mic, Play, Zap, Calendar, Star, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Video, num: '01', title: 'Producción de Video',
    img: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=800&q=80',
    desc: 'Creamos contenido de video profesional para tu marca — desde reels para redes sociales hasta brand films completos. Un día de grabación genera semanas de contenido.',
    why: 'El video genera 1,200% más shares que texto e imágenes combinados. Tu negocio necesita verse tan bueno como es.',
    includes: ['Videos de marca y producto', 'Reels y contenido para redes', 'Testimoniales de clientes', 'Behind the scenes'],
  },
  {
    icon: Mic, num: '02', title: 'Podcast Completo',
    img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    desc: 'Lanzamos y producimos tu podcast de principio a fin — grabación, edición, distribución y clips para redes. Tú solo llegas a grabar.',
    why: 'El podcast construye autoridad y comunidad como ningún otro formato. Tus clientes te escuchan en el auto, en el gym, en casa.',
    includes: ['Grabación semanal en estudio', 'Edición de audio broadcast-quality', 'Distribución en +8 plataformas', 'Clips y reels por episodio'],
  },
  {
    icon: Play, num: '03', title: 'Comerciales',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
    desc: 'Comerciales scripted de 30–90 segundos para TV local, YouTube y redes digitales. Desde el concepto hasta la pantalla.',
    why: 'Un comercial bien producido da credibilidad inmediata. La comunidad latina confía en marcas que invierten en verse profesionales.',
    includes: ['Concepto creativo y guión', 'Producción en estudio o locación', 'Edición y color grading', 'Formatos TV y digital'],
  },
  {
    icon: Zap, num: '04', title: 'Contenido para Redes',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    desc: '10–20 Reels, TikToks y Shorts por mes desde un solo día de grabación. Máxima presencia, mínima inversión de tiempo.',
    why: 'La consistencia gana en redes sociales. Una marca que publica 3–5 veces por semana crece 5x más rápido que una que publica una vez.',
    includes: ['1 día de grabación / mes', '10–20 piezas editadas', 'Captions y hashtags optimizados', 'Calendario editorial'],
  },
  {
    icon: Calendar, num: '05', title: 'Cobertura de Eventos',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    desc: 'Cobertura multi-cámara de tu evento — highlight reel, clips para redes y video completo para archivo o distribución.',
    why: 'Los eventos generan el contenido más auténtico y emocional. Captúralos profesionalmente y úsalos por meses.',
    includes: ['2–3 cámaras en evento', 'Highlight reel (2–3 min)', '5–10 clips para redes', 'Entrega en 48 horas'],
  },
  {
    icon: Star, num: '06', title: 'Paquete Media Completo',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    desc: 'La solución all-in-one para marcas que quieren presencia total y constante. Podcast + video + redes + email + estrategia — todo manejado por nuestro equipo.',
    why: 'Las marcas que dominan múltiples canales simultáneamente generan 287% más leads que las que usan un solo canal.',
    includes: ['Todo lo anterior incluido', 'Estrategia de contenido mensual', 'Email newsletter mensual', 'Reporte de resultados'],
    featured: true,
  },
]

const steps = [
  { num: '01', title: 'Llamada Gratis', desc: '30 minutos para entender tu negocio, tus metas y lo que necesitas.' },
  { num: '02', title: 'Propuesta', desc: 'Propuesta personalizada con alcance y precios claros en 24 horas.' },
  { num: '03', title: 'Producción', desc: 'El equipo de Aguyb Studios entra en acción. Sin complicaciones.' },
  { num: '04', title: 'Entrega', desc: 'Contenido listo para publicar, con soporte y reportes continuos.' },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&q=80"
            alt="Studio" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-6">Aguyb Studios</div>
            <h1 className="font-['Inter'] font-black tracking-tight text-7xl lg:text-[100px] leading-none tracking-wide text-white mb-8 uppercase">
              Producción<br /><span className="text-[#C6002B]">Que Vende.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Producimos contenido visual, podcast y comerciales para marcas latinas en Jacksonville. Entendemos tu cultura y sabemos cómo llegar a tu audiencia.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#contacto" className="btn-primary text-xl px-10 py-5">Solicitar Propuesta <ArrowRight size={22}/></Link>
              <Link href="#servicios" className="border-2 border-white/30 text-white hover:border-white font-semibold px-10 py-5 rounded-2xl transition-all text-xl inline-flex items-center gap-2">Ver Servicios</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why visual matters */}
      <section className="py-20 bg-[#C6002B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-white text-center">
            {[
              { stat: '1,200%', label: 'Más shares con video vs texto', desc: 'El contenido en video no es opcional — es el estándar.' },
              { stat: '81%', label: 'Investigan online antes de comprar', desc: 'Si no apareces online, estás perdiendo clientes cada día.' },
              { stat: '287%', label: 'Más leads con múltiples canales', desc: 'Podcast + video + redes = crecimiento exponencial.' },
            ].map(s => (
              <div key={s.stat}>
                <div className="font-['Inter'] font-black tracking-tight text-7xl mb-2">{s.stat}</div>
                <div className="font-bold text-xl mb-2">{s.label}</div>
                <div className="text-white/70 text-lg">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.num} className={`card overflow-hidden ${s.featured ? 'border-[#C9A84C] border-2' : ''}`}>
                {s.featured && <div className="bg-[#C9A84C] text-white text-center py-3 font-bold text-lg tracking-widest uppercase">⭐ La Solución Completa — Todo Incluido</div>}
                <div className={`grid lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`h-72 lg:h-auto overflow-hidden ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  {/* Content */}
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#C6002B]/10 rounded-2xl flex items-center justify-center">
                        <Icon size={26} className="text-[#C6002B]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-300 uppercase tracking-widest">{s.num}</div>
                        <h3 className="font-['Inter'] font-black tracking-tight text-4xl tracking-wide text-[#1A1A1A]">{s.title}</h3>
                      </div>
                    </div>
                    <p className="text-xl text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                    <div className="bg-[#F7F7F7] rounded-2xl p-5 mb-6">
                      <div className="text-sm font-bold text-[#C6002B] uppercase tracking-widest mb-2">¿Por qué importa?</div>
                      <p className="text-lg text-gray-600 leading-relaxed">{s.why}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {s.includes.map(item => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-[#C6002B] shrink-0 mt-0.5" />
                          <span className="text-base text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="#contacto" className={s.featured ? 'btn-primary text-xl' : 'btn-outline text-xl'}>
                      Solicitar Información <ArrowRight size={20}/>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4 Pasos */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-6">Proceso</div>
            <h2 className="section-heading">4 Pasos Para Empezar</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center group">
                <div className="w-20 h-20 bg-[#C6002B] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-900/20">
                  <span className="font-['Inter'] font-black tracking-tight text-3xl text-white">{step.num}</span>
                </div>
                {i < 3 && <div className="hidden md:block absolute mt-10 ml-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-[#C6002B]/20" />}
                <h3 className="font-['Inter'] font-black tracking-tight text-2xl tracking-wide text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contacto" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-6">Hablemos</div>
              <h2 className="font-['Inter'] font-black tracking-tight text-6xl text-white leading-none uppercase mb-6">
                Tu Primera<br />Llamada<br /><span className="text-[#C6002B]">Es Gratis.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">Sin presión. Sin compromiso. 30 minutos para ver si somos el equipo correcto para tu marca.</p>
              <div className="space-y-4">
                {['Propuesta personalizada en 24 horas','Precios transparentes sin sorpresas','Equipo bilingüe que entiende tu mercado'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={22} className="text-[#C9A84C] shrink-0" />
                    <span className="text-xl text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              {[['Nombre completo','text','Tu nombre'],['Negocio / Marca','text','Tu empresa'],['Email','email','tu@email.com'],['Teléfono','tel','(904) 000-0000']].map(([label,type,ph]) => (
                <div key={label}>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">{label}</label>
                  <input type={type} placeholder={ph} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-[#C6002B]" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Servicio de Interés</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-lg focus:outline-none focus:border-[#C6002B]">
                  <option value="" className="bg-[#1A1A1A]">Selecciona un servicio</option>
                  {services.map(s => <option key={s.title} value={s.title} className="bg-[#1A1A1A]">{s.num} — {s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Mensaje</label>
                <textarea rows={3} placeholder="Cuéntanos sobre tu proyecto..." className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-[#C6002B] resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-xl py-5">
                Solicitar mi Propuesta <ArrowRight size={22}/>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
