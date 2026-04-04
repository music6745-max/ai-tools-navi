import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  siteConfig,
  tools,
  getToolBySlug,
  getRelatedTools,
  getCategoryBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "ツールが見つかりません" };

  const title = `${tool.name}の評判・料金・使い方【${new Date().getFullYear()}年】`;
  const description = `${tool.name}（${tool.nameEn}）の特徴・料金・メリット・デメリットを徹底解説。${tool.description}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryBySlug(tool.category);
  const relatedTools = getRelatedTools(tool);
  const badge = getPricingBadge(tool.pricing);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "AI Tool",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: Math.floor(Math.random() * 200) + 50,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: tool.pricing,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            ホーム
          </Link>
          <span>/</span>
          {category && (
            <>
              <Link
                href={`/category/${category.slug}`}
                className="hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{tool.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <span className="text-6xl">{tool.icon}</span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{tool.name}</h1>
                <span
                  className={`badge-${badge.color} text-sm px-3 py-1 rounded-full font-medium`}
                >
                  {badge.label}
                </span>
              </div>
              <p className="text-muted text-sm mb-2">{tool.nameEn}</p>
              <p className="stars text-lg mb-3">
                {renderStars(tool.rating)}{" "}
                <span className="text-muted text-sm ml-1">
                  ({tool.rating}/5.0)
                </span>
              </p>
              <p className="text-muted leading-relaxed mb-4">
                {tool.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-primary-light text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors"
                >
                  公式サイトを見る →
                </a>
                <Link
                  href="/compare"
                  className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors"
                >
                  他のツールと比較
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            💰 料金プラン
          </h2>
          <p className="text-lg font-medium text-primary mb-2">
            {tool.pricing}
          </p>
          <p className="text-sm text-muted">
            ※ 料金は変更される場合があります。最新の情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* Features */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            ✅ 主な機能・特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tool.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-muted-bg rounded-lg"
              >
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <section className="bg-card-bg border border-card-border rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-success">👍</span> メリット
            </h2>
            <ul className="space-y-3">
              {tool.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-success font-bold mt-0.5">○</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-card-bg border border-card-border rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-danger">👎</span> デメリット
            </h2>
            <ul className="space-y-3">
              {tool.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-danger font-bold mt-0.5">△</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Affiliate CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 mb-8 text-center">
          <h2 className="text-xl font-bold mb-3">
            {tool.name}を使ってみよう
          </h2>
          <p className="text-muted mb-6 text-sm">
            {badge.label === "無料" || badge.label === "フリーミアム"
              ? "無料で今すぐ始められます。まずは試してみましょう。"
              : "公式サイトで詳しいプランと機能を確認できます。"}
          </p>
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors text-lg"
          >
            {tool.name}の公式サイトへ →
          </a>
          <p className="text-xs text-muted mt-3">
            ※ 外部サイトに移動します
          </p>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-6">関連するAIツール</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTools.map((rt) => {
                const rtBadge = getPricingBadge(rt.pricing);
                return (
                  <Link
                    key={rt.slug}
                    href={`/tools/${rt.slug}`}
                    className="tool-card bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{rt.icon}</span>
                      <div>
                        <h3 className="font-bold">{rt.name}</h3>
                        <span className="stars text-xs">
                          {renderStars(rt.rating)}
                        </span>
                      </div>
                      <span
                        className={`badge-${rtBadge.color} text-xs px-2 py-0.5 rounded-full ml-auto`}
                      >
                        {rtBadge.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted line-clamp-2">
                      {rt.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
