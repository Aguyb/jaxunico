'use client'
import { useState } from 'react'

export default function BlogFilters({ categories }: { categories: string[] }) {
  const [active, setActive] = useState('Todos')
  return (
    <div className="flex gap-3 flex-wrap mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`text-base font-bold px-5 py-2.5 rounded-full border-2 transition-colors ${
            active === cat
              ? 'bg-[#C6002B] text-white border-[#C6002B]'
              : 'bg-white text-gray-500 border-gray-200 hover:border-[#C6002B] hover:text-[#C6002B]'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
