import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Container, Globe2, PackageCheck, RefreshCw, type LucideIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { img, industrySolutions, processStages, products, transformationStages } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";
import { resourceArticles } from "@/lib/resource-data";
import {
  ChapterHeading,
  Label,
  PrimaryButton,
  Reveal,
  TextLink,
} from "@/components/site/primitives";
import { CustomerJourney } from "@/components/site/CustomerJourney";
import heroVideo from "@/assets/hero_page.mp4";
import logo from "@/assets/logo.svg";

export const Route = createFileRoute("/")({ component: Home });

const heroStats: Array<{
  value: number;
  suffix: string;
  label: string;
  Icon: LucideIcon;
}> = [
  { value: 7, suffix: "+", label: "Years of Export", Icon: Award },
  { value: 12, suffix: "+", label: "Countries Served", Icon: Globe2 },
  { value: 90, suffix: "%", label: "Client Retention", Icon: RefreshCw },
  { value: 120, suffix: "+", label: "Annual Containers Shipped", Icon: Container },
  { value: 3000, suffix: "+", label: "Tons of Coco Peat Exported Every Year", Icon: PackageCheck },
];

function CountStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1500;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <>
      {count.toLocaleString("en-IN")}
      {suffix}
    </>
  );
}

function ProductCarousel() {
  return (
    <div className="running-carousel mt-12" aria-label="Featured products">
      <div className="running-carousel-track">
        {[false, true].map((duplicate) => (
          <div
            key={duplicate ? "products-copy" : "products"}
            className="flex gap-6 pr-6"
            aria-hidden={duplicate || undefined}
          >
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} variant="carousel" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticlesCarousel() {
  const articles = resourceArticles.slice(0, 8);

  return (
    <div className="running-carousel mt-12" aria-label="Latest articles">
      <div className="running-carousel-track running-carousel-track--articles">
        {[false, true].map((duplicate) => (
          <div
            key={duplicate ? "articles-copy" : "articles"}
            className="flex gap-6 pr-6"
            aria-hidden={duplicate || undefined}
          >
            {articles.map((article) => (
              <Link
                key={article.slug}
                to="/resources/$slug"
                params={{ slug: article.slug }}
                tabIndex={duplicate ? -1 : undefined}
                className="group flex w-[min(84vw,23rem)] shrink-0 flex-col overflow-hidden rounded-md border-2 border-[#1B4D2E] bg-pure-white shadow-[0_14px_38px_rgba(31,45,40,.08)]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-brand-soft">
                  <img
                    src={article.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[.08em] text-brand">
                    <span className="line-clamp-1">{article.category}</span>
                    <span className="shrink-0 text-charcoal/55">{article.read}</span>
                  </div>
                  <h3 className="display mt-4 line-clamp-2 text-2xl leading-tight transition-colors group-hover:text-brand">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal/70">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-[.14em] text-brand">
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="home-hero relative min-h-[700px] overflow-hidden bg-brand-deep text-pure-white lg:min-h-[760px]">
        <img
          src={img.heroPlantation}
          alt="Coconut plantation in Tamil Nadu"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover slow-zoom"
        />
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={img.heroPlantation}
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-brand/28 to-black/12" />
        <div className="home-hero__content shell relative z-10 pb-10 pt-28 sm:pt-32 md:pb-44 lg:pt-32">
          <Label className="mb-6 text-aqua">Arjuna Exports · India</Label>
          <h1
            className="home-hero__title display max-w-none text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[.98]"
            aria-label="Coco growing media, made in South India."
          >
            <span aria-hidden="true" className="block sm:whitespace-nowrap">
              Coco growing media,
            </span>
            <span aria-hidden="true" className="block sm:whitespace-nowrap">
              made in South India.
            </span>
          </h1>
          <p className="mt-6 w-full max-w-[calc(100vw-48px)] text-base leading-relaxed break-words text-pure-white/75 md:max-w-[42ch] md:text-lg">
            Arjuna Exports manufactures, supplies and exports coir and coco products for growers,
            substrate makers and international buyers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <PrimaryButton to="/contact">Request a quote</PrimaryButton>
            <TextLink to="/products" className="text-pure-white">
              Explore products
            </TextLink>
          </div>
        </div>
        <div className="relative z-10 md:absolute md:inset-x-0 md:bottom-0">
          <div className="shell">
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 border-t border-pure-white/20 py-8 sm:grid-cols-3 md:grid-cols-5 md:gap-5 md:border-0 md:py-7 lg:gap-8">
              {heroStats.map(({ value, suffix, label, Icon }) => (
                <div
                  key={label}
                  className="text-center text-pure-white last:col-span-2 sm:last:col-span-1 md:min-w-0"
                >
                  <Icon className="mx-auto h-8 w-8 text-pure-white" strokeWidth={1.7} aria-hidden />
                  <strong className="display mt-3 block text-[clamp(1.8rem,2.7vw,3rem)] leading-none text-pure-white">
                    <CountStat value={value} suffix={suffix} />
                  </strong>
                  <span className="mt-2 block text-sm font-semibold leading-tight text-pure-white/85 md:mt-3">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-soft py-20 lg:py-28">
        <div className="shell">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <ChapterHeading
              label="01 — Our Products"
              lines={["Made for growers.", "Built for distance."]}
            />
            <TextLink to="/products" className="shrink-0 text-brand">
              View all products
            </TextLink>
          </Reveal>
          <Reveal>
            <ProductCarousel />
          </Reveal>
        </div>
      </section>

      <Link
        to="/process"
        aria-label="Explore the full process"
        className="process-preview-link block bg-charcoal text-[#20555A] transition duration-300 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <section className="py-14 lg:py-20">
          <div className="shell">
            <Reveal>
              <div>
                <Label className="mb-4 block">02 / Transformation</Label>
                <h2 className="display whitespace-nowrap text-[clamp(1.15rem,5.6vw,3.5rem)] leading-tight">
                  Natural Meets Precision
                </h2>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {processStages.slice(0, 9).map((s, i) => (
                <Fragment key={s.n}>
                  <Reveal
                    delay={(i % 3) * 70}
                    className={`${i === 3 || i === 7 ? "md:col-span-2" : ""} group relative min-h-[300px] overflow-hidden rounded-md`}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <span className="display text-4xl text-pure-white/75">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="display mt-2 text-3xl text-[#20555A]">{s.title}</h3>
                    </div>
                  </Reveal>
                  {i === 6 && (
                    <div className="flex min-h-[180px] items-center justify-center rounded-md border border-[#20555A]/15 bg-pure-white/10 p-6 md:min-h-[300px] md:p-5">
                      <img
                        src={logo}
                        alt="Arjuna Exports"
                        width={1436}
                        height={328}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full max-w-[320px] object-contain"
                      />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <div className="mt-8 flex justify-center sm:justify-end">
              <span className="process-preview-cta inline-flex min-h-[52px] items-center gap-3 rounded-sm bg-[var(--brand-green)] px-7 text-[14px] font-semibold uppercase tracking-[0.06em] text-pure-white transition-colors duration-300 hover:bg-[#1B5E20]">
                Explore the full process
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </section>
      </Link>
      <section className="bg-ivory py-12 sm:py-14 lg:py-16">
        <div className="shell">
          <Reveal>
            <div>
              <Label className="mb-4 block">03 — The Material</Label>
              <h2 className="display whitespace-nowrap text-[clamp(0.8rem,3.6vw,3.5rem)] leading-tight">
                One Coconut World of Possibilities
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-px bg-charcoal/15 md:grid-cols-2 lg:grid-cols-4">
            {transformationStages.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 80}
                className="group overflow-hidden rounded-md bg-ivory"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="micro-label text-brand">{s.n}</span>
                  <h3 className="display mt-3 text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CustomerJourney />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <ChapterHeading label="Our Solutions" lines={["Solutions Across", "Industries"]} />
            <p className="mt-8 max-w-[38ch] leading-relaxed text-charcoal/65">
              Coir-based products shaped for the needs of growers, manufacturers, retailers and
              landscape professionals.
            </p>
            <TextLink to="/applications" className="mt-8 text-brand">
              Explore all industries
            </TextLink>
          </Reveal>
          <div className="grid gap-px bg-charcoal/15 sm:grid-cols-2">
            {industrySolutions.slice(0, 4).map((solution, index) => (
              <Reveal key={solution.title} className="group relative min-h-72 overflow-hidden">
                <Link
                  to={solution.href}
                  aria-label={`Explore ${solution.title} solutions`}
                  className="absolute inset-0 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-aqua"
                >
                  <img
                    src={solution.image}
                    alt={solution.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 to-transparent transition-colors group-hover:from-brand-deep/95" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-pure-white">
                    <span className="micro-label text-aqua">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="display mt-2 text-3xl">{solution.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-offwhite py-20 lg:py-24">
        <div className="shell">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Label className="text-brand">Articles &amp; insights</Label>
              <h2 className="display mt-5 text-[clamp(2.25rem,3.8vw,3.75rem)]">
                Practical knowledge for better growing.
              </h2>
            </div>
            <TextLink to="/resources" className="shrink-0 text-brand">
              View all articles
            </TextLink>
          </Reveal>
          <Reveal>
            <ArticlesCarousel />
          </Reveal>
        </div>
      </section>
    </>
  );
}
