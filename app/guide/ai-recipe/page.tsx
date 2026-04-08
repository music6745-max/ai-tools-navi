import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "レシピ提案AIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "冷蔵庫の食材から献立を提案するレシピAI6選を徹底比較。栄養管理や時短調理に役立つ選び方を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-recipe`,
  },
};

export default function AIRecipePage() {
  const useCases = [
    {
      title: "冷蔵庫の食材から献立提案",
      icon: "🥗",
      description: "今ある食材を伝えるだけで、AIが最適な献立を提案。食材ロスを減らしながら毎日のごはん作りを効率化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「冷蔵庫にある食材：○○」と伝えるだけで複数レシピを提案" },
        { name: "Claude", slug: "claude", tip: "栄養バランスや家族構成を考慮した週間献立も得意" },
        { name: "Gemini", slug: "gemini", tip: "Web上の人気レシピと連携して定番献立も提案" },
      ],
    },
    {
      title: "栄養バランスを考慮した献立",
      icon: "🥕",
      description: "1日・1週間の栄養バランスをAIが計算し、不足栄養を補う献立を提案。健康維持に役立つ。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "タンパク質・野菜量を数値で管理した献立を提案" },
        { name: "Claude", slug: "claude", tip: "家族の年齢・性別に合わせた栄養設計が得意" },
        { name: "Gemini", slug: "gemini", tip: "カロリー・塩分制限など細かい条件に対応" },
      ],
    },
    {
      title: "時短・作り置きレシピ",
      icon: "⏱️",
      description: "15分以内で作れるレシピや、週末にまとめて作れる作り置きレシピをAIが提案。忙しい日々を救う。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「15分以内」「電子レンジだけ」など制約に強い" },
        { name: "Claude", slug: "claude", tip: "週末作り置きの段取り表までセットで提案" },
        { name: "Notion AI", slug: "notion-ai", tip: "作り置きリストをNotionで家族共有できる" },
      ],
    },
    {
      title: "ダイエット・糖質制限レシピ",
      icon: "🥦",
      description: "低糖質・高タンパク・低カロリーなど目的別にAIがレシピ提案。継続しやすい献立作りに。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "PFCバランスを数値で設計したメニュー作りが得意" },
        { name: "Claude", slug: "claude", tip: "長期的なダイエット計画と献立の両立を提案" },
        { name: "Gemini", slug: "gemini", tip: "最新のダイエット情報と組み合わせたレシピが得意" },
      ],
    },
    {
      title: "世界の料理・英語レシピ翻訳",
      icon: "🌏",
      description: "海外の料理レシピを日本で手に入る食材にアレンジ。英語レシピの翻訳も自然に。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "英語レシピを自然な日本語にニュアンスごと翻訳" },
        { name: "ChatGPT", slug: "chatgpt", tip: "海外食材の代替案まで含めて日本向けにアレンジ" },
        { name: "Claude", slug: "claude", tip: "地域ごとの料理文化を踏まえた解説付きで提案" },
      ],
    },
    {
      title: "離乳食・介護食のレシピ",
      icon: "🍼",
      description: "月齢・嚥下レベルに合わせた離乳食・介護食のレシピをAIが提案。家族の食事ケアに。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "月齢別の離乳食レシピを段階的に提案" },
        { name: "Claude", slug: "claude", tip: "アレルギー情報まで踏まえた安心レシピが得意" },
        { name: "Gemini", slug: "gemini", tip: "最新の栄養指針に沿ったレシピを案内" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI料理レシピツール比較ガイド【2026年版】",
    description: "AI料理レシピツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIレシピ提案", item: `${siteConfig.url}/guide/ai-recipe` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AIレシピ提案は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AIレシピ提案の選び方は？",
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
          <span className="text-foreground">AI料理レシピ</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料理・レシピ</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI料理レシピツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          冷蔵庫の食材・栄養バランス・時短条件まで考慮した献立作りをAIで効率化できます。本ガイドでは、毎日のごはん作り、ダイエット、離乳食まで、用途別のおすすめAI料理レシピツールと活用法を紹介します。
        </p>

        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">活用シーン</h2>
          <ol className="space-y-2 text-sm">
            {useCases.map((uc, i) => (
              <li key={i}>
                <a href={`#scene-${i}`} className="text-primary hover:underline">
                  {uc.icon} {uc.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link href={`/tools/${tool.slug}`} className="font-bold text-primary hover:underline">
                      {tool.name}
                    </Link>
                    <Link href={`/tools/${tool.slug}`} className="text-xs text-primary hover:underline">
                      詳細 →
                    </Link>
                  </div>
                  <p className="text-sm text-muted">💡 {tool.tip}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料でも使えますか？</h3>
              <p className="text-sm text-muted">A. ChatGPTやClaudeの無料プランで十分にレシピ提案は可能です。回数制限がなく使いたい場合は有料プランが便利です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 栄養成分の正確性は？</h3>
              <p className="text-sm text-muted">A. 目安としては有効ですが、医療目的の厳密な数値管理には専用アプリや管理栄養士の確認をおすすめします。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. アレルギー情報も考慮できる？</h3>
              <p className="text-sm text-muted">A. 事前に「○○アレルギーあり」と伝えれば除外して提案可能です。ただし最終確認は必ず人間が行ってください。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI料理レシピ活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>冷蔵庫の食材を<strong>具体的に伝える</strong>ほど提案が的確に</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>条件（時短・低糖質など）は<strong>数字や時間</strong>で指定</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>アレルギー・健康状態は<strong>必ず最初に共有</strong></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>気に入ったレシピは<strong>お気に入り管理</strong>で繰り返し活用</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">毎日の料理に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-chat" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIチャットツール一覧
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">特定業界</div>
                <div className="font-bold text-sm">医療・健康AI</div>
              </Link>
              <Link href="/guide/ai-for-education" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">特定業界</div>
                <div className="font-bold text-sm">AI教育活用</div>
              </Link>
              <Link href="/guide/ai-travel-planning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">特定業界</div>
                <div className="font-bold text-sm">AI旅行計画</div>
              </Link>
              <Link href="/guide/ai-legal-contracts" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">特定業界</div>
                <div className="font-bold text-sm">AI法務・契約書</div>
              </Link>
              <Link href="/guide/ai-for-ecommerce" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">特定業界</div>
                <div className="font-bold text-sm">ECサイト向けAI</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
