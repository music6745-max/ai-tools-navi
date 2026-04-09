import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Jasper AI 料金プラン徹底解説【2026年最新】Creator/Pro/Businessの違い",
  description: "AIライティングツールJasperのCreator(月49ドル)・Pro(月69ドル)・Businessの料金プランを徹底解説。",
  keywords: ["Jasper 料金", "Jasper AI", "AI ライティング 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/jasper-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Jasper AI 料金プラン徹底解説", description: "Creator/Pro/Businessを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Jasper AI料金</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Jasper AI 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">マーケ特化AIライティングツールJasperの全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Jasper料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Creator", price: "月49ドル（約7,350円）", desc: "1ユーザー。ブログ・SNS・広告コピー生成無制限。個人マーケター向け。" },
              { name: "Pro", price: "月69ドル（約10,350円）", desc: "最大5ユーザー。ブランドボイス・SEO最適化・チーム共有。マーケチーム向け。" },
              { name: "Business", price: "要問い合わせ", desc: "無制限ユーザー・API・SSO・カスタムAIモデル。エンタープライズ向け。" },
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
          <h2 className="text-2xl font-bold mb-4">ChatGPTとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Jasper:</span> マーケティング特化。ブランドボイス・テンプレート・SEO統合。月49ドル〜。</p>
            <p><span className="font-bold">ChatGPT Plus:</span> 汎用AI。月20ドル。マーケ以外にも使える。</p>
            <p className="mt-2 text-muted">→ マーケ専業ならJasper、汎用ならChatGPT。予算があれば併用が最強。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">ブログ副業を始める</h2>
          <ComparisonTableCTA services={[
            { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "国内最速サーバー", price: "月1,452円〜", badge: "ブログ定番" },
            { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "業界最大手", price: "月990円〜" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "AI・ブログ", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-writing-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ランキング</div><div className="font-bold text-sm">AIライティングTOP10</div></Link>
            <Link href="/guide/ai-seo-tools-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">SEO</div><div className="font-bold text-sm">AI SEOツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
