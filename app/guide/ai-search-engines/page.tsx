import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI検索エンジン比較【2026年最新】Perplexity・You.com・Phind徹底解説",
  description:
    "AI検索エンジンをPerplexity・You.com・Phind・Arc Search・Braveで徹底比較。従来のGoogle検索との違い、リサーチ・論文検索・開発者向けの使い分けを解説します。",
  keywords: ["AI検索エンジン", "Perplexity", "You.com", "Phind", "AI 検索", "リサーチ AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-search-engines` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI検索エンジン比較【2026年最新】", description: "Perplexity・You.com・Phind等のAI検索を徹底比較。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI検索エンジン", item: `${siteConfig.url}/guide/ai-search-engines` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AI検索とGoogle検索の違いは？", acceptedAnswer: { "@type": "Answer", text: "Google検索はキーワードに関連するリンク一覧を返しますが、AI検索はWeb情報を統合・要約して直接的な回答を生成します。調べ物の時間が大幅に短縮されます。" } },
    { "@type": "Question", name: "Perplexityは無料で使える？", acceptedAnswer: { "@type": "Answer", text: "Perplexityは無料プランで基本的な検索機能が利用可能。ProプランではGPT-4やClaudeといった高性能モデルを選択できます。" } },
    { "@type": "Question", name: "情報の正確性は？", acceptedAnswer: { "@type": "Answer", text: "AI検索は回答に引用元を明示するため、元記事で確認できます。ただし生成された要約には誤りが含まれる可能性があるため、重要な情報は必ず引用元を確認してください。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI検索エンジン</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">検索AI</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI検索エンジン比較【2026年最新】｜Perplexity・You.com・Phind徹底解説</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          「ググる」から「AIに聞く」時代へ。AI検索エンジンはWeb情報を統合・要約し、引用元付きの直接的な回答を返します。リサーチ・論文検索・プログラミング質問など、用途に合った使い分けでGoogle検索の時代は終わりつつあります。主要5サービスを徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. AI検索が革命的な理由</a></li>
            <li><a href="#vs" className="text-primary hover:underline">2. Google検索との違い</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAI検索5選</a></li>
            <li><a href="#usecase" className="text-primary hover:underline">4. シーン別の使い分け</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 効果的な質問のコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AI検索が革命的な理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>従来の検索エンジンは「キーワードに一致するリンク一覧」を返すだけでしたが、AI検索は複数サイトの情報を統合し、直接的な回答を生成します。リサーチにかける時間が1/5〜1/10に短縮されるケースも多く、仕事の生産性が劇的に変わります。</p>
            <p>引用元のURLも同時に提示されるため、信頼性の確認も容易。論文・公的資料・開発者向けドキュメントなど、情報源を重視した検索が可能になりました。</p>
          </div>
        </section>

        <section id="vs" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> Google検索との違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-card-border"><th className="text-left pb-2">項目</th><th className="text-left pb-2">Google検索</th><th className="text-left pb-2">AI検索</th></tr></thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border/50"><td className="py-2">結果表示</td><td>リンク一覧</td><td>統合された回答</td></tr>
                <tr className="border-b border-card-border/50"><td className="py-2">調査時間</td><td>複数サイト閲覧が必要</td><td>即座に答え</td></tr>
                <tr className="border-b border-card-border/50"><td className="py-2">引用元</td><td>手動で確認</td><td>自動で引用付き</td></tr>
                <tr className="border-b border-card-border/50"><td className="py-2">会話</td><td>不可</td><td>追加質問・深掘り可能</td></tr>
                <tr><td className="py-2">広告</td><td>多い</td><td>ほぼなし</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAI検索エンジン5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🔍</span><div><h3 className="font-bold text-lg">Perplexity AI</h3><div className="text-xs text-muted">AI検索の代表格</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">万能型</span>
              </div>
              <p className="text-sm text-muted">最も完成度が高いAI検索。引用元リンクを明確に提示し、追加質問で深掘り可能。Proプランでは複数のAIモデル（GPT-4、Claude等）を選択できる。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🎯</span><div><h3 className="font-bold text-lg">You.com</h3><div className="text-xs text-muted">多モード切替型検索</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">カスタム</span>
              </div>
              <p className="text-sm text-muted">検索・チャット・記事生成・画像生成を1つのプラットフォームに統合。用途に応じてモード切替が可能で、プライバシー重視の設計。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">👨‍💻</span><div><h3 className="font-bold text-lg">Phind</h3><div className="text-xs text-muted">開発者特化AI検索</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">開発者向け</span>
              </div>
              <p className="text-sm text-muted">プログラミング質問に特化。StackOverflow・GitHub・公式ドキュメントを統合した回答を生成。エラーメッセージを貼って聞くだけで解決策が得られる。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🏹</span><div><h3 className="font-bold text-lg">Arc Search</h3><div className="text-xs text-muted">スマホ専用のAI検索アプリ</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">モバイル</span>
              </div>
              <p className="text-sm text-muted">「Browse for Me」機能で、質問すると複数サイトを自動巡回し1ページにまとめた結果を生成。移動中の調べ物に最適。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🦁</span><div><h3 className="font-bold text-lg">Brave Search + AI</h3><div className="text-xs text-muted">プライバシー重視のAI検索</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">プライバシー</span>
              </div>
              <p className="text-sm text-muted">トラッキングなしでAI検索機能を提供。独自インデックスを使用し、Googleに依存しない検索結果が得られる。</p>
            </div>
          </div>
        </section>

        <section id="usecase" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> シーン別の使い分け</h2>
          <div className="space-y-3 text-sm text-muted">
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">📚 学術リサーチ</div><p>Perplexityで論文検索＋要約。Academic Focusモードで学術情報に絞った検索が可能。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">💻 プログラミング</div><p>Phindでエラー解決・実装例検索。コード付きで具体的な解決策が得られる。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">📊 ビジネスリサーチ</div><p>You.comやPerplexityで市場調査・競合分析。複数ソースを統合した要約が便利。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🌐 ニュース・トレンド</div><p>Perplexityのリアルタイム検索で、最新ニュースを引用元付きで要約。</p></div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 効果的な質問のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "具体的に質問する（「最新」「2026年」など明記）" },
              { icon: "✅", text: "引用元を必ず確認する" },
              { icon: "✅", text: "追加質問で深掘りする" },
              { icon: "✅", text: "ドメイン指定で情報源を絞る" },
              { icon: "⚠️", text: "重要な意思決定はAI回答だけで判断しない" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">今すぐAI検索を使い始めよう</h2>
          <p className="text-sm text-muted mb-6">Perplexity AIは無料で試せます。Google検索との違いをぜひ体感してください</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-rag-tools" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">RAGツール比較</Link>
            <Link href="/guide/chatgpt-vs-claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">ChatGPT vs Claude</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-rag-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">RAG構築ツール</div></Link>
            <Link href="/guide/ai-fact-checking" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">リサーチ</div><div className="font-bold text-sm">AIファクトチェック</div></Link>
            <Link href="/guide/ai-for-researchers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学術</div><div className="font-bold text-sm">研究者向けAI</div></Link>
            <Link href="/guide/ai-summary" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">文章</div><div className="font-bold text-sm">AI要約ツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
