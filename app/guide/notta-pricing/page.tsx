import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Notta 料金プラン徹底解説【2026年最新】Free/Pro/Business/Enterprise",
  description: "日本語AI文字起こしNottaのFree・Pro(月1,317円)・Business・Enterpriseの料金プランを徹底解説。Otter.aiとの比較も。",
  keywords: ["Notta 料金", "Notta Pro", "AI 文字起こし 日本語"],
  alternates: { canonical: `${siteConfig.url}/guide/notta-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Notta 料金プラン徹底解説", description: "Free/Pro/Business/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-11", dateModified: "2026-04-11" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Notta料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Notta 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">日本語AI文字起こしの定番Nottaの全プランを解説。日本語精度とOtter.aiとの違いも。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Notta料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "月120分の文字起こし。1回5分まで。日本語高精度。お試しに。" },
              { name: "Pro", price: "月1,317円（年払い）", desc: "月1,800分。1回90分。Zoom/Teams/Meet自動連携。個人の本格利用に。" },
              { name: "Business", price: "月2,508円/ユーザー", desc: "Pro全機能+チーム管理・共有ワークスペース。チーム導入向け。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SSO・SCIM・専任サポート・SLA。大企業向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Otter.aiとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Notta:</span> 日本語精度トップクラス。国産で日本語UIも充実。月1,317円〜。</p>
            <p><span className="font-bold">Otter.ai:</span> 英語精度No.1。日本語はやや弱い。月8.33ドル〜。</p>
            <p className="mt-2 text-muted">→ 日本語会議が多いならNotta、英語会議が多いならOtter。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・業務DX", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/otter-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Otter.ai料金</div></Link>
            <Link href="/guide/ai-meeting-summarizer-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">AI会議録ツール比較</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
