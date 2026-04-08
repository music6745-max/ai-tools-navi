import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "翻訳家・通訳者向けAIツール2026｜業務効率化おすすめ5選",
  description:
    "プロの翻訳家・通訳者が作業効率を上げるAIツールを徹底解説。DeepL・ChatGPT・Claude・Gemini・CATツール連携まで、品質を保ちながらスピードを倍増する方法を紹介。",
  keywords: ["翻訳家 AI", "通訳 AI", "DeepL", "CATツール", "機械翻訳 ポストエディット"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-translators` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "翻訳家・通訳者向けAIツール2026", description: "プロ翻訳者のAI活用術。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "翻訳家向けAI", item: `${siteConfig.url}/guide/ai-for-translators` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIは人間の翻訳家を置き換えますか？", acceptedAnswer: { "@type": "Answer", text: "現状は置き換えではなく共存。特にクリエイティブ翻訳・文脈重視の文章はプロの感性が不可欠です。AIは下訳と調査時間の短縮に使うのが正解です。" } },
    { "@type": "Question", name: "秘密保持契約がある案件でAIを使って大丈夫？", acceptedAnswer: { "@type": "Answer", text: "必ずクライアント確認が必要。法人向けAPIやオプトアウト設定付きプランを使い、機密データの学習利用を防ぐ設定を確認しましょう。" } },
    { "@type": "Question", name: "DeepLとChatGPTどちらが良いですか？", acceptedAnswer: { "@type": "Answer", text: "DeepLは流暢な下訳、ChatGPT／Claudeは文脈や用途を指示できる柔軟性が強み。併用が最強です。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "翻訳家向けAIツール", itemListElement: [{ "@type": "ListItem", position: 1, item: { "@type": "Product", name: "DeepL", url: "https://www.deepl.com/" } }, { "@type": "ListItem", position: 2, item: { "@type": "Product", name: "ChatGPT", url: "https://chat.openai.com/" } }, { "@type": "ListItem", position: 3, item: { "@type": "Product", name: "Claude", url: "https://claude.ai/" } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">翻訳家向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">翻訳</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">翻訳家・通訳者向けAIツール2026｜業務効率化おすすめ5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI翻訳エンジンの進化によって、翻訳家の働き方は大きく変わりました。下訳にAIを使い、ポストエディットと品質管理に集中することで、案件あたりの作業時間を半分以下に短縮することも可能です。本ガイドでは、プロが実務で使えるAI活用法を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. 翻訳家にAIが必要な理由</a></li>
            <li><a href="#tasks" className="text-primary hover:underline">2. AIに任せられる業務</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAIツール5選</a></li>
            <li><a href="#workflow" className="text-primary hover:underline">4. 実務ワークフロー</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 品質管理のコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 翻訳家にAIが必要な理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>従来の翻訳は「ゼロから原文を読み、訳文を一から組み立てる」作業でした。AI翻訳を下訳として活用することで、単純な構文変換に費やしていた時間を、用語選定・ニュアンス調整・自然な表現への磨き上げに充てられます。</p>
            <p>クライアント納期の短縮要求が強まる中、品質を落とさずにスピードを上げるにはAIは必須のツールです。特にIT・医療・法務・特許といった専門分野では用語集を組み込めるCATツール＋AIの組み合わせが主流になっています。</p>
          </div>
        </section>

        <section id="tasks" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIに任せられる業務</h2>
          <div className="bg-primary-light rounded-xl p-5">
            <ul className="space-y-2 text-sm">
              <li>・ドラフト翻訳（下訳生成）</li>
              <li>・専門用語のリサーチ・対訳候補提示</li>
              <li>・スタイルガイドに合わせたトーン調整</li>
              <li>・翻訳メモリ・用語集の整備</li>
              <li>・リライト・校正・数字チェック</li>
              <li>・英語音声の文字起こし（通訳の準備）</li>
            </ul>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">DeepL</h3>
              <p className="text-sm text-muted">流暢さでは定番。専門用語集のインポートも可能なPro版があり、CATツールと連携した翻訳家に人気。</p>
            </div>
            {chatgpt && (<Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"><div className="flex items-center gap-3 mb-2"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div><p className="text-sm text-muted">「ビジネスメール調で」「子供向けに」など細かい指示に応じた柔軟な訳出が可能。用語の由来解説も得意。</p></Link>)}
            {claude && (<Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"><div className="flex items-center gap-3 mb-2"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div><p className="text-sm text-muted">長文翻訳や学術文書で文脈保持力が高い。文体の一貫性を保った訳出が得意。</p></Link>)}
            {gemini && (<Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"><div className="flex items-center gap-3 mb-2"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div><p className="text-sm text-muted">Google検索連携で最新の固有名詞や時事用語の訳に強い。音声認識との連携で通訳下準備にも。</p></Link>)}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Memsource / Phrase TMS</h3>
              <p className="text-sm text-muted">プロ翻訳家向けCATツール。AI翻訳エンジンと用語集・翻訳メモリを統合管理でき、大規模案件の品質を一定に保てる。</p>
            </div>
          </div>
        </section>

        <section id="workflow" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 実務ワークフロー</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted space-y-3">
            <p>1. CATツール＋DeepLで下訳を生成</p>
            <p>2. ChatGPT／Claudeで用途別トーン調整</p>
            <p>3. 専門用語の対訳確認とクライアント指定用語の反映</p>
            <p>4. 人の目で最終チェック＆数字・固有名詞検証</p>
            <p>5. 納品前にAIに再確認プロンプトを投げる</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 品質管理のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "機密案件ではエンタープライズプラン／ローカルLLMを使う" },
              { icon: "✅", text: "用語集・スタイルガイドをプロンプトに含める" },
              { icon: "✅", text: "最終チェックは必ず人間が行う（AI出力は誤訳の可能性あり）" },
              { icon: "⚠️", text: "AIは固有名詞や数字を間違えることがあるため要注意" },
              { icon: "⚠️", text: "クライアントがAI利用を禁止している案件ではルール遵守" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3"><span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">翻訳スキルアップにおすすめ</h2>
          <ComparisonTableCTA services={[{ name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "ネイティブと実践会話", price: "月6,480円" }]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-translation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャット・文章</div><div className="font-bold text-sm">AI翻訳ツール比較</div></Link>
            <Link href="/guide/ai-english-proofreading" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャット・文章</div><div className="font-bold text-sm">AI英文校正</div></Link>
            <Link href="/guide/ai-for-writers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">クリエイティブ</div><div className="font-bold text-sm">ライター向けAI</div></Link>
            <Link href="/guide/ai-transcription" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声・音楽</div><div className="font-bold text-sm">AI文字起こし</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
