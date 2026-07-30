import { useEffect, useState } from 'react'

interface CodeToken {
  text: string
  cls: string
}

interface CodeLine {
  num: number
  tokens: CodeToken[]
}

const CODE_LINES: CodeLine[] = [
  {
    num: 1,
    tokens: [
      { text: 'import ', cls: 'text-violet-400' },
      { text: 'pandas', cls: 'text-amber-400' },
      { text: ' as ', cls: 'text-violet-400' },
      { text: 'pd', cls: 'text-blue-300' },
    ],
  },
  {
    num: 2,
    tokens: [
      { text: 'from ', cls: 'text-violet-400' },
      { text: 'sklearn ', cls: 'text-amber-400' },
      { text: 'import ', cls: 'text-violet-400' },
      { text: 'metrics', cls: 'text-blue-300' },
    ],
  },
  { num: 3, tokens: [] },
  {
    num: 4,
    tokens: [
      { text: 'model', cls: 'text-blue-300' },
      { text: ' = ', cls: 'text-slate-400' },
      { text: 'load_model', cls: 'text-emerald-400' },
      { text: '(', cls: 'text-slate-400' },
      { text: '"llm_v2"', cls: 'text-amber-300' },
      { text: ')', cls: 'text-slate-400' },
    ],
  },
  {
    num: 5,
    tokens: [
      { text: 'data', cls: 'text-blue-300' },
      { text: ' = pd.', cls: 'text-slate-400' },
      { text: 'read_csv', cls: 'text-emerald-400' },
      { text: '(', cls: 'text-slate-400' },
      { text: '"data.csv"', cls: 'text-amber-300' },
      { text: ')', cls: 'text-slate-400' },
    ],
  },
  {
    num: 6,
    tokens: [
      { text: 'preds', cls: 'text-blue-300' },
      { text: ' = model.', cls: 'text-slate-400' },
      { text: 'predict', cls: 'text-emerald-400' },
      { text: '(data)', cls: 'text-slate-400' },
    ],
  },
  {
    num: 7,
    tokens: [
      { text: 'r2', cls: 'text-blue-300' },
      { text: ' = metrics.', cls: 'text-slate-400' },
      { text: 'r2_score', cls: 'text-emerald-400' },
      { text: '(y, preds)', cls: 'text-slate-400' },
    ],
  },
  {
    num: 8,
    tokens: [{ text: '# R² = 0.982', cls: 'text-slate-500' }],
  },
]

export function HeroIllustration() {
  const [bars, setBars] = useState<number[]>([45, 70, 50, 85, 60, 75, 55])

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) => prev.map(() => 25 + Math.random() * 70))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass rounded-2xl p-4 sm:p-5 animate-float">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="space-y-1 font-mono text-[10px] sm:text-xs leading-relaxed">
            {CODE_LINES.map((line) => (
              <div key={line.num} className="flex">
                <span className="text-blue-500/40 mr-3 select-none w-4 text-right">{line.num}</span>
                <span>
                  {line.tokens.map((token, i) => (
                    <span key={i} className={token.cls}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div
            className="glass rounded-2xl p-4 sm:p-5 animate-float"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-blue-200/70 font-medium">Model Performance</span>
              <span className="text-xs text-emerald-400 font-semibold">+24.5%</span>
            </div>
            <div className="flex items-end gap-1.5 h-20 sm:h-24">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-blue-600/30 to-amber-400/70 rounded-t-sm transition-all duration-1000 ease-out"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-amber-400">98.2%</div>
              <div className="text-[10px] sm:text-xs text-blue-200/60">Accuracy</div>
            </div>
            <div className="glass rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400">1.2M</div>
              <div className="text-[10px] sm:text-xs text-blue-200/60">Data Points</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 glass rounded-xl px-3 py-2 animate-float"
        style={{ animationDelay: '2.5s' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs text-blue-100 font-medium">ML Active</span>
        </div>
      </div>
    </div>
  )
}
