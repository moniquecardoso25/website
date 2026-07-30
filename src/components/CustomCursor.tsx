import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    let raf = 0
    const animate = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }))
      setGlowPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.08,
        y: prev.y + (pos.y - prev.y) * 0.08,
      }))
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMove)
    document.body.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.body.removeEventListener('mouseleave', onLeave)
    }
  }, [pos.x, pos.y])

  if (!visible) return null

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9997] w-[400px] h-[400px] rounded-full"
        style={{
          left: glowPos.x - 200,
          top: glowPos.y - 200,
          background:
            'radial-gradient(circle, rgba(245,158,11,0.05) 0%, rgba(16,185,129,0.02) 40%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full bg-amber-400 mix-blend-difference"
        style={{ left: pos.x - 4, top: pos.y - 4 }}
      />
      <div
        className="pointer-events-none fixed z-[9998] w-8 h-8 rounded-full border border-amber-400/50"
        style={{ left: ringPos.x - 16, top: ringPos.y - 16, transition: 'width 0.2s, height 0.2s' }}
      />
    </>
  )
}
