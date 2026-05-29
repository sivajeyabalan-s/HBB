import "./Gallery.css";

const FRAMES = [
  {
    cls: "f1 frame--arch",
    src: "/assets/gallery/buffet2.jpg",
    alt: "Dining room",
    num: "N° 01",
    delay: undefined,
  },
  {
    cls: "f2",
    src: "/assets/gallery/buffet.jpg",
    alt: "Handi warmers",
    num: "N° 02",
    delay: 1,
  },
  {
    cls: "f3",
    src: "/assets/gallery/chefInBuffet.jpg",
    alt: "Chef plating",
    num: "N° 03",
    delay: 2,
  },
  {
    cls: "f4",
    src: "/assets/gallery/faluda.jpg",
    alt: "Falooda",
    num: "N° 04",
    delay: 2,
  },
  {
    cls: "f5 frame--arch",
    src: "/assets/gallery/catering1.jpg",
    alt: "Banquet catering",
    num: "N° 05",
    delay: 3,
  },
  {
    cls: "f6",
    src: "/assets/gallery/server.jpg",
    alt: "Server setting table",
    num: "N° 06",
    delay: 3,
  },
  {
    cls: "f7",
    src: "/assets/gallery/kesari.png",
    alt: "Kesari halwa",
    num: "N° 07",
    delay: 4,
  },
];

export default function Gallery() {
  return (
    <section className="section section--alt" id="gallery">
      <div className="sec-head">
        <div className="sec-head__num">IV.</div>
        <h2 className="sec-head__title reveal">
          Inside the <em>house.</em>
        </h2>
        <div className="sec-head__aside">A Glimpse Within</div>
      </div>

      <div className="exhibition">
        {FRAMES.slice(0, 6).map((f) => (
          <figure
            key={f.num}
            className={`frame ${f.cls} reveal`}
            data-delay={f.delay}
          >
            <img src={f.src} alt={f.alt} />
            <span className="frame__num">{f.num}</span>
          </figure>
        ))}
        <div className="frame frame--mark reveal" aria-hidden="true">
          <div className="divider-mark">
            <span className="mark"></span>
          </div>
        </div>
        {FRAMES.slice(6).map((f) => (
          <figure
            key={f.num}
            className={`frame ${f.cls} reveal`}
            data-delay={f.delay}
          >
            <img src={f.src} alt={f.alt} />
            <span className="frame__num">{f.num}</span>
          </figure>
        ))}
      </div>
    </section>
  );
}
