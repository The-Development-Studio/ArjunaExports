import { createFileRoute, Link } from "@tanstack/react-router";
import { Grid2X2, Handshake, PackageOpen, ShieldCheck, Ship } from "lucide-react";
import { useState } from "react";
import { img } from "@/lib/site-data";
import {
  resourceArticles as articles,
  resourceCategories as categories,
} from "@/lib/resource-data";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { Arrow, Label, Reveal } from "@/components/site/primitives";

const resourceTopicIcons = [
  { Icon: Grid2X2, colors: "border-brand bg-brand-soft text-brand" },
  { Icon: PackageOpen, colors: "border-[#a95020] bg-[#f1d9ca] text-[#8d3f18]" },
  { Icon: ShieldCheck, colors: "border-leaf bg-[#e8f1cf] text-leaf" },
  { Icon: Handshake, colors: "border-[#d39a18] bg-[#fff0bc] text-[#a66b00]" },
  { Icon: Ship, colors: "border-[#42aabe] bg-[#d9f4f7] text-[#207f91]" },
];

export const Route = createFileRoute("/resources")({
  head: () =>
    pageMeta(
      "Resources",
      "Practical coco coir growing guides, product knowledge and sustainability insights.",
    ),
  component: Resources,
});

function Resources() {
  const [filter, setFilter] = useState("All");
  const shown = articles.filter((article) => filter === "All" || article.category === filter);
  const featured = articles[0];
  const gridArticles = filter === "All" ? shown.slice(1) : shown;

  return (
    <>
      <PageHero
        eyebrow="Tips & Advice"
        title="Knowledge that helps things grow."
        intro="Practical guidance from coco preparation to commercial cultivation — written for growers, buyers and curious minds."
        image={img.appGreenhouse}
      />

      <section className="bg-offwhite py-16 lg:py-20">
        <div className="shell">
          <Reveal className="grid gap-8 border-b border-charcoal/15 pb-10">
            <div>
              <Label className="text-brand">Explore by topic</Label>
              <h2 className="display mt-6 text-[clamp(2.25rem,3.8vw,3.75rem)]">
                Advice for every stage.
              </h2>
            </div>
            <div className="grid w-full grid-cols-3 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-5 sm:gap-6">
              {categories.map((category, index) => {
                const { Icon, colors } = resourceTopicIcons[index];
                const selected = filter === category;

                return (
                  <button
                    key={category}
                    type="button"
                    title={category}
                    onClick={() => setFilter(category)}
                    aria-label={`Show ${category} resources`}
                    aria-pressed={selected}
                    className="group flex min-w-0 flex-col items-center gap-3 text-center"
                  >
                    <span
                      className={`grid aspect-square w-20 place-items-center rounded-full border-[5px] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:w-24 ${colors} ${
                        selected
                          ? "-translate-y-1 scale-105 shadow-[0_14px_32px_rgba(0,100,101,.2)] ring-4 ring-brand/12"
                          : "shadow-[0_10px_24px_rgba(31,45,40,.08)] group-hover:-translate-y-1 group-hover:scale-105"
                      }`}
                    >
                      <Icon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={1.65} aria-hidden />
                    </span>
                    <span
                      className={`line-clamp-2 text-[9px] font-bold uppercase leading-4 tracking-[.08em] transition-colors sm:text-[10px] ${
                        selected ? "text-brand" : "text-charcoal/60 group-hover:text-brand"
                      }`}
                    >
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {filter === "All" && (
            <Reveal className="group mt-10 grid overflow-hidden rounded-md border-2 border-solid border-brand bg-brand-deep text-pure-white lg:grid-cols-2">
              <div className="relative min-h-[340px] overflow-hidden lg:min-h-[440px]">
                <img
                  src={featured.image}
                  alt="Compressed coco peat block ready for hydration"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
                <div>
                  <div className="flex items-center gap-4">
                    <Label className="text-aqua">Featured guide</Label>
                    <span className="text-xs text-pure-white/45">{featured.read}</span>
                  </div>
                  <h2 className="display mt-6 text-[clamp(2.25rem,3.5vw,3.75rem)] leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-7 max-w-lg text-base leading-relaxed text-pure-white/65">
                    {featured.excerpt}
                  </p>
                </div>
                <Link
                  to="/resources/$slug"
                  params={{ slug: featured.slug }}
                  className="mt-12 flex w-fit items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  Read the guide{" "}
                  <Arrow className="text-aqua transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          )}

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gridArticles.map((article, index) => (
              <Reveal key={article.title} delay={(index % 3) * 70} className="h-full">
                <Link
                  to="/resources/$slug"
                  params={{ slug: article.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-md border-2 border-solid border-brand bg-ivory"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
                    <img
                      src={article.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="micro-label absolute left-4 top-4 rounded-sm bg-ivory px-3 py-2 text-brand shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col bg-ivory px-5 pb-6 pt-5">
                    <div className="flex justify-between text-xs text-charcoal/50">
                      <span>{article.date ?? "Resource guide"}</span>
                      <span>{article.read}</span>
                    </div>
                    <h2 className="display mt-4 line-clamp-3 text-3xl leading-tight transition-colors group-hover:text-brand">
                      {article.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
                      {article.excerpt}
                    </p>
                    <span className="mt-auto flex items-center gap-3 pt-6 text-xs font-semibold uppercase tracking-[0.15em]">
                      Read article{" "}
                      <Arrow className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20 lg:py-24">
        <Reveal className="shell grid gap-10 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <Label className="text-brand">Need a specific answer?</Label>
            <h2 className="display mt-6 max-w-4xl text-[clamp(2.25rem,3.8vw,3.75rem)]">
              Talk to our team about your crop, climate or specification.
            </h2>
          </div>
          <Link
            to="/contact"
            className="flex items-center justify-between border-b border-brand py-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand"
          >
            Ask an expert <Arrow />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
