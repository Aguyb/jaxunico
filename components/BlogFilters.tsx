'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

interface Post {
  _id: string
  slug: { current: string } | string
  title: string
  excerpt: string
  category: string
  readTime: string
  coverImage: string
}

interface BlogFiltersProps {
  categories: string[]
  posts: Post[]
}

export default function BlogFilters({ categories, posts }: BlogFiltersProps) {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos'
    ? posts
    : posts.filter(p => p.category === active)

  return (
    <>
      {/* Filter pills */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm font-bold px-5 py-2.5 rounded-full border-2 transition-all ${
              active === cat
                ? 'bg-[#C6002B] text-white border-[#C6002B]'
                : 'bg-white text-gray-500 border-gray-200 hover:border-[#C6002B] hover:text-[#C6002B]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-semibold">No hay artículos en esta categoría todavía.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((post) => {
            const slug = typeof post.slug === 'string' ? post.slug : post.slug?.current
            return (
              <Link key={post._id} href={`/blog/${slug}`}
                className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 sm:h-52 relative overflow-hidden bg-gray-100">
                  <img src={post.coverImage} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="badge !text-xs mb-3">{post.category}</span>
                  <h3 className="font-['Inter'] font-black text-lg text-[#1A1A1A] mb-2 leading-tight line-clamp-2 group-hover:text-[#C6002B] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12}/> {post.readTime}
                    </span>
                    <span className="text-sm font-bold text-[#C6002B] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer <ArrowRight size={14}/>
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
