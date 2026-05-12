import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "HeyGen 料金プラン徹底解説【2026年最新】Free/Creator/Business/Enterprise",
  description: "AIアバター動画HeyGenのFree・Creator(月29ドル)・Business(月89ドル)・Enterpriseの料金プランを徹底解説。",
  keywords: ["HeyGen 料金", "HeyGen", "AI アバター動画", "AI プレゼン動画"],
  alternates: { canonical: `${siteConfig.url}/guide/heygen-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "HeyGen 料金プラン徹底解説", description: "Free/Creator/Business/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-12", dateModified: "2026-04-12" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">HeyGen料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">HeyGen 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AIアバターで顔出し不要のプレゼン動画を作れるHeyGenの全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">HeyGen料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "月1クレジット(約1分の動画)。ウォーターマーク付き。お試し用。" },
              { name: "Creator", price: "月29ドル（約4,350円）", desc: "月15クレジット(約15分)。100以上のAIアバター。ウォーターマークなし。" },
              { name: "Business", price: "月89ドル（約13,350円）", desc: "月30クレジット。カスタムアバター作成。ブランドキット。チーム向け。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "無制限クレジット・API・SSO・専任サポート。大規模導入向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Synthesiaとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">HeyGen:</span> アバター品質が高い。多言語リップシンクが秀逸。月29ドル〜。</p>
            <p><span className="font-bold">Synthesia:</span> 研修・教育動画に特化。テンプレートが豊富。月22ドル〜。</p>
            <p className="mt-2 text-muted">→ マーケ・SNS動画ならHeyGen、社内研修ならSynthesia。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">動画制作を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "動画編集", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/synthesia" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Synthesia料金</div></Link>
            <Link href="/guide/ai-video-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ランキング</div><div className="font-bold text-sm">AI動画TOP10</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
