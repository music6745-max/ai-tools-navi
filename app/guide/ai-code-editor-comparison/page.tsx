import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "AIコードエディタ徹底比較【2026年最新】Cursor vs Windsurf vs GitHub Copilot",
  description: "3大AIコードエディタを料金・機能・使いやすさで比較。あなたに最適なツールが分かる。",
  keywords: ["AIコードエディタ 比較", "Cursor Windsurf 比較", "GitHub Copilot 比較", "AI プログラミング"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-code-editor-comparison` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIコードエディタ徹底比較【2026年最新】", description: "Cursor vs Windsurf vs GitHub Copilotを比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "初心者におすすめは？", acceptedAnswer: { "@type": "Answer", text: "GitHub Copilotが最も使いやすく、IDEを選ばず対応。" } },
    { "@type": "Question", name: "無料で使えるAIコードエディタは？", acceptedAnswer: { "@type": "Answer", text: "3つとも無料プランあり。Cursorは月2,000回補完、Windsurfは月50アクション、Copilotは月2,000回補完。" } },
    { "@type": "Question", name: "日本語でコード説明できる？", acceptedAnswer: { "@type": "Answer", text: "全ツール日本語での質問・指示に対応。AIモデル自体が多言語対応のため。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">AIコードエディタ比較</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span><span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIコードエディタ徹底比較【2026年最新】<br /><span className="text-primary text-2xl md:text-3xl">Cursor vs Windsurf vs GitHub Copilot</span></h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">3大AIコードエディタを料金・機能・使いやすさで徹底比較。あなたに最適なツールが見つかります。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">3大AIコードエディタの概要</h2>
          <div className="space-y-4">
            {[
              { name: "Cursor", price: "Pro月20ドル（約3,000円）", desc: "VSCodeベースのAIネイティブエディタ。Tab補完+Agent機能。個人開発者に人気。" },
              { name: "Windsurf", price: "Pro月15ドル（約2,250円）", desc: "VSCodeベースのAIエディタ。Cascade AIでプロジェクト全体を理解。コスパが良い。" },
              { name: "GitHub Copilot", price: "月10ドル（約1,500円）Individual", desc: "最大のシェアを誇るAIコード補完。VS Code・JetBrains等の既存IDEで利用可能。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">機能比較表</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 overflow-x-auto">
            <div className="grid grid-cols-4 gap-2 text-sm min-w-[500px]">
              <div className="font-bold py-2">機能</div>
              <div className="font-bold py-2 text-center">Cursor</div>
              <div className="font-bold py-2 text-center">Windsurf</div>
              <div className="font-bold py-2 text-center">GitHub Copilot</div>

              <div className="py-2 border-t border-card-border">月額料金</div>
              <div className="py-2 border-t border-card-border text-center">月20ドル</div>
              <div className="py-2 border-t border-card-border text-center">月15ドル</div>
              <div className="py-2 border-t border-card-border text-center">月10ドル</div>

              <div className="py-2 border-t border-card-border">無料プラン</div>
              <div className="py-2 border-t border-card-border text-center">月2,000回補完</div>
              <div className="py-2 border-t border-card-border text-center">月50アクション</div>
              <div className="py-2 border-t border-card-border text-center">月2,000回補完</div>

              <div className="py-2 border-t border-card-border">AIモデル</div>
              <div className="py-2 border-t border-card-border text-center">GPT-4o / Claude</div>
              <div className="py-2 border-t border-card-border text-center">独自 + GPT-4o</div>
              <div className="py-2 border-t border-card-border text-center">GPT-4o / Claude</div>

              <div className="py-2 border-t border-card-border">エージェント機能</div>
              <div className="py-2 border-t border-card-border text-center">Agent Mode</div>
              <div className="py-2 border-t border-card-border text-center">Cascade</div>
              <div className="py-2 border-t border-card-border text-center">Copilot Agent</div>

              <div className="py-2 border-t border-card-border">IDE統合</div>
              <div className="py-2 border-t border-card-border text-center">専用エディタ</div>
              <div className="py-2 border-t border-card-border text-center">専用エディタ</div>
              <div className="py-2 border-t border-card-border text-center">VSCode / JetBrains等</div>

              <div className="py-2 border-t border-card-border">対応言語</div>
              <div className="py-2 border-t border-card-border text-center">全主要言語</div>
              <div className="py-2 border-t border-card-border text-center">全主要言語</div>
              <div className="py-2 border-t border-card-border text-center">全主要言語</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">選び方ガイド</h2>
          <div className="space-y-4">
            {[
              { target: "初心者", tool: "GitHub Copilot", reason: "広い対応IDE、シンプルな操作。既存の開発環境をそのまま使える。月10ドルで始めやすい。" },
              { target: "コスパ重視", tool: "Windsurf", reason: "月15ドルでCascade AIエージェントをフル活用。コスト対機能のバランスが最も良い。" },
              { target: "パワーユーザー", tool: "Cursor", reason: "カスタマイズ性が高く、高度なAgent機能で複雑なタスクも自動化。本格開発に最適。" },
            ].map((g) => (
              <div key={g.target} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">{g.target}</span>
                  <h3 className="font-bold text-lg">{g.tool}</h3>
                </div>
                <p className="text-sm text-muted">{g.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "初心者におすすめは？", a: "GitHub Copilotが最も使いやすく、VS Code・JetBrains等のIDEを選ばず対応しています。月10ドルで始めやすいのもポイントです。" },
              { q: "無料で使えるAIコードエディタは？", a: "3つとも無料プランがあります。Cursorは月2,000回のコード補完、Windsurfは月50 Flow Action、GitHub Copilotは月2,000回の補完が無料で利用可能です。" },
              { q: "日本語でコード説明できる？", a: "全ツール日本語での質問・指示に対応しています。AIモデル自体が多言語対応のため、日本語でコードの説明やレビューを依頼できます。" },
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
