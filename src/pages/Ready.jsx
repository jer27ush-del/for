import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Check, Copy, RotateCcw } from 'lucide-react'
import Teddy from '../components/Teddy.jsx'
import { SHORT_APOLOGY } from '../config.js'
import { copyText } from '../utils/copyText.js'

export default function Ready({ onBack, onRestart }) {
  const [status, setStatus] = useState('idle') // idle | copied | failed
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const onCopy = async () => {
    const ok = await copyText(SHORT_APOLOGY)
    setStatus(ok ? 'copied' : 'failed')
    clearTimeout(timer.current)
    if (ok) timer.current = setTimeout(() => setStatus('idle'), 2800)
  }

  return (
    <>
      <p className="kicker reveal" style={{ '--i': 0 }}>Nee Ready-aana Appuram ❤️</p>
      <h1 className="title reveal" style={{ '--i': 1 }}>Nee <span className="nowrap">ready-aana</span> appuram.</h1>

      <div className="paper paper--tall reveal" style={{ '--i': 2 }}>
        <span className="tape tape--top" aria-hidden="true" />
        <p>
          Namma munna maadhiri nalla pesanum nu enakku aasai irukku di. Aana adha vida mukkiyam, nee comfortable-ah
          irukkanum; un feelings respect aaganum.
        </p>
        <p>
          Udane reply pannanum nu illa, edhuvum promise pannanum nu illa. En thappukku manasara sorry sollanum nu
          dhaan idha senjen.
        </p>
        <p>Nee eppo pesa ready-ah irukkiyo, appo naan kekka ready-ah iruppen.</p>
        <p className="signoff">Paathukko, Kutty. ❤️🫂</p>
      </div>

      <div className="hero hero--small reveal" style={{ '--i': 3 }}>
        <Teddy className="teddy--small" />
      </div>

      <div className="copybox reveal" style={{ '--i': 4 }}>
        <p className="copybox__label">Chinna version</p>
        <p className="copybox__text">{SHORT_APOLOGY}</p>
        <button
          type="button"
          className={`btn btn--soft${status === 'copied' ? ' is-done' : ''}`}
          onClick={onCopy}
        >
          {status === 'copied' ? (
            <>
              <Check size={18} aria-hidden="true" /> Copy aaiduchu
            </>
          ) : (
            <>
              <Copy size={18} aria-hidden="true" /> Indha chinna apology-a copy pannu
            </>
          )}
        </button>
        <p className={`copybox__status${status === 'failed' ? ' is-error' : ''}`} role="status" aria-live="polite">
          {status === 'copied' && 'Copy aaiduchu 🤍'}
          {status === 'failed' &&
            'Copy aagala 😅 — mela irukkura text-a touch panni hold pannitu, copy pannikko.'}
        </p>
      </div>

      <div className="actions reveal" style={{ '--i': 5 }}>
        <button type="button" className="btn btn--primary" onClick={onRestart}>
          <RotateCcw size={18} aria-hidden="true" /> Modhal page-ku poga
        </button>
        <button type="button" className="btn btn--ghost" onClick={onBack}>
          <ArrowLeft size={18} aria-hidden="true" /> Pinnaadi
        </button>
      </div>
    </>
  )
}
