import Link from "next/link";
import { getAllBrochures } from "@/lib/brochures";
import BrochureCard from "@/components/BrochureCard";

export default function Home() {
  const brochures = getAllBrochures("en").slice(0, 3);

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-transparent dark:border-slate-800 dark:from-brand-900/20">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-700 dark:text-brand-300">
            Learn. Practice. Stay safe.
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Privacy &amp; Security Brochures
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Bite-sized, practical guides that help anyone — not just techies —
            build solid privacy and security habits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/brochures"
              className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Browse all brochures
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              About this project
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured brochures
            </h2>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Start here if you&apos;re new to privacy and security.
            </p>
          </div>
          <Link
            href="/brochures"
            className="text-sm font-medium text-brand-700 hover:underline dark:text-brand-300"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brochures.map((b) => (
            <BrochureCard key={b.slug} brochure={b} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Why brochures?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Feature
              title="Short and practical"
              body="Each brochure takes 5–10 minutes to read and ends with concrete actions you can take today."
            />
            <Feature
              title="No jargon"
              body="Written for everyday users. Technical detail only when it actually helps."
            />
            <Feature
              title="Always free"
              body="Open-source content. Fork the repo, add your own brochures, share with your team."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{body}</p>
    </div>
  );
}
