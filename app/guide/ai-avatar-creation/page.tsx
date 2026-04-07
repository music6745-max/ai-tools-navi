import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AIアバター作成ツール比較ガイド【2026年版】動画・SNS用アバターを自動生成",
  description:
    "AIアバター作成ツールを徹底比較。動画用アバター、SNSアイコン、バーチャルプレゼンター、自社キャラクター生成など、用途別おすすめツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-avatar-creation`,
  },
};

export default function AIAvatarCreationPage() {
  const useCases = [
    {
      title: "動画用バーチャルプレゼンター",
      icon: "🎥",
      description: "テキストを入力するだけで、リアルな人物アバターが話す動画を生成。研修動画や説明動画に最適。",
      tools: [
        { name: "Synthesia", slug: "synthesia", tip: "140言語以上に対応した本格的なAIアバター動画生成サービス" },
        { name: "HeyGen", slug: "heygen", tip: "自分の顔を学習させたカスタムアバターを作成可能" },
        { name: "D-ID", slug: "d-id", tip: "1枚の写真から話すアバター動画を瞬時に生成" },
      ],
    },
    {
      title: "SNSアイコン・プロフィール画像",
      icon: "📸",
      description: "プロフィール用の高品質なAIアバターを生成。ブランディングや匿名運用にも便利。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "アート性の高いプロフィールアイコンを生成。独自スタイルを表現" },
        { name: "Leonardo AI", slug: "leonardo-ai", tip: "リアル系・アニメ系を切り替えて好みのアバターを作成" },
        { name: "Canva AI", slug: "canva-ai", tip: "テンプレートと組み合わせてSNSアイコンを簡単デザイン" },
      ],
    },
    {
      title: "VTuber・キャラクターアバター",
      icon: "🎭",
      description: "オリジナルキャラクターのアバターを生成。VTuber活動や自社マスコット作成に活用。",
      tools: [
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "LoRAを使えば一貫性のあるオリジナルキャラを生成可能" },
        { name: "Midjourney Niji", slug: "midjourney-niji", tip: "アニメ調キャラクターの描写に特化したモデル" },
        { name: "Character AI", slug: "character-ai", tip: "性格設定まで作り込めるAIキャラクターを構築" },
      ],
    },
    {
      title: "営業・採用動画用アバター",
      icon: "💼",
      description: "営業ピッチや採用動画を多言語対応のAIアバターで効率作成。撮影コストを大幅削減。",
      tools: [
        { name: "Synthesia", slug: "synthesia", tip: "営業資料を動画化し、顧客ごとにパーソナライズ" },
        { name: "HeyGen", slug: "heygen", tip: "1度の収録から多言語アバター動画を量産" },
        { name: "ChatGPT", slug: "chatgpt", tip: "アバター動画用の台本を一括生成" },
      ],
    },
    {
      title: "アバターの動き・表情制御",
      icon: "🎨",
      description: "AIアバターの動きや感情表現を自然に演出。視聴者の印象を高める。",
      tools: [
        { name: "HeyGen", slug: "heygen", tip: "ジェスチャーや表情をプリセットで簡単制御" },
        { name: "D-ID", slug: "d-id", tip: "写真から自然な口パクと表情を自動生成" },
        { name: "Runway", slug: "runway", tip: "モーションキャプチャ風の動きをAIで付与" },
      ],
    },
    {
      title: "アバター動画の編集・公開",
      icon: "✂️",
      description: "生成したアバター動画を編集してSNS・YouTubeで公開。視聴者層に合わせて最適化。",
      tools: [
        { name: "CapCut", slug: "capcut", tip: "AIアバター動画にBGM・字幕を追加してSNS用に編集" },
        { name: "Descript", slug: "descript", tip: "テキスト編集でアバター動画を直感的にカット" },
        { name: "Opus Clip", slug: "opus-clip", tip: "長尺アバター動画から短尺バズクリップを自動生成" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIアバター作成ツール比較ガイド【2026年版】",
    description: "AIアバター作成ツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIアバター作成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">アバター作成</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIアバター作成ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          動画用バーチャルプレゼンターからSNSアイコン、VTuberキャラまで、AIアバター生成の用途は急拡大しています。本ガイドでは、目的別のおすすめAIアバター作成ツールと、現場で役立つ活用テクニックを紹介します。
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

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料で使えるAIアバター作成ツールはありますか？</h3>
              <p className="text-sm text-muted">A. CanvaやLeonardo AIの無料プラン、Stable Diffusionなら無料でアバター画像を生成できます。動画アバターはHeyGenやD-IDの無料枠から試すのがおすすめです。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 自分の顔を学習させても安全？</h3>
              <p className="text-sm text-muted">A. 商用ツールの多くは肖像権・利用ポリシーを設けています。利用規約を必ず確認し、第三者の写真を無断で学習させないよう注意してください。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 商用利用は可能ですか？</h3>
              <p className="text-sm text-muted">A. 多くの有料プランで商用利用が許可されています。ただしツールごとにクレジット表記の要否やNG用途が異なるため、各サービスの規約を確認しましょう。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIアバター活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>用途に合わせて<strong>動画系・画像系</strong>を使い分ける</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>肖像権・著作権の<strong>規約確認</strong>を徹底</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>多言語化で<strong>グローバル展開</strong>を視野に</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>編集ツールと組み合わせて<strong>完成度を高める</strong></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">アバター作成に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/category/ai-video" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AI動画ツール一覧
            </Link>
            <Link href="/category/ai-image" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI画像ツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
