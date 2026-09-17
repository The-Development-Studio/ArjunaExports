import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileSearch,
  Handshake,
  Lightbulb,
  MessageSquareText,
  PackageCheck,
  RefreshCw,
  SearchCheck,
  Ship,
  Truck,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

type JourneyStep = {
  title: string;
  description: string;
  Icon: LucideIcon;
  x: number;
  y: number;
};

const journeySteps: JourneyStep[] = [
  {
    title: "Business Understanding",
    description:
      "We understand your business, application, volume, technical requirements and expectations before moving toward the right solution.",
    Icon: UsersRound,
    x: 7.5,
    y: 14.5,
  },
  {
    title: "Requirement Discovery",
    description:
      "We translate your commercial and operational needs into clear product, packing, volume and documentation requirements.",
    Icon: ClipboardList,
    x: 28.3,
    y: 14.5,
  },
  {
    title: "Solution Recommendation",
    description:
      "Our team recommends the most suitable coco format and specification for your crop, process and target market.",
    Icon: Lightbulb,
    x: 49.2,
    y: 14.5,
  },
  {
    title: "Quotation & Commercial Proposal",
    description:
      "You receive a transparent proposal covering specifications, quantity, packaging, pricing, terms and responsibilities.",
    Icon: FileCheck2,
    x: 70,
    y: 14.5,
  },
  {
    title: "Sample Evaluation",
    description:
      "Representative samples allow you to validate expansion, EC, moisture, texture and handling before committing at scale.",
    Icon: SearchCheck,
    x: 90.8,
    y: 14.5,
  },
  {
    title: "Order Confirmation",
    description:
      "Approved specifications, quantities, commercial terms and delivery milestones are consolidated into one confirmed order.",
    Icon: ClipboardCheck,
    x: 86.7,
    y: 50,
  },
  {
    title: "Production Planning",
    description:
      "Materials, processing, drying, compression, packing and container readiness are scheduled around the agreed dispatch plan.",
    Icon: Boxes,
    x: 66.7,
    y: 50,
  },
  {
    title: "Quality Assurance & Inspection",
    description:
      "Each batch is checked against agreed parameters, including moisture, EC, expansion, compression and packaging quality.",
    Icon: FileSearch,
    x: 46.7,
    y: 50,
  },
  {
    title: "Export Documentation Compliance",
    description:
      "Export and buyer-specific documents are prepared and verified early to support smooth regulatory clearance.",
    Icon: BadgeCheck,
    x: 26.7,
    y: 50,
  },
  {
    title: "Shipment & Logistics Coordination",
    description:
      "We coordinate container movement, freight, port handoff and dispatch updates throughout the shipment journey.",
    Icon: Ship,
    x: 7.5,
    y: 50,
  },
  {
    title: "Customs & Delivery Support",
    description:
      "Our support continues through customs clearance, destination handling and final delivery communication.",
    Icon: Truck,
    x: 12.5,
    y: 85.5,
  },
  {
    title: "Customer Feedback",
    description:
      "We capture feedback from your team and end users to understand real-world product and service performance.",
    Icon: MessageSquareText,
    x: 37.5,
    y: 85.5,
  },
  {
    title: "Continuous Improvement",
    description:
      "Specifications, packing, timing and communication are refined using the insights gained from every shipment.",
    Icon: RefreshCw,
    x: 62.5,
    y: 85.5,
  },
  {
    title: "Long-Term Partnership",
    description:
      "Reliable quality and responsive support create a dependable partnership for future seasons, markets and growth plans.",
    Icon: Handshake,
    x: 87.5,
    y: 85.5,
  },
];

const roadmapPath =
  "M90 110 H1090 C1145 110 1150 160 1150 220 V275 C1150 345 1110 380 1040 380 H90 C35 380 30 430 30 490 V545 C30 610 80 650 150 650 H1050";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function CustomerJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const stickyOffset = window.innerWidth >= 1024 ? 88 : 0;
      const scrollDistance = Math.max(rect.height - window.innerHeight + stickyOffset, 1);
      const next = clamp((stickyOffset - rect.top) / scrollDistance, 0, 1);
      setProgress((current) => (Math.abs(current - next) > 0.002 ? next : current));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const selected = selectedStep === null ? null : journeySteps[selectedStep];

  return (
    <section
      id="customer-journey"
      ref={sectionRef}
      aria-labelledby="customer-journey-title"
      className="relative overflow-clip bg-[#043f40] py-20 text-pure-white sm:py-24 lg:h-[300vh] lg:py-0"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(0,100,101,.6),transparent_34%),linear-gradient(145deg,#043f40_0%,#032e2f_100%)]" />
        <div className="absolute inset-0 opacity-[.07] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full border border-pure-white/10" />
        <div className="absolute -right-16 top-40 h-64 w-64 rounded-full border border-[#ffc928]/15" />
      </div>

      <div className="lg:sticky lg:top-[88px] lg:flex lg:h-[calc(100vh-88px)] lg:items-center">
        <div className="shell relative lg:py-5">
          <Reveal className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,440px)] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-[#ffd45a]">
                Customer Journey
              </p>
              <h2
                id="customer-journey-title"
                className="display mt-5 max-w-[15ch] text-[clamp(2.8rem,4.4vw,5rem)] leading-[.92] text-pure-white"
              >
                From First Call to Long-Term Partnership
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-pure-white/68 lg:justify-self-end">
              A transparent, accountable path from understanding your needs to building dependable
              supply confidence across every order.
            </p>
          </Reveal>

          <div className="relative mt-8 hidden lg:block">
            <div className="relative h-[clamp(420px,55vh,620px)] overflow-hidden rounded-[2rem] border border-pure-white/12 bg-[#052f30]/72 shadow-[0_42px_110px_rgba(0,0,0,.34)] backdrop-blur-sm">
              <svg
                viewBox="0 0 1200 760"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d={roadmapPath}
                  pathLength="100"
                  fill="none"
                  stroke="rgba(230,255,247,.22)"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={roadmapPath}
                  pathLength="100"
                  fill="none"
                  stroke="#dff8ef"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="100"
                  strokeDashoffset={100 - progress * 100}
                  className="transition-[stroke-dashoffset] duration-150 ease-linear"
                />
              </svg>

              <ol className="absolute inset-0">
                {journeySteps.map((step, index) => {
                  const Icon = step.Icon;
                  const visible = progress >= index / journeySteps.length;
                  const active = selectedStep === index;
                  return (
                    <li
                      key={step.title}
                      className="absolute"
                      style={
                        {
                          left: `${step.x}%`,
                          top: `${step.y}%`,
                          "--journey-delay": `${index * 45}ms`,
                        } as CSSProperties
                      }
                    >
                      <button
                        type="button"
                        aria-expanded={active}
                        aria-controls="journey-step-detail"
                        aria-label={`${String(index + 1).padStart(2, "0")}. ${step.title}`}
                        onClick={() => setSelectedStep(active ? null : index)}
                        className={cn(
                          "journey-milestone group absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 focus-visible:outline-[#ffd45a]",
                          visible && "is-visible",
                          active && "is-active",
                        )}
                      >
                        <span className="absolute -right-2 -top-2 grid h-7 min-w-7 place-items-center rounded-full border-2 border-[#052f30] bg-pure-white px-1 text-[10px] font-black text-brand-deep shadow-md">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" />
                      </button>
                      <span
                        className={cn(
                        "journey-milestone-label absolute left-0 text-center text-[13px] font-bold leading-tight text-pure-white",
                          index >= 10 ? "bottom-12" : "top-12",
                          visible && "is-visible",
                        )}
                      >
                        {step.title}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div
              id="journey-step-detail"
              aria-live="polite"
              className={cn(
                "pointer-events-none absolute inset-0 z-20 grid place-items-center rounded-[2rem] bg-charcoal/35 p-8 opacity-0 backdrop-blur-[2px] transition-opacity duration-500",
                selected && "pointer-events-auto opacity-100",
              )}
            >
              <div className="w-full max-w-4xl">
                {selected && (
                  <div className="relative grid gap-5 rounded-2xl border border-[#ffd45a]/30 bg-[#062b2c] p-6 shadow-[0_24px_70px_rgba(0,0,0,.3)] sm:grid-cols-[72px_1fr] sm:p-8">
                    <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-[#ffc928] text-brand-deep">
                      <selected.Icon className="h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div className="pr-8">
                      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ffd45a]">
                        Stage {String(selectedStep! + 1).padStart(2, "0")}
                      </p>
                      <h3 className="display mt-2 text-3xl text-pure-white">{selected.title}</h3>
                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-pure-white/68">
                        {selected.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedStep(null)}
                      aria-label="Close journey stage details"
                      className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-pure-white/60 transition-colors hover:bg-pure-white/10 hover:text-pure-white"
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative mt-14 lg:hidden">
            <span
              className="absolute bottom-8 left-7 top-8 w-px bg-pure-white/16 md:hidden"
              aria-hidden="true"
            >
              <span
                className="block w-full bg-[#ffd45a] transition-[height] duration-300"
                style={{ height: `${progress * 100}%` }}
              />
            </span>
            <ol className="grid gap-5 md:grid-cols-2">
              {journeySteps.map((step, index) => {
                const Icon = step.Icon;
                const active = selectedStep === index;
                return (
                  <Reveal as="li" key={step.title} delay={(index % 2) * 80} className="relative">
                    <button
                      type="button"
                      aria-expanded={active}
                      aria-controls={`journey-mobile-detail-${index}`}
                      onClick={() => setSelectedStep(active ? null : index)}
                      className={cn(
                        "group relative flex w-full items-center gap-5 rounded-2xl border border-pure-white/12 bg-[#062f30]/90 p-4 text-left shadow-[0_18px_50px_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-1 hover:border-[#ffd45a]/45 sm:p-5",
                        active && "border-[#ffd45a]/60 bg-[#073738]",
                      )}
                    >
                      <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#ffc928] text-brand-deep shadow-[0_0_0_7px_rgba(255,201,40,.09)]">
                        <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-black uppercase tracking-[.18em] text-[#ffd45a]">
                          Stage {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-1 block text-base font-bold leading-snug text-pure-white sm:text-lg">
                          {step.title}
                        </span>
                      </span>
                    </button>
                    <div
                      id={`journey-mobile-detail-${index}`}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-400",
                        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="mx-4 border-x border-b border-pure-white/10 bg-[#052a2b] px-5 py-5 text-sm leading-relaxed text-pure-white/68 sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          <div className="mt-8 flex items-center justify-between gap-6 border-t border-pure-white/12 pt-5 text-xs font-bold uppercase tracking-[.16em] text-pure-white/45 lg:mt-5">
            <span>First conversation</span>
            <span className="flex items-center gap-2 text-[#ffd45a]">
              <PackageCheck className="h-4 w-4" aria-hidden="true" />
              Partnership in motion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
