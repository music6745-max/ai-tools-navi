import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Runway 料金プラン徹底解説【2026年最新】Free/Standard/Pro/Unlimited/Enterprise",
  description: "AI動画生成Runwayの料金プランを徹底解説。Free・Standard・Pro・Unlimited・Enterpriseの違い、Gen-3の使い方も網羅。",
  keywords: ["Runway 料金", "Runway Gen-3", "AI 動画生成 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/runway-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Runway 料金プラン徹底解説", description: "Free/Standard/Pro/Unlimited/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Runway料金</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Runway 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AI動画生成の最前線Runway(Gen-3 Alpha)の全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Runway料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "125クレジット。試用目的。ウォーターマーク付き。" },
              { name: "Standard", price: "月15ドル（約2,250円）", desc: "月625クレジット。ウォーターマーク除去。1080p書き出し。" },
              { name: "Pro", price: "月35ドル（約5,250円）", desc: "月2,250クレジット。4K書き出し。優先生成。商用利用本格OK。" },
              { name: "Unlimited", price: "月95ドル（約14,250円）", desc: "Gen-2無制限+Gen-3大量枠。プロダクション向け。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "カスタム枠・API・SSO・専任サポート。" },
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
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">動画制作スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "動画編集", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-image-to-video-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">動画</div><div className="font-bold text-sm">画像→動画AI比較</div></Link>
            <Link href="/guide/ai-video-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ランキング</div><div className="font-bold text-sm">AI動画TOP10</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
