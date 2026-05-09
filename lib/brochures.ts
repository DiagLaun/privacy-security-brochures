import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "brochures");

export type BrochureLevel = "beginner" | "intermediate" | "advanced";
export type BrochureLanguage = "en" | "zh";

export type BrochureMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: number;
  level: BrochureLevel;
  language: BrochureLanguage;
};

export type Brochure = BrochureMeta & {
  content: string;
};

function readBrochure(filename: string): Brochure {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug =
    (data.slug as string) ?? filename.replace(/\.(zh|en)?\.mdx?$/, "").replace(/\.mdx?$/, "");
  const language: BrochureLanguage =
    (data.language as BrochureLanguage) ??
    (filename.match(/\.zh\.mdx?$/) ? "zh" : "en");
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    category: data.category as string,
    readingTime: (data.readingTime as number) ?? 5,
    level: (data.level as BrochureLevel) ?? "beginner",
    language,
    content,
  };
}

function loadAll(): Brochure[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const brochures = files.map(readBrochure);
  return brochures.sort((a, b) =>
    a.title.localeCompare(b.title, a.language === "zh" ? "zh-Hans-CN" : "en"),
  );
}

export function getAllBrochures(language?: BrochureLanguage): Brochure[] {
  const all = loadAll();
  if (!language) return all;
  return all.filter((b) => b.language === language);
}

export function getBrochureBySlug(
  slug: string,
  language?: BrochureLanguage,
): Brochure | null {
  const all = loadAll();
  return (
    all.find((b) => b.slug === slug && (!language || b.language === language)) ??
    null
  );
}

export function getCategories(language?: BrochureLanguage): string[] {
  const cats = new Set<string>();
  for (const b of getAllBrochures(language)) cats.add(b.category);
  return Array.from(cats).sort((a, b) =>
    a.localeCompare(b, language === "zh" ? "zh-Hans-CN" : "en"),
  );
}
