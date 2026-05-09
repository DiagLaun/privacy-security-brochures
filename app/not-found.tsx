import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-brand-700 dark:text-brand-300">
        404
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
      >
        Back home
      </Link>
    </div>
  );
}
