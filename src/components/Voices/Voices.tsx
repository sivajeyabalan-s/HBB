import Postcard from '../Postcard/Postcard'

export default function Voices() {
  return (
    <section className="section" id="voices">
      <div className="sec-head">
        <div className="sec-head__num">VI.</div>
        <h2 className="sec-head__title reveal">In the words of our <em>guests.</em></h2>
        <div className="sec-head__aside">Voices at Our Table</div>
      </div>

      <div className="postcards">
        <Postcard
          no="N° 01"
          noLabel="From the Hall"
          body="The biryani arrived sealed in its handi and broken at the table — the entire room turned to watch. A meal we will tell stories about for years."
          guest="Aisha & Rohan Mehta"
          occasion="Wedding Reception, March 2026"
        />
        <Postcard
          no="N° 02"
          noLabel="From the Table"
          body="The korma is the closest I have come to my grandmother's kitchen in Charminar. Slow, deep, and quietly perfect."
          guest="Tariq Hussain"
          occasion="Regular Patron"
          delay={1}
        />
        <Postcard
          no="N° 03"
          noLabel="From the Gala"
          body="Catered our annual gala for 400. Flawless service, gracious staff, and dessert that drew applause. We will only host here again."
          guest="Sana"
          occasion="Director, Crescent Foundation"
          delay={2}
        />
      </div>
    </section>
  )
}
