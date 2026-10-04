import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/site-data";
import { Arrow } from "@/components/site/primitives";

type ProductCardProps = {
  product: Product;
  index: number;
  variant: "carousel" | "listing";
};

export function ProductCard({ product, index, variant }: ProductCardProps) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className={`product-card product-card--${variant} group`}
    >
      <div className="product-card__media">
        {variant === "listing" && (
          <span className="product-card__category micro-label">{product.category}</span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="product-card__image"
        />
      </div>
      <div className="product-card__body">
        {variant === "carousel" ? (
          <>
            <span className="micro-label text-brand">
              {String(index + 1).padStart(2, "0")} / {product.category}
            </span>
            <h3 className="display mt-3 text-2xl leading-tight">{product.name}</h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal/70">
              {product.short}
            </p>
          </>
        ) : (
          <>
            <div>
              <span className="micro-label text-brand">Export product</span>
              <h2 className="display mt-4 text-[clamp(2.2rem,3.5vw,3.75rem)] text-charcoal">
                {product.name}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/68">
                {product.short}
              </p>
            </div>
            <div className="product-card__specs">
              {[
                ["Format", product.format],
                ["Application", product.application],
                [product.specs[0]?.label ?? "Specification", product.specs[0]?.value ?? "On request"],
              ].map(([label, value]) => (
                <div key={label} className="bg-ivory p-4">
                  <span className="micro-label text-charcoal/45">{label}</span>
                  <p className="mt-2 text-sm font-semibold leading-snug text-charcoal">{value}</p>
                </div>
              ))}
            </div>
            <span className="mt-8 inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.16em] text-brand uppercase">
              View product <Arrow className="group-hover:translate-x-1.5" />
            </span>
          </>
        )}
      </div>
    </Link>
  );
}
