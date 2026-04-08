import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "記事リライトAIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "既存記事を高品質にリライトできるAI6選を徹底比較。SEO効果を高めるリライト術と選び方のポイントを解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-article-rewriting`,
  },
};

export default function AIArticleRewritingPage() {
  const useCases = [
    {
      title: "SEOリライトで検索順位UP",
      icon: "🔍",
      description: "既存記事のキーワード最適化、見出し強化、最新情報の追記をAIで効率化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "競合上位記事の構成と比較しながらリライト案を生成" },
        { name: "Claude", slug: "claude", tip: "長文記事も一度に読み込み、論理性を保ったままリライト" },
        { name: "Jasper", slug: "jasper", tip: "SEOテンプレートに沿った高品質リライトに対応" },
      ],
    },
    {
      title: "口調・トーンの変更",
      icon: "🗣️",
      description: "硬い文章をフレンドリーに、カジュアルをビジネス調に。読者層に合わせた書き直しが可能。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「〇〇な口調で書き直して」と指示するだけで自然に変換" },
        { name: "Claude", slug: "claude", tip: "ニュアンスを保ったままトーンを丁寧に調整" },
        { name: "Wordtune", slug: "wordtune", tip: "1文単位でトーンと表現のバリエーションを提案" },
      ],
    },
    {
      title: "要約しながらリライト",
      icon: "📑",
      description: "長文記事を読みやすい長さに要約しつつ、新しい記事として再構成。",
      tools: [
        { name: "Claude", slug: "claude", tip: "10万文字超でも一気に読み込み、要点を抽出して再構成" },
        { name: "ChatGPT", slug: "chatgpt", tip: "目的別の要約レベル（短・中・詳細）に応じてリライト" },
        { name: "Notion AI", slug: "notion-ai", tip: "ドキュメント内で要約と全文を切り替えながら執筆" },
      ],
    },
    {
      title: "翻訳しながらリライト",
      icon: "🌐",
      description: "海外記事を翻訳するだけでなく、日本人読者向けに自然な文章として書き直し。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "高精度翻訳と自然な日本語表現の両立に強い" },
        { name: "ChatGPT", slug: "chatgpt", tip: "翻訳＋日本人向けの例え話追加までワンストップ" },
        { name: "Claude", slug: "claude", tip: "原文のニュアンスを保ったまま日本語記事を再構成" },
      ],
    },
    {
      title: "古い記事のアップデート",
      icon: "🔄",
      description: "過去記事の情報を最新化し、再公開でアクセスを取り戻す。",
      tools: [
        { name: "Perplexity", slug: "perplexity", tip: "最新情報を出典付きでリサーチして記事に反映" },
        { name: "ChatGPT", slug: "chatgpt", tip: "古い情報を検出し、最新の代替表現を提案" },
        { name: "Gemini", slug: "gemini", tip: "Google検索と連携した最新事例をリライトに活用" },
      ],
    },
    {
      title: "重複コンテンツの回避",
      icon: "🛡️",
      description: "他サイトと表現が被らないよう、独自表現に書き直してオリジナリティを高める。",
      tools: [
        { name: "Claude", slug: "claude", tip: "原文の構成を保ちつつ独自の言い回しに変換" },
        { name: "ChatGPT", slug: "chatgpt", tip: "言い換え候補を複数生成し、自然な表現を選択" },
        { name: "Wordtune", slug: "wordtune", tip: "1文ずつリライト案を比較しながら書き直せる" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI記事リライトツール比較ガイド【2026年版】",
    description: "AI記事リライトツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI記事リライト", item: `${siteConfig.url}/guide/ai-article-rewriting` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI記事リライトは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI記事リライトの選び方は？",
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
          <span className="text-foreground">AI記事リライト</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">記事リライト</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI記事リライトツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          既存記事のSEO強化、口調変更、翻訳リライト、古い情報のアップデートまで、AIを使えば記事リライトの工数を大幅に削減できます。本ガイドでは、目的別のおすすめAIリライトツールと活用法を紹介します。
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
          <h2 className="text-xl font-bold mb-4">ライティングを副業・本業につなげたい方へ</h2>
          <p className="text-sm text-muted mb-4">AIリライトのスキルに加え、Web制作やマーケティングの基礎を身につけると案件単価が大きく変わります。</p>
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
              <h3 className="font-bold mb-2">Q. AIリライトはコピペ判定にならない？</h3>
              <p className="text-sm text-muted">A. 表現を大きく変えれば独自記事として扱われやすいですが、公開前に必ず人間が校正・ファクトチェックを行いましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. SEOに悪影響はありませんか？</h3>
              <p className="text-sm text-muted">A. 検索エンジンは品質を重視します。AIで効率化しつつ、独自情報や一次情報を加えて読者価値を高めることが重要です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 他サイトの記事を勝手にリライトしてもいい？</h3>
              <p className="text-sm text-muted">A. 著作権侵害にあたる恐れがあります。リライトはあくまで自社・自身の記事に対して行い、他サイト記事は引用ルールを守って参照しましょう。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI記事リライトのポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>古い記事の更新</strong>から始める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>SEO観点で<strong>キーワードと構成</strong>を最適化</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>AI出力は必ず<strong>人間が最終チェック</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>独自情報を加えて<strong>読者価値</strong>を高める</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">記事リライトに合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-writing" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIライティングツール一覧
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
              <Link href="/guide/ai-subtitle-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ライティング</div>
                <div className="font-bold text-sm">AI字幕作成</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
