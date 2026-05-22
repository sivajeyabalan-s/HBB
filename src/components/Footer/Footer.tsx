import { Link } from 'react-router-dom'
import './Footer.css'

interface FooterProps {
  showTop?: boolean
  contactLabel?: string
  contactInfo?: string
}

export default function Footer({
  showTop = false,
  contactLabel = 'Reserve',
  contactInfo = '+91 98765 43210\nreservations@hyderabadbiryani.in',
}: FooterProps) {
  return (
    <footer className="footer">
      {showTop && (
        <div className="footer__top">
          <div className="footer__charminar" aria-hidden="true">
            <svg viewBox="0 0 240 280" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
              <path d="M 45 280 L 45 175 L 195 175 L 195 280" />
              <path d="M 42 175 L 198 175" />
              <path d="M 42 170 L 198 170" />
              <path d="M 100 280 L 100 230 Q 100 205 120 205 Q 140 205 140 230 L 140 280" />
              <path d="M 60 280 L 60 250 Q 60 238 72 238 Q 84 238 84 250 L 84 280" />
              <path d="M 156 280 L 156 250 Q 156 238 168 238 Q 180 238 180 250 L 180 280" />
              <path d="M 28 175 L 28 122 L 58 122 L 58 175" />
              <path d="M 31 117 L 31 96 L 55 96 L 55 117" />
              <path d="M 34 91 L 34 75 L 52 75 L 52 91" />
              <path d="M 37 70 L 37 58 L 49 58 L 49 70" />
              <path d="M 35 58 Q 32 38 43 30 Q 54 38 51 58" />
              <path d="M 43 30 L 43 8" />
              <circle cx="43" cy="18" r="2.4" fill="currentColor" stroke="none" />
              <path d="M 212 175 L 212 122 L 182 122 L 182 175" />
              <path d="M 209 117 L 209 96 L 185 96 L 185 117" />
              <path d="M 206 91 L 206 75 L 188 75 L 188 91" />
              <path d="M 203 70 L 203 58 L 191 58 L 191 70" />
              <path d="M 205 58 Q 208 38 197 30 Q 186 38 189 58" />
              <path d="M 197 30 L 197 8" />
              <circle cx="197" cy="18" r="2.4" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <p>Beneath the watch of the four minarets, the dastarkhwan is laid every evening.</p>
        </div>
      )}

      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__seal"><img src="/assets/logo.png" alt="" /></div>
          <p>Restaurant · Banquet Hall · Events &amp; Catering. A Nawabi house of hospitality, opening its dastarkhwan to your most precious occasions.</p>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li><a href="/#heritage">Heritage</a></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><a href="/#services">Services</a></li>
            <li><Link to="/banquet">Banquet Hall</Link></li>
            <li><a href="/#reserve">Reservations</a></li>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          <ul>
            <li>Mon — Thu · 6:30 PM – 11:30 PM</li>
            <li>Fri — Sun · 12:00 PM – 12:00 AM</li>
            <li>Banquet · by appointment</li>
            <li>Closed on Eid &amp; Diwali</li>
          </ul>
        </div>
        <div className="footer__contact">
          <div>
            <small>Address</small>
            <span>4-1-Royal Avenue, Banjara Hills,<br />Hyderabad — 500034</span>
          </div>
          <div>
            <small>{contactLabel}</small>
            <span dangerouslySetInnerHTML={{ __html: contactInfo.replace(/\n/g, '<br/>') }} />
          </div>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="6" width="18" height="12" rx="3" />
                <path d="M11 9.5 L 15 12 L 11 14.5 Z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 20 L 5.5 15.5 A 8 8 0 1 1 8.5 18.5 Z" />
                <path d="M9 10 c 0 3 2 5 5 5 l 1.5 -1.5 -2 -1 -1 1 c -1 -.5 -2 -1.5 -2.5 -2.5 l 1 -1 -1 -2 z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__base">
        <span>© 2026 Hyderabad Biryani &amp; Banquet · All Rights Reserved</span>
        <a className="made" href="https://brisque.com" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/assets/maghil.png" alt="Maghil" className="made__logo" /> 2026
        </a>
      </div>
    </footer>
  )
}
