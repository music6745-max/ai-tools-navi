import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI語学学習アプリ比較5選【2026年最新】Speak/ELSA/Duolingo Max/Lingvist/Memrise",
  description: "AI技術を活用した語学学習アプリ5選を徹底比較。Speak・ELSA Speak・Duolingo Max・Lingvist・Memriseの料金・特徴を解説。",
  keywords: ["AI 英語学習", "Speak", "ELSA", "Duolingo", "Lingvist", "Memrise"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-language-learning-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI語学学習アプリ比較5選", description: "Speak/ELSA/Duolingo/Lingvist/Memrise徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI語学学習比較", item: `${siteConfig.url}/guide/ai-language-learning-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI語学学習比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI語学学習アプリ比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          英会話レッスンに通わなくてもAI相手に毎日話せる時代。本記事ではAIで語学を学べる5アプリを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI語学学習アプリ5選</h2>
          <div className="space-y-4">
            {[
              { name: "Speak", badge: "AI会話", desc: "OpenAI出資の英会話AIアプリ。AIチューターと自然な会話を毎日練習。月額1,800円〜。" },
              { name: "ELSA Speak", badge: "発音矯正", desc: "AIによるネイティブ発音判定が秀逸。発音矯正に特化。月額1,200円〜。" },
              { name: "Duolingo Max", badge: "総合", desc: "GPT-4搭載の最上位プラン。AIチューター・ロールプレイ・誤答解説機能搭載。" },
              { name: "Lingvist", badge: "語彙学習", desc: "AIが自分のレベルに合わせて単語を最適化提示。効率的な語彙習得。" },
              { name: "Memrise", badge: "ネイティブ動画", desc: "ネイティブ動画とAI会話パートナーを統合。リアルな表現が学べる。" },
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 用途別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">英会話練習：</span> Speak・Duolingo Max</p>
            <p><span className="font-bold">発音矯正：</span> ELSA Speak</p>
            <p><span className="font-bold">語彙力強化：</span> Lingvist</p>
            <p><span className="font-bold">リアル表現：</span> Memrise</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">人と会話する英会話レッスン</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "毎日無制限レッスン", price: "月6,480円", badge: "定番" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師の高品質", price: "月2,980円〜" },
            { name: "AQUES", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "ハイブリッド", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学習</div><div className="font-bold text-sm">AI英語学習</div></Link>
            <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学習</div><div className="font-bold text-sm">AI英語ツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
