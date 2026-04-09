import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI瞑想・マインドフルネスアプリ比較5選【2026年最新】",
  description: "AIでパーソナライズされた瞑想を提供するアプリ5選を徹底比較。Calm・Headspace・Insight Timer・Balance・Smiling Mindを解説。",
  keywords: ["AI 瞑想", "マインドフルネス", "Calm", "Headspace"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-meditation-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI瞑想アプリ比較5選", description: "Calm/Headspace/Insight Timer/Balance/Smiling Mind徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI瞑想比較", item: `${siteConfig.url}/guide/ai-meditation-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI瞑想比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI瞑想・マインドフルネスアプリ比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIで毎日の瞑想を最適化する時代。本記事では世界中で愛されている5アプリを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめ瞑想アプリ5選</h2>
          <div className="space-y-4">
            {[
              { name: "Calm", badge: "総合", desc: "世界1億ダウンロード超の人気アプリ。睡眠音楽・瞑想・ヨガ。月額1,500円〜。" },
              { name: "Headspace", badge: "初心者", desc: "初心者向けに段階的なコース。会社員向けプログラムも充実。月額1,500円〜。" },
              { name: "Insight Timer", badge: "無料", desc: "10万以上の無料瞑想コンテンツ。コミュニティ機能あり。基本無料。" },
              { name: "Balance", badge: "パーソナライズ", desc: "AIが個人に合わせたプログラムを生成。初年度無料キャンペーンあり。" },
              { name: "Smiling Mind", badge: "教育向け", desc: "豪州発の非営利アプリ。子供向けプログラムが充実。完全無料。" },
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
          <h2 className="text-xl font-bold mb-4">健康と心のケア</h2>
          <ComparisonTableCTA services={[
            { name: "うららか相談室", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "国家資格カウンセラー", price: "1回5,000円〜", badge: "専門家" },
            { name: "ヨガスタジオLAVA", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "ホットヨガ", price: "月額制" },
            { name: "オンラインヨガSOELU", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "自宅ヨガ", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-mental-care-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">健康</div><div className="font-bold text-sm">AIメンタルケア</div></Link>
            <Link href="/guide/ai-fitness-coach-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">健康</div><div className="font-bold text-sm">AIフィットネス</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
