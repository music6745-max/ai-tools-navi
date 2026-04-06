import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  getToolBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export const metadata: Metadata = {
  title: "Midjourney vs DALL-E vs Stable Diffusion 画像生成AI比較【2026年最新】",
  description:
    "Midjourney・DALL-E 3・Stable Diffusionの3大AI画像生成ツールを品質・料金・使いやすさで徹底比較。",
  alternates: {
    canonical: `${siteConfig.url}/compare/ai-image`,
  },
  openGraph: {
    title: `画像生成AI比較 | ${siteConfig.name}`,
    description:
      "Midjourney・DALL-E 3・Stable Diffusionを徹底比較。",
    url: `${siteConfig.url}/compare/ai-image`,
  },
};

export default function CompareImagePage() {
  const midjourney = getToolBySlug("midjourney")!;
  const dalle = getToolBySlug("dall-e")!;
  const sd = getToolBySlug("stable-diffusion")!;
  const compareTools = [midjourney, dalle, sd];

  const comparisonData = [
    { label: "開発元", values: ["Midjourney Inc.", "OpenAI", "Stability AI"] },
    { label: "料金", values: ["約1,500円/月〜", "ChatGPT Plus 約3,000円/月", "無料（オープンソース）"] },
    { label: "画像品質", values: ["◎ 最高品質", "◎ 高品質", "○ カスタマイズ次第"] },
    { label: "テキスト描画", values: ["○ 改善中", "◎ 優秀", "△ 苦手"] },
    { label: "生成速度", values: ["◎ 高速", "○ 標準", "△ GPU依存"] },
    { label: "スタイル制御", values: ["◎ 非常に得意", "○ 標準", "◎ LoRA等で自由"] },
    { label: "商用利用", values: ["○（有料プラン）", "○", "◎（ライセンス自由）"] },
    { label: "カスタマイズ性", values: ["△ 限定的", "△ 限定的", "◎ 完全に自由"] },
    { label: "日本語プロンプト", values: ["△ 英語推奨", "◎ 日本語OK", "△ 英語推奨"] },
    { label: "利用方法", values: ["Discord / Web", "ChatGPT内", "ローカル / API"] },
    { label: "初心者向け", values: ["○ Discord操作が必要", "◎ ChatGPTで簡単", "△ 環境構築が必要"] },
    { label: "解像度", values: ["最大2048×2048", "最大1024×1024", "制限なし（GPU依存）"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Midjourney vs DALL-E vs Stable Diffusion 画像生成AI比較【2026年最新】",
    description: "3大AI画像生成ツールを品質・料金・使いやすさで徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-primary transition-colors">比較</Link>
          <span>/</span>
          <span className="text-foreground">画像生成AI比較</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Midjourney vs DALL-E vs Stable Diffusion
            <br className="md:hidden" />
            <span className="text-primary"> 徹底比較</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            2026年最新の3大AI画像生成ツールを品質・料金・使いやすさで徹底比較。あなたの用途に最適な画像生成AIが分かります。
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {compareTools.map((tool) => {
            const badge = getPricingBadge(tool.pricing);
            return (
              <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-6 text-center">
                <span className="text-4xl block mb-3">{tool.icon}</span>
                <h2 className="text-xl font-bold mb-1">{tool.name}</h2>
                <p className="stars mb-2">{renderStars(tool.rating)}</p>
                <span className={`badge-${badge.color} text-sm px-3 py-1 rounded-full`}>{badge.label}</span>
                <p className="text-sm text-primary font-medium mt-3">{tool.pricing}</p>
                <Link href={`/tools/${tool.slug}`} className="inline-block mt-4 text-sm text-primary hover:underline">
                  詳細を見る →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">機能・料金 比較表</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left min-w-[140px]">項目</th>
                  {compareTools.map((tool) => (
                    <th key={tool.slug} className="text-center min-w-[180px]">
                      {tool.icon} {tool.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">総合評価</td>
                  {compareTools.map((tool) => (
                    <td key={tool.slug} className="text-center">
                      <span className="stars">{renderStars(tool.rating)}</span>
                      <br />
                      <span className="text-sm text-muted">{tool.rating}/5.0</span>
                    </td>
                  ))}
                </tr>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="text-center text-sm">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">各ツールの特徴</h2>
          {compareTools.map((tool) => (
            <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{tool.icon}</span>
                {tool.name}がおすすめの人
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-success mb-3">メリット</h4>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-success">○</span><span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-danger mb-3">デメリット</h4>
                  <ul className="space-y-2">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-danger">△</span><span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a href={tool.affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">
                  {tool.name}を試す →
                </a>
                <Link href={`/tools/${tool.slug}`}
                  className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:bg-primary-light transition-colors">
                  詳細レビュー
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Recommendation */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">目的別おすすめ画像生成AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🎨</p>
              <h3 className="font-bold mb-2">美しいアート作品なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Midjourney</p>
              <p className="text-sm text-muted">
                圧倒的な画像品質とアーティスティックな表現力。プロのクリエイターにも愛用されています。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">✨</p>
              <h3 className="font-bold mb-2">手軽に始めるなら</h3>
              <p className="text-primary font-bold text-lg mb-1">DALL-E 3</p>
              <p className="text-sm text-muted">
                ChatGPTから日本語で指示するだけ。テキスト描画も得意で、バナーやポスター作成に最適。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🔧</p>
              <h3 className="font-bold mb-2">自由にカスタマイズなら</h3>
              <p className="text-primary font-bold text-lg mb-1">Stable Diffusion</p>
              <p className="text-sm text-muted">
                オープンソースで完全無料。LoRAやControlNetで無限のカスタマイズが可能。
              </p>
            </div>
          </div>
        </section>

        {/* Other comparisons */}
        <section className="text-center">
          <h2 className="text-xl font-bold mb-4">他の比較も見る</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              💬 AIチャット比較
            </Link>
            <Link href="/compare/ai-coding"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              💻 AIコーディング比較
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
