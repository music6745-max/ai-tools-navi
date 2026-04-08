import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI SEOツール比較5選【2026年最新】Surfer/Frase/Clearscope/MarketMuse/SE Ranking",
  description: "コンテンツSEOを加速するAIツール5選を徹底比較。Surfer SEO・Frase・Clearscope・MarketMuse・SE Rankingの料金・機能を詳しく解説。",
  keywords: ["AI SEO", "Surfer SEO", "Frase", "Clearscope", "MarketMuse", "SE Ranking"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-seo-tools-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI SEOツール比較5選", description: "Surfer/Frase/Clearscope/MarketMuse/SE Ranking徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI SEOツール比較", item: `${siteConfig.url}/guide/ai-seo-tools-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI SEOツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI SEOツール比較5選｜記事の検索順位を上げる</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          SEO競争はAI活用で次のフェーズへ。本記事ではコンテンツSEOを加速する主要5サービスを徹底比較し、ブロガー・マーケターに最適なツールを解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI SEOツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Surfer SEO", badge: "コンテンツ最適化", desc: "上位記事を解析しキーワード密度・見出し構造を最適化提案。月額89ドル〜。" },
              { name: "Frase.io", badge: "AI執筆", desc: "リサーチ＋AI執筆＋最適化をワンストップで提供。月額14.99ドル〜の手頃な価格。" },
              { name: "Clearscope", badge: "エンタープライズ", desc: "コンテンツマーケのプロが愛用する高品質ツール。料金は要問合せだが効果は最高クラス。" },
              { name: "MarketMuse", badge: "戦略立案", desc: "AIによるコンテンツ戦略・トピッククラスタ提案が強み。サイト全体のSEO設計に最適。" },
              { name: "SE Ranking", badge: "オールインワン", desc: "順位計測・キーワード調査・競合分析・コンテンツ最適化を統合。月額65ドル〜。" },
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
            <p><span className="font-bold">個人ブロガー：</span> Frase.io（コスパ最強）</p>
            <p><span className="font-bold">企業マーケ：</span> Surfer SEO・Clearscope</p>
            <p><span className="font-bold">サイト全体戦略：</span> MarketMuse</p>
            <p><span className="font-bold">オールインワン：</span> SE Ranking</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">ブログ運営の収益化を加速</h2>
          <ComparisonTableCTA services={[
            { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "国内最速級レンタルサーバー", price: "月額1,452円〜", badge: "ブログ定番" },
            { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "業界最大手の安定性", price: "月額990円〜" },
            { name: "ロリポップ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "格安プランあり", price: "月額220円〜" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-seo" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">マーケ</div><div className="font-bold text-sm">AI SEO活用</div></Link>
            <Link href="/guide/ai-blog-writing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">執筆</div><div className="font-bold text-sm">AIブログ執筆</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
