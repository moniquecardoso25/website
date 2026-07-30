import { HACKATHONS_DATA } from '@/data/portfolioData'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HackathonTimeline() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="hackathons" className="py-24 bg-[#0a1a2f] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Timeline de <span className="text-amber-400">Hackathons</span>
          </h2>
        </div>
        <div ref={ref} className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8">
          {HACKATHONS_DATA.map((hack, i) => (
            <div
              key={hack.id}
              className={cn(
                'relative pl-8 sm:pl-10',
                isVisible ? 'animate-fade-in-up' : 'opacity-0',
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-amber-400" />
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 hover:border-amber-500/40 transition-all card-shadow-dark">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{hack.name}</h3>
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {hack.result}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-2">{hack.learnings}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {hack.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-slate-700 text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
