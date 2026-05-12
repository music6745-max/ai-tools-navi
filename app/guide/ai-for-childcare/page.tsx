import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "育児・子育てAIアプリおすすめ5選【2026年最新】｜離乳食・睡眠・学習",
  description:
    "育児の悩みを解決するAIアプリ・サービスを徹底解説。離乳食レシピ提案、睡眠リズム解析、子どもの学習支援、絵本読み聞かせ、育児相談チャットまで、忙しいパパママの味方となる2026年最新AIを紹介します。",
  keywords: ["育児 AI", "子育て AI", "離乳食 AI", "育児アプリ AI", "AI 絵本"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-childcare` },
};

export default function Page() {
  const articleLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "育児・子育てAIアプリおすすめ5選【2026年最新】",
    description: "離乳食から学習支援まで、育児に役立つAI完全ガイド。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08", dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "育児・子育てAI", item: `${siteConfig.url}/guide/ai-for-childcare` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "育児にAIを使っても大丈夫？", acceptedAnswer: { "@type": "Answer", text: "あくまで補助として活用すれば便利なツールです。医療的な判断は必ず医師に相談してください。" } },
      { "@type": "Question", name: "子ども向けAIは何歳から？", acceptedAnswer: { "@type": "Answer", text: "5歳程度から音声アシスタントとの会話を楽しめます。利用時は保護者が内容を確認するのがおすすめです。" } },
      { "@type": "Question", name: "AI絵本読み聞かせとは？", acceptedAnswer: { "@type": "Answer", text: "ChatGPTなどで子どもの年齢に合わせたオリジナルストーリーを作成し、音声合成で読み聞かせる使い方が人気です。" } },
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
          <span className="text-foreground">育児・子育てAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">育児・子育て</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">育児・子育てAIアプリおすすめ5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          離乳食の献立、夜泣き対策、幼児教育、学校の宿題サポート——育児の悩みに24時間答えてくれるAIツールが増えています。忙しいパパママの味方となる2026年最新AIを分野別に紹介します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#meal" className="text-primary hover:underline">1. 離乳食・幼児食レシピAI</a></li>
            <li><a href="#sleep" className="text-primary hover:underline">2. 睡眠リズム・夜泣き対策AI</a></li>
            <li><a href="#study" className="text-primary hover:underline">3. 学習支援AI</a></li>
            <li><a href="#story" className="text-primary hover:underline">4. 絵本・読み聞かせ生成AI</a></li>
            <li><a href="#chat" className="text-primary hover:underline">5. 育児相談チャットAI</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 使う上での注意点</a></li>
          </ol>
        </div>

        <section id="meal" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 離乳食・幼児食レシピAI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>冷蔵庫の食材・月齢・アレルギー情報をChatGPTやClaudeに伝えると、最適な離乳食・幼児食レシピを提案してくれます。毎日のメニューに悩むパパママに人気の使い方です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 text-xs text-muted font-mono">
            <p>プロンプト例：「8ヶ月の赤ちゃん用、卵・乳アレルギーあり。冷蔵庫に人参・豆腐・鶏ひき肉がある。栄養バランスの良い夕食レシピを3つ提案して。」</p>
          </div>
        </section>

        <section id="sleep" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 睡眠リズム・夜泣き対策AI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>赤ちゃんの睡眠時間・授乳時間を記録するAIアプリは、リズムの崩れを自動で検知し改善アドバイスを提示します。夜泣きの頻度・原因をデータ化することで、睡眠トレーニングの見通しが立ちやすくなります。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">ぴよログ</span> — 育児記録の定番、AIが生活パターンを可視化。</div>
            <div><span className="font-bold text-primary">Huckleberry</span> — 米国発の睡眠トレーニングAI（英語）。</div>
          </div>
        </section>

        <section id="study" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 学習支援AI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>小学生の宿題サポートや自由研究の相談、中高生の英語・数学・作文指導までAIが対応可能です。ChatGPTは「小学3年生にもわかるように説明して」と指示できるので、学年に応じた解説を受けられます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">ChatGPT</span> — 算数・国語・理科の質問に学年レベルで回答。</div>
            <div><span className="font-bold text-primary">Khan Academy Khanmigo</span> — AIチューターが学習を並走（英語）。</div>
          </div>
        </section>

        <section id="story" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 絵本・読み聞かせ生成AI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>子どもの名前・好きなキャラクター・学ばせたいテーマを指定すると、オリジナルストーリーを作ってくれます。画像生成AIと組み合わせれば挿絵付きの絵本も作成可能です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 text-xs text-muted font-mono">
            <p>プロンプト例：「5歳の『さくら』ちゃんが主人公。歯磨きの大切さを学べる、優しい雰囲気の寝る前用のお話を400字で作って。」</p>
          </div>
        </section>

        <section id="chat" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 育児相談チャットAI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>夜中の急な発熱、イヤイヤ期の対処法、トイレトレーニングの悩み——専門家に聞くほどではない小さな悩みも24時間AIに相談できます。Claudeは丁寧で優しい回答が評判です。</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 使う上での注意点</h2>
          <div className="space-y-3">
            {[
              "✅ 医療判断は必ず医師に：高熱・けいれんなど緊急時はAIに頼らず受診",
              "✅ 個人情報・写真の取り扱いに注意：子どもの写真をAIにアップする際は要確認",
              "✅ 子どもの成長段階に合わせる：AIのアドバイスが万人向けでないことを理解",
              "⚠️ 親の判断を優先：AI提案はあくまで参考、家庭の方針を大切に",
              "⚠️ スクリーンタイムの管理：AI学習は楽しい反面、使いすぎに注意",
            ].map((t, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-lg p-3 text-sm">{t}</div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">子どもの英語学習におすすめ</h2>
          <ComparisonTableCTA
            services={[
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "子供向けキッズコースあり", price: "月6,480円", badge: "家族割対応" },
              { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "カランメソッドで楽しく", price: "月2,980円〜" },
              { name: "NOVA ライブステーション", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE", highlight: "LIVE配信で家族一緒に", price: "月額980円〜" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-parents" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業種別</div>
              <div className="font-bold text-sm">保護者向けAI</div>
            </Link>
            <Link href="/guide/ai-for-teachers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業種別</div>
              <div className="font-bold text-sm">教師向けAI</div>
            </Link>
            <Link href="/guide/ai-tools-for-students" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">学習・研究</div>
              <div className="font-bold text-sm">学生向けAI</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
