import Link from 'next/link'
import { Search, MapPin, ArrowRight, CheckCircle, Star } from 'lucide-react'

const categories = ['Todos', 'Restaurantes', 'Salud', 'Bienes Raíces', 'Finanzas', 'Legal', 'Belleza', 'Tecnología', 'Educación']

const businesses = [
  { name: 'Latino Grill Jacksonville', category: 'Restaurantes', zone: 'Riverside', rating: 4.9, reviews: 128 },
  { name: 'Clínica Familiar Latino', category: 'Salud', zone: 'Southside', rating: 4.8, reviews: 87 },
  { name: 'Real Estate Latino JAX', category: 'Bienes Raíces', zone: 'Downtown', rating: 4.7, reviews: 54 },
  { name: 'Asesoría Financiera Pro', category: 'Finanzas', zone: 'Mandarin', rating: 4.9, reviews: 43 },
  { name: 'Tech Latina Solutions', category: 'Tecnología', zone: 'Ponte Vedra', rating: 5.0, reviews: 22 },
  { name: 'Salón Latina Beauty', category: 'Belleza', zone: 'Arlington', rating: 4.6, reviews: 96 },
]

export default function DirectorioPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge mx-auto mb-6">Directorio Latino</div>
            <h1 className="section-heading mb-4">
              Encuentra, Apoya y<br /><span className="text-[#C6002B]">Compra Latino</span><br />en Jacksonville.
            </h1>
            <p className="text-gray-500 leading-relaxed">El directorio completo de negocios latinos en Jacksonville. Busca, conecta y apoya a tu comunidad.</p>
          </div>
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-3">
              <div className="flex-1 flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#C6002B] transition-colors">
                <Search size={18} className="text-gray-400 shrink-0" />
                <input type="text" placeholder="Buscar negocios, servicios, categorías..." className="flex-1 font-body text-sm focus:outline-none" />
              </div>
              <button className="btn-primary px-6">Buscar</button>
            </div>
            {/* Pills */}
            <div className="flex gap-2 flex-wrap mt-4">
              {categories.map((cat, i) => (
                <button key={cat} className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${i === 0 ? 'bg-[#C6002B] text-white border-[#C6002B]' : 'bg-white text-gray-500 border-gray-200 hover:border-[#C6002B] hover:text-[#C6002B]'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl tracking-wide text-[#1A1A1A] mb-6">Negocios Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((biz) => (
              <div key={biz.name} className="card p-6 hover:border-[#C6002B]/30 cursor-pointer">
                <div className="w-12 h-12 bg-[#C6002B]/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="font-heading text-xl text-[#C6002B]">{biz.name[0]}</span>
                </div>
                <div className="badge mb-3 text-[10px]">{biz.category}</div>
                <h3 className="font-body font-semibold text-[#1A1A1A] mb-2">{biz.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <MapPin size={12} /> {biz.zone}, Jacksonville
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-[#C9A84C] fill-[#C9A84C]" />
                  <span className="text-xs font-mono font-bold text-[#1A1A1A]">{biz.rating}</span>
                  <span className="text-xs text-gray-400">({biz.reviews} reseñas)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 bg-[#C6002B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-5xl text-white leading-none mb-4 uppercase">Registra tu Negocio Gratis</h2>
              <p className="text-white/80 leading-relaxed mb-6">Llega a +120,000 latinos en Jacksonville. Es gratis y tarda menos de 5 minutos.</p>
              {['Listing en el directorio', 'Feature en redes sociales', 'Mención en newsletter'].map((item) => (
                <div key={item} className="flex items-center gap-2 mb-2">
                  <CheckCircle size={14} className="text-white" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <form className="bg-white rounded-2xl p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              {['Nombre del negocio', 'Categoría', 'Email', 'Teléfono', 'Dirección', 'Sitio Web'].map((f) => (
                <input key={f} type="text" placeholder={f} className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C6002B]" />
              ))}
              <button type="submit" className="btn-primary w-full justify-center">
                Registrar mi Negocio <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
