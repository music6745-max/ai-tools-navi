"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { tools, renderStars, getPricingBadge } from "../lib/data";

const guides = [
  { slug: "how-to-start-ai", title: "AIツールの始め方ガイド", keywords: "AI 始め方 初心者 入門" },
  { slug: "ai-for-business", title: "ビジネスで使えるAIツール活用術", keywords: "ビジネス 業務効率化 仕事" },
  { slug: "ai-image-generation", title: "AI画像生成ツール徹底比較", keywords: "画像生成 イラスト Midjourney DALL-E" },
  { slug: "ai-side-business", title: "AIツールで副業を始める方法", keywords: "副業 稼ぐ 収入" },
  { slug: "ai-video-creation", title: "AI動画生成ツールの選び方ガイド", keywords: "動画 映像 Sora" },
  { slug: "chatgpt-vs-claude", title: "ChatGPT vs Claude 徹底比較", keywords: "ChatGPT Claude 比較 違い" },
  { slug: "ai-tools-for-students", title: "学生向けAIツール活用ガイド", keywords: "学生 勉強 レポート 研究" },
  { slug: "best-ai-for-freelance", title: "フリーランス必須のAIツール10選", keywords: "フリーランス 独立 個人事業" },
  { slug: "ai-blog-writing", title: "AIでブログ記事を書く方法", keywords: "ブログ ライティング 記事 SEO" },
  { slug: "ai-tools-pricing", title: "主要AIツール料金比較一覧", keywords: "料金 価格 無料 有料 プラン" },
  { slug: "ai-english-learning", title: "AIで英語学習を効率化する方法", keywords: "英語 英会話 学習 翻訳" },
  { slug: "best-ai-for-marketing", title: "マーケティングに使えるAIツール10選", keywords: "マーケティング SNS 広告 分析" },
  { slug: "ai-for-remote-work", title: "リモートワークを効率化するAIツール", keywords: "リモートワーク テレワーク 在宅" },
  { slug: "ai-for-designers", title: "デザイナー向けAIツール10選", keywords: "デザイン イラスト UI ロゴ" },
];

type Result = { type: "tool"; data: typeof tools[0] } | { type: "guide"; slug: string; title: string };

export function ToolSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  }

  const results = useMemo((): Result[] => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const toolResults: Result[] = tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.nameEn.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
      .slice(0, 8)
      .map((t) => ({ type: "tool", data: t }));

    const guideResults: Result[] = guides
      .filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.keywords.toLowerCase().includes(q)
      )
      .slice(0, 4)
      .map((g) => ({ type: "guide", slug: g.slug, title: g.title }));

    return [...guideResults, ...toolResults].slice(0, 10);
  }, [query]);

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="AIツールやガイド記事を検索...（例: ChatGPT、画像生成、副業）"
          className="w-full border border-card-border rounded-xl px-5 py-3.5 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-card-bg"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-card-border rounded-xl shadow-lg z-40 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.map((item, i) => {
              if (item.type === "guide") {
                return (
                  <Link
                    key={`guide-${item.slug}`}
                    href={`/guide/${item.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted-bg transition-colors border-b border-card-border last:border-0"
                    onClick={() => setQuery("")}
                  >
                    <span className="text-2xl">{"\uD83D\uDCD6"}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium">{item.title}</div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                      {"\u30AC\u30A4\u30C9"}
                    </span>
                  </Link>
                );
              }
              const tool = item.data;
              const badge = getPricingBadge(tool.pricing);
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-muted-bg transition-colors border-b border-card-border last:border-0"
                  onClick={() => setQuery("")}
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium">{tool.name}</div>
                    <div className="text-xs text-muted truncate">{tool.description}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className={`text-xs px-2 py-0.5 rounded-full badge-${badge.color}`}>
                      {badge.label}
                    </span>
                    <span className="stars text-xs">{renderStars(tool.rating)}</span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="px-4 py-6 text-center text-sm text-muted">
              {"\u300C"}{query}{"\u300D"}{"\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
