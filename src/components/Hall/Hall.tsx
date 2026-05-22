import './Hall.css'

interface HallSpecs {
  seated: string
  standing: string
  sqft: string
}

interface HallProps {
  name: string
  sub: string
  desc: string
  specs: HallSpecs
  imgSrc?: string
  imgLabel?: string
  delay?: number
}

export default function Hall({ name, sub, desc, specs, imgSrc, imgLabel, delay }: HallProps) {
  return (
    <article className="hall reveal" data-delay={delay}>
      <div className="hall__img">
        {imgSrc ? <img src={imgSrc} alt={name} /> : imgLabel}
      </div>
      <div className="hall__body">
        <h3 className="hall__name" dangerouslySetInnerHTML={{ __html: name }} />
        <div className="hall__sub">{sub}</div>
        <p className="hall__desc">{desc}</p>
        <div className="hall__specs">
          <div><b>{specs.seated}</b><span>Seated</span></div>
          <div><b>{specs.standing}</b><span>Standing</span></div>
          <div><b>{specs.sqft}</b><span>sq ft</span></div>
        </div>
      </div>
    </article>
  )
}
