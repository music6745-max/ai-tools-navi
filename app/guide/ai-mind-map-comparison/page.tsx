import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIマインドマップ・図表生成ツール比較5選【2026年最新】",
  description: "Whimsical・Miro AI・Mindshow・Taskade・MapifyのAIマインドマップ・図表生成ツール5選を徹底比較。",
  keywords: ["AI マインドマップ", "Whimsical", "Miro AI", "Taskade", "Mapify"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-mind-map-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIマインドマップツール比較5選", description: "Whimsical/Miro/Mindshow/Taskade/Mapify徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIマインドマップ比較", item: `${siteConfig.url}/guide/ai-mind-map-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIマインドマップ比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIマインドマップ・図表生成ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          アイデア整理・ブレインストーミングをAIで加速。本記事では人気の5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIマインドマップツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Whimsical", badge: "総合", desc: "マインドマップ・フローチャート・ワイヤーフレームを統合。AI生成機能あり。月10ドル〜。" },
              { name: "Miro AI", badge: "ホワイトボード", desc: "ホワイトボード老舗MiroのAI機能。ブレインストーミングや要約に強い。" },
              { name: "Mindshow", badge: "プレゼン連携", desc: "マインドマップから自動でスライド生成。プレゼン作成に便利。" },
              { name: "Taskade", badge: "タスク管理", desc: "マインドマップ＋タスク管理＋AIアシスタントを統合。チーム向き。" },
              { name: "Mapify", badge: "PDF→マップ", desc: "PDFやWebページから自動でマインドマップ生成。学習・調査に最適。" },
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
            <p><span className="font-bold">個人ブレスト：</span> Whimsical・Mapify</p>
            <p><span className="font-bold">チームコラボ：</span> Miro AI・Taskade</p>
            <p><span className="font-bold">プレゼン作成：</span> Mindshow</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化を加速</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・データ分析", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-presentation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIプレゼン作成</div></Link>
            <Link href="/guide/ai-knowledge-base" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIナレッジベース</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
