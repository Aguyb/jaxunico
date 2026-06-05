import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Mail, Package } from 'lucide-react'

const localPlans = [
  { name: 'Bronze', subtitle: 'Community Spot', price: '$250', period: '/mes', includes: ['1x 30-seg mid-roll por episodio (8/mes)', 'IG Story mention 2x/mes', 'Logo en show notes'], popular: false },
  { name: 'Silver', subtitle: 'Local Leader', price: '$500', period: '/mes', includes: ['2x 60-seg ad reads/episodio', '1 segmento branded en Reels/mes', 'Banner en website', 'Mención en email'], popular: false },
  { name: 'Gold', subtitle: 'Platform Partner', price: '$1,000', period: '/mes', includes: ['Pre-roll + mid-roll en 8 episodios', 'Segmento branded en show', '4x IG Reels', 'Feature en email mensual', 'Logo en todos los thumbnails'], popular: true },
  { name: 'Platinum', subtitle: 'Presenting Sponsor', price: '$2,000', period: '/mes', includes: ['"Powered by [Marca]" en todos los episodios', 'Categoría exclusiva', '2 apariciones como guest/trimestre', 'Activación en eventos', 'Integración total en redes'], popular: false },
]

const nationalPlans = [
  { name: 'National Bronze', price: '$500/mes', desc: '2x 30-seg ad reads/semana · Spotify + Apple + YouTube · Posts geo-targeted' },
  { name: 'National Silver', price: '$1,500/mes', desc: 'Pre-roll + mid-roll todos los episodios · Segmento branded · Integración cross-platform' },
  { name: 'National Gold', price: '$3,000/mes', desc: 'Todo Silver + host testimonial · Feature exclusivo en newsletter · Campaña trimestral en todos los canales' },
  { name: 'National Diamond', price: '$5,000+/mes', desc: 'Campaña custom · Serie co-branded · Partnership en eventos · Exclusividad de categoría' },
]

const channels = ['Podcast (Spotify)', 'Apple Podcasts', 'YouTube', 'iHeartRadio', 'Amazon Music', 'Instagram Reels', 'TikTok', 'Facebook', 'LinkedIn', 'Newsletter El Unico', 'Website jaxunico.com', 'Backdrop en Estudio', 'Eventos en vivo', 'Shorts de YouTube']

export default function AnunciaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge mb-6">Publicidad & Patrocinios</div>
            <h1 className="section-heading mb-6">
              Llega a la Comunidad<br />Latina Más Activa<br />de <span className="text-[#C6002B]">Jacksonville.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">Conecta tu marca con +120,000 latinos en Jacksonville a través de la plataforma de medios más completa del mercado.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#contacto" className="btn-primary text-base px-8 py-4">Solicitar Media Kit <ArrowRight size={18} /></Link>
              <Link href="#paquetes" className="btn-outline text-base px-8 py-4">Ver Paquetes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#C6002B] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              ['+120,000', 'Latinos en Jacksonville'],
              ['+10', 'Plataformas de distribución'],
              ['8', 'Episodios por mes'],
              ['25–55', 'Audiencia años'],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="font-heading text-4xl">{val}</div>
                <div className="text-xs font-mono text-white/70 uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Distribución</div>
            <h2 className="section-heading">+10 Canales de Distribución</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {channels.map((c) => (
              <div key={c} className="card p-4 text-center hover:border-[#C6002B]/30">
                <div className="w-2 h-2 rounded-full bg-[#C6002B] mx-auto mb-2" />
                <span className="text-xs font-body font-medium text-gray-600">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Packages */}
      <section id="paquetes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-6">Mercado Local</div>
            <h2 className="section-heading">Paquetes para Jacksonville</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {localPlans.map((plan) => (
              <div key={plan.name} className={`card p-6 flex flex-col ${plan.popular ? 'border-[#C6002B] border-2 relative' : ''}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="badge text-[10px] whitespace-nowrap">Más Popular</span></div>}
                <div className="mb-4">
                  <div className="font-heading text-2xl tracking-wide text-[#1A1A1A]">{plan.name}</div>
                  <div className="text-xs font-mono text-gray-400">{plan.subtitle}</div>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-heading text-3xl text-[#C6002B]">{plan.price}</span>
                    <span className="text-sm text-gray-400 font-mono pb-0.5">{plan.period}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2 mb-6">
                  {plan.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-[#C6002B] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="#contacto" className={plan.popular ? 'btn-primary w-full justify-center text-sm' : 'btn-outline w-full justify-center text-sm'}>
                  Comenzar <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          {/* Discounts */}
          <div className="flex gap-4 justify-center flex-wrap">
            {[['3 meses', '5% off'], ['6 meses', '10% off'], ['12 meses', '20% off']].map(([period, disc]) => (
              <div key={period} className="badge-gold px-5 py-2 text-sm">{period} — {disc}</div>
            ))}
          </div>
        </div>
      </section>

      {/* National packages */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-6">Marcas Nacionales</div>
            <h2 className="section-heading">Paquetes Nacionales</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {nationalPlans.map((plan) => (
              <div key={plan.name} className="card p-6 hover:border-[#C6002B]/30">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-xl tracking-wide text-[#1A1A1A]">{plan.name}</h3>
                  <span className="font-mono text-sm font-bold text-[#C9A84C]">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-500">{plan.desc}</p>
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
                <BarChart3 size={20} className="text-[#C6002B]" />
                <h3 className="font-heading text-2xl tracking-wide">Beneficios Digitales</h3>
              </div>
              <div className="space-y-3">
                {['Reporte mensual de ROI con métricas detalladas', 'Portal dedicado con capturas y estadísticas', 'Links UTM para trackear clicks', 'Dashboard de impresiones por plataforma', 'Primer right of refusal al renovar'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C6002B] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Package size={20} className="text-[#C6002B]" />
                <h3 className="font-heading text-2xl tracking-wide">Beneficios Físicos</h3>
              </div>
              <div className="space-y-3">
                {['Certificado enmarcado "Official Jax Unico Partner"', 'Merch de bienvenida de Aguyb Studios', 'Invitación a grabar como VIP guest', 'Logo en backdrop del estudio (visible en todos los videos)', 'Inclusión en programas impresos de eventos'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contacto" className="py-20 bg-[#C6002B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-5xl text-white leading-none mb-4 uppercase">Tu Marca Pertenece Aquí.</h2>
              <p className="text-white/80 mb-6 leading-relaxed">Conversemos sobre cómo conectar tu marca con la comunidad latina más activa de Jacksonville.</p>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <span className="text-white/80 font-mono text-sm">sponsors@jaxunico.com</span>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              {['Nombre y apellido', 'Empresa / Marca', 'Email de contacto', 'Teléfono', 'Industria / Categoría'].map((f) => (
                <input key={f} type="text" placeholder={f} className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C6002B]" />
              ))}
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body text-gray-600 focus:outline-none focus:border-[#C6002B]">
                <option value="">Paquete de interés</option>
                {[...localPlans.map(p => p.name), ...nationalPlans.map(p => p.name)].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <textarea rows={3} placeholder="Mensaje (opcional)" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-[#C6002B] resize-none" />
              <button type="submit" className="btn-primary w-full justify-center">
                Solicitar Media Kit <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
