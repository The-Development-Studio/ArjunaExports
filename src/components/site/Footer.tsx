import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";
import { navItems, products } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand text-pure-white/80">
      <div className="shell pt-28 pb-10">
        <h2 className="display max-w-[14ch] text-[clamp(2.8rem,8vw,5rem)] text-pure-white">
          Growing Beyond Boundaries.
        </h2>

        <div className="mt-24 grid gap-12 border-t border-pure-white/15 pt-12 md:grid-cols-2 lg:grid-cols-4">
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

          <div className="min-w-0 xl:-translate-x-8">
            <div className="micro-label text-pure-white/60">Contact</div>
            <address className="mt-5 space-y-2.5 text-base leading-relaxed not-italic">
              <p className="space-y-1 text-left">
                <span className="block xl:whitespace-nowrap">Arjuna Exports</span>
                <span className="block xl:whitespace-nowrap">
                  1/140-12, GM Complex, Opp. to TMB Bank
                </span>
                <span className="block xl:whitespace-nowrap">
                  Kumaramangalam Post, Tiruchengode TK
                </span>
                <span className="block xl:whitespace-nowrap">
                  Namakkal District, Tamil Nadu – 637205, India
                </span>
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
            <div className="mt-6 flex gap-3" aria-label="Arjuna Exports social media">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/arjunaexports",
                  icon: Linkedin,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/arjunaexports/",
                  icon: Instagram,
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/ArjunaExports/",
                  icon: Facebook,
                },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-pure-white/25 transition-colors duration-300 hover:border-aqua hover:bg-aqua hover:text-brand-deep"
                >
                  <Icon
                    className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.7}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-pure-white/15 pt-6 text-sm text-pure-white/70">
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
