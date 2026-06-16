'use client'
import Link from 'next/link'
import { useLang } from '@/lib/lang'
import { Video, Mic, Play, Zap, Calendar, Star, ArrowRight, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const SERVICIOS_ENDPOINT = 'https://formspree.io/f/mlgkjvwq'

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

export default function ServiciosClient() {
  const { t } = useLang()
  return (
    <>
      {/* Hero — video background */}
      <section className="relative bg-[#1A1A1A] py-14 sm:py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src="/jaxunico-ads.mp4" type="video/mp4"/>
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-6">Aguyb Studios</div>
            <h1 className="font-['Inter'] font-black tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-none tracking-wide text-white mb-8 uppercase">
              Producción<br /><span className="text-[#C6002B]">Que Vende.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Producimos contenido visual, podcast y comerciales para marcas latinas en Jacksonville. Entendemos tu cultura y sabemos cómo llegar a tu audiencia.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#contacto" className="btn-primary text-xl px-5 py-3 sm:px-8 sm:py-4">Solicitar Propuesta <ArrowRight size={22}/></Link>
              <Link href="#servicios" className="border-2 border-white/30 text-white hover:border-white font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all text-xl inline-flex items-center gap-2">Ver Servicios</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Video Section */}
      <section className="bg-[#1A1A1A] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mx-auto mb-4">Aguyb Studios — Jax Unico</div>
            <h2 className="font-['Inter'] font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
              Así Se Ve la <span className="text-[#C6002B]">Calidad</span> que Producimos
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-sm" style={{aspectRatio:'9/16'}}>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="/jaxunico-ads.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            ¿Quieres un video así para tu negocio? <Link href="#contacto" className="text-[#C6002B] font-bold hover:underline">Solicita tu propuesta gratis →</Link>
          </p>
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
      <section id="servicios" className="py-14 sm:py-20 bg-white">
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
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-6">Hablemos</div>
              <h2 className="font-['Inter'] font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-none uppercase mb-6">
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
            <ContactForm
                endpoint={SERVICIOS_ENDPOINT}
                dark={true}
                fields={[
                  { label: 'Nombre completo', name: 'nombre', type: 'text', placeholder: 'Tu nombre', required: true },
                  { label: 'Negocio / Marca', name: 'negocio', type: 'text', placeholder: 'Tu empresa', required: true },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'tu@email.com', required: true },
                  { label: 'Teléfono', name: 'telefono', type: 'tel', placeholder: '(904) 000-0000' },
                ]}
                selectField={{ label: 'Servicio de Interés', name: 'servicio', options: services.map(s => `${s.num} — ${s.title}`) }}
                textareaField={{ label: 'Mensaje', name: 'mensaje', placeholder: 'Cuéntanos sobre tu proyecto...' }}
                submitLabel="Solicitar mi Propuesta"
                successTitle="¡Propuesta en Camino!"
                successMessage="Recibimos tu consulta. Te enviamos una propuesta personalizada en las próximas 24 horas."
              />
          </div>
        </div>
      </section>
    </>
  )
}
