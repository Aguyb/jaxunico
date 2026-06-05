'use client'
import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight, Mic, Star } from 'lucide-react'

const eventTypes = [
  { icon: Users, title: 'Networking Trimestral', desc: '50–100 personas. Mixer + episodio en vivo.', freq: 'Cada 3 meses', price: '$20–$40' },
  { icon: Star, title: 'Latin Business Summit', desc: 'Summit de medio día, 4–6 speakers, expo.', freq: 'Anual', price: '$75–$150' },
  { icon: Mic, title: 'Talleres de Coaching', desc: 'Experto invitado, 3–4 horas de formación.', freq: 'Mensual', price: '$47–$197' },
  { icon: Users, title: 'La Mesa — Paneles', desc: '3–5 invitados pasados en escena, Q&A.', freq: 'Bimensual', price: '$25–$50' },
  { icon: Star, title: 'Cenas VIP', desc: '10–20 líderes, mastermind íntimo.', freq: 'Trimestral', price: 'Invitación' },
]

export default function EventosPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6">Eventos</div>
              <h1 className="section-heading mb-6">
                Experiencias que<br /><span className="text-[#C6002B]">Conectan</span><br />a la Comunidad<br />Latina.
              </h1>
              <p className="text-gray-500 leading-relaxed mb-8">Eventos de networking, summits, talleres y paneles diseñados para la comunidad latina de Jacksonville.</p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#proximo" className="btn-primary text-base px-8 py-4">Ver Próximo Evento <ArrowRight size={18} /></Link>
                <Link href="#tipos" className="btn-outline text-base px-8 py-4">Tipos de Eventos</Link>
              </div>
            </div>
            {/* Next event card */}
            <div id="proximo" className="card p-8 border-[#C6002B] border-2">
              <div className="badge mb-4">Próximo Evento</div>
              <h2 className="font-heading text-3xl tracking-wide text-[#1A1A1A] mb-6">Jax Unico Networking Night</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-500"><Calendar size={16} className="text-[#C6002B]" /> Próximamente — 2025</div>
                <div className="flex items-center gap-3 text-sm text-gray-500"><MapPin size={16} className="text-[#C6002B]" /> Jacksonville, Florida</div>
                <div className="flex items-center gap-3 text-sm text-gray-500"><Users size={16} className="text-[#C6002B]" /> 50–100 personas · Networking + Episodio en vivo</div>
              </div>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Tu nombre" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-[#C6002B]" />
                <input type="email" placeholder="tu@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-[#C6002B]" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Me Interesa — Notifícame <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section id="tipos" className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Tipos de Eventos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((e) => {
              const Icon = e.icon
              return (
                <div key={e.title} className="card p-6 hover:border-[#C6002B]/30">
                  <div className="w-12 h-12 bg-[#C6002B]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#C6002B]" />
                  </div>
                  <h3 className="font-heading text-xl tracking-wide text-[#1A1A1A] mb-2">{e.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{e.desc}</p>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-400">{e.freq}</span>
                    <span className="text-[#C9A84C] font-bold">{e.price}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Produce your event */}
      <section className="py-20 bg-[#C6002B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-5xl text-white mb-4 uppercase">¿Tienes un Evento?<br />Nosotros lo Producimos.</h2>
          <p className="text-white/80 mb-8">Cobertura completa, producción de video, transmisión en vivo y más.</p>
          <Link href="/servicios#contacto" className="bg-white text-[#C6002B] font-semibold px-10 py-4 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
            Solicitar Cotización <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
