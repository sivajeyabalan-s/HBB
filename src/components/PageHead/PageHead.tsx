import { Link } from 'react-router-dom'
import './PageHead.css'

interface PageHeadCta {
  label: string
  href: string
  variant?: 'gold' | 'ghost'
}

interface PageHeadProps {
  crumbLabel: string
  crumbTo: string
  title: string
  lede?: string
  ctas?: PageHeadCta[]
}

export default function PageHead({ crumbLabel, crumbTo, title, lede, ctas }: PageHeadProps) {
  return (
    <header className="pagehead">
      <div className="pagehead__inner">
        <span className="pagehead__crumb">
          <Link to={crumbTo}>Home</Link>
          &nbsp;·&nbsp; {crumbLabel}
        </span>
        <h1
          className="pagehead__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {lede && <p className="pagehead__lede">{lede}</p>}
        <div className="ornament">
          <span className="bar"></span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
          </svg>
          <span className="bar"></span>
        </div>
        {ctas && ctas.length > 0 && (
          <div className="pagehead__ctas">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.variant === 'gold' ? 'btn--gold' : 'btn--ghost'} btn--sm`}
              >
                {cta.label}
                {cta.variant === 'gold' && <span className="arr">→</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
