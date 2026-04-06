import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI医療・健康管理ガイド【2026年版】ヘルスケアAI活用術",
  description:
    "医療現場・健康管理で活用できるAIツールを厳選紹介。症状チェック、メンタルヘルス、健康データ分析、医療文書作成など、ヘルスケア分野のAI活用法を解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-healthcare`,
  },
};

export default function AIForHealthcarePage() {
  const useCases = [
    {
      title: "AI健康相談・症状チェック",
      icon: "🩺",
      description: "気になる症状をAIに相談し、考えられる原因や受診すべき診療科のアドバイスを受けられます。※最終判断は必ず医師に相談してください。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "症状を詳しく説明すると、考えられる原因と対処法を提案してくれる" },
        { name: "Perplexity", slug: "perplexity", tip: "医療論文や信頼性の高いソースを引用して回答。根拠を確認しやすい" },
        { name: "Claude", slug: "claude", tip: "丁寧で慎重な回答が特徴。リスクの説明もバランスよく提示" },
      ],
    },
    {
      title: "メンタルヘルスサポート",
      icon: "🧠",
      description: "ストレス管理、マインドフルネス、認知行動療法（CBT）ベースのセルフケアをAIがサポート。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "CBTベースの思考記録やリフレーミングの練習相手として活用" },
        { name: "Character.ai", slug: "character-ai", tip: "共感的な対話パートナーとしてメンタルヘルスの相談に対応" },
        { name: "Claude", slug: "claude", tip: "ストレス日記の振り返りや、リラクゼーション法の提案が得意" },
      ],
    },
    {
      title: "健康データ管理・分析",
      icon: "📊",
      description: "睡眠データ、運動記録、食事ログなどの健康データをAIが分析し、改善提案を行います。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "健康データをCSVで渡すとトレンド分析や改善提案をしてくれる" },
        { name: "Gemini", slug: "gemini", tip: "Google Fitと連携したデータ分析。Googleエコシステムとの相性が良い" },
        { name: "Claude", slug: "claude", tip: "食事記録や運動ログの長期分析に強い。大量データの処理が得意" },
      ],
    },
    {
      title: "医療文書・論文の要約",
      icon: "📄",
      description: "医療論文、診療ガイドライン、添付文書などの専門的な文書をAIが分かりやすく要約。",
      tools: [
        { name: "Perplexity", slug: "perplexity", tip: "PubMedなどの医学論文を検索・要約。最新の研究動向を把握" },
        { name: "Claude", slug: "claude", tip: "長文の医療文書を正確に要約。専門用語の解説も丁寧" },
        { name: "ChatGPT", slug: "chatgpt", tip: "添付文書や医療ガイドラインの要点を分かりやすく整理" },
      ],
    },
    {
      title: "栄養管理・食事プラン作成",
      icon: "🥗",
      description: "目標やアレルギー、持病に配慮した食事プランをAIが提案。栄養バランスの最適化をサポート。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「糖尿病に配慮した1週間の献立」など具体的な食事プランを作成" },
        { name: "Claude", slug: "claude", tip: "複数の条件（アレルギー、カロリー制限、予算）を考慮した献立提案" },
        { name: "Gemini", slug: "gemini", tip: "料理の写真から栄養素を推定。画像認識で食事記録を効率化" },
      ],
    },
    {
      title: "運動・フィットネスプラン",
      icon: "🏃",
      description: "体力レベルや目標に合わせたトレーニングプランをAIが作成。フォームのアドバイスも。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「初心者向け週3回の筋トレメニュー」など目標に応じたプラン作成" },
        { name: "Gemini", slug: "gemini", tip: "YouTube動画と連携したエクササイズ解説。視覚的に分かりやすい" },
        { name: "Claude", slug: "claude", tip: "怪我のリスクを考慮した段階的なトレーニングプランを提案" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI医療・健康管理ガイド【2026年版】",
    description: "医療現場・健康管理で活用できるAIツールを厳選紹介",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
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
          <span className="text-foreground">AI医療・健康管理</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ヘルスケア</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI医療・健康管理ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールは医療・健康管理の分野でも大きな可能性を持っています。症状チェック、メンタルヘルスサポート、栄養管理、運動プラン作成など、日常の健康管理にAIを活用する方法を紹介します。
          ※AIの回答は参考情報であり、医療行為の代替ではありません。必ず専門医に相談してください。
        </p>

        {/* Important Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-10">
          <p className="text-sm font-bold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ 重要なお知らせ</p>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            本ガイドで紹介するAIツールの活用法は、あくまで健康管理の補助としての利用を想定しています。AIの回答を医師の診断や治療の代替として使用しないでください。体調に不安がある場合は、必ず医療機関を受診してください。
          </p>
        </div>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
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

        {/* Use cases */}
        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-4">
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

        {/* Summary */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：ヘルスケアAI活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>AIの回答はあくまで<strong>参考情報</strong>として活用する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>体調の異変は必ず<strong>医療機関</strong>を受診する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>健康データの<strong>継続的な記録</strong>がAI活用の鍵</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>個人情報の取り扱いに<strong>十分注意</strong>する</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">用途に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-chat" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIチャットツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
