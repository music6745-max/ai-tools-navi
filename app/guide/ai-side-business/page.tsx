import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "副業AIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "本業で時間がない会社員必見。ブログ・デザイン・動画編集で月5万円を目指せるChatGPT・Claude・Canva・Midjourney等のAIツール7選を比較し、最短ロードマップを解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-side-business`,
  },
};

export default function AISideBusinessPage() {
  const businessTypes = [
    {
      icon: "📝",
      title: "AIブログ運営",
      description: "AIで記事を効率的に作成し、広告収益やアフィリエイトで稼ぐ。月1〜10万円が目安。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", use: "記事構成・本文作成・リライト" },
        { name: "Claude", slug: "claude", use: "長文記事の作成・校正・SEO最適化" },
        { name: "Canva AI", slug: "canva-ai", use: "アイキャッチ画像・バナー作成" },
      ],
      steps: [
        "ニッチなテーマを決める（例：格安SIM比較、ペット用品レビュー）",
        "WordPressまたはnoteでブログを開設",
        "AIで記事を効率的に作成（週2〜3記事が目安）",
        "ASP（A8.net等）に登録しアフィリエイトリンクを設置",
        "SNSで記事を拡散して集客",
      ],
      income: "月1〜10万円",
      difficulty: "初級",
    },
    {
      icon: "🎨",
      title: "AIデザイン・イラスト販売",
      description: "AI画像生成ツールでデザイン素材やイラストを作成し、ストックサイトやSNSで販売。",
      tools: [
        { name: "Midjourney", slug: "midjourney", use: "高品質なアート・イラスト生成" },
        { name: "Adobe Firefly", slug: "adobe-firefly", use: "商用利用OK素材の生成" },
        { name: "Canva AI", slug: "canva-ai", use: "テンプレート・デザイン素材作成" },
      ],
      steps: [
        "AI画像生成ツールの使い方を習得する",
        "販売テーマを決める（SNSテンプレート、アイコン等）",
        "高品質な素材を50〜100点作成",
        "BOOTH、ココナラ、SUZURIなどに出品",
        "SNSでポートフォリオを発信して集客",
      ],
      income: "月1〜5万円",
      difficulty: "初級",
    },
    {
      icon: "✍️",
      title: "AIライティング・コンテンツ作成代行",
      description: "企業や個人のコンテンツ作成をAIを活用して請け負う。SEO記事、LP、SNS投稿文など。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", use: "高速な文章生成・リライト" },
        { name: "Jasper", slug: "jasper", use: "マーケティングコピー作成" },
        { name: "Grammarly", slug: "grammarly", use: "英語コンテンツの品質チェック" },
      ],
      steps: [
        "ライティングスキルの基礎を学ぶ",
        "AIツールを使った効率的な記事作成フローを確立",
        "ポートフォリオを3〜5本作成",
        "クラウドソーシング（ランサーズ、クラウドワークス）で案件を獲得",
        "実績を積み、直接契約の顧客を増やす",
      ],
      income: "月3〜15万円",
      difficulty: "中級",
    },
    {
      icon: "🎬",
      title: "AI動画コンテンツ制作",
      description: "AI動画生成ツールでYouTubeショートやTikTok動画を作成。広告収益やスポンサー案件で収益化。",
      tools: [
        { name: "Runway", slug: "runway", use: "AI動画生成・編集" },
        { name: "HeyGen", slug: "heygen", use: "AIアバターによる解説動画作成" },
        { name: "ElevenLabs", slug: "elevenlabs", use: "AI音声ナレーション生成" },
      ],
      steps: [
        "動画のジャンル・テーマを決める",
        "AI動画生成ツールで短尺動画を作成",
        "YouTube ShortsやTikTokに投稿（毎日1〜2本）",
        "収益化条件を満たしたら広告収益を開始",
        "企業案件やアフィリエイトで収益を拡大",
      ],
      income: "月1〜20万円",
      difficulty: "中級",
    },
  ];

  const roadmap = [
    { month: "1ヶ月目", title: "準備・学習期間", tasks: ["副業の方向性を決める", "必要なAIツールの無料プランに登録", "基本的な使い方を習得する", "ポートフォリオや初期コンテンツを作成"] },
    { month: "2〜3ヶ月目", title: "実践・発信開始", tasks: ["コンテンツを定期的に作成・公開", "SNSアカウントを開設し発信開始", "クラウドソーシングで案件に応募", "収益化の仕組みを整える（広告、アフィリエイト等）"] },
    { month: "4〜6ヶ月目", title: "収益化・拡大", tasks: ["月1〜3万円の収益を目指す", "成功パターンを分析し再現性を高める", "作業を効率化してAIツールをフル活用", "単価アップや新しい収益源の開拓"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIツールで副業を始める方法｜月5万円を目指すロードマップ",
    description: "AIツールを活用した副業の始め方と具体的なロードマップを解説",
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
          <span className="text-foreground">AIで副業を始める</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">副業</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIツールで副業を始める方法｜月5万円を目指すロードマップ
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールの進化により、専門スキルがなくても副業で稼げる時代になりました。この記事では、AIを活用した4つの副業タイプと、月5万円の収入を目指す具体的なロードマップを紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. なぜAI副業が注目されているのか</a></li>
            <li><a href="#types" className="text-primary hover:underline">2. AIを活用した副業4タイプ</a></li>
            <li><a href="#roadmap" className="text-primary hover:underline">3. 月5万円を目指すロードマップ</a></li>
            <li><a href="#tips" className="text-primary hover:underline">4. 成功するためのポイント</a></li>
            <li><a href="#caution" className="text-primary hover:underline">5. 注意点・よくある失敗</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> なぜAI副業が注目されているのか
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>2026年現在、AIツールの急速な進化により、これまで専門家しかできなかった作業が誰でも短時間でできるようになっています。文章作成、画像生成、動画制作、データ分析など、AIが得意とする分野で副業を始めるハードルが大幅に下がりました。</p>
            <p>特に注目すべきは<strong>時間効率の高さ</strong>です。本業の合間に、AIを活用して効率的にコンテンツを生産し、収益を上げることが可能です。初期投資もほとんど不要で、多くのAIツールは無料プランから始められます。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-4 text-sm mt-4">
            <p className="font-bold mb-1">AI副業のメリット</p>
            <p className="text-muted">初期投資が少ない、時間の自由度が高い、スキルが身につく、スケーラブル（作業量に比例して収入が増えやすい）</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="types" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> AIを活用した副業4タイプ
          </h2>
          <p className="text-sm text-muted mb-6">それぞれの副業タイプの特徴、使えるAIツール、始め方のステップを解説します。</p>

          <div className="space-y-8">
            {businessTypes.map((biz, idx) => (
              <div key={idx} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{biz.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold">{biz.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-primary-light text-primary rounded-full">収入目安: {biz.income}</span>
                      <span className="text-xs px-2 py-0.5 bg-card-bg border border-card-border rounded-full">難易度: {biz.difficulty}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">{biz.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">使えるAIツール</p>
                  <div className="space-y-2">
                    {biz.tools.map((tool) => (
                      <div key={tool.slug} className="flex items-center justify-between text-sm">
                        <Link href={`/tools/${tool.slug}`} className="text-primary hover:underline font-medium">
                          {tool.name}
                        </Link>
                        <span className="text-xs text-muted">{tool.use}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold mb-2">始め方のステップ</p>
                  <ol className="space-y-1.5">
                    {biz.steps.map((step, i) => (
                      <li key={i} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-primary font-bold">{i + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="roadmap" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 月5万円を目指すロードマップ
          </h2>
          <div className="space-y-6">
            {roadmap.map((phase, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0">{phase.month.replace(/[^0-9〜]/g, "").slice(0, 3)}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{phase.month} - {phase.title}</h3>
                  <ul className="space-y-1">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">-</span> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-light rounded-xl p-4 text-sm mt-6">
            <p className="font-bold mb-1">焦らず継続が大切！</p>
            <p className="text-muted">副業で結果が出るまでには3〜6ヶ月かかるのが一般的です。毎日30分〜1時間の作業をコツコツ続けることが成功の鍵です。</p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> 成功するためのポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "AIの出力を必ず人間がチェック", desc: "AIが生成したコンテンツはそのまま使わず、必ず自分で確認・修正しましょう。品質が差別化のポイントです。" },
              { title: "1つの副業に集中する", desc: "あれもこれもと手を出すと中途半端に。まずは1つを軌道に乗せてから広げましょう。" },
              { title: "ニッチな分野を狙う", desc: "競合が多い分野より、ニッチな専門分野で差別化した方が早く収益化できます。" },
              { title: "SNSでの発信を怠らない", desc: "作ったコンテンツはSNSで積極的に発信。集客チャネルを育てることが長期的な収益につながります。" },
            ].map((tip, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                <p className="text-xs text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="caution" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> 注意点・よくある失敗
          </h2>
          <div className="space-y-3">
            {[
              { title: "AIコンテンツの丸投げは避ける", desc: "AIが生成した文章や画像をそのまま公開すると、品質が低く読者やクライアントの信頼を失います。必ず自分の視点や経験を加えましょう。" },
              { title: "著作権・利用規約を確認する", desc: "AIツールによって生成物の商用利用条件が異なります。特に画像生成ツールは利用規約をよく確認してください。" },
              { title: "確定申告を忘れない", desc: "副業収入が年間20万円を超えると確定申告が必要です。収支の記録は最初からつけておきましょう。" },
              { title: "本業に支障をきたさない", desc: "副業はあくまで「副」。本業のパフォーマンスを下げないよう、無理のないペースで取り組みましょう。" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Server Comparison Table CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">副業におすすめのレンタルサーバー</h2>
          <p className="text-sm text-muted mb-6">ブログ副業を始めるなら、まずはサーバーの契約から。どちらもWordPressの簡単セットアップに対応しています。</p>
          <ComparisonTableCTA
            services={[
              {
                name: "ConoHa WING",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT",
                highlight: "ブログ開設に最適",
                price: "月687円〜",
                badge: "おすすめ",
              },
              {
                name: "エックスサーバー",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1",
                highlight: "安定実績20年",
                price: "月990円〜",
              },
            ]}
          />
        </section>

        {/* Accounting Comparison Table CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">副業の確定申告におすすめの会計ソフト</h2>
          <p className="text-sm text-muted mb-6">副業収入が年間20万円を超えたら確定申告が必要です。早めに会計ソフトを導入しておくと安心です。</p>
          <ComparisonTableCTA
            services={[
              {
                name: "弥生シリーズ",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
                highlight: "確定率91.74%の安心実績",
                price: "無料〜",
                badge: "定番",
              },
              {
                name: "freee会計",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
                highlight: "スマホで確定申告",
                price: "月1,180円〜",
              },
            ]}
          />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">副業に使えるAIツールを探す</h2>
          <p className="text-sm text-muted mb-6">あなたの副業スタイルに合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              全AIツール一覧を見る
            </Link>
            <Link href="/guide/how-to-start-ai" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIツールの始め方ガイド
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
