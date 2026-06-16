import PageHero from '@/components/PageHero'
import { CheckCircle } from 'lucide-react'
import { getAllListings } from '@/lib/sanity.queries'
import DirectoryRegisterForm from '@/components/DirectoryRegisterForm'
import DirectoryClient from '@/components/DirectoryClient'

export const revalidate = 0

export const metadata = {
  title: 'Directorio de Negocios Latinos en Jacksonville, Florida',
  description: 'Directorio completo de negocios latinos en Jacksonville, FL.',
  alternates: { canonical: 'https://jaxunico.com/directorio' },
}

const staticListings = [
  { _id: 's1', businessName: 'Latino Grill Jacksonville', category: 'Restaurantes', zone: 'Riverside', rating: 4.9, phone: '(904) 555-0101', website: 'https://latinogrill.com', description: 'Auténtica cocina latina con sabores de toda América Latina.', coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
  { _id: 's2', businessName: 'Clínica Familiar Latino', category: 'Salud', zone: 'Southside', rating: 4.8, phone: '(904) 555-0102', website: 'https://clinicalatino.com', description: 'Atención médica bilingüe para toda la familia.', coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { _id: 's3', businessName: 'Real Estate Latino JAX', category: 'Bienes Raíces', zone: 'Downtown', rating: 4.7, phone: '(904) 555-0103', website: 'https://realestatejax.com', description: 'Tu agente de bienes raíces de confianza en Jacksonville.', coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
  { _id: 's4', businessName: 'Tech Latina Solutions', category: 'Tecnología', zone: 'Ponte Vedra', rating: 5.0, phone: '(904) 555-0104', website: 'https://techlatina.com', description: 'Soluciones tecnológicas para negocios latinos en crecimiento.', coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { _id: 's5', businessName: 'Salón Latina Beauty', category: 'Belleza', zone: 'Arlington', rating: 4.6, phone: '(904) 555-0105', website: 'https://latinabeauty.com', description: 'Estilismo, uñas y spa — belleza latina en su máxima expresión.', coverImage: 'https://images.unsplash.com/photo-1560066984-138daaa4c40b?w=600&q=80' },
  { _id: 's6', businessName: 'Asesoría Financiera Pro', category: 'Finanzas', zone: 'Mandarin', rating: 4.9, phone: '(904) 555-0106', website: 'https://finanzaspro.com', description: 'Planificación financiera y taxes para individuos y empresas.', coverImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80' },
]

export default async function DirectorioPage() {
  let listings: any[] = []
  try {
    const cmsListings = await getAllListings()
    // Merge: show CMS listings first, then fill with static if CMS is empty
    listings = cmsListings && cmsListings.length > 0
      ? cmsListings
      : staticListings
  } catch {
    listings = staticListings
  }

  return (
    <>
      <PageHero
        badge="Directorio Latino"
        badgeEn="Latino Directory"
        title="Encuentra, Apoya y"
        titleEn="Find, Support and"
        titleRed="Compra Latino en Jacksonville."
        titleRedEn="Buy Latino in Jacksonville."
        subtitle="El directorio completo de negocios latinos en Jacksonville."
        subtitleEn="The complete directory of Latino businesses in Jacksonville."
        imgSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80"
      />

      {/* Client component handles search + category filter + grid */}
      <DirectoryClient listings={listings} />

      {/* Register CTA */}
      <section className="py-14 sm:py-20 bg-[#C6002B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="text-white">
              <div className="badge !bg-white/20 !text-white border border-white/30 mb-6">Directorio Latino</div>
              <h2 className="font-['Inter'] font-black text-4xl sm:text-5xl text-white leading-none mb-6 uppercase tracking-tight">
                Registra tu<br/>Negocio<br/>Gratis
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">Llega a +120,000 latinos en Jacksonville.</p>
              {['Listing completo en el directorio', 'Feature en redes sociales', 'Mención en newsletter mensual', 'Conexión con la red latina de JAX'].map(item => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <CheckCircle size={18} className="text-white shrink-0"/>
                  <span className="text-base text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <DirectoryRegisterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
