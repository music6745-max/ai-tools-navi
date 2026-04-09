import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI医療診断支援ツール比較5選【2026年最新】Aidoc/PathAI/Tempus/Ubie/エルピクセル",
  description: "医療現場で使われるAI診断支援ツール5選を徹底比較。Aidoc・PathAI・Tempus・Ubie・エルピクセルの特徴を解説。",
  keywords: ["AI 医療診断", "Aidoc", "PathAI", "Tempus", "Ubie", "エルピクセル"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-medical-diagnosis-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI医療診断支援ツール比較5選", description: "Aidoc/PathAI/Tempus/Ubie/エルピクセル徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI医療診断比較", item: `${siteConfig.url}/guide/ai-medical-diagnosis-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI医療診断比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます ※本記事は医療助言ではありません。診断は医療機関で受けてください。</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI医療診断支援ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          画像診断・病理分析・受診相談など医療現場でAIの活用が広がっています。本記事では国内外の代表的な5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI医療診断支援ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Aidoc", badge: "画像診断", desc: "CT/MRI画像のAI解析。脳出血・肺塞栓などの緊急疾患を自動検出。世界1,000以上の病院で導入。" },
              { name: "PathAI", badge: "病理診断", desc: "病理画像のAI解析。がん検出精度の向上に貢献。" },
              { name: "Tempus", badge: "ゲノム×AI", desc: "ゲノム情報とAIで個別化医療を支援。米国の主要がんセンターで導入。" },
              { name: "Ubie", badge: "受診相談", desc: "国産の症状検索エンジン。患者向け症状チェックと医師向け問診支援を提供。" },
              { name: "エルピクセル", badge: "国産画像", desc: "日本発の医用画像解析プラットフォーム。脳MRIなどに強み。" },
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
            <p><span className="font-bold">画像診断：</span> Aidoc・エルピクセル</p>
            <p><span className="font-bold">病理診断：</span> PathAI</p>
            <p><span className="font-bold">ゲノム個別化医療：</span> Tempus</p>
            <p><span className="font-bold">患者向け受診相談：</span> Ubie</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">オンライン診療サービス</h2>
          <ComparisonTableCTA services={[
            { name: "DMMオンラインクリニック", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "DMMの低価格", price: "保険＋自由診療", badge: "人気" },
            { name: "クリニックフォア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "業界最大級", price: "保険＋自由診療" },
            { name: "ファストドクター", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "24時間対応", price: "保険診療" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">ヘルスケアAI</div></Link>
            <Link href="/guide/ai-for-elderly-care" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">高齢者ケアAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
