import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";
import { guides } from "../guide/guides.data";

const TITLE = "AIツール人気ランキング2026｜ジャンル別ガイドTop3 | AIツールナビ";
const DESC = "チャット・画像・動画・音声・コーディング・ライティング・ビジネスの7ジャンルで、もっとも読まれているAIガイドのTop3をまとめたハブページです。";
const URL = `${siteConfig.url}/rankings`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, type: "website" },
};

type Genre = {
  id: string;
  name: string;
  icon: string;
  desc: string;
  slugs: string[];
};

const genres: Genre[] = [
  { id: "chat", name: "チャット", icon: "💬", desc: "ChatGPT・Claudeなど対話型AIの人気ガイドTop3。", slugs: ["chatgpt-vs-claude", "ai-prompt-engineering", "ai-japanese-tools"] },
  { id: "image", name: "画像", icon: "🎨", desc: "AI画像生成・編集ツールの人気ガイドTop3。", slugs: ["ai-image-generation", "ai-image-vs-photo", "ai-photo-editing"] },
  { id: "video", name: "動画", icon: "🎬", desc: "AI動画生成・編集の人気ガイドTop3。", slugs: ["ai-video-creation", "ai-subtitle-creation", "ai-for-youtubers"] },
  { id: "audio", name: "音声", icon: "🎵", desc: "AI音声・音楽生成の人気ガイドTop3。", slugs: ["ai-music-creation", "ai-voice-cloning", "ai-transcription"] },
  { id: "coding", name: "コーディング", icon: "💻", desc: "AIコーディング支援の人気ガイドTop3。", slugs: ["ai-coding-assistant", "ai-no-code-tools", "ai-programming-school"] },
  { id: "writing", name: "ライティング", icon: "✍️", desc: "AIライティング・文章生成の人気ガイドTop3。", slugs: ["ai-blog-writing", "ai-email-writing", "ai-summary"] },
  { id: "business", name: "ビジネス", icon: "📊", desc: "ビジネス向けAI活用の人気ガイドTop3。", slugs: ["ai-for-business", "ai-pricing-comparison", "ai-meeting-notes"] },
];

function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

function CollectionPageJsonLd() {
  const itemList = genres.flatMap((genre, gi) =>
    genre.slugs.map((slug, si) => {
      const g = getGuide(slug);
      return {
        "@type": "ListItem",
        position: gi * 3 + si + 1,
        name: g?.title ?? slug,
        url: `${siteConfig.url}/guide/${slug}`,
      };
    })
  );
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESC,
    url: URL,
    inLanguage: "ja",
    mainEntity: { "@type": "ItemList", itemListElement: itemList },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function BreadcrumbLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "人気ランキング", item: URL },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RankingsPage() {
  return (
    <>
      <BreadcrumbLd />
      <CollectionPageJsonLd />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-primary">ホーム</Link>
          <span>/</span>
          <span className="text-foreground">人気ランキング</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          AIツール人気ランキング2026｜ジャンル別ガイドTop3
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          チャット・画像・動画・音声・コーディング・ライティング・ビジネスの7ジャンルで、
          もっとも読まれているAIガイドのTop3をまとめました。
          目的別にあなたに合うAIツールがすぐに見つかります。
        </p>

        <div className="space-y-10">
          {genres.map((genre) => (
            <section key={genre.id} id={genre.id}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl" aria-hidden>{genre.icon}</span>
                <h2 className="text-2xl font-bold">{genre.name}</h2>
              </div>
              <p className="text-sm text-muted mb-4">{genre.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {genre.slugs.map((slug, idx) => {
                  const g = getGuide(slug);
                  if (!g) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/guide/${slug}`}
                      className="group relative block bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary transition-colors"
                    >
                      <span className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow">
                        {idx + 1}
                      </span>
                      <div className="text-2xl mb-2" aria-hidden>{g.icon}</div>
                      <h3 className="font-bold text-sm mb-2 leading-snug group-hover:text-primary">{g.title}</h3>
                      <p className="text-xs text-muted leading-relaxed line-clamp-3">{g.description}</p>
                      <div className="text-xs text-muted mt-2">読了 {g.readTime}</div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 bg-primary-light border border-primary rounded-xl p-6">
          <h2 className="text-lg font-bold mb-2">すべてのガイドを見る</h2>
          <p className="text-sm text-muted mb-3">100件以上のAIガイドを公開中。ジャンル別に探せます。</p>
          <Link
            href="/guide"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            ガイド一覧へ
          </Link>
        </section>
      </div>
    </>
  );
}
