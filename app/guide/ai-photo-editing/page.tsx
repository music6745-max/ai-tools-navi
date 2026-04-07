import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI画像編集ツール比較ガイド【2026年版】写真加工を自動化",
  description:
    "AI画像編集ツールを徹底比較。背景削除、画質向上、人物消去、自動補正など、写真加工を効率化するおすすめAI画像編集ツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-photo-editing`,
  },
};

export default function AIPhotoEditingPage() {
  const useCases = [
    {
      title: "背景削除・差し替え",
      icon: "✂️",
      description: "ワンクリックで人物や商品の背景を切り抜き、別の背景に差し替え。EC・SNSに最適。",
      tools: [
        { name: "Canva", slug: "canva", tip: "AI背景削除がワンクリック。商品写真の量産にも対応" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "Photoshopと連携した高精度な背景処理が可能" },
        { name: "Midjourney", slug: "midjourney", tip: "新しい背景イメージを生成して合成する用途にも便利" },
      ],
    },
    {
      title: "画質アップ・高解像度化",
      icon: "🔍",
      description: "低解像度画像をAIが自動で高画質化。古い写真の復元やWeb素材の改善に。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "Photoshopのスーパー解像度で4倍にアップ可能" },
        { name: "Canva", slug: "canva", tip: "AI Image Enhancerで写真をワンクリックで高画質化" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "アップスケーラー拡張で精細な高解像度化を実現" },
      ],
    },
    {
      title: "不要物・人物の消去",
      icon: "🧼",
      description: "写真内の通行人や不要物をAIが自然に消去。プロ品質の仕上がりに。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "生成塗りつぶしで違和感なく不要物を削除" },
        { name: "Canva", slug: "canva", tip: "Magic Eraserで簡単に不要物を消去" },
        { name: "Midjourney", slug: "midjourney", tip: "リペイント機能で部分的に画像を再生成" },
      ],
    },
    {
      title: "自動色補正・レタッチ",
      icon: "🎨",
      description: "明るさ・色味・肌補正をAIが自動で最適化。写真の魅力を引き出す。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "Lightroom AIで一括色補正が可能" },
        { name: "Canva", slug: "canva", tip: "ワンクリックの自動補正で初心者でもプロ品質に" },
        { name: "ChatGPT", slug: "chatgpt", tip: "補正方針をテキストで指示してプロンプトを最適化" },
      ],
    },
    {
      title: "画像の拡張・アウトペイント",
      icon: "🖼️",
      description: "画像の外側をAIが自然に拡張。縦長写真を横長に変えるなど、構図変更に最適。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "生成拡張で違和感ない外側補完を実現" },
        { name: "Midjourney", slug: "midjourney", tip: "Zoom Out機能で構図を自由に拡張" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "アウトペイント拡張でカスタマイズ性が高い" },
      ],
    },
    {
      title: "SNS・EC向け一括加工",
      icon: "📱",
      description: "サイズ変更・透かし追加・テンプレート適用までAIがバッチ処理。",
      tools: [
        { name: "Canva", slug: "canva", tip: "ブランドキットでSNS別サイズに一括書き出し" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "Photoshopアクションで定型加工を自動化" },
        { name: "ChatGPT", slug: "chatgpt", tip: "投稿文・ハッシュタグも併せて自動生成" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI画像編集ツール比較ガイド【2026年版】",
    description: "AI画像編集ツールの比較と活用法",
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
          <span className="text-foreground">AI画像編集ツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">画像編集</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI画像編集ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI画像編集ツールを使えば、これまで専門スキルが必要だったレタッチや背景削除をワンクリックで行えます。本ガイドでは目的別おすすめAI画像編集ツールと、業務に活かすコツを紹介します。
        </p>

        <div className="bg-card-bg dark:bg-pink-900/40 border border-card-border rounded-xl p-6 mb-10">
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
                <div key={tool.slug} className="bg-card-bg dark:bg-pink-900/40 border border-card-border rounded-xl p-4">
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
          <h2 className="text-xl font-bold mb-4">写真編集を仕事につなげたい方へ</h2>
          <p className="text-sm text-muted mb-4">AI編集に加え、デザインやWeb制作スキルを身につけると、撮影＋編集＋納品まで一気通貫で受けられます。</p>
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
            <div className="bg-card-bg dark:bg-pink-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 商用利用しても大丈夫？</h3>
              <p className="text-sm text-muted">A. 各ツールの利用規約を確認の上、商用ライセンスのあるプランで利用しましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-pink-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. PhotoshopとCanvaどちらがいい？</h3>
              <p className="text-sm text-muted">A. プロ用途はAdobe Firefly+Photoshop、手軽さ重視ならCanvaがおすすめです。</p>
            </div>
            <div className="bg-card-bg dark:bg-pink-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 顔写真の編集に注意点は？</h3>
              <p className="text-sm text-muted">A. 本人の同意なく顔を編集・合成することは避けてください。肖像権の侵害になる恐れがあります。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-pink-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI画像編集のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まず<strong>背景削除</strong>と<strong>高画質化</strong>から</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>プロ品質は<strong>Adobe Firefly</strong>を活用</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>SNS量産は<strong>Canva</strong>のテンプレ機能</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>商用利用は<strong>ライセンス確認</strong>を忘れずに</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">画像編集に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              画像生成AI比較
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
