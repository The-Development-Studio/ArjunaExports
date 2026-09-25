import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Eye,
  Globe2,
  Handshake,
  Linkedin,
  ScanSearch,
  Settings,
  Sprout,
  Target,
  Workflow,
} from "lucide-react";
import { img } from "@/lib/site-data";
import msmeLogo from "@/assets/certifications/msme.png";
import eepcLogo from "@/assets/certifications/eepc-official.png";
import coirBoardLogo from "@/assets/certifications/coir-board.jpg";
import fieoLogo from "@/assets/certifications/fieo-official.gif";
import isoLogo from "@/assets/certifications/iso-9001.png";
import { pageMeta } from "@/components/site/PageHero";
import { Label, PrimaryButton, Reveal } from "@/components/site/primitives";
export const Route = createFileRoute("/our-story")({
  head: () =>
    pageMeta(
      "About Us",
      "Founded in 2019, Arjuna Exports supplies coco substrate solutions for professional growers, horticultural businesses, and international customers.",
    ),
  component: Story,
});

const certifications = [
  { name: "MSME · Udyam", logo: msmeLogo },
  { name: "EEPC India", logo: eepcLogo },
  { name: "Coir Board", logo: coirBoardLogo },
  { name: "FIEO", logo: fieoLogo },
  { name: "ISO 9001:2015", logo: isoLogo },
];

const strengths = [
  {
    title: "Process-Driven Production",
    text: "Structured production processes and defined quality controls help us maintain consistency across every batch and shipment.",
    Icon: Workflow,
  },
  {
    title: "Transparent Product Specifications",
    text: "Clear specifications, measurable parameters, and transparent communication give customers a clear understanding of what they are purchasing.",
    Icon: ScanSearch,
  },
  {
    title: "Consistent Export-Grade Quality",
    text: "Rigorous quality checks at every stage help ensure that our coco substrate products consistently meet agreed specifications and customer requirements.",
    Icon: BadgeCheck,
  },
  {
    title: "Long-Term B2B Partnerships",
    text: "We focus on building lasting business relationships through responsive communication, reliable execution, and a clear understanding of our customers' requirements.",
    Icon: Handshake,
  },
];

const founderStory = [
  {
    title: "From Farming to Global Exports",
    text: "Born into a farming family with deep roots in coconut cultivation, Mohan developed first-hand knowledge of agriculture and the coconut industry from an early age. This foundation continues to shape his understanding of the product, its origin, and the needs of growers and buyers.",
    Icon: Sprout,
  },
  {
    title: "Engineering Mindset",
    text: "An Electronics & Communication Engineering graduate from Anna University, Mohan brings a structured, analytical approach to the business. His engineering background has shaped his focus on systems, process discipline, quality control, and continuous improvement.",
    Icon: Settings,
  },
  {
    title: "Global Corporate Experience",
    text: "Before founding Arjuna Exports, Mohan spent over a decade working with global organisations including Accenture and IBM, with experience in SAP Business Intelligence, analytics, and enterprise processes. This corporate experience became the foundation for bringing greater structure and professionalism to the export business.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Building a More Professional Coco Peat Industry",
    text: "Mohan founded Arjuna Exports in 2019 with a clear vision: to bring greater transparency, consistency, process discipline, and customer focus to the global coco peat export industry. The objective is not simply to supply a product, but to create a more reliable and transparent buying experience for international customers.",
    Icon: Target,
  },
  {
    title: "Built for Long-Term Partnerships",
    text: "Mohan is committed to building long-term customer relationships through consistent product quality, transparent communication, accurate documentation, and reliable execution. The approach combines agricultural understanding with structured business practices to deliver a dependable export experience.",
    Icon: Handshake,
  },
];

function Story() {
  return (
    <>
      <section className="bg-offwhite pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10">
        <div className="shell">
          <Reveal className="relative overflow-hidden rounded-md border border-[#20555A]/16 bg-pure-white p-7 sm:p-10 lg:p-12 xl:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
              {/* Left Column: Label + Headline */}
              <div className="flex flex-col justify-between lg:col-span-5 h-full">
                <div>
                  <Label className="text-[#20555A]">About Arjuna Exports</Label>
                  <h1 className="display mt-6 max-w-[14ch] text-balance text-[clamp(2.5rem,4.2vw,4.25rem)] leading-[1.08] text-[#20555A]">
                    Rooted in agriculture. Built for the world.
                  </h1>
                </div>

                <div className="mt-10 lg:mt-16 border-t border-[#20555A]/16 pt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#20555A]/75">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#20555A]" />
                    Commercial Substrates
                  </span>
                  <span>Tamil Nadu · India</span>
                </div>
              </div>

              {/* Right Column: Introduction + 2019 Founded + 3 Highlights */}
              <div className="flex flex-col justify-between lg:col-span-7 h-full space-y-8">
                <div>
                  <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#20555A]">
                    Arjuna Exports is a South India–based exporter of coco substrate solutions for
                    professional growers, horticultural businesses, and international customers.
                  </p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#20555A]/85">
                    Rooted in the coconut-producing heartland of Tamil Nadu, we combine deep
                    agricultural understanding with modern engineering discipline and stringent
                    quality control. From substrate blending to containerized port dispatch, we
                    provide consistent, crop-tailored growing media engineered for professional
                    growing environments worldwide.
                  </p>
                </div>

                {/* 2019 — FOUNDED element */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[#20555A]/16 py-5">
                  <div className="flex items-baseline gap-3.5">
                    <span className="display text-4xl sm:text-5xl font-bold tracking-tight text-[#20555A]">
                      2019
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#20555A]/75">
                      — Founded
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#20555A]/70">
                    <span className="h-px w-6 bg-[#20555A]/40" />
                    <span>Namakkal District, South India</span>
                  </div>
                </div>

                {/* 3 small supporting company facts / highlights */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#20555A]">
                      01 · Origin
                    </span>
                    <h3 className="mt-2 text-sm sm:text-base font-bold text-[#20555A]">
                      100% Organic Sourcing
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#20555A]/80">
                      Ethically collected raw coconut husks from local Tamil Nadu farming clusters.
                    </p>
                  </div>
                  <div className="border-t border-[#20555A]/15 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#20555A]">
                      02 · Quality
                    </span>
                    <h3 className="mt-2 text-sm sm:text-base font-bold text-[#20555A]">
                      Low-EC Washed Grades
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#20555A]/80">
                      Multi-cycle fresh water washing ensuring low electrical conductivity and ideal pH balance.
                    </p>
                  </div>
                  <div className="border-t border-[#20555A]/15 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#20555A]">
                      03 · Logistics
                    </span>
                    <h3 className="mt-2 text-sm sm:text-base font-bold text-[#20555A]">
                      Port-Direct Logistics
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#20555A]/80">
                      Containerised full-load freight dispatched through Tuticorin and Chennai ports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-offwhite py-20 lg:py-24">
        <div className="shell">
          <Reveal className="grid gap-8 border-t border-charcoal/12 pt-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Label className="text-brand">Our Foundation</Label>
              <h2 className="mt-6 max-w-[18ch] text-balance text-[clamp(2.25rem,3.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Knowledge at the source.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-charcoal/78 lg:text-xl">
                Our foundation comes from a deep understanding of coconut cultivation and the
                agricultural ecosystem.
              </p>
              <p className="mt-5 leading-relaxed text-charcoal/60">
                Combined with engineering expertise and global corporate experience, this has shaped
                the way we approach product development, quality management, customer requirements,
                and international trade.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Reveal className="relative min-h-[380px] overflow-hidden rounded-md">
              <img
                src={img.stageCoconut}
                alt="Coconuts at the source of Arjuna Exports' substrate production"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
              <p className="absolute bottom-7 left-7 max-w-sm text-sm font-semibold uppercase leading-6 tracking-[.14em] text-pure-white">
                Tamil Nadu roots · Global growing applications
              </p>
            </Reveal>
            <Reveal className="flex min-h-[380px] flex-col justify-between rounded-md bg-brand p-8 text-pure-white sm:p-10">
              <span className="text-5xl font-bold leading-none text-aqua/35" aria-hidden>
                “
              </span>
              <div>
                <h3 className="max-w-[18ch] text-balance text-[clamp(1.875rem,2.6vw,2.5rem)] font-bold leading-tight tracking-tight text-pure-white">
                  More than a commodity.
                </h3>
                <p className="mt-5 max-w-xl leading-relaxed text-pure-white/70">
                  Consistency, technical suitability, and reliable execution directly influence
                  growing performance. We deliver coco substrate solutions to defined
                  specifications, giving customers greater confidence from sourcing to application.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="shell">
          <Reveal className="grid gap-8 border-b border-brand/20 pb-9 lg:grid-cols-2 lg:items-end">
            <div>
              <Label className="text-brand">Our Direction</Label>
              <h2 className="mt-6 max-w-[20ch] text-balance text-[clamp(2.25rem,3.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Purpose in every partnership.
              </h2>
            </div>
            <p className="max-w-xl leading-relaxed text-charcoal/60 lg:justify-self-end">
              A clear mission guides how we work today. A global vision keeps us building for what
              growers and international partners will need tomorrow.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              {
                label: "01 · Vision",
                title: "A Global Vision for Better Growing",
                text: "To build a globally trusted coco substrate company that sets new standards for quality, transparency, and professionalism in horticultural supply.",
                tagline: "Better Substrates. Brighter Tomorrows.",
                Icon: Eye,
              },
              {
                label: "02 · Mission",
                title: "Turning Knowledge into Growing Solutions",
                text: "To transform coconut coir into reliable growing solutions by combining agricultural knowledge, technical discipline, consistent quality, and customer-focused execution—building long-term partnerships with growers and businesses worldwide.",
                tagline: "People. Partnerships. Progress.",
                Icon: Handshake,
              },
            ].map(({ label, title, text, tagline, Icon }, index) => (
              <Reveal
                key={label}
                delay={index * 80}
                className="flex min-h-[330px] flex-col rounded-md border border-brand/12 bg-offwhite p-8 sm:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-brand">{label}</p>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-pure-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                  </span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="max-w-[26ch] text-balance text-[clamp(1.625rem,2.3vw,2.125rem)] font-bold leading-tight tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-5 max-w-2xl leading-relaxed text-charcoal/62">{text}</p>
                  <p className="mt-5 border-t border-brand/15 pt-4 text-sm font-semibold text-brand">
                    {tagline}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep py-20 text-pure-white lg:py-24">
        <div className="shell">
          <Reveal className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <Label className="text-aqua">Global by nature</Label>
              <h2 className="mt-7 max-w-[18ch] text-balance text-[clamp(2.5rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-pure-white">
                Made here. Grown everywhere.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-pure-white/68">
                From Namakkal district to international growing businesses, our coco substrate
                products travel with clear specifications and dependable export execution.
              </p>
              <PrimaryButton
                to="/contact"
                className="mt-7 bg-[#ffc21a] text-brand-deep hover:bg-ivory"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden />
              </PrimaryButton>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-md border border-pure-white/15">
              <img
                src={img.exportPort}
                alt="Export containers ready for global shipment"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-brand-deep/35" />
              <Globe2
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 text-aqua/85 sm:h-60 sm:w-60"
                strokeWidth={0.75}
                aria-hidden
              />
            </div>
          </Reveal>

          <Reveal className="mt-12 grid gap-6 border-t border-pure-white/15 pt-9 lg:grid-cols-2 lg:items-end">
            <div>
              <Label className="text-aqua">Memberships &amp; Certifications</Label>
              <h3 className="mt-5 text-[clamp(1.75rem,2.6vw,2.5rem)] font-bold leading-tight tracking-tight text-pure-white">
                Standards behind every shipment.
              </h3>
            </div>
            <p className="max-w-md leading-relaxed text-pure-white/60 lg:justify-self-end">
              Recognised memberships and quality systems support a professional, export-ready supply
              experience.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 50}
                className={`flex min-h-48 flex-col justify-between rounded-md bg-pure-white p-5 text-charcoal ${index === certifications.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-brand/45">
                  Credential {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-20 items-center justify-center p-2">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="border-t border-charcoal/10 pt-4 text-sm font-semibold">
                  {item.name}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="bg-brand-aqua">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1fr_2fr]">
          <div className="relative isolate flex min-w-0 flex-col overflow-hidden bg-brand text-pure-white">
            <div className="relative z-10 px-7 pt-9 sm:px-10 lg:px-9 xl:px-12">
              <p className="text-[10px] font-semibold uppercase tracking-[.28em]">
                Founder &amp; Leadership
              </p>
              <h2 className="mt-6 text-[clamp(3.5rem,5.8vw,6rem)] font-extrabold leading-none tracking-tight">
                Mohan
              </h2>
              <span className="mt-3 block h-1 w-14 bg-[#68e6c2]" aria-hidden />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[.3em]">Founder</p>
              <p className="mt-2 text-xs uppercase tracking-[.3em] text-pure-white/80">
                Arjuna Exports
              </p>
            </div>
            <figure className="relative mt-5 flex flex-1 flex-col">
              <img
                src={img.founderMohanraj}
                alt="Mohanraj Palaniappan, founder of Arjuna Exports"
                loading="lazy"
                className="min-h-0 w-full flex-1 object-cover object-top max-lg:max-h-[620px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-7 pb-9 sm:px-10 lg:px-9 xl:px-12">
                <div>
                  <span className="mb-4 block h-0.5 w-8 bg-[#68e6c2]" aria-hidden />
                  <p className="text-xs uppercase leading-6 tracking-[.3em]">
                    People
                    <br />
                    Partnerships
                    <br />
                    Better Growth
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/mohanrajpalaniappan/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Mohanraj Palaniappan on LinkedIn"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-pure-white/30 transition-colors hover:bg-pure-white/15 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="min-w-0 px-5 py-9 sm:px-8 xl:p-10">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_130px]">
              <div>
                <h3 className="text-[clamp(2rem,3.4vw,3.5rem)] font-extrabold leading-[1.02] tracking-tight text-charcoal">
                  From Roots
                  <br />
                  to Global Growth
                </h3>
                <p className="mt-4 text-[8px] font-semibold uppercase leading-5 tracking-[.25em] text-brand">
                  Agriculture | Engineering | Global Experience | A Stronger Tomorrow
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal">
                  Mohan founded Arjuna Exports with a unique combination of agricultural roots,
                  engineering expertise, and global corporate experience.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-charcoal">
                  His vision is to bring greater quality consistency, transparency, process
                  discipline, and professionalism to the global coco peat industry — helping
                  international buyers build reliable, long-term supply partnerships.
                </p>
              </div>
              <blockquote className="border-l border-brand/40 pl-5 text-charcoal">
                <span className="block h-9 text-6xl leading-none text-[#68e6c2]" aria-hidden>
                  &ldquo;
                </span>
                <p className="mt-2 text-lg italic leading-tight">
                  Better Substrates.
                  <br />
                  Stronger Growers.
                  <br />A Greener Tomorrow.
                </p>
                <span className="mt-6 block h-0.5 w-10 bg-[#68e6c2]" aria-hidden />
              </blockquote>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {founderStory.map(({ title, text, Icon }, index) => (
                <article
                  key={title}
                  className={`flex min-w-0 items-start gap-4 rounded-lg border border-brand/10 p-4 ${index === founderStory.length - 1 ? "bg-[#b5f3e3] sm:col-span-2" : "bg-pure-white/30"}`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#b5f3e3] text-brand xl:h-14 xl:w-14">
                    <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="mb-1 flex items-center gap-4 text-brand">
                      <span className="text-xs font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-6 bg-brand/60" aria-hidden />
                    </div>
                    <h4 className="text-base font-bold leading-tight tracking-tight text-charcoal">
                      {title}
                    </h4>
                    <p className="mt-2 text-xs leading-[1.45] text-charcoal">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20 lg:py-24">
        <div className="shell">
          <Reveal className="grid gap-8 border-b border-brand/20 pb-9 lg:grid-cols-2 lg:items-end">
            <div>
              <Label className="text-brand">Our Strengths</Label>
              <h2 className="mt-6 max-w-[20ch] text-balance text-[clamp(2.25rem,3.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Built on process. Driven by quality.
              </h2>
            </div>
            <p className="max-w-xl leading-relaxed text-charcoal/62 lg:justify-self-end">
              Clear systems turn agricultural knowledge into dependable results. Every step is
              designed around specification, consistency, and lasting customer confidence.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {strengths.map(({ title, text, Icon }, index) => (
              <Reveal
                key={title}
                delay={(index % 2) * 80}
                className="flex min-h-[280px] flex-col rounded-md border border-brand/12 bg-offwhite p-7 text-charcoal sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="text-4xl font-extrabold tracking-tight text-brand/12">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-auto max-w-xl pt-10">
                  <h3 className="max-w-[26ch] text-balance text-[clamp(1.4rem,2vw,1.75rem)] font-bold leading-tight tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/60">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 lg:py-24">
        <div className="shell grid overflow-hidden rounded-md border border-brand/12 bg-pure-white lg:grid-cols-2">
          <Reveal className="relative min-h-[380px] overflow-hidden lg:min-h-[500px]">
            <img
              src={img.closingRoots}
              alt="Healthy crop roots growing in coco substrate"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
            <p className="absolute bottom-8 left-8 right-8 text-sm font-semibold uppercase leading-6 tracking-[.14em] text-pure-white">
              Better substrates · Stronger growers · A greener tomorrow
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <Label className="text-brand">Long-Term Partnerships</Label>
            <h2 className="mt-6 max-w-[20ch] text-balance text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.1] tracking-tight">
              Supply built around confidence.
            </h2>
            <p className="mt-7 border-t border-brand/20 pt-6 leading-relaxed text-charcoal/65">
              Our objective extends beyond supplying a product. We aim to create a transparent,
              professional, and dependable buying experience through clear communication, accurate
              documentation, consistent quality, and reliable execution.
            </p>
            <p className="mt-5 leading-relaxed text-charcoal/65">
              Today, our products support growers and horticultural businesses across international
              markets. From our agricultural roots in Tamil Nadu, we are committed to raising the
              standard of coco substrate supply around the world.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
