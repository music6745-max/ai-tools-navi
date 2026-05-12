import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";
import GuideList from "./GuideList";
import { guides } from "./guides.data";
import { getIndexableGuides } from "./retiredGuides";

const publicGuides = getIndexableGuides(guides);

export const metadata: Metadata = {
  title: `AIツール活用ガイド【全${publicGuides.length}本】| 初心者〜実践まで徹底解説`,
  description: `ChatGPT・Claude・Midjourney・Sora等のAIツール活用ガイドを${publicGuides.length}本公開。初心者向けの始め方から、副業・ビジネス・業種別の実践テクニックまで2026年最新情報を無料で学べます。`,
  alternates: {
    canonical: `${siteConfig.url}/guide`,
  },
  openGraph: {
    title: `AIツール活用ガイド【全${publicGuides.length}本】`,
    description: `初心者〜実践まで、AIツール活用ガイド${publicGuides.length}本を無料公開。`,
    url: `${siteConfig.url}/guide`,
    type: "website",
  },
};

function CollectionPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AIツール活用ガイド一覧",
    description: `${publicGuides.length}本のAIツール活用ガイドを掲載。`,
    url: `${siteConfig.url}/guide`,
    inLanguage: "ja",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: publicGuides.length,
      itemListElement: publicGuides.slice(0, 30).map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteConfig.url}/guide/${g.slug}`,
        name: g.title,
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BreadcrumbJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "ガイド",
        item: `${siteConfig.url}/guide`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <BreadcrumbJsonLd />
      <CollectionPageJsonLd />

      <nav
        className="flex items-center gap-2 text-sm text-muted mb-8"
        aria-label="パンくずリスト"
      >
        <Link href="/" className="hover:text-primary transition-colors">
          ホーム
        </Link>
        <span>/</span>
        <span className="text-foreground">ガイド</span>
      </nav>

      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          AIツール<span className="text-primary">活用ガイド</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto px-2 text-sm sm:text-base">
          初心者の始め方から副業・ビジネス・業種別の実践まで、AIツール活用ガイドを無料公開。2026年最新情報を厳選してお届けします。
        </p>
      </div>

      <GuideList guides={publicGuides} />

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-muted mb-4">AIツールをすぐに比較したい方はこちら</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/compare"
            className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            AIチャット比較
          </Link>
          <Link
            href="/compare/ai-image"
            className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors"
          >
            画像生成AI比較
          </Link>
          <Link
            href="/compare/ai-video"
            className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors"
          >
            動画生成AI比較
          </Link>
        </div>
      </div>
    </div>
  );
}
