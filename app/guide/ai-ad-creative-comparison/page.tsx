import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI広告クリエイティブ生成ツール比較5選【2026年最新】",
  description: "広告バナー・コピー・動画クリエイティブをAIで自動生成するツール5選を徹底比較。AdCreative.ai・Canva Magic・Predis・Pencil・Smartlyなど。",
  keywords: ["AI 広告", "広告クリエイティブ", "AdCreative", "Canva Magic", "Predis", "Pencil"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-ad-creative-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI広告クリエイティブ生成ツール比較5選", description: "AdCreative/Canva Magic/Predis/Pencil/Smartly徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI広告クリエイティブ比較", item: `${siteConfig.url}/guide/ai-ad-creative-comparison` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AI生成広告のCVRは人間制作と比べてどうですか？", acceptedAnswer: { "@type": "Answer", text: "A/Bテストでは大差ないか、AI生成の方が高くなるケースも報告されています。最大のメリットは制作スピードとコストです。" } },
    { "@type": "Question", name: "ブランドガイドラインに沿わせられますか？", acceptedAnswer: { "@type": "Answer", text: "AdCreative・Smartly等はブランドキット機能でロゴ・カラー・フォントを統一できます。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI広告クリエイティブ比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI広告クリエイティブ生成ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          広告クリエイティブの量産はマーケターの永遠の課題。AIを使えばバナー・動画・コピーを数分で大量生成できます。本記事では2026年注目の5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI広告ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "AdCreative.ai", badge: "業界定番", desc: "Meta/Google広告に特化したAI生成。CVR予測スコア付きで成果を最大化。月額29ドル〜。" },
              { name: "Canva Magic Studio", badge: "デザイン総合", desc: "Canvaの統合AI機能。テンプレ＋AIで初心者でもプロ品質。月12.99ドル〜。" },
              { name: "Predis.ai", badge: "SNS特化", desc: "Instagram/TikTok向けの動画＋画像広告生成。投稿予約まで一貫対応。月29ドル〜。" },
              { name: "Pencil", badge: "ブランド分析", desc: "BrandtechのAI広告ツール。ブランド資産を学習し一貫性のあるクリエイティブを量産。" },
              { name: "Smartly.io", badge: "エンタープライズ", desc: "大手ブランド向けの広告自動化プラットフォーム。AIによる動的クリエイティブ最適化が強み。" },
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
            <p><span className="font-bold">中小企業の運用型広告：</span> AdCreative.ai</p>
            <p><span className="font-bold">SNSマーケ：</span> Predis.ai</p>
            <p><span className="font-bold">デザイン未経験：</span> Canva Magic Studio</p>
            <p><span className="font-bold">大規模ブランド：</span> Pencil・Smartly.io</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">マーケティングスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Webマーケ・データ分析", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化スクール", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/best-ai-for-marketing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">マーケ</div><div className="font-bold text-sm">マーケ向けAI</div></Link>
            <Link href="/guide/ai-content-strategy" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">マーケ</div><div className="font-bold text-sm">AIコンテンツ戦略</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
