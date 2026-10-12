import { Mail } from 'lucide-react'
import Teddy from '../components/Teddy.jsx'
import Flower from '../components/Flower.jsx'

export default function Surprise({ onNext }) {
  return (
    <>
      <div className="hero reveal" style={{ '--i': 0 }}>
        <Flower className="deco deco--flower-a" />
        <Flower className="deco deco--flower-b" petal="#d9c8ff" center="#fff2b3" />
        <span className="deco deco--star-a" aria-hidden="true">✦</span>
        <span className="deco deco--star-b" aria-hidden="true">✧</span>
        <Teddy className="teddy--hero" />
      </div>

      <p className="kicker reveal" style={{ '--i': 1 }}>
        <Mail size={18} aria-hidden="true" /> Chinna Surprise 💌
      </p>
      <h1 className="title reveal" style={{ '--i': 2 }}>
        Hey, Kutty <span className="title__heart">♡</span>
      </h1>

      <div className="paper reveal" style={{ '--i': 3 }}>
        <span className="tape tape--top" aria-hidden="true" />
        <p>
          Unakkaga oru chinna website senjirukken di. Periya speech illa… manasula irundha sila vishayangal mattum
          sollanum.
        </p>
        <p>Unakku comfortable-ah irukkumbodhu paaru di. Udane edhuvum sollanum nu avasiyam illa. 🤍</p>
      </div>

      <div className="actions reveal" style={{ '--i': 4 }}>
        <button type="button" className="btn btn--primary" onClick={onNext}>
          Surprise-ah open pannu di
        </button>
      </div>
    </>
  )
}
