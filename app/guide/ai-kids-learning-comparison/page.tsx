import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI子ども向け学習アプリ比較5選【2026年最新】Khan Academy Kids/Synthesis/MagicSchool/SchoolAI/atama+",
  description: "子どもの個別最適学習を実現するAI学習アプリ5選を徹底比較。Khan Academy Kids・Synthesis・MagicSchool・SchoolAI・atama+を解説。",
  keywords: ["AI 子ども学習", "Khan Academy", "Synthesis", "MagicSchool", "SchoolAI", "atama+"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-kids-learning-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI子ども向け学習アプリ比較5選", description: "Khan Academy Kids/Synthesis/MagicSchool/SchoolAI/atama+徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI子ども学習比較", item: `${siteConfig.url}/guide/ai-kids-learning-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI子ども学習比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI子ども向け学習アプリ比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIで一人ひとりに最適化された学習を提供するアプリが急増。本記事では海外・国内の主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI子ども学習アプリ5選</h2>
          <div className="space-y-4">
            {[
              { name: "Khan Academy Kids", badge: "無料", desc: "Khan Academy提供の幼児・小学生向け学習アプリ。AI推薦で個別最適化。完全無料。" },
              { name: "Synthesis Tutor", badge: "数学特化", desc: "Khanmigo出身者が立ち上げたAI数学チューター。1対1でじっくり指導。" },
              { name: "MagicSchool", badge: "教師向け", desc: "教師の授業準備をAIで支援。教材作成・採点・フィードバック自動化。" },
              { name: "SchoolAI", badge: "学校導入", desc: "学校向けAIプラットフォーム。安全に管理された生徒用AIが使える。" },
              { name: "atama+", badge: "国産", desc: "国内塾で広く採用される個別最適AI学習。中高生の数学・英語に強い。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 用途別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">幼児・小学生：</span> Khan Academy Kids</p>
            <p><span className="font-bold">数学特訓：</span> Synthesis Tutor・atama+</p>
            <p><span className="font-bold">教師向け：</span> MagicSchool・SchoolAI</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">日本語塾・通信教育</h2>
          <ComparisonTableCTA services={[
            { name: "スマイルゼミ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "タブレット学習", price: "月額制", badge: "定番" },
            { name: "進研ゼミ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "ベネッセの定番", price: "月額制" },
            { name: "Z会", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "ハイレベル指導", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-education" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">教育</div><div className="font-bold text-sm">教育向けAI</div></Link>
            <Link href="/guide/ai-tools-for-students" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学生</div><div className="font-bold text-sm">学生向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
