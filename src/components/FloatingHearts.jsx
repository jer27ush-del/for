import { useMemo } from 'react'

const SYMBOLS = ['♡', '❤', '✿', '✦', '♡', '❀']

// Soft, slow decorative layer. Positions are deterministic so renders stay stable.
export default function FloatingHearts({ count = 14 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        symbol: SYMBOLS[i % SYMBOLS.length],
        left: (i * 37 + 11) % 96,
        size: 14 + ((i * 7) % 16),
        duration: 14 + ((i * 5) % 10),
        delay: -((i * 3) % 14),
        sway: 12 + ((i * 11) % 22),
      })),
    [count],
  )

  return (
    <div className="floaters" aria-hidden="true">
      {items.map((h) => (
        <span
          key={h.id}
          className={`floater floater--${h.symbol === '✦' ? 'star' : 'heart'}`}
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            '--sway': `${h.sway}px`,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  )
}
