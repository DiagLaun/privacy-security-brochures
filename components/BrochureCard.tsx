import Link from "next/link";
import type { BrochureMeta } from "@/lib/brochures";

type Props = {
  brochure: BrochureMeta;
  basePath?: string;
  labels?: { read: string };
};

export default function BrochureCard({
  brochure,
  basePath = "/brochures",
  labels,
}: Props) {
  const isZh = brochure.language === "zh";
  const readLabel = labels?.read ?? (isZh ? "分钟阅读" : "min read");
  return (
    <Link
      href={`${basePath}/${brochure.slug}`}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-brand-600"
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-brand-700 dark:text-brand-300">
        {brochure.category}
      </p>
      <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
        {brochure.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
        {brochure.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>
          {brochure.readingTime} {readLabel}
        </span>
        <span className="capitalize">{brochure.level}</span>
      </div>
    </Link>
  );
}
