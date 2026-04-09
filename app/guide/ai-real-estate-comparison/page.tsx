import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI不動産業務支援ツール比較5選【2026年最新】",
  description: "不動産業務をAIで効率化する5サービスを徹底比較。HouseCanary・Tokyo Lease Capital・SUGAR・Chiseki AI・Reonomyを解説。",
  keywords: ["AI 不動産", "HouseCanary", "Reonomy"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-real-estate-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI不動産業務支援ツール比較5選", description: "HouseCanary/Tokyo Lease/SUGAR/Chiseki/Reonomy徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI不動産比較", item: `${siteConfig.url}/guide/ai-real-estate-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI不動産比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI不動産業務支援ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          査定・物件マッチング・契約書チェックなど不動産業務をAIで効率化。本記事では国内外の5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI不動産ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "HouseCanary", badge: "米国査定", desc: "AI住宅査定の老舗。米国データに基づく予測モデルで投資家に人気。" },
              { name: "Tokyo Lease Capital", badge: "国産", desc: "日本の賃貸物件向けAI査定。賃料予測・空室率分析に強い。" },
              { name: "SUGAR", badge: "AI接客", desc: "不動産業者向けの顧客対応自動化AI。問い合わせ即時応答を実現。" },
              { name: "Chiseki AI", badge: "国産OCR", desc: "登記簿・図面からAIで情報抽出。業務効率化に貢献。" },
              { name: "Reonomy", badge: "商業不動産", desc: "米国商業不動産のリサーチプラットフォーム。AIで物件情報を統合提示。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">不動産投資・査定サービス</h2>
          <ComparisonTableCTA services={[
            { name: "HOME4U", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "NTTデータの一括査定", price: "完全無料", badge: "信頼度No.1" },
            { name: "イエウール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "全国2000社以上", price: "完全無料" },
            { name: "COZUCHI", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "不動産クラファン", price: "口座開設無料" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-real-estate" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">不動産業向けAI</div></Link>
            <Link href="/guide/ai-for-finance" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">金融向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
