'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/lib/lang'

interface PageHeroProps {
  badge?: string
  badgeEn?: string
  title: string
  titleEn: string
  titleRed?: string
  titleRedEn?: string
  subtitle?: string
  subtitleEn?: string
  cta?: string
  ctaEn?: string
  ctaHref?: string
  cta2?: string
  cta2En?: string
  cta2Href?: string
  dark?: boolean
  imgSrc?: string
}

export default function PageHero({
  badge, badgeEn, title, titleEn, titleRed, titleRedEn,
  subtitle, subtitleEn, cta, ctaEn, ctaHref,
  cta2, cta2En, cta2Href, dark = true, imgSrc
}: PageHeroProps) {
  const { t } = useLang()

  return (
    <section className={`relative ${dark ? 'bg-[#1A1A1A]' : 'bg-white'} py-20 lg:py-28 overflow-hidden`}>
      {imgSrc && (
        <div className="absolute inset-0">
          <img src={imgSrc} alt="" className="w-full h-full object-cover opacity-20"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent"/>
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {badge && (
            <div className={`badge mb-6 ${dark ? '!bg-red-900/40 !text-red-300 border border-red-700/40' : ''}`}>
              {t(badge, badgeEn || badge)}
            </div>
          )}
          <h1 className={`font-['Inter'] font-black text-4xl sm:text-5xl lg:text-7xl leading-none tracking-tight uppercase mb-6 ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>
            {t(title, titleEn)}
            {titleRed && <><br/><span className="text-[#C6002B]">{t(titleRed, titleRedEn || titleRed)}</span></>}
          </h1>
          {subtitle && (
            <p className={`text-lg sm:text-xl leading-relaxed mb-8 max-w-xl ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
              {t(subtitle, subtitleEn || subtitle)}
            </p>
          )}
          {(cta || cta2) && (
            <div className="flex gap-4 flex-wrap">
              {cta && ctaHref && (
                <Link href={ctaHref} className="btn-primary text-base px-8 py-4">
                  {t(cta, ctaEn || cta)} <ArrowRight size={18}/>
                </Link>
              )}
              {cta2 && cta2Href && (
                <Link href={cta2Href} className="border-2 border-white/30 text-white hover:border-white font-semibold px-8 py-4 rounded-2xl transition-all text-base inline-flex items-center gap-2">
                  {t(cta2, cta2En || cta2)}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
