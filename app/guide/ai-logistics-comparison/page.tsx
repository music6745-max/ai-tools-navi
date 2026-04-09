import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI物流・サプライチェーン管理ツール比較5選【2026年最新】",
  description: "物流業界のAI活用ツール5選を徹底比較。Project44・FourKites・Symbotic・Locus Robotics・Hacobu MOVOを解説。",
  keywords: ["AI 物流", "サプライチェーン", "Project44", "FourKites"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-logistics-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI物流ツール比較5選", description: "Project44/FourKites/Symbotic/Locus/Hacobu徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI物流比較", item: `${siteConfig.url}/guide/ai-logistics-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI物流比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI物流・サプライチェーン管理ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          2024年問題で物流業界は大変革期。AIによる配送最適化・倉庫自動化が加速しています。本記事では国内外の主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI物流ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Project44", badge: "可視化", desc: "サプライチェーン全体をAIで可視化。グローバル大手で多数導入。" },
              { name: "FourKites", badge: "リアルタイム追跡", desc: "貨物のリアルタイム追跡・遅延予測に強み。1日100万件以上の配送を追跡。" },
              { name: "Symbotic", badge: "倉庫自動化", desc: "AI制御のロボット倉庫システム。Walmartなどで稼働。" },
              { name: "Locus Robotics", badge: "ピッキングAI", desc: "倉庫ピッキング作業を自律ロボットが代行。生産性2〜3倍。" },
              { name: "Hacobu MOVO", badge: "国産", desc: "国産物流DXプラットフォーム。トラック予約・運行管理を統合。" },
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

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">物流ビジネスを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発・データ", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">ビジネス向けAI</div></Link>
            <Link href="/guide/ai-automation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIワークフロー自動化</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
