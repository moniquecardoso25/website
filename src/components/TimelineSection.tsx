import { MILESTONES_DATA } from '@/data/portfolioData'
import { Calendar, Award, GraduationCap, Briefcase, Sparkles } from 'lucide-react'

export function TimelineSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-amber-400" />
      case 'certification':
        return <Award className="w-4 h-4 text-teal-400" />
      case 'award':
        return <Sparkles className="w-4 h-4 text-amber-400" />
      default:
        return <Briefcase className="w-4 h-4 text-sky-400" />
    }
  }

  return (
    <section id="trajetoria" className="py-24 bg-[#0a1a2f] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-teal-500/20">
            <Calendar className="w-3.5 h-3.5" /> Linha do Tempo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Sua <span className="text-amber-400">Trajetória</span> & Evolução
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            De uma formação em Engenharia Química ao protagonismo em projetos globais de
            Inteligência Artificial.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-8">
          {MILESTONES_DATA.map((milestone) => (
            <div key={milestone.id} className="relative pl-8 sm:pl-10 group">
              <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 inline-block">
                  {milestone.year}
                </span>
              </div>

              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-amber-400 transition-all">
                {getCategoryIcon(milestone.category)}
              </div>

              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 hover:border-amber-500/40 transition-all card-shadow-dark">
                <div className="sm:hidden mb-2">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {milestone.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
