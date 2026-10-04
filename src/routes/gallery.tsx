import { createFileRoute } from "@tanstack/react-router";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { Label, Reveal } from "@/components/site/primitives";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta(
      "Gallery",
      "Explore Arjuna Exports products, processing infrastructure, quality control and global growing applications.",
    ),
  component: Gallery,
});

const galleryModules = import.meta.glob<string>("../assets/gallery/thumbs/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
});

const galleryItems = Object.entries(galleryModules)
  .map(([path, image]) => ({
    image,
    number: Number(path.match(/(\d+)\.[^.]+$/)?.[1] ?? 0),
  }))
  .sort((a, b) => a.number - b.number)
  .map((item, index) => ({
    ...item,
    size:
      index % 11 === 0
        ? "md:col-span-2 md:row-span-2"
        : index % 7 === 0
          ? "md:col-span-2"
          : index % 5 === 0
            ? "md:row-span-2"
          : "",
  }));

// Reuse the container-loading photo as a final tile to close the mosaic's open cell.
const galleryDisplayItems = galleryItems[9]
  ? [...galleryItems, { ...galleryItems[9], size: "" }]
  : galleryItems;

function GalleryPhoto({ image, number }: { image: string; number: number }) {
  return (
    <img
      src={image}
      alt={`Arjuna Exports gallery image ${number}`}
      loading={number <= 4 ? "eager" : "lazy"}
      fetchPriority={number <= 2 ? "high" : "auto"}
      decoding="async"
      className="gallery-smooth-zoom absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
    />
  );
}

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Visual Archive"
        title="People. Process. Products."
        titleClassName="hero-title-dark max-w-none text-[#20555A] tracking-[-.025em] leading-none md:whitespace-nowrap text-[clamp(1.75rem,3.4vw,3.85rem)]"
        gridClassName="lg:grid-cols-[auto_minmax(0,1fr)] items-end lg:gap-8 xl:gap-12"
        introClassName="border-l border-[#20555A]/35 pl-5 sm:pl-6 max-w-[34ch] text-sm sm:text-base leading-relaxed text-[#20555A] lg:justify-self-start"
        intro="A closer look at the materials, infrastructure and growing environments behind every Arjuna shipment."
        image={galleryItems[0]?.image ?? ""}
      />

      <section className="bg-ivory py-20 lg:py-24">
        <div className="shell">
          <Reveal className="border-b border-charcoal/20 pb-10">
            <div>
              <Label className="text-brand">Inside Arjuna</Label>
              <h2 className="display mt-6 text-[clamp(2.25rem,3.8vw,3.75rem)]">
                The work, in detail.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-flow-dense auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-3 lg:auto-rows-[300px] lg:grid-cols-4">
            {galleryDisplayItems.map((item, index) => (
              <Reveal
                key={`${item.number}-${index}`}
                delay={(index % 4) * 65}
                className={`${item.size} group relative min-h-[260px] overflow-hidden rounded-md border border-brand bg-brand-deep`}
              >
                <GalleryPhoto image={item.image} number={item.number} />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-pure-white/10 transition-colors duration-500 group-hover:bg-brand-deep/10" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
