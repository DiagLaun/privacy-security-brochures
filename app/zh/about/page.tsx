import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
  description:
    "关于「隐私与安全手册」中文版项目：定位、写作原则、声明与免责。",
};

export default function ZhAboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">关于本项目（中文版）</h1>
      <div className="prose-brochure mt-6">
        <p>
          <strong>「隐私与安全手册」</strong> 是一个开源的、手册式的隐私与信息安全学习项目。
          中文版面向中国大陆普通用户，把日常会用到的 APP、手机系统、网络环境、输入法等场景拆开来讲，
          告诉你它们「真的在做什么」、「我能关掉哪些」、「在什么情况下要换设备/换账号/换习惯」。
        </p>

        <h2>它是什么、不是什么</h2>
        <ul>
          <li>
            <strong>是</strong>：基于厂商隐私政策、官方文档、公开研究（如 Citizen Lab、EFF、Apple
            透明度报告等）整理的实用建议。
          </li>
          <li>
            <strong>不是</strong>：翻墙教程、对抗执法的指南、政治宣传，或任何规避当地法律的内容。
          </li>
        </ul>

        <h2>读者分层</h2>
        <p>
          每篇手册尽量区分两种人群——
        </p>
        <ul>
          <li>
            <strong>普通用户</strong>：只想少被收集一些信息、少踩坑，按建议关几个开关、换个习惯就够了。
          </li>
          <li>
            <strong>高风险用户</strong>：例如调查记者、律师、维权人士、跨境工作者、家暴受害者、政治敏感人群。
            这类用户应当配合更系统的威胁建模与一对一安全咨询，本手册只是起点。
          </li>
        </ul>

        <h2>主题覆盖</h2>
        <ul>
          <li>国家反诈中心 APP 的权限与隐私权衡</li>
          <li>云上贵州与中国大陆 iCloud 账户的数据流向</li>
          <li>「手机管家 / 安全中心」类 APP 的常见行为</li>
          <li>鸿蒙 OS / 澎湃 OS 的默认遥测与隐私开关</li>
          <li>大数据网络监控的常见层级与日常自保</li>
          <li>主流国产输入法的「云联想」与日常自保</li>
        </ul>

        <h2>免责声明</h2>
        <p>
          本网站内容仅作教育与参考用途，不构成法律意见、不构成专业安全建议、不针对任何具体个人情况。
          针对自己的处境做决策前，请咨询合资质的律师或安全顾问。
        </p>
        <p>
          中文版与
          {" "}
          <Link href="/" className="text-brand-700 hover:underline dark:text-brand-300">
            英文版
          </Link>
          {" "}
          内容互为补充，主题略有不同。
        </p>
      </div>
    </div>
  );
}
