import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  ClipboardCheck,
  Container,
  Gauge,
  Globe2,
  Headphones,
  PackageCheck,
  RefreshCw,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  applications,
  img,
  processStages,
  products,
  transformationStages,
  trustPoints,
} from "@/lib/site-data";
import {
  ChapterHeading,
  Label,
  PrimaryButton,
  Reveal,
  TextLink,
} from "@/components/site/primitives";
import { ThreeDIcon } from "@/components/site/ThreeDIcon";
import { CustomerJourney } from "@/components/site/CustomerJourney";
import heroVideo from "@/assets/hero_page.mp4";

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

function Home() {
  return (
    <>
      <section className="home-hero relative min-h-screen overflow-hidden bg-brand-deep text-pure-white">
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
        <div className="home-hero__content shell relative z-10 pb-10 pt-32 sm:pt-40 md:pb-[210px] lg:pt-[18vh]">
          <Label className="mb-7 text-aqua">Arjuna Exports · India</Label>
          <h1
            className="home-hero__title display max-w-none text-[clamp(1.65rem,6.5vw,5rem)] leading-[.93]"
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
                  <strong className="display mt-4 block text-[clamp(2.15rem,3.2vw,3.7rem)] leading-none text-pure-white">
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
      <section className="bg-ivory py-28 lg:py-40">
        <div className="shell">
          <Reveal>
            <ChapterHeading
              label="01 — The Material"
              lines={["One coconut.", "A world of possibility."]}
            />
          </Reveal>
          <div className="mt-20 grid gap-px bg-charcoal/15 md:grid-cols-2 lg:grid-cols-4">
            {transformationStages.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 80}
                className="group overflow-hidden rounded-md bg-ivory"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="micro-label text-brand">{s.n}</span>
                  <h3 className="display mt-4 text-3xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-charcoal py-28 text-pure-white lg:py-40">
        <div className="shell">
          <Reveal>
            <ChapterHeading label="02 / Transformation" lines={["Nature meets", "precision."]} />
          </Reveal>
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {processStages.slice(0, 9).map((s, i) => (
              <Reveal
                key={s.n}
                delay={(i % 3) * 70}
                className={`${i === 3 || i === 7 ? "md:col-span-2" : ""} group relative min-h-[360px] overflow-hidden rounded-md`}
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
                  <span className="display text-5xl text-aqua/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-2 text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-pure-white/65">{s.text}</p>
                  <span className="micro-label mt-4 block text-aqua">{s.data}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <TextLink to="/process" className="mt-12 text-aqua">
            Explore the full process
          </TextLink>
        </div>
      </section>
      <section className="bg-brand-soft py-28 lg:py-40">
        <div className="shell">
          <Reveal>
            <ChapterHeading
              label="02 — Our Range"
              lines={["Made for growers.", "Built for distance."]}
            />
          </Reveal>
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <a href={`/products/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-b border-brand/20 py-6">
                    <span className="micro-label text-brand">
                      0{i + 1} / {p.category}
                    </span>
                    <h3 className="display mt-3 text-3xl">{p.name}</h3>
                    <p className="mt-2 text-sm text-charcoal/65">{p.short}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ivory py-28 lg:py-40">
        <div className="shell grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <ChapterHeading label="03 — Where It Grows" lines={["Rooted in", "real work."]} />
            <p className="mt-8 max-w-[38ch] leading-relaxed text-charcoal/65">
              One material, tuned for eight growing environments—from precision greenhouse systems
              to public landscapes.
            </p>
            <TextLink to="/applications" className="mt-8 text-brand">
              View applications
            </TextLink>
          </Reveal>
          <div className="grid gap-px bg-charcoal/15 sm:grid-cols-2">
            {applications.slice(0, 4).map((a) => (
              <Reveal key={a.slug} className="group relative min-h-72 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-pure-white">
                  <span className="micro-label text-aqua">{a.n}</span>
                  <h3 className="display mt-2 text-3xl">{a.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-offwhite py-28 lg:py-40">
        <div className="shell">
          <Reveal className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <Label className="text-brand">04 / Best service for you</Label>
              <h2 className="display mt-7 text-[clamp(3.5rem,7vw,5rem)]">Our unique values.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-charcoal/60 lg:justify-self-end">
              Six connected commitments guide every order—from the first specification to the moment
              it reaches the customer.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px bg-brand-deep/15 md:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point, index) => {
              const icons = [Award, UsersRound, PackageCheck, ClipboardCheck, Gauge, Headphones];
              const Icon = icons[index];
              return (
                <Reveal
                  key={point.label}
                  delay={(index % 3) * 80}
                  className="group relative min-h-[390px] overflow-hidden rounded-md bg-ivory p-8 transition-colors duration-500 hover:bg-brand-soft lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <ThreeDIcon
                      icon={Icon}
                      index={index}
                      size="lg"
                      className="transition-transform duration-500 group-hover:-translate-y-1"
                    />
                    <span className="display text-5xl text-brand/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-12 border-t border-charcoal/15 pt-6">
                    <h3 className="display text-3xl">{point.label}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{point.value}</p>
                  </div>
                  <span className="absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-700 group-hover:scale-x-100" />
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 flex justify-end">
            <PrimaryButton to="/contact">Request a quote</PrimaryButton>
          </div>
        </div>
      </section>
      <CustomerJourney />
      <section className="relative flex min-h-screen items-end overflow-hidden text-pure-white">
        <img
          src={img.closingRoots}
          alt="Healthy crop roots growing in coco medium"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent" />
        <div className="shell relative z-10 pb-24">
          <Label className="text-aqua">The journey continues</Label>
          <h2 className="display mt-7 max-w-[11ch] text-[clamp(4rem,9vw,5rem)] leading-[.86]">
            From a coconut husk to new life.
          </h2>
          <p className="mt-7 max-w-xl text-lg text-pure-white/75">
            Growing solutions shaped by nature, refined through experience and delivered worldwide.
          </p>
          <div className="mt-9 flex flex-wrap gap-5">
            <PrimaryButton to="/contact">Request a quote</PrimaryButton>
            <TextLink to="/contact" className="text-pure-white">
              Contact our team
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
