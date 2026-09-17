import { Reveal } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  titleClassName = "",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  titleClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-14 text-pure-white lg:pt-16">
      <div className="shell relative z-10 grid min-h-[300px] items-end gap-7 py-9 lg:min-h-[330px] lg:grid-cols-[1.25fr_.75fr] lg:gap-10 lg:py-10">
        <Reveal>
          <span className="micro-label mb-8 block text-aqua">{eyebrow}</span>
          <h1
            className={`display max-w-[19ch] text-[clamp(2.35rem,4.4vw,4.5rem)] leading-[.98] ${titleClassName}`}
          >
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-[38ch] text-lg leading-relaxed text-pure-white/75">{intro}</p>
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
