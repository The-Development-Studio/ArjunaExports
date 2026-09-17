import { createFileRoute } from "@tanstack/react-router";
import {
  BedSingle,
  Blocks,
  Factory,
  Flower2,
  Leaf,
  PackageCheck,
  Sprout,
  Store,
  type LucideIcon,
} from "lucide-react";
import { applications, cropApplications, cropIcons, img, usageApplications } from "@/lib/site-data";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { ChapterHeading, Label, Reveal } from "@/components/site/primitives";
import { ThreeDIcon } from "@/components/site/ThreeDIcon";

const usageIcons: LucideIcon[] = [
  Sprout,
  Flower2,
  Blocks,
  Leaf,
  Store,
  PackageCheck,
  Factory,
  BedSingle,
];

export const Route = createFileRoute("/applications")({
  head: () =>
    pageMeta(
      "Applications",
      "Coco growing media for greenhouses, hydroponics, floriculture, nurseries and landscapes.",
    ),
  component: Applications,
});
function Applications() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Where growth happens."
        intro="From soft fruits and greenhouse vegetables to ornamentals and professional horticulture, coco adapts to the crop and the growing system."
        image={img.appGreenhouse}
      />
      <section className="bg-offwhite py-28 lg:py-40">
        <div className="shell">
          <Reveal>
            <ChapterHeading
              label="01 / By Crop"
              lines={["The right root zone", "for every crop."]}
            />
          </Reveal>
          <div className="mt-20 space-y-24 lg:space-y-32">
            {cropApplications.map((group, index) => (
              <Reveal
                key={group.title}
                className={`grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="group overflow-hidden">
                  <img
                    src={group.image}
                    alt={`${group.title} grown using coco growing media`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div>
                  <Label className="text-brand">
                    {group.n} / {group.subtitle}
                  </Label>
                  <h2 className="display mt-7 text-[clamp(3rem,6vw,5rem)]">{group.title}</h2>
                  <p className="mt-7 text-lg leading-relaxed text-charcoal/65">
                    {group.description}
                  </p>
                  <div className="mt-8 border-y border-charcoal/15 py-5">
                    <span className="micro-label text-charcoal/45">Crops</span>
                    <div className="mt-4 grid grid-cols-2 gap-2 min-[1600px]:grid-cols-4">
                      {group.crops.map((crop) => {
                        const icon = cropIcons[crop];
                        return (
                          <span
                            key={crop}
                            className="grid min-h-24 grid-cols-[52px_minmax(0,1fr)] items-center gap-4 rounded-sm border border-brand/10 bg-pure-white px-4 py-4 shadow-[0_12px_28px_rgba(31,45,40,.06)]"
                          >
                            {icon && (
                              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center">
                                <img
                                  src={icon}
                                  alt=""
                                  loading="lazy"
                                  decoding="async"
                                  className="max-h-11 max-w-11 object-contain"
                                />
                              </span>
                            )}
                            {!icon && <span aria-hidden="true" />}
                            <span className="min-w-0 wrap-anywhere text-base font-semibold leading-snug text-brand-deep">
                              {crop}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.properties.map((property) => (
                      <span
                        key={property}
                        className="rounded-sm bg-brand-soft px-3 py-2 text-xs text-brand-deep"
                      >
                        {property}
                      </span>
                    ))}
                  </div>
                  <p className="mt-7 text-sm">
                    <strong>Recommended:</strong> {group.recommended.join(" · ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Applications by user and usage"
        className="bg-brand-deep text-pure-white"
      >
        <div className="shell py-10 lg:py-4">
          <div className="grid bg-pure-white/15 md:grid-cols-2 md:gap-px lg:min-h-[620px] lg:grid-cols-4">
            {usageApplications.map((usage, index) => {
              const Icon = usageIcons[index] ?? Sprout;

              return (
                <Reveal
                  key={usage.title}
                  delay={(index % 4) * 60}
                  className="group flex min-h-[270px] flex-col bg-brand-deep px-8 py-9 transition-colors hover:bg-brand lg:min-h-[306px] lg:px-9 lg:py-10"
                >
                  <div className="flex items-start">
                    <ThreeDIcon
                      icon={Icon}
                      index={index}
                      className="transition-transform duration-500 group-hover:-translate-y-1"
                    />
                  </div>
                  <div className="mt-auto pt-12">
                    <h3 className="max-w-[19rem] text-[1.35rem] font-bold leading-tight tracking-0 text-pure-white lg:text-[1.45rem]">
                      {usage.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-snug text-pure-white/58 lg:text-lg">
                      {usage.product}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 lg:py-36">
        <div className="shell">
          <Reveal>
            <ChapterHeading
              label="03 / Growing Environments"
              lines={["How coco works", "in the real world."]}
            />
          </Reveal>
        </div>
      </section>
      <section className="bg-ivory">
        {applications.map((a, i) => (
          <Reveal
            key={a.slug}
            className={`shell grid min-h-[65vh] items-center gap-12 border-b border-charcoal/15 py-20 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="lg:px-12">
              <Label className="text-brand">{a.n}</Label>
              <h2 className="display mt-7 text-6xl">{a.title}</h2>
              <p className="mt-5 text-xl leading-relaxed">{a.line}</p>
              <p className="mt-6 leading-relaxed text-charcoal/60">{a.why}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {a.properties.map((x) => (
                  <span key={x} className="rounded-sm bg-brand-soft px-3 py-2 text-xs">
                    {x}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-sm">
                <strong>Recommended:</strong> {a.products.join(" · ")}
              </p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
