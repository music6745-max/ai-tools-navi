import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Windsurf (Codeium) 料金プラン徹底解説【2026年最新】",
  description: "AIコードエディタWindsurf(旧Codeium)のFree/Pro/Enterpriseプランを解説。Cascade AI機能も。",
  keywords: ["Windsurf 料金", "Codeium 料金", "Windsurf 無料", "AIコードエディタ"],
  alternates: { canonical: `${siteConfig.url}/guide/windsurf-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Windsurf (Codeium) 料金プラン徹底解説", description: "Free/Pro/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Windsurfは無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "Freeプランで基本AI補完が利用可能。Cascade機能は月50アクションまで。" } },
    { "@type": "Question", name: "CursorとWindsurfの違いは？", acceptedAnswer: { "@type": "Answer", text: "Cursorはコード編集特化、WindsurfはCascadeによるエージェント機能が特徴。" } },
    { "@type": "Question", name: "VSCodeの拡張機能として使える？", acceptedAnswer: { "@type": "Answer", text: "WindsurfはVSCodeベースの独立エディタ。別途Codeium拡張をVSCodeで利用することも可能。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Windsurf料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Windsurf (Codeium) 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AIコードエディタWindsurf（旧Codeium）のFree・Pro・Enterpriseプランを解説。Cascade AIエージェント機能も詳しく紹介します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Windsurf料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "基本的なAI補完。月50 Flow Actionクレジット。Windsurfの操作感を試したい方に。" },
              { name: "Pro", price: "月15ドル（約2,250円）", desc: "無制限Flow Action。Cascade（AIエージェント）フル利用。高速モデル対応。本格開発に。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SSO/SCIM/監査ログ。カスタムモデル対応。専任サポート。企業導入に。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cascade AIの特徴</h2>
          <div className="space-y-3">
            {[
              { title: "コードベース理解", desc: "プロジェクト全体を把握してコンテキストに沿った提案を行います。" },
              { title: "マルチファイル編集", desc: "複数ファイルを横断した変更を自動実行。リファクタリングも効率的に。" },
              { title: "ターミナル統合", desc: "コマンド実行と結果の自動解析。エラー修正もAIがサポート。" },
              { title: "リアルタイムプレビュー", desc: "変更をすぐに確認。開発サイクルを高速化します。" },
            ].map((f) => (
              <div key={f.title} className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
                <p><span className="font-bold">{f.title}:</span> {f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Windsurfは無料で使えますか？", a: "Freeプランで基本AI補完が利用可能です。Cascade機能は月50アクションまで使えます。" },
              { q: "CursorとWindsurfの違いは？", a: "Cursorはコード編集に特化しTab補完やAgent機能が強み。WindsurfはCascadeによるプロジェクト全体を理解したエージェント機能が特徴です。" },
              { q: "VSCodeの拡張機能として使える？", a: "WindsurfはVSCodeベースの独立エディタです。別途Codeium拡張としてVSCodeで利用することも可能です。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/cursor-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Cursor料金</div></Link>
            <Link href="/guide/github-copilot-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">GitHub Copilot料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
