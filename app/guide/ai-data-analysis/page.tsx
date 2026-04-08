import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "データ分析AIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "ノーコードでデータ分析を効率化できるAI6選を徹底比較。BIツール連携や選び方のポイントを解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-data-analysis`,
  },
};

export default function AIDataAnalysisPage() {
  const useCases = [
    {
      title: "Excel・CSVデータの分析",
      icon: "📊",
      description: "ExcelやCSVファイルをアップロードするだけで、AIがデータの傾向分析、異常値検出、統計サマリーを自動作成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "CSVをアップロードして「売上の傾向を分析して」と指示するだけで分析完了" },
        { name: "Claude", slug: "claude", tip: "大量のデータを一度に処理可能。複雑なクロス分析にも対応" },
        { name: "Gemini", slug: "gemini", tip: "Googleスプレッドシートと連携。リアルタイムデータ分析が得意" },
      ],
    },
    {
      title: "データの可視化・グラフ作成",
      icon: "📈",
      description: "AIがデータに最適なグラフや図表を提案・自動作成。プレゼン資料にそのまま使えるビジュアルを生成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "Code Interpreterでグラフを自動生成。棒グラフ、折れ線、散布図など多様な形式に対応" },
        { name: "Napkin AI", slug: "napkin-ai", tip: "データから美しいインフォグラフィックを自動生成。SNS共有にも最適" },
        { name: "Gamma", slug: "gamma", tip: "データを含むプレゼン資料を自動作成。グラフ入りスライドも一発生成" },
      ],
    },
    {
      title: "レポート・報告書の自動生成",
      icon: "📄",
      description: "分析結果をもとに、経営層向けレポートや月次報告書をAIが自動で文書化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "データ分析結果から「経営会議用のレポート」を自動生成" },
        { name: "Claude", slug: "claude", tip: "長文の報告書でも論理的な構成で正確に作成。図表の説明も丁寧" },
        { name: "Jasper", slug: "jasper", tip: "マーケティングレポートの作成に特化。ブランドトーンに合わせた文書生成" },
      ],
    },
    {
      title: "アンケート分析・テキストマイニング",
      icon: "📋",
      description: "自由回答のアンケートデータやレビューコメントから、キーワード抽出や感情分析を実行。",
      tools: [
        { name: "Claude", slug: "claude", tip: "大量の自由回答を分類・要約。感情分析や頻出ワードの抽出が得意" },
        { name: "ChatGPT", slug: "chatgpt", tip: "テキストデータのカテゴリ分類や、ワードクラウド生成に対応" },
        { name: "Perplexity", slug: "perplexity", tip: "業界のベンチマークデータを検索し、自社データとの比較分析に活用" },
      ],
    },
    {
      title: "売上予測・トレンド分析",
      icon: "🔮",
      description: "過去のデータをもとにAIが将来のトレンドを予測。需要予測や在庫管理の最適化に活用。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "過去の売上データから季節性やトレンドを分析し、将来予測を生成" },
        { name: "Claude", slug: "claude", tip: "複数の変数を考慮した多角的な予測分析。前提条件の明示が丁寧" },
        { name: "Gemini", slug: "gemini", tip: "Google検索トレンドと組み合わせた市場動向の分析が可能" },
      ],
    },
    {
      title: "SQL・データベースクエリの作成",
      icon: "💾",
      description: "自然言語でデータベースへの問い合わせを記述するだけで、AIがSQLクエリを自動生成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「先月の売上上位10商品を抽出して」と自然言語で指示すればSQLを生成" },
        { name: "Claude", slug: "claude", tip: "複雑な結合クエリやサブクエリの作成が得意。エラーの修正も対応" },
        { name: "GitHub Copilot", slug: "github-copilot", tip: "エディタ上でリアルタイムにSQLクエリを補完。データベース操作の効率化" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIデータ分析ガイド【2026年版】",
    description: "AIツールを活用したデータ分析の始め方を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIデータ分析", item: `${siteConfig.url}/guide/ai-data-analysis` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AIデータ分析は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AIデータ分析の選び方は？",
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
          <span className="text-foreground">AIデータ分析</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">データ分析</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIデータ分析ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          プログラミングの知識がなくても、AIツールを使えば本格的なデータ分析が可能です。Excel分析、可視化、レポート作成、予測分析まで、ビジネスで役立つAIデータ分析の方法とおすすめツールを紹介します。
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

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">データ分析スキルを体系的に学ぶ</h2>
          <p className="text-sm text-muted mb-4">AIに任せきりにせず、Pythonや統計の基礎を学ぶと、分析結果の解釈と意思決定が格段に強くなります。</p>
          <ComparisonTableCTA
            services={[
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
            ]}
          />
        </section>

        {/* Summary */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIデータ分析のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>ChatGPT</strong>にCSVをアップロードして分析を体験する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>AIの分析結果は必ず<strong>元データと照合</strong>して正確性を確認する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>機密データをAIに入力する際は<strong>セキュリティポリシー</strong>を確認する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>定期的な分析は<strong>テンプレート化</strong>して効率を上げる</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">データ分析に合ったAIツールを見つけましょう</p>
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
              <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AI議事録</div>
              </Link>
              <Link href="/guide/ai-presentation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AIプレゼン作成</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
