import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI履歴書・職務経歴書ツール比較5選【2026年最新】Resume Worded/Teal/Kickresume/Rezi/Enhancv",
  description: "AIで履歴書を最適化する5ツールを徹底比較。Resume Worded・Teal・Kickresume・Rezi・Enhancvの料金・機能・ATS対応を解説。",
  keywords: ["AI 履歴書", "Resume Worded", "Teal", "Kickresume", "Rezi", "Enhancv", "ATS"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-resume-tools-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI履歴書ツール比較5選", description: "Resume Worded/Teal/Kickresume/Rezi/Enhancv徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI履歴書ツール比較", item: `${siteConfig.url}/guide/ai-resume-tools-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI履歴書ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI履歴書・職務経歴書ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          外資系・グローバル企業の応募ではATS(Applicant Tracking System)対応が必須。本記事ではAIで履歴書を最適化する5ツールを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI履歴書ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Resume Worded", badge: "ATS最適化", desc: "LinkedInで100万人以上が利用。AIスコアでATS突破率を改善。月額29ドル〜。" },
              { name: "Teal", badge: "求職管理", desc: "履歴書作成＋求人管理＋応募追跡を統合。米国求職者に人気。フリーミアム。" },
              { name: "Kickresume", badge: "デザイン豊富", desc: "プロデザイナーのテンプレ40種以上。月額9ドル〜と手頃。" },
              { name: "Rezi", badge: "ATS特化", desc: "ATS突破に特化したAI解析。テック企業応募に強い。月額29ドル〜。" },
              { name: "Enhancv", badge: "クリエイティブ", desc: "個性的なデザインの履歴書テンプレが豊富。クリエイティブ職におすすめ。月額19.99ドル〜。" },
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
            <p><span className="font-bold">外資系応募：</span> Resume Worded・Rezi</p>
            <p><span className="font-bold">複数応募管理：</span> Teal</p>
            <p><span className="font-bold">デザイン重視：</span> Enhancv・Kickresume</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">日本国内の転職エージェント</h2>
          <ComparisonTableCTA services={[
            { name: "ビズリーチ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "ハイクラス転職", price: "登録無料", badge: "ハイクラス" },
            { name: "doda", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "総合エージェント", price: "登録無料" },
            { name: "リクルートエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "求人数業界最大", price: "登録無料" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-resume" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">キャリア</div><div className="font-bold text-sm">AI履歴書活用</div></Link>
            <Link href="/guide/ai-recruitment-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AI採用ツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
