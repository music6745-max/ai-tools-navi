import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI検索エンジン比較5選【2026年最新】Perplexity/Phind/You.com/Bing/Google SGE",
  description: "回答型AI検索エンジン5選を徹底比較。Perplexity・Phind・You.com・Bing Chat・Google SGE(Gemini)の精度・引用・料金を解説。",
  keywords: ["AI 検索", "Perplexity", "Phind", "You.com", "Bing Chat", "Google SGE"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-search-engines-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI検索エンジン比較5選", description: "Perplexity/Phind/You.com/Bing/Google SGE徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI検索エンジン比較", item: `${siteConfig.url}/guide/ai-search-engines-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI検索エンジン比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI検索エンジン比較5選｜Perplexity/Phind/You.com/Bing/Google SGE</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          『リンクを返す』検索から『答えを返す』検索へ。AI検索エンジンは情報収集の効率を劇的に変えています。本記事では2026年注目の5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI検索エンジン5選</h2>
          <div className="space-y-4">
            {[
              { name: "Perplexity", badge: "総合トップ", desc: "回答精度・引用・UX全てが高水準。Pro版はGPT-4・Claude 3.5・Sonarなど好きなモデルを選択可。月額20ドル。" },
              { name: "Phind", badge: "開発者向け", desc: "プログラミング質問に特化。コード例・公式ドキュメント引用が得意。無料で使える。" },
              { name: "You.com", badge: "個人向け", desc: "AIモード切替・画像生成・コード実行など多機能。プラン豊富。" },
              { name: "Bing Chat (Copilot)", badge: "Microsoft", desc: "Microsoft Edgeに統合され、Office連携が強み。GPT-4 Turbo無料。" },
              { name: "Google SGE (Gemini)", badge: "Google", desc: "Google検索の生成AI機能。検索結果の上部に要約表示。日本語対応進む。" },
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
            <p><span className="font-bold">調査・リサーチ：</span> Perplexity Pro</p>
            <p><span className="font-bold">プログラミング：</span> Phind</p>
            <p><span className="font-bold">日常検索：</span> Google SGE・Bing Chat</p>
            <p><span className="font-bold">マルチモーダル活用：</span> You.com</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">情報収集スキルを高める</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化スクール", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI・データ分析", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-search-engines" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">検索</div><div className="font-bold text-sm">AI検索エンジン活用</div></Link>
            <Link href="/guide/ai-rag-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AI RAG構築</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
