import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Handshake,
  Linkedin,
  Sprout,
  Target,
  Tractor,
} from "lucide-react";
import { img } from "@/lib/site-data";
import msmeLogo from "@/assets/certifications/msme.png";
import eepcLogo from "@/assets/certifications/eepc-official.png";
import coirBoardLogo from "@/assets/certifications/coir-board.jpg";
import fieoLogo from "@/assets/certifications/fieo-official.gif";
import isoLogo from "@/assets/certifications/iso-9001.png";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { Label, Reveal } from "@/components/site/primitives";
export const Route = createFileRoute("/our-story")({
  head: () =>
    pageMeta(
      "About Us",
      "Arjuna Exports manufactures and exports premium coir and coco growing products from South India.",
    ),
  component: Story,
});

const certifications = [
  { name: "MSME · Udyam", logo: msmeLogo },
  { name: "EEPC India", logo: eepcLogo },
  { name: "Coir Board", logo: coirBoardLogo },
  { name: "FIEO", logo: fieoLogo },
  { name: "ISO 9001:2015", logo: isoLogo },
];

const focusPoints = [
  "Process-Driven Production",
  "Transparent Export Specification",
  "Consistent Export Grade Quality",
  "Long Term B2B Partnership",
];

const founderStory = [
  {
    title: "Farming Family Roots",
    text: "Born into a family with deep ties to coconut cultivation, Mohanraj grew up with first-hand knowledge of agriculture and the coconut industry.",
    Icon: Tractor,
  },
  {
    title: "Engineering Background",
    text: "An Electronics and Communication Engineering graduate from Anna University, bringing technical discipline into a traditional natural fibre sector.",
    Icon: GraduationCap,
  },
  {
    title: "Global Corporate Experience",
    text: "Over a decade with multinational organisations including Accenture and IBM, specialising in SAP Business Intelligence, analytics and process excellence.",
    Icon: Building2,
  },
  {
    title: "The Vision",
    text: "Founded Arjuna Exports in 2019 to bring transparency, consistency, process discipline and customer centricity to the global coco peat export industry.",
    Icon: Target,
  },
  {
    title: "The Commitment",
    text: "Driven to build long-term partnerships by combining horticultural knowledge with strict corporate export practices.",
    Icon: Handshake,
  },
];

function Story() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Rooted in nature. Built for global growth."
        intro="A South India manufacturer, supplier and exporter partnering with growers to create dependable coir and coco solutions around their specifications."
        image={img.storyPeople}
      />

      <section className="bg-offwhite py-28 lg:py-40">
        <div className="shell grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">
          <Reveal>
            <Label className="text-brand">Who we are</Label>
            <h2 className="display mt-7 text-[clamp(3.5rem,6vw,5rem)]">
              Leading with the versatility of coir.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-charcoal/70">
              Arjuna Exports manufactures, supplies and exports premium coir products from South
              India—the natural source region for coir and coco materials. The company works with
              cultivators to understand growing requirements and supply products to agreed
              specifications.
            </p>
            <p className="mt-7 leading-relaxed text-charcoal/60">
              Its range includes 5 kg blocks, 650 g bricks, vertical and open-top grow bags, husk
              chip blocks and coco seed-germination coins, with washed and unwashed variants and
              custom blends using cut fibre, vermiculite, perlite and neem cake.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-charcoal/15 sm:grid-cols-4">
              {["USA", "Canada", "South America", "Europe"].map((market) => (
                <div key={market} className="rounded-md bg-offwhite py-5 pr-4">
                  <span className="micro-label text-brand">Market</span>
                  <p className="mt-2 text-sm font-semibold">{market}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
          <Reveal>
            <Label className="text-brand">We Focus On</Label>
            <h2 className="display mt-7 text-[clamp(3rem,5.5vw,5rem)]">
              Export work shaped for repeat business.
            </h2>
          </Reveal>
          <div className="grid gap-px bg-charcoal/15 sm:grid-cols-2">
            {focusPoints.map((point, index) => (
              <Reveal
                key={point}
                delay={(index % 2) * 80}
                className="flex min-h-44 gap-5 rounded-md bg-ivory p-7 lg:p-9"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="display self-center text-3xl">{point}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="relative overflow-hidden bg-brand-deep py-24 text-pure-white lg:py-32"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-pure-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-aqua/15" />

        <div className="shell relative">
          <Reveal className="grid gap-8 border-b border-pure-white/15 pb-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end lg:gap-16">
            <div>
              <Label className="text-aqua">Founder & Leadership</Label>
              <h2 className="display mt-7 max-w-[10ch] text-[clamp(3.5rem,6vw,5rem)]">
                Mohanraj Palaniappan
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-2xl text-lg leading-relaxed text-pure-white/72 lg:text-xl">
                Mohanraj founded Arjuna Exports with a rare mix of agricultural familiarity,
                engineering thinking and global corporate discipline.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-pure-white/55">
                His leadership focus is simple: make coco peat exports more transparent, consistent
                and dependable for long-term international buyers.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-12">
            <Reveal>
              <figure className="group relative overflow-hidden rounded-md bg-pure-white/8 shadow-[0_32px_90px_rgba(0,0,0,.3)]">
                <img
                  src={img.founderMohanraj}
                  alt="Mohanraj Palaniappan, founder of Arjuna Exports"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-[center_14%] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-8">
                  <div>
                    <p className="micro-label text-aqua">Founder & Managing Director</p>
                    <p className="mt-2 text-sm text-pure-white/65">Arjuna Exports · India</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/arjunaexports"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Arjuna Exports on LinkedIn"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a66c2] text-pure-white shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <Linkedin className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </a>
                </figcaption>
              </figure>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {founderStory.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <Reveal
                    key={item.title}
                    delay={(index % 2) * 70}
                    className={`group flex min-h-[230px] flex-col rounded-md border border-pure-white/12 bg-pure-white/[0.06] p-6 transition-colors hover:bg-pure-white/[0.1] lg:p-7 ${
                      index === founderStory.length - 1 ? "sm:col-span-2 sm:min-h-0" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#ffc21a] text-brand-deep">
                        <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                      </span>
                      <span className="h-px flex-1 bg-pure-white/12" aria-hidden />
                    </div>
                    <div className="mt-7">
                      <h3 className="display text-2xl text-ivory lg:text-3xl">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-pure-white/62">{item.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-soft py-24 lg:py-32">
        <div className="shell">
          <Reveal className="mb-12 max-w-3xl">
            <Label className="text-brand">Our direction</Label>
            <h2 className="display mt-6 text-[clamp(3rem,5.5vw,5rem)]">
              Purpose in every partnership.
            </h2>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal className="rounded-md border border-brand/12 bg-pure-white p-8 shadow-[0_24px_70px_rgba(31,45,40,.07)] lg:p-12">
              <div className="flex items-center justify-between gap-6">
                <Label className="text-brand">Mission</Label>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Sprout className="h-8 w-8" strokeWidth={1.7} aria-hidden />
                </span>
              </div>
              <h3 className="display mt-8 text-4xl lg:text-5xl">
                Redefining sustainability through innovation.
              </h3>
              <p className="mt-7 leading-relaxed text-charcoal/65">
                To produce advanced coco fibre and coco peat solutions around grower requirements,
                with close attention to environmental needs, innovation, quality, human development
                and productive growth.
              </p>
            </Reveal>
            <Reveal
              delay={100}
              className="rounded-md bg-brand-deep p-8 text-pure-white shadow-[0_24px_70px_rgba(31,45,40,.14)] lg:p-12"
            >
              <div className="flex items-center justify-between gap-6">
                <Label className="text-aqua">Vision</Label>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-pure-white/10 text-aqua">
                  <Globe2 className="h-8 w-8" strokeWidth={1.7} aria-hidden />
                </span>
              </div>
              <h3 className="display mt-8 text-4xl lg:text-5xl">Bridging global excellence.</h3>
              <p className="mt-7 leading-relaxed text-pure-white/70">
                To be a globally recognised professional export organisation in the coir industry,
                differentiated through passion, energy, innovation, ethical practices and the
                empowerment of growers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="certifications" className="bg-offwhite py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <Label className="text-brand">Memberships & Certifications</Label>
            <h2 className="display mt-7 max-w-4xl text-5xl">
              Standards that support international confidence.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-charcoal/15 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 60}
                className="group flex min-h-60 flex-col justify-between rounded-md bg-offwhite p-6"
              >
                <div className="flex h-32 items-center justify-center p-4">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <p className="font-semibold">{item.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="grid bg-brand-soft lg:grid-cols-2">
        <img
          src={img.exportPort}
          alt="Export containers at port"
          loading="lazy"
          decoding="async"
          className="h-full min-h-[50vh] w-full object-cover"
        />
        <div className="flex items-center p-10 lg:p-20">
          <div>
            <Label className="text-brand">Global by nature</Label>
            <h2 className="display mt-8 text-6xl">Made here. Grown everywhere.</h2>
            <p className="mt-6 max-w-lg leading-relaxed text-charcoal/65">
              From Namakkal district to customers across the United States, Europe, Australia, the
              UAE and Asia, products travel in customer-configured 20-foot and 40-foot containers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
