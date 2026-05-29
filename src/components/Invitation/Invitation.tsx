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
          <span className="invitation__mark">An Invitation</span>
          <h2 className="invitation__title">Host your celebration in <em>royal style.</em></h2>
          <p className="invitation__sub">
            Two banquet halls, an in-house décor atelier and a brigade of fifty in the kitchen —
            ready to bring the grandeur of India's finest culinary traditions to your celebration.
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
