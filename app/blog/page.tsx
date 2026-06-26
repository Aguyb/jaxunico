import Link from 'next/link'
import { ArrowRight, Clock, Mic, Play } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import { getAllArticles, getAllEpisodes } from '@/lib/sanity.queries'
import BlogFilters from '@/components/BlogFilters'
import { Metadata } from 'next'

export const revalidate = 0 // Always fetch fresh from Sanity

export const metadata: Metadata = {
  title: 'Blog — Jax Unico',
  description: 'Emprendimiento, marketing y comunidad para los latinos de Jacksonville.',
  alternates: {
    types: {
      'application/rss+xml': 'https://jaxunico.com/blog/feed.xml',
    },
  },
}

const categories = ['Todos', 'Emprendimiento', 'Marketing Digital', 'Historias de Comunidad', 'Eventos', 'Negocios Latinos', 'Producción']

const staticPosts = [
  { _id: '1', slug: { current: 'como-lanzar-tu-negocio-latino-en-jacksonville-2025' }, cat: 'Emprendimiento', category: 'Emprendimiento', title: 'Cómo Lanzar tu Negocio Latino en Jacksonville en 2025', excerpt: 'Una guía práctica paso a paso para emprendedores latinos que quieren establecerse en el mercado de Jacksonville.', readTime: '6 min', coverImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80' },
  { _id: '2', slug: { current: 'por-que-tu-negocio-necesita-un-podcast-2025' }, cat: 'Marketing Digital', category: 'Marketing Digital', title: 'Por Qué tu Negocio Necesita un Podcast en 2025', excerpt: 'El podcast sigue siendo el formato más efectivo para construir autoridad y comunidad.', readTime: '4 min', coverImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80' },
  { _id: '3', slug: { current: 'jacksonville-120000-latinos-su-voz' }, cat: 'Historias de Comunidad', category: 'Historias de Comunidad', title: 'Jacksonville tiene +120,000 Latinos: ¿Y su voz?', excerpt: 'Exploramos el crecimiento de la comunidad latina en Jacksonville.', readTime: '8 min', coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80' },
  { _id: '4', slug: { current: 'como-grabar-podcast-profesional' }, cat: 'Producción', category: 'Producción', title: 'Cómo Grabar un Podcast Profesional', excerpt: 'Equipo básico, configuración de audio y los errores más comunes a evitar.', readTime: '5 min', coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80' },
  { _id: '5', slug: { current: '5-razones-anunciar-medios-latinos' }, cat: 'Negocios Latinos', category: 'Negocios Latinos', title: '5 Razones para Anunciar en Medios Latinos', excerpt: 'El ROI de conectar con la comunidad latina supera al de los medios tradicionales.', readTime: '5 min', coverImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80' },
]


export default async function BlogPage() {
  // Fetch from Sanity — falls back to static data if CMS is empty
  const [cmsArticles, allEpisodes] = await Promise.all([
  getAllArticles().catch(() => []),
  getAllEpisodes().catch(() => []),
])
const latestEpisodes = allEpisodes.slice(0, 3)
  const posts = cmsArticles.length > 0 ? cmsArticles : staticPosts
  const featured = posts[0]
  const allPosts = posts // all posts passed to BlogFilters for filtering

  return (
    <>
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="badge mb-6">Blog</div>
            <h1 className="section-heading mb-4">
              Contenido que<br />Informa e<br /><span className="text-[#C6002B]">Inspira.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">Emprendimiento, marketing, producción y comunidad — para los latinos que construyen en Jacksonville.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* MAIN CONTENT */}
            <div className="lg:col-span-2">
              {/* Featured */}
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="card overflow-hidden mb-10 hover:-translate-y-1 transition-all duration-300 block">
                  <div className="h-72 overflow-hidden">
                    <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <div className="badge mb-4">Artículo Destacado</div>
                    <h2 className="font-['Inter'] font-black text-4xl tracking-tight text-[#1A1A1A] mb-4">{featured.title}</h2>
                    <p className="text-xl text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-base text-gray-400 font-semibold">
                        <Clock size={16} />{featured.readTime} lectura
                      </div>
                      <span className="text-lg font-bold text-[#C6002B] flex items-center gap-2">
                        Leer Artículo <ArrowRight size={18}/>
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Filters + Grid — client component handles filtering */}
              <BlogFilters categories={categories} posts={allPosts} />
            </div>

            {/* SIDEBAR */}
            <div className="space-y-8">
              {/* AD SPACE */}
              <div className="rounded-3xl overflow-hidden border-2 border-[#C9A84C]">
                <div className="bg-[#1A1A1A] p-6 text-center">
                  <div className="badge-gold mx-auto mb-3">Espacio Publicitario</div>
                  <h3 className="font-['Inter'] font-black text-3xl text-white mb-2">Tu Marca Aquí</h3>
                  <p className="text-gray-400 text-base mb-4">Llega a miles de emprendedores latinos de Jacksonville.</p>
                  <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-4 mb-5">
                    <div className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-2">Incluye</div>
                    {['Banner en blog', 'Mención en newsletter', 'Post en redes sociales'].map(item => (
                      <div key={item} className="text-sm text-gray-300 flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"/>{item}
                      </div>
                    ))}
                  </div>
                  <Link href="/anuncia" className="btn-primary w-full justify-center !text-base">Anunciar Aquí <ArrowRight size={16}/></Link>
                </div>
              </div>

              {/* Newsletter */}
              <NewsletterForm variant="sidebar" />

              {/* Categories */}
              <div className="card p-6">
                <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-5">Categorías</h3>
                <div className="space-y-2">
                  {categories.slice(1).map(cat => (
                    <div key={cat} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-red-50 transition-colors group cursor-pointer">
                      <span className="text-lg font-semibold text-gray-600 group-hover:text-[#C6002B]">{cat}</span>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-[#C6002B]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Ad spot 2 */}
              <div className="rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80" alt="Ad" className="w-full h-44 object-cover" />
                <div className="bg-[#1A1A1A] p-5 text-center">
                  <p className="text-gray-400 text-sm mb-3">¿Tu negocio aquí?</p>
                  <Link href="/anuncia" className="text-[#C6002B] font-bold text-base hover:underline">Ver opciones de publicidad →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST SUGGESTIONS */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="badge !bg-red-900/40 !text-red-300 border border-red-700/40 mb-4">Podcast</div>
              <h2 className="font-['Inter'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">Episodios que<br /><span className="text-[#C6002B]">No te Puedes Perder</span></h2>
            </div>
            <Link href="/el-show" className="hidden md:flex items-center gap-2 text-lg font-bold text-[#C6002B] hover:gap-3 transition-all">
              Ver todos <ArrowRight size={18}/>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestedEpisodes.map(ep => (
              <Link key={ep.num} href={`/el-show/${ep.slug}`} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 hover:border-[#C6002B]/40 transition-all cursor-pointer block">
                <div className="h-48 relative overflow-hidden">
                  <img src={ep.coverImage || 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80'} alt={ep.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#C6002B] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">EP. {String(ep.episodeNumber).padStart(3, '0')}</div>
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-[#C6002B] transition-colors">{ep.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-base">
                    <Mic size={14} className="text-[#C6002B]"/>{ep.duration}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
