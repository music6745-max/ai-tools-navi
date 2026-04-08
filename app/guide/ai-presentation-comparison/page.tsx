import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIプレゼン作成ツール比較5選【2026年最新】Gamma/Beautiful.ai/Tome/Decktopus/SlidesAI",
  description: "数分でスライドを生成するAIプレゼンツール5選を徹底比較。Gamma・Beautiful.ai・Tome・Decktopus・SlidesAIの料金・テンプレ・連携を解説。",
  keywords: ["AI プレゼン", "AI スライド", "Gamma", "Beautiful.ai", "Tome", "Decktopus", "SlidesAI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-presentation-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIプレゼン作成ツール比較5選", description: "Gamma/Beautiful.ai/Tome/Decktopus/SlidesAI徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIプレゼン作成比較", item: `${siteConfig.url}/guide/ai-presentation-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIプレゼン作成比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIプレゼン作成ツール比較5選｜Gamma/Beautiful.ai/Tome/Decktopus/SlidesAI</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          スライド作成に何時間もかける時代は終わり。AIプレゼンツールを使えばテーマを入力するだけで数分で完成度の高いスライドが完成します。本記事では主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIプレゼンツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Gamma", badge: "人気No.1", desc: "テキスト入力で美しいスライドを自動生成。Web・モバイル・PDF出力にも対応。月額10ドル〜。" },
              { name: "Beautiful.ai", badge: "デザイン特化", desc: "プロデザイナー品質のテンプレートが豊富。社内ガイドラインの統一にも便利。月額12ドル〜。" },
              { name: "Tome", badge: "ストーリーテリング", desc: "AIが画像生成も含めて作成。ナラティブ重視のピッチ資料に最適。" },
              { name: "Decktopus", badge: "短時間生成", desc: "5分以内にプレゼンが完成する手軽さ。テンプレ豊富で初心者向き。月額9.99ドル〜。" },
              { name: "SlidesAI", badge: "Google連携", desc: "Google Slidesに統合され、既存ワークフローで使える。月額10ドル〜。" },
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
            <p><span className="font-bold">短時間で美しいスライド：</span> Gamma・Decktopus</p>
            <p><span className="font-bold">ピッチ資料：</span> Tome</p>
            <p><span className="font-bold">企業のブランディング：</span> Beautiful.ai</p>
            <p><span className="font-bold">Google環境：</span> SlidesAI</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プレゼンスキルを磨く</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "ビジネススキル全般", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化スクール", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-presentation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIプレゼン活用</div></Link>
            <Link href="/guide/ai-slide-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIスライド作成</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
