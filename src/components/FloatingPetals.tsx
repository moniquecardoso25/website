import { useEffect, useState } from 'react'

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const generated = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 25,
      duration: 18 + Math.random() * 22,
      size: 6 + Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.15,
    }))
    setPetals(generated)
  }, [])

  if (petals.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute petal-shape"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
