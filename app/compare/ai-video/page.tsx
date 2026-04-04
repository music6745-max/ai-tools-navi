import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  getToolBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export const metadata: Metadata = {
  title: "Sora vs Runway vs Pika AI動画生成比較【2026年最新】",
  description:
    "Sora・Runway・Pikaの3大AI動画生成ツールを品質・料金・使いやすさで徹底比較。最適な動画生成AIが見つかります。",
  alternates: {
    canonical: `${siteConfig.url}/compare/ai-video`,
  },
  openGraph: {
    title: `AI動画生成ツール比較 | ${siteConfig.name}`,
    description: "Sora・Runway・Pikaを徹底比較。",
    url: `${siteConfig.url}/compare/ai-video`,
  },
};

export default function CompareVideoPage() {
  const sora = getToolBySlug("sora")!;
  const runway = getToolBySlug("runway")!;
  const pika = getToolBySlug("pika")!;
  const compareTools = [sora, runway, pika];

  const comparisonData = [
    { label: "開発元", values: ["OpenAI", "Runway", "Pika Labs"] },
    { label: "料金", values: ["ChatGPT Plus $20/月〜", "$12/月〜", "無料プランあり / $8/月〜"] },
    { label: "動画品質", values: ["◎ 最高品質", "◎ プロ品質", "○ 良好"] },
    { label: "最大尺", values: ["20秒", "16秒", "3秒（無料）/ 10秒"] },
    { label: "解像度", values: ["1080p", "4K対応", "1080p"] },
    { label: "生成速度", values: ["△ やや遅い", "○ 標準", "◎ 高速"] },
    { label: "テキスト→動画", values: ["◎", "◎", "◎"] },
    { label: "画像→動画", values: ["◎", "◎", "◎"] },
    { label: "動画→動画", values: ["○", "◎ 多機能", "○"] },
    { label: "カメラ制御", values: ["◎ 精密", "◎ 精密", "○ 基本的"] },
    { label: "物理演算", values: ["◎ 非常にリアル", "○ 良好", "○ 標準"] },
    { label: "初心者向け", values: ["◎ ChatGPTで簡単", "○ エディタ操作必要", "◎ シンプルUI"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sora vs Runway vs Pika AI動画生成比較【2026年最新】",
    description: "3大AI動画生成ツールを品質・料金・使いやすさで徹底比較。",
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
          <span className="text-foreground">AI動画生成比較</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sora vs Runway vs Pika
            <br className="md:hidden" />
            <span className="text-primary"> 徹底比較</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            2026年最新の3大AI動画生成ツールを品質・料金・使いやすさで徹底比較。あなたの動画制作に最適なAIが見つかります。
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
          <h2 className="text-2xl font-bold mb-6 text-center">目的別おすすめAI動画生成ツール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🎬</p>
              <h3 className="font-bold mb-2">最高品質を求めるなら</h3>
              <p className="text-primary font-bold text-lg mb-1">Sora</p>
              <p className="text-sm text-muted">
                OpenAIの最新技術による圧倒的な映像品質。リアルな物理演算と長尺対応が魅力。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🎥</p>
              <h3 className="font-bold mb-2">プロの動画編集なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Runway</p>
              <p className="text-sm text-muted">
                動画編集スイートとしての完成度が高い。既存動画の編集・加工にも強い万能ツール。
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">⚡</p>
              <h3 className="font-bold mb-2">手軽に始めるなら</h3>
              <p className="text-primary font-bold text-lg mb-1">Pika</p>
              <p className="text-sm text-muted">
                無料プランあり、シンプルなUIで初心者でもすぐに動画を生成できる。コスパ重視に。
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
            <Link href="/compare/ai-image"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              🎨 AI画像生成比較
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
