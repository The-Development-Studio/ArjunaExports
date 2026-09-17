import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Clock3, Facebook, Linkedin, Mail } from "lucide-react";
import { Label, PrimaryButton, Reveal } from "@/components/site/primitives";
import { resourceArticles, resourceCategories } from "@/lib/resource-data";

export const Route = createFileRoute("/resources_/$slug")({
  loader: ({ params }) => {
    const article = resourceArticles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData: article }) => ({
    meta: [
      { title: `${article?.title ?? "Article"} | Arjuna Exports` },
      { name: "description", content: article?.excerpt ?? "Arjuna Exports growing guide" },
      { property: "og:title", content: article?.title ?? "Arjuna Exports Resources" },
      { property: "og:description", content: article?.excerpt ?? "Practical coir knowledge" },
      { property: "og:image", content: article?.image },
    ],
  }),
  component: ArticleDetail,
});

const ribbonStyles = [
  "bg-earth-brown text-pure-white",
  "bg-botanical text-brand-deep",
  "bg-[#f39a3c] text-charcoal",
  "bg-brand-soft text-brand-deep",
];

function ArticleDetail() {
  const article = Route.useLoaderData();
  const related = resourceArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const categories = resourceCategories
    .filter((category) => category !== "All")
    .map((category) => ({
      name: category,
      image: resourceArticles.find((item) => item.category === category)?.image ?? article.image,
    }));

  return (
    <article className="bg-offwhite px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
      <div className="shell grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-16">
        <main className="min-w-0">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Link
                to="/resources"
                className="resource-ribbon inline-flex min-h-10 items-center bg-[#f39a3c] py-2 pl-4 pr-10 text-xs font-bold uppercase tracking-[.06em] text-charcoal transition-opacity hover:opacity-80"
              >
                {article.category}
              </Link>
              {article.date && (
                <time className="bg-charcoal px-5 py-3 text-xs font-bold uppercase tracking-[.06em] text-pure-white">
                  {article.date}
                </time>
              )}
            </div>

            <h1 className="display mt-12 max-w-5xl text-[clamp(3rem,6.2vw,5rem)] uppercase leading-[.94] text-brand-deep">
              {article.title}
            </h1>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-6 border-b border-charcoal/15 pb-6">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/65">
                <Clock3 className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                Reading time: {article.read}
              </span>
              <div
                className="flex items-center gap-5 text-brand-deep"
                aria-label="Share this article"
              >
                <a
                  href="https://www.facebook.com/"
                  aria-label="Share on Facebook"
                  className="transition-colors hover:text-brand"
                >
                  <Facebook className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  aria-label="Share on LinkedIn"
                  className="transition-colors hover:text-brand"
                >
                  <Linkedin className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(article.title)}`}
                  aria-label="Share by email"
                  className="transition-colors hover:text-brand"
                >
                  <Mail className="h-5 w-5" aria-hidden />
                </a>
              </div>
            </div>

            <p className="mt-8 max-w-4xl text-xl font-bold leading-relaxed text-brand-deep sm:text-2xl">
              {article.introduction}
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <div className="relative aspect-[16/8] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-offwhite px-3 py-2 text-xs font-bold uppercase tracking-[.08em] text-brand-deep shadow-sm sm:bottom-6 sm:left-6">
                {article.category}
              </span>
            </div>
          </Reveal>

          <div className="max-w-4xl">
            {article.sections.map((section, index) => (
              <Reveal key={section.heading} className="scroll-mt-32 pt-12 sm:pt-16">
                <section id={`section-${index + 1}`}>
                  <h2 className="display text-4xl uppercase leading-tight text-brand-deep sm:text-5xl">
                    {section.heading}
                  </h2>
                  <span className="mt-4 block h-1 w-16 bg-brand" aria-hidden />
                  <ArticleSectionBody body={section.body} />
                </section>
              </Reveal>
            ))}

            <Reveal className="mt-14 bg-brand-soft p-7 sm:p-10">
              <Label className="text-brand">Key takeaways</Label>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-pure-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="font-semibold text-brand-deep">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12 flex flex-col items-start justify-between gap-7 border-t border-charcoal/20 pt-9 sm:flex-row sm:items-center">
              <div>
                <Label className="text-brand">Technical note</Label>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/65">
                  Crop requirements vary. Confirm product and irrigation specifications through a
                  local trial or with our technical team.
                </p>
              </div>
              <PrimaryButton to="/contact">Ask our team</PrimaryButton>
            </Reveal>
          </div>
        </main>

        <aside className="border-t border-dashed border-brand/45 pt-10 lg:sticky lg:top-28 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <Reveal>
            <h2 className="display text-4xl text-earth-brown sm:text-5xl">Explore by category</h2>
            <span className="mt-3 block h-0.5 w-full bg-botanical" aria-hidden />

            <nav className="mt-8 grid gap-5" aria-label="Resource categories">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  to="/resources"
                  search={{ category: category.name }}
                  className={`resource-ribbon group relative flex min-h-20 items-center py-3 pl-[5.5rem] pr-10 transition-transform hover:translate-x-1 ${ribbonStyles[index % ribbonStyles.length]}`}
                >
                  <span className="absolute left-0 top-1/2 h-[4.65rem] w-[4.65rem] -translate-y-1/2 overflow-hidden rounded-full border-4 border-current/25 bg-offwhite">
                    <img
                      src={category.image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="text-sm font-bold uppercase leading-snug">{category.name}</span>
                </Link>
              ))}
            </nav>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="display text-3xl uppercase text-earth-brown sm:text-4xl">
              Latest articles
            </h2>
            <span className="mt-3 block h-0.5 w-full bg-botanical" aria-hidden />
            <div className="mt-8 grid gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/resources/$slug"
                  params={{ slug: item.slug }}
                  className="group grid grid-cols-[112px_1fr] gap-4"
                >
                  <div className="aspect-square overflow-hidden bg-brand-soft">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <span className="text-[10px] font-bold uppercase tracking-[.1em] text-brand">
                      {item.category}
                    </span>
                    <h3 className="display mt-2 text-xl leading-tight text-brand-deep transition-colors group-hover:text-brand">
                      {item.title}
                    </h3>
                    <span className="mt-2 block text-xs text-charcoal/55">{item.read}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </aside>
      </div>
    </article>
  );
}

function ArticleSectionBody({ body }: { body: string }) {
  const blocks: Array<{ type: "prose" | "list"; lines: string[] }> = [];

  for (const line of body.split("\n").filter(Boolean)) {
    const type = line.startsWith("•") ? "list" : "prose";
    const previous = blocks.at(-1);
    if (previous?.type === type) previous.lines.push(line);
    else blocks.push({ type, lines: [line] });
  }

  return (
    <div className="mt-6 space-y-4 text-lg leading-[1.85] text-charcoal/75">
      {blocks.map((block, blockIndex) =>
        block.type === "list" ? (
          <ul key={blockIndex} className="space-y-2 pl-1">
            {block.lines.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-[.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{line.replace(/^•\s*/, "")}</span>
              </li>
            ))}
          </ul>
        ) : (
          block.lines.map((line) => <p key={line}>{line}</p>)
        ),
      )}
    </div>
  );
}
