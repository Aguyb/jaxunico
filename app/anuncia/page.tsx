import { Metadata } from 'next'
import AnunciaClient from './AnunciaClient'

export const metadata: Metadata = {
  title: 'Publicidad y Advertising para el Mercado Latino de Jacksonville — Jax Unico',
  description: 'Llega a mas de 120,000 latinos en Jacksonville con publicidad en podcast, video, redes sociales y eventos. Advertising para el mercado hispano de Jacksonville, Florida.',
  keywords: [
    'publicidad mercado latino Jacksonville',
    'advertising Latino market Jacksonville',
    'Hispanic advertising Jacksonville FL',
    'publicidad hispana Jacksonville',
    'sponsor podcast latino Jacksonville',
    'marketing comunidad latina Jacksonville',
    'anunciar en Jacksonville',
    'publicidad en español Jacksonville',
    'Latino advertising Jacksonville Florida',
    'reach Hispanic market Jacksonville',
  ],
  openGraph: {
    title: 'Publicidad Latino Jacksonville — Llega a 120K Latinos | Jax Unico',
    description: 'Advertising para el mercado latino de Jacksonville. Podcast, video, redes sociales y eventos. Conecta tu marca con la comunidad.',
    url: 'https://jaxunico.com/anuncia',
  },
  alternates: { canonical: 'https://jaxunico.com/anuncia' },
}

export default function AnunciaPage() {
  return <AnunciaClient />
}
