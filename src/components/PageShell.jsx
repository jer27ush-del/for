import { useEffect, useRef } from 'react'

// Wraps every page: scroll-to-top, move keyboard/screen-reader focus to the
// heading, and play the entrance transition (direction-aware).
export default function PageShell({ direction, tone = 'pink', children }) {
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
    const heading = ref.current?.querySelector('h1')
    if (heading) {
      heading.setAttribute('tabindex', '-1')
      heading.focus({ preventScroll: true })
    }
  }, [])

  return (
    <section ref={ref} className={`page page--${tone} enter-${direction}`}>
      {children}
    </section>
  )
}
