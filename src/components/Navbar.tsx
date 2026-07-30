import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Menu, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#certificacoes', label: 'Certificações' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a1a2f]/80 backdrop-blur-lg border-b border-blue-900/40'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white font-bold text-lg">
            <Sun className="w-5 h-5 text-amber-400" />
            <span>
              Monique<span className="text-amber-400">Cardoso</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-200 hover:bg-blue-900/40">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a1a2f] border-blue-900/40 w-64">
                <div className="flex flex-col gap-2 mt-8">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-blue-900/40 transition-colors rounded-lg"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
