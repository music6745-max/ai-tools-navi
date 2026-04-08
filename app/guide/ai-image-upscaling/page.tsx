import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "画像高画質化AIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "低解像度画像を高画質化できる画像拡大AI6選を徹底比較。Topaz・Upscaylなど主要ツールの精度と選び方を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-image-upscaling`,
  },
};

export default function AIImageUpscalingPage() {
  const useCases = [
    {
      title: "古い写真の高解像度化",
      icon: "🖼️",
      description: "デジカメ初期の低解像度写真やスキャン画像を、AIで4K・8K相当の高解像度に拡大。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "画像アップロードから高解像度化の流れをワンストップでサポート" },
        { name: "Canva", slug: "canva", tip: "AIマジック拡大でワンクリックに4倍サイズまで引き上げ" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "プロ品質のアップスケールでディテールを保持" },
      ],
    },
    {
      title: "ECサイト用商品画像の高画質化",
      icon: "🛍️",
      description: "ECサイトやLPで使う商品画像を、AIでクリアかつ鮮明に拡大。CVR向上につなげる。",
      tools: [
        { name: "Canva", slug: "canva", tip: "商品写真をワンクリックで高画質化しSNS用素材としても活用" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "ブランドトーンに合わせた色味・質感を保持しながら拡大" },
        { name: "Midjourney", slug: "midjourney", tip: "背景もろとも高解像度で再生成したい時に便利" },
      ],
    },
    {
      title: "イラスト・アートの拡大",
      icon: "🎨",
      description: "AIイラストや手描きイラストを印刷用サイズに拡大。線やタッチの質感を保ったまま大判化。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "アートワークの質感を保ったままポスターサイズへ拡大" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "ControlNetと組み合わせて精細なアップスケールが可能" },
        { name: "Canva", slug: "canva", tip: "SNS用からA1印刷まで幅広いサイズに対応" },
      ],
    },
    {
      title: "動画素材のフレーム拡大",
      icon: "🎬",
      description: "低解像度の動画サムネイル・静止画を4K向けに拡大。YouTube・配信コンテンツに最適。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "サムネイルや動画キービジュアルの高解像度化に強い" },
        { name: "Canva", slug: "canva", tip: "YouTubeサムネイル用サイズに合わせた拡大が手軽" },
        { name: "Midjourney", slug: "midjourney", tip: "動画キービジュアルの再生成＋拡大が同時に可能" },
      ],
    },
    {
      title: "スキャン書類・資料の鮮明化",
      icon: "📄",
      description: "古いスキャン資料・名刺・手書き書類をAIで読みやすく鮮明化。文字のにじみも補正。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "スキャン資料の読み取り・テキスト抽出まで一貫して対応" },
        { name: "Claude", slug: "claude", tip: "長文スキャンの内容整理や要約までまとめて処理" },
        { name: "Gemini", slug: "gemini", tip: "Google Driveのスキャン画像から直接高画質化が可能" },
      ],
    },
    {
      title: "SNSアイコン・プロフィール画像",
      icon: "🧑‍💻",
      description: "低解像度のプロフィール画像をSNSで映えるサイズに拡大。ブランド統一にも活用。",
      tools: [
        { name: "Canva", slug: "canva", tip: "SNSアイコン用の正方形サイズへワンタップで変換" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "顔のディテールを維持したままクリアに拡大" },
        { name: "Midjourney", slug: "midjourney", tip: "アイコン風に再生成＋高解像度化を同時に実現" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI画像拡大ツール比較ガイド【2026年版】",
    description: "AI画像拡大ツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI画像高画質化", item: `${siteConfig.url}/guide/ai-image-upscaling` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI画像高画質化は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI画像高画質化の選び方は？",
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
          <span className="text-foreground">AI画像拡大ツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">画像拡大</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI画像拡大ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          低解像度の写真やイラストを劣化なく高画質化できるのがAIアップスケーラーの強みです。本ガイドでは、写真・イラスト・商品画像・SNSアイコンなど、用途別のおすすめAI画像拡大ツールと活用法を紹介します。
        </p>

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
          <h2 className="text-xl font-bold mb-4">画像編集のスキルを副業・本業に活かす</h2>
          <p className="text-sm text-muted mb-4">高解像度化のテクニックに加え、デザインやWeb制作の基礎を学ぶと、画像案件の単価が大きく伸びます。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 何倍まで拡大できますか？</h3>
              <p className="text-sm text-muted">A. 多くのAIアップスケーラーは4倍〜8倍まで対応しています。元画像の情報量によって最適倍率は変わります。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料で使えるツールはありますか？</h3>
              <p className="text-sm text-muted">A. Canvaや一部AIツールは無料プランでも画像拡大機能を試せます。業務利用では有料プランの方が処理速度と品質が安定します。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 人物写真の顔もきれいに拡大できる？</h3>
              <p className="text-sm text-muted">A. 顔のディテール補正に特化したモードを持つツールが多く、一般的な拡大より自然に仕上がります。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI画像拡大活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>用途に合わせた<strong>最適なツール</strong>を選ぶ</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>元画像は<strong>可能な限り高品質</strong>なものを使用</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>商用利用時は<strong>ライセンス</strong>を必ず確認</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>顔写真は<strong>専用モード</strong>で自然に仕上げる</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">画像拡大に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              画像生成AI比較表
            </Link>
            <Link href="/category/ai-image" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI画像ツール一覧
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
