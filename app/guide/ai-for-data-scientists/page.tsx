import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "データサイエンティスト向けAIおすすめ5選【2026年最新】｜分析・可視化・MLOps",
  description:
    "データサイエンティストのためのAIツールを徹底比較。ChatGPT・Claude・Gemini・GitHub Copilot・Hugging Faceを使った分析・特徴量エンジニアリング・モデル評価の実務活用法を解説。",
  keywords: ["データサイエンティスト AI", "データ分析 AI", "ML AI", "特徴量 AI", "MLOps AI", "Jupyter AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-data-scientists` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "データサイエンティスト向けAIおすすめ5選｜2026年最新",
    description: "データサイエンティストのためのAI活用ガイド。",
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
      { "@type": "ListItem", position: 3, name: "データサイエンティスト向けAI", item: `${siteConfig.url}/guide/ai-for-data-scientists` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "データサイエンティストがAIを使うメリットは？", acceptedAnswer: { "@type": "Answer", text: "EDA・特徴量設計・モデル選定のアイデア出しを大幅に高速化でき、コーディング時間を半分以下に削減できます。Claude CodeやCopilot経由でpandas・scikit-learnコードの自動生成も容易です。" } },
      { "@type": "Question", name: "機密データをAIに入力しても大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "基本は非推奨です。企業向けChatGPT Team/EnterpriseやClaude Teamなどログ非保持プランを使い、匿名化・サンプリング後に利用するのが安全です。" } },
      { "@type": "Question", name: "どのツールから始めるべき？", acceptedAnswer: { "@type": "Answer", text: "Jupyter上での分析支援ならChatGPT Code Interpreter、長文レポート生成ならClaude、コード補完ならCopilotやCursorが定番です。" } },
    ],
  };

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
          <span className="text-foreground">データサイエンティスト向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">エンジニア・分析</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          データサイエンティスト向けAIおすすめ5選｜2026年最新
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          データサイエンティストの業務は、EDA・特徴量設計・モデル実装・結果レポートまで多岐にわたります。AIツールを活用すれば、これら全工程を従来の半分以下の時間で回せるようになります。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. なぜデータサイエンスにAIが有効か</a></li>
            <li><a href="#eda" className="text-primary hover:underline">2. EDAと特徴量設計をAIで加速</a></li>
            <li><a href="#modeling" className="text-primary hover:underline">3. モデリングと評価の自動化</a></li>
            <li><a href="#mlops" className="text-primary hover:underline">4. MLOps・レポーティング</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 活用時の注意点</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> なぜデータサイエンスにAIが有効か</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>データサイエンスの実務の6割は「定型作業」と「コミュニケーション」です。pandas/NumPyの前処理、scikit-learnのパイプライン作成、結果を非エンジニアに説明する文章作成——これらはすべてAIで自動化しやすい領域です。</p>
            <p>特にClaude CodeやChatGPT Code Interpreterは、CSVを直接読み込んで統計量や可視化まで提案してくれるため、新しいデータセットを触り始める初動が劇的に速くなります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AIで自動化しやすい業務</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">EDA</div><div>統計量・欠損値可視化</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">特徴量</div><div>生成ロジック提案</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">レポート</div><div>ビジネス向け要約</div></div>
            </div>
          </div>
        </section>

        <section id="eda" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> EDAと特徴量設計をAIで加速</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>新しいデータセットに触るとき、まずClaudeにスキーマとサンプル行を渡すだけで、潜在的な外れ値・リーク変数・集計軸の候補を数十件提案してくれます。特徴量エンジニアリングでは、ドメイン知識とデータ特性を踏まえた非線形変換や相互作用項の候補出しにAIが役立ちます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">活用プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>以下のDataFrame.info()と先頭5行を渡します。教師あり二値分類タスク（目的変数=churn）を想定し、候補となる特徴量エンジニアリングを10案、理由付きで提案してください。</p>
            </div>
          </div>
        </section>

        <section id="modeling" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> モデリングと評価の自動化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPT Code Interpreterは、LightGBM・XGBoost・CatBoostなど主要ライブラリを直接実行できます。AIに「このデータでベースラインモデルを作り、5-Fold CVでAUCを計測して」と頼むと、前処理・学習・評価まで一連のコードを自動生成して実行してくれます。ハイパーパラメータ探索の方針もAIに相談すると、Optunaの探索空間設計までサポートしてくれます。</p>
          </div>
        </section>

        <section id="mlops" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> MLOps・レポーティング</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>MLflowのログ設定、Airflow DAGの生成、FastAPIでの推論エンドポイント作成など、MLOpsのボイラープレートコードはAIが得意とする領域です。またモデル評価結果をClaudeに渡せば、経営層向けのエグゼクティブサマリーに書き換えてくれます。数字をストーリーに変える工程こそ、AIの真価が発揮される場面です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">Code Interpreterで分析</span>
                </div>
                <p className="text-sm text-muted">CSVアップロードでそのまま分析・可視化が可能。ベースラインモデル構築まで対話で完結します。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長文レポートに強い</span>
                </div>
                <p className="text-sm text-muted">20万トークン超の長文コンテキストでモデル解釈・論文要約・ビジネスレポート生成に最適。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">Colab統合に強い</span>
                </div>
                <p className="text-sm text-muted">Google Colab・BigQueryとのネイティブ統合で、大規模データ分析をそのまま実行できます。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🤗</span>
                  <div><h3 className="font-bold text-lg">Hugging Face</h3><div className="text-xs text-muted">オープンモデルハブ</div></div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">オープンモデル</span>
              </div>
              <p className="text-sm text-muted">数万のオープンソースモデル・データセットを無料で利用可能。Spaces機能でデモも公開できます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🧑‍💻</span>
                  <div><h3 className="font-bold text-lg">GitHub Copilot</h3><div className="text-xs text-muted">コード補完</div></div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">IDE統合</span>
              </div>
              <p className="text-sm text-muted">VS Code・JupyterLab上でリアルタイムにpandas/scikit-learnコードを補完。前処理の定型作業を大幅短縮。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 活用時の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "機密データは企業向けプランで匿名化してから入力する" },
              { icon: "⚠️", text: "AIが提案する特徴量はドメイン知識で必ず妥当性を検証する" },
              { icon: "⚠️", text: "統計的検定やABテストの解釈はAI任せにせず人間がレビュー" },
              { icon: "✅", text: "定型的な前処理・可視化はAIに任せ、考察に時間を使う" },
              { icon: "✅", text: "プロンプトテンプレートをチームで共有し分析品質を均質化" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミング・AI学習サービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "TechAcademy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "現役エンジニアが指導", price: "月額制", badge: "おすすめ" },
              { name: "侍エンジニア塾", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE", highlight: "マンツーマン指導", price: "一括制" },
              { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "転職保証付きコース", price: "一括制" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">分析AIを試してみよう</h2>
          <p className="text-sm text-muted mb-6">ChatGPT・ClaudeはCSVをアップするだけで分析支援が始められます</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTの詳細</Link>
            <Link href="/tools/claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">Claudeの詳細</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-engineers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">エンジニア</div><div className="font-bold text-sm">エンジニア向けAI</div>
            </Link>
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">エンジニア</div><div className="font-bold text-sm">AIコーディング支援</div>
            </Link>
            <Link href="/guide/ai-data-analysis" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIデータ分析</div>
            </Link>
            <Link href="/guide/ai-prompt-templates" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">スキル</div><div className="font-bold text-sm">プロンプトテンプレート</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
