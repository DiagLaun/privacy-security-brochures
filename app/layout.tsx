import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Privacy & Security Brochures",
    template: "%s | Privacy & Security Brochures",
  },
  description:
    "Brochure-style learning content covering privacy and security fundamentals — passwords, phishing, 2FA, safe browsing, data privacy, device security, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <header className="border-b border-slate-200 dark:border-slate-800">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link
              href="/"
              className="font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="text-brand-600 dark:text-brand-300">P&amp;S</span>{" "}
              Brochures
            </Link>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  href="/brochures"
                  className="text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  Brochures
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>
            Built with Next.js, Tailwind, and MDX. Content is for educational
            purposes only.
          </p>
        </footer>
      </body>
    </html>
  );
}
