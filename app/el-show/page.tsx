'use client'
import Link from 'next/link'
import { Play, Mic, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'

const episodes = Array.from({ length: 6 }, (_, i) => ({
  num: String(i + 1).padStart(3, '0'),
  title: i === 0 ? 'Tu Historia Merece Ser Escuchada' : `Episodio ${i + 1} — Próximamente`,
  guest: i === 0 ? 'Episodio de Lanzamiento' : 'Invitado por confirmar',
  duration: '45 min',
  category: ['Emprendimiento', 'Coaching', 'Arte', 'Comunidad', 'Salud', 'Negocios'][i],
}))

const categories = ['Todos', 'Negocios', 'Coaching', 'Arte', 'Comunidad', 'Salud', 'Emprendimiento']

export default function ElShowPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6002B] rounded-full blur-3xl opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge mb-6">El Show</div>
            <h1 className="font-heading text-6xl sm:text-7xl text-white leading-none tracking-wide uppercase mb-6">
              Conversaciones<br />Reales.<br />
              <span className="text-[#C6002B]">Historias</span><br />que Inspiran.
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Cada semana, una conversación auténtica con líderes, emprendedores y creadores latinos de Jacksonville.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#episodios" className="btn-primary text-base px-8 py-4">
                <Play size={18} fill="white" /> Ver Episodios
              </Link>
              <Link href="#aplicar" className="border-2 border-white/20 text-white hover:border-[#C6002B] hover:text-[#C6002B] font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
                Quiero Ser Invitado <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex gap-4 mt-8 flex-wrap">
              {['Spotify', 'Apple Podcasts', 'YouTube', 'iHeartRadio', 'Amazon Music'].map((p) => (
                <span key={p} className="text-xs bg-white/10 text-gray-300 font-mono px-3 py-1.5 rounded-lg">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="badge mb-6">Último Episodio</div>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden aspect-video flex items-center justify-center relative">
                <div className="w-20 h-20 bg-[#C6002B] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                  <Play size={32} className="text-white ml-2" fill="white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge text-[10px]">EP. 001</span>
                    <span className="text-xs font-mono text-white/50 flex items-center gap-1"><Clock size={10} /> 45 min</span>
                  </div>
                  <h2 className="font-heading text-2xl text-white">Tu Historia Merece Ser Escuchada</h2>
                  <p className="text-sm text-white/60 mt-1">Episodio de Lanzamiento · Jax Unico</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-heading text-2xl text-[#1A1A1A] mb-4 tracking-wide">Sobre este Episodio</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                El episodio de lanzamiento de Jax Unico. Una conversación sobre por qué la comunidad latina de Jacksonville necesita su propia plataforma de medios, y qué significa este proyecto para el futuro de nuestra comunidad.
              </p>
              <div className="space-y-3">
                {['Escuchar en Spotify', 'Escuchar en Apple Podcasts', 'Ver en YouTube'].map((action) => (
                  <Link key={action} href="#" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-red-50 hover:text-[#C6002B] group transition-colors">
                    <span className="text-sm font-body font-medium text-gray-600 group-hover:text-[#C6002B]">{action}</span>
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-[#C6002B]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section id="episodios" className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Todos los Episodios</h2>
          {/* Filters */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat, i) => (
              <button key={cat} className={`text-xs font-mono font-bold px-4 py-2 rounded-full uppercase tracking-widest transition-colors ${i === 0 ? 'bg-[#C6002B] text-white' : 'bg-white text-gray-500 hover:bg-[#C6002B] hover:text-white border border-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep) => (
              <div key={ep.num} className="card p-5 hover:border-[#C6002B]/30 cursor-pointer group">
                <div className="bg-[#1A1A1A] rounded-xl aspect-video flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="w-12 h-12 bg-[#C6002B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#C6002B] font-bold">EP. {ep.num}</span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1"><Clock size={10} /> {ep.duration}</span>
                </div>
                <h3 className="font-body font-semibold text-[#1A1A1A] mb-1 line-clamp-2">{ep.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{ep.guest}</p>
                <span className="text-xs bg-gray-100 text-gray-500 font-mono px-2 py-1 rounded-md">{ep.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply to be Guest */}
      <section id="aplicar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="badge mb-6">Conviértete en Invitado</div>
              <h2 className="section-heading mb-6">
                Tu Historia<br />Pertenece a<br />
                <span className="text-[#C6002B]">Este Escenario.</span>
              </h2>
              {/* 3 steps */}
              <div className="space-y-6 mb-8">
                {[
                  { num: '01', title: 'Aplica', desc: 'Completa el formulario. Es gratis y tarda 3 minutos.' },
                  { num: '02', title: 'Confirmación en 48hs', desc: 'El equipo de Jax Unico te contacta para coordinar.' },
                  { num: '03', title: 'Graba en Estudio', desc: 'Ven a Aguyb Studios y cuenta tu historia.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="w-10 h-10 bg-[#C6002B] rounded-xl flex items-center justify-center shrink-0">
                      <span className="font-heading text-base text-white">{step.num}</span>
                    </div>
                    <div>
                      <div className="font-body font-semibold text-[#1A1A1A] mb-1">{step.title}</div>
                      <div className="text-sm text-gray-500">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-[#F7F7F7] rounded-2xl">
                <div className="text-xs font-mono text-[#C6002B] uppercase tracking-widest mb-3">Lo que recibes — Gratis</div>
                <div className="space-y-2">
                  {['Episodio completo grabado en estudio', '3–5 clips para tus redes sociales', 'Foto profesional del set', 'Mención en newsletter (+2,500 suscriptores)', 'Link en el sitio web de Jax Unico'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#C6002B] shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="card p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-heading text-2xl tracking-wide text-[#1A1A1A] mb-2">Aplicar para Ser Invitado</h3>
              <p className="text-sm text-gray-400 mb-4">Respondemos en 48 horas. Sin costo.</p>
              {[
                ['Nombre completo', 'text', 'Tu nombre'],
                ['Negocio / Marca', 'text', 'Nombre de tu empresa'],
                ['Email', 'email', 'tu@email.com'],
                ['Teléfono', 'tel', '(904) 000-0000'],
                ['Instagram / LinkedIn', 'text', '@tuhandle'],
                ['Sitio Web', 'url', 'https://tuempresa.com'],
              ].map(([label, type, placeholder]) => (
                <div key={label}>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-widest">{label}</label>
                  <input type={type} placeholder={placeholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C6002B] transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-widest">¿Qué hacés? (2–3 oraciones)</label>
                <textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C6002B] resize-none" />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-widest">Tema principal que quieres discutir</label>
                <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C6002B]" />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-xs text-gray-500">
                  Consiento ser grabado y que el contenido sea publicado en las plataformas de Jax Unico.
                </label>
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Enviar Aplicación <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
