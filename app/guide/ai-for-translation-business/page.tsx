import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "翻訳業界向けAIツールおすすめ5選【2026年最新】プロ翻訳者が使うべきAI",
  description: "翻訳者・翻訳会社向けのAIツールを徹底比較。CAT連携・機械翻訳+ポストエディット・用語管理など、プロの現場で役立つAI活用法を解説します。",
  keywords: ["翻訳AI", "機械翻訳", "CAT", "ポストエディット", "翻訳者 AI", "DeepL Pro"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-translation-business` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "翻訳業界向けAIツール5選｜2026年最新", description: "翻訳者向けAIを徹底解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "翻訳業界向けAI", item: `${siteConfig.url}/guide/ai-for-translation-business` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIで翻訳者の仕事はなくなりますか？", acceptedAnswer: { "@type": "Answer", text: "完全置換は難しく、MTPE（機械翻訳＋ポストエディット）の需要が拡大しています。AIを使いこなす翻訳者の生産性は3倍以上に向上しており、むしろ仕事の質が変わっています。" } },
    { "@type": "Question", name: "CATツールとAIはどう違う？", acceptedAnswer: { "@type": "Answer", text: "CAT（TradosやmemoQ）は翻訳メモリ管理、AIは生成を担当します。最新のCATはAI統合が進み、両者を組み合わせて使うのが主流です。" } },
    { "@type": "Question", name: "コスト感は？", acceptedAnswer: { "@type": "Answer", text: "個人フリーランスならDeepL Pro 月1,200円＋ChatGPT Plus 月20ドル程度から始められます。法人は案件単価に応じたAPI利用がコスト効率的です。" } },
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
          <span className="text-foreground">翻訳業界向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">業種別</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">翻訳業界向けAIツールおすすめ5選｜2026年最新比較</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          翻訳業界ではAI活用が必須スキルになりつつあります。プロの現場で成果を上げるためのAIツール5選を、CATツール連携・ポストエディット・用語管理の観点から比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 翻訳業界でのAI活用トレンド</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>近年、翻訳業界ではMTPE（機械翻訳＋ポストエディット）が主流になっています。AIの一次翻訳を人間が修正する手法で、翻訳者の作業時間を半減させつつ品質を担保できます。大手LSP（Language Service Provider）はもちろん、個人フリーランスでも導入が急速に進んでいます。</p>
            <p>特許・医療・金融など専門分野の翻訳でも、専門知識を学習したカスタムAIが実用レベルに達しており、人間翻訳者とAIのハイブリッド体制が新しい標準になりつつあります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">2.</span> プロ翻訳者におすすめのAI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "DeepL Pro", badge: "業界標準", desc: "用語集機能・ファイル翻訳・API連携を備えたプロ向けプラン。TradosやmemoQとのアドオンも豊富。" },
              { name: "ChatGPT (GPT-4o)", badge: "ポストエディット", desc: "ポストエディット・スタイル調整・用語統一に最適。長文の自然さ調整に強い。" },
              { name: "Claude 3.5 Sonnet", badge: "長文校正", desc: "論文・契約書など長文の校正と一貫性チェックに優れる。トーンの統一力が高い。" },
              { name: "Memsource (Phrase)", badge: "CAT統合", desc: "AIを統合したクラウド型CAT。翻訳メモリと機械翻訳をシームレスに連携。" },
              { name: "Trados Studio", badge: "定番CAT", desc: "業界定番のCATツール。AI翻訳プラグインで最新LLMと連携可能。" },
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> AI翻訳ワークフロー</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">1. 前処理：</span> 原文の整形と用語集準備</p>
            <p><span className="font-bold">2. 一次翻訳：</span> DeepLまたはChatGPTで下訳</p>
            <p><span className="font-bold">3. ポストエディット：</span> CATツール上で人間が修正</p>
            <p><span className="font-bold">4. 用語統一：</span> Claudeで一貫性チェック</p>
            <p><span className="font-bold">5. 最終QA：</span> 翻訳メモリとの整合性確認</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> プロが知っておくべき注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "NDAを遵守：機密案件はデータ学習オフを必ず確認" },
              { icon: "✅", text: "用語集を資産化：案件ごとのTM/TBを整備して再利用" },
              { icon: "✅", text: "MTPE料金を適正に：単価は通常翻訳の50〜70%が相場" },
              { icon: "⚠️", text: "AI出力を鵜呑みにしない：専門用語の誤訳リスクは残る" },
              { icon: "⚠️", text: "倫理・著作権を意識：クライアントへのAI利用開示を" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">翻訳者のスキルアップにおすすめ</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "英会話力の維持・強化", price: "月6,480円", badge: "おすすめ" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師の丁寧指導", price: "月2,980円〜" },
            { name: "ベストティーチャー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+7QNN6+2ZIK+5YJRM", highlight: "Writing×Speaking独自メソッド", price: "月12,000円〜" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-multilingual-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">多言語対応AI</div></Link>
            <Link href="/guide/ai-for-localization" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">ローカライゼーション</div></Link>
            <Link href="/guide/ai-grammar-check" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">AI文法チェッカー</div></Link>
            <Link href="/guide/ai-for-japanese-language" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">日本語特化AI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
