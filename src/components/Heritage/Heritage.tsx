import './Heritage.css'

export default function Heritage() {
  return (
    <>
      <section className="section" id="heritage" style={{ paddingBottom: 0 }}>
        <div className="sec-head">
          <div className="sec-head__num">I.</div>
          <h2 className="sec-head__title reveal">A house built on <em>dastarkhwan.</em></h2>
          <div className="sec-head__aside">Heritage &amp; Philosophy</div>
        </div>

        <div className="heritage">
          <div className="heritage__left reveal">
            <h3 className="heritage__h">
              The long, generous table of <em>Hyderabad —</em> served slowly, served well.
            </h3>
            <p className="heritage__dropcap">
              For over a decade, our kitchen has kept watch over a single, unhurried promise:
              rice grain by grain, masala stone by stone, the patience of a sealed handi and the
              whisper of saffron in warm milk. Recipes carried down from a Nawabi household in the
              old city, refined into a contemporary fine-dining grammar.
            </p>
            <p className="heritage__body">
              Every dish is plated with the reverence of a court banquet — slow, intentional,
              and uncompromising. We don't cook biryani; we host it.
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

      <div className="divider-charminar reveal">
        <span className="bar"></span>
        <span className="mark"></span>
        <span className="bar"></span>
      </div>
    </>
  )
}
