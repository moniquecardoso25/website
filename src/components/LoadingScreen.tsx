import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  const dots = Array.from({ length: 12 }, (_, i) => {
    const angle = i * 30 * (Math.PI / 180)
    return { x: 50 + 35 * Math.cos(angle), y: 50 + 35 * Math.sin(angle), delay: i * 0.1 }
  })

  return (
    <div className="fixed inset-0 z-[10000] bg-[#0a1a2f] flex items-center justify-center">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-amber-400 animate-pulse" />
        </div>
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-amber-400/80"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse 1.5s ease-in-out ${dot.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
