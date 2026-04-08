import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "履歴書作成AIおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "自己PRや志望動機が書けず転職活動が止まっている方へ。ChatGPT・Claude・Gemini等のAIツール5選を比較し、職務経歴書を魅力的に仕上げる活用法を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-resume`,
  },
};

export default function AIResumePage() {
  const useCases = [
    {
      title: "職務経歴書の下書き作成",
      icon: "📄",
      description: "これまでの経験やプロジェクトを箇条書きで渡すだけで、読みやすい職務経歴書の下書きを生成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "業界別テンプレートに沿った職務経歴書を短時間で作成可能" },
        { name: "Claude", slug: "claude", tip: "長いキャリアも時系列で整理し、読みやすい文章にまとめるのが得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "Notion上で下書き→清書→履歴管理までを一元化" },
      ],
    },
    {
      title: "自己PR・強みの言語化",
      icon: "💪",
      description: "自分では言語化しにくい強みや成果を、AIとの対話を通じて具体的に引き出す。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "質問形式で経験を深掘りし、強みを言語化してくれる" },
        { name: "Claude", slug: "claude", tip: "抽象的な話から本質的な強みを丁寧に整理するのが得意" },
        { name: "Gemini", slug: "gemini", tip: "業界の動向と結び付けた強みの訴求ポイントを提示" },
      ],
    },
    {
      title: "志望動機の作成",
      icon: "🎯",
      description: "企業情報・求人票・自分の経験をAIに渡し、説得力のある志望動機を組み立てる。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "企業研究の情報と経歴を組み合わせて複数案を生成" },
        { name: "Claude", slug: "claude", tip: "ストーリー性のある志望動機に仕上げるのが得意" },
        { name: "Perplexity", slug: "perplexity", tip: "応募企業の最新情報を出典付きで調査して素材に活用" },
      ],
    },
    {
      title: "実績の数値化・成果の整理",
      icon: "📊",
      description: "曖昧な業務成果を、数字や比較で伝わる形に整理する。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「STAR法」など採用フレームに沿った成果整理が可能" },
        { name: "Claude", slug: "claude", tip: "長い経歴からインパクトのある実績を抽出するのが得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "プロジェクト履歴を元に数値実績を一覧化" },
      ],
    },
    {
      title: "英文レジュメの作成",
      icon: "🌏",
      description: "外資系・グローバル転職向けに、英文レジュメやカバーレターをAIで作成。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "自然なビジネス英文への書き換えに強い" },
        { name: "ChatGPT", slug: "chatgpt", tip: "英文レジュメのフォーマットに沿った下書きを作成可能" },
        { name: "Grammarly", slug: "grammarly", tip: "文法チェックとトーンの調整で完成度を引き上げる" },
      ],
    },
    {
      title: "面接対策・想定質問の準備",
      icon: "🗣️",
      description: "作成した書類を元に、想定質問と回答案をAIに生成させて面接対策に活用。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "職務経歴書を読み込ませて想定質問を一括生成" },
        { name: "Claude", slug: "claude", tip: "深掘り質問への回答を論理的に組み立てるのが得意" },
        { name: "Gemini", slug: "gemini", tip: "業界の最新動向を踏まえた質問まで想定できる" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI履歴書・職務経歴書作成ガイド【2026年版】",
    description: "AI履歴書作成ツールの比較と活用法を解説",
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
          <span className="text-foreground">AI履歴書作成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">転職書類</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI履歴書・職務経歴書作成ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          履歴書・職務経歴書の作成は、AIを活用することで数時間かかる作業を大幅に短縮できます。本ガイドでは、下書きから自己PR、志望動機、面接対策までAIを使い倒す実践テクニックを紹介します。
        </p>

        {/* TOC */}
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

        {/* Use cases */}
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

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">履歴書作成と並行して活用したいサービス</h2>
          <p className="text-sm text-muted mb-4">AIで履歴書を整えたら、スキルアップと転職エージェントの活用で書類選考の通過率を高めましょう。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "未経験からプログラミング・スキル証明に最適", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "資格取得・就転職サポート充実", price: "コース別", badge: "全国展開" },
              { name: "ファルマスタッフ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+95U5WY+276A+63OYA", highlight: "薬剤師の履歴書添削・面談サポートあり", price: "登録無料" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AIで作った書類はバレますか？</h3>
              <p className="text-sm text-muted">A. AI任せの文章は表現が画一的になりがちで見抜かれます。必ず自分の言葉や具体的エピソードを加え、最終チェックを人間が行いましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 個人情報をAIに入れて大丈夫？</h3>
              <p className="text-sm text-muted">A. 氏名や連絡先などの個人情報は入れず、経歴・スキルのみを抽象化して入力するのが安全です。法人プランなら学習への非利用設定も可能です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料のAIだけで十分？</h3>
              <p className="text-sm text-muted">A. ChatGPTやClaudeの無料プランでも、下書き・整形・自己PRの言語化は十分に可能です。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI履歴書作成のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>下書きをAIに任せる</strong>ことで時間短縮</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>自己PRや志望動機は<strong>対話で深掘り</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>個人情報の入力は<strong>最小限</strong>に抑える</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>最終的な<strong>人間のチェック</strong>を必ず行う</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">履歴書作成に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-writing" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIライティングツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
