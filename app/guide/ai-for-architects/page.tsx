import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "建築家・設計者向けAIおすすめ5選【2026年最新】設計・パース・提案資料を効率化",
  description:
    "建築設計・意匠・構造・施工管理に活用できるAIツールを徹底解説。ChatGPT・Claude・Midjourney・Stable Diffusion・Lookxで設計業務を劇的に効率化する方法を紹介。",
  keywords: ["建築 AI", "設計 AI", "建築家 AI", "Midjourney 建築", "AI パース"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-architects` },
};

export default function AIForArchitectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "建築家・設計者向けAI活用ガイド｜2026年おすすめツール5選",
    description: "建築設計・パース・提案資料作成をAIで効率化する方法を解説。",
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
      { "@type": "ListItem", position: 3, name: "建築家向けAI", item: `${siteConfig.url}/guide/ai-for-architects` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIで建築パースを作成できますか？", acceptedAnswer: { "@type": "Answer", text: "はい。MidjourneyやStable Diffusion、Lookxなどを活用すれば、テキストやスケッチから数分で高品質な外観パース・内観パースを生成できます。クライアント提案の初期段階で特に有効です。" } },
      { "@type": "Question", name: "建築確認申請書類にAIは使えますか？", acceptedAnswer: { "@type": "Answer", text: "最終的な申請書類は建築士の責任下で作成する必要がありますが、下書きや条文チェック、類似事例の調査、説明文の作成にはChatGPTやClaudeが強力なサポートになります。" } },
      { "@type": "Question", name: "構造計算をAIに任せても大丈夫？", acceptedAnswer: { "@type": "Answer", text: "構造計算の最終判断は必ず専門ソフトと建築士の検証が必要です。AIはコンセプト段階の概算や、計算結果のセカンドチェック、説明文作成に活用するのが適切です。" } },
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
          <span className="text-foreground">建築家向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">建築・設計</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          建築家・設計者向けAIおすすめ5選｜設計・パース・提案資料を劇的に効率化
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          建築家・設計者の業務は、意匠設計・構造検討・施工管理・クライアント対応と多岐にわたります。AIツールを活用すれば、パース作成の時間を1/10に短縮したり、条文チェックを数秒で済ませたりと、クリエイティブな作業に集中できる環境が整います。2026年現在の建築業界で使われているおすすめ5ツールを解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜ建築業務にAIが有効なのか</a></li>
            <li><a href="#perspective" className="text-primary hover:underline">2. AIでパース・外観イメージを生成</a></li>
            <li><a href="#docs" className="text-primary hover:underline">3. 提案資料・仕様書をAIで作成</a></li>
            <li><a href="#research" className="text-primary hover:underline">4. 法規・条文チェックにAIを活用</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 建築家向けおすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 活用の注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜ建築業務にAIが有効なのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>建築設計の工程は、コンセプト立案→基本設計→実施設計→監理と長期にわたります。AIは特にコンセプト段階のアイデア出し、プレゼン資料作成、条文・法規のリサーチで威力を発揮します。手書きスケッチをMidjourneyやStable Diffusionに入力すれば、数分でフォトリアルな外観パースが完成。従来は3D CGソフトで数時間〜数日かかっていた作業が劇的に効率化されます。</p>
            <p>また、ChatGPTやClaudeに建築基準法・消防法・条例の該当部分を読み込ませれば、物件別のコンプライアンスチェックを数秒で完了できます。若手設計者の教育コスト削減にも寄与します。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">建築AI活用の3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">時短</div><div>パース作成1/10</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">網羅</div><div>法規チェック自動化</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">提案力</div><div>ビジュアル提案強化</div></div>
            </div>
          </div>
        </section>

        <section id="perspective" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIでパース・外観イメージを生成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Midjourneyはフォトリアル系の外観・内観パース生成に最適です。「modern japanese house, wooden facade, large windows, minimalist, evening lighting」のように英語プロンプトで指示すると、コンセプトイメージに近い画像を短時間で複数生成できます。Stable Diffusion（ControlNet併用）なら、手書きスケッチや平面図から立体パースへの変換も可能。Lookxは建築特化のAIで、SketchUpやRhinoのモデルをそのままインプットできます。</p>
          </div>
        </section>

        <section id="docs" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 提案資料・仕様書をAIで作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>クライアントへの提案資料はChatGPTやClaudeにコンセプトと要件を伝えれば、構成案・見出し・説明文のドラフトを数分で作成してくれます。仕様書も過去の類似案件をテンプレートに与えれば、物件に合わせた内容にカスタマイズ可能。Claudeは特に長文の読解と丁寧な解説が得意で、詳細仕様書の作成や条文解釈に強みがあります。</p>
          </div>
        </section>

        <section id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 法規・条文チェックにAIを活用</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>建築基準法・都市計画法・消防法・バリアフリー法など、建築関連の法規は膨大です。PDFや条文をAIにアップロードし「この敷地にこの用途で建築する場合の注意点は？」と質問すれば、該当条項を数秒で抽出してくれます。地域条例のチェックやヒアリング項目の作成にも有効。ただし最終確認は必ず人間の建築士が行うことが必須です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> 建築家向けおすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">💬</span><div><h3 className="font-bold text-lg">ChatGPT</h3><div className="text-xs text-muted">総合型AI・提案書作成に最強</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">汎用最強</span>
              </div>
              <p className="text-sm text-muted">提案資料の構成、仕様書の下書き、コンセプト文の作成に最適。画像認識で既存物件の写真から類似デザインの提案も可能です。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🧠</span><div><h3 className="font-bold text-lg">Claude</h3><div className="text-xs text-muted">長文読解と条文解析が強み</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">法規チェック</span>
              </div>
              <p className="text-sm text-muted">建築基準法や条例のPDFを丸ごと読み込ませて、物件別の該当条項を抽出。長文の仕様書作成や条文解釈にも強みがあります。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🎨</span><div><h3 className="font-bold text-lg">Midjourney</h3><div className="text-xs text-muted">フォトリアルパース生成</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">パース</span>
              </div>
              <p className="text-sm text-muted">英語プロンプトでコンセプトを伝えるだけで、フォトリアルな外観・内観イメージを短時間で生成。クライアント提案の初期段階で特に有効。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🖼️</span><div><h3 className="font-bold text-lg">Stable Diffusion</h3><div className="text-xs text-muted">スケッチから立体化</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">カスタム可</span>
              </div>
              <p className="text-sm text-muted">ControlNetと組み合わせれば、手書きスケッチや平面図からフォトリアルなパースへ変換可能。オープンソースで自社学習モデルも作れます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🏛️</span><div><h3 className="font-bold text-lg">Lookx AI</h3><div className="text-xs text-muted">建築特化AI</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">建築特化</span>
              </div>
              <p className="text-sm text-muted">SketchUp・Rhinoなどの3Dモデルを直接インプット可能。建築設計向けに最適化されたスタイル変換で、プロのパース品質を実現します。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 活用の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "クライアント情報のアップロードは社内ポリシーに従う（有償プランは学習オフ設定を確認）" },
              { icon: "✅", text: "法規チェックの最終判断は必ず建築士が行う" },
              { icon: "✅", text: "生成パースはあくまで初期提案であり、実施設計段階では実測・実検討が必須" },
              { icon: "⚠️", text: "構造計算・耐震判定はAIに任せず専門ソフトで検証" },
              { icon: "⚠️", text: "著作権・肖像権に注意（特定の実在建築物の模倣はトラブルの元）" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">建築業務の学習・独立に役立つサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "設計事務所サイト・ポートフォリオ公開に最適", price: "月687円〜", badge: "おすすめ" },
              { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "大規模ポートフォリオにも対応・高信頼", price: "月990円〜", badge: "定番" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "独立した建築家の経理・確定申告に", price: "月1,180円〜" },
              { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "フリーランス設計者の確定申告に", price: "年額制" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-designers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">デザイン</div>
              <div className="font-bold text-sm">デザイナー向けAI</div>
            </Link>
            <Link href="/guide/ai-interior-design" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">インテリア</div>
              <div className="font-bold text-sm">AIインテリアデザイン</div>
            </Link>
            <Link href="/guide/ai-image-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">画像生成</div>
              <div className="font-bold text-sm">AI画像生成</div>
            </Link>
            <Link href="/guide/ai-3d-modeling" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">3D</div>
              <div className="font-bold text-sm">AI 3Dモデリング</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
