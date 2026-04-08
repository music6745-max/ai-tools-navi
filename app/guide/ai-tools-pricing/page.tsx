import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "料金比較AIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "主要AIツールの料金プランを7つ厳選して徹底比較。無料で使える範囲・有料プランの違い・コスパ最強の選び方まで一覧で解説します。",
  keywords: ["AIツール 料金", "AIツール 比較", "ChatGPT 料金", "Claude 料金", "Midjourney 料金", "無料AIツール", "2026年"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-tools-pricing`,
  },
};

interface PricingEntry {
  slug: string;
  freePlan: string;
  paidPlan: string;
  recommended: string;
}

const pricingData: Record<string, PricingEntry[]> = {
  "チャットAI": [
    { slug: "chatgpt", freePlan: "GPT-4o制限あり、月間メッセージ上限あり", paidPlan: "Plus 約3,000円/月、Pro 約30,000円/月", recommended: "Plus（約3,000円/月）が最もコスパ良し" },
    { slug: "claude", freePlan: "Claude 3.5 Sonnet制限あり", paidPlan: "Pro 約3,000円/月、Max 約15,000円/月", recommended: "Pro（約3,000円/月）で十分実用的" },
    { slug: "gemini", freePlan: "Gemini 1.5 Flash利用可能", paidPlan: "Advanced ¥2,900/月", recommended: "Google系サービス利用者はAdvanced" },
    { slug: "perplexity", freePlan: "1日5回のPro検索", paidPlan: "Pro 約3,000円/月", recommended: "リサーチ用途ならPro推奨" },
    { slug: "grok", freePlan: "基本機能利用可能", paidPlan: "X Premium+に含まれる", recommended: "X（Twitter）ユーザーに最適" },
  ],
  "画像生成AI": [
    { slug: "midjourney", freePlan: "なし（有料のみ）", paidPlan: "Basic 約1,500円/月、Standard 約4,500円/月", recommended: "Standard（約4,500円/月）で商用利用可" },
    { slug: "dall-e", freePlan: "ChatGPT無料プランで制限付き利用可", paidPlan: "ChatGPT Plus内で利用（約3,000円/月）", recommended: "ChatGPT Plusに含まれるのでお得" },
    { slug: "stable-diffusion", freePlan: "オープンソース（ローカル実行無料）", paidPlan: "API利用は従量課金", recommended: "PC性能があればローカル実行がコスパ最強" },
    { slug: "adobe-firefly", freePlan: "月25クレジット", paidPlan: "Creative Cloud内 ¥2,728/月〜", recommended: "Adobe製品利用者はCreative Cloud" },
    { slug: "canva-ai", freePlan: "基本的なAI機能利用可能", paidPlan: "Pro ¥1,500/月", recommended: "デザイン全般ならPro一択" },
    { slug: "ideogram", freePlan: "1日25枚生成可能", paidPlan: "Basic 約1,200円/月、Plus 約3,000円/月", recommended: "テキスト入り画像ならイチオシ" },
  ],
  "動画生成AI": [
    { slug: "sora", freePlan: "ChatGPT Plusに含まれる（制限あり）", paidPlan: "Pro 約30,000円/月で無制限", recommended: "Plus（約3,000円/月）で試してからPro検討" },
    { slug: "runway", freePlan: "125クレジット（登録時）", paidPlan: "Standard 約2,300円/月、Pro 約5,300円/月", recommended: "本格利用ならPro（約5,300円/月）" },
    { slug: "pika", freePlan: "月150クレジット", paidPlan: "Standard 約1,500円/月、Pro 約5,300円/月", recommended: "手軽に始めるならStandard" },
    { slug: "kling", freePlan: "毎日66クレジット", paidPlan: "Pro 約1,500円/月", recommended: "コスパ重視ならKling" },
    { slug: "hailuo", freePlan: "基本機能無料", paidPlan: "有料プランあり", recommended: "無料で試してみる価値あり" },
  ],
  "音声・音楽AI": [
    { slug: "suno", freePlan: "1日10曲生成可能", paidPlan: "Pro 約1,500円/月、Premier 約4,500円/月", recommended: "音楽制作ならPro（約1,500円/月）" },
    { slug: "elevenlabs", freePlan: "月10,000文字まで", paidPlan: "Starter 約750円/月、Creator 約3,300円/月", recommended: "ナレーション用途ならCreator" },
    { slug: "udio", freePlan: "月100曲まで", paidPlan: "Standard 約1,500円/月、Pro 約4,500円/月", recommended: "Standard（約1,500円/月）で十分" },
    { slug: "murf", freePlan: "制限付き利用可能", paidPlan: "Creator 約4,400円/月", recommended: "ビジネスナレーション用" },
  ],
  "コーディングAI": [
    { slug: "github-copilot", freePlan: "無料プランあり（月間制限あり）", paidPlan: "Pro 約1,500円/月、Business 約2,900円/月", recommended: "個人ならPro（約1,500円/月）" },
    { slug: "cursor", freePlan: "月2000回の補完", paidPlan: "Pro 約3,000円/月、Business 約6,000円/月", recommended: "メインエディタにするならPro" },
    { slug: "claude-code", freePlan: "なし（Claude API利用）", paidPlan: "API従量課金", recommended: "開発者はAPI直接利用が効率的" },
    { slug: "replit", freePlan: "基本機能無料", paidPlan: "Replit Core 約3,800円/月", recommended: "学習用途なら無料で十分" },
    { slug: "v0", freePlan: "月間クレジット制限あり", paidPlan: "Premium 約3,000円/月", recommended: "フロントエンド開発にPremium" },
  ],
};

export default function AIToolsPricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】主要AIツール料金比較一覧｜無料プランまとめ",
    description: "2026年最新のAIツール料金を一覧で比較。主要ツールの無料プラン・有料プラン・おすすめプランを徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIツール料金比較", item: `${siteConfig.url}/guide/ai-tools-pricing` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AIツール料金比較は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AIツール料金比較の選び方は？",
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIツール料金比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金比較</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【2026年最新】主要AIツール料金比較一覧｜無料プランまとめ
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          主要AIツールの料金プランを一覧で比較。無料プランの内容、有料プランの料金、そしておすすめプランをカテゴリ別にまとめました。自分に合ったプランを見つける参考にしてください。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#summary" className="text-primary hover:underline">1. AIツール料金の全体感</a></li>
            <li><a href="#chat" className="text-primary hover:underline">2. チャットAIの料金比較</a></li>
            <li><a href="#image" className="text-primary hover:underline">3. 画像生成AIの料金比較</a></li>
            <li><a href="#video" className="text-primary hover:underline">4. 動画生成AIの料金比較</a></li>
            <li><a href="#audio" className="text-primary hover:underline">5. 音声・音楽AIの料金比較</a></li>
            <li><a href="#coding" className="text-primary hover:underline">6. コーディングAIの料金比較</a></li>
            <li><a href="#free-recommend" className="text-primary hover:underline">7. 無料で使えるおすすめAIツール</a></li>
          </ol>
        </div>

        {/* Section 1 - Overview */}
        <section id="summary" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AIツール料金の全体感
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4 mb-6">
            <p>2026年現在、多くのAIツールは無料プランを提供しており、お金をかけずにAIを試すことができます。有料プランの相場は月額約1,500〜4,500円で、より多くの機能や高い利用制限が解放されます。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "無料で十分", desc: "基本的な質問・文章作成なら無料プランで対応可能", color: "bg-green-100 text-green-700" },
              { label: "月約1,500〜3,000円で快適", desc: "仕事で本格的に使うなら月約1,500〜3,000円の有料プランがおすすめ", color: "bg-blue-100 text-blue-700" },
              { label: "月約4,500円〜でプロ仕様", desc: "クリエイター・開発者向けのプロプランは月約4,500円以上", color: "bg-purple-100 text-purple-700" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4 text-center">
                <span className={`inline-block text-xs px-3 py-1 rounded-full font-bold mb-2 ${item.color}`}>{item.label}</span>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category Pricing Sections */}
        {Object.entries(pricingData).map(([category, entries], ci) => {
          const sectionIds = ["chat", "image", "video", "audio", "coding"];
          const sectionIcons = ["💬", "🎨", "🎬", "🎵", "💻"];
          return (
            <section key={ci} id={sectionIds[ci]} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">{ci + 2}.</span> {sectionIcons[ci]} {category}の料金比較
              </h2>

              {/* Mobile-friendly cards */}
              <div className="space-y-4 md:hidden">
                {entries.map((entry) => {
                  const tool = getToolBySlug(entry.slug);
                  if (!tool) return null;
                  const badge = getPricingBadge(tool.pricing);
                  return (
                    <div key={entry.slug} className="bg-card-bg border border-card-border rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{tool.icon}</span>
                        <Link href={`/tools/${tool.slug}`} className="font-bold text-primary hover:underline">{tool.name}</Link>
                        <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                        <span className="stars text-xs ml-auto">{renderStars(tool.rating)}</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-bold">無料プラン：</span>
                          <span className="text-muted">{entry.freePlan}</span>
                        </div>
                        <div>
                          <span className="font-bold">有料プラン：</span>
                          <span className="text-muted">{entry.paidPlan}</span>
                        </div>
                        <div className="bg-primary-light rounded-lg p-2">
                          <span className="font-bold text-primary">おすすめ：</span>
                          <span className="text-muted">{entry.recommended}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Link href={`/tools/${tool.slug}`}
                          className="px-3 py-1.5 bg-primary text-white rounded-full text-xs font-medium hover:bg-primary-hover transition-colors">
                          詳細を見る
                        </Link>
                        {tool.affiliateUrl && (
                          <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored"
                            className="px-3 py-1.5 border border-primary text-primary rounded-full text-xs font-medium hover:bg-primary-light transition-colors">
                            公式サイト
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-card-bg">
                      <th className="border border-card-border p-3 text-left">ツール</th>
                      <th className="border border-card-border p-3 text-left">評価</th>
                      <th className="border border-card-border p-3 text-left">無料プラン</th>
                      <th className="border border-card-border p-3 text-left">有料プラン</th>
                      <th className="border border-card-border p-3 text-left">おすすめ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry) => {
                      const tool = getToolBySlug(entry.slug);
                      if (!tool) return null;
                      const badge = getPricingBadge(tool.pricing);
                      return (
                        <tr key={entry.slug} className="hover:bg-card-bg">
                          <td className="border border-card-border p-3">
                            <div className="flex items-center gap-2">
                              <span>{tool.icon}</span>
                              <Link href={`/tools/${tool.slug}`} className="text-primary hover:underline font-medium">{tool.name}</Link>
                              <span className={`badge-${badge.color} text-xs px-1.5 py-0.5 rounded-full`}>{badge.label}</span>
                            </div>
                          </td>
                          <td className="border border-card-border p-3 text-xs">{renderStars(tool.rating)}</td>
                          <td className="border border-card-border p-3 text-xs text-muted">{entry.freePlan}</td>
                          <td className="border border-card-border p-3 text-xs text-muted">{entry.paidPlan}</td>
                          <td className="border border-card-border p-3 text-xs font-medium">{entry.recommended}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}

        {/* Free Recommendations */}
        <section id="free-recommend" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">7.</span> 無料で使えるおすすめAIツール
          </h2>
          <div className="text-sm text-muted leading-relaxed mb-6">
            <p>まずは無料で試したい方向けに、無料プランが充実しているAIツールをピックアップしました。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { slug: "chatgpt", reason: "AIチャットの定番。無料でもGPT-4oが使える" },
              { slug: "claude", reason: "長文処理に強い。無料でも十分な性能" },
              { slug: "gemini", reason: "Google連携が便利。無料プランが充実" },
              { slug: "canva-ai", reason: "デザイン+AI。無料で幅広く使える" },
              { slug: "suno", reason: "AI音楽生成。無料で1日10曲作れる" },
              { slug: "github-copilot", reason: "コーディングAIの代名詞。無料プランあり" },
            ].map((item) => {
              const tool = getToolBySlug(item.slug);
              if (!tool) return null;
              return (
                <Link key={item.slug} href={`/tools/${item.slug}`}
                  className="flex items-center gap-3 bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <h3 className="font-bold text-sm">{tool.name}</h3>
                    <p className="text-xs text-muted">{item.reason}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIを使いこなす土台を作りたい方へ</h2>
          <p className="text-sm text-muted mb-4">料金面だけでなく、プログラミングや業務活用の基礎を学んでおくと、AIへの投資対効果が一気に上がります。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを詳しく比較する</h2>
          <p className="text-sm text-muted mb-6">カテゴリ別の詳細な比較表もチェック</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/compare/ai-image" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              画像生成AI比較
            </Link>
            <Link href="/compare/ai-coding" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              コーディングAI比較
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/how-to-start-ai" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">AIチャット・基礎</div>
                <div className="font-bold text-sm">AIツールの始め方</div>
              </Link>
              <Link href="/guide/chatgpt-vs-claude" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">AIチャット・基礎</div>
                <div className="font-bold text-sm">ChatGPT vs Claude</div>
              </Link>
              <Link href="/guide/best-ai-for-marketing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">AIチャット・基礎</div>
                <div className="font-bold text-sm">マーケティング向けAI</div>
              </Link>
              <Link href="/guide/ai-summary" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">AIチャット・基礎</div>
                <div className="font-bold text-sm">AI要約ツール</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
