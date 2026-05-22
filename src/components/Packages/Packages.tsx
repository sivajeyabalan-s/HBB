import Pkg from '../Pkg/Pkg'
import './Packages.css'

export default function Packages() {
  return (
    <section className="section" id="packages">
      <div className="wrap">
        <div className="section__head">
          <div className="eyebrow reveal">Choose Your Court</div>
          <h2 className="section__title reveal" data-delay={1}>Three packages, <em>one standard.</em></h2>
          <p className="section__lede reveal" data-delay={2}>
            Each tier shares the same kitchen, the same livery, the same care.
            The difference lies in the décor, the cuisines, and the closing flourishes.
          </p>
        </div>
        <div className="packages">
          <Pkg
            name="Mehfil"
            sub="The Intimate Package"
            price="$ 17"
            features={[
              'Chowmahalla Hall · up to 180 guests',
              '14 dishes across 3 cuisines',
              'One live counter of your choice',
              'Standard floral & drape décor',
              'Banquet manager & service staff',
              'Welcome sherbet on arrival',
            ]}
            ctaVariant="ghost"
            delay={1}
          />
          <Pkg
            name="Darbar"
            sub="The Royal Package"
            price="$ 26"
            features={[
              'Falaknuma Hall · up to 400 guests',
              '20 dishes across 5 cuisines',
              'Three live counters (biryani, kebab, chaat)',
              'Premium floral mandap & stage',
              'Bridal suite & family green rooms',
              'Welcome rose-sherbet & paan counter',
              'Dedicated photography coordinator',
            ]}
            featured
            ctaVariant="gold"
            delay={2}
          />
          <Pkg
            name="Shahi"
            sub="The Crown Package"
            price="$ 40"
            features={[
              'Falaknuma Hall · up to 500 guests',
              '24 dishes across 6 cuisines',
              'Five live counters, chef table-side',
              'Custom-designed mandap & lighting',
              'Bridal suite, green rooms, valet',
              'Welcome sherbet, paan, ittar attar',
              'End-to-end event direction',
              'Mehndi & sangeet add-ons available',
            ]}
            ctaVariant="ghost"
            delay={3}
          />
        </div>
        <p style={{ textAlign: 'center', marginTop: '50px', color: 'var(--ivory-dim)', fontSize: '13px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.8 }}>
          All packages are fully customisable. Pricing excludes décor upgrades, premium liquor service and applicable taxes. A 25% retainer holds your date.
        </p>
      </div>
    </section>
  )
}
