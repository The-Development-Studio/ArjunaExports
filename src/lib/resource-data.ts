import resourceCopy from "@/lib/resource-copy.txt?raw";
import { img } from "@/lib/site-data";

export type ResourceSection = { heading: string; body: string };

export type ResourceArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date?: string;
  read: string;
  introduction: string;
  sections: ResourceSection[];
  takeaways: string[];
};

type DraftArticle = { category: string; title: string; lines: string[] };

const categoryNames: Record<string, string> = {
  "1": "Coco Coir — Product Insights",
  "2": "Quality & Performance",
  "3": "Sourcing & Buying Guide",
  "4": "Freight & Logistics Planning",
};

const categoryImages: Record<string, string[]> = {
  "Coco Coir — Product Insights": [
    img.productBlock,
    img.appGreenhouse,
    img.stageFibre,
    img.productGrowbag,
    img.appHydroponics,
  ],
  "Quality & Performance": [
    img.processWashing,
    img.stagePith,
    img.appNursery,
    img.processQuality,
    img.detailBlockStack,
    img.productNutrients,
  ],
  "Sourcing & Buying Guide": [
    img.stageCoconut,
    img.coirBoard,
    img.processDrying,
    img.exportPort,
    img.processPackaging,
  ],
  "Freight & Logistics Planning": [img.productBlock, img.exportPort, img.processPackaging],
};

const categoryDescriptions = new Set([
  "These articles will introduce coco coir/coco peat, explain differences, and help readers understand applications.",
  "These should establish the technical credibility and demonstrate that product quality is more than just appearance",
  "Articles related to Freight & Supply Chain Logistics",
]);

const headingWords = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "for",
  "from",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "the",
  "to",
  "vs",
  "what",
  "when",
  "where",
  "why",
  "with",
  "your",
]);

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function cleanArticleTitle(value: string) {
  return value.replace(/^\d{2}\.\s*/, "").trim();
}

function isSectionHeading(line: string) {
  const text = line.trim();
  if (!text || text.startsWith("•") || text.length > 92) return false;
  if (/^\d+\.\s+[A-Z]/.test(text)) return true;
  if (/[.!?→]$/.test(text)) return false;

  const words = text
    .replace(/[():,/+–—-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0 || words.length > 13) return false;

  const titleCaseWords = words.filter((word) => {
    const normalized = word.toLowerCase();
    return headingWords.has(normalized) || /^[A-Z0-9]/.test(word) || /^[A-Z]{2,}$/.test(word);
  });

  return titleCaseWords.length / words.length >= 0.8;
}

function makeExcerpt(lines: string[]) {
  const prose = lines.filter(
    (line) =>
      line &&
      !line.startsWith("•") &&
      !/^Reading Time:/i.test(line) &&
      !isSectionHeading(line) &&
      !/Reach out|Get in touch/i.test(line),
  );
  const excerpt = prose.slice(0, 2).join(" ");
  return excerpt.length > 210 ? `${excerpt.slice(0, 207).trimEnd()}…` : excerpt;
}

function splitSections(lines: string[], articleTitle: string) {
  const content = lines.filter(
    (line) =>
      line && !/^Reading Time:/i.test(line) && line.toLowerCase() !== articleTitle.toLowerCase(),
  );
  const introductionLines: string[] = [];
  const sections: ResourceSection[] = [];
  let heading = "Overview";
  let body: string[] = [];
  let foundHeading = false;

  const pushSection = () => {
    if (!body.length) return;
    sections.push({ heading, body: body.join("\n") });
    body = [];
  };

  for (const line of content) {
    if (isSectionHeading(line)) {
      if (foundHeading) pushSection();
      else foundHeading = true;
      heading = line.replace(/^\d+\.\s*/, "");
      continue;
    }

    if (!foundHeading) introductionLines.push(line);
    else body.push(line);
  }
  pushSection();

  if (!sections.length && introductionLines.length) {
    sections.push({ heading: "Overview", body: introductionLines.slice(1).join("\n") });
  }

  const introduction = introductionLines.join(" ") || makeExcerpt(content);
  return { introduction, sections };
}

function estimateReadingTime(lines: string[]) {
  const supplied = lines.find((line) => /^Reading Time:/i.test(line));
  if (supplied) return supplied.replace(/^Reading Time:\s*/i, "").replace("minutes", "min read");
  const words = lines.join(" ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(2, Math.ceil(words / 200))} min read`;
}

function parseArticles() {
  const lines = resourceCopy.split(/\r?\n/).map((line) => line.trim());
  const drafts: DraftArticle[] = [];
  let category = "Coco Coir — Product Insights";
  let current: DraftArticle | undefined;

  for (const line of lines) {
    const categoryMatch = line.match(/^([1-4])\.\t+/);
    if (categoryMatch && categoryNames[categoryMatch[1]]) {
      category = categoryNames[categoryMatch[1]];
      continue;
    }

    const articleMatch = line.match(/^\d{2}\.\s*(.+)$/);
    if (articleMatch) {
      if (current) drafts.push(current);
      current = { category, title: cleanArticleTitle(line), lines: [] };
      continue;
    }

    if (current && line && !categoryDescriptions.has(line)) current.lines.push(line);
  }
  if (current) drafts.push(current);

  const imageIndexes = new Map<string, number>();
  return drafts.map((draft) => {
    const index = imageIndexes.get(draft.category) ?? 0;
    imageIndexes.set(draft.category, index + 1);
    const images = categoryImages[draft.category] ?? [img.productBlock];
    const { introduction, sections } = splitSections(draft.lines, draft.title);
    const takeaways = draft.lines
      .filter((line) => line.startsWith("•"))
      .map((line) => line.replace(/^•\s*/, ""))
      .filter((line, itemIndex, all) => all.indexOf(line) === itemIndex)
      .slice(0, 4);

    return {
      slug: slugify(draft.title),
      title: draft.title,
      excerpt: makeExcerpt(draft.lines),
      category: draft.category,
      image: images[index % images.length],
      read: estimateReadingTime(draft.lines),
      introduction,
      sections,
      takeaways:
        takeaways.length > 0
          ? takeaways
          : [
              "Review the full specification",
              "Plan requirements early",
              "Confirm details with the supplier",
            ],
    } satisfies ResourceArticle;
  });
}

export const resourceCategories = ["All", ...Object.values(categoryNames)];

export const resourceArticles: ResourceArticle[] = parseArticles();
