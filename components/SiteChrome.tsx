import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Labels = {
  brand: { tag: string; name: string };
  nav: { brochures: string; about: string };
  footer: string;
};

type Props = {
  current: "en" | "zh";
  labels: Labels;
  homeHref: string;
  brochuresHref: string;
  aboutHref: string;
  children: React.ReactNode;
};

/**
 * Shared chrome (header + footer) used by both the English (default) and
 * Chinese (/zh) sub-trees. Each subtree wraps its `children` with this
 * component and supplies its own labels.
 */
export default function SiteChrome({
  current,
  labels,
  homeHref,
  brochuresHref,
  aboutHref,
  children,
}: Props) {
  return (
    <div
      lang={current === "zh" ? "zh-CN" : "en"}
      className="flex min-h-screen flex-col"
    >
      <header className="border-b border-slate-200 dark:border-slate-800">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link
            href={homeHref}
            className="font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            <span className="text-brand-600 dark:text-brand-300">
              {labels.brand.tag}
            </span>{" "}
            {labels.brand.name}
          </Link>
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                href={brochuresHref}
                className="text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
              >
                {labels.nav.brochures}
              </Link>
            </li>
            <li>
              <Link
                href={aboutHref}
                className="text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
              >
                {labels.nav.about}
              </Link>
            </li>
            <li>
              <LanguageSwitcher current={current} />
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>{labels.footer}</p>
      </footer>
    </div>
  );
}
