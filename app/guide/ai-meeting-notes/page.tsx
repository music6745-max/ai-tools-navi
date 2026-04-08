import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "議事録AIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "会議の文字起こしと要約を自動化できる議事録AI7選を徹底比較。精度と料金・選び方のポイントを解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-meeting-notes`,
  },
};

export default function AIMeetingNotesPage() {
  const useCases = [
    {
      title: "会議の文字起こし",
      icon: "🎙️",
      description: "会議音声をリアルタイムでテキスト化。話者識別にも対応し、議事録のたたき台を自動作成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "音声ファイルをアップロードして文字起こし＋要約まで一気通貫で対応" },
        { name: "Claude", slug: "claude", tip: "文字起こし結果から論点・決定事項・宿題を自動で整理" },
        { name: "Gemini", slug: "gemini", tip: "Google Meetと連携してリアルタイムで議事録を生成" },
      ],
    },
    {
      title: "議事録の要約・整形",
      icon: "📝",
      description: "長時間の会議録を、決定事項・課題・ToDoの構造で読みやすい議事録に整形。",
      tools: [
        { name: "Claude", slug: "claude", tip: "10万文字超の文字起こしも一度に要約。論点ごとに整理が得意" },
        { name: "ChatGPT", slug: "chatgpt", tip: "テンプレート（決定事項／課題／次回までのToDo）に沿った整形に強い" },
        { name: "Notion AI", slug: "notion-ai", tip: "Notion上の議事録を自動で要約・タグ付けしてナレッジ化" },
      ],
    },
    {
      title: "アクション・タスクの抽出",
      icon: "✅",
      description: "会議内で発生したタスクを自動抽出し、担当者・期限とセットで一覧化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「ToDoだけ抽出して」と指示するだけで担当・期限付きリストを生成" },
        { name: "Claude", slug: "claude", tip: "曖昧な口頭の合意からも具体的なタスクに落とし込むのが得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "抽出タスクをそのままNotionデータベースに追加可能" },
      ],
    },
    {
      title: "多言語会議への対応",
      icon: "🌐",
      description: "英語・中国語など多言語の会議を自動翻訳しながら議事録化。グローバル会議に最適。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "高精度な翻訳で議事録の正確性を担保。専門用語にも強い" },
        { name: "ChatGPT", slug: "chatgpt", tip: "多言語の音声を翻訳しつつ、日本語議事録として再構成" },
        { name: "Claude", slug: "claude", tip: "ニュアンスを保った翻訳と要約を両立。長尺会議に強い" },
      ],
    },
    {
      title: "営業・1on1メモの自動化",
      icon: "🤝",
      description: "営業商談や1on1ミーティングの記録をAIが自動で整理。CRM入力の手間を大幅削減。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "商談メモから次のアクション・提案ポイントを自動抽出" },
        { name: "Claude", slug: "claude", tip: "1on1の発言から課題や成長ポイントを丁寧に整理" },
        { name: "Notion AI", slug: "notion-ai", tip: "顧客・メンバーごとに議事録を蓄積してナレッジ化" },
      ],
    },
    {
      title: "議事録テンプレートの作成",
      icon: "📋",
      description: "会議体ごとに最適な議事録テンプレートをAIが提案。社内標準化に活用。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "定例・キックオフ・レビュー等、目的別のテンプレートを一括生成" },
        { name: "Notion AI", slug: "notion-ai", tip: "テンプレートをNotionに保存し、誰でも同じ品質の議事録を作成" },
        { name: "Claude", slug: "claude", tip: "既存議事録から共通項を抽出し、自社向けテンプレートを最適化" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI議事録ツール比較ガイド【2026年版】",
    description: "AI議事録ツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI議事録", item: `${siteConfig.url}/guide/ai-meeting-notes` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI議事録は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI議事録の選び方は？",
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
          <span className="text-foreground">AI議事録ツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">議事録</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI議事録ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          会議の文字起こし・要約・タスク抽出までAIで自動化することで、議事録作成の時間を90%以上削減できます。本ガイドでは、目的別のおすすめAI議事録ツールと、現場で役立つ活用テクニックを紹介します。
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
          <h2 className="text-xl font-bold mb-4">議事録運用と相性の良い業務インフラ</h2>
          <p className="text-sm text-muted mb-4">議事録の保存・共有にはセキュアな環境が欠かせません。会計・サーバー・VPNで業務基盤を整えましょう。</p>
          <ComparisonTableCTA
            services={[
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "スマホで完結する会計ソフト", price: "月1,180円〜", badge: "業務効率化" },
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "国内最速級のレンタルサーバー", price: "月687円〜", badge: "高速" },
              { name: "MillenVPN", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+41V7ZM+3JTE+HV7V6", highlight: "国産VPNでセキュアな会議環境", price: "月396円〜" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料で使えるAI議事録ツールはありますか？</h3>
              <p className="text-sm text-muted">A. ChatGPTやClaudeの無料プランでも、文字起こし済みテキストの要約・整形は十分に可能です。本格的な音声からの自動文字起こしは有料プランが便利です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 機密会議の内容をAIに入れても大丈夫？</h3>
              <p className="text-sm text-muted">A. 必ず社内のセキュリティポリシーを確認してください。法人プランやAPI経由の利用では、入力データを学習に使わない設定が可能です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 話者識別はどのくらい正確？</h3>
              <p className="text-sm text-muted">A. 専用ツールであれば実用レベルですが、誤認識は発生します。重要会議では人間によるチェックを必ず行いましょう。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI議事録導入のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>文字起こし＋要約</strong>から導入する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>AIの議事録は必ず<strong>人間が最終確認</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>機密会議は<strong>セキュリティポリシー</strong>を確認</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>テンプレート化で<strong>社内標準</strong>を作る</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">議事録作成に合ったAIツールを見つけましょう</p>
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
              <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">ビジネス向けAI</div>
              </Link>
              <Link href="/guide/ai-for-designers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">デザイナー向けAI</div>
              </Link>
              <Link href="/guide/ai-for-remote-work" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">リモートワーク向けAI</div>
              </Link>
              <Link href="/guide/ai-presentation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AIプレゼン作成</div>
              </Link>
              <Link href="/guide/ai-slide-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AIスライド作成</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
