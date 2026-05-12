import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】AIライティングツールおすすめランキングTOP10｜ブログ・記事執筆に",
  description:
    "2026年最新のAIライティングツールおすすめランキングTOP10。ChatGPT・Claude・Jasper・Catchyなど、ブログや記事執筆に使える人気ツールを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/ai-writing-ranking-2026` },
};

const items = [
  { rank: 1, name: "ChatGPT", feat: "汎用性No.1", price: "無料+Plus", link: "/guide/ai-blog-writing" },
  { rank: 2, name: "Claude", feat: "長文・文章品質トップ", price: "無料+Pro", link: "/guide/ai-blog-writing" },
  { rank: 3, name: "Jasper", feat: "マーケ特化の老舗", price: "月49ドル〜", link: "/guide/ai-seo-tools-comparison" },
  { rank: 4, name: "Catchy", feat: "国産・日本語特化", price: "月額制", link: "/guide/ai-blog-writing" },
  { rank: 5, name: "Writesonic", feat: "SEO記事生成に強い", price: "月13ドル〜", link: "/guide/ai-seo-tools-comparison" },
  { rank: 6, name: "Notion AI", feat: "ドキュメント内蔵", price: "月10ドル", link: "/tools/notion-ai" },
  { rank: 7, name: "Rytr", feat: "低価格で多機能", price: "月9ドル〜", link: "/guide/ai-blog-writing" },
  { rank: 8, name: "Copy.ai", feat: "テンプレ豊富", price: "無料+有料", link: "/guide/ai-blog-writing" },
  { rank: 9, name: "Sudowrite", feat: "小説執筆特化", price: "月10ドル〜", link: "/guide/ai-blog-writing" },
  { rank: 10, name: "SAKUBUN", feat: "国産ブログAI", price: "月額制", link: "/guide/ai-blog-writing" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIライティングツールランキングTOP10", description: "ChatGPT/Claude/Jasper他を比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIライティングランキング", item: `${siteConfig.url}/guide/ai-writing-ranking-2026` }] };
  const itemListLd = { "@context": "https://schema.org", "@type": "ItemList", name: "AIライティングTOP10", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${siteConfig.url}${it.link}` })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIライティングランキング</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">ランキング</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">【2026年最新】AIライティングツールおすすめランキングTOP10</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ブログ・記事執筆・コピーライティングに使える最強のAIツールをランキング形式で紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AIライティングツールTOP10</h2>
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
          <h2 className="text-xl font-bold mb-4">ブログで稼ぐ副業を始める</h2>
          <ComparisonTableCTA services={[
            { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "国内最速級サーバー", price: "月1,452円〜", badge: "ブログ定番" },
            { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "業界最大手", price: "月990円〜" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "AI・ブログスキル", price: "月額制" },
          ]} />
        </section>
      </div>
    </>
  );
}
