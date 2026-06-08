import { getLatestEpisode, getNextEvent, getAllArticles } from '@/lib/sanity.queries'
import HomeClient from '@/components/HomeClient'

export default async function HomePage() {
  const [latestEpisode, nextEvent, articles] = await Promise.all([
    getLatestEpisode().catch(() => null),
    getNextEvent().catch(() => null),
    getAllArticles().catch(() => []),
  ])
  const latestArticle = articles?.[0] || null
  return <HomeClient latestEpisode={latestEpisode} nextEvent={nextEvent} latestArticle={latestArticle} />
}
