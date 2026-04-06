import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  getToolBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export const metadata: Metadata = {
  title: "Jasper vs Copy.ai vs Writesonic vs Catchy vs SAKUBUN AI文章作成ツール比較【2026年最新】",
  description:
    "Jasper・Copy.ai・Writesonic・Catchy・SAKUBUNの人気AI文章作成ツールを料金・機能・日本語品質で徹底比較。AIライティングツールの選び方。",
  keywords: ["AI文章作成", "AIライティング", "AIコピーライティング", "Jasper", "Copy.ai", "Writesonic"],
  alternates: {
    canonical: `${siteConfig.url}/compare/ai-writing`,
  },
  openGraph: {
    title: `AI文章作成ツール比較 | ${siteConfig.name}`,
    description:
      "Jasper・Copy.ai・Writesonic・Catchy・SAKUBUNを徹底比較。",
    url: `${siteConfig.url}/compare/ai-writing`,
  },
};

export default function CompareWritingPage() {
  const jasper = getToolBySlug("jasper")!;
  const copyai = getToolBySlug("copy-ai")!;
  const writesonic = getToolBySlug("writesonic")!;
  const catchy = getToolBySlug("catchy")!;
  const sakubun = getToolBySlug("sakubun")!;
  const compareTools = [jasper, copyai, writesonic, catchy, sakubun];

  const comparisonData = [
    { label: "開発元", values: ["Jasper AI（米国）", "Copy.ai（米国）", "Writesonic（米国）", "Catchy（日本）", "SAKUBUN（日本）"] },
    { label: "無料プラン", values: ["7日間トライアル", "月2,000文字", "月10,000文字", "月3,000文字", "月5,000文字"] },
    { label: "有料プラン", values: ["約7,400円/月〜", "約7,400円/月〜", "約3,000円/月〜", "¥3,000/月〜", "¥9,800/月〜"] },
    { label: "日本語品質", values: ["○ 良好", "○ 良好", "○ 良好", "◎ ネイティブ", "◎ ネイティブ"] },
    { label: "ブログ記事", values: ["◎ 得意", "◎ 得意", "◎ 得意", "◎ 得意", "◎ 得意"] },
    { label: "広告コピー", values: ["◎ 得意", "◎ 得意", "○ 対応", "◎ 得意", "○ 対応"] },
    { label: "SNS投稿", values: ["◎ テンプレ豊富", "◎ テンプレ豊富", "○ 対応", "◎ 日本SNS対応", "○ 対応"] },
    { label: "SEO機能", values: ["◎ Surfer連携", "○ 基本機能", "◎ SEOツール内蔵", "○ 基本機能", "○ 基本機能"] },
    { label: "テンプレート数", values: ["50+", "90+", "100+", "100+（日本語）", "50+（日本語）"] },
    { label: "AIモデル", values: ["GPT-4o / Claude", "GPT-4o", "GPT-4o", "GPT-4o", "GPT-4o / Claude"] },
    { label: "チーム機能", values: ["◎ 充実", "◎ 充実", "○ 基本", "○ 基本", "◎ 充実"] },
    { label: "API提供", values: ["○", "○", "○", "×", "×"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI文章作成ツール比較【2026年最新】Jasper vs Copy.ai vs Writesonic vs Catchy vs SAKUBUN",
    description: "人気AI文章作成ツールを料金・機能で徹底比較。",
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
          <span className="text-foreground">AI文章作成比較</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            AI文章作成ツール
            <br className="md:hidden" />
            <span className="text-primary"> 徹底比較</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            2026年最新のAI文章作成・ライティングツールを料金・機能・日本語品質で徹底比較。ブログ、広告文、SNS投稿に最適なツールが見つかります。
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {compareTools.map((tool) => {
            const badge = getPricingBadge(tool.pricing);
            return (
              <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-6 text-center">
                <span className="text-4xl block mb-3">{tool.icon}</span>
                <h2 className="text-lg font-bold mb-1">{tool.name}</h2>
                <p className="stars mb-2">{renderStars(tool.rating)}</p>
                <span className={`badge-${badge.color} text-sm px-3 py-1 rounded-full`}>{badge.label}</span>
                <p className="text-xs text-primary font-medium mt-3">{tool.pricing}</p>
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
                    <th key={tool.slug} className="text-center min-w-[130px]">
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

        {/* Use cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">用途別おすすめ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📝", title: "ブログ記事作成", tools: "Jasper / Writesonic", desc: "SEO機能が充実。長文コンテンツの構成から執筆まで一気通貫で対応。英語コンテンツにも強い。" },
              { icon: "📣", title: "広告コピー・LP", tools: "Copy.ai / Catchy", desc: "キャッチコピーや広告文の大量生成に最適。テンプレートが豊富でマーケター向き。" },
              { icon: "📱", title: "SNS投稿・短文", tools: "Catchy / Copy.ai", desc: "Twitter、Instagram、LINEなど各SNS向けの投稿文を素早く生成。日本のSNSにはCatchyが最適。" },
            ].map((uc, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-6">
                <p className="text-2xl mb-2">{uc.icon}</p>
                <h3 className="font-bold mb-1">{uc.title}</h3>
                <p className="text-primary font-bold text-sm mb-2">おすすめ: {uc.tools}</p>
                <p className="text-sm text-muted">{uc.desc}</p>
              </div>
            ))}
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
          <h2 className="text-2xl font-bold mb-6 text-center">目的別おすすめAI文章作成ツール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🏆</p>
              <h3 className="font-bold mb-2">総合力で選ぶなら</h3>
              <p className="text-primary font-bold text-lg mb-1">Jasper</p>
              <p className="text-sm text-muted">世界で最も使われているAIライティングツール。SEO、ブログ、広告まで幅広く対応。</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🇯🇵</p>
              <h3 className="font-bold mb-2">日本語重視なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Catchy</p>
              <p className="text-sm text-muted">日本語ネイティブ品質。日本のビジネスシーンに特化したテンプレートが豊富。</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">💰</p>
              <h3 className="font-bold mb-2">コスパ重視なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Writesonic</p>
              <p className="text-sm text-muted">月約3,000円からの低価格帯。SEOツール内蔵で記事量産に向いている。</p>
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
            <Link href="/compare/ai-music"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              🎵 AI音楽生成比較
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
