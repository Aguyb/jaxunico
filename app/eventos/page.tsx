import { getAllEvents } from '@/lib/sanity.queries'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { TranslatedBtn, TranslatedH2, TranslatedP, TranslatedBadge } from '@/components/Translated'
import { Calendar, MapPin, Users, ArrowRight, Mic, Star, CheckCircle, Building2 } from 'lucide-react'

export const revalidate = 0 // Always fetch fresh from Sanity

export const metadata = {
  title: 'Eventos Latinos Jacksonville, FL — Networking, Coaching y Conferencias',
  description: 'Eventos, networking y coaching para la comunidad latina en Jacksonville, Florida. Latin Business Summit, talleres y conferencias. Coaching latino en Jacksonville.',
  keywords: ['eventos latinos Jacksonville',
    'Latin events Jacksonville FL',
    'networking latino Jacksonville',
    'coaching latino Jacksonville',
    'Latin Business Summit Jacksonville',
    'talleres latinos Jacksonville',
    'coaching events Jacksonville FL'],
  openGraph: {
    title: 'Eventos Latinos Jacksonville | Networking y Coaching — Jax Unico',
    description: 'Eventos, networking y coaching para la comunidad latina en Jacksonville, Florida. Latin Business Summit, talleres y conferencias. Coaching latino en J',
    url: 'https://jaxunico.com/eventos',
  },
  alternates: { canonical: 'https://jaxunico.com/eventos' },
}



const communityEvents = [
  { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', title: 'Festival Latino de Jacksonville', desc: 'Celebración de la cultura latina — música, comida, arte y familia.', date: 'Por confirmar', type: 'Festival' },
  { img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', title: 'Feria de Negocios Latinos', desc: 'Expositores locales, demos de productos y networking intenso.', date: 'Por confirmar', type: 'Feria' },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', title: 'Noche de Gala Latina', desc: 'Reconocimiento a líderes y emprendedores latinos de Jacksonville.', date: 'Por confirmar', type: 'Gala' },
]

export default function EventosPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Eventos"
        badgeEn="Events"
        title="Experiencias que"
        titleEn="Experiences that"
        titleRed="Conectan Nuestra Comunidad."
        titleRedEn="Connect Our Community."
        subtitle="Networking, summits, festivales y más — el calendario de la comunidad latina de Jacksonville."
        subtitleEn="Networking, summits, festivals and more — the Jacksonville Latino community calendar."
        cta="Nuestro Evento Anual"
        ctaEn="Our Annual Event"
        ctaHref="#anual"
        cta2="Ver Comunidad"
        cta2En="See Community"
        cta2Href="#comunidad"
        imgSrc="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80"
      />

      {/* ── ANNUAL EVENT ── */}
      <section id="anual" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <div className="badge-gold mb-6">Evento Anual</div>
              <h2 className="section-heading mb-6">
                Latin Business<br /><span className="text-[#C6002B]">Summit</span><br />Jacksonville
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-8">
                El evento más importante del año para la comunidad empresarial latina de Jacksonville. Speakers nacionales, expo de negocios, networking intenso y reconocimientos a líderes locales.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Calendar size={20}/>, text: 'Fecha por confirmar — 2025' },
                  { icon: <MapPin size={20}/>, text: 'Jacksonville, Florida' },
                  { icon: <Users size={20}/>, text: '200–400 asistentes esperados' },
                  { icon: <Mic size={20}/>, text: '4–6 speakers de alto nivel' },
                  { icon: <Star size={20}/>, text: 'Expo de negocios latinos + networking' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-4 text-lg text-gray-600">
                    <div className="text-[#C6002B]">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-400 italic">Regístrate ahora para recibir información prioritaria cuando abramos las inscripciones.</p>
            </div>

            {/* Registration form */}
            <div className="card p-10 border-2 border-[#C6002B]">
              <div className="badge mb-4">Únete a Nuestro Evento Anual</div>
              <h3 className="font-['Inter'] font-black tracking-tight text-4xl text-[#1A1A1A] mb-2">Regístrate y Mantente Informado</h3>
              <p className="text-lg text-gray-500 mb-8">Completa el formulario y serás el primero en saber la fecha, ubicación y cómo participar — como asistente, expositor o speaker.</p>
              <form className="space-y-5" action="https://formspree.io/f/mgobaqna" method="POST">
                {[
                  ['Nombre completo', 'nombre', 'text', 'Tu nombre'],
                  ['Empresa / Negocio', 'empresa', 'text', 'Nombre de tu empresa'],
                  ['Email', 'email', 'email', 'tu@email.com'],
                  ['Teléfono', 'telefono', 'tel', '(904) 000-0000'],
                  ['Ciudad / Zona de Jacksonville', 'zona', 'text', 'Riverside, Southside, etc.'],
                ].map(([label, name, type, ph]) => (
                  <div key={name}>
                    <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">{label}</label>
                    <input type={type} name={name} placeholder={ph} required={['nombre','email'].includes(name)}
                      className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B]" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">Industria / Expertise</label>
                  <select name="industria" className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B] text-gray-600">
                    <option value="">¿En qué área eres experto?</option>
                    {['Negocios y Emprendimiento', 'Salud y Bienestar', 'Tecnología', 'Finanzas e Inversiones', 'Bienes Raíces', 'Marketing y Medios', 'Arte y Entretenimiento', 'Educación', 'Legal', 'Construcción', 'Restaurantes y Gastronomía', 'Otro'].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">¿Cómo quieres participar?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Asistente', 'Expositor', 'Speaker / Panelista', 'Patrocinador'].map(opt => (
                      <label key={opt} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-[#C6002B] transition-colors">
                        <input type="checkbox" name="participacion" value={opt} className="w-5 h-5 accent-[#C6002B]" />
                        <span className="text-base font-semibold text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">Mensaje o pregunta (opcional)</label>
                  <textarea name="mensaje" rows={3} className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B] resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-xl py-5">
                  Quiero Participar — Notifícame <ArrowRight size={22}/>
                </button>
                <p className="text-center text-base text-gray-400">Te contactaremos cuando abramos inscripciones oficiales.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT TYPES ── */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-6">Formato de Eventos</div>
            <h2 className="section-heading">Tipos de Eventos<br /><span className="text-[#C6002B]">Jax Unico</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80', title: 'Networking Trimestral', desc: '50–100 personas. Mixer + episodio del show en vivo. Conecta con empresarios latinos.', freq: 'Cada 3 meses' },
              { img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80', title: 'Talleres de Coaching', desc: 'Expertos invitados ofrecen formación intensiva en negocios, marketing y liderazgo.', freq: 'Mensual' },
              { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', title: 'La Mesa — Paneles', desc: '3–5 invitados del show en escena. Q&A abierto, moderado y lleno de valor.', freq: 'Bimensual' },
              { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', title: 'Cenas VIP', desc: 'Mastermind íntimo con 10–20 líderes. Invitación exclusiva para top comunidad.', freq: 'Trimestral' },
              { img: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=600&q=80', title: 'Activaciones de Marca', desc: 'Co-producimos eventos para marcas patrocinadoras. Producción completa incluida.', freq: 'A demanda' },
            ].map(e => (
              <div key={e.title} className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={e.img} alt={e.title} className="img-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="badge-gold mb-3 !text-xs">{e.freq}</div>
                  <h3 className="font-['Inter'] font-black tracking-tight text-2xl tracking-wide text-[#1A1A1A] mb-2">{e.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY EVENTS ── */}
      <section id="comunidad" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-6">Comunidad</div>
            <h2 className="section-heading">Eventos de la<br /><span className="text-[#C6002B]">Comunidad Latina</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mt-4">Más allá de nuestros eventos propios, cubrimos y apoyamos toda la vida cultural y empresarial latina de Jacksonville.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {communityEvents.map(e => (
              <div key={e.title} className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 overflow-hidden relative">
                  <img src={e.img} alt={e.title} className="img-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="badge">{e.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#1A1A1A] mb-2">{e.title}</h3>
                  <p className="text-lg text-gray-500 mb-4 leading-relaxed">{e.desc}</p>
                  <div className="flex items-center gap-2 text-base text-gray-400">
                    <Calendar size={16} className="text-[#C6002B]" />
                    {e.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produce your event */}
      <section className="py-24 bg-[#C6002B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-['Inter'] font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white mb-4 uppercase">¿Tienes un Evento?<br />Nosotros lo Producimos.</div>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Cobertura multi-cámara, transmisión en vivo, edición y distribución. Producción completa de principio a fin.</p>
          <Link href="/servicios#contacto" className="btn-white text-xl px-5 py-3 sm:px-10 sm:py-5">
            Solicitar Producción <ArrowRight size={22}/>
          </Link>
        </div>
      </section>
    </>
  )
}
