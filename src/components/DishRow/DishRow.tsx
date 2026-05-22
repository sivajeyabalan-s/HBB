import './DishRow.css'

interface DishRowProps {
  num: string
  numLabel: string
  sub: string
  name: string
  price: string
  desc: string
  tagLabel: string
  spiceLabel: string
  spiceDots: number
  totalDots: number
  imgSrc?: string
  imgAlt?: string
  flipped?: boolean
}

export default function DishRow({
  num, numLabel, sub, name, price, desc, tagLabel, spiceLabel,
  spiceDots, totalDots, imgSrc, imgAlt, flipped,
}: DishRowProps) {
  return (
    <article className={`dish-row reveal${flipped ? ' is-flipped' : ''}`}>
      <div className="dish-row__num">
        {num}
        <small>{numLabel}</small>
      </div>
      <div className="dish-row__body">
        <div className="dish-row__sub">{sub}</div>
        <div className="dish-row__title">
          <h3 className="dish-row__name" dangerouslySetInnerHTML={{ __html: name }} />
          <span className="dish-row__dotline"></span>
          <span className="dish-row__price">{price}</span>
        </div>
        <p className="dish-row__desc">{desc}</p>
        <div className="dish-row__foot">
          <span className="tag">{tagLabel}</span>
          <span>
            {spiceLabel}{' '}
            {Array.from({ length: totalDots }).map((_, i) => (
              <span key={i} className={`dot${i >= spiceDots ? ' off' : ''}`} />
            ))}
          </span>
        </div>
      </div>
      <div className="dish-row__img">
        {imgSrc && <img src={imgSrc} alt={imgAlt || ''} />}
      </div>
    </article>
  )
}
