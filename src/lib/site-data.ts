import heroPlantation from "@/assets/hero-plantation.jpg";
import stageCoconut from "@/assets/stage-coconut.jpg";
import stageHusk from "@/assets/stage-husk.jpg";
import stageFibre from "@/assets/stage-fibre.jpg";
import stagePith from "@/assets/stage-pith.jpg";
import stageMedium from "@/assets/stage-medium.jpg";
import processDrying from "@/assets/process-drying.jpg";
import processCompression from "@/assets/process-compression.jpg";
import processQuality from "@/assets/process-quality.jpg";
import processWashing from "@/assets/process-washing.png";
import processPackaging from "@/assets/process-packaging.png";
import productBlock from "@/assets/product-block.jpg";
import productGrowbag from "@/assets/product-growbag.jpg";
import productErosion from "@/assets/product-erosion.jpg";
import productFloor from "@/assets/product-floor.jpg";
import productGarden from "@/assets/product-garden.jpg";
import productNutrients from "@/assets/product-nutrients.jpg";
import detailBlockStack from "@/assets/detail-block-stack.png";
import detailGrowbagTomatoes from "@/assets/detail-growbag-tomatoes.png";
import detailErosionSlope from "@/assets/detail-erosion-slope.png";
import detailCoirFlooring from "@/assets/detail-coir-flooring.png";
import detailGardenArticles from "@/assets/detail-garden-articles.png";
import detailMicroNutrients from "@/assets/detail-micro-nutrients.png";
import appGreenhouse from "@/assets/app-greenhouse.jpg";
import appHydroponics from "@/assets/app-hydroponics.jpg";
import appFloriculture from "@/assets/app-floriculture.jpg";
import appNursery from "@/assets/app-nursery.jpg";
import closingRoots from "@/assets/closing-roots.jpg";
import exportPort from "@/assets/export-port.jpg";
import storyPeople from "@/assets/story-people.jpg";
import founderMohanraj from "@/assets/founder-mohanraj.png";
import coirBoard from "@/assets/certifications/coir-board.jpg";
import blackberryIcon from "@/assets/blackberry.svg";
import blueberriesIcon from "@/assets/blueberries.svg";
import cucumberIcon from "@/assets/cucumber.svg";
import cutFlowersIcon from "@/assets/cut-flowers.svg";
import eggplantIcon from "@/assets/eggplant.svg";
import gerberaIcon from "@/assets/gerbera.svg";
import medicinalCannabisIcon from "@/assets/medicinal_cannabis.svg";
import orchidsIcon from "@/assets/orchids.svg";
import pepperBellIcon from "@/assets/pepper-bell.svg";
import plantPropagationIcon from "@/assets/plant-propagation.svg";
import raspberriesIcon from "@/assets/raspberries.svg";
import rosesIcon from "@/assets/roses.svg";
import strawberryIcon from "@/assets/strawberry.svg";
import tomatoIcon from "@/assets/tomato.svg";

export const img = {
  heroPlantation,
  stageCoconut,
  stageHusk,
  stageFibre,
  stagePith,
  stageMedium,
  processDrying,
  processCompression,
  processQuality,
  processPackaging,
  processWashing,
  coirBoard,
  productBlock,
  productGrowbag,
  productErosion,
  productFloor,
  productGarden,
  productNutrients,
  detailBlockStack,
  detailGrowbagTomatoes,
  detailErosionSlope,
  detailCoirFlooring,
  detailGardenArticles,
  detailMicroNutrients,
  appGreenhouse,
  appHydroponics,
  appFloriculture,
  appNursery,
  closingRoots,
  exportPort,
  storyPeople,
  founderMohanraj,
};

export const cropIcons: Record<string, string> = {
  Strawberry: strawberryIcon,
  Blueberry: blueberriesIcon,
  Blackberry: blackberryIcon,
  Raspberry: raspberriesIcon,
  Tomato: tomatoIcon,
  Cucumber: cucumberIcon,
  "Bell Pepper": pepperBellIcon,
  "Aubergine / Brinjal": eggplantIcon,
  "Medicinal Cannabis": medicinalCannabisIcon,
  Roses: rosesIcon,
  Orchids: orchidsIcon,
  Gerbera: gerberaIcon,
  "Ornamental Plants": plantPropagationIcon,
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/our-story" },
  { label: "Products", to: "/products" },
  { label: "Applications", to: "/applications" },
  { label: "Process", to: "/process" },
  { label: "Gallery", to: "/gallery" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  short: string;
  format: string;
  application: string;
  overview: string;
  benefits: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "coco-peat-blocks",
    name: "Coco Peat Blocks",
    category: "Coco Peat",
    image: productBlock,
    short: "Compressed, low-EC coco pith for professional substrate blending.",
    format: "5 kg block · 650 g brick · 30 kg bale",
    application: "Substrate blending, nurseries, potting mixes",
    overview:
      "Screened coir pith, washed to a stable EC and compressed under hydraulic pressure into dense, transport-efficient blocks. One 5 kg block expands into roughly 75 litres of ready growing medium, cutting freight volume by up to eight times.",
    benefits: [
      "High water holding with free air porosity",
      "Buffered and low-EC options for sensitive crops",
      "Consistent particle grading, batch to batch",
      "Eight-fold volume reduction in shipping",
    ],
    specs: [
      { label: "Dimensions", value: "300 × 300 × 120 mm" },
      { label: "Weight", value: "5 kg ± 5%" },
      { label: "Compression ratio", value: "5 : 1" },
      { label: "pH", value: "5.5 – 6.5" },
      { label: "EC", value: "< 0.5 mS/cm (washed)" },
      { label: "Moisture", value: "15 – 20%" },
      { label: "Expansion volume", value: "70 – 80 litres" },
      { label: "Packaging", value: "Shrink wrapped, palletised" },
      { label: "Customisation", value: "Private label, custom grading" },
    ],
    applications: ["Nurseries", "Horticulture", "Plant Propagation", "Home Gardening"],
  },
  {
    slug: "coir-matting",
    name: "Coir Matting",
    category: "Coir Fibre",
    image: productFloor,
    short: "Durable natural coir matting for entrances, interiors and contract flooring.",
    format: "Rolls · Cut mats · Custom sizes",
    application: "Interiors, hospitality, retail and contract flooring",
    overview:
      "Woven from selected coir fibre, our matting range brings a natural, hard-wearing surface to entrance areas and interior flooring programmes. Rolls and cut mats can be supplied in standard or customer-specific dimensions.",
    benefits: [
      "Hard-wearing natural fibre construction",
      "Roll and cut-mat formats available",
      "Natural, bleached and dyed finishes",
      "Private label and custom sizing support",
    ],
    specs: [
      { label: "Dimensions", value: "Up to 2 m width, cut to length" },
      { label: "Weight", value: "600 – 1400 gsm" },
      { label: "Format", value: "Rolls and cut mats" },
      { label: "Fibre", value: "Selected natural coir" },
      { label: "Finish", value: "Natural, bleached or dyed" },
      { label: "Moisture", value: "< 12%" },
      { label: "Backing", value: "Latex backing available" },
      { label: "Packaging", value: "Rolled or carton packed" },
      { label: "Customisation", value: "Weave, colour, backing and size" },
    ],
    applications: ["Landscaping", "Home Gardening"],
  },
  {
    slug: "650-gram-block",
    name: "650 Gram Block",
    category: "Coco Peat",
    image: productBlock,
    short: "Compact coco peat block format for retail packs and smaller growing applications.",
    format: "650 g compressed block",
    application: "Retail gardening, nurseries, potting mixes and sampling",
    overview:
      "A smaller compressed coco peat block for customers who need retail-friendly or low-volume formats. The block expands into a clean growing medium with dependable moisture retention and aeration.",
    benefits: [
      "Compact retail-friendly size",
      "Easy handling and expansion",
      "Peat-free growing medium",
      "Private label packing available",
    ],
    specs: [
      { label: "Weight", value: "650 g ± 5%" },
      { label: "Compression ratio", value: "5 : 1" },
      { label: "pH", value: "5.5 – 6.5" },
      { label: "EC", value: "< 0.5 mS/cm (washed)" },
      { label: "Moisture", value: "15 – 20%" },
      { label: "Expansion volume", value: "Approx. 8 – 10 litres" },
      { label: "Packaging", value: "Shrink wrapped or retail sleeve" },
      { label: "Use", value: "Pots, planters and nursery mixes" },
      { label: "Customisation", value: "Label, barcode and carton count" },
    ],
    applications: ["Home Gardening", "Nurseries", "Plant Propagation"],
  },
  {
    slug: "husk-chips",
    name: "Husk Chips",
    category: "Coco Husk",
    image: stageHusk,
    short: "Chunky coconut husk chips for airy substrate blends and orchid-style growing media.",
    format: "Loose chips · Compressed bales · Custom grading",
    application: "Orchids, aroids, nursery blends and hydroponic substrates",
    overview:
      "Coconut husk chips add structure, drainage and air space to professional growing mixes. Custom grading helps customers balance water retention with fast drainage for crop-specific blends.",
    benefits: [
      "Improves air-filled porosity",
      "Stable natural structure",
      "Useful for coarse substrate blends",
      "Custom particle grading available",
    ],
    specs: [
      { label: "Particle size", value: "Custom graded chips" },
      { label: "Compression", value: "Loose or compressed" },
      { label: "pH", value: "5.5 – 6.8" },
      { label: "EC", value: "< 0.8 mS/cm available" },
      { label: "Moisture", value: "15 – 20%" },
      { label: "Structure", value: "Coarse, open and durable" },
      { label: "Packaging", value: "Bales, sacks or bulk loading" },
      { label: "Use", value: "Drainage and aeration component" },
      { label: "Customisation", value: "Grade, wash level and pack size" },
    ],
    applications: ["Floriculture", "Nurseries", "Hydroponics"],
  },
];

export const productFilters = ["All", "Coco Peat", "Coco Peat 650", "Coir Fibre", "Coco Husk"];

export const transformationStages = [
  {
    n: "01",
    title: "Coconut Husk",
    text: "The husk that surrounds every coconut — once discarded, now the beginning of the material.",
    image: stageHusk,
  },
  {
    n: "02",
    title: "Fibre Separation",
    text: "Long fibre is combed away from the pith, each fraction moving to a different life.",
    image: stageFibre,
  },
  {
    n: "03",
    title: "Coco Pith",
    text: "The fine corky dust between the fibres: sponge-like, stable and endlessly re-wettable.",
    image: stagePith,
  },
  {
    n: "04",
    title: "Growing Medium",
    text: "Washed, graded and compressed into a substrate professional growers can trust.",
    image: stageMedium,
  },
];

export const processStages = [
  {
    n: "01",
    title: "Raw Material Selection",
    text: "Our process begins with the careful selection of mature coconut husks from trusted plantation clusters across Tamil Nadu. Each incoming lot is visually inspected and screened so that only clean, consistent raw material is released for production.",
    image: stageCoconut,
    data: "Sourced within 120 km",
  },
  {
    n: "02",
    title: "Fibre & Pith Extraction",
    text: "Selected husks enter mechanical defibring drums, where long coir fibre is separated from the soft pith. The recovered pith is collected carefully and transferred to the next stage while fibre is graded for other coir applications.",
    image: stageFibre,
    data: "Mechanical separation",
  },
  {
    n: "03",
    title: "Screening & Quality Control",
    text: "The extracted pith passes through calibrated screens to remove excess fibre, sand and unwanted particles. Our production team checks the screened material for a consistent texture before it advances to conditioning.",
    image: stagePith,
    data: "Consistent particle grading",
  },
  {
    n: "04",
    title: "Washing",
    text: "To prepare the pith for horticultural use, it is washed with fresh water in controlled cycles. Electrical conductivity and pH are monitored throughout the process to reduce soluble salts and meet the agreed buyer specification.",
    image: processWashing,
    data: "Low-EC options available",
  },
  {
    n: "05",
    title: "Natural Drying",
    text: "Following washing, the pith is transferred to dedicated drying yards. Controlled sun drying lowers moisture naturally while regular turning promotes even conditioning and prepares the material for efficient compression.",
    image: processDrying,
    data: "Moisture 15–20%",
  },
  {
    n: "06",
    title: "Compression",
    text: "Dried material is screened once more, blended where required and fed into hydraulic presses. It is compressed into 650 gram bricks, 5 kilogram blocks or customised grow slabs for efficient handling and shipment.",
    image: processCompression,
    data: "Up to 8 : 1",
  },
  {
    n: "07",
    title: "Quality Inspection",
    text: "Every production batch undergoes a final assessment for pH, electrical conductivity, moisture, particle size and bulk density. The quality team records the results and confirms that the material is clean and within specification.",
    image: processQuality,
    data: "5 parameters, every batch",
  },
  {
    n: "08",
    title: "Packaging",
    text: "Approved products are shrink-wrapped, labelled and arranged securely on treated wooden pallets. Packaging, unit count and private-label details are matched to the purchase order and destination-market requirements.",
    image: processPackaging,
    data: "Private label ready",
  },
  {
    n: "09",
    title: "Shipping",
    text: "Finished pallets are loaded into 20-foot or 40-foot high-cube containers and dispatched from our facility. Export documentation and logistics coordination support a reliable journey by road and sea to growers worldwide.",
    image: exportPort,
    data: "20 ft & 40 ft FCL",
  },
];

export const applications = [
  {
    n: "01",
    slug: "greenhouses",
    title: "Greenhouses",
    line: "Protected cropping where every litre of water and every gram of nutrient is accounted for.",
    image: appGreenhouse,
    why: "Coco holds water and air at the same time, so irrigation can be frequent and light without drowning the root zone.",
    products: ["Coco Peat Grow Bags", "Coco Peat Blocks"],
    properties: [
      "High air-filled porosity",
      "Stable structure over a full season",
      "Predictable dry-back",
    ],
  },
  {
    n: "02",
    slug: "hydroponics",
    title: "Hydroponics",
    line: "A buffer of structure in a system otherwise built on water and nutrient control.",
    image: appHydroponics,
    why: "Low, buffered EC means the substrate contributes nothing unexpected to a carefully balanced feed.",
    products: ["Coco Peat Grow Bags", "Micro Nutrients"],
    properties: ["Buffered cation exchange", "Inert and pathogen free", "Re-wets instantly"],
  },
  {
    n: "03",
    slug: "floriculture",
    title: "Floriculture",
    line: "Cut flowers demand uniformity from the first stem to the ten-thousandth.",
    image: appFloriculture,
    why: "Consistent grading gives even root development across an entire bench, which shows in stem length and grade.",
    products: ["Coco Peat Blocks", "Micro Nutrients"],
    properties: ["Uniform particle grading", "Low sodium", "Long structural life"],
  },
  {
    n: "04",
    slug: "nurseries",
    title: "Nurseries",
    line: "Millions of young plants, each one needing the same start.",
    image: appNursery,
    why: "Fine grades give excellent seed-to-medium contact and a root ball that holds together at transplant.",
    products: ["Coco Peat Blocks", "Garden Articles"],
    properties: ["Fine grade available", "Excellent capillarity", "Weed and pathogen free"],
  },
  {
    n: "05",
    slug: "plant-propagation",
    title: "Plant Propagation",
    line: "Cuttings and plugs, where root initiation is everything.",
    image: stageMedium,
    why: "Warm, aerated and consistently moist — the three conditions rooting needs, held together in one medium.",
    products: ["Garden Articles", "Coco Peat Blocks"],
    properties: ["High oxygen at the root", "Neutral pH range", "Plug cohesion"],
  },
  {
    n: "06",
    slug: "landscaping",
    title: "Landscaping",
    line: "Public planting, slopes and civil works that have to establish and then be forgotten.",
    image: productErosion,
    why: "Coir holds soil and moisture during the vulnerable first seasons, then returns to the ground.",
    products: ["Erosion Control", "Coco Peat Blocks"],
    properties: ["Biodegradable", "High tensile wet strength", "Moisture retention"],
  },
  {
    n: "07",
    slug: "horticulture",
    title: "Horticulture",
    line: "Field-scale soil improvement and container growing at commercial volume.",
    image: productBlock,
    why: "Bulk blocks expand on site, so growers ship substrate, not air.",
    products: ["Coco Peat Blocks", "Micro Nutrients"],
    properties: ["Bulk economics", "Improves soil structure", "Peat-free"],
  },
  {
    n: "08",
    slug: "home-gardening",
    title: "Home Gardening",
    line: "The same material, sized and packed for a windowsill.",
    image: productGarden,
    why: "Retail formats bring professional-grade substrate to consumers looking for a peat-free option.",
    products: ["Garden Articles", "Floor Coverings"],
    properties: ["Retail packaging", "Easy expansion", "Clean to handle"],
  },
];

export const cropApplications = [
  {
    n: "01",
    title: "Soft Fruits",
    subtitle: "An environmentally responsible choice",
    image: appGreenhouse,
    crops: ["Strawberry", "Blueberry", "Blackberry", "Raspberry"],
    description:
      "Coco peat 5 kg blocks provide porosity and water capacity for strawberries and blueberries while keeping the root zone airy. Lay-flat grow bags support blackberry and raspberry cultivation with a stable, renewable growing medium.",
    recommended: ["Coco Peat Blocks", "Coco Peat Grow Bags"],
    properties: [
      "Water retention",
      "Root-zone aeration",
      "Biodegradable",
      "Long-lasting structure",
    ],
  },
  {
    n: "02",
    title: "Vegetables",
    subtitle: "Sustainable protected cultivation",
    image: appHydroponics,
    crops: ["Tomato", "Cucumber", "Bell Pepper", "Aubergine / Brinjal"],
    description:
      "Coir-pith grow bags combine water retention, balanced aeration and a suitable pH for tomatoes, cucumbers and aubergines. Coco peat blocks improve drainage and soil structure for bell peppers while helping avoid waterlogged roots.",
    recommended: ["Coco Peat Grow Bags", "Coco Peat Blocks"],
    properties: ["Balanced aeration", "Optimal drainage", "Neutral pH", "Efficient root space"],
  },
  {
    n: "03",
    title: "Specialty & Ornamentals",
    subtitle: "Creating healthy roots and lasting beauty",
    image: appFloriculture,
    crops: ["Medicinal Cannabis", "Roses", "Orchids", "Gerbera", "Ornamental Plants"],
    description:
      "Custom-sized lay-flat grow bags give specialty crops oxygen and room for root development. Coco peat blocks support precision ornamental cultivation, while coir hanging baskets provide a natural format for roses, orchids and gerbera.",
    recommended: ["Coco Peat Grow Bags", "Coco Peat Blocks", "Garden Articles"],
    properties: [
      "Custom sizes",
      "Root oxygenation",
      "Precision cultivation",
      "Natural presentation",
    ],
  },
];

export const usageApplications = [
  { title: "Professional Horticulture & Greenhouses", product: "Coco Peat Blocks / Grow Bags" },
  { title: "Floriculture", product: "Grow Bags / Hanging Baskets" },
  { title: "Substrate Manufacturers", product: "Coco Peat Blocks" },
  { title: "Landscaping & Potting Mixes", product: "Coco Peat Blocks" },
  { title: "Retail Garden Centres", product: "Garden Articles" },
  { title: "Plant Propagation", product: "Coir Pots / Germination Plugs" },
  { title: "Industrial Oil Absorption", product: "Coco Peat" },
  { title: "Animal Bedding", product: "Natural Coir Material" },
];

export const trustPoints = [
  {
    label: "Unmatched Quality",
    value:
      "Qualitative coir and coco products, made to customer requirements with competitive and strategic pricing.",
  },
  {
    label: "Exceeding Expectations",
    value:
      "Quality, pricing and delivery are shaped through close interaction with every customer.",
  },
  {
    label: "On-time Delivery",
    value:
      "Established logistics partnerships support cost-effective, prompt and safe international delivery.",
  },
  {
    label: "Tech-driven Precision",
    value: "Modern production technology enables coco peat to be made to custom specifications.",
  },
  {
    label: "Performance Excellence",
    value:
      "Strict production procedures and consistent quality control extend from processing through delivery.",
  },
  {
    label: "Customer Support",
    value:
      "A professional team provides thorough end-to-end support for customers across global markets.",
  },
];

export const resources = [
  {
    type: "Specification",
    title: "Coco Peat Block 5 kg — Product Specification",
    desc: "Dimensions, expansion, chemical profile and packaging.",
    file: "PDF",
    size: "412 KB",
    category: "Product Specifications",
  },
  {
    type: "Data Sheet",
    title: "Grow Bag Technical Data Sheet",
    desc: "Fill blends, drainage profile and irrigation guidance.",
    file: "PDF",
    size: "680 KB",
    category: "Technical Data Sheets",
  },
  {
    type: "Certificate",
    title: "Phytosanitary & Fumigation Certificates",
    desc: "Sample export documentation set for reference.",
    file: "PDF",
    size: "1.1 MB",
    category: "Certificates",
  },
  {
    type: "Guide",
    title: "Growing in Coco — Irrigation & Nutrition",
    desc: "How coco differs from peat and rockwool in practice.",
    file: "PDF",
    size: "2.4 MB",
    category: "Growing Guides",
  },
  {
    type: "Guide",
    title: "Erosion Control Installation Guide",
    desc: "Slope preparation, anchoring and seeding sequence.",
    file: "PDF",
    size: "1.7 MB",
    category: "Application Guides",
  },
  {
    type: "Packaging",
    title: "Pallet & Container Loading Plans",
    desc: "Standard configurations for 20ft and 40ft HC containers.",
    file: "PDF",
    size: "540 KB",
    category: "Packaging Information",
  },
  {
    type: "FAQ",
    title: "Buffered vs Unbuffered Coco — FAQ",
    desc: "Answers to the questions buyers ask most often.",
    file: "PDF",
    size: "220 KB",
    category: "FAQs",
  },
  {
    type: "Download",
    title: "Full Product Catalogue 2026",
    desc: "Complete range, formats and export capability.",
    file: "PDF",
    size: "6.8 MB",
    category: "Downloads",
  },
];

export const resourceCategories = [
  "All",
  "Product Specifications",
  "Technical Data Sheets",
  "Certificates",
  "Growing Guides",
  "Application Guides",
  "Packaging Information",
  "FAQs",
  "Downloads",
];

export const timeline = [
  {
    year: "Origin",
    title: "Rooted in South India",
    text: "Arjuna Exports is based in Tamil Nadu, close to the coconut resources at the centre of its coir and coco product range.",
  },
  {
    year: "Why Coconut",
    title: "A material hiding in plain sight",
    text: "Coconut husks are by-products of coconut industries. Their coir fibre and pith can become renewable growing materials with strong water retention and aeration.",
  },
  {
    year: "The Company",
    title: "Decades of coir expertise",
    text: "The company describes decades of experience manufacturing, supplying and exporting coir and coco products from South India.",
  },
  {
    year: "Manufacturing",
    title: "Washing and compression at scale",
    text: "Coir waste is washed, screened and graded before becoming coco peat products, with processes controlled for quality and environmental responsibility.",
  },
  {
    year: "People",
    title: "The hands behind the specification",
    text: "Dedicated professionals and manufacturing infrastructure support customised specifications, reliable production and customer service.",
  },
  {
    year: "Global",
    title: "Serving growers worldwide",
    text: "Customers are located across the United States, Europe, Australia, the United Arab Emirates and other Asian countries.",
  },
  {
    year: "Future",
    title: "Growing beyond boundaries",
    text: "Modern production technology, custom mixes, OEM packaging and close grower relationships shape the next stage of the business.",
  },
];
