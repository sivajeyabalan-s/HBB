import './Heritage.css'

export default function Heritage() {
  return (
    <>
      <section className="section" id="heritage" style={{ paddingBottom: 0 }}>
        <div className="sec-head">
          <div className="sec-head__num">I.</div>
          <h2 className="sec-head__title reveal">A house built on the <em>grand Indian table.</em></h2>
          <div className="sec-head__aside">Heritage &amp; Philosophy</div>
        </div>

        <div className="heritage">
          <div className="heritage__left reveal">
            <h3 className="heritage__h">
              The long, generous table of <em>India —</em> cooked slowly, served with pride.
            </h3>
            <p className="heritage__dropcap">
              For over a decade, our kitchen has kept watch over a single, unhurried promise:
              rice grain by grain, masala stone by stone, the patience of a sealed handi and the
              warmth of slow-simmered gravies. Recipes carried down from kitchens across Hyderabad,
              Punjab and the southern coast, refined into a contemporary fine-dining experience.
            </p>
            <p className="heritage__body">
              Every dish is plated with reverence — slow, intentional, and uncompromising.
              From the tandoor to the tawa, we don't just cook; we celebrate India's table.
            </p>
            <div className="heritage__facts">
              <div>
                <b>XII</b>
                <span>Years at the Table</span>
              </div>
              <div>
                <b>50+</b>
                <span>Brigade in the Kitchen</span>
              </div>
              <div>
                <b>VIII</b>
                <span>Hours Per Handi</span>
              </div>
            </div>
          </div>

          <div className="heritage__img-wrap reveal" data-delay="2">
            <img src="/assets/home/aboutUsImageBG.png" alt="Our Heritage" />
          </div>
        </div>
      </section>

      <div className="divider-mark reveal">
        <span className="bar"></span>
        <span className="mark"></span>
        <span className="bar"></span>
      </div>
    </>
  )
}
