import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIショッピングアシスタント比較5選【2026年最新】",
  description: "AIで買い物を効率化する5サービスを徹底比較。Klarna AI・Rufus(Amazon)・Honey AI・Shop AI・PriceSpy AI。",
  keywords: ["AI ショッピング", "Rufus", "Klarna", "Honey", "Shop AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-shopping-assistant-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIショッピングアシスタント比較5選", description: "Klarna/Rufus/Honey/Shop/PriceSpy徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIショッピング比較", item: `${siteConfig.url}/guide/ai-shopping-assistant-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIショッピング比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIショッピングアシスタント比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIで商品検索・価格比較・レビュー要約を自動化できる時代。本記事では主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIショッピング5選</h2>
          <div className="space-y-4">
            {[
              { name: "Rufus (Amazon)", badge: "Amazon公式", desc: "Amazon内蔵のAIショッピングアシスタント。商品比較・レビュー要約・選び方を提案。" },
              { name: "Klarna AI", badge: "後払い+AI", desc: "Klarnaの後払い決済にAIショッピングを統合。価格追跡・最安値通知。" },
              { name: "Honey AI", badge: "クーポン", desc: "PayPal傘下のクーポン拡張機能にAI機能搭載。最安値検索が自動化。" },
              { name: "Shop AI", badge: "Shopify系", desc: "Shopifyのアプリ内AI。レコメンドが優秀。" },
              { name: "PriceSpy AI", badge: "価格比較", desc: "欧州で人気の価格比較サイト。AI予測で最適購入時期を提案。" },
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
          <h2 className="text-xl font-bold mb-4">お得にお買い物</h2>
          <ComparisonTableCTA services={[
            { name: "楽天市場", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "ポイント還元", price: "ショップ多数", badge: "国内大手" },
            { name: "Amazon", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "翌日配送", price: "Prime月額制" },
            { name: "Yahoo!ショッピング", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "PayPay還元", price: "ショップ多数" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-ecommerce" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">EC向けAI</div></Link>
            <Link href="/guide/ai-virtual-tryon-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">EC</div><div className="font-bold text-sm">AIバーチャル試着</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
