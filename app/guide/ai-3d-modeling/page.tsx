import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI 3Dモデル生成ツール比較ガイド【2026年版】テキストから3Dを自動生成",
  description:
    "AI 3Dモデル生成ツールを徹底比較。テキスト・画像から3Dモデル生成、ゲーム素材、プロダクトデザイン、メタバース活用まで、おすすめAIツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-3d-modeling`,
  },
};

export default function AI3DModelingPage() {
  const useCases = [
    {
      title: "テキストから3Dモデル生成",
      icon: "🧊",
      description: "テキストプロンプトを入力するだけで、3Dメッシュやアセットを自動生成。アイデアを素早く形にできる。",
      tools: [
        { name: "Luma Dream Machine", slug: "luma-dream-machine", tip: "テキスト・写真から高品質な3Dモデルを生成可能" },
        { name: "Krea AI", slug: "krea-ai", tip: "リアルタイムで3Dシーンのプレビューを確認しながら制作" },
        { name: "Midjourney", slug: "midjourney", tip: "3D化前のコンセプトアート生成に活用" },
      ],
    },
    {
      title: "ゲーム素材・キャラクター制作",
      icon: "🎮",
      description: "ゲーム開発に必要な3Dアセットやキャラクターモデルを効率的に生成。",
      tools: [
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "テクスチャやコンセプトアートを生成して3Dモデルに活用" },
        { name: "Leonardo AI", slug: "leonardo-ai", tip: "ゲーム向けキャラ・武器・背景のコンセプトを高速生成" },
        { name: "Luma Dream Machine", slug: "luma-dream-machine", tip: "実写から3Dアセットへ変換しゲームに転用" },
      ],
    },
    {
      title: "プロダクトデザイン・試作",
      icon: "📐",
      description: "プロダクトや工業デザインの3Dプロトタイプを短時間で生成。試作コストを削減。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "プロダクトのアイデアスケッチを大量に生成" },
        { name: "Krea AI", slug: "krea-ai", tip: "リアルタイム生成でデザイン案を即比較" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "商用利用可能なデザイン素材を安全に生成" },
      ],
    },
    {
      title: "メタバース・VR用アセット",
      icon: "🕶️",
      description: "メタバース空間やVRコンテンツに必要な3Dオブジェクトを効率的に作成。",
      tools: [
        { name: "Luma Dream Machine", slug: "luma-dream-machine", tip: "実空間をスキャンしてメタバース用3D空間を生成" },
        { name: "Runway", slug: "runway", tip: "AI動画と3Dアセットを組み合わせた没入コンテンツ制作" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "VR空間の壁紙・スカイボックスを生成" },
      ],
    },
    {
      title: "建築・空間デザイン",
      icon: "🏛️",
      description: "建築パースや空間デザインのコンセプト3Dを生成。提案資料を高速作成。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "建築コンセプトのビジュアルを高品質に生成" },
        { name: "Leonardo AI", slug: "leonardo-ai", tip: "外観・内観のバリエーションを大量生成" },
        { name: "Krea AI", slug: "krea-ai", tip: "ラフスケッチをリアルタイムで建築パース化" },
      ],
    },
    {
      title: "3Dモデルの編集・後処理",
      icon: "🛠️",
      description: "AIで生成した3Dモデルを実用レベルに整形・最適化。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "BlenderやUnity向けのスクリプトを自動生成して効率化" },
        { name: "Claude", slug: "claude", tip: "3Dワークフローの設計や最適化方針を相談" },
        { name: "GitHub Copilot", slug: "github-copilot", tip: "3Dアセットを扱うコードを補完して開発を高速化" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI 3Dモデル生成ツール比較ガイド【2026年版】",
    description: "AI 3Dモデル生成ツールの比較と活用法を解説",
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
          <span className="text-foreground">AI 3Dモデル生成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">3Dモデル</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI 3Dモデル生成ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ゲーム開発、プロダクトデザイン、メタバース、建築まで、AIによる3Dモデル生成は制作時間を劇的に短縮します。本ガイドでは、目的別のおすすめAI 3Dツールと活用テクニックを紹介します。
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
              <h3 className="font-bold mb-2">Q. AI 3Dモデルはそのままゲームに使えますか？</h3>
              <p className="text-sm text-muted">A. メッシュのリトポロジーやUV調整など後処理が必要なケースが多いですが、コンセプトアートや背景素材としてはすぐに活用できます。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 商用利用する際の注意点は？</h3>
              <p className="text-sm text-muted">A. ツールごとの利用規約を必ず確認しましょう。Adobe Fireflyのように商用利用前提のサービスを使うと安心です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 高スペックPCは必要？</h3>
              <p className="text-sm text-muted">A. クラウド型のサービスなら一般的なPCでも利用可能です。ローカルでStable Diffusionを動かす場合はGPU性能が重要になります。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI 3D活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>コンセプト生成</strong>から導入する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>用途に応じて<strong>クラウド型・ローカル型</strong>を選ぶ</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>後処理ツールと<strong>組み合わせて</strong>完成度を上げる</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>商用利用は<strong>規約確認</strong>を忘れずに</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">3D制作に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/category/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AI画像ツール一覧
            </Link>
            <Link href="/category/ai-video" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI動画ツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
