import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Handshake,
  Leaf,
  Linkedin,
  MapPin,
  Package,
  Recycle,
  Settings,
  Shield,
  Sprout,
  Target,
  Truck,
  Users,
} from "lucide-react";
import founderPortrait from "@/assets/founder-mohanraj-restored.png";
import heroPlantation from "@/assets/hero-plantation.jpg";
import exportPort from "@/assets/export-port.jpg";
import containerTrucks from "@/assets/container-trucks.jpg";
import closingRoots from "@/assets/closing-roots.jpg";
import warehousePallets from "@/assets/warehouse-pallets.jpg";
import storyPeople from "@/assets/story-people.jpg";
import founderSmall from "@/assets/founder-mohanraj.png";
import epceLogo from "@/assets/certifications/eepc-official.png";
import msmeLogo from "@/assets/certifications/msme.png";
import coirBoardLogo from "@/assets/certifications/coir-board.jpg";
import fieoLogo from "@/assets/certifications/fieo-official.gif";
import iso9001Logo from "@/assets/certifications/iso-9001.png";
import { PurposeSection } from "@/components/site/PurposeSection";
import { CertificationsSection } from "@/components/site/CertificationsSection";
import { AboutHeroSection } from "@/components/site/AboutHeroSection";
import { OurStrengthsAccordion } from "@/components/site/OurStrengthsAccordion";
import { pageMeta } from "@/components/site/PageHero";
import {
  Label,
  PrimaryButton,
  Reveal,
  TextLink,
} from "@/components/site/primitives";

export const Route = createFileRoute("/our-story")({
  head: () =>
    pageMeta(
      "About Us",
      "Arjuna Exports is a South Indian coco substrate exporter rooted in agriculture, built for professional growers and international businesses.",
    ),
  component: AboutUs,
});

/* ─────────── data ─────────── */

const originStats = [
  {
    num: "01",
    label: "Origin",
    title: "100% Organic Sourcing",
    text: "Naturally cultivated, no chemical processing — maintaining substrate purity from field to facility.",
    Icon: Leaf,
  },
  {
    num: "02",
    label: "Quality",
    title: "Low EC Washed Grades",
    text: "Multiple washing stages ensure stable EC and pH, meeting international horticulture standards.",
    Icon: Shield,
  },
  {
    num: "03",
    label: "Logistics",
    title: "Reliable Logistics",
    text: "Export-ready packaging, documentation accuracy and container-level tracking for every shipment.",
    Icon: Truck,
  },
];

const founderStory = [
  {
    title: "From Farming to Global Exports",
    text: "Born into a farming family with deep roots in coconut cultivation, Mohan developed first-hand knowledge of agriculture and the coconut industry from an early age. This foundation continues to shape his understanding of the product, its origin, and the needs of global buyers.",
    Icon: Sprout,
  },
  {
    title: "Engineering Mindset",
    text: "An Electronics & Communication Engineering graduate from Anna University, Mohan brings a structured, analytical approach to the business. His engineering background has shaped his focus on systems, process discipline, quality control, and continuous improvement.",
    Icon: Settings,
  },
  {
    title: "Global Corporate Experience",
    text: "Before founding Arjuna Exports, Mohan spent over a decade working with global organizations including Accenture and IBM, with experience in SAP, business intelligence, analytics, and enterprise processes. This corporate experience became the foundation for bringing greater structure and professionalism to the export business.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Building a More Professional Coco Peat Industry",
    text: "Arjuna Exports was founded in 2015 with a clear vision: to bring greater transparency, consistency, and structure to coco peat exports. The objective is not simply to supply a product, but to create a more reliable and transparent buying experience for international customers.",
    Icon: Target,
  },
  {
    title: "Built for Long-Term Partnerships",
    text: "Mohan is committed to building long-term customer relationships through consistent product quality, transparent communication, accurate documentation, and reliable execution. The approach combines agricultural understanding with structured business practices to deliver a dependable export experience.",
    Icon: Handshake,
  },
];

const processFeatures = [
  {
    num: "01",
    title: "Process-Driven Production",
    text: "Structured production processes and defined quality controls help us maintain consistency across every batch and shipment.",
  },
  {
    num: "02",
    title: "Transparent Product Specifications",
    text: "Clear specifications, measurable parameters, and transparent documentation give customers a clear understanding of what they are purchasing.",
  },
  {
    num: "03",
    title: "Consistent Export-Grade Quality",
    text: "Rigorous quality checks at every stage help ensure that our coco substrate products consistently meet agreed specifications and customer requirements.",
  },
  {
    num: "04",
    title: "Long-Term B2B Partnerships",
    text: "We focus on building lasting business relationships that rely on clear communication, reliable execution, and a clear understanding of each customer's requirements.",
  },
];

const certifications = [
  { code: "CREDENTIAL 01", name: "MSME · Udyam", image: msmeLogo },
  { code: "CREDENTIAL 02", name: "EEPC India", image: epceLogo },
  { code: "CREDENTIAL 03", name: "Coir Board", image: coirBoardLogo },
  { code: "CREDENTIAL 04", name: "FIEO", image: fieoLogo },
  { code: "CREDENTIAL 05", name: "ISO 9001:2015", image: iso9001Logo },
];

/* ─────────── globe SVG icon ─────────── */

function GlobeLeafIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="56" stroke="#6AF0C4" strokeWidth="2.5" />
      <ellipse cx="60" cy="60" rx="28" ry="56" stroke="#6AF0C4" strokeWidth="1.5" />
      <line x1="4" y1="60" x2="116" y2="60" stroke="#6AF0C4" strokeWidth="1.5" />
      <line x1="12" y1="35" x2="108" y2="35" stroke="#6AF0C4" strokeWidth="1" opacity="0.6" />
      <line x1="12" y1="85" x2="108" y2="85" stroke="#6AF0C4" strokeWidth="1" opacity="0.6" />
      <path
        d="M60 20 C60 20 78 42 78 60 C78 78 60 95 60 95"
        stroke="#6AF0C4"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M55 40 Q65 50 58 62 Q50 72 60 82"
        stroke="#6AF0C4"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M58 52 Q68 46 76 50"
        stroke="#6AF0C4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M57 65 Q47 60 42 64"
        stroke="#6AF0C4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ─────────── page ─────────── */

function AboutUs() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          SECTION 1 — About Hero Section
       ═══════════════════════════════════════════════════ */}
      <AboutHeroSection />

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — Founder: Mohanraj Palaniappan
       ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-10 px-4 sm:px-8 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-stretch gap-6 md:gap-10">
          {/* Left Column: Photo + Caption (40%) */}
          <div className="w-full shrink-0 flex flex-col rounded-md overflow-hidden border border-[#1F5566]/20 shadow-sm bg-[#1F5566] h-full">
            {/* Photo Container */}
            <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] w-full bg-gray-100 overflow-hidden">
              <img
                src={founderPortrait}
                alt="Mohanraj Palaniappan, Founder of Arjuna Exports"
                className="absolute inset-0 h-full w-full object-cover object-[top_center]"
                loading="lazy"
              />
              {/* FOUNDER & LEADERSHIP Pill - Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex rounded-full bg-[#1F5566] border border-[#6BF0C6]/50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6BF0C6] shadow-md">
                  FOUNDER &amp; LEADERSHIP
                </span>
              </div>
            </div>

            {/* Caption Bar Directly Below Photo (#1F5566) */}
            <div className="bg-[#1F5566] p-5 sm:p-6 text-white shrink-0 flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <h2 className="text-xl sm:text-2xl !font-sans font-bold tracking-tight !text-white leading-tight" style={{ fontFamily: "var(--font-sans)", color: "#ffffff" }}>
                  Mohanraj Palaniappan
                </h2>
                <a
                  href="https://www.linkedin.com/in/mohanrajpalaniappan/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Mohanraj Palaniappan on LinkedIn"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#0A66C2] text-white transition hover:bg-[#004182] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <p className="text-sm text-white/90 font-normal">
                Founder, Arjuna Exports
              </p>

              <p className="text-sm font-bold text-[#6BF0C6] tracking-wide">
                People. Partnerships. Better Growth.
              </p>

              <div className="h-px w-full bg-[#6BF0C6]/50 my-1" aria-hidden="true" />

              <div>
                <span className="inline-block rounded-sm border border-[#6BF0C6]/40 bg-[#1F5566]/80 px-3 py-1.5 text-xs font-semibold text-white">
                  Founded Arjuna Exports, 2015
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content (60%) */}
          <div className="w-full flex flex-col justify-between h-full">
            {/* Header / Intro */}
            <header className="shrink-0 pb-4 border-b border-[#1F5566]/15">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#1F5566]/75">
                FOUNDER &amp; LEADERSHIP | AGRICULTURE | ENGINEERING | GLOBAL EXPERIENCE | A STRONGER TOMORROW
              </p>
              <h2 className="display mt-2 text-[clamp(36px,4vw,56px)] font-bold leading-[1.03] tracking-tight text-[#1F5566]">
                From Roots to Global Growth
              </h2>
              <p className="mt-3 text-[clamp(13px,1.1vw,16px)] leading-[1.6] text-[#244b51]">
                Mohan founded Arjuna Exports with a unique combination of agricultural roots,
                engineering expertise, and global corporate experience. His vision is to bring greater
                quality consistency, transparency, process discipline, and professionalism to the global
                coco peat industry, helping international buyers build reliable, long-term partnerships.
              </p>

              {/* Tag Chips */}
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold tracking-[0.08em] text-[#1F5566]">
                {["Better", "Substitutes", "Stronger", "Growers", "A", "Tomorrow"].map((w) => (
                  <span key={w} className="rounded-sm bg-[#6BF0C6]/20 border border-[#6BF0C6]/40 px-2.5 py-1 text-[11px]">
                    {w}
                  </span>
                ))}
              </div>
            </header>

            {/* Cards Wrapper - fills remaining height */}
            <div className="flex-1 flex flex-col gap-3 sm:gap-4 mt-4">
              {founderStory.map(({ title, text, Icon }, index) => (
                <article key={title} className="flex-1 flex flex-col rounded-md overflow-hidden border border-[#1F5566]/20 bg-white shadow-sm min-h-[90px]">
                  {/* Card Header Bar */}
                  <div className="flex shrink-0 h-[48px] sm:h-[54px]">
                    {/* Left Dark Teal Box containing Number + Icon */}
                    <div className="w-[22%] min-w-[70px] sm:min-w-[85px] bg-[#1F5566] flex items-center justify-center gap-2 text-[#6BF0C6] px-2 shrink-0">
                      <span className="text-xs sm:text-sm font-extrabold tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#6BF0C6]" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    {/* Right Mint Header Bar containing Title */}
                    <h3 className="flex min-w-0 flex-1 items-center justify-center bg-[#6BF0C6] px-3 text-center text-[clamp(11px,0.9vw,14px)] font-extrabold uppercase leading-snug tracking-[0.04em] text-[#0f3d47]">
                      {title}
                    </h3>
                  </div>
                  {/* Card Body - description centered in card */}
                  <div className="flex-1 flex items-center px-4 py-2.5 sm:px-5 sm:py-3">
                    <p className="text-[clamp(12px,1vw,15px)] leading-[1.55] text-[#244b51]">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — Purpose in every partnership
       ═══════════════════════════════════════════════════ */}
      <PurposeSection />

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — Standards behind every shipment
       ═══════════════════════════════════════════════════ */}
      <CertificationsSection />



      {/* ═══════════════════════════════════════════════════
          SECTION 6 — Made here. Grown everywhere.
       ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#245B6B] py-16 text-white lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col justify-center">
              <span className="micro-label mb-6 block font-bold tracking-[0.16em] uppercase text-xs !text-white">
                Exports &amp; Outreach
              </span>
              <h2 className="display max-w-[14ch] text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[0.96] !text-white font-extrabold">
                Made here. Grown everywhere.
              </h2>
              <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-white/85 sm:text-base sm:leading-7">
                From Kovilpatti district to international growing businesses, our coco substrate products travel with clear
                specifications and dependable export execution.
              </p>
              <div className="mt-8">
                <PrimaryButton to="/contact">
                  Start a conversation
                </PrimaryButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-md shadow-xl border border-white/10">
              <img
                src={containerTrucks}
                alt="Arjuna Exports container trucks"
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#245B6B]/40 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <GlobeLeafIcon className="h-28 w-28 opacity-85 sm:h-36 sm:w-36 drop-shadow-md" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8 — Built on process. Driven by quality.
       ═══════════════════════════════════════════════════ */}
      <OurStrengthsAccordion />

      {/* ═══════════════════════════════════════════════════
          SECTION 9 — Supply built around confidence
       ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0f3d47] py-16 text-white lg:py-24">
        <img
          src={warehousePallets}
          alt="Warehouse stored coco substrate pallets"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d47]/90 via-[#0f3d47]/70 to-[#0f3d47]/45" />

        <div className="shell relative z-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col justify-center">
              <Label className="mb-6 text-white/50">Our Commitment</Label>
              <h2 className="display max-w-[16ch] text-[clamp(2.25rem,4.5vw,4rem)] leading-[0.98] text-white">
                Supply built around confidence.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col justify-center gap-5">
              <p className="max-w-[50ch] text-sm leading-relaxed text-white/80 sm:text-base sm:leading-7">
                Our objective extends beyond supplying a product. We aim to create a
                transparent, professional and dependable buying experience through clear
                communication, accurate documentation, consistent quality, and reliable execution.
              </p>
              <p className="max-w-[50ch] text-sm leading-relaxed text-white/80 sm:text-base sm:leading-7">
                Today, our products support growers and horticultural businesses across international
                markets. From our agricultural roots in Tamil Nadu, we are committed to raising the
                standard of coco substrate supply around the world.
              </p>

              <div className="mt-4 h-px w-full bg-[#6AF0C4]/30" />
              <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#6AF0C4] sm:text-xs">
                Better Substitutes · Stronger Growers · A Greener Tomorrow
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
