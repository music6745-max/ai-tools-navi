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
