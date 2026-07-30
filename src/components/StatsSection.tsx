import { IMPACT_CARDS } from '@/data/portfolioData'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 bg-[#0a1a2f] border-y border-blue-900/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-amber-50/90">
            Resultados que expressam <span className="text-amber-400">dedicação e impacto</span>
          </h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMPACT_CARDS.map((card, i) => (
            <div
              key={card.id}
              className={cn(
                'group bg-white/5 backdrop-blur-md border border-amber-500/20 rounded-2xl p-6 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 card-shadow-dark active:scale-[0.98]',
                isVisible ? 'animate-fade-in-up' : 'opacity-0',
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-amber-50 mb-1">{card.title}</h3>
              <p className="text-sm text-stone-300 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
