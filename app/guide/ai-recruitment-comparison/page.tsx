import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI採用ツール比較5選【2026年最新】HireVue/Eightfold/HRBrain/Findy/HRMOS",
  description: "AIを活用した採用支援ツール5選を徹底比較。スカウト・面接・スキルマッチングを自動化し採用成功率を上げる方法を解説。",
  keywords: ["AI 採用", "AI 人事", "HireVue", "Eightfold", "HRBrain", "Findy", "HRMOS"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-recruitment-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI採用ツール比較5選", description: "HireVue/Eightfold/HRBrain/Findy/HRMOS徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI採用ツール比較", item: `${siteConfig.url}/guide/ai-recruitment-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI採用ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI採用ツール比較5選｜HireVue/Eightfold/HRBrain/Findy/HRMOS</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          人材獲得競争が激化する2026年、AI採用ツールは中小企業にとっても必須の選択肢に。本記事では国内外の代表的な5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI採用ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "HireVue", badge: "動画面接", desc: "AIによる動画面接解析の世界的定番。表情・話し方・回答内容を総合評価。" },
              { name: "Eightfold AI", badge: "タレントマネジメント", desc: "ディープラーニングで候補者のスキルとキャリア軌跡を予測。グローバル大手で多数導入。" },
              { name: "HRBrain", badge: "国産HRTech", desc: "日本企業向けの人事評価・採用・タレマネ統合プラットフォーム。AIで異動シミュレーションも可能。" },
              { name: "Findy", badge: "エンジニア特化", desc: "GitHubのコード活動から技術力をAIで偏差値化。エンジニア採用に特化したスカウト型。" },
              { name: "HRMOS", badge: "BizReach系", desc: "ビズリーチの採用管理システム。AIでカジュアル面談の機会創出を支援。" },
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 採用フェーズ別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">候補者プールの構築：</span> Eightfold・Findy</p>
            <p><span className="font-bold">スクリーニング：</span> HireVue（動画面接）</p>
            <p><span className="font-bold">採用管理：</span> HRMOS・HRBrain</p>
            <p><span className="font-bold">エンジニア採用：</span> Findy</p>
            <p><span className="font-bold">人事評価まで一貫：</span> HRBrain</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">転職を検討中の人材向け</h2>
          <ComparisonTableCTA services={[
            { name: "ビズリーチ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "ハイクラス転職の定番", price: "無料登録", badge: "ハイクラス" },
            { name: "doda", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "総合転職エージェント", price: "無料登録" },
            { name: "リクルートエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "求人数業界最大", price: "無料登録" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-hr" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">人事向けAI</div></Link>
            <Link href="/guide/ai-resume" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">キャリア</div><div className="font-bold text-sm">AI履歴書ツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
