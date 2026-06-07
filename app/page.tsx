import Link from 'next/link'
import { Play, ArrowRight, Mic, Video, CheckCircle, TrendingUp, Eye, Users, ChevronRight } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import { getLatestEpisode, getNextEvent } from '@/lib/sanity.queries'
import HomeClient from '@/components/HomeClient'

export default async function HomePage() {
  const [latestEpisode, nextEvent] = await Promise.all([
    getLatestEpisode().catch(() => null),
    getNextEvent().catch(() => null),
  ])
  return <HomeClient latestEpisode={latestEpisode} nextEvent={nextEvent} />
}
