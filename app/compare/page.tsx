import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  getToolBySlug,
  renderStars,
  getPricingBadge,
} from "../lib/data";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude vs Gemini 徹底比較【2026年最新】",
  description:
    "ChatGPT・Claude・Geminiの3大AIチャットツールを料金・機能・性能で徹底比較。あなたに最適なAIツールが見つかります。",
  openGraph: {
    title: `ChatGPT vs Claude vs Gemini 徹底比較 | ${siteConfig.name}`,
    description:
      "ChatGPT・Claude・Geminiの3大AIチャットツールを料金・機能・性能で徹底比較。",
    url: `${siteConfig.url}/compare`,
  },
};

export default function ComparePage() {
  const chatgpt = getToolBySlug("chatgpt")!;
  const claude = getToolBySlug("claude")!;
  const gemini = getToolBySlug("gemini")!;
  const compareTools = [chatgpt, claude, gemini];

  const comparisonData = [
    {
      label: "開発元",
      values: ["OpenAI", "Anthropic", "Google"],
    },
    {
      label: "料金（無料）",
      values: ["GPT-4o制限付き", "制限付き", "Gemini Pro無制限"],
    },
    {
      label: "有料プラン",
      values: ["$20/月（Plus）", "$20/月（Pro）", "¥2,900/月（Advanced）"],
    },
    {
      label: "最大コンテキスト",
      values: ["128Kトークン", "200Kトークン", "1Mトークン"],
    },
    {
      label: "画像認識",
      values: ["○", "○", "○"],
    },
    {
      label: "画像生成",
      values: ["○（DALL-E 3）", "×", "○（Imagen）"],
    },
    {
      label: "ウェブ検索",
      values: ["○", "○", "○（Google統合）"],
    },
    {
      label: "ファイル分析",
      values: ["○", "○", "○"],
    },
    {
      label: "コード実行",
      values: ["○", "○（Artifacts）", "○"],
    },
    {
      label: "プラグイン/拡張",
      values: ["○（GPTs）", "○（Projects）", "○（Gems）"],
    },
    {
      label: "API提供",
      values: ["○", "○", "○"],
    },
    {
      label: "日本語品質",
      values: ["◎ 優秀", "◎ 非常に自然", "○ 良好"],
    },
    {
      label: "長文出力",
      values: ["○ 良い", "◎ 非常に良い", "○ 良い"],
    },
    {
      label: "推論・分析力",
      values: ["◎ 高い", "◎ 非常に高い", "◎ 高い"],
    },
    {
      label: "クリエイティブ",
      values: ["◎ 得意", "◎ 得意", "○ 標準"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ChatGPT vs Claude vs Gemini 徹底比較【2026年最新】",
    description:
      "ChatGPT・Claude・Geminiの3大AIチャットツールを料金・機能・性能で徹底比較。",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            ホーム
          </Link>
          <span>/</span>
          <span className="text-foreground">AIツール比較</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ChatGPT vs Claude vs Gemini
            <br className="md:hidden" />
            <span className="text-primary"> 徹底比較</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            2026年最新の3大AIチャットツールを料金・機能・性能で徹底比較。あなたの用途に最適なAIツールが分かります。
          </p>
        </div>

        {/* Tool cards summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {compareTools.map((tool) => {
            const badge = getPricingBadge(tool.pricing);
            return (
              <div
                key={tool.slug}
                className="bg-card-bg border border-card-border rounded-xl p-6 text-center"
              >
                <span className="text-4xl block mb-3">{tool.icon}</span>
                <h2 className="text-xl font-bold mb-1">{tool.name}</h2>
                <p className="stars mb-2">{renderStars(tool.rating)}</p>
                <span
                  className={`badge-${badge.color} text-sm px-3 py-1 rounded-full`}
                >
                  {badge.label}
                </span>
                <p className="text-sm text-primary font-medium mt-3">
                  {tool.pricing}
                </p>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="inline-block mt-4 text-sm text-primary hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            機能・料金 比較表
          </h2>
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
                      <span className="text-sm text-muted">
                        {tool.rating}/5.0
                      </span>
                    </td>
                  ))}
                </tr>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="text-center text-sm">
                        {val}
                      </td>
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
            <div
              key={tool.slug}
              className="bg-card-bg border border-card-border rounded-xl p-6 mb-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{tool.icon}</span>
                {tool.name}がおすすめの人
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-success mb-3">メリット</h4>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-success">○</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-danger mb-3">デメリット</h4>
                  <ul className="space-y-2">
                    {tool.cons.map((con, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-danger">△</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  {tool.name}を試す →
                </a>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
                >
                  詳細レビュー
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Recommendation */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            目的別おすすめAIチャット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🏆</p>
              <h3 className="font-bold mb-2">総合力で選ぶなら</h3>
              <p className="text-primary font-bold text-lg mb-1">ChatGPT</p>
              <p className="text-sm text-muted">
                プラグイン、画像生成、ウェブブラウジングと、最も多機能。迷ったらまずChatGPTがおすすめ。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">📝</p>
              <h3 className="font-bold mb-2">文章・コードなら</h3>
              <p className="text-primary font-bold text-lg mb-1">Claude</p>
              <p className="text-sm text-muted">
                長文の理解力と自然な文章生成が最高レベル。コーディングやライティングに最適。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🔍</p>
              <h3 className="font-bold mb-2">Google連携なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Gemini</p>
              <p className="text-sm text-muted">
                Gmail、Docs、Driveとの連携が強力。Googleサービスをよく使う方におすすめ。
              </p>
            </div>
          </div>
        </section>

        {/* Other comparisons */}
        <section className="text-center">
          <h2 className="text-xl font-bold mb-4">
            他の比較も見る
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/compare/ai-image"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors"
            >
              🎨 画像生成AI比較
            </Link>
            <Link
              href="/compare/ai-coding"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors"
            >
              💻 AIコーディング比較
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
