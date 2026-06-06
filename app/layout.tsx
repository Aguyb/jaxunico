import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Ticker from '@/components/Ticker'

export const metadata: Metadata = {
  title: 'Jax Unico — La Plataforma Latina de Jacksonville',
  description: 'La única plataforma de medios latina en Jacksonville, Florida. Conectamos, promovemos y producimos contenido para la comunidad latina.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <Ticker />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
