import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "研究者・大学院生向けAI活用ガイド【2026年最新】論文執筆・文献調査を効率化",
  description:
    "研究者・大学院生のための実践AI活用ガイド。論文執筆・文献調査・データ分析・英文校正まで、研究業務を加速する最新AIツールと使い方を解説します。",
  keywords: ["研究者 AI", "大学院生 AI", "論文 AI", "AI 文献調査", "AI 英文校正"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-researchers` },
};

export default function AIForResearchersPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "研究者・大学院生向けAI活用ガイド", description: "論文執筆・文献調査・データ分析・英文校正まで。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "研究者向けAI", item: `${siteConfig.url}/guide/ai-for-researchers` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIで書いた論文は学術誌に投稿できますか？", acceptedAnswer: { "@type": "Answer", text: "多くのジャーナルはAIの使用自体は認めていますが、著者として扱わないこと・使用箇所の開示を義務付けています。投稿先のガイドラインを必ず確認してください。" } },
    { "@type": "Question", name: "文献調査にはどのAIが最適？", acceptedAnswer: { "@type": "Answer", text: "Perplexity・Consensus・Elicitなどが学術論文検索に強く、出典付きで論文を提示してくれます。Google Scholarと併用するのがおすすめです。" } },
    { "@type": "Question", name: "英文校正はどこまで任せていい？", acceptedAnswer: { "@type": "Answer", text: "ClaudeやChatGPTで文法・スタイル修正までは十分対応可能です。ただし専門用語のニュアンスや最終校正はネイティブチェックを推奨します。" } },
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
          <span className="text-foreground">研究者向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">研究・学術</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">研究者・大学院生向けAI活用ガイド｜論文執筆・文献調査を効率化</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          研究者や大学院生にとって、論文執筆・文献調査・データ分析は最大の時間消費。AIツールを活用すれば、これらの作業を劇的に効率化し、研究の本質に集中できる時間を増やせます。本記事では倫理面にも配慮した実践的AI活用法を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. 研究にAIを使うメリット</a></li>
            <li><a href="#literature" className="text-primary hover:underline">2. 文献調査の効率化</a></li>
            <li><a href="#writing" className="text-primary hover:underline">3. 論文執筆・英文校正</a></li>
            <li><a href="#data" className="text-primary hover:underline">4. データ分析・可視化</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール</a></li>
            <li><a href="#ethics" className="text-primary hover:underline">6. 研究倫理の注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> 研究にAIを使うメリット</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>膨大な文献を読む・英語論文を書く・統計処理をする——研究者の仕事はAIとの相性が抜群です。文献検索や要約を短時間で済ませれば、研究のアイデア出しや実験に時間を集中できます。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AI活用の効果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">10倍</div><div>文献読解スピード</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">50%</div><div>論文執筆時間の削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">即時</div><div>英文校正</div></div>
            </div>
          </div>
        </section>

        <section id="literature" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> 文献調査の効率化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>PerplexityやElicitで研究テーマを入力すると、関連論文と出典を一覧表示してくれます。Claude・ChatGPTにPDFをアップロードすれば、論文の要約・重要ポイント抽出・用語解説まで瞬時に得られます。</p>
            <p>複数論文を比較して共通点・相違点を分析する作業もAIが得意とする領域です。</p>
          </div>
        </section>

        <section id="writing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> 論文執筆・英文校正</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>英語論文を書く日本人研究者にとって、Claude・ChatGPTは最強の校正パートナーです。文法ミスの修正だけでなく、学術論文にふさわしい表現への書き換え、論理構成のチェックまで依頼できます。</p>
            <p>Grammarly・DeepL Writeと組み合わせるとさらに精度が高まります。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">英文校正プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>Please proofread the following academic English text for grammar, style, and clarity. Suggest more formal alternatives where appropriate, and explain your changes.</p>
              <p className="mt-2">[ここに英文を貼り付け]</p>
            </div>
          </div>
        </section>

        <section id="data" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> データ分析・可視化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTのAdvanced Data Analysis（旧Code Interpreter）を使えば、CSVファイルをアップロードするだけで統計解析・グラフ作成が可能。PythonコードもAIが書いてくれるので、プログラミング経験が浅くても高度な分析ができます。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> おすすめAIツール</h2>
          <div className="space-y-4">
            <Link href="/tools/chatgpt" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">ChatGPT</h3>
              <p className="text-sm text-muted">Advanced Data Analysisで統計解析・グラフ作成・PDFファイル分析が可能。論文執筆の万能ツール。</p>
            </Link>
            <Link href="/tools/claude" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Claude</h3>
              <p className="text-sm text-muted">長文処理能力が高く、複数論文を一度に読み込ませて比較分析できます。英文校正の品質も最高クラス。</p>
            </Link>
            <Link href="/tools/perplexity" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Perplexity</h3>
              <p className="text-sm text-muted">学術論文検索に強く、出典URL付きで研究情報を取得できます。Academic Focusモードが便利。</p>
            </Link>
          </div>
        </section>

        <section id="ethics" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 研究倫理の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "AI使用箇所は論文のAcknowledgementsで開示する" },
              { icon: "✅", text: "未発表データ・機密情報はAIに入力しない" },
              { icon: "✅", text: "AIの出力内容は必ず一次文献で検証する" },
              { icon: "⚠️", text: "AIをcoauthorにはできない（多くのジャーナルで禁止）" },
              { icon: "⚠️", text: "AI生成の引用・出典は存在しない場合がある（hallucination）" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Pythonを学びデータ分析スキルを強化</h2>
          <ComparisonTableCTA
            services={[
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AIで研究を加速させよう</h2>
          <p className="text-sm text-muted mb-6">研究倫理を守りつつAIを賢く活用しましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/claude" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claudeを見る</Link>
            <Link href="/tools/perplexity" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">Perplexityを見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-english-proofreading" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">英文校正</div><div className="font-bold text-sm">AI英文校正</div></Link>
            <Link href="/guide/ai-data-analysis" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">データ</div><div className="font-bold text-sm">AIデータ分析</div></Link>
            <Link href="/guide/ai-summary" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">要約</div><div className="font-bold text-sm">AI要約</div></Link>
            <Link href="/guide/ai-translation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">翻訳</div><div className="font-bold text-sm">AI翻訳</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
