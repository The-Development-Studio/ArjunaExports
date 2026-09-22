import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { applications, img, products } from "@/lib/site-data";
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

const productGalleries: Record<string, Array<{ image: string; label: string }>> = {
  "coco-peat-blocks": [
    { image: img.productBlock, label: "Compressed coco peat blocks" },
    { image: img.detailBlockStack, label: "Export-ready coco peat block stacks" },
    { image: img.stagePith, label: "Screened coco pith texture" },
    { image: img.processCompression, label: "Hydraulic block compression" },
    { image: img.stageMedium, label: "Expanded growing medium" },
    { image: img.processPackaging, label: "Wrapped and palletised packaging" },
  ],
  "coir-matting": [
    { image: img.productFloor, label: "Natural coir matting" },
    { image: img.detailCoirFlooring, label: "Woven coir mat and floor runner" },
    { image: img.stageFibre, label: "Selected long coir fibres" },
    { image: img.storyPeople, label: "Experienced production team" },
    { image: img.processQuality, label: "Product quality inspection" },
    { image: img.exportPort, label: "Export logistics readiness" },
  ],
  "650-gram-block": [
    { image: img.productBlock, label: "650 gram coco peat block format" },
    { image: img.detailBlockStack, label: "Compressed coco block stacks" },
    { image: img.stagePith, label: "Screened coco pith" },
    { image: img.stageMedium, label: "Expanded growing medium" },
    { image: img.appNursery, label: "Young plants in a nursery" },
    { image: img.processPackaging, label: "Private-label packing formats" },
  ],
  "husk-chips": [
    { image: img.stageHusk, label: "Coconut husk chips source material" },
    { image: img.stageCoconut, label: "Renewable coconut origin" },
    { image: img.stageFibre, label: "Coarse coir structure" },
    { image: img.stageMedium, label: "Open growing medium blend" },
    { image: img.appFloriculture, label: "Airy substrate for specialty crops" },
    { image: img.processPackaging, label: "Packed for export supply" },
  ],
};

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
    return product;
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
  const gallery = productGalleries[p.slug] ?? [
    { image: p.image, label: p.name },
    { image: img.stageMedium, label: "Prepared growing medium" },
    { image: img.processQuality, label: "Quality inspection" },
    { image: img.exportPort, label: "Export-ready shipment" },
  ];
  const [activePhoto, setActivePhoto] = useState(gallery[0]);
  const related = products.filter((product) => product.slug !== p.slug).slice(0, 3);
  const applicationVisuals = p.applications.map((name) => ({
    name,
    image: applications.find((application) => application.title === name)?.image ?? p.image,
  }));
  const isCocoPeatBlocks = p.slug === "coco-peat-blocks";
  const isCoirMatting = p.slug === "coir-matting";
  const isGramBlock = p.slug === "650-gram-block";
  const isHuskChips = p.slug === "husk-chips";
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
              "Coco Peat 650 Gram Bricks - Grade I / Grade II",
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
      <section className="relative overflow-hidden bg-ivory pt-20 lg:pt-0">
        <img
          src={coconutIcon}
          alt=""
          className="pointer-events-none absolute -right-24 top-24 hidden w-[340px] opacity-[0.05] lg:block"
          aria-hidden="true"
        />
        <div className="shell grid gap-8 py-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-14">
          <div className="relative min-h-[400px] overflow-hidden rounded-md border border-brand/15 shadow-[0_20px_60px_rgba(31,45,40,.12)] sm:min-h-[480px] lg:min-h-[540px]">
            <img
              src={activePhoto.image}
              alt={activePhoto.label}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-charcoal/10" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="flex flex-col gap-5">
                <div>
                  <span className="micro-label text-pure-white/70">
                    Arjuna Exports · Product Series
                  </span>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-pure-white/80">
                    {activePhoto.label}
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {gallery.map((photo) => (
                    <button
                      key={photo.label}
                      type="button"
                      onClick={() => setActivePhoto(photo)}
                      aria-label={`Show ${photo.label}`}
                      className={`group relative aspect-square overflow-hidden rounded-sm border-2 transition duration-300 ${
                        activePhoto.image === photo.image
                          ? "border-aqua shadow-[0_0_0_3px_rgba(104,230,194,.18)]"
                          : "border-pure-white/30 opacity-75 hover:border-pure-white hover:opacity-100"
                      }`}
                    >
                      <img
                        src={photo.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Reveal delay={100} className="flex items-center py-8 lg:py-12">
            <div className="w-full max-w-xl">
              <Label className="text-brand">{p.category} collection</Label>
              <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.5rem,4.2vw,4.5rem)] leading-[1.02]">
                {p.name}
              </h1>
              <p className="mt-7 max-w-xl text-left text-lg font-medium leading-relaxed text-charcoal/70">
                {p.short}
              </p>
              <dl className="mt-10 grid gap-px overflow-hidden rounded-md border border-brand/15 bg-brand/15 sm:grid-cols-2">
                <div className="bg-offwhite p-5 sm:p-6">
                  <dt className="micro-label text-brand">Available formats</dt>
                  <dd className="mt-3 text-sm font-semibold leading-relaxed">{p.format}</dd>
                </div>
                <div className="bg-offwhite p-5 sm:p-6">
                  <dt className="micro-label text-brand">Best suited for</dt>
                  <dd className="mt-3 text-sm font-semibold leading-relaxed">{p.application}</dd>
                </div>
              </dl>
              <div className="mt-9 flex flex-wrap gap-3">
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

      <section className="bg-offwhite py-20 lg:py-28">
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
                src={gallery[1]?.image ?? gallery[0].image}
                alt={gallery[1]?.label ?? gallery[0].label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <figcaption className="micro-label absolute right-6 bottom-6 left-6 text-pure-white">
                {gallery[1]?.label ?? gallery[0].label}
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
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="shell">
          <Reveal className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <Label className="text-brand">Key benefits</Label>
              <h2 className="display mt-6 text-[clamp(2.25rem,4vw,4rem)]">
                Built around the crop.
              </h2>
            </div>
            <p className="max-w-xl text-left text-lg leading-relaxed text-charcoal/65 lg:justify-self-end">
              Practical performance designed for consistent preparation, growing and delivery.
            </p>
          </Reveal>

          <ul className="mt-12 grid border-t border-brand/25 md:grid-cols-2">
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
          </ul>
        </div>
      </section>

      <section className="bg-brand-soft py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <Label className="text-brand">Technical data</Label>
                <h2 className="display mt-6 text-[clamp(2.25rem,3.5vw,3.75rem)]">
                  Typical specification.
                </h2>
              </div>
              <span className="micro-label hidden text-charcoal/40 sm:block">
                Subject to agreed order specification
              </span>
            </div>
            <div className="mt-10 overflow-hidden rounded-md border border-brand/15 bg-pure-white shadow-[0_24px_80px_rgba(31,45,40,.08)]">
              {isCocoPeatBlocks ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <caption className="sr-only">
                      Coco Peat 5kg Blocks Low EC and High EC specification comparison
                    </caption>
                    <thead>
                      <tr className="bg-brand text-pure-white">
                        <th className="w-[24%] border-r border-pure-white/20 px-6 py-5 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Product name
                        </th>
                        <th colSpan={2} className="px-6 py-5 text-center text-lg font-bold">
                          Coco Peat 5kg Blocks
                        </th>
                      </tr>
                      <tr className="bg-[#68e6c2] text-brand">
                        <th className="border-r border-brand/15 px-6 py-4 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Properties
                        </th>
                        <th className="border-r border-brand/15 px-6 py-4 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Low EC
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-[.08em]">
                          High EC
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cocoPeatComparison.map((item, index) => (
                        <tr
                          key={item.property}
                          className={`border-t border-charcoal/10 ${index % 2 === 0 ? "bg-pure-white" : "bg-offwhite"}`}
                        >
                          <th className="border-r border-charcoal/10 px-6 py-4 text-center text-sm font-bold text-brand">
                            {item.property}
                          </th>
                          <td className="border-r border-charcoal/10 px-6 py-4 text-center text-sm font-medium leading-relaxed text-charcoal">
                            {item.lowEc}
                          </td>
                          <td className="px-6 py-4 text-center text-sm font-medium leading-relaxed text-charcoal">
                            {item.highEc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : isGramBlock ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[820px] border-collapse text-left">
                    <caption className="sr-only">
                      Coco Peat 650 Gram Bricks Grade I and Grade II specification comparison
                    </caption>
                    <thead>
                      <tr className="bg-brand text-pure-white">
                        <th className="w-[20%] border-r border-pure-white/20 px-5 py-5 text-center text-sm font-bold uppercase tracking-[.08em]">
                          Product name
                        </th>
                        <th className="w-[40%] border-r border-pure-white/20 px-5 py-5 text-center text-base font-bold">
                          Coco Peat 650 Gram Bricks - Grade I
                        </th>
                        <th className="w-[40%] px-5 py-5 text-center text-base font-bold">
                          Coco Peat 650 Gram Bricks - Grade II
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
                    <caption className="sr-only">Husk Chips technical specification</caption>
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
              <div className="flex flex-col gap-3 border-t border-charcoal/10 bg-offwhite px-5 py-4 text-sm text-charcoal/60 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  Values shown are typical and can be adjusted to customer order specifications.
                </span>
                <a
                  href={downloadHref}
                  download={`${p.slug}-specification.txt`}
                  className="font-semibold text-brand hover:text-brand-deep"
                >
                  Download technical sheet
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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

      <section className="grid bg-brand-deep text-pure-white lg:grid-cols-2">
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
      </section>

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
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
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
