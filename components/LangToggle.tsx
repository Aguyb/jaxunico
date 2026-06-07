'use client'
import { useLang } from '@/lib/lang'

export default function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang()

  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className={`flex items-center gap-1.5 border-2 border-gray-200 hover:border-[#C6002B] rounded-xl px-3 py-2 transition-all group ${className}`}
      aria-label="Toggle language"
    >
      <span className={`text-sm font-bold transition-colors ${lang === 'es' ? 'text-[#C6002B]' : 'text-gray-400'}`}>ES</span>
      <span className="text-gray-300 text-sm">|</span>
      <span className={`text-sm font-bold transition-colors ${lang === 'en' ? 'text-[#C6002B]' : 'text-gray-400'}`}>EN</span>
    </button>
  )
}
