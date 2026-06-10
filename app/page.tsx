import { Metadata } from 'next'
import { getLatestEpisode, getNextEvent, getAllArticles } from '@/lib/sanity.queries'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Jax Unico — La Plataforma Latina #1 de Jacksonville, Florida',
  description: 'Jax Unico — plataforma latina de Jacksonville, FL. Podcast latino, producción de video, content creation, marketing digital, eventos latinos y directorio de negocios hispanos en Jacksonville. Aguyb Studios.',
  keywords: [
    'plataforma latina Jacksonville',
    'Latino platform Jacksonville Florida',
    'comunidad latina Jacksonville',
    'podcast latino Jacksonville',
    'video production Jacksonville',
    'content creation Jacksonville FL',
    'marketing latino Jacksonville',
    'eventos latinos Jacksonville',
    'coaching latino Jacksonville',
    'negocios latinos Jacksonville',
    'Hispanic media Jacksonville',
    'Latino media Jacksonville Florida',
    'Aguyb Studios Jacksonville',
    'Jax Unico Jacksonville',
    'latin jacksonville platform',
    'plataforma hispana Jacksonville',
    'produccion video Jacksonville FL',
  ],
  openGraph: {
    title: 'Jax Unico — La Plataforma Latina #1 de Jacksonville, Florida',
    description: 'Podcast, video, marketing, eventos y directorio para la comunidad latina de Jacksonville. Somos tu plataforma.',
    url: 'https://jaxunico.com',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Jax Unico Jacksonville' }],
  },
  alternates: { canonical: 'https://jaxunico.com' },
}

export default async function HomePage() {
  const [latestEpisode, nextEvent, articles] = await Promise.all([
    getLatestEpisode().catch(() => null),
    getNextEvent().catch(() => null),
    getAllArticles().catch(() => []),
  ])
  const latestArticle = articles?.[0] || null
  return <HomeClient latestEpisode={latestEpisode} nextEvent={nextEvent} latestArticle={latestArticle} />
}
