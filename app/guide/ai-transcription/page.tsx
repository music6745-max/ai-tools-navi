import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "文字起こしAIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "会議やインタビューの音声を自動で文字起こしできるAI7選を徹底比較。精度・料金・選び方を分かりやすく解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-transcription`,
  },
};

export default function AITranscriptionPage() {
  const useCases = [
    {
      title: "会議・打ち合わせの文字起こし",
      icon: "🎙️",
      description: "オンライン会議や対面打ち合わせの音声を、話者識別付きで自動テキスト化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "録音ファイルをアップロードして文字起こし＋要約を同時実行" },
        { name: "Gemini", slug: "gemini", tip: "Google Meetと連携してリアルタイム文字起こしに対応" },
        { name: "Claude", slug: "claude", tip: "文字起こし結果から論点・決定事項を整理するのが得意" },
      ],
    },
    {
      title: "インタビュー取材の書き起こし",
      icon: "🎤",
      description: "ロングインタビューを自動テキスト化。編集用の整形や話し言葉の整理にも活用。",
      tools: [
        { name: "Claude", slug: "claude", tip: "長時間音声のテキストもまとめて読み込み、発言整理が得意" },
        { name: "ChatGPT", slug: "chatgpt", tip: "話し言葉を記事向けの書き言葉に自動整形" },
        { name: "Notion AI", slug: "notion-ai", tip: "インタビューをNotionに蓄積してナレッジ化" },
      ],
    },
    {
      title: "講義・セミナーの記録",
      icon: "🎓",
      description: "学校の授業、社内研修、ウェビナーなどを文字起こしして復習・共有しやすくする。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "専門用語の多い講義でも高精度で文字起こし可能" },
        { name: "Claude", slug: "claude", tip: "講義内容の章立て・要点抽出まで一括で対応" },
        { name: "Gemini", slug: "gemini", tip: "Google Driveの音声ファイルと連携しやすい" },
      ],
    },
    {
      title: "動画・ポッドキャスト字幕",
      icon: "📺",
      description: "YouTubeやポッドキャスト音声を文字起こしして字幕ファイル（SRT等）として書き出し。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "タイムスタンプ付きSRT出力に対応" },
        { name: "Claude", slug: "claude", tip: "長尺動画の字幕を自然な区切りで整形するのが得意" },
        { name: "DeepL Write", slug: "deepl-write", tip: "多言語字幕化のための翻訳品質が高い" },
      ],
    },
    {
      title: "多言語音声の翻訳文字起こし",
      icon: "🌐",
      description: "英語・中国語など海外会議やインタビューを翻訳付きで文字起こし。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "専門用語を含む翻訳文字起こしに強い" },
        { name: "ChatGPT", slug: "chatgpt", tip: "音声を翻訳したうえで日本語記事として再構成" },
        { name: "Claude", slug: "claude", tip: "ニュアンスを保ったまま翻訳＋要約が可能" },
      ],
    },
    {
      title: "文字起こし結果の要約・整形",
      icon: "📝",
      description: "長大な文字起こしテキストを要点ごとに要約し、議事録・記事に仕上げる。",
      tools: [
        { name: "Claude", slug: "claude", tip: "数万文字のテキストも一度に要約できる" },
        { name: "ChatGPT", slug: "chatgpt", tip: "テンプレートに沿った議事録整形が得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "要約結果をNotionに保存してチーム共有" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI音声文字起こしツール比較ガイド【2026年版】",
    description: "AI音声文字起こしツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI文字起こし", item: `${siteConfig.url}/guide/ai-transcription` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI文字起こしは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI文字起こしの選び方は？",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AI音声文字起こし</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">文字起こし</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI音声文字起こしツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI音声文字起こしを活用すれば、会議・インタビュー・講義・動画まで、音声コンテンツのテキスト化と活用を自動化できます。本ガイドでは用途別におすすめAIツールと、現場で役立つ活用法を紹介します。
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
          <h2 className="text-xl font-bold mb-4">文字起こしデータの活用に役立つ業務ツール</h2>
          <p className="text-sm text-muted mb-4">文字起こししたデータの保存・共有・活用には、高速サーバーや会計ソフトとの連携が便利です。</p>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "国内最速級・データ保管に最適", price: "月687円〜", badge: "高速" },
              { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "安定実績20年・大容量対応", price: "月990円〜", badge: "定番" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "議事録から請求書発行まで一気通貫", price: "月1,180円〜" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 文字起こしの精度はどれくらい？</h3>
              <p className="text-sm text-muted">A. 録音環境が良ければ90%以上の精度が出ます。専門用語は事前に辞書登録しておくと精度が上がります。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 話者識別は可能？</h3>
              <p className="text-sm text-muted">A. 多くのAIツールで対応可能ですが完璧ではありません。重要な会議は人間によるチェックを行いましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 機密音声をAIに入れても大丈夫？</h3>
              <p className="text-sm text-muted">A. 会社のセキュリティポリシーを必ず確認し、学習に使われない法人プランやAPI経由の利用を検討しましょう。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI文字起こし活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span><strong>録音環境</strong>を整え精度を高める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>文字起こし後は<strong>要約・整形</strong>まで自動化する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>機密情報は<strong>セキュリティポリシー</strong>を確認</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>重要な文字起こしは<strong>人間チェック</strong>を必ず行う</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">音声文字起こしに合ったAIツールを見つけましょう</p>
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
              <Link href="/guide/ai-blog-writing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ライティング</div>
                <div className="font-bold text-sm">AIブログ執筆</div>
              </Link>
              <Link href="/guide/ai-article-rewriting" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ライティング</div>
                <div className="font-bold text-sm">AI記事リライト</div>
              </Link>
              <Link href="/guide/ai-email-writing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ライティング</div>
                <div className="font-bold text-sm">AIメール作成</div>
              </Link>
              <Link href="/guide/ai-resume" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ライティング</div>
                <div className="font-bold text-sm">AI履歴書作成</div>
              </Link>
              <Link href="/guide/ai-seo" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ライティング</div>
                <div className="font-bold text-sm">AI SEO対策</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
