import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const categories = ['Todos', 'Emprendimiento', 'Marketing Digital', 'Historias de Comunidad', 'Eventos', 'Negocios Latinos', 'Producción']

const posts = [
  { cat: 'Emprendimiento', title: 'Cómo Lanzar tu Negocio Latino en Jacksonville en 2025', excerpt: 'Una guía práctica paso a paso para emprendedores latinos que quieren establecerse en el mercado de Jacksonville.', readTime: '6 min', date: 'Próximamente' },
  { cat: 'Marketing Digital', title: 'Por Qué tu Negocio Necesita un Podcast en 2025', excerpt: 'El podcast sigue siendo el formato más efectivo para construir autoridad y comunidad. Aquí te explicamos cómo empezar.', readTime: '4 min', date: 'Próximamente' },
  { cat: 'Historias de Comunidad', title: 'Jacksonville tiene +120,000 Latinos: ¿Y su voz?', excerpt: 'Exploramos el crecimiento de la comunidad latina en Jacksonville y la ausencia de plataformas mediáticas que los representen.', readTime: '8 min', date: 'Próximamente' },
  { cat: 'Producción', title: 'Cómo Grabar un Podcast Profesional desde Casa', excerpt: 'Equipo básico, configuración de audio y los errores más comunes a evitar cuando empezás tu podcast.', readTime: '5 min', date: 'Próximamente' },
  { cat: 'Negocios Latinos', title: '5 Razones para Anunciar en Medios Latinos de Jacksonville', excerpt: 'El ROI de conectar con la comunidad latina supera al de los medios tradicionales. Los datos lo confirman.', readTime: '5 min', date: 'Próximamente' },
  { cat: 'Eventos', title: 'Recap: Primer Networking Latino de Jacksonville', excerpt: 'Lo que pasó en nuestro primer evento de networking y por qué fue el comienzo de algo grande para la comunidad.', readTime: '3 min', date: 'Próximamente' },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="badge mb-6">Blog</div>
            <h1 className="section-heading mb-4">Contenido que Informa,<br /><span className="text-[#C6002B]">Inspira</span> y Hace<br />Crecer tu Negocio.</h1>
            <p className="text-gray-500 leading-relaxed">Artículos sobre emprendimiento latino, marketing digital y comunidad en Jacksonville.</p>
          </div>

          {/* Featured */}
          <div className="card p-0 overflow-hidden mb-12 hover:border-[#C6002B]/30">
            <div className="grid lg:grid-cols-2">
              <div className="bg-[#1A1A1A] aspect-video lg:aspect-auto flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="font-heading text-6xl text-[#C6002B] mb-2">JAX</div>
                  <div className="font-heading text-4xl text-white">UNICO</div>
                  <div className="font-mono text-xs text-gray-400 mt-2">BLOG</div>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="badge mb-4">Artículo Destacado</div>
                <h2 className="font-heading text-3xl tracking-wide text-[#1A1A1A] mb-4">{posts[0].title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Clock size={12} /> {posts[0].readTime}
                  </div>
                  <Link href="#" className="text-sm font-semibold text-[#C6002B] flex items-center gap-1 hover:gap-2 transition-all">
                    Leer Artículo <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat, i) => (
              <button key={cat} className={`text-xs font-mono px-4 py-2 rounded-full border transition-colors ${i === 0 ? 'bg-[#C6002B] text-white border-[#C6002B]' : 'bg-white text-gray-500 border-gray-200 hover:border-[#C6002B] hover:text-[#C6002B]'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div key={post.title} className="card p-6 hover:border-[#C6002B]/30 cursor-pointer group">
                <div className="h-40 bg-[#F7F7F7] rounded-xl mb-4 flex items-center justify-center">
                  <span className="font-heading text-4xl text-[#C6002B]/20">JU</span>
                </div>
                <span className="badge text-[10px] mb-3">{post.cat}</span>
                <h3 className="font-body font-semibold text-[#1A1A1A] mb-2 line-clamp-2 group-hover:text-[#C6002B] transition-colors">{post.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  <span className="text-xs font-semibold text-[#C6002B] flex items-center gap-1">Leer <ArrowRight size={12} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
