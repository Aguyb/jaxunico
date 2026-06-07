import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Ticker from '@/components/Ticker'
import { LangProvider } from '@/lib/lang'

export const metadata: Metadata = {
  title: 'Jax Unico — La Plataforma Latina de Jacksonville',
  description: 'La única plataforma de medios latina en Jacksonville, Florida. Conectamos, promovemos y producimos contenido para la comunidad latina.',
  alternates: {
    types: {
      'application/rss+xml': 'https://jaxunico.com/blog/feed.xml',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LangProvider>
          <Navbar />
          <Ticker />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
