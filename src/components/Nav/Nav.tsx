import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavDrawer from "../NavDrawer/NavDrawer";
import "./Nav.css";

interface NavProps {
  solid?: boolean;
  activeLink?: string;
}

export default function Nav({ solid, activeLink }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (solid) return;
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [solid]);

  const active = activeLink || location.pathname;

  return (
    <>
      <nav
        className={`nav${solid ? " nav--solid" : ""}${scrolled ? " scrolled" : ""}`}
        id="nav"
      >
        <Link className="nav__brand" to="/">
          <span className="nav__seal">
            <img src="/assets/logo.png" alt="" />
          </span>
          <span className="nav__name">
            HYDERABAD BIRYANI<small>&amp; Banquet</small>
          </span>
        </Link>
        <div className="nav__links">
          <Link to="/" className={active === "/" ? "is-active" : ""}>
            Home
          </Link>
          <a href="/#heritage">Heritage</a>
          <Link to="/menu" className={active === "/menu" ? "is-active" : ""}>
            Menu
          </Link>
          <a href="/#services">Services</a>
          <Link
            to="/banquet"
            className={active === "/banquet" ? "is-active" : ""}
          >
            Banquet
          </Link>
          <a href="/#gallery">Gallery</a>
        </div>
        <Link className="nav__cta" to="/#reserve">
          Order Online
        </Link>
        <button
          className="nav__burger"
          id="navBurger"
          aria-label="Toggle menu"
          aria-expanded={drawerOpen}
          aria-controls="navDrawer"
          onClick={() => setDrawerOpen((isOpen) => !isOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </button>
      </nav>
      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
