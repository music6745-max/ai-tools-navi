import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "You.com 料金プラン徹底解説【2026年最新】無料版とPro版の違い",
  description: "AI検索エンジンYou.comの料金プランを徹底解説。無料・Pro・Maxの違い、Perplexityとの料金比較を日本語で詳しく解説。",
  keywords: ["you.com 料金", "you.com Pro", "AI 検索"],
  alternates: { canonical: `${siteConfig.url}/guide/you-com-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "You.com 料金プラン徹底解説", description: "You.comの無料・Pro・Max料金を解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "You.com料金", item: `${siteConfig.url}/guide/you-com-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">You.com料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">You.com 料金プラン徹底解説</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI検索エンジンYou.comの料金プランを日本語で詳しく解説。無料・Pro・Max・チームプランの違いを比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">You.com料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "基本的なAI検索が無料で使える。月の高度モデル使用回数に制限あり。" },
              { name: "Pro", price: "月額20ドル", desc: "GPT-4o・Claude 3.5・Sonarなど高度モデル無制限、画像生成・コード実行・PDFアップロード対応。" },
              { name: "Max", price: "月額50ドル", desc: "Pro機能に加えて、より大きなコンテキスト・優先処理・カスタムエージェント機能。" },
              { name: "Team", price: "1ユーザー月25ドル〜", desc: "チーム共有のワークスペース・管理機能。中小企業向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-primary font-bold">{p.price}</span>
                </div>
                <p className="text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Perplexityとの料金比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">You.com Pro：</span> 月20ドル</p>
            <p><span className="font-bold">Perplexity Pro：</span> 月20ドル</p>
            <p>料金は同じ。You.comは複数AIモデルを切替可能、Perplexityは引用精度・調査用途に強み。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化スクール", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI・データ分析", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-search-engines-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">検索</div><div className="font-bold text-sm">AI検索エンジン比較</div></Link>
            <Link href="/guide/codeium-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Codeium料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
