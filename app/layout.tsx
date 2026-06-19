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
  description: 'Jax Unico reúne a emprendedores, profesionales, creadores y negocios latinos en Jacksonville, Florida. Conectamos oportunidades, promovemos marcas y ofrecemos producción de video, podcast, marketing digital, directorio empresarial y eventos para acelerar el crecimiento de la comunidad latina.',
  keywords: [
    'plataforma latina Jacksonville',
    'Latino Jacksonville Florida',
    'podcast latino Jacksonville',
    'comunidad latina Jacksonville',
    'negocios latinos Jacksonville',
    'marketing latino Jacksonville',
    'producción de video Jacksonville',
    'video production Jacksonville',
    'content creation Jacksonville',
    'marketing agency Jacksonville',
    'Latino media Jacksonville',
    'Hispanic Jacksonville Florida',
    'coaching latino Jacksonville',
    'eventos latinos Jacksonville',
    'Latin events Jacksonville',
    'directorio latino Jacksonville',
    'Aguyb Studios Jacksonville',
    'Jax Unico',
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
    description: 'Podcast, video, marketing, eventos y directorio para la comunidad latina de Jacksonville. Somos tu plataforma.',
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
    description: 'Podcast, video, marketing y eventos para la comunidad latina de Jacksonville, Florida.',
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
      alternateName: 'Aguyb Studios',
      url: 'https://jaxunico.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jaxunico.com/logo.png',
      },
      description: 'La plataforma de medios latina #1 de Jacksonville, Florida. Podcast, video, marketing, eventos y directorio de negocios latinos.',
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
        'Content Marketing',
        'Latino Business',
        'Jacksonville Florida',
        'Hispanic Community',
        'Digital Marketing',
        'Event Production',
        'Business Coaching',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://jaxunico.com/#localbusiness',
      name: 'Jax Unico — Aguyb Studios',
      image: 'https://jaxunico.com/logo.png',
      url: 'https://jaxunico.com',
      telephone: '',
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
      servesCuisine: '',
      hasMap: 'https://maps.google.com/?q=Jacksonville,FL',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    },
    {
      '@type': 'PodcastSeries',
      '@id': 'https://jaxunico.com/el-show#podcast',
      name: 'El Show de Jax Unico',
      description: 'Conversaciones auténticas con líderes, emprendedores y creadores latinos de Jacksonville, Florida.',
      url: 'https://jaxunico.com/el-show',
      author: {
        '@type': 'Organization',
        name: 'Jax Unico',
      },
      inLanguage: ['es', 'en'],
      genre: ['Business', 'Latino Culture', 'Entrepreneurship', 'Community'],
      webFeed: 'https://jaxunico.com/blog/feed.xml',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jaxunico.com/#website',
      url: 'https://jaxunico.com',
      name: 'Jax Unico',
      description: 'La plataforma latina #1 de Jacksonville, Florida',
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
