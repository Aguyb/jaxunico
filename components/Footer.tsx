'use client'
import Link from 'next/link'
import { useLang } from '@/lib/lang'
import { Instagram, Youtube, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Red separator line */}
      <div className="h-1 bg-[#C6002B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/logo-dark.png"
                alt="Jax Unico"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              La única plataforma de medios latina en Jacksonville, Florida. Producida por Aguyb Studios.
            </p>
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/jaxunico', label: 'Instagram' },
                { icon: Youtube, href: 'https://www.youtube.com/@JaxUnico', label: 'YouTube' },
                { icon: Facebook, href: 'https://www.facebook.com/jaxunico', label: 'Facebook' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/130884015/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C6002B] transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@jax.unico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C6002B] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-heading text-base tracking-widest uppercase mb-5 text-white">Plataforma</h4>
            <ul className="space-y-3">
              {[
                ['El Show', '/el-show'],
                ['Episodios', '/el-show'],
                ['Directorio Latino', '/directorio'],
                ['Eventos', '/eventos'],
                ['Comunidad', '/comunidad'],
                ['Blog', '/blog'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-[#C6002B] transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-heading text-base tracking-widest uppercase mb-5 text-white">Empresa</h4>
            <ul className="space-y-3">
              {[
                ['Servicios', '/servicios'],
                ['Anuncia con Nosotros', '/anuncia'],
                ['Sé Invitado', '/el-show#aplicar'],
                ['Contacto', '/anuncia#contacto'],
                ['Newsletter — El Unico', '/comunidad#newsletter'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-[#C6002B] transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base tracking-widest uppercase mb-5 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C6002B] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Jacksonville, Florida, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C6002B] shrink-0" />
                <a href="mailto:hola@jaxunico.com" className="text-sm text-gray-400 hover:text-[#C6002B] transition-colors">
                  hola@jaxunico.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400 mb-3">Escucha el podcast en:</p>
              <div className="flex gap-2 flex-wrap">
                {['Spotify', 'Apple', 'YouTube', 'iHeart'].map((p) => (
                  <span key={p} className="text-xs bg-white/10 px-2 py-1 rounded-md font-mono text-gray-300">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-mono">
            © 2025 Aguyb Studios · jaxunico.com · Jacksonville, Florida
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-xs text-gray-500 hover:text-[#C6002B] transition-colors">Privacidad</Link>
            <Link href="/terminos" className="text-xs text-gray-500 hover:text-[#C6002B] transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
