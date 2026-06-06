'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'El Show', href: '/el-show' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Directorio', href: '/directorio' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Anuncia', href: '/anuncia' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M20 15 L20 65 Q20 85 40 85 Q60 85 60 65 L60 55 L80 70 L80 15 Z" fill="url(#ng)"/>
                <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C6002B"/><stop offset="100%" stopColor="#9B0020"/></linearGradient></defs>
              </svg>
            </div>
            <div>
              <div className="font-['Bebas_Neue'] text-2xl tracking-widest text-[#1A1A1A] leading-none">JAXUNICO</div>
              <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">La Plataforma Latina</div>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="text-base font-semibold text-gray-600 hover:text-[#C6002B] px-4 py-2 rounded-xl hover:bg-red-50 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/el-show#aplicar" className="btn-outline !py-2.5 !px-5 !text-base">Sé Invitado</Link>
            <Link href="/anuncia" className="btn-primary !py-2.5 !px-5 !text-base">Reserva una Llamada</Link>
          </div>
          <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100" onClick={() => setOpen(!open)}>
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-1">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-gray-700 hover:text-[#C6002B] px-4 py-3 rounded-xl hover:bg-red-50">
              {l.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link href="/el-show#aplicar" className="btn-outline justify-center" onClick={() => setOpen(false)}>Sé Invitado</Link>
            <Link href="/anuncia" className="btn-primary justify-center" onClick={() => setOpen(false)}>Reserva una Llamada</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
