'use client'
import { useState, useMemo } from 'react'
import { MapPin, Phone, Globe, Star, Search, X, Instagram } from 'lucide-react'
import { useLang } from '@/lib/lang'

const CATEGORIES = ['Todos', 'Restaurantes', 'Salud', 'Bienes Raíces', 'Finanzas', 'Legal', 'Belleza', 'Tecnología', 'Educación', 'Construcción', 'Otro']

interface Listing {
  _id: string
  businessName: string
  category: string
  zone?: string
  description?: string
  phone?: string
  website?: string
  instagram?: string
  rating?: number
  coverImage?: string
  featured?: boolean
}

export default function DirectoryClient({ listings }: { listings: Listing[] }) {
  const { t } = useLang()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = useMemo(() => {
    return listings.filter(biz => {
      const matchCategory = activeCategory === 'Todos' || biz.category === activeCategory
      const q = search.toLowerCase().trim()
      const matchSearch = !q || [
        biz.businessName,
        biz.category,
        biz.zone,
        biz.description,
      ].some(field => field?.toLowerCase().includes(q))
      return matchCategory && matchSearch
    })
  }, [listings, search, activeCategory])

  return (
    <>
      {/* Search bar */}
      <div className="bg-[#1A1A1A] pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('Buscar negocios, categorías, zonas...', 'Search businesses, categories, zones...')}
              className="w-full bg-white rounded-2xl pl-12 pr-12 py-4 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6002B] shadow-lg"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={18}/>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category pills — sticky */}
      <div className="bg-white border-b border-gray-100 sticky top-[65px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 text-sm font-bold px-4 py-2 rounded-full border-2 whitespace-nowrap transition-all
                  ${activeCategory === cat
                    ? 'bg-[#C6002B] text-white border-[#C6002B] shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#C6002B] hover:text-[#C6002B]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results header */}
      <section className="py-14 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <h2 className="font-['Inter'] font-black text-3xl sm:text-4xl tracking-tight text-[#1A1A1A]">
              {activeCategory === 'Todos'
                ? t('Todos los Negocios', 'All Businesses')
                : activeCategory}
              <span className="text-base font-semibold text-gray-400 ml-3 normal-case">
                {filtered.length} {t('negocio', 'business')}{filtered.length !== 1 ? 's' : ''}
              </span>
            </h2>
            {(search || activeCategory !== 'Todos') && (
              <button
                onClick={() => { setSearch(''); setActiveCategory('Todos') }}
                className="text-sm font-bold text-[#C6002B] flex items-center gap-1.5 hover:underline"
              >
                <X size={14}/> {t('Limpiar filtros', 'Clear filters')}
              </button>
            )}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-2">
                {t('No encontramos negocios', 'No businesses found')}
              </h3>
              <p className="text-gray-400 text-base mb-6">
                {t('Intenta con otra búsqueda o categoría.', 'Try a different search or category.')}
              </p>
              <button onClick={() => { setSearch(''); setActiveCategory('Todos') }}
                className="btn-primary">
                {t('Ver todos los negocios', 'See all businesses')}
              </button>
            </div>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((biz) => (
              <div key={biz._id} className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                {/* Cover image */}
                <div className="h-48 sm:h-52 overflow-hidden bg-gray-100 relative">
                  {biz.coverImage ? (
                    <img
                      src={biz.coverImage}
                      alt={biz.businessName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-gray-100 to-gray-200">
                      🏪
                    </div>
                  )}
                  {biz.featured && (
                    <div className="absolute top-3 left-3 badge-gold text-xs">⭐ Destacado</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="min-w-0">
                      <div className="badge !text-xs mb-2">{biz.category}</div>
                      <h3 className="font-['Inter'] font-black text-lg sm:text-xl text-[#1A1A1A] leading-tight">{biz.businessName}</h3>
                    </div>
                    {biz.rating && (
                      <div className="flex items-center gap-1 shrink-0">
                        <Star size={15} className="text-[#C9A84C] fill-[#C9A84C]"/>
                        <span className="font-bold text-base text-[#1A1A1A]">{biz.rating}</span>
                      </div>
                    )}
                  </div>

                  {biz.description && (
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{biz.description}</p>
                  )}

                  <div className="space-y-1.5 mb-4">
                    {biz.zone && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={14} className="text-[#C6002B] shrink-0"/>{biz.zone}, Jacksonville
                      </div>
                    )}
                    {biz.phone && (
                      <a href={`tel:${biz.phone}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#C6002B] transition-colors">
                        <Phone size={14} className="text-[#C6002B] shrink-0"/>{biz.phone}
                      </a>
                    )}
                    {biz.website && (
                      <a href={biz.website.startsWith('http') ? biz.website : `https://${biz.website}`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#C6002B] transition-colors">
                        <Globe size={14} className="text-[#C6002B] shrink-0"/>{biz.website.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                    {biz.instagram && (
                      <a href={`https://instagram.com/${biz.instagram.replace('@','')}`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#C6002B] transition-colors">
                        <Instagram size={14} className="text-[#C6002B] shrink-0"/>@{biz.instagram.replace('@','')}
                      </a>
                    )}
                  </div>

                  {(biz.phone || biz.website) && (
                    <a
                      href={biz.phone ? `tel:${biz.phone}` : biz.website}
                      className="btn-outline w-full justify-center !text-sm !py-2.5"
                    >
                      {t('Contactar', 'Contact')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
