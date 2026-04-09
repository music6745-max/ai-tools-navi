import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Midjourney 料金プラン徹底解説【2026年最新】Basic/Standard/Pro/Mega",
  description: "Midjourneyの料金プランBasic(月10ドル)・Standard(月30ドル)・Pro(月60ドル)・Mega(月120ドル)の違いを徹底解説。商用利用条件も網羅。",
  keywords: ["Midjourney 料金", "Midjourney Basic", "Midjourney Pro", "AI 画像生成 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/midjourney-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Midjourney 料金プラン徹底解説", description: "Basic/Standard/Pro/Megaを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Midjourney料金", item: `${siteConfig.url}/guide/midjourney-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Midjourney料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Midjourney 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI画像生成の王者Midjourneyの全4プランを日本語で詳しく解説。Basic・Standard・Pro・Megaの違い、商用利用条件も網羅します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Midjourney料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Basic", price: "月10ドル（約1,500円）", desc: "月約200枚生成可能（3.3時間のGPU時間）。個人の趣味利用に。" },
              { name: "Standard", price: "月30ドル（約4,500円）", desc: "月約900枚（15時間のGPU時間）+ Relaxモード無制限。本格利用の標準プラン。" },
              { name: "Pro", price: "月60ドル（約9,000円）", desc: "月約1,800枚（30時間）+ Relaxモード無制限 + ステルスモード（生成画像を非公開）。" },
              { name: "Mega", price: "月120ドル（約18,000円）", desc: "月約3,600枚（60時間）+ 全機能。大量生成するプロクリエイター向け。" },
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
          <h2 className="text-2xl font-bold mb-4">商用利用について</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">全有料プランで商用利用可能。</span></p>
            <p>ただし年間収益100万ドル以上の企業はPro以上のプランが必要です。</p>
            <p>無料トライアルで生成した画像は非商用のみ。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">DALL-E/Stable Diffusionとの料金比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Midjourney Basic:</span> 月10ドル（約200枚）</p>
            <p><span className="font-bold">DALL-E 3:</span> ChatGPT Plus(月20ドル)内で利用可</p>
            <p><span className="font-bold">Stable Diffusion:</span> 無料（ローカル実行）/ クラウドは月額制</p>
            <p className="mt-2 text-muted">→ 品質最優先ならMidjourney、コスパならSD、手軽さならDALL-E。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイティブスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・デザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-image-generator-comparison-detail" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">画像生成AI比較</div></Link>
            <Link href="/guide/ai-image-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ランキング</div><div className="font-bold text-sm">画像生成AI TOP10</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
