import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIカスタマーサポート構築ガイド【2026年最新】チャットボット・自動応答おすすめ5選",
  description:
    "AIチャットボット・自動メール返信・ナレッジ検索でカスタマーサポートを効率化する方法を徹底解説。Intercom・Zendesk AIなど主要ツールの選び方も紹介。",
  keywords: ["AI カスタマーサポート", "AI チャットボット", "AI 自動応答", "Intercom AI", "Zendesk AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-customer-support` },
};

export default function Page() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIカスタマーサポート構築ガイド｜チャットボット・自動応答おすすめ5選",
    description: "AIでカスタマーサポートを効率化する方法を徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIカスタマーサポート", item: `${siteConfig.url}/guide/ai-customer-support` },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIチャットボットで人を完全に置き換えられますか？", acceptedAnswer: { "@type": "Answer", text: "FAQの一次対応は8〜9割を自動化できますが、複雑な相談や感情的な対応は人間のオペレーターに引き継ぐハイブリッド運用が理想です。" } },
      { "@type": "Question", name: "ノーコードでAIチャットボットを作れますか？", acceptedAnswer: { "@type": "Answer", text: "Dify・Botpress・MiiboなどのノーコードAIチャットボット構築サービスを使えば、エンジニア不要で公開できます。" } },
      { "@type": "Question", name: "顧客データの取り扱いはどうすれば？", acceptedAnswer: { "@type": "Answer", text: "個人情報を扱う場合は、ISMS認証取得済みの企業向けプランを選ぶか、データを暗号化してから渡す設計にしましょう。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIカスタマーサポート</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ビジネス</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIカスタマーサポート構築ガイド｜チャットボット・自動応答おすすめ5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          問い合わせ対応はビジネスの満足度を左右する重要業務ですが、人手とコストがかかります。AIチャットボット・自動メール返信・ナレッジ検索を活用して、品質を保ちながら効率化する方法を徹底解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. AIチャットボットの基本</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            従来のチャットボットはシナリオ型で、「想定外の質問にはまったく答えられない」という致命的な弱点がありました。生成AIベースのチャットボットは、自社FAQやマニュアルを学習させることで、自然な対話で質問に答えられるようになります。RAG（Retrieval-Augmented Generation）と呼ばれる技術により、ハルシネーション（間違った回答）も大幅に減らせます。導入企業では、問い合わせ全体の70〜80%を自動応答で解決し、人間のオペレーターが対応する件数を1/5以下に削減した事例も報告されています。
          </p>
          <p className="text-sm text-muted leading-relaxed mb-4">
            さらに、24時間365日の応答が可能なため、夜間・休日の問い合わせにも即座に対応できます。顧客満足度の向上と人件費削減の両方を実現できるのがAIチャットボットの最大の魅力です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 自動メール返信</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            メール対応もAIで効率化が可能です。Zendesk AI・Front AI・HelpScoutなどのカスタマーサポートツールには、過去の対応履歴を学習した返信文の下書き生成機能が搭載されています。オペレーターは生成された下書きを確認・微修正するだけで送信できるため、1件あたりの対応時間が半分以下になります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. ナレッジベース検索</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            社内FAQ・マニュアル・過去の対応記録を一元化し、AIで横断検索できる環境を整えることが、効率化の前提条件です。Notion AI・Guru・Slabなどのナレッジ管理ツールを活用すれば、オペレーターは「検索→読解」の時間を大幅に短縮できます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. 感情分析・優先度付け</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            AIは問い合わせ内容から顧客の感情・緊急度を自動判定し、優先順位付けまで行えます。クレーム・解約の兆候を持つ問い合わせを検知して、ベテランオペレーターに優先振り分けすることも可能です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. 導入のステップ</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            まずは「FAQ整備 → ノーコードAIで小規模PoC → 効果検証 → 本格導入」の順序で進めるのが鉄則です。最初から大規模導入を狙うと、データ整備が追いつかず失敗しがちです。月10〜30件程度の問い合わせ自動化から始めて、徐々に範囲を広げましょう。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">おすすめAIカスタマーサポートツール</h2>
          <div className="space-y-3 text-sm">
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><div className="font-bold mb-1">Intercom Fin AI</div><p className="text-muted">業界トップクラスの自動応答精度。エンタープライズ向け。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><div className="font-bold mb-1">Zendesk AI</div><p className="text-muted">既存Zendeskユーザーは即導入可能。多言語対応。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><div className="font-bold mb-1">Dify</div><p className="text-muted">ノーコードでAIチャットボット構築。OSS版あり。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><div className="font-bold mb-1">Miibo</div><p className="text-muted">国産AIチャットボット。日本語対応に強い。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5"><div className="font-bold mb-1">HelpScout AI</div><p className="text-muted">中小規模向けに最適。シンプルで導入しやすい。</p></div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faq.mainEntity.map((q: any) => (
              <div key={q.name} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {q.name}</h3>
                <p className="text-sm text-muted leading-relaxed">A. {q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">事業の経理に役立つツール</h2>
          <ComparisonTableCTA
            services={[
              { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "確定申告・経理の定番", price: "年額制", badge: "定番" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "AI自動仕訳・スマホ対応", price: "月額制" },
              { name: "マネーフォワード クラウド会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "金融機関連携で自動仕訳", price: "月額制" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-customer-service" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">CS</div>
              <div className="font-bold text-sm">AIカスタマーサービス</div>
            </Link>
            <Link href="/guide/ai-chatbot-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">構築</div>
              <div className="font-bold text-sm">AIチャットボット作成</div>
            </Link>
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ビジネス</div>
              <div className="font-bold text-sm">ビジネス向けAI</div>
            </Link>
            <Link href="/guide/ai-no-code-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ノーコード</div>
              <div className="font-bold text-sm">AI×ノーコード</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
