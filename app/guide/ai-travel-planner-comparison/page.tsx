import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI旅行プランナー比較5選【2026年最新】Layla/Wonderplan/Trip.com AI/Roam Around/Vacay",
  description: "希望条件を伝えるだけで旅程を作ってくれるAI旅行プランナー5選を徹底比較。Layla・Wonderplan・Trip.com AI・Roam Around・Vacayを解説。",
  keywords: ["AI 旅行", "AI トラベル", "Layla", "Wonderplan", "Trip.com AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-travel-planner-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI旅行プランナー比較5選", description: "Layla/Wonderplan/Trip.com/Roam Around/Vacay徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI旅行プランナー比較", item: `${siteConfig.url}/guide/ai-travel-planner-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI旅行プランナー比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI旅行プランナー比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          『3泊4日のローマ』『家族でのハワイ』など条件を伝えるだけで完成度の高い旅程を作ってくれるAI旅行プランナー。本記事では人気5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI旅行プランナー5選</h2>
          <div className="space-y-4">
            {[
              { name: "Layla", badge: "話題沸騰", desc: "AIで旅程作成からホテル・フライト予約まで。ChatGPT風UI。" },
              { name: "Wonderplan", badge: "詳細プラン", desc: "観光・グルメ・宿泊まで詳細な日次プランを提示。無料枠あり。" },
              { name: "Trip.com AI", badge: "予約連携", desc: "Trip.comのAIアシスタント。プラン提案＋予約まで一気通貫。" },
              { name: "Roam Around", badge: "シンプル", desc: "シンプルで使いやすいAI旅程ジェネレーター。日本語対応。" },
              { name: "Vacay", badge: "対話型", desc: "対話形式で要望を整理しながら旅程を作成。リアルチャット感覚。" },
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
          <h2 className="text-xl font-bold mb-4">旅行予約サービス</h2>
          <ComparisonTableCTA services={[
            { name: "じゃらん", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "リクルート系", price: "予約無料", badge: "国内定番" },
            { name: "楽天トラベル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "楽天ポイント", price: "予約無料" },
            { name: "Booking.com", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "海外旅行に強い", price: "予約無料" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-travel-planning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">旅行</div><div className="font-bold text-sm">AI旅行計画</div></Link>
            <Link href="/guide/ai-for-event-planners" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">イベント企画AI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
