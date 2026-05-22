import './Pkg.css'

interface PkgProps {
  name: string
  sub: string
  price: string
  features: string[]
  featured?: boolean
  ctaVariant?: 'gold' | 'ghost'
  delay?: number
}

export default function Pkg({ name, sub, price, features, featured, ctaVariant = 'ghost', delay }: PkgProps) {
  return (
    <article className={`pkg reveal${featured ? ' is-featured' : ''}`} data-delay={delay}>
      <h3 className="pkg__name">{name}</h3>
      <div className="pkg__sub">{sub}</div>
      <div className="pkg__price">
        {price} <small>per plate</small>
      </div>
      <ul className="pkg__list">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <a
        className={`btn ${ctaVariant === 'gold' ? 'btn--gold' : 'btn--ghost'}`}
        href="#enquire"
      >
        Enquire{ctaVariant === 'gold' && <span className="arr">→</span>}
      </a>
    </article>
  )
}
