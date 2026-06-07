'use client'
import { useLang } from '@/lib/lang'

export default function Ticker() {
  const { t } = useLang()
  const items = [
    '🎙️ JAX UNICO',
    t('· CONECTA', '· CONNECT'),
    t('· CRECE', '· GROW'),
    t('· PRODUCE', '· PRODUCE'),
    t('· DIRECTORIO LATINO', '· LATINO DIRECTORY'),
    t('· EVENTOS EN JACKSONVILLE', '· EVENTS IN JACKSONVILLE'),
    t('· TU VOZ MERECE SER ESCUCHADA', '· YOUR VOICE DESERVES TO BE HEARD'),
    t('· LA PLATAFORMA LATINA', '· THE LATINO PLATFORM'),
    t('· +120,000 LATINOS EN JACKSONVILLE', '· +120,000 LATINOS IN JACKSONVILLE'),
    '· AGUYB STUDIOS',
    t('· PERTENECE', '· BELONG'),
  ]
  return (
    <div className="overflow-hidden bg-[#C6002B] py-2">
      <div className="flex whitespace-nowrap" style={{ animation: 'jaxTicker 35s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white text-xs font-bold uppercase tracking-widest px-5 flex-shrink-0">{item}</span>
        ))}
      </div>
    </div>
  )
}
