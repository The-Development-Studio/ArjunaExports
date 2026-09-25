import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import favicon from "@/assets/favicon.png";
import logo from "@/assets/logo.svg";
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

type GalleryTile =
  | { type: "photo"; size: string; image: string; number: number }
  | { type: "logo"; size: string }
  | { type: "mark"; size: string };

const galleryTiles: GalleryTile[] = galleryItems.flatMap((item, index) => {
  const tiles: GalleryTile[] = [{ type: "photo", ...item }];

  if (index === 10) {
    tiles.push({ type: "logo", size: "md:col-span-2" });
  }

  if (index === 25) {
    tiles.push({ type: "mark", size: "md:row-span-2" });
  }

  return tiles;
});

function GalleryPhoto({ image, number }: { image: string; number: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br from-brand/35 via-brand-deep to-charcoal transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={image}
        alt={`Arjuna Exports gallery image ${number}`}
        loading={number <= 4 ? "eager" : "lazy"}
        fetchPriority={number <= 2 ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`gallery-smooth-zoom absolute inset-0 h-full w-full object-cover transition-[opacity,filter,transform] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08] ${
          loaded ? "scale-100 opacity-100 blur-0" : "scale-[1.02] opacity-0 blur-sm"
        }`}
      />
    </>
  );
}

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Visual Archive"
        title="Products. Process. People."
        titleClassName="hero-title-dark text-[#20555A]"
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
            {galleryTiles.map((tile, index) => (
              <Reveal
                key={tile.type === "photo" ? `photo-${tile.number}` : tile.type}
                delay={(index % 4) * 65}
                className={`${tile.size} group relative min-h-[260px] overflow-hidden rounded-md border border-brand ${
                  tile.type === "logo" ? "bg-brand-soft" : "bg-brand-deep"
                }`}
              >
                {tile.type === "photo" ? (
                  <>
                    <GalleryPhoto image={tile.image} number={tile.number} />
                    <div className="absolute inset-0 ring-1 ring-inset ring-pure-white/10 transition-colors duration-500 group-hover:bg-brand-deep/10" />
                  </>
                ) : tile.type === "logo" ? (
                  <div className="flex h-full items-center justify-center p-10 sm:p-14">
                    <img
                      src={logo}
                      alt="Arjuna Exports"
                      loading="lazy"
                      decoding="async"
                      className="gallery-smooth-zoom w-full max-w-[300px] transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
                    />
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center p-10">
                    <img
                      src={favicon}
                      alt="Arjuna Exports emblem"
                      loading="lazy"
                      decoding="async"
                      className="gallery-smooth-zoom w-28 rounded-sm transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.1] sm:w-36"
                    />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
