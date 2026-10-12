import { ArrowLeft } from 'lucide-react'
import { SELFIE_FILE, asset } from '../config.js'

export default function Sorry({ onNext, onBack }) {
  return (
    <>
      <p className="kicker reveal" style={{ '--i': 0 }}>Sorry Di 🥺</p>
      <h1 className="title reveal" style={{ '--i': 1 }}>Sorry, di.</h1>

      <div className="polaroid reveal" style={{ '--i': 2 }}>
        <div className="polaroid__card">
          <span className="tape tape--top" aria-hidden="true" />
          <img
            className="polaroid__img"
            src={asset(SELFIE_FILE)}
            alt="Oru selfie — teddy bear, flowers-oda “Sorry Kutty… Please forgive me?” nu ezhudhina paper pidichukittu irukken"
            width="1254"
            height="1254"
            decoding="async"
          />
        </div>
        <span className="sticker sticker--a">Sorryyy di 🥺</span>
        <span className="sticker sticker--b">Konjam sirichidu ♡</span>
        <span className="sticker sticker--c">Indha face-a paathum kovama? 😭❤️</span>
      </div>

      <div className="paper paper--tall reveal" style={{ '--i': 3 }}>
        <p>Andha naal naan sonna words unna hurt pannirukkum nu ippo puriyudhu di.</p>
        <p>
          ‘Love pannina pesu, illana pesaatha’ nu naan sonnadhu thappu. Un feelings-ah purinjukkanum nu irundha naaney,
          unna pressure pannura maadhiri pesitten.
        </p>
        <p>Unakku un reasons irukku, unakku time theva padalaam. Adha purinjukkaama en bayathula pesitten.</p>
        <p>
          Unna hurt panradhu en intention illa di, aana en words unna hurt pannirundha adha naan accept panren. Excuse
          solla maaten.
        </p>
        <p className="signoff">Manasara sorry, Kutty. 🥺❤️</p>
      </div>

      <div className="actions reveal" style={{ '--i': 4 }}>
        <button type="button" className="btn btn--primary" onClick={onNext}>
          Innum konjam sollanum di
        </button>
        <button type="button" className="btn btn--ghost" onClick={onBack}>
          <ArrowLeft size={18} aria-hidden="true" /> Pinnaadi
        </button>
      </div>
    </>
  )
}
