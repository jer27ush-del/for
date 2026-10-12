import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Heart } from 'lucide-react'
import Teddy from '../components/Teddy.jsx'

const BURST_SYMBOLS = ['❤', '♡', '💗', '✨', '🌸']

function makeBurst(id) {
  return {
    id,
    hearts: Array.from({ length: 14 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 14 + Math.random() * 0.4
      const distance = 70 + Math.random() * 90
      return {
        key: i,
        symbol: BURST_SYMBOLS[Math.floor(Math.random() * BURST_SYMBOLS.length)],
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance - 40,
        size: 16 + Math.random() * 16,
        delay: Math.random() * 120,
      }
    }),
  }
}

export default function Smile({ onNext, onBack }) {
  const [touched, setTouched] = useState(false)
  const [bursts, setBursts] = useState([])
  const [beat, setBeat] = useState(0)
  const counter = useRef(0)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const onHeart = () => {
    setTouched(true)
    setBeat((b) => b + 1)
    const id = ++counter.current
    setBursts((list) => [...list, makeBurst(id)])
    const timer = setTimeout(() => setBursts((list) => list.filter((b) => b.id !== id)), 1900)
    timers.current.push(timer)
  }

  return (
    <>
      <p className="kicker reveal" style={{ '--i': 0 }}>Konjam Sirichidu, Please? 🧸</p>
      <h1 className="title reveal" style={{ '--i': 1 }}>Konjam sirichidu, please?</h1>

      <div className={`stage-teddy reveal${touched ? ' is-happy' : ''}`} style={{ '--i': 2 }} key={beat}>
        <Teddy className="teddy--medium" />
      </div>

      <div className="paper reveal" style={{ '--i': 3 }}>
        <span className="tape tape--top" aria-hidden="true" />
        <p>
          Udane mannichidanum nu naan expect pannala di. Indha chinna vishayam unakku oru smile kudutha podhum.
        </p>
      </div>

      <div className="heart-zone reveal" style={{ '--i': 4 }}>
        <div className="burst" aria-hidden="true">
          {bursts.map((burst) =>
            burst.hearts.map((h) => (
              <span
                key={`${burst.id}-${h.key}`}
                className="burst__heart"
                style={{
                  '--dx': `${h.dx}px`,
                  '--dy': `${h.dy}px`,
                  fontSize: `${h.size}px`,
                  animationDelay: `${h.delay}ms`,
                }}
              >
                {h.symbol}
              </span>
            )),
          )}
        </div>
        <button
          type="button"
          className={`btn btn--heart${touched ? ' is-touched' : ''}`}
          onClick={onHeart}
          aria-pressed={touched}
        >
          <Heart size={22} fill="currentColor" aria-hidden="true" />
          Heart-ah touch pannu di
        </button>
      </div>

      <p className="reply-note" role="status" aria-live="polite">
        {touched ? 'Avlodhaan di. Vera kelvi edhuvum illa, promise. 🥹❤️' : ''}
      </p>

      <div className="actions reveal" style={{ '--i': 5 }}>
        <button type="button" className="btn btn--primary" onClick={onNext}>
          Last-ah oru vishayam
        </button>
        <button type="button" className="btn btn--ghost" onClick={onBack}>
          <ArrowLeft size={18} aria-hidden="true" /> Pinnaadi
        </button>
      </div>
    </>
  )
}
