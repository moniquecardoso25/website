import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Rocket, Telescope, Satellite } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SpaceExplorationSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="espaco" className="py-24 bg-[#0a1a2f] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-float"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.5,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={cn(isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-violet-500/20">
              <Rocket className="w-3.5 h-3.5" /> Exploração Espacial
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Quando a curiosidade vai <span className="text-amber-400">além da Terra</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-6 hover:border-violet-500/40 transition-all card-shadow-dark">
              <Satellite className="w-8 h-8 text-violet-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">NASA Space Apps 2024 & 2025</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Participação em dois desafios do NASA Space Apps Challenge. Em 2024, projeto sobre
                conexões terrestres e mudanças climáticas. Em 2025, finalista regional com modelo de
                Machine Learning para identificar exoplanetas usando dados do telescópio Kepler.
              </p>
            </div>
            <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-6 hover:border-violet-500/40 transition-all card-shadow-dark">
              <Telescope className="w-8 h-8 text-violet-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Caça Asteroides</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Participação no Caça Asteroide, uma parceria brasileira com a NASA e IASC
                (International Astronomical Search Collaboration). Análise de imagens telescópicas
                para identificação de asteroides, contribuindo para a ciência cidadã espacial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
