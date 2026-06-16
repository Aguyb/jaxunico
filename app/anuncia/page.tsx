import { Metadata } from 'next'
import AnunciaClient from './AnunciaClient'

export const metadata: Metadata = {
  title: 'Promociona tu Marca — Publicidad para la Comunidad Latina de Jacksonville | Jax Unico',
  description: 'Conecta tu negocio con más de 120,000 latinos en Jacksonville a través de nuestro podcast, programas digitales, redes sociales, directorio empresarial y eventos presenciales. La plataforma de publicidad latina #1 de Jacksonville, FL.',
  keywords: [
    'publicidad mercado latino Jacksonville',
    'advertising Latino market Jacksonville FL',
    'Hispanic advertising Jacksonville Florida',
    'publicidad hispana Jacksonville',
    'sponsor podcast latino Jacksonville',
    'marketing comunidad latina Jacksonville',
    'anunciar negocio Jacksonville Latino',
    'publicidad en español Jacksonville FL',
    'Latino advertising Jacksonville Florida',
    'reach Hispanic market Jacksonville',
    'publicidad negocios latinos Jacksonville',
    'patrocinar evento latino Jacksonville',
    'sponsor comunidad latina Jacksonville',
    'advertising Hispanic community Jacksonville',
    'marketing hispano Jacksonville Florida',
  ],
  openGraph: {
    title: 'Promociona tu Marca — Publicidad Latino Jacksonville | Jax Unico',
    description: 'Conecta tu negocio con más de 120,000 latinos en Jacksonville. Podcast, redes sociales, directorio y eventos presenciales.',
    url: 'https://jaxunico.com/anuncia',
  },
  alternates: { canonical: 'https://jaxunico.com/anuncia' },
}

export default function AnunciaPage() {
  return <AnunciaClient />
}
