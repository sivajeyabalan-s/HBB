import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavDrawer.css'

interface NavDrawerProps {
  open: boolean
  onClose: () => void
}

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handler)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [open, onClose])

  return (
    <>
      <div
        className={`nav__overlay${open ? ' is-open' : ''}`}
        id="navOverlay"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className={`nav__drawer${open ? ' is-open' : ''}`}
        id="navDrawer"
        role="dialog"
        aria-label="Navigation"
        aria-modal="true"
        aria-hidden={!open}
      >
        <nav className="nav__drawer-links">
          <Link to="/" className="nav__drawer-item" onClick={onClose}>Home</Link>
          <a href="/#heritage" className="nav__drawer-item" onClick={onClose}>Heritage</a>
          <Link to="/menu" className="nav__drawer-item" onClick={onClose}>Menu</Link>
          <a href="/#services" className="nav__drawer-item" onClick={onClose}>Services</a>
          <Link to="/banquet" className="nav__drawer-item" onClick={onClose}>Banquet</Link>
          <a href="/#gallery" className="nav__drawer-item" onClick={onClose}>Gallery</a>
        </nav>
        <Link className="nav__drawer-cta btn btn--gold" to="/#reserve" onClick={onClose}>
          Order Online <span className="arr">→</span>
        </Link>
      </div>
    </>
  )
}
