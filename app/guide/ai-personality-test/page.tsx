import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI性格診断・心理テストツールおすすめ5選【2026年最新】",
  description:
    "AIを使った性格診断・心理テスト・適職診断ツールを徹底比較。MBTI・ビッグファイブ・ストレングスファインダー型のAIテストから、ChatGPTで自作する診断プロンプトまで解説します。",
  keywords: ["AI性格診断", "AI心理テスト", "MBTI AI", "適職診断 AI", "ChatGPT 性格診断"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-personality-test` },
};

export default function Page() {
  const articleLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "AI性格診断・心理テストツールおすすめ5選【2026年最新】",
    description: "AIを活用した性格診断・心理テストの完全ガイド。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08", dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI性格診断", item: `${siteConfig.url}/guide/ai-personality-test` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AI性格診断は信頼できる？", acceptedAnswer: { "@type": "Answer", text: "エンタメ用途としては楽しめますが、科学的な信頼性は診断の設計次第です。MBTIやビッグファイブに基づく正統なテストを選ぶのがおすすめです。" } },
      { "@type": "Question", name: "ChatGPTで性格診断できる？", acceptedAnswer: { "@type": "Answer", text: "はい。「ビッグファイブに基づいて10問の質問をして」などのプロンプトで、簡易的な診断と解説を受けられます。" } },
      { "@type": "Question", name: "適職診断にも使える？", acceptedAnswer: { "@type": "Answer", text: "性格特性と興味・スキルを組み合わせて分析すれば、ChatGPTなどで簡易的な適職診断が可能です。" } },
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
          <span className="text-foreground">AI性格診断</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">その他</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI性格診断・心理テストツールおすすめ5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          自己理解やキャリア選択に役立つ性格診断・心理テストをAIで受けられる時代。MBTI・ビッグファイブ・ストレングスファインダー型診断から、ChatGPTで自作する診断プロンプトまで活用法を紹介します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. AI性格診断で何がわかる？</a></li>
            <li><a href="#types" className="text-primary hover:underline">2. 代表的な性格診断の種類</a></li>
            <li><a href="#chatgpt" className="text-primary hover:underline">3. ChatGPTで性格診断を作る方法</a></li>
            <li><a href="#tools" className="text-primary hover:underline">4. おすすめ診断ツール5選</a></li>
            <li><a href="#career" className="text-primary hover:underline">5. 適職・キャリア診断への活用</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 使う上での注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AI性格診断で何がわかる？</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AI性格診断では、質問への回答をもとに自分の性格傾向・強み・弱み・ストレス要因・向いている仕事などを分析できます。対話型のAIなら診断結果を自然言語で解説してくれるので、従来の短文フィードバックよりも深い自己理解につながります。</p>
          </div>
        </section>

        <section id="types" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 代表的な性格診断の種類</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted space-y-3">
            <div><span className="font-bold text-primary">MBTI（16タイプ）</span> — 内向/外向、感覚/直観、思考/感情、判断/知覚の4軸で16タイプに分類。</div>
            <div><span className="font-bold text-primary">ビッグファイブ（5因子）</span> — 開放性・誠実性・外向性・協調性・神経症的傾向の5軸。心理学的エビデンスが豊富。</div>
            <div><span className="font-bold text-primary">ストレングスファインダー</span> — 34の才能資質の中から強みトップ5を抽出するGallup社のテスト。</div>
            <div><span className="font-bold text-primary">エニアグラム</span> — 9タイプに分ける古典的な性格類型論。</div>
          </div>
        </section>

        <section id="chatgpt" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> ChatGPTで性格診断を作る方法</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTに理論を指定して質問を生成してもらえば、オリジナル診断が作れます。以下のプロンプトを試してみましょう。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>「ビッグファイブ理論に基づいた簡易性格診断をしてください。5因子それぞれについて2問ずつ、合計10問の質問を1問ずつ出題してください。私は5段階で回答します。全問終わったら各因子のスコアとタイプ解説、おすすめのキャリア方向性をまとめてください。」</p>
            </div>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> おすすめ診断ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "ChatGPT", badge: "自作可", desc: "汎用AI。プロンプト次第で多様な性格診断を自作できる万能型。" },
              { name: "Claude", badge: "解説重視", desc: "丁寧で深い解説が特徴。診断結果を自己分析に落とし込むのが得意。" },
              { name: "16Personalities", badge: "MBTI", desc: "世界最大級の無料MBTI診断サイト。日本語対応あり。" },
              { name: "Gallup CliftonStrengths", badge: "強み発見", desc: "有料だが科学的信頼性が高い。ビジネスでも活用される診断。" },
              { name: "Big Five Personality Test", badge: "科学的", desc: "ビッグファイブ理論に基づく無料診断。学術的な信頼性が高い。" },
            ].map((t) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="career" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 適職・キャリア診断への活用</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>診断結果をAIに伝え「この性格特性に合う職種を10個提案して」と聞けば、キャリア選択の参考にできます。副業選びや転職先の検討にも応用可能です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 text-xs text-muted font-mono">
            <p>プロンプト例：「私はビッグファイブで外向性高・協調性中・開放性高・誠実性高・神経症的傾向低です。リモートワーク可能な職種を10個、向いている理由と必要スキルとともに教えてください。」</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 使う上での注意点</h2>
          <div className="space-y-3">
            {[
              "✅ 結果は参考程度に：性格はラベルで決まるものではない",
              "✅ 複数の診断を組み合わせる：1つに依存せず多角的に自己理解",
              "✅ プライバシーに注意：診断結果をAIに共有する際は個人情報を含めない",
              "⚠️ エンタメ診断と科学的診断を区別：無料サイトの中には信頼性の低いものも",
              "⚠️ メンタルヘルスは専門家に：深刻な悩みはAI診断ではなくカウンセラーへ",
            ].map((t, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-lg p-3 text-sm">{t}</div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">自己成長・キャリアアップにおすすめ</h2>
          <ComparisonTableCTA
            services={[
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "自己投資の定番", price: "月6,480円" },
              { name: "ベストティーチャー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+7QNN6+2ZIK+5YJRM", highlight: "論理思考のライティング強化", price: "月12,000円〜" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-mental-health" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">その他</div>
              <div className="font-bold text-sm">メンタルヘルスAI</div>
            </Link>
            <Link href="/guide/ai-job-change" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ビジネス</div>
              <div className="font-bold text-sm">転職AI活用法</div>
            </Link>
            <Link href="/guide/ai-for-hr" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ビジネス</div>
              <div className="font-bold text-sm">人事向けAI</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
