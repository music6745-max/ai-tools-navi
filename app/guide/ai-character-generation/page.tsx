import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "キャラクター生成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "オリジナルキャラクターをAIで作成できるツール6選を徹底比較。イラスト系・3D系まで主要ツールの特徴と選び方を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-character-generation`,
  },
};

export default function AICharacterGenerationPage() {
  const useCases = [
    {
      title: "オリジナルキャラクターのデザイン",
      icon: "🧝",
      description: "プロンプトから世界観・服装・髪型などを指定し、オリジナルキャラクターを一瞬で生成。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "高品質なファンタジー系キャラに強く、多彩なアートスタイルに対応" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "LoRAを組み合わせて自分だけのキャラスタイルを固定化できる" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "商用利用OKで安心。ブランドキャラ制作に便利" },
      ],
    },
    {
      title: "VTuber・バーチャルアイコン",
      icon: "🎭",
      description: "VTuberやバーチャル配信者向けのキャラを生成。動画・配信のブランディングに最適。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "アニメ調・イラスト調のVTuberキャラを高品質で生成" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "特定のキャラを安定的に生成しやすくモデル運用に向く" },
        { name: "Canva", slug: "canva", tip: "生成したキャラをサムネイルや配信素材に展開" },
      ],
    },
    {
      title: "ゲーム用キャラ・NPC素材",
      icon: "🎮",
      description: "インディーゲームやボードゲーム用のNPC・キャラ素材をAIで量産。開発速度を大幅短縮。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "世界観に沿ったキャラデザインを複数案同時に生成" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "統一感のあるキャラ群をバッチ生成するのに最適" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "商用ゲームにも使いやすいライセンスで安心" },
      ],
    },
    {
      title: "設定資料・三面図の作成",
      icon: "📐",
      description: "キャラクターの三面図や表情差分をAIで生成。同人誌・ゲーム開発・漫画制作に。",
      tools: [
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "ControlNetでポーズ・表情を維持した三面図を生成可能" },
        { name: "Midjourney", slug: "midjourney", tip: "複数表情を同時に出力しキャラ設定シートを効率化" },
        { name: "ChatGPT", slug: "chatgpt", tip: "キャラの背景設定・セリフ生成までまとめてサポート" },
      ],
    },
    {
      title: "SNS・ブランドキャラ作成",
      icon: "📣",
      description: "企業アカウントやショップのマスコットキャラをAIで作成。ブランドアイデンティティに活用。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "商用OKで企業マスコットに最適なスタイルで生成" },
        { name: "Canva", slug: "canva", tip: "生成キャラをそのままSNS投稿テンプレートに流用可能" },
        { name: "Midjourney", slug: "midjourney", tip: "世界観にフィットする独自タッチのキャラを提案" },
      ],
    },
    {
      title: "キャラ設定・ストーリーの生成",
      icon: "📖",
      description: "キャラクターの名前・性格・背景設定・口調までAIで自動生成。創作の時短に。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "詳細なキャラクターシートを瞬時に作成" },
        { name: "Claude", slug: "claude", tip: "長編ストーリーでのキャラ設定の一貫性を維持" },
        { name: "Gemini", slug: "gemini", tip: "Web情報と連動して実在感のある設定を補助" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIキャラクター生成ツール比較ガイド【2026年版】",
    description: "AIキャラクター生成ツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIキャラクター生成", item: `${siteConfig.url}/guide/ai-character-generation` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AIキャラクター生成は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AIキャラクター生成の選び方は？",
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
          <span className="text-foreground">AIキャラクター生成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">キャラ生成</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIキャラクター生成ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          オリジナルキャラクターの制作はAIで劇的に効率化できます。本ガイドでは、VTuber、ゲーム素材、ブランドマスコットまで、用途別のおすすめAIキャラクター生成ツールと活用テクニックを紹介します。
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
          <h2 className="text-xl font-bold mb-4">キャラクター制作を仕事につなげたい方へ</h2>
          <p className="text-sm text-muted mb-4">AI生成と組み合わせるデザイン・Web制作の体系的なスキルがあれば、案件の幅と単価がぐっと上がります。</p>
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
              <h3 className="font-bold mb-2">Q. 商用利用できるAIキャラ生成ツールは？</h3>
              <p className="text-sm text-muted">A. Adobe Fireflyは学習データがクリアで商用利用に向きます。その他のツールも有料プランでは商用利用可能なケースが多いです。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 同じキャラを安定して出すコツは？</h3>
              <p className="text-sm text-muted">A. Stable DiffusionのLoRAやMidjourneyのキャラクター参照機能を使うと、特定のキャラを安定生成できます。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 既存キャラを真似してもいい？</h3>
              <p className="text-sm text-muted">A. 既存作品のキャラや作家のスタイルを模倣した生成は著作権の問題が発生します。必ずオリジナル要素を組み合わせましょう。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIキャラ生成のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>用途に応じた<strong>最適なツール</strong>を選ぶ</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>商用利用時は<strong>ライセンス</strong>を必ず確認</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>キャラの一貫性には<strong>参照機能やLoRA</strong>を活用</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>設定とビジュアルは<strong>AI同士で連携</strong>させる</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">キャラクター生成に合ったAIツールを見つけましょう</p>
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
