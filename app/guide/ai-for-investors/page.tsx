import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";

export const metadata: Metadata = {
  title: "投資家向けAIおすすめ7選【2026年最新】活用ガイド｜銘柄分析・市況リサーチ",
  description:
    "個人投資家・トレーダー向けに、ChatGPT・Claude・Gemini・Perplexityなど投資判断を支援するAIツールを徹底解説。決算分析、銘柄スクリーニング、ポートフォリオ管理にAIを活用する方法を紹介。",
  keywords: ["投資 AI", "AI 銘柄分析", "ChatGPT 投資", "AI トレード", "個人投資家 AI", "決算 AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-investors` },
};

export default function AIForInvestorsPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "投資家向けAIおすすめ7選【2026年最新】活用ガイド",
    description: "個人投資家がAIで決算分析・銘柄スクリーニングを行う方法を解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "投資家向けAI", item: `${siteConfig.url}/guide/ai-for-investors` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIに投資判断を任せて大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "AIはあくまで情報整理と分析支援に使うのがおすすめです。最終的な投資判断は必ず自己責任で行いましょう。" } },
      { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPT・Claude・Geminiは無料プランから利用可能です。本格的な分析には有料プランの利用がおすすめです。" } },
      { "@type": "Question", name: "日本株の分析もできますか？", acceptedAnswer: { "@type": "Answer", text: "はい。決算短信や有価証券報告書を貼り付ければ日本株も分析可能です。Geminiは日本語の最新ニュース取得が得意です。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">投資家向けAI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">投資・金融</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">投資家向けAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          個人投資家・トレーダーは、AIを使うことで決算分析・銘柄スクリーニング・市況リサーチを大幅に効率化できます。本記事では実際に使えるAIツール7選と、投資シーンでの具体的な活用法を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. 投資家がAIを使うべき理由</a></li>
            <li><a href="#earnings" className="text-primary hover:underline">2. 決算分析・有報読み込み</a></li>
            <li><a href="#screening" className="text-primary hover:underline">3. 銘柄スクリーニング・市況分析</a></li>
            <li><a href="#portfolio" className="text-primary hover:underline">4. ポートフォリオ管理・リスク評価</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 投資家向けAIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 注意点とコツ</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 投資家がAIを使うべき理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>個人投資家にとって最大の壁は「情報量の差」です。プロの機関投資家がアナリストチームで処理する膨大な情報を、AIを使えば1人でも効率的に処理できます。決算短信、IR資料、業界ニュースをAIに要約・分析させれば、リサーチ時間を1/10以下に短縮できます。</p>
            <p>また、感情に左右されがちな投資判断において、AIは客観的に数字を整理してくれる相棒になります。重要なのは「AIに丸投げしない」こと。AIの出力を踏まえつつ、最終判断は自分で下すことが鉄則です。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">投資家がAIで得られる3つの恩恵</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">10倍</div><div>リサーチ効率向上</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">客観的</div><div>感情に左右されない分析</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24時間</div><div>市況モニタリング</div></div>
            </div>
          </div>
        </section>

        <section id="earnings" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 決算分析・有報読み込み</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>決算短信や有価証券報告書（有報）はページ数が多く、読み込みに時間がかかります。Claudeは200Kトークンのコンテキストで有報全文を一度に読み込めるため、注目セグメントの抽出や前年比較を瞬時に行えます。</p>
            <p>ChatGPTのCode Interpreterを使えば、決算データをグラフ化し、複数銘柄の比較も視覚的に行えます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは個人投資家のリサーチアシスタントです。以下の決算短信から、売上・営業利益・セグメント別業績、注目すべきポイント、前年同期比の変化を箇条書きでまとめてください。</p>
            </div>
          </div>
        </section>

        <section id="screening" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 銘柄スクリーニング・市況分析</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Geminiは検索機能と連携しているため、最新の株価・為替・金利動向を踏まえた市況分析が得意です。Perplexityは出典付きで情報を返してくれるため、リサーチの裏付け取りにも便利です。</p>
            <p>「PER15倍以下、ROE10%以上、高配当の日本株を10銘柄リストアップして」といった条件指定も、AIが整理してくれます。</p>
          </div>
        </section>

        <section id="portfolio" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> ポートフォリオ管理・リスク評価</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>保有銘柄リストをAIに渡して、業種・地域・通貨の偏りを分析させましょう。リスク集中の有無や、相関関係の高い銘柄の重複を可視化できます。リバランス提案もAIに依頼可能ですが、最終判断は自分で行うことが大切です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> 投資家向けAIツール7選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">決算分析に最適</span>
                </div>
                <p className="text-sm text-muted">Code Interpreterで決算データのグラフ化、複数銘柄の比較分析、財務指標の計算まで一括対応。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">有報全文に最適</span>
                </div>
                <p className="text-sm text-muted">200Kトークンの長文コンテキストで、有価証券報告書や年次レポート全文を一度に読み込み、論理的に分析。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">市況リサーチ</span>
                </div>
                <p className="text-sm text-muted">Google検索連携で最新の株価・為替・金利・経済指標を踏まえたマクロ分析が得意。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🔎</span><div><h3 className="font-bold text-lg">Perplexity</h3><div className="text-xs text-muted">出典付き調査</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">裏付け取り</span></div>
              <p className="text-sm text-muted">出典URLを必ず添えるため、リサーチ結果の信頼性を確認しやすい。投資判断の根拠集めに最適。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📊</span><div><h3 className="font-bold text-lg">Microsoft Copilot for Excel</h3><div className="text-xs text-muted">財務モデリング</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">Excel連携</span></div>
              <p className="text-sm text-muted">Excel上で財務モデル構築、シナリオ分析、グラフ化をAIがサポート。バリュエーション計算も自動化。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">投資ノート</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">情報集約</span></div>
              <p className="text-sm text-muted">銘柄リサーチノート・ウォッチリスト・ポートフォリオ管理を一元化。AIで要約・検索が可能。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📰</span><div><h3 className="font-bold text-lg">Feedly AI</h3><div className="text-xs text-muted">市況ニュース</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">情報収集</span></div>
              <p className="text-sm text-muted">投資関連ニュースをAIが自動でキュレーション・要約。重要トピックを見逃さない。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 注意点とコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "AIの出力は必ず一次情報で裏取り。決算数値は短信原本で確認" },
              { icon: "✅", text: "プロンプトは具体的に。「決算分析して」より「PER・PBR・ROEを比較表で」" },
              { icon: "⚠️", text: "投資判断は最終的に自己責任。AIに丸投げしない" },
              { icon: "⚠️", text: "ハルシネーションに注意。古い情報や架空の数値が混じることも" },
              { icon: "⚠️", text: "個人の取引データなど機密情報は公開AIに入れない" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">投資リサーチをAIで効率化しよう</h2>
          <p className="text-sm text-muted mb-6">無料で試せるAIツールから、決算分析・市況リサーチを始めてみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/claude" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claudeの詳細を見る</Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AIチャット比較表を見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-finance" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業種別</div>
              <div className="font-bold text-sm">金融業界向けAI</div>
            </Link>
            <Link href="/guide/ai-investment" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">投資</div>
              <div className="font-bold text-sm">AI投資ツール</div>
            </Link>
            <Link href="/guide/ai-data-analysis" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">分析</div>
              <div className="font-bold text-sm">AIデータ分析</div>
            </Link>
            <Link href="/author" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">編集部</div>
              <div className="font-bold text-sm">編集部について</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
