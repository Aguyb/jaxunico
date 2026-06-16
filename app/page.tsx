import { Metadata } from 'next'
import { getLatestEpisode, getNextEvent, getAllArticles } from '@/lib/sanity.queries'
import HomeClient from '@/components/HomeClient'

export const revalidate = 0 // Always fetch fresh from Sanity

export const metadata: Metadata = {
  title: 'Jax Unico — Donde la Comunidad Latina Crece, Conecta y Prospera en Jacksonville, FL',
  description: 'Jax Unico reúne a emprendedores, profesionales, creadores y negocios latinos en Jacksonville. Podcast latino, producción de video, marketing digital, directorio de negocios hispanos y eventos. La plataforma latina #1 de Jacksonville, Florida.',
  keywords: [
    'plataforma latina Jacksonville',
    'comunidad latina Jacksonville Florida',
    'negocios latinos Jacksonville',
    'servicios latinos Jacksonville FL',
    'Latino Jacksonville Florida',
    'Hispanic Jacksonville FL',
    'podcast latino Jacksonville',
    'video production Jacksonville Latino',
    'marketing latino Jacksonville',
    'directorio negocios latinos Jacksonville',
    'eventos latinos Jacksonville',
    'emprendedores latinos Jacksonville',
    'agencia marketing hispano Jacksonville',
    'produccion video Jacksonville',
    'content creation Jacksonville FL',
    'coaching latino Jacksonville Florida',
    'publicidad mercado latino Jacksonville',
    'Latin media Jacksonville',
    'Hispanic business Jacksonville FL',
    'Jax Unico Jacksonville',
    'Aguyb Studios Jacksonville',
    'Latino entrepreneur Jacksonville',
    'servicios hispanos Jacksonville Florida',
    'comunidad hispana Jacksonville',
    'plataforma hispana Jacksonville FL',
  ],
  openGraph: {
    title: 'Jax Unico — Donde la Comunidad Latina Crece, Conecta y Prospera',
    description: 'Jax Unico reúne a emprendedores, profesionales y negocios latinos en Jacksonville. Podcast, video, marketing, directorio y eventos para la comunidad latina.',
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
