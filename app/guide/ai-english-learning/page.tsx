import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI英語学習おすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "英会話・添削・TOEIC対策に時間が取れない人必見。ChatGPT・Claude・Gemini・ElevenLabs・GrammarlyのAIツール5選を徹底比較し、目的別の選び方と活用法を解説します。",
  keywords: ["AI英語学習", "ChatGPT 英語", "AI英会話", "英語 勉強 AI", "TOEIC AI", "英作文 添削 AI"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-english-learning`,
  },
};

export default function AIEnglishLearningPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIで英語学習を効率化する方法｜2026年おすすめツール5選",
    description: "AIツールを使った英語学習法を徹底解説。英会話練習からTOEIC対策まで。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI英語学習", item: `${siteConfig.url}/guide/ai-english-learning` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI英語学習は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI英語学習の選び方は？",
        acceptedAnswer: { "@type": "Answer", text: "用途・予算・日本語対応・サポート体制を基準に選ぶのがおすすめです。本記事内で各ツールを比較しています。" },
      },
      {
        "@type": "Question",
        name: "初心者でも使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。多くのツールは登録してすぐに日本語で使えます。専門知識は不要です。" },
      },
    ],
  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIで英語学習</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">英語学習</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIで英語学習を効率化する方法｜2026年おすすめツール5選
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールの進化により、英語学習の方法が大きく変わりました。24時間いつでも英会話の練習ができ、ネイティブレベルの添削をすぐに受けられるAIツールの活用法を解説します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. なぜAIで英語学習が効率的なのか</a></li>
            <li><a href="#conversation" className="text-primary hover:underline">2. AIで英会話練習をする方法</a></li>
            <li><a href="#writing" className="text-primary hover:underline">3. 英作文の添削をAIにお願いする</a></li>
            <li><a href="#toeic" className="text-primary hover:underline">4. TOEIC・英検対策にAIを活用</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 英語学習におすすめのAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. AI英語学習の注意点とコツ</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> なぜAIで英語学習が効率的なのか
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>従来の英語学習では、英会話教室に通ったり、添削サービスに申し込んだりする必要がありました。AIツールを使えば、これらが無料または低コストで、いつでもどこでも利用できます。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AI英語学習の3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24時間</div>
                <div>いつでも練習可能</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">即時</div>
                <div>フィードバック</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">自分専用</div>
                <div>レベルに合わせた学習</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="conversation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> AIで英会話練習をする方法
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTやClaudeに英会話の練習相手になってもらうことで、気軽に英会話練習ができます。シーン設定をすれば、旅行英語、ビジネス英語など目的に合った練習が可能です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">おすすめプロンプト例</h3>
            <div className="space-y-4 text-xs">
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">日常英会話</div>
                <p className="text-muted font-mono">あなたは英語ネイティブの友人です。カジュアルな英語で会話してください。私が間違えたら自然に正しい表現を教えてください。</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">ビジネス英語</div>
                <p className="text-muted font-mono">あなたはビジネス英語の講師です。ミーティングでのプレゼン練習をしたいです。フォーマルな表現を使って会話してください。</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">旅行英語</div>
                <p className="text-muted font-mono">あなたはホテルの受付です。チェックインのシーンを英語でロールプレイしましょう。初心者向けに簡単な表現を使ってください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="writing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">3.</span> 英作文の添削をAIにお願いする
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIに英文を送ると、文法ミスの修正だけでなく、より自然な表現への書き換え提案も受けられます。理由の説明付きなので、なぜその表現が良いのかも理解できます。</p>
            <p>特にClaudeは丁寧な解説が得意で、文法の理由を初心者にも分かりやすく説明してくれます。</p>
          </div>

          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">添削プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>以下の英文を添削してください。文法の修正だけでなく、より自然な表現があれば提案してください。各修正について理由も教えてください。</p>
              <p className="mt-2">[ここに英文を貼り付け]</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="toeic" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> TOEIC・英検対策にAIを活用
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIにTOEICのPart別問題を出題してもらったり、英検のライティング問題を添削してもらうことが可能です。自分のレベルに合わせた問題が無限に生成できます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AI活用テスト対策</h3>
            <div className="space-y-3 text-sm text-muted">
              {[
                { step: "1", title: "単語学習：", desc: "AIに単語リストと例文を作成してもらい、文脈で覚える" },
                { step: "2", title: "リーディング：", desc: "AIに指定レベルの長文問題を作成してもらう" },
                { step: "3", title: "ライティング：", desc: "英作文をAIに添削してもらい、模範解答と比較" },
                { step: "4", title: "弱点分析：", desc: "間違えた問題をAIに分析してもらい重点学習" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-primary font-bold">{item.step}.</span>
                  <div><span className="font-medium text-foreground">{item.title}</span>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Tools */}
        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> 英語学習におすすめのAIツール5選
          </h2>

          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{chatgpt.name}</h3>
                      <div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">英会話練習に最適</span>
                </div>
                <p className="text-sm text-muted">音声対話機能（Advanced Voice Mode）により、実際の英会話に近い練習が可能。発音のフィードバックも受けられます。</p>
              </Link>
            )}

            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{claude.name}</h3>
                      <div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">添削・文法解説に最適</span>
                </div>
                <p className="text-sm text-muted">丁寧で分かりやすい解説が特徴。英作文の添削や文法解説に優れており、学習者に寄り添った指導を受けられます。</p>
              </Link>
            )}

            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{gemini.name}</h3>
                      <div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">最新教材活用に最適</span>
                </div>
                <p className="text-sm text-muted">Google検索と連携し最新の英語教材やニュースを活用した学習が可能。YouTube動画の英語字幕分析もできます。</p>
              </Link>
            )}

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🗣️</span>
                  <div>
                    <h3 className="font-bold text-lg">ElevenLabs</h3>
                    <div className="text-xs text-muted">AI音声合成サービス</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">リスニング教材に最適</span>
              </div>
              <p className="text-sm text-muted">ネイティブのような自然な英語音声を生成。リスニング練習用の音声教材を自分で作成できます。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📝</span>
                  <div>
                    <h3 className="font-bold text-lg">Grammarly</h3>
                    <div className="text-xs text-muted">AI英文チェッカー</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">ライティングに最適</span>
              </div>
              <p className="text-sm text-muted">リアルタイムで英文の文法・スペルミスをチェック。メールやレポートの英文校正に最適です。</p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">6.</span> AI英語学習の注意点とコツ
          </h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "毎日短時間でも続ける：1日15分のAI英会話でも、毎日続ければ大きな効果があります" },
              { icon: "✅", text: "目標を明確にする：TOEIC700点、海外旅行で困らないレベルなど具体的な目標を設定" },
              { icon: "✅", text: "学んだ表現をメモする：AIとの会話で学んだ新しい表現は必ずメモして復習" },
              { icon: "⚠️", text: "AIだけに頼らない：実際の人との会話やリスニング教材と組み合わせるのが効果的" },
              { icon: "⚠️", text: "出力を丸暗記しない：AIの回答を理解し、自分の言葉で使えるようにする" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">おすすめオンライン英会話に申し込む</h2>
          <ComparisonTableCTA
            services={[
              {
                name: "ネイティブキャンプ",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM",
                highlight: "レッスン受け放題・確定率84%",
                price: "月6,480円",
                badge: "おすすめ",
              },
              {
                name: "NOVA ライブステーション",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE",
                highlight: "LIVE配信で学ぶオンライン英会話",
                price: "月額980円〜",
              },
              {
                name: "QQ English",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM",
                highlight: "プロ教師によるカランメソッド",
                price: "月2,980円〜",
              },
              {
                name: "ベストティーチャー",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+7QNN6+2ZIK+5YJRM",
                highlight: "Writing×Speakingの独自メソッド",
                price: "月12,000円〜",
              },
              {
                name: "LanCul（ランカル）",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+5YCTU+4FL0+HV7V6",
                highlight: "月額1,100円から話し放題",
                price: "月1,100円〜",
                badge: "最安値",
              },
              {
                name: "AQUES（アクエス）",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM",
                highlight: "日本人×外国人のハイブリッド",
                price: "月額制",
              },
            ]}
          />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AIで英語学習を始めよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料で使えるAIツールで、英会話練習や英作文添削を試してみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              ChatGPTの詳細を見る
            </Link>
            <Link href="/tools/claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              Claudeの詳細を見る
            </Link>
          </div>
        </section>

        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIチャットツールを比較する</h2>
          <p className="text-sm text-muted mb-6">ChatGPT、Claude、Geminiの詳細比較を見て最適なツールを選ぼう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表を見る
            </Link>
            <Link href="/guide/chatgpt-vs-claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              ChatGPT vs Claude 詳細比較
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-english-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英語ツール</div>
              </Link>
              <Link href="/guide/ai-english-proofreading" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英文校正</div>
              </Link>
              <Link href="/guide/ai-programming-school" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">プログラミングスクール×AI</div>
              </Link>
              <Link href="/guide/ai-tools-for-students" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">学生向けAI</div>
              </Link>
              <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AIコーディング支援</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
