import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Zapier 料金プラン徹底解説【2026年最新】Free/Starter/Professional/Team/Enterprise",
  description: "ワークフロー自動化Zapierの料金プランを徹底解説。Makeとの料金比較も網羅。",
  keywords: ["Zapier 料金", "Zapier Free", "自動化 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/zapier-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Zapier 料金プラン徹底解説", description: "Free/Starter/Professional/Team/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Zapier料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Zapier 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">6,000以上のアプリを繋ぐZapierの全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Zapier料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "月100タスク・5 Zap。個人の軽い自動化に。" },
              { name: "Starter", price: "月20ドル（約3,000円）", desc: "月750タスク・20 Zap・マルチステップ。" },
              { name: "Professional", price: "月49ドル（約7,350円）", desc: "月2,000タスク・無制限Zap・条件分岐・フォーマッター。" },
              { name: "Team", price: "月69ドル（約10,350円）", desc: "月2,000タスク+チーム共有・管理機能。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SLA・SSO・専任サポート。大企業向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Makeとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Zapier Free:</span> 月100タスク → <span className="font-bold">Make Free:</span> 月1,000オペレーション</p>
            <p><span className="font-bold">Zapier Starter:</span> 月20ドルで750タスク → <span className="font-bold">Make Core:</span> 月9ドルで10,000オペレーション</p>
            <p className="mt-2 text-muted">→ コスパではMakeが圧倒的に有利。アプリ連携数はZapierが上。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">自動化を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・自動化", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/make-integromat-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Make料金</div></Link>
            <Link href="/guide/ai-automation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">AI自動化ツール比較</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
