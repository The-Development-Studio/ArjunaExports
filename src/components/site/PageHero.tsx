import { Reveal } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  titleClassName = "",
  introClassName = "",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  titleClassName?: string;
  introClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-12 text-[#20555A] lg:pt-14">
      <div className="shell relative z-10 grid min-h-[260px] items-end gap-6 py-8 lg:min-h-[280px] lg:grid-cols-[1.2fr_.8fr] lg:gap-12 lg:py-9">
        <Reveal>
          <span className="micro-label mb-6 block text-[#20555A]">{eyebrow}</span>
          <h1
            className={`display max-w-[21ch] text-[clamp(2.25rem,3.8vw,4rem)] leading-[1.02] text-[#20555A] ${titleClassName}`}
          >
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className={`max-w-[46ch] text-base leading-relaxed text-[#20555A] lg:justify-self-end ${introClassName}`}>
            {intro}
          </p>
        </Reveal>
      </div>
      {image && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-30 slow-zoom"
          style={{
            backgroundImage: `linear-gradient(to right, var(--charcoal), color-mix(in oklab, var(--charcoal) 84%, transparent), color-mix(in oklab, var(--brand) 35%, transparent)), url(${image})`,
          }}
        />
      )}
    </section>
  );
}

export const pageMeta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | Arjuna Exports` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Arjuna Exports` },
    { property: "og:description", content: description },
  ],
});
