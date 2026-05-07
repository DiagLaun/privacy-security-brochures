import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the Privacy & Security Brochures project.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">About</h1>
      <div className="prose-brochure mt-6">
        <p>
          The <strong>Privacy &amp; Security Brochures</strong> project is a
          small, open-source library of brochure-style learning content. Each
          brochure is short, practical, and designed for non-technical readers —
          friends, family, teammates, and anyone who wants to be safer online.
        </p>

        <h2>What makes it different?</h2>
        <ul>
          <li>Short reads (5–10 minutes) instead of long courses.</li>
          <li>Plain language with examples and concrete next steps.</li>
          <li>Open source — fork it, translate it, add your own topics.</li>
        </ul>

        <h2>Topics covered</h2>
        <p>
          The starter set includes brochures on strong passwords, phishing,
          two-factor authentication, safe browsing, data privacy, device
          security, and social engineering. More coming over time.
        </p>

        <h2>Contributing</h2>
        <p>
          Brochures live as <code>.mdx</code> files under{" "}
          <code>content/brochures/</code>. To add a new one, drop in a new file
          with the right frontmatter and it&apos;ll appear in the index
          automatically. PRs welcome.
        </p>

        <h2>Disclaimer</h2>
        <p>
          Content is for educational purposes only and is not legal or
          professional security advice. Always consult a qualified professional
          for your specific situation.
        </p>
      </div>
    </div>
  );
}
