'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LangToggle from './LangToggle'
import { useLang } from '@/lib/lang'

const navLinks = [
  { es: 'Inicio', en: 'Home', href: '/' },
  { es: 'El Show', en: 'The Show', href: '/el-show' },
  { es: 'Servicios', en: 'Services', href: '/servicios' },
  { es: 'Directorio', en: 'Directory', href: '/directorio' },
  { es: 'Eventos', en: 'Events', href: '/eventos' },
  { es: 'Blog', en: 'Blog', href: '/blog' },
  { es: 'Anuncia', en: 'Advertise', href: '/anuncia' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M20 15 L20 65 Q20 85 40 85 Q60 85 60 65 L60 55 L80 70 L80 15 Z" fill="url(#ng)"/>
                <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#C6002B"/><stop offset="100%" stopColor="#9B0020"/></linearGradient></defs>
              </svg>
            </div>
            <div>
              <div className="font-['Inter'] font-black text-lg sm:text-xl tracking-widest text-[#1A1A1A] leading-none">JAXUNICO</div>
              <div className="hidden sm:block text-[9px] font-bold text-gray-400 tracking-widest uppercase">La Plataforma Latina</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="text-sm font-semibold text-gray-600 hover:text-[#C6002B] px-3 py-2 rounded-xl hover:bg-red-50 transition-all whitespace-nowrap">
                {t(l.es, l.en)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden xl:flex items-center gap-2">
            <LangToggle />
            <Link href="/el-show#aplicar" className="btn-outline !py-2 !px-4 !text-sm">
              {t('Sé Invitado', 'Be a Guest')}
            </Link>
            <Link href="/anuncia" className="btn-primary !py-2 !px-4 !text-sm">
              {t('Reserva una Llamada', 'Book a Call')}
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex xl:hidden items-center gap-2">
            <LangToggle />
            <button className="p-2 rounded-xl hover:bg-gray-100" onClick={() => setOpen(!open)}>
              {open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden border-t bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-base font-semibold text-gray-700 hover:text-[#C6002B] px-4 py-3 rounded-xl hover:bg-red-50">
              {t(l.es, l.en)}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link href="/el-show#aplicar" className="btn-outline justify-center !text-base" onClick={() => setOpen(false)}>
              {t('Sé Invitado', 'Be a Guest')}
            </Link>
            <Link href="/anuncia" className="btn-primary justify-center !text-base" onClick={() => setOpen(false)}>
              {t('Reserva una Llamada', 'Book a Call')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
