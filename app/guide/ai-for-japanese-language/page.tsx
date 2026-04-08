import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "日本語特化AIツールおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description: "日本語の敬語・ビジネス文書・翻訳精度に優れた日本語特化AIツールを徹底比較。ChatGPT・Claude・Gemini・ELYZA・Sakana AIの5ツールを用途別に解説します。",
  keywords: ["日本語AI", "日本語特化AI", "ELYZA", "日本語LLM", "AI敬語", "AIビジネス日本語"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-japanese-language` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "日本語特化AIツールおすすめ5選｜2026年最新比較", description: "日本語処理に優れたAIツールを徹底解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "日本語特化AI", item: `${siteConfig.url}/guide/ai-for-japanese-language` } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "日本語特化AIと汎用AIの違いは？", acceptedAnswer: { "@type": "Answer", text: "日本語特化AIは日本語のニュアンス・敬語・慣用表現に強く、ビジネス文書や翻訳の自然さで汎用AIを上回ることがあります。ELYZAやSakana AIは日本企業・日本文化に特化したチューニングが施されています。" } },
    { "@type": "Question", name: "無料で使える日本語AIはありますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPTの無料プラン、Claudeの無料枠、Geminiの無料版はいずれも日本語に対応しています。ELYZAもデモ版が無料で試せます。" } },
    { "@type": "Question", name: "ビジネスで使う際の注意点は？", acceptedAnswer: { "@type": "Answer", text: "機密情報を学習データに使われないAPI版や法人契約の利用をおすすめします。Claude・ChatGPT・Geminiはいずれも法人プランでデータ学習オフオプションがあります。" } },
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
          <span className="text-foreground">日本語特化AI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">言語・翻訳</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">日本語特化AIツールおすすめ5選｜2026年最新比較ガイド</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          日本語のニュアンス、敬語、ビジネス文書の自然さを重視するなら、汎用AIではなく日本語特化AIの検討が欠かせません。本記事では国内外の主要5ツールを徹底比較し、用途別の選び方を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜ日本語特化AIが必要か</a></li>
            <li><a href="#tools" className="text-primary hover:underline">2. おすすめ日本語対応AI 5選</a></li>
            <li><a href="#usecases" className="text-primary hover:underline">3. 用途別の選び方</a></li>
            <li><a href="#tips" className="text-primary hover:underline">4. 使いこなしのコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜ日本語特化AIが必要か</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>汎用AIは英語データで学習されているものが多く、日本語特有の敬語階層、主語省略、行間を読む表現、業界用語などで不自然さが出ることがあります。日本語特化AIは国内文書の学習比率が高く、ビジネスメールや契約書、接客フレーズの生成で優位性を発揮します。</p>
            <p>特に、官公庁や大企業の社内文書、接客業での応対スクリプトなど、形式の正しさが問われる場面では日本語特化モデルの利用が増えています。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">2.</span> おすすめ日本語対応AI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "ChatGPT (GPT-4o)", badge: "総合力No.1", desc: "日本語の自然さと知識量のバランスが最も優れています。ビジネス文書・翻訳・要約など汎用用途に最適。音声モードも日本語対応。" },
              { name: "Claude 3.5 Sonnet", badge: "丁寧な日本語", desc: "論理的で丁寧な日本語文章を生成。長文読解・要約・文書作成に強く、敬語表現の正確さに定評があります。" },
              { name: "Gemini", badge: "検索連携強", desc: "Google検索と連携して最新の日本語情報を反映。ドキュメントやスプレッドシートと連動したオフィス用途に強い。" },
              { name: "ELYZA LLM", badge: "日本語特化国産", desc: "日本のELYZA社が開発した国産LLM。日本語のニュアンス理解・国内法令対応に優れ、セキュアな業務利用に向く。" },
              { name: "Sakana AI Evoモデル", badge: "和風文化対応", desc: "日本文化・俳句・古文にも対応する進化的AI。クリエイティブな和文生成が可能。" },
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

        <section id="usecases" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 用途別の選び方</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">ビジネスメール・敬語：</span> Claudeが最も自然で丁寧。</p>
            <p><span className="font-bold">長文要約・報告書：</span> ChatGPT GPT-4oが安定。</p>
            <p><span className="font-bold">検索型リサーチ：</span> Geminiの最新情報連携が便利。</p>
            <p><span className="font-bold">社内セキュア運用：</span> ELYZAの法人プラン。</p>
            <p><span className="font-bold">クリエイティブ・和文：</span> Sakana AIの独自性。</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 使いこなしのコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "敬語のレベルを指定する：「クライアント向け丁寧な敬語で」と明示すると精度が上がります" },
              { icon: "✅", text: "業界固有の用語辞書を与える：用語一覧を最初に提示しておくと誤訳を防げます" },
              { icon: "✅", text: "文字数や構成を具体的に指示：『300字以内』『結論→理由→事例』など明確に" },
              { icon: "⚠️", text: "機密情報は無料版に入れない：法人契約か社内ELYZAを利用" },
              { icon: "⚠️", text: "AI出力は必ず人間が校正：重要文書は複数人でレビュー" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">日本語学習・翻訳におすすめのサービス</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "日本語講師も選べるオンライン英会話", price: "月6,480円", badge: "おすすめ" },
            { name: "NOVA ライブステーション", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE", highlight: "日本語サポート付きLIVE英会話", price: "月額980円〜" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師による丁寧な指導", price: "月2,980円〜" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-multilingual-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">多言語対応AIツール比較</div></Link>
            <Link href="/guide/ai-for-translation-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">翻訳業界向けAI</div></Link>
            <Link href="/guide/ai-grammar-check" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">AI文法チェッカー比較</div></Link>
            <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル・学習</div><div className="font-bold text-sm">AI英語学習</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
