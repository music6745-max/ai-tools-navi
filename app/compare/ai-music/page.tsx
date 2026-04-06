import Link from "next/link";
import type { Metadata } from "next";
import {
  siteConfig,
  getToolBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export const metadata: Metadata = {
  title: "Suno vs Udio vs AIVA vs SOUNDRAW AI音楽生成ツール比較【2026年最新】",
  description:
    "Suno・Udio・AIVA・SOUNDRAWの人気AI音楽生成ツールを料金・機能・音質で徹底比較。AI作曲・音楽生成AIの選び方ガイド。",
  keywords: ["AI音楽", "AI作曲", "音楽生成AI", "Suno", "Udio", "AIVA", "SOUNDRAW"],
  alternates: {
    canonical: `${siteConfig.url}/compare/ai-music`,
  },
  openGraph: {
    title: `AI音楽生成ツール比較 | ${siteConfig.name}`,
    description:
      "Suno・Udio・AIVA・SOUNDRAWを料金・機能・音質で徹底比較。",
    url: `${siteConfig.url}/compare/ai-music`,
  },
};

export default function CompareMusicPage() {
  const suno = getToolBySlug("suno")!;
  const udio = getToolBySlug("udio")!;
  const aiva = getToolBySlug("aiva")!;
  const soundraw = getToolBySlug("soundraw")!;
  const compareTools = [suno, udio, aiva, soundraw];

  const comparisonData = [
    { label: "開発元", values: ["Suno Inc.", "Udio (元Google研究者)", "AIVA Technologies", "SOUNDRAW（日本）"] },
    { label: "料金（無料）", values: ["1日5曲まで", "月10曲まで", "月3曲まで", "無料プランなし"] },
    { label: "有料プラン", values: ["約1,500円/月〜", "約1,500円/月〜", "約2,300円/月〜", "約2,500円/月〜"] },
    { label: "歌詞付き楽曲", values: ["◎ 得意", "◎ 得意", "× 不可", "× 不可"] },
    { label: "インスト曲", values: ["○", "○", "◎ 得意", "◎ 得意"] },
    { label: "音楽ジャンル", values: ["幅広い", "幅広い", "クラシック中心", "BGM・商用向け"] },
    { label: "音質", values: ["◎ 高品質", "◎ 非常に高品質", "◎ 高品質", "○ 良好"] },
    { label: "カスタマイズ性", values: ["○ プロンプト", "○ プロンプト", "◎ 細かい設定", "◎ ジャンル・楽器選択"] },
    { label: "商用利用", values: ["有料プランで可", "有料プランで可", "有料プランで可", "全プランで可"] },
    { label: "日本語対応", values: ["○ 歌詞対応", "○ 歌詞対応", "△ UI英語", "◎ 日本発"] },
    { label: "生成速度", values: ["◎ 速い", "○ 普通", "○ 普通", "◎ 速い"] },
    { label: "API提供", values: ["×", "×", "○", "○"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI音楽生成ツール比較【2026年最新】Suno vs Udio vs AIVA vs SOUNDRAW",
    description: "人気AI音楽生成ツールを料金・機能・音質で徹底比較。",
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
          <span className="text-foreground">AI音楽生成比較</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Suno vs Udio vs AIVA vs SOUNDRAW
            <br className="md:hidden" />
            <span className="text-primary"> 徹底比較</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            2026年最新のAI音楽生成ツールを料金・機能・音質で徹底比較。あなたの用途に最適なAI作曲ツールが見つかります。
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    <th key={tool.slug} className="text-center min-w-[150px]">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🎤", title: "歌モノ・ポップス制作", tool: "Suno", desc: "歌詞付きの楽曲を手軽に生成。ポップス、ロック、R&Bなど幅広いジャンルに対応。" },
              { icon: "🎧", title: "高音質な音楽制作", tool: "Udio", desc: "音質にこだわるなら最有力。元Google DeepMind研究者が開発した高品質AI。" },
              { icon: "🎬", title: "映画・ゲーム向けBGM", tool: "AIVA", desc: "クラシック調の壮大な楽曲に強い。映画・ゲーム・広告のBGMに最適。" },
              { icon: "📺", title: "YouTube・SNS向けBGM", tool: "SOUNDRAW", desc: "日本発で商用利用しやすい。YouTube動画やSNSコンテンツのBGMに最適。" },
            ].map((uc, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-6">
                <p className="text-2xl mb-2">{uc.icon}</p>
                <h3 className="font-bold mb-1">{uc.title}</h3>
                <p className="text-primary font-bold text-sm mb-2">おすすめ: {uc.tool}</p>
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
          <h2 className="text-2xl font-bold mb-6 text-center">目的別おすすめAI音楽ツール</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🏆</p>
              <h3 className="font-bold mb-2">初心者なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Suno</p>
              <p className="text-sm text-muted">最も手軽で直感的。テキスト入力だけで歌詞付きの楽曲を生成。</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🎵</p>
              <h3 className="font-bold mb-2">音質重視なら</h3>
              <p className="text-primary font-bold text-lg mb-1">Udio</p>
              <p className="text-sm text-muted">業界トップレベルの音質。プロの制作にも使えるクオリティ。</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🎼</p>
              <h3 className="font-bold mb-2">クラシック系なら</h3>
              <p className="text-primary font-bold text-lg mb-1">AIVA</p>
              <p className="text-sm text-muted">オーケストラ調の楽曲が得意。映画やゲームのBGMに最適。</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">💼</p>
              <h3 className="font-bold mb-2">商用BGMなら</h3>
              <p className="text-primary font-bold text-lg mb-1">SOUNDRAW</p>
              <p className="text-sm text-muted">日本発で安心。商用利用向けのBGM生成に特化。</p>
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
            <Link href="/compare/ai-writing"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              ✍️ AI文章作成比較
            </Link>
            <Link href="/compare/ai-image"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
              🎨 AI画像生成比較
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
