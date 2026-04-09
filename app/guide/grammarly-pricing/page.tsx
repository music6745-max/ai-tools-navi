import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Grammarly 料金プラン徹底解説【2026年最新】Free/Premium/Businessの違い",
  description: "英文校正AIツールGrammarlyのFree・Premium(月12ドル)・Businessの料金プランを徹底解説。ProWritingAidとの比較も。",
  keywords: ["Grammarly 料金", "Grammarly Premium", "英文校正 AI"],
  alternates: { canonical: `${siteConfig.url}/guide/grammarly-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Grammarly 料金プラン徹底解説", description: "Free/Premium/Businessを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Grammarly料金</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Grammarly 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">世界最大の英文校正AIツールGrammarlyの全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Grammarly料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "基本文法チェック・スペルチェック・句読点修正。日常メールに十分。" },
              { name: "Premium", price: "月12ドル（約1,800円・年払い）", desc: "高度な文法・語彙・トーン検出・盗作チェック・AI生成テキスト検出。プロ向け。" },
              { name: "Business", price: "月15ドル/ユーザー", desc: "Premium全機能+チームスタイルガイド・管理コンソール・優先サポート。" },
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
          <h2 className="text-xl font-bold mb-4">英語学習も並行で</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "毎日無制限", price: "月6,480円", badge: "定番" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師", price: "月2,980円〜" },
            { name: "AQUES", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "ハイブリッド", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-grammar-check" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語</div><div className="font-bold text-sm">AI文法チェッカー比較</div></Link>
            <Link href="/guide/deepl-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">DeepL料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
