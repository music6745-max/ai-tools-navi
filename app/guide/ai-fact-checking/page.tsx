import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIファクトチェック・情報検証ツールおすすめ5選【2026年最新】",
  description:
    "Perplexity・GPTZero・Originality.AI・ChatGPT・Google Fact Check Toolsなど、フェイクニュース対策と情報検証に役立つAIツール5選を徹底解説。",
  keywords: ["AI ファクトチェック", "AI 情報検証", "Perplexity", "フェイクニュース AI", "AI 検出"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-fact-checking` },
};

export default function AIFactCheckingPage() {
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIファクトチェック・情報検証完全ガイド｜2026年おすすめツール5選", description: "AIで情報の真偽を見極める方法を徹底解説。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "AIファクトチェック", item: `${siteConfig.url}/guide/ai-fact-checking` },
  ]};
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIで生成された文章を見分けることはできますか？", acceptedAnswer: { "@type": "Answer", text: "GPTZero・Originality.AI・ZeroGPTなどのAI判定ツールでかなりの精度で見分けられますが、100%ではありません。複数ツールでクロスチェックするのがおすすめです。" } },
    { "@type": "Question", name: "Perplexityはなぜファクトチェックに向いているのですか？", acceptedAnswer: { "@type": "Answer", text: "Perplexityはすべての回答に出典(URL)を明示するため、情報の根拠を即座に確認できます。一次ソースに辿り着きやすい設計になっています。" } },
    { "@type": "Question", name: "ChatGPTのハルシネーションを防ぐ方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "「出典を明示してください」「不明な場合は不明と回答してください」とプロンプトに含めることで誤情報を減らせます。Search機能の併用も有効です。" } },
  ]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIファクトチェック</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">情報検証</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIファクトチェック・情報検証完全ガイド｜2026年おすすめツール5選
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          フェイクニュース・ディープフェイク・AI生成コンテンツの氾濫により、情報の真偽を見極める力がこれまで以上に重要になっています。本記事ではAIを活用したファクトチェック・情報検証ツール5選と、賢い情報リテラシーの身につけ方を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">情報検証がこれほど重要になった理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>SNSの拡散力とAI生成コンテンツの普及により、フェイクニュースは一晩で世界中に広がる時代になりました。総務省の調査でも、SNSユーザーの約7割が「過去1年以内にフェイクニュースに触れた」と回答しています。</p>
            <p>特に2024年以降はAI生成画像・動画(ディープフェイク)の精度が飛躍的に向上し、専門家でも肉眼での判別が困難になっています。投資・選挙・健康など重大な意思決定に関わる情報ほど、ファクトチェックの重要性は増しています。</p>
            <p>幸いなことに、AIの脅威に対するAIの解決策も同時に発展しています。出典明示型AIや専門の検証ツールを使いこなせば、情報の真偽を高精度で判定できる時代になりました。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">情報検証の5ステップ</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold mb-2">1. 一次情報源の確認</h3><p className="text-sm text-muted">PerplexityやChatGPT Searchで「出典明示」を求め、必ず元の発信源にアクセスして内容を確認します。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold mb-2">2. 複数ソースのクロスチェック</h3><p className="text-sm text-muted">同じ話題を扱う複数の信頼できるメディアを比較。一社しか報じていない情報は要注意です。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold mb-2">3. AI生成判定</h3><p className="text-sm text-muted">GPTZero・Originality.AIで文章のAI生成率を判定。記事や画像が人間によるものか確認します。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold mb-2">4. 専門ファクトチェックサイトの活用</h3><p className="text-sm text-muted">Google Fact Check Tools・FIJ(Fact Check Initiative Japan)など専門組織の検証結果を参照します。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold mb-2">5. 拡散前の冷静な判断</h3><p className="text-sm text-muted">感情を煽る情報ほど検証してから拡散。「シェアする前に1回検索」を習慣化しましょう。</p></div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">ファクトチェックにおすすめのAI 5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center gap-3 mb-3"><span className="text-3xl">🔍</span><div><h3 className="font-bold text-lg">Perplexity AI</h3><span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">出典明示型検索</span></div></div><p className="text-sm text-muted">すべての回答に出典URLが付くため、情報源の確認が即座にできます。ファクトチェックの第一選択です。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center gap-3 mb-3"><span className="text-3xl">🤖</span><div><h3 className="font-bold text-lg">GPTZero</h3><span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">AI生成判定</span></div></div><p className="text-sm text-muted">教育機関での導入実績多数。文章がAI生成かどうかを高精度で判定します。学校・出版・採用で活躍。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center gap-3 mb-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Originality.AI</h3><span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">プロ向けAI検出</span></div></div><p className="text-sm text-muted">AI生成判定+盗用チェックの統合ツール。ライター・編集者・SEO担当者の必須ツールです。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center gap-3 mb-3"><span className="text-3xl">💬</span><div><h3 className="font-bold text-lg">ChatGPT (Search機能)</h3><span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">汎用検証</span></div></div><p className="text-sm text-muted">「この情報は事実ですか？出典付きで教えて」と質問するだけで検証できます。Search機能で最新情報にも対応。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center gap-3 mb-3"><span className="text-3xl">🌐</span><div><h3 className="font-bold text-lg">Google Fact Check Tools</h3><span className="text-xs px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">専門組織検証</span></div></div><p className="text-sm text-muted">世界中のファクトチェック専門組織の検証結果を横断検索できる無料ツール。Googleが提供しています。</p></div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ファクトチェック時の注意点</h2>
          <div className="space-y-3">
            {[
              "✅ AI判定ツールは100%ではない。複数ツールでクロスチェックする",
              "✅ 一次情報(政府発表・公式リリース・論文)を最優先する",
              "✅ 「いつ」発信された情報か必ず確認する(古い情報の使い回しに注意)",
              "⚠️ AIにも偏りがある。同じ質問を複数のAI(ChatGPT、Claude、Perplexity)で検証する",
              "⚠️ 画像・動画はディープフェイク検出ツール(Sensity・Deepware)も活用する",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card-bg border border-card-border rounded-lg p-3"><span className="text-sm">{item}</span></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">情報リテラシー・データスキルを学ぶ</h2>
          <ComparisonTableCTA
            services={[
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-news-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">情報収集</div><div className="font-bold text-sm">AIニュース生成</div></Link>
            <Link href="/guide/ai-content-moderation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種別</div><div className="font-bold text-sm">AIコンテンツモデレーション</div></Link>
            <Link href="/guide/ai-summary" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャット・文章</div><div className="font-bold text-sm">AI要約ツール</div></Link>
            <Link href="/guide/ai-vs-human" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">基礎</div><div className="font-bold text-sm">AIと人間の比較</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
