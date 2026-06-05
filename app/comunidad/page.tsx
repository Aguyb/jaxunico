import Link from 'next/link'
import { Users, BookOpen, Calendar, ArrowRight, CheckCircle } from 'lucide-react'

const plans = [
  { name: 'Básico', subtitle: 'Listing', price: '$97', period: '/mes', includes: ['Listing en directorio', '1 IG Story feature/mes', 'Mención en newsletter'] },
  { name: 'Activo', subtitle: 'Visibilidad', price: '$297', period: '/mes', includes: ['Todo Básico', 'Post en redes/mes', 'Feature en website', '1 clip de podcast'] },
  { name: 'Líder', subtitle: 'Contenido', price: '$597', period: '/mes', includes: ['Todo Activo', '1 aparición en show/trimestre', '3 posts en redes', 'Feature en email'], popular: true },
  { name: 'Elite', subtitle: 'Full Media', price: '$997+', period: '/mes', includes: ['Gestión completa', 'Episodio + video', 'Redes + email', 'Invitación a eventos'] },
]

export default function ComunidadPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge mx-auto mb-6">Comunidad</div>
          <h1 className="section-heading max-w-3xl mx-auto mb-6">
            Un Espacio Para<br /><span className="text-[#C6002B]">Conectar,</span> Crecer<br />y Apoyarse.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">La comunidad más activa de emprendedores y profesionales latinos en Jacksonville.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="#membresias" className="btn-primary text-base px-8 py-4">Ver Membresías <ArrowRight size={18} /></Link>
            <Link href="#grupos" className="btn-outline text-base px-8 py-4">Unirme Gratis</Link>
          </div>
        </div>
      </section>

      {/* 3 reasons */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Networking Real', desc: 'Conecta con +500 emprendedores y profesionales latinos en Jacksonville.' },
              { icon: BookOpen, title: 'Recursos y Contenido', desc: 'Acceso exclusivo a episodios, artículos, guías y talleres para crecer.' },
              { icon: Calendar, title: 'Eventos Exclusivos', desc: 'Invitaciones prioritarias a eventos, summits y cenas VIP de la comunidad.' },
            ].map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="card p-8 border-t-4 border-t-[#C6002B]">
                  <div className="w-12 h-12 bg-[#C6002B]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#C6002B]" />
                  </div>
                  <h3 className="font-heading text-xl tracking-wide text-[#1A1A1A] mb-3">{r.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Membership plans */}
      <section id="membresias" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-6">Membresías</div>
            <h2 className="section-heading">Planes para Marcas Latinas</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`card p-6 flex flex-col ${plan.popular ? 'border-[#C6002B] border-2 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge text-[10px] whitespace-nowrap">Más Popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <div className="font-heading text-2xl tracking-wide text-[#1A1A1A]">{plan.name}</div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">{plan.subtitle}</div>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="font-heading text-4xl text-[#C6002B]">{plan.price}</span>
                    <span className="text-sm text-gray-400 font-mono pb-1">{plan.period}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2.5 mb-6">
                  {plan.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#C6002B] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/servicios#contacto" className={plan.popular ? 'btn-primary w-full justify-center text-sm' : 'btn-outline w-full justify-center text-sm'}>
                  Comenzar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groups */}
      <section id="grupos" className="py-20 bg-[#C6002B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-5xl text-white mb-4 uppercase">Únete en WhatsApp y Facebook</h2>
          <p className="text-white/80 mb-8">Conversaciones diarias, recursos, oportunidades y apoyo de la comunidad latina de Jacksonville.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="#" className="bg-white text-[#C6002B] font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              Grupo de WhatsApp <ArrowRight size={16} />
            </Link>
            <Link href="#" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              Grupo de Facebook <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
