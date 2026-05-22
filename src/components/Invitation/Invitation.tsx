import { Link } from 'react-router-dom'
import './Invitation.css'

export default function Invitation() {
  return (
    <section className="invitation" id="banquet">
      <div className="invitation__box reveal">
        <span className="invitation__corner tl"></span>
        <span className="invitation__corner tr"></span>
        <span className="invitation__corner bl"></span>
        <span className="invitation__corner br"></span>

        <div className="invitation__inner">
          <div className="invitation__charminar" aria-hidden="true">
            <svg viewBox="0 0 240 280" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
              <path d="M 45 280 L 45 175 L 195 175 L 195 280" />
              <path d="M 42 175 L 198 175" />
              <path d="M 100 280 L 100 230 Q 100 205 120 205 Q 140 205 140 230 L 140 280" />
              <path d="M 60 280 L 60 250 Q 60 238 72 238 Q 84 238 84 250 L 84 280" />
              <path d="M 156 280 L 156 250 Q 156 238 168 238 Q 180 238 180 250 L 180 280" />
              <path d="M 28 175 L 28 122 L 58 122 L 58 175" />
              <path d="M 31 117 L 31 96 L 55 96 L 55 117" />
              <path d="M 34 91 L 34 75 L 52 75 L 52 91" />
              <path d="M 37 70 L 37 58 L 49 58 L 49 70" />
              <path d="M 35 58 Q 32 38 43 30 Q 54 38 51 58" />
              <path d="M 43 30 L 43 8" />
              <circle cx="43" cy="18" r="3" fill="currentColor" stroke="none" />
              <path d="M 212 175 L 212 122 L 182 122 L 182 175" />
              <path d="M 209 117 L 209 96 L 185 96 L 185 117" />
              <path d="M 206 91 L 206 75 L 188 75 L 188 91" />
              <path d="M 203 70 L 203 58 L 191 58 L 191 70" />
              <path d="M 205 58 Q 208 38 197 30 Q 186 38 189 58" />
              <path d="M 197 30 L 197 8" />
              <circle cx="197" cy="18" r="3" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <span className="invitation__mark">An Invitation</span>
          <h2 className="invitation__title">Host your celebration in <em>royal style.</em></h2>
          <p className="invitation__sub">
            Two banquet halls, an in-house décor atelier and a brigade of fifty in the kitchen —
            ready to dress your day in the colours of the Nizami court.
          </p>

          <div className="invitation__stats">
            <div><b>500</b><span>Seated Guests</span></div>
            <div><b>II</b><span>Banquet Halls</span></div>
            <div><b>VI</b><span>Regional Cuisines</span></div>
          </div>

          <div className="invitation__ctas">
            <Link to="/banquet" className="btn btn--gold">Explore the Banquet <span className="arr">→</span></Link>
            <Link to="/banquet#enquire" className="btn btn--ghost">Enquire for Booking</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
