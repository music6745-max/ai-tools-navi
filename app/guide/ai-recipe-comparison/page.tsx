import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI料理レシピアプリ比較5選【2026年最新】DishGen/SuperCook/Mealime/Whisk/Plant Jammer",
  description: "冷蔵庫の食材から献立を提案するAIレシピアプリ5選を徹底比較。DishGen・SuperCook・Mealime・Whisk・Plant Jammerを解説。",
  keywords: ["AI 料理", "AI レシピ", "DishGen", "SuperCook", "Mealime", "Whisk"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-recipe-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI料理レシピアプリ比較5選", description: "DishGen/SuperCook/Mealime/Whisk/Plant Jammer徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI料理レシピ比較", item: `${siteConfig.url}/guide/ai-recipe-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI料理レシピ比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI料理レシピアプリ比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          冷蔵庫の余り物や食材アレルギーに対応してくれるAIレシピアプリ。本記事では海外の主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI料理レシピアプリ5選</h2>
          <div className="space-y-4">
            {[
              { name: "DishGen", badge: "GPTベース", desc: "GPTでレシピを生成。冷蔵庫の食材から無限のレシピが作れる。月額9.99ドル〜。" },
              { name: "SuperCook", badge: "在庫活用", desc: "持っている食材を入力するとレシピを提案。完全無料。" },
              { name: "Mealime", badge: "週次プラン", desc: "週次の献立プラン+買い物リスト自動生成。月額5.99ドル〜。" },
              { name: "Whisk", badge: "Samsung系", desc: "Samsung系のレシピ管理アプリ。AIで献立提案+買い物連携。" },
              { name: "Plant Jammer", badge: "ヴィーガン", desc: "デンマーク発のAIレシピ。サステナブル・ヴィーガン料理に強い。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 用途別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">在庫活用：</span> SuperCook・DishGen</p>
            <p><span className="font-bold">献立計画：</span> Mealime・Whisk</p>
            <p><span className="font-bold">ヴィーガン：</span> Plant Jammer</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">食材宅配・ミールキット</h2>
          <ComparisonTableCTA services={[
            { name: "オイシックス", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "ミールキット定番", price: "週次配送", badge: "人気" },
            { name: "ヨシケイ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "栄養バランス重視", price: "月額制" },
            { name: "らでぃっしゅぼーや", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "オーガニック食材", price: "週次配送" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-recipe" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">生活</div><div className="font-bold text-sm">AIレシピ活用</div></Link>
            <Link href="/guide/ai-for-cooks" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">料理人向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
