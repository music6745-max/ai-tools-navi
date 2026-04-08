import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";

export const metadata: Metadata = {
  title: "料理・レシピAIおすすめ7選【2026年最新】徹底比較｜献立作成・栄養管理・冷蔵庫整理",
  description:
    "ChatGPT・Claude・Geminiを使った料理・レシピ生成、献立作成、栄養管理、冷蔵庫の余り食材活用のAI活用法を徹底解説。プロのレシピ提案AIと専用アプリも比較。",
  keywords: ["AI レシピ", "AI 献立", "ChatGPT 料理", "AI 栄養管理", "AI 冷蔵庫"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-cooks` },
};

export default function AIForCooksPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "料理・レシピAIおすすめ7選【2026年最新】徹底比較",
    description: "AIを使って献立作成、レシピ提案、栄養管理を行う方法を解説。",
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
      { "@type": "ListItem", position: 3, name: "料理AI", item: `${siteConfig.url}/guide/ai-for-cooks` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIで献立を考えてもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ChatGPTやClaudeに家族構成・好み・予算・冷蔵庫の食材を伝えれば、1週間分の献立を提案してくれます。" } },
      { "@type": "Question", name: "栄養バランスの計算もできますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPTは栄養素の概算を計算可能です。正確性を重視するなら、栄養計算専用アプリと併用がおすすめです。" } },
      { "@type": "Question", name: "アレルギー対応もしてくれますか？", acceptedAnswer: { "@type": "Answer", text: "アレルギー食材を伝えれば代替食材を提案してくれます。最終チェックは必ず人間が行いましょう。" } },
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
          <span className="text-foreground">料理AI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料理・レシピ</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">料理・レシピAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          毎日の献立に悩む、冷蔵庫の余り食材を活かしたい、家族の栄養バランスを整えたい——そんな悩みを解決するのがAIです。本記事ではChatGPT・Claude・Gemini・専用アプリを使った料理・レシピ生成術と、おすすめツール7選を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. 料理にAIを使うメリット</a></li>
            <li><a href="#recipe" className="text-primary hover:underline">2. レシピ生成・献立作成</a></li>
            <li><a href="#fridge" className="text-primary hover:underline">3. 冷蔵庫の余り食材を活用</a></li>
            <li><a href="#nutrition" className="text-primary hover:underline">4. 栄養管理・カロリー計算</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 料理AIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 活用のコツと注意点</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 料理にAIを使うメリット</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>料理は毎日のことだからこそ、献立決めの負担が大きい家事のひとつです。AIに「家族構成・好み・冷蔵庫にある食材・予算・調理時間の制約」を伝えれば、瞬時に献立とレシピを提案してくれます。</p>
            <p>さらにAIは栄養バランスや食材の組み合わせも考慮可能。アレルギー対応・離乳食・高齢者食など特殊なニーズにも柔軟に対応できる点が大きな魅力です。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">料理AIで得られる3つの恩恵</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">時短</div><div>献立決めが秒で完了</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">食材ロス</div><div>余り食材を有効活用</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">バランス</div><div>栄養を考えた提案</div></div>
            </div>
          </div>
        </section>

        <section id="recipe" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> レシピ生成・献立作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>「4人家族・予算1万円・1週間分の和食メインの献立を考えて」といったプロンプトをChatGPTやClaudeに渡せば、7日分の主菜・副菜・汁物が一気に提案されます。買い物リストも一緒に作ってもらえるので、スーパーでの迷いも減ります。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>家族4人（大人2・小学生2）の1週間分の夕食献立を提案してください。和食中心、予算1万円、調理時間30分以内、栄養バランス重視で。最後に買い物リストもまとめて。</p>
            </div>
          </div>
        </section>

        <section id="fridge" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 冷蔵庫の余り食材を活用</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>「鶏もも肉、玉ねぎ、卵、ピーマンが余っている。30分以内で作れる和食レシピを3つ提案して」と頼めば、AIが具体的なレシピを提示します。フードロス削減と節約が同時に叶う活用法です。</p>
            <p>ChatGPTやGeminiなら冷蔵庫の写真を撮ってアップロードし、画像から食材を認識させることも可能です。</p>
          </div>
        </section>

        <section id="nutrition" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 栄養管理・カロリー計算</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>糖質制限・高タンパク・低カロリーといった目的別の食事管理もAIに相談可能です。ダイエット中の食事メニュー、筋トレ中の高タンパク献立、糖尿病対応レシピなど、専門的な知識を反映した提案を受けられます。</p>
            <p>ただし健康上の理由がある場合は、必ず医師・管理栄養士の指導を優先しましょう。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> 料理AIツール7選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">献立作成に最適</span>
                </div>
                <p className="text-sm text-muted">画像入力で冷蔵庫の食材を認識し、レシピ提案。栄養素の概算計算も可能。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">丁寧な提案</span>
                </div>
                <p className="text-sm text-muted">家族構成や好みを丁寧に汲み取った詳細な献立提案。アレルギー対応も得意。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">画像認識</span>
                </div>
                <p className="text-sm text-muted">冷蔵庫の写真から食材を認識し、レシピを提案。Google検索連携で旬の食材情報も。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🥘</span><div><h3 className="font-bold text-lg">クラシル</h3><div className="text-xs text-muted">レシピ動画</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">動画レシピ</span></div>
              <p className="text-sm text-muted">5万本以上の短尺レシピ動画。AIキーワード検索で食材や料理ジャンルから瞬時に絞り込み。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🍽️</span><div><h3 className="font-bold text-lg">DELISH KITCHEN</h3><div className="text-xs text-muted">献立提案</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">献立アプリ</span></div>
              <p className="text-sm text-muted">栄養バランスを考慮した献立を自動提案。お気に入り保存と買い物リスト機能も便利。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📱</span><div><h3 className="font-bold text-lg">あすけん</h3><div className="text-xs text-muted">栄養計算</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">栄養管理</span></div>
              <p className="text-sm text-muted">食事写真をAIが分析し、自動で栄養計算。ダイエットや健康管理に強い専用アプリ。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">レシピ管理</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">記録向き</span></div>
              <p className="text-sm text-muted">家族のお気に入りレシピ・献立履歴・買い物リストを一元管理。AIで検索・要約も可能。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 活用のコツと注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "プロンプトに具体的な制約（人数・予算・調理時間）を入れる" },
              { icon: "✅", text: "アレルギー・苦手食材は最初に必ず伝える" },
              { icon: "✅", text: "気に入ったレシピはNotionなどに保存して再利用" },
              { icon: "⚠️", text: "栄養計算の精度はあくまで概算。健康目的なら専用アプリと併用" },
              { icon: "⚠️", text: "AIが提案する加熱時間・温度は必ず常識でチェック" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">毎日の献立をAIにおまかせ</h2>
          <p className="text-sm text-muted mb-6">無料のAIから始めて、献立の悩みを今日から解消しましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTを試す</Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI比較表を見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-recipe" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">レシピ</div>
              <div className="font-bold text-sm">AIレシピツール</div>
            </Link>
            <Link href="/guide/ai-for-parents" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">家族</div>
              <div className="font-bold text-sm">子育て向けAI</div>
            </Link>
            <Link href="/guide/ai-for-fitness" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">健康</div>
              <div className="font-bold text-sm">フィットネスAI</div>
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
