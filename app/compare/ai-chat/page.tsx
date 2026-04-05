import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  getToolBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude vs Gemini AIチャット徹底比較【2026年最新】",
  description:
    "ChatGPT・Claude・Geminiの3大AIチャットを料金・機能・日本語性能・API・コンテキスト長で徹底比較。用途別おすすめも解説。",
  keywords: ["ChatGPT", "Claude", "Gemini", "AIチャット比較", "AI比較", "ChatGPT 比較"],
  alternates: {
    canonical: `${siteConfig.url}/compare/ai-chat`,
  },
  openGraph: {
    title: `ChatGPT vs Claude vs Gemini AIチャット比較 | ${siteConfig.name}`,
    description:
      "3大AIチャットを料金・機能・性能で徹底比較。あなたに最適なAIが分かります。",
    url: `${siteConfig.url}/compare/ai-chat`,
  },
};

export default function CompareChatPage() {
  const chatgpt = getToolBySlug("chatgpt")!;
  const claude = getToolBySlug("claude")!;
  const gemini = getToolBySlug("gemini")!;
  const compareTools = [chatgpt, claude, gemini];

  const comparisonData = [
    { label: "開発元", values: ["OpenAI", "Anthropic", "Google"] },
    { label: "無料プラン", values: ["GPT-4o制限付き", "Claude 3.5制限付き", "Gemini Pro無制限"] },
    { label: "有料プラン", values: ["Plus $20/月", "Pro $20/月", "Advanced ¥2,900/月"] },
    { label: "最上位プラン", values: ["Pro $200/月", "Max $100/月〜", "Ultra ¥4,900/月"] },
    { label: "最大コンテキスト", values: ["128Kトークン", "200Kトークン", "1Mトークン"] },
    { label: "画像認識", values: ["◎", "◎", "◎"] },
    { label: "画像生成", values: ["◎（DALL-E / GPT-4o）", "×", "◎（Imagen 3）"] },
    { label: "動画理解", values: ["×", "×", "◎（YouTube分析）"] },
    { label: "ウェブ検索", values: ["◎", "◎", "◎（Google統合）"] },
    { label: "ファイル分析", values: ["◎ PDF/Excel等", "◎ PDF/コード等", "◎ Google連携"] },
    { label: "コード実行", values: ["◎（サンドボックス）", "◎（Artifacts）", "◎"] },
    { label: "プラグイン/拡張", values: ["◎（GPTs Store）", "◎（Projects/MCP）", "◎（Gems）"] },
    { label: "API提供", values: ["◎ 充実", "◎ 充実", "◎ 充実"] },
    { label: "API料金（入力）", values: ["$2.5/1Mトークン", "$3/1Mトークン", "$1.25/1Mトークン"] },
    { label: "日本語品質", values: ["◎ 優秀", "◎ 非常に自然", "○ 良好"] },
    { label: "長文出力", values: ["○ 良い", "◎ 非常に良い", "○ 良い"] },
    { label: "推論・分析力", values: ["◎ o3モデル搭載", "◎ 非常に高い", "◎ 高い"] },
    { label: "クリエイティブ", values: ["◎ 得意", "◎ 得意", "○ 標準"] },
    { label: "安全性", values: ["○ 標準", "◎ 最重視", "○ 標準"] },
    { label: "リアルタイム情報", values: ["◎ ブラウジング", "◎ ウェブ検索", "◎ Google統合"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ChatGPT vs Claude vs Gemini AIチャット徹底比較【2026年最新】",
    description: "3大AIチャットを料金・機能・性能で徹底比較。",
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
          <span className="text-foreground">AIチャット比較</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ChatGPT vs Claude vs Gemini
            <br className="md:hidden" />
            <span className="text-primary"> AIチャット徹底比較</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            2026年最新の3大AIチャットツールを料金・機能・日本語性能・API・コンテキスト長まで詳細に比較。あなたの用途に最適なAIチャットが見つかります。
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
          <h2 className="text-2xl font-bold mb-6 text-center">機能・料金・性能 比較表</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left min-w-[160px]">項目</th>
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

        {/* Context Window visualization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">コンテキストウィンドウ比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <p className="text-sm text-muted mb-4">コンテキストウィンドウとは、AIが一度に処理できるテキスト量のこと。大きいほど長い文書を扱えます。</p>
            <div className="space-y-4">
              {[
                { name: "ChatGPT (GPT-4o)", tokens: "128K", width: "12.8%" },
                { name: "Claude (Opus/Sonnet)", tokens: "200K", width: "20%" },
                { name: "Gemini (1.5 Pro)", tokens: "1M", width: "100%" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted">{item.tokens}トークン</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3">
                    <div className="bg-primary rounded-full h-3 transition-all" style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
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

        {/* API comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">API料金比較（主要モデル）</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left">モデル</th>
                  <th className="text-center">入力（/1Mトークン）</th>
                  <th className="text-center">出力（/1Mトークン）</th>
                  <th className="text-center">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "GPT-4o", input: "$2.50", output: "$10.00", note: "バランス型" },
                  { model: "GPT-4o mini", input: "$0.15", output: "$0.60", note: "低コスト" },
                  { model: "Claude Sonnet 4", input: "$3.00", output: "$15.00", note: "高性能" },
                  { model: "Claude Haiku 3.5", input: "$0.80", output: "$4.00", note: "高速・低コスト" },
                  { model: "Gemini 1.5 Pro", input: "$1.25", output: "$5.00", note: "大容量コンテキスト" },
                  { model: "Gemini 1.5 Flash", input: "$0.075", output: "$0.30", note: "最安値クラス" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium">{row.model}</td>
                    <td className="text-center text-sm">{row.input}</td>
                    <td className="text-center text-sm">{row.output}</td>
                    <td className="text-center text-sm text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">目的別おすすめAIチャット</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🏆</p>
              <h3 className="font-bold mb-2">総合力で選ぶなら</h3>
              <p className="text-primary font-bold text-lg mb-1">ChatGPT</p>
              <p className="text-sm text-muted">画像生成、プラグイン、ウェブブラウジングと最も多機能。GPTsエコシステムも魅力。</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">📝</p>
              <h3 className="font-bold mb-2">文章・コードなら</h3>
              <p className="text-primary font-bold text-lg mb-1">Claude</p>
              <p className="text-sm text-muted">長文の理解と自然な日本語が最高レベル。安全性を重視する方にも。</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🔍</p>
              <h3 className="font-bold mb-2">Google連携なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Gemini</p>
              <p className="text-sm text-muted">Gmail・Docs・Driveとの連携が強力。100万トークンの大容量コンテキストも魅力。</p>
            </div>
          </div>
        </section>

        {/* Other comparisons */}
        <section className="text-center">
          <h2 className="text-xl font-bold mb-4">他の比較も見る</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-coding"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              💻 AIコーディング比較
            </Link>
            <Link href="/compare/ai-writing"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              ✍️ AI文章作成比較
            </Link>
            <Link href="/compare/ai-music"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              🎵 AI音楽生成比較
            </Link>
            <Link href="/compare/ai-image"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              🎨 AI画像生成比較
            </Link>
            <Link href="/guide/chatgpt-vs-claude"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              📖 ChatGPT vs Claude ガイド
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
