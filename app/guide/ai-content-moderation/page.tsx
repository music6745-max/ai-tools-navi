import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIコンテンツモデレーション完全ガイド【2026年版】UGC運営の安全対策",
  description:
    "ユーザー投稿（UGC）を扱うサービス運営者向けに、AIコンテンツモデレーションの仕組み・活用法・主要ツール・導入手順を徹底解説。スパム・違反投稿・不適切画像の自動検出を実現。",
  keywords: ["AI モデレーション", "コンテンツモデレーション", "UGC 監視 AI", "スパム検出", "AI 不適切検知"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-content-moderation`,
  },
};

export default function AIContentModerationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIコンテンツモデレーション完全ガイド【2026年版】UGC運営の安全対策",
    description: "AIコンテンツモデレーションの仕組みと主要ツールを徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
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
          <span className="text-foreground">AIコンテンツモデレーション</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">モデレーション</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIコンテンツモデレーション完全ガイド【2026年版】UGC運営の安全対策
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          コミュニティサイト、SNS、口コミサービス、ECレビュー、フォーラムなど、ユーザー投稿型サービスを安全に運営するためにAIコンテンツモデレーションは欠かせない技術になりました。仕組み・主要ツール・導入手順まで、運営者目線で徹底解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#what" className="text-primary hover:underline">1. AIコンテンツモデレーションとは</a></li>
            <li><a href="#need" className="text-primary hover:underline">2. なぜAIモデレーションが必要なのか</a></li>
            <li><a href="#how" className="text-primary hover:underline">3. AIモデレーションの仕組み</a></li>
            <li><a href="#types" className="text-primary hover:underline">4. 検出できるコンテンツの種類</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 主要AIモデレーションツール</a></li>
            <li><a href="#implement" className="text-primary hover:underline">6. 導入の進め方</a></li>
            <li><a href="#caution" className="text-primary hover:underline">7. 運用上の注意点</a></li>
          </ol>
        </div>

        <section id="what" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AIコンテンツモデレーションとは
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIコンテンツモデレーションとは、ユーザーが投稿するテキスト・画像・動画・音声を、AIが自動で解析し、ルール違反や不適切なコンテンツを検出・分類する技術のことです。スパム、誹謗中傷、差別表現、暴力的コンテンツ、性的画像、著作権侵害物、フェイクニュースなど、幅広い種類の問題コンテンツを高速かつ高精度で判別できます。</p>
            <p>従来は人間のモデレーターが目視で確認する作業が中心でしたが、サービスの規模拡大とともにこの方法は限界を迎えています。AIモデレーションを導入することで、24時間365日、毎秒数千件規模の投稿でも安定して監視できるようになります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AIモデレーションの3つの強み</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">毎秒</div>
                <div>数千件の同時処理</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">95%+</div>
                <div>高精度な自動分類</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24時間</div>
                <div>休まず稼働</div>
              </div>
            </div>
          </div>
        </section>

        <section id="need" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> なぜAIモデレーションが必要なのか
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>UGC（ユーザー生成コンテンツ）を扱うサービスは、不適切な投稿を放置するとブランドイメージの低下、ユーザー離れ、法的リスク、広告主からの離反などの深刻な問題に直面します。特に未成年者が利用するサービスでは、青少年保護の観点からも厳格なモデレーションが求められます。</p>
            <p>人間のモデレーターだけで対応しようとすると、人件費が膨大になるだけでなく、メンタルヘルス面でのリスクも問題になります。暴力的・性的コンテンツに繰り返し触れることは、モデレーター自身に大きなストレスを与えます。AIが一次フィルタリングを担当し、人間は判断が難しいケースにのみ集中するという役割分担が、健全な運用の鍵です。</p>
          </div>
        </section>

        <section id="how" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">3.</span> AIモデレーションの仕組み
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIモデレーションは、機械学習モデルが大量のラベル付きデータから「これは問題、これはOK」というパターンを学習することで実現します。テキストモデレーションには自然言語処理（NLP）、画像・動画には画像認識、音声には音声認識と、それぞれの分野の最新技術が組み合わされています。</p>
            <p>2024年以降は、ChatGPTやClaudeなどのLLM（大規模言語モデル）を活用したコンテキスト理解型のモデレーションも普及しています。単なるNGワードの検出ではなく、文脈を理解して「皮肉」「冗談」「教育的な引用」などを正しく判別できるようになっています。</p>
          </div>
        </section>

        <section id="types" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> 検出できるコンテンツの種類
          </h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">主な検出カテゴリ</h3>
            <div className="space-y-3 text-sm text-muted">
              {[
                { step: "1", title: "ヘイトスピーチ：", desc: "差別的・憎悪的な表現を自動検出" },
                { step: "2", title: "暴力的コンテンツ：", desc: "暴力描写・脅迫を画像・テキスト両面で検出" },
                { step: "3", title: "性的コンテンツ：", desc: "アダルト画像・動画・テキストを年齢制限基準で分類" },
                { step: "4", title: "スパム・詐欺：", desc: "怪しいURL・宣伝・フィッシングを検出" },
                { step: "5", title: "個人情報漏洩：", desc: "電話番号・住所・クレジットカード番号などを検出" },
                { step: "6", title: "著作権侵害：", desc: "既存作品のコピーや無断使用を画像認識で判別" },
                { step: "7", title: "誹謗中傷：", desc: "個人攻撃や名誉毀損的表現を検出" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-primary font-bold">{item.step}.</span>
                  <div><span className="font-medium text-foreground">{item.title}</span>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> 主要AIモデレーションツール
          </h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🛡️</span>
                  <div>
                    <h3 className="font-bold text-lg">OpenAI Moderation API</h3>
                    <div className="text-xs text-muted">無料で使えるテキスト判定</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">無料</span>
              </div>
              <p className="text-sm text-muted">OpenAIが提供する無料のテキストモデレーションAPI。ヘイト、性的、暴力など11カテゴリで判定。日本語にも対応しており、まず試すのに最適です。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">☁️</span>
                  <div>
                    <h3 className="font-bold text-lg">Google Cloud Vision / Perspective API</h3>
                    <div className="text-xs text-muted">画像とコメントの両方に対応</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">画像対応</span>
              </div>
              <p className="text-sm text-muted">Vision APIで画像の不適切判定、Perspective APIでコメントの毒性スコア判定が可能。Google Cloudの他サービスとも連携しやすいのが強みです。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🔵</span>
                  <div>
                    <h3 className="font-bold text-lg">Microsoft Azure Content Safety</h3>
                    <div className="text-xs text-muted">エンタープライズ向け</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">企業向け</span>
              </div>
              <p className="text-sm text-muted">テキスト・画像両対応。重大度4段階での詳細判定や、カスタムカテゴリの追加もでき、大規模サービスに向いています。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🦅</span>
                  <div>
                    <h3 className="font-bold text-lg">Hive Moderation</h3>
                    <div className="text-xs text-muted">マルチメディア対応の専門サービス</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full font-medium">専門サービス</span>
              </div>
              <p className="text-sm text-muted">画像・動画・音声・テキストすべてを統合的に判定できる専門サービス。デートアプリやゲーム配信プラットフォームでの採用実績が豊富です。</p>
            </div>
          </div>
        </section>

        <section id="implement" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">6.</span> 導入の進め方
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>まずは無料のOpenAI Moderation APIで小規模に試すのがおすすめです。投稿フォームのバックエンドで投稿内容をAPIに送り、判定結果を見て自動承認・自動拒否・人間レビュー行きの3段階に振り分けます。誤判定があった場合は人間が最終チェックする運用にすることで、リスクを最小化できます。</p>
            <p>規模が拡大したら、画像対応のGoogle CloudやAzureに移行し、必要に応じてHive Moderationのような専門サービスに切り替えていくと安心です。</p>
          </div>
        </section>

        <section id="caution" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">7.</span> 運用上の注意点
          </h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "AIだけで完結させず、必ず人間のチェック工程を残す" },
              { icon: "⚠️", text: "誤検出（false positive）への異議申し立て手段を用意する" },
              { icon: "✅", text: "コミュニティガイドラインを明確にユーザーに提示する" },
              { icon: "✅", text: "定期的に判定ログを分析し、AIモデルをチューニング" },
              { icon: "✅", text: "プライバシーポリシーでAI判定の利用を明示する" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI開発・データ分析を学べるスクール</h2>
          <ComparisonTableCTA
            services={[
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">安全なコミュニティ運営をAIで実現</h2>
          <p className="text-sm text-muted mb-6">無料のAPIから始めて、サービスの規模に合わせて段階的に拡張しましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-customer-service" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIカスタマーサービス
            </Link>
            <Link href="/guide/ai-chatbot-creation" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIチャットボット作成
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
