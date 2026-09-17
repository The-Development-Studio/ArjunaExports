import { useEffect, useRef, useState } from "react";
import { timeline } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ChapterHeading, Label, Reveal } from "./primitives";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function CompanyJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const nextProgress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      setProgress(nextProgress);
    };

    update();
    const frame = window.requestAnimationFrame(update);
    const timeout = window.setTimeout(update, 350);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  const scrollMilestone = Math.min(timeline.length - 1, Math.floor(progress * timeline.length));
  const activeIndex = hoveredMilestone ?? scrollMilestone;
  const active = timeline[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ivory py-24 text-charcoal lg:h-[720vh] lg:py-0"
    >
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(0,100,101,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,101,.06)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-offwhite to-transparent" />

      <div className="relative lg:sticky lg:top-[88px] lg:flex lg:min-h-[calc(100vh-88px)] lg:items-center">
        <div className="shell grid gap-12 py-10 lg:grid-cols-[minmax(280px,430px)_minmax(0,1fr)] lg:items-center">
          <Reveal>
            <ChapterHeading label="Company Journey" lines={["Progress built", "with purpose."]} />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-charcoal/65">
              Arjuna Exports has grown through coconut roots, manufacturing discipline and long-term
              relationships with growers and buyers across international markets.
            </p>
          </Reveal>

          <div className="hidden min-h-[620px] grid-cols-[72px_minmax(0,1fr)] gap-8 lg:grid">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-brand/18" />
              <div
                className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-brand transition-[height] duration-500"
                style={{ height: `${progress * 100}%` }}
              />
              {timeline.map((milestone, index) => {
                const complete = index <= activeIndex;
                const current = index === activeIndex;
                return (
                  <button
                    key={milestone.year}
                    type="button"
                    aria-label={milestone.title}
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    onFocus={() => setHoveredMilestone(index)}
                    onBlur={() => setHoveredMilestone(null)}
                    className={cn(
                      "absolute left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/30 bg-ivory outline-none transition duration-300",
                      complete && "border-brand bg-brand",
                      current && "h-9 w-9 bg-[#ffc21a] shadow-[0_0_0_12px_rgba(0,100,101,.09)]",
                    )}
                    style={{ top: `${(index / (timeline.length - 1)) * 100}%` }}
                  >
                    <span className="sr-only">{milestone.year}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid min-h-[620px] grid-cols-[minmax(0,1fr)_270px] gap-6">
              <article className="relative flex overflow-hidden rounded-md border border-brand/16 bg-offwhite p-10 shadow-[0_30px_90px_rgba(31,45,40,.12)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-brand/12">
                  <span
                    className="block h-full bg-[#ffc21a] transition-[width] duration-500"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-brand/10" />
                <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border border-[#ffc21a]/35" />

                <div className="relative mt-auto max-w-3xl">
                  <Label className="text-brand">{active.year}</Label>
                  <h2
                    key={active.title}
                    className="display mt-8 max-w-[11ch] text-[clamp(4rem,7vw,5rem)]"
                  >
                    {active.title}
                  </h2>
                  <p className="mt-8 max-w-2xl text-xl leading-relaxed text-charcoal/65">
                    {active.text}
                  </p>
                </div>
              </article>

              <div className="grid gap-3">
                {timeline.map((milestone, index) => (
                  <button
                    key={milestone.year}
                    type="button"
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                    onFocus={() => setHoveredMilestone(index)}
                    onBlur={() => setHoveredMilestone(null)}
                    className={cn(
                      "rounded-md border border-brand/12 bg-offwhite px-5 py-4 text-left shadow-[0_12px_30px_rgba(31,45,40,.06)] outline-none transition duration-300",
                      index < activeIndex && "border-brand/20 bg-brand-soft",
                      index === activeIndex &&
                        "border-brand bg-brand text-pure-white shadow-[0_18px_46px_rgba(0,100,101,.24)]",
                    )}
                  >
                    <span
                      className={cn("micro-label text-brand", index === activeIndex && "text-aqua")}
                    >
                      {milestone.year}
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-tight">{milestone.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {timeline.map((milestone, index) => (
              <Reveal
                key={milestone.year}
                delay={(index % 2) * 70}
                className="rounded-md border border-brand/12 bg-offwhite p-6 shadow-[0_16px_44px_rgba(31,45,40,.08)]"
              >
                <Label className="text-brand">{milestone.year}</Label>
                <h2 className="display mt-6 text-[clamp(2.6rem,12vw,4.5rem)]">{milestone.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-charcoal/65">{milestone.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
