import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  categories,
  tools,
  getTopTools,
  getToolsByCategory,
  renderStars,
  getPricingBadge,
} from "./lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} - AIツール比較・おすすめガイド【2026年最新】`,
  description: siteConfig.description,
};

export default function Home() {
  const topTools = getTopTools(6);

  const faqItems = [
    {
      question: "AIツールは無料で使えますか？",
      answer:
        "多くのAIツールには無料プランや無料トライアルが用意されています。ChatGPT、Claude、Geminiなどの主要AIチャットは無料で利用開始できます。ただし、高度な機能や大量の利用には有料プランへのアップグレードが必要です。",
    },
    {
      question: "初心者におすすめのAIツールは？",
      answer:
        "まずはChatGPTやClaudeなどの対話型AIから始めるのがおすすめです。日本語で質問するだけで、文章作成、翻訳、プログラミングの相談など幅広い用途に活用できます。画像生成ならCanva AIが直感的で使いやすいです。",
    },
    {
      question: "AIツールの安全性は大丈夫ですか？",
      answer:
        "主要なAIツールは個人情報保護やセキュリティ対策を講じています。ただし、機密情報の入力には注意が必要です。各サービスのプライバシーポリシーを確認し、業務利用の場合はビジネスプランの利用を検討してください。",
    },
    {
      question: "ChatGPTとClaudeの違いは？",
      answer:
        "ChatGPTはプラグインやGPTsによる拡張性が強み。Claudeは長文の理解力と自然な文章生成が特徴です。目的に合わせて使い分けるのがおすすめです。詳しくは比較表ページをご覧ください。",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-light to-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            あなたに最適な
            <span className="text-primary">AIツール</span>
            が見つかる
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/compare"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors"
            >
              AIツールを比較する
            </Link>
            <Link
              href="#categories"
              className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors"
            >
              カテゴリから探す
            </Link>
          </div>
        </div>
      </section>

      {/* Top Tools */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          人気のAIツール
        </h2>
        <p className="text-muted text-center mb-10">
          ユーザー評価の高いおすすめAIツールをピックアップ
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topTools.map((tool) => {
            const badge = getPricingBadge(tool.pricing);
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="tool-card block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{tool.name}</h3>
                      <p className="stars text-sm">
                        {renderStars(tool.rating)}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`badge-${badge.color} text-xs px-2.5 py-1 rounded-full font-medium`}
                  >
                    {badge.label}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-muted-bg rounded-full text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-muted-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            カテゴリから探す
          </h2>
          <p className="text-muted text-center mb-10">
            目的に合わせてAIツールを探しましょう
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="bg-card-bg border border-card-border rounded-xl p-4 text-center hover:border-primary hover:shadow-md transition-all"
              >
                <span className="text-3xl block mb-2">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </Link>
            ))}
          </div>

          {/* Category sections with tools */}
          {categories.map((cat) => {
            const catTools = getToolsByCategory(cat.slug).slice(0, 4);
            return (
              <div key={cat.slug} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span>{cat.icon}</span>
                    {cat.name}
                  </h3>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-primary text-sm hover:underline"
                  >
                    すべて見る →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {catTools.map((tool) => {
                    const badge = getPricingBadge(tool.pricing);
                    return (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="tool-card bg-card-bg border border-card-border rounded-lg p-4 hover:border-primary transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{tool.icon}</span>
                          <div>
                            <h4 className="font-bold text-sm">{tool.name}</h4>
                            <span className="stars text-xs">
                              {renderStars(tool.rating)}
                            </span>
                          </div>
                          <span
                            className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full ml-auto`}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted line-clamp-2">
                          {tool.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            AIチャットツール徹底比較
          </h2>
          <p className="text-muted mb-8">
            ChatGPT・Claude・Geminiを料金・機能・性能で詳しく比較。あなたに最適なAIチャットが見つかります。
          </p>
          <Link
            href="/compare"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors text-lg"
          >
            比較表を見る
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted-bg py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-card-bg border border-card-border rounded-xl overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium hover:bg-primary-light transition-colors list-none flex items-center justify-between">
                  <span>{item.question}</span>
                  <span className="text-muted group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-4 text-sm text-muted leading-relaxed border-t border-card-border">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
