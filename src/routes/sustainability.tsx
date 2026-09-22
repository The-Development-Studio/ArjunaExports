import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { Label, Reveal } from "@/components/site/primitives";
import { PointArt } from "@/components/site/PointArt";
export const Route = createFileRoute("/sustainability")({
  head: () =>
    pageMeta(
      "Sustainability",
      "Turning coconut by-product into renewable, peat-free growing media.",
    ),
  component: Sustainability,
});
const pillars = [
  {
    n: "01",
    t: "A by-product, put to work",
    x: "Coir begins as husk left after food production. We create value without cultivating a new raw-material crop.",
  },
  {
    n: "02",
    t: "A peat-free growing medium",
    x: "Renewable coco replaces materials extracted from slow-forming peatlands in professional and home growing.",
  },
  {
    n: "03",
    t: "Designed to travel efficiently",
    x: "Compression reduces substrate volume by up to eight times before shipping, then it expands at destination.",
  },
  {
    n: "04",
    t: "Nothing useful is wasted",
    x: "Long fibre, short fibre, chips and pith each move into the product where their properties matter most.",
  },
];
function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Circular by origin. Responsible by practice."
        intro="The raw material is renewable. Our responsibility is to process it with discipline and keep improving the footprint around it."
        image={img.stageHusk}
      />
      <section className="bg-ivory py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={img.stagePith}
              alt="Coco pith texture"
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </Reveal>
          <div>
            {pillars.map((p, index) => (
              <Reveal
                key={p.n}
                className="grid grid-cols-[64px_1fr] gap-5 border-t border-charcoal/20 py-8"
              >
                <PointArt index={index} className="h-14 w-14" />
                <div>
                  <Label className="text-brand">{p.n}</Label>
                  <h2 className="display mt-4 text-[clamp(1.75rem,2.5vw,2.5rem)]">{p.t}</h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-charcoal/65">{p.x}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-leaf py-20 text-pure-white lg:py-24">
        <div className="shell">
          <Label className="text-sand">The honest next steps</Label>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,4vw,4rem)]">
            Measure more. Recover more water. Move more energy to renewables.
          </h2>
          <p className="mt-8 max-w-2xl leading-relaxed text-pure-white/70">
            Sustainability is operating work, not a finished claim. These are the priorities guiding
            the next stage of our manufacturing investment.
          </p>
        </div>
      </section>
    </>
  );
}
