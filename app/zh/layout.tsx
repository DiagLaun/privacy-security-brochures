import SiteChrome from "@/components/SiteChrome";

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome
      current="zh"
      homeHref="/zh"
      brochuresHref="/zh/brochures"
      aboutHref="/zh/about"
      labels={{
        brand: { tag: "隐私与安全", name: "手册" },
        nav: { brochures: "全部手册", about: "关于" },
        footer:
          "本站基于 Next.js + Tailwind + MDX 构建，内容仅作教育与参考用途，不构成法律或专业安全建议。",
      }}
    >
      {children}
    </SiteChrome>
  );
}
