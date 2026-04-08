import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";

export const metadata: Metadata = {
  title: "フィットネス・トレーニングAIおすすめ7選【2026年最新】｜パーソナルトレーナー代替",
  description:
    "ChatGPT・Claudeを使ったトレーニングメニュー作成、フォームチェック、進捗管理の方法を徹底解説。フィットネス特化AIアプリと比較し、自宅で続けられる活用法を紹介。",
  keywords: ["AI フィットネス", "AI トレーニング", "ChatGPT 筋トレ", "AI ダイエット", "フィットネス アプリ"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-fitness` },
};

export default function AIForFitnessPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "フィットネス・トレーニングAIおすすめ7選【2026年最新】",
    description: "AIをパーソナルトレーナー代替として活用する方法を解説。",
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
      { "@type": "ListItem", position: 3, name: "フィットネスAI", item: `${siteConfig.url}/guide/ai-for-fitness` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIでトレーニングメニューを作れますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPTやClaudeに目標・経験・利用器具を伝えれば、週単位のメニューを作成してくれます。" } },
      { "@type": "Question", name: "ケガの心配はありませんか？", acceptedAnswer: { "@type": "Answer", text: "AIは一般論しか提示できません。既往症がある方は必ず医師やトレーナーに相談してから始めましょう。" } },
      { "@type": "Question", name: "ダイエット相談もできますか？", acceptedAnswer: { "@type": "Answer", text: "はい。摂取カロリーやPFCバランスのアドバイスも可能です。極端な制限はせず無理のない範囲で活用しましょう。" } },
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
          <span className="text-foreground">フィットネスAI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">健康・トレーニング</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">フィットネスAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          パーソナルトレーナーは高額で続かない、ジムは時間が合わない——そんな方にこそAIの活用がおすすめです。本記事ではChatGPT・Claude・専用フィットネスアプリを使った、自宅トレーニングを継続できる方法とおすすめツールを解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. フィットネスにAIを使う理由</a></li>
            <li><a href="#menu" className="text-primary hover:underline">2. メニュー作成・週間プラン</a></li>
            <li><a href="#form" className="text-primary hover:underline">3. フォームチェック・動作分析</a></li>
            <li><a href="#progress" className="text-primary hover:underline">4. 進捗管理・モチベ維持</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. フィットネスAIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 活用のコツと注意点</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> フィットネスにAIを使う理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>パーソナルトレーニングは月数万円かかることも珍しくありません。一方、AIは無料〜月数千円で「自分専用のメニュー」「フォームのアドバイス」「食事提案」を24時間受けられます。完全な代替にはなりませんが、初心者〜中級者の自主トレ補助としては十分実用的です。</p>
            <p>特に「忙しくてジムに通えない」「自宅で短時間で済ませたい」方にとって、AIは強力な味方になります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">フィットネスAIの強み</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24時間</div><div>いつでも質問OK</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">パーソナル</div><div>自分専用メニュー</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">低コスト</div><div>無料〜数千円/月</div></div>
            </div>
          </div>
        </section>

        <section id="menu" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> メニュー作成・週間プラン</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>「30代男性、体重75kg、目標は脂肪を減らして筋肉量を増やす、自宅でダンベルのみ、週4回30分」と伝えれば、ChatGPTやClaudeが部位分けされた4日間メニューを生成します。種目・セット数・休息時間も含めた本格的な内容です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>初心者の30代女性向けに、自重トレーニングだけで週3回30分の全身ワークアウトメニューを作成してください。種目・回数・セット数・インターバルを記載し、4週間継続できる進捗プランを提案してください。</p>
            </div>
          </div>
        </section>

        <section id="form" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> フォームチェック・動作分析</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTやGeminiは画像認識に対応しており、トレーニング中の写真を送るとフォームのアドバイスがもらえます。完全な代替ではないものの、「膝が前に出すぎている」「背中が丸まっている」などの基本的なフィードバックは得られます。</p>
          </div>
        </section>

        <section id="progress" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 進捗管理・モチベ維持</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>毎日の体重・体脂肪率・トレーニング記録をAIに入力すれば、傾向分析やメニュー調整のアドバイスを受けられます。停滞期の打破策や、目標までの最短ルートも提案してもらえる点が、続ける上での大きな支えになります。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> フィットネスAIツール7選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">メニュー作成</span>
                </div>
                <p className="text-sm text-muted">目標・器具・経験に合わせたパーソナルメニューを生成。画像でフォームチェックも可能。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">詳細プラン</span>
                </div>
                <p className="text-sm text-muted">長期的な進捗プランや栄養戦略まで含めた、論理的で詳細なトレーニングアドバイス。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">画像認識</span>
                </div>
                <p className="text-sm text-muted">フォーム動画やスクショの解析が得意。最新のトレーニング情報を検索連携で取得。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">💪</span><div><h3 className="font-bold text-lg">Freeletics</h3><div className="text-xs text-muted">AIコーチ</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">自重トレ特化</span></div>
              <p className="text-sm text-muted">AIコーチが自重トレーニングメニューを自動生成。世界5,000万人が利用する人気アプリ。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🏃</span><div><h3 className="font-bold text-lg">Strava</h3><div className="text-xs text-muted">ランニング</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">分析特化</span></div>
              <p className="text-sm text-muted">ランニング・サイクリングのデータをAIが解析し、ペース改善やトレーニング提案を実施。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📱</span><div><h3 className="font-bold text-lg">FiNC</h3><div className="text-xs text-muted">国内AIヘルス</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">日本語対応</span></div>
              <p className="text-sm text-muted">日本最大級のヘルスケアアプリ。AIが食事・運動・睡眠をトータル分析しアドバイス。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">⌚</span><div><h3 className="font-bold text-lg">Whoop</h3><div className="text-xs text-muted">回復管理</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">プロ向き</span></div>
              <p className="text-sm text-muted">プロアスリートも使うウェアラブル端末。AIが睡眠・回復・運動強度を24時間モニタリング。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 活用のコツと注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "目的・体力・器具を具体的にAIに伝える" },
              { icon: "✅", text: "メニューは2〜4週間ごとに見直す" },
              { icon: "✅", text: "栄養と睡眠もAIに相談し総合アプローチ" },
              { icon: "⚠️", text: "ケガや既往症がある方は必ず医師に相談" },
              { icon: "⚠️", text: "AIのフォーム判定は補助程度に留める" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AIコーチで自宅トレを継続しよう</h2>
          <p className="text-sm text-muted mb-6">無料AIから始めて、自分専用メニューで効率的にトレーニング</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTで始める</Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI比較表を見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-mental-health" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">健康</div>
              <div className="font-bold text-sm">メンタルヘルスAI</div>
            </Link>
            <Link href="/guide/ai-for-cooks" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">食事</div>
              <div className="font-bold text-sm">料理AI</div>
            </Link>
            <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">医療</div>
              <div className="font-bold text-sm">ヘルスケアAI</div>
            </Link>
            <Link href="/author" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">編集部</div>
              <div className="font-bold text-sm">編集部について</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
