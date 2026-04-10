import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Adobe Firefly 料金・使い方徹底解説【2026年最新】商用安全なAI画像生成",
  description: "Adobe FireflyのCreative Cloud統合・単体プラン・無料枠を徹底解説。商用利用で安心な理由も。",
  keywords: ["Adobe Firefly 料金", "Firefly 無料", "商用 AI画像生成"],
  alternates: { canonical: `${siteConfig.url}/guide/adobe-firefly-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Adobe Firefly 料金徹底解説", description: "Creative Cloud統合・単体を解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Adobe Firefly</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Adobe Firefly 料金・使い方徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">Adobeストック画像でトレーニングされた「商用安全」なAI画像生成Fireflyの全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Adobe Firefly利用方法別料金</h2>
          <div className="space-y-4">
            {[
              { name: "Firefly無料プラン", price: "無料", desc: "月25クレジット(約25枚生成)。ウォーターマーク付き。お試し用。" },
              { name: "Firefly Premium", price: "月680円", desc: "月100クレジット。ウォーターマークなし。商用利用OK。単体利用したい人向け。" },
              { name: "Creative Cloud全アプリ", price: "月7,780円", desc: "Photoshop/Illustrator等にFireflyが統合。月1,000クレジット付き。プロ向け。" },
              { name: "Photoshop単体", price: "月3,280円", desc: "Photoshop内の生成塗りつぶし・生成拡張にFirefly搭載。月500クレジット。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">なぜ商用安全？</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">トレーニングデータ:</span> Adobe Stock・パブリックドメインのみでトレーニング。著作権侵害リスクが低い。</p>
            <p><span className="font-bold">補償制度:</span> Fireflyで生成した画像で著作権クレームが来た場合、Adobeが法的に補償(IP Indemnity)。</p>
            <p className="mt-2 text-muted">→ 商用素材としてMidjourneyやDALL-Eより安心して使える。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">デザインを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Webデザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/midjourney-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Midjourney料金</div></Link>
            <Link href="/guide/canva-ai-image-guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ツール</div><div className="font-bold text-sm">Canva AI画像生成</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
