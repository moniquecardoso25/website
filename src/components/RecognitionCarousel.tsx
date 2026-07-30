import { RECOMMENDATIONS_DATA } from '@/data/projectsData'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Quote } from 'lucide-react'

export function RecognitionCarousel() {
  return (
    <section id="reconhecimentos" className="py-24 bg-[#0a1a2f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-50">
            <span className="text-amber-400">Reconhecimentos</span> & Recomendações
          </h2>
          <p className="text-blue-200/70 mt-3 text-sm sm:text-base">
            O que colegas e mentores dizem sobre meu trabalho.
          </p>
        </div>
        <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {RECOMMENDATIONS_DATA.map((rec) => (
              <CarouselItem key={rec.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white/5 backdrop-blur-md border border-blue-800/40 rounded-2xl p-6 h-full flex flex-col hover:border-amber-400/50 transition-all duration-300 card-shadow-dark">
                  <Quote className="w-8 h-8 text-amber-400/40 mb-3" />
                  <p className="text-sm text-blue-100/80 leading-relaxed flex-grow mb-4">
                    {rec.summary}
                  </p>
                  <div className="mt-auto pt-4 border-t border-blue-800/40">
                    <div className="text-sm font-bold text-blue-50">{rec.name}</div>
                    <div className="text-xs text-blue-200/60">{rec.role}</div>
                    <div className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                      {rec.context}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 border-blue-800/60 text-blue-200 hover:bg-amber-500/10" />
          <CarouselNext className="bg-white/10 border-blue-800/60 text-blue-200 hover:bg-amber-500/10" />
        </Carousel>
      </div>
    </section>
  )
}
