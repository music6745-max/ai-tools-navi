import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { AffiliateCTAMulti } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "ビジネス向けAIおすすめ10選【2026年最新】徹底比較｜選び方も解説",
  description:
    "業務効率化に使えるビジネス向けAI10選を徹底比較。導入しやすく成果が出るツールの選び方とコツを解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-business`,
  },
};

export default function AIForBusinessPage() {
  const useCases = [
    {
      title: "メール作成・返信",
      icon: "📧",
      description: "取引先へのメール、お詫びメール、お礼メールなど、シーンに合った文面をAIが作成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "「取引先への納期遅延のお詫びメールを書いて」と指示" },
        { name: "Claude", slug: "claude", tip: "長文メールの要約や、複数パターンの文面作成が得意" },
        { name: "Grammarly", slug: "grammarly", tip: "英語メールの文法チェック・トーン調整に最適" },
      ],
    },
    {
      title: "議事録・文字起こし",
      icon: "📝",
      description: "会議の録音から自動で文字起こし・要約・アクションアイテム抽出。",
      tools: [
        { name: "Notta", slug: "notta", tip: "日本語の文字起こし精度が高く、UIも日本語対応" },
        { name: "Otter.ai", slug: "otter-ai", tip: "英語会議に最適。Zoom/Teams/Meet連携あり" },
        { name: "Fireflies.ai", slug: "fireflies", tip: "CRM連携で議事録を自動で営業データに反映" },
      ],
    },
    {
      title: "プレゼン資料作成",
      icon: "📊",
      description: "テーマを伝えるだけでスライド構成・デザイン・コンテンツを自動生成。",
      tools: [
        { name: "Gamma", slug: "gamma", tip: "日本語で指示するだけで美しいスライドを生成" },
        { name: "Tome", slug: "tome", tip: "ストーリーテリング型のプレゼンに強い" },
        { name: "Canva AI", slug: "canva-ai", tip: "豊富なテンプレートとAIデザイン補助" },
      ],
    },
    {
      title: "コンテンツ・記事作成",
      icon: "✍️",
      description: "ブログ記事、SNS投稿、広告コピーなどのコンテンツをAIが作成・改善。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "構成から本文まで一貫して作成可能" },
        { name: "Jasper", slug: "jasper", tip: "マーケティング向けに特化。ブランドボイス対応" },
        { name: "SAKUBUN", slug: "sakubun", tip: "日本語に特化したテンプレートが豊富" },
      ],
    },
    {
      title: "デザイン・画像作成",
      icon: "🎨",
      description: "SNS投稿画像、バナー、ロゴなどをAIがデザイン。専門知識不要。",
      tools: [
        { name: "Canva AI", slug: "canva-ai", tip: "テンプレート＋AIで誰でもプロ品質のデザイン" },
        { name: "Microsoft Designer", slug: "microsoft-designer", tip: "完全無料。SNS投稿に最適" },
        { name: "Napkin AI", slug: "napkin-ai", tip: "テキストから図解・インフォグラフィックを自動生成" },
      ],
    },
    {
      title: "スケジュール・タスク管理",
      icon: "📅",
      description: "会議スケジュールの最適化やタスクの優先順位付けをAIが自動化。",
      tools: [
        { name: "Reclaim.ai", slug: "reclaim-ai", tip: "AIがカレンダーを最適化。バッファタイムも自動設定" },
        { name: "Notion AI", slug: "notion-ai-standalone", tip: "ワークスペース内の情報を横断検索・回答" },
        { name: "Zapier AI", slug: "zapier-ai", tip: "5000+アプリ連携で業務フローを自動化" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ビジネスで使えるAIツール活用術【2026年版】",
    description: "ビジネスの各シーンで使えるAIツールと活用テクニックを紹介",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "ビジネス向けAI", item: `${siteConfig.url}/guide/ai-for-business` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ビジネス向けAIは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "ビジネス向けAIの選び方は？",
        acceptedAnswer: { "@type": "Answer", text: "用途・予算・日本語対応・サポート体制を基準に選ぶのがおすすめです。本記事内で各ツールを比較しています。" },
      },
      {
        "@type": "Question",
        name: "初心者でも使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。多くのツールは登録してすぐに日本語で使えます。専門知識は不要です。" },
      },
    ],
  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">ビジネスAI活用術</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ビジネス</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          ビジネスで使えるAIツール活用術
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールを業務に取り入れることで、作業時間を大幅に削減できます。メール作成、議事録、プレゼン資料、デザインなど、ビジネスの各シーンでおすすめのAIツールと具体的な使い方を紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">ビジネス活用シーン</h2>
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
                <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-4">
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

        {/* Summary */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIツール導入のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>無料プラン</strong>で試してみる</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>日常業務の<strong>繰り返し作業</strong>から導入する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>AIの出力は必ず<strong>人間がチェック</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>チームで<strong>成功事例を共有</strong>して広げる</li>
          </ul>
        </section>

        <AffiliateCTAMulti
          title="AI×ビジネスに役立つクラウド会計ソフト"
          description="AIツールと合わせて、経理・会計業務も効率化しましょう。"
          links={[
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", badge: "定番", description: "確定率91%・シェアNo.1" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", badge: "クラウド", description: "AI自動仕訳・スマホ対応" }
          ]}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">用途に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-for-designers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">デザイナー向けAI</div>
              </Link>
              <Link href="/guide/ai-for-remote-work" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">リモートワーク向けAI</div>
              </Link>
              <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AI議事録</div>
              </Link>
              <Link href="/guide/ai-presentation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AIプレゼン作成</div>
              </Link>
              <Link href="/guide/ai-slide-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AIスライド作成</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
