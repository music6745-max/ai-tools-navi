import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "フリーランス必須のAIツール10選｜業務効率化で収入アップ",
  description:
    "フリーランスの業務効率化に役立つAIツール10選を厳選紹介。文章作成・画像生成・コーディング・会計まで、収入アップにつながるツールと活用法を解説。",
  keywords: ["フリーランス", "AIツール", "業務効率化", "収入アップ", "副業", "ChatGPT", "Claude", "Midjourney"],
  alternates: {
    canonical: `${siteConfig.url}/guide/best-ai-for-freelance`,
  },
};

interface FreelanceTool {
  slug: string;
  useCase: string;
  roi: string;
  freelanceNote: string;
}

const freelanceToolsData: FreelanceTool[] = [
  { slug: "chatgpt", useCase: "提案書・メール作成、企画書のたたき台、リサーチ補助", roi: "作業時間を約50%短縮。月10時間以上の時短効果", freelanceNote: "クライアントへの提案書やメール文面を瞬時に作成。無料プランでも十分実用的。" },
  { slug: "claude", useCase: "長文レポート作成、契約書の確認補助、データ分析", roi: "長文タスクの処理速度が3倍に。月額約3,000円で元が取れる", freelanceNote: "長文の処理能力に優れ、ドキュメント作業が多いフリーランスに最適。" },
  { slug: "jasper", useCase: "マーケティングコピー、広告文、SNS投稿の作成", roi: "コピーライティング案件の対応速度が2倍に", freelanceNote: "マーケティング特化のAI。広告文やSNS運用を請け負うフリーランスに。" },
  { slug: "midjourney", useCase: "プレゼン用ビジュアル、SNS画像、コンセプトアート", roi: "デザイナーへの外注費を月3〜5万円削減可能", freelanceNote: "高品質な画像生成で、デザイン外注コストを大幅カット。" },
  { slug: "canva-ai", useCase: "プレゼン資料、SNS投稿画像、名刺・ロゴデザイン", roi: "デザインツール費用を一本化。月1,500円で全て対応", freelanceNote: "AI機能搭載でプロ品質のデザインが誰でも作れる。" },
  { slug: "github-copilot", useCase: "コード補完、テスト作成、ドキュメント生成", roi: "コーディング速度が最大55%向上（GitHub公式調査）", freelanceNote: "エンジニア系フリーランスの必須ツール。開発効率が劇的に向上。" },
  { slug: "cursor", useCase: "AI駆動のコードエディタ、プロジェクト全体のコード理解", roi: "複雑なプロジェクトの理解速度が大幅アップ", freelanceNote: "新規案件のコードベース理解が爆速に。複数案件を掛け持ちするエンジニアに。" },
  { slug: "notion-ai", useCase: "議事録整理、プロジェクト管理、ナレッジベース構築", roi: "事務作業を月5〜10時間削減", freelanceNote: "プロジェクト管理とAIが統合。クライアント管理にも活用可能。" },
  { slug: "grammarly", useCase: "英文メール校正、翻訳チェック、文章品質向上", roi: "英語案件の対応品質が向上し、単価アップにつながる", freelanceNote: "海外クライアントとのやり取りがある方に必須。" },
  { slug: "otter-ai", useCase: "会議の自動文字起こし、議事録作成", roi: "議事録作成の時間を90%以上削減", freelanceNote: "クライアントミーティングの議事録を自動生成。" },
];

export default function BestAIForFreelancePage() {
  const toolEntries = freelanceToolsData.map((ft) => ({
    ...ft,
    tool: getToolBySlug(ft.slug),
  })).filter((ft) => ft.tool);

  const categoryGroups = [
    { title: "文章作成AI", icon: "✍️", slugs: ["chatgpt", "claude", "jasper"] },
    { title: "画像・デザインAI", icon: "🎨", slugs: ["midjourney", "canva-ai"] },
    { title: "コーディングAI", icon: "💻", slugs: ["github-copilot", "cursor"] },
    { title: "業務効率化AI", icon: "📊", slugs: ["notion-ai", "grammarly", "otter-ai"] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "フリーランス必須のAIツール10選｜業務効率化で収入アップ",
    description: "フリーランスの業務効率化に役立つAIツール10選を厳選紹介。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
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
          <span className="text-foreground">フリーランス向けAIツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">フリーランス</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          フリーランス必須のAIツール10選｜業務効率化で収入アップ
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          フリーランスにとって「時間＝収入」です。AIツールを活用すれば、作業時間を大幅に短縮しながら成果物の品質も向上します。この記事では、フリーランスの各業務に最適なAIツール10選を紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. フリーランスがAIツールを使うべき理由</a></li>
            <li><a href="#writing" className="text-primary hover:underline">2. 文章作成AI - 提案書・メールを効率化</a></li>
            <li><a href="#design" className="text-primary hover:underline">3. 画像・デザインAI - 外注コストを削減</a></li>
            <li><a href="#coding" className="text-primary hover:underline">4. コーディングAI - 開発速度を倍増</a></li>
            <li><a href="#business" className="text-primary hover:underline">5. 業務効率化AI - 事務作業を自動化</a></li>
            <li><a href="#comparison" className="text-primary hover:underline">6. フリーランス向けAIツール比較表</a></li>
            <li><a href="#start" className="text-primary hover:underline">7. まずはここから始めよう</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> フリーランスがAIツールを使うべき理由
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>フリーランスは一人で営業・制作・経理まで全てこなす必要があります。AIツールを導入することで、以下のメリットが得られます。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { icon: "⏰", title: "作業時間50%削減", desc: "提案書・メール作成などのルーティン業務を大幅に短縮" },
              { icon: "💰", title: "外注費カット", desc: "デザインや翻訳をAIで対応し、外注費を月3〜10万円節約" },
              { icon: "📈", title: "品質向上", desc: "AIの校正・添削で成果物のクオリティがアップ" },
              { icon: "🚀", title: "対応案件数UP", desc: "効率化で空いた時間に新規案件を受注可能" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tool Sections */}
        {categoryGroups.map((group, gi) => {
          const sectionId = ["writing", "design", "coding", "business"][gi];
          const sectionNum = gi + 2;
          const groupTools = group.slugs.map((s) => toolEntries.find((te) => te.slug === s)).filter(Boolean);

          return (
            <section key={gi} id={sectionId} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">{sectionNum}.</span> {group.title} - {group.icon}
              </h2>
              <div className="space-y-6">
                {groupTools.map((entry) => {
                  if (!entry || !entry.tool) return null;
                  const badge = getPricingBadge(entry.tool.pricing);
                  return (
                    <div key={entry.slug} className="bg-card-bg border border-card-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{entry.tool.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{entry.tool.name}</h3>
                            <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                            <span className="stars text-sm">{renderStars(entry.tool.rating)}</span>
                          </div>
                          <p className="text-xs text-muted">{entry.tool.pricing}</p>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-bold text-xs text-primary">フリーランスでの活用法</span>
                          <p className="text-muted mt-1">{entry.freelanceNote}</p>
                        </div>
                        <div>
                          <span className="font-bold text-xs text-primary">主な用途</span>
                          <p className="text-muted mt-1">{entry.useCase}</p>
                        </div>
                        <div className="bg-primary-light rounded-lg p-3">
                          <span className="font-bold text-xs">ROI（投資対効果）</span>
                          <p className="text-muted text-xs mt-1">{entry.roi}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-3">
                        <Link
                          href={`/tools/${entry.slug}`}
                          className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
                        >
                          詳細を見る
                        </Link>
                        {entry.tool.affiliateUrl && (
                          <a
                            href={entry.tool.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow sponsored"
                            className="px-4 py-2 bg-card-bg border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
                          >
                            公式サイトへ
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Comparison Table */}
        <section id="comparison" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">6.</span> フリーランス向けAIツール比較表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-card-bg">
                  <th className="border border-card-border p-3 text-left">ツール</th>
                  <th className="border border-card-border p-3 text-left">カテゴリ</th>
                  <th className="border border-card-border p-3 text-left">料金</th>
                  <th className="border border-card-border p-3 text-left">評価</th>
                </tr>
              </thead>
              <tbody>
                {toolEntries.map((entry) => {
                  if (!entry.tool) return null;
                  return (
                    <tr key={entry.slug} className="hover:bg-card-bg">
                      <td className="border border-card-border p-3">
                        <Link href={`/tools/${entry.slug}`} className="text-primary hover:underline font-medium">
                          {entry.tool.icon} {entry.tool.name}
                        </Link>
                      </td>
                      <td className="border border-card-border p-3 text-muted">{entry.useCase.split("、")[0]}</td>
                      <td className="border border-card-border p-3 text-muted">{entry.tool.pricing}</td>
                      <td className="border border-card-border p-3">{renderStars(entry.tool.rating)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Getting Started */}
        <section id="start" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">7.</span> まずはここから始めよう
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>いきなり全てのツールを導入する必要はありません。以下のステップで始めることをおすすめします。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { step: "1", title: "まずChatGPTかClaudeを無料で試す", desc: "メール作成や企画書の下書きなど、日常業務で使ってみましょう。" },
              { step: "2", title: "自分の専門分野のツールを追加", desc: "エンジニアならGitHub Copilot、デザイナーならMidjourney/Canva AIを導入。" },
              { step: "3", title: "効果を測定して有料プランを検討", desc: "月にどれくらい時間を節約できたか確認し、有料プランの価値を判断。" },
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

        {/* Accounting Comparison Table CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">フリーランスの確定申告におすすめの会計ソフト</h2>
          <p className="text-sm text-muted mb-6">フリーランスの経理業務を効率化。確定申告もスムーズに対応できます。</p>
          <ComparisonTableCTA
            services={[
              {
                name: "弥生シリーズ",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU",
                highlight: "確定率91.74%の安心実績",
                price: "無料〜",
                badge: "定番",
              },
              {
                name: "freee会計",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y",
                highlight: "スマホで確定申告",
                price: "月1,180円〜",
              },
            ]}
          />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して最適なものを見つけよう</h2>
          <p className="text-sm text-muted mb-6">各ツールの詳細な比較情報をチェック</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表を見る
            </Link>
            <Link href="/guide/ai-tools-pricing" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIツール料金比較
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
