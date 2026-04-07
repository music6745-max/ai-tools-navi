import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI SEO対策ガイド【2026年版】検索上位を狙うAIツール活用法",
  description:
    "AIを使ったSEO対策を徹底解説。キーワード調査、競合分析、記事構成、内部リンク最適化まで、検索上位を狙うおすすめAI SEOツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-seo`,
  },
};

export default function AISEOPage() {
  const useCases = [
    {
      title: "キーワード調査・検索意図分析",
      icon: "🔍",
      description: "狙うキーワードの検索意図や関連ワードをAIで洗い出し、上位化の戦略を立てる。",
      tools: [
        { name: "Surfer SEO", slug: "surfer-seo", tip: "関連キーワードと検索意図を自動抽出。記事の骨子作りに直結" },
        { name: "Perplexity", slug: "perplexity", tip: "出典付きで最新トレンドを調査でき、検索意図の理解に強い" },
        { name: "ChatGPT", slug: "chatgpt", tip: "検索ユーザーのペルソナ・悩みを深掘りして構成を設計" },
      ],
    },
    {
      title: "競合記事の分析",
      icon: "📊",
      description: "上位表示されている競合記事の構成・見出し・網羅性をAIで分析し、差別化ポイントを発見。",
      tools: [
        { name: "Surfer SEO", slug: "surfer-seo", tip: "上位10記事の見出しや文字数を自動分析して最適構成を提案" },
        { name: "Frase", slug: "frase", tip: "競合の網羅トピックを可視化し、抜け漏れを防げる" },
        { name: "MarketMuse", slug: "marketmuse", tip: "トピックの網羅度スコアで記事の弱点を特定" },
      ],
    },
    {
      title: "記事構成・アウトライン作成",
      icon: "📝",
      description: "分析結果を元に、SEOに強い見出し構成と要点をAIに下書きさせる。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "検索意図に沿った見出し案を短時間で量産できる" },
        { name: "Claude", slug: "claude", tip: "長文記事の論理構成と読みやすさの設計に強い" },
        { name: "Jasper", slug: "jasper", tip: "SEOテンプレートに沿った構成案を自動生成" },
      ],
    },
    {
      title: "本文執筆・リライト",
      icon: "✍️",
      description: "構成に沿った本文執筆、既存記事のリライトをAIで高速化。E-E-A-Tも意識。",
      tools: [
        { name: "Claude", slug: "claude", tip: "自然で読みやすい日本語本文に強く、リライトの下書きに最適" },
        { name: "ChatGPT", slug: "chatgpt", tip: "トーン調整や文字数コントロールが柔軟" },
        { name: "Writesonic", slug: "writesonic", tip: "SEO記事テンプレートが豊富で執筆を一気に加速" },
      ],
    },
    {
      title: "内部リンク・構造化最適化",
      icon: "🔗",
      description: "関連記事のピックアップや内部リンクの提案、メタディスクリプション生成をAIに任せる。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "サイトマップから最適な内部リンク候補を提案" },
        { name: "Frase", slug: "frase", tip: "既存コンテンツを分析して関連記事候補を自動提示" },
        { name: "Claude", slug: "claude", tip: "メタタイトル・ディスクリプションの複数案生成に便利" },
      ],
    },
    {
      title: "順位計測・コンテンツ改善",
      icon: "📈",
      description: "公開後の順位やアクセスデータを元に、改善ポイントをAIに分析させてリライトに活用。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "Search ConsoleのデータをCSVで貼り付けて改善提案を取得" },
        { name: "Claude", slug: "claude", tip: "大量のアクセスデータから傾向と打ち手を整理" },
        { name: "Surfer SEO", slug: "surfer-seo", tip: "リライト対象の優先度をスコアで可視化" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI SEO対策ガイド【2026年版】",
    description: "AI SEOツールの比較と活用法を解説",
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
          <span className="text-foreground">AI SEO対策</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">SEO</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI SEO対策ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          キーワード調査から構成作成、リライト、順位分析まで、SEO対策の工程はAIで大幅に効率化できます。本ガイドでは、検索上位を狙うためのAI SEOツールと実践的な活用法を紹介します。
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
              <h3 className="font-bold mb-2">Q. AIだけで上位表示できますか？</h3>
              <p className="text-sm text-muted">A. AIはあくまで補助です。独自の一次情報、体験談、専門性（E-E-A-T）を人間が加えることが上位化には不可欠です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AI記事はペナルティを受けますか？</h3>
              <p className="text-sm text-muted">A. Googleは「AIかどうか」ではなく、有益で独自性のあるコンテンツかを評価します。AI任せのコピペ量産はリスクがあります。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料のAI SEOツールはありますか？</h3>
              <p className="text-sm text-muted">A. ChatGPTやClaudeの無料プランだけでも、構成作成やリライトの下書きには十分活用できます。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI SEO対策のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>AIは<strong>調査・構成・下書き</strong>で使い倒す</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>独自の<strong>一次情報と体験</strong>を必ず加える</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>公開後は<strong>データを元にリライト</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span><strong>E-E-A-T</strong>を意識した品質管理を行う</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">SEO対策に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-writing" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIライティングツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
