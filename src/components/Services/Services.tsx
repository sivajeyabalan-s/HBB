import Minaret from '../Minaret/Minaret'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="sec-head">
        <div className="sec-head__num">III.</div>
        <h2 className="sec-head__title reveal">Three rooms. <em>One house.</em></h2>
        <div className="sec-head__aside">What We Host</div>
      </div>

      <div className="services">
        <Minaret
          num="Wing I"
          name="Restaurant <em>Dining</em>"
          desc="An eighty-seat fine-dining room — warm light, copper-leaf ceiling, table-side biryani service from a sealed handi."
          list={[
            'Open daily · 6.30 PM — 11.30 PM',
            'À la carte &amp; chef\'s tasting menu',
            'Private booths &amp; valet parking',
          ]}
          imgSrc="/assets/home/Restaurant Dining.jpg"
          imgAlt="Restaurant Dining"
        />
        <Minaret
          num="Wing II"
          name="Banquet <em>Hall</em>"
          desc="Two ornate halls seating up to 500 guests. Hand-cut chandeliers, marble floors and a grand stage for every celebration."
          list={[
            'Capacity · 80 – 500 guests',
            'In-house décor &amp; lighting team',
            'Bridal suite &amp; green rooms',
          ]}
          imgSrc="/assets/home/banguet hall.jpg"
          imgAlt="Banquet Hall"
          delay={1}
        />
        <Minaret
          num="Wing III"
          name="Events &amp; <em>Catering</em>"
          desc="Off-site catering for weddings, receptions and corporate gatherings — our kitchen travels, the silver service follows."
          list={[
            'Weddings, mehndi, receptions &amp; sangeet',
            'Custom menus across 6 cuisines',
            'Service staff in livery, on-site',
          ]}
          imgSrc="/assets/home/Event and Catering - Copy.jpg"
          imgAlt="Events & Catering"
          delay={2}
        />
      </div>
    </section>
  )
}
