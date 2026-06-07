import { getAllEpisodes } from '@/lib/sanity.queries'
import { client } from '@/lib/sanity.client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Mic } from 'lucide-react'

async function getEpisodeBySlug(slug: string) {
  return client.fetch(`
    *[_type == "episode" && slug.current == $slug][0] {
      _id, title, episodeNumber, guest, guestTitle, youtubeId,
      duration, category, description, publishedAt, spotifyUrl, appleUrl,
      "coverImage": coverImage.asset->url,
    }
  `, { slug })
}

export async function generateStaticParams() {
  const episodes = await getAllEpisodes().catch(() => [])
  return episodes.map((e: any) => ({ slug: e.slug }))
}

export default async function EpisodePage({ params }: { params: { slug: string } }) {
  const episode = await getEpisodeBySlug(params.slug).catch(() => null)
  if (!episode) notFound()

  return (
    <>
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/el-show" className="inline-flex items-center gap-2 text-[#C6002B] font-bold text-base mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} /> Todos los episodios
          </Link>
          <div className="badge mb-5">{episode.category}</div>
          <div className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-3">
            EP. {String(episode.episodeNumber).padStart(3, '0')}
          </div>
          <h1 className="font-['Inter'] font-black text-5xl lg:text-6xl text-white leading-tight mb-4">
            {episode.title}
          </h1>
          {episode.guest && (
            <p className="text-xl text-gray-300 mb-2">
              Con <span className="text-[#C9A84C] font-bold">{episode.guest}</span>
              {episode.guestTitle && <span className="text-gray-400"> — {episode.guestTitle}</span>}
            </p>
          )}
          <div className="flex items-center gap-6 text-gray-400 font-semibold mt-4">
            {episode.duration && <span className="flex items-center gap-2"><Clock size={16} />{episode.duration}</span>}
            {episode.category && <span className="flex items-center gap-2"><Mic size={16} />{episode.category}</span>}
          </div>
        </div>
      </section>

      {/* YouTube Player */}
      {episode.youtubeId && (
        <section className="bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                title={episode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* Description + Listen links */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {episode.description && (
            <div className="mb-10">
              <h2 className="font-['Inter'] font-black text-3xl text-[#1A1A1A] mb-4">Sobre este episodio</h2>
              <p className="text-xl text-gray-500 leading-relaxed">{episode.description}</p>
            </div>
          )}
          <div>
            <h3 className="font-['Inter'] font-black text-2xl text-[#1A1A1A] mb-5">Escuchar en</h3>
            <div className="flex gap-4 flex-wrap">
              {episode.spotifyUrl && (
                <a href={episode.spotifyUrl} target="_blank" rel="noreferrer"
                  className="btn-primary !text-base !py-3">🎵 Spotify</a>
              )}
              {episode.appleUrl && (
                <a href={episode.appleUrl} target="_blank" rel="noreferrer"
                  className="btn-outline !text-base !py-3">🎙️ Apple Podcasts</a>
              )}
              {episode.youtubeId && (
                <a href={`https://youtube.com/watch?v=${episode.youtubeId}`} target="_blank" rel="noreferrer"
                  className="btn-outline !text-base !py-3">▶️ YouTube</a>
              )}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/el-show" className="inline-flex items-center gap-2 text-[#C6002B] font-bold text-lg hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Todos los episodios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
