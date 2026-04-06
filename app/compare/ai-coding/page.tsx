import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  getToolBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export const metadata: Metadata = {
  title: "GitHub Copilot vs Cursor vs Claude Code AIコーディング比較【2026年最新】",
  description:
    "GitHub Copilot・Cursor・Claude Codeの3大AIコーディングツールを機能・料金・対応言語で徹底比較。",
  alternates: {
    canonical: `${siteConfig.url}/compare/ai-coding`,
  },
  openGraph: {
    title: `AIコーディングツール比較 | ${siteConfig.name}`,
    description:
      "GitHub Copilot・Cursor・Claude Codeを徹底比較。",
    url: `${siteConfig.url}/compare/ai-coding`,
  },
};

export default function CompareCodingPage() {
  const copilot = getToolBySlug("github-copilot")!;
  const cursor = getToolBySlug("cursor")!;
  const claudeCode = getToolBySlug("claude-code")!;
  const compareTools = [copilot, cursor, claudeCode];

  const comparisonData = [
    { label: "開発元", values: ["GitHub (Microsoft)", "Anysphere", "Anthropic"] },
    { label: "料金", values: ["約1,500円/月〜", "無料プランあり / 約3,000円/月", "Claude Pro 約3,000円/月"] },
    { label: "ベースエディタ", values: ["VS Code / JetBrains", "VS Code Fork", "ターミナル (CLI)"] },
    { label: "AIモデル", values: ["GPT-4o / Claude", "GPT-4o / Claude", "Claude (Opus/Sonnet)"] },
    { label: "コード補完", values: ["◎ リアルタイム", "◎ リアルタイム", "× チャット型"] },
    { label: "チャット機能", values: ["◎", "◎", "◎"] },
    { label: "マルチファイル編集", values: ["○ 限定的", "◎ Composer機能", "◎ 自律的に実行"] },
    { label: "コードベース理解", values: ["○ @workspace", "◎ インデックス化", "◎ 自動探索"] },
    { label: "ターミナル操作", values: ["○ CLI補完", "○ 統合ターミナル", "◎ 直接実行"] },
    { label: "テスト生成", values: ["○", "○", "◎ 自動実行まで"] },
    { label: "Git操作", values: ["△ 限定的", "○", "◎ コミット・PR作成"] },
    { label: "対応言語", values: ["全言語", "全言語", "全言語"] },
    { label: "自律性", values: ["△ 補助型", "○ 半自律型", "◎ 完全自律型"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GitHub Copilot vs Cursor vs Claude Code AIコーディング比較【2026年最新】",
    description: "3大AIコーディングツールを機能・料金で徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-primary transition-colors">比較</Link>
          <span>/</span>
          <span className="text-foreground">AIコーディング比較</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            GitHub Copilot vs Cursor vs Claude Code
            <br className="md:hidden" />
            <span className="text-primary"> 徹底比較</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            2026年最新の3大AIコーディングツールを機能・料金・使いやすさで徹底比較。開発効率を最大化するツールが見つかります。
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {compareTools.map((tool) => {
            const badge = getPricingBadge(tool.pricing);
            return (
              <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-6 text-center">
                <span className="text-4xl block mb-3">{tool.icon}</span>
                <h2 className="text-xl font-bold mb-1">{tool.name}</h2>
                <p className="stars mb-2">{renderStars(tool.rating)}</p>
                <span className={`badge-${badge.color} text-sm px-3 py-1 rounded-full`}>{badge.label}</span>
                <p className="text-sm text-primary font-medium mt-3">{tool.pricing}</p>
                <Link href={`/tools/${tool.slug}`} className="inline-block mt-4 text-sm text-primary hover:underline">
                  詳細を見る →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">機能・料金 比較表</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left min-w-[140px]">項目</th>
                  {compareTools.map((tool) => (
                    <th key={tool.slug} className="text-center min-w-[180px]">
                      {tool.icon} {tool.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">総合評価</td>
                  {compareTools.map((tool) => (
                    <td key={tool.slug} className="text-center">
                      <span className="stars">{renderStars(tool.rating)}</span>
                      <br />
                      <span className="text-sm text-muted">{tool.rating}/5.0</span>
                    </td>
                  ))}
                </tr>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="text-center text-sm">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">各ツールの特徴</h2>
          {compareTools.map((tool) => (
            <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{tool.icon}</span>
                {tool.name}がおすすめの人
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-success mb-3">メリット</h4>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-success">○</span><span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-danger mb-3">デメリット</h4>
                  <ul className="space-y-2">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-danger">△</span><span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">
                  {tool.name}を試す →
                </a>
                <Link href={`/tools/${tool.slug}`}
                  className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:bg-primary-light transition-colors">
                  詳細レビュー
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Recommendation */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">目的別おすすめAIコーディングツール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">⚡</p>
              <h3 className="font-bold mb-2">コード補完重視なら</h3>
              <p className="text-primary font-bold text-lg mb-1">GitHub Copilot</p>
              <p className="text-sm text-muted">
                リアルタイムのコード補完が最も成熟。VS CodeやJetBrains IDEでシームレスに動作。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🖥️</p>
              <h3 className="font-bold mb-2">エディタ統合なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Cursor</p>
              <p className="text-sm text-muted">
                AIネイティブなエディタ体験。Composer機能でマルチファイル編集が直感的。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🤖</p>
              <h3 className="font-bold mb-2">自律的な開発なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Claude Code</p>
              <p className="text-sm text-muted">
                ターミナルから自律的にコード生成・テスト・Git操作まで実行。大規模な変更に最適。
              </p>
            </div>
          </div>
        </section>

        {/* Other comparisons */}
        <section className="text-center">
          <h2 className="text-xl font-bold mb-4">他の比較も見る</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              💬 AIチャット比較
            </Link>
            <Link href="/compare/ai-image"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              🎨 AI画像生成比較
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
