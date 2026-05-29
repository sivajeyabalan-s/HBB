import Hall from '../Hall/Hall'
import './Halls.css'

export default function Halls() {
  return (
    <section className="section section--patterned" id="halls">
      <div className="wrap">
        <div className="section__head">
          <div className="eyebrow reveal">Our Halls</div>
          <h2 className="section__title reveal" data-delay={1}>Two rooms, <em>each a world.</em></h2>
          <p className="section__lede reveal" data-delay={2}>
            Named for the courts that inspired them — both halls share a marble floor,
            hand-cut chandeliers, and an in-house décor team that travels with the bride.
          </p>
        </div>
        <div className="halls">
          <Hall
            name="Falaknuma <em>Hall</em>"
            sub="The Grand Hall"
            desc="The larger of the two — a vaulted ceiling crowned by a hand-cut Bohemian chandelier, marble flooring laid in intricate floral patterns, and a raised stage for the wedding mandap."
            specs={{ seated: '500', standing: '700', sqft: '8,400' }}
            imgSrc="/assets/banquet/Falaknuma Hall.jpg"
            delay={1}
          />
          <Hall
            name="Chowmahalla <em>Hall</em>"
            sub="The Private Hall"
            desc="The intimate hall — wood-panelled walls, a sky of pendant brass lamps, and a curtained anteroom for family ceremonies. Best for engagements, receptions and corporate evenings."
            specs={{ seated: '180', standing: '260', sqft: '3,200' }}
            imgSrc="/assets/banquet/Chowmahalla Hall.jpg"
            delay={2}
          />
        </div>
      </div>
    </section>
  )
}
