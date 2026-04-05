"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tools, renderStars, getPricingBadge } from "../lib/data";

export function ToolSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.nameEn.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
      .slice(0, 10);
  }, [query]);

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="AIツールを検索...（例: ChatGPT、画像生成、無料）"
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
            results.map((tool) => {
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
              {"\u300C"}{query}{"\u300D"}{"\u306B\u4E00\u81F4\u3059\u308BAI\u30C4\u30FC\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
