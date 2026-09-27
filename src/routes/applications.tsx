import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Droplets,
  Factory,
  Flower2,
  Leaf,
  Mountain,
  Recycle,
  Sprout,
  Store,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { cropIcons, img } from "@/lib/site-data";
import { Label, PrimaryButton, SecondaryButton } from "@/components/site/primitives";
import { pageMeta } from "@/components/site/PageHero";
import strawberryPlants from "@/assets/applications/strawberry-plants.jpg";
import blueberryPlants from "@/assets/applications/blueberry-plants.jpg";
import blackberryPlants from "@/assets/applications/blackberry-plants.jpg";
import raspberryPlants from "@/assets/applications/raspberry-plants.jpg";
import tomatoPlants from "@/assets/applications/tomato-plants.jpg";
import cucumberPlants from "@/assets/applications/cucumber-plants.jpg";
import bellPepperPlants from "@/assets/applications/bell-pepper-plants.jpg";
import eggplantPlants from "@/assets/applications/eggplant-plants.jpg";

export const Route = createFileRoute("/applications")({
  head: () =>
    pageMeta(
      "Applications",
      "Explore professional coco coir growing solutions for commercial greenhouses, soft fruits, vegetables, floriculture, landscaping and more.",
    ),
  component: Applications,
});

const softFruitCrops = [
  {
    name: "Strawberry",
    image: strawberryPlants,
    alt: "Strawberry plants with ripe red fruit growing in a coir greenhouse system",
    product: "Coco Peat Blocks",
    slug: "coco-peat-blocks",
    benefits: ["Excellent moisture retention", "Improved root aeration", "Consistent growing environment"],
  },
  {
    name: "Blueberry",
    image: blueberryPlants,
    alt: "Blueberry bushes with ripe berries growing in a commercial greenhouse",
    product: "Coco Peat Blocks",
    slug: "coco-peat-blocks",
    benefits: ["Controlled root environment", "Good drainage", "Suitable substrate structure"],
  },
  {
    name: "Blackberry",
    image: blackberryPlants,
    alt: "Blackberry canes with ripe blackberries growing in greenhouse coir bags",
    product: "Coco Peat Grow Bags",
    slug: null,
    benefits: ["Strong root development", "Efficient irrigation", "Controlled substrate volume"],
  },
  {
    name: "Raspberry",
    image: raspberryPlants,
    alt: "Raspberry plants with clusters of ripe raspberries in a commercial greenhouse",
    product: "Coco Peat Grow Bags",
    slug: null,
    benefits: ["Consistent moisture distribution", "Healthy root-zone aeration", "Professional greenhouse use"],
  },
];

const vegetableCrops = [
  {
    name: "Tomato",
    image: tomatoPlants,
    alt: "Tomato plants growing in coir grow bags inside a greenhouse",
    product: "Coco Peat Grow Bags",
    slug: null,
  },
  {
    name: "Cucumber",
    image: cucumberPlants,
    alt: "Cucumber vines with cucumbers growing on trellises in a commercial greenhouse",
    product: "Coco Peat Grow Bags",
    slug: null,
  },
  {
    name: "Bell Pepper",
    image: bellPepperPlants,
    alt: "Bell pepper plants with red, yellow and green peppers growing in a greenhouse",
    product: "Coco Peat Blocks / Grow Bags",
    slug: "coco-peat-blocks",
  },
  {
    name: "Eggplant / Aubergine / Brinjal",
    image: eggplantPlants,
    alt: "Eggplant plants with glossy aubergines growing in a commercial greenhouse",
    product: "Coco Peat Grow Bags",
    slug: null,
  },
];

const specialtyApplications = [
  {
    title: "Specialty Controlled Crops",
    description: "Coir grow bags provide controlled root-zone conditions for specialized greenhouse cultivation.",
    image: img.appHydroponics,
    alt: "Controlled greenhouse growing environment",
    product: "Coco Peat Grow Bags",
    slug: null,
  },
  {
    title: "Cut Flowers",
    description: "A consistent growing medium for professional flower production and quality grading.",
    image: img.appFloriculture,
    alt: "Rows of roses and gerbera flowers in a commercial greenhouse",
    product: "Coir Grow Bags / Hanging Baskets",
    slug: null,
    crops: "Rose · Orchid · Gerbera",
  },
  {
    title: "Ornamental Plants",
    description: "Coco peat blocks expand into a dependable medium for nursery and ornamental cultivation.",
    image: img.appNursery,
    alt: "Ornamental plants growing in a professional nursery",
    product: "Coco Peat Blocks",
    slug: "coco-peat-blocks",
  },
];

const coirBenefits: { title: string; description: string; Icon: LucideIcon }[] = [
  { title: "Water Retention", description: "Helps maintain consistent root-zone moisture.", Icon: Droplets },
  { title: "Root Aeration", description: "Porous structure supports healthy oxygen availability.", Icon: Wind },
  { title: "Efficient Drainage", description: "Helps reduce excessive water around roots.", Icon: ArrowDownRight },
  { title: "Sustainable Material", description: "A renewable, coconut coir-based growing medium.", Icon: Recycle },
  { title: "Versatile Applications", description: "For greenhouse, nursery, landscape and commercial use.", Icon: Sprout },
];

const industries: { title: string; description: string; Icon: LucideIcon }[] = [
  { title: "Professional Horticulture", description: "Commercial growing media for greenhouse and controlled cultivation.", Icon: Sprout },
  { title: "Greenhouse Growers", description: "Coir substrates designed for controlled irrigation and root-zone management.", Icon: Leaf },
  { title: "Floriculture", description: "Growing solutions for cut flowers and ornamental cultivation.", Icon: Flower2 },
  { title: "Substrate Manufacturers", description: "Coir materials suited to professional substrate formulations.", Icon: Factory },
  { title: "Landscaping", description: "Natural growing media for landscape and planting applications.", Icon: Mountain },
  { title: "Retail Garden Centres", description: "Convenient coir formats for professional and consumer gardening.", Icon: Store },
  { title: "Plant Propagation", description: "Suitable substrate conditions for establishing young plants.", Icon: Sprout },
  { title: "Industrial Oil Absorption", description: "Natural coir-based material for selected absorption applications.", Icon: Droplets },
  { title: "Animal Bedding", description: "Natural coir material for applicable animal bedding uses.", Icon: Leaf },
];

const relatedProducts = [
  { name: "Coco Peat Blocks", image: img.productCocoPeat5kg, alt: "Compressed coco peat block for professional growing media", slug: "coco-peat-blocks" },
  { name: "Coco Peat Grow Bags", image: img.productGrowbag, alt: "Coco peat grow bag for greenhouse cultivation", slug: null },
  { name: "Erosion Control Products", image: img.productErosion, alt: "Natural coir erosion control material for landscape applications", slug: null },
  { name: "Garden Articles", image: img.productGarden, alt: "Coir and coco products for garden applications", slug: null },
  { name: "Micro Nutrients", image: img.productNutrients, alt: "Nutrient products for horticultural growing systems", slug: null },
];

function Applications() {
  return (
    <main className="overflow-hidden text-charcoal [overflow-wrap:break-word] [word-break:normal]">
      <section className="bg-offwhite">
        <div className="shell grid min-h-[580px] items-stretch gap-10 py-10 sm:py-14 lg:min-h-[650px] lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:py-16">
          <div className="flex flex-col justify-center py-2 lg:py-8">
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-charcoal/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-brand">Applications</li>
              </ol>
            </nav>
            <Label className="text-brand">Applications</Label>
            <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.04] tracking-tight text-brand-deep">
              Growing Solutions for Every Application
            </h1>
            <p className="mt-7 max-w-[62ch] text-base leading-relaxed text-charcoal/70 sm:text-lg">
              From commercial greenhouses and professional horticulture to landscaping and floriculture, our coir-based growing media support healthier root development, efficient water management and sustainable cultivation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#by-crop" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-pure-white transition-colors hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                Explore by Crop <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#by-application" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-brand px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-pure-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                Explore by Application <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[.16em] text-brand/70">One growing medium · Multiple professional applications</p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-sm bg-brand-soft sm:min-h-[420px] lg:min-h-[500px]">
            <img src={img.detailGrowbagTomatoes} alt="Tomato plants thriving in coir grow bags inside a commercial greenhouse" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent to-transparent" aria-hidden="true" />
            <p className="absolute bottom-5 left-5 max-w-[25ch] text-sm font-medium text-pure-white sm:bottom-7 sm:left-7">A stable root zone for confident, season-long cultivation.</p>
          </div>
        </div>
      </section>

      <nav aria-label="Explore applications" className="border-y border-charcoal/10 bg-pure-white">
        <div className="shell grid divide-y divide-charcoal/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <a href="#by-crop" className="group flex min-h-28 items-center justify-between gap-5 py-6 pr-5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand sm:pr-8">
            <span><span className="micro-label text-brand">Browse applications</span><span className="mt-2 block text-xl font-semibold text-brand-deep">By Crop</span><span className="mt-1 block text-sm text-charcoal/60">Soft Fruits · Vegetables · Specialty Crops</span></span>
            <ArrowRight className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a href="#by-application" className="group flex min-h-28 items-center justify-between gap-5 py-6 sm:pl-8">
            <span><span className="micro-label text-brand">Find your sector</span><span className="mt-2 block text-xl font-semibold text-brand-deep">By Application</span><span className="mt-1 block max-w-[52ch] text-sm text-charcoal/60">Horticulture · Floriculture · Landscaping · Propagation · Industrial Uses</span></span>
            <ArrowRight className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </nav>

      <section id="by-crop" className="scroll-mt-24 bg-offwhite py-14 sm:py-16 lg:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <Label className="text-brand">By Crop</Label>
            <h2 className="display mt-5 text-[clamp(2rem,3.5vw,3rem)] leading-tight text-brand-deep">Engineered Around What You Grow</h2>
            <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-charcoal/65">Explore coir growing solutions by crop and cultivation needs, with practical formats for professional growers.</p>
          </div>

          <section aria-labelledby="soft-fruits-heading" className="mt-12 sm:mt-16">
            <div className="mb-7 grid gap-4 md:grid-cols-[.7fr_1.3fr] md:items-end md:justify-between">
              <div><span className="micro-label text-brand">01 · Crop group</span><h3 id="soft-fruits-heading" className="display mt-3 text-[clamp(1.7rem,2.7vw,2.4rem)] leading-tight text-brand-deep">Soft Fruits</h3></div>
              <p className="max-w-[68ch] text-sm leading-relaxed text-charcoal/65 sm:text-base">Coco peat balances water retention, drainage and root-zone aeration to support soft-fruit cultivation in professional growing systems.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {softFruitCrops.map((crop) => (
                <article key={crop.name} className="group flex min-w-0 flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-pure-white transition-shadow hover:shadow-[0_16px_36px_rgba(31,45,40,.1)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft"><img src={crop.image} alt={crop.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />{cropIcons[crop.name] && <img src={cropIcons[crop.name]} alt="" loading="lazy" className="absolute bottom-3 left-3 h-11 w-11 rounded-full bg-pure-white/90 p-2" />}</div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h4 className="text-xl font-semibold text-brand-deep">{crop.name}</h4>
                    <p className="mt-2 text-sm text-charcoal/55">Recommended · <span className="font-semibold text-brand">{crop.product}</span></p>
                    <ul className="mt-4 space-y-2 text-sm leading-snug text-charcoal/70">{crop.benefits.map((benefit) => <li key={benefit} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />{benefit}</li>)}</ul>
                    <ProductLink slug={crop.slug} className="mt-5" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="vegetables-heading" className="mt-14 sm:mt-20">
            <div className="mb-7 grid gap-4 md:grid-cols-[.7fr_1.3fr] md:items-end">
              <div><span className="micro-label text-brand">02 · Crop group</span><h3 id="vegetables-heading" className="display mt-3 text-[clamp(1.7rem,2.7vw,2.4rem)] leading-tight text-brand-deep">Vegetable Cultivation</h3></div>
              <p className="max-w-[68ch] text-sm leading-relaxed text-charcoal/65 sm:text-base">Coir-based substrates support controlled vegetable cultivation with practical moisture management, free drainage and root-zone aeration.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {vegetableCrops.map((crop) => (
                <article key={crop.name} className="group flex min-w-0 flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-pure-white transition-shadow hover:shadow-[0_16px_36px_rgba(31,45,40,.1)]">
                  <div className="aspect-[4/3] overflow-hidden bg-brand-soft"><img src={crop.image} alt={crop.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h4 className="text-xl font-semibold leading-snug text-brand-deep">{crop.name}</h4>
                    <p className="mt-2 text-sm text-charcoal/55">Recommended · <span className="font-semibold text-brand">{crop.product}</span></p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/65">Supports balanced moisture, drainage and root aeration in professionally managed growing systems.</p>
                    <ProductLink slug={crop.slug} className="mt-5" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="specialty-heading" className="mt-14 sm:mt-20">
            <div className="mb-7"><span className="micro-label text-brand">03 · Crop group</span><h3 id="specialty-heading" className="display mt-3 text-[clamp(1.7rem,2.7vw,2.4rem)] leading-tight text-brand-deep">Specialty &amp; Ornamental Growing</h3></div>
            <div className="grid gap-5 md:grid-cols-3">
              {specialtyApplications.map((item) => (
                <article key={item.title} className="group flex min-w-0 flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-pure-white transition-shadow hover:shadow-[0_16px_36px_rgba(31,45,40,.1)]">
                  <div className="aspect-[16/9] overflow-hidden bg-brand-soft"><img src={item.image} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7"><h4 className="text-xl font-semibold text-brand-deep">{item.title}</h4>{item.crops && <p className="mt-2 text-sm font-medium text-brand">{item.crops}</p>}<p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{item.description}</p><p className="mt-4 text-sm text-charcoal/55">Recommended · <span className="font-semibold text-brand">{item.product}</span></p><ProductLink slug={item.slug} className="mt-5" /></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section aria-labelledby="why-coir-heading" className="bg-brand-deep py-12 text-pure-white sm:py-14 lg:py-16">
        <div className="shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><Label className="text-pure-white/75">Growing medium advantages</Label><h2 id="why-coir-heading" className="display mt-4 text-[clamp(1.8rem,3vw,2.7rem)] leading-tight">Why Growers Choose Coir</h2></div><p className="max-w-[45ch] text-sm leading-relaxed text-pure-white/65">A flexible substrate foundation for professional crop and growing systems.</p></div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-pure-white/15 bg-pure-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {coirBenefits.map(({ title, description, Icon }) => <div key={title} className="bg-brand-deep p-5 sm:p-6"><Icon className="h-6 w-6 text-[#b6c982]" strokeWidth={1.6} aria-hidden="true" /><h3 className="mt-5 text-base font-semibold text-pure-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-pure-white/65">{description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="by-application" className="scroll-mt-24 bg-pure-white py-14 sm:py-16 lg:py-24">
        <div className="shell">
          <div className="mb-9 max-w-3xl"><Label className="text-brand">By Application</Label><h2 className="display mt-5 text-[clamp(2rem,3.5vw,3rem)] leading-tight text-brand-deep">Solutions Across Industries</h2><p className="mt-4 max-w-[68ch] text-base leading-relaxed text-charcoal/65">From greenhouse production to landscape projects, coir products can be selected to suit a range of professional uses.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ title, description, Icon }) => <article key={title} className="group flex min-w-0 flex-col rounded-sm border border-charcoal/10 bg-offwhite p-5 transition-colors hover:border-brand/40 sm:p-6"><Icon className="h-6 w-6 text-brand" strokeWidth={1.6} aria-hidden="true" /><h3 className="mt-5 text-lg font-semibold leading-snug text-brand-deep">{title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{description}</p><Link to="/products" className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></article>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="related-products-heading" className="bg-offwhite py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><Label className="text-brand">Product range</Label><h2 id="related-products-heading" className="display mt-4 text-[clamp(2rem,3.5vw,3rem)] leading-tight text-brand-deep">Find the Right Growing Solution</h2></div><Link to="/products" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">All products <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {relatedProducts.map((product) => <a key={product.name} href={product.slug ? `/products/${product.slug}` : "/products"} className="group flex min-w-0 flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-pure-white transition-shadow hover:shadow-[0_14px_32px_rgba(31,45,40,.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><div className="aspect-[4/3] overflow-hidden bg-pure-white p-4"><img src={product.image} alt={product.alt} loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" /></div><span className="flex min-h-[76px] items-center justify-between gap-2 border-t border-charcoal/10 px-4 py-4 text-sm font-semibold text-brand-deep">{product.name}<ArrowRight className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></a>)}
          </div>
        </div>
      </section>

      <section className="bg-brand py-14 text-pure-white sm:py-16 lg:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><Label className="text-pure-white/70">Bulk &amp; Export Enquiries Welcome</Label><h2 className="display mt-5 max-w-[22ch] text-[clamp(2rem,3.5vw,3rem)] leading-tight">Looking for the Right Coir Solution for Your Crop?</h2><p className="mt-4 max-w-[66ch] text-base leading-relaxed text-pure-white/75">Our team can help identify the appropriate product, specification and packing configuration for your cultivation or commercial requirements.</p></div>
          <div className="flex flex-wrap gap-3 lg:flex-col"><PrimaryButton to="/contact" className="min-h-12 px-5">Discuss Your Requirement</PrimaryButton><SecondaryButton to="/products" onDark className="min-h-12 px-5">View Our Products</SecondaryButton></div>
        </div>
      </section>
    </main>
  );
}

function ProductLink({ slug, className = "" }: { slug: string | null; className?: string }) {
  const classNames = `group/link inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`;
  return slug ? (
    <Link to="/products/$slug" params={{ slug }} className={classNames}>View Solution <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" /></Link>
  ) : (
    <Link to="/products" className={classNames}>View Solution <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" /></Link>
  );
}
