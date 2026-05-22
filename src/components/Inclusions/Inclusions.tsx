import './Inclusions.css'

export default function Inclusions() {
  return (
    <section className="section section--alt">
      <div className="wrap">
        <div className="section__head">
          <div className="eyebrow reveal">What's Included</div>
          <h2 className="section__title reveal" data-delay={1}>All the things <em>we worry about,</em> so you don't.</h2>
        </div>
        <div className="services services--4col">
          <article className="svc reveal" data-delay={1} style={{ padding: '40px 28px' }}>
            <div className="svc__icon">
              <img src="/assets/banquet/stage.png" alt="Décor & Stage" />
            </div>
            <div className="svc__sub">Inclusion 01</div>
            <h3 className="svc__name" style={{ fontSize: '28px' }}>Décor &amp; Stage</h3>
            <p className="svc__desc">Floral mandap, drape canopy, custom backdrop and centrepieces from our in-house atelier.</p>
          </article>
          <article className="svc reveal" data-delay={2} style={{ padding: '40px 28px' }}>
            <div className="svc__icon">
              <img src="/assets/banquet/food.png" alt="Live Cuisine" />
            </div>
            <div className="svc__sub">Inclusion 02</div>
            <h3 className="svc__name" style={{ fontSize: '28px' }}>Live Cuisine</h3>
            <p className="svc__desc">Up to 24 dishes across six regional cuisines, with live counters of biryani, kebabs and chaat.</p>
          </article>
          <article className="svc reveal" data-delay={3} style={{ padding: '40px 28px' }}>
            <div className="svc__icon">
              <img src="/assets/banquet/suit.png" alt="Bridal Suite" />
            </div>
            <div className="svc__sub">Inclusion 03</div>
            <h3 className="svc__name" style={{ fontSize: '28px' }}>Bridal Suite</h3>
            <p className="svc__desc">Private green rooms with hair &amp; makeup station, refreshments and a separate guest entrance.</p>
          </article>
          <article className="svc reveal" data-delay={4} style={{ padding: '40px 28px' }}>
            <div className="svc__icon">
              <img src="/assets/banquet/concierge.png" alt="Concierge" />
            </div>
            <div className="svc__sub">Inclusion 04</div>
            <h3 className="svc__name" style={{ fontSize: '28px' }}>Concierge</h3>
            <p className="svc__desc">A dedicated banquet manager from the first call through the last guest's farewell.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
