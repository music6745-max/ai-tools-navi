import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIゲーム開発支援ツール比較5選【2026年最新】Inworld/Scenario/Ludo/Rosebud/Charisma",
  description: "AIでゲーム開発を加速する5ツールを徹底比較。Inworld AI・Scenario・Ludo・Rosebud・Charismaの料金・特徴を解説。",
  keywords: ["AI ゲーム開発", "Inworld", "Scenario", "Ludo", "Rosebud", "Charisma"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-game-development-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIゲーム開発支援ツール比較5選", description: "Inworld/Scenario/Ludo/Rosebud/Charisma徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIゲーム開発比較", item: `${siteConfig.url}/guide/ai-game-development-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIゲーム開発比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIゲーム開発支援ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIでゲーム開発のキャラクター作成・対話設計・アセット生成を加速。本記事では業界注目の5ツールを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIゲーム開発ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Inworld AI", badge: "NPCキャラ", desc: "ゲーム内NPCに性格・記憶・対話力を持たせるAI。Unity/Unreal連携対応。" },
              { name: "Scenario", badge: "アセット生成", desc: "ゲームアートのスタイル統一型AI生成。独自モデル学習対応。" },
              { name: "Ludo AI", badge: "ゲーム企画", desc: "AIでゲームのアイデア・コンセプトを生成。市場調査機能も搭載。" },
              { name: "Rosebud AI", badge: "ノーコード生成", desc: "プロンプトからブラウザゲームを生成。学習・プロト用途に最適。" },
              { name: "Charisma", badge: "対話設計", desc: "ゲーム・VR・教育向けの対話型AIキャラクター作成プラットフォーム。" },
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
            <p><span className="font-bold">NPCキャラ：</span> Inworld AI・Charisma</p>
            <p><span className="font-bold">アセット制作：</span> Scenario</p>
            <p><span className="font-bold">企画・コンセプト：</span> Ludo AI</p>
            <p><span className="font-bold">プロト：</span> Rosebud AI</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">ゲーム開発を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Unity・ゲーム開発", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-game-developers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">ゲーム開発者向けAI</div></Link>
            <Link href="/guide/ai-3d-modeling" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">3D</div><div className="font-bold text-sm">AI3Dモデリング</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
