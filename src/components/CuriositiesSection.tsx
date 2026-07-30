import { CURIOSITIES_DATA } from '@/data/portfolioData'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

export function CuriositiesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="curiosidades" className="py-24 bg-[#0a1a2f] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-amber-400">Curiosidades</span> sobre mim
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Algumas coisas que me fazem quem eu sou. 🌻
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CURIOSITIES_DATA.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                'bg-slate-800/60 border border-slate-700 rounded-2xl p-5 text-center',
                'hover:border-amber-500/50 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1 card-shadow-dark',
                isVisible ? 'animate-fade-in-up' : 'opacity-0',
              )}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <div className="text-sm font-medium text-slate-100">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
