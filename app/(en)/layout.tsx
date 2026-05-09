import SiteChrome from "@/components/SiteChrome";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome
      current="en"
      homeHref="/"
      brochuresHref="/brochures"
      aboutHref="/about"
      labels={{
        brand: { tag: "P&S", name: "Brochures" },
        nav: { brochures: "Brochures", about: "About" },
        footer:
          "Built with Next.js, Tailwind, and MDX. Content is for educational purposes only.",
      }}
    >
      {children}
    </SiteChrome>
  );
}
