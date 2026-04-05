import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";

export const metadata: Metadata = {
  title: "デザイナー向けAIツール10選｜イラスト・UI・ロゴ制作を効率化【2026年版】",
  description:
    "デザイン業務を効率化するAIツールを厳選紹介。イラスト生成、UI/UXデザイン、ロゴ制作、画像編集まで、デザイナーにおすすめのAIツール10選を徹底解説。",
  keywords: ["AIデザイン", "AI イラスト", "AI ロゴ", "AIデザインツール", "Midjourney", "DALL-E", "Canva AI"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-designers`,
  },
};

export default function AIForDesignersPage() {
  const midjourney = getToolBySlug("midjourney");
  const canvaAi = getToolBySlug("canva-ai");
  const adobeFirefly = getToolBySlug("adobe-firefly");
  const dalle = getToolBySlug("dall-e");
  const stableDiffusion = getToolBySlug("stable-diffusion");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "デザイナー向けAIツール10選｜イラスト・UI・ロゴ制作を効率化【2026年版】",
    description: "デザイン業務を効率化するAIツールを厳選紹介。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
  };

  const toolCards = [
    { tool: midjourney, use: "アート・イラスト制作", desc: "高品質なアート画像の生成に最適。独特の美しいスタイルが特徴。" },
    { tool: canvaAi, use: "SNS画像・バナー制作", desc: "テンプレートとAI機能で、デザインスキルなしでもプロ品質のビジュアルを作成。" },
    { tool: adobeFirefly, use: "写真編集・素材生成", desc: "Adobe製品との連携が強力。商用利用に安心な著作権対応。" },
    { tool: dalle, use: "コンセプトアート・モックアップ", desc: "テキストから多様なスタイルの画像を生成。アイデア出しに最適。" },
    { tool: stableDiffusion, use: "カスタムモデル・大量生成", desc: "オープンソースで自由度が高い。LoRAで独自スタイルの学習も可能。" },
  ].filter(item => item.tool);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">デザイナー向けAIツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">デザイン</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          デザイナー向けAIツール10選｜イラスト・UI・ロゴ制作を効率化
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI画像生成ツールの進化により、デザイン業務が大きく変わりました。コンセプトアートの作成、バナーデザイン、ロゴの試作など、AIツールを活用すれば制作時間を大幅に短縮できます。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. デザイナーがAIを使うべき理由</a></li>
            <li><a href="#image-gen" className="text-primary hover:underline">2. AI画像生成ツール比較</a></li>
            <li><a href="#use-cases" className="text-primary hover:underline">3. 用途別おすすめツール</a></li>
            <li><a href="#workflow" className="text-primary hover:underline">4. AIを組み込んだデザインワークフロー</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. AI活用の注意点とコツ</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> デザイナーがAIを使うべき理由
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIはデザイナーの仕事を奪うものではなく、クリエイティブな作業を加速させるツールです。アイデア出し、モックアップ作成、素材生成などの作業時間を大幅に短縮し、より創造的な部分に集中できるようになります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AI活用で変わるデザイン業務</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10倍速</div>
                <div>コンセプト作成</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">無限</div>
                <div>バリエーション生成</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24時間</div>
                <div>いつでもアイデア出し</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="image-gen" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">2.</span> AI画像生成ツール比較
          </h2>
          <div className="space-y-4">
            {toolCards.map((item, i) => {
              const tool = item.tool!;
              return (
                <Link key={i} href={`/tools/${tool.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{tool.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{tool.name}</h3>
                        <div className="text-xs text-muted">{renderStars(tool.rating)} {tool.rating}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-primary mb-1">{item.use}</p>
                  <p className="text-sm text-muted">{item.desc}</p>
                </Link>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-card-bg">
                  <th className="border border-card-border p-3 text-left">ツール</th>
                  <th className="border border-card-border p-3 text-left">得意分野</th>
                  <th className="border border-card-border p-3 text-left">料金</th>
                  <th className="border border-card-border p-3 text-left">商用利用</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr><td className="border border-card-border p-3">Midjourney</td><td className="border border-card-border p-3">アート・イラスト</td><td className="border border-card-border p-3">$10/月〜</td><td className="border border-card-border p-3">有料プランで可</td></tr>
                <tr><td className="border border-card-border p-3">DALL-E</td><td className="border border-card-border p-3">汎用画像生成</td><td className="border border-card-border p-3">従量課金</td><td className="border border-card-border p-3">可</td></tr>
                <tr><td className="border border-card-border p-3">Adobe Firefly</td><td className="border border-card-border p-3">写真編集・素材</td><td className="border border-card-border p-3">無料枠あり</td><td className="border border-card-border p-3">可（安心）</td></tr>
                <tr><td className="border border-card-border p-3">Canva AI</td><td className="border border-card-border p-3">SNS・バナー</td><td className="border border-card-border p-3">無料プランあり</td><td className="border border-card-border p-3">可</td></tr>
                <tr><td className="border border-card-border p-3">Stable Diffusion</td><td className="border border-card-border p-3">カスタム生成</td><td className="border border-card-border p-3">無料（OSS）</td><td className="border border-card-border p-3">可</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section id="use-cases" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 用途別おすすめツール
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🎨", use: "イラスト・アート", tool: "Midjourney", desc: "独自の美的スタイルで高品質なアート画像を生成" },
              { icon: "📱", use: "UI/UXデザイン", tool: "v0 by Vercel", desc: "プロンプトからUIコンポーネントを自動生成" },
              { icon: "🏷️", use: "ロゴデザイン", tool: "DALL-E + Canva", desc: "AIで候補生成→Canvaで仕上げ" },
              { icon: "📸", use: "写真加工・レタッチ", tool: "Adobe Firefly", desc: "生成塗りつぶし・背景削除・拡張" },
              { icon: "🖼️", use: "SNSバナー・広告", tool: "Canva AI", desc: "テンプレート+AIで効率的にビジュアル制作" },
              { icon: "🎬", use: "モーション・動画", tool: "Runway / Luma AI", desc: "静止画から動画を生成、エフェクト追加" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-sm">{item.use}</h3>
                </div>
                <p className="text-xs text-primary font-medium mb-1">{item.tool}</p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="workflow" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> AIを組み込んだデザインワークフロー
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "ブリーフィング・要件整理", desc: "ChatGPTやClaudeでクライアントの要望を整理し、デザインブリーフを自動生成。" },
              { step: "2", title: "コンセプト・ムードボード作成", desc: "Midjourneyで複数のコンセプト画像を生成し、方向性をクライアントと共有。" },
              { step: "3", title: "デザイン制作", desc: "Canva AI・Adobe Fireflyで素材を生成し、デザインツールで仕上げ。" },
              { step: "4", title: "バリエーション展開", desc: "AIで色違い・レイアウト違いのバリエーションを一括生成。" },
              { step: "5", title: "フィードバック反映", desc: "修正指示をAIプロンプトに反映し、素早くリビジョンを提出。" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">5.</span> AI活用の注意点とコツ
          </h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "AIはあくまでアシスタント。最終的なクリエイティブ判断は人間が行う" },
              { icon: "✅", text: "プロンプトスキルを磨く。具体的な指示ほど高品質な出力が得られる" },
              { icon: "✅", text: "複数ツールを組み合わせる。生成→編集→仕上げの分業が効率的" },
              { icon: "⚠️", text: "著作権に注意。商用利用時はツールの利用規約を必ず確認" },
              { icon: "⚠️", text: "AI生成物をそのまま納品しない。オリジナリティを加えることが重要" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AI画像生成ツールを比較する</h2>
          <p className="text-sm text-muted mb-6">各ツールの料金・機能・品質を詳しく比較</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AI画像生成ツール比較表
            </Link>
            <Link href="/guide/ai-image-generation" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              画像生成ガイドを読む
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
