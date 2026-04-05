import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";

export const metadata: Metadata = {
  title: "【初心者向け】AI動画生成ツールの選び方ガイド【2026年版】",
  description:
    "Sora、Runway、Pika、Kling、HailuoAIなどの人気AI動画生成ツールを徹底比較。初心者でも分かる選び方と用途別おすすめを解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-video-creation`,
  },
};

export default function AIVideoCreationPage() {
  const sora = getToolBySlug("sora")!;
  const runway = getToolBySlug("runway")!;
  const pika = getToolBySlug("pika")!;
  const kling = getToolBySlug("kling")!;
  const hailuo = getToolBySlug("hailuo")!;

  const comparedTools = [
    {
      tool: sora,
      summary: "OpenAI開発の高品質AI動画生成。リアルな映像表現が強み。",
      strengths: ["映像のリアルさが業界トップクラス", "長尺動画の生成が可能", "ChatGPTとの連携で直感的な操作"],
      weaknesses: ["有料プラン（ChatGPT Plus）が必要", "生成に時間がかかる場合がある", "商用利用の条件に注意"],
      bestFor: "リアルな映像コンテンツ、プロモーション動画",
    },
    {
      tool: runway,
      summary: "クリエイター向けの高機能AI動画プラットフォーム。編集機能も充実。",
      strengths: ["動画編集機能が充実", "テキスト・画像からの動画生成", "プロ向けの細かな制御が可能"],
      weaknesses: ["無料プランの制限が厳しい", "高品質生成には有料プランが必要", "学習コストがやや高い"],
      bestFor: "映像クリエイター、SNS動画制作",
    },
    {
      tool: pika,
      summary: "手軽に使えるAI動画生成ツール。初心者でも直感的に操作可能。",
      strengths: ["操作が簡単で初心者向き", "無料プランで試せる", "画像から動画への変換が得意"],
      weaknesses: ["長尺動画の生成は不向き", "細かいスタイル制御が限定的", "商用利用には有料プランが必要"],
      bestFor: "SNSショート動画、アニメーション",
    },
    {
      tool: kling,
      summary: "中国発の高品質AI動画生成。コスパの良さが魅力。",
      strengths: ["高品質な動画をリーズナブルに生成", "長尺動画にも対応", "モーション制御の精度が高い"],
      weaknesses: ["UIが英語/中国語中心", "日本語サポートが限定的", "サービスの安定性にばらつき"],
      bestFor: "コスパ重視の動画制作、プロトタイプ作成",
    },
    {
      tool: hailuo,
      summary: "自然な動きのAI動画生成が特徴。人物の表情や動作のリアルさに定評。",
      strengths: ["人物の動きが自然", "無料で試用可能", "生成速度が比較的速い"],
      weaknesses: ["解像度に上限あり", "細かいカスタマイズが難しい", "商用利用条件の確認が必要"],
      bestFor: "人物が登場する動画、説明動画",
    },
  ];

  const videoTypes = [
    { icon: "🎬", title: "テキストから動画生成（Text-to-Video）", desc: "文章で動画の内容を指示するだけで、AIが映像を自動生成。最も手軽な方法で、SoraやPikaが対応。" },
    { icon: "🖼️", title: "画像から動画生成（Image-to-Video）", desc: "静止画を元にAIが動きを付けて動画化。既存の写真やイラストを動かしたい場合に最適。RunwayやPikaが得意。" },
    { icon: "✂️", title: "AI動画編集", desc: "既存の動画をAIが自動編集。不要部分のカット、字幕追加、エフェクト適用などを自動化。Runwayが充実。" },
    { icon: "🗣️", title: "AIアバター動画", desc: "AIが生成したアバターが指定テキストを読み上げる動画。解説動画や教育コンテンツに最適。HeyGen、Synthesiaが対応。" },
  ];

  const useCases = [
    { icon: "📱", title: "SNSショート動画", desc: "TikTokやYouTube Shortsに投稿する短尺動画。Pikaで手軽に作成可能。", tools: "Pika, Kling" },
    { icon: "📢", title: "商品プロモーション", desc: "ECサイトやSNS広告用のプロモーション映像。Soraの高品質な映像が活躍。", tools: "Sora, Runway" },
    { icon: "📚", title: "教育・解説動画", desc: "チュートリアルや解説コンテンツ。AIアバターとナレーションの組み合わせが効果的。", tools: "HeyGen, Synthesia" },
    { icon: "🎵", title: "ミュージックビデオ", desc: "楽曲に合わせたビジュアル映像。アート性の高いRunwayが適している。", tools: "Runway, Pika" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【初心者向け】AI動画生成ツールの選び方ガイド",
    description: "Sora、Runway、Pika、Kling、HailuoAIなどの人気AI動画生成ツールを徹底比較。初心者向けに選び方を解説。",
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
          <span className="text-foreground">AI動画生成ツールの選び方</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">AI動画</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【初心者向け】AI動画生成ツールの選び方ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI動画生成ツールを使えば、テキストや画像から数分で動画を作成できます。この記事では、初心者でも分かるようにAI動画生成の種類と、人気5ツールの比較、用途別の選び方を解説します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#types" className="text-primary hover:underline">1. AI動画生成の種類</a></li>
            <li><a href="#comparison" className="text-primary hover:underline">2. 人気5ツール徹底比較</a></li>
            <li><a href="#usecases" className="text-primary hover:underline">3. 用途別おすすめツール</a></li>
            <li><a href="#how-to-choose" className="text-primary hover:underline">4. 選び方のポイント</a></li>
            <li><a href="#faq" className="text-primary hover:underline">5. よくある質問</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="types" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AI動画生成の種類
          </h2>
          <p className="text-sm text-muted mb-6">AI動画生成にはいくつかのタイプがあります。それぞれの特徴を理解して、目的に合った方法を選びましょう。</p>

          <div className="space-y-4">
            {videoTypes.map((vt, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{vt.icon}</span>
                  <h3 className="font-bold">{vt.title}</h3>
                </div>
                <p className="text-sm text-muted">{vt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section id="comparison" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> 人気5ツール徹底比較
          </h2>
          <p className="text-sm text-muted mb-6">主要なAI動画生成ツールの特徴・メリット・デメリットを比較します。</p>

          <div className="space-y-8">
            {comparedTools.map((item) => {
              const badge = getPricingBadge(item.tool.pricing);
              return (
                <div key={item.tool.slug} className="bg-card-bg border border-card-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.tool.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold">{item.tool.name}</h3>
                        <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                      </div>
                      <span className="stars text-sm">{renderStars(item.tool.rating)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted mb-4">{item.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-bold text-green-500 mb-2">メリット</p>
                      <ul className="space-y-1">
                        {item.strengths.map((s, i) => (
                          <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                            <span className="text-green-500 mt-0.5">+</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-400 mb-2">デメリット</p>
                      <ul className="space-y-1">
                        {item.weaknesses.map((w, i) => (
                          <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                            <span className="text-red-400 mt-0.5">-</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">おすすめ用途: {item.bestFor}</span>
                    <Link href={`/tools/${item.tool.slug}`} className="text-xs text-primary hover:underline">
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-light rounded-xl p-4 text-sm mt-6">
            <p className="font-bold mb-1">初心者にはPikaがおすすめ！</p>
            <p className="text-muted">操作が直感的で、無料プランで試せます。まずはPikaで動画生成の基本を体験してから、用途に合わせて他のツールを検討しましょう。</p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="usecases" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 用途別おすすめツール
          </h2>
          <div className="space-y-4">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{uc.icon}</span>
                  <h3 className="font-bold">{uc.title}</h3>
                </div>
                <p className="text-sm text-muted mb-2">{uc.desc}</p>
                <p className="text-xs text-primary">おすすめツール: {uc.tools}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="how-to-choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> 選び方のポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "目的を明確にする", desc: "SNS投稿なのか、ビジネス用途なのか。用途によって最適なツールが変わります。" },
              { title: "予算と無料枠を確認", desc: "多くのツールに無料プランがあります。まずは無料で試してから有料を検討しましょう。" },
              { title: "操作の簡単さ", desc: "初心者ならPikaやHailuoAIが直感的。プロ向けの細かい制御が必要ならRunwayがおすすめ。" },
              { title: "出力品質と生成速度", desc: "品質重視ならSora、速度重視ならHailuoAI。用途に応じたバランスを選びましょう。" },
            ].map((tip, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                <p className="text-xs text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> よくある質問
          </h2>
          <div className="space-y-4">
            {[
              { q: "AI動画生成は完全無料で使えますか？", a: "PikaやHailuoAIには無料プランがあります。Soraは有料プラン（ChatGPT Plus）が必要です。Runwayも無料枠がありますが、高品質な生成には有料プランが推奨されます。" },
              { q: "生成した動画は商用利用できますか？", a: "ツールによって条件が異なります。有料プランでは商用利用OKの場合が多いですが、各ツールの利用規約を必ず確認してください。" },
              { q: "どのくらいの長さの動画が作れますか？", a: "現在のAI動画生成は5〜60秒程度が一般的です。Soraは比較的長い動画にも対応していますが、数分の動画は複数クリップの結合が必要です。" },
              { q: "PCのスペックは必要ですか？", a: "クラウドベースのツール（Sora、Runway、Pika等）はブラウザから利用でき、高スペックPCは不要です。" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-2">Q. {item.q}</h3>
                <p className="text-xs text-muted">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AI動画生成ツールを比較してみよう</h2>
          <p className="text-sm text-muted mb-6">あなたの用途にぴったりのツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-video" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              動画生成AI比較表を見る
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
