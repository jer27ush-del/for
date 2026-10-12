import { useEffect, useRef, useState } from 'react'
import { ImagePlus, X } from 'lucide-react'
import { MEMORY_PHOTO_FILE, asset } from '../config.js'

// Optional photo slot. The chosen picture is previewed with a local blob URL,
// so nothing is uploaded anywhere and it disappears when the page is closed.
// To keep a picture permanently, see MEMORY_PHOTO_FILE in src/config.js.
export default function PhotoSlot() {
  const fixed = MEMORY_PHOTO_FILE ? asset(MEMORY_PHOTO_FILE) : null
  const [src, setSrc] = useState(fixed)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    return () => {
      if (src && src.startsWith('blob:')) URL.revokeObjectURL(src)
    }
  }, [src])

  const onPick = (event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('Image file mattum select pannunga 🌷')
      return
    }
    setError('')
    setSrc(URL.createObjectURL(file))
  }

  const onClear = () => {
    setError('')
    setSrc(fixed)
  }

  const hasCustom = src && src !== fixed

  return (
    <figure className="photoslot">
      <div className="photoslot__frame">
        <span className="tape tape--top" aria-hidden="true" />
        {src ? (
          <img className="photoslot__img" src={src} alt="Oru special photo" />
        ) : (
          <button type="button" className="photoslot__empty" onClick={() => inputRef.current?.click()}>
            <ImagePlus size={30} aria-hidden="true" />
            <span className="photoslot__hint">Oru special photo inga add pannalaam</span>
            <span className="photoslot__sub">(optional)</span>
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        className="visually-hidden"
        type="file"
        accept="image/*"
        onChange={onPick}
        aria-label="Choose a photo to preview"
      />

      <figcaption className="photoslot__caption">
        <button type="button" className="chip" onClick={() => inputRef.current?.click()}>
          <ImagePlus size={16} aria-hidden="true" />
          {src ? 'Vera photo' : 'Photo choose pannu'}
        </button>
        {hasCustom && (
          <button type="button" className="chip chip--quiet" onClick={onClear}>
            <X size={16} aria-hidden="true" />
            Remove
          </button>
        )}
      </figcaption>
      <p className="photoslot__note">Photo indha phone-la mattum kaattum — entha server-kum upload aagaadhu.</p>
      <p className="photoslot__error" role="status" aria-live="polite">
        {error}
      </p>
    </figure>
  )
}
