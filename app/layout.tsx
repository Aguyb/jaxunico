import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Ticker from '@/components/Ticker'
import { LangProvider } from '@/lib/lang'
import WhatsAppButton from '@/components/WhatsAppButton'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://jaxunico.com'),
  title: {
    default: 'Jax Unico — Donde la Comunidad Latina Crece, Conecta y Prospera en Jacksonville, FL',
    template: '%s | Jax Unico Jacksonville',
  },
  description: 'Jax Unico es la plataforma latina #1 de Jacksonville, Florida. Producción de video, fotografía profesional, podcast en español, marketing digital, creación de contenido, manejo de redes sociales, directorio de negocios latinos, eventos y desarrollo de negocios para la comunidad hispana de Jacksonville, FL.',
  keywords: [
    // Core identity
    'Jax Unico',
    'Aguyb Studios Jacksonville',
    'plataforma latina Jacksonville',
    'medios latinos Jacksonville',
    'Latino media Jacksonville FL',
    'Hispanic media Jacksonville',
    // Community
    'comunidad latina Jacksonville',
    'comunidad hispana Jacksonville',
    'Latino Jacksonville Florida',
    'Hispanic Jacksonville Florida',
    'hispanos Jacksonville FL',
    'latinos Jacksonville FL',
    'Latino Jacksonville FL',
    'Hispanic community Jacksonville',
    // Video Production
    'producción de video Jacksonville',
    'video production Jacksonville FL',
    'videógrafo Jacksonville',
    'videographer Jacksonville Florida',
    'producción audiovisual Jacksonville',
    'filmación profesional Jacksonville',
    'video production company Jacksonville',
    'producción de comerciales Jacksonville',
    // Photography / Fotografía
    'fotografía Jacksonville',
    'photography Jacksonville FL',
    'fotógrafo Jacksonville',
    'photographer Jacksonville Florida',
    'fotografía de eventos Jacksonville',
    'event photography Jacksonville',
    'fotografía profesional Jacksonville',
    'fotografía de negocios Jacksonville',
    'business photography Jacksonville FL',
    'fotografía comercial Jacksonville',
    'sesión de fotos Jacksonville',
    // Digital Marketing
    'marketing digital Jacksonville',
    'digital marketing Jacksonville FL',
    'agencia de marketing Jacksonville',
    'marketing agency Jacksonville FL',
    'agencia de marketing latino Jacksonville',
    'Latino marketing agency Jacksonville FL',
    'Hispanic marketing agency Jacksonville',
    'marketing para negocios latinos Jacksonville',
    // Content Creation & Social Media
    'creación de contenido Jacksonville',
    'content creation Jacksonville FL',
    'redes sociales Jacksonville',
    'social media management Jacksonville',
    'manejo de redes sociales Jacksonville',
    'social media marketing Jacksonville',
    'creadores de contenido Jacksonville',
    'content creator Jacksonville FL',
    'Instagram marketing Jacksonville',
    'TikTok marketing Jacksonville',
    // Podcast
    'podcast latino Jacksonville',
    'podcast en español Jacksonville',
    'podcast hispano Jacksonville',
    'Spanish podcast Jacksonville Florida',
    'podcast empresarial latino',
    'El Show Jax Unico podcast',
    'Latino podcast Florida',
    'podcast negocios en español',
    // Business Development
    'desarrollo de negocios Jacksonville',
    'business development Jacksonville FL',
    'coaching empresarial Jacksonville',
    'business coaching Jacksonville FL',
    'coaching latino Jacksonville',
    'emprendedores latinos Jacksonville',
    'Latino entrepreneurs Jacksonville',
    'negocios hispanos Jacksonville',
    'small business Jacksonville FL Latino',
    // Events / Eventos
    'eventos latinos Jacksonville',
    'Latin events Jacksonville FL',
    'eventos corporativos Jacksonville',
    'eventos comunitarios Jacksonville',
    'networking latino Jacksonville',
    'Latin Business Summit Jacksonville',
    'event production Jacksonville FL',
    'eventos de negocios Jacksonville',
    'fotografía de eventos corporativos Jacksonville',
    // Business Directory
    'directorio de negocios latinos Jacksonville',
    'directorio hispano Jacksonville',
    'negocios latinos Jacksonville FL',
    'Hispanic businesses Jacksonville FL',
    'Latin-owned businesses Jacksonville',
    // General local
    'Jacksonville Florida Latino',
    'Jacksonville FL Hispanic',
    'latino Jacksonville',
  ],
  authors: [{ name: 'Aguyb Studios', url: 'https://jaxunico.com' }],
  creator: 'Aguyb Studios',
  publisher: 'Jax Unico',
  category: 'Media & Entertainment',
  openGraph: {
    type: 'website',
    locale: 'es_US',
    alternateLocale: 'en_US',
    url: 'https://jaxunico.com',
    siteName: 'Jax Unico',
    title: 'Jax Unico — La Plataforma Latina #1 de Jacksonville, Florida',
    description: 'Producción de video, fotografía, podcast en español, marketing digital, redes sociales, eventos y directorio de negocios latinos en Jacksonville, FL.',
    images: [{
      url: '/logo.png',
      width: 1200,
      height: 630,
      alt: 'Jax Unico — La Plataforma Latina de Jacksonville',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jax Unico — La Plataforma Latina de Jacksonville',
    description: 'Video, fotografía, podcast, marketing digital y eventos para la comunidad latina de Jacksonville, Florida.',
    images: ['/logo.png'],
    creator: '@jaxunico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jaxunico.com',
    types: {
      'application/rss+xml': 'https://jaxunico.com/blog/feed.xml',
    },
  },
  verification: {
    google: 'add-your-google-search-console-verification-here',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://jaxunico.com/#organization',
      name: 'Jax Unico',
      alternateName: ['Aguyb Studios', 'Jax Único', 'Jax Unico Jacksonville'],
      url: 'https://jaxunico.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jaxunico.com/logo.png',
      },
      description: 'La plataforma de medios latina #1 de Jacksonville, Florida. Producción de video profesional, fotografía, podcast en español, marketing digital, manejo de redes sociales, creación de contenido, directorio de negocios latinos y producción de eventos.',
      foundingDate: '2025',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Jacksonville',
        sameAs: 'https://en.wikipedia.org/wiki/Jacksonville,_Florida',
      },
      sameAs: [
        'https://www.instagram.com/jaxunico',
        'https://www.youtube.com/@jaxunico',
        'https://www.facebook.com/jaxunico',
        'https://open.spotify.com/show/jaxunico',
      ],
      knowsAbout: [
        'Latino Media',
        'Podcast Production',
        'Video Production',
        'Photography',
        'Event Photography',
        'Content Marketing',
        'Social Media Management',
        'Latino Business',
        'Jacksonville Florida',
        'Hispanic Community',
        'Digital Marketing',
        'Event Production',
        'Business Coaching',
        'Business Development',
        'Content Creation',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://jaxunico.com/#localbusiness',
      name: 'Jax Unico — Aguyb Studios',
      image: 'https://jaxunico.com/logo.png',
      url: 'https://jaxunico.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jacksonville',
        addressRegion: 'FL',
        postalCode: '32099',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.3322,
        longitude: -81.6557,
      },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      }],
      priceRange: '$$',
      hasMap: 'https://maps.google.com/?q=Jacksonville,FL',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      serviceType: [
        'Video Production',
        'Photography',
        'Podcast Production',
        'Digital Marketing',
        'Social Media Management',
        'Content Creation',
        'Event Production',
        'Business Coaching',
        'Business Directory',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Jax Unico',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Producción de Video Jacksonville', description: 'Video profesional, comerciales, reels y contenido audiovisual para negocios en Jacksonville, FL' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fotografía Jacksonville', description: 'Fotografía de eventos, negocios, retratos y fotografía comercial profesional en Jacksonville, Florida' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing Digital Jacksonville', description: 'Marketing digital, manejo de redes sociales e Instagram, TikTok y Facebook marketing para negocios latinos en Jacksonville' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Podcast Production Jacksonville', description: 'Producción de podcast en español y grabación de episodios en estudio para emprendedores latinos en Jacksonville' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creación de Contenido Jacksonville', description: 'Creación de contenido para redes sociales, blogs y plataformas digitales para negocios en Jacksonville, FL' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Producción de Eventos Jacksonville', description: 'Cobertura audiovisual, fotografía y producción completa de eventos corporativos y sociales en Jacksonville, Florida' } },
        ],
      },
    },
    {
      '@type': 'PodcastSeries',
      '@id': 'https://jaxunico.com/el-show#podcast',
      name: 'El Show de Jax Unico',
      description: 'El podcast latino #1 de Jacksonville, Florida. Conversaciones auténticas con líderes, emprendedores y creadores latinos. Disponible en Spotify, Apple Podcasts y YouTube.',
      url: 'https://jaxunico.com/el-show',
      author: {
        '@type': 'Organization',
        name: 'Jax Unico',
      },
      inLanguage: ['es', 'en'],
      genre: ['Business', 'Latino Culture', 'Entrepreneurship', 'Community', 'Digital Marketing'],
      webFeed: 'https://jaxunico.com/blog/feed.xml',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jaxunico.com/#website',
      url: 'https://jaxunico.com',
      name: 'Jax Unico',
      description: 'La plataforma latina #1 de Jacksonville, Florida — producción de video, fotografía, podcast, marketing digital, eventos y directorio de negocios latinos',
      inLanguage: ['es', 'en'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://jaxunico.com/directorio?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es Jax Unico?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jax Unico es la plataforma de medios latina #1 de Jacksonville, Florida. Ofrecemos producción de video, fotografía profesional, podcast en español (El Show), marketing digital, manejo de redes sociales, directorio de negocios latinos y producción de eventos para la comunidad hispana de Jacksonville, FL.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Dónde puedo encontrar negocios latinos en Jacksonville, Florida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En jaxunico.com/directorio encontrarás el directorio de negocios latinos más completo de Jacksonville, Florida. Incluye restaurantes, servicios, salud, legal, construcción y más negocios hispanos en Jacksonville.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Hay un podcast en español en Jacksonville, FL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El Show de Jax Unico es el podcast latino #1 de Jacksonville, Florida. Disponible en Spotify, Apple Podcasts y YouTube. Entrevistas a emprendedores, líderes y creadores de la comunidad latina de Jacksonville.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Quién hace producción de video en Jacksonville para negocios latinos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aguyb Studios / Jax Unico ofrece producción de video profesional en Jacksonville, Florida para negocios latinos e hispanos. Producimos comerciales, reels, contenido para redes sociales y cobertura de eventos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Dónde hay eventos latinos en Jacksonville, Florida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jax Unico organiza los eventos latinos más importantes de Jacksonville, FL: el Latin Business Summit, networking trimestral, talleres de negocios y eventos culturales. Consulta jaxunico.com/eventos para el calendario completo.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LangProvider>
          <Navbar />
          <Ticker />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LangProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2EE8CV2DY9" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2EE8CV2DY9');`}
        </Script>
      </body>
    </html>
  )
}
