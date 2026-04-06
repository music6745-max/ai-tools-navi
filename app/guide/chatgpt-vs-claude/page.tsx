import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude 徹底比較【2026年最新】どっちを使うべき？",
  description:
    "ChatGPTとClaudeを料金・機能・日本語品質・コーディング力・安全性で徹底比較。それぞれの得意分野と選び方を詳しく解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/chatgpt-vs-claude`,
  },
};

export default function ChatGPTvsClaudePage() {
  const chatgpt = getToolBySlug("chatgpt")!;
  const claude = getToolBySlug("claude")!;
  const compareTools = [chatgpt, claude];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ChatGPT vs Claude 徹底比較【2026年最新】",
    description: "ChatGPTとClaudeの料金・機能・性能を徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">ChatGPT vs Claude</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          ChatGPT vs Claude 徹底比較
          <br />
          <span className="text-primary text-2xl md:text-3xl">どっちを使うべき？</span>
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          2大AIチャットツール「ChatGPT」と「Claude」。どちらも高性能ですが、得意分野が異なります。この記事では両者を徹底比較し、あなたに合ったツールの選び方を解説します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#overview" className="text-primary hover:underline">1. 基本情報の比較</a></li>
            <li><a href="#pricing" className="text-primary hover:underline">2. 料金プラン比較</a></li>
            <li><a href="#features" className="text-primary hover:underline">3. 機能・性能の違い</a></li>
            <li><a href="#usecases" className="text-primary hover:underline">4. こんな人にはこっち！用途別おすすめ</a></li>
            <li><a href="#conclusion" className="text-primary hover:underline">5. 結論：どちらを選ぶべき？</a></li>
          </ol>
        </div>

        {/* Section 1: Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> 基本情報の比較
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {compareTools.map((tool) => {
              const badge = getPricingBadge(tool.pricing);
              return (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}
                  className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                  <span className="text-3xl">{tool.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{tool.name}</h3>
                      <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                    </div>
                    <p className="text-xs text-muted mt-1">{tool.description}</p>
                  </div>
                  <span className="stars text-sm">{renderStars(tool.rating)}</span>
                </Link>
              );
            })}
          </div>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTはOpenAIが2022年に公開し、世界で最も利用されているAIチャットです。GPT-4oモデルを搭載し、テキスト・画像・音声のマルチモーダル対応が強みです。</p>
            <p>ClaudeはAnthropicが開発したAIアシスタントです。安全性と有用性のバランスを重視しており、特に長文理解と自然な日本語出力に定評があります。</p>
          </div>
        </section>

        {/* Section 2: Pricing */}
        <section id="pricing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> 料金プラン比較
          </h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left">プラン</th>
                  <th className="text-center">ChatGPT</th>
                  <th className="text-center">Claude</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "無料プラン", values: ["GPT-4o制限付き", "Claude 3.5制限付き"] },
                  { label: "個人プラン", values: ["Plus 約3,000円/月", "Pro 約3,000円/月"] },
                  { label: "上位プラン", values: ["Pro 約30,000円/月", "Max 約15,000円/月〜"] },
                  { label: "チーム", values: ["Team 約3,800円/人/月", "Team 約4,500円/人/月"] },
                  { label: "企業", values: ["Enterprise（要問合せ）", "Enterprise（要問合せ）"] },
                ].map((row, i) => (
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
          <div className="bg-primary-light rounded-xl p-4 text-sm mt-4">
            <p className="font-bold mb-1">料金はほぼ同等</p>
            <p className="text-muted">個人利用であれば、どちらも月額約3,000円で利用可能。まずは無料プランで試してから有料に移行するのがおすすめです。</p>
          </div>
        </section>

        {/* Section 3: Features */}
        <section id="features" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 機能・性能の違い
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "日本語の品質",
                chatgpt: "自然で高品質。ビジネス文書も問題なく生成できる。",
                claude: "非常に自然で丁寧。特に長文の日本語出力で高い評価。ニュアンスの表現が得意。",
                winner: "Claude",
              },
              {
                title: "コーディング能力",
                chatgpt: "幅広い言語に対応。コード実行環境あり。GPTsでツール連携可能。",
                claude: "コード品質が高い。Artifacts機能でリアルタイムプレビュー。Claude Codeで自律コーディング。",
                winner: "Claude",
              },
              {
                title: "画像生成",
                chatgpt: "DALL-E 3/GPT-4oで高品質な画像を生成可能。テキスト描画も得意。",
                claude: "画像生成機能なし。画像認識・分析は可能。",
                winner: "ChatGPT",
              },
              {
                title: "マルチモーダル",
                chatgpt: "テキスト、画像、音声、ファイルに対応。音声会話機能あり。",
                claude: "テキスト、画像、ファイルに対応。音声入力は限定的。",
                winner: "ChatGPT",
              },
              {
                title: "長文処理",
                chatgpt: "128Kトークンのコンテキスト。一般的な用途には十分。",
                claude: "200Kトークンの大容量コンテキスト。長い論文や書籍の分析に強い。",
                winner: "Claude",
              },
              {
                title: "プラグイン/拡張",
                chatgpt: "GPTs Storeで数万のカスタムGPTが利用可能。エコシステムが充実。",
                claude: "Projects機能でカスタマイズ。MCP（Model Context Protocol）で外部ツール連携。",
                winner: "ChatGPT",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold">{item.title}</h3>
                  <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full">
                    {item.winner}が優勢
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-xs text-muted mb-1">ChatGPT</p>
                    <p>{item.chatgpt}</p>
                  </div>
                  <div>
                    <p className="font-medium text-xs text-muted mb-1">Claude</p>
                    <p>{item.claude}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Use cases */}
        <section id="usecases" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> こんな人にはこっち！用途別おすすめ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{chatgpt.icon}</span> ChatGPTがおすすめ
              </h3>
              <ul className="space-y-3">
                {[
                  "画像生成も一つのツールで完結させたい",
                  "音声会話機能を使いたい",
                  "GPTs Storeの豊富なカスタムGPTを活用したい",
                  "チームでの共同利用が多い",
                  "プラグインエコシステムを活用したい",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{claude.icon}</span> Claudeがおすすめ
              </h3>
              <ul className="space-y-3">
                {[
                  "長文の文章やレポートを作成したい",
                  "自然な日本語にこだわりたい",
                  "プログラミング・コーディングが主目的",
                  "安全性・プライバシーを重視する",
                  "論文や書籍などの長文資料を分析したい",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Conclusion */}
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">5.</span> 結論：どちらを選ぶべき？
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>結論としては、<strong>両方の無料プランを試してみる</strong>のが最善です。どちらも無料で利用できるため、実際に自分の用途で使い比べてみましょう。</p>
            <p>ただし、一つ選ぶとすれば：</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-light rounded-xl p-5 text-center">
              <p className="text-2xl mb-2">{chatgpt.icon}</p>
              <p className="font-bold mb-1">多機能・汎用性重視なら</p>
              <p className="text-primary font-bold text-lg">ChatGPT</p>
            </div>
            <div className="bg-primary-light rounded-xl p-5 text-center">
              <p className="text-2xl mb-2">{claude.icon}</p>
              <p className="font-bold mb-1">文章・コード品質重視なら</p>
              <p className="text-primary font-bold text-lg">Claude</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">さっそく試してみよう</h2>
          <p className="text-sm text-muted mb-6">どちらも無料で始められます</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={chatgpt.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              ChatGPTを試す →
            </a>
            <a href={claude.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              Claudeを試す →
            </a>
          </div>
          <div className="mt-4">
            <Link href="/compare/ai-chat" className="text-sm text-primary hover:underline">
              Geminiも含めた3者比較はこちら →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
