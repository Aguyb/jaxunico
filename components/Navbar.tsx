'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'El Show', href: '/el-show' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Directorio', href: '/directorio' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Comunidad', href: '/comunidad' },
  { label: 'Blog', href: '/blog' },
  { label: 'Anuncia', href: '/anuncia' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 relative">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M20 15 L20 65 Q20 85 40 85 Q60 85 60 65 L60 55 L80 70 L80 15 Z" fill="url(#logoGrad)"/>
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C6002B"/>
                    <stop offset="100%" stopColor="#9B0020"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="font-heading text-xl tracking-widest text-[#1A1A1A] leading-none">JAXUNICO</div>
              <div className="text-[9px] font-mono text-gray-400 tracking-widest uppercase leading-none mt-0.5">La Plataforma Latina</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body font-medium text-gray-600 hover:text-[#C6002B] px-3 py-2 rounded-lg hover:bg-red-50 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/el-show#aplicar" className="btn-outline text-sm py-2">
              Sé Invitado
            </Link>
            <Link href="/anuncia" className="btn-primary text-sm py-2">
              Reserva una Llamada
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-body font-medium text-gray-700 hover:text-[#C6002B] px-4 py-3 rounded-xl hover:bg-red-50 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link href="/el-show#aplicar" className="btn-outline text-sm justify-center" onClick={() => setOpen(false)}>
              Sé Invitado
            </Link>
            <Link href="/anuncia" className="btn-primary text-sm justify-center" onClick={() => setOpen(false)}>
              Reserva una Llamada
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
