export default function ProgressIndicator({ pages, current, onSelect }) {
  const active = pages.find((p) => p.id === current)
  const percent = ((current - 1) / (pages.length - 1)) * 100

  return (
    <nav className="progress" aria-label="Page progress">
      <div className="progress__track" aria-hidden="true">
        <div className="progress__fill" style={{ width: `${percent}%` }} />
      </div>
      <ol className="progress__dots">
        {pages.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              className={`progress__dot${p.id === current ? ' is-current' : ''}${p.id < current ? ' is-done' : ''}`}
              onClick={() => onSelect(p.id)}
              aria-label={`Page ${p.id} of ${pages.length}: ${p.label}`}
              aria-current={p.id === current ? 'step' : undefined}
            >
              <span className="progress__dot-inner" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ol>
      <p className="progress__label">
        <span className="progress__count">
          {current} / {pages.length}
        </span>
        <span aria-hidden="true"> · </span>
        {active?.label} {active?.emoji}
      </p>
    </nav>
  )
}
