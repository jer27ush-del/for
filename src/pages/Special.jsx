import { ArrowLeft, Heart, MessageCircle, Sparkles } from 'lucide-react'
import PhotoSlot from '../components/PhotoSlot.jsx'
import Flower from '../components/Flower.jsx'

const CARDS = [
  {
    icon: Heart,
    title: 'Un care',
    text: 'Nee enna care panra chinna chinna vishayangal kooda enakku romba special di.',
  },
  {
    icon: MessageCircle,
    title: 'Namma random talks',
    text: 'Namma summa pesura conversations kooda en day-ah nalla maathidum di.',
  },
  {
    icon: Sparkles,
    title: 'Un style',
    text: 'Nee nee-ya irukkuradhe enakku pidikkum. Enkitta edhuvum prove panna thevai illa di.',
  },
]

export default function Special({ onNext, onBack }) {
  return (
    <>
      <p className="kicker reveal" style={{ '--i': 0 }}>Enakku Special-aana Chinna Vishayangal 🌷</p>
      <h1 className="title title--script reveal" style={{ '--i': 1 }}>
        Enakku special-aana chinna vishayangal
      </h1>

      <ul className="cards">
        {CARDS.map(({ icon: Icon, title, text }, index) => (
          <li
            key={title}
            className={`note-card note-card--${index + 1} reveal`}
            style={{ '--i': index + 2 }}
          >
            <span className="tape tape--corner" aria-hidden="true" />
            <span className="note-card__icon" aria-hidden="true">
              <Icon size={22} />
            </span>
            <h2 className="note-card__title">{title}</h2>
            <p className="note-card__text">{text}</p>
            {index === 1 && <Flower className="note-card__flower" petal="#d9c8ff" />}
          </li>
        ))}
      </ul>

      <div className="reveal" style={{ '--i': 5 }}>
        <PhotoSlot />
      </div>

      <div className="actions reveal" style={{ '--i': 6 }}>
        <button type="button" className="btn btn--primary" onClick={onNext}>
          Unna sirikka vaikka oru chinna vishayam
        </button>
        <button type="button" className="btn btn--ghost" onClick={onBack}>
          <ArrowLeft size={18} aria-hidden="true" /> Pinnaadi
        </button>
      </div>
    </>
  )
}
