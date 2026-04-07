import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI英文校正ツール比較ガイド【2026年版】ビジネス英語を自然に添削",
  description:
    "AI英文校正ツールを徹底比較。ビジネスメール、論文、英文レポートを自然で正確に添削するおすすめAI校正ツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-english-proofreading`,
  },
};

export default function AIEnglishProofreadingPage() {
  const useCases = [
    {
      title: "ビジネスメールの校正",
      icon: "📧",
      description: "英文メールを自然で丁寧なビジネストーンに調整。海外取引先への印象を底上げ。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "堅すぎない自然なビジネス英語にリライトしてくれる" },
        { name: "Grammarly", slug: "grammarly", tip: "文法・スペル・トーンを総合的に指摘し、ワンクリック修正" },
        { name: "ChatGPT", slug: "chatgpt", tip: "目的や相手のポジションを伝えると、文脈に最適化して校正" },
      ],
    },
    {
      title: "論文・レポートの校正",
      icon: "📚",
      description: "学術論文や英文レポートを、アカデミックな表現に整える。",
      tools: [
        { name: "Claude", slug: "claude", tip: "長文論文の論理構成や冗長表現を丁寧に指摘するのが得意" },
        { name: "Grammarly", slug: "grammarly", tip: "アカデミック向けの詳細な文法・スタイルチェックが可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "専門用語の使い方やパラフレーズ提案に強い" },
      ],
    },
    {
      title: "英文ブログ・Webコンテンツ",
      icon: "🌐",
      description: "海外向け発信記事やWebコンテンツを、読みやすく自然な英語に整える。",
      tools: [
        { name: "Grammarly", slug: "grammarly", tip: "読者層に合わせたトーン調整でエンゲージメント向上" },
        { name: "DeepL Write", slug: "deepl-write", tip: "ネイティブらしい自然な言い回しに変換" },
        { name: "Wordtune", slug: "wordtune", tip: "同じ意味でも複数の表現案を提示し、語彙の幅を広げられる" },
      ],
    },
    {
      title: "日本語→英語への翻訳＋校正",
      icon: "🔄",
      description: "日本語の原稿をAIで翻訳し、その後AI校正で自然な英語に仕上げる2段階ワークフロー。",
      tools: [
        { name: "DeepL", slug: "deepl", tip: "高精度な日英翻訳に定評。下訳のクオリティが高い" },
        { name: "DeepL Write", slug: "deepl-write", tip: "翻訳後の英文を自然にリライトする最適な組み合わせ" },
        { name: "ChatGPT", slug: "chatgpt", tip: "背景情報を伝えることで文脈に沿った翻訳・校正が可能" },
      ],
    },
    {
      title: "英語学習者の添削",
      icon: "🎓",
      description: "英作文の学習者向けに、誤りの指摘と解説をセットで提示。学習効果を最大化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "間違いの指摘だけでなく、なぜ間違いかを丁寧に解説してくれる" },
        { name: "Claude", slug: "claude", tip: "段階的な言い換え提案と文法解説に強い" },
        { name: "Grammarly", slug: "grammarly", tip: "学習者向けに詳細なルール説明付きで指摘が得られる" },
      ],
    },
    {
      title: "プレゼン・スピーチ原稿",
      icon: "🎤",
      description: "英語プレゼンやスピーチ原稿を、話し言葉として自然な表現に調整。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "発表時間や聴衆に合わせたトーン・テンポ調整が得意" },
        { name: "Claude", slug: "claude", tip: "論理的で説得力のあるスピーチ構成に整えるのが得意" },
        { name: "DeepL Write", slug: "deepl-write", tip: "堅い書き言葉を自然な話し言葉にリライト" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI英文校正ツール比較ガイド【2026年版】",
    description: "AI英文校正ツールの比較と活用法を解説",
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
          <span className="text-foreground">AI英文校正</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">英文校正</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI英文校正ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          英文メールから論文、プレゼン原稿まで、AI英文校正ツールを使えばネイティブチェックに近い品質を短時間で得られます。本ガイドでは、用途別のおすすめAI校正ツールと効果的な使い分けを紹介します。
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
          <h2 className="text-xl font-bold mb-4">英文ライティング力を伸ばす英会話サービス</h2>
          <p className="text-sm text-muted mb-4">AIで添削した後は、実際にネイティブ講師と英文を確認することで定着します。Writingに強いオンライン英会話を活用しましょう。</p>
          <ComparisonTableCTA
            services={[
              { name: "ベストティーチャー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+7QNN6+2ZIK+69HA9", highlight: "Writing×Speakingの独自メソッド・添削特化", price: "月12,000円〜", badge: "Writing特化" },
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+64JTE", highlight: "レッスン受け放題・添削も依頼可能", price: "月6,480円", badge: "おすすめ" },
              { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+639IP", highlight: "プロ教師によるカランメソッド", price: "月2,980円〜" },
              { name: "エイゴックス", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EVUWI+2TKO+5ZU2A", highlight: "ネイティブ講師から学べる", price: "月2,000円〜" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. ネイティブチェックの代わりになりますか？</h3>
              <p className="text-sm text-muted">A. 日常的な文章や社内用途であれば十分に代替可能です。ただし、正式な契約書や学術論文投稿前などはネイティブの最終チェックが安心です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 機密情報を含む文書を校正しても大丈夫？</h3>
              <p className="text-sm text-muted">A. 無料プランでは学習に使われる可能性があります。業務利用では法人プランや、データ非学習設定のあるサービスを選びましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料でも使えますか？</h3>
              <p className="text-sm text-muted">A. DeepL Write、Grammarly、ChatGPTなどは無料プランでも基本的な校正が可能です。大量利用や高度な提案には有料プランが便利です。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI英文校正のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>用途に応じて<strong>ツールを使い分ける</strong></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>DeepL翻訳＋AI校正の<strong>2段階ワークフロー</strong>が便利</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>機密文書は<strong>法人プラン</strong>で運用する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>学習目的なら<strong>解説付き指摘</strong>を得られるAIを活用</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">英文校正に合ったAIツールを見つけましょう</p>
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
