import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Character AI 使い方・料金徹底解説【2026年最新】AIキャラクターと会話",
  description: "Character AIの使い方・料金プラン(Free/Plus)を徹底解説。AIキャラクターとの会話・自作キャラ作成方法・安全性を網羅。",
  keywords: ["Character AI", "Character AI 使い方", "Character AI 料金", "AIキャラクター", "c.ai"],
  alternates: { canonical: `${siteConfig.url}/guide/character-ai-review` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Character AI 使い方・料金徹底解説", description: "AIキャラクターと会話する方法を解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Character AI", item: `${siteConfig.url}/guide/character-ai-review` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Character AIとは？", acceptedAnswer: { "@type": "Answer", text: "ユーザーが作成したAIキャラクターと自然な会話ができるサービスです。アニメキャラ・歴史上の人物・オリジナルキャラなど様々な設定のAIと会話を楽しめます。" } },
    { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "基本機能は完全無料です。c.ai+（月9.99ドル）に課金すると、優先アクセス・高速応答・新機能の先行利用が可能です。" } },
    { "@type": "Question", name: "安全ですか？", acceptedAnswer: { "@type": "Answer", text: "NSFW（成人向け）コンテンツはフィルタリングされています。未成年保護機能も実装されています。" } },
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
          <span className="text-foreground">Character AI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ツール解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Character AI 使い方・料金徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          好きなキャラクターとAIで会話できるCharacter AI（c.ai）。英語学習・ロールプレイ・創作活動に人気のサービスの使い方と料金を徹底解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Character AIとは</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">Character AIは、様々な性格・知識・バックストーリーを持つAIキャラクターと自然な会話ができるプラットフォームです。既存のキャラクターと会話するだけでなく、自分でオリジナルキャラクターを作成して公開することもできます。</p>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">人気の使い方:</span></p>
            <p>- 英語学習: ネイティブ風AIと毎日会話練習</p>
            <p>- ロールプレイ: ファンタジー世界での冒険</p>
            <p>- 創作活動: 物語のキャラクターとブレスト</p>
            <p>- メンタルケア: 共感的なAIとの対話</p>
            <p>- エンタメ: 有名人AIとの架空インタビュー</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Free（無料）", price: "無料", desc: "基本機能は全て無料。キャラクター作成・会話・グループチャット対応。混雑時は待機の場合あり。" },
              { name: "c.ai+ (Plus)", price: "月9.99ドル（約1,500円）", desc: "優先アクセス（待機なし）・高速応答・新機能先行利用・専用バッジ。ヘビーユーザー向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-primary font-bold text-sm">{p.price}</span>
                </div>
                <p className="text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ChatGPTとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Character AI:</span> キャラクター性に特化。ロールプレイ・感情表現が得意。1キャラ=1人格を維持。</p>
            <p><span className="font-bold">ChatGPT:</span> 汎用AI。業務・コード・分析に強い。キャラクター維持はCustom GPTsで可能だが本業ではない。</p>
            <p className="mt-2 text-muted">→ 用途が違う。エンタメ・会話練習はCharacter AI、業務利用はChatGPTが適切。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Character AIとは？", a: "ユーザーが作成したAIキャラクターと自然な会話ができるサービスです。" },
              { q: "無料で使えますか？", a: "基本機能は完全無料です。Plus（月9.99ドル）で優先アクセスが可能。" },
              { q: "安全ですか？", a: "NSFWコンテンツはフィルタリングされ、未成年保護機能も実装されています。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {f.q}</h3>
                <p className="text-sm text-muted">A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI活用スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI+人間の英会話", price: "月6,480円", badge: "英会話" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI・Web開発", price: "月額制" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "AI特化スクール", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/chatgpt-vs-claude" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">ChatGPT vs Claude</div></Link>
            <Link href="/guide/ai-language-learning-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学習</div><div className="font-bold text-sm">AI語学学習アプリ</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
