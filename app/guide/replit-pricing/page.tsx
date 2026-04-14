import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Replit 料金プラン徹底解説【2026年最新】Free/Replit Core/Teams",
  description: "クラウドIDE Replitの無料プラン・Core(月25ドル)・Teamsの料金プランとAI機能Replit Agentを解説。",
  keywords: ["Replit 料金", "Replit Core", "Replit Agent", "Replit 無料", "クラウドIDE"],
  alternates: { canonical: `${siteConfig.url}/guide/replit-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Replit 料金プラン徹底解説", description: "Free/Replit Core/Teamsを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Replitは無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "Freeプランで基本的なIDE機能が無料です。AI機能は制限されます。" } },
    { "@type": "Question", name: "Replit Agentとは？", acceptedAnswer: { "@type": "Answer", text: "自然言語で指示するだけでアプリを自動生成するAI機能。Coreプランで無制限利用可能。" } },
    { "@type": "Question", name: "Cursorとの違いは？", acceptedAnswer: { "@type": "Answer", text: "Replitはクラウド完結でデプロイまで一体型。CursorはローカルIDEでコード編集に特化。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Replit料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Replit 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">クラウドIDE ReplitのFree・Core・Teamsプランの料金とAI機能Replit Agentを日本語で徹底解説します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Replit料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "基本IDE機能。限定的なAI機能。パブリックRepl無制限。プログラミング学習や簡単なプロジェクトに。" },
              { name: "Replit Core", price: "月25ドル（約3,750円）", desc: "Replit Agent無制限。プライベートRepl。高速VM。Ghostwriter（AI補完）フル機能。本格開発に最適。" },
              { name: "Teams", price: "月30ドル/ユーザー（約4,500円）", desc: "Core全機能+チーム管理。組織管理。マルチプレイヤー開発。チームでの共同開発に。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Replit Agentの特徴</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">自然言語でアプリ構築:</span> 説明するだけでフルスタックアプリを自動生成</p>
            <p><span className="font-bold">デプロイ一体型:</span> 作ったアプリをそのままReplit上でホスティング</p>
            <p><span className="font-bold">データベース統合:</span> PostgreSQL等をワンクリックで追加</p>
            <p><span className="font-bold">マルチ言語対応:</span> Python/JavaScript/TypeScript/Go/Java等</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">プラン選びのポイント</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">学習・個人開発なら:</span> Freeプランで基本的なコーディングが可能。まずは無料で試そう</p>
            <p><span className="font-bold">AIでアプリ開発なら:</span> CoreプランでReplit Agentを無制限に活用。最も人気のプラン</p>
            <p><span className="font-bold">チーム開発なら:</span> Teamsプランで共同編集・組織管理が可能</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Replitは無料で使えますか？", a: "Freeプランで基本的なIDE機能が無料です。AI機能は制限されます。" },
              { q: "Replit Agentとは？", a: "自然言語で指示するだけでアプリを自動生成するAI機能です。Coreプランで無制限利用可能。" },
              { q: "Cursorとの違いは？", a: "Replitはクラウド完結でデプロイまで一体型。CursorはローカルIDEでコード編集に特化しています。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化を学ぶ</h2>
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
