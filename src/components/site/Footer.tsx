import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { navItems, products } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand text-pure-white/80">
      <div className="shell pb-8 pt-20 lg:pt-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <h2 className="display text-[clamp(1.5rem,2.7vw,2.4rem)] font-bold leading-tight tracking-tight text-pure-white antialiased">
            The journey continues
            <span className="block">From a coconut husk to new life</span>
          </h2>
          <h2 className="display text-[clamp(1rem,1.8vw,1.6rem)] font-bold leading-tight tracking-tight text-pure-white antialiased md:text-right">
            Growing Beyond Boundaries.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 border-t border-pure-white/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label="Arjuna Exports home" className="inline-block">
              <img
                src={logo}
                alt="Arjuna Exports"
                loading="lazy"
                decoding="async"
                className="h-auto w-[210px] brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-pure-white/75">
              Manufacturer and exporter of coconut-based growing media, serving professional growers
              worldwide from Tamil Nadu, India.
            </p>
            <div className="mt-6 flex gap-3" aria-label="Arjuna Exports social media">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/arjunaexports",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/arjunaexports/",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/ArjunaExports/",
                },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-pure-white/25 transition-colors duration-300 hover:border-aqua hover:bg-aqua hover:text-brand-deep"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                  >
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
                        <text x="12" y="17" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-1">in</text>
                      </>
                    )}
                    {label === "Facebook" && (
                      <>
                        <circle cx="12" cy="12" r="12" fill="#0866FF" />
                        <path d="M13.7 24V13.1h3.6l.55-4.25H13.7V6.14c0-1.23.34-2.07 2.1-2.07H18V.27C17.62.22 16.3.1 14.76.1c-3.2 0-5.4 1.95-5.4 5.54v3.21H5.74v4.25h3.62V24h4.34Z" fill="white" transform="translate(1.8 0) scale(.84)" />
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="micro-label text-pure-white/60">Navigate</div>
            <ul className="mt-5 space-y-2.5 text-base">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors duration-300 hover:text-pure-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="micro-label text-pure-white/60">Products</div>
            <ul className="mt-5 space-y-2.5 text-base">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="transition-colors duration-300 hover:text-pure-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <div className="micro-label text-pure-white/60">Contact</div>
            <address className="mt-5 space-y-2.5 text-base leading-relaxed not-italic">
              <p className="space-y-1 text-left">
                <span className="block">Arjuna Exports</span>
                <span className="block">1/140-12, GM Complex, Opp. to TMB Bank</span>
                <span className="block">Kumaramangalam Post, Tiruchengode TK</span>
                <span className="block">Namakkal District, Tamil Nadu – 637205, India</span>
              </p>
              <p>
                <a href="mailto:info@arjunaexports.com" className="hover:text-pure-white">
                  info@arjunaexports.com
                </a>
                <br />
                <a href="tel:+919629874555" className="hover:text-pure-white">
                  +91 96298 74555
                </a>
                <br />
                <a href="tel:+914288250125" className="hover:text-pure-white">
                  +91 4288 250125
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-pure-white/15 pt-6 text-sm text-pure-white/70">
          <div className="flex flex-col gap-2">
            <span>© {new Date().getFullYear()} Arjuna Exports. All rights reserved.</span>
            <span className="text-pure-white/45">
              Crafted by{" "}
              <a
                href="https://www.devstudioco.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-aqua"
              >
                The Development Studio
              </a>
            </span>
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
