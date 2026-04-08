import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "介護・高齢者ケアAIおすすめ5選【2026年最新】｜見守り・記録・コミュニケーション",
  description:
    "介護現場と家庭の高齢者ケアで活躍するAIツールを徹底比較。見守りカメラ・記録自動化・会話ロボット・服薬管理・音声アシスタントまで、在宅介護から施設運営まで役立つ最新AIを解説します。",
  keywords: ["介護AI", "高齢者ケア AI", "見守り AI", "介護記録 AI", "介護ロボット"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-elderly-care` },
};

export default function Page() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "介護・高齢者ケアAIおすすめ5選【2026年最新】",
    description: "介護現場と家庭の高齢者ケアで活躍するAIツール特集。",
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
      { "@type": "ListItem", position: 3, name: "介護・高齢者ケアAI", item: `${siteConfig.url}/guide/ai-for-elderly-care` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "介護AIは家庭でも使えますか？", acceptedAnswer: { "@type": "Answer", text: "はい。スマートスピーカーや見守りカメラ、服薬リマインダーなど家庭向けAIは月額数百円〜で導入できます。" } },
      { "@type": "Question", name: "介護記録AIのメリットは？", acceptedAnswer: { "@type": "Answer", text: "音声入力から介護記録を自動生成することで、スタッフの記録作業時間を約50%削減できると報告されています。" } },
      { "@type": "Question", name: "高齢者が使いこなせるか不安です", acceptedAnswer: { "@type": "Answer", text: "音声対話型AIは操作が不要で、話しかけるだけで使えます。家族が初期設定をサポートすれば導入ハードルは低いです。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">介護・高齢者ケアAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">介護・ケア</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">介護・高齢者ケアAIおすすめ5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          介護現場の人材不足と在宅介護の負担増に対し、AI技術は大きな助けになります。見守り・記録・会話・服薬管理・健康モニタリングまで、現場と家庭で役立つAIツールを分野別に解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜ介護AIが必要なのか</a></li>
            <li><a href="#monitor" className="text-primary hover:underline">2. 見守り・転倒検知AI</a></li>
            <li><a href="#record" className="text-primary hover:underline">3. 介護記録の自動化</a></li>
            <li><a href="#chat" className="text-primary hover:underline">4. 会話・コミュニケーションAI</a></li>
            <li><a href="#medicine" className="text-primary hover:underline">5. 服薬・健康管理AI</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 導入のコツと注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜ介護AIが必要なのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>2026年現在、日本の介護業界は慢性的な人材不足と高齢化により、1人あたりの介護負担が急増しています。AIは24時間の見守り、記録業務の自動化、高齢者のメンタルケアなどで人手不足を補完し、家族の介護負担も大きく軽減します。</p>
            <p>特に在宅介護では、独居高齢者の見守りや服薬管理、認知症予防のための会話支援にAIが有効。施設介護では記録業務の省力化で現場スタッフを入居者ケアに集中させられます。</p>
          </div>
        </section>

        <section id="monitor" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 見守り・転倒検知AI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIカメラやセンサーで高齢者の動作を分析し、転倒や長時間の不動を自動検知。家族や介護スタッフに通知します。プライバシーに配慮したシルエット検知技術を採用したサービスも登場しています。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">ライフリズムナビ+Dr.</span> — 施設向け見守りセンサー＋AI分析で深夜巡回を削減。</div>
            <div><span className="font-bold text-primary">Hitomeq ケアサポート</span> — 居室内の状態をAI解析しスマホ通知。</div>
            <div><span className="font-bold text-primary">みまもりCUBE</span> — 家庭向けAIカメラ、転倒・異常をリアルタイム検知。</div>
          </div>
        </section>

        <section id="record" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 介護記録の自動化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>音声入力で介護記録を自動生成するAIは、スタッフの記録時間を約50%削減。ChatGPTやClaudeを使った議事録要約も、申し送り業務の効率化に活用できます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">Rehab Cloud 記録</span> — 介護記録のテンプレート自動生成＋音声入力対応。</div>
            <div><span className="font-bold text-primary">ChatGPT / Claude</span> — 申し送り内容の要約や報告書作成を支援。</div>
          </div>
        </section>

        <section id="chat" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 会話・コミュニケーションAI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>高齢者の孤独感軽減と認知症予防に、会話AIが注目されています。音声対話型ロボットやスマートスピーカーで、日常会話・昔話・クイズなどを通じて脳を活性化できます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">LOVOT</span> — 家庭向け癒し系ロボット、AIが表情や動作で反応。</div>
            <div><span className="font-bold text-primary">Amazon Alexa / Google Home</span> — 音声操作で天気・ニュース・音楽・家族とのビデオ通話まで対応。</div>
            <div><span className="font-bold text-primary">ChatGPTの音声モード</span> — 話し相手として昔話や世間話に対応可能。</div>
          </div>
        </section>

        <section id="medicine" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 服薬・健康管理AI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>服薬忘れ防止のスマートピルケース、バイタル自動記録デバイス、AIによる異常検知アラートで、日々の健康管理を支援します。家族のスマホにも同期できるので遠距離介護にも有効です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">スマートお薬カレンダー</span> — 服薬時間に光と音で通知、スマホに服用記録。</div>
            <div><span className="font-bold text-primary">Apple Watch ヘルスケアAI</span> — 転倒検知・心拍異常・不整脈通知機能搭載。</div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 導入のコツと注意点</h2>
          <div className="space-y-3">
            {[
              "✅ 本人の同意を得てから導入：プライバシーや尊厳を守る",
              "✅ 家族と介護スタッフで情報を共有：見守り通知の受け手を設定",
              "✅ スマホ・Wi-Fi環境の整備：多くのAIがインターネット接続を前提",
              "⚠️ 完全に頼り切らない：AIはあくまで補助、人の温かさとの両立が必須",
              "⚠️ 個人情報管理：カメラ映像・健康データの取り扱いは利用規約を確認",
            ].map((t, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-lg p-3 text-sm">{t}</div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">介護関連の情報収集におすすめ</h2>
          <ComparisonTableCTA
            services={[
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "介護士の英語学習にも活用可", price: "月6,480円" },
              { name: "AQUES（アクエス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "シニア向けオンライン英会話", price: "月額制" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-seniors" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業種別</div>
              <div className="font-bold text-sm">シニア向けAI</div>
            </Link>
            <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業種別</div>
              <div className="font-bold text-sm">ヘルスケアAI</div>
            </Link>
            <Link href="/guide/ai-for-mental-health" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">その他</div>
              <div className="font-bold text-sm">メンタルヘルスAI</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
