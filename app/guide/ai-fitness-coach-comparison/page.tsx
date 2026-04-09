import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIフィットネスコーチ比較5選【2026年最新】Freeletics/Fitbod/JEFIT/Aaptiv/Future",
  description: "AIで自分専用のトレーニングプランを作成する5サービスを徹底比較。Freeletics・Fitbod・JEFIT・Aaptiv・Futureを解説。",
  keywords: ["AI フィットネス", "Freeletics", "Fitbod", "JEFIT", "Aaptiv", "Future"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-fitness-coach-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIフィットネスコーチ比較5選", description: "Freeletics/Fitbod/JEFIT/Aaptiv/Future徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIフィットネスコーチ比較", item: `${siteConfig.url}/guide/ai-fitness-coach-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIフィットネスコーチ比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIフィットネスコーチ比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          パーソナルトレーナーが高すぎると感じる方必見。AIが個別プランを作り、進捗に合わせて自動調整してくれる5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIフィットネスコーチ5選</h2>
          <div className="space-y-4">
            {[
              { name: "Freeletics", badge: "自重特化", desc: "器具なし自重トレーニング特化。AIが体力に合わせてプランを自動更新。月額1,500円〜。" },
              { name: "Fitbod", badge: "ジム派", desc: "ジムでのウェイトトレーニングをAIが提案。マシンの選択肢豊富。月額12.99ドル〜。" },
              { name: "JEFIT", badge: "記録重視", desc: "トレーニング記録機能が秀逸。AIによる週次フィードバックも充実。月額12.99ドル〜。" },
              { name: "Aaptiv", badge: "音声ガイド", desc: "音声でリードしてくれるAIフィットネス。ランニング・ヨガ・筋トレ網羅。" },
              { name: "Future", badge: "リアルコーチ", desc: "AIマッチでリアルパーソナルコーチと繋ぐハイブリッドサービス。月額149ドル〜。" },
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
            <p><span className="font-bold">自宅トレーニング：</span> Freeletics・Aaptiv</p>
            <p><span className="font-bold">ジム派：</span> Fitbod・JEFIT</p>
            <p><span className="font-bold">本格指導：</span> Future</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">本格的にトレーニング</h2>
          <ComparisonTableCTA services={[
            { name: "RIZAP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "結果にコミット", price: "無料カウンセリング", badge: "本格" },
            { name: "chocoZAP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "コンビニジム", price: "月3,278円〜" },
            { name: "24/7Workout", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "全額返金保証", price: "無料カウンセリング" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-fitness" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">フィットネス向けAI</div></Link>
            <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">ヘルスケアAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
