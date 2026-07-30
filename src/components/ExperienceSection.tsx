import { COMPETENCY_DATA } from '@/data/portfolioContent'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Brain, Cloud, Code2, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

const ICONS: Record<string, typeof Brain> = {
  ia: Brain,
  cloud: Cloud,
  dev: Code2,
  product: Lightbulb,
}

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="experiencia" className="py-24 bg-[#0a1a2f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-50">
            Competências & <span className="text-amber-400">Especialidades</span>
          </h2>
          <p className="text-blue-200/70 mt-3 text-sm sm:text-base">
            Uma visão geral das áreas em que atuo.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPETENCY_DATA.map((group, i) => {
            const Icon = ICONS[group.id] || Code2
            return (
              <div
                key={group.id}
                className={cn(
                  'group bg-white/5 backdrop-blur-md border border-blue-800/40 rounded-2xl p-6 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 card-shadow-dark active:scale-[0.98]',
                  isVisible ? 'animate-fade-in-up' : 'opacity-0',
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/20 to-emerald-400/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-50">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-blue-900/40 text-blue-200/70 rounded-full border border-blue-800/40 group-hover:bg-amber-500/10 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
