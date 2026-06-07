import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle, Star, Phone, Globe } from 'lucide-react'
import { getAllListings } from '@/lib/sanity.queries'
import DirectorySearch from '@/components/DirectorySearch'

const categories = ['Todos', 'Restaurantes', 'Salud', 'Bienes Raíces', 'Finanzas', 'Legal', 'Belleza', 'Tecnología', 'Educación', 'Construcción']

const staticListings = [
  { _id: '1', businessName: 'Latino Grill Jacksonville', category: 'Restaurantes', zone: 'Riverside', rating: 4.9, phone: '(904) 555-0101', website: 'latinogrill.com', description: 'Auténtica cocina latina con sabores de toda América Latina.', coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
  { _id: '2', businessName: 'Clínica Familiar Latino', category: 'Salud', zone: 'Southside', rating: 4.8, phone: '(904) 555-0102', website: 'clinicalatino.com', description: 'Atención médica bilingüe para toda la familia.', coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { _id: '3', businessName: 'Real Estate Latino JAX', category: 'Bienes Raíces', zone: 'Downtown', rating: 4.7, phone: '(904) 555-0103', website: 'realestatejax.com', description: 'Tu agente de bienes raíces de confianza en Jacksonville.', coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
  { _id: '4', businessName: 'Tech Latina Solutions', category: 'Tecnología', zone: 'Ponte Vedra', rating: 5.0, phone: '(904) 555-0104', website: 'techlatina.com', description: 'Soluciones tecnológicas para negocios latinos en crecimiento.', coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { _id: '5', businessName: 'Salón Latina Beauty', category: 'Belleza', zone: 'Arlington', rating: 4.6, phone: '(904) 555-0105', website: 'latinabeauty.com', description: 'Estilismo, uñas y spa — belleza latina en su máxima expresión.', coverImage: 'https://images.unsplash.com/photo-1560066984-138daaa4c40b?w=600&q=80' },
  { _id: '6', businessName: 'Asesoría Financiera Pro', category: 'Finanzas', zone: 'Mandarin', rating: 4.9, phone: '(904) 555-0106', website: 'finanzaspro.com', description: 'Planificación financiera y taxes para individuos y empresas.', coverImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80' },
]

export default async function DirectorioPage() {
  const cmsListings = await getAllListings().catch(() => [])
  const listings = cmsListings.length > 0 ? cmsListings : staticListings

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80" alt="Latino business" className="w-full h-full object-cover opacity-20"/>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 to-[#1A1A1A]"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mx-auto mb-6">Directorio Latino</div>
          <h1 className="font-['Inter'] font-black text-7xl lg:text-8xl text-white leading-none mb-6 uppercase tracking-tight">
            Encuentra, Apoya<br />y <span className="text-[#C6002B]">Compra Latino</span><br />en Jacksonville.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">El directorio completo de negocios latinos en Jacksonville.</p>
          <DirectorySearch />
        </div>
      </section>

      {/* Category pills */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((cat, i) => (
              <span key={cat} className={`shrink-0 text-base font-bold px-5 py-2.5 rounded-full border-2 cursor-pointer whitespace-nowrap transition-colors ${i === 0 ? 'bg-[#C6002B] text-white border-[#C6002B]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#C6002B] hover:text-[#C6002B]'}`}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Listings grid */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Inter'] font-black text-4xl tracking-tight text-[#1A1A1A] mb-10">
            Negocios Destacados
            <span className="text-base font-semibold text-gray-400 ml-4 normal-case tracking-normal">({listings.length} negocios)</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((biz: any) => (
              <div key={biz._id} className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-52 overflow-hidden">
                  <img src={biz.coverImage} alt={biz.businessName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="badge !text-xs mb-2">{biz.category}</div>
                      <h3 className="font-bold text-xl text-[#1A1A1A]">{biz.businessName}</h3>
                    </div>
                    {biz.rating && (
                      <div className="flex items-center gap-1 shrink-0">
                        <Star size={16} className="text-[#C9A84C] fill-[#C9A84C]"/>
                        <span className="font-bold text-lg text-[#1A1A1A]">{biz.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed mb-4">{biz.description}</p>
                  <div className="space-y-2 mb-5">
                    {biz.zone && <div className="flex items-center gap-2 text-base text-gray-500"><MapPin size={16} className="text-[#C6002B]"/>{biz.zone}, Jacksonville</div>}
                    {biz.phone && <div className="flex items-center gap-2 text-base text-gray-500"><Phone size={16} className="text-[#C6002B]"/>{biz.phone}</div>}
                    {biz.website && <div className="flex items-center gap-2 text-base text-gray-500"><Globe size={16} className="text-[#C6002B]"/>{biz.website}</div>}
                  </div>
                  <button className="btn-outline w-full justify-center !text-base !py-3">Ver Perfil</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-24 bg-[#C6002B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Inter'] font-black text-6xl text-white leading-none mb-6 uppercase tracking-tight">Registra tu<br/>Negocio Gratis</h2>
              <p className="text-xl text-white/80 leading-relaxed mb-6">Llega a +120,000 latinos en Jacksonville. Gratis. Sin complicaciones.</p>
              {['Listing completo en el directorio', 'Feature en redes sociales', 'Mención en newsletter mensual', 'Conexión con la red latina de JAX'].map(item => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <CheckCircle size={20} className="text-white shrink-0"/>
                  <span className="text-lg text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <form className="bg-white rounded-3xl p-8 space-y-4" action="https://formspree.io/f/mvznkywq" method="POST">
              <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-2">Registrar mi Negocio</h3>
              {['Nombre del negocio', 'Categoría', 'Dirección en Jacksonville', 'Teléfono', 'Sitio Web', 'Email de contacto'].map(f => (
                <input key={f} type="text" name={f.toLowerCase().replace(/ /g,'_')} placeholder={f}
                  className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B]"/>
              ))}
              <textarea name="descripcion" rows={3} placeholder="Descripción de tu negocio (2–3 oraciones)"
                className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-medium focus:outline-none focus:border-[#C6002B] resize-none"/>
              <button type="submit" className="btn-primary w-full justify-center text-xl">Registrar Gratis <ArrowRight size={20}/></button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
