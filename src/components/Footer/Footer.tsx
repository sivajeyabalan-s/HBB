import { Link } from "react-router-dom";
import "./Footer.css";

interface FooterProps {
  showTop?: boolean;
  contactLabel?: string;
  contactInfo?: string;
}

export default function Footer({
  showTop = false,
  contactLabel = "Reserve",
  contactInfo = "+91 90000 00000\nhello@example.com",
}: FooterProps) {
  return (
    <footer className="footer">
      {showTop && (
        <div className="footer__top">
          <p>
            From the tandoor to the tawa, the table is laid every evening.
          </p>
        </div>
      )}

      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__seal">
            <img src="/assets/logo.png" alt="" />
          </div>
          <p>
            Restaurant · Banquet Hall · Events &amp; Catering. A house of Indian
            hospitality — bringing the finest of North, South and Punjabi kitchens
            under one roof.
          </p>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#heritage">Heritage</a>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <Link to="/banquet">Banquet Hall</Link>
            </li>
            <li>
              <a href="/#reserve">Reservations</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          <ul>
            <li>Mon — Thu · 6:30 PM – 11:30 PM</li>
            <li>Fri — Sun · 12:00 PM – 12:00 AM</li>
            <li>Banquet · by appointment</li>
            <li>Closed on Diwali &amp; Holi</li>
          </ul>
        </div>
        <div className="footer__contact">
          <div>
            <small>Address</small>
            <span>
              123 Sample Street, Sample City,
              <br />
              Sample — 12345
            </span>
          </div>
          <div>
            <small>{contactLabel}</small>
            <span
              dangerouslySetInnerHTML={{
                __html: contactInfo.replace(/\n/g, "<br/>"),
              }}
            />
          </div>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="6" width="18" height="12" rx="3" />
                <path d="M11 9.5 L 15 12 L 11 14.5 Z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 20 L 5.5 15.5 A 8 8 0 1 1 8.5 18.5 Z" />
                <path d="M9 10 c 0 3 2 5 5 5 l 1.5 -1.5 -2 -1 -1 1 c -1 -.5 -2 -1.5 -2.5 -2.5 l 1 -1 -1 -2 z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__base">
        <a
          className="made"
          href="https://brisque.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/assets/maghil.webp" alt="Maghil" className="made__logo" />{" "}
          2026
        </a>
      </div>
    </footer>
  );
}
