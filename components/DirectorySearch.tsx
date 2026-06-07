'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function DirectorySearch() {
  const [query, setQuery] = useState('')
  return (
    <div className="max-w-2xl mx-auto flex gap-3">
      <div className="flex-1 flex items-center gap-3 bg-white rounded-2xl px-5 py-4">
        <Search size={22} className="text-gray-400 shrink-0"/>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}
          placeholder="Buscar negocios, servicios..."
          className="flex-1 text-lg font-medium focus:outline-none text-[#1A1A1A]"/>
      </div>
      <button className="btn-primary !text-lg !px-8">Buscar</button>
    </div>
  )
}
