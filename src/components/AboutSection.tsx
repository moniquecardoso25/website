import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'
import { Sun } from 'lucide-react'

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="sobre" className="py-24 bg-[#0a1a2f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={cn(isVisible ? 'animate-fade-in-up' : 'opacity-0')}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-amber-500/20">
            <Sun className="w-3.5 h-3.5" /> Sobre Mim
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-10 text-blue-50">
            Muito além dos <span className="text-amber-400">dados</span>
          </h2>
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl font-bold text-blue-50 leading-tight">
              Tudo começou com uma curiosidade.
            </p>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
              Aquela mesma curiosidade que faz um{' '}
              <span className="text-amber-400 font-semibold">girassol buscar a luz</span>. Desde
              cedo, eu queria entender o porquê de tudo — por que os números se repetem na natureza,
              por que alguns padrões aparecem onde menos esperamos.
            </p>
            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
              <Sun className="w-4 h-4 text-amber-400/60" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
            </div>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
              A <span className="text-emerald-400 font-semibold">Engenharia Química</span> me deu
              estrutura e raciocínio analítico. Mas foi nos dados que encontrei minha verdadeira
              linguagem.
            </p>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
              A transição não veio de um curso famoso ou uma universidade renomada. Veio de
              madrugadas de estudo autodidata, de cursos gratuitos, de tutoriais assistidos. Cada{' '}
              <span className="text-amber-400 font-semibold">certificação sem curso pago</span> foi
              uma vitória silenciosa.
            </p>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
              A <span className="text-emerald-400 font-semibold">IA Generativa</span> chegou como
              uma revelação. LLMs, agentes inteligentes, Machine Learning — de repente, era possível
              construir soluções que antes existiam apenas na imaginação.
            </p>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
              Hackathons como o{' '}
              <span className="text-amber-400 font-semibold">NASA Space Apps</span> me mostraram que
              a colaboração e a pressão criativa são catalisadores poderosos. Cada projeto, cada
              equipe, cada desafio foi um degrau.
            </p>
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-md border border-amber-500/20 rounded-2xl">
              <p className="text-lg sm:text-xl font-semibold italic text-blue-50 text-center leading-relaxed">
                "Acredito que tecnologia sem propósito é apenas código. Tecnologia com propósito tem
                o poder de{' '}
                <span className="text-amber-400">transformar pessoas, negócios e o futuro.</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
