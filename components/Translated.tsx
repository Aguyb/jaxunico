'use client'
import { useLang } from '@/lib/lang'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Translated CTA button for use in server pages
export function TranslatedBtn({ es, en, href, variant = 'primary' }: { es: string; en: string; href: string; variant?: 'primary' | 'outline' | 'white' }) {
  const { t } = useLang()
  const cls = variant === 'primary' ? 'btn-primary' : variant === 'white' ? 'btn-white' : 'btn-outline'
  return (
    <Link href={href} className={`${cls} text-base px-8 py-4`}>
      {t(es, en)} <ArrowRight size={18}/>
    </Link>
  )
}

// Translated heading for server pages
export function TranslatedH2({ es, en, redEs, redEn, className = '' }: { es: string; en: string; redEs?: string; redEn?: string; className?: string }) {
  const { t } = useLang()
  return (
    <h2 className={`section-heading ${className}`}>
      {t(es, en)}
      {redEs && <><br/><span className="text-[#C6002B]">{t(redEs, redEn || redEs)}</span></>}
    </h2>
  )
}

// Translated paragraph
export function TranslatedP({ es, en, className = '' }: { es: string; en: string; className?: string }) {
  const { t } = useLang()
  return <p className={className}>{t(es, en)}</p>
}

// Translated badge
export function TranslatedBadge({ es, en, className = '' }: { es: string; en: string; className?: string }) {
  const { t } = useLang()
  return <div className={`badge ${className}`}>{t(es, en)}</div>
}
