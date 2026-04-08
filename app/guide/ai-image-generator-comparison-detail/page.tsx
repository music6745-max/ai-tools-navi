import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI画像生成ツール詳細比較5選【2026年最新】Midjourney/DALL-E/SD/Imagen/Firefly",
  description: "Midjourney・DALL-E 3・Stable Diffusion・Google Imagen 3・Adobe Fireflyの5大画像生成AIを品質・料金・商用利用で徹底比較。",
  keywords: ["AI 画像生成", "Midjourney", "DALL-E", "Stable Diffusion", "Imagen", "Firefly"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-image-generator-comparison-detail` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI画像生成ツール詳細比較5選", description: "Midjourney/DALL-E/SD/Imagen/Firefly徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI画像生成詳細比較", item: `${siteConfig.url}/guide/ai-image-generator-comparison-detail` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI画像生成詳細比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI画像生成ツール詳細比較5選｜Midjourney/DALL-E/SD/Imagen/Firefly</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          画像生成AIは2026年も進化を続けています。本記事では5大AIの最新バージョンを品質・料金・商用利用条件で徹底比較し、用途別の最適解を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめ画像生成AI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "Midjourney v6", badge: "アート品質", desc: "美麗な画像生成のトップランナー。Discord/Webアプリ両対応。月額10ドル〜。" },
              { name: "DALL-E 3", badge: "プロンプト忠実", desc: "ChatGPTに統合されており、指示通りの画像を作るのが得意。月額20ドルのChatGPT Plus契約で使用可。" },
              { name: "Stable Diffusion XL", badge: "オープンソース", desc: "ローカル・クラウド両対応。ファインチューニングで独自画風を追求できる玄人向け。基本無料。" },
              { name: "Google Imagen 3", badge: "テキスト描画", desc: "テキストや細かいディテールの再現が抜群。Geminiから利用可能。" },
              { name: "Adobe Firefly", badge: "商用安心", desc: "Adobe ストック画像でトレーニングされた商用安全AI。Creative Cloud契約者が使える。" },
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
            <p><span className="font-bold">アート・コンセプトアート：</span> Midjourney</p>
            <p><span className="font-bold">指示通りの画像が必要：</span> DALL-E 3・Imagen 3</p>
            <p><span className="font-bold">独自画風・ファインチューニング：</span> Stable Diffusion</p>
            <p><span className="font-bold">商用素材：</span> Adobe Firefly</p>
            <p><span className="font-bold">テキスト入り画像：</span> Imagen 3</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイティブスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・デザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン指導", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-image-to-video-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">動画</div><div className="font-bold text-sm">画像→動画AI</div></Link>
            <Link href="/guide/ai-photo-editing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI写真編集</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
