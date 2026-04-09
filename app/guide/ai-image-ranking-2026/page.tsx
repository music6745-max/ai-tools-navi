import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】画像生成AIおすすめランキングTOP10｜Midjourney/Stable Diffusion/DALL-E",
  description:
    "2026年最新の画像生成AIおすすめランキングTOP10。Midjourney・Stable Diffusion・DALL-E・Firefly等、商用利用可能な人気AIを徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/ai-image-ranking-2026` },
};

const items = [
  { rank: 1, name: "Midjourney v6", feat: "アート品質トップ", price: "月10ドル〜", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 2, name: "DALL-E 3", feat: "プロンプト忠実性", price: "ChatGPT Plus内", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 3, name: "Stable Diffusion XL", feat: "無料・FT自由", price: "無料", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 4, name: "Adobe Firefly", feat: "商用安全", price: "Creative Cloud", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 5, name: "Google Imagen 3", feat: "テキスト描画", price: "Gemini Advanced", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 6, name: "Leonardo AI", feat: "ゲームアート得意", price: "無料+有料", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 7, name: "Bing Image Creator", feat: "無料で高品質", price: "無料", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 8, name: "Canva Magic Studio", feat: "デザイン統合", price: "月12.99ドル〜", link: "/guide/ai-design-tools-comparison" },
  { rank: 9, name: "Ideogram", feat: "テキスト付き画像", price: "無料+有料", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 10, name: "Playground AI", feat: "ブラウザ完結", price: "無料+有料", link: "/guide/ai-image-generator-comparison-detail" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "画像生成AIランキングTOP10", description: "Midjourney/SD/DALL-E他を比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "画像生成AIランキング", item: `${siteConfig.url}/guide/ai-image-ranking-2026` }] };
  const itemListLd = { "@context": "https://schema.org", "@type": "ItemList", name: "画像生成AI TOP10", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${siteConfig.url}${it.link}` })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">画像生成AIランキング</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">ランキング</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">【2026年最新】画像生成AIおすすめランキングTOP10</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          2026年の画像生成AIを徹底比較。本記事では商用利用・品質・料金のバランスで厳選した10ツールをランキング形式で紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">画像生成AI TOP10</h2>
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
          <h2 className="text-xl font-bold mb-4">デザインスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Webデザイン・AI", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン指導", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>
      </div>
    </>
  );
}
