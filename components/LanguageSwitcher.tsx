import Link from "next/link";

type Props = {
  /** "en" if rendering on the English side, "zh" on the Chinese side. */
  current: "en" | "zh";
};

export default function LanguageSwitcher({ current }: Props) {
  const target = current === "en" ? "/zh" : "/";
  const label = current === "en" ? "中文" : "EN";
  const aria =
    current === "en" ? "Switch to Chinese version" : "切换到英文版";
  return (
    <Link
      href={target}
      aria-label={aria}
      className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
    >
      {label}
    </Link>
  );
}
