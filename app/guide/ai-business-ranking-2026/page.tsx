import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】AIビジネスツールおすすめランキングTOP10",
  description:
    "2026年最新のAIビジネスツールおすすめランキングTOP10。営業・CS・データ分析・会議録・プレゼン作成に使えるAIを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/ai-business-ranking-2026` },
};

const items = [
  { rank: 1, name: "Notion AI", feat: "ドキュメント作成をAI化", price: "月10ドル", link: "/tools/notion-ai" },
  { rank: 2, name: "Gamma", feat: "AIプレゼン作成の定番", price: "月10ドル〜", link: "/guide/ai-presentation-comparison" },
  { rank: 3, name: "tl;dv", feat: "会議録作成の人気No.1", price: "無料+月20ドル", link: "/guide/ai-meeting-summarizer-comparison" },
  { rank: 4, name: "Julius AI", feat: "データ分析をチャットで", price: "月20ドル〜", link: "/guide/ai-data-analysis-comparison" },
  { rank: 5, name: "Gong", feat: "営業会話の分析", price: "要問合せ", link: "/guide/ai-sales-tools-comparison" },
  { rank: 6, name: "Intercom Fin", feat: "顧客対応自動化", price: "月29ドル〜", link: "/guide/ai-customer-support-comparison" },
  { rank: 7, name: "Zapier", feat: "ワークフロー自動化の王", price: "月20ドル〜", link: "/guide/ai-automation-comparison" },
  { rank: 8, name: "AdCreative.ai", feat: "広告クリエイティブ生成", price: "月29ドル〜", link: "/guide/ai-ad-creative-comparison" },
  { rank: 9, name: "Surfer SEO", feat: "SEO最適化", price: "月89ドル〜", link: "/guide/ai-seo-tools-comparison" },
  { rank: 10, name: "Whimsical", feat: "マインドマップ・図表", price: "月10ドル〜", link: "/guide/ai-mind-map-comparison" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIビジネスツールランキングTOP10", description: "Notion AI/Gamma/tl;dv他比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIビジネスランキング", item: `${siteConfig.url}/guide/ai-business-ranking-2026` }] };
  const itemListLd = { "@context": "https://schema.org", "@type": "ItemList", name: "AIビジネスTOP10", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${siteConfig.url}${it.link}` })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIビジネスランキング</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">ランキング</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">【2026年最新】AIビジネスツールおすすめランキングTOP10</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">営業・カスタマーサポート・データ分析・プレゼン・会議録作成など、ビジネス業務をAIで効率化するツールTOP10。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AIビジネスツールTOP10</h2>
          <div className="space-y-4">
            {items.map((it) => (
              <div key={it.rank} className="bg-card-bg border border-card-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{it.rank}位</span>
                  <h3 className="text-lg font-bold">{it.name}</h3>
                </div>
                <p className="text-sm text-muted mb-1"><span className="font-bold text-foreground">特徴: </span>{it.feat}</p>
                <p className="text-sm text-muted mb-2"><span className="font-bold text-foreground">料金: </span>{it.price}</p>
                <Link href={it.link} className="text-sm font-bold text-primary hover:underline">詳しく見る →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">ビジネスDXスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化スクール", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "業務効率化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>
      </div>
    </>
  );
}
