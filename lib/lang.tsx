'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'es' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (es: string, en: string) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: (es) => es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('jaxunico-lang') as Lang
    if (saved === 'en') setLangState('en')
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('jaxunico-lang', l)
  }

  function t(es: string, en: string) {
    return lang === 'en' ? en : es
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
