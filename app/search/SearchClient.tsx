"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { tools, renderStars, getPricingBadge } from "../lib/data";

const guides = [
  { slug: "how-to-start-ai", title: "AIツールの始め方ガイド", description: "AIツールを初めて使う方向けの入門ガイド", keywords: "AI 始め方 初心者 入門", icon: "🚀" },
  { slug: "ai-for-business", title: "ビジネスで使えるAIツール活用術", description: "業務効率化に役立つAIツールの活用方法", keywords: "ビジネス 業務効率化 仕事", icon: "💼" },
  { slug: "ai-image-generation", title: "AI画像生成ツール徹底比較", description: "Midjourney・DALL-E等の画像生成AIを比較", keywords: "画像生成 イラスト Midjourney DALL-E", icon: "🎨" },
  { slug: "ai-side-business", title: "AIツールで副業を始める方法", description: "AIを活用した副業で月5万円を目指すロードマップ", keywords: "副業 稼ぐ 収入", icon: "💰" },
  { slug: "ai-video-creation", title: "AI動画生成ツールの選び方ガイド", description: "初心者向けAI動画生成ツールの比較と選び方", keywords: "動画 映像 Sora", icon: "🎬" },
  { slug: "chatgpt-vs-claude", title: "ChatGPT vs Claude 徹底比較", description: "2大AIチャットの違いと使い分けを解説", keywords: "ChatGPT Claude 比較 違い", icon: "⚖️" },
  { slug: "ai-tools-for-students", title: "学生向けAIツール活用ガイド", description: "勉強・レポート・研究に使えるAIツール", keywords: "学生 勉強 レポート 研究", icon: "🎓" },
  { slug: "best-ai-for-freelance", title: "フリーランス必須のAIツール10選", description: "業務効率化で収入アップを目指すフリーランス向け", keywords: "フリーランス 独立 個人事業", icon: "💻" },
  { slug: "ai-blog-writing", title: "AIでブログ記事を書く方法", description: "月5万円稼ぐブログ運営術をAIで効率化", keywords: "ブログ ライティング 記事 SEO", icon: "✍️" },
  { slug: "ai-tools-pricing", title: "主要AIツール料金比較一覧", description: "無料プランから有料プランまで料金を比較", keywords: "料金 価格 無料 有料 プラン", icon: "📊" },
  { slug: "ai-english-learning", title: "AIで英語学習を効率化する方法", description: "2026年おすすめのAI英語学習ツール5選", keywords: "英語 英会話 学習 翻訳", icon: "🌍" },
  { slug: "best-ai-for-marketing", title: "マーケティングに使えるAIツール10選", description: "SNS運用・広告・分析を効率化するAIツール", keywords: "マーケティング SNS 広告 分析", icon: "📣" },
  { slug: "ai-for-remote-work", title: "リモートワークを効率化するAIツール", description: "テレワーク・在宅勤務で使えるAIツール", keywords: "リモートワーク テレワーク 在宅", icon: "🏠" },
  { slug: "ai-for-designers", title: "デザイナー向けAIツール10選", description: "イラスト・UI・ロゴ制作を効率化するAI", keywords: "デザイン イラスト UI ロゴ", icon: "🖌️" },
];

export default function SearchResults() {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") || "").toLowerCase();

  const toolResults = q
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.nameEn.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    : [];

  const guideResults = q
    ? guides.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.keywords.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q)
      )
    : [];

  const totalCount = toolResults.length + guideResults.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>検索結果</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">
        「{searchParams.get("q")}」の検索結果
      </h1>
      <p className="text-muted mb-8">{totalCount}件見つかりました</p>

      {guideResults.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4">ガイド記事（{guideResults.length}件）</h2>
          <div className="grid gap-4">
            {guideResults.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <span className="text-3xl">{guide.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{guide.title}</h3>
                  <p className="text-xs text-muted">{guide.description}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary shrink-0">ガイド</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {toolResults.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-4">AIツール（{toolResults.length}件）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolResults.map((tool) => {
              const badge = getPricingBadge(tool.pricing);
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="bg-card-bg border border-card-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all tool-card"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm">{tool.name}</h3>
                      <span className="stars text-xs">{renderStars(tool.rating)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted mb-3 line-clamp-2">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-0.5 rounded-full badge-${badge.color}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs text-muted">{tool.category}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {totalCount === 0 && q && (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-muted mb-4">「{searchParams.get("q")}」に一致する結果が見つかりませんでした</p>
          <Link href="/" className="text-primary hover:underline">トップページに戻る</Link>
        </div>
      )}
    </div>
  );
}
