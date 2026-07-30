import { SPECIALTIES_DATA } from '@/data/portfolioData'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function SpecialtiesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="especialidades" className="py-24 bg-[#0a1a2f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Áreas de <span className="text-amber-400">Especialidade</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Tecnologias e competências que transformam dados em soluções inteligentes.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {SPECIALTIES_DATA.map((spec, i) => (
            <div
              key={spec.id}
              className={cn(
                'group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-5 text-center',
                'hover:border-amber-500/50 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1 card-shadow-dark',
                'backdrop-blur-sm',
                isVisible ? 'animate-fade-in-up' : 'opacity-0',
              )}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {spec.icon}
              </div>
              <div className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition-colors">
                {spec.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
