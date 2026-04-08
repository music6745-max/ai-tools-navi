import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "プロダクトマネージャー向けAIおすすめ5選【2026年最新】｜要件定義・ユーザーリサーチ",
  description:
    "PMのためのAIツールを徹底比較。ChatGPT・Claude・Notion AI・Gemini・Perplexityを使った要件定義・ユーザーインタビュー要約・PRD作成・競合分析の実務活用法を解説。",
  keywords: ["プロダクトマネージャー AI", "PM AI", "PRD AI", "ユーザーリサーチ AI", "要件定義 AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-product-managers` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");

  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "プロダクトマネージャー向けAIおすすめ5選｜2026年最新", description: "PM向けAIツール活用ガイド。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "PM向けAI", item: `${siteConfig.url}/guide/ai-for-product-managers` },
  ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "PMがAIを使う最大のメリットは？", acceptedAnswer: { "@type": "Answer", text: "ユーザーインタビューの文字起こし要約、競合分析、PRD下書きなど、情報整理系の業務時間を70%以上削減できます。" } },
    { "@type": "Question", name: "どのツールを使い分けるべき？", acceptedAnswer: { "@type": "Answer", text: "長文ドキュメントはClaude、リサーチはPerplexity、対話・図表はChatGPT、社内ドキュメント整理はNotion AIが定番です。" } },
    { "@type": "Question", name: "機密情報を扱うときの注意点は？", acceptedAnswer: { "@type": "Answer", text: "ユーザーの個人情報や未公開の戦略情報は、企業向けTeam/Enterpriseプランで匿名化・マスキング後に利用するのが原則です。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">PM向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ビジネス</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">プロダクトマネージャー向けAIおすすめ5選｜2026年最新</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          PMの仕事は「情報収集→意思決定→コミュニケーション」の循環。AIツールを導入すれば、これら全工程の時間を劇的に短縮でき、より本質的な意思決定に集中できます。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. PMがAIを使うべき理由</a></li>
            <li><a href="#research" className="text-primary hover:underline">2. ユーザーリサーチ・インタビュー</a></li>
            <li><a href="#prd" className="text-primary hover:underline">3. PRD・要件定義ドキュメント</a></li>
            <li><a href="#competitive" className="text-primary hover:underline">4. 競合分析・市場調査</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 活用の落とし穴</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> PMがAIを使うべき理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>プロダクトマネージャーの業務は、実は8割が「情報処理」です。ユーザーインタビューの文字起こし、競合プロダクトの調査、ステークホルダーへの報告、PRDやエピック作成。これらはすべてAIが得意とする領域で、丸一日かかっていた作業が数十分で済むようになります。</p>
            <p>浮いた時間をユーザーとの対話やプロトタイピングに回せるため、結果としてプロダクトの質が上がります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AIで時短できる業務例</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">-70%</div><div>インタビュー要約</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">-50%</div><div>PRD作成</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">-60%</div><div>競合分析</div></div>
            </div>
          </div>
        </section>

        <section id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> ユーザーリサーチ・インタビュー</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ユーザーインタビューは、録音→文字起こし→要約→インサイト抽出という工程がボトルネックでした。Claudeに書き起こしを貸すだけで、ペインポイント・未解決ニーズ・引用すべき発言を自動で抽出してくれます。</p>
            <p>さらに複数インタビューを横断して分析すれば、共通テーマを定量的に把握できるアフィニティ図もAIが作成してくれます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">インタビュー分析プロンプト</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは熟練UXリサーチャーです。以下の5件のユーザーインタビュー書き起こしを分析し、①共通ペイン ②未解決ニーズ ③優先度の高いインサイト の3カテゴリーに分類してください。各項目には代表的な引用も添えてください。</p>
            </div>
          </div>
        </section>

        <section id="prd" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> PRD・要件定義ドキュメント</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>PRD（Product Requirements Document）は、背景・ユーザーストーリー・成功指標・要件・非機能要件・リリース計画といった構成要素が決まっています。Claudeに「Amazon流のWorking Backwardsスタイルで」などの型を指定すれば、初稿が10分で出来上がります。</p>
            <p>人間はレビューと意思決定に集中し、AIは定型部分を処理するという分業が最適解です。</p>
          </div>
        </section>

        <section id="competitive" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> 競合分析・市場調査</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Perplexityのような検索特化AIを使えば、競合プロダクトのニュース・料金・機能変更を数分でまとめられます。ClaudeやChatGPTに「SWOT分析を作って」「ポジショニングマップを描いて」と頼むと、読める形式のレポートまで自動生成されます。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長文ドキュメントに最適</span>
                </div>
                <p className="text-sm text-muted">20万トークン超のコンテキストで、PRD・仕様書・インタビュー書き起こしをまとめて扱えます。構造化された出力が得意。</p>
              </Link>
            )}
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">汎用・対話型</span>
                </div>
                <p className="text-sm text-muted">カスタムGPTで自社用アシスタントを作成可能。図表生成やDALL-Eでのワイヤーフレーム作成にも対応。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">ドキュメント統合</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">社内Wiki連携</span>
              </div>
              <p className="text-sm text-muted">Notion内のドキュメント検索・要約・翻訳・ドラフト生成ができます。PMワークスペースとAIが直結する体験が強み。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🔎</span><div><h3 className="font-bold text-lg">Perplexity</h3><div className="text-xs text-muted">リサーチ特化</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">情報源付き検索</span>
              </div>
              <p className="text-sm text-muted">出典付きで検索結果を要約してくれるため、競合・市場調査に最適。最新情報へのアクセス性でChatGPTを凌ぎます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🧠</span><div><h3 className="font-bold text-lg">Gemini</h3><div className="text-xs text-muted">Google Workspace統合</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">ドライブ連携</span>
              </div>
              <p className="text-sm text-muted">Google Docs・Sheets・Slidesの中でそのままAI機能が使え、既存資料を直接編集・生成できます。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 活用の落とし穴</h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "意思決定はAIに丸投げせず、必ず人間が最終判断する" },
              { icon: "⚠️", text: "ユーザーの生データを無配慮にAIに渡さない" },
              { icon: "⚠️", text: "AIの出力は必ず原典で事実確認する" },
              { icon: "✅", text: "PM用のプロンプトテンプレートを整備しチーム展開" },
              { icon: "✅", text: "AIで浮いた時間をユーザー対話とプロトタイピングに回す" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">PMキャリアを加速するサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "TechAcademy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "PM関連コースあり", price: "月額制", badge: "おすすめ" },
              { name: "侍エンジニア塾", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE", highlight: "キャリア相談無料", price: "一括制" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-engineers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">エンジニア</div><div className="font-bold text-sm">エンジニア向けAI</div></Link>
            <Link href="/guide/ai-for-data-scientists" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">データ</div><div className="font-bold text-sm">データサイエンティスト向けAI</div></Link>
            <Link href="/guide/ai-prompt-templates" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル</div><div className="font-bold text-sm">プロンプトテンプレート集</div></Link>
            <Link href="/guide/ai-for-qa-testers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">QA</div><div className="font-bold text-sm">QA向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
