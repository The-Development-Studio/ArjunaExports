import { createFileRoute } from '@tanstack/react-router'
import {
  CheckCircle2,
  Container,
  FileText,
  Handshake,
  Mail,
  MapPin,
  MessageCircleMore,
  Orbit,
  Phone,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { img, products } from "@/lib/site-data";
import { PageHero, pageMeta } from "@/components/site/PageHero";
import { Label, PrimaryButton, Reveal } from "@/components/site/primitives";
import { DeskPhoneIcon } from "@/components/site/DeskPhoneIcon";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact",
      "Talk to Arjuna Exports about coco products, specifications, samples and global supply.",
    ),
  component: Contact,
});

const contactCards = [
  {
    key: "email",
    label: "Email",
    value: "info@arjunaexports.com",
    href: "mailto:info@arjunaexports.com",
    icon: Mail,
    orderClass: "order-1 md:order-1",
    isEmail: true,
  },
  {
    key: "mobile",
    label: "Mobile",
    value: "+91 96298 74555",
    href: "tel:+919629874555",
    icon: DeskPhoneIcon,
    orderClass: "order-2 md:order-2",
    isEmail: false,
  },
  {
    key: "hours",
    label: "Hours",
    value: "We’ll Respond within 24 Hours",
    icon: MessageCircleMore,
    orderClass: "order-4 md:order-3",
    isEmail: false,
  },
  {
    key: "landline",
    label: "Landline",
    value: "+91 4288 250125",
    href: "tel:+914288250125",
    icon: DeskPhoneIcon,
    orderClass: "order-3 md:order-4",
    isEmail: false,
  },
];

const responseSteps = [
  {
    icon: FileText,
    title: "Specification review",
    text: "We check product format, EC level, crop application and packing requirements.",
  },
  {
    icon: Container,
    title: "Export planning",
    text: "We align quantity, palletisation, destination and container loading plans.",
  },
  {
    icon: CheckCircle2,
    title: "Quote follow-up",
    text: "You receive the next steps or a clear quotation within 24 hours.",
  },
];

const commonFields = [
  { label: "First name", name: "firstName", required: true },
  { label: "Last name", name: "lastName", required: true },
  { label: "Company", name: "company", required: true },
  { label: "Country", name: "country", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Website", name: "website", type: "url", required: false },
  { label: "Phone", name: "phone", type: "tel", required: false },
];

const enquiryTypes = [
  { value: "partnership", label: "Partnership", icon: Handshake },
  { value: "product", label: "Products", icon: ShoppingCart },
  { value: "general", label: "General", icon: Orbit },
] as const;

const productCategoryOptions = [
  "Bulk Purchase (FCL)",
  "Private Label",
  "Retail (LCL)",
  "Others",
] as const;

const marketSegmentOptions = [
  "Professional Greenhouse Grower",
  "Lawn and Landscapers",
  "Substrate Manufacturers",
  "Retailer/Garden Centre/ Nurseries",
  "Horticulture & Floriculture",
  "Plotting Mix Suppliers",
  "Importer/Distributor/Wholesaler",
  "Others",
] as const;

const partnershipRoleOptions = [
  "Business Owner/Partner/CEO",
  "Product Development",
  "Purchase Department",
  "Buying Decision Maker",
  "Buying/Sourcing Agent",
  "Others",
] as const;

type EnquiryType = (typeof enquiryTypes)[number]["value"];

const inputClass =
  "mt-2 h-12 w-full rounded-sm border border-brand/18 bg-pure-white px-4 text-base font-medium text-brand-deep outline-none transition-colors placeholder:text-charcoal/35 focus:border-brand";

function Contact() {
  const [sent, setSent] = useState(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("partnership");
  const [generalRole, setGeneralRole] = useState("Vendor");
  const [productCategory, setProductCategory] = useState("Bulk Purchase (FCL)");
  const [marketSegment, setMarketSegment] = useState("Professional Greenhouse Grower");
  const [partnershipRole, setPartnershipRole] = useState("Business Owner/Partner/CEO");

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Share Your Requirement. We’ll Take It From There!"
        titleClassName="contact-hero-title leading-[1.08] pb-1 text-[#20555A]"
        intro="Tell us what you need to source, where it needs to go and in what volume. We’ll evaluate your requirements and guide you through product specification, packaging and shipment planning."
        image={img.exportPort}
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
              {contactCards.map((card) => (
                <Reveal key={card.key} className={`h-full ${card.orderClass}`}>
                  {card.href ? (
                    <a
                      href={card.href}
                      aria-label={`${card.label}: ${card.value}`}
                      className="group flex h-full min-h-[140px] overflow-hidden rounded-sm bg-[#68e6c2] shadow-[0_12px_30px_rgba(0,100,101,.08)] transition-transform hover:-translate-y-1"
                    >
                      <span className="flex w-24 shrink-0 items-center justify-center bg-[#20555A] sm:w-28 lg:w-24 xl:w-28">
                        <card.icon
                          className="h-10 w-10 text-pure-white sm:h-12 sm:w-12"
                          strokeWidth={1.7}
                          aria-hidden
                        />
                      </span>
                      <span className="flex min-w-0 flex-1 items-center justify-center px-3.5 py-5 text-center sm:px-4 sm:py-6 lg:px-3 xl:px-5">
                        <span
                          className={`min-w-0 font-extrabold leading-tight tracking-[-.025em] text-[#20555A] text-center ${
                            card.isEmail
                              ? "whitespace-nowrap text-[clamp(0.92rem,1.22vw,1.35rem)]"
                              : "whitespace-nowrap text-[clamp(1.05rem,1.4vw,1.5rem)]"
                          }`}
                          style={{ color: "#20555A" }}
                        >
                          {card.value}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex h-full min-h-[140px] overflow-hidden rounded-sm bg-[#68e6c2] shadow-[0_12px_30px_rgba(0,100,101,.08)]">
                      <span className="flex w-24 shrink-0 items-center justify-center bg-[#20555A] sm:w-28 lg:w-24 xl:w-28">
                        <card.icon
                          className="h-10 w-10 text-pure-white sm:h-12 sm:w-12"
                          strokeWidth={1.7}
                          aria-hidden
                        />
                      </span>
                      <span className="flex min-w-0 flex-1 items-center justify-center px-4 py-5 text-center sm:px-5 sm:py-6">
                        <span
                          className="font-extrabold leading-snug tracking-[-.025em] text-[#20555A] text-[clamp(1rem,1.32vw,1.45rem)]"
                          style={{ color: "#20555A" }}
                        >
                          {card.value}
                        </span>
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="h-full">
              <address className="flex h-full min-h-[140px] overflow-hidden rounded-sm bg-[#68e6c2] not-italic shadow-[0_12px_30px_rgba(0,100,101,.08)]">
                <span className="flex w-24 shrink-0 items-center justify-center bg-[#20555A] sm:w-28 lg:w-24 xl:w-28">
                  <MapPin
                    className="h-10 w-10 text-pure-white sm:h-12 sm:w-12"
                    strokeWidth={1.7}
                    aria-hidden
                  />
                </span>
                <span className="flex min-w-0 flex-1 items-center justify-center px-6 py-6 sm:px-8 xl:px-9">
                  <div
                    className="flex flex-col justify-center text-left text-[15px] font-bold leading-[1.7] tracking-normal text-[#20555A] sm:text-base xl:text-[17px] xl:leading-[1.75]"
                    style={{ color: "#20555A" }}
                  >
                    <span>1/140-12, GM Complex,</span>
                    <span>Opp. to TMB Bank</span>
                    <span>Kumaramangalam Post,</span>
                    <span>Tiruchengode TK</span>
                    <span>Namakkal District, Tamil Nadu</span>
                    <span>637205, India</span>
                  </div>
                </span>
              </address>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-offwhite pb-20 lg:pb-24">
        <div className="shell grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <Reveal className="lg:order-2">
            <form
              onSubmit={submit}
              className="rounded-md border border-charcoal/10 bg-pure-white p-5 shadow-[0_24px_90px_rgba(31,45,40,.08)] sm:p-8 lg:p-10"
            >
              {sent ? (
                <div className="grid min-h-[480px] place-items-center rounded-sm bg-brand-soft p-8 text-center">
                  <div className="max-w-lg">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-pure-white">
                      <CheckCircle2 className="h-8 w-8" strokeWidth={1.7} aria-hidden />
                    </span>
                    <Label className="mt-8 justify-center text-brand">Thank you</Label>
                    <h2 className="display mt-6 text-[clamp(2.25rem,4vw,3.75rem)]">
                      Your enquiry is ready for our team.
                    </h2>
                    <p className="mt-5 text-center text-charcoal/65">
                      We will respond within 24 hours.
                    </p>
                    <PrimaryButton type="button" onClick={() => setSent(false)} className="mt-8">
                      Send another enquiry
                    </PrimaryButton>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="grid grid-cols-3 rounded-sm bg-brand p-3 sm:p-5"
                    aria-label="Choose enquiry type"
                  >
                    {enquiryTypes.map(({ value, label, icon: Icon }) => {
                      const selected = enquiryType === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setEnquiryType(value)}
                          className="group flex min-w-0 flex-col items-center gap-3 px-1 py-2 text-center text-pure-white"
                        >
                          <span className="site-menu-font text-[10px] uppercase tracking-[.08em] sm:text-xs">
                            {label}
                          </span>
                          <span
                            className={`grid h-14 w-14 place-items-center rounded-full transition-all sm:h-16 sm:w-16 ${
                              selected
                                ? "-translate-y-0.5 bg-earth-natural text-pure-white shadow-lg"
                                : "bg-[#10194f] text-pure-white group-hover:-translate-y-0.5"
                            }`}
                          >
                            <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} aria-hidden />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="category" value={enquiryType} />

                  <div className="mt-9">
                    <Label className="text-brand">{enquiryType} enquiry</Label>
                    <h2 className="mt-4 text-2xl leading-tight sm:text-3xl">
                      {enquiryType === "partnership"
                        ? "We don’t just fulfil orders; we participate in every partnership."
                        : enquiryType === "product"
                          ? "Products inquiry form"
                          : "General inquiry form"}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/58">
                      {enquiryType === "partnership"
                        ? "Complete the partnership form below, and our team will reach out to you."
                        : enquiryType === "product"
                          ? "Tell us which products, documents and order format you require."
                          : "Send your comments or questions and we’ll connect you with the right team."}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-x-5 gap-y-6 sm:grid-cols-2">
                    {commonFields.map((f) => (
                      <label key={f.name} className="block">
                        <span className="micro-label text-brand">
                          {f.label}
                          {f.required ? "*" : ""}
                        </span>
                        <input
                          name={f.name}
                          required={f.required}
                          type={f.type ?? "text"}
                          className={inputClass}
                        />
                      </label>
                    ))}
                  </div>

                  {enquiryType === "partnership" && (
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <label className="block">
                        <span className="micro-label text-brand">Market segment</span>
                        <select
                          name="marketSegment"
                          className={inputClass}
                          value={marketSegment}
                          onChange={(event) => setMarketSegment(event.target.value)}
                        >
                          {marketSegmentOptions.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </label>
                      {marketSegment === "Others" && (
                        <label className="block">
                          <span className="micro-label text-brand">Others (Please Specify)</span>
                          <input name="marketSegmentOther" required className={inputClass} />
                        </label>
                      )}
                      <label className="block">
                        <span className="micro-label text-brand">Best describes me</span>
                        <select
                          name="partnershipRole"
                          className={inputClass}
                          value={partnershipRole}
                          onChange={(event) => setPartnershipRole(event.target.value)}
                        >
                          {partnershipRoleOptions.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </label>
                      {partnershipRole === "Others" && (
                        <label className="block">
                          <span className="micro-label text-brand">Others (Please Specify)</span>
                          <input name="partnershipRoleOther" required className={inputClass} />
                        </label>
                      )}
                      <label className="block sm:col-span-2">
                        <span className="micro-label text-brand">
                          Detailed requirements and inputs
                        </span>
                        <textarea
                          name="partnershipRequirements"
                          required
                          rows={5}
                          className="mt-2 block w-full resize-y rounded-sm border border-brand/18 bg-pure-white px-4 py-3 text-base font-medium text-brand-deep outline-none transition-colors focus:border-brand"
                        />
                      </label>
                    </div>
                  )}

                  {enquiryType === "product" && (
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <fieldset className="sm:col-span-2">
                        <legend className="micro-label text-brand">
                          Are you a current Arjuna Exports customer?
                        </legend>
                        <div className="mt-3 flex gap-8 text-sm font-medium text-brand-deep">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="currentCustomer" value="yes" defaultChecked />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="currentCustomer" value="no" /> No
                          </label>
                        </div>
                      </fieldset>
                      <label className="block">
                        <span className="micro-label text-brand">Product name</span>
                        <select name="product" className={inputClass} defaultValue="" required>
                          <option value="" disabled>
                            Select an option
                          </option>
                          {products.map((product) => (
                            <option key={product.slug} value={product.slug}>
                              {product.name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="micro-label text-brand">Product category</span>
                        <select
                          name="productCategory"
                          className={inputClass}
                          value={productCategory}
                          onChange={(event) => setProductCategory(event.target.value)}
                        >
                          {productCategoryOptions.map((category) => (
                            <option key={category}>{category}</option>
                          ))}
                        </select>
                      </label>
                      {productCategory === "Others" && (
                        <label className="block">
                          <span className="micro-label text-brand">Others (Please Specify)</span>
                          <input name="productCategoryOther" required className={inputClass} />
                        </label>
                      )}
                      <label className="block sm:col-span-2">
                        <span className="micro-label text-brand">
                          Required documents or information
                        </span>
                        <textarea
                          name="requiredDocuments"
                          rows={4}
                          className="mt-2 block w-full resize-y rounded-sm border border-brand/18 bg-pure-white px-4 py-3 text-base font-medium text-brand-deep outline-none transition-colors focus:border-brand"
                        />
                      </label>
                      <label className="block sm:col-span-2">
                        <span className="micro-label text-brand">Additional information</span>
                        <textarea
                          name="additionalInformation"
                          rows={4}
                          className="mt-2 block w-full resize-y rounded-sm border border-brand/18 bg-pure-white px-4 py-3 text-base font-medium text-brand-deep outline-none transition-colors focus:border-brand"
                        />
                      </label>
                    </div>
                  )}

                  {enquiryType === "general" && (
                    <div className="mt-6 grid gap-6">
                      <label className="block sm:max-w-[calc(50%-0.625rem)]">
                        <span className="micro-label text-brand">Best describes me</span>
                        <select
                          name="generalRole"
                          className={inputClass}
                          value={generalRole}
                          onChange={(event) => setGeneralRole(event.target.value)}
                        >
                          <option>Vendor</option>
                          <option>Current Client</option>
                          <option>Press</option>
                          <option>Others</option>
                        </select>
                      </label>
                      {generalRole === "Others" && (
                        <label className="block sm:max-w-[calc(50%-0.625rem)]">
                          <span className="micro-label text-brand">Others (Please Specify)</span>
                          <input name="generalRoleOther" required className={inputClass} />
                        </label>
                      )}
                      <label className="block">
                        <span className="micro-label text-brand">Your comments / questions</span>
                        <textarea
                          name="generalComments"
                          required
                          rows={6}
                          className="mt-2 block w-full resize-y rounded-sm border border-brand/18 bg-pure-white px-4 py-3 text-base font-medium text-brand-deep outline-none transition-colors focus:border-brand"
                        />
                      </label>
                    </div>
                  )}

                  <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-charcoal/65">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      required
                      className="mt-1 h-4 w-4 accent-brand"
                    />
                    <span>
                      By opting in, I agree to receive marketing offers, updates and other
                      communications from Arjuna Exports, and understand that my personal data will
                      be stored and processed in line with the privacy policy.
                    </span>
                  </label>

                  <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-charcoal/10 pt-7">
                    <div className="max-w-md">
                      <p className="font-semibold text-brand-deep">
                        We will respond within 24 hours.
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/55">
                        Your details are used to respond to this enquiry and prepare the right
                        product or export follow-up.
                      </p>
                    </div>
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                  </div>
                </>
              )}
            </form>
          </Reveal>

          <aside className="space-y-6 lg:order-1 lg:sticky lg:top-28">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-md bg-brand-deep text-pure-white">
                <div className="relative aspect-[4/3]">
                  <img
                    src={img.appGreenhouse}
                    alt="Greenhouse crops grown in coco medium"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/12 to-transparent" />
                  <div className="absolute right-5 bottom-5 left-5">
                    <span className="micro-label text-aqua">Export support</span>
                    <h2 className="display mt-3 text-3xl">From sample to container.</h2>
                  </div>
                </div>
                <div className="grid gap-px bg-pure-white/12">
                  {responseSteps.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="bg-brand-deep p-6">
                      <div className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-pure-white/18 text-aqua">
                          <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                        </span>
                        <span>
                          <span className="block font-semibold">{title}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-pure-white/62">
                            {text}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-md border border-brand/12 bg-brand-soft p-6">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-pure-white text-brand">
                    <Sparkles className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                  </span>
                  <p className="text-sm leading-relaxed text-brand-deep/72">
                    We don’t just fulfil orders; we actively engage with our partners to build
                    lasting, mutually beneficial relationships.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="px-1 text-sm font-medium leading-relaxed text-charcoal/68">
                To facilitate an accurate and efficient quotation, please provide your target EC,
                particle grade, packaging requirements, private-label specifications and destination
                market, where applicable. It would reduce back-and-forth during quoting.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
