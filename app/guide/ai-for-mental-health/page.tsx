import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";

export const metadata: Metadata = {
  title: "メンタルヘルスAIアプリおすすめ7選【2026年最新】｜不安・ストレス・睡眠改善",
  description:
    "ChatGPT・Claude・Woebot・Wysa・Replikaなどメンタルヘルスに使えるAIアプリを徹底比較。不安・ストレス・睡眠の悩みにAIをどう活用するか、メリットと注意点を解説。",
  keywords: ["メンタルヘルス AI", "AI カウンセリング", "ストレス AI", "AI 心理療法", "Wysa", "Woebot"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-mental-health` },
};

export default function AIForMentalHealthPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "メンタルヘルスAIアプリおすすめ7選【2026年最新】",
    description: "AIをメンタルケアに活用する方法を徹底解説。",
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
      { "@type": "ListItem", position: 3, name: "メンタルヘルスAI", item: `${siteConfig.url}/guide/ai-for-mental-health` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIにメンタルケアを任せて安全ですか？", acceptedAnswer: { "@type": "Answer", text: "AIは医療行為の代替にはなりません。重い症状がある場合は必ず精神科医や臨床心理士に相談してください。日常的なストレス管理や気持ちの整理には便利です。" } },
      { "@type": "Question", name: "プライバシーは守られますか？", acceptedAnswer: { "@type": "Answer", text: "WysaやWoebotなど専用アプリは匿名利用が可能です。ChatGPTは設定で学習除外を選べます。機密情報は最小限にしましょう。" } },
      { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "Wysaは基本無料、Woebotは無料、ChatGPT・Claudeも無料プランあり。本格的なケアには有料プランや専門家を併用しましょう。" } },
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
          <span className="text-foreground">メンタルヘルスAI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">健康・メンタル</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">メンタルヘルスAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          仕事のストレス、人間関係の悩み、不眠、漠然とした不安——現代人が抱えるメンタル課題は増えています。本記事ではChatGPT・Claudeをはじめ、Woebot・Wysaなどメンタルヘルス特化アプリを使った活用法と注意点を解説します。AIは万能ではありませんが、日常的なセルフケアには十分役立ちます。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. なぜメンタルケアにAIが選ばれるのか</a></li>
            <li><a href="#vent" className="text-primary hover:underline">2. 気持ちの言語化・吐き出し</a></li>
            <li><a href="#cbt" className="text-primary hover:underline">3. 認知行動療法（CBT）的アプローチ</a></li>
            <li><a href="#sleep" className="text-primary hover:underline">4. 睡眠・リラックス</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. メンタルヘルスAIツール7選</a></li>
            <li><a href="#caution" className="text-primary hover:underline">6. 重要な注意事項</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜメンタルケアにAIが選ばれるのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>カウンセリングは時間・費用・予約のハードルがあり、必要なときにすぐ受けられないのが現状です。AIなら24時間いつでも利用可能で、匿名性が高く、「人に話しづらい悩み」も気兼ねなく打ち明けられます。</p>
            <p>もちろんAIは医療行為ができませんが、日々のストレス管理・気持ちの整理・睡眠改善・思考の整理など、セルフケアの補助としては非常に有効です。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AIメンタルケアの3つの強み</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24時間</div><div>いつでも相談可能</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">匿名性</div><div>気兼ねなく話せる</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">低コスト</div><div>無料〜数千円/月</div></div>
            </div>
          </div>
        </section>

        <section id="vent" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 気持ちの言語化・吐き出し</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>「今日あった出来事と感じたことを話したい」とAIに伝えれば、共感的に話を聞いてくれます。書くこと・話すこと自体に整理効果（ジャーナリング効果）があるため、頭の中のモヤモヤを吐き出すだけで気持ちが楽になることも多いです。</p>
          </div>
        </section>

        <section id="cbt" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 認知行動療法（CBT）的アプローチ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>WoebotやWysaは認知行動療法に基づいて設計されており、「自動思考の書き換え」「歪みの修正」「行動活性化」など、心理療法の基本テクニックを対話形式で実践できます。ChatGPTやClaudeに「CBTの考え方で私の不安を整理して」と依頼することも可能です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは認知行動療法の知識を持つ対話相手です。私の今の不安を聞いて、認知の歪みがあれば指摘し、別の考え方を一緒に整理してください。私が話す内容に共感的に応答してください。</p>
            </div>
          </div>
        </section>

        <section id="sleep" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 睡眠・リラックス</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>不眠や入眠困難に対しては、AIに「今日の出来事を整理したい」「リラックスできるストーリーを作って」と頼むと頭が落ち着きやすくなります。Calm・Headspaceなどの瞑想アプリと組み合わせるとさらに効果的です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> メンタルヘルスAIツール7選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">汎用対話</span>
                </div>
                <p className="text-sm text-muted">気持ちの整理、CBT的な対話、ジャーナリングのサポートに使える汎用AI。日本語対応も自然。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">共感力高</span>
                </div>
                <p className="text-sm text-muted">穏やかで丁寧なトーンが特徴。じっくり気持ちを聞いてほしいときに向いています。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div><span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">情報検索</span></div>
                <p className="text-sm text-muted">最新のメンタルヘルス情報やセルフケア手法を検索付きで提示してくれる。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🤖</span><div><h3 className="font-bold text-lg">Woebot</h3><div className="text-xs text-muted">CBT特化AI</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">心理学者監修</span></div>
              <p className="text-sm text-muted">スタンフォード大学の心理学者が設計したCBTベースのチャットボット。臨床研究の裏付けあり。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🐧</span><div><h3 className="font-bold text-lg">Wysa</h3><div className="text-xs text-muted">匿名AIケア</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">匿名対応</span></div>
              <p className="text-sm text-muted">ペンギンキャラのAIが対話。CBT・マインドフルネス・呼吸法などをセルフケアとして提供。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🧘</span><div><h3 className="font-bold text-lg">Calm</h3><div className="text-xs text-muted">瞑想・睡眠</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">瞑想アプリ</span></div>
              <p className="text-sm text-muted">瞑想・睡眠ストーリー・呼吸法の音声コンテンツを多数収録。AIに頼り過ぎない補助に。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📔</span><div><h3 className="font-bold text-lg">Reflectly</h3><div className="text-xs text-muted">AI日記</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">ジャーナリング</span></div>
              <p className="text-sm text-muted">AIが日記の質問を投げかけてくれる、ジャーナリング特化アプリ。気持ちの記録と整理に最適。</p>
            </div>
          </div>
        </section>

        <section id="caution" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 重要な注意事項</h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "AIは医療行為の代替にはなりません。重い症状は必ず精神科医・心療内科に相談を" },
              { icon: "⚠️", text: "希死念慮や自傷行為の衝動がある場合は、いのちの電話など専門窓口にすぐに連絡" },
              { icon: "✅", text: "日常的なストレス管理や気持ちの整理にはAIを活用しても問題ない" },
              { icon: "✅", text: "医療機関のカウンセリングと併用することで効果が高まる" },
              { icon: "✅", text: "個人を特定する情報・機密事項は最小限に" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">日々のメンタルケアにAIを取り入れよう</h2>
          <p className="text-sm text-muted mb-6">無料で始められるAIで、気持ちの整理を今日から</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/claude" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claudeを試す</Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI比較表を見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-fitness" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">健康</div>
              <div className="font-bold text-sm">フィットネスAI</div>
            </Link>
            <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">医療</div>
              <div className="font-bold text-sm">ヘルスケアAI</div>
            </Link>
            <Link href="/guide/ai-for-seniors" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">シニア</div>
              <div className="font-bold text-sm">シニア向けAI</div>
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
