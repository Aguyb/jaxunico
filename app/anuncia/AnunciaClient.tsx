'use client'
import Link from 'next/link'
import { useLang } from '@/lib/lang'
import { ArrowRight, CheckCircle, Play, Mail, Package, BarChart3 } from 'lucide-react'

const localPlans = [
  { name: 'Bronze', subtitle: 'Community Spot', includes: ['1x 30-seg mid-roll por episodio (8/mes)', 'IG Story mention 2x/mes', 'Logo en show notes'] },
  { name: 'Silver', subtitle: 'Local Leader', includes: ['2x 60-seg ad reads/episodio', '1 segmento branded en Reels/mes', 'Banner en website', 'Mención en email'] },
  { name: 'Gold', subtitle: 'Platform Partner', includes: ['Pre-roll + mid-roll en 8 episodios', 'Segmento branded en show', '4x IG Reels', 'Feature en email mensual', 'Logo en thumbnails'], popular: true },
  { name: 'Platinum', subtitle: 'Presenting Sponsor', includes: ['"Powered by [Marca]" en todos los episodios', 'Categoría exclusiva', '2 apariciones como guest/trimestre', 'Activación en eventos', 'Integración total en redes'] },
]

const nationalPlans = [
  { name: 'National Bronze', desc: '2x 30-seg ad reads/semana · Spotify + Apple + YouTube · Posts geo-targeted' },
  { name: 'National Silver', desc: 'Pre-roll + mid-roll todos los episodios · Segmento branded · Integración cross-platform' },
  { name: 'National Gold', desc: 'Todo Silver + host testimonial · Feature exclusivo en newsletter · Campaña trimestral' },
  { name: 'National Diamond', desc: 'Campaña custom · Serie co-branded · Partnership en eventos · Exclusividad de categoría' },
]

const channels = ['Podcast (Spotify)', 'Apple Podcasts', 'YouTube', 'iHeartRadio', 'Amazon Music', 'Instagram Reels', 'TikTok', 'Facebook', 'LinkedIn', 'Newsletter', 'Website', 'Backdrop Estudio', 'Eventos en vivo', 'YouTube Shorts']

export default function AnunciaClient() {
  const { t } = useLang()
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] py-14 sm:py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&q=80"
            alt="Advertising" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-6">Publicidad y Patrocinios</div>
            <h1 className="font-['Inter'] font-black tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-none tracking-wide text-white mb-8 uppercase">
              Llega a la<br />Comunidad<br />Latina Más<br /><span className="text-[#C6002B]">Activa de JAX.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Conecta tu marca con +120,000 latinos en Jacksonville a través del show, podcast, redes sociales y eventos en vivo.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#contacto" className="btn-primary text-xl px-5 py-3 sm:px-8 sm:py-4">Solicitar Media Kit <ArrowRight size={22}/></Link>
              <Link href="#paquetes" className="border-2 border-white/30 text-white hover:border-white font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-2xl transition-all text-xl inline-flex items-center gap-2">Ver Paquetes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#C6002B] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[['+120,000','Latinos en Jacksonville'],['+14','Canales de distribución'],['8','Episodios por mes'],['25–55','Rango de edad audiencia']].map(([v,l]) => (
              <div key={l}>
                <div className="font-['Inter'] font-black tracking-tight text-6xl">{v}</div>
                <div className="text-white/70 text-lg font-semibold mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWREEL VIDEO ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="badge mb-6">Nuestro Alcance</div>
              <h2 className="section-heading mb-6">
                Mira lo que<br /><span className="text-[#C6002B]">Producimos</span><br />para Marcas.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                Desde comerciales profesionales hasta segmentos del show, integraciones en redes y activaciones en vivo — hacemos que tu marca se vea y se sienta auténtica ante la comunidad latina.
              </p>
              <div className="space-y-4">
                {['Integración orgánica en el show — no se siente publicidad', 'Contenido bilingual que conecta culturalmente', 'Distribución simultánea en +14 canales', 'Reportes de ROI mensuales con métricas reales'].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={22} className="text-[#C6002B] shrink-0 mt-0.5" />
                    <span className="text-xl text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Showreel video player */}
            <div className="relative">
              <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden aspect-video flex items-center justify-center relative">
                <img src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=900&q=80"
                  alt="Showreel" className="img-cover opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-[#C6002B] animate-ping opacity-40" />
                    <div className="w-24 h-24 bg-[#C6002B] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform relative z-10 shadow-2xl">
                      <Play size={36} className="text-white ml-3" fill="white" />
                    </div>
                  </div>
                  <div className="font-['Inter'] font-black tracking-tight text-2xl text-white tracking-widest">VER SHOWREEL DE ADS</div>
                  <div className="text-gray-400 text-base mt-1">Próximamente disponible</div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#C9A84C] rounded-2xl px-6 py-4 shadow-xl wiggle">
                <div className="font-bold text-white text-xl">14:1</div>
                <div className="text-yellow-100 text-sm font-semibold">ROI promedio<br/>en podcast ads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Distribución</div>
            <h2 className="section-heading">+14 Canales<br /><span className="text-[#C6002B]">Simultáneos</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {channels.map(c => (
              <div key={c} className="card p-4 text-center hover:border-[#C6002B]/40 hover:-translate-y-1 transition-all">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C6002B] mx-auto mb-2" />
                <span className="text-base font-semibold text-gray-600">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Packages */}
      <section id="paquetes" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-6">Mercado Local</div>
            <h2 className="section-heading mb-4">Paquetes para<br /><span className="text-[#C6002B]">Jacksonville</span></h2>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">Contáctanos para recibir los precios y un media kit personalizado para tu negocio.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {localPlans.map(plan => (
              <div key={plan.name} className={`card p-7 flex flex-col ${plan.popular ? 'border-[#C6002B] border-2 relative' : ''}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="badge whitespace-nowrap">Más Popular</span></div>}
                <div className="mb-5">
                  <div className="font-['Inter'] font-black tracking-tight text-3xl tracking-wide text-[#1A1A1A]">{plan.name}</div>
                  <div className="text-base font-semibold text-gray-400">{plan.subtitle}</div>
                </div>
                <div className="flex-1 space-y-3 mb-6">
                  {plan.includes.map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#C6002B] shrink-0 mt-0.5" />
                      <span className="text-base text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="#contacto" className={plan.popular ? 'btn-primary w-full justify-center !text-base' : 'btn-outline w-full justify-center !text-base'}>
                  Solicitar Información <ArrowRight size={16}/>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            {[['3 meses','5% off'],['6 meses','10% off'],['12 meses','20% off']].map(([p,d]) => (
              <div key={p} className="badge-gold px-6 py-3 text-base">{p} — {d}</div>
            ))}
          </div>
        </div>
      </section>

      {/* National */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Marcas Nacionales</div>
            <h2 className="section-heading">Paquetes Nacionales</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {nationalPlans.map(plan => (
              <div key={plan.name} className="card p-7 hover:border-[#C6002B]/30 hover:-translate-y-1 transition-all">
                <h3 className="font-['Inter'] font-black tracking-tight text-2xl tracking-wide text-[#1A1A1A] mb-3">{plan.name}</h3>
                <p className="text-lg text-gray-500 mb-5">{plan.desc}</p>
                <Link href="#contacto" className="text-[#C6002B] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                  Solicitar Información <ArrowRight size={18}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#C6002B]/10 rounded-2xl flex items-center justify-center"><BarChart3 size={22} className="text-[#C6002B]"/></div>
                <h3 className="font-['Inter'] font-black tracking-tight text-3xl tracking-wide">Beneficios Digitales</h3>
              </div>
              {['Reporte mensual de ROI con métricas detalladas','Portal dedicado con capturas y estadísticas','Links UTM para trackear clicks exactos','Dashboard de impresiones por plataforma','Primer right of refusal al renovar'].map(item => (
                <div key={item} className="flex items-start gap-3 mb-4">
                  <CheckCircle size={20} className="text-[#C6002B] shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center"><Package size={22} className="text-[#C9A84C]"/></div>
                <h3 className="font-['Inter'] font-black tracking-tight text-3xl tracking-wide">Beneficios Físicos</h3>
              </div>
              {['Certificado enmarcado "Official Jax Unico Partner"','Merch de bienvenida de Aguyb Studios','Invitación a grabar como VIP guest','Logo en backdrop del estudio — en todos los videos','Inclusión en programas impresos de eventos'].map(item => (
                <div key={item} className="flex items-start gap-3 mb-4">
                  <CheckCircle size={20} className="text-[#C9A84C] shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 bg-[#C6002B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="font-['Inter'] font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6 uppercase">Tu Marca<br />Pertenece<br />Aquí.</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">Conversemos sobre cómo conectar tu marca con la comunidad latina más activa de Jacksonville.</p>
              <div className="flex items-center gap-3 mb-4">
                <Mail size={20} className="text-white shrink-0" />
                <span className="text-white/80 text-xl">sponsors@jaxunico.com</span>
              </div>
            </div>
            <form className="bg-white rounded-3xl p-5 sm:p-8 space-y-5" action="https://formspree.io/f/mzdqewjb" method="POST">
              {[
                ['Nombre y apellido', 'nombre', 'Tu nombre completo'],
                ['Empresa / Marca', 'empresa', 'Nombre de tu empresa'],
                ['Email de contacto', 'email', 'tu@email.com'],
                ['Teléfono', 'telefono', '(904) 000-0000'],
                ['Industria / Categoría', 'industria', 'Ej: Restaurantes, Salud, Legal...'],
              ].map(([label, name, placeholder]) => (
                <input key={name} type={name === 'email' ? 'email' : 'text'} name={name}
                  placeholder={placeholder} required={['nombre','email'].includes(name)}
                  className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B]" />
              ))}
              <select name="paquete" className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium text-gray-600 focus:outline-none focus:border-[#C6002B]">
                <option value="">Paquete de interés</option>
                {[...localPlans.map(p => p.name), ...nationalPlans.map(p => p.name)].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <textarea name="mensaje" rows={3} placeholder="Mensaje o presupuesto estimado (opcional)"
                className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B] resize-none" />
              <button type="submit" className="btn-primary w-full justify-center text-xl py-5">
                Solicitar Media Kit <ArrowRight size={22}/>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
