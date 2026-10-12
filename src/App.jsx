import { useCallback, useEffect, useRef, useState } from 'react'
import FloatingHearts from './components/FloatingHearts.jsx'
import ProgressIndicator from './components/ProgressIndicator.jsx'
import PageShell from './components/PageShell.jsx'
import Surprise from './pages/Surprise.jsx'
import Sorry from './pages/Sorry.jsx'
import Special from './pages/Special.jsx'
import Smile from './pages/Smile.jsx'
import Ready from './pages/Ready.jsx'

export const PAGES = [
  { id: 1, label: 'Chinna Surprise', emoji: '💌', tone: 'pink', Component: Surprise },
  { id: 2, label: 'Sorry Di', emoji: '🥺', tone: 'peach', Component: Sorry },
  { id: 3, label: 'Special-aana Vishayangal', emoji: '🌷', tone: 'lavender', Component: Special },
  { id: 4, label: 'Konjam Sirichidu', emoji: '🧸', tone: 'pink', Component: Smile },
  { id: 5, label: 'Nee Ready-aana Appuram', emoji: '❤️', tone: 'cream', Component: Ready },
]

// Pages live at #/1 … #/5, so refresh, back button and shared links all work
// on any static host, and there are no server routes that could break.
function readPage() {
  const match = window.location.hash.match(/^#\/([1-5])$/)
  return match ? Number(match[1]) : 1
}

export default function App() {
  const [page, setPage] = useState(readPage)
  const [direction, setDirection] = useState('forward')
  const previous = useRef(page)

  useEffect(() => {
    const onHashChange = () => {
      const next = readPage()
      setDirection(next >= previous.current ? 'forward' : 'back')
      previous.current = next
      setPage(next)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const goTo = useCallback((n) => {
    const target = Math.min(Math.max(n, 1), PAGES.length)
    window.location.hash = `#/${target}`
  }, [])

  const current = PAGES.find((p) => p.id === page) ?? PAGES[0]
  const { Component } = current

  return (
    <div className={`app app--${current.tone}`}>
      <FloatingHearts />
      <header className="topbar">
        <ProgressIndicator pages={PAGES} current={page} onSelect={goTo} />
      </header>
      <main className="stage">
        <PageShell key={page} direction={direction} tone={current.tone}>
          <Component
            onNext={() => goTo(page + 1)}
            onBack={() => goTo(page - 1)}
            onRestart={() => goTo(1)}
          />
        </PageShell>
      </main>
    </div>
  )
}
