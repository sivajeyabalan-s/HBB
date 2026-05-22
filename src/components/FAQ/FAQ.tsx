import './FAQ.css'

const FAQS = [
  {
    q: 'How far in advance should we book?',
    a: 'For wedding season — Oct through Feb — we recommend booking eight to ten months in advance. Other dates can usually be held with three months\' notice.',
  },
  {
    q: 'Can we bring our own décor team or caterer?',
    a: 'Our kitchen handles all food in-house. Décor may be brought in, though most clients prefer our atelier — it shaves cost and matches the hall\'s bones.',
  },
  {
    q: 'Do you accommodate vegetarian-only menus?',
    a: 'Yes — every package can be served pure-vegetarian or Jain. Our khansamah also accommodates halal-only, allergen-free and gluten-free menus.',
  },
  {
    q: 'Is parking and valet available?',
    a: 'A 180-car basement and tandem valet are included with every banquet booking. Overflow valet is available with notice.',
  },
]

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap" style={{ maxWidth: '880px' }}>
        <div className="section__head">
          <div className="eyebrow reveal">Before You Enquire</div>
          <h2 className="section__title reveal" data-delay={1}>Some <em>quiet</em> answers.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <details key={i} className="faq-item reveal" data-delay={i}>
              <summary>
                {faq.q}
                <span className="faq-plus">+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
