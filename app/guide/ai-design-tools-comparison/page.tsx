import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIデザインツール比較5選【2026年最新】Figma AI/Canva Magic/Galileo/Uizard/Visily",
  description: "デザイン作業をAIで加速する5ツールを徹底比較。Figma AI・Canva Magic Studio・Galileo AI・Uizard・Visilyの料金・特徴・連携を解説。",
  keywords: ["AI デザイン", "Figma AI", "Canva", "Galileo", "Uizard", "Visily"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-design-tools-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIデザインツール比較5選", description: "Figma/Canva/Galileo/Uizard/Visily徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIデザインツール比較", item: `${siteConfig.url}/guide/ai-design-tools-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIデザインツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIデザインツール比較5選｜Figma AI/Canva/Galileo/Uizard/Visily</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIでデザイン業務を加速する時代。本記事ではUIデザイン・グラフィック制作・ワイヤーフレーム作成に使える主要5ツールを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIデザインツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Figma AI", badge: "UI標準", desc: "Figmaに統合されたAI機能。プロンプトでUI生成・Auto Layout・コンテンツ穴埋めが可能。" },
              { name: "Canva Magic Studio", badge: "総合", desc: "テンプレ＋AIで初心者でもプロ級デザイン。月12.99ドル〜。" },
              { name: "Galileo AI", badge: "UI生成特化", desc: "テキストから美しいUIモックを自動生成。Figmaにエクスポート可能。" },
              { name: "Uizard", badge: "ノーコード", desc: "手書きスケッチや言葉から即UIモックを生成。プロト開発に最適。" },
              { name: "Visily", badge: "テンプレ豊富", desc: "ワイヤーフレーム特化。豊富なテンプレートとAI補助でPM・PdMにも人気。" },
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
            <p><span className="font-bold">本格UI制作：</span> Figma AI</p>
            <p><span className="font-bold">SNS・チラシ：</span> Canva Magic</p>
            <p><span className="font-bold">UIモック高速生成：</span> Galileo AI・Uizard</p>
            <p><span className="font-bold">PM/PdM向けワイヤフレーム：</span> Visily</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">デザインスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Webデザインコース", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-designers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">デザイナー向けAI</div></Link>
            <Link href="/guide/ai-logo-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AIロゴ作成</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
