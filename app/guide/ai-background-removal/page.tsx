import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "背景除去AIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "写真の背景を一瞬で透過できる背景除去AI7選を徹底比較。remove.bg・Canvaなど主要ツールの精度と選び方を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-background-removal`,
  },
};

export default function AIBackgroundRemovalPage() {
  const useCases = [
    {
      title: "ECサイトの商品写真",
      icon: "🛍️",
      description: "商品画像の背景を一瞬で透過。白背景や統一感のあるカタログを大量に作成可能。",
      tools: [
        { name: "remove.bg", slug: "remove-bg", tip: "ワンクリックで高精度に背景を削除する定番サービス" },
        { name: "Photoroom", slug: "photoroom", tip: "ECサイト向けに背景透過＋商品強調まで一括で処理" },
        { name: "Clipdrop", slug: "clipdrop", tip: "背景除去から画像クリーンアップまでまとめて実施" },
      ],
    },
    {
      title: "人物・ポートレート切り抜き",
      icon: "👤",
      description: "人物写真の髪の毛など細部まで自然に切り抜き。プロフィール写真にも最適。",
      tools: [
        { name: "remove.bg", slug: "remove-bg", tip: "髪の毛の細い部分まで自然に切り抜ける高い精度" },
        { name: "Photoroom", slug: "photoroom", tip: "人物切り抜き後のシャドウ・ライティング調整が便利" },
        { name: "Pixlr", slug: "pixlr", tip: "ブラウザだけで本格レタッチが可能" },
      ],
    },
    {
      title: "SNS用素材作成",
      icon: "📱",
      description: "SNS投稿やバナーに使う素材の背景を素早く透過。テンプレートと組み合わせて時短。",
      tools: [
        { name: "Canva AI", slug: "canva-ai", tip: "背景透過とデザインテンプレートをワンストップで利用" },
        { name: "Microsoft Designer", slug: "microsoft-designer", tip: "AIで背景除去＋自動デザインを生成" },
        { name: "Photoroom", slug: "photoroom", tip: "SNS用テンプレートが豊富で投稿スピードがアップ" },
      ],
    },
    {
      title: "プレゼン・資料用画像",
      icon: "📊",
      description: "プレゼン資料やレポート向けに、背景の不要な要素を消して可読性を向上。",
      tools: [
        { name: "remove.bg", slug: "remove-bg", tip: "資料用画像をワンクリックで透過しスライドに貼付" },
        { name: "Clipdrop", slug: "clipdrop", tip: "背景除去＋不要物消去まで対応" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "生成AIで背景を作り変え、資料の世界観を統一" },
      ],
    },
    {
      title: "動画・配信用素材",
      icon: "🎥",
      description: "動画コンテンツやライブ配信用のグリーンバック代替として、AIで背景を切り抜き。",
      tools: [
        { name: "Runway", slug: "runway", tip: "動画のフレームごとに被写体を高精度マスク" },
        { name: "CapCut", slug: "capcut", tip: "スマホで動画の背景をAI除去して直感的に編集" },
        { name: "Descript", slug: "descript", tip: "ポッドキャスト・動画素材の背景処理に対応" },
      ],
    },
    {
      title: "背景の自動生成・差し替え",
      icon: "🌈",
      description: "背景を消すだけでなく、AIで魅力的な背景を新しく生成して画像のクオリティを向上。",
      tools: [
        { name: "Photoroom", slug: "photoroom", tip: "AIが商品に合った背景シーンを提案して差し替え" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "生成塗りつぶしで背景を自由にデザイン" },
        { name: "Krea AI", slug: "krea-ai", tip: "リアルタイムに背景生成と微調整を繰り返せる" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI背景除去ツール比較ガイド【2026年版】",
    description: "AI背景除去ツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI背景除去", item: `${siteConfig.url}/guide/ai-background-removal` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI背景除去は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI背景除去の選び方は？",
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
          <span className="text-foreground">AI背景除去</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">背景除去</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI背景除去ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ECサイト、SNS、プレゼン資料、動画制作など、画像の背景透過は多くの現場で必要とされる作業です。本ガイドでは、目的別のおすすめAI背景除去ツールと活用テクニックを紹介します。
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
          <h2 className="text-xl font-bold mb-4">画像加工を仕事にしたい方へ</h2>
          <p className="text-sm text-muted mb-4">背景透過などの編集スキルにデザイン・Web制作の知識を組み合わせれば、副業案件の幅が一気に広がります。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料で使えるAI背景除去ツールは？</h3>
              <p className="text-sm text-muted">A. remove.bgやPhotoroomなどは無料枠を提供しています。低解像度であればほぼ無料で十分使えます。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 髪の毛など細かい部分も切り抜けますか？</h3>
              <p className="text-sm text-muted">A. 近年のAIは髪の毛や毛皮など細部の処理も高精度です。背景がシンプルな写真ほど結果が安定します。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 大量の画像を一括処理できますか？</h3>
              <p className="text-sm text-muted">A. PhotoroomやClipdropはバッチ処理に対応しています。EC運営など大量画像処理には有料プランがおすすめです。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI背景除去活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>無料枠</strong>で精度を確認する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>大量処理は<strong>バッチ対応サービス</strong>を選ぶ</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>背景生成と組み合わせて<strong>世界観を統一</strong></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>用途別に<strong>解像度・出力形式</strong>を最適化</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">背景除去に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/category/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AI画像ツール一覧
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
              <Link href="/guide/ai-image-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">画像生成AI</div>
              </Link>
              <Link href="/guide/ai-video-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">動画生成AI</div>
              </Link>
              <Link href="/guide/ai-music-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">AI音楽制作</div>
              </Link>
              <Link href="/guide/ai-voice-cloning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">AI音声クローン</div>
              </Link>
              <Link href="/guide/ai-podcast-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">AIポッドキャスト制作</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
