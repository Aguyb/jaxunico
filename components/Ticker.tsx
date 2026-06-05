export default function Ticker() {
  const items = [
    '🎙️ JAX UNICO', '· CONECTA', '· CRECE', '· PRODUCE', '· DIRECTORIO LATINO',
    '· EVENTOS EN JACKSONVILLE', '· TU VOZ MERECE SER ESCUCHADA', '· LA PLATAFORMA LATINA',
    '· +120,000 LATINOS EN JACKSONVILLE', '· AGUYB STUDIOS', '· PERTENECE',
  ]

  return (
    <div className="overflow-hidden bg-[#C6002B] py-2.5">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'jaxTicker 35s linear infinite',
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white text-xs font-mono font-bold uppercase tracking-widest px-6 flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
