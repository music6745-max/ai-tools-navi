import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI教育活用ガイド【2026年版】教師・学校向けAIツール活用術",
  description:
    "教師・学校関係者向けにAIツールの教育活用法を解説。授業準備、教材作成、成績管理、個別指導、保護者対応など、教育現場でのAI活用術を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-education`,
  },
};

export default function AIForEducationPage() {
  const useCases = [
    {
      title: "授業準備・教材作成",
      icon: "📚",
      description: "指導案の作成、ワークシートの生成、テスト問題の作成など、授業準備の時間を大幅に短縮できます。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「中学2年の一次関数の指導案を作成して」と指示するだけで指導案が完成" },
        { name: "Claude", slug: "claude", tip: "難易度別のテスト問題や、解説付きワークシートの作成が得意" },
        { name: "Gamma", slug: "gamma", tip: "授業用スライドを自動生成。ビジュアル豊かなプレゼン資料を短時間で作成" },
      ],
    },
    {
      title: "個別指導・学習支援",
      icon: "👩‍🏫",
      description: "生徒一人ひとりの理解度に合わせた説明や、つまずきポイントの解説をAIがサポート。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "生徒の理解度に合わせた説明を段階的に生成。対話形式で学習をサポート" },
        { name: "Claude", slug: "claude", tip: "生徒の回答を分析し、つまずきの原因を特定して適切な指導法を提案" },
        { name: "Perplexity", slug: "perplexity", tip: "調べ学習のサポートに最適。信頼性の高い情報源を引用して回答" },
      ],
    },
    {
      title: "成績管理・評価作成",
      icon: "📝",
      description: "テストの採点補助、通知表のコメント作成、評価ルーブリックの作成をAIが効率化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "通知表の所見コメントを生徒の特徴に合わせて複数パターン生成" },
        { name: "Claude", slug: "claude", tip: "評価ルーブリックの作成や、記述式回答の採点基準作成が得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "成績データの整理・可視化。テンプレートで成績管理を効率化" },
      ],
    },
    {
      title: "プレゼン・ビジュアル教材",
      icon: "🎨",
      description: "図解、インフォグラフィック、イラスト入りの教材をAIで簡単に作成。視覚的に分かりやすい授業を実現。",
      tools: [
        { name: "Canva AI", slug: "canva-ai", tip: "教育用テンプレートが豊富。ポスターやワークシートのデザインも簡単" },
        { name: "Gamma", slug: "gamma", tip: "テーマを入力するだけで美しい授業スライドを自動生成" },
        { name: "Napkin AI", slug: "napkin-ai", tip: "概念の関係性を図解化。複雑なトピックの視覚的説明に最適" },
      ],
    },
    {
      title: "保護者対応・事務作業",
      icon: "📧",
      description: "保護者への連絡文書、学級通信、各種報告書の作成をAIが効率化。コミュニケーション改善にも。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "保護者向けお知らせ文書や学級通信の文面を素早く作成" },
        { name: "Claude", slug: "claude", tip: "デリケートな内容の保護者連絡も、適切なトーンで文面を提案" },
        { name: "DeepL Write", slug: "deepl-write", tip: "文書の校正・推敲に活用。丁寧な表現への書き換えが得意" },
      ],
    },
    {
      title: "外国語教育・多言語対応",
      icon: "🌍",
      description: "英語教材の作成、多言語対応の資料作成、外国籍生徒へのサポートにAIを活用。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "レベル別の英語教材作成や、会話練習のシミュレーションに対応" },
        { name: "DeepL Write", slug: "deepl-write", tip: "多言語翻訳の精度が高く、外国籍生徒への配布資料の翻訳に最適" },
        { name: "ElevenLabs", slug: "elevenlabs", tip: "ネイティブ発音のリスニング教材を簡単に作成。多言語対応" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI教育活用ガイド【2026年版】教師・学校向け",
    description: "教師・学校関係者向けにAIツールの教育活用法を解説",
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
          <span className="text-foreground">AI教育活用</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">教育</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI教育活用ガイド（教師・学校向け）
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          教育現場でAIツールを活用することで、授業準備の時間短縮、個別指導の質向上、事務作業の効率化が実現できます。教師・学校関係者向けに、AIツールの具体的な活用方法とおすすめツールを紹介します。
        </p>

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
          <h2 className="text-xl font-bold mb-4">まとめ：教育現場でのAI活用ポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>授業準備</strong>の時短から始める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>AIの出力は必ず<strong>教師が確認・修正</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>生徒の<strong>個人情報</strong>をAIに入力しない</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>成功事例を<strong>学校全体で共有</strong>して活用を広げる</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">教育現場に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/guide/ai-tools-for-students" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              学生向けAIガイド
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
