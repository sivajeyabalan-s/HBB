import { Link } from 'react-router-dom'
import DishRow from '../DishRow/DishRow'

export default function Cuisine() {
  return (
    <section className="section section--alt" id="cuisine">
      <div className="sec-head">
        <div className="sec-head__num">II.</div>
        <h2 className="sec-head__title reveal">The court's table, <em>served nightly.</em></h2>
        <div className="sec-head__aside">Signature Cuisine</div>
      </div>

      <div className="tasting">
        <DishRow
          num="I"
          numLabel="Sealed at Table"
          sub="The House Signature"
          name="Dum Gosht <em>Biryani</em>"
          price="$ 9"
          desc="Long-grain basmati married to slow-braised mutton under a sealed lid, perfumed with kewra, saffron and the deep hush of charcoal embers."
          tagLabel="Slow Dum · 8 hrs"
          spiceLabel="Spice"
          spiceDots={2}
          totalDots={3}
          imgSrc="/assets/home/dum ghos biriyani.png"
          imgAlt="Dum Gosht Biryani"
        />
        <DishRow
          num="II"
          numLabel="From the Korma Pot"
          sub="From the Nawab's Kitchen"
          name="Royal Mutton <em>Korma</em>"
          price="$ 8"
          desc="Tender mutton simmered in a gravy of cashew, almond and yoghurt, finished with kewra water and a careful glaze of pure ghee."
          tagLabel="Nawabi Recipe"
          spiceLabel="Spice"
          spiceDots={1}
          totalDots={3}
          imgSrc="/assets/home/royal mutton korma.jpg"
          imgAlt="Royal Mutton Korma"
          flipped
        />
        <DishRow
          num="III"
          numLabel="The Closing Note"
          sub="A Courtly Dessert"
          name="Shahi <em>Tukda</em>"
          price="$ 4"
          desc="Bread fried to a deep amber, soaked in saffron rabri and crowned with slivered pistachio &amp; edible silver — the closing note of a royal meal."
          tagLabel="Pistachio · Silver Vark"
          spiceLabel="Sweet"
          spiceDots={3}
          totalDots={3}
          imgSrc="/assets/home/sahiThukda.jpg"
          imgAlt="Shahi Tukda"
        />

        <div className="tasting__foot">
          <p>Eighty more dishes across six cuisines — from kebabs through breads to the closing sherbets.</p>
          <Link className="btn btn--ghost" to="/menu">View the Full Menu <span className="arr">→</span></Link>
        </div>
      </div>
    </section>
  )
}
