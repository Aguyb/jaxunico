import { getAllEvents } from '@/lib/sanity.queries'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { TranslatedBtn, TranslatedH2, TranslatedP, TranslatedBadge } from '@/components/Translated'
import { Calendar, MapPin, Users, ArrowRight, Mic, Star, CheckCircle, Building2 } from 'lucide-react'


export const revalidate = 0 // Always fetch fresh from Sanity


export const metadata = {
  title: 'Eventos Latinos Jacksonville, FL — Networking, Coaching, Fotografía y Conferencias | Jax Unico',
  description: 'Eventos latinos en Jacksonville, Florida: Latin Business Summit, networking, coaching empresarial, talleres, conferencias y galas. Producción y fotografía de eventos corporativos y sociales para la comunidad hispana de Jacksonville, FL.',
  keywords: [
    'eventos latinos Jacksonville',
    'eventos hispanos Jacksonville FL',
    'Latin events Jacksonville Florida',
    'networking latino Jacksonville',
    'coaching latino Jacksonville FL',
    'Latin Business Summit Jacksonville',
    'talleres de negocios latinos Jacksonville',
    'conferencias latinas Jacksonville',
    'coaching events Jacksonville FL',
    'eventos corporativos Jacksonville',
    'eventos comunitarios Jacksonville FL',
    'fotografía de eventos Jacksonville',
    'event photography Jacksonville FL',
    'producción de eventos Jacksonville',
    'event production Jacksonville Florida',
    'gala latina Jacksonville',
    'summit latinx Jacksonville',
    'eventos empresariales hispanos Jacksonville',
    'networking Hispanic Jacksonville FL',
    'desarrollo de negocios eventos Jacksonville',
  ],
  openGraph: {
    title: 'Eventos Latinos Jacksonville | Networking, Coaching y Summit — Jax Unico',
    description: 'Eventos latinos en Jacksonville, FL: Latin Business Summit, networking, coaching, talleres y producción de eventos para la comunidad hispana. Fotografía y cobertura completa.',
    url: 'https://jaxunico.com/eventos',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Eventos Latinos Jacksonville — Jax Unico' }],
  },
  alternates: { canonical: 'https://jaxunico.com/eventos' },
}






const communityEvents = [
  { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', title: 'Festival Latino de Jacksonville', desc: 'Celebración de la cultura latina — música, comida, arte y familia.', date: 'Por confirmar', type: 'Festival' },
  { img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', title: 'Feria de Negocios Latinos', desc: 'Expositores locales, demos de productos y networking intenso.', date: 'Por confirmar', type: 'Feria' },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', title: 'Noche de Gala Latina', desc: 'Reconocimiento a líderes y emprendedores latinos de Jacksonville.', date: 'Por confirmar', type: 'Gala' },
]


export default function EventosPage() {
  return (
