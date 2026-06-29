import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { TranslatedBtn, TranslatedH2, TranslatedP, TranslatedBadge } from '@/components/Translated'
import { Play, Mic, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { getAllEpisodes } from '@/lib/sanity.queries'
import GuestFormWrapper from '@/components/GuestFormWrapper'


export const revalidate = 0 // Always fetch fresh from Sanity


export const metadata = {
  title: 'El Show — Podcast Latino #1 de Jacksonville, FL | Jax Unico',
  description: 'El Show de Jax Unico: el podcast en español más importante de Jacksonville, Florida. Conversaciones con emprendedores, líderes y creadores latinos. Escúchalo en Spotify, Apple Podcasts y YouTube. Podcast de negocios, marketing, fotografía, video y desarrollo personal para la comunidad hispana de Jacksonville.',
  keywords: [
    'podcast latino Jacksonville',
    'podcast en español Jacksonville',
    'podcast hispano Jacksonville FL',
    'podcast Jacksonville Florida',
    'Latino podcast Florida',
    'Hispanic podcast Jacksonville',
    'Spanish podcast Jacksonville',
    'podcast emprendimiento Jacksonville',
    'podcast negocios en español',
    'podcast comunidad latina Jacksonville',
    'El Show Jax Unico',
    'podcast empresarial latino Florida',
    'emprendedores latinos Jacksonville podcast',
    'podcast marketing digital en español',
    'podcast Spotify en español Jacksonville',
    'podcast Apple Podcasts en español Jacksonville',
    'podcast YouTube en español Jacksonville',
    'podcast desarrollo personal latino',
    'podcast líderes hispanos Jacksonville',
    'podcast negocios Jacksonville FL',
  ],
  openGraph: {
    title: 'El Show de Jax Unico — Podcast Latino #1 de Jacksonville, FL',
    description: 'El podcast en español más importante de Jacksonville, Florida. Entrevistas con emprendedores, líderes y creadores de la comunidad latina. En Spotify, Apple Podcasts y YouTube.',
    url: 'https://jaxunico.com/el-show',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'El Show — Podcast Latino Jacksonville' }],
  },
  alternates: { canonical: 'https://jaxunico.com/el-show' },
}






const staticEpisodes = [
  { _id: '1', episodeNumber: 1, title: 'Tu Historia Merece Ser Escuchada', guest: 'Episodio de Lanzamiento', duration: '45 min', category: 'Emprendimiento', slug: { current: 'tu-historia-merece-ser-escuchada' }, coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80' },
  { _id: '2', episodeNumber: 2, title: 'Próximo episodio — disponible pronto', guest: '', duration: '—', category: 'Negocios', slug: { current: 'episodio-002' }, coverImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80' },
  { _id: '3', episodeNumber: 3, title: 'Próximo episodio — disponible pronto', guest: '', duration: '—', category: 'Comunidad', slug: { current: 'episodio-003' }, coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80' },
]


const categories = ['Todos', 'Negocios', 'Coaching', 'Arte', 'Comunidad', 'Salud', 'Emprendimiento']
