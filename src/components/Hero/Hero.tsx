import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__charminar" aria-hidden="true">
        <img src="/assets/home/heroBG.png" alt="" />
      </div>

      <div className="hero__left">
        <div className="hero__top-stamp reveal">
          · Dum Biryani, Kebabs &amp; Banquets
        </div>

        <h1 className="hero__title reveal" data-delay="1">
          <span className="l1">Hyderabad</span>
          <span className="l2">Biryani</span>
          <span className="l3">&amp; &nbsp; Banquet</span>
        </h1>

        <div className="hero__under reveal" data-delay="2">
          <div className="hero__under-num">I</div>
          <div>
            <p className="hero__sub">
              A Nawabi table set beneath the watch of the four minarets — slow-cooked dum biryani,
              heirloom kormas, and ceremony fit for any occasion. Restaurant, banquet hall and event
              catering, under one regal roof.
            </p>
          </div>
        </div>

        <div className="hero__ctas reveal" data-delay="3">
          <a className="btn btn--gold" href="#reserve">Order Online <span className="arr">→</span></a>
          <Link className="btn btn--ghost" to="/menu">Read the Menu</Link>
        </div>
      </div>

      <div className="hero__scroll">
        Scroll
        <span className="line"></span>
        Discover More
      </div>
    </header>
  )
}
