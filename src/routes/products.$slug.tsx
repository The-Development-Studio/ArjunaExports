import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FileDown,
  Info,
  Layers3,
  PackageOpen,
  Settings,
  Sprout,
} from "lucide-react";
import { applications, img, products } from "@/lib/site-data";
import { CategoryCard } from "@/components/site/CategoryCard";
import {
  Arrow,
  Label,
  PrimaryButton,
  Reveal,
  SecondaryButton,
  TextLink,
} from "@/components/site/primitives";
import { PointArt } from "@/components/site/PointArt";
import coconutIcon from "@/assets/coconut2.svg";
import cocoBenefit1 from "@/assets/key benefits/1.png";
import cocoBenefit2 from "@/assets/key benefits/2.png";
import cocoBenefit3 from "@/assets/key benefits/3.png";
import cocoBenefit4 from "@/assets/key benefits/4.png";
import cocoBenefit5 from "@/assets/key benefits/5.png";
import cocoBenefit6 from "@/assets/key benefits/6.png";
import cocoBenefit7 from "@/assets/key benefits/7.png";
import cocoBenefit8 from "@/assets/key benefits/8.png";
import cocoBlockPhoto1 from "@/assets/Product/1.coco peat blocks/01.JPG";
import cocoBlockPhoto2 from "@/assets/Product/1.coco peat blocks/02.JPG";
import cocoBlockPhoto3 from "@/assets/Product/1.coco peat blocks/03.png";
import cocoBlockPhoto4 from "@/assets/Product/1.coco peat blocks/04.jpg";
import cocoBlockPhoto5 from "@/assets/Product/1.coco peat blocks/05.png";
import cocoBlockPhoto6 from "@/assets/Product/1.coco peat blocks/06.png";
import packingBulkPalletized from "@/assets/Product/packing/Bulk Pattelized.png";
import packingPrivateLabel from "@/assets/Product/packing/Private Labelling.png";
import packingBundles from "@/assets/Product/packing/Bundler Pack 3S & 4S.png";
import packingBareBlocks from "@/assets/Product/packing/Bare Blocks - Direct Floor Loading.JPG";

const productGalleries: Record<string, Array<{ image: string; label: string }>> = {
  "coco-peat-blocks": [
    { image: cocoBlockPhoto1, label: "Coco peat block stack" },
    { image: cocoBlockPhoto2, label: "Coco peat blocks at the production facility" },
    { image: cocoBlockPhoto4, label: "Coco peat blocks prepared for export" },
    { image: cocoBlockPhoto3, label: "Wrapped coco peat block pallets" },
    { image: cocoBlockPhoto5, label: "Coco peat blocks loaded for shipment" },
    { image: cocoBlockPhoto6, label: "Export-ready coco peat block shipment" },
  ],
  "coir-matting": [
    { image: img.detailCoirFlooring, label: "Natural coir matting" },
    { image: img.detailCoirFlooring, label: "Woven coir mat and floor runner" },
    { image: img.stageFibre, label: "Selected long coir fibres" },
    { image: img.storyPeople, label: "Experienced production team" },
    { image: img.processQuality, label: "Product quality inspection" },
    { image: img.exportPort, label: "Export logistics readiness" },
  ],
  "coir-650-gram-bricks": [
    { image: img.productCocoPeat650g, label: "Premium 650g Coco Peat Brick" },
    { image: img.productBlock, label: "650 gram coco peat block format" },
    { image: img.detailBlockStack, label: "Compressed coco block stacks" },
    { image: img.stagePith, label: "Screened coco pith" },
    { image: img.stageMedium, label: "Expanded growing medium" },
    { image: img.appNursery, label: "Young plants in a nursery" },
    { image: img.processPackaging, label: "Private-label packing formats" },
  ],
  "coco-hush-chips": [
    { image: img.productCocoHushChips4kg, label: "Premium 4kg Coco Hush Chips" },
    { image: img.stageHusk, label: "Coco Hush Chips source material" },
    { image: img.stageCoconut, label: "Renewable coconut origin" },
    { image: img.stageFibre, label: "Coarse coir structure" },
    { image: img.stageMedium, label: "Open growing medium blend" },
    { image: img.appFloriculture, label: "Airy substrate for specialty crops" },
    { image: img.processPackaging, label: "Packed for export supply" },
  ],
};

const cocoPeatKeyFeatures = [
  { title: "Consistent Quality", image: cocoBenefit1 },
  { title: "High Volume Expansion", image: cocoBenefit2 },
  { title: "Excellent Water Retention", image: cocoBenefit3 },
  { title: "Double Washed", image: cocoBenefit4 },
  { title: "100% Natural", image: cocoBenefit5 },
  { title: "Biodegradable", image: cocoBenefit6 },
  { title: "Low EC/Stable pH", image: cocoBenefit7 },
  { title: "Easy Storage & Handling", image: cocoBenefit8 },
];

const packingOptions = [
  {
    number: "01",
    title: "Bare Blocks – Direct Floor Loading",
    description:
      "Blocks loaded directly into the container without pallets to maximize container utilization and cargo loading efficiency.",
    image: packingBareBlocks,
    alt: "Bare coco peat blocks stacked for direct floor loading",
  },
  {
    number: "02",
    title: "Bulk Palletized",
    description:
      "Compressed coco peat blocks stacked and securely palletized with stretch/shrink wrapping for efficient handling, storage, and container loading.",
    image: packingBulkPalletized,
    alt: "Coco peat blocks stacked and stretch wrapped on pallets",
  },
  {
    number: "03",
    title: "Bundle Pack – 3S/4S",
    description:
      "Blocks packed in customized bundles for easier handling, distribution, and retail or commercial applications.",
    image: packingBundles,
    alt: "Bundles of coco peat blocks loaded inside a container",
  },
  {
    number: "04",
    title: "Retail Pack with Private Labelling",
    description:
      "Customized individual block packaging with the buyer's brand, product information, specifications, and market requirements.",
    image: packingPrivateLabel,
    alt: "Coco peat blocks in branded retail packaging",
  },
];

const cocoPeatComparison = [
  { property: "Type", lowEc: "Coconut Peat", highEc: "Coconut Peat" },
  { property: "Form", lowEc: "Block", highEc: "Block" },
  { property: "Size", lowEc: "30 × 30 × 12 cm ± 15 cm", highEc: "30 × 30 × 12 cm ± 15 cm" },
  { property: "Moisture", lowEc: "Below 15%", highEc: "Below 15%" },
  { property: "EC", lowEc: "Below 0.5 µS/cm", highEc: "Above 1.5 µS/cm" },
  {
    property: "Weight",
    lowEc: "4.6 to 5 kg (± 200 grams)",
    highEc: "4.6 to 5 kg (± 200 grams)",
  },
  { property: "Compression", lowEc: "05:01", highEc: "05:01" },
  { property: "pH", lowEc: "5.2–6.8", highEc: "5.2–6.8" },
  {
    property: "Expansion Volume",
    lowEc: "15–16 litres per kg",
    highEc: "15–16 litres per kg",
  },
  { property: "Sand Ratio", lowEc: "Below 5%", highEc: "Below 5%" },
  { property: "Grade", lowEc: "Standard, Sieved", highEc: "Standard, Sieved" },
  { property: "Material", lowEc: "Natural Coir Pith", highEc: "Natural Coir Pith" },
  {
    property: "Usage",
    lowEc: "Potting mix suppliers, greenhouses, hydroponic growers, etc.",
    highEc: "Plant growing and animal bedding",
  },
  { property: "Colour", lowEc: "Natural Brown", highEc: "Natural Brown" },
  { property: "Features", lowEc: "Washed", highEc: "Unwashed" },
];

const cocoPeatTechnicalGroups = [
  {
    label: "Core Product",
    icon: <Layers3 />,
    rows: [
      { property: "Type", lowEc: "Coconut Peat", highEc: "Coconut Peat" },
      { property: "Form", lowEc: "Block", highEc: "Block" },
    ],
  },
  {
    label: "Physical Properties",
    icon: <PackageOpen />,
    rows: [
      { property: "Size (L x B x H)", lowEc: "30 x 30 x 10 to 12 cm", highEc: "30 x 30 x 10 to 12 cm" },
      { property: "Moisture", lowEc: "Below 15%", highEc: "Below 15%" },
      { property: "Weight", lowEc: "4.2 to 5.2 KGS", highEc: "4.2 to 5.2 KGS" },
      { property: "Compression", lowEc: "5:1", highEc: "5:1" },
      { property: "Electrical Conductivity (EC)", lowEc: "Below 0.5 mS/cm", highEc: "Above 1.5 mS/cm" },
      { property: "pH", lowEc: "5.2–6.8", highEc: "5.2–6.8" },
    ],
  },
  {
    label: "Growing Media Properties",
    icon: <Sprout />,
    rows: [
      { property: "Expansion Volume", lowEc: "16 Liters & above per KG", highEc: "15 Liters & above per KG" },
      { property: "Grade", lowEc: "6mm Sieved", highEc: "6mm Sieved" },
      { property: "Colour", lowEc: "Natural Brown", highEc: "Natural Brown" },
    ],
  },
  {
    label: "Processing & Application",
    icon: <Settings />,
    rows: [
      { property: "Material", lowEc: "100% Natural Coir Pith", highEc: "100% Natural Coir Pith" },
      { property: "Processing", lowEc: "Double Washed", highEc: "Unwashed" },
      { property: "Usage", lowEc: "Potting mix suppliers, greenhouses, hydroponic growers, etc.", highEc: "Plant growing and animal bedding" },
    ],
  },
];

const coirMattingSpecification = [
  { property: "Material", value: "100% Coir Fiber" },
  { property: "Pattern", value: "Herringbone Pattern" },
  { property: "Shape", value: "Roll" },
  { property: "Technics", value: "Machine Made - Full Powerloom" },
  { property: "Pile Height", value: "Thickness - 8 mm" },
];

const gramBlockComparison = [
  { property: "Type", gradeOne: "Coco Coir Peat", gradeTwo: "Coco Coir Peat" },
  { property: "Form", gradeOne: "Bricks with Individual Packing", gradeTwo: "Bricks" },
  { property: "Size", gradeOne: "18 × 10 × 8 cm", gradeTwo: "20 × 10 × 5 cm" },
  { property: "Moisture", gradeOne: "Below 15%", gradeTwo: "Below 15%" },
  { property: "EC", gradeOne: "Below 0.5 µS/cm", gradeTwo: "Below 0.7 µS/cm" },
  { property: "Weight", gradeOne: "640 to 660 Grams", gradeTwo: "600 to 650 Grams" },
  { property: "Compression", gradeOne: "05:01", gradeTwo: "05:01" },
  { property: "pH", gradeOne: "5.2–6.8", gradeTwo: "5.2–6.8" },
  {
    property: "Expansion Volume",
    gradeOne: "9 Litres & Above per kg",
    gradeTwo: "8 Litres & Above per kg",
  },
  { property: "Sand Ratio", gradeOne: "Below 5%", gradeTwo: "Below 7%" },
  { property: "Grade", gradeOne: "Standard, Sieved", gradeTwo: "Standard, Sieved" },
  { property: "Material", gradeOne: "Natural Coir Pith", gradeTwo: "Natural Coir Pith" },
  {
    property: "Usage",
    gradeOne: "Home Gardening, Potting Mix",
    gradeTwo: "Home Gardening, Potting Mix",
  },
  { property: "Colour", gradeOne: "Natural Brown", gradeTwo: "Natural Brown" },
  { property: "Features", gradeOne: "Washed", gradeTwo: "Washed" },
];

const huskChipsSpecification = [
  {
    parameter: "Electrical Conductivity (EC)",
    value: (
      <>
        <span className="block">Low EC - 0.4–0.6 mS/cm</span>
        <span className="mt-1 block">High EC - &gt;1.5 mS/cm</span>
      </>
    ),
    downloadValue: "Low EC - 0.4–0.6 mS/cm; High EC - >1.5 mS/cm",
  },
  { parameter: "Colour", value: "Natural Brown", downloadValue: "Natural Brown" },
  { parameter: "Block Weight", value: "4.3–4.7 kg", downloadValue: "4.3–4.7 kg" },
  {
    parameter: "Expansion Volume (Per kg)",
    value: "12–15 litres per kg",
    downloadValue: "12–15 litres per kg",
  },
  { parameter: "pH Level", value: "5.5–6.5", downloadValue: "5.5–6.5" },
  { parameter: "Moisture", value: "15–20%", downloadValue: "15–20%" },
  {
    parameter: "Block Size",
    value: "30 × 30 × 12 (±2) cm",
    downloadValue: "30 × 30 × 12 (±2) cm",
  },
  { parameter: "Compression Ratio", value: "01:05", downloadValue: "01:05" },
  { parameter: "Chips Size", value: "4–16 mm", downloadValue: "4–16 mm" },
  { parameter: "Sand", value: "<2%", downloadValue: "<2%" },
];

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    const { industrySolutions, ...serializableProduct } = product;
    return serializableProduct;
  },
  head: ({ loaderData: p }) => ({
    meta: [
      { title: `${p?.name ?? "Product"} | Arjuna Exports` },
      { name: "description", content: p?.short ?? "Arjuna Exports product" },
    ],
  }),
  component: ProductDetail,
});
function ProductDetail() {
  const p = Route.useLoaderData();
  if (!p) {
    return null;
  }
  const gallery = (p.slug ? productGalleries[p.slug] : undefined) ?? [
    { image: p.image, label: p.name },
    { image: img.stageMedium, label: "Prepared growing medium" },
    { image: img.processQuality, label: "Quality inspection" },
    { image: img.exportPort, label: "Export-ready shipment" },
  ];
  const [activePhoto, setActivePhoto] = useState(
    gallery[0] ?? { image: p.image, label: p.name },
  );

  useEffect(() => {
    if (gallery[0]) {
      setActivePhoto(gallery[0]);
    }
  }, [p.slug]);

  const related = products.filter((product) => product.slug !== p.slug).slice(0, 3);
  const applicationVisuals = (p.applications ?? []).map((name) => ({
    name,
    image: applications.find((application) => application.title === name)?.image ?? p.image,
  }));
  const isCocoPeatBlocks = p.slug === "coco-peat-blocks";
  const isCoirMatting = p.slug === "coir-matting";
  const isGramBlock = p.slug === "coir-650-gram-bricks";
  const isHuskChips = p.slug === "coco-hush-chips";
  const isPackagingPhoto = activePhoto?.image
    ? [
        img.productCocoPeat5kg,
        img.productCocoPeat650g,
        img.productCocoHushChips4kg,
      ].includes(activePhoto.image)
    : false;
  const specification = [
    p.name,
    "",
    p.overview,
    "",
    ...(isCocoPeatBlocks
      ? [
          "Product Name: Coco Peat 5kg Blocks",
          "",
          ...cocoPeatComparison.map(
            (item) => `${item.property} — Low EC: ${item.lowEc} | High EC: ${item.highEc}`,
          ),
        ]
      : isCoirMatting
        ? [
            "Product Name: Coir Carpet - Natural",
            "",
            ...coirMattingSpecification.map((item) => `${item.property}: ${item.value}`),
          ]
        : isGramBlock
          ? [
              "Coir 650 Gram Bricks - Grade I / Grade II",
              "",
              ...gramBlockComparison.map(
                (item) =>
                  `${item.property} — Grade I: ${item.gradeOne} | Grade II: ${item.gradeTwo}`,
              ),
            ]
          : isHuskChips
            ? huskChipsSpecification.map(
                (item, index) => `${index + 1}. ${item.parameter}: ${item.downloadValue}`,
              )
            : p.specs.map((item) => `${item.label}: ${item.value}`)),
  ].join("\n");
  const downloadHref = `data:text/plain;charset=utf-8,${encodeURIComponent(specification)}`;
  return (
    <>
      <section className="relative overflow-hidden bg-ivory pt-20 lg:pt-[88px]">
        <img
          src={coconutIcon}
          alt=""
          className="pointer-events-none absolute -right-24 top-24 hidden w-[340px] opacity-[0.05] lg:block"
          aria-hidden="true"
        />
        <div className="shell grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-14">
          <div
            className={`relative min-h-[400px] overflow-hidden rounded-md border border-brand/15 shadow-[0_20px_60px_rgba(31,45,40,.12)] sm:min-h-[480px] lg:min-h-[540px] ${
              isCocoPeatBlocks ? "bg-pure-white" :
              isPackagingPhoto ? "bg-pure-white" : "bg-charcoal"
            }`}
          >
            {isCocoPeatBlocks ? (
              <>
                <div className="absolute inset-0 bg-pure-white">
                  <img
                    src={activePhoto?.image}
                    alt={activePhoto?.label ?? p.name}
                    className="h-full w-full scale-110 object-cover"
                  />
                </div>
                <p className="absolute inset-x-0 bottom-[104px] truncate bg-pure-white/95 px-5 py-2 text-center text-xs text-charcoal/75 sm:bottom-[108px]">
                  {activePhoto?.label ?? p.name}
                </p>
                <div className="absolute inset-x-0 bottom-0 overflow-x-auto bg-pure-white/95 px-4 pb-4 pt-2 sm:px-5">
                  <div className="flex w-max gap-2">
                    {gallery.map((photo) => (
                      <button
                        key={photo.label}
                        type="button"
                        onClick={() => setActivePhoto(photo)}
                        aria-label={`Show ${photo.label}`}
                        aria-pressed={activePhoto?.image === photo.image}
                        className={`h-14 w-14 shrink-0 overflow-hidden rounded-sm border-2 bg-pure-white transition-opacity ${
                          activePhoto?.image === photo.image
                            ? "border-[#1B7F3B]"
                            : "border-brand/15 hover:opacity-70"
                        }`}
                      >
                        <img src={photo.image} alt="" loading="lazy" className="h-full w-full object-contain p-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : isPackagingPhoto ? (
              <div className="absolute inset-x-0 top-0 bottom-[140px] flex items-center justify-center p-6 sm:bottom-[150px] sm:p-8">
                <img
                  src={activePhoto?.image}
                  alt={activePhoto?.label ?? p.name}
                  className="max-h-full w-auto max-w-full object-contain drop-shadow-xl transition duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                />
              </div>
            ) : (
              <img
                src={activePhoto?.image}
                alt={activePhoto?.label ?? p.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              />
            )}
            {!isCocoPeatBlocks && <div
              className={`pointer-events-none absolute inset-0 ${
                isPackagingPhoto
                  ? "bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"
                  : "bg-gradient-to-t from-charcoal/75 via-transparent to-charcoal/10"
              }`}
            />}
            {!isCocoPeatBlocks && <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="flex flex-col gap-5">
                <div>
                  <span className="micro-label text-pure-white/70">
                    Arjuna Exports · Product Series
                  </span>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-pure-white/80">
                    {activePhoto?.label ?? p.name}
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {gallery.map((photo) => {
                    const isThumbPackaging = [
                      img.productCocoPeat5kg,
                      img.productCocoPeat650g,
                      img.productCocoHushChips4kg,
                    ].includes(photo.image);
                    return (
                      <button
                        key={photo.label}
                        type="button"
                        onClick={() => setActivePhoto(photo)}
                        aria-label={`Show ${photo.label}`}
                        className={`group relative aspect-square overflow-hidden rounded-sm border-2 transition duration-300 ${
                          activePhoto?.image === photo.image
                            ? "border-aqua shadow-[0_0_0_3px_rgba(104,230,194,.18)]"
                            : "border-pure-white/30 opacity-75 hover:border-pure-white hover:opacity-100"
                        } ${isThumbPackaging ? "bg-pure-white" : ""}`}
                      >
                        <img
                          src={photo.image}
                          alt=""
                          loading="lazy"
                          className={`h-full w-full transition duration-500 group-hover:scale-110 ${
                            isThumbPackaging ? "object-contain p-0.5" : "object-cover"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>}
          </div>
          <Reveal delay={100} className="flex items-center py-8 lg:py-12">
            <div className="w-full max-w-xl">
              <Label className="text-brand">{p.category} collection</Label>
              <h1 className={`display mt-6 ${isCocoPeatBlocks ? "text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] whitespace-normal sm:whitespace-nowrap" : "max-w-[16ch] text-[clamp(2.5rem,4.2vw,4.5rem)] leading-[1.02]"}`}>
                {p.name}
              </h1>
              <p className={`mt-7 text-left text-charcoal/70 ${isCocoPeatBlocks ? "max-w-[560px] text-base font-normal leading-[1.7]" : "max-w-xl text-lg font-medium leading-relaxed"}`}>
                {isCocoPeatBlocks
                  ? "Coco Peat Blocks are manufactured from selected coconut husks, a natural by-product of the coconut and coir industry. The coir material is carefully washed, screened, graded, and compressed to produce consistent coco peat growing media. Our premium coco peat blocks are suitable for greenhouse cultivation, nurseries, potting mixes, and commercial horticulture. Available in washed, low EC, and customized specifications to meet specific growing requirements. Natural, renewable, and biodegradable, coco peat provides an efficient and sustainable growing medium for professional cultivation."
                  : p.short}
              </p>
              {!isCocoPeatBlocks && <dl className="mt-10 grid gap-px overflow-hidden rounded-md border border-brand/15 bg-brand/15 sm:grid-cols-2">
                <div className="bg-offwhite p-5 sm:p-6">
                  <dt className="micro-label text-brand">Available formats</dt>
                  <dd className="mt-3 text-sm font-semibold leading-relaxed">{p.format}</dd>
                </div>
                <div className="bg-offwhite p-5 sm:p-6">
                  <dt className="micro-label text-brand">Best suited for</dt>
                  <dd className="mt-3 text-sm font-semibold leading-relaxed">{p.application}</dd>
                </div>
              </dl>}
              <div className={`${isCocoPeatBlocks ? "mt-7" : "mt-9"} flex flex-wrap gap-3`}>
                <PrimaryButton to="/contact">Request information</PrimaryButton>
                <a
                  href={downloadHref}
                  download={`${p.slug}-specification.txt`}
                  className="group inline-flex min-h-[52px] items-center gap-3 rounded-sm border border-brand px-6 text-[13px] font-semibold tracking-[.06em] text-brand uppercase transition-colors hover:bg-brand hover:text-pure-white"
                >
                  Download specification <Arrow className="group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {!isCocoPeatBlocks && <section className="bg-offwhite py-20 lg:py-28">
        <div className="shell">
          <div className="grid gap-8 border-b border-brand/20 pb-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-16">
            <Reveal>
              <Label className="text-brand">Product overview</Label>
              <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.25rem,4vw,4rem)]">
                Engineered by nature. Refined for consistency.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-left text-xl font-medium leading-[1.75] text-charcoal/75 lg:text-2xl">
                {p.overview}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
            <figure className="group relative min-h-[380px] overflow-hidden rounded-md lg:min-h-[480px]">
              <img
                src={gallery[1]?.image ?? gallery[0]?.image}
                alt={gallery[1]?.label ?? gallery[0]?.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <figcaption className="micro-label absolute right-6 bottom-6 left-6 text-pure-white">
                {gallery[1]?.label ?? gallery[0]?.label}
              </figcaption>
            </figure>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:grid-rows-2">
              {gallery.slice(2, 4).map((photo) => (
                <figure
                  key={photo.label}
                  className="group relative min-h-[210px] overflow-hidden rounded-md"
                >
                  <img
                    src={photo.image}
                    alt={photo.label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <figcaption className="micro-label absolute right-5 bottom-5 left-5 text-pure-white">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>}

      <section className="bg-ivory py-20 lg:py-28">
        <div className="shell">
          <Reveal className="flex flex-col items-start gap-5">
            <div>
              <Label className="text-brand">Key benefits</Label>
              <h2 className={`display mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-tight ${isCocoPeatBlocks ? "whitespace-normal sm:whitespace-nowrap" : ""}`}>
                Built around the crop.
              </h2>
            </div>
            <p className="max-w-xl text-left text-lg leading-relaxed text-charcoal/65">
              Practical performance designed for consistent preparation, growing and delivery.
            </p>
          </Reveal>

          {isCocoPeatBlocks ? (
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cocoPeatKeyFeatures.map(({ title, image }) => (
                <li key={title} className="flex min-h-40 items-center justify-center rounded-sm border border-brand/10 bg-pure-white p-3">
                  <img src={image} alt={title} loading="lazy" className="h-auto w-full max-w-[220px] object-contain" />
                </li>
              ))}
            </ul>
          ) : <ul className="mt-12 grid border-t border-brand/25 md:grid-cols-2">
            {p.benefits.map((benefit, index) => (
              <li
                key={benefit}
                className={`group flex min-h-40 items-center gap-6 border-b border-brand/25 py-7 transition-colors hover:bg-brand-soft md:px-7 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <PointArt index={index} className="h-14 w-14 shrink-0" />
                <span className="max-w-[26ch] text-left text-lg font-bold leading-snug text-brand">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>}
        </div>
      </section>

      <section className="bg-brand-soft py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <Label className={isCocoPeatBlocks ? "text-[#0B6B6B]" : "text-brand"}>
                  {isCocoPeatBlocks ? "TECHNICAL DATA" : "Technical data"}
                </Label>
                <h2 className={`display ${isCocoPeatBlocks ? "mt-4 text-[clamp(1.4rem,3.5vw,2.5rem)] uppercase" : "mt-6 text-[clamp(2.25rem,3.5vw,3.75rem)]"}`}>
                  {isCocoPeatBlocks ? "Product Technical Specifications" : "Typical specification."}
                </h2>
              </div>
              {!isCocoPeatBlocks && <span className="micro-label hidden text-charcoal/40 sm:block">
                Subject to agreed order specification
              </span>}
            </div>
            <div className={`mt-6 overflow-hidden rounded-md border border-brand/15 bg-pure-white ${isCocoPeatBlocks ? "shadow-[0_12px_32px_rgba(31,45,40,.06)]" : "mt-10 shadow-[0_24px_80px_rgba(31,45,40,.08)]"}`}>
              {isCocoPeatBlocks ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] border-collapse text-left text-[12px]">
                    <caption className="sr-only">
                      Product technical specifications for Coco Peat Blocks, including Low EC and High EC options
                    </caption>
                    <thead>
                      <tr>
                        <th className="w-[18%] bg-brand" aria-label="Specification category" />
                        <th className="w-[19%] border-r border-pure-white/20 bg-brand px-4 py-3 text-left text-[11px] font-bold uppercase text-pure-white">
                          Parameter
                        </th>
                        <th className="w-[31.5%] border-r border-pure-white/20 bg-[#68e6c2] px-4 py-3 text-center text-[11px] font-bold uppercase text-brand">
                          Low EC
                        </th>
                        <th className="w-[31.5%] bg-[#68e6c2] px-4 py-3 text-center text-[11px] font-bold uppercase text-brand">
                          High EC
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cocoPeatTechnicalGroups.map((group) =>
                        group.rows.map((item, index) => (
                          <tr key={`${group.label}-${item.property}`} className={`${(index + group.rows.length) % 2 === 0 ? "bg-offwhite" : "bg-pure-white"}`}>
                            {index === 0 && (
                              <th rowSpan={group.rows.length} className="relative border-r border-brand/10 bg-gradient-to-br from-[#e2f8f3] to-[#d1f2eb] p-0 text-center align-middle">
                                <CategoryCard icon={group.icon} label={group.label === "Core Product" ? "CORE\nPRODUCT" : group.label === "Physical Properties" ? "PHYSICAL\nPROPERTIES" : group.label === "Growing Media Properties" ? "GROWING\nMEDIA\nPROPERTIES" : "PROCESSING\n&\nAPPLICATION"} />
                              </th>
                            )}
                            <th className="border-r border-charcoal/10 px-2 py-1.5 text-left text-[9px] font-bold text-charcoal">{item.property}</th>
                            <td className="border-r border-charcoal/10 px-2 py-1.5 text-[9px] font-semibold text-charcoal">{item.lowEc}</td>
                            <td className="px-2 py-1.5 text-[9px] font-semibold text-charcoal">{item.highEc}</td>
                          </tr>
                        )),
                      )}
                    </tbody>
                  </table>
                </div>
              ) : isGramBlock ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[820px] border-collapse text-left">
                    <caption className="sr-only">
                      Coir 650 Gram Bricks Grade I and Grade II specification comparison
                    </caption>
                    <thead>
                      <tr className="bg-brand text-pure-white">
                        <th className="w-[20%] border-r border-pure-white/20 px-5 py-5 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Product name
                        </th>
                        <th className="w-[40%] border-r border-pure-white/20 px-5 py-5 text-center text-base font-bold">
                          Coir 650 Gram Bricks - Grade I
                        </th>
                        <th className="w-[40%] px-5 py-5 text-center text-base font-bold">
                          Coir 650 Gram Bricks - Grade II
                        </th>
                      </tr>
                      <tr className="bg-[#68e6c2] text-brand">
                        <th className="border-r border-brand/15 px-5 py-4 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Properties
                        </th>
                        <th className="border-r border-brand/15 px-5 py-4 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Low EC
                        </th>
                        <th className="px-5 py-4 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Low EC
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gramBlockComparison.map((item, index) => (
                        <tr
                          key={item.property}
                          className={`border-t border-charcoal/10 ${index % 2 === 0 ? "bg-pure-white" : "bg-offwhite"}`}
                        >
                          <th className="border-r border-charcoal/10 px-5 py-4 text-center text-sm font-bold text-brand">
                            {item.property}
                          </th>
                          <td className="border-r border-charcoal/10 px-5 py-4 text-center text-sm font-medium leading-relaxed text-charcoal">
                            {item.gradeOne}
                          </td>
                          <td className="px-5 py-4 text-center text-sm font-medium leading-relaxed text-charcoal">
                            {item.gradeTwo}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : isCoirMatting ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] border-collapse text-left">
                    <caption className="sr-only">Coir Carpet Natural product specification</caption>
                    <thead>
                      <tr className="bg-brand text-pure-white">
                        <th className="w-[28%] border-r border-pure-white/20 px-6 py-5 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Product name
                        </th>
                        <th className="px-6 py-5 text-center text-lg font-bold">
                          Coir Carpet - Natural
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {coirMattingSpecification.map((item, index) => (
                        <tr
                          key={item.property}
                          className={`border-t border-charcoal/10 ${index % 2 === 0 ? "bg-pure-white" : "bg-offwhite"}`}
                        >
                          <th className="border-r border-charcoal/10 px-6 py-5 text-center text-sm font-bold text-brand">
                            {item.property}
                          </th>
                          <td className="px-6 py-5 text-center text-base font-medium leading-relaxed text-charcoal">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : isHuskChips ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-left">
                    <caption className="sr-only">Coco Hush Chips technical specification</caption>
                    <thead>
                      <tr className="bg-brand text-pure-white">
                        <th className="w-[12%] border-r border-pure-white/20 px-5 py-5 text-center text-sm font-bold uppercase tracking-[.08em]">
                          S.No
                        </th>
                        <th className="w-[42%] border-r border-pure-white/20 px-5 py-5 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Parameters
                        </th>
                        <th className="px-5 py-5 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Low EC
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {huskChipsSpecification.map((item, index) => (
                        <tr
                          key={item.parameter}
                          className={`border-t border-charcoal/10 ${index % 2 === 0 ? "bg-pure-white" : "bg-offwhite"}`}
                        >
                          <td className="border-r border-charcoal/10 px-5 py-4 text-center text-sm font-bold text-brand">
                            {index + 1}
                          </td>
                          <th className="border-r border-charcoal/10 px-5 py-4 text-center text-sm font-bold text-charcoal">
                            {item.parameter}
                          </th>
                          <td className="px-5 py-4 text-center text-sm font-medium leading-relaxed text-charcoal">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <>
                  <div className="grid gap-px bg-charcoal/12 sm:grid-cols-3">
                    {p.specs.slice(0, 3).map((s) => (
                      <div key={s.label} className="bg-brand-deep p-6 text-pure-white">
                        <span className="micro-label text-aqua/80">{s.label}</span>
                        <strong className="mt-3 block text-2xl font-medium leading-tight">
                          {s.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                  <dl className="divide-y divide-charcoal/10 border-t border-charcoal/10">
                    {p.specs.slice(3).map((s) => (
                      <div
                        key={s.label}
                        className="grid gap-2 px-5 py-4 sm:grid-cols-[minmax(150px,.7fr)_1.3fr] sm:items-center sm:gap-8 sm:px-6"
                      >
                        <dt className="micro-label text-charcoal/50">{s.label}</dt>
                        <dd className="text-base font-semibold leading-snug text-charcoal sm:text-right">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
              <div className={`flex flex-col gap-3 border-t border-charcoal/10 bg-offwhite px-5 py-3 text-xs text-charcoal/60 sm:flex-row sm:items-center sm:justify-between ${isCocoPeatBlocks ? "" : "sm:py-4 sm:text-sm"}`}>
                <span className="flex items-center gap-2">
                  {isCocoPeatBlocks && <Info aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />}
                  Values shown are typical and can be adjusted to customer order specifications.
                </span>
                <a
                  href={downloadHref}
                  download={`${p.slug}-specification.txt`}
                  className={`font-semibold text-brand hover:text-brand-deep ${isCocoPeatBlocks ? "inline-flex items-center gap-2 rounded-full bg-[#d8f3ed] px-4 py-2" : ""}`}
                >
                  {isCocoPeatBlocks && <FileDown aria-hidden="true" className="h-4 w-4" />}
                  Download Technical Sheet {isCocoPeatBlocks && <Arrow />}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {isCocoPeatBlocks && (
        <section className="bg-[#F5F2EA] py-12 lg:py-16">
          <div className="shell">
            <div className="mx-auto flex w-full flex-col xl:aspect-[16/9] xl:p-8">
              <Label className="mb-4 text-[#0B6B6B]">PACKING OPTIONS</Label>
              <h2 className="display mb-7 whitespace-normal text-[clamp(1.75rem,3.2vw,3.25rem)] leading-tight text-[#0B6B6B] xl:whitespace-nowrap">
                Packing Options &amp; Logistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:min-h-0 xl:flex-1 xl:grid-cols-4">
                {packingOptions.map((option, index) => (
                  <article
                    key={option.number}
                    className={`flex flex-col border-[#0B6B6B]/25 xl:h-full ${
                      index < packingOptions.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                    } ${index === 0 ? "md:border-r xl:border-r" : ""} ${
                      index === 2 ? "md:border-r-0 xl:border-r" : ""
                    }`}
                  >
                    <img
                      src={option.image}
                      alt={option.alt}
                      loading="lazy"
                      className="h-56 w-full flex-none object-cover sm:h-64 xl:h-[56%]"
                    />
                    <div className="flex flex-1 flex-col px-5 py-5 xl:px-5 xl:py-4">
                      <span className="text-[11px] font-bold tracking-[0.18em] text-[#0B6B6B]">
                        {option.number}
                      </span>
                      <h3 className="display mt-3 min-h-[2.5em] text-[clamp(1rem,1.45vw,1.35rem)] leading-tight text-[#0B6B6B]">
                        {option.title}
                      </h3>
                      <p className="mt-3 text-justify text-[12px] leading-[1.55] text-[#0B6B6B]">
                        {option.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand-soft py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <Label className="text-brand">Applications</Label>
            <h2 className="display mt-6 text-[clamp(2.25rem,4vw,4rem)]">Where it performs.</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {applicationVisuals.map((application, i) => (
              <Reveal
                key={application.name}
                delay={i * 70}
                className="group relative min-h-80 overflow-hidden"
              >
                <img
                  src={application.image}
                  alt={application.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-pure-white">
                  <span className="micro-label text-aqua">Application</span>
                  <h3 className="display mt-3 text-3xl">{application.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {!isCocoPeatBlocks && <section className="grid bg-brand-deep text-pure-white lg:grid-cols-2">
        <img
          src={img.exportPort}
          alt="Export containers ready for shipping"
          loading="lazy"
          className="h-full min-h-[440px] w-full object-cover"
        />
        <div className="flex items-center px-6 py-16 sm:px-12 lg:p-16">
          <Reveal>
            <Label className="text-aqua">Packaging & shipping</Label>
            <h2 className="display mt-6 text-[clamp(2.25rem,4vw,4rem)]">Packed for the journey.</h2>
            <p className="mt-7 max-w-xl leading-relaxed text-pure-white/70">
              Compressed formats reduce transport volume. Private-label packaging and
              customer-configured loading are available in 20-foot and 40-foot full containers.
            </p>
            <SecondaryButton to="/contact" onDark className="mt-9">
              Discuss your shipment
            </SecondaryButton>
          </Reveal>
        </div>
      </section>}

      <section className="bg-offwhite py-20 lg:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Label className="text-brand">Related products</Label>
              <h2 className="display mt-6 text-[clamp(2.25rem,3.5vw,3.75rem)]">
                Continue exploring.
              </h2>
            </div>
            <TextLink to="/products" className="text-brand">
              View all products
            </TextLink>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {related.map((product, i) => (
              <Reveal key={product.slug} delay={i * 70} className="group">
                <a href={`/products/${product.slug}`}>
                  <div
                    className={`aspect-[4/3] overflow-hidden rounded-md border border-brand/15 ${
                      product.slug === "coir-matting"
                        ? "bg-brand-soft"
                        : "flex items-center justify-center bg-pure-white p-4"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className={`transition duration-700 group-hover:scale-105 ${
                        product.slug === "coir-matting"
                          ? "h-full w-full object-cover"
                          : "max-h-full w-auto max-w-full object-contain drop-shadow-sm"
                      }`}
                    />
                  </div>
                  <span className="micro-label mt-6 block text-brand">{product.category}</span>
                  <h3 className="display mt-3 text-3xl transition-transform group-hover:-translate-y-1">
                    {product.name}
                  </h3>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-charcoal/20 pt-12 md:flex-row md:items-center">
            <h2 className="display max-w-2xl text-4xl">
              Need a crop-specific format or custom mix?
            </h2>
            <PrimaryButton to="/contact">Talk to our team</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
