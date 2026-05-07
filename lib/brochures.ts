import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "brochures");

export type BrochureLevel = "beginner" | "intermediate" | "advanced";

export type BrochureMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: number;
  level: BrochureLevel;
};

export type Brochure = BrochureMeta & {
  content: string;
};

function readBrochure(filename: string): Brochure {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = (data.slug as string) ?? filename.replace(/\.mdx?$/, "");
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    category: data.category as string,
    readingTime: (data.readingTime as number) ?? 5,
    level: (data.level as BrochureLevel) ?? "beginner",
    content,
  };
}

export function getAllBrochures(): Brochure[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const brochures = files.map(readBrochure);
  return brochures.sort((a, b) => a.title.localeCompare(b.title));
}

export function getBrochureBySlug(slug: string): Brochure | null {
  const all = getAllBrochures();
  return all.find((b) => b.slug === slug) ?? null;
}

export function getCategories(): string[] {
  const cats = new Set<string>();
  for (const b of getAllBrochures()) cats.add(b.category);
  return Array.from(cats).sort();
}
