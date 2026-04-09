import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】AI動画生成ツールおすすめランキングTOP10｜Sora/Runway/Pika",
  description:
    "2026年最新のAI動画生成ツールおすすめランキングTOP10。Sora・Runway Gen-3・Pika・Luma・Kling等を料金・品質で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/ai-video-ranking-2026` },
};

const items = [
  { rank: 1, name: "Sora (OpenAI)", feat: "総合品質トップ", price: "ChatGPT Plus内", link: "/guide/ai-image-to-video-comparison" },
  { rank: 2, name: "Runway Gen-3", feat: "商用クリエイター定番", price: "月15ドル〜", link: "/guide/ai-image-to-video-comparison" },
  { rank: 3, name: "Pika 1.5", feat: "SNS動画に強い", price: "月10ドル〜", link: "/guide/ai-image-to-video-comparison" },
  { rank: 4, name: "Luma Dream Machine", feat: "生成スピード最速級", price: "無料+有料", link: "/guide/ai-image-to-video-comparison" },
  { rank: 5, name: "Kling AI", feat: "アニメ調に強い", price: "無料+有料", link: "/guide/ai-image-to-video-comparison" },
  { rank: 6, name: "Synthesia", feat: "AIアバター動画", price: "月22ドル〜", link: "/guide/ai-video-creation" },
  { rank: 7, name: "HeyGen", feat: "AIプレゼン動画", price: "月29ドル〜", link: "/guide/ai-video-creation" },
  { rank: 8, name: "D-ID", feat: "顔写真から動画生成", price: "月5.9ドル〜", link: "/guide/ai-video-creation" },
  { rank: 9, name: "Opus Clip", feat: "長尺→ショート切り出し", price: "月9ドル〜", link: "/guide/ai-video-creation" },
  { rank: 10, name: "Haiper", feat: "急成長の新興", price: "無料+有料", link: "/guide/ai-image-to-video-comparison" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI動画生成ランキングTOP10", description: "Sora/Runway/Pika他比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI動画ランキング", item: `${siteConfig.url}/guide/ai-video-ranking-2026` }] };
  const itemListLd = { "@context": "https://schema.org", "@type": "ItemList", name: "AI動画生成TOP10", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${siteConfig.url}${it.link}` })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI動画ランキング</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">ランキング</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">【2026年最新】AI動画生成ツールおすすめランキングTOP10</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">2026年に注目すべきAI動画生成ツールTOP10をランキング形式で紹介します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AI動画生成TOP10</h2>
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
          <h2 className="text-xl font-bold mb-4">動画編集スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・動画編集", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>
      </div>
    </>
  );
}
