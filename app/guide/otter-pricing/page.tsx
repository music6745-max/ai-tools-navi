import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Otter.ai 料金プラン徹底解説【2026年最新】Free/Pro/Business/Enterprise",
  description: "AI文字起こしOtter.aiのFree・Pro(月8.33ドル)・Business・Enterpriseの料金プランを徹底解説。Notta/tl;dvとの比較も。",
  keywords: ["Otter.ai 料金", "Otter Pro", "AI 文字起こし 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/otter-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Otter.ai 料金プラン徹底解説", description: "Free/Pro/Business/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Otter.ai料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Otter.ai 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AI文字起こし・会議録作成のOtter.ai全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Otter.ai料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free (Basic)", price: "無料", desc: "月300分の文字起こし。1会議30分まで。話者識別対応。" },
              { name: "Pro", price: "月8.33ドル（約1,250円・年払い）", desc: "月1,200分。1会議90分。高度な検索・エクスポート。" },
              { name: "Business", price: "月20ドル/ユーザー", desc: "月6,000分。管理コンソール・Salesforce連携。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "無制限・SSO・SLA・専任サポート。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
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
            <Link href="/guide/ai-meeting-summarizer-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AI会議録ツール比較</div></Link>
            <Link href="/guide/ai-transcription" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声</div><div className="font-bold text-sm">AI文字起こし</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
