import Link from "next/link";

export default function ZhNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-brand-700 dark:text-brand-300">
        404
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">页面不存在</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        你要找的页面不存在，可能已被移动或还未编写。
      </p>
      <Link
        href="/zh"
        className="mt-8 inline-block rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
      >
        返回中文首页
      </Link>
    </div>
  );
}
