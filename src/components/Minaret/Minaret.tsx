import './Minaret.css'

interface MinaretProps {
  num: string
  name: string
  desc: string
  list: string[]
  imgSrc: string
  imgAlt: string
  delay?: number
}

export default function Minaret({ num, name, desc, list, imgSrc, imgAlt, delay }: MinaretProps) {
  return (
    <article className="minaret reveal" data-delay={delay}>
      <div className="minaret__arch">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="minaret__body">
        <div className="minaret__num">{num}</div>
        <h3 className="minaret__name" dangerouslySetInnerHTML={{ __html: name }} />
        <p className="minaret__desc">{desc}</p>
        <ul className="minaret__list">
          {list.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </article>
  )
}
