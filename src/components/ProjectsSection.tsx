import { PROJECTS_DATA, type Project } from '@/data/projectsData'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

function ProjectModal({ project, children }: { project: Project; children: React.ReactNode }) {
  const c = project.case
  const fields = [
    { label: 'Problema', value: c.problem },
    { label: 'Contexto', value: c.context },
    { label: 'Objetivo', value: c.objective },
    { label: 'Solução', value: c.solution },
    { label: 'Arquitetura', value: c.architecture },
    { label: 'Processo', value: c.process },
    { label: 'Aprendizados', value: c.learnings },
    { label: 'Impacto', value: c.impact },
  ]
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0a1a2f] border-amber-500/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-amber-50">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <img
            src={c.images[0]}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl"
            loading="lazy"
          />
          <div className="grid grid-cols-1 gap-3">
            {fields.map((f) => (
              <div key={f.label} className="bg-white/5 rounded-lg p-3 border border-amber-500/10">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {f.label}
                </p>
                <p className="text-sm text-stone-300">{f.value}</p>
              </div>
            ))}
            <div className="bg-white/5 rounded-lg p-3 border border-amber-500/10">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Tecnologias
              </p>
              <div className="flex flex-wrap gap-2">
                {c.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs bg-amber-500/10 text-amber-200 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {c.links &&
              c.links.length > 0 &&
              c.links.map((link) => (
                <Button
                  key={link.url}
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-amber-500/30 text-amber-100 hover:bg-amber-500/10"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> {link.label}
                  </a>
                </Button>
              ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projetos" className="py-24 bg-[#0a1a2f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-50">
            Projetos & <span className="text-amber-400">Cases</span>
          </h2>
          <p className="text-stone-300 mt-3 text-sm sm:text-base">
            Clique em "Ver Case" para detalhes completos.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, i) => (
            <div
              key={project.id}
              className={cn(
                'group bg-white/5 backdrop-blur-sm border border-amber-500/15 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 card-shadow-dark active:scale-[0.98]',
                isVisible ? 'animate-fade-in-up' : 'opacity-0',
              )}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-amber-50 mb-1">{project.title}</h3>
                <p className="text-sm text-stone-400 mb-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-amber-500/10 text-amber-300/80 rounded border border-amber-500/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ProjectModal project={project}>
                  <Button
                    size="sm"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold active:scale-[0.98]"
                  >
                    Ver Case
                  </Button>
                </ProjectModal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
