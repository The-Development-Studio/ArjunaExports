import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Boxes,
  Check,
  Container,
  Factory,
  FileCheck2,
  FlaskConical,
  PackageCheck,
  Ship,
  Sparkles,
} from "lucide-react";
import { img, processStages } from "@/lib/site-data";
import coconutArtworkLeft from "@/assets/coconut.svg";
import coconutArtworkRight from "@/assets/coconut2.svg";
import sellerFactory from "@/assets/Process/Sell Factory.png";
import firstCarrier from "@/assets/Process/First Carrier.png";
import freightStation from "@/assets/Process/container freight station customs clearence.png";
import loadingPort from "@/assets/Process/port designation.png";
import oceanTransit from "@/assets/Process/ocean transit.png";
import destinationPort from "@/assets/Process/landing port.png";
import customsClearance from "@/assets/Process/cutoms clearence.png";
import buyerPlace from "@/assets/Process/buyer place.png";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { ChapterHeading, Label, PrimaryButton, Reveal } from "@/components/site/primitives";

export const Route = createFileRoute("/process")({
  head: () =>
    pageMeta(
      "Process",
      "Controlled coco peat manufacturing from coconut husk selection to export-ready packing.",
    ),
  component: Process,
});

const proofStats = [
  { value: "09", label: "Controlled stages", Icon: Factory },
  { value: "05", label: "Batch parameters", Icon: FlaskConical },
  { value: "40 ft", label: "Export containers", Icon: Container },
];

const processChapters = [
  { label: "01 — Foundation", stages: processStages.slice(0, 3) },
  { label: "02 — Conditioning", stages: processStages.slice(3, 6) },
  { label: "03 — Export assurance", stages: processStages.slice(6, 9) },
];

const logisticsSteps = [
  {
    n: "01",
    title: "Seller Factory",
    term: "EXW · Ex Works",
    image: sellerFactory,
    position: "logistics-step-1",
  },
  {
    n: "02",
    title: "First Carrier",
    term: "Factory pickup",
    image: firstCarrier,
    position: "logistics-step-2",
  },
  {
    n: "03",
    title: "Container Freight Station",
    term: "Export customs clearance",
    image: freightStation,
    position: "logistics-step-3",
  },
  {
    n: "04",
    title: "Loading Port",
    term: "FOB · Free on Board",
    image: loadingPort,
    position: "logistics-step-4",
  },
  {
    n: "05",
    title: "Ocean Transit",
    term: "International sea freight",
    image: oceanTransit,
    position: "logistics-step-5",
  },
  {
    n: "06",
    title: "Destination Port",
    term: "CIF · Cost, Insurance & Freight",
    image: destinationPort,
    position: "logistics-step-6",
  },
  {
    n: "07",
    title: "Customs Clearance",
    term: "Import documentation",
    image: customsClearance,
    position: "logistics-step-7",
  },
  {
    n: "08",
    title: "Local Transport",
    term: "Destination delivery",
    image: firstCarrier,
    position: "logistics-step-8",
  },
  {
    n: "09",
    title: "Buyer’s Place",
    term: "DAP · DDU · DDP",
    image: buyerPlace,
    position: "logistics-step-9",
  },
];

const outputs = [
  { name: "Coco Peat Blocks", format: "5 kg block / 650 g brick", image: img.productBlock },
  { name: "Grow Bags", format: "Open-top and lay-flat formats", image: img.productGrowbag },
  { name: "Husk Chips", format: "Loose or compressed grades", image: img.stageHusk },
  { name: "Custom Blends", format: "Pith, chips and amendments", image: img.stageMedium },
];

const exportReadiness = [
  {
    title: "Documentation",
    text: "Shipment papers and destination requirements are aligned before dispatch.",
    Icon: FileCheck2,
  },
  {
    title: "Palletisation",
    text: "Packed units are prepared for handling stability and efficient unloading.",
    Icon: PackageCheck,
  },
  {
    title: "Container Loading",
    text: "20-foot and 40-foot full containers are loaded to the order profile.",
    Icon: Container,
  },
  {
    title: "Shipment Handoff",
    text: "Every order moves into export coordination with visibility through port dispatch.",
    Icon: Ship,
  },
];

function ProcessStage({ stage, index }: { stage: (typeof processStages)[number]; index: number }) {
  const imageFirst = index % 2 === 0;
  const isShipping = index > 6;

  const copy = (
    <Reveal
      delay={90}
      className={`process-stage-copy ${imageFirst ? "lg:col-start-3" : "lg:col-start-1 lg:row-start-1"}`}
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="micro-label text-brand">
          {isShipping ? "Delivery / shipping" : "Production process"}
        </span>
        <span className="h-px flex-1 bg-brand/20" aria-hidden="true" />
      </div>
      <h3 className="display text-[clamp(1.55rem,2.25vw,2.5rem)]">{stage.title}</h3>
      <p className="mt-3 max-w-[62ch] text-[13px] leading-[1.6] text-charcoal/65 lg:text-[14px]">
        {stage.text}
      </p>
      <div className="mt-4 flex items-center gap-3 border-t border-charcoal/10 pt-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
          <Check className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[.12em] text-brand">
          {stage.data}
        </span>
      </div>
    </Reveal>
  );

  const photo = (
    <Reveal
      className={`process-stage-photo group ${imageFirst ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-3"}`}
    >
      <img
        src={stage.image}
        alt={`${stage.title} at Arjuna Exports`}
        loading={index < 2 ? "eager" : "lazy"}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <span className="absolute bottom-3 left-3 z-[3] rounded-sm bg-ivory/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.14em] text-brand shadow-sm">
        Inside our process
      </span>
    </Reveal>
  );

  return (
    <article className="process-stage relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] lg:items-center lg:gap-9">
      {photo}
      <div className="process-stage-node lg:col-start-2 lg:row-start-1" aria-hidden="true">
        <span>{stage.n}</span>
      </div>
      {copy}
    </article>
  );
}

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From husk to harvest."
        intro="Nine carefully controlled stages turn a natural by-product into dependable growing media, ready for growers around the world."
        image={img.processCompression}
      />

      <section className="border-b border-charcoal/10 bg-ivory py-10 lg:py-12">
        <div className="shell grid gap-4 sm:grid-cols-3">
          {proofStats.map(({ value, label, Icon }, index) => (
            <Reveal
              key={label}
              delay={index * 70}
              className="flex items-center gap-5 border-charcoal/12 py-3 sm:justify-center sm:border-r sm:last:border-r-0"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand-soft text-brand shadow-sm lg:h-14 lg:w-14">
                <Icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <p className="display text-4xl text-brand lg:text-5xl">{value}</p>
              <p className="max-w-24 text-left text-xs font-semibold uppercase leading-5 tracking-[.12em] text-charcoal/55">
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="process-journey relative overflow-hidden bg-offwhite py-16 lg:py-20">
        <img
          src={coconutArtworkLeft}
          alt=""
          loading="lazy"
          decoding="async"
          className="process-journey-decoration process-journey-decoration-left"
          aria-hidden="true"
        />
        <img
          src={coconutArtworkRight}
          alt=""
          loading="lazy"
          decoding="async"
          className="process-journey-decoration process-journey-decoration-right"
          aria-hidden="true"
        />
        <div className="shell process-journey-intro relative z-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Label className="text-brand">The complete workflow</Label>
            <h2 className="display mt-5 text-[clamp(2.8rem,5.2vw,5rem)]">
              One continuous line of care.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-charcoal/65">
              Every handoff is measured. Every batch is traceable. Follow the route from locally
              sourced coconut husk to its final export-ready form.
            </p>
            <span className="mx-auto mt-6 grid h-11 w-11 place-items-center rounded-full border border-brand/25 text-brand">
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </span>
          </Reveal>
        </div>
      </section>

      <div className="process-chapters bg-offwhite">
        {processChapters.map((chapter, chapterIndex) => (
          <section className="process-chapter relative overflow-hidden" key={chapter.label}>
            <div className="process-coconut-art" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="shell relative z-10">
              <div className="mb-4 flex items-center gap-4 lg:mb-5">
                <Label className="text-brand">{chapter.label}</Label>
                <span className="h-px flex-1 bg-brand/15" aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-[.15em] text-charcoal/45">
                  3 stages
                </span>
              </div>
              <div className="process-stage-list relative grid gap-4 lg:gap-5">
                {chapter.stages.map((stage, stageIndex) => (
                  <ProcessStage key={stage.n} stage={stage} index={chapterIndex * 3 + stageIndex} />
                ))}
              </div>
              {chapterIndex === processChapters.length - 1 && (
                <Reveal className="relative z-10 mx-auto mt-4 flex w-fit items-center gap-3 rounded-full bg-brand px-6 py-3 text-pure-white shadow-[0_16px_40px_rgba(0,100,101,.2)]">
                  <Check className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[.15em]">
                    Export ready
                  </span>
                </Reveal>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="logistics-section overflow-hidden bg-ivory">
        <div className="shell flex min-h-[calc(100svh-88px)] flex-col justify-center py-10 lg:py-12">
          <Reveal className="flex flex-col gap-5 border-b border-charcoal/12 pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Label className="text-brand">From factory to buyer</Label>
              <h2 className="display mt-4 text-[clamp(1.8rem,3vw,3.75rem)] md:whitespace-nowrap">
                Shipping &amp; logistics process.
              </h2>
            </div>
            <p className="max-w-md text-left text-sm leading-6 text-charcoal/65 lg:text-right">
              One coordinated export route—from factory collection and customs handling to ocean
              transit and final delivery.
            </p>
          </Reveal>

          <div className="logistics-map relative mt-6 lg:mt-8">
            <svg
              className="logistics-route"
              viewBox="0 0 1000 220"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="logistics-arrow"
                  markerWidth="9"
                  markerHeight="9"
                  refX="7"
                  refY="4.5"
                  orient="auto"
                >
                  <path d="M0 0L9 4.5L0 9Z" fill="var(--brand)" />
                </marker>
              </defs>
              <path
                d="M45 105H955"
                stroke="var(--brand)"
                strokeWidth="2"
                strokeDasharray="7 9"
                markerEnd="url(#logistics-arrow)"
              />
            </svg>

            {logisticsSteps.map((step, index) => (
              <Reveal
                key={step.n}
                delay={(index % 5) * 55}
                className={`logistics-step ${step.position}`}
              >
                <span className="logistics-number">{step.n}</span>
                <div className="logistics-image">
                  <img
                    src={step.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="subtitle text-center text-[15px] leading-tight text-brand lg:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-center text-[10px] font-semibold uppercase leading-4 tracking-[.08em] text-charcoal/55">
                  {step.term}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-2 border-t border-charcoal/10 pt-5 text-[10px] font-semibold uppercase tracking-[.12em] text-charcoal/50">
            <span>Export documentation</span>
            <span>Customs coordination</span>
            <span>Container tracking</span>
            <span>Destination delivery</span>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-deep py-24 text-pure-white lg:py-28">
        <div className="shell">
          <Reveal>
            <ChapterHeading label="Output Formats" lines={["One process.", "Multiple products."]} />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {outputs.map((output, index) => (
              <Reveal
                key={output.name}
                delay={index * 60}
                className="group overflow-hidden rounded-md border border-pure-white/12 bg-pure-white/[0.07]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={output.image}
                    alt={output.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Boxes className="h-7 w-7 text-[#ffc21a]" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-black leading-tight text-ivory">
                    {output.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-pure-white/62">{output.format}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <Reveal>
            <Label className="text-brand">Export Readiness</Label>
            <h2 className="display mt-7 text-[clamp(3rem,6vw,5rem)]">
              Finished means ready to ship.
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-charcoal/65">
              Production ends only when the product is documented, loaded and ready for its
              destination.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-md border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2">
            {exportReadiness.map((item, index) => {
              const Icon = item.Icon;
              return (
                <Reveal
                  key={item.title}
                  delay={(index % 2) * 70}
                  className="bg-offwhite p-7 lg:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-pure-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="display mt-7 text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#68e6c2] py-20 text-brand lg:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <Reveal>
            <Label className="text-aqua">Custom Specification</Label>
            <h2 className="display mt-7 max-w-3xl text-[clamp(3rem,6vw,5rem)]">
              Need a specific coco peat process?
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <PrimaryButton to="/contact" className="bg-[#ffc21a] text-brand-deep hover:bg-ivory">
              Talk to our team
            </PrimaryButton>
          </Reveal>
          <Sparkles className="hidden h-10 w-10 text-[#ffc21a]/50 lg:block" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
