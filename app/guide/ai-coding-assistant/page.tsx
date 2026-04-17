import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "コーディングAIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "コードを書く時間を半分にしたいエンジニア必見。GitHub Copilot・Cursor・Claude Code等のAIコーディングアシスタント6選を比較し、開発効率を上げる選び方を解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-coding-assistant`,
  },
};

export default function AICodingAssistantPage() {
  const useCases = [
    {
      title: "コード生成・補完",
      icon: "⌨️",
      description: "自然言語やコメントから関数・クラスを自動生成。既存コードの文脈を理解した賢い補完でタイピング量を削減。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "要件を伝えるだけで複数言語のコードをまとめて生成" },
        { name: "Claude", slug: "claude", tip: "長いコンテキストを読み込み、既存構造に沿ったコード生成が得意" },
        { name: "Gemini", slug: "gemini", tip: "Google検索と連携して最新APIに沿ったコード例を提示" },
      ],
    },
    {
      title: "コードレビュー",
      icon: "🔍",
      description: "プルリクエストのコードをAIがレビュー。潜在バグ、命名、設計上の問題を指摘。",
      tools: [
        { name: "Claude", slug: "claude", tip: "差分をまとめて読み込み、設計観点での指摘に強い" },
        { name: "ChatGPT", slug: "chatgpt", tip: "言語別のベストプラクティスに沿ったレビューを提示" },
        { name: "Gemini", slug: "gemini", tip: "大規模リポジトリの全体構造を踏まえたレビューが可能" },
      ],
    },
    {
      title: "デバッグ・エラー解析",
      icon: "🐛",
      description: "スタックトレースやエラーメッセージを貼るだけで原因と修正案を提示。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "エラーメッセージから原因を推論し、修正パッチを提案" },
        { name: "Claude", slug: "claude", tip: "複数ファイルにまたがる問題の切り分けが得意" },
        { name: "Perplexity", slug: "perplexity", tip: "類似エラーの事例やStackOverflow情報を横断検索" },
      ],
    },
    {
      title: "リファクタリング",
      icon: "♻️",
      description: "可読性・保守性を高めるリファクタリング提案。レガシーコードのモダン化にも活躍。",
      tools: [
        { name: "Claude", slug: "claude", tip: "大規模な既存コードを理解した段階的リファクタに強い" },
        { name: "ChatGPT", slug: "chatgpt", tip: "デザインパターンへの置き換え提案が豊富" },
        { name: "Gemini", slug: "gemini", tip: "言語仕様の最新機能を活用した書き換え提案" },
      ],
    },
    {
      title: "テストコード生成",
      icon: "🧪",
      description: "ユニットテスト・統合テストをAIが自動生成。カバレッジを効率良く上げられる。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "Jest・Pytest等の主要フレームワークに対応したテストを生成" },
        { name: "Claude", slug: "claude", tip: "エッジケースまで網羅したテストケースを提案" },
        { name: "Gemini", slug: "gemini", tip: "モック・スタブまで含めた実用的なテストを出力" },
      ],
    },
    {
      title: "ドキュメント生成",
      icon: "📚",
      description: "関数コメント、READMEやAPIドキュメントをAIが自動生成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "JSDoc/Docstring形式のコメントを一括生成" },
        { name: "Claude", slug: "claude", tip: "コードから利用例付きREADMEをまとめて作成" },
        { name: "Notion AI", slug: "notion-ai", tip: "生成ドキュメントをNotionに保存してチーム共有" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIコーディングアシスタント比較ガイド【2026年版】",
    description: "AIコーディングアシスタントの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIコーディング支援", item: `${siteConfig.url}/guide/ai-coding-assistant` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AIコーディング支援は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AIコーディング支援の選び方は？",
        acceptedAnswer: { "@type": "Answer", text: "用途・予算・日本語対応・サポート体制を基準に選ぶのがおすすめです。本記事内で各ツールを比較しています。" },
      },
      {
        "@type": "Question",
        name: "初心者でも使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。多くのツールは登録してすぐに日本語で使えます。専門知識は不要です。" },
      },
    ],
  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "AIコーディング支援ツールおすすめ比較",
        itemListElement: [
          { "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "GitHub Copilot", url: "https://github.com/features/copilot" } },
          { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Cursor", url: "https://cursor.sh/" } },
          { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "Claude Code", url: "https://claude.ai/code" } },
          { "@type": "ListItem", position: 4, item: { "@type": "Thing", name: "Codeium", url: "https://codeium.com/" } },
          { "@type": "ListItem", position: 5, item: { "@type": "Thing", name: "Tabnine", url: "https://www.tabnine.com/" } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIコーディングアシスタント</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">コーディング</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIコーディングアシスタント比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIコーディングアシスタントを使えば、コード生成・レビュー・デバッグ・テスト作成までを自動化でき、開発速度を大きく引き上げられます。本ガイドでは、現場ですぐ使えるAIツールと活用テクニックを目的別に紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
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
                <div key={tool.slug} className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
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

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを体系的に学びたい方へ</h2>
          <p className="text-sm text-muted mb-4">AIコーディングを最大限活用するには、基礎的なプログラミング知識が不可欠です。スクールで土台を固めましょう。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 初心者でもAIコーディングアシスタントは使える？</h3>
              <p className="text-sm text-muted">A. はい。自然言語で要件を伝えれば動くコードを生成してくれるため、学習中の方にも有効です。ただし内容理解は欠かせません。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 業務コードをAIに貼っても大丈夫？</h3>
              <p className="text-sm text-muted">A. 会社のセキュリティポリシーを必ず確認してください。法人プランやAPI利用では学習に使わない設定が可能です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 生成されたコードの品質は信頼できる？</h3>
              <p className="text-sm text-muted">A. 軽微な誤りや古い情報が混ざることがあります。必ず人間によるレビューとテストを実施してください。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIコーディング活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>定型コード生成</strong>から導入する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>AI生成コードも<strong>必ずレビュー</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>業務コードは<strong>セキュリティポリシー</strong>を確認</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span><strong>テストとドキュメント</strong>もAIで自動化する</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">開発業務に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英語学習</div>
              </Link>
              <Link href="/guide/ai-english-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英語ツール</div>
              </Link>
              <Link href="/guide/ai-english-proofreading" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英文校正</div>
              </Link>
              <Link href="/guide/ai-programming-school" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">プログラミングスクール×AI</div>
              </Link>
              <Link href="/guide/ai-tools-for-students" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">学生向けAI</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
