import type { Metadata } from "next";
import { getAllBrochures, getCategories } from "@/lib/brochures";
import BrochureCard from "@/components/BrochureCard";

export const metadata: Metadata = {
  title: "全部手册",
  description:
    "面向中国大陆用户的隐私与安全手册全部目录，按主题分组。",
};

export default function ZhBrochuresIndexPage() {
  const brochures = getAllBrochures("zh");
  const categories = getCategories("zh");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">全部手册</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          共 {brochures.length} 篇，分布在 {categories.length} 个主题。
        </p>
      </header>

      {categories.map((cat) => {
        const items = brochures.filter((b) => b.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="mb-12">
            <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {cat}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((b) => (
                <BrochureCard
                  key={b.slug}
                  brochure={b}
                  basePath="/zh/brochures"
                  labels={{ read: "分钟阅读" }}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
