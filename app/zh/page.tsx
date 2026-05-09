import type { Metadata } from "next";
import Link from "next/link";
import { getAllBrochures } from "@/lib/brochures";
import BrochureCard from "@/components/BrochureCard";

export const metadata: Metadata = {
  title: "中文版 - 面向中国大陆用户的隐私与安全手册",
  description:
    "面向中国大陆用户的隐私与安全实用手册，包括国家反诈中心 APP、云上贵州、手机管家、鸿蒙 OS、澎湃 OS、大数据网络监控、输入法监控等专题。",
};

export default function ZhHome() {
  const brochures = getAllBrochures("zh").slice(0, 3);

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-transparent dark:border-slate-800 dark:from-brand-900/20">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-700 dark:text-brand-300">
            中文版 · 面向中国大陆用户
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            隐私与安全手册（中文版）
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            面向中国大陆用户、用大白话写成的隐私与安全实用手册：从手机系统到常用 APP，从输入法到网络流量，告诉你哪些信息可能被收集，普通人和高风险人群分别该如何应对。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/zh/brochures"
              className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              浏览全部手册
            </Link>
            <Link
              href="/zh/about"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              关于本项目
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xs text-slate-500 dark:text-slate-400">
            本项目内容仅作隐私与信息安全教育用途，依据公开报道、研究论文与厂商官方隐私政策整理，不涉及、也不指导任何规避当地法律或网络管制的行为。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">推荐先读</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              对中国大陆用户最贴身的几篇。
            </p>
          </div>
          <Link
            href="/zh/brochures"
            className="text-sm font-medium text-brand-700 hover:underline dark:text-brand-300"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brochures.map((b) => (
            <BrochureCard
              key={b.slug}
              brochure={b}
              basePath="/zh/brochures"
              labels={{ read: "分钟阅读" }}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">为什么要读这些？</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Feature
              title="只讲实操"
              body="每篇 5–10 分钟读完，附带「今天就能做的事」清单，不灌输焦虑。"
            />
            <Feature
              title="区分人群"
              body="普通用户和高风险用户（记者、律师、维权人士、跨境人员）分开建议，避免「一刀切」。"
            />
            <Feature
              title="有出处"
              body="基于厂商隐私政策、官方文档、Citizen Lab / EFF 等公开研究，文末给出可查证的资料来源。"
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
