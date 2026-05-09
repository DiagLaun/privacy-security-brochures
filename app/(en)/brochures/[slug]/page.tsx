import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBrochures, getBrochureBySlug } from "@/lib/brochures";

export function generateStaticParams() {
  return getAllBrochures("en").map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const brochure = getBrochureBySlug(slug, "en");
  if (!brochure) return {};
  return {
    title: brochure.title,
    description: brochure.description,
  };
}

export default async function BrochurePage(
  props: { params: Promise<{ slug: string }> },
) {
  const { slug } = await props.params;
  const brochure = getBrochureBySlug(slug, "en");
  if (!brochure) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-slate-600 dark:text-slate-400">
        <Link href="/brochures" className="hover:text-brand-700 dark:hover:text-brand-300">
          ← All brochures
        </Link>
      </nav>
      <header className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-700 dark:text-brand-300">
          {brochure.category}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          {brochure.title}
        </h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
          {brochure.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
            {brochure.readingTime} min read
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 capitalize dark:bg-slate-800">
            {brochure.level}
          </span>
        </div>
      </header>
      <div className="prose-brochure">
        <MDXRemote source={brochure.content} />
      </div>
    </article>
  );
}
