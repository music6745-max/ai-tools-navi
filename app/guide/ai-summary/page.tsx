import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI要約ツール比較ガイド【2026年版】長文記事・論文を瞬時に要約",
  description:
    "AI要約ツールを徹底比較。長文記事、論文、会議録、書籍、動画など、あらゆるコンテンツを瞬時に要約できるおすすめAIツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-summary`,
  },
};

export default function AISummaryPage() {
  const useCases = [
    {
      title: "長文記事・ニュースの要約",
      icon: "📰",
      description: "ネット記事やニュースを数秒で要約し、忙しい朝でも主要ニュースをキャッチアップ。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "URLを渡すだけで要点と箇条書きを生成" },
        { name: "Claude", slug: "claude", tip: "複数記事をまとめて横断要約するのが得意" },
        { name: "Perplexity", slug: "perplexity", tip: "出典付きで要約してくれるのでファクトチェックに便利" },
      ],
    },
    {
      title: "論文・レポートの要約",
      icon: "📄",
      description: "英語論文や長尺レポートを、章ごと・論点ごとに整理された形で要約。",
      tools: [
        { name: "Claude", slug: "claude", tip: "100ページ超のPDFも一度に読み込み可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "要約＋専門用語の解説までセットで提示" },
        { name: "Perplexity", slug: "perplexity", tip: "関連論文を横断検索しながら要約できる" },
      ],
    },
    {
      title: "会議録・議事録の要約",
      icon: "🎙️",
      description: "文字起こし済みの会議録から、決定事項・ToDo・論点を整理して要約。",
      tools: [
        { name: "Claude", slug: "claude", tip: "数万文字の会議録もまとめて要約可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "テンプレート付き議事録要約が得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "Notion上の議事録をワンクリックで要約" },
      ],
    },
    {
      title: "書籍・ビジネス書の要約",
      icon: "📚",
      description: "読みたい本のポイントをAIが章ごとに抜き出し、読書時間を短縮。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "章立てに沿った要点と学びを整理" },
        { name: "Claude", slug: "claude", tip: "長編でも文脈を保ったまま要約が可能" },
        { name: "Gemini", slug: "gemini", tip: "関連情報もあわせて提示して理解を深められる" },
      ],
    },
    {
      title: "動画・ポッドキャスト要約",
      icon: "📺",
      description: "YouTubeやポッドキャストの内容を文字起こしから要約し、短時間でキャッチアップ。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "文字起こし＋要約を一気通貫で処理" },
        { name: "Claude", slug: "claude", tip: "長尺動画でも論点ごとに整理できる" },
        { name: "Notion AI", slug: "notion-ai", tip: "要約を知識ベースとして蓄積するのに最適" },
      ],
    },
    {
      title: "Web会議・セミナーのダイジェスト",
      icon: "💬",
      description: "参加できなかった会議やセミナーを、ダイジェストとしてサクッと把握。",
      tools: [
        { name: "Claude", slug: "claude", tip: "決定事項と課題を分かりやすく分類要約" },
        { name: "ChatGPT", slug: "chatgpt", tip: "時系列の流れを保ったまま要約可能" },
        { name: "Gemini", slug: "gemini", tip: "Google Workspaceとの連携で自動ダイジェスト" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI要約ツール比較ガイド【2026年版】",
    description: "AI要約ツールの比較と活用法を解説",
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
          <span className="text-foreground">AI要約ツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">要約</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI要約ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI要約ツールを活用すれば、長文記事・論文・会議録・動画などあらゆるコンテンツを瞬時に要約でき、情報収集のスピードを劇的に高められます。本ガイドでは用途別におすすめAI要約ツールと効果的な使い方を紹介します。
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

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AI要約の精度はどのくらい？</h3>
              <p className="text-sm text-muted">A. 主要ポイントの抽出は非常に高精度ですが、重要な意思決定には原文確認が必須です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 要約する文章量に制限はある？</h3>
              <p className="text-sm text-muted">A. Claudeは数十万文字の長文も扱えます。ChatGPTは有料プランでより長文に対応可能です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 機密文書を要約させても大丈夫？</h3>
              <p className="text-sm text-muted">A. 社内ポリシーを確認のうえ、学習に使われない法人プランやAPI経由の利用を検討しましょう。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI要約活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>用途に合わせて<strong>要約の粒度</strong>を指示する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>長文は<strong>コンテキスト長に強いAI</strong>を選ぶ</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>重要判断では<strong>原文確認</strong>を忘れない</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>機密情報は<strong>セキュリティポリシー</strong>を確認</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">要約業務に合ったAIツールを見つけましょう</p>
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
