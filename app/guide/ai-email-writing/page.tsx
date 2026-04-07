import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIメール作成ツール比較ガイド【2026年版】ビジネスメールを自動化",
  description:
    "AIメール作成ツールを徹底比較。ビジネスメール、営業メール、英文メール、返信文作成など、メール業務を効率化するおすすめAIツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-email-writing`,
  },
};

export default function AIEmailWritingPage() {
  const useCases = [
    {
      title: "ビジネスメール作成",
      icon: "✉️",
      description: "依頼・お礼・謝罪など定型ビジネスメールを、場面に合ったトーンでAIが自動作成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "丁寧語・敬語の使い分けが自然で日本語ビジネスメールに強い" },
        { name: "Claude", slug: "claude", tip: "相手との関係性を踏まえたトーン調整が得意" },
        { name: "Gemini", slug: "gemini", tip: "Gmailと連携して下書きをそのまま挿入可能" },
      ],
    },
    {
      title: "営業・提案メール",
      icon: "💼",
      description: "新規開拓、フォローアップ、提案書添付メールなど営業シーンに最適化したメールを生成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "相手の課題に合わせたベネフィット訴求型の文面が得意" },
        { name: "Claude", slug: "claude", tip: "長文の提案メールも論点を整理して読みやすく構成" },
        { name: "Notion AI", slug: "notion-ai", tip: "営業ナレッジと連携したテンプレート運用に最適" },
      ],
    },
    {
      title: "英文メール作成",
      icon: "🌐",
      description: "海外取引先向けの英文メールを、自然な言い回しでAIが自動作成。敬意やトーンも調整可能。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "自然なネイティブ表現への言い換えに特化" },
        { name: "ChatGPT", slug: "chatgpt", tip: "ビジネス英文メールのテンプレートが豊富" },
        { name: "Claude", slug: "claude", tip: "長文の英文メールをニュアンスを保ったまま作成" },
      ],
    },
    {
      title: "返信文の自動生成",
      icon: "↩️",
      description: "受信メールの内容を踏まえた返信文案を自動生成。会議調整や問い合わせ対応に便利。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "質問内容ごとに複数の返信パターンを提案" },
        { name: "Gemini", slug: "gemini", tip: "Gmail連携で受信メールから直接返信案を生成" },
        { name: "Claude", slug: "claude", tip: "長文メールの要約＋返信案を同時に出力" },
      ],
    },
    {
      title: "トーン調整・敬語変換",
      icon: "🎚️",
      description: "書いたメールをより丁寧に・よりフランクに、相手に合わせて変換してくれる。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "敬語レベルの調整指示に柔軟に対応" },
        { name: "Claude", slug: "claude", tip: "自然な日本語を保ったままトーンだけ変えるのが得意" },
        { name: "DeepL Write", slug: "deepl-write", tip: "フォーマル⇔カジュアルの言い換え候補を提示" },
      ],
    },
    {
      title: "メルマガ・一斉配信文",
      icon: "📣",
      description: "メールマガジンやキャンペーン告知メールを、開封率を意識した件名込みで作成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "件名・プレヘッダー・本文をセットで提案" },
        { name: "Claude", slug: "claude", tip: "長めのストーリー型メルマガ制作に強い" },
        { name: "Jasper", slug: "jasper", tip: "マーケティング向けの訴求フレームワークに対応" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIメール作成ツール比較ガイド【2026年版】",
    description: "AIメール作成ツールの比較と活用法を解説",
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
          <span className="text-foreground">AIメール作成ツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">メール作成</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIメール作成ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIメール作成ツールを活用すれば、日々のビジネスメール、営業メール、英文メール、返信文作成までを自動化でき、メール業務の時間を大幅に短縮できます。本ガイドでは目的別におすすめのAIツールと、すぐに使える活用テクニックを紹介します。
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
          <h2 className="text-xl font-bold mb-4">ビジネス英語メール力を磨くサービス</h2>
          <p className="text-sm text-muted mb-4">海外取引や英語メール対応が必要な方は、ビジネス英語に強いオンライン英会話で実践力を鍛えましょう。</p>
          <ComparisonTableCTA
            services={[
              { name: "ベストティーチャー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+7QNN6+2ZIK+69HA9", highlight: "Writing×Speaking・ビジネスメール添削に強い", price: "月12,000円〜", badge: "Writing特化" },
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+64JTE", highlight: "ビジネス教材も豊富・受け放題", price: "月6,480円", badge: "受け放題" },
              { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+639IP", highlight: "ビジネスコース・正社員講師", price: "月2,980円〜" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料でAIメール作成は使える？</h3>
              <p className="text-sm text-muted">A. ChatGPT・Claude・Geminiの無料プランでも、通常のビジネスメール作成は十分にこなせます。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 顧客情報をAIに入れても大丈夫？</h3>
              <p className="text-sm text-muted">A. 会社のセキュリティポリシーを必ず確認してください。個人名や取引先名は仮名に置き換える運用がおすすめです。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. そのまま送信しても問題ない？</h3>
              <p className="text-sm text-muted">A. 誤情報や不適切な表現が混ざる可能性があるため、送信前に必ず内容をチェックしてください。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIメール活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span><strong>定型メール</strong>から自動化を始める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>送信前は<strong>人間が最終チェック</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>顧客情報は<strong>仮名・マスキング</strong>で守る</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>英文メールは<strong>翻訳系AI</strong>と組み合わせる</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">メール業務に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
