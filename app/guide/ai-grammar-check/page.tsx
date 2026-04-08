import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI文法チェッカー比較おすすめ5選【2026年最新】英文校正ツール徹底解説",
  description: "Grammarly・ProWritingAid・LanguageTool・QuillBot・ChatGPTなどAI文法チェッカーを徹底比較。無料・有料プランの違いと用途別おすすめを解説します。",
  keywords: ["AI文法チェッカー", "Grammarly", "ProWritingAid", "英文校正", "LanguageTool", "英作文"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-grammar-check` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI文法チェッカー比較5選｜2026年最新", description: "英文校正向けAIを徹底解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI文法チェッカー", item: `${siteConfig.url}/guide/ai-grammar-check` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "GrammarlyとChatGPTどちらが良い？", acceptedAnswer: { "@type": "Answer", text: "リアルタイム校正はGrammarly、構成や論理の改善提案はChatGPTが優れます。両方併用すると効果が高まります。" } },
    { "@type": "Question", name: "無料プランだけでも十分？", acceptedAnswer: { "@type": "Answer", text: "Grammarly無料版は基本的な文法・スペルチェックに対応。学生・日常用途なら無料で十分です。ビジネス・出版用途は有料プランを推奨します。" } },
    { "@type": "Question", name: "日本語には対応していますか？", acceptedAnswer: { "@type": "Answer", text: "英文校正が主流ですが、LanguageToolは多言語対応。日本語のチェックにはChatGPTやClaudeが使えます。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI文法チェッカー</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">言語・翻訳</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI文法チェッカー比較おすすめ5選｜2026年最新</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          英文メール、論文、ビジネス文書の校正に欠かせないAI文法チェッカー。主要5ツールを料金・機能・精度・日本語対応で徹底比較し、用途別の選び方を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AI文法チェッカーの必要性</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>英語ネイティブでなくてもビジネスで通用する英文を書くには、文法とスタイルの両面でのチェックが欠かせません。AI文法チェッカーは単なるスペルチェックを超えて、語彙の自然さ、トーン、冠詞の使い方、句読点まで総合的にサポートしてくれます。</p>
            <p>最新のAIチェッカーは文脈理解も高精度で、フォーマル/インフォーマルの切り替えや、業界別のスタイル調整にも対応しています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">2.</span> おすすめAI文法チェッカー 5選</h2>
          <div className="space-y-4">
            {[
              { name: "Grammarly", badge: "定番No.1", desc: "リアルタイム英文校正の代名詞。ブラウザ拡張・Word連携で執筆中に即座に修正提案。有料版はトーン調整・言い換え機能も充実。" },
              { name: "ProWritingAid", badge: "執筆者向け", desc: "小説・長文執筆に強い。文体分析レポートが詳細で、繰り返し表現や冗長な文を指摘してくれる。" },
              { name: "LanguageTool", badge: "多言語対応", desc: "英語だけでなく30言語以上に対応。オープンソースで自社サーバー運用も可能。" },
              { name: "QuillBot", badge: "パラフレーズ", desc: "言い換えと要約に強み。大学生・研究者の論文執筆でよく使われる。Grammarly Premiumとセット利用も人気。" },
              { name: "ChatGPT", badge: "汎用対応", desc: "文法だけでなく論理構成・読者ターゲット別スタイル調整まで可能。日本語の校正にも対応。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 用途別の選び方</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">ビジネスメール：</span> Grammarly Premium</p>
            <p><span className="font-bold">論文・レポート：</span> ProWritingAid または QuillBot</p>
            <p><span className="font-bold">多言語校正：</span> LanguageTool</p>
            <p><span className="font-bold">構成レベルの改善：</span> ChatGPT / Claude</p>
            <p><span className="font-bold">無料で済ませたい：</span> Grammarly無料版 + LanguageTool</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 活用のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "ブラウザ拡張機能を常駐：Gmail・Slack・Notionで自動校正" },
              { icon: "✅", text: "ゴールを設定する：Grammarlyのゴール設定（読者・トーン・意図）で精度UP" },
              { icon: "✅", text: "2段階チェック：Grammarlyで文法→ChatGPTで構成を順に確認" },
              { icon: "⚠️", text: "提案は機械的に受け入れない：文脈に合わない修正もあるため取捨選択を" },
              { icon: "⚠️", text: "機密文書は有料プランで：無料版はデータ学習される可能性あり" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">英文ライティングと併用したいサービス</h2>
          <ComparisonTableCTA services={[
            { name: "ベストティーチャー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+7QNN6+2ZIK+5YJRM", highlight: "Writing×Speaking特化", price: "月12,000円〜", badge: "おすすめ" },
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "英作文の音読練習に", price: "月6,480円" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師が添削と発音指導", price: "月2,980円〜" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-english-proofreading" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル・学習</div><div className="font-bold text-sm">AI英文校正</div></Link>
            <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル・学習</div><div className="font-bold text-sm">AI英語学習</div></Link>
            <Link href="/guide/ai-multilingual-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">多言語対応AI</div></Link>
            <Link href="/guide/ai-for-japanese-language" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">日本語特化AI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
