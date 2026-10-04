import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { img, productFilters, products } from "@/lib/site-data";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/primitives";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products")({
  head: () =>
    pageMeta(
      "Products",
      "Explore coco peat blocks, Coir 650 Gram Bricks, Coco Hush Chips and coir matting.",
    ),
  component: Products,
});
function Products() {
  const [filter, setFilter] = useState("All");
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const shown =
    filter === "All"
      ? products
      : filter === "Coir 650 Gram Bricks"
        ? products.filter((p) => p.slug === "coir-650-gram-bricks")
        : products.filter((p) => p.category === filter);
  if (pathname !== "/products" && pathname !== "/products/") return <Outlet />;
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title="Coco products for professional supply."
        intro="Compressed blocks, Coco Hush Chips and natural coir formats with clear specifications for export buyers."
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
                className="product-card-reveal"
              >
                <ProductCard product={p} index={i} variant="listing" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
