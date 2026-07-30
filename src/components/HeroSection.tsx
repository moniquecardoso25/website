import { Button } from '@/components/ui/button'
import { ArrowDown, FolderGit2, Linkedin, Github } from 'lucide-react'
import { HeroIllustration } from '@/components/HeroIllustration'

const LINKEDIN_URL = 'https://www.linkedin.com/in/monique-cardoso21/'
const GITHUB_URL = 'https://github.com/moniquecardoso25'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a1a2f] pt-20 pb-12"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96, 165, 250, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f]/40 via-transparent to-[#0a1a2f]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-blue-50 mb-4 animate-fade-in-up">
          Monique <span className="text-amber-400">Cardoso</span>
        </h1>
        <p className="text-base sm:text-xl text-emerald-300 font-medium mb-3 animate-fade-in-up">
          Cientista de Dados • IA Generativa • LLMs • Machine Learning
        </p>
        <p className="text-sm sm:text-lg text-blue-200/70 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Transformando dados em inteligência, curiosidade em inovação e ideias em soluções reais.
        </p>
        <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
          <Button
            asChild
            className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold active:scale-[0.98]"
          >
            <a href="#sobre">
              <ArrowDown className="w-4 h-4 mr-2" /> Explorar Portfólio
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-amber-500/40 text-blue-50 hover:bg-amber-500/15 active:scale-[0.98]"
          >
            <a href="#projetos">
              <FolderGit2 className="w-4 h-4 mr-2" /> Projetos
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-amber-500/40 text-blue-50 hover:bg-amber-500/15 active:scale-[0.98]"
          >
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-amber-500/40 text-blue-50 hover:bg-amber-500/15 active:scale-[0.98]"
          >
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 max-w-4xl mx-auto animate-fade-in-up">
        <HeroIllustration />
      </div>
    </section>
  )
}
