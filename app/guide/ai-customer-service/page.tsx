import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AIカスタマーサービス活用ガイド【2026年版】顧客対応を効率化",
  description:
    "カスタマーサービス・顧客対応でのAIツール活用法を解説。チャットボット、メール対応、FAQ作成、顧客分析など、CS業務の効率化と品質向上を実現する方法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-customer-service`,
  },
};

export default function AICustomerServicePage() {
  const useCases = [
    {
      title: "問い合わせメール対応",
      icon: "📧",
      description: "顧客からの問い合わせメールに対して、適切なトーンと内容の返信文をAIが下書き。対応速度と品質を向上。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "顧客の問い合わせ内容を貼り付けると、丁寧な返信文を即座に生成" },
        { name: "Claude", slug: "claude", tip: "クレーム対応など繊細な文面の作成が得意。共感性の高い返信を生成" },
        { name: "Grammarly", slug: "grammarly", tip: "英語での顧客対応メールのトーン調整と文法チェックに最適" },
      ],
    },
    {
      title: "FAQ・ヘルプ記事作成",
      icon: "📖",
      description: "よくある質問のFAQページやヘルプ記事をAIが作成。顧客の自己解決率を向上させます。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "過去の問い合わせデータからFAQ記事を自動生成。カテゴリ分けも対応" },
        { name: "Claude", slug: "claude", tip: "複雑な手順の説明をステップバイステップで分かりやすく整理" },
        { name: "Jasper", slug: "jasper", tip: "ブランドのトーンに合わせたヘルプ記事の大量生成に対応" },
      ],
    },
    {
      title: "顧客の声の分析",
      icon: "📊",
      description: "アンケート結果、レビュー、SNSのコメントをAIが分析し、顧客のニーズや不満点を可視化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "大量のレビューを分析して、ポジティブ・ネガティブの傾向を抽出" },
        { name: "Claude", slug: "claude", tip: "長文のアンケート回答を要約し、カテゴリ別にインサイトを整理" },
        { name: "Perplexity", slug: "perplexity", tip: "競合他社の評判や業界トレンドをリサーチ。自社改善のヒントに" },
      ],
    },
    {
      title: "マニュアル・研修資料作成",
      icon: "📋",
      description: "CS担当者向けの対応マニュアルや研修資料をAIが作成。新人教育の効率化に貢献。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "対応フローやエスカレーション基準を含むマニュアルを自動生成" },
        { name: "Gamma", slug: "gamma", tip: "研修用スライドを自動作成。ビジュアルで分かりやすい教材に" },
        { name: "Claude", slug: "claude", tip: "ロールプレイのシナリオ作成や、ケーススタディの作成が得意" },
      ],
    },
    {
      title: "多言語カスタマーサポート",
      icon: "🌐",
      description: "海外顧客からの問い合わせに多言語で対応。翻訳の精度と自然さを両立。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "高精度な多言語翻訳。ビジネス文書のニュアンスも正確に伝達" },
        { name: "ChatGPT", slug: "chatgpt", tip: "50以上の言語に対応。顧客の言語で自然な返信文を生成" },
        { name: "Claude", slug: "claude", tip: "文化的なニュアンスも考慮した丁寧な多言語対応が可能" },
      ],
    },
    {
      title: "テンプレート・定型文管理",
      icon: "📑",
      description: "よく使う返信テンプレートの作成・改善をAIが支援。状況に応じたカスタマイズも自動化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "シーン別（お詫び、案内、確認）の返信テンプレートを一括生成" },
        { name: "Notion AI", slug: "notion-ai", tip: "テンプレートの管理と、状況に応じた自動カスタマイズ" },
        { name: "Jasper", slug: "jasper", tip: "ブランドボイスを学習させ、一貫性のあるテンプレートを生成" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIカスタマーサービス活用ガイド【2026年版】",
    description: "カスタマーサービスでのAIツール活用法を解説",
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
          <span className="text-foreground">AIカスタマーサービス</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">カスタマーサービス</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIカスタマーサービス活用ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールを活用することで、カスタマーサービスの対応速度と品質を大幅に向上できます。問い合わせ対応、FAQ作成、顧客分析、多言語サポートなど、CS業務の各場面でのAI活用方法を紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">活用シーン</h2>
          <ol className="space-y-2 text-sm">
            {useCases.map((uc, i) => (
              <li key={i}>
                <a href={`#scene-${i}`} className="text-primary hover:underline">
                  {uc.icon} {uc.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Use cases */}
        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link href={`/tools/${tool.slug}`} className="font-bold text-primary hover:underline">
                      {tool.name}
                    </Link>
                    <Link href={`/tools/${tool.slug}`} className="text-xs text-primary hover:underline">
                      詳細 →
                    </Link>
                  </div>
                  <p className="text-sm text-muted">💡 {tool.tip}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Summary */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIカスタマーサービス導入のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>メール対応</strong>の下書き生成から始める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>AIの返信は必ず<strong>人間がレビュー</strong>してから送信する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>顧客の<strong>個人情報</strong>をAIに入力する際は十分注意する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>対応品質の<strong>一貫性</strong>をテンプレートで維持する</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">カスタマーサービスに合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
