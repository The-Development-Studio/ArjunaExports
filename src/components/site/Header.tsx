import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Arrow } from "./primitives";

export function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const splitProductHero = pathname.startsWith("/products/");
  const transparentOverHero = overHero && pathname === "/";
  const solid = scrolled || !transparentOverHero || splitProductHero;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          solid ? "bg-ivory/92 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "shell flex h-20 items-center justify-between lg:h-[88px]",
            solid ? "text-charcoal" : "text-pure-white",
          )}
        >
          <Link to="/" className="shrink-0" aria-label="Arjuna Exports home">
            <img
              src={logo}
              alt="Arjuna Exports"
              className={cn(
                "h-auto w-[158px] transition-[filter] duration-500 sm:w-[174px]",
                !solid && "brightness-0 invert",
              )}
            />
          </Link>

          <nav
            className={cn(
              "site-menu-font hidden items-center gap-8 transition-colors duration-500 xl:flex",
              solid ? "text-brand" : "text-pure-white",
            )}
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "group relative whitespace-nowrap py-1 text-[15px] tracking-[0.015em] transition-opacity duration-300 hover:opacity-70",
                    active && "opacity-100",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={cn(
                "site-menu-font group hidden min-h-11 items-center gap-3 rounded-sm px-6 text-[13px] tracking-[0.04em] transition-colors duration-300 sm:inline-flex",
                solid
                  ? "bg-brand text-pure-white hover:bg-brand-deep"
                  : "border border-pure-white/70 text-pure-white hover:bg-pure-white hover:text-brand-deep",
              )}
            >
              Request a Quote
              <Arrow className="group-hover:translate-x-1.5" />
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center xl:hidden"
            >
              <span className="relative block h-3 w-7">
                <span className="absolute inset-x-0 top-0 h-px bg-current" />
                <span className="absolute inset-x-0 bottom-0 h-px bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] overflow-y-auto bg-ivory transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="shell flex h-20 items-center justify-between">
          <Link to="/" aria-label="Arjuna Exports home">
            <img src={logo} alt="Arjuna Exports" className="h-auto w-[158px]" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center"
          >
            <span className="relative block h-5 w-5">
              <span className="absolute top-1/2 left-0 h-px w-full rotate-45 bg-current" />
              <span className="absolute top-1/2 left-0 h-px w-full -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav
          className="shell flex min-h-[calc(100dvh-5rem)] flex-col justify-between gap-8 pt-4 pb-8"
          aria-label="Mobile"
        >
          <ul className="site-menu-font text-brand">
            {navItems.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <li key={item.to} className="border-b border-charcoal/10">
                  <Link
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={cn("flex items-baseline py-3.5", active && "text-brand")}
                  >
                    <span className="text-[30px] leading-none tracking-[0.01em] sm:text-[34px]">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            to="/contact"
            className="site-menu-font group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-sm bg-brand px-8 text-[14px] tracking-[0.04em] text-pure-white"
          >
            Request a Quote
            <Arrow className="group-hover:translate-x-1.5" />
          </Link>
        </nav>
      </div>
    </>
  );
}
