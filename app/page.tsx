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

      {/* Popular Guide Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            人気ガイド記事
          </h2>
          <p className="text-muted text-center mb-10">
            AIツールの活用方法を分かりやすく解説
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                slug: "chatgpt-vs-claude",
                title: "ChatGPT vs Claude 徹底比較【2026年最新】",
                description: "料金・機能・日本語品質・コーディング力で徹底比較。用途別おすすめを解説。",
                icon: "🤖",
                category: "比較",
                readTime: "8分",
              },
              {
                slug: "ai-side-business",
                title: "AIツールで副業を始める方法",
                description: "AIを活用した副業の始め方。月5万円を目指す具体的なロードマップ。",
                icon: "💰",
                category: "副業",
                readTime: "10分",
              },
              {
                slug: "ai-image-generation",
                title: "AI画像生成ツール徹底比較",
                description: "Midjourney、DALL-E、Stable Diffusionなど5選を料金・特徴で比較。",
                icon: "🎨",
                category: "AI画像",
                readTime: "10分",
              },
              {
                slug: "ai-tools-pricing",
                title: "主要AIツール料金比較一覧",
                description: "主要AIツールの料金プランを一覧比較。無料プランの内容も解説。",
                icon: "💰",
                category: "料金比較",
                readTime: "10分",
              },
            ].map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="flex items-start gap-4 bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-3xl flex-shrink-0">{guide.icon}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs px-2.5 py-0.5 bg-primary-light text-primary rounded-full font-medium">
                      {guide.category}
                    </span>
                    <span className="text-xs text-muted">読了 {guide.readTime}</span>
                  </div>
                  <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/guide"
              className="inline-block px-6 py-3 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:border-primary transition-colors"
            >
              ガイド記事をもっと見る →
            </Link>
          </div>
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

      {/* Sister Site */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🛠️</span>
              <div>
                <h2 className="text-xl font-bold">無料Webツールもチェック</h2>
                <p className="text-sm text-muted">姉妹サイト「ネットツールボックス」で232以上の便利ツールを公開中</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <a href="https://net-toolbox.vercel.app/tools/qr-code" target="_blank" rel="noopener noreferrer" className="bg-white/70 dark:bg-white/5 rounded-lg p-3 text-center hover:shadow-md transition text-sm">
                📱 QRコード作成
              </a>
              <a href="https://net-toolbox.vercel.app/tools/password-generator" target="_blank" rel="noopener noreferrer" className="bg-white/70 dark:bg-white/5 rounded-lg p-3 text-center hover:shadow-md transition text-sm">
                🔐 パスワード生成
              </a>
              <a href="https://net-toolbox.vercel.app/tools/json-formatter" target="_blank" rel="noopener noreferrer" className="bg-white/70 dark:bg-white/5 rounded-lg p-3 text-center hover:shadow-md transition text-sm">
                📋 JSON整形
              </a>
              <a href="https://net-toolbox.vercel.app/tools/character-count" target="_blank" rel="noopener noreferrer" className="bg-white/70 dark:bg-white/5 rounded-lg p-3 text-center hover:shadow-md transition text-sm">
                🔢 文字数カウント
              </a>
            </div>
            <a href="https://net-toolbox.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
              ネットツールボックスを見る →
            </a>
          </div>
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
