import { Linkedin, Github } from 'lucide-react'

const LINKEDIN_URL = 'https://www.linkedin.com/in/monique-cardoso21/'
const GITHUB_URL = 'https://github.com/moniquecardoso25'

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-[#0a1a2f] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-50">
            Vamos <span className="text-amber-400">construir algo juntos</span>
          </h2>
          <p className="text-blue-200/70 mt-3 text-sm sm:text-base">
            Disposta a colaborar em projetos inovadores com IA e dados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-8 bg-white/5 backdrop-blur-md border border-blue-800/40 rounded-2xl hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 card-shadow-dark active:scale-[0.98]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-7 h-7 text-amber-400" />
            </div>
            <span className="text-base font-bold text-blue-50">LinkedIn</span>
            <span className="text-xs text-blue-300/50">/monique-cardoso21</span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-8 bg-white/5 backdrop-blur-md border border-blue-800/40 rounded-2xl hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 card-shadow-dark active:scale-[0.98]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github className="w-7 h-7 text-amber-400" />
            </div>
            <span className="text-base font-bold text-blue-50">GitHub</span>
            <span className="text-xs text-blue-300/50">/moniquecardoso25</span>
          </a>
        </div>
      </div>
    </section>
  )
}
