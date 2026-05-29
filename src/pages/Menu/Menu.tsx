import { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import PageHead from '../../components/PageHead/PageHead'
import MenuFilters from '../../components/MenuFilters/MenuFilters'
import MenuCategory from '../../components/MenuCategory/MenuCategory'
import Footer from '../../components/Footer/Footer'
import { useReveal } from '../../hooks/useReveal'
import { Link } from 'react-router-dom'

const CATEGORIES = [
  {
    cat: 'biryani',
    num: 'I.',
    title: 'Biryani <em>— the House Signature</em>',
    sub: 'Sealed & broken at table',
    items: [
      { name: 'Dum Gosht <em>Biryani</em>', price: '$ 9', desc: 'Long-grain basmati layered with slow-braised mutton, sealed under a charcoal hush of kewra and saffron.', tags: [{ label: 'Signature', type: 'signature' as const }, { label: 'Medium', type: 'spicy' as const }], imgLabel: '[ Dum Gosht\nBiryani ]' },
      { name: 'Murgh Awadhi <em>Biryani</em>', price: '$ 8', desc: 'Chicken on the bone, marinated overnight in yoghurt and whole spices, then dum-cooked with mint and fried onions.', tags: [{ label: 'Mild', type: 'spicy' as const }], imgLabel: '[ Murgh\nBiryani ]' },
      { name: 'Subz Bahar <em>Biryani</em>', price: '$ 6', desc: 'Garden-fresh vegetables and paneer in a saffron rice, perfumed with rose and screwpine.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Subz\nBiryani ]' },
      { name: 'Kacchi Gosht <em>Biryani</em>', price: '$ 10', desc: 'Raw mutton sealed with rice and cooked in one motion — the oldest, hardest, and most rewarded of the biryanis.', tags: [{ label: "Chef's Choice", type: 'signature' as const }, { label: 'Medium', type: 'spicy' as const }], imgLabel: '[ Kacchi\nBiryani ]' },
    ],
  },
  {
    cat: 'kebab',
    num: 'II.',
    title: 'Kebabs &amp; <em>Starters</em>',
    sub: 'From the sigri',
    items: [
      { name: 'Galouti <em>Kebab</em>', price: '$ 6', desc: 'Melt-in-the-mouth lamb mince with 32 spices, set on saffron warqi paratha.', tags: [{ label: 'Signature', type: 'signature' as const }], imgLabel: '[ Galouti\nKebab ]' },
      { name: 'Murgh <em>Reshmi</em>', price: '$ 5', desc: 'Chicken marinated in cream, cashew paste and cardamom, kissed by tandoor heat.', tags: [{ label: 'Mild', type: 'spicy' as const }], imgLabel: '[ Murgh\nReshmi ]' },
      { name: 'Kakori <em>Seekh</em>', price: '$ 5', desc: 'Skewers of finely-pounded mutton with rose petals and mace, charred slowly.', tags: [{ label: 'Medium', type: 'spicy' as const }], imgLabel: '[ Seekh\nKakori ]' },
      { name: 'Achari Paneer <em>Tikka</em>', price: '$ 4', desc: 'Cottage cheese in a pickle-spiced marinade, blistered in the tandoor with onion and pepper.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Paneer\nTikka ]' },
    ],
  },
  {
    cat: 'mains',
    num: 'III.',
    title: 'From the <em>Main Kitchen</em>',
    sub: 'Gravies & Curries',
    items: [
      { name: 'Royal Mutton <em>Korma</em>', price: '$ 8', desc: 'Tender mutton in a gravy of cashew, almond and yoghurt; finished with kewra water and a glaze of pure ghee.', tags: [{ label: 'Signature', type: 'signature' as const }], imgLabel: '[ Royal Mutton\nKorma ]' },
      { name: 'Murgh <em>Makhani</em>', price: '$ 6', desc: 'Tandoori chicken in a velvet tomato gravy, finished with cream and crushed fenugreek.', tags: [{ label: 'Mild', type: 'spicy' as const }], imgLabel: '[ Murgh\nMakhani ]' },
      { name: 'Nalli <em>Nihari</em>', price: '$ 9', desc: 'Mutton shank stewed eight hours till the marrow lets go — served with ginger, lime and warm sheermal.', tags: [{ label: 'Medium', type: 'spicy' as const }], imgLabel: '[ Nihari ]' },
      { name: 'Dal <em>Bukhara</em>', price: '$ 5', desc: 'Black lentils simmered overnight on a slow tandoor flame, enriched with butter and tomato.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Dal\nBukhara ]' },
      { name: 'Paneer <em>Pasanda</em>', price: '$ 5', desc: 'Stuffed paneer parcels in a saffron-tinted nut gravy, garnished with edible silver.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Paneer\nPasanda ]' },
      { name: 'Mirchi ka <em>Salan</em>', price: '$ 4', desc: 'The traditional Hyderabadi accompaniment — chillies in a tamarind, peanut and sesame gravy.', tags: [{ label: 'Vegetarian', type: 'veg' as const }, { label: 'Hot', type: 'spicy' as const }], imgLabel: '[ Mirchi ka\nSalan ]' },
    ],
  },
  {
    cat: 'breads',
    num: 'IV.',
    title: 'Breads &amp; <em>Rice</em>',
    sub: 'From the tandoor',
    items: [
      { name: 'Saffron <em>Sheermal</em>', price: '$ 2', desc: 'Sweet-tinged saffron flatbread, traditionally served alongside nihari.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Sheermal ]' },
      { name: 'Warqi <em>Paratha</em>', price: '$ 2', desc: 'Hundred-leaved paratha, pulled and folded by hand until it shatters at first bite.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Warqi\nParatha ]' },
      { name: 'Roomali <em>Roti</em>', price: '$ 1.50', desc: 'Handkerchief-thin roti, swung over a domed tawa till translucent.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Roomali ]' },
      { name: 'Zafrani <em>Pulao</em>', price: '$ 4', desc: 'Saffron-streaked basmati cooked in mutton stock and finished with caramelised onion.', tags: [], imgLabel: '[ Zafrani\nPulao ]' },
    ],
  },
  {
    cat: 'dessert',
    num: 'V.',
    title: 'A Sweet <em>Close</em>',
    sub: 'Mithai, the courtly way',
    items: [
      { name: 'Shahi <em>Tukda</em>', price: '$ 4', desc: 'Bread fried to amber, soaked in saffron rabri, crowned with pistachio and edible silver.', tags: [{ label: 'Signature', type: 'signature' as const }, { label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Shahi\nTukda ]' },
      { name: 'Double ka <em>Meetha</em>', price: '$ 3', desc: "Hyderabad's bread pudding — toasted, drowned in cardamom syrup, sweetened with rabri.", tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Double ka\nMeetha ]' },
      { name: 'Rose <em>Phirni</em>', price: '$ 3', desc: 'Ground basmati set in milk, perfumed with rose water and crowned with pistachio.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Phirni ]' },
      { name: 'Qubani ka <em>Meetha</em>', price: '$ 3', desc: 'Slow-cooked apricot compote with the kernel cracked back in — served with vanilla cream.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Qubani ka\nMeetha ]' },
    ],
  },
  {
    cat: 'drink',
    num: 'VI.',
    title: 'Drinks &amp; <em>Sherbets</em>',
    sub: 'Cooled in the old way',
    items: [
      { name: 'Gulab <em>Sharbat</em>', price: '$ 2', desc: 'Damask rose syrup cut with chilled milk and a pinch of cardamom.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Rose\nSherbet ]' },
      { name: 'Khus <em>Sharbat</em>', price: '$ 2', desc: 'Vetiver root cooler — earthy, herbal, the colour of a monsoon evening.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Khus\nSherbet ]' },
      { name: 'Kesar <em>Lassi</em>', price: '$ 2', desc: 'Slow-churned yoghurt with saffron, cardamom and a slick of malai.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Lassi ]' },
      { name: 'Irani <em>Chai</em>', price: '$ 1.50', desc: 'A long-brewed milk tea poured the Hyderabadi way — strong, sweet, and unhurried.', tags: [{ label: 'Vegetarian', type: 'veg' as const }], imgLabel: '[ Irani\nChai ]' },
    ],
  },
]

export default function Menu() {
  const [active, setActive] = useState('all')
  useReveal()

  useEffect(() => {
    document.title = 'The Menu — Hyderabad Biryani & Banquet'
  }, [])

  function handleFilter(cat: string) {
    setActive(cat)
    if (cat !== 'all') {
      const el = document.querySelector(`[data-cat="${cat}"]`) as HTMLElement
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 120
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <Nav solid />
      <PageHead
        crumbLabel="The Menu"
        crumbTo="/"
        title="The Royal <em>Menu</em>"
        lede="Drawn from kitchens across India — eighty plates across six courses, cooked the slow way and served the gentle way."
      />
      <section className="section">
        <div className="wrap">
          <MenuFilters active={active} onChange={handleFilter} />
          {CATEGORIES.map((cat) => (
            <MenuCategory
              key={cat.cat}
              num={cat.num}
              title={cat.title}
              sub={cat.sub}
              cat={cat.cat}
              items={cat.items}
              visible={active === 'all' || active === cat.cat}
            />
          ))}
          <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '50px', borderTop: '1px solid var(--line)' }}>
            <p style={{ color: 'var(--ivory-dim)', fontSize: '13px', maxWidth: '560px', margin: '0 auto 24px', lineHeight: 1.8 }}>
              Prices in Indian Rupees, inclusive of all taxes. A discretionary 8% service charge applies for parties of six or more.
            </p>
            <Link className="btn btn--gold" to="/#reserve">Order Online <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
