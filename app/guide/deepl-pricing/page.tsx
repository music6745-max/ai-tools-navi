import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "DeepL 料金プラン徹底解説【2026年最新】Free/Pro/API/Businessの違い",
  description: "DeepL翻訳のFree・Pro・API・Businessの料金プランを徹底解説。Google翻訳との精度比較、日本語対応状況も網羅。",
  keywords: ["DeepL 料金", "DeepL Pro", "DeepL API", "AI 翻訳 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/deepl-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "DeepL 料金プラン徹底解説", description: "Free/Pro/API/Businessを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">DeepL料金</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">DeepL 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">ビジネス翻訳の定番DeepLの全プランを日本語で詳しく解説。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">DeepL料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "DeepL Free", price: "無料", desc: "月間50万文字まで翻訳可能。Web版で利用。ドキュメント翻訳は月3ファイルまで。" },
              { name: "DeepL Pro Starter", price: "月額1,200円", desc: "文字数制限撤廃・全ドキュメント形式対応・用語集機能・セキュリティ強化。" },
              { name: "DeepL Pro Advanced", price: "月額3,800円", desc: "Starterの全機能+チーム共有・CAT統合・高度な用語集・優先サポート。" },
              { name: "DeepL Pro Ultimate", price: "月額7,500円", desc: "最大量の翻訳+SSO+管理コンソール。大規模チーム向け。" },
              { name: "DeepL API Free", price: "無料", desc: "月50万文字まで。開発者向けAPI。" },
              { name: "DeepL API Pro", price: "従量制(25ドル/100万文字)", desc: "文字数無制限の従量課金。アプリ組み込みに。" },
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
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "毎日無制限レッスン", price: "月6,480円", badge: "おすすめ" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師", price: "月2,980円〜" },
            { name: "AQUES", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "ハイブリッド", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-translation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">翻訳</div><div className="font-bold text-sm">AI翻訳ツール比較</div></Link>
            <Link href="/guide/ai-language-learning-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学習</div><div className="font-bold text-sm">AI語学学習</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
