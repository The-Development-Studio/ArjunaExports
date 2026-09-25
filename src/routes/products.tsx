import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { img, productFilters, products } from "@/lib/site-data";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { Arrow, Reveal } from "@/components/site/primitives";

const productListingOrder = ["coco-peat-blocks", "650-gram-block", "husk-chips", "coir-matting"];

export const Route = createFileRoute("/products")({
  head: () =>
    pageMeta("Products", "Explore coco peat blocks, coir matting, 650 gram blocks and husk chips."),
  component: Products,
});
function Products() {
  const [filter, setFilter] = useState("All");
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const orderedProducts = [...products].sort(
    (a, b) => productListingOrder.indexOf(a.slug) - productListingOrder.indexOf(b.slug),
  );
  const shown =
    filter === "All"
      ? orderedProducts
      : filter === "Coco Peat 650"
        ? orderedProducts.filter((p) => p.slug === "650-gram-block")
        : orderedProducts.filter((p) => p.category === filter);
  if (pathname !== "/products" && pathname !== "/products/") return <Outlet />;
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title="Coco products for professional supply."
        intro="Compressed blocks, coir fibre, husk chips and natural formats with clear specifications for export buyers."
        image={img.productBlock}
      />
      <section className="relative overflow-hidden bg-offwhite py-20 lg:py-24">
        <div className="shell relative">
          <div className="flex flex-wrap gap-2">
            {productFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`min-h-11 rounded-sm border px-4 py-2.5 text-sm transition ${filter === f ? "border-brand bg-brand text-pure-white" : "border-charcoal/15 bg-ivory text-charcoal/70 hover:border-brand hover:text-brand"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6">
            {shown.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 2) * 70}
                className="group overflow-hidden rounded-md border border-brand/15 bg-ivory shadow-[0_14px_45px_rgba(31,45,40,.06)]"
              >
                <a
                  href={`/products/${p.slug}`}
                  className="grid min-h-[320px] gap-0 md:grid-cols-[minmax(300px,.9fr)_1.1fr]"
                >
                  <div
                    className={`relative min-h-[300px] overflow-hidden ${
                      p.slug === "coir-matting"
                        ? "bg-brand-soft"
                        : "flex items-center justify-center bg-pure-white p-6 sm:p-8"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className={`transition duration-700 group-hover:scale-105 ${
                        p.slug === "coir-matting"
                          ? "absolute inset-0 h-full w-full object-cover"
                          : "max-h-[260px] sm:max-h-[290px] w-auto max-w-full object-contain drop-shadow-md"
                      }`}
                    />
                    {p.slug === "coir-matting" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
                    )}
                    <span className="micro-label absolute top-5 left-5 z-10 rounded-sm bg-brand-deep/85 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-pure-white uppercase backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-7 md:p-8">
                    <div>
                      <span className="micro-label text-brand">Export product</span>
                      <h2 className="display mt-4 text-[clamp(2.2rem,3.5vw,3.75rem)] text-charcoal">
                        {p.name}
                      </h2>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/68">
                        {p.short}
                      </p>
                    </div>
                    <div className="mt-8 grid gap-px bg-charcoal/12 sm:grid-cols-3">
                      {[
                        ["Format", p.format],
                        ["Application", p.application],
                        [p.specs[0]?.label ?? "Specification", p.specs[0]?.value ?? "On request"],
                      ].map(([label, value]) => (
                        <div key={label} className="bg-ivory p-4">
                          <span className="micro-label text-charcoal/45">{label}</span>
                          <p className="mt-2 text-sm font-semibold leading-snug text-charcoal">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.16em] text-brand uppercase">
                      View product
                      <Arrow className="group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
