import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";
import plantation from "@/assets/hero-plantation.jpg";
import { navItems, products } from "@/lib/site-data";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/arjunaexports" },
  { label: "Instagram", href: "https://www.instagram.com/arjunaexports/" },
  { label: "Facebook", href: "https://www.facebook.com/ArjunaExports/" },
];

function SocialIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-social-icon">
      {label === "Instagram" && (
        <>
          <defs>
            <linearGradient id="footer-instagram-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFB13D" />
              <stop offset="48%" stopColor="#E1306C" />
              <stop offset="100%" stopColor="#833AB4" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="12" fill="url(#footer-instagram-gradient)" />
          <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="white" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.8" />
          <circle cx="16.3" cy="7.9" r="1" fill="white" />
        </>
      )}
      {label === "LinkedIn" && (
        <>
          <circle cx="12" cy="12" r="12" fill="#0A66C2" />
          <text x="12" y="17" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-1">
            in
          </text>
        </>
      )}
      {label === "Facebook" && (
        <>
          <circle cx="12" cy="12" r="12" fill="#0866FF" />
          <path d="M13.7 24V13.1h3.6l.55-4.25H13.7V6.14c0-1.23.34-2.07 2.1-2.07H18V.27C17.62.22 16.3.1 14.76.1c-3.2 0-5.4 1.95-5.4 5.54v3.21H5.74v4.25h3.62V24h4.34Z" fill="white" transform="translate(1.8 0) scale(.84)" />
        </>
      )}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-story" aria-labelledby="footer-story-title">
        <img
          src={plantation}
          alt="Coconut palms growing in a tropical plantation"
          className="footer-story-image"
          loading="lazy"
          decoding="async"
        />
        <div className="footer-story-wash" aria-hidden="true" />
        <div className="shell footer-story-content">
          <h2 id="footer-story-title" className="footer-headline">
            <span>The journey continues</span>
            <span>From a coconut</span>
            <span className="footer-headline-accent">husk to new life</span>
          </h2>
          <p className="footer-tagline" aria-label="Growing Beyond Boundaries.">
            <span>Growing</span>
            <span>Beyond</span>
            <span className="footer-tagline-accent">Boundaries.</span>
          </p>
        </div>
      </section>

      <div className="shell footer-content">
        <div className="footer-columns">
          <div className="footer-company">
            <Link to="/" aria-label="Arjuna Exports home" className="footer-logo-link">
              <img src={logo} alt="Arjuna Exports" className="footer-logo" />
            </Link>
            <p className="footer-description">
              Manufacturer and exporter of coconut-based growing media, serving professional growers
              worldwide from Tamil Nadu, India.
            </p>
            <nav className="footer-socials" aria-label="Arjuna Exports social media">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Visit Arjuna Exports on ${label} (opens in a new tab)`}
                  className="footer-social-link"
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </nav>
          </div>

          <nav aria-label="Navigate the website" className="footer-nav">
            <h3 className="footer-column-heading">Navigate</h3>
            <ul className="footer-link-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products" className="footer-nav">
            <h3 className="footer-column-heading">Products</h3>
            <ul className="footer-link-list">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="footer-link"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <h3 className="footer-column-heading">Contact</h3>
            <address className="footer-address">
              <div className="footer-contact-item footer-address-item">
                <MapPin aria-hidden="true" className="footer-contact-icon" />
                <div className="footer-address-lines">
                  <strong>Arjuna Exports</strong>
                  <span>1/140-12, GM Complex,</span>
                  <span>Opposite TMB Bank,</span>
                  <span>Kumaramangalam Post,</span>
                  <span>Tiruchengode Taluk,</span>
                  <span>Namakkal District,</span>
                  <span>Tamil Nadu – 637205,</span>
                  <span>India</span>
                </div>
              </div>
              <a href="mailto:info@arjunaexports.com" className="footer-contact-item footer-contact-link">
                <Mail aria-hidden="true" className="footer-contact-icon" />
                <span>info@arjunaexports.com</span>
              </a>
              <a href="tel:+919629874555" className="footer-contact-item footer-contact-link">
                <Phone aria-hidden="true" className="footer-contact-icon" />
                <span>+91 96298 74555</span>
              </a>
              <a href="tel:+914288250125" className="footer-contact-item footer-contact-link">
                <Phone aria-hidden="true" className="footer-contact-icon" />
                <span>+91 4288 250125</span>
              </a>
            </address>
          </div>
        </div>

        <div className="footer-legal">
          <div className="footer-legal-copy">
            <span>© {new Date().getFullYear()} Arjuna Exports. All rights reserved.</span>
            <span className="footer-credit">
              Crafted by{" "}
              <a href="https://www.devstudioco.com" target="_blank" rel="noopener" className="footer-credit-link">
                The Development Studio
              </a>
            </span>
          </div>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
