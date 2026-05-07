import type { Metadata } from "next";
import { getAllBrochures, getCategories } from "@/lib/brochures";
import BrochureCard from "@/components/BrochureCard";

export const metadata: Metadata = {
  title: "All brochures",
  description: "Browse every privacy and security brochure in the library.",
};

export default function BrochuresIndexPage() {
  const brochures = getAllBrochures("en");
  const categories = getCategories("en");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">All brochures</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {brochures.length} brochure{brochures.length === 1 ? "" : "s"} across{" "}
          {categories.length} categor{categories.length === 1 ? "y" : "ies"}.
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
                <BrochureCard key={b.slug} brochure={b} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
