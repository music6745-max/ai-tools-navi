import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI翻訳ツール比較ガイド【2026年版】高精度な多言語翻訳",
  description:
    "AI翻訳ツールを徹底比較。ビジネス文書、Webサイト、メール、論文翻訳まで、用途別おすすめAI翻訳ツールと高精度に翻訳するコツを紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-translation`,
  },
};

export default function AITranslationPage() {
  const useCases = [
    {
      title: "ビジネス文書の翻訳",
      icon: "📄",
      description: "契約書・提案書・社内文書など、フォーマルな文書をAIが高精度に翻訳。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "ビジネス文書のニュアンスを保ったまま自然な翻訳が可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "業界用語や敬語を考慮したカスタム翻訳に強い" },
        { name: "Claude", slug: "claude", tip: "長文契約書も一度に処理。条文ごとの整合性を保つ" },
      ],
    },
    {
      title: "メール・チャットの翻訳",
      icon: "✉️",
      description: "海外取引先とのメールやチャットを瞬時に翻訳。返信文の作成までAIで一気通貫。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "受信メールを翻訳→返信文を英語で作成までワンステップ" },
        { name: "DeepL Write", slug: "deepl-write", tip: "短文でも自然なビジネス英語に翻訳" },
        { name: "Grammarly", slug: "grammarly", tip: "翻訳後の英文を文法・トーン面で最終チェック" },
      ],
    },
    {
      title: "Webサイト・記事の翻訳",
      icon: "🌐",
      description: "海外Webサイトや記事をAIが翻訳。リサーチ業務を大幅に効率化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "URLや本文を貼り付けると要約付き翻訳を生成" },
        { name: "Claude", slug: "claude", tip: "長文記事を一度に翻訳・要約できる大容量コンテキスト" },
        { name: "Perplexity", slug: "perplexity", tip: "海外情報をリアルタイムで検索しながら日本語で出力" },
      ],
    },
    {
      title: "論文・専門文書の翻訳",
      icon: "📚",
      description: "学術論文や技術文書など、専門用語が多い文章も正確に翻訳。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "専門分野の語彙でも高精度な翻訳を実現" },
        { name: "Claude", slug: "claude", tip: "論文1本まるごと翻訳＋要約まで対応" },
        { name: "ChatGPT", slug: "chatgpt", tip: "用語集を渡せば一貫性のある翻訳が可能" },
      ],
    },
    {
      title: "動画字幕・音声翻訳",
      icon: "🎬",
      description: "動画の字幕や音声をAIが翻訳。海外コンテンツの視聴・制作を効率化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "字幕ファイル（SRT）の翻訳に対応。タイミングも保持" },
        { name: "Claude", slug: "claude", tip: "長尺動画の字幕も一括翻訳。自然な日本語に変換" },
        { name: "DeepL Write", slug: "deepl-write", tip: "短いセリフを自然なニュアンスで翻訳" },
      ],
    },
    {
      title: "翻訳の品質チェック・添削",
      icon: "✅",
      description: "既存の翻訳文をAIがレビュー。誤訳や不自然な表現を検出して改善案を提示。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "翻訳前後を比較して、誤訳や訳抜けを指摘" },
        { name: "Claude", slug: "claude", tip: "ニュアンスの違いまで丁寧に指摘して改善案を提示" },
        { name: "Grammarly", slug: "grammarly", tip: "英訳結果の文法・スタイルチェックに最適" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI翻訳ツール比較ガイド【2026年版】",
    description: "AI翻訳ツールの比較と活用法",
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
          <span className="text-foreground">AI翻訳ツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">翻訳</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI翻訳ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI翻訳ツールはこの数年で飛躍的に進化し、ビジネス文書から論文・字幕まで実用レベルで使えるようになりました。本ガイドでは目的別のおすすめAI翻訳ツールと、精度を最大化するコツを紹介します。
        </p>

        <div className="bg-card-bg dark:bg-green-900/40 border border-card-border rounded-xl p-6 mb-10">
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

        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg dark:bg-green-900/40 border border-card-border rounded-xl p-4">
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-green-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. DeepLとChatGPTどちらが翻訳精度が高い？</h3>
              <p className="text-sm text-muted">A. 短文・ビジネス文書はDeepLが自然、文脈理解や指示付き翻訳はChatGPT/Claudeが得意です。用途で使い分けるのがおすすめです。</p>
            </div>
            <div className="bg-card-bg dark:bg-green-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 機密文書を翻訳しても安全？</h3>
              <p className="text-sm text-muted">A. 各ツールの法人プランやAPIを利用し、入力データを学習に使わない設定で運用しましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-green-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 専門用語の一貫性を保つには？</h3>
              <p className="text-sm text-muted">A. 用語集をプロンプトに渡したり、DeepL Proの用語集機能を使うと一貫性が保てます。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-green-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI翻訳活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span><strong>用途</strong>でツールを使い分ける</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>長文・要約は<strong>Claude</strong>が便利</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>機密情報は<strong>法人プラン</strong>で運用</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>最終チェックは<strong>人間が必須</strong></li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">翻訳に合ったAIツールを見つけましょう</p>
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
