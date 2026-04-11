import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "PhotoRoom 料金プラン徹底解説【2026年最新】Free/Pro/Enterprise",
  description: "AI背景除去・商品写真作成PhotoRoomのFree・Pro(月12.99ドル)・Enterpriseの料金プランを徹底解説。EC出品写真の効率化に。",
  keywords: ["PhotoRoom 料金", "PhotoRoom", "AI 背景除去", "商品写真 AI"],
  alternates: { canonical: `${siteConfig.url}/guide/photoroom-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "PhotoRoom 料金プラン徹底解説", description: "Free/Pro/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-12", dateModified: "2026-04-12" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">PhotoRoom料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">PhotoRoom 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AI背景除去・商品写真作成アプリPhotoRoomの全プランを解説。メルカリ・Amazon出品の写真加工に最適。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">PhotoRoom料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "背景除去OK。PhotoRoomロゴ透かし付き。個人のお試し用。" },
              { name: "Pro", price: "月12.99ドル（約1,950円）", desc: "透かしなし。AIバッチ処理。テンプレート。EC事業者向け。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "API・大量バッチ処理・SSO。大規模EC向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">EC副業を始める</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・EC開発", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-background-removal" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI背景除去</div></Link>
            <Link href="/guide/ai-photo-restoration-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI写真高画質化</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
