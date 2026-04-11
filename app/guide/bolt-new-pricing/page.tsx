import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Bolt.new 料金プラン徹底解説【2026年最新】Free/Pro/Teamの違い",
  description: "プロンプトからフルスタックWebアプリを生成するBolt.newのFree・Pro(月20ドル)・Teamの料金プランを徹底解説。",
  keywords: ["Bolt.new 料金", "Bolt new", "AI アプリ生成"],
  alternates: { canonical: `${siteConfig.url}/guide/bolt-new-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Bolt.new 料金プラン徹底解説", description: "Free/Pro/Teamを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-11", dateModified: "2026-04-11" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Bolt.new料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Bolt.new 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">プロンプトから数分でフルスタックWebアプリを生成するBolt.newの全プランを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Bolt.new料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "月のトークン制限あり。基本的なアプリ生成が可能。学習用途に。" },
              { name: "Pro", price: "月20ドル（約3,000円）", desc: "大幅なトークン枠+優先生成。本格的なアプリ開発・プロトタイピングに。" },
              { name: "Team", price: "要問い合わせ", desc: "チーム共有・管理機能。複数人でのプロジェクト開発に。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">v0.devとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Bolt.new:</span> フルスタック（バックエンド含む）アプリ生成。ゼロからアプリを作る。</p>
            <p><span className="font-bold">v0.dev:</span> UIコンポーネント生成特化。既存プロジェクトへの部品追加。</p>
            <p className="mt-2 text-muted">→ ゼロからアプリを作るならBolt、UIパーツ追加ならv0。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/v0-dev-review" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ツール</div><div className="font-bold text-sm">v0.dev解説</div></Link>
            <Link href="/guide/cursor-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Cursor料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
