import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIメンタルケア・カウンセリングアプリ比較5選【2026年最新】",
  description: "AIで気軽にメンタルケアできる5アプリを徹底比較。Woebot・Wysa・Replika・Awarefy・emolを解説。",
  keywords: ["AI メンタル", "AI カウンセリング", "Woebot", "Wysa", "Replika", "Awarefy", "emol"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-mental-care-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIメンタルケア比較5選", description: "Woebot/Wysa/Replika/Awarefy/emol徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIメンタルケア比較", item: `${siteConfig.url}/guide/ai-mental-care-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIメンタルケア比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます ※本記事は医療助言ではありません。深刻な症状は医療機関へ。</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIメンタルケア・カウンセリングアプリ比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIで気軽にメンタルケアができる時代。本記事では海外・国内の主要5アプリを徹底比較し、自分に合うものを選ぶ基準を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIメンタルケアアプリ5選</h2>
          <div className="space-y-4">
            {[
              { name: "Woebot", badge: "CBTベース", desc: "認知行動療法(CBT)に基づくAIチャットボット。米国で広く利用される。" },
              { name: "Wysa", badge: "総合", desc: "AIチャット+人間カウンセラー連携。世界500万人以上が利用。" },
              { name: "Replika", badge: "AIコンパニオン", desc: "親しみやすいAIキャラクターと会話。孤独感の軽減に。" },
              { name: "Awarefy", badge: "国産", desc: "国産メンタルヘルスアプリ。CBTとAIで日々のセルフケアを支援。" },
              { name: "emol", badge: "国産", desc: "感情記録AIエージェント。日本語特化で気軽に使える。" },
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
          <h2 className="text-xl font-bold mb-4">本格的なオンラインカウンセリング</h2>
          <ComparisonTableCTA services={[
            { name: "うららか相談室", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "国家資格カウンセラー", price: "1回5,000円〜", badge: "専門家" },
            { name: "cotree", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "オンライン心理相談", price: "1回6,600円〜" },
            { name: "Kimochi", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "メンタルケアサブスク", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">ヘルスケアAI</div></Link>
            <Link href="/guide/ai-personality-test" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">エンタメ</div><div className="font-bold text-sm">AI性格診断</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
