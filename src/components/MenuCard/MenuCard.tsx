import './MenuCard.css'

interface MenuCardProps {
  name: string
  price: string
  desc: string
  tags: { label: string; type: 'signature' | 'spicy' | 'veg' }[]
  imgSrc?: string
  imgAlt?: string
  imgLabel?: string
}

export default function MenuCard({ name, price, desc, tags, imgSrc, imgAlt }: MenuCardProps) {
  return (
    <article className="item">
      {imgSrc && (
        <div className="item__img">
          <img src={imgSrc} alt={imgAlt || name} />
        </div>
      )}
      <div className="item__body">
        <div className="item__top">
          <h3 className="item__name" dangerouslySetInnerHTML={{ __html: name }} />
          <span className="item__dotline"></span>
          <span className="item__price">{price}</span>
        </div>
        <p className="item__desc">{desc}</p>
        {tags.length > 0 && (
          <div className="item__tags">
            {tags.map((t, i) => (
              <span key={i} className={`tag ${t.type}`}>{t.label}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
