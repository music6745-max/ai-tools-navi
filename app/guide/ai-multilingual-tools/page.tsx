import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "多言語対応AIツールおすすめ5選【2026年最新】徹底比較",
  description: "100言語以上対応のAIツールを徹底比較。ChatGPT・Claude・Gemini・DeepL・Google翻訳の多言語性能・料金・用途別選び方を解説します。",
  keywords: ["多言語AI", "AI翻訳", "DeepL", "Google翻訳", "多言語対応", "グローバル AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-multilingual-tools` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "多言語対応AIツールおすすめ5選｜2026年最新比較", description: "100言語以上対応のAIツールを徹底解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "多言語AI", item: `${siteConfig.url}/guide/ai-multilingual-tools` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "DeepLとChatGPTどちらの翻訳が正確？", acceptedAnswer: { "@type": "Answer", text: "ビジネス文書の直訳ではDeepLが自然、文脈を踏まえた意訳や要約はChatGPTが優れます。用途で使い分けるのがおすすめです。" } },
    { "@type": "Question", name: "マイナー言語にも対応していますか？", acceptedAnswer: { "@type": "Answer", text: "Google翻訳は100以上の言語に対応。ChatGPTとClaudeは主要50言語程度ですが日本語から東南アジア言語の精度も高水準です。" } },
    { "@type": "Question", name: "料金はどれくらい？", acceptedAnswer: { "@type": "Answer", text: "DeepL Proは月1,200円〜、ChatGPT Plusは月20ドル。企業利用ではAPI従量課金が一般的です。" } },
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
          <span className="text-foreground">多言語対応AI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">言語・翻訳</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">多言語対応AIツールおすすめ5選｜2026年最新比較</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          グローバルビジネスや海外展開に欠かせない多言語AI。100言語以上に対応し、瞬時に高品質な翻訳・通訳を実現するツールの進化は目覚ましいものがあります。本記事では主要5ツールを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜ多言語AIが必須なのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>オンライン会議やメールのやり取りが国境を越える今、多言語対応はビジネスの基本スキルです。AIツールを活用すれば、翻訳者に依頼するより圧倒的に速く、かつリアルタイムに多言語コミュニケーションが可能になります。海外ECや越境SaaSビジネスでも必須です。</p>
            <p>さらに、最新の多言語AIは文脈を理解した意訳が可能なため、直訳では伝わらない微妙なニュアンスも自然な表現に変換できます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">2.</span> おすすめ多言語AI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "DeepL", badge: "翻訳精度No.1", desc: "ヨーロッパ言語の翻訳精度が業界トップ。ビジネス文書や契約書翻訳に最適。ファイル翻訳機能も強力。" },
              { name: "ChatGPT (GPT-4o)", badge: "汎用万能", desc: "50以上の言語で自然な会話・翻訳が可能。音声モードで多言語会話の練習にも使える。" },
              { name: "Claude 3.5 Sonnet", badge: "長文に強い", desc: "長文の多言語翻訳と要約に優れ、論文や契約書の英日翻訳で高評価。" },
              { name: "Gemini", badge: "Google連携", desc: "Google翻訳エンジンと連携し、100言語以上に対応。Workspaceとの統合が便利。" },
              { name: "Google翻訳", badge: "言語数最多", desc: "100以上の言語に対応した無料ツール。カメラ翻訳・音声翻訳など機能が豊富。" },
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
            <p><span className="font-bold">ビジネス文書翻訳：</span> DeepL Proが定番</p>
            <p><span className="font-bold">会話・通訳：</span> ChatGPT音声モード</p>
            <p><span className="font-bold">長文研究資料：</span> Claudeが安定</p>
            <p><span className="font-bold">社内メール・資料統合：</span> Gemini + Google Workspace</p>
            <p><span className="font-bold">マイナー言語・旅行：</span> Google翻訳</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 活用のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "専門用語を事前登録：DeepLの用語集機能で訳のブレを防ぐ" },
              { icon: "✅", text: "二段翻訳チェック：AI A→AI Bで逆翻訳して意味のズレを確認" },
              { icon: "✅", text: "文体を指定：「ビジネスフォーマル」「カジュアル」など明示" },
              { icon: "⚠️", text: "機密情報は法人プラン限定：データ保護を必ず確認" },
              { icon: "⚠️", text: "最終チェックは人間が実施：契約書・法的文書は専門家に" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">多言語学習におすすめのサービス</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "多国籍講師と24時間レッスン", price: "月6,480円", badge: "おすすめ" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師の丁寧な指導", price: "月2,980円〜" },
            { name: "LanCul", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+5YCTU+4FL0+HV7V6", highlight: "多言語で話し放題", price: "月1,100円〜", badge: "最安値" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-japanese-language" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">日本語特化AI</div></Link>
            <Link href="/guide/ai-for-translation-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">翻訳業界向けAI</div></Link>
            <Link href="/guide/ai-for-localization" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">ローカライゼーション</div></Link>
            <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル・学習</div><div className="font-bold text-sm">AI英語学習</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
