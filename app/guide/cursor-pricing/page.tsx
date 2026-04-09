import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Cursor 料金プラン徹底解説【2026年最新】Hobby/Pro/Businessの違い",
  description: "AIコードエディタCursorのHobby(無料)・Pro(月20ドル)・Businessの料金プランを徹底解説。GitHub Copilotとの比較も網羅。",
  keywords: ["Cursor 料金", "Cursor Pro", "AI コードエディタ 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/cursor-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Cursor 料金プラン徹底解説", description: "Hobby/Pro/Businessを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Cursor料金</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Cursor 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AIネイティブのコードエディタCursorの全プランを解説。GitHub Copilotとの比較も。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Cursor料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Hobby(無料)", price: "無料", desc: "月2,000回のコード補完+50回のプレミアムリクエスト。個人の試用に十分。" },
              { name: "Pro", price: "月20ドル（約3,000円）", desc: "コード補完無制限+月500回のプレミアムリクエスト+Max Mode。本格開発向け。" },
              { name: "Business", price: "月40ドル/ユーザー", desc: "Pro全機能+チーム管理・SAML SSO・利用統計・請求管理。チーム導入向け。" },
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
          <h2 className="text-2xl font-bold mb-4">GitHub Copilotとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Cursor Pro:</span> 月20ドル。エディタ全体がAI最適化。マルチファイル編集・エージェント機能。</p>
            <p><span className="font-bold">GitHub Copilot Individual:</span> 月10ドル。既存VSCode/JetBrainsで使える。コード補完中心。</p>
            <p className="mt-2 text-muted">→ AI中心の開発体験ならCursor、既存IDE維持ならCopilot。両方試して選ぶのがベスト。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発・AI", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/codeium-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Codeium料金</div></Link>
            <Link href="/guide/ai-coding-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ランキング</div><div className="font-bold text-sm">AIコーディングTOP10</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
