import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "AIツール活用ガイド - 初心者から実践まで",
  description:
    "AIツールの選び方・使い方を初心者にも分かりやすく解説。ビジネスでの活用法や始め方ガイドを掲載。",
  alternates: {
    canonical: `${siteConfig.url}/guide`,
  },
};

const guides = [
  {
    slug: "how-to-start-ai",
    title: "【2026年版】AIツールの始め方ガイド",
    description: "AIツールを使ったことがない初心者向けに、始め方をステップバイステップで解説。おすすめのAIツールも紹介。",
    icon: "🚀",
    category: "初心者向け",
    readTime: "5分",
  },
  {
    slug: "ai-for-business",
    title: "ビジネスで使えるAIツール活用術【業務効率化】",
    description: "メール作成、議事録、プレゼン資料、データ分析...ビジネスの各シーンで使えるAIツールと活用テクニックを紹介。",
    icon: "💼",
    category: "ビジネス",
    readTime: "8分",
  },
  {
    slug: "ai-image-generation",
    title: "【2026年最新】AI画像生成ツール徹底比較｜無料で使えるおすすめ5選",
    description: "Midjourney、DALL-E、Stable Diffusion、Adobe Firefly、Canva AIを徹底比較。料金・特徴・用途別おすすめを解説。",
    icon: "🎨",
    category: "AI画像",
    readTime: "10分",
  },
  {
    slug: "ai-side-business",
    title: "AIツールで副業を始める方法｜月5万円を目指すロードマップ",
    description: "AIツールを活用した副業の始め方を解説。ブログ運営、コンテンツ作成、デザイン、動画編集の具体的なロードマップ。",
    icon: "💰",
    category: "副業",
    readTime: "10分",
  },
  {
    slug: "ai-video-creation",
    title: "【初心者向け】AI動画生成ツールの選び方ガイド",
    description: "Sora、Runway、Pika、Kling、HailuoAIなどの人気AI動画生成ツールを徹底比較。初心者向けに選び方を解説。",
    icon: "🎬",
    category: "AI動画",
    readTime: "8分",
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude 徹底比較【2026年最新】どっちを使うべき？",
    description: "ChatGPTとClaudeを料金・機能・日本語品質・コーディング力で徹底比較。それぞれの得意分野と用途別おすすめを解説。",
    icon: "🤖",
    category: "比較",
    readTime: "8分",
  },
  {
    slug: "ai-tools-for-students",
    title: "【2026年版】学生向けAIツール活用ガイド｜勉強・レポート・研究に",
    description: "学生が勉強・レポート作成・研究に活用できるAIツールを厳選紹介。無料で使えるおすすめAIツールと効果的な使い方を解説。",
    icon: "🎓",
    category: "学生向け",
    readTime: "7分",
  },
  {
    slug: "best-ai-for-freelance",
    title: "フリーランス必須のAIツール10選｜業務効率化で収入アップ",
    description: "フリーランスの業務効率化に役立つAIツール10選を厳選紹介。文章作成・画像生成・コーディング・会計まで、収入アップにつながるツールと活用法を解説。",
    icon: "💼",
    category: "フリーランス",
    readTime: "10分",
  },
  {
    slug: "ai-blog-writing",
    title: "AIでブログ記事を書く方法｜月5万円稼ぐブログ運営術",
    description: "ChatGPTやClaudeを使ったブログ記事の書き方を徹底解説。ブログ開設から記事執筆、収益化まで月5万円を目指すロードマップ。",
    icon: "📝",
    category: "ブログ運営",
    readTime: "12分",
  },
  {
    slug: "ai-tools-pricing",
    title: "【2026年最新】主要AIツール料金比較一覧｜無料プランまとめ",
    description: "主要AIツールの料金プランを一覧で比較。無料プランの内容、有料プラン料金、おすすめプランをカテゴリ別に徹底解説。",
    icon: "💰",
    category: "料金比較",
    readTime: "10分",
  },
  {
    slug: "ai-english-learning",
    title: "AIで英語学習を効率化する方法｜2026年おすすめツール5選",
    description: "ChatGPTやClaudeを使った英語学習法を徹底解説。英会話練習、英作文添削、TOEIC対策まで、AIを活用した効率的な学習方法を紹介。",
    icon: "🇬🇧",
    category: "英語学習",
    readTime: "10分",
  },
  {
    slug: "best-ai-for-marketing",
    title: "マーケティングに使えるAIツール10選｜SNS運用・広告・分析を効率化",
    description: "マーケティング業務を効率化するAIツールを厳選紹介。SNS運用、広告クリエイティブ作成、データ分析まで、2026年最新のおすすめAIマーケティングツール10選を徹底解説。",
    icon: "📣",
    category: "マーケティング",
    readTime: "10分",
  },
  {
    slug: "ai-for-remote-work",
    title: "リモートワークを効率化するAIツール完全ガイド｜2026年版",
    description: "リモートワーク・テレワークの効率を劇的に上げるAIツールを厳選紹介。会議、文書作成、プロジェクト管理、コミュニケーションをAIで効率化する方法を解説。",
    icon: "🏠",
    category: "リモートワーク",
    readTime: "8分",
  },
  {
    slug: "ai-for-designers",
    title: "デザイナー向けAIツール10選｜イラスト・UI・ロゴ制作を効率化【2026年版】",
    description: "デザイン業務を効率化するAIツールを厳選紹介。イラスト生成、UI/UXデザイン、ロゴ制作、画像編集まで、おすすめAIツール10選を徹底解説。",
    icon: "🎨",
    category: "デザイン",
    readTime: "10分",
  },
];

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
        <span>/</span>
        <span className="text-foreground">ガイド</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          AIツール<span className="text-primary">活用ガイド</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          AIツールの選び方・使い方を初心者にも分かりやすく解説。実践的な活用テクニックを紹介します。
        </p>
      </div>

      <div className="space-y-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{guide.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">
                    {guide.category}
                  </span>
                  <span className="text-xs text-muted">読了 {guide.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{guide.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{guide.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-muted mb-4">AIツールをすぐに比較したい方はこちら</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/compare" className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">
            AIチャット比較
          </Link>
          <Link href="/compare/ai-image" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
            画像生成AI比較
          </Link>
          <Link href="/compare/ai-video" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
            動画生成AI比較
          </Link>
        </div>
      </div>
    </div>
  );
}
