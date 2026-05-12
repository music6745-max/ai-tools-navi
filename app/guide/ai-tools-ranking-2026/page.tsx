import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】AIツールおすすめランキングTOP10｜ChatGPT/Claude/Geminiから厳選",
  description:
    "2026年最新のAIツールおすすめランキングTOP10をご紹介。ChatGPT・Claude・Geminiから画像生成・動画生成・コーディングAIまで、厳選した人気ツールを徹底比較。",
  keywords: ["AI ツール おすすめ", "AI ランキング", "ChatGPT", "Claude", "Gemini"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-tools-ranking-2026` },
};

const items = [
  { rank: 1, name: "ChatGPT (OpenAI)", feat: "汎用AIの王道、画像生成も統合", price: "無料 / Plus月20ドル", link: "/guide/ai-coding-assistant" },
  { rank: 2, name: "Claude (Anthropic)", feat: "長文・コーディング・分析に強い", price: "無料 / Pro月20ドル", link: "/guide/ai-llm-api-comparison" },
  { rank: 3, name: "Gemini (Google)", feat: "Google検索連携+マルチモーダル", price: "無料 / Advanced月2,900円", link: "/guide/ai-search-engines-comparison" },
  { rank: 4, name: "Midjourney", feat: "高品質な画像生成の代表格", price: "月10ドル〜", link: "/guide/ai-image-generator-comparison-detail" },
  { rank: 5, name: "Perplexity", feat: "引用付きAI検索の定番", price: "無料 / Pro月20ドル", link: "/guide/ai-search-engines-comparison" },
  { rank: 6, name: "Cursor", feat: "AIネイティブのコードエディタ", price: "月20ドル", link: "/guide/ai-no-code-comparison" },
  { rank: 7, name: "Notion AI", feat: "ドキュメント作成をAI化", price: "月10ドル", link: "/tools/notion-ai" },
  { rank: 8, name: "Suno AI", feat: "歌詞付き楽曲を即生成", price: "月10ドル〜", link: "/guide/ai-music-creation-comparison" },
  { rank: 9, name: "ElevenLabs", feat: "感情豊かな音声合成", price: "月5ドル〜", link: "/guide/ai-voice-cloning-comparison" },
  { rank: 10, name: "Sora (OpenAI)", feat: "高品質AI動画生成", price: "ChatGPT Plus内", link: "/guide/ai-image-to-video-comparison" },
];

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIツールおすすめランキングTOP10", description: "ChatGPT・Claude・Geminiから厳選", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIツールランキング", item: `${siteConfig.url}/guide/ai-tools-ranking-2026` }] };
  const itemListLd = { "@context": "https://schema.org", "@type": "ItemList", name: "AIツールTOP10", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: `${siteConfig.url}${it.link}` })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIツールランキング</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">ランキング</span>
          <span className="text-xs text-muted ml-3">読了 15分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">【2026年最新】AIツールおすすめランキングTOP10</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          2026年に使うべきAIツールをランキング形式で紹介。汎用AIから画像・音声・動画・コーディング特化まで、厳選した10選をお届けします。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AIツールTOP10</h2>
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
          <h2 className="text-xl font-bold mb-4">AIスキルを体系的に学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化スクール", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Web開発・AI", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>
      </div>
    </>
  );
}
