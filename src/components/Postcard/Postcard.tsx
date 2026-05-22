import './Postcard.css'

interface PostcardProps {
  no: string
  noLabel: string
  body: string
  guest: string
  occasion: string
  delay?: number
}

function StarSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l2.2 4.6L15 6.3l-3.7 3.4L12.4 15 8 12.6 3.6 15l1.1-5.3L1 6.3l4.8-.7z" />
    </svg>
  )
}

export default function Postcard({ no, noLabel, body, guest, occasion, delay }: PostcardProps) {
  return (
    <article className="postcard reveal" data-delay={delay}>
      <div className="postcard__head">
        <div className="postcard__no">
          {no}
          <small>{noLabel}</small>
        </div>
        <div className="postcard__stamp">
          ★ ★ ★ ★ ★
          <b>Five</b>
        </div>
      </div>
      <p className="postcard__body">{body}</p>
      <div className="postcard__foot">
        <div className="postcard__who">
          {guest}
          <small>{occasion}</small>
        </div>
        <span className="stars">
          <StarSvg /><StarSvg /><StarSvg /><StarSvg /><StarSvg />
        </span>
      </div>
    </article>
  )
}
