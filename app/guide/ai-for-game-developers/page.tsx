import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "ゲーム開発者向けAIツールおすすめ5選【2026年最新】生成AI活用ガイド",
  description:
    "ChatGPT・Claude・Midjourney・Suno・Scenarioなど、ゲーム開発に役立つAIツール5選を徹底比較。プログラミング・グラフィック・サウンド・シナリオ制作まで活用法を解説します。",
  keywords: ["ゲーム開発 AI", "AI ゲーム制作", "ChatGPT ゲーム", "Midjourney ゲーム素材", "Unity AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-game-developers` },
};

export default function AIForGameDevelopersPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ゲーム開発者向けAIツール完全ガイド｜2026年おすすめ5選",
    description: "ゲーム開発の各工程で活用できるAIツールを徹底解説。",
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
      { "@type": "ListItem", position: 3, name: "ゲーム開発者向けAI", item: `${siteConfig.url}/guide/ai-for-game-developers` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "個人ゲーム開発者でもAIツールは活用できますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。ChatGPTやClaudeでスクリプト作成、Midjourneyで2D素材、Sunoで音楽生成など、月数千円のサブスクで個人開発の生産性を10倍以上に高められます。" },
      },
      {
        "@type": "Question",
        name: "AI生成素材を商用ゲームに使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "ツールごとに利用規約が異なります。Midjourney有料プラン・Adobe Firefly・Scenarioなどは商用利用OKですが、必ず各ツールの最新規約を確認してください。" },
      },
      {
        "@type": "Question",
        name: "Unity・Unreal Engineと連携できるAIはありますか？",
        acceptedAnswer: { "@type": "Answer", text: "ChatGPT・Claudeは両エンジンのスクリプト生成・デバッグに対応。Scenario AIはUnity向けアセット生成プラグインも提供しています。" },
      },
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
          <span className="text-foreground">ゲーム開発者向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">業種別</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          ゲーム開発者向けAIツール完全ガイド｜2026年おすすめ5選
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールの登場により、個人ゲーム開発者でも大手スタジオ並みのクオリティを実現できる時代になりました。プログラミング・グラフィック・サウンド・シナリオまで、ゲーム制作の全工程で活用できる主要AIツール5選と、開発フロー別の具体的な使い方を徹底解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">なぜゲーム開発にAIが革命を起こしているのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>従来のゲーム開発では、プログラマー・グラフィッカー・サウンドデザイナー・シナリオライターと専門スタッフが必要で、個人開発には大きな壁がありました。AIツールを活用すれば、1人でもこれらすべてのタスクをこなせます。</p>
            <p>例えばChatGPTやClaudeはUnity C#やUnreal Engineのブループリント解説を瞬時に行い、Midjourneyはキャラクター・背景・UIアイコンを高品質で生成。Sunoは数分でゲーム用BGMを作成し、Scenarioはゲーム特化の2Dアセット生成に最適化されています。これらを組み合わせれば、数ヶ月かかっていたプロトタイプ開発が数週間に短縮できます。</p>
            <p>2025年のSteam Indieゲーム調査でも、AI活用したインディー開発者の作品リリース数は前年比2.3倍に増加。AIをうまく取り入れた個人開発者が次々とヒット作を生み出しています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ゲーム開発工程別のAI活用法</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">1. 企画・シナリオ</h3>
              <p className="text-sm text-muted">ChatGPT・Claudeでゲームコンセプト、世界観、キャラクター設定、ストーリーラインを生成。プロンプトを工夫すれば、起承転結のあるシナリオを数時間で完成させられます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">2. プログラミング</h3>
              <p className="text-sm text-muted">Unity C#・Unreal Blueprint・Godot GDScriptをChatGPTやClaudeで生成。バグの原因究明やパフォーマンス最適化にも活用でき、開発効率が大幅向上します。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">3. グラフィック・アセット</h3>
              <p className="text-sm text-muted">Midjourney・Stable Diffusion・Scenarioでキャラクター原画・背景・UIアイコン・テクスチャを生成。Scenarioはゲーム特化型でスタイル統一が容易です。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">4. サウンド・音楽</h3>
              <p className="text-sm text-muted">Suno・Udio・ElevenLabsでBGM・効果音・ボイスを生成。著作権フリーのゲーム音楽を数分で量産できるため、サウンド予算を大幅削減できます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">5. テスト・QA</h3>
              <p className="text-sm text-muted">ChatGPTにテストケースを生成させたり、バグログを解析させて優先順位付けしたりできます。リグレッションテストの効率化にも有効です。</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">ゲーム開発におすすめのAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">💬</span>
                <div>
                  <h3 className="font-bold text-lg">ChatGPT (GPT-4o / o1)</h3>
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">プログラミング・企画</span>
                </div>
              </div>
              <p className="text-sm text-muted">Unity C#・UE5 Blueprint・Godotなど主要エンジンのコード生成・デバッグに対応。シナリオ作成・キャラ設定にも強く、ゲーム開発の万能アシスタントです。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🤖</span>
                <div>
                  <h3 className="font-bold text-lg">Claude (Sonnet / Opus)</h3>
                  <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">長文コード・解説</span>
                </div>
              </div>
              <p className="text-sm text-muted">大量のコードを一度に扱える長文対応が魅力。複雑なゲームシステムの設計提案や、既存コードのリファクタリングに優れています。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎨</span>
                <div>
                  <h3 className="font-bold text-lg">Midjourney v6</h3>
                  <span className="text-xs px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">グラフィック</span>
                </div>
              </div>
              <p className="text-sm text-muted">業界トップクラスの画像クオリティでキャラクター原画・背景・UIアセットを生成。コンセプトアートの初期段階で大活躍します。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎮</span>
                <div>
                  <h3 className="font-bold text-lg">Scenario AI</h3>
                  <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">ゲームアセット特化</span>
                </div>
              </div>
              <p className="text-sm text-muted">ゲーム特化型の画像生成AI。スタイル統一されたキャラ・アイテム・タイルセットを量産でき、Unityプラグインも提供しています。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎵</span>
                <div>
                  <h3 className="font-bold text-lg">Suno AI</h3>
                  <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">BGM生成</span>
                </div>
              </div>
              <p className="text-sm text-muted">テキストプロンプトから本格的なゲーム用BGM・効果音を数分で生成。商用利用可能な有料プランあり。</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AI活用時の注意点</h2>
          <div className="space-y-3">
            {[
              "✅ 各AIツールの商用利用規約を必ず確認する(Midjourney有料プラン・Scenario・Sunoなどは商用OK)",
              "✅ AI生成物の品質チェックを必ず人間が行う(完璧ではない)",
              "✅ ゲームのコアアイデア・世界観は自分で練る(AIはあくまでアシスタント)",
              "⚠️ 著作権侵害リスク：実在キャラ・既存ブランドの模倣プロンプトは避ける",
              "⚠️ AI生成物の開示義務：Steamなど一部プラットフォームではAI使用の申告が必要",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミング学習でゲーム開発スキルを伸ばす</h2>
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
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">クリエイティブ</div>
              <div className="font-bold text-sm">AIコーディング支援</div>
            </Link>
            <Link href="/guide/ai-3d-modeling" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">画像・動画</div>
              <div className="font-bold text-sm">AI 3Dモデリング</div>
            </Link>
            <Link href="/guide/ai-music-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">音声・音楽</div>
              <div className="font-bold text-sm">AI音楽生成</div>
            </Link>
            <Link href="/guide/ai-character-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">画像・動画</div>
              <div className="font-bold text-sm">AIキャラ生成</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
