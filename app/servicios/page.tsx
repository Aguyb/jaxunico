import { Metadata } from 'next'
import ServiciosClient from './ServiciosClient'

export const metadata: Metadata = {
  title: 'Producción de Video, Content Creation y Marketing Latino — Jacksonville, FL',
  description: 'Producción de video profesional, content creation, podcast, redes sociales, comerciales y marketing digital para negocios en Jacksonville, Florida. Aguyb Studios — la agencia de contenido latina de Jacksonville.',
  keywords: [
    'producción de video Jacksonville',
    'video production Jacksonville FL',
    'content creation Jacksonville',
    'content creation company Jacksonville',
    'marketing digital latino Jacksonville',
    'podcast production Jacksonville',
    'social media marketing Jacksonville Florida',
    'comerciales video Jacksonville',
    'agencia de marketing Jacksonville',
    'Latino marketing agency Jacksonville FL',
    'video production company Jacksonville',
    'content marketing Jacksonville Florida',
    'Aguyb Studios Jacksonville',
    'produccion contenido Jacksonville',
  ],
  openGraph: {
    title: 'Video Production & Content Creation Jacksonville FL | Jax Unico',
    description: 'Professional video production, podcast, social media content and digital marketing for businesses in Jacksonville. Latino-owned production studio.',
    url: 'https://jaxunico.com/servicios',
  },
  alternates: { canonical: 'https://jaxunico.com/servicios' },
}

export default function ServiciosPage() {
  return <ServiciosClient />
}
