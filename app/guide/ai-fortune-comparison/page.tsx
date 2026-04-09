import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI占い・スピリチュアルツール比較5選【2026年最新】",
  description: "AIで占いを楽しめる5サービスを徹底比較。占いMy・ココナラAI占い・FortuneAI・StarAI・TarotGPTを解説。",
  keywords: ["AI 占い", "ココナラ", "占いMy", "TarotGPT"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-fortune-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI占いツール比較5選", description: "占いMy/ココナラ/FortuneAI/StarAI/TarotGPT徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI占い比較", item: `${siteConfig.url}/guide/ai-fortune-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI占い比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます ※占いはエンタメ目的としてお楽しみください。</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI占い・スピリチュアルツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIで気軽に占いができる時代。本記事では話題のAI占いサービス5選を徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI占い5選</h2>
          <div className="space-y-4">
            {[
              { name: "占いMy", badge: "国産", desc: "国内の人気AI占いサイト。タロット・四柱推命など多種対応。無料体験あり。" },
              { name: "ココナラAI占い", badge: "総合", desc: "ココナラのAI占いサービス。プロ占い師の知見をAIに学習。" },
              { name: "FortuneAI", badge: "海外発", desc: "英語圏で人気のAI占いアプリ。ホロスコープに強い。" },
              { name: "StarAI", badge: "占星術特化", desc: "AIによる本格占星術リーディング。星座読みが得意。" },
              { name: "TarotGPT", badge: "タロット", desc: "GPTベースのAIタロット。質問に応じてカードを引きストーリーを生成。" },
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
          <h2 className="text-xl font-bold mb-4">本格的に占いを学びたい方</h2>
          <ComparisonTableCTA services={[
            { name: "ココナラ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "プロ占い師に相談", price: "1,000円〜", badge: "プロ" },
            { name: "電話占いヴェルニ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "実力派揃い", price: "通話料金制" },
            { name: "電話占いウィル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "口コミ高評価", price: "通話料金制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-personality-test" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">エンタメ</div><div className="font-bold text-sm">AI性格診断</div></Link>
            <Link href="/guide/ai-for-content-creators" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">クリエイター向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
