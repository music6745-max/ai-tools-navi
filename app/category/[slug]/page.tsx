import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  siteConfig,
  categories,
  getToolsByCategory,
  getCategoryBySlug,
  renderStars,
  getPricingBadge,
} from "../../lib/data";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "カテゴリが見つかりません" };

  const title = `${category.name}ツール おすすめ比較【${new Date().getFullYear()}年】`;
  const description = `${category.name}のAIツールを徹底比較。${category.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/category/${category.slug}`,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const catTools = getToolsByCategory(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `${siteConfig.url}/category/${category.slug}`,
      },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          ホーム
        </Link>
        <span>/</span>
        <span className="text-foreground">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-5xl block mb-4">{category.icon}</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {category.name}ツール おすすめ比較
        </h1>
        <p className="text-muted max-w-2xl mx-auto">{category.description}</p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {catTools.map((tool) => {
          const badge = getPricingBadge(tool.pricing);
          return (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="tool-card bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <div>
                    <h2 className="font-bold text-lg">{tool.name}</h2>
                    <p className="stars text-sm">{renderStars(tool.rating)}</p>
                  </div>
                </div>
                <span
                  className={`badge-${badge.color} text-xs px-2.5 py-1 rounded-full font-medium`}
                >
                  {badge.label}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {tool.description}
              </p>
              <p className="text-xs text-primary font-medium mb-3">
                {tool.pricing}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-muted-bg rounded-full text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Other categories */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-center">
          他のカテゴリ
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories
            .filter((c) => c.slug !== slug)
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="bg-card-bg border border-card-border rounded-xl p-4 text-center hover:border-primary transition-all"
              >
                <span className="text-2xl block mb-2">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </Link>
            ))}
        </div>
      </section>
    </div>
    </>
  );
}
