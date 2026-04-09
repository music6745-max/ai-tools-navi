import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Perplexity 料金プラン徹底解説【2026年最新】Free/Pro/Enterprise",
  description: "Perplexity AIのFree・Pro(月20ドル)・Enterpriseの料金プランを徹底解説。モデル選択・ファイルアップロード・API利用の違いを網羅。",
  keywords: ["Perplexity 料金", "Perplexity Pro", "AI 検索 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/perplexity-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Perplexity 料金プラン徹底解説", description: "Free/Pro/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Perplexity料金", item: `${siteConfig.url}/guide/perplexity-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Perplexity料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Perplexity 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          引用付きで正確な回答を返すAI検索エンジンPerplexity。Free・Pro・Enterpriseの料金プランの違いを日本語で詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Perplexity料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "基本的なAI検索。1日の高度検索(Pro Search)は5回まで。日常の調べ物に十分。" },
              { name: "Pro", price: "月20ドル（約3,000円）", desc: "Pro Search無制限・GPT-4o/Claude/Sonar等のモデル選択・ファイルアップロード・画像生成。調査業務の効率化に必須。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SSO・管理コンソール・データ保持制御・優先サポート。チーム・組織向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-primary font-bold text-sm">{p.price}</span>
                </div>
                <p className="text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FreeとProの主な違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Pro Search回数:</span> Free 5回/日 → Pro 無制限</p>
            <p><span className="font-bold">モデル選択:</span> Free なし → Pro GPT-4o/Claude/Sonar Pro選択可</p>
            <p><span className="font-bold">ファイル:</span> Free なし → Pro PDF/画像アップロード＆分析</p>
            <p><span className="font-bold">画像生成:</span> Free なし → Pro DALL-E 3/Playground搭載</p>
            <p><span className="font-bold">API:</span> Free なし → Pro 月額内でAPI利用可（pplx-api）</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ChatGPT Plusとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Perplexity Pro:</span> 月20ドル。検索＋引用に特化。リサーチ向き。</p>
            <p><span className="font-bold">ChatGPT Plus:</span> 月20ドル。汎用＋画像生成＋音声。幅広い用途。</p>
            <p className="mt-2 text-muted">→ 調査・リサーチ特化ならPerplexity、汎用ならChatGPT。両方使い分けるのが最強。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI活用スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化スクール", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Web・AI開発", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-search-engines-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">検索</div><div className="font-bold text-sm">AI検索エンジン比較</div></Link>
            <Link href="/guide/chatgpt-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">ChatGPT料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
