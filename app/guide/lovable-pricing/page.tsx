import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Lovable 料金プラン徹底解説【2026年最新】Free/Starter/Launch/Scale",
  description: "AIアプリビルダーLovableのFree(5クレジット/日)・Starter(月20ドル)・Launch(月50ドル)・Scale(月100ドル)の料金プランを解説。",
  keywords: ["Lovable 料金", "Lovable 無料", "AIアプリビルダー", "Lovable Starter", "ノーコード AI"],
  alternates: { canonical: `${siteConfig.url}/guide/lovable-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Lovable 料金プラン徹底解説", description: "Free/Starter/Launch/Scaleを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Lovableは無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "Freeプランで毎日5クレジット分のアプリ生成が可能です。" } },
    { "@type": "Question", name: "v0との違いは？", acceptedAnswer: { "@type": "Answer", text: "Lovableはフルスタックアプリを一括生成。v0はUIコンポーネント単位の生成に特化。" } },
    { "@type": "Question", name: "プログラミング知識は必要？", acceptedAnswer: { "@type": "Answer", text: "不要です。自然言語で指示するだけで、React+Tailwind CSSのアプリが自動生成されます。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Lovable料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Lovable 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AIアプリビルダーLovableのFree・Starter・Launch・Scaleプランの料金とクレジット数を日本語で徹底解説します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Lovable料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "5クレジット/日。基本的なアプリ生成。Lovableの操作感を試したい方に最適。" },
              { name: "Starter", price: "月20ドル（約3,000円）", desc: "100クレジット/月。GitHubエクスポート。カスタムドメイン。個人プロジェクトに。" },
              { name: "Launch", price: "月50ドル（約7,500円）", desc: "500クレジット/月。優先サポート。チームコラボ。本格的なアプリ開発に。" },
              { name: "Scale", price: "月100ドル（約15,000円）", desc: "無制限クレジット。専用インフラ。SLA。大規模プロジェクトやビジネス利用に。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Lovableの特徴</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">自然言語からUI生成:</span> プロンプトでReactアプリを自動生成</p>
            <p><span className="font-bold">リアルタイムプレビュー:</span> 変更がリアルタイムで反映</p>
            <p><span className="font-bold">Supabase連携:</span> バックエンド・認証をワンクリックで追加</p>
            <p><span className="font-bold">GitHub連携:</span> コードをGitHubリポジトリに直接エクスポート</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">プラン選びのポイント</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">お試しなら:</span> Freeプランで毎日5クレジット。まずは操作感を確認</p>
            <p><span className="font-bold">個人開発なら:</span> Starterプランで月100クレジット。GitHubエクスポートも可能</p>
            <p><span className="font-bold">チーム開発なら:</span> Launchプランで500クレジットと優先サポート</p>
            <p><span className="font-bold">ビジネス利用なら:</span> Scaleプランで無制限クレジットとSLA付き</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Lovableは無料で使えますか？", a: "Freeプランで毎日5クレジット分のアプリ生成が可能です。" },
              { q: "v0との違いは？", a: "Lovableはフルスタックアプリを一括生成します。v0はUIコンポーネント単位の生成に特化しています。" },
              { q: "プログラミング知識は必要？", a: "不要です。自然言語で指示するだけで、React+Tailwind CSSのアプリが自動生成されます。" },
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
            <Link href="/guide/v0-dev-review" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">レビュー</div><div className="font-bold text-sm">v0レビュー</div></Link>
            <Link href="/guide/bolt-new-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Bolt.new料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
