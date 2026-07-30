import { ArrowUp } from 'lucide-react'
import { Sun } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#0a1a2f] border-t border-blue-900/30 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Sun className="w-8 h-8 text-amber-400" />
          </div>
          <blockquote className="text-slate-400 text-sm sm:text-base italic max-w-2xl mx-auto leading-relaxed">
            "Assim como um girassol busca naturalmente a luz, acredito que a curiosidade é o que
            impulsiona a inovação. É explorando dados, aprendendo continuamente e criando soluções
            que transformamos ideias em impacto."
          </blockquote>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-blue-900/30">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Monique Cardoso. Feito com 🌻 e dados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors rounded-lg hover:bg-slate-800/50 active:scale-[0.98]"
          >
            <ArrowUp className="w-4 h-4" /> Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  )
}
