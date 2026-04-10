import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Leonardo AI 料金プラン徹底解説【2026年最新】Free/Apprentice/Artisan/Maestro",
  description: "ゲームアート・キャラクター生成に強いLeonardo AIの料金プランを徹底解説。無料枠と有料プランの違いを網羅。",
  keywords: ["Leonardo AI 料金", "Leonardo AI 無料", "AI 画像生成"],
  alternates: { canonical: `${siteConfig.url}/guide/leonardo-ai-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Leonardo AI 料金プラン徹底解説", description: "Free/Apprentice/Artisan/Maestroを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Leonardo AI料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Leonardo AI 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">ゲームアートやキャラクター生成に人気のLeonardo AIの全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Leonardo AI料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "1日150トークン。基本モデル利用可。お試しに十分。" },
              { name: "Apprentice", price: "月12ドル（約1,800円）", desc: "月8,500トークン。全モデルアクセス。商用利用OK。" },
              { name: "Artisan", price: "月30ドル（約4,500円）", desc: "月25,000トークン。優先生成。プロクリエイター向け。" },
              { name: "Maestro", price: "月60ドル（約9,000円）", desc: "月60,000トークン。最優先生成。大量生成ユーザー向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイティブを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・デザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/midjourney-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Midjourney料金</div></Link>
            <Link href="/guide/stable-diffusion-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Stable Diffusion</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
