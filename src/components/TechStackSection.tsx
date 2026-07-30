import { TECH_STACK } from '@/data/portfolioContent'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function TechStackSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-[#0a1a2f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Stack <span className="text-amber-400">Tecnológica</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Ferramentas e tecnologias que utilizo no dia a dia.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((cat, i) => (
            <div
              key={cat.id}
              className={cn(
                'bg-slate-900/80 border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/40 transition-all card-shadow-dark',
                isVisible ? 'animate-fade-in-up' : 'opacity-0',
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-slate-100">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:border-amber-500/40 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
