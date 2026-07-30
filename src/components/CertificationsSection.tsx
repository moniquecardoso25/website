import { CERTIFICATIONS_DATA } from '@/data/portfolioContent'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useAnimatedCounter } from '@/hooks/use-animated-counter'
import { cn } from '@/lib/utils'

function CertCounter() {
  const { count, elementRef } = useAnimatedCounter(40, 1500)
  return (
    <div ref={elementRef} className="text-center mb-12">
      <div className="text-5xl sm:text-6xl font-black text-amber-400">{count}+</div>
      <div className="text-slate-400 text-sm font-medium mt-1">Certificações & Cursos</div>
    </div>
  )
}

export function CertificationsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="certificacoes" className="py-24 bg-[#0a1a2f] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Certificações & <span className="text-amber-400">Cursos</span>
          </h2>
        </div>
        <CertCounter />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((group, i) => (
            <div
              key={group.id}
              className={cn(
                'bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/40 transition-all card-shadow-dark',
                isVisible ? 'animate-fade-in-up' : 'opacity-0',
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-bold text-slate-100">{group.provider}</h3>
              </div>
              <div className="space-y-2">
                {group.certifications.map((cert) => (
                  <div key={cert} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="text-amber-400/70 text-xs">◆</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
